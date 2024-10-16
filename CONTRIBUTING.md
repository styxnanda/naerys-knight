# Contribution

## Overview

There are multiple ways you could contribute to this project. Fixing available issues on GitHub, requesting new features, giving constructive feedback, adding new features, all those count as contribution. This guide will cover your programming contributions.

## Programming

If you're willing to contribute by programming, there are 2 aspects: frontend and backend.

As reference, you could see the technologies mentioned at [README](README.md) to understand the setup of the project. For the frontend, we use PNPM, while the backend uses NPM as package manager (soon all will use PNPM). Be sure to meet the requirements.

The frontend tech stack:

- **Vite** as build tool
- **TailwindCSS** for styling
- **Zustand** for state management
- **TanStack Router** for routing
- **TanStack Query** for querying
- **Flowbite** for components
- **React Icons** for icons

The backend tech stack:

- **NestJS** as framework

## How To Contribute

Simply fork the repository so that you create your own version. Then, make a branch, please follow the [convention](#branching-convention). After making a branch, please push to that branch and then do a pull request to the original repository, requesting a merge from your local repo's branch to the original repo's main/origin branch. When committing, please follow the [committing convention](#commit-convention).

Programming style should follow the standard, such as the use of camelCase, UPPER CASE FOR CONSTANTS, no unnecessary long if-else statements, make program as modular as possible, etc. There's no dictation on how you should code as long as it is readable. If you could code tidier than me, it is most absolutely be welcome! Otherwise, please read the following resource for [convention](https://google.github.io/styleguide/tsguide.html) since we'll be using TypeScript mostly.

### Branching Convention

Branches should be named after their purpose. The purpose shall encompass a single feature or a bug you're trying to fix. For example, if you're fixing a bug related to fail axios request, name the branch as `axios-fix` or however way you see fit as long as it is descriptive. Then, write your code.

In CLI, this is how you create a branch.

```bash
git clone git@github.com/your-username/your-fork ## This may differ based on your usage
git checkout -b axios-fix ## Adjust the branch name
```

### Commit Convention

Name of commit should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard. Please read it carefully, but essentialy what it entails is that the format should be of the following.

```txt
type(scope)!: descriptive message
```

Type should refer to the type of contribution you're doing. There are 2 types commonly, `feat` and `fix`. Feat is for adding new features to the code, while fix is for fixing issues.

Scope should refer the codebase affected. It's between the three: `web`,`api`, and `utils`. Use web if you are changing frontend code. Choose api if you're changing backend code. Choose utils for anything other than web or api, for example README changes, documentation, CI/CD etc.

The exclamatory symbol (`!`) is used when you're doing code-breaking changes, such as framework changes, migration to other services, etc.

### Contributing Steps (CLI Summary)

In conclusion, this is how you do everything after forking your own version of the original repository in GitHub.

```bash
# Making a feature/fix branch
git clone git@github.com/your-username/naerys-knight # May vary
git checkout -b branch-name # Adjust branch-name

# The following command will be very different from one contributions to another
# Assume that you're changing something
vim README.md # Do code

# After code changes
git add directory-of-changes # Add your changes
git commit -m "feat(api)!: change pagination method" # Adjust commit message
git push origin branch-name # Push to your change
```

After that, just make a pull request and write down the details as explicit as possible.
