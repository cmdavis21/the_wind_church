import { SESv2Client } from '@aws-sdk/client-sesv2';
import { AWS_ACCESS_KEY, AWS_REGION, AWS_SECRET_KEY } from '../../env.client';

export const sesClient = new SESv2Client({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
  },
});
