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
# Stage the build in a throwaway repository. A nested `git init` has no
# inherited ignore rules, so every build file (including .nojekyll) is
# committed, and binary blobs already present in history are reused on push.
STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT
cp -a dist-pages/. "$STAGE/"
git -C "$STAGE" init -q
git -C "$STAGE" add -A
git -C "$STAGE" -c user.name='deploy' -c user.email='deploy@users.noreply.github.com' \
  commit -q -m 'Deploy static build to GitHub Pages'
git -C "$STAGE" push --force "$REPO_ROOT" HEAD:gh-pages
git push --force "$REMOTE" gh-pages

echo '==> Done. Site: https://axcgamestudios.github.io/SpiderMan/'
