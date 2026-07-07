import { Address, Customer } from '@/data/types';
import { CountryCode } from '../zeus';
import { ShopifyAdminQuery } from '../zeus-chain';

export const updateCustomerEmailMutation = (id: string, email: string) => {
  return ShopifyAdminQuery.mutation({
    customerUpdate: [
      {
        input: { id, email },
      },
      {
        customer: {
          id: true,
          firstName: true,
          lastName: true,
          defaultPhoneNumber: {
            phoneNumber: true,
          },
          defaultEmailAddress: {
            emailAddress: true,
          },
          defaultAddress: {
            id: true,
            firstName: true,
            lastName: true,
            address1: true,
            address2: true,
            city: true,
            province: true,
            countryCode: true,
            zip: true,
            phone: true,
          },
        },
      },
    ],
  });
};

export const updateCustomerAddressMutation = (
  customer_id: string,
  address_id: string,
  address: Partial<Address>
) => {
  return ShopifyAdminQuery.mutation({
    customerAddressUpdate: [
      {
        address: {
          firstName: address.first_name,
          lastName: address.last_name,
          address1: address.address1,
          address2: address.address2,
          city: address.city,
          province: address.state,
          countryCode: (address.country as CountryCode) ?? CountryCode.US,
          zip: address.zip,
          phone: address.phone,
        },
        addressId: address_id,
        customerId: customer_id,
        setAsDefault: true,
      },
      {
        address: {
          id: true,
          firstName: true,
          lastName: true,
          address1: true,
          address2: true,
          city: true,
          province: true,
          countryCode: true,
          zip: true,
          phone: true,
        },
      },
    ],
  });
};

export const updateCustomerEmail = async ({
  id,
  email,
}: {
  id: string;
  email: string;
}): Promise<Customer | undefined> => {
  const { customerUpdate: customer } = await updateCustomerEmailMutation(id, email);

  if (!customer) return undefined;

  return {
    customer_id: (customer.customer?.id as string) ?? '',
    first_name: customer.customer?.firstName ?? '',
    last_name: customer.customer?.lastName ?? '',
    default_email: customer.customer?.defaultEmailAddress?.emailAddress ?? '',
    default_phone: customer.customer?.defaultPhoneNumber?.phoneNumber ?? '',
    default_address: {
      address_id: (customer.customer?.defaultAddress?.id as string) ?? '',
      first_name: customer.customer?.defaultAddress?.firstName ?? '',
      last_name: customer.customer?.defaultAddress?.lastName ?? '',
      address1: customer.customer?.defaultAddress?.address1 ?? '',
      address2: customer.customer?.defaultAddress?.address2 ?? '',
      city: customer.customer?.defaultAddress?.city ?? '',
      state: customer.customer?.defaultAddress?.province ?? '',
      country: customer.customer?.defaultAddress?.countryCode ?? '',
      zip: customer.customer?.defaultAddress?.zip ?? '',
      phone: customer.customer?.defaultAddress?.phone ?? '',
    },
  };
};

export const updateCustomerAddress = async ({
  customer_id,
  address_id,
  address,
}: {
  customer_id: string;
  address_id: string;
  address: Partial<Address>;
}): Promise<Address | undefined> => {
  const { customerAddressUpdate: newAddress } = await updateCustomerAddressMutation(
    customer_id,
    address_id,
    address
  );

  if (!newAddress) return undefined;

  return {
    address_id: (newAddress.address?.id as string) ?? '',
    first_name: newAddress.address?.firstName ?? '',
    last_name: newAddress.address?.lastName ?? '',
    address1: newAddress.address?.address1 ?? '',
    address2: newAddress.address?.address2 ?? '',
    city: newAddress.address?.city ?? '',
    state: newAddress.address?.province ?? '',
    country: newAddress.address?.countryCode ?? '',
    zip: newAddress.address?.zip ?? '',
    phone: newAddress.address?.phone ?? '',
  };
};
