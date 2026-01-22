import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import { default as ImageCard } from '@/components/cards/image-card/ImageCard';
import SimpleCarousel from '@/components/carousels/simple-carousel/SimpleCarousel';
import PageHeader from '@/components/heroes/page-header/PageHeader';
import ErrorPage from '@/components/misc/error-page/ErrorPage';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import { AWS_ASSET_BASE_URL, WEBSITE_BASE_URL } from '@/data/constants';
import { PageRoutes } from '@/data/page-routes';
import { getGalleryImages } from '@/data/services/aws/s3/gallery';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Gallery' });
  const title = t('metadata.title');
  const description = t('metadata.description');
  const url = `${WEBSITE_BASE_URL}${PageRoutes.gallery}`;
  const image = `${AWS_ASSET_BASE_URL}/placeholder-media/food_bank.jpg`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

const Gallery = async () => {
  const gallery = await getGalleryImages();

  if (!gallery?.gallery) {
    return (
      <ErrorPage description="There was an issue loading the gallery. Please try again later." />
    );
  }

  return (
    <div className="px-padding flex flex-col gap-3xl lg:gap-4xl max-width-center">
      <PageHeader
        title="The Gallery"
        subtitle="View photos of great times spent together in the Wind family."
      />

      {gallery.gallery.map((category) => (
        <div key={`wind-gallery-${category.title}`} className="flex flex-col gap-xl md:gap-xxl">
          <SectionHeader title={category.title} subtitle="Select a photo and view the memories" />

          {/* Desktop */}
          <div className="hidden md:flex flex-wrap gap-lg max-lg:justify-center 2xl:px-padding">
            {category.urls.map((src) => (
              <ImageCard
                key={`wind-gallery-${src}`}
                src={src}
                alt="The Wind Church Gallery Image"
              />
            ))}
          </div>

          {/* Mobile */}
          <SimpleCarousel
            showDots={false}
            className="md:hidden"
            slides={category.urls.map((src) => (
              <ImageCard
                key={`wind-gallery-mobile-${src}`}
                src={src}
                alt="The Wind Church Gallery Image"
              />
            ))}
          />
        </div>
      ))}

      {/* PAGE SCROLL-UP BUTTON */}
      <PageScrollUpButton />
    </div>
  );
};

export default Gallery;
