import { SESv2Client } from '@aws-sdk/client-sesv2';
import { AWS_ACCESS_KEY, AWS_SECRET_KEY } from '../../env.server';

export const sesClient = new SESv2Client({
  region: 'us-east-1',
  credentials: {
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
  },
});
