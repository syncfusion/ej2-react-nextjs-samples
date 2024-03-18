#!groovy

node('EJ2Angularsbnode18') {
    try {
        deleteDir()        

        stage('Import') {
            git url: 'http://github.com/essential-studio/ej2-groovy-scripts.git', branch: 'master', credentialsId: env.GithubCredentialID;
            shared = load 'src/shared.groovy'
        }

        stage('Checkout') {
            checkout scm
        }

        stage('Install') {
            sh 'npm install'
        }

        stage('Build') {
            sh 'npm run build'
        }

        shared.gitlabCommitStatus('success')

        deleteDir()
    }
    catch(Exception e) {
        sh 'gulp ci-report-mail --option Failure'
        shared.throwError(e)
        deleteDir()        
    }
}
