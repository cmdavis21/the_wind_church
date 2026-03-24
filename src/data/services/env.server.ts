// WEBSITE
export const WEBSITE_URL = process.env.WEBSITE_URL ?? '';

// AWS
export const AWS_S3_REGION = process.env.AWS_S3_REGION ?? '';
export const AWS_SES_REGION = process.env.AWS_SES_REGION ?? '';

export const AWS_S3_BUCKET = process.env.AWS_BUCKET ?? '';
export const AWS_ASSET_URL = process.env.AWS_S3_WEBSITE_IMAGES_URL ?? '';

export const AWS_SERMON_FALLBACK_VIDEO = process.env.AWS_SERMON_FALLBACK_VIDEO ?? '';
export const AWS_SERMON_FALLBACK_POSTER = process.env.AWS_SERMON_FALLBACK_POSTER ?? '';

export const AWS_ACCESS_KEY = process.env.AWS_SES_ACCESS_KEY ?? '';
export const AWS_SECRET_KEY = process.env.AWS_SES_SECRET_ACCESS_KEY ?? '';

// YOUTUBE
export const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID ?? '';
export const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY ?? '';

// EMAILS
export const EMAIL_NO_REPLY = process.env.FROM_EMAIL ?? '';
export const EMAIL_OFFICE = process.env.OFFICE_EMAIL ?? '';

// SOCIALS
export const YOUTUBE = process.env.YOUTUBE ?? '';
export const FACEBOOK = process.env.FACEBOOK ?? '';
export const INSTAGRAM = process.env.INSTAGRAM ?? '';
export const PUSHPAY_URL = process.env.PUSHPAY ?? '';
