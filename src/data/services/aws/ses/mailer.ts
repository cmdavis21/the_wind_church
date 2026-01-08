import { SendEmailCommand } from '@aws-sdk/client-sesv2';
import * as nodemailer from 'nodemailer';
import { sesClient } from './client';

export const mailer = nodemailer.createTransport({
  SES: { sesClient, SendEmailCommand },
});
