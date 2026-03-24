import { S3Client } from '@aws-sdk/client-s3';
import { AWS_ACCESS_KEY, AWS_S3_REGION, AWS_SECRET_KEY } from '../../env.server';

export const s3Client = new S3Client({
  region: AWS_S3_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
  },
});
