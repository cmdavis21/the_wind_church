import { MutationPayload } from '@/data/types';

export type SanityTextBlock = {
  _type: string;
  children?: { text?: string }[];
};

export function portableTextToString(blocks: SanityTextBlock[] | SanityTextBlock): string {
  if (!blocks) return '';
  if (!Array.isArray(blocks)) blocks = [blocks];
  return blocks
    .map((block) =>
      block._type === 'block' && block.children
        ? block.children.map((child) => ('text' in child ? (child.text ?? '') : '')).join('')
        : ''
    )
    .join('\n');
}

export const sanityMutationBodyStructure = ({
  createReq,
  createOrReplaceReq,
  createIfNotExistsReq,
  patchReq,
  deleteReq,
  debug = false,
}: MutationPayload) => {
  const mutations: any[] = [];

  const normalize = <T>(input?: T | T[]): T[] =>
    Array.isArray(input) ? input : input ? [input] : [];

  // Create
  normalize(createReq).forEach(({ _type, data }) => {
    if (_type && data) {
      mutations.push({ create: { _type, ...data } });
    }
  });

  // Create or Replace
  normalize(createOrReplaceReq).forEach(({ _id, _type, data }) => {
    if (_type && data) {
      const mutation = { _type, ...data };
      if (_id) mutation['_id'] = _id;
      mutations.push({ createOrReplace: mutation });
    }
  });

  // Create If Not Exist
  normalize(createIfNotExistsReq).forEach(({ _id, _type, data }) => {
    if (_type && data) {
      const mutation = { _type, ...data };
      if (_id) mutation['_id'] = _id;
      mutations.push({ createOrReplace: mutation });
    }
  });

  // Patch
  normalize(patchReq).forEach(({ _id, data }) => {
    if (_id && data) {
      mutations.push({ patch: { _id, ...data } });
    }
  });

  // Delete
  normalize(deleteReq).forEach(({ _id }) => {
    if (_id) {
      mutations.push({ delete: { _id } });
    }
  });

  if (debug) {
    console.log('Sanity Mutation Body:', JSON.stringify(mutations, null, 2));
  }

  return { mutations };
};
