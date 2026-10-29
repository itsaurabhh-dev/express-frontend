pipeline {
    agent any
    triggers { githubPush() }                 // GitHub webhook trigger
    // environment { API_KEY = credentials('api-key') }   // optional: secret from Jenkins credentials
    stages {
        stage('Pull Code') {
            steps { checkout scm }
        }
        stage('Install Dependencies') {
            steps { sh 'npm install' }
        }
        stage('Test') {
            steps { sh 'npm test' }
        }
        stage('Deploy') {
            steps {
                withEnv(['JENKINS_NODE_COOKIE=dontKillMe']) {
                    sh 'pm2 delete express-frontend || true'
                    sh 'pm2 start server.js --name express-frontend'
                    sh 'pm2 save'
                }
            }
        }
    }
}
