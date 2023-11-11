# nest-with-localstack
A study application to test a file upload using a local stack that simulates an AWS S3 bucket.

### Requirements
- Docker v25.0.7+

### Running application
Just run `docker compose up`.

### Configuring Local Stack
1. `docker exec -it localstack bash`
2. create your bucket with `awslocal s3api create-bucket --bucket <BUCKET_NAME>`
3. create user with `awslocal iam create-user --username <USER_NAME>`
4. create access key with `awslocal iam create-access-key --username <USER_NAME>`

### Environment variables
Rename your `.env.example` to `.env`, and add variables from your local stack setup.

### Done!