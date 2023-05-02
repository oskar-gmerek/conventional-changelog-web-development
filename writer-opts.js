'use strict'

const compareFunc = require('compare-func')
const { readFile } = require('fs').promises
const { resolve } = require('path')

module.exports = Promise.all([
  readFile(resolve(__dirname, './templates/template.hbs'), 'utf-8'),
  readFile(resolve(__dirname, './templates/header.hbs'), 'utf-8'),
  readFile(resolve(__dirname, './templates/commit.hbs'), 'utf-8'),
  readFile(resolve(__dirname, './templates/footer.hbs'), 'utf-8')
])
  .then(([template, header, commit, footer]) => {
    const writerOpts = getWriterOpts()

    writerOpts.mainTemplate = template
    writerOpts.headerPartial = header
    writerOpts.commitPartial = commit
    writerOpts.footerPartial = footer

    return writerOpts
  })

function getWriterOpts () {
  return {
    transform: (commit, context) => {
      let discard = true
      const issues = []

      commit.notes.forEach(note => {
        note.title = 'KEY UPDATE'
        discard = false
      })

      if (commit.type === 'feat') {
        commit.type = 'Features'
      } else if (commit.type === 'fix') {
        commit.type = 'Bug Fixes'
      } else if (commit.type === 'improve') {
        commit.type = 'Code improvements'
      } else if (commit.type === 'revert' || commit.revert) {
        commit.type = 'Reverts'
      } else if (discard) {
        return
      } else if (commit.type === 'docs') {
        commit.type = 'Documentation'
      } else if (commit.type === 'test') {
        commit.type = 'Tests'
      } else if (commit.type === 'trivial') {
        commit.type = 'Routine and non-functional tasks'
      } else if (commit.type === 'deps') {
        commit.type = 'Dependencies'
      } else if (commit.type === 'i18n') {
        commit.type = 'Internationalization'
      } else if (commit.type === 'security') {
        commit.type = 'Security-related changes'
      } else if (commit.type === 'seo') {
        commit.type = 'SEO improvements and optimizations'
      } else if (commit.type === 'ops') {
        commit.type = 'DevOps'
      }

      if (commit.scope === '*') {
        commit.scope = ''
      }

      if (typeof commit.hash === 'string') {
        commit.shortHash = commit.hash.substring(0, 7)
      }

      if (typeof commit.subject === 'string') {
        let url = context.repository
          ? `${context.host}/${context.owner}/${context.repository}`
          : context.repoUrl
        if (url) {
          url = `${url}/issues/`
          // Issue URLs.
          commit.subject = commit.subject.replace(/#([0-9]+)/g, (_, issue) => {
            issues.push(issue)
            return `[#${issue}](${url}${issue})`
          })
        }
        if (context.host) {
          // User URLs.
          commit.subject = commit.subject.replace(/\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g, (_, username) => {
            if (username.includes('/')) {
              return `@${username}`
            }

            return `[@${username}](${context.host}/${username})`
          })
        }
      }

      // remove references that already appear in the subject
      commit.references = commit.references.filter(reference => {
        if (issues.indexOf(reference.issue) === -1) {
          return true
        }

        return false
      })

      return commit
    },
    groupBy: 'type',
    commitGroupsSort: 'title',
    commitsSort: ['scope', 'subject'],
    noteGroupsSort: 'title',
    notesSort: compareFunc
  }
}
