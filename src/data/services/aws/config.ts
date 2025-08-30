import { S3Client } from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

export const s3Config = () => {
  const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: fromCognitoIdentityPool({
      clientConfig: { region: process.env.AWS_REGION },
      identityPoolId: process.env.AWS_IDENTITY_POOL_ID ?? "",
    }),
  });

  return s3;
};
