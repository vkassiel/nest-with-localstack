1. create bucket: awslocal s3api create-bucket --bucket <BUCKET_NAME>
2. create user: awslocal iam create-user --user-name <NAME>
3. create-access-key: awslocal iam create-access-key --user-name <NAME>
4. list-buckets: awslocal s3api list-buckets
5. get bucket location: awslocal s3api get-bucket-location --bucket <BUCKET_NAME>
   1. Note that if the bucket is in the us-east-1 region, the LocationConstraint value will be null