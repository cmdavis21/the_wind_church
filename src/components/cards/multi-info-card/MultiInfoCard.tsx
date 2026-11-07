import CircleCheck from '@/components/icons/circle-check';
import Location from '@/components/icons/location';
import PeopleGroup from '@/components/icons/people-group';
import Video from '@/components/icons/video';
import { formatDateMMMddyyyy } from '@/data/format-date';
import { DeepDive } from '@/data/types';
import { differenceInCalendarWeeks } from 'date-fns';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { SVGAttributes } from 'react';

type TimelineType = { start_date: Date; end_date: Date };
type MeetingType = DeepDive['meeting_details'];
type ListType = string[];
type LinkType = {
  icon: React.FC<SVGAttributes<unknown>>;
  text: string;
  link: { label: string; href: string };
}[];

type Content =
  | { type: 'timeline'; data: TimelineType }
  | { type: 'meeting'; data: MeetingType }
  | { type: 'list'; data: ListType }
  | { type: 'link'; data: LinkType };

interface MultiInfoCardProps {
  label: string;
  content: Content;
}

export const MultiInfoCard: React.FC<MultiInfoCardProps> = async ({ label, content }) => {
  const t = await getTranslations('FormCommon');

  const setIcon = (type: string) => {
    switch (type) {
      case 'hybrid':
        return { label: t('attendanceType.hybrid'), Icon: PeopleGroup };
      case 'online':
        return { label: t('attendanceType.online'), Icon: Video };
      default:
        return { label: t('attendanceType.in-person'), Icon: Location };
    }
  };

  const renderContent = () => {
    switch (content.type) {
      case 'timeline':
        const start = new Date(content.data.start_date);
        const end = new Date(content.data.end_date);
        const weeks = Math.max(1, differenceInCalendarWeeks(end, start));
        return (
          <>
            <dl className="flex items-start justify-between gap-md">
              <div>
                <dt className="text-xs text-light-secondaryText dark:text-dark-primaryText/70">
                  {t('timeframe.starts')}
                </dt>
                <dd className="font-semibold">
                  <time dateTime={start.toISOString()}>{formatDateMMMddyyyy(start)}</time>
                </dd>
              </div>

              <div className="text-right">
                <dt className="text-xs text-light-secondaryText dark:text-dark-primaryText/70">
                  {t('timeframe.ends')}
                </dt>
                <dd className="font-semibold">
                  <time dateTime={end.toISOString()}>{formatDateMMMddyyyy(end)}</time>
                </dd>
              </div>
            </dl>

            {/* Decorative Timeline */}
            <div aria-hidden="true" className="relative mt-lg flex items-center">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" />
              <span className="h-px flex-1 bg-brand-primary/40 origin-left" />
              <span className="h-2.5 w-2.5 rounded-full border-2 border-brand-primary bg-light-bg dark:bg-dark-bg" />
              <span className="absolute left-1/2 -translate-x-1/2 rounded-full border border-light-gray dark:border-dark-gray bg-light-bg dark:bg-dark-bg px-3 py-0.5 text-xs font-medium">
                {weeks} {weeks === 1 ? t('timeframe.week') : t('timeframe.weeks')}
              </span>
            </div>
            <p className="sr-only">{t('timeframe.duration', { weeks })}</p>
          </>
        );

      case 'meeting':
        return (
          <ul className="flex flex-col gap-md">
            {content.data.map(({ day, time, attendance_type }) => {
              const { label, Icon } = setIcon(attendance_type);
              return (
                <li
                  key={`${day}-${time}-${attendance_type}`}
                  className="flex flex-wrap items-center justify-between gap-x-md gap-y-1"
                >
                  <p className="font-semibold capitalize">
                    {day}&nbsp;
                    <span className="font-light text-light-secondaryText dark:text-dark-primaryText/70">
                      • {time}
                    </span>
                  </p>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-medium text-brand-dark dark:text-brand-primary">
                    {Icon && <Icon className="fill-brand-primary" />}
                    {label}
                  </span>
                </li>
              );
            })}
          </ul>
        );

      case 'list':
        return (
          <ul className="flex flex-col gap-sm">
            {content.data.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CircleCheck className="mt-0.5 fill-brand-primary min-w-5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        );

      case 'link':
        return (
          <ul className="flex flex-col gap-sm">
            {content.data.map(({ icon: Icon, text, link }) => (
              <li key={text} className="flex items-start gap-2 justify-between">
                <div className="flex gap-2">
                  <Icon className="mt-0.5 fill-brand-primary min-w-5" width={20} height={20} />
                  <span>{text}</span>
                </div>
                <Link href={link.href} target="_blank" className="min-w-[65px]">
                  <div className="w-full text-center rounded-full bg-dark-navy/10 px-3 py-1 text-xs font-medium text-light-navy dark:text-dark-navy">
                    {link.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        );
    }
  };

  return (
    <section
      aria-label={label}
      className="rounded-2xl border bg-light-bg border-light-gray dark:bg-dark-gray dark:border-dark-gray p-lg shadow-sm"
    >
      <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-dark dark:text-brand-primary mb-lg">
        {label}
      </h3>

      {renderContent()}
    </section>
  );
};
