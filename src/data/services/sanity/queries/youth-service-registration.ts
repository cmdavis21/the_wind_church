import { SanityQuery } from '../zeus-chain';

export const getYouthServiceRegistrationIdByYouthNamesQuery = async (
  first_name: string,
  last_name: string
): Promise<{ _id: string } | undefined> => {
  return await SanityQuery({
    allYouthServiceRegistration: [
      { where: { first_name: { eq: first_name }, last_name: { eq: last_name } } },
      {
        _id: true,
      },
    ],
  }).then((y) =>
    y.allYouthServiceRegistration[0]
      ? (y.allYouthServiceRegistration[0] as { _id: string })
      : undefined
  );
};
