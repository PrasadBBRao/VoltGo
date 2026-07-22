# 10. Git Branching Strategy

## Recommended Branch Model

- main: production-ready and stable
- develop: active integration branch
- feature/*: new feature development
- bugfix/*: defect fixes
- hotfix/*: emergency production repairs

## Workflow

1. Create a feature branch from develop.
2. Make focused changes and commit often.
3. Open a pull request into develop.
4. Review, test, and merge.
5. Merge develop into main for release-ready changes.

## Why This Matters

A clear branching model reduces merge conflicts, improves collaboration, and keeps releases predictable.
