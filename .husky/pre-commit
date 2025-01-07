#!/bin/bash

README_PATH="docs/README.md"
MAIN_PATH="docs/Main.yml"

if [[ -f "$MAIN_PATH" ]]; then
  cp "$MAIN_PATH" "$README_PATH"
  echo "Replaced $README_PATH with $MAIN_PATH"
else
  echo "Error: $MAIN_PATH does not exist. Commit aborted."
  exit 1
fi

git add "$README_PATH"
