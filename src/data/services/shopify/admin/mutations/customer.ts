import { GET_ADMIN_CUSTOMER_KEY } from '@/data/constants';
import { Address, Customer } from '@/data/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
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
            firstName: true,
            lastName: true,
            address1: true,
            address2: true,
            city: true,
            province: true,
            country: true,
            zip: true,
          },
        },
      },
    ],
  });
};

export const updateCustomerAddressMutation = (id: string, address: Partial<Address>) => {
  return ShopifyAdminQuery.mutation({
    customerUpdateDefaultAddress: [
      {
        customerId: id,
        addressId: {
          ...address,
          __typename: 'MailingAddress',
        },
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
            firstName: true,
            lastName: true,
            address1: true,
            address2: true,
            city: true,
            province: true,
            country: true,
            zip: true,
          },
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
      first_name: customer.customer?.defaultAddress?.firstName ?? '',
      last_name: customer.customer?.defaultAddress?.lastName ?? '',
      address1: customer.customer?.defaultAddress?.address1 ?? '',
      address2: customer.customer?.defaultAddress?.address2 ?? '',
      city: customer.customer?.defaultAddress?.city ?? '',
      province: customer.customer?.defaultAddress?.province ?? '',
      country: customer.customer?.defaultAddress?.country ?? '',
      zip: customer.customer?.defaultAddress?.zip ?? '',
    },
  };
};

export const updateCustomerAddress = async ({
  id,
  address,
}: {
  id: string;
  address: Partial<Address>;
}): Promise<Customer | undefined> => {
  const { customerUpdateDefaultAddress: customer } = await updateCustomerAddressMutation(
    id,
    address
  );

  if (!customer) return undefined;

  return {
    customer_id: (customer.customer?.id as string) ?? '',
    first_name: customer.customer?.firstName ?? '',
    last_name: customer.customer?.lastName ?? '',
    default_email: customer.customer?.defaultEmailAddress?.emailAddress ?? '',
    default_phone: customer.customer?.defaultPhoneNumber?.phoneNumber ?? '',
    default_address: {
      first_name: customer.customer?.defaultAddress?.firstName ?? '',
      last_name: customer.customer?.defaultAddress?.lastName ?? '',
      address1: customer.customer?.defaultAddress?.address1 ?? '',
      address2: customer.customer?.defaultAddress?.address2 ?? '',
      city: customer.customer?.defaultAddress?.city ?? '',
      province: customer.customer?.defaultAddress?.province ?? '',
      country: customer.customer?.defaultAddress?.country ?? '',
      zip: customer.customer?.defaultAddress?.zip ?? '',
    },
  };
};

export const useUpdateCustomerEmail = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCustomerEmail,
    mutationKey: [GET_ADMIN_CUSTOMER_KEY],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_ADMIN_CUSTOMER_KEY],
      });
    },
  });
};

export const useUpdateCustomerAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCustomerAddress,
    mutationKey: [GET_ADMIN_CUSTOMER_KEY],
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_ADMIN_CUSTOMER_KEY],
      });
    },
  });
};
