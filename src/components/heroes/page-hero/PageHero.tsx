'use client';

import AnimativeFillButton from '@/components/buttons/animative-fill-button/AnimativeFillButton';
import { findMediaType, MediaType, scrollToElem } from '@/data/utils';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface HeroStat {
  value: string;
  label: string;
}

interface HeroCta {
  label: string;
  href: string;
  variant?: 'secondary' | 'teritiary';
}

interface PageHeroProps {
  title: string;
  italicSubtitle?: string;
  highlightTitle?: number[][];
  description?: string;
  size?: 'short' | 'reg' | 'full';
  media: { src: string; alt?: string; poster?: string };
  ctas?: HeroCta[];
  stats?: HeroStat[];
  scrollTo?: HeroCta;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  italicSubtitle,
  highlightTitle,
  description,
  size = 'reg',
  media,
  ctas,
  stats,
  scrollTo,
}) => {
  const titleWords = title.split(' ');
  const italicWords = italicSubtitle?.split(' ') ?? [];

  return (
    <div
      className={cn(
        size === 'short' && 'h-[60vh] xl:h-[70vh]',
        size === 'reg' && 'h-[85vh]',
        size === 'full' && 'h-[90vh] lg:h-[100vh]',
        'relative w-full overflow-hidden bg-black'
      )}
    >
      {/* BACKGROUND MEDIA */}
      {findMediaType(media.src) === MediaType.IMAGE && (
        <Image
          fill
          priority
          src={media.src}
          alt={media.alt ?? ''}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 motion-safe:animate-[heroZoom_20s_ease-out_forwards]"
        />
      )}
      {findMediaType(media.src) === MediaType.VIDEO && (
        <video
          loop
          muted
          autoPlay
          playsInline
          src={media.src}
          poster={media.poster}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
      )}

      {/* GRADIENT — heavier at bottom to anchor text, matches reference */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div
        className={cn(
          'relative z-20 w-full h-full flex flex-col justify-end',
          'py-lg sm:py-xl lg:py-4xl px-padding max-width-center'
        )}
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-xl">
          {/* LEFT: HEADLINE + COPY + CTAS */}
          <div className="max-w-full lg:max-w-[60%]">
            <h1 className="leading-[1.05] text-white text-[36px] sm:text-[52px] lg:text-[58px] font-normal max-sm:max-w-[80%]">
              <span className="flex flex-wrap gap-x-3">
                {titleWords.map((word, i) => (
                  <span
                    key={`title-${word}-${i}`}
                    className="inline-block opacity-0 translate-y-3 motion-safe:animate-[wordUp_0.7s_cubic-bezier(0.22,1,0.36,1)_forwards]"
                    style={{ animationDelay: `${0.1 + i * 0.06}s` }}
                  >
                    {highlightTitle?.some(([start, end]) => i >= start && i <= end) ? (
                      <span className="text-brand-primary font-display">{word}</span>
                    ) : (
                      word
                    )}
                  </span>
                ))}
              </span>

              {italicSubtitle && (
                <span className="flex flex-wrap gap-x-3 italic font-serif mt-1">
                  {italicWords.map((word, i) => (
                    <span
                      key={`italic-${word}-${i}`}
                      className="inline-block opacity-0 translate-y-3 motion-safe:animate-[wordUp_0.7s_cubic-bezier(0.22,1,0.36,1)_forwards]"
                      style={{
                        animationDelay: `${0.1 + (titleWords.length + i) * 0.06}s`,
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              )}
            </h1>

            {description && (
              <p
                className="mt-lg text-white/80 body-large max-w-[85%] sm:max-w-[70%] opacity-0 motion-safe:animate-[fadeIn_0.6s_ease-out_forwards]"
                style={{
                  animationDelay: `${0.1 + (titleWords.length + italicWords.length) * 0.06 + 0.15}s`,
                }}
              >
                {description}
              </p>
            )}

            {ctas && ctas.length > 0 && (
              <div
                className="mt-xl flex flex-wrap items-center gap-4 opacity-0 motion-safe:animate-[fadeIn_0.6s_ease-out_forwards]"
                style={{
                  animationDelay: `${0.1 + (titleWords.length + italicWords.length) * 0.06 + 0.3}s`,
                }}
              >
                {ctas.map((cta) => (
                  <Link key={cta.label} href={cta.href}>
                    <AnimativeFillButton size="lg" variant={cta.variant ?? 'primary'}>
                      {cta.label}
                    </AnimativeFillButton>
                  </Link>
                ))}

                {scrollTo && (
                  <AnimativeFillButton
                    size="lg"
                    variant={scrollTo.variant}
                    onClick={() => scrollToElem(scrollTo.href)}
                  >
                    {scrollTo.label}
                  </AnimativeFillButton>
                )}
              </div>
            )}
          </div>

          {/* RIGHT: STATS */}
          {stats && stats.length > 0 && (
            <dl
              className="flex gap-8 sm:gap-12 opacity-0 motion-safe:animate-[fadeIn_0.6s_ease-out_forwards]"
              style={{
                animationDelay: `${0.1 + (titleWords.length + italicWords.length) * 0.06 + 0.45}s`,
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-right">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-serif text-2xl sm:text-4xl text-white">{stat.value}</dd>
                  <dd className="mt-1 text-xs uppercase tracking-wide text-white/60">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes wordUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        @keyframes heroZoom {
          from {
            transform: scale(1.08);
          }
          to {
            transform: scale(1);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-\\[wordUp_0\\.7s_cubic-bezier\\(0\\.22\\,1\\,0\\.36\\,1\\)_forwards\\],
          .motion-safe\\:animate-\\[fadeIn_0\\.6s_ease-out_forwards\\] {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PageHero;
