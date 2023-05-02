# Web development Convention

<!-- Angular's [commit message guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit). -->

## About this preset

This preset is based on [conventional-changelog-angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular). The main goal of this is to optimize semantics for web development.

| Note |
| --- |
| This preset is still `WIP`. Any ideas, commits, and suggestions are welcome.  |

## Examples

| Tag | Description | Example | Version |
| --- | --- | --- | --- |
| `feat` | New features or functionality | `feat: account recovery form` | #.X.# |
| `fix` | Bug fixes and issue resolution | `fix: pagination next page link in blog feed` |  #.X.# |
| `improve` | Code improvements, refactoring, or formatting changes | `improve: extend navigation to reduce user fraction` | #.X.# |
| `docs` | Documentation | `docs: explain recommend system` | #.X.# |
| `test` | Test-related changes | `test: display error after wrong email input` |  #.X.# |
| `trivial` | Routine tasks or non-functional updates | `trivial: remove unused imports` |  #.X.# |
| `deps` | Dependency updates and management | `deps: bump sveltekit version to latest` |  #.X.# |
| `i18n` | Internationalization and localization | `i18n: add Polish translations` |  #.X.# |
| `security` | Security-related changes | `security: test password against hibp` |  #.X.# |
| `seo` | SEO-related improvements and optimizations | `seo: structured data for contact page` |  #.X.# |

<!-- KEY UPDATE: BREAKING CHANGES but from the business point of view. -->
<!-- ``` -->

<!-- The following commit and commit `667ecc1` do not appear in the changelog if they are under the same release. If not, the revert commit appears under the "Reverts" header. -->

<!-- ``` -->
<!-- revert: feat(pencil): add 'graphiteWidth' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02. -->
<!-- ``` -->

## Commit Message Format

A commit message consists of a **header**, **body** and **footer**.  The header has a **type**, **scope** and **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

## Revert

If the commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

## Type

If the prefix is `feat`, `fix` or `perf`, it will appear in the changelog. However if there is any [BREAKING CHANGE](#footer), the commit will always appear in the changelog.

Other prefixes are up to your discretion. Suggested prefixes are `build`, `ci`, `docs` ,`style`, `refactor`, and `test` for non-changelog related tasks.

Details regarding these types can be found in the official [Angular Contributing Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type).

## Scope

The scope could be anything specifying place of the commit change. For example `$location`,
`$browser`, `$compile`, `$rootScope`, `ngHref`, `ngClick`, `ngView`, etc...

## Subject

The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

## Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

## Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this [document](#commit-message-format).

