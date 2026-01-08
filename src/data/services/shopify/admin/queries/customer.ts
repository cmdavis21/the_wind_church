import { Customer } from '@/data/types';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { ShopifyAdminQuery } from '../zeus-chain';

const getAdminCustomerQuery = (email: string) => {
  return ShopifyAdminQuery.query({
    customerByIdentifier: [
      {
        identifier: {
          emailAddress: email,
        },
      },
      {
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
          firstName: true,
          lastName: true,
          address1: true,
          address2: true,
          city: true,
          province: true,
          country: true,
          zip: true,
        },
        numberOfOrders: true,
      },
    ],
  });
};

export const getAdminCustomer = async (email: string): Promise<Customer | undefined> => {
  const { customerByIdentifier: customer } = await getAdminCustomerQuery(email);

  if (!customer) return undefined;

  return {
    customer_id: (customer.id as string) ?? '',
    first_name: customer.firstName ?? '',
    last_name: customer.lastName ?? '',
    default_email: customer.defaultEmailAddress?.emailAddress ?? '',
    default_phone: customer.defaultPhoneNumber?.phoneNumber ?? '',
    default_address: {
      first_name: customer.defaultAddress?.firstName ?? '',
      last_name: customer.defaultAddress?.lastName ?? '',
      address1: customer.defaultAddress?.address1 ?? '',
      address2: customer.defaultAddress?.address2 ?? '',
      city: customer.defaultAddress?.city ?? '',
      province: customer.defaultAddress?.province ?? '',
      country: customer.defaultAddress?.country ?? '',
      zip: customer.defaultAddress?.zip ?? '',
    },
  };
};

export const useLookupCustomer = (
  options?: UseMutationOptions<Customer | undefined, Error, string>
) => {
  return useMutation<Customer | undefined, Error, string>({
    mutationFn: async (email) => {
      const res = await fetch('/api/customer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Customer not found');

      return res.json();
    },
    ...options,
  });
};
