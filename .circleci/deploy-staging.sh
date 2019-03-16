sh ./.circleci/install-aws.sh
npm run build
aws s3 sync ./dist s3://eivom.app.staging.com/ --delete --exclude '.git/*'