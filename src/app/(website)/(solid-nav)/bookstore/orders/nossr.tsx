'use client';

import OrderPreviewCard from '@/components/cards/order-preview-card/OrderPreviewCard';
import AddressUpdateForm from '@/components/forms/address-update-form/AddressUpdateForm';
import EmailUpdateForm from '@/components/forms/email-update-form/EmailUpdateForm';
import OrderLookupForm from '@/components/forms/orders-lookup-form/OrderLookupForm';
import PageHeaderWithBackground from '@/components/heroes/page-header-with-background/PageHeaderWithBackground';
import BoxOpen from '@/components/icons/box-open';
import User from '@/components/icons/user';
import { AWS_ASSET_BASE_URL } from '@/data/constants';
import { CustomerData } from '@/data/types';
import { TabItem, Tabs } from 'flowbite-react';
import { useState } from 'react';

const OrdersClient = () => {
  const [customerData, setCustomerData] = useState<CustomerData | undefined>(undefined);
  return (
    <div className="px-padding flex flex-col gap-xxl lg:gap-3xl max-width-center">
      <PageHeaderWithBackground
        short
        media={{
          src: `${AWS_ASSET_BASE_URL}/placeholder-media/purchase.jpg`,
          alt: 'Decorative Background Image',
          poster: '',
        }}
        title="Orders"
        subtitle="What's in the closet?"
      />

      <Tabs variant="underline">
        <TabItem disabled={!customerData} title="Orders" icon={BoxOpen}>
          {!customerData ? (
            <div className="max-w-[600px] w-full mx-auto pt-xxl">
              <OrderLookupForm returnValue={setCustomerData} />
            </div>
          ) : (
            <div className="flex flex-col gap-8 pt-5">
              {customerData?.orders.map((order) => (
                <OrderPreviewCard order={order} />
              ))}
            </div>
          )}
        </TabItem>
        <TabItem disabled={!customerData} title="Profile" icon={User}>
          {customerData && customerData.profile && (
            <div className="w-full mx-auto flex flex-col lg:flex-row gap-xl pt-5">
              <EmailUpdateForm
                customer_id={customerData.profile.customer_id}
                current_email={customerData.profile.default_email}
              />
              <AddressUpdateForm
                customer_id={customerData.profile.customer_id}
                current_address={customerData.profile.default_address}
              />
            </div>
          )}
        </TabItem>
      </Tabs>
    </div>
  );
};

export default OrdersClient;
