import { mailer } from '@/data/services/aws/ses/mailer';
import { baseTemplate, renderTemplate } from '@/data/services/aws/ses/utils';
import { EMAIL_NO_REPLY, EMAIL_OFFICE } from '@/data/services/env.server';
import { FORM_TYPES } from '@/data/types';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { formType, payload } = await req.json();

  let subject = '';
  let link = payload?.link || '#';

  switch (formType) {
    case FORM_TYPES.EVENT_RENTAL:
      subject = 'Event Rental Inquiry';
      break;

    case FORM_TYPES.GIFT_ASSESSMENT:
      subject = 'Gift Assessment';
      break;

    case FORM_TYPES.MINISTRY_CONNECTION:
      subject = 'Ministry Connection';
      break;

    case FORM_TYPES.NEXT_GEN_GUARDIAN_INQUIRY:
      subject = 'Next Gen Guardian Inquiry';
      break;

    case FORM_TYPES.PRAYER_REQUEST:
      subject = 'Prayer Request';
      break;

    case FORM_TYPES.VISITOR_FEEDBACK:
      subject = 'Visitor Feedback';
      break;

    default:
      return NextResponse.json({ error: 'Unknown form type' }, { status: 400 });
  }

  const html = renderTemplate(baseTemplate, {
    title: `New ${subject}`,
    firstName: payload.firstName,
    lastName: payload.lastName,
    link,
  });

  await mailer.sendMail({
    to: EMAIL_OFFICE,
    from: EMAIL_NO_REPLY,
    subject: `New ${subject}`,
    html,
  });

  return NextResponse.json({ success: true });
}
