// WEBSITE URLs
export const WEBSITE_BASE_URL = process.env.NEXT_PUBLIC_WEBSITE_BASEURL;
export const PUSHPAY_URL = process.env.NEXT_PUBLIC_PUSHPAY ?? '#';

// SANITY
export const SANITY_API_VERSION = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '';
export const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
export const SANITY_EDITOR_TOKEN = process.env.NEXT_PUBLIC_SANITY_EDITOR_TOKEN;
export const SANITY_GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_SANITY_GRAPHQL_API_ENDPOINT ?? '';
export const SANITY_MUTATION_API_ENDPOINT =
  process.env.NEXT_PUBLIC_SANITY_MUTATION_API_ENDPOINT ?? '#';
export const EVENT_CATEGORIES = [
  'Worship Service',
  'Prayer Meeting',
  'Bible Study',
  'Revival/Crusade',
  'Fasting & Prayer',
  'Church Fellowship',
  'Potluck / Shared Meals',
  'Game Night / Movie Night',
  'Church Picnic',
  'Small Group Gathering',
  'Community Outreach',
  'Evangelism',
  'Food / Clothing Drive',
  'Volunteer Service',
  'Youth Ministry',
  'Young Adults Fellowship',
  "Children's Church",
  'Leadership Training',
  'Discipleship Class',
  'New Members Class',
  'Ministry Workshops',
  'Sunday School',
  'Holiday Celebration',
  'Church Anniversary',
  'Fundraiser',
  'Guest Speaker / Concert',
  'Baptism / Baby Dedication',
  "Men's Ministry",
  "Women's Ministry",
  'Marriage / Couples Retreat',
  'Family Day',
];
export const LEADER_CATEGORIES = [
  'Pastoral Team',
  'Church Staff',
  'Church Council',
  'Elders',
  'Deacons and Deaconesses',
  'Ministry Directors',
  'Next Gen Educators',
  'Hospitality & Guest Experience',
  'Outreach & Evangelism',
  'Production & Media',
];

// SHOPIFY
export const SHOPIFY_STOREFRONT_API_ENDPOINT =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_ENDPOINT ?? '';
export const SHOPIFY_STOREFRONT_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN ?? '';

// AWS
export const AWS_REGION = process.env.NEXT_PUBLIC_AWS_REGION ?? '';
export const AWS_BUCKET_NAME = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME ?? '';
export const AWS_IDENTITY_POOL_ID = process.env.NEXT_PUBLIC_AWS_IDENTITY_POOL_ID ?? '';
export const AWS_ASSET_BASE_URL = process.env.NEXT_PUBLIC_AWS_ASSET_BASE_URL ?? '';
export const AWS_ACCESS_KEY = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY ?? '';
export const AWS_SECRET_KEY = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY ?? '';
export const AWS_SERMON_FALLBACK_VIDEO = process.env.NEXT_PUBLIC_AWS_SERMON_FALLBACK_VIDEO ?? '';
export const AWS_SERMON_FALLBACK_POSTER = process.env.NEXT_PUBLIC_AWS_SERMON_FALLBACK_POSTER ?? '';

// EMAILS
export const EMAIL_NO_REPLY = process.env.NEXT_PUBLIC_FROM_EMAIL ?? '';
export const EMAIL_OFFICE = process.env.NEXT_PUBLIC_OFFICE_EMAIL ?? '';

// SOCIALS
export const YOUTUBE_CHANNEL = process.env.NEXT_PUBLIC_YOUTUBE ?? '#';
export const FACEBOOK_PROFILE = process.env.NEXT_PUBLIC_FACEBOOK ?? '#';
export const INSTAGRAM_PROFILE = process.env.NEXT_PUBLIC_INSTAGRAM ?? '#';

// YOUTUBE
export const YOUTUBE_URI = process.env.NEXT_PUBLIC_YOUTUBE_API ?? '';
export const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY ?? '';
export const YOUTUBE_CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID ?? '';

// TANSTACK QUERY + MUTATION KEYS
export const GET_ALL_EVENTS = 'SANITY QUERY GET ALL EVENTS';
export const GET_ALL_LEADERS = 'SANITY QUERY GET ALL LEADERS';
export const GET_ALL_MINISTRIES = 'SANITY QUERY GET ALL MINISTRIES';
export const GET_ALL_DEEP_DIVES = 'SANITY QUERY GET ALL DEEP DIVES';
export const GET_GALLERY_KEY = 'AWS QUERY GET GALLERY IMAGES';
export const CONTACT_SIGNUP_KEY = 'SANITY MUTATION CREATE CONTACT';
export const EVENT_RENTAL_KEY = 'SANITY MUTATION CREATE EVENT RENTAL INQUIRY';
export const GIFT_ASSESSMENT_KEY = 'SANITY MUTATION CREATE GIFT ASSESSMENT';
export const MINISTRY_CONNECT_KEY = 'SANITY MUTATION CREATE MINISTRY CONNECTION';
export const PRAYER_REQUEST_KEY = 'SANITY MUTATION CREATE PRAYER REQUEST';
export const VISITOR_FEEDBACK_KEY = 'SANITY MUTATION CREATE CONTACT';
export const NEXT_GEN_GUARDIAN_KEY = 'SANITY MUTATION CREATE NEXT GEN GUARDIAN INQUIRY';
export const GET_CART_KEY = 'SHOPIFY QUERY GET CART';
export const GET_ADMIN_CUSTOMER_KEY = 'SHOPIFY QUERY GET ADMIN CUSTOMER';
export const GET_STOREFRONT_COLLECTIONS_KEY = 'SHOPIFY QUERY GET ALL COLLECTIONS';
export const GET_STOREFRONT_PRODUCTS_KEY = 'SHOPIFY QUERY GET ALL PRODUCTS';
export const GET_STOREFRONT_PRODUCT_BY_HANDLE_KEY = 'SHOPIFY QUERY GET PRODUCT BY HANDLE';
export const ADD_TO_CART_KEY = 'SHOPIFY MUTATION ADD TO CART';
export const UPDATE_CART_ITEMS_KEY = 'SHOPIFY MUTATION UPDATE CART ITEMS';
export const DELETE_CART_ITEMS_KEY = 'SHOPIFY MUTATION DELETE CART ITEMS';
