# Brainypi Projects showcase site
Site to showcase the projects on BrainyPi


## Deploying the site 

Run the commands 
```sh 
git clone https://github.com/brainypi/brainypi-projects-showcase.git
cd brainypi-projects-showcase

# Install dependencies 
pip3 install python-gitlab

# Run the script to convert gitlab comments to Showcase site
TOKEN=<your-gitlab-token> python3 scripts/md-2-mdx.py

# Commit the changes to the site
git commit -sv 

# Deploy the changes 
GIT_USER=<your-git-username> yarn deploy
```

## Deploying the the index to brainypi.com 
// TODO
