#!/usr/bin/env bash
# Build the static GitHub Pages bundle and publish it to the `gh-pages` branch.
#
# The game is a fully client-side React app, so the Pages build is a plain
# Vite client build (vite.ghpages.config.ts) that mounts app/page.tsx
# directly. GitHub Pages project sites serve from /SpiderMan/, so:
#   - framework assets use Vite `base: '/SpiderMan/'`
#   - game asset URLs are relative ('assets/...') and resolve under any base
#
# Usage: scripts/deploy-gh-pages.sh [remote]   (default remote: origin)
set -euo pipefail

REMOTE="${1:-origin}"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

echo '==> Building static bundle (dist-pages/)'
npx vite build --config vite.ghpages.config.ts

# GitHub Pages must not run Jekyll processing on the output.
touch dist-pages/.nojekyll

echo '==> Publishing dist-pages/ to the gh-pages branch'
export GIT_INDEX_FILE="$(mktemp)"
trap 'rm -f "$GIT_INDEX_FILE"' EXIT
git read-tree --empty
git -C dist-pages add -A
TREE="$(git write-tree)"
PARENT="$(git rev-parse --verify -q refs/heads/gh-pages || true)"
if [ -n "$PARENT" ]; then
  COMMIT="$(git commit-tree "$TREE" -p "$PARENT" -m 'Deploy static build to GitHub Pages')"
else
  COMMIT="$(git commit-tree "$TREE" -m 'Deploy static build to GitHub Pages')"
fi
git update-ref refs/heads/gh-pages "$COMMIT"
git push "$REMOTE" gh-pages

echo '==> Done. Site: https://axcgamestudios.github.io/SpiderMan/'
