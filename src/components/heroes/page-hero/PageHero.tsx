'use client';

import { useWindowDimensions } from '@/data/client/use-window-dimensions';
import { findMediaType, MediaType, scrollToElem } from '@/data/utils';
import cn from 'classnames';
import { Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface HeroStat {
  value: string;
  label: string;
}

interface PageHeroProps {
  title: string;
  italicSubtitle?: string;
  highlightTitle?: number[][];
  description?: string;
  size?: 'short' | 'reg' | 'full';
  media: { src: string; alt?: string; poster?: string };
  stats?: HeroStat[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  scrollToCta?: { label: string; href: string };
}

// Stagger timing (seconds)
const WORD_START = 0.1;
const WORD_STEP = 0.06;

const PageHero: React.FC<PageHeroProps> = ({
  title,
  italicSubtitle,
  highlightTitle,
  description,
  size = 'reg',
  media,
  stats,
  primaryCta,
  secondaryCta,
  scrollToCta,
}) => {
  const { width } = useWindowDimensions();

  const btnSize = width <= 640 ? 'sm' : 'lg';

  const titleWords = title.split(' ');
  const italicWords = italicSubtitle?.split(' ') ?? [];

  // When the last headline word starts; everything else fades in after it
  const wordsEnd = WORD_START + (titleWords.length + italicWords.length) * WORD_STEP;

  return (
    <div
      className={cn(
        size === 'short' && 'h-[60vh] xl:h-[70vh]',
        size === 'reg' && 'h-[85vh]',
        size === 'full' && 'h-screen md:h-[90vh] lg:h-[100vh]',
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
          className="absolute inset-0 w-full h-full object-cover object-center z-0 motion-safe:animate-hero-zoom"
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
            <h1 className="leading-[1.05] text-white text-[34px] sm:text-[52px] lg:text-[58px] font-normal max-sm:max-w-[80%]">
              <span className="flex flex-wrap gap-x-3">
                {titleWords.map((word, i) => (
                  <span
                    key={`title-${word}-${i}`}
                    className="inline-block motion-safe:animate-hero-word-up"
                    style={{ animationDelay: `${WORD_START + i * WORD_STEP}s` }}
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
                      className="inline-block motion-safe:animate-hero-word-up"
                      style={{
                        animationDelay: `${WORD_START + (titleWords.length + i) * WORD_STEP}s`,
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
                className="mt-lg text-white/80 body-large max-w-[85%] sm:max-w-[70%] motion-safe:animate-hero-fade-in"
                style={{ animationDelay: `${wordsEnd + 0.15}s` }}
              >
                {description}
              </p>
            )}

            {(primaryCta || secondaryCta || scrollToCta) && (
              <div
                className="mt-xl flex flex-wrap items-center gap-4 motion-safe:animate-hero-fade-in"
                style={{ animationDelay: `${wordsEnd + 0.3}s` }}
              >
                {primaryCta && (
                  <Link key={primaryCta.label} href={primaryCta.href}>
                    <Button pill size={btnSize} color="secondary">
                      {primaryCta.label}
                    </Button>
                  </Link>
                )}

                {secondaryCta && (
                  <Link key={secondaryCta.label} href={secondaryCta.href}>
                    <Button pill size={btnSize} color="primary">
                      {secondaryCta.label}
                    </Button>
                  </Link>
                )}

                {scrollToCta && (
                  <Button
                    pill
                    size={btnSize}
                    color="teritiary"
                    onClick={() => scrollToElem(scrollToCta.href)}
                  >
                    {scrollToCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* RIGHT: STATS */}
          {stats && stats.length > 0 && (
            <dl
              className="flex gap-8 sm:gap-12 motion-safe:animate-hero-fade-in"
              style={{ animationDelay: `${wordsEnd + 0.45}s` }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-right">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-serif text-xl sm:text-4xl text-white">{stat.value}</dd>
                  <dd className="mt-1 text-xs uppercase tracking-wide text-white/60">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHero;
