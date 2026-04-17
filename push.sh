#!/bin/bash
# Usage: ./push.sh "what you changed"
# Example: ./push.sh "updated header nav"

MSG=${1:-"update"}
git add .
git commit -m "$MSG"
git push
echo ""
echo "✓ Pushed to GitHub → Chromatic will build your preview automatically"
