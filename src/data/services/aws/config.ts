import { AWS_IDENTITY_POOL_ID, AWS_REGION } from '@/data/constants';
import { S3Client } from '@aws-sdk/client-s3';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';

export const s3Config = () => {
  const s3 = new S3Client({
    region: AWS_REGION,
    credentials: fromCognitoIdentityPool({
      clientConfig: { region: AWS_REGION },
      identityPoolId: AWS_IDENTITY_POOL_ID,
    }),
  });

  return s3;
};
