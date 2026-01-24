import { EMAIL_NO_REPLY, EMAIL_OFFICE } from '@/data/constants';
import { mailer } from '@/data/services/aws/ses/mailer';
import { baseTemplate, renderTemplate } from '@/data/services/aws/ses/utils';
import { FORM_TYPES } from '@/data/types';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { formType, payload } = await req.json();

  let subject = '';
  let title = '';
  let link = payload?.link || '#';

  switch (formType) {
    case FORM_TYPES.EVENT_RENTAL:
      subject = 'Event Rental Inquiry';
      title = 'Event Rental Inquiry';
      break;

    case FORM_TYPES.GIFT_ASSESSMENT:
      subject = 'Gift Assessment Submission';
      title = 'Gift Assessment Submission';
      break;

    case FORM_TYPES.MINISTRY_CONNECTION:
      subject = 'Ministry Connection Submission';
      title = 'Ministry Connection Submission';
      break;

    case FORM_TYPES.NEXT_GEN_SIGNUP:
      subject = 'Next Gen Roster Submission';
      title = 'Next Gen Roster Applicant';
      break;

    case FORM_TYPES.PRAYER_REQUEST:
      subject = 'Prayer Request Submission';
      title = 'Prayer Request';
      break;

    case FORM_TYPES.VISITOR_FEEDBACK:
      subject = 'Visitor Feedback';
      title = 'Visitor Feedback';
      break;

    default:
      return NextResponse.json({ error: 'Unknown form type' }, { status: 400 });
  }

  const html = renderTemplate(baseTemplate, {
    title: `New ${title}`,
    firstName: payload.firstName,
    lastName: payload.lastName,
    link,
  });

  await mailer.sendMail({
    to: EMAIL_OFFICE,
    from: EMAIL_NO_REPLY,
    subject: `New ${subject} | New Sanity.io Document`,
    html,
  });

  return NextResponse.json({ success: true });
}
