pipeline {
    agent any
    environment {
        PROJECT_NAME = 'Vaccine Management System'
        GIT_REPO = 'https://github.com/Hellrockerz/Vaccine-Management-System.git'
        BUILD_STATUS = '#'
    }
    stages {
        stage('Checkout') {
            steps {
                script {
                    try {
                        // Clone the repository
                        git url: env.GIT_REPO
                    } catch (Exception e) {
                        env.BUILD_STATUS = 'FAILURE'
                        throw e
                    }
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    try {
                        // Install project dependencies
                        sh 'yarn install'
                    } catch (Exception e) {
                        env.BUILD_STATUS = 'FAILURE'
                        throw e
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    try {
                        // Restart the application using PM2
                        sh 'sudo pm2 restart vaccine-management-system'

                        // Set the build status to SUCCESS
                        env.BUILD_STATUS = 'SUCCESS'
                    } catch (Exception e) {
                        // Set the build status to FAILURE if any command fails
                        env.BUILD_STATUS = 'FAILURE'
                        throw e
                    }
                }
            }
        }
    }
}