#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Create or switch to gh-pages branch
echo "Setting up gh-pages branch..."
git checkout -b gh-pages 2>/dev/null || git checkout gh-pages

# Remove all files except dist
echo "Cleaning gh-pages branch..."
git rm -rf . 2>/dev/null || true

# Copy dist contents to root
echo "Copying built files..."
cp -r dist/* .

# Add all files
git add .

# Commit the changes
echo "Committing built files..."
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
echo "Pushing to gh-pages branch..."
git push origin gh-pages --force

# Switch back to main branch
echo "Switching back to main branch..."
git checkout main

echo "Deployment complete! Your site should be available at:"
echo "https://[your-username].github.io/[your-repo-name]/"
