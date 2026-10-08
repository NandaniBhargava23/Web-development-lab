# Experiment 1: GitHub repository, branches, merge, and Pages
Aim: Create a GitHub repository, use a branch and merge, and publish a static page.
Resources: VS Code, Git, GitHub account, browser, HTML.
Procedure:
1. Create a GitHub repository named web-designing-lab.
2. Open this exp1-github folder in VS Code. In Terminal run the commands below. Replace YOUR-USERNAME.
   git init
   git add .
   git commit -m "Add experiment 1 webpage"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/web-designing-lab.git
   git push -u origin main
3. Create and push a branch:
   git switch -c update-homepage
   git add .
   git commit -m "Update homepage"
   git push -u origin update-homepage
4. On GitHub, open a pull request from update-homepage to main and merge it. Or merge locally using: git switch main; git merge update-homepage; git push.
5. Repository Settings → Pages → Deploy from a branch → main → /(root) → Save. Wait for the Pages URL, open it, and capture screenshots of repository, branch/merge, and live page.
Result: The static page is tracked with Git and hosted using GitHub Pages.
