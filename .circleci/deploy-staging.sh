sh ./.circleci/install-aws.sh
npm run build
aws s3 sync ./dist/eivom s3://eivom.app.staging.com/ --delete --exclude '.git/*'