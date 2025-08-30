import { ContactSchema } from './contact';
import { DeepDiveSchema } from './deep-dive';
import { EventSchema } from './event';
import { EventRentalSchema } from './event-rental';
import { GiftAssessmentSchema } from './gift-assessment';
import { LeaderSchema } from './leader';
import { MeetingDetailsSchema } from './types/meeting-details';
import { MinistrySchema } from './ministry';
import { MinistryConnectionSchema } from './ministry-connection';
import { PrayerRequestSchema } from './prayer-request';
import { RightnowMediaSchema } from './rightnow-media';
import { ScheduledVisitSchema } from './scheduled-visit';
import { TimeSchema } from './types/time';
import { VisitorFeedbackSchema } from './visitor-feedback';
import { YouthServiceSchema } from './youth-service';
import { YouthServiceRegistrationSchema } from './youth-service-registration';
import { YouthServiceRegistrationGuardianSchema } from './types/youth-service-registration-guardian';
import { ScriptureSchema } from './types/scripture';

export const SanitySchema = [
  // Forms
  EventRentalSchema,
  PrayerRequestSchema,
  RightnowMediaSchema,
  GiftAssessmentSchema,
  VisitorFeedbackSchema,
  ScheduledVisitSchema,
  MinistryConnectionSchema,
  YouthServiceRegistrationSchema,
  // Website
  ContactSchema,
  EventSchema,
  LeaderSchema,
  DeepDiveSchema,
  MinistrySchema,
  YouthServiceSchema,
  // Misc Schemas
  TimeSchema,
  ScriptureSchema,
  MeetingDetailsSchema,
  YouthServiceRegistrationGuardianSchema,
];
