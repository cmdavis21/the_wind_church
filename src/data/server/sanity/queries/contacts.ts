import { SanityQuery } from '../zeus-chain';

export const getContactIdByEmailQuery = async (
  email: string
): Promise<{ _id: string } | undefined> => {
  return await SanityQuery({
    allContact: [{ where: { email: { eq: email } } }, { _id: true }],
  }).then((c) => (c.allContact[0] ? (c.allContact[0] as { _id: string }) : undefined));
};
