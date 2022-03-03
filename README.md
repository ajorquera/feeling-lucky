# Lambda Typescript Template

This is a template repo for creating lambda functions using typescript. We are using the serverless pattern [API Gateway HTTP API to Lambda](https://serverlessland.com/patterns/apigw-lambda) using [AWS SAM](https://aws.amazon.com/es/serverless/sam/).

 It has the following features:

 * Uses typescript 
 * We use eslint for best practices
 * Uses ts-node for local development
 * Its integrated with Visual Studio Code for debugging 
 * It uses Github Actions for CI/CD workflows
 * It uses Mocha for unit testing

 After clonining this template do the following: 

 1. Set the AppName in .toml file and package.json
 2. For CD deployment into aws you will need the AWS_ACCESS_KEY_ID AWS_REGION AWS_SECRET_ACCESS_KEY
 3. Is important to take into account dependencies as lambda functions have a limit with the size amount