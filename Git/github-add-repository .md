…or create a new repository on the command line
echo "# sidebar" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:rafaeljurkfitz/sidebar.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin git@github.com:rafaeljurkfitz/sidebar.git
git branch -M main
git pull --rebase origin main
git push -u origin main