const { execSync } = require('child_process');

const projectsVersion = require('./projects-svc/package.json').version;

const tasksVersion = require('./tasks-svc/package.json').version;

// Build
execSync(`cd projects-svc && docker build . -t alombardo4/projects-svc:${projectsVersion}`, { stdio: "inherit"})
execSync(`cd tasks-svc && docker build . -t alombardo4/tasks-svc:${tasksVersion}`, { stdio: "inherit"})

// Tag
execSync(`cd projects-svc && docker tag alombardo4/projects-svc:${projectsVersion} alombardo4/projects-svc:latest`, {stdio: "inherit"})
execSync(`cd tasks-svc && docker tag alombardo4/tasks-svc:${tasksVersion} alombardo4/tasks-svc:latest`, {stdio: "inherit"})

// Push
execSync(`docker push alombardo4/projects-svc`, {stdio: 'inherit'})
execSync(`docker push alombardo4/tasks-svc`, {stdio: 'inherit'})