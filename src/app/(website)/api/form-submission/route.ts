import { mailer } from '@/data/services/aws/ses/mailer';
import { baseTemplate, renderTemplate } from '@/data/services/aws/ses/utils';
import { FORM_TYPES } from '@/data/types';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { formType, payload } = await req.json();

  const officeEmail = process.env.OFFICE_EMAIL;
  const fromEmail = process.env.FROM_EMAIL;

  let subject = '';
  let title = '';
  let link = payload?.link || '#';

  switch (formType) {
    case FORM_TYPES.EVENT_RENTAL:
      subject = 'Event Rental Inquiry';
      title = 'New Event Rental Submission';
      break;

    case FORM_TYPES.CONTACT_SIGNUP:
      subject = 'Contact Added!';
      title = 'New Contact Signup';
      break;

    case FORM_TYPES.GIFT_ASSESSMENT:
      subject = 'Gift Assessment Submission';
      title = 'New Gift Assessment';
      break;

    case FORM_TYPES.MINISTRY_CONNECTION:
      subject = 'Ministry Connection Submission';
      title = 'New Ministry Connection';
      break;

    case FORM_TYPES.NEXT_GEN_SIGNUP:
      subject = 'Next Gen Roster Submission';
      title = 'New Next Gen Roster Applicant';
      break;

    case FORM_TYPES.PLAN_YOUR_VISIT:
      subject = 'Visitor Coming!';
      title = 'New Visitor Coming!';
      break;

    case FORM_TYPES.PRAYER_REQUEST:
      subject = 'Prayer Request Submission';
      title = 'New Prayer Request';
      break;

    case FORM_TYPES.RIGHTNOW_MEDIA:
      subject = 'RightNow Media Signup Request';
      title = 'New RightNow Media Signup Request';
      break;

    case FORM_TYPES.VISITOR_FEEDBACK:
      subject = 'Visitor Feedback';
      title = 'New Visitor Feedback';
      break;

    default:
      return NextResponse.json({ error: 'Unknown form type' }, { status: 400 });
  }

  const html = renderTemplate(baseTemplate, {
    title,
    firstName: payload.firstName,
    lastName: payload.lastName,
    link,
  });

  await mailer.sendMail({
    to: officeEmail,
    from: fromEmail,
    subject: `New ${subject} | New Sanity.io Document`,
    html,
  });

  return NextResponse.json({ success: true });
}
