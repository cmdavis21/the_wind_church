import React, { useState } from 'react';
import LinkIcon from '../icons/link';
import Tag from '../icons/tag';
import X from '../icons/x';

interface ShopifyDocumentStatusProps {
  isActive?: boolean;
  isDeleted: boolean;
  type: 'collection' | 'product' | 'productVariant';
  url: string;
  title: string;
}

const ShopifyDocumentStatus = React.forwardRef<HTMLDivElement, ShopifyDocumentStatusProps>(
  ({ isActive, isDeleted, type, url, title, ...rest }, ref) => {
    const [imageVisible, setImageVisible] = useState(true);

    // Hide image on error / 404
    const handleImageError = () => setImageVisible(false);

    return (
      <div
        ref={ref}
        style={{
          alignItems: 'center',
          borderRadius: 'inherit',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        {imageVisible && url ? (
          <img
            onError={handleImageError}
            src={`${url}&width=400`}
            style={{
              height: '100%',
              left: 0,
              objectFit: 'contain',
              position: 'absolute',
              top: 0,
              width: '100%',
            }}
            alt={`${title} preview`}
          />
        ) : (
          <div style={{ position: 'absolute' }}>
            <Tag />
          </div>
        )}

        {/* Item has been deleted */}
        {isDeleted ? (
          <X fill="#FFF" className="relative w-full h-full" />
        ) : (
          <>
            {/* Products only: item is no longer active */}
            {type === 'product' && !isActive && (
              <LinkIcon fill="#FFF" className="relative w-full h-full" />
            )}
          </>
        )}
      </div>
    );
  }
);

export default ShopifyDocumentStatus;
