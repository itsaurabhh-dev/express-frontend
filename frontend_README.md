# Express Frontend

Simple Express app that shows a message fetched from the Flask backend.
Deployed on AWS EC2 with a Jenkins CI/CD pipeline.

Runs on port **3000**. Backend URL is set with `BACKEND_URL` (default `http://localhost:5000`).

## Run locally
```bash
npm install
npm start
```
Open http://localhost:3000 (start the Flask backend first).


## Deploy on EC2 (manual)
```bash
git clone https://github.com/itsaurabhh-dev/express-frontend.git
cd express-frontend
npm install
pm2 start server.js
```

## CI/CD (Jenkins)
`Jenkinsfile` build every time there is a push in the GitHub.

Jenkins is installed on the same EC2 instance, on port 8080.
