import { SanityQuery } from '../zeus-chain';

export const getNextGenRosterSignupRecordIdByYouthNamesQuery = async (
  first_name: string,
  last_name: string
): Promise<{ _id: string } | undefined> => {
  return await SanityQuery({
    allNextGenRosterSignup: [
      { where: { first_name: { eq: first_name }, last_name: { eq: last_name } } },
      {
        _id: true,
      },
    ],
  }).then((y) =>
    y.allNextGenRosterSignup[0] ? (y.allNextGenRosterSignup[0] as { _id: string }) : undefined
  );
};
