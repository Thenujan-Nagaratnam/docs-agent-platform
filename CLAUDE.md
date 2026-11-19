# docs-agent-platform

Docusaurus source for the WSO2 Agent Manager documentation. The product itself lives in [wso2/agent-manager](https://github.com/wso2/agent-manager); this repo only describes it.

## Documentation tasks

Use the `docs` skill (`.claude/skills/docs/`) for every documentation task: creating a page, writing or updating content, checking, style review, technical verification, CLI reference updates, and pre-merge review. Invoke it as `/docs <action> [path]` or just describe the task.

Any technical claim must be verified against the `wso2/agent-manager` source, never written from memory. `.claude/skills/docs/source.md` explains how to find a local checkout (the `AGENT_MANAGER_REPO` env var, an `am` git remote, or `../agent-manager`) and where each feature is implemented.

## Layout

This branch (`agent-management-cloud`) holds the Agent Manager Cloud docs only, served at `/agent-platform/docs/cloud/`. Cloud is always the latest, so the docs are not versioned. The self-hosted docs (Next and the releases) are on `main`; AI Gateway and AI Workspace are on their own branches (`ai-gateway-<v>`, `agent-control-plane-<v>`).

- `docs/`: the Cloud docs.
- `sidebars.ts`: explicit sidebar; every new page must be added here.

## Commands

```bash
npm ci          # install
npm run start   # dev server on :3000
npm run build   # production build; fails on broken links (same as CI)
```
