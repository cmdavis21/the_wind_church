/* eslint-disable */

import { AllTypesProps, ReturnTypes, Ops } from './const';
export const HOST = "https://pyayajuh.api.sanity.io/v2025-03-04/graphql/production/default"


export const HEADERS = {}
export const apiSubscription = (options: chainOptions) => (query: string) => {
  try {
    const queryString = options[0] + '?query=' + encodeURIComponent(query);
    const wsString = queryString.replace('http', 'ws');
    const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
    const webSocketOptions = options[1]?.websocket || [host];
    const ws = new WebSocket(...webSocketOptions);
    return {
      ws,
      on: (e: (args: any) => void) => {
        ws.onmessage = (event: any) => {
          if (event.data) {
            const parsed = JSON.parse(event.data);
            const data = parsed.data;
            return e(data);
          }
        };
      },
      off: (e: (args: any) => void) => {
        ws.onclose = e;
      },
      error: (e: (args: any) => void) => {
        ws.onerror = e;
      },
      open: (e: () => void) => {
        ws.onopen = e;
      },
    };
  } catch {
    throw new Error('No websockets implemented');
  }
};
const handleFetchResponse = (response: Response): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response
        .text()
        .then((text) => {
          try {
            reject(JSON.parse(text));
          } catch (err) {
            reject(text);
          }
        })
        .catch(reject);
    });
  }
  return response.json() as Promise<GraphQLResponse>;
};

export const apiFetch =
  (options: fetchOptions) =>
  (query: string, variables: Record<string, unknown> = {}) => {
    const fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      return fetch(`${options[0]}?query=${encodeURIComponent(query)}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetch(`${options[0]}`, {
      body: JSON.stringify({ query, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      ...fetchOptions,
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };

export const InternalsBuildQuery = ({
  ops,
  props,
  returns,
  options,
  scalars,
}: {
  props: AllTypesPropsType;
  returns: ReturnTypesType;
  ops: Operations;
  options?: OperationOptions;
  scalars?: ScalarDefinition;
}) => {
  const ibb = (
    k: string,
    o: InputValueType | VType,
    p = '',
    root = true,
    vars: Array<{ name: string; graphQLType: string }> = [],
  ): string => {
    const keyForPath = purifyGraphQLKey(k);
    const newPath = [p, keyForPath].join(SEPARATOR);
    if (!o) {
      return '';
    }
    if (typeof o === 'boolean' || typeof o === 'number') {
      return k;
    }
    if (typeof o === 'string') {
      return `${k} ${o}`;
    }
    if (Array.isArray(o)) {
      const args = InternalArgsBuilt({
        props,
        returns,
        ops,
        scalars,
        vars,
      })(o[0], newPath);
      return `${ibb(args ? `${k}(${args})` : k, o[1], p, false, vars)}`;
    }
    if (k === '__alias') {
      return Object.entries(o)
        .map(([alias, objectUnderAlias]) => {
          if (typeof objectUnderAlias !== 'object' || Array.isArray(objectUnderAlias)) {
            throw new Error(
              'Invalid alias it should be __alias:{ YOUR_ALIAS_NAME: { OPERATION_NAME: { ...selectors }}}',
            );
          }
          const operationName = Object.keys(objectUnderAlias)[0];
          const operation = objectUnderAlias[operationName];
          return ibb(`${alias}:${operationName}`, operation, p, false, vars);
        })
        .join('\n');
    }
    const hasOperationName = root && options?.operationName ? ' ' + options.operationName : '';
    const keyForDirectives = o.__directives ?? '';
    const query = `{${Object.entries(o)
      .filter(([k]) => k !== '__directives')
      .map((e) => ibb(...e, [p, `field<>${keyForPath}`].join(SEPARATOR), false, vars))
      .join('\n')}}`;
    if (!root) {
      return `${k} ${keyForDirectives}${hasOperationName} ${query}`;
    }
    const varsString = vars.map((v) => `${v.name}: ${v.graphQLType}`).join(', ');
    return `${k} ${keyForDirectives}${hasOperationName}${varsString ? `(${varsString})` : ''} ${query}`;
  };
  return ibb;
};

type UnionOverrideKeys<T, U> = Omit<T, keyof U> & U;

export const Thunder =
  <SCLR extends ScalarDefinition>(fn: FetchFunction, thunderGraphQLOptions?: ThunderGraphQLOptions<SCLR>) =>
  <O extends keyof typeof Ops, OVERRIDESCLR extends SCLR, R extends keyof ValueTypes = GenericOperation<O>>(
    operation: O,
    graphqlOptions?: ThunderGraphQLOptions<OVERRIDESCLR>,
  ) =>
  <Z extends ValueTypes[R]>(
    o: Z & {
      [P in keyof Z]: P extends keyof ValueTypes[R] ? Z[P] : never;
    },
    ops?: OperationOptions & { variables?: Record<string, unknown> },
  ) => {
    const options = {
      ...thunderGraphQLOptions,
      ...graphqlOptions,
    };
    return fn(
      Zeus(operation, o, {
        operationOptions: ops,
        scalars: options?.scalars,
      }),
      ops?.variables,
    ).then((data) => {
      if (options?.scalars) {
        return decodeScalarsInResponse({
          response: data,
          initialOp: operation,
          initialZeusQuery: o as VType,
          returns: ReturnTypes,
          scalars: options.scalars,
          ops: Ops,
        });
      }
      return data;
    }) as Promise<InputType<GraphQLTypes[R], Z, UnionOverrideKeys<SCLR, OVERRIDESCLR>>>;
  };

export const Chain = (...options: chainOptions) => Thunder(apiFetch(options));

export const SubscriptionThunder =
  <SCLR extends ScalarDefinition>(fn: SubscriptionFunction, thunderGraphQLOptions?: ThunderGraphQLOptions<SCLR>) =>
  <O extends keyof typeof Ops, OVERRIDESCLR extends SCLR, R extends keyof ValueTypes = GenericOperation<O>>(
    operation: O,
    graphqlOptions?: ThunderGraphQLOptions<OVERRIDESCLR>,
  ) =>
  <Z extends ValueTypes[R]>(
    o: Z & {
      [P in keyof Z]: P extends keyof ValueTypes[R] ? Z[P] : never;
    },
    ops?: OperationOptions & { variables?: ExtractVariables<Z> },
  ) => {
    const options = {
      ...thunderGraphQLOptions,
      ...graphqlOptions,
    };
    type CombinedSCLR = UnionOverrideKeys<SCLR, OVERRIDESCLR>;
    const returnedFunction = fn(
      Zeus(operation, o, {
        operationOptions: ops,
        scalars: options?.scalars,
      }),
    ) as SubscriptionToGraphQL<Z, GraphQLTypes[R], CombinedSCLR>;
    if (returnedFunction?.on && options?.scalars) {
      const wrapped = returnedFunction.on;
      returnedFunction.on = (fnToCall: (args: InputType<GraphQLTypes[R], Z, CombinedSCLR>) => void) =>
        wrapped((data: InputType<GraphQLTypes[R], Z, CombinedSCLR>) => {
          if (options?.scalars) {
            return fnToCall(
              decodeScalarsInResponse({
                response: data,
                initialOp: operation,
                initialZeusQuery: o as VType,
                returns: ReturnTypes,
                scalars: options.scalars,
                ops: Ops,
              }),
            );
          }
          return fnToCall(data);
        });
    }
    return returnedFunction;
  };

export const Subscription = (...options: chainOptions) => SubscriptionThunder(apiSubscription(options));
export const Zeus = <
  Z extends ValueTypes[R],
  O extends keyof typeof Ops,
  R extends keyof ValueTypes = GenericOperation<O>,
>(
  operation: O,
  o: Z,
  ops?: {
    operationOptions?: OperationOptions;
    scalars?: ScalarDefinition;
  },
) =>
  InternalsBuildQuery({
    props: AllTypesProps,
    returns: ReturnTypes,
    ops: Ops,
    options: ops?.operationOptions,
    scalars: ops?.scalars,
  })(operation, o as VType);

export const ZeusSelect = <T>() => ((t: unknown) => t) as SelectionFunction<T>;

export const Selector = <T extends keyof ValueTypes>(key: T) => key && ZeusSelect<ValueTypes[T]>();

export const TypeFromSelector = <T extends keyof ValueTypes>(key: T) => key && ZeusSelect<ValueTypes[T]>();
export const Gql = Chain(HOST, {
  headers: {
    'Content-Type': 'application/json',
    ...HEADERS,
  },
});

export const ZeusScalars = ZeusSelect<ScalarCoders>();

type BaseSymbol = number | string | undefined | boolean | null;

type ScalarsSelector<T, V> = {
  [X in Required<{
    [P in keyof T]: P extends keyof V
      ? V[P] extends Array<any> | undefined
        ? never
        : T[P] extends BaseSymbol | Array<BaseSymbol>
        ? P
        : never
      : never;
  }>[keyof T]]: true;
};

export const fields = <T extends keyof ModelTypes>(k: T) => {
  const t = ReturnTypes[k];
  const fnType = k in AllTypesProps ? AllTypesProps[k as keyof typeof AllTypesProps] : undefined;
  const hasFnTypes = typeof fnType === 'object' ? fnType : undefined;
  const o = Object.fromEntries(
    Object.entries(t)
      .filter(([k, value]) => {
        const isFunctionType = hasFnTypes && k in hasFnTypes && !!hasFnTypes[k as keyof typeof hasFnTypes];
        if (isFunctionType) return false;
        const isReturnType = ReturnTypes[value as string];
        if (!isReturnType) return true;
        if (typeof isReturnType !== 'string') return false;
        if (isReturnType.startsWith('scalar.')) {
          return true;
        }
        return false;
      })
      .map(([key]) => [key, true as const]),
  );
  return o as ScalarsSelector<ModelTypes[T], T extends keyof ValueTypes ? ValueTypes[T] : never>;
};

export const decodeScalarsInResponse = <O extends Operations>({
  response,
  scalars,
  returns,
  ops,
  initialZeusQuery,
  initialOp,
}: {
  ops: O;
  response: any;
  returns: ReturnTypesType;
  scalars?: Record<string, ScalarResolver | undefined>;
  initialOp: keyof O;
  initialZeusQuery: InputValueType | VType;
}) => {
  if (!scalars) {
    return response;
  }
  const builder = PrepareScalarPaths({
    ops,
    returns,
  });

  const scalarPaths = builder(initialOp as string, ops[initialOp], initialZeusQuery);
  if (scalarPaths) {
    const r = traverseResponse({ scalarPaths, resolvers: scalars })(initialOp as string, response, [ops[initialOp]]);
    return r;
  }
  return response;
};

export const traverseResponse = ({
  resolvers,
  scalarPaths,
}: {
  scalarPaths: { [x: string]: `scalar.${string}` };
  resolvers: {
    [x: string]: ScalarResolver | undefined;
  };
}) => {
  const ibb = (k: string, o: InputValueType | VType, p: string[] = []): unknown => {
    if (Array.isArray(o)) {
      return o.map((eachO) => ibb(k, eachO, p));
    }
    if (o == null) {
      return o;
    }
    const scalarPathString = p.join(SEPARATOR);
    const currentScalarString = scalarPaths[scalarPathString];
    if (currentScalarString) {
      const currentDecoder = resolvers[currentScalarString.split('.')[1]]?.decode;
      if (currentDecoder) {
        return currentDecoder(o);
      }
    }
    if (typeof o === 'boolean' || typeof o === 'number' || typeof o === 'string' || !o) {
      return o;
    }
    const entries = Object.entries(o).map(([k, v]) => [k, ibb(k, v, [...p, purifyGraphQLKey(k)])] as const);
    const objectFromEntries = entries.reduce<Record<string, unknown>>((a, [k, v]) => {
      a[k] = v;
      return a;
    }, {});
    return objectFromEntries;
  };
  return ibb;
};

export type AllTypesPropsType = {
  [x: string]:
    | undefined
    | `scalar.${string}`
    | 'enum'
    | {
        [x: string]:
          | undefined
          | string
          | {
              [x: string]: string | undefined;
            };
      };
};

export type ReturnTypesType = {
  [x: string]:
    | {
        [x: string]: string | undefined;
      }
    | `scalar.${string}`
    | undefined;
};
export type InputValueType = {
  [x: string]: undefined | boolean | string | number | [any, undefined | boolean | InputValueType] | InputValueType;
};
export type VType =
  | undefined
  | boolean
  | string
  | number
  | [any, undefined | boolean | InputValueType]
  | InputValueType;

export type PlainType = boolean | number | string | null | undefined;
export type ZeusArgsType =
  | PlainType
  | {
      [x: string]: ZeusArgsType;
    }
  | Array<ZeusArgsType>;

export type Operations = Record<string, string>;

export type VariableDefinition = {
  [x: string]: unknown;
};

export const SEPARATOR = '|';

export type fetchOptions = Parameters<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (...args: infer R) => WebSocket ? R : never;
export type chainOptions = [fetchOptions[0], fetchOptions[1] & { websocket?: websocketOptions }] | [fetchOptions[0]];
export type FetchFunction = (query: string, variables?: Record<string, unknown>) => Promise<any>;
export type SubscriptionFunction = (query: string) => any;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export type OperationOptions = {
  operationName?: string;
};

export type ScalarCoder = Record<string, (s: unknown) => string>;

export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
export class GraphQLError extends Error {
  constructor(public response: GraphQLResponse) {
    super('');
    console.error(response);
  }
  toString() {
    return 'GraphQL Response Error';
  }
}
export type GenericOperation<O> = O extends keyof typeof Ops ? typeof Ops[O] : never;
export type ThunderGraphQLOptions<SCLR extends ScalarDefinition> = {
  scalars?: SCLR | ScalarCoders;
};

const ExtractScalar = (mappedParts: string[], returns: ReturnTypesType): `scalar.${string}` | undefined => {
  if (mappedParts.length === 0) {
    return;
  }
  const oKey = mappedParts[0];
  const returnP1 = returns[oKey];
  if (typeof returnP1 === 'object') {
    const returnP2 = returnP1[mappedParts[1]];
    if (returnP2) {
      return ExtractScalar([returnP2, ...mappedParts.slice(2)], returns);
    }
    return undefined;
  }
  return returnP1 as `scalar.${string}` | undefined;
};

export const PrepareScalarPaths = ({ ops, returns }: { returns: ReturnTypesType; ops: Operations }) => {
  const ibb = (
    k: string,
    originalKey: string,
    o: InputValueType | VType,
    p: string[] = [],
    pOriginals: string[] = [],
    root = true,
  ): { [x: string]: `scalar.${string}` } | undefined => {
    if (!o) {
      return;
    }
    if (typeof o === 'boolean' || typeof o === 'number' || typeof o === 'string') {
      const extractionArray = [...pOriginals, originalKey];
      const isScalar = ExtractScalar(extractionArray, returns);
      if (isScalar?.startsWith('scalar')) {
        const partOfTree = {
          [[...p, k].join(SEPARATOR)]: isScalar,
        };
        return partOfTree;
      }
      return {};
    }
    if (Array.isArray(o)) {
      return ibb(k, k, o[1], p, pOriginals, false);
    }
    if (k === '__alias') {
      return Object.entries(o)
        .map(([alias, objectUnderAlias]) => {
          if (typeof objectUnderAlias !== 'object' || Array.isArray(objectUnderAlias)) {
            throw new Error(
              'Invalid alias it should be __alias:{ YOUR_ALIAS_NAME: { OPERATION_NAME: { ...selectors }}}',
            );
          }
          const operationName = Object.keys(objectUnderAlias)[0];
          const operation = objectUnderAlias[operationName];
          return ibb(alias, operationName, operation, p, pOriginals, false);
        })
        .reduce((a, b) => ({
          ...a,
          ...b,
        }));
    }
    const keyName = root ? ops[k] : k;
    return Object.entries(o)
      .filter(([k]) => k !== '__directives')
      .map(([k, v]) => {
        // Inline fragments shouldn't be added to the path as they aren't a field
        const isInlineFragment = originalKey.match(/^...\s*on/) != null;
        return ibb(
          k,
          k,
          v,
          isInlineFragment ? p : [...p, purifyGraphQLKey(keyName || k)],
          isInlineFragment ? pOriginals : [...pOriginals, purifyGraphQLKey(originalKey)],
          false,
        );
      })
      .reduce((a, b) => ({
        ...a,
        ...b,
      }));
  };
  return ibb;
};

export const purifyGraphQLKey = (k: string) => k.replace(/\([^)]*\)/g, '').replace(/^[^:]*\:/g, '');

const mapPart = (p: string) => {
  const [isArg, isField] = p.split('<>');
  if (isField) {
    return {
      v: isField,
      __type: 'field',
    } as const;
  }
  return {
    v: isArg,
    __type: 'arg',
  } as const;
};

type Part = ReturnType<typeof mapPart>;

export const ResolveFromPath = (props: AllTypesPropsType, returns: ReturnTypesType, ops: Operations) => {
  const ResolvePropsType = (mappedParts: Part[]) => {
    const oKey = ops[mappedParts[0].v];
    const propsP1 = oKey ? props[oKey] : props[mappedParts[0].v];
    if (propsP1 === 'enum' && mappedParts.length === 1) {
      return 'enum';
    }
    if (typeof propsP1 === 'string' && propsP1.startsWith('scalar.') && mappedParts.length === 1) {
      return propsP1;
    }
    if (typeof propsP1 === 'object') {
      if (mappedParts.length < 2) {
        return 'not';
      }
      const propsP2 = propsP1[mappedParts[1].v];
      if (typeof propsP2 === 'string') {
        return rpp(
          `${propsP2}${SEPARATOR}${mappedParts
            .slice(2)
            .map((mp) => mp.v)
            .join(SEPARATOR)}`,
        );
      }
      if (typeof propsP2 === 'object') {
        if (mappedParts.length < 3) {
          return 'not';
        }
        const propsP3 = propsP2[mappedParts[2].v];
        if (propsP3 && mappedParts[2].__type === 'arg') {
          return rpp(
            `${propsP3}${SEPARATOR}${mappedParts
              .slice(3)
              .map((mp) => mp.v)
              .join(SEPARATOR)}`,
          );
        }
      }
    }
  };
  const ResolveReturnType = (mappedParts: Part[]) => {
    if (mappedParts.length === 0) {
      return 'not';
    }
    const oKey = ops[mappedParts[0].v];
    const returnP1 = oKey ? returns[oKey] : returns[mappedParts[0].v];
    if (typeof returnP1 === 'object') {
      if (mappedParts.length < 2) return 'not';
      const returnP2 = returnP1[mappedParts[1].v];
      if (returnP2) {
        return rpp(
          `${returnP2}${SEPARATOR}${mappedParts
            .slice(2)
            .map((mp) => mp.v)
            .join(SEPARATOR)}`,
        );
      }
    }
  };
  const rpp = (path: string): 'enum' | 'not' | `scalar.${string}` => {
    const parts = path.split(SEPARATOR).filter((l) => l.length > 0);
    const mappedParts = parts.map(mapPart);
    const propsP1 = ResolvePropsType(mappedParts);
    if (propsP1) {
      return propsP1;
    }
    const returnP1 = ResolveReturnType(mappedParts);
    if (returnP1) {
      return returnP1;
    }
    return 'not';
  };
  return rpp;
};

export const InternalArgsBuilt = ({
  props,
  ops,
  returns,
  scalars,
  vars,
}: {
  props: AllTypesPropsType;
  returns: ReturnTypesType;
  ops: Operations;
  scalars?: ScalarDefinition;
  vars: Array<{ name: string; graphQLType: string }>;
}) => {
  const arb = (a: ZeusArgsType, p = '', root = true): string => {
    if (typeof a === 'string') {
      if (a.startsWith(START_VAR_NAME)) {
        const [varName, graphQLType] = a.replace(START_VAR_NAME, '$').split(GRAPHQL_TYPE_SEPARATOR);
        const v = vars.find((v) => v.name === varName);
        if (!v) {
          vars.push({
            name: varName,
            graphQLType,
          });
        } else {
          if (v.graphQLType !== graphQLType) {
            throw new Error(
              `Invalid variable exists with two different GraphQL Types, "${v.graphQLType}" and ${graphQLType}`,
            );
          }
        }
        return varName;
      }
    }
    const checkType = ResolveFromPath(props, returns, ops)(p);
    if (checkType.startsWith('scalar.')) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, ...splittedScalar] = checkType.split('.');
      const scalarKey = splittedScalar.join('.');
      return (scalars?.[scalarKey]?.encode?.(a) as string) || JSON.stringify(a);
    }
    if (Array.isArray(a)) {
      return `[${a.map((arr) => arb(arr, p, false)).join(', ')}]`;
    }
    if (typeof a === 'string') {
      if (checkType === 'enum') {
        return a;
      }
      return `${JSON.stringify(a)}`;
    }
    if (typeof a === 'object') {
      if (a === null) {
        return `null`;
      }
      const returnedObjectString = Object.entries(a)
        .filter(([, v]) => typeof v !== 'undefined')
        .map(([k, v]) => `${k}: ${arb(v, [p, k].join(SEPARATOR), false)}`)
        .join(',\n');
      if (!root) {
        return `{${returnedObjectString}}`;
      }
      return returnedObjectString;
    }
    return `${a}`;
  };
  return arb;
};

export const resolverFor = <X, T extends keyof ResolverInputTypes, Z extends keyof ResolverInputTypes[T]>(
  type: T,
  field: Z,
  fn: (
    args: Required<ResolverInputTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> | X : never,
) => fn as (args?: any, source?: any) => ReturnType<typeof fn>;

export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<UnwrapPromise<ReturnType<T>>>;
export type ZeusHook<
  T extends (...args: any[]) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>,
> = ZeusState<ReturnType<T>[N]>;

export type WithTypeNameValue<T> = T & {
  __typename?: boolean;
  __directives?: string;
};
export type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
export type ScalarDefinition = Record<string, ScalarResolver>;

type IsScalar<S, SCLR extends ScalarDefinition> = S extends 'scalar' & { name: infer T }
  ? T extends keyof SCLR
    ? SCLR[T]['decode'] extends (s: unknown) => unknown
      ? ReturnType<SCLR[T]['decode']>
      : unknown
    : unknown
  : S extends Array<infer R>
  ? Array<IsScalar<R, SCLR>>
  : S;

type IsArray<T, U, SCLR extends ScalarDefinition> = T extends Array<infer R>
  ? InputType<R, U, SCLR>[]
  : InputType<T, U, SCLR>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;
type BaseZeusResolver = boolean | 1 | string | Variable<any, string>;

type IsInterfaced<SRC extends DeepAnify<DST>, DST, SCLR extends ScalarDefinition> = FlattenArray<SRC> extends
  | ZEUS_INTERFACES
  | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends '__union' & infer R
        ? P extends keyof DST
          ? IsArray<R, '__typename' extends keyof DST ? DST[P] & { __typename: true } : DST[P], SCLR>
          : IsArray<R, '__typename' extends keyof DST ? { __typename: true } : Record<string, never>, SCLR>
        : never;
    }[keyof SRC] & {
      [P in keyof Omit<
        Pick<
          SRC,
          {
            [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
          }[keyof DST]
        >,
        '__typename'
      >]: IsPayLoad<DST[P]> extends BaseZeusResolver ? IsScalar<SRC[P], SCLR> : IsArray<SRC[P], DST[P], SCLR>;
    }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends BaseZeusResolver
        ? IsScalar<SRC[P], SCLR>
        : IsArray<SRC[P], DST[P], SCLR>;
    };

export type MapType<SRC, DST, SCLR extends ScalarDefinition> = SRC extends DeepAnify<DST>
  ? IsInterfaced<SRC, DST, SCLR>
  : never;
// eslint-disable-next-line @typescript-eslint/ban-types
export type InputType<SRC, DST, SCLR extends ScalarDefinition = {}> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P], SCLR>[keyof MapType<SRC, R[P], SCLR>];
    } & MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>, SCLR>
  : MapType<SRC, IsPayLoad<DST>, SCLR>;
export type SubscriptionToGraphQL<Z, T, SCLR extends ScalarDefinition> = {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z, SCLR>) => void) => void;
  off: (fn: (e: { data?: InputType<T, Z, SCLR>; code?: number; reason?: string; message?: string }) => void) => void;
  error: (fn: (e: { data?: InputType<T, Z, SCLR>; errors?: string[] }) => void) => void;
  open: () => void;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type FromSelector<SELECTOR, NAME extends keyof GraphQLTypes, SCLR extends ScalarDefinition = {}> = InputType<
  GraphQLTypes[NAME],
  SELECTOR,
  SCLR
>;

export type ScalarResolver = {
  encode?: (s: unknown) => string;
  decode?: (s: unknown) => unknown;
};

export type SelectionFunction<V> = <Z extends V>(
  t: Z & {
    [P in keyof Z]: P extends keyof V ? Z[P] : never;
  },
) => Z;

type BuiltInVariableTypes = {
  ['String']: string;
  ['Int']: number;
  ['Float']: number;
  ['Boolean']: boolean;
};
type AllVariableTypes = keyof BuiltInVariableTypes | keyof ZEUS_VARIABLES;
type VariableRequired<T extends string> = `${T}!` | T | `[${T}]` | `[${T}]!` | `[${T}!]` | `[${T}!]!`;
type VR<T extends string> = VariableRequired<VariableRequired<T>>;

export type GraphQLVariableType = VR<AllVariableTypes>;

type ExtractVariableTypeString<T extends string> = T extends VR<infer R1>
  ? R1 extends VR<infer R2>
    ? R2 extends VR<infer R3>
      ? R3 extends VR<infer R4>
        ? R4 extends VR<infer R5>
          ? R5
          : R4
        : R3
      : R2
    : R1
  : T;

type DecomposeType<T, Type> = T extends `[${infer R}]`
  ? Array<DecomposeType<R, Type>> | undefined
  : T extends `${infer R}!`
  ? NonNullable<DecomposeType<R, Type>>
  : Type | undefined;

type ExtractTypeFromGraphQLType<T extends string> = T extends keyof ZEUS_VARIABLES
  ? ZEUS_VARIABLES[T]
  : T extends keyof BuiltInVariableTypes
  ? BuiltInVariableTypes[T]
  : any;

export type GetVariableType<T extends string> = DecomposeType<
  T,
  ExtractTypeFromGraphQLType<ExtractVariableTypeString<T>>
>;

type UndefinedKeys<T> = {
  [K in keyof T]-?: T[K] extends NonNullable<T[K]> ? never : K;
}[keyof T];

type WithNullableKeys<T> = Pick<T, UndefinedKeys<T>>;
type WithNonNullableKeys<T> = Omit<T, UndefinedKeys<T>>;

type OptionalKeys<T> = {
  [P in keyof T]?: T[P];
};

export type WithOptionalNullables<T> = OptionalKeys<WithNullableKeys<T>> & WithNonNullableKeys<T>;

export type ComposableSelector<T extends keyof ValueTypes> = ReturnType<SelectionFunction<ValueTypes[T]>>;

export type Variable<T extends GraphQLVariableType, Name extends string> = {
  ' __zeus_name': Name;
  ' __zeus_type': T;
};

export type ExtractVariablesDeep<Query> = Query extends Variable<infer VType, infer VName>
  ? { [key in VName]: GetVariableType<VType> }
  : Query extends string | number | boolean | Array<string | number | boolean>
  ? // eslint-disable-next-line @typescript-eslint/ban-types
    {}
  : UnionToIntersection<{ [K in keyof Query]: WithOptionalNullables<ExtractVariablesDeep<Query[K]>> }[keyof Query]>;

export type ExtractVariables<Query> = Query extends Variable<infer VType, infer VName>
  ? { [key in VName]: GetVariableType<VType> }
  : Query extends [infer Inputs, infer Outputs]
  ? ExtractVariablesDeep<Inputs> & ExtractVariables<Outputs>
  : Query extends string | number | boolean | Array<string | number | boolean>
  ? // eslint-disable-next-line @typescript-eslint/ban-types
    {}
  : UnionToIntersection<{ [K in keyof Query]: WithOptionalNullables<ExtractVariables<Query[K]>> }[keyof Query]>;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

export const START_VAR_NAME = `$ZEUS_VAR`;
export const GRAPHQL_TYPE_SEPARATOR = `__$GRAPHQL__`;

export const $ = <Type extends GraphQLVariableType, Name extends string>(name: Name, graphqlType: Type) => {
  return (START_VAR_NAME + name + GRAPHQL_TYPE_SEPARATOR + graphqlType) as unknown as Variable<Type, Name>;
};
type ZEUS_INTERFACES = GraphQLTypes["Document"]
export type ScalarCoders = {
	DateTime?: ScalarResolver;
	Date?: ScalarResolver;
	JSON?: ScalarResolver;
	ID?: ScalarResolver;
}
type ZEUS_UNIONS = never

export type ValueTypes = {
    ["RootQuery"]: AliasType<{
SanityImageAsset?: [{	/** SanityImageAsset document ID */
	id: ValueTypes["ID"] | Variable<any, string>},ValueTypes["SanityImageAsset"]],
SanityFileAsset?: [{	/** SanityFileAsset document ID */
	id: ValueTypes["ID"] | Variable<any, string>},ValueTypes["SanityFileAsset"]],
EventRental?: [{	/** EventRental document ID */
	id: ValueTypes["ID"] | Variable<any, string>},ValueTypes["EventRental"]],
PrayerRequest?: [{	/** PrayerRequest document ID */
	id: ValueTypes["ID"] | Variable<any, string>},ValueTypes["PrayerRequest"]],
RightnowMedia?: [{	/** RightnowMedia document ID */
	id: ValueTypes["ID"] | Variable<any, string>},ValueTypes["RightnowMedia"]],
GiftAssessment?: [{	/** GiftAssessment document ID */
	id: ValueTypes["ID"] | Variable<any, string>},ValueTypes["GiftAssessment"]],
VisitorFeedback?: [{	/** VisitorFeedback document ID */
	id: ValueTypes["ID"] | Variable<any, string>},ValueTypes["VisitorFeedback"]],
ScheduledVisit?: [{	/** ScheduledVisit document ID */
	id: ValueTypes["ID"] | Variable<any, string>},ValueTypes["ScheduledVisit"]],
MinistryConnection?: [{	/** MinistryConnection document ID */
	id: ValueTypes["ID"] | Variable<any, string>},ValueTypes["MinistryConnection"]],
NextGenRosterSignup?: [{	/** NextGenRosterSignup document ID */
	id: ValueTypes["ID"] | Variable<any, string>},ValueTypes["NextGenRosterSignup"]],
Contact?: [{	/** Contact document ID */
	id: ValueTypes["ID"] | Variable<any, string>},ValueTypes["Contact"]],
Event?: [{	/** Event document ID */
	id: ValueTypes["ID"] | Variable<any, string>},ValueTypes["Event"]],
Leader?: [{	/** Leader document ID */
	id: ValueTypes["ID"] | Variable<any, string>},ValueTypes["Leader"]],
DeepDive?: [{	/** DeepDive document ID */
	id: ValueTypes["ID"] | Variable<any, string>},ValueTypes["DeepDive"]],
Ministry?: [{	/** Ministry document ID */
	id: ValueTypes["ID"] | Variable<any, string>},ValueTypes["Ministry"]],
NextGenPage?: [{	/** NextGenPage document ID */
	id: ValueTypes["ID"] | Variable<any, string>},ValueTypes["NextGenPage"]],
Product?: [{	/** Product document ID */
	id: ValueTypes["ID"] | Variable<any, string>},ValueTypes["Product"]],
Document?: [{	/** Document document ID */
	id: ValueTypes["ID"] | Variable<any, string>},ValueTypes["Document"]],
allSanityImageAsset?: [{	where?: ValueTypes["SanityImageAssetFilter"] | undefined | null | Variable<any, string>,	sort?: Array<ValueTypes["SanityImageAssetSorting"]> | undefined | null | Variable<any, string>,	/** Max documents to return */
	limit?: number | undefined | null | Variable<any, string>,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null | Variable<any, string>},ValueTypes["SanityImageAsset"]],
allSanityFileAsset?: [{	where?: ValueTypes["SanityFileAssetFilter"] | undefined | null | Variable<any, string>,	sort?: Array<ValueTypes["SanityFileAssetSorting"]> | undefined | null | Variable<any, string>,	/** Max documents to return */
	limit?: number | undefined | null | Variable<any, string>,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null | Variable<any, string>},ValueTypes["SanityFileAsset"]],
allEventRental?: [{	where?: ValueTypes["EventRentalFilter"] | undefined | null | Variable<any, string>,	sort?: Array<ValueTypes["EventRentalSorting"]> | undefined | null | Variable<any, string>,	/** Max documents to return */
	limit?: number | undefined | null | Variable<any, string>,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null | Variable<any, string>},ValueTypes["EventRental"]],
allPrayerRequest?: [{	where?: ValueTypes["PrayerRequestFilter"] | undefined | null | Variable<any, string>,	sort?: Array<ValueTypes["PrayerRequestSorting"]> | undefined | null | Variable<any, string>,	/** Max documents to return */
	limit?: number | undefined | null | Variable<any, string>,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null | Variable<any, string>},ValueTypes["PrayerRequest"]],
allRightnowMedia?: [{	where?: ValueTypes["RightnowMediaFilter"] | undefined | null | Variable<any, string>,	sort?: Array<ValueTypes["RightnowMediaSorting"]> | undefined | null | Variable<any, string>,	/** Max documents to return */
	limit?: number | undefined | null | Variable<any, string>,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null | Variable<any, string>},ValueTypes["RightnowMedia"]],
allGiftAssessment?: [{	where?: ValueTypes["GiftAssessmentFilter"] | undefined | null | Variable<any, string>,	sort?: Array<ValueTypes["GiftAssessmentSorting"]> | undefined | null | Variable<any, string>,	/** Max documents to return */
	limit?: number | undefined | null | Variable<any, string>,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null | Variable<any, string>},ValueTypes["GiftAssessment"]],
allVisitorFeedback?: [{	where?: ValueTypes["VisitorFeedbackFilter"] | undefined | null | Variable<any, string>,	sort?: Array<ValueTypes["VisitorFeedbackSorting"]> | undefined | null | Variable<any, string>,	/** Max documents to return */
	limit?: number | undefined | null | Variable<any, string>,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null | Variable<any, string>},ValueTypes["VisitorFeedback"]],
allScheduledVisit?: [{	where?: ValueTypes["ScheduledVisitFilter"] | undefined | null | Variable<any, string>,	sort?: Array<ValueTypes["ScheduledVisitSorting"]> | undefined | null | Variable<any, string>,	/** Max documents to return */
	limit?: number | undefined | null | Variable<any, string>,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null | Variable<any, string>},ValueTypes["ScheduledVisit"]],
allMinistryConnection?: [{	where?: ValueTypes["MinistryConnectionFilter"] | undefined | null | Variable<any, string>,	sort?: Array<ValueTypes["MinistryConnectionSorting"]> | undefined | null | Variable<any, string>,	/** Max documents to return */
	limit?: number | undefined | null | Variable<any, string>,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null | Variable<any, string>},ValueTypes["MinistryConnection"]],
allNextGenRosterSignup?: [{	where?: ValueTypes["NextGenRosterSignupFilter"] | undefined | null | Variable<any, string>,	sort?: Array<ValueTypes["NextGenRosterSignupSorting"]> | undefined | null | Variable<any, string>,	/** Max documents to return */
	limit?: number | undefined | null | Variable<any, string>,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null | Variable<any, string>},ValueTypes["NextGenRosterSignup"]],
allContact?: [{	where?: ValueTypes["ContactFilter"] | undefined | null | Variable<any, string>,	sort?: Array<ValueTypes["ContactSorting"]> | undefined | null | Variable<any, string>,	/** Max documents to return */
	limit?: number | undefined | null | Variable<any, string>,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null | Variable<any, string>},ValueTypes["Contact"]],
allEvent?: [{	where?: ValueTypes["EventFilter"] | undefined | null | Variable<any, string>,	sort?: Array<ValueTypes["EventSorting"]> | undefined | null | Variable<any, string>,	/** Max documents to return */
	limit?: number | undefined | null | Variable<any, string>,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null | Variable<any, string>},ValueTypes["Event"]],
allLeader?: [{	where?: ValueTypes["LeaderFilter"] | undefined | null | Variable<any, string>,	sort?: Array<ValueTypes["LeaderSorting"]> | undefined | null | Variable<any, string>,	/** Max documents to return */
	limit?: number | undefined | null | Variable<any, string>,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null | Variable<any, string>},ValueTypes["Leader"]],
allDeepDive?: [{	where?: ValueTypes["DeepDiveFilter"] | undefined | null | Variable<any, string>,	sort?: Array<ValueTypes["DeepDiveSorting"]> | undefined | null | Variable<any, string>,	/** Max documents to return */
	limit?: number | undefined | null | Variable<any, string>,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null | Variable<any, string>},ValueTypes["DeepDive"]],
allMinistry?: [{	where?: ValueTypes["MinistryFilter"] | undefined | null | Variable<any, string>,	sort?: Array<ValueTypes["MinistrySorting"]> | undefined | null | Variable<any, string>,	/** Max documents to return */
	limit?: number | undefined | null | Variable<any, string>,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null | Variable<any, string>},ValueTypes["Ministry"]],
allNextGenPage?: [{	where?: ValueTypes["NextGenPageFilter"] | undefined | null | Variable<any, string>,	sort?: Array<ValueTypes["NextGenPageSorting"]> | undefined | null | Variable<any, string>,	/** Max documents to return */
	limit?: number | undefined | null | Variable<any, string>,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null | Variable<any, string>},ValueTypes["NextGenPage"]],
allProduct?: [{	where?: ValueTypes["ProductFilter"] | undefined | null | Variable<any, string>,	sort?: Array<ValueTypes["ProductSorting"]> | undefined | null | Variable<any, string>,	/** Max documents to return */
	limit?: number | undefined | null | Variable<any, string>,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null | Variable<any, string>},ValueTypes["Product"]],
allDocument?: [{	where?: ValueTypes["DocumentFilter"] | undefined | null | Variable<any, string>,	sort?: Array<ValueTypes["DocumentSorting"]> | undefined | null | Variable<any, string>,	/** Max documents to return */
	limit?: number | undefined | null | Variable<any, string>,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null | Variable<any, string>},ValueTypes["Document"]],
		__typename?: boolean | `@${string}`
}>;
	["SanityImageAsset"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	originalFilename?:boolean | `@${string}`,
	label?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
	description?:boolean | `@${string}`,
	altText?:boolean | `@${string}`,
	sha1hash?:boolean | `@${string}`,
	extension?:boolean | `@${string}`,
	mimeType?:boolean | `@${string}`,
	size?:boolean | `@${string}`,
	assetId?:boolean | `@${string}`,
	uploadId?:boolean | `@${string}`,
	path?:boolean | `@${string}`,
	url?:boolean | `@${string}`,
	metadata?:ValueTypes["SanityImageMetadata"],
	source?:ValueTypes["SanityAssetSourceData"],
		__typename?: boolean | `@${string}`
}>;
	/** A Sanity document */
["Document"]:AliasType<{
		/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`;
		['...on SanityImageAsset']?: Omit<ValueTypes["SanityImageAsset"],keyof ValueTypes["Document"]>;
		['...on SanityFileAsset']?: Omit<ValueTypes["SanityFileAsset"],keyof ValueTypes["Document"]>;
		['...on EventRental']?: Omit<ValueTypes["EventRental"],keyof ValueTypes["Document"]>;
		['...on Contact']?: Omit<ValueTypes["Contact"],keyof ValueTypes["Document"]>;
		['...on PrayerRequest']?: Omit<ValueTypes["PrayerRequest"],keyof ValueTypes["Document"]>;
		['...on RightnowMedia']?: Omit<ValueTypes["RightnowMedia"],keyof ValueTypes["Document"]>;
		['...on GiftAssessment']?: Omit<ValueTypes["GiftAssessment"],keyof ValueTypes["Document"]>;
		['...on VisitorFeedback']?: Omit<ValueTypes["VisitorFeedback"],keyof ValueTypes["Document"]>;
		['...on ScheduledVisit']?: Omit<ValueTypes["ScheduledVisit"],keyof ValueTypes["Document"]>;
		['...on MinistryConnection']?: Omit<ValueTypes["MinistryConnection"],keyof ValueTypes["Document"]>;
		['...on NextGenRosterSignup']?: Omit<ValueTypes["NextGenRosterSignup"],keyof ValueTypes["Document"]>;
		['...on Event']?: Omit<ValueTypes["Event"],keyof ValueTypes["Document"]>;
		['...on Leader']?: Omit<ValueTypes["Leader"],keyof ValueTypes["Document"]>;
		['...on Ministry']?: Omit<ValueTypes["Ministry"],keyof ValueTypes["Document"]>;
		['...on DeepDive']?: Omit<ValueTypes["DeepDive"],keyof ValueTypes["Document"]>;
		['...on NextGenPage']?: Omit<ValueTypes["NextGenPage"],keyof ValueTypes["Document"]>;
		['...on Product']?: Omit<ValueTypes["Product"],keyof ValueTypes["Document"]>;
		__typename?: boolean | `@${string}`
}>;
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
["DateTime"]:unknown;
	["SanityImageMetadata"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	location?:ValueTypes["Geopoint"],
	dimensions?:ValueTypes["SanityImageDimensions"],
	palette?:ValueTypes["SanityImagePalette"],
	lqip?:boolean | `@${string}`,
	blurHash?:boolean | `@${string}`,
	hasAlpha?:boolean | `@${string}`,
	isOpaque?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Geopoint"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	lat?:boolean | `@${string}`,
	lng?:boolean | `@${string}`,
	alt?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["SanityImageDimensions"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	height?:boolean | `@${string}`,
	width?:boolean | `@${string}`,
	aspectRatio?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["SanityImagePalette"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	darkMuted?:ValueTypes["SanityImagePaletteSwatch"],
	lightVibrant?:ValueTypes["SanityImagePaletteSwatch"],
	darkVibrant?:ValueTypes["SanityImagePaletteSwatch"],
	vibrant?:ValueTypes["SanityImagePaletteSwatch"],
	dominant?:ValueTypes["SanityImagePaletteSwatch"],
	lightMuted?:ValueTypes["SanityImagePaletteSwatch"],
	muted?:ValueTypes["SanityImagePaletteSwatch"],
		__typename?: boolean | `@${string}`
}>;
	["SanityImagePaletteSwatch"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	background?:boolean | `@${string}`,
	foreground?:boolean | `@${string}`,
	population?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["SanityAssetSourceData"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	/** A canonical name for the source this asset is originating from */
	name?:boolean | `@${string}`,
	/** The unique ID for the asset within the originating source so you can programatically find back to it */
	id?:boolean | `@${string}`,
	/** A URL to find more information about this asset in the originating source */
	url?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["SanityFileAsset"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	originalFilename?:boolean | `@${string}`,
	label?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
	description?:boolean | `@${string}`,
	altText?:boolean | `@${string}`,
	sha1hash?:boolean | `@${string}`,
	extension?:boolean | `@${string}`,
	mimeType?:boolean | `@${string}`,
	size?:boolean | `@${string}`,
	assetId?:boolean | `@${string}`,
	uploadId?:boolean | `@${string}`,
	path?:boolean | `@${string}`,
	url?:boolean | `@${string}`,
	source?:ValueTypes["SanityAssetSourceData"],
		__typename?: boolean | `@${string}`
}>;
	["EventRental"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	contact?:ValueTypes["Contact"],
	purpose_for_rental?:boolean | `@${string}`,
	describe_your_event?:boolean | `@${string}`,
	phone?:boolean | `@${string}`,
	email?:boolean | `@${string}`,
	company_name?:boolean | `@${string}`,
	company_phone?:boolean | `@${string}`,
	referred?:boolean | `@${string}`,
	referred_by?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Contact"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	first_name?:boolean | `@${string}`,
	last_name?:boolean | `@${string}`,
	phone?:boolean | `@${string}`,
	email?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["PrayerRequest"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	contact?:ValueTypes["Contact"],
	request_email_back?:boolean | `@${string}`,
	request?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["RightnowMedia"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	contact?:ValueTypes["Contact"],
	wind_member?:boolean | `@${string}`,
	has_access?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["GiftAssessment"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	contact?:ValueTypes["Contact"],
	dominate_gifts?:boolean | `@${string}`,
	subordinate_gifts?:boolean | `@${string}`,
	ministries_involved_in?:boolean | `@${string}`,
	change_in_ministry?:boolean | `@${string}`,
	lay_or_clergy?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["VisitorFeedback"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	contact?:ValueTypes["Contact"],
	feedback?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["ScheduledVisit"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	contact?:ValueTypes["Contact"],
	attendance?:boolean | `@${string}`,
	day_of_visit?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["MinistryConnection"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	contact?:ValueTypes["Contact"],
	ministry_interests?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["NextGenRosterSignup"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	first_name?:boolean | `@${string}`,
	last_name?:boolean | `@${string}`,
	age?:boolean | `@${string}`,
	grade?:boolean | `@${string}`,
	gender?:boolean | `@${string}`,
	hobbies?:boolean | `@${string}`,
	allergies?:boolean | `@${string}`,
	guardians?:ValueTypes["NextGenRosterSignupGuardian"],
		__typename?: boolean | `@${string}`
}>;
	["NextGenRosterSignupGuardian"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	contact?:ValueTypes["Contact"],
	relationship_to_child?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Event"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	name?:boolean | `@${string}`,
	/** Describe the event. */
	description?:boolean | `@${string}`,
	date?:boolean | `@${string}`,
	time?:ValueTypes["TimeType"],
	categories?:boolean | `@${string}`,
	image?:ValueTypes["Image"],
	/** Where is the event happening. */
	location?:boolean | `@${string}`,
	/** Instructions for how to join/participate in this event. */
	how_to_signup?:boolean | `@${string}`,
	/** Instructions for who to contact regarding this event. */
	contact?:ValueTypes["Leader"],
	/** Select if a Ministry is the organizer/host for this event. */
	ministry_event?:ValueTypes["Ministry"],
	/** Is there an external organization/host for this event? */
	external_host?:boolean | `@${string}`,
	help_needed?:boolean | `@${string}`,
	/** Are there any costs associated with participation in this event? (e.g., $40.00 per Adult ticket) */
	cost?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	/** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
["Date"]:unknown;
	["TimeType"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	hour?:boolean | `@${string}`,
	minute?:boolean | `@${string}`,
	time_of_day?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Image"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	asset?:ValueTypes["SanityImageAsset"],
	media?:ValueTypes["GlobalDocumentReference"],
	hotspot?:ValueTypes["SanityImageHotspot"],
	crop?:ValueTypes["SanityImageCrop"],
		__typename?: boolean | `@${string}`
}>;
	["GlobalDocumentReference"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	_ref?:boolean | `@${string}`,
	_weak?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["SanityImageHotspot"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	x?:boolean | `@${string}`,
	y?:boolean | `@${string}`,
	height?:boolean | `@${string}`,
	width?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["SanityImageCrop"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	top?:boolean | `@${string}`,
	bottom?:boolean | `@${string}`,
	left?:boolean | `@${string}`,
	right?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Leader"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	contact?:ValueTypes["Contact"],
	/** The official position assigned to the Leader. */
	position?:boolean | `@${string}`,
	/** Select a category this leader belongs to (if they fit more than one; select their primary role). */
	category?:boolean | `@${string}`,
	/** Describe the Leader's personailty, goals, and aspirations (3-7 sentences). */
	description?:boolean | `@${string}`,
	roles?:boolean | `@${string}`,
	image?:ValueTypes["Image"],
	video?:ValueTypes["File"],
		__typename?: boolean | `@${string}`
}>;
	["File"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	asset?:ValueTypes["SanityFileAsset"],
	media?:ValueTypes["GlobalDocumentReference"],
		__typename?: boolean | `@${string}`
}>;
	["Ministry"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	name?:boolean | `@${string}`,
	slug?:ValueTypes["Slug"],
	scripture?:ValueTypes["Scripture"],
	descriptionRaw?:boolean | `@${string}`,
	coordinators?:ValueTypes["Leader"],
	/** Select the coach for this ministry. */
	coach?:ValueTypes["Leader"],
	image?:ValueTypes["Image"],
	meeting_details?:ValueTypes["MeetingDetailsType"],
		__typename?: boolean | `@${string}`
}>;
	["Slug"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	current?:boolean | `@${string}`,
	source?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Scripture"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	passage?:boolean | `@${string}`,
	verse?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
["JSON"]:unknown;
	["MeetingDetailsType"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	day?:boolean | `@${string}`,
	time?:ValueTypes["TimeType"],
	location?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["DeepDive"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	name?:boolean | `@${string}`,
	slug?:ValueTypes["Slug"],
	descriptionRaw?:boolean | `@${string}`,
	instructors?:ValueTypes["Leader"],
	image?:ValueTypes["Image"],
	start_date?:boolean | `@${string}`,
	end_date?:boolean | `@${string}`,
	required_materials?:boolean | `@${string}`,
	meeting_details?:ValueTypes["MeetingDetailsType"],
	/** Is this deep dive actively accepting new Students? */
	accepting_new_students?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["NextGenPage"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	educators?:ValueTypes["Leader"],
	cirriculum_file?:ValueTypes["File"],
		__typename?: boolean | `@${string}`
}>;
	["Product"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["SanityImageAssetFilter"]: {
	/** Apply filters on document level */
	_?: ValueTypes["Sanity_DocumentFilter"] | undefined | null | Variable<any, string>,
	_id?: ValueTypes["IDFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	originalFilename?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	label?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	altText?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	sha1hash?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	extension?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	mimeType?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	size?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>,
	assetId?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	uploadId?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	path?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	url?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	metadata?: ValueTypes["SanityImageMetadataFilter"] | undefined | null | Variable<any, string>,
	source?: ValueTypes["SanityAssetSourceDataFilter"] | undefined | null | Variable<any, string>
};
	["Sanity_DocumentFilter"]: {
	/** All documents referencing the given document ID. */
	references?: ValueTypes["ID"] | undefined | null | Variable<any, string>,
	/** All documents that are drafts. */
	is_draft?: boolean | undefined | null | Variable<any, string>
};
	["IDFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: ValueTypes["ID"] | undefined | null | Variable<any, string>,
	/** Checks if the value is not equal to the given input. */
	neq?: ValueTypes["ID"] | undefined | null | Variable<any, string>,
	/** Checks if the value matches the given word/words. */
	matches?: ValueTypes["ID"] | undefined | null | Variable<any, string>,
	in?: Array<ValueTypes["ID"]> | undefined | null | Variable<any, string>,
	nin?: Array<ValueTypes["ID"]> | undefined | null | Variable<any, string>
};
	["StringFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: string | undefined | null | Variable<any, string>,
	/** Checks if the value is not equal to the given input. */
	neq?: string | undefined | null | Variable<any, string>,
	/** Checks if the value matches the given word/words. */
	matches?: string | undefined | null | Variable<any, string>,
	in?: Array<string> | undefined | null | Variable<any, string>,
	nin?: Array<string> | undefined | null | Variable<any, string>,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null | Variable<any, string>
};
	["DatetimeFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: ValueTypes["DateTime"] | undefined | null | Variable<any, string>,
	/** Checks if the value is not equal to the given input. */
	neq?: ValueTypes["DateTime"] | undefined | null | Variable<any, string>,
	/** Checks if the value is greater than the given input. */
	gt?: ValueTypes["DateTime"] | undefined | null | Variable<any, string>,
	/** Checks if the value is greater than or equal to the given input. */
	gte?: ValueTypes["DateTime"] | undefined | null | Variable<any, string>,
	/** Checks if the value is lesser than the given input. */
	lt?: ValueTypes["DateTime"] | undefined | null | Variable<any, string>,
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: ValueTypes["DateTime"] | undefined | null | Variable<any, string>,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null | Variable<any, string>
};
	["FloatFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: number | undefined | null | Variable<any, string>,
	/** Checks if the value is not equal to the given input. */
	neq?: number | undefined | null | Variable<any, string>,
	/** Checks if the value is greater than the given input. */
	gt?: number | undefined | null | Variable<any, string>,
	/** Checks if the value is greater than or equal to the given input. */
	gte?: number | undefined | null | Variable<any, string>,
	/** Checks if the value is lesser than the given input. */
	lt?: number | undefined | null | Variable<any, string>,
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: number | undefined | null | Variable<any, string>,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null | Variable<any, string>
};
	["SanityImageMetadataFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	location?: ValueTypes["GeopointFilter"] | undefined | null | Variable<any, string>,
	dimensions?: ValueTypes["SanityImageDimensionsFilter"] | undefined | null | Variable<any, string>,
	palette?: ValueTypes["SanityImagePaletteFilter"] | undefined | null | Variable<any, string>,
	lqip?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	blurHash?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	hasAlpha?: ValueTypes["BooleanFilter"] | undefined | null | Variable<any, string>,
	isOpaque?: ValueTypes["BooleanFilter"] | undefined | null | Variable<any, string>
};
	["GeopointFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	lat?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>,
	lng?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>,
	alt?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>
};
	["SanityImageDimensionsFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	height?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>,
	width?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>,
	aspectRatio?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>
};
	["SanityImagePaletteFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	darkMuted?: ValueTypes["SanityImagePaletteSwatchFilter"] | undefined | null | Variable<any, string>,
	lightVibrant?: ValueTypes["SanityImagePaletteSwatchFilter"] | undefined | null | Variable<any, string>,
	darkVibrant?: ValueTypes["SanityImagePaletteSwatchFilter"] | undefined | null | Variable<any, string>,
	vibrant?: ValueTypes["SanityImagePaletteSwatchFilter"] | undefined | null | Variable<any, string>,
	dominant?: ValueTypes["SanityImagePaletteSwatchFilter"] | undefined | null | Variable<any, string>,
	lightMuted?: ValueTypes["SanityImagePaletteSwatchFilter"] | undefined | null | Variable<any, string>,
	muted?: ValueTypes["SanityImagePaletteSwatchFilter"] | undefined | null | Variable<any, string>
};
	["SanityImagePaletteSwatchFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	background?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	foreground?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	population?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["BooleanFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: boolean | undefined | null | Variable<any, string>,
	/** Checks if the value is not equal to the given input. */
	neq?: boolean | undefined | null | Variable<any, string>,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null | Variable<any, string>
};
	["SanityAssetSourceDataFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	name?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	id?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	url?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["SanityImageAssetSorting"]: {
	_id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	originalFilename?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	label?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	altText?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	sha1hash?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	extension?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	mimeType?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	size?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	assetId?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	uploadId?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	path?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	url?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	metadata?: ValueTypes["SanityImageMetadataSorting"] | undefined | null | Variable<any, string>,
	source?: ValueTypes["SanityAssetSourceDataSorting"] | undefined | null | Variable<any, string>
};
	["SortOrder"]:SortOrder;
	["SanityImageMetadataSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	location?: ValueTypes["GeopointSorting"] | undefined | null | Variable<any, string>,
	dimensions?: ValueTypes["SanityImageDimensionsSorting"] | undefined | null | Variable<any, string>,
	palette?: ValueTypes["SanityImagePaletteSorting"] | undefined | null | Variable<any, string>,
	lqip?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	blurHash?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	hasAlpha?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	isOpaque?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["GeopointSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	lat?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	lng?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	alt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["SanityImageDimensionsSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	height?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	width?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	aspectRatio?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["SanityImagePaletteSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	darkMuted?: ValueTypes["SanityImagePaletteSwatchSorting"] | undefined | null | Variable<any, string>,
	lightVibrant?: ValueTypes["SanityImagePaletteSwatchSorting"] | undefined | null | Variable<any, string>,
	darkVibrant?: ValueTypes["SanityImagePaletteSwatchSorting"] | undefined | null | Variable<any, string>,
	vibrant?: ValueTypes["SanityImagePaletteSwatchSorting"] | undefined | null | Variable<any, string>,
	dominant?: ValueTypes["SanityImagePaletteSwatchSorting"] | undefined | null | Variable<any, string>,
	lightMuted?: ValueTypes["SanityImagePaletteSwatchSorting"] | undefined | null | Variable<any, string>,
	muted?: ValueTypes["SanityImagePaletteSwatchSorting"] | undefined | null | Variable<any, string>
};
	["SanityImagePaletteSwatchSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	background?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	foreground?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	population?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["SanityAssetSourceDataSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	name?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	url?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["SanityFileAssetFilter"]: {
	/** Apply filters on document level */
	_?: ValueTypes["Sanity_DocumentFilter"] | undefined | null | Variable<any, string>,
	_id?: ValueTypes["IDFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	originalFilename?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	label?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	altText?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	sha1hash?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	extension?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	mimeType?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	size?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>,
	assetId?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	uploadId?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	path?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	url?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	source?: ValueTypes["SanityAssetSourceDataFilter"] | undefined | null | Variable<any, string>
};
	["SanityFileAssetSorting"]: {
	_id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	originalFilename?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	label?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	altText?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	sha1hash?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	extension?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	mimeType?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	size?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	assetId?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	uploadId?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	path?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	url?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	source?: ValueTypes["SanityAssetSourceDataSorting"] | undefined | null | Variable<any, string>
};
	["EventRentalFilter"]: {
	/** Apply filters on document level */
	_?: ValueTypes["Sanity_DocumentFilter"] | undefined | null | Variable<any, string>,
	_id?: ValueTypes["IDFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	contact?: ValueTypes["ContactFilter"] | undefined | null | Variable<any, string>,
	purpose_for_rental?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	describe_your_event?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	phone?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	email?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	company_name?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	company_phone?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	referred?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	referred_by?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["ContactFilter"]: {
	/** Apply filters on document level */
	_?: ValueTypes["Sanity_DocumentFilter"] | undefined | null | Variable<any, string>,
	_id?: ValueTypes["IDFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	first_name?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	last_name?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	phone?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	email?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["EventRentalSorting"]: {
	_id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	purpose_for_rental?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	describe_your_event?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	phone?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	email?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	company_name?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	company_phone?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	referred?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	referred_by?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["PrayerRequestFilter"]: {
	/** Apply filters on document level */
	_?: ValueTypes["Sanity_DocumentFilter"] | undefined | null | Variable<any, string>,
	_id?: ValueTypes["IDFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	contact?: ValueTypes["ContactFilter"] | undefined | null | Variable<any, string>,
	request_email_back?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	request?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["PrayerRequestSorting"]: {
	_id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	request_email_back?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	request?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["RightnowMediaFilter"]: {
	/** Apply filters on document level */
	_?: ValueTypes["Sanity_DocumentFilter"] | undefined | null | Variable<any, string>,
	_id?: ValueTypes["IDFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	contact?: ValueTypes["ContactFilter"] | undefined | null | Variable<any, string>,
	wind_member?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	has_access?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["RightnowMediaSorting"]: {
	_id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	wind_member?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	has_access?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["GiftAssessmentFilter"]: {
	/** Apply filters on document level */
	_?: ValueTypes["Sanity_DocumentFilter"] | undefined | null | Variable<any, string>,
	_id?: ValueTypes["IDFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	contact?: ValueTypes["ContactFilter"] | undefined | null | Variable<any, string>,
	dominate_gifts?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	subordinate_gifts?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	ministries_involved_in?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	change_in_ministry?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	lay_or_clergy?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["GiftAssessmentSorting"]: {
	_id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	dominate_gifts?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	subordinate_gifts?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	ministries_involved_in?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	change_in_ministry?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	lay_or_clergy?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["VisitorFeedbackFilter"]: {
	/** Apply filters on document level */
	_?: ValueTypes["Sanity_DocumentFilter"] | undefined | null | Variable<any, string>,
	_id?: ValueTypes["IDFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	contact?: ValueTypes["ContactFilter"] | undefined | null | Variable<any, string>,
	feedback?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["VisitorFeedbackSorting"]: {
	_id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	feedback?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["ScheduledVisitFilter"]: {
	/** Apply filters on document level */
	_?: ValueTypes["Sanity_DocumentFilter"] | undefined | null | Variable<any, string>,
	_id?: ValueTypes["IDFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	contact?: ValueTypes["ContactFilter"] | undefined | null | Variable<any, string>,
	attendance?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>,
	day_of_visit?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["ScheduledVisitSorting"]: {
	_id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	attendance?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	day_of_visit?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["MinistryConnectionFilter"]: {
	/** Apply filters on document level */
	_?: ValueTypes["Sanity_DocumentFilter"] | undefined | null | Variable<any, string>,
	_id?: ValueTypes["IDFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	contact?: ValueTypes["ContactFilter"] | undefined | null | Variable<any, string>
};
	["MinistryConnectionSorting"]: {
	_id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["NextGenRosterSignupFilter"]: {
	/** Apply filters on document level */
	_?: ValueTypes["Sanity_DocumentFilter"] | undefined | null | Variable<any, string>,
	_id?: ValueTypes["IDFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	first_name?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	last_name?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	age?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	grade?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	gender?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	hobbies?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	allergies?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["NextGenRosterSignupSorting"]: {
	_id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	first_name?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	last_name?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	age?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	grade?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	gender?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	hobbies?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	allergies?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["ContactSorting"]: {
	_id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	first_name?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	last_name?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	phone?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	email?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["EventFilter"]: {
	/** Apply filters on document level */
	_?: ValueTypes["Sanity_DocumentFilter"] | undefined | null | Variable<any, string>,
	_id?: ValueTypes["IDFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	name?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	date?: ValueTypes["DateFilter"] | undefined | null | Variable<any, string>,
	time?: ValueTypes["TimeTypeFilter"] | undefined | null | Variable<any, string>,
	image?: ValueTypes["ImageFilter"] | undefined | null | Variable<any, string>,
	location?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	how_to_signup?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	contact?: ValueTypes["LeaderFilter"] | undefined | null | Variable<any, string>,
	ministry_event?: ValueTypes["MinistryFilter"] | undefined | null | Variable<any, string>,
	external_host?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	cost?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["DateFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: ValueTypes["Date"] | undefined | null | Variable<any, string>,
	/** Checks if the value is not equal to the given input. */
	neq?: ValueTypes["Date"] | undefined | null | Variable<any, string>,
	/** Checks if the value is greater than the given input. */
	gt?: ValueTypes["Date"] | undefined | null | Variable<any, string>,
	/** Checks if the value is greater than or equal to the given input. */
	gte?: ValueTypes["Date"] | undefined | null | Variable<any, string>,
	/** Checks if the value is lesser than the given input. */
	lt?: ValueTypes["Date"] | undefined | null | Variable<any, string>,
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: ValueTypes["Date"] | undefined | null | Variable<any, string>,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null | Variable<any, string>
};
	["TimeTypeFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	hour?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	minute?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	time_of_day?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["ImageFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	asset?: ValueTypes["SanityImageAssetFilter"] | undefined | null | Variable<any, string>,
	media?: ValueTypes["GlobalDocumentReferenceFilter"] | undefined | null | Variable<any, string>,
	hotspot?: ValueTypes["SanityImageHotspotFilter"] | undefined | null | Variable<any, string>,
	crop?: ValueTypes["SanityImageCropFilter"] | undefined | null | Variable<any, string>
};
	["GlobalDocumentReferenceFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_ref?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_weak?: ValueTypes["BooleanFilter"] | undefined | null | Variable<any, string>
};
	["SanityImageHotspotFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	x?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>,
	y?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>,
	height?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>,
	width?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>
};
	["SanityImageCropFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	top?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>,
	bottom?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>,
	left?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>,
	right?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>
};
	["LeaderFilter"]: {
	/** Apply filters on document level */
	_?: ValueTypes["Sanity_DocumentFilter"] | undefined | null | Variable<any, string>,
	_id?: ValueTypes["IDFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	contact?: ValueTypes["ContactFilter"] | undefined | null | Variable<any, string>,
	position?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	category?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	image?: ValueTypes["ImageFilter"] | undefined | null | Variable<any, string>,
	video?: ValueTypes["FileFilter"] | undefined | null | Variable<any, string>
};
	["FileFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	asset?: ValueTypes["SanityFileAssetFilter"] | undefined | null | Variable<any, string>,
	media?: ValueTypes["GlobalDocumentReferenceFilter"] | undefined | null | Variable<any, string>
};
	["MinistryFilter"]: {
	/** Apply filters on document level */
	_?: ValueTypes["Sanity_DocumentFilter"] | undefined | null | Variable<any, string>,
	_id?: ValueTypes["IDFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	name?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	slug?: ValueTypes["SlugFilter"] | undefined | null | Variable<any, string>,
	scripture?: ValueTypes["ScriptureFilter"] | undefined | null | Variable<any, string>,
	coach?: ValueTypes["LeaderFilter"] | undefined | null | Variable<any, string>,
	image?: ValueTypes["ImageFilter"] | undefined | null | Variable<any, string>
};
	["SlugFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	current?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	source?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["ScriptureFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	passage?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	verse?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["EventSorting"]: {
	_id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	name?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	date?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	time?: ValueTypes["TimeTypeSorting"] | undefined | null | Variable<any, string>,
	image?: ValueTypes["ImageSorting"] | undefined | null | Variable<any, string>,
	location?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	how_to_signup?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	external_host?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	cost?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["TimeTypeSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	hour?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	minute?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	time_of_day?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["ImageSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	media?: ValueTypes["GlobalDocumentReferenceSorting"] | undefined | null | Variable<any, string>,
	hotspot?: ValueTypes["SanityImageHotspotSorting"] | undefined | null | Variable<any, string>,
	crop?: ValueTypes["SanityImageCropSorting"] | undefined | null | Variable<any, string>
};
	["GlobalDocumentReferenceSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_ref?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_weak?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["SanityImageHotspotSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	x?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	y?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	height?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	width?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["SanityImageCropSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	top?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	bottom?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	left?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	right?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["LeaderSorting"]: {
	_id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	position?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	category?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	description?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	image?: ValueTypes["ImageSorting"] | undefined | null | Variable<any, string>,
	video?: ValueTypes["FileSorting"] | undefined | null | Variable<any, string>
};
	["FileSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	media?: ValueTypes["GlobalDocumentReferenceSorting"] | undefined | null | Variable<any, string>
};
	["DeepDiveFilter"]: {
	/** Apply filters on document level */
	_?: ValueTypes["Sanity_DocumentFilter"] | undefined | null | Variable<any, string>,
	_id?: ValueTypes["IDFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	name?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	slug?: ValueTypes["SlugFilter"] | undefined | null | Variable<any, string>,
	image?: ValueTypes["ImageFilter"] | undefined | null | Variable<any, string>,
	start_date?: ValueTypes["DateFilter"] | undefined | null | Variable<any, string>,
	end_date?: ValueTypes["DateFilter"] | undefined | null | Variable<any, string>,
	accepting_new_students?: ValueTypes["BooleanFilter"] | undefined | null | Variable<any, string>
};
	["DeepDiveSorting"]: {
	_id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	name?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	slug?: ValueTypes["SlugSorting"] | undefined | null | Variable<any, string>,
	image?: ValueTypes["ImageSorting"] | undefined | null | Variable<any, string>,
	start_date?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	end_date?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	accepting_new_students?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["SlugSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	current?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	source?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["MinistrySorting"]: {
	_id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	name?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	slug?: ValueTypes["SlugSorting"] | undefined | null | Variable<any, string>,
	scripture?: ValueTypes["ScriptureSorting"] | undefined | null | Variable<any, string>,
	image?: ValueTypes["ImageSorting"] | undefined | null | Variable<any, string>
};
	["ScriptureSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	passage?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	verse?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["NextGenPageFilter"]: {
	/** Apply filters on document level */
	_?: ValueTypes["Sanity_DocumentFilter"] | undefined | null | Variable<any, string>,
	_id?: ValueTypes["IDFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	cirriculum_file?: ValueTypes["FileFilter"] | undefined | null | Variable<any, string>
};
	["NextGenPageSorting"]: {
	_id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	cirriculum_file?: ValueTypes["FileSorting"] | undefined | null | Variable<any, string>
};
	["ProductFilter"]: {
	/** Apply filters on document level */
	_?: ValueTypes["Sanity_DocumentFilter"] | undefined | null | Variable<any, string>,
	_id?: ValueTypes["IDFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["ProductSorting"]: {
	_id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	title?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["DocumentFilter"]: {
	/** Apply filters on document level */
	_?: ValueTypes["Sanity_DocumentFilter"] | undefined | null | Variable<any, string>,
	_id?: ValueTypes["IDFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["DatetimeFilter"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["DocumentSorting"]: {
	_id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_createdAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_updatedAt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_rev?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["Block"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	children?:ValueTypes["Span"],
	style?:boolean | `@${string}`,
	listItem?:boolean | `@${string}`,
	level?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Span"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	marks?:boolean | `@${string}`,
	text?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["CrossDatasetReference"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	_ref?:boolean | `@${string}`,
	_weak?:boolean | `@${string}`,
	_dataset?:boolean | `@${string}`,
	_projectId?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["ShopifyAssetPreview"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	height?:boolean | `@${string}`,
	width?:boolean | `@${string}`,
	url?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["ShopifyAssetMetadata"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	alt?:boolean | `@${string}`,
	duration?:boolean | `@${string}`,
	fileSize?:boolean | `@${string}`,
	height?:boolean | `@${string}`,
	width?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["ShopifyAsset"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	filename?:boolean | `@${string}`,
	id?:boolean | `@${string}`,
	meta?:ValueTypes["ShopifyAssetMetadata"],
	preview?:ValueTypes["ShopifyAssetPreview"],
	type?:boolean | `@${string}`,
	url?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["IntFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: number | undefined | null | Variable<any, string>,
	/** Checks if the value is not equal to the given input. */
	neq?: number | undefined | null | Variable<any, string>,
	/** Checks if the value is greater than the given input. */
	gt?: number | undefined | null | Variable<any, string>,
	/** Checks if the value is greater than or equal to the given input. */
	gte?: number | undefined | null | Variable<any, string>,
	/** Checks if the value is lesser than the given input. */
	lt?: number | undefined | null | Variable<any, string>,
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: number | undefined | null | Variable<any, string>,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null | Variable<any, string>
};
	["CrossDatasetReferenceFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_ref?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_weak?: ValueTypes["BooleanFilter"] | undefined | null | Variable<any, string>,
	_dataset?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_projectId?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["ShopifyAssetPreviewFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	height?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>,
	width?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>,
	url?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["ShopifyAssetMetadataFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	alt?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	duration?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>,
	fileSize?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>,
	height?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>,
	width?: ValueTypes["FloatFilter"] | undefined | null | Variable<any, string>
};
	["ShopifyAssetFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	filename?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	id?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	meta?: ValueTypes["ShopifyAssetMetadataFilter"] | undefined | null | Variable<any, string>,
	preview?: ValueTypes["ShopifyAssetPreviewFilter"] | undefined | null | Variable<any, string>,
	type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	url?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["MeetingDetailsTypeFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	day?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	time?: ValueTypes["TimeTypeFilter"] | undefined | null | Variable<any, string>,
	location?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["NextGenRosterSignupGuardianFilter"]: {
	_key?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>,
	contact?: ValueTypes["ContactFilter"] | undefined | null | Variable<any, string>,
	relationship_to_child?: ValueTypes["StringFilter"] | undefined | null | Variable<any, string>
};
	["CrossDatasetReferenceSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_ref?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_weak?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_dataset?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_projectId?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["ShopifyAssetPreviewSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	height?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	width?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	url?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["ShopifyAssetMetadataSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	alt?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	duration?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	fileSize?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	height?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	width?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["ShopifyAssetSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	filename?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	id?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	meta?: ValueTypes["ShopifyAssetMetadataSorting"] | undefined | null | Variable<any, string>,
	preview?: ValueTypes["ShopifyAssetPreviewSorting"] | undefined | null | Variable<any, string>,
	type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	url?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["MeetingDetailsTypeSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	day?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	time?: ValueTypes["TimeTypeSorting"] | undefined | null | Variable<any, string>,
	location?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["NextGenRosterSignupGuardianSorting"]: {
	_key?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	_type?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>,
	relationship_to_child?: ValueTypes["SortOrder"] | undefined | null | Variable<any, string>
};
	["ID"]:unknown
  }

export type ResolverInputTypes = {
    ["schema"]: AliasType<{
	query?:ResolverInputTypes["RootQuery"],
		__typename?: boolean | `@${string}`
}>;
	["RootQuery"]: AliasType<{
SanityImageAsset?: [{	/** SanityImageAsset document ID */
	id: ResolverInputTypes["ID"]},ResolverInputTypes["SanityImageAsset"]],
SanityFileAsset?: [{	/** SanityFileAsset document ID */
	id: ResolverInputTypes["ID"]},ResolverInputTypes["SanityFileAsset"]],
EventRental?: [{	/** EventRental document ID */
	id: ResolverInputTypes["ID"]},ResolverInputTypes["EventRental"]],
PrayerRequest?: [{	/** PrayerRequest document ID */
	id: ResolverInputTypes["ID"]},ResolverInputTypes["PrayerRequest"]],
RightnowMedia?: [{	/** RightnowMedia document ID */
	id: ResolverInputTypes["ID"]},ResolverInputTypes["RightnowMedia"]],
GiftAssessment?: [{	/** GiftAssessment document ID */
	id: ResolverInputTypes["ID"]},ResolverInputTypes["GiftAssessment"]],
VisitorFeedback?: [{	/** VisitorFeedback document ID */
	id: ResolverInputTypes["ID"]},ResolverInputTypes["VisitorFeedback"]],
ScheduledVisit?: [{	/** ScheduledVisit document ID */
	id: ResolverInputTypes["ID"]},ResolverInputTypes["ScheduledVisit"]],
MinistryConnection?: [{	/** MinistryConnection document ID */
	id: ResolverInputTypes["ID"]},ResolverInputTypes["MinistryConnection"]],
NextGenRosterSignup?: [{	/** NextGenRosterSignup document ID */
	id: ResolverInputTypes["ID"]},ResolverInputTypes["NextGenRosterSignup"]],
Contact?: [{	/** Contact document ID */
	id: ResolverInputTypes["ID"]},ResolverInputTypes["Contact"]],
Event?: [{	/** Event document ID */
	id: ResolverInputTypes["ID"]},ResolverInputTypes["Event"]],
Leader?: [{	/** Leader document ID */
	id: ResolverInputTypes["ID"]},ResolverInputTypes["Leader"]],
DeepDive?: [{	/** DeepDive document ID */
	id: ResolverInputTypes["ID"]},ResolverInputTypes["DeepDive"]],
Ministry?: [{	/** Ministry document ID */
	id: ResolverInputTypes["ID"]},ResolverInputTypes["Ministry"]],
NextGenPage?: [{	/** NextGenPage document ID */
	id: ResolverInputTypes["ID"]},ResolverInputTypes["NextGenPage"]],
Product?: [{	/** Product document ID */
	id: ResolverInputTypes["ID"]},ResolverInputTypes["Product"]],
Document?: [{	/** Document document ID */
	id: ResolverInputTypes["ID"]},ResolverInputTypes["Document"]],
allSanityImageAsset?: [{	where?: ResolverInputTypes["SanityImageAssetFilter"] | undefined | null,	sort?: Array<ResolverInputTypes["SanityImageAssetSorting"]> | undefined | null,	/** Max documents to return */
	limit?: number | undefined | null,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null},ResolverInputTypes["SanityImageAsset"]],
allSanityFileAsset?: [{	where?: ResolverInputTypes["SanityFileAssetFilter"] | undefined | null,	sort?: Array<ResolverInputTypes["SanityFileAssetSorting"]> | undefined | null,	/** Max documents to return */
	limit?: number | undefined | null,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null},ResolverInputTypes["SanityFileAsset"]],
allEventRental?: [{	where?: ResolverInputTypes["EventRentalFilter"] | undefined | null,	sort?: Array<ResolverInputTypes["EventRentalSorting"]> | undefined | null,	/** Max documents to return */
	limit?: number | undefined | null,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null},ResolverInputTypes["EventRental"]],
allPrayerRequest?: [{	where?: ResolverInputTypes["PrayerRequestFilter"] | undefined | null,	sort?: Array<ResolverInputTypes["PrayerRequestSorting"]> | undefined | null,	/** Max documents to return */
	limit?: number | undefined | null,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null},ResolverInputTypes["PrayerRequest"]],
allRightnowMedia?: [{	where?: ResolverInputTypes["RightnowMediaFilter"] | undefined | null,	sort?: Array<ResolverInputTypes["RightnowMediaSorting"]> | undefined | null,	/** Max documents to return */
	limit?: number | undefined | null,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null},ResolverInputTypes["RightnowMedia"]],
allGiftAssessment?: [{	where?: ResolverInputTypes["GiftAssessmentFilter"] | undefined | null,	sort?: Array<ResolverInputTypes["GiftAssessmentSorting"]> | undefined | null,	/** Max documents to return */
	limit?: number | undefined | null,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null},ResolverInputTypes["GiftAssessment"]],
allVisitorFeedback?: [{	where?: ResolverInputTypes["VisitorFeedbackFilter"] | undefined | null,	sort?: Array<ResolverInputTypes["VisitorFeedbackSorting"]> | undefined | null,	/** Max documents to return */
	limit?: number | undefined | null,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null},ResolverInputTypes["VisitorFeedback"]],
allScheduledVisit?: [{	where?: ResolverInputTypes["ScheduledVisitFilter"] | undefined | null,	sort?: Array<ResolverInputTypes["ScheduledVisitSorting"]> | undefined | null,	/** Max documents to return */
	limit?: number | undefined | null,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null},ResolverInputTypes["ScheduledVisit"]],
allMinistryConnection?: [{	where?: ResolverInputTypes["MinistryConnectionFilter"] | undefined | null,	sort?: Array<ResolverInputTypes["MinistryConnectionSorting"]> | undefined | null,	/** Max documents to return */
	limit?: number | undefined | null,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null},ResolverInputTypes["MinistryConnection"]],
allNextGenRosterSignup?: [{	where?: ResolverInputTypes["NextGenRosterSignupFilter"] | undefined | null,	sort?: Array<ResolverInputTypes["NextGenRosterSignupSorting"]> | undefined | null,	/** Max documents to return */
	limit?: number | undefined | null,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null},ResolverInputTypes["NextGenRosterSignup"]],
allContact?: [{	where?: ResolverInputTypes["ContactFilter"] | undefined | null,	sort?: Array<ResolverInputTypes["ContactSorting"]> | undefined | null,	/** Max documents to return */
	limit?: number | undefined | null,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null},ResolverInputTypes["Contact"]],
allEvent?: [{	where?: ResolverInputTypes["EventFilter"] | undefined | null,	sort?: Array<ResolverInputTypes["EventSorting"]> | undefined | null,	/** Max documents to return */
	limit?: number | undefined | null,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null},ResolverInputTypes["Event"]],
allLeader?: [{	where?: ResolverInputTypes["LeaderFilter"] | undefined | null,	sort?: Array<ResolverInputTypes["LeaderSorting"]> | undefined | null,	/** Max documents to return */
	limit?: number | undefined | null,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null},ResolverInputTypes["Leader"]],
allDeepDive?: [{	where?: ResolverInputTypes["DeepDiveFilter"] | undefined | null,	sort?: Array<ResolverInputTypes["DeepDiveSorting"]> | undefined | null,	/** Max documents to return */
	limit?: number | undefined | null,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null},ResolverInputTypes["DeepDive"]],
allMinistry?: [{	where?: ResolverInputTypes["MinistryFilter"] | undefined | null,	sort?: Array<ResolverInputTypes["MinistrySorting"]> | undefined | null,	/** Max documents to return */
	limit?: number | undefined | null,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null},ResolverInputTypes["Ministry"]],
allNextGenPage?: [{	where?: ResolverInputTypes["NextGenPageFilter"] | undefined | null,	sort?: Array<ResolverInputTypes["NextGenPageSorting"]> | undefined | null,	/** Max documents to return */
	limit?: number | undefined | null,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null},ResolverInputTypes["NextGenPage"]],
allProduct?: [{	where?: ResolverInputTypes["ProductFilter"] | undefined | null,	sort?: Array<ResolverInputTypes["ProductSorting"]> | undefined | null,	/** Max documents to return */
	limit?: number | undefined | null,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null},ResolverInputTypes["Product"]],
allDocument?: [{	where?: ResolverInputTypes["DocumentFilter"] | undefined | null,	sort?: Array<ResolverInputTypes["DocumentSorting"]> | undefined | null,	/** Max documents to return */
	limit?: number | undefined | null,	/** Offset at which to start returning documents from */
	offset?: number | undefined | null},ResolverInputTypes["Document"]],
		__typename?: boolean | `@${string}`
}>;
	["SanityImageAsset"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	originalFilename?:boolean | `@${string}`,
	label?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
	description?:boolean | `@${string}`,
	altText?:boolean | `@${string}`,
	sha1hash?:boolean | `@${string}`,
	extension?:boolean | `@${string}`,
	mimeType?:boolean | `@${string}`,
	size?:boolean | `@${string}`,
	assetId?:boolean | `@${string}`,
	uploadId?:boolean | `@${string}`,
	path?:boolean | `@${string}`,
	url?:boolean | `@${string}`,
	metadata?:ResolverInputTypes["SanityImageMetadata"],
	source?:ResolverInputTypes["SanityAssetSourceData"],
		__typename?: boolean | `@${string}`
}>;
	/** A Sanity document */
["Document"]:AliasType<{
		/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`;
		['...on SanityImageAsset']?: Omit<ResolverInputTypes["SanityImageAsset"],keyof ResolverInputTypes["Document"]>;
		['...on SanityFileAsset']?: Omit<ResolverInputTypes["SanityFileAsset"],keyof ResolverInputTypes["Document"]>;
		['...on EventRental']?: Omit<ResolverInputTypes["EventRental"],keyof ResolverInputTypes["Document"]>;
		['...on Contact']?: Omit<ResolverInputTypes["Contact"],keyof ResolverInputTypes["Document"]>;
		['...on PrayerRequest']?: Omit<ResolverInputTypes["PrayerRequest"],keyof ResolverInputTypes["Document"]>;
		['...on RightnowMedia']?: Omit<ResolverInputTypes["RightnowMedia"],keyof ResolverInputTypes["Document"]>;
		['...on GiftAssessment']?: Omit<ResolverInputTypes["GiftAssessment"],keyof ResolverInputTypes["Document"]>;
		['...on VisitorFeedback']?: Omit<ResolverInputTypes["VisitorFeedback"],keyof ResolverInputTypes["Document"]>;
		['...on ScheduledVisit']?: Omit<ResolverInputTypes["ScheduledVisit"],keyof ResolverInputTypes["Document"]>;
		['...on MinistryConnection']?: Omit<ResolverInputTypes["MinistryConnection"],keyof ResolverInputTypes["Document"]>;
		['...on NextGenRosterSignup']?: Omit<ResolverInputTypes["NextGenRosterSignup"],keyof ResolverInputTypes["Document"]>;
		['...on Event']?: Omit<ResolverInputTypes["Event"],keyof ResolverInputTypes["Document"]>;
		['...on Leader']?: Omit<ResolverInputTypes["Leader"],keyof ResolverInputTypes["Document"]>;
		['...on Ministry']?: Omit<ResolverInputTypes["Ministry"],keyof ResolverInputTypes["Document"]>;
		['...on DeepDive']?: Omit<ResolverInputTypes["DeepDive"],keyof ResolverInputTypes["Document"]>;
		['...on NextGenPage']?: Omit<ResolverInputTypes["NextGenPage"],keyof ResolverInputTypes["Document"]>;
		['...on Product']?: Omit<ResolverInputTypes["Product"],keyof ResolverInputTypes["Document"]>;
		__typename?: boolean | `@${string}`
}>;
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
["DateTime"]:unknown;
	["SanityImageMetadata"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	location?:ResolverInputTypes["Geopoint"],
	dimensions?:ResolverInputTypes["SanityImageDimensions"],
	palette?:ResolverInputTypes["SanityImagePalette"],
	lqip?:boolean | `@${string}`,
	blurHash?:boolean | `@${string}`,
	hasAlpha?:boolean | `@${string}`,
	isOpaque?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Geopoint"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	lat?:boolean | `@${string}`,
	lng?:boolean | `@${string}`,
	alt?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["SanityImageDimensions"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	height?:boolean | `@${string}`,
	width?:boolean | `@${string}`,
	aspectRatio?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["SanityImagePalette"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	darkMuted?:ResolverInputTypes["SanityImagePaletteSwatch"],
	lightVibrant?:ResolverInputTypes["SanityImagePaletteSwatch"],
	darkVibrant?:ResolverInputTypes["SanityImagePaletteSwatch"],
	vibrant?:ResolverInputTypes["SanityImagePaletteSwatch"],
	dominant?:ResolverInputTypes["SanityImagePaletteSwatch"],
	lightMuted?:ResolverInputTypes["SanityImagePaletteSwatch"],
	muted?:ResolverInputTypes["SanityImagePaletteSwatch"],
		__typename?: boolean | `@${string}`
}>;
	["SanityImagePaletteSwatch"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	background?:boolean | `@${string}`,
	foreground?:boolean | `@${string}`,
	population?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["SanityAssetSourceData"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	/** A canonical name for the source this asset is originating from */
	name?:boolean | `@${string}`,
	/** The unique ID for the asset within the originating source so you can programatically find back to it */
	id?:boolean | `@${string}`,
	/** A URL to find more information about this asset in the originating source */
	url?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["SanityFileAsset"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	originalFilename?:boolean | `@${string}`,
	label?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
	description?:boolean | `@${string}`,
	altText?:boolean | `@${string}`,
	sha1hash?:boolean | `@${string}`,
	extension?:boolean | `@${string}`,
	mimeType?:boolean | `@${string}`,
	size?:boolean | `@${string}`,
	assetId?:boolean | `@${string}`,
	uploadId?:boolean | `@${string}`,
	path?:boolean | `@${string}`,
	url?:boolean | `@${string}`,
	source?:ResolverInputTypes["SanityAssetSourceData"],
		__typename?: boolean | `@${string}`
}>;
	["EventRental"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	contact?:ResolverInputTypes["Contact"],
	purpose_for_rental?:boolean | `@${string}`,
	describe_your_event?:boolean | `@${string}`,
	phone?:boolean | `@${string}`,
	email?:boolean | `@${string}`,
	company_name?:boolean | `@${string}`,
	company_phone?:boolean | `@${string}`,
	referred?:boolean | `@${string}`,
	referred_by?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Contact"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	first_name?:boolean | `@${string}`,
	last_name?:boolean | `@${string}`,
	phone?:boolean | `@${string}`,
	email?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["PrayerRequest"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	contact?:ResolverInputTypes["Contact"],
	request_email_back?:boolean | `@${string}`,
	request?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["RightnowMedia"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	contact?:ResolverInputTypes["Contact"],
	wind_member?:boolean | `@${string}`,
	has_access?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["GiftAssessment"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	contact?:ResolverInputTypes["Contact"],
	dominate_gifts?:boolean | `@${string}`,
	subordinate_gifts?:boolean | `@${string}`,
	ministries_involved_in?:boolean | `@${string}`,
	change_in_ministry?:boolean | `@${string}`,
	lay_or_clergy?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["VisitorFeedback"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	contact?:ResolverInputTypes["Contact"],
	feedback?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["ScheduledVisit"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	contact?:ResolverInputTypes["Contact"],
	attendance?:boolean | `@${string}`,
	day_of_visit?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["MinistryConnection"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	contact?:ResolverInputTypes["Contact"],
	ministry_interests?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["NextGenRosterSignup"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	first_name?:boolean | `@${string}`,
	last_name?:boolean | `@${string}`,
	age?:boolean | `@${string}`,
	grade?:boolean | `@${string}`,
	gender?:boolean | `@${string}`,
	hobbies?:boolean | `@${string}`,
	allergies?:boolean | `@${string}`,
	guardians?:ResolverInputTypes["NextGenRosterSignupGuardian"],
		__typename?: boolean | `@${string}`
}>;
	["NextGenRosterSignupGuardian"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	contact?:ResolverInputTypes["Contact"],
	relationship_to_child?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Event"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	name?:boolean | `@${string}`,
	/** Describe the event. */
	description?:boolean | `@${string}`,
	date?:boolean | `@${string}`,
	time?:ResolverInputTypes["TimeType"],
	categories?:boolean | `@${string}`,
	image?:ResolverInputTypes["Image"],
	/** Where is the event happening. */
	location?:boolean | `@${string}`,
	/** Instructions for how to join/participate in this event. */
	how_to_signup?:boolean | `@${string}`,
	/** Instructions for who to contact regarding this event. */
	contact?:ResolverInputTypes["Leader"],
	/** Select if a Ministry is the organizer/host for this event. */
	ministry_event?:ResolverInputTypes["Ministry"],
	/** Is there an external organization/host for this event? */
	external_host?:boolean | `@${string}`,
	help_needed?:boolean | `@${string}`,
	/** Are there any costs associated with participation in this event? (e.g., $40.00 per Adult ticket) */
	cost?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	/** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
["Date"]:unknown;
	["TimeType"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	hour?:boolean | `@${string}`,
	minute?:boolean | `@${string}`,
	time_of_day?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Image"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	asset?:ResolverInputTypes["SanityImageAsset"],
	media?:ResolverInputTypes["GlobalDocumentReference"],
	hotspot?:ResolverInputTypes["SanityImageHotspot"],
	crop?:ResolverInputTypes["SanityImageCrop"],
		__typename?: boolean | `@${string}`
}>;
	["GlobalDocumentReference"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	_ref?:boolean | `@${string}`,
	_weak?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["SanityImageHotspot"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	x?:boolean | `@${string}`,
	y?:boolean | `@${string}`,
	height?:boolean | `@${string}`,
	width?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["SanityImageCrop"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	top?:boolean | `@${string}`,
	bottom?:boolean | `@${string}`,
	left?:boolean | `@${string}`,
	right?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Leader"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	contact?:ResolverInputTypes["Contact"],
	/** The official position assigned to the Leader. */
	position?:boolean | `@${string}`,
	/** Select a category this leader belongs to (if they fit more than one; select their primary role). */
	category?:boolean | `@${string}`,
	/** Describe the Leader's personailty, goals, and aspirations (3-7 sentences). */
	description?:boolean | `@${string}`,
	roles?:boolean | `@${string}`,
	image?:ResolverInputTypes["Image"],
	video?:ResolverInputTypes["File"],
		__typename?: boolean | `@${string}`
}>;
	["File"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	asset?:ResolverInputTypes["SanityFileAsset"],
	media?:ResolverInputTypes["GlobalDocumentReference"],
		__typename?: boolean | `@${string}`
}>;
	["Ministry"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	name?:boolean | `@${string}`,
	slug?:ResolverInputTypes["Slug"],
	scripture?:ResolverInputTypes["Scripture"],
	descriptionRaw?:boolean | `@${string}`,
	coordinators?:ResolverInputTypes["Leader"],
	/** Select the coach for this ministry. */
	coach?:ResolverInputTypes["Leader"],
	image?:ResolverInputTypes["Image"],
	meeting_details?:ResolverInputTypes["MeetingDetailsType"],
		__typename?: boolean | `@${string}`
}>;
	["Slug"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	current?:boolean | `@${string}`,
	source?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Scripture"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	passage?:boolean | `@${string}`,
	verse?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
["JSON"]:unknown;
	["MeetingDetailsType"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	day?:boolean | `@${string}`,
	time?:ResolverInputTypes["TimeType"],
	location?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["DeepDive"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	name?:boolean | `@${string}`,
	slug?:ResolverInputTypes["Slug"],
	descriptionRaw?:boolean | `@${string}`,
	instructors?:ResolverInputTypes["Leader"],
	image?:ResolverInputTypes["Image"],
	start_date?:boolean | `@${string}`,
	end_date?:boolean | `@${string}`,
	required_materials?:boolean | `@${string}`,
	meeting_details?:ResolverInputTypes["MeetingDetailsType"],
	/** Is this deep dive actively accepting new Students? */
	accepting_new_students?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["NextGenPage"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	educators?:ResolverInputTypes["Leader"],
	cirriculum_file?:ResolverInputTypes["File"],
		__typename?: boolean | `@${string}`
}>;
	["Product"]: AliasType<{
	/** Document ID */
	_id?:boolean | `@${string}`,
	/** Document type */
	_type?:boolean | `@${string}`,
	/** Date the document was created */
	_createdAt?:boolean | `@${string}`,
	/** Date the document was last modified */
	_updatedAt?:boolean | `@${string}`,
	/** Current document revision */
	_rev?:boolean | `@${string}`,
	_key?:boolean | `@${string}`,
	title?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["SanityImageAssetFilter"]: {
	/** Apply filters on document level */
	_?: ResolverInputTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ResolverInputTypes["IDFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_createdAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_rev?: ResolverInputTypes["StringFilter"] | undefined | null,
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	originalFilename?: ResolverInputTypes["StringFilter"] | undefined | null,
	label?: ResolverInputTypes["StringFilter"] | undefined | null,
	title?: ResolverInputTypes["StringFilter"] | undefined | null,
	description?: ResolverInputTypes["StringFilter"] | undefined | null,
	altText?: ResolverInputTypes["StringFilter"] | undefined | null,
	sha1hash?: ResolverInputTypes["StringFilter"] | undefined | null,
	extension?: ResolverInputTypes["StringFilter"] | undefined | null,
	mimeType?: ResolverInputTypes["StringFilter"] | undefined | null,
	size?: ResolverInputTypes["FloatFilter"] | undefined | null,
	assetId?: ResolverInputTypes["StringFilter"] | undefined | null,
	uploadId?: ResolverInputTypes["StringFilter"] | undefined | null,
	path?: ResolverInputTypes["StringFilter"] | undefined | null,
	url?: ResolverInputTypes["StringFilter"] | undefined | null,
	metadata?: ResolverInputTypes["SanityImageMetadataFilter"] | undefined | null,
	source?: ResolverInputTypes["SanityAssetSourceDataFilter"] | undefined | null
};
	["Sanity_DocumentFilter"]: {
	/** All documents referencing the given document ID. */
	references?: ResolverInputTypes["ID"] | undefined | null,
	/** All documents that are drafts. */
	is_draft?: boolean | undefined | null
};
	["IDFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: ResolverInputTypes["ID"] | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: ResolverInputTypes["ID"] | undefined | null,
	/** Checks if the value matches the given word/words. */
	matches?: ResolverInputTypes["ID"] | undefined | null,
	in?: Array<ResolverInputTypes["ID"]> | undefined | null,
	nin?: Array<ResolverInputTypes["ID"]> | undefined | null
};
	["StringFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: string | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: string | undefined | null,
	/** Checks if the value matches the given word/words. */
	matches?: string | undefined | null,
	in?: Array<string> | undefined | null,
	nin?: Array<string> | undefined | null,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null
};
	["DatetimeFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: ResolverInputTypes["DateTime"] | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: ResolverInputTypes["DateTime"] | undefined | null,
	/** Checks if the value is greater than the given input. */
	gt?: ResolverInputTypes["DateTime"] | undefined | null,
	/** Checks if the value is greater than or equal to the given input. */
	gte?: ResolverInputTypes["DateTime"] | undefined | null,
	/** Checks if the value is lesser than the given input. */
	lt?: ResolverInputTypes["DateTime"] | undefined | null,
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: ResolverInputTypes["DateTime"] | undefined | null,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null
};
	["FloatFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: number | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: number | undefined | null,
	/** Checks if the value is greater than the given input. */
	gt?: number | undefined | null,
	/** Checks if the value is greater than or equal to the given input. */
	gte?: number | undefined | null,
	/** Checks if the value is lesser than the given input. */
	lt?: number | undefined | null,
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: number | undefined | null,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null
};
	["SanityImageMetadataFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	location?: ResolverInputTypes["GeopointFilter"] | undefined | null,
	dimensions?: ResolverInputTypes["SanityImageDimensionsFilter"] | undefined | null,
	palette?: ResolverInputTypes["SanityImagePaletteFilter"] | undefined | null,
	lqip?: ResolverInputTypes["StringFilter"] | undefined | null,
	blurHash?: ResolverInputTypes["StringFilter"] | undefined | null,
	hasAlpha?: ResolverInputTypes["BooleanFilter"] | undefined | null,
	isOpaque?: ResolverInputTypes["BooleanFilter"] | undefined | null
};
	["GeopointFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	lat?: ResolverInputTypes["FloatFilter"] | undefined | null,
	lng?: ResolverInputTypes["FloatFilter"] | undefined | null,
	alt?: ResolverInputTypes["FloatFilter"] | undefined | null
};
	["SanityImageDimensionsFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	height?: ResolverInputTypes["FloatFilter"] | undefined | null,
	width?: ResolverInputTypes["FloatFilter"] | undefined | null,
	aspectRatio?: ResolverInputTypes["FloatFilter"] | undefined | null
};
	["SanityImagePaletteFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	darkMuted?: ResolverInputTypes["SanityImagePaletteSwatchFilter"] | undefined | null,
	lightVibrant?: ResolverInputTypes["SanityImagePaletteSwatchFilter"] | undefined | null,
	darkVibrant?: ResolverInputTypes["SanityImagePaletteSwatchFilter"] | undefined | null,
	vibrant?: ResolverInputTypes["SanityImagePaletteSwatchFilter"] | undefined | null,
	dominant?: ResolverInputTypes["SanityImagePaletteSwatchFilter"] | undefined | null,
	lightMuted?: ResolverInputTypes["SanityImagePaletteSwatchFilter"] | undefined | null,
	muted?: ResolverInputTypes["SanityImagePaletteSwatchFilter"] | undefined | null
};
	["SanityImagePaletteSwatchFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	background?: ResolverInputTypes["StringFilter"] | undefined | null,
	foreground?: ResolverInputTypes["StringFilter"] | undefined | null,
	population?: ResolverInputTypes["FloatFilter"] | undefined | null,
	title?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["BooleanFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: boolean | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: boolean | undefined | null,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null
};
	["SanityAssetSourceDataFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	name?: ResolverInputTypes["StringFilter"] | undefined | null,
	id?: ResolverInputTypes["StringFilter"] | undefined | null,
	url?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["SanityImageAssetSorting"]: {
	_id?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_createdAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_updatedAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_rev?: ResolverInputTypes["SortOrder"] | undefined | null,
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	originalFilename?: ResolverInputTypes["SortOrder"] | undefined | null,
	label?: ResolverInputTypes["SortOrder"] | undefined | null,
	title?: ResolverInputTypes["SortOrder"] | undefined | null,
	description?: ResolverInputTypes["SortOrder"] | undefined | null,
	altText?: ResolverInputTypes["SortOrder"] | undefined | null,
	sha1hash?: ResolverInputTypes["SortOrder"] | undefined | null,
	extension?: ResolverInputTypes["SortOrder"] | undefined | null,
	mimeType?: ResolverInputTypes["SortOrder"] | undefined | null,
	size?: ResolverInputTypes["SortOrder"] | undefined | null,
	assetId?: ResolverInputTypes["SortOrder"] | undefined | null,
	uploadId?: ResolverInputTypes["SortOrder"] | undefined | null,
	path?: ResolverInputTypes["SortOrder"] | undefined | null,
	url?: ResolverInputTypes["SortOrder"] | undefined | null,
	metadata?: ResolverInputTypes["SanityImageMetadataSorting"] | undefined | null,
	source?: ResolverInputTypes["SanityAssetSourceDataSorting"] | undefined | null
};
	["SortOrder"]:SortOrder;
	["SanityImageMetadataSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	location?: ResolverInputTypes["GeopointSorting"] | undefined | null,
	dimensions?: ResolverInputTypes["SanityImageDimensionsSorting"] | undefined | null,
	palette?: ResolverInputTypes["SanityImagePaletteSorting"] | undefined | null,
	lqip?: ResolverInputTypes["SortOrder"] | undefined | null,
	blurHash?: ResolverInputTypes["SortOrder"] | undefined | null,
	hasAlpha?: ResolverInputTypes["SortOrder"] | undefined | null,
	isOpaque?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["GeopointSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	lat?: ResolverInputTypes["SortOrder"] | undefined | null,
	lng?: ResolverInputTypes["SortOrder"] | undefined | null,
	alt?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["SanityImageDimensionsSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	height?: ResolverInputTypes["SortOrder"] | undefined | null,
	width?: ResolverInputTypes["SortOrder"] | undefined | null,
	aspectRatio?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["SanityImagePaletteSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	darkMuted?: ResolverInputTypes["SanityImagePaletteSwatchSorting"] | undefined | null,
	lightVibrant?: ResolverInputTypes["SanityImagePaletteSwatchSorting"] | undefined | null,
	darkVibrant?: ResolverInputTypes["SanityImagePaletteSwatchSorting"] | undefined | null,
	vibrant?: ResolverInputTypes["SanityImagePaletteSwatchSorting"] | undefined | null,
	dominant?: ResolverInputTypes["SanityImagePaletteSwatchSorting"] | undefined | null,
	lightMuted?: ResolverInputTypes["SanityImagePaletteSwatchSorting"] | undefined | null,
	muted?: ResolverInputTypes["SanityImagePaletteSwatchSorting"] | undefined | null
};
	["SanityImagePaletteSwatchSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	background?: ResolverInputTypes["SortOrder"] | undefined | null,
	foreground?: ResolverInputTypes["SortOrder"] | undefined | null,
	population?: ResolverInputTypes["SortOrder"] | undefined | null,
	title?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["SanityAssetSourceDataSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	name?: ResolverInputTypes["SortOrder"] | undefined | null,
	id?: ResolverInputTypes["SortOrder"] | undefined | null,
	url?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["SanityFileAssetFilter"]: {
	/** Apply filters on document level */
	_?: ResolverInputTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ResolverInputTypes["IDFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_createdAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_rev?: ResolverInputTypes["StringFilter"] | undefined | null,
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	originalFilename?: ResolverInputTypes["StringFilter"] | undefined | null,
	label?: ResolverInputTypes["StringFilter"] | undefined | null,
	title?: ResolverInputTypes["StringFilter"] | undefined | null,
	description?: ResolverInputTypes["StringFilter"] | undefined | null,
	altText?: ResolverInputTypes["StringFilter"] | undefined | null,
	sha1hash?: ResolverInputTypes["StringFilter"] | undefined | null,
	extension?: ResolverInputTypes["StringFilter"] | undefined | null,
	mimeType?: ResolverInputTypes["StringFilter"] | undefined | null,
	size?: ResolverInputTypes["FloatFilter"] | undefined | null,
	assetId?: ResolverInputTypes["StringFilter"] | undefined | null,
	uploadId?: ResolverInputTypes["StringFilter"] | undefined | null,
	path?: ResolverInputTypes["StringFilter"] | undefined | null,
	url?: ResolverInputTypes["StringFilter"] | undefined | null,
	source?: ResolverInputTypes["SanityAssetSourceDataFilter"] | undefined | null
};
	["SanityFileAssetSorting"]: {
	_id?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_createdAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_updatedAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_rev?: ResolverInputTypes["SortOrder"] | undefined | null,
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	originalFilename?: ResolverInputTypes["SortOrder"] | undefined | null,
	label?: ResolverInputTypes["SortOrder"] | undefined | null,
	title?: ResolverInputTypes["SortOrder"] | undefined | null,
	description?: ResolverInputTypes["SortOrder"] | undefined | null,
	altText?: ResolverInputTypes["SortOrder"] | undefined | null,
	sha1hash?: ResolverInputTypes["SortOrder"] | undefined | null,
	extension?: ResolverInputTypes["SortOrder"] | undefined | null,
	mimeType?: ResolverInputTypes["SortOrder"] | undefined | null,
	size?: ResolverInputTypes["SortOrder"] | undefined | null,
	assetId?: ResolverInputTypes["SortOrder"] | undefined | null,
	uploadId?: ResolverInputTypes["SortOrder"] | undefined | null,
	path?: ResolverInputTypes["SortOrder"] | undefined | null,
	url?: ResolverInputTypes["SortOrder"] | undefined | null,
	source?: ResolverInputTypes["SanityAssetSourceDataSorting"] | undefined | null
};
	["EventRentalFilter"]: {
	/** Apply filters on document level */
	_?: ResolverInputTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ResolverInputTypes["IDFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_createdAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_rev?: ResolverInputTypes["StringFilter"] | undefined | null,
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	contact?: ResolverInputTypes["ContactFilter"] | undefined | null,
	purpose_for_rental?: ResolverInputTypes["StringFilter"] | undefined | null,
	describe_your_event?: ResolverInputTypes["StringFilter"] | undefined | null,
	phone?: ResolverInputTypes["StringFilter"] | undefined | null,
	email?: ResolverInputTypes["StringFilter"] | undefined | null,
	company_name?: ResolverInputTypes["StringFilter"] | undefined | null,
	company_phone?: ResolverInputTypes["StringFilter"] | undefined | null,
	referred?: ResolverInputTypes["StringFilter"] | undefined | null,
	referred_by?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["ContactFilter"]: {
	/** Apply filters on document level */
	_?: ResolverInputTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ResolverInputTypes["IDFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_createdAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_rev?: ResolverInputTypes["StringFilter"] | undefined | null,
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	first_name?: ResolverInputTypes["StringFilter"] | undefined | null,
	last_name?: ResolverInputTypes["StringFilter"] | undefined | null,
	phone?: ResolverInputTypes["StringFilter"] | undefined | null,
	email?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["EventRentalSorting"]: {
	_id?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_createdAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_updatedAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_rev?: ResolverInputTypes["SortOrder"] | undefined | null,
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	purpose_for_rental?: ResolverInputTypes["SortOrder"] | undefined | null,
	describe_your_event?: ResolverInputTypes["SortOrder"] | undefined | null,
	phone?: ResolverInputTypes["SortOrder"] | undefined | null,
	email?: ResolverInputTypes["SortOrder"] | undefined | null,
	company_name?: ResolverInputTypes["SortOrder"] | undefined | null,
	company_phone?: ResolverInputTypes["SortOrder"] | undefined | null,
	referred?: ResolverInputTypes["SortOrder"] | undefined | null,
	referred_by?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["PrayerRequestFilter"]: {
	/** Apply filters on document level */
	_?: ResolverInputTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ResolverInputTypes["IDFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_createdAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_rev?: ResolverInputTypes["StringFilter"] | undefined | null,
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	contact?: ResolverInputTypes["ContactFilter"] | undefined | null,
	request_email_back?: ResolverInputTypes["StringFilter"] | undefined | null,
	request?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["PrayerRequestSorting"]: {
	_id?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_createdAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_updatedAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_rev?: ResolverInputTypes["SortOrder"] | undefined | null,
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	request_email_back?: ResolverInputTypes["SortOrder"] | undefined | null,
	request?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["RightnowMediaFilter"]: {
	/** Apply filters on document level */
	_?: ResolverInputTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ResolverInputTypes["IDFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_createdAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_rev?: ResolverInputTypes["StringFilter"] | undefined | null,
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	contact?: ResolverInputTypes["ContactFilter"] | undefined | null,
	wind_member?: ResolverInputTypes["StringFilter"] | undefined | null,
	has_access?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["RightnowMediaSorting"]: {
	_id?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_createdAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_updatedAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_rev?: ResolverInputTypes["SortOrder"] | undefined | null,
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	wind_member?: ResolverInputTypes["SortOrder"] | undefined | null,
	has_access?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["GiftAssessmentFilter"]: {
	/** Apply filters on document level */
	_?: ResolverInputTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ResolverInputTypes["IDFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_createdAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_rev?: ResolverInputTypes["StringFilter"] | undefined | null,
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	contact?: ResolverInputTypes["ContactFilter"] | undefined | null,
	dominate_gifts?: ResolverInputTypes["StringFilter"] | undefined | null,
	subordinate_gifts?: ResolverInputTypes["StringFilter"] | undefined | null,
	ministries_involved_in?: ResolverInputTypes["StringFilter"] | undefined | null,
	change_in_ministry?: ResolverInputTypes["StringFilter"] | undefined | null,
	lay_or_clergy?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["GiftAssessmentSorting"]: {
	_id?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_createdAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_updatedAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_rev?: ResolverInputTypes["SortOrder"] | undefined | null,
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	dominate_gifts?: ResolverInputTypes["SortOrder"] | undefined | null,
	subordinate_gifts?: ResolverInputTypes["SortOrder"] | undefined | null,
	ministries_involved_in?: ResolverInputTypes["SortOrder"] | undefined | null,
	change_in_ministry?: ResolverInputTypes["SortOrder"] | undefined | null,
	lay_or_clergy?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["VisitorFeedbackFilter"]: {
	/** Apply filters on document level */
	_?: ResolverInputTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ResolverInputTypes["IDFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_createdAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_rev?: ResolverInputTypes["StringFilter"] | undefined | null,
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	contact?: ResolverInputTypes["ContactFilter"] | undefined | null,
	feedback?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["VisitorFeedbackSorting"]: {
	_id?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_createdAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_updatedAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_rev?: ResolverInputTypes["SortOrder"] | undefined | null,
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	feedback?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["ScheduledVisitFilter"]: {
	/** Apply filters on document level */
	_?: ResolverInputTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ResolverInputTypes["IDFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_createdAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_rev?: ResolverInputTypes["StringFilter"] | undefined | null,
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	contact?: ResolverInputTypes["ContactFilter"] | undefined | null,
	attendance?: ResolverInputTypes["FloatFilter"] | undefined | null,
	day_of_visit?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["ScheduledVisitSorting"]: {
	_id?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_createdAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_updatedAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_rev?: ResolverInputTypes["SortOrder"] | undefined | null,
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	attendance?: ResolverInputTypes["SortOrder"] | undefined | null,
	day_of_visit?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["MinistryConnectionFilter"]: {
	/** Apply filters on document level */
	_?: ResolverInputTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ResolverInputTypes["IDFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_createdAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_rev?: ResolverInputTypes["StringFilter"] | undefined | null,
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	contact?: ResolverInputTypes["ContactFilter"] | undefined | null
};
	["MinistryConnectionSorting"]: {
	_id?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_createdAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_updatedAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_rev?: ResolverInputTypes["SortOrder"] | undefined | null,
	_key?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["NextGenRosterSignupFilter"]: {
	/** Apply filters on document level */
	_?: ResolverInputTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ResolverInputTypes["IDFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_createdAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_rev?: ResolverInputTypes["StringFilter"] | undefined | null,
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	first_name?: ResolverInputTypes["StringFilter"] | undefined | null,
	last_name?: ResolverInputTypes["StringFilter"] | undefined | null,
	age?: ResolverInputTypes["StringFilter"] | undefined | null,
	grade?: ResolverInputTypes["StringFilter"] | undefined | null,
	gender?: ResolverInputTypes["StringFilter"] | undefined | null,
	hobbies?: ResolverInputTypes["StringFilter"] | undefined | null,
	allergies?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["NextGenRosterSignupSorting"]: {
	_id?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_createdAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_updatedAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_rev?: ResolverInputTypes["SortOrder"] | undefined | null,
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	first_name?: ResolverInputTypes["SortOrder"] | undefined | null,
	last_name?: ResolverInputTypes["SortOrder"] | undefined | null,
	age?: ResolverInputTypes["SortOrder"] | undefined | null,
	grade?: ResolverInputTypes["SortOrder"] | undefined | null,
	gender?: ResolverInputTypes["SortOrder"] | undefined | null,
	hobbies?: ResolverInputTypes["SortOrder"] | undefined | null,
	allergies?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["ContactSorting"]: {
	_id?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_createdAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_updatedAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_rev?: ResolverInputTypes["SortOrder"] | undefined | null,
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	first_name?: ResolverInputTypes["SortOrder"] | undefined | null,
	last_name?: ResolverInputTypes["SortOrder"] | undefined | null,
	phone?: ResolverInputTypes["SortOrder"] | undefined | null,
	email?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["EventFilter"]: {
	/** Apply filters on document level */
	_?: ResolverInputTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ResolverInputTypes["IDFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_createdAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_rev?: ResolverInputTypes["StringFilter"] | undefined | null,
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	name?: ResolverInputTypes["StringFilter"] | undefined | null,
	description?: ResolverInputTypes["StringFilter"] | undefined | null,
	date?: ResolverInputTypes["DateFilter"] | undefined | null,
	time?: ResolverInputTypes["TimeTypeFilter"] | undefined | null,
	image?: ResolverInputTypes["ImageFilter"] | undefined | null,
	location?: ResolverInputTypes["StringFilter"] | undefined | null,
	how_to_signup?: ResolverInputTypes["StringFilter"] | undefined | null,
	contact?: ResolverInputTypes["LeaderFilter"] | undefined | null,
	ministry_event?: ResolverInputTypes["MinistryFilter"] | undefined | null,
	external_host?: ResolverInputTypes["StringFilter"] | undefined | null,
	cost?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["DateFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: ResolverInputTypes["Date"] | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: ResolverInputTypes["Date"] | undefined | null,
	/** Checks if the value is greater than the given input. */
	gt?: ResolverInputTypes["Date"] | undefined | null,
	/** Checks if the value is greater than or equal to the given input. */
	gte?: ResolverInputTypes["Date"] | undefined | null,
	/** Checks if the value is lesser than the given input. */
	lt?: ResolverInputTypes["Date"] | undefined | null,
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: ResolverInputTypes["Date"] | undefined | null,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null
};
	["TimeTypeFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	hour?: ResolverInputTypes["StringFilter"] | undefined | null,
	minute?: ResolverInputTypes["StringFilter"] | undefined | null,
	time_of_day?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["ImageFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	asset?: ResolverInputTypes["SanityImageAssetFilter"] | undefined | null,
	media?: ResolverInputTypes["GlobalDocumentReferenceFilter"] | undefined | null,
	hotspot?: ResolverInputTypes["SanityImageHotspotFilter"] | undefined | null,
	crop?: ResolverInputTypes["SanityImageCropFilter"] | undefined | null
};
	["GlobalDocumentReferenceFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_ref?: ResolverInputTypes["StringFilter"] | undefined | null,
	_weak?: ResolverInputTypes["BooleanFilter"] | undefined | null
};
	["SanityImageHotspotFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	x?: ResolverInputTypes["FloatFilter"] | undefined | null,
	y?: ResolverInputTypes["FloatFilter"] | undefined | null,
	height?: ResolverInputTypes["FloatFilter"] | undefined | null,
	width?: ResolverInputTypes["FloatFilter"] | undefined | null
};
	["SanityImageCropFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	top?: ResolverInputTypes["FloatFilter"] | undefined | null,
	bottom?: ResolverInputTypes["FloatFilter"] | undefined | null,
	left?: ResolverInputTypes["FloatFilter"] | undefined | null,
	right?: ResolverInputTypes["FloatFilter"] | undefined | null
};
	["LeaderFilter"]: {
	/** Apply filters on document level */
	_?: ResolverInputTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ResolverInputTypes["IDFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_createdAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_rev?: ResolverInputTypes["StringFilter"] | undefined | null,
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	contact?: ResolverInputTypes["ContactFilter"] | undefined | null,
	position?: ResolverInputTypes["StringFilter"] | undefined | null,
	category?: ResolverInputTypes["StringFilter"] | undefined | null,
	description?: ResolverInputTypes["StringFilter"] | undefined | null,
	image?: ResolverInputTypes["ImageFilter"] | undefined | null,
	video?: ResolverInputTypes["FileFilter"] | undefined | null
};
	["FileFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	asset?: ResolverInputTypes["SanityFileAssetFilter"] | undefined | null,
	media?: ResolverInputTypes["GlobalDocumentReferenceFilter"] | undefined | null
};
	["MinistryFilter"]: {
	/** Apply filters on document level */
	_?: ResolverInputTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ResolverInputTypes["IDFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_createdAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_rev?: ResolverInputTypes["StringFilter"] | undefined | null,
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	name?: ResolverInputTypes["StringFilter"] | undefined | null,
	slug?: ResolverInputTypes["SlugFilter"] | undefined | null,
	scripture?: ResolverInputTypes["ScriptureFilter"] | undefined | null,
	coach?: ResolverInputTypes["LeaderFilter"] | undefined | null,
	image?: ResolverInputTypes["ImageFilter"] | undefined | null
};
	["SlugFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	current?: ResolverInputTypes["StringFilter"] | undefined | null,
	source?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["ScriptureFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	passage?: ResolverInputTypes["StringFilter"] | undefined | null,
	verse?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["EventSorting"]: {
	_id?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_createdAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_updatedAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_rev?: ResolverInputTypes["SortOrder"] | undefined | null,
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	name?: ResolverInputTypes["SortOrder"] | undefined | null,
	description?: ResolverInputTypes["SortOrder"] | undefined | null,
	date?: ResolverInputTypes["SortOrder"] | undefined | null,
	time?: ResolverInputTypes["TimeTypeSorting"] | undefined | null,
	image?: ResolverInputTypes["ImageSorting"] | undefined | null,
	location?: ResolverInputTypes["SortOrder"] | undefined | null,
	how_to_signup?: ResolverInputTypes["SortOrder"] | undefined | null,
	external_host?: ResolverInputTypes["SortOrder"] | undefined | null,
	cost?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["TimeTypeSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	hour?: ResolverInputTypes["SortOrder"] | undefined | null,
	minute?: ResolverInputTypes["SortOrder"] | undefined | null,
	time_of_day?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["ImageSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	media?: ResolverInputTypes["GlobalDocumentReferenceSorting"] | undefined | null,
	hotspot?: ResolverInputTypes["SanityImageHotspotSorting"] | undefined | null,
	crop?: ResolverInputTypes["SanityImageCropSorting"] | undefined | null
};
	["GlobalDocumentReferenceSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_ref?: ResolverInputTypes["SortOrder"] | undefined | null,
	_weak?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["SanityImageHotspotSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	x?: ResolverInputTypes["SortOrder"] | undefined | null,
	y?: ResolverInputTypes["SortOrder"] | undefined | null,
	height?: ResolverInputTypes["SortOrder"] | undefined | null,
	width?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["SanityImageCropSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	top?: ResolverInputTypes["SortOrder"] | undefined | null,
	bottom?: ResolverInputTypes["SortOrder"] | undefined | null,
	left?: ResolverInputTypes["SortOrder"] | undefined | null,
	right?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["LeaderSorting"]: {
	_id?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_createdAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_updatedAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_rev?: ResolverInputTypes["SortOrder"] | undefined | null,
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	position?: ResolverInputTypes["SortOrder"] | undefined | null,
	category?: ResolverInputTypes["SortOrder"] | undefined | null,
	description?: ResolverInputTypes["SortOrder"] | undefined | null,
	image?: ResolverInputTypes["ImageSorting"] | undefined | null,
	video?: ResolverInputTypes["FileSorting"] | undefined | null
};
	["FileSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	media?: ResolverInputTypes["GlobalDocumentReferenceSorting"] | undefined | null
};
	["DeepDiveFilter"]: {
	/** Apply filters on document level */
	_?: ResolverInputTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ResolverInputTypes["IDFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_createdAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_rev?: ResolverInputTypes["StringFilter"] | undefined | null,
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	name?: ResolverInputTypes["StringFilter"] | undefined | null,
	slug?: ResolverInputTypes["SlugFilter"] | undefined | null,
	image?: ResolverInputTypes["ImageFilter"] | undefined | null,
	start_date?: ResolverInputTypes["DateFilter"] | undefined | null,
	end_date?: ResolverInputTypes["DateFilter"] | undefined | null,
	accepting_new_students?: ResolverInputTypes["BooleanFilter"] | undefined | null
};
	["DeepDiveSorting"]: {
	_id?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_createdAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_updatedAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_rev?: ResolverInputTypes["SortOrder"] | undefined | null,
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	name?: ResolverInputTypes["SortOrder"] | undefined | null,
	slug?: ResolverInputTypes["SlugSorting"] | undefined | null,
	image?: ResolverInputTypes["ImageSorting"] | undefined | null,
	start_date?: ResolverInputTypes["SortOrder"] | undefined | null,
	end_date?: ResolverInputTypes["SortOrder"] | undefined | null,
	accepting_new_students?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["SlugSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	current?: ResolverInputTypes["SortOrder"] | undefined | null,
	source?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["MinistrySorting"]: {
	_id?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_createdAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_updatedAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_rev?: ResolverInputTypes["SortOrder"] | undefined | null,
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	name?: ResolverInputTypes["SortOrder"] | undefined | null,
	slug?: ResolverInputTypes["SlugSorting"] | undefined | null,
	scripture?: ResolverInputTypes["ScriptureSorting"] | undefined | null,
	image?: ResolverInputTypes["ImageSorting"] | undefined | null
};
	["ScriptureSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	passage?: ResolverInputTypes["SortOrder"] | undefined | null,
	verse?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["NextGenPageFilter"]: {
	/** Apply filters on document level */
	_?: ResolverInputTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ResolverInputTypes["IDFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_createdAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_rev?: ResolverInputTypes["StringFilter"] | undefined | null,
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	cirriculum_file?: ResolverInputTypes["FileFilter"] | undefined | null
};
	["NextGenPageSorting"]: {
	_id?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_createdAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_updatedAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_rev?: ResolverInputTypes["SortOrder"] | undefined | null,
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	cirriculum_file?: ResolverInputTypes["FileSorting"] | undefined | null
};
	["ProductFilter"]: {
	/** Apply filters on document level */
	_?: ResolverInputTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ResolverInputTypes["IDFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_createdAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_rev?: ResolverInputTypes["StringFilter"] | undefined | null,
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	title?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["ProductSorting"]: {
	_id?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_createdAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_updatedAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_rev?: ResolverInputTypes["SortOrder"] | undefined | null,
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	title?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["DocumentFilter"]: {
	/** Apply filters on document level */
	_?: ResolverInputTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ResolverInputTypes["IDFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_createdAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ResolverInputTypes["DatetimeFilter"] | undefined | null,
	_rev?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["DocumentSorting"]: {
	_id?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_createdAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_updatedAt?: ResolverInputTypes["SortOrder"] | undefined | null,
	_rev?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["Block"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	children?:ResolverInputTypes["Span"],
	style?:boolean | `@${string}`,
	listItem?:boolean | `@${string}`,
	level?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["Span"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	marks?:boolean | `@${string}`,
	text?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["CrossDatasetReference"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	_ref?:boolean | `@${string}`,
	_weak?:boolean | `@${string}`,
	_dataset?:boolean | `@${string}`,
	_projectId?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["ShopifyAssetPreview"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	height?:boolean | `@${string}`,
	width?:boolean | `@${string}`,
	url?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["ShopifyAssetMetadata"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	alt?:boolean | `@${string}`,
	duration?:boolean | `@${string}`,
	fileSize?:boolean | `@${string}`,
	height?:boolean | `@${string}`,
	width?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["ShopifyAsset"]: AliasType<{
	_key?:boolean | `@${string}`,
	_type?:boolean | `@${string}`,
	filename?:boolean | `@${string}`,
	id?:boolean | `@${string}`,
	meta?:ResolverInputTypes["ShopifyAssetMetadata"],
	preview?:ResolverInputTypes["ShopifyAssetPreview"],
	type?:boolean | `@${string}`,
	url?:boolean | `@${string}`,
		__typename?: boolean | `@${string}`
}>;
	["IntFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: number | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: number | undefined | null,
	/** Checks if the value is greater than the given input. */
	gt?: number | undefined | null,
	/** Checks if the value is greater than or equal to the given input. */
	gte?: number | undefined | null,
	/** Checks if the value is lesser than the given input. */
	lt?: number | undefined | null,
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: number | undefined | null,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null
};
	["CrossDatasetReferenceFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	_ref?: ResolverInputTypes["StringFilter"] | undefined | null,
	_weak?: ResolverInputTypes["BooleanFilter"] | undefined | null,
	_dataset?: ResolverInputTypes["StringFilter"] | undefined | null,
	_projectId?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["ShopifyAssetPreviewFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	height?: ResolverInputTypes["FloatFilter"] | undefined | null,
	width?: ResolverInputTypes["FloatFilter"] | undefined | null,
	url?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["ShopifyAssetMetadataFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	alt?: ResolverInputTypes["StringFilter"] | undefined | null,
	duration?: ResolverInputTypes["FloatFilter"] | undefined | null,
	fileSize?: ResolverInputTypes["FloatFilter"] | undefined | null,
	height?: ResolverInputTypes["FloatFilter"] | undefined | null,
	width?: ResolverInputTypes["FloatFilter"] | undefined | null
};
	["ShopifyAssetFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	filename?: ResolverInputTypes["StringFilter"] | undefined | null,
	id?: ResolverInputTypes["StringFilter"] | undefined | null,
	meta?: ResolverInputTypes["ShopifyAssetMetadataFilter"] | undefined | null,
	preview?: ResolverInputTypes["ShopifyAssetPreviewFilter"] | undefined | null,
	type?: ResolverInputTypes["StringFilter"] | undefined | null,
	url?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["MeetingDetailsTypeFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	day?: ResolverInputTypes["StringFilter"] | undefined | null,
	time?: ResolverInputTypes["TimeTypeFilter"] | undefined | null,
	location?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["NextGenRosterSignupGuardianFilter"]: {
	_key?: ResolverInputTypes["StringFilter"] | undefined | null,
	_type?: ResolverInputTypes["StringFilter"] | undefined | null,
	contact?: ResolverInputTypes["ContactFilter"] | undefined | null,
	relationship_to_child?: ResolverInputTypes["StringFilter"] | undefined | null
};
	["CrossDatasetReferenceSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	_ref?: ResolverInputTypes["SortOrder"] | undefined | null,
	_weak?: ResolverInputTypes["SortOrder"] | undefined | null,
	_dataset?: ResolverInputTypes["SortOrder"] | undefined | null,
	_projectId?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["ShopifyAssetPreviewSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	height?: ResolverInputTypes["SortOrder"] | undefined | null,
	width?: ResolverInputTypes["SortOrder"] | undefined | null,
	url?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["ShopifyAssetMetadataSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	alt?: ResolverInputTypes["SortOrder"] | undefined | null,
	duration?: ResolverInputTypes["SortOrder"] | undefined | null,
	fileSize?: ResolverInputTypes["SortOrder"] | undefined | null,
	height?: ResolverInputTypes["SortOrder"] | undefined | null,
	width?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["ShopifyAssetSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	filename?: ResolverInputTypes["SortOrder"] | undefined | null,
	id?: ResolverInputTypes["SortOrder"] | undefined | null,
	meta?: ResolverInputTypes["ShopifyAssetMetadataSorting"] | undefined | null,
	preview?: ResolverInputTypes["ShopifyAssetPreviewSorting"] | undefined | null,
	type?: ResolverInputTypes["SortOrder"] | undefined | null,
	url?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["MeetingDetailsTypeSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	day?: ResolverInputTypes["SortOrder"] | undefined | null,
	time?: ResolverInputTypes["TimeTypeSorting"] | undefined | null,
	location?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["NextGenRosterSignupGuardianSorting"]: {
	_key?: ResolverInputTypes["SortOrder"] | undefined | null,
	_type?: ResolverInputTypes["SortOrder"] | undefined | null,
	relationship_to_child?: ResolverInputTypes["SortOrder"] | undefined | null
};
	["ID"]:unknown
  }

export type ModelTypes = {
    ["schema"]: {
	query?: ModelTypes["RootQuery"] | undefined | null
};
	["RootQuery"]: {
		SanityImageAsset?: ModelTypes["SanityImageAsset"] | undefined | null,
	SanityFileAsset?: ModelTypes["SanityFileAsset"] | undefined | null,
	EventRental?: ModelTypes["EventRental"] | undefined | null,
	PrayerRequest?: ModelTypes["PrayerRequest"] | undefined | null,
	RightnowMedia?: ModelTypes["RightnowMedia"] | undefined | null,
	GiftAssessment?: ModelTypes["GiftAssessment"] | undefined | null,
	VisitorFeedback?: ModelTypes["VisitorFeedback"] | undefined | null,
	ScheduledVisit?: ModelTypes["ScheduledVisit"] | undefined | null,
	MinistryConnection?: ModelTypes["MinistryConnection"] | undefined | null,
	NextGenRosterSignup?: ModelTypes["NextGenRosterSignup"] | undefined | null,
	Contact?: ModelTypes["Contact"] | undefined | null,
	Event?: ModelTypes["Event"] | undefined | null,
	Leader?: ModelTypes["Leader"] | undefined | null,
	DeepDive?: ModelTypes["DeepDive"] | undefined | null,
	Ministry?: ModelTypes["Ministry"] | undefined | null,
	NextGenPage?: ModelTypes["NextGenPage"] | undefined | null,
	Product?: ModelTypes["Product"] | undefined | null,
	Document?: ModelTypes["Document"] | undefined | null,
	allSanityImageAsset: Array<ModelTypes["SanityImageAsset"]>,
	allSanityFileAsset: Array<ModelTypes["SanityFileAsset"]>,
	allEventRental: Array<ModelTypes["EventRental"]>,
	allPrayerRequest: Array<ModelTypes["PrayerRequest"]>,
	allRightnowMedia: Array<ModelTypes["RightnowMedia"]>,
	allGiftAssessment: Array<ModelTypes["GiftAssessment"]>,
	allVisitorFeedback: Array<ModelTypes["VisitorFeedback"]>,
	allScheduledVisit: Array<ModelTypes["ScheduledVisit"]>,
	allMinistryConnection: Array<ModelTypes["MinistryConnection"]>,
	allNextGenRosterSignup: Array<ModelTypes["NextGenRosterSignup"]>,
	allContact: Array<ModelTypes["Contact"]>,
	allEvent: Array<ModelTypes["Event"]>,
	allLeader: Array<ModelTypes["Leader"]>,
	allDeepDive: Array<ModelTypes["DeepDive"]>,
	allMinistry: Array<ModelTypes["Ministry"]>,
	allNextGenPage: Array<ModelTypes["NextGenPage"]>,
	allProduct: Array<ModelTypes["Product"]>,
	allDocument: Array<ModelTypes["Document"]>
};
	["SanityImageAsset"]: {
		/** Document ID */
	_id?: ModelTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: ModelTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: ModelTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	originalFilename?: string | undefined | null,
	label?: string | undefined | null,
	title?: string | undefined | null,
	description?: string | undefined | null,
	altText?: string | undefined | null,
	sha1hash?: string | undefined | null,
	extension?: string | undefined | null,
	mimeType?: string | undefined | null,
	size?: number | undefined | null,
	assetId?: string | undefined | null,
	uploadId?: string | undefined | null,
	path?: string | undefined | null,
	url?: string | undefined | null,
	metadata?: ModelTypes["SanityImageMetadata"] | undefined | null,
	source?: ModelTypes["SanityAssetSourceData"] | undefined | null
};
	/** A Sanity document */
["Document"]: ModelTypes["SanityImageAsset"] | ModelTypes["SanityFileAsset"] | ModelTypes["EventRental"] | ModelTypes["Contact"] | ModelTypes["PrayerRequest"] | ModelTypes["RightnowMedia"] | ModelTypes["GiftAssessment"] | ModelTypes["VisitorFeedback"] | ModelTypes["ScheduledVisit"] | ModelTypes["MinistryConnection"] | ModelTypes["NextGenRosterSignup"] | ModelTypes["Event"] | ModelTypes["Leader"] | ModelTypes["Ministry"] | ModelTypes["DeepDive"] | ModelTypes["NextGenPage"] | ModelTypes["Product"];
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
["DateTime"]:any;
	["SanityImageMetadata"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	location?: ModelTypes["Geopoint"] | undefined | null,
	dimensions?: ModelTypes["SanityImageDimensions"] | undefined | null,
	palette?: ModelTypes["SanityImagePalette"] | undefined | null,
	lqip?: string | undefined | null,
	blurHash?: string | undefined | null,
	hasAlpha?: boolean | undefined | null,
	isOpaque?: boolean | undefined | null
};
	["Geopoint"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	lat?: number | undefined | null,
	lng?: number | undefined | null,
	alt?: number | undefined | null
};
	["SanityImageDimensions"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	height?: number | undefined | null,
	width?: number | undefined | null,
	aspectRatio?: number | undefined | null
};
	["SanityImagePalette"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	darkMuted?: ModelTypes["SanityImagePaletteSwatch"] | undefined | null,
	lightVibrant?: ModelTypes["SanityImagePaletteSwatch"] | undefined | null,
	darkVibrant?: ModelTypes["SanityImagePaletteSwatch"] | undefined | null,
	vibrant?: ModelTypes["SanityImagePaletteSwatch"] | undefined | null,
	dominant?: ModelTypes["SanityImagePaletteSwatch"] | undefined | null,
	lightMuted?: ModelTypes["SanityImagePaletteSwatch"] | undefined | null,
	muted?: ModelTypes["SanityImagePaletteSwatch"] | undefined | null
};
	["SanityImagePaletteSwatch"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	background?: string | undefined | null,
	foreground?: string | undefined | null,
	population?: number | undefined | null,
	title?: string | undefined | null
};
	["SanityAssetSourceData"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	/** A canonical name for the source this asset is originating from */
	name?: string | undefined | null,
	/** The unique ID for the asset within the originating source so you can programatically find back to it */
	id?: string | undefined | null,
	/** A URL to find more information about this asset in the originating source */
	url?: string | undefined | null
};
	["SanityFileAsset"]: {
		/** Document ID */
	_id?: ModelTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: ModelTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: ModelTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	originalFilename?: string | undefined | null,
	label?: string | undefined | null,
	title?: string | undefined | null,
	description?: string | undefined | null,
	altText?: string | undefined | null,
	sha1hash?: string | undefined | null,
	extension?: string | undefined | null,
	mimeType?: string | undefined | null,
	size?: number | undefined | null,
	assetId?: string | undefined | null,
	uploadId?: string | undefined | null,
	path?: string | undefined | null,
	url?: string | undefined | null,
	source?: ModelTypes["SanityAssetSourceData"] | undefined | null
};
	["EventRental"]: {
		/** Document ID */
	_id?: ModelTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: ModelTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: ModelTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	contact?: ModelTypes["Contact"] | undefined | null,
	purpose_for_rental?: string | undefined | null,
	describe_your_event?: string | undefined | null,
	phone?: string | undefined | null,
	email?: string | undefined | null,
	company_name?: string | undefined | null,
	company_phone?: string | undefined | null,
	referred?: string | undefined | null,
	referred_by?: string | undefined | null
};
	["Contact"]: {
		/** Document ID */
	_id?: ModelTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: ModelTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: ModelTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	first_name?: string | undefined | null,
	last_name?: string | undefined | null,
	phone?: string | undefined | null,
	email?: string | undefined | null
};
	["PrayerRequest"]: {
		/** Document ID */
	_id?: ModelTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: ModelTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: ModelTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	contact?: ModelTypes["Contact"] | undefined | null,
	request_email_back?: string | undefined | null,
	request?: string | undefined | null
};
	["RightnowMedia"]: {
		/** Document ID */
	_id?: ModelTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: ModelTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: ModelTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	contact?: ModelTypes["Contact"] | undefined | null,
	wind_member?: string | undefined | null,
	has_access?: string | undefined | null
};
	["GiftAssessment"]: {
		/** Document ID */
	_id?: ModelTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: ModelTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: ModelTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	contact?: ModelTypes["Contact"] | undefined | null,
	dominate_gifts?: string | undefined | null,
	subordinate_gifts?: string | undefined | null,
	ministries_involved_in?: string | undefined | null,
	change_in_ministry?: string | undefined | null,
	lay_or_clergy?: string | undefined | null
};
	["VisitorFeedback"]: {
		/** Document ID */
	_id?: ModelTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: ModelTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: ModelTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	contact?: ModelTypes["Contact"] | undefined | null,
	feedback?: string | undefined | null
};
	["ScheduledVisit"]: {
		/** Document ID */
	_id?: ModelTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: ModelTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: ModelTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	contact?: ModelTypes["Contact"] | undefined | null,
	attendance?: number | undefined | null,
	day_of_visit?: string | undefined | null
};
	["MinistryConnection"]: {
		/** Document ID */
	_id?: ModelTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: ModelTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: ModelTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	contact?: ModelTypes["Contact"] | undefined | null,
	ministry_interests?: Array<string | undefined | null> | undefined | null
};
	["NextGenRosterSignup"]: {
		/** Document ID */
	_id?: ModelTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: ModelTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: ModelTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	first_name?: string | undefined | null,
	last_name?: string | undefined | null,
	age?: string | undefined | null,
	grade?: string | undefined | null,
	gender?: string | undefined | null,
	hobbies?: string | undefined | null,
	allergies?: string | undefined | null,
	guardians?: Array<ModelTypes["NextGenRosterSignupGuardian"] | undefined | null> | undefined | null
};
	["NextGenRosterSignupGuardian"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	contact?: ModelTypes["Contact"] | undefined | null,
	relationship_to_child?: string | undefined | null
};
	["Event"]: {
		/** Document ID */
	_id?: ModelTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: ModelTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: ModelTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	name?: string | undefined | null,
	/** Describe the event. */
	description?: string | undefined | null,
	date?: ModelTypes["Date"] | undefined | null,
	time?: ModelTypes["TimeType"] | undefined | null,
	categories?: Array<string | undefined | null> | undefined | null,
	image?: ModelTypes["Image"] | undefined | null,
	/** Where is the event happening. */
	location?: string | undefined | null,
	/** Instructions for how to join/participate in this event. */
	how_to_signup?: string | undefined | null,
	/** Instructions for who to contact regarding this event. */
	contact?: ModelTypes["Leader"] | undefined | null,
	/** Select if a Ministry is the organizer/host for this event. */
	ministry_event?: ModelTypes["Ministry"] | undefined | null,
	/** Is there an external organization/host for this event? */
	external_host?: string | undefined | null,
	help_needed?: Array<string | undefined | null> | undefined | null,
	/** Are there any costs associated with participation in this event? (e.g., $40.00 per Adult ticket) */
	cost?: string | undefined | null
};
	/** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
["Date"]:any;
	["TimeType"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	hour?: string | undefined | null,
	minute?: string | undefined | null,
	time_of_day?: string | undefined | null
};
	["Image"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	asset?: ModelTypes["SanityImageAsset"] | undefined | null,
	media?: ModelTypes["GlobalDocumentReference"] | undefined | null,
	hotspot?: ModelTypes["SanityImageHotspot"] | undefined | null,
	crop?: ModelTypes["SanityImageCrop"] | undefined | null
};
	["GlobalDocumentReference"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	_ref?: string | undefined | null,
	_weak?: boolean | undefined | null
};
	["SanityImageHotspot"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	x?: number | undefined | null,
	y?: number | undefined | null,
	height?: number | undefined | null,
	width?: number | undefined | null
};
	["SanityImageCrop"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	top?: number | undefined | null,
	bottom?: number | undefined | null,
	left?: number | undefined | null,
	right?: number | undefined | null
};
	["Leader"]: {
		/** Document ID */
	_id?: ModelTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: ModelTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: ModelTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	contact?: ModelTypes["Contact"] | undefined | null,
	/** The official position assigned to the Leader. */
	position?: string | undefined | null,
	/** Select a category this leader belongs to (if they fit more than one; select their primary role). */
	category?: string | undefined | null,
	/** Describe the Leader's personailty, goals, and aspirations (3-7 sentences). */
	description?: string | undefined | null,
	roles?: Array<string | undefined | null> | undefined | null,
	image?: ModelTypes["Image"] | undefined | null,
	video?: ModelTypes["File"] | undefined | null
};
	["File"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	asset?: ModelTypes["SanityFileAsset"] | undefined | null,
	media?: ModelTypes["GlobalDocumentReference"] | undefined | null
};
	["Ministry"]: {
		/** Document ID */
	_id?: ModelTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: ModelTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: ModelTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	name?: string | undefined | null,
	slug?: ModelTypes["Slug"] | undefined | null,
	scripture?: ModelTypes["Scripture"] | undefined | null,
	descriptionRaw?: ModelTypes["JSON"] | undefined | null,
	coordinators?: Array<ModelTypes["Leader"] | undefined | null> | undefined | null,
	/** Select the coach for this ministry. */
	coach?: ModelTypes["Leader"] | undefined | null,
	image?: ModelTypes["Image"] | undefined | null,
	meeting_details?: Array<ModelTypes["MeetingDetailsType"] | undefined | null> | undefined | null
};
	["Slug"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	current?: string | undefined | null,
	source?: string | undefined | null
};
	["Scripture"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	passage?: string | undefined | null,
	verse?: string | undefined | null
};
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
["JSON"]:any;
	["MeetingDetailsType"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	day?: string | undefined | null,
	time?: ModelTypes["TimeType"] | undefined | null,
	location?: string | undefined | null
};
	["DeepDive"]: {
		/** Document ID */
	_id?: ModelTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: ModelTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: ModelTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	name?: string | undefined | null,
	slug?: ModelTypes["Slug"] | undefined | null,
	descriptionRaw?: ModelTypes["JSON"] | undefined | null,
	instructors?: Array<ModelTypes["Leader"] | undefined | null> | undefined | null,
	image?: ModelTypes["Image"] | undefined | null,
	start_date?: ModelTypes["Date"] | undefined | null,
	end_date?: ModelTypes["Date"] | undefined | null,
	required_materials?: Array<string | undefined | null> | undefined | null,
	meeting_details?: Array<ModelTypes["MeetingDetailsType"] | undefined | null> | undefined | null,
	/** Is this deep dive actively accepting new Students? */
	accepting_new_students?: boolean | undefined | null
};
	["NextGenPage"]: {
		/** Document ID */
	_id?: ModelTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: ModelTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: ModelTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	educators?: Array<ModelTypes["Leader"] | undefined | null> | undefined | null,
	cirriculum_file?: ModelTypes["File"] | undefined | null
};
	["Product"]: {
		/** Document ID */
	_id?: ModelTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: ModelTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: ModelTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	title?: string | undefined | null
};
	["SanityImageAssetFilter"]: {
	/** Apply filters on document level */
	_?: ModelTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ModelTypes["IDFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_createdAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_rev?: ModelTypes["StringFilter"] | undefined | null,
	_key?: ModelTypes["StringFilter"] | undefined | null,
	originalFilename?: ModelTypes["StringFilter"] | undefined | null,
	label?: ModelTypes["StringFilter"] | undefined | null,
	title?: ModelTypes["StringFilter"] | undefined | null,
	description?: ModelTypes["StringFilter"] | undefined | null,
	altText?: ModelTypes["StringFilter"] | undefined | null,
	sha1hash?: ModelTypes["StringFilter"] | undefined | null,
	extension?: ModelTypes["StringFilter"] | undefined | null,
	mimeType?: ModelTypes["StringFilter"] | undefined | null,
	size?: ModelTypes["FloatFilter"] | undefined | null,
	assetId?: ModelTypes["StringFilter"] | undefined | null,
	uploadId?: ModelTypes["StringFilter"] | undefined | null,
	path?: ModelTypes["StringFilter"] | undefined | null,
	url?: ModelTypes["StringFilter"] | undefined | null,
	metadata?: ModelTypes["SanityImageMetadataFilter"] | undefined | null,
	source?: ModelTypes["SanityAssetSourceDataFilter"] | undefined | null
};
	["Sanity_DocumentFilter"]: {
	/** All documents referencing the given document ID. */
	references?: ModelTypes["ID"] | undefined | null,
	/** All documents that are drafts. */
	is_draft?: boolean | undefined | null
};
	["IDFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: ModelTypes["ID"] | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: ModelTypes["ID"] | undefined | null,
	/** Checks if the value matches the given word/words. */
	matches?: ModelTypes["ID"] | undefined | null,
	in?: Array<ModelTypes["ID"]> | undefined | null,
	nin?: Array<ModelTypes["ID"]> | undefined | null
};
	["StringFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: string | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: string | undefined | null,
	/** Checks if the value matches the given word/words. */
	matches?: string | undefined | null,
	in?: Array<string> | undefined | null,
	nin?: Array<string> | undefined | null,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null
};
	["DatetimeFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: ModelTypes["DateTime"] | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: ModelTypes["DateTime"] | undefined | null,
	/** Checks if the value is greater than the given input. */
	gt?: ModelTypes["DateTime"] | undefined | null,
	/** Checks if the value is greater than or equal to the given input. */
	gte?: ModelTypes["DateTime"] | undefined | null,
	/** Checks if the value is lesser than the given input. */
	lt?: ModelTypes["DateTime"] | undefined | null,
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: ModelTypes["DateTime"] | undefined | null,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null
};
	["FloatFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: number | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: number | undefined | null,
	/** Checks if the value is greater than the given input. */
	gt?: number | undefined | null,
	/** Checks if the value is greater than or equal to the given input. */
	gte?: number | undefined | null,
	/** Checks if the value is lesser than the given input. */
	lt?: number | undefined | null,
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: number | undefined | null,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null
};
	["SanityImageMetadataFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	location?: ModelTypes["GeopointFilter"] | undefined | null,
	dimensions?: ModelTypes["SanityImageDimensionsFilter"] | undefined | null,
	palette?: ModelTypes["SanityImagePaletteFilter"] | undefined | null,
	lqip?: ModelTypes["StringFilter"] | undefined | null,
	blurHash?: ModelTypes["StringFilter"] | undefined | null,
	hasAlpha?: ModelTypes["BooleanFilter"] | undefined | null,
	isOpaque?: ModelTypes["BooleanFilter"] | undefined | null
};
	["GeopointFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	lat?: ModelTypes["FloatFilter"] | undefined | null,
	lng?: ModelTypes["FloatFilter"] | undefined | null,
	alt?: ModelTypes["FloatFilter"] | undefined | null
};
	["SanityImageDimensionsFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	height?: ModelTypes["FloatFilter"] | undefined | null,
	width?: ModelTypes["FloatFilter"] | undefined | null,
	aspectRatio?: ModelTypes["FloatFilter"] | undefined | null
};
	["SanityImagePaletteFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	darkMuted?: ModelTypes["SanityImagePaletteSwatchFilter"] | undefined | null,
	lightVibrant?: ModelTypes["SanityImagePaletteSwatchFilter"] | undefined | null,
	darkVibrant?: ModelTypes["SanityImagePaletteSwatchFilter"] | undefined | null,
	vibrant?: ModelTypes["SanityImagePaletteSwatchFilter"] | undefined | null,
	dominant?: ModelTypes["SanityImagePaletteSwatchFilter"] | undefined | null,
	lightMuted?: ModelTypes["SanityImagePaletteSwatchFilter"] | undefined | null,
	muted?: ModelTypes["SanityImagePaletteSwatchFilter"] | undefined | null
};
	["SanityImagePaletteSwatchFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	background?: ModelTypes["StringFilter"] | undefined | null,
	foreground?: ModelTypes["StringFilter"] | undefined | null,
	population?: ModelTypes["FloatFilter"] | undefined | null,
	title?: ModelTypes["StringFilter"] | undefined | null
};
	["BooleanFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: boolean | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: boolean | undefined | null,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null
};
	["SanityAssetSourceDataFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	name?: ModelTypes["StringFilter"] | undefined | null,
	id?: ModelTypes["StringFilter"] | undefined | null,
	url?: ModelTypes["StringFilter"] | undefined | null
};
	["SanityImageAssetSorting"]: {
	_id?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_createdAt?: ModelTypes["SortOrder"] | undefined | null,
	_updatedAt?: ModelTypes["SortOrder"] | undefined | null,
	_rev?: ModelTypes["SortOrder"] | undefined | null,
	_key?: ModelTypes["SortOrder"] | undefined | null,
	originalFilename?: ModelTypes["SortOrder"] | undefined | null,
	label?: ModelTypes["SortOrder"] | undefined | null,
	title?: ModelTypes["SortOrder"] | undefined | null,
	description?: ModelTypes["SortOrder"] | undefined | null,
	altText?: ModelTypes["SortOrder"] | undefined | null,
	sha1hash?: ModelTypes["SortOrder"] | undefined | null,
	extension?: ModelTypes["SortOrder"] | undefined | null,
	mimeType?: ModelTypes["SortOrder"] | undefined | null,
	size?: ModelTypes["SortOrder"] | undefined | null,
	assetId?: ModelTypes["SortOrder"] | undefined | null,
	uploadId?: ModelTypes["SortOrder"] | undefined | null,
	path?: ModelTypes["SortOrder"] | undefined | null,
	url?: ModelTypes["SortOrder"] | undefined | null,
	metadata?: ModelTypes["SanityImageMetadataSorting"] | undefined | null,
	source?: ModelTypes["SanityAssetSourceDataSorting"] | undefined | null
};
	["SortOrder"]:SortOrder;
	["SanityImageMetadataSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	location?: ModelTypes["GeopointSorting"] | undefined | null,
	dimensions?: ModelTypes["SanityImageDimensionsSorting"] | undefined | null,
	palette?: ModelTypes["SanityImagePaletteSorting"] | undefined | null,
	lqip?: ModelTypes["SortOrder"] | undefined | null,
	blurHash?: ModelTypes["SortOrder"] | undefined | null,
	hasAlpha?: ModelTypes["SortOrder"] | undefined | null,
	isOpaque?: ModelTypes["SortOrder"] | undefined | null
};
	["GeopointSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	lat?: ModelTypes["SortOrder"] | undefined | null,
	lng?: ModelTypes["SortOrder"] | undefined | null,
	alt?: ModelTypes["SortOrder"] | undefined | null
};
	["SanityImageDimensionsSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	height?: ModelTypes["SortOrder"] | undefined | null,
	width?: ModelTypes["SortOrder"] | undefined | null,
	aspectRatio?: ModelTypes["SortOrder"] | undefined | null
};
	["SanityImagePaletteSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	darkMuted?: ModelTypes["SanityImagePaletteSwatchSorting"] | undefined | null,
	lightVibrant?: ModelTypes["SanityImagePaletteSwatchSorting"] | undefined | null,
	darkVibrant?: ModelTypes["SanityImagePaletteSwatchSorting"] | undefined | null,
	vibrant?: ModelTypes["SanityImagePaletteSwatchSorting"] | undefined | null,
	dominant?: ModelTypes["SanityImagePaletteSwatchSorting"] | undefined | null,
	lightMuted?: ModelTypes["SanityImagePaletteSwatchSorting"] | undefined | null,
	muted?: ModelTypes["SanityImagePaletteSwatchSorting"] | undefined | null
};
	["SanityImagePaletteSwatchSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	background?: ModelTypes["SortOrder"] | undefined | null,
	foreground?: ModelTypes["SortOrder"] | undefined | null,
	population?: ModelTypes["SortOrder"] | undefined | null,
	title?: ModelTypes["SortOrder"] | undefined | null
};
	["SanityAssetSourceDataSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	name?: ModelTypes["SortOrder"] | undefined | null,
	id?: ModelTypes["SortOrder"] | undefined | null,
	url?: ModelTypes["SortOrder"] | undefined | null
};
	["SanityFileAssetFilter"]: {
	/** Apply filters on document level */
	_?: ModelTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ModelTypes["IDFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_createdAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_rev?: ModelTypes["StringFilter"] | undefined | null,
	_key?: ModelTypes["StringFilter"] | undefined | null,
	originalFilename?: ModelTypes["StringFilter"] | undefined | null,
	label?: ModelTypes["StringFilter"] | undefined | null,
	title?: ModelTypes["StringFilter"] | undefined | null,
	description?: ModelTypes["StringFilter"] | undefined | null,
	altText?: ModelTypes["StringFilter"] | undefined | null,
	sha1hash?: ModelTypes["StringFilter"] | undefined | null,
	extension?: ModelTypes["StringFilter"] | undefined | null,
	mimeType?: ModelTypes["StringFilter"] | undefined | null,
	size?: ModelTypes["FloatFilter"] | undefined | null,
	assetId?: ModelTypes["StringFilter"] | undefined | null,
	uploadId?: ModelTypes["StringFilter"] | undefined | null,
	path?: ModelTypes["StringFilter"] | undefined | null,
	url?: ModelTypes["StringFilter"] | undefined | null,
	source?: ModelTypes["SanityAssetSourceDataFilter"] | undefined | null
};
	["SanityFileAssetSorting"]: {
	_id?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_createdAt?: ModelTypes["SortOrder"] | undefined | null,
	_updatedAt?: ModelTypes["SortOrder"] | undefined | null,
	_rev?: ModelTypes["SortOrder"] | undefined | null,
	_key?: ModelTypes["SortOrder"] | undefined | null,
	originalFilename?: ModelTypes["SortOrder"] | undefined | null,
	label?: ModelTypes["SortOrder"] | undefined | null,
	title?: ModelTypes["SortOrder"] | undefined | null,
	description?: ModelTypes["SortOrder"] | undefined | null,
	altText?: ModelTypes["SortOrder"] | undefined | null,
	sha1hash?: ModelTypes["SortOrder"] | undefined | null,
	extension?: ModelTypes["SortOrder"] | undefined | null,
	mimeType?: ModelTypes["SortOrder"] | undefined | null,
	size?: ModelTypes["SortOrder"] | undefined | null,
	assetId?: ModelTypes["SortOrder"] | undefined | null,
	uploadId?: ModelTypes["SortOrder"] | undefined | null,
	path?: ModelTypes["SortOrder"] | undefined | null,
	url?: ModelTypes["SortOrder"] | undefined | null,
	source?: ModelTypes["SanityAssetSourceDataSorting"] | undefined | null
};
	["EventRentalFilter"]: {
	/** Apply filters on document level */
	_?: ModelTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ModelTypes["IDFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_createdAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_rev?: ModelTypes["StringFilter"] | undefined | null,
	_key?: ModelTypes["StringFilter"] | undefined | null,
	contact?: ModelTypes["ContactFilter"] | undefined | null,
	purpose_for_rental?: ModelTypes["StringFilter"] | undefined | null,
	describe_your_event?: ModelTypes["StringFilter"] | undefined | null,
	phone?: ModelTypes["StringFilter"] | undefined | null,
	email?: ModelTypes["StringFilter"] | undefined | null,
	company_name?: ModelTypes["StringFilter"] | undefined | null,
	company_phone?: ModelTypes["StringFilter"] | undefined | null,
	referred?: ModelTypes["StringFilter"] | undefined | null,
	referred_by?: ModelTypes["StringFilter"] | undefined | null
};
	["ContactFilter"]: {
	/** Apply filters on document level */
	_?: ModelTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ModelTypes["IDFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_createdAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_rev?: ModelTypes["StringFilter"] | undefined | null,
	_key?: ModelTypes["StringFilter"] | undefined | null,
	first_name?: ModelTypes["StringFilter"] | undefined | null,
	last_name?: ModelTypes["StringFilter"] | undefined | null,
	phone?: ModelTypes["StringFilter"] | undefined | null,
	email?: ModelTypes["StringFilter"] | undefined | null
};
	["EventRentalSorting"]: {
	_id?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_createdAt?: ModelTypes["SortOrder"] | undefined | null,
	_updatedAt?: ModelTypes["SortOrder"] | undefined | null,
	_rev?: ModelTypes["SortOrder"] | undefined | null,
	_key?: ModelTypes["SortOrder"] | undefined | null,
	purpose_for_rental?: ModelTypes["SortOrder"] | undefined | null,
	describe_your_event?: ModelTypes["SortOrder"] | undefined | null,
	phone?: ModelTypes["SortOrder"] | undefined | null,
	email?: ModelTypes["SortOrder"] | undefined | null,
	company_name?: ModelTypes["SortOrder"] | undefined | null,
	company_phone?: ModelTypes["SortOrder"] | undefined | null,
	referred?: ModelTypes["SortOrder"] | undefined | null,
	referred_by?: ModelTypes["SortOrder"] | undefined | null
};
	["PrayerRequestFilter"]: {
	/** Apply filters on document level */
	_?: ModelTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ModelTypes["IDFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_createdAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_rev?: ModelTypes["StringFilter"] | undefined | null,
	_key?: ModelTypes["StringFilter"] | undefined | null,
	contact?: ModelTypes["ContactFilter"] | undefined | null,
	request_email_back?: ModelTypes["StringFilter"] | undefined | null,
	request?: ModelTypes["StringFilter"] | undefined | null
};
	["PrayerRequestSorting"]: {
	_id?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_createdAt?: ModelTypes["SortOrder"] | undefined | null,
	_updatedAt?: ModelTypes["SortOrder"] | undefined | null,
	_rev?: ModelTypes["SortOrder"] | undefined | null,
	_key?: ModelTypes["SortOrder"] | undefined | null,
	request_email_back?: ModelTypes["SortOrder"] | undefined | null,
	request?: ModelTypes["SortOrder"] | undefined | null
};
	["RightnowMediaFilter"]: {
	/** Apply filters on document level */
	_?: ModelTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ModelTypes["IDFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_createdAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_rev?: ModelTypes["StringFilter"] | undefined | null,
	_key?: ModelTypes["StringFilter"] | undefined | null,
	contact?: ModelTypes["ContactFilter"] | undefined | null,
	wind_member?: ModelTypes["StringFilter"] | undefined | null,
	has_access?: ModelTypes["StringFilter"] | undefined | null
};
	["RightnowMediaSorting"]: {
	_id?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_createdAt?: ModelTypes["SortOrder"] | undefined | null,
	_updatedAt?: ModelTypes["SortOrder"] | undefined | null,
	_rev?: ModelTypes["SortOrder"] | undefined | null,
	_key?: ModelTypes["SortOrder"] | undefined | null,
	wind_member?: ModelTypes["SortOrder"] | undefined | null,
	has_access?: ModelTypes["SortOrder"] | undefined | null
};
	["GiftAssessmentFilter"]: {
	/** Apply filters on document level */
	_?: ModelTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ModelTypes["IDFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_createdAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_rev?: ModelTypes["StringFilter"] | undefined | null,
	_key?: ModelTypes["StringFilter"] | undefined | null,
	contact?: ModelTypes["ContactFilter"] | undefined | null,
	dominate_gifts?: ModelTypes["StringFilter"] | undefined | null,
	subordinate_gifts?: ModelTypes["StringFilter"] | undefined | null,
	ministries_involved_in?: ModelTypes["StringFilter"] | undefined | null,
	change_in_ministry?: ModelTypes["StringFilter"] | undefined | null,
	lay_or_clergy?: ModelTypes["StringFilter"] | undefined | null
};
	["GiftAssessmentSorting"]: {
	_id?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_createdAt?: ModelTypes["SortOrder"] | undefined | null,
	_updatedAt?: ModelTypes["SortOrder"] | undefined | null,
	_rev?: ModelTypes["SortOrder"] | undefined | null,
	_key?: ModelTypes["SortOrder"] | undefined | null,
	dominate_gifts?: ModelTypes["SortOrder"] | undefined | null,
	subordinate_gifts?: ModelTypes["SortOrder"] | undefined | null,
	ministries_involved_in?: ModelTypes["SortOrder"] | undefined | null,
	change_in_ministry?: ModelTypes["SortOrder"] | undefined | null,
	lay_or_clergy?: ModelTypes["SortOrder"] | undefined | null
};
	["VisitorFeedbackFilter"]: {
	/** Apply filters on document level */
	_?: ModelTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ModelTypes["IDFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_createdAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_rev?: ModelTypes["StringFilter"] | undefined | null,
	_key?: ModelTypes["StringFilter"] | undefined | null,
	contact?: ModelTypes["ContactFilter"] | undefined | null,
	feedback?: ModelTypes["StringFilter"] | undefined | null
};
	["VisitorFeedbackSorting"]: {
	_id?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_createdAt?: ModelTypes["SortOrder"] | undefined | null,
	_updatedAt?: ModelTypes["SortOrder"] | undefined | null,
	_rev?: ModelTypes["SortOrder"] | undefined | null,
	_key?: ModelTypes["SortOrder"] | undefined | null,
	feedback?: ModelTypes["SortOrder"] | undefined | null
};
	["ScheduledVisitFilter"]: {
	/** Apply filters on document level */
	_?: ModelTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ModelTypes["IDFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_createdAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_rev?: ModelTypes["StringFilter"] | undefined | null,
	_key?: ModelTypes["StringFilter"] | undefined | null,
	contact?: ModelTypes["ContactFilter"] | undefined | null,
	attendance?: ModelTypes["FloatFilter"] | undefined | null,
	day_of_visit?: ModelTypes["StringFilter"] | undefined | null
};
	["ScheduledVisitSorting"]: {
	_id?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_createdAt?: ModelTypes["SortOrder"] | undefined | null,
	_updatedAt?: ModelTypes["SortOrder"] | undefined | null,
	_rev?: ModelTypes["SortOrder"] | undefined | null,
	_key?: ModelTypes["SortOrder"] | undefined | null,
	attendance?: ModelTypes["SortOrder"] | undefined | null,
	day_of_visit?: ModelTypes["SortOrder"] | undefined | null
};
	["MinistryConnectionFilter"]: {
	/** Apply filters on document level */
	_?: ModelTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ModelTypes["IDFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_createdAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_rev?: ModelTypes["StringFilter"] | undefined | null,
	_key?: ModelTypes["StringFilter"] | undefined | null,
	contact?: ModelTypes["ContactFilter"] | undefined | null
};
	["MinistryConnectionSorting"]: {
	_id?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_createdAt?: ModelTypes["SortOrder"] | undefined | null,
	_updatedAt?: ModelTypes["SortOrder"] | undefined | null,
	_rev?: ModelTypes["SortOrder"] | undefined | null,
	_key?: ModelTypes["SortOrder"] | undefined | null
};
	["NextGenRosterSignupFilter"]: {
	/** Apply filters on document level */
	_?: ModelTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ModelTypes["IDFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_createdAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_rev?: ModelTypes["StringFilter"] | undefined | null,
	_key?: ModelTypes["StringFilter"] | undefined | null,
	first_name?: ModelTypes["StringFilter"] | undefined | null,
	last_name?: ModelTypes["StringFilter"] | undefined | null,
	age?: ModelTypes["StringFilter"] | undefined | null,
	grade?: ModelTypes["StringFilter"] | undefined | null,
	gender?: ModelTypes["StringFilter"] | undefined | null,
	hobbies?: ModelTypes["StringFilter"] | undefined | null,
	allergies?: ModelTypes["StringFilter"] | undefined | null
};
	["NextGenRosterSignupSorting"]: {
	_id?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_createdAt?: ModelTypes["SortOrder"] | undefined | null,
	_updatedAt?: ModelTypes["SortOrder"] | undefined | null,
	_rev?: ModelTypes["SortOrder"] | undefined | null,
	_key?: ModelTypes["SortOrder"] | undefined | null,
	first_name?: ModelTypes["SortOrder"] | undefined | null,
	last_name?: ModelTypes["SortOrder"] | undefined | null,
	age?: ModelTypes["SortOrder"] | undefined | null,
	grade?: ModelTypes["SortOrder"] | undefined | null,
	gender?: ModelTypes["SortOrder"] | undefined | null,
	hobbies?: ModelTypes["SortOrder"] | undefined | null,
	allergies?: ModelTypes["SortOrder"] | undefined | null
};
	["ContactSorting"]: {
	_id?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_createdAt?: ModelTypes["SortOrder"] | undefined | null,
	_updatedAt?: ModelTypes["SortOrder"] | undefined | null,
	_rev?: ModelTypes["SortOrder"] | undefined | null,
	_key?: ModelTypes["SortOrder"] | undefined | null,
	first_name?: ModelTypes["SortOrder"] | undefined | null,
	last_name?: ModelTypes["SortOrder"] | undefined | null,
	phone?: ModelTypes["SortOrder"] | undefined | null,
	email?: ModelTypes["SortOrder"] | undefined | null
};
	["EventFilter"]: {
	/** Apply filters on document level */
	_?: ModelTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ModelTypes["IDFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_createdAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_rev?: ModelTypes["StringFilter"] | undefined | null,
	_key?: ModelTypes["StringFilter"] | undefined | null,
	name?: ModelTypes["StringFilter"] | undefined | null,
	description?: ModelTypes["StringFilter"] | undefined | null,
	date?: ModelTypes["DateFilter"] | undefined | null,
	time?: ModelTypes["TimeTypeFilter"] | undefined | null,
	image?: ModelTypes["ImageFilter"] | undefined | null,
	location?: ModelTypes["StringFilter"] | undefined | null,
	how_to_signup?: ModelTypes["StringFilter"] | undefined | null,
	contact?: ModelTypes["LeaderFilter"] | undefined | null,
	ministry_event?: ModelTypes["MinistryFilter"] | undefined | null,
	external_host?: ModelTypes["StringFilter"] | undefined | null,
	cost?: ModelTypes["StringFilter"] | undefined | null
};
	["DateFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: ModelTypes["Date"] | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: ModelTypes["Date"] | undefined | null,
	/** Checks if the value is greater than the given input. */
	gt?: ModelTypes["Date"] | undefined | null,
	/** Checks if the value is greater than or equal to the given input. */
	gte?: ModelTypes["Date"] | undefined | null,
	/** Checks if the value is lesser than the given input. */
	lt?: ModelTypes["Date"] | undefined | null,
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: ModelTypes["Date"] | undefined | null,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null
};
	["TimeTypeFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	hour?: ModelTypes["StringFilter"] | undefined | null,
	minute?: ModelTypes["StringFilter"] | undefined | null,
	time_of_day?: ModelTypes["StringFilter"] | undefined | null
};
	["ImageFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	asset?: ModelTypes["SanityImageAssetFilter"] | undefined | null,
	media?: ModelTypes["GlobalDocumentReferenceFilter"] | undefined | null,
	hotspot?: ModelTypes["SanityImageHotspotFilter"] | undefined | null,
	crop?: ModelTypes["SanityImageCropFilter"] | undefined | null
};
	["GlobalDocumentReferenceFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_ref?: ModelTypes["StringFilter"] | undefined | null,
	_weak?: ModelTypes["BooleanFilter"] | undefined | null
};
	["SanityImageHotspotFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	x?: ModelTypes["FloatFilter"] | undefined | null,
	y?: ModelTypes["FloatFilter"] | undefined | null,
	height?: ModelTypes["FloatFilter"] | undefined | null,
	width?: ModelTypes["FloatFilter"] | undefined | null
};
	["SanityImageCropFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	top?: ModelTypes["FloatFilter"] | undefined | null,
	bottom?: ModelTypes["FloatFilter"] | undefined | null,
	left?: ModelTypes["FloatFilter"] | undefined | null,
	right?: ModelTypes["FloatFilter"] | undefined | null
};
	["LeaderFilter"]: {
	/** Apply filters on document level */
	_?: ModelTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ModelTypes["IDFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_createdAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_rev?: ModelTypes["StringFilter"] | undefined | null,
	_key?: ModelTypes["StringFilter"] | undefined | null,
	contact?: ModelTypes["ContactFilter"] | undefined | null,
	position?: ModelTypes["StringFilter"] | undefined | null,
	category?: ModelTypes["StringFilter"] | undefined | null,
	description?: ModelTypes["StringFilter"] | undefined | null,
	image?: ModelTypes["ImageFilter"] | undefined | null,
	video?: ModelTypes["FileFilter"] | undefined | null
};
	["FileFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	asset?: ModelTypes["SanityFileAssetFilter"] | undefined | null,
	media?: ModelTypes["GlobalDocumentReferenceFilter"] | undefined | null
};
	["MinistryFilter"]: {
	/** Apply filters on document level */
	_?: ModelTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ModelTypes["IDFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_createdAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_rev?: ModelTypes["StringFilter"] | undefined | null,
	_key?: ModelTypes["StringFilter"] | undefined | null,
	name?: ModelTypes["StringFilter"] | undefined | null,
	slug?: ModelTypes["SlugFilter"] | undefined | null,
	scripture?: ModelTypes["ScriptureFilter"] | undefined | null,
	coach?: ModelTypes["LeaderFilter"] | undefined | null,
	image?: ModelTypes["ImageFilter"] | undefined | null
};
	["SlugFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	current?: ModelTypes["StringFilter"] | undefined | null,
	source?: ModelTypes["StringFilter"] | undefined | null
};
	["ScriptureFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	passage?: ModelTypes["StringFilter"] | undefined | null,
	verse?: ModelTypes["StringFilter"] | undefined | null
};
	["EventSorting"]: {
	_id?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_createdAt?: ModelTypes["SortOrder"] | undefined | null,
	_updatedAt?: ModelTypes["SortOrder"] | undefined | null,
	_rev?: ModelTypes["SortOrder"] | undefined | null,
	_key?: ModelTypes["SortOrder"] | undefined | null,
	name?: ModelTypes["SortOrder"] | undefined | null,
	description?: ModelTypes["SortOrder"] | undefined | null,
	date?: ModelTypes["SortOrder"] | undefined | null,
	time?: ModelTypes["TimeTypeSorting"] | undefined | null,
	image?: ModelTypes["ImageSorting"] | undefined | null,
	location?: ModelTypes["SortOrder"] | undefined | null,
	how_to_signup?: ModelTypes["SortOrder"] | undefined | null,
	external_host?: ModelTypes["SortOrder"] | undefined | null,
	cost?: ModelTypes["SortOrder"] | undefined | null
};
	["TimeTypeSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	hour?: ModelTypes["SortOrder"] | undefined | null,
	minute?: ModelTypes["SortOrder"] | undefined | null,
	time_of_day?: ModelTypes["SortOrder"] | undefined | null
};
	["ImageSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	media?: ModelTypes["GlobalDocumentReferenceSorting"] | undefined | null,
	hotspot?: ModelTypes["SanityImageHotspotSorting"] | undefined | null,
	crop?: ModelTypes["SanityImageCropSorting"] | undefined | null
};
	["GlobalDocumentReferenceSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_ref?: ModelTypes["SortOrder"] | undefined | null,
	_weak?: ModelTypes["SortOrder"] | undefined | null
};
	["SanityImageHotspotSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	x?: ModelTypes["SortOrder"] | undefined | null,
	y?: ModelTypes["SortOrder"] | undefined | null,
	height?: ModelTypes["SortOrder"] | undefined | null,
	width?: ModelTypes["SortOrder"] | undefined | null
};
	["SanityImageCropSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	top?: ModelTypes["SortOrder"] | undefined | null,
	bottom?: ModelTypes["SortOrder"] | undefined | null,
	left?: ModelTypes["SortOrder"] | undefined | null,
	right?: ModelTypes["SortOrder"] | undefined | null
};
	["LeaderSorting"]: {
	_id?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_createdAt?: ModelTypes["SortOrder"] | undefined | null,
	_updatedAt?: ModelTypes["SortOrder"] | undefined | null,
	_rev?: ModelTypes["SortOrder"] | undefined | null,
	_key?: ModelTypes["SortOrder"] | undefined | null,
	position?: ModelTypes["SortOrder"] | undefined | null,
	category?: ModelTypes["SortOrder"] | undefined | null,
	description?: ModelTypes["SortOrder"] | undefined | null,
	image?: ModelTypes["ImageSorting"] | undefined | null,
	video?: ModelTypes["FileSorting"] | undefined | null
};
	["FileSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	media?: ModelTypes["GlobalDocumentReferenceSorting"] | undefined | null
};
	["DeepDiveFilter"]: {
	/** Apply filters on document level */
	_?: ModelTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ModelTypes["IDFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_createdAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_rev?: ModelTypes["StringFilter"] | undefined | null,
	_key?: ModelTypes["StringFilter"] | undefined | null,
	name?: ModelTypes["StringFilter"] | undefined | null,
	slug?: ModelTypes["SlugFilter"] | undefined | null,
	image?: ModelTypes["ImageFilter"] | undefined | null,
	start_date?: ModelTypes["DateFilter"] | undefined | null,
	end_date?: ModelTypes["DateFilter"] | undefined | null,
	accepting_new_students?: ModelTypes["BooleanFilter"] | undefined | null
};
	["DeepDiveSorting"]: {
	_id?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_createdAt?: ModelTypes["SortOrder"] | undefined | null,
	_updatedAt?: ModelTypes["SortOrder"] | undefined | null,
	_rev?: ModelTypes["SortOrder"] | undefined | null,
	_key?: ModelTypes["SortOrder"] | undefined | null,
	name?: ModelTypes["SortOrder"] | undefined | null,
	slug?: ModelTypes["SlugSorting"] | undefined | null,
	image?: ModelTypes["ImageSorting"] | undefined | null,
	start_date?: ModelTypes["SortOrder"] | undefined | null,
	end_date?: ModelTypes["SortOrder"] | undefined | null,
	accepting_new_students?: ModelTypes["SortOrder"] | undefined | null
};
	["SlugSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	current?: ModelTypes["SortOrder"] | undefined | null,
	source?: ModelTypes["SortOrder"] | undefined | null
};
	["MinistrySorting"]: {
	_id?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_createdAt?: ModelTypes["SortOrder"] | undefined | null,
	_updatedAt?: ModelTypes["SortOrder"] | undefined | null,
	_rev?: ModelTypes["SortOrder"] | undefined | null,
	_key?: ModelTypes["SortOrder"] | undefined | null,
	name?: ModelTypes["SortOrder"] | undefined | null,
	slug?: ModelTypes["SlugSorting"] | undefined | null,
	scripture?: ModelTypes["ScriptureSorting"] | undefined | null,
	image?: ModelTypes["ImageSorting"] | undefined | null
};
	["ScriptureSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	passage?: ModelTypes["SortOrder"] | undefined | null,
	verse?: ModelTypes["SortOrder"] | undefined | null
};
	["NextGenPageFilter"]: {
	/** Apply filters on document level */
	_?: ModelTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ModelTypes["IDFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_createdAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_rev?: ModelTypes["StringFilter"] | undefined | null,
	_key?: ModelTypes["StringFilter"] | undefined | null,
	cirriculum_file?: ModelTypes["FileFilter"] | undefined | null
};
	["NextGenPageSorting"]: {
	_id?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_createdAt?: ModelTypes["SortOrder"] | undefined | null,
	_updatedAt?: ModelTypes["SortOrder"] | undefined | null,
	_rev?: ModelTypes["SortOrder"] | undefined | null,
	_key?: ModelTypes["SortOrder"] | undefined | null,
	cirriculum_file?: ModelTypes["FileSorting"] | undefined | null
};
	["ProductFilter"]: {
	/** Apply filters on document level */
	_?: ModelTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ModelTypes["IDFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_createdAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_rev?: ModelTypes["StringFilter"] | undefined | null,
	_key?: ModelTypes["StringFilter"] | undefined | null,
	title?: ModelTypes["StringFilter"] | undefined | null
};
	["ProductSorting"]: {
	_id?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_createdAt?: ModelTypes["SortOrder"] | undefined | null,
	_updatedAt?: ModelTypes["SortOrder"] | undefined | null,
	_rev?: ModelTypes["SortOrder"] | undefined | null,
	_key?: ModelTypes["SortOrder"] | undefined | null,
	title?: ModelTypes["SortOrder"] | undefined | null
};
	["DocumentFilter"]: {
	/** Apply filters on document level */
	_?: ModelTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: ModelTypes["IDFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_createdAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: ModelTypes["DatetimeFilter"] | undefined | null,
	_rev?: ModelTypes["StringFilter"] | undefined | null
};
	["DocumentSorting"]: {
	_id?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_createdAt?: ModelTypes["SortOrder"] | undefined | null,
	_updatedAt?: ModelTypes["SortOrder"] | undefined | null,
	_rev?: ModelTypes["SortOrder"] | undefined | null
};
	["Block"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	children?: Array<ModelTypes["Span"] | undefined | null> | undefined | null,
	style?: string | undefined | null,
	listItem?: string | undefined | null,
	level?: number | undefined | null
};
	["Span"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	marks?: Array<string | undefined | null> | undefined | null,
	text?: string | undefined | null
};
	["CrossDatasetReference"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	_ref?: string | undefined | null,
	_weak?: boolean | undefined | null,
	_dataset?: string | undefined | null,
	_projectId?: string | undefined | null
};
	["ShopifyAssetPreview"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	height?: number | undefined | null,
	width?: number | undefined | null,
	url?: string | undefined | null
};
	["ShopifyAssetMetadata"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	alt?: string | undefined | null,
	duration?: number | undefined | null,
	fileSize?: number | undefined | null,
	height?: number | undefined | null,
	width?: number | undefined | null
};
	["ShopifyAsset"]: {
		_key?: string | undefined | null,
	_type?: string | undefined | null,
	filename?: string | undefined | null,
	id?: string | undefined | null,
	meta?: ModelTypes["ShopifyAssetMetadata"] | undefined | null,
	preview?: ModelTypes["ShopifyAssetPreview"] | undefined | null,
	type?: string | undefined | null,
	url?: string | undefined | null
};
	["IntFilter"]: {
	/** Checks if the value is equal to the given input. */
	eq?: number | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: number | undefined | null,
	/** Checks if the value is greater than the given input. */
	gt?: number | undefined | null,
	/** Checks if the value is greater than or equal to the given input. */
	gte?: number | undefined | null,
	/** Checks if the value is lesser than the given input. */
	lt?: number | undefined | null,
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: number | undefined | null,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null
};
	["CrossDatasetReferenceFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	_ref?: ModelTypes["StringFilter"] | undefined | null,
	_weak?: ModelTypes["BooleanFilter"] | undefined | null,
	_dataset?: ModelTypes["StringFilter"] | undefined | null,
	_projectId?: ModelTypes["StringFilter"] | undefined | null
};
	["ShopifyAssetPreviewFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	height?: ModelTypes["FloatFilter"] | undefined | null,
	width?: ModelTypes["FloatFilter"] | undefined | null,
	url?: ModelTypes["StringFilter"] | undefined | null
};
	["ShopifyAssetMetadataFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	alt?: ModelTypes["StringFilter"] | undefined | null,
	duration?: ModelTypes["FloatFilter"] | undefined | null,
	fileSize?: ModelTypes["FloatFilter"] | undefined | null,
	height?: ModelTypes["FloatFilter"] | undefined | null,
	width?: ModelTypes["FloatFilter"] | undefined | null
};
	["ShopifyAssetFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	filename?: ModelTypes["StringFilter"] | undefined | null,
	id?: ModelTypes["StringFilter"] | undefined | null,
	meta?: ModelTypes["ShopifyAssetMetadataFilter"] | undefined | null,
	preview?: ModelTypes["ShopifyAssetPreviewFilter"] | undefined | null,
	type?: ModelTypes["StringFilter"] | undefined | null,
	url?: ModelTypes["StringFilter"] | undefined | null
};
	["MeetingDetailsTypeFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	day?: ModelTypes["StringFilter"] | undefined | null,
	time?: ModelTypes["TimeTypeFilter"] | undefined | null,
	location?: ModelTypes["StringFilter"] | undefined | null
};
	["NextGenRosterSignupGuardianFilter"]: {
	_key?: ModelTypes["StringFilter"] | undefined | null,
	_type?: ModelTypes["StringFilter"] | undefined | null,
	contact?: ModelTypes["ContactFilter"] | undefined | null,
	relationship_to_child?: ModelTypes["StringFilter"] | undefined | null
};
	["CrossDatasetReferenceSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	_ref?: ModelTypes["SortOrder"] | undefined | null,
	_weak?: ModelTypes["SortOrder"] | undefined | null,
	_dataset?: ModelTypes["SortOrder"] | undefined | null,
	_projectId?: ModelTypes["SortOrder"] | undefined | null
};
	["ShopifyAssetPreviewSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	height?: ModelTypes["SortOrder"] | undefined | null,
	width?: ModelTypes["SortOrder"] | undefined | null,
	url?: ModelTypes["SortOrder"] | undefined | null
};
	["ShopifyAssetMetadataSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	alt?: ModelTypes["SortOrder"] | undefined | null,
	duration?: ModelTypes["SortOrder"] | undefined | null,
	fileSize?: ModelTypes["SortOrder"] | undefined | null,
	height?: ModelTypes["SortOrder"] | undefined | null,
	width?: ModelTypes["SortOrder"] | undefined | null
};
	["ShopifyAssetSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	filename?: ModelTypes["SortOrder"] | undefined | null,
	id?: ModelTypes["SortOrder"] | undefined | null,
	meta?: ModelTypes["ShopifyAssetMetadataSorting"] | undefined | null,
	preview?: ModelTypes["ShopifyAssetPreviewSorting"] | undefined | null,
	type?: ModelTypes["SortOrder"] | undefined | null,
	url?: ModelTypes["SortOrder"] | undefined | null
};
	["MeetingDetailsTypeSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	day?: ModelTypes["SortOrder"] | undefined | null,
	time?: ModelTypes["TimeTypeSorting"] | undefined | null,
	location?: ModelTypes["SortOrder"] | undefined | null
};
	["NextGenRosterSignupGuardianSorting"]: {
	_key?: ModelTypes["SortOrder"] | undefined | null,
	_type?: ModelTypes["SortOrder"] | undefined | null,
	relationship_to_child?: ModelTypes["SortOrder"] | undefined | null
};
	["ID"]:any
    }

export type GraphQLTypes = {
    ["RootQuery"]: {
	__typename: "RootQuery",
	SanityImageAsset?: GraphQLTypes["SanityImageAsset"] | undefined | null,
	SanityFileAsset?: GraphQLTypes["SanityFileAsset"] | undefined | null,
	EventRental?: GraphQLTypes["EventRental"] | undefined | null,
	PrayerRequest?: GraphQLTypes["PrayerRequest"] | undefined | null,
	RightnowMedia?: GraphQLTypes["RightnowMedia"] | undefined | null,
	GiftAssessment?: GraphQLTypes["GiftAssessment"] | undefined | null,
	VisitorFeedback?: GraphQLTypes["VisitorFeedback"] | undefined | null,
	ScheduledVisit?: GraphQLTypes["ScheduledVisit"] | undefined | null,
	MinistryConnection?: GraphQLTypes["MinistryConnection"] | undefined | null,
	NextGenRosterSignup?: GraphQLTypes["NextGenRosterSignup"] | undefined | null,
	Contact?: GraphQLTypes["Contact"] | undefined | null,
	Event?: GraphQLTypes["Event"] | undefined | null,
	Leader?: GraphQLTypes["Leader"] | undefined | null,
	DeepDive?: GraphQLTypes["DeepDive"] | undefined | null,
	Ministry?: GraphQLTypes["Ministry"] | undefined | null,
	NextGenPage?: GraphQLTypes["NextGenPage"] | undefined | null,
	Product?: GraphQLTypes["Product"] | undefined | null,
	Document?: GraphQLTypes["Document"] | undefined | null,
	allSanityImageAsset: Array<GraphQLTypes["SanityImageAsset"]>,
	allSanityFileAsset: Array<GraphQLTypes["SanityFileAsset"]>,
	allEventRental: Array<GraphQLTypes["EventRental"]>,
	allPrayerRequest: Array<GraphQLTypes["PrayerRequest"]>,
	allRightnowMedia: Array<GraphQLTypes["RightnowMedia"]>,
	allGiftAssessment: Array<GraphQLTypes["GiftAssessment"]>,
	allVisitorFeedback: Array<GraphQLTypes["VisitorFeedback"]>,
	allScheduledVisit: Array<GraphQLTypes["ScheduledVisit"]>,
	allMinistryConnection: Array<GraphQLTypes["MinistryConnection"]>,
	allNextGenRosterSignup: Array<GraphQLTypes["NextGenRosterSignup"]>,
	allContact: Array<GraphQLTypes["Contact"]>,
	allEvent: Array<GraphQLTypes["Event"]>,
	allLeader: Array<GraphQLTypes["Leader"]>,
	allDeepDive: Array<GraphQLTypes["DeepDive"]>,
	allMinistry: Array<GraphQLTypes["Ministry"]>,
	allNextGenPage: Array<GraphQLTypes["NextGenPage"]>,
	allProduct: Array<GraphQLTypes["Product"]>,
	allDocument: Array<GraphQLTypes["Document"]>
};
	["SanityImageAsset"]: {
	__typename: "SanityImageAsset",
	/** Document ID */
	_id?: GraphQLTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	originalFilename?: string | undefined | null,
	label?: string | undefined | null,
	title?: string | undefined | null,
	description?: string | undefined | null,
	altText?: string | undefined | null,
	sha1hash?: string | undefined | null,
	extension?: string | undefined | null,
	mimeType?: string | undefined | null,
	size?: number | undefined | null,
	assetId?: string | undefined | null,
	uploadId?: string | undefined | null,
	path?: string | undefined | null,
	url?: string | undefined | null,
	metadata?: GraphQLTypes["SanityImageMetadata"] | undefined | null,
	source?: GraphQLTypes["SanityAssetSourceData"] | undefined | null
};
	/** A Sanity document */
["Document"]: {
	__typename:"SanityImageAsset" | "SanityFileAsset" | "EventRental" | "Contact" | "PrayerRequest" | "RightnowMedia" | "GiftAssessment" | "VisitorFeedback" | "ScheduledVisit" | "MinistryConnection" | "NextGenRosterSignup" | "Event" | "Leader" | "Ministry" | "DeepDive" | "NextGenPage" | "Product",
	/** Document ID */
	_id?: GraphQLTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null
	['...on SanityImageAsset']: '__union' & GraphQLTypes["SanityImageAsset"];
	['...on SanityFileAsset']: '__union' & GraphQLTypes["SanityFileAsset"];
	['...on EventRental']: '__union' & GraphQLTypes["EventRental"];
	['...on Contact']: '__union' & GraphQLTypes["Contact"];
	['...on PrayerRequest']: '__union' & GraphQLTypes["PrayerRequest"];
	['...on RightnowMedia']: '__union' & GraphQLTypes["RightnowMedia"];
	['...on GiftAssessment']: '__union' & GraphQLTypes["GiftAssessment"];
	['...on VisitorFeedback']: '__union' & GraphQLTypes["VisitorFeedback"];
	['...on ScheduledVisit']: '__union' & GraphQLTypes["ScheduledVisit"];
	['...on MinistryConnection']: '__union' & GraphQLTypes["MinistryConnection"];
	['...on NextGenRosterSignup']: '__union' & GraphQLTypes["NextGenRosterSignup"];
	['...on Event']: '__union' & GraphQLTypes["Event"];
	['...on Leader']: '__union' & GraphQLTypes["Leader"];
	['...on Ministry']: '__union' & GraphQLTypes["Ministry"];
	['...on DeepDive']: '__union' & GraphQLTypes["DeepDive"];
	['...on NextGenPage']: '__union' & GraphQLTypes["NextGenPage"];
	['...on Product']: '__union' & GraphQLTypes["Product"];
};
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
["DateTime"]: "scalar" & { name: "DateTime" };
	["SanityImageMetadata"]: {
	__typename: "SanityImageMetadata",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	location?: GraphQLTypes["Geopoint"] | undefined | null,
	dimensions?: GraphQLTypes["SanityImageDimensions"] | undefined | null,
	palette?: GraphQLTypes["SanityImagePalette"] | undefined | null,
	lqip?: string | undefined | null,
	blurHash?: string | undefined | null,
	hasAlpha?: boolean | undefined | null,
	isOpaque?: boolean | undefined | null
};
	["Geopoint"]: {
	__typename: "Geopoint",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	lat?: number | undefined | null,
	lng?: number | undefined | null,
	alt?: number | undefined | null
};
	["SanityImageDimensions"]: {
	__typename: "SanityImageDimensions",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	height?: number | undefined | null,
	width?: number | undefined | null,
	aspectRatio?: number | undefined | null
};
	["SanityImagePalette"]: {
	__typename: "SanityImagePalette",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	darkMuted?: GraphQLTypes["SanityImagePaletteSwatch"] | undefined | null,
	lightVibrant?: GraphQLTypes["SanityImagePaletteSwatch"] | undefined | null,
	darkVibrant?: GraphQLTypes["SanityImagePaletteSwatch"] | undefined | null,
	vibrant?: GraphQLTypes["SanityImagePaletteSwatch"] | undefined | null,
	dominant?: GraphQLTypes["SanityImagePaletteSwatch"] | undefined | null,
	lightMuted?: GraphQLTypes["SanityImagePaletteSwatch"] | undefined | null,
	muted?: GraphQLTypes["SanityImagePaletteSwatch"] | undefined | null
};
	["SanityImagePaletteSwatch"]: {
	__typename: "SanityImagePaletteSwatch",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	background?: string | undefined | null,
	foreground?: string | undefined | null,
	population?: number | undefined | null,
	title?: string | undefined | null
};
	["SanityAssetSourceData"]: {
	__typename: "SanityAssetSourceData",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	/** A canonical name for the source this asset is originating from */
	name?: string | undefined | null,
	/** The unique ID for the asset within the originating source so you can programatically find back to it */
	id?: string | undefined | null,
	/** A URL to find more information about this asset in the originating source */
	url?: string | undefined | null
};
	["SanityFileAsset"]: {
	__typename: "SanityFileAsset",
	/** Document ID */
	_id?: GraphQLTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	originalFilename?: string | undefined | null,
	label?: string | undefined | null,
	title?: string | undefined | null,
	description?: string | undefined | null,
	altText?: string | undefined | null,
	sha1hash?: string | undefined | null,
	extension?: string | undefined | null,
	mimeType?: string | undefined | null,
	size?: number | undefined | null,
	assetId?: string | undefined | null,
	uploadId?: string | undefined | null,
	path?: string | undefined | null,
	url?: string | undefined | null,
	source?: GraphQLTypes["SanityAssetSourceData"] | undefined | null
};
	["EventRental"]: {
	__typename: "EventRental",
	/** Document ID */
	_id?: GraphQLTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	contact?: GraphQLTypes["Contact"] | undefined | null,
	purpose_for_rental?: string | undefined | null,
	describe_your_event?: string | undefined | null,
	phone?: string | undefined | null,
	email?: string | undefined | null,
	company_name?: string | undefined | null,
	company_phone?: string | undefined | null,
	referred?: string | undefined | null,
	referred_by?: string | undefined | null
};
	["Contact"]: {
	__typename: "Contact",
	/** Document ID */
	_id?: GraphQLTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	first_name?: string | undefined | null,
	last_name?: string | undefined | null,
	phone?: string | undefined | null,
	email?: string | undefined | null
};
	["PrayerRequest"]: {
	__typename: "PrayerRequest",
	/** Document ID */
	_id?: GraphQLTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	contact?: GraphQLTypes["Contact"] | undefined | null,
	request_email_back?: string | undefined | null,
	request?: string | undefined | null
};
	["RightnowMedia"]: {
	__typename: "RightnowMedia",
	/** Document ID */
	_id?: GraphQLTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	contact?: GraphQLTypes["Contact"] | undefined | null,
	wind_member?: string | undefined | null,
	has_access?: string | undefined | null
};
	["GiftAssessment"]: {
	__typename: "GiftAssessment",
	/** Document ID */
	_id?: GraphQLTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	contact?: GraphQLTypes["Contact"] | undefined | null,
	dominate_gifts?: string | undefined | null,
	subordinate_gifts?: string | undefined | null,
	ministries_involved_in?: string | undefined | null,
	change_in_ministry?: string | undefined | null,
	lay_or_clergy?: string | undefined | null
};
	["VisitorFeedback"]: {
	__typename: "VisitorFeedback",
	/** Document ID */
	_id?: GraphQLTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	contact?: GraphQLTypes["Contact"] | undefined | null,
	feedback?: string | undefined | null
};
	["ScheduledVisit"]: {
	__typename: "ScheduledVisit",
	/** Document ID */
	_id?: GraphQLTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	contact?: GraphQLTypes["Contact"] | undefined | null,
	attendance?: number | undefined | null,
	day_of_visit?: string | undefined | null
};
	["MinistryConnection"]: {
	__typename: "MinistryConnection",
	/** Document ID */
	_id?: GraphQLTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	contact?: GraphQLTypes["Contact"] | undefined | null,
	ministry_interests?: Array<string | undefined | null> | undefined | null
};
	["NextGenRosterSignup"]: {
	__typename: "NextGenRosterSignup",
	/** Document ID */
	_id?: GraphQLTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	first_name?: string | undefined | null,
	last_name?: string | undefined | null,
	age?: string | undefined | null,
	grade?: string | undefined | null,
	gender?: string | undefined | null,
	hobbies?: string | undefined | null,
	allergies?: string | undefined | null,
	guardians?: Array<GraphQLTypes["NextGenRosterSignupGuardian"] | undefined | null> | undefined | null
};
	["NextGenRosterSignupGuardian"]: {
	__typename: "NextGenRosterSignupGuardian",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	contact?: GraphQLTypes["Contact"] | undefined | null,
	relationship_to_child?: string | undefined | null
};
	["Event"]: {
	__typename: "Event",
	/** Document ID */
	_id?: GraphQLTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	name?: string | undefined | null,
	/** Describe the event. */
	description?: string | undefined | null,
	date?: GraphQLTypes["Date"] | undefined | null,
	time?: GraphQLTypes["TimeType"] | undefined | null,
	categories?: Array<string | undefined | null> | undefined | null,
	image?: GraphQLTypes["Image"] | undefined | null,
	/** Where is the event happening. */
	location?: string | undefined | null,
	/** Instructions for how to join/participate in this event. */
	how_to_signup?: string | undefined | null,
	/** Instructions for who to contact regarding this event. */
	contact?: GraphQLTypes["Leader"] | undefined | null,
	/** Select if a Ministry is the organizer/host for this event. */
	ministry_event?: GraphQLTypes["Ministry"] | undefined | null,
	/** Is there an external organization/host for this event? */
	external_host?: string | undefined | null,
	help_needed?: Array<string | undefined | null> | undefined | null,
	/** Are there any costs associated with participation in this event? (e.g., $40.00 per Adult ticket) */
	cost?: string | undefined | null
};
	/** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
["Date"]: "scalar" & { name: "Date" };
	["TimeType"]: {
	__typename: "TimeType",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	hour?: string | undefined | null,
	minute?: string | undefined | null,
	time_of_day?: string | undefined | null
};
	["Image"]: {
	__typename: "Image",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	asset?: GraphQLTypes["SanityImageAsset"] | undefined | null,
	media?: GraphQLTypes["GlobalDocumentReference"] | undefined | null,
	hotspot?: GraphQLTypes["SanityImageHotspot"] | undefined | null,
	crop?: GraphQLTypes["SanityImageCrop"] | undefined | null
};
	["GlobalDocumentReference"]: {
	__typename: "GlobalDocumentReference",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	_ref?: string | undefined | null,
	_weak?: boolean | undefined | null
};
	["SanityImageHotspot"]: {
	__typename: "SanityImageHotspot",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	x?: number | undefined | null,
	y?: number | undefined | null,
	height?: number | undefined | null,
	width?: number | undefined | null
};
	["SanityImageCrop"]: {
	__typename: "SanityImageCrop",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	top?: number | undefined | null,
	bottom?: number | undefined | null,
	left?: number | undefined | null,
	right?: number | undefined | null
};
	["Leader"]: {
	__typename: "Leader",
	/** Document ID */
	_id?: GraphQLTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	contact?: GraphQLTypes["Contact"] | undefined | null,
	/** The official position assigned to the Leader. */
	position?: string | undefined | null,
	/** Select a category this leader belongs to (if they fit more than one; select their primary role). */
	category?: string | undefined | null,
	/** Describe the Leader's personailty, goals, and aspirations (3-7 sentences). */
	description?: string | undefined | null,
	roles?: Array<string | undefined | null> | undefined | null,
	image?: GraphQLTypes["Image"] | undefined | null,
	video?: GraphQLTypes["File"] | undefined | null
};
	["File"]: {
	__typename: "File",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	asset?: GraphQLTypes["SanityFileAsset"] | undefined | null,
	media?: GraphQLTypes["GlobalDocumentReference"] | undefined | null
};
	["Ministry"]: {
	__typename: "Ministry",
	/** Document ID */
	_id?: GraphQLTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	name?: string | undefined | null,
	slug?: GraphQLTypes["Slug"] | undefined | null,
	scripture?: GraphQLTypes["Scripture"] | undefined | null,
	descriptionRaw?: GraphQLTypes["JSON"] | undefined | null,
	coordinators?: Array<GraphQLTypes["Leader"] | undefined | null> | undefined | null,
	/** Select the coach for this ministry. */
	coach?: GraphQLTypes["Leader"] | undefined | null,
	image?: GraphQLTypes["Image"] | undefined | null,
	meeting_details?: Array<GraphQLTypes["MeetingDetailsType"] | undefined | null> | undefined | null
};
	["Slug"]: {
	__typename: "Slug",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	current?: string | undefined | null,
	source?: string | undefined | null
};
	["Scripture"]: {
	__typename: "Scripture",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	passage?: string | undefined | null,
	verse?: string | undefined | null
};
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
["JSON"]: "scalar" & { name: "JSON" };
	["MeetingDetailsType"]: {
	__typename: "MeetingDetailsType",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	day?: string | undefined | null,
	time?: GraphQLTypes["TimeType"] | undefined | null,
	location?: string | undefined | null
};
	["DeepDive"]: {
	__typename: "DeepDive",
	/** Document ID */
	_id?: GraphQLTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	name?: string | undefined | null,
	slug?: GraphQLTypes["Slug"] | undefined | null,
	descriptionRaw?: GraphQLTypes["JSON"] | undefined | null,
	instructors?: Array<GraphQLTypes["Leader"] | undefined | null> | undefined | null,
	image?: GraphQLTypes["Image"] | undefined | null,
	start_date?: GraphQLTypes["Date"] | undefined | null,
	end_date?: GraphQLTypes["Date"] | undefined | null,
	required_materials?: Array<string | undefined | null> | undefined | null,
	meeting_details?: Array<GraphQLTypes["MeetingDetailsType"] | undefined | null> | undefined | null,
	/** Is this deep dive actively accepting new Students? */
	accepting_new_students?: boolean | undefined | null
};
	["NextGenPage"]: {
	__typename: "NextGenPage",
	/** Document ID */
	_id?: GraphQLTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	educators?: Array<GraphQLTypes["Leader"] | undefined | null> | undefined | null,
	cirriculum_file?: GraphQLTypes["File"] | undefined | null
};
	["Product"]: {
	__typename: "Product",
	/** Document ID */
	_id?: GraphQLTypes["ID"] | undefined | null,
	/** Document type */
	_type?: string | undefined | null,
	/** Date the document was created */
	_createdAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Date the document was last modified */
	_updatedAt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Current document revision */
	_rev?: string | undefined | null,
	_key?: string | undefined | null,
	title?: string | undefined | null
};
	["SanityImageAssetFilter"]: {
		/** Apply filters on document level */
	_?: GraphQLTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: GraphQLTypes["IDFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_createdAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_rev?: GraphQLTypes["StringFilter"] | undefined | null,
	_key?: GraphQLTypes["StringFilter"] | undefined | null,
	originalFilename?: GraphQLTypes["StringFilter"] | undefined | null,
	label?: GraphQLTypes["StringFilter"] | undefined | null,
	title?: GraphQLTypes["StringFilter"] | undefined | null,
	description?: GraphQLTypes["StringFilter"] | undefined | null,
	altText?: GraphQLTypes["StringFilter"] | undefined | null,
	sha1hash?: GraphQLTypes["StringFilter"] | undefined | null,
	extension?: GraphQLTypes["StringFilter"] | undefined | null,
	mimeType?: GraphQLTypes["StringFilter"] | undefined | null,
	size?: GraphQLTypes["FloatFilter"] | undefined | null,
	assetId?: GraphQLTypes["StringFilter"] | undefined | null,
	uploadId?: GraphQLTypes["StringFilter"] | undefined | null,
	path?: GraphQLTypes["StringFilter"] | undefined | null,
	url?: GraphQLTypes["StringFilter"] | undefined | null,
	metadata?: GraphQLTypes["SanityImageMetadataFilter"] | undefined | null,
	source?: GraphQLTypes["SanityAssetSourceDataFilter"] | undefined | null
};
	["Sanity_DocumentFilter"]: {
		/** All documents referencing the given document ID. */
	references?: GraphQLTypes["ID"] | undefined | null,
	/** All documents that are drafts. */
	is_draft?: boolean | undefined | null
};
	["IDFilter"]: {
		/** Checks if the value is equal to the given input. */
	eq?: GraphQLTypes["ID"] | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: GraphQLTypes["ID"] | undefined | null,
	/** Checks if the value matches the given word/words. */
	matches?: GraphQLTypes["ID"] | undefined | null,
	in?: Array<GraphQLTypes["ID"]> | undefined | null,
	nin?: Array<GraphQLTypes["ID"]> | undefined | null
};
	["StringFilter"]: {
		/** Checks if the value is equal to the given input. */
	eq?: string | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: string | undefined | null,
	/** Checks if the value matches the given word/words. */
	matches?: string | undefined | null,
	in?: Array<string> | undefined | null,
	nin?: Array<string> | undefined | null,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null
};
	["DatetimeFilter"]: {
		/** Checks if the value is equal to the given input. */
	eq?: GraphQLTypes["DateTime"] | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: GraphQLTypes["DateTime"] | undefined | null,
	/** Checks if the value is greater than the given input. */
	gt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Checks if the value is greater than or equal to the given input. */
	gte?: GraphQLTypes["DateTime"] | undefined | null,
	/** Checks if the value is lesser than the given input. */
	lt?: GraphQLTypes["DateTime"] | undefined | null,
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: GraphQLTypes["DateTime"] | undefined | null,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null
};
	["FloatFilter"]: {
		/** Checks if the value is equal to the given input. */
	eq?: number | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: number | undefined | null,
	/** Checks if the value is greater than the given input. */
	gt?: number | undefined | null,
	/** Checks if the value is greater than or equal to the given input. */
	gte?: number | undefined | null,
	/** Checks if the value is lesser than the given input. */
	lt?: number | undefined | null,
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: number | undefined | null,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null
};
	["SanityImageMetadataFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	location?: GraphQLTypes["GeopointFilter"] | undefined | null,
	dimensions?: GraphQLTypes["SanityImageDimensionsFilter"] | undefined | null,
	palette?: GraphQLTypes["SanityImagePaletteFilter"] | undefined | null,
	lqip?: GraphQLTypes["StringFilter"] | undefined | null,
	blurHash?: GraphQLTypes["StringFilter"] | undefined | null,
	hasAlpha?: GraphQLTypes["BooleanFilter"] | undefined | null,
	isOpaque?: GraphQLTypes["BooleanFilter"] | undefined | null
};
	["GeopointFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	lat?: GraphQLTypes["FloatFilter"] | undefined | null,
	lng?: GraphQLTypes["FloatFilter"] | undefined | null,
	alt?: GraphQLTypes["FloatFilter"] | undefined | null
};
	["SanityImageDimensionsFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	height?: GraphQLTypes["FloatFilter"] | undefined | null,
	width?: GraphQLTypes["FloatFilter"] | undefined | null,
	aspectRatio?: GraphQLTypes["FloatFilter"] | undefined | null
};
	["SanityImagePaletteFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	darkMuted?: GraphQLTypes["SanityImagePaletteSwatchFilter"] | undefined | null,
	lightVibrant?: GraphQLTypes["SanityImagePaletteSwatchFilter"] | undefined | null,
	darkVibrant?: GraphQLTypes["SanityImagePaletteSwatchFilter"] | undefined | null,
	vibrant?: GraphQLTypes["SanityImagePaletteSwatchFilter"] | undefined | null,
	dominant?: GraphQLTypes["SanityImagePaletteSwatchFilter"] | undefined | null,
	lightMuted?: GraphQLTypes["SanityImagePaletteSwatchFilter"] | undefined | null,
	muted?: GraphQLTypes["SanityImagePaletteSwatchFilter"] | undefined | null
};
	["SanityImagePaletteSwatchFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	background?: GraphQLTypes["StringFilter"] | undefined | null,
	foreground?: GraphQLTypes["StringFilter"] | undefined | null,
	population?: GraphQLTypes["FloatFilter"] | undefined | null,
	title?: GraphQLTypes["StringFilter"] | undefined | null
};
	["BooleanFilter"]: {
		/** Checks if the value is equal to the given input. */
	eq?: boolean | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: boolean | undefined | null,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null
};
	["SanityAssetSourceDataFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	name?: GraphQLTypes["StringFilter"] | undefined | null,
	id?: GraphQLTypes["StringFilter"] | undefined | null,
	url?: GraphQLTypes["StringFilter"] | undefined | null
};
	["SanityImageAssetSorting"]: {
		_id?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_createdAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_updatedAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_rev?: GraphQLTypes["SortOrder"] | undefined | null,
	_key?: GraphQLTypes["SortOrder"] | undefined | null,
	originalFilename?: GraphQLTypes["SortOrder"] | undefined | null,
	label?: GraphQLTypes["SortOrder"] | undefined | null,
	title?: GraphQLTypes["SortOrder"] | undefined | null,
	description?: GraphQLTypes["SortOrder"] | undefined | null,
	altText?: GraphQLTypes["SortOrder"] | undefined | null,
	sha1hash?: GraphQLTypes["SortOrder"] | undefined | null,
	extension?: GraphQLTypes["SortOrder"] | undefined | null,
	mimeType?: GraphQLTypes["SortOrder"] | undefined | null,
	size?: GraphQLTypes["SortOrder"] | undefined | null,
	assetId?: GraphQLTypes["SortOrder"] | undefined | null,
	uploadId?: GraphQLTypes["SortOrder"] | undefined | null,
	path?: GraphQLTypes["SortOrder"] | undefined | null,
	url?: GraphQLTypes["SortOrder"] | undefined | null,
	metadata?: GraphQLTypes["SanityImageMetadataSorting"] | undefined | null,
	source?: GraphQLTypes["SanityAssetSourceDataSorting"] | undefined | null
};
	["SortOrder"]: SortOrder;
	["SanityImageMetadataSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	location?: GraphQLTypes["GeopointSorting"] | undefined | null,
	dimensions?: GraphQLTypes["SanityImageDimensionsSorting"] | undefined | null,
	palette?: GraphQLTypes["SanityImagePaletteSorting"] | undefined | null,
	lqip?: GraphQLTypes["SortOrder"] | undefined | null,
	blurHash?: GraphQLTypes["SortOrder"] | undefined | null,
	hasAlpha?: GraphQLTypes["SortOrder"] | undefined | null,
	isOpaque?: GraphQLTypes["SortOrder"] | undefined | null
};
	["GeopointSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	lat?: GraphQLTypes["SortOrder"] | undefined | null,
	lng?: GraphQLTypes["SortOrder"] | undefined | null,
	alt?: GraphQLTypes["SortOrder"] | undefined | null
};
	["SanityImageDimensionsSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	height?: GraphQLTypes["SortOrder"] | undefined | null,
	width?: GraphQLTypes["SortOrder"] | undefined | null,
	aspectRatio?: GraphQLTypes["SortOrder"] | undefined | null
};
	["SanityImagePaletteSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	darkMuted?: GraphQLTypes["SanityImagePaletteSwatchSorting"] | undefined | null,
	lightVibrant?: GraphQLTypes["SanityImagePaletteSwatchSorting"] | undefined | null,
	darkVibrant?: GraphQLTypes["SanityImagePaletteSwatchSorting"] | undefined | null,
	vibrant?: GraphQLTypes["SanityImagePaletteSwatchSorting"] | undefined | null,
	dominant?: GraphQLTypes["SanityImagePaletteSwatchSorting"] | undefined | null,
	lightMuted?: GraphQLTypes["SanityImagePaletteSwatchSorting"] | undefined | null,
	muted?: GraphQLTypes["SanityImagePaletteSwatchSorting"] | undefined | null
};
	["SanityImagePaletteSwatchSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	background?: GraphQLTypes["SortOrder"] | undefined | null,
	foreground?: GraphQLTypes["SortOrder"] | undefined | null,
	population?: GraphQLTypes["SortOrder"] | undefined | null,
	title?: GraphQLTypes["SortOrder"] | undefined | null
};
	["SanityAssetSourceDataSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	name?: GraphQLTypes["SortOrder"] | undefined | null,
	id?: GraphQLTypes["SortOrder"] | undefined | null,
	url?: GraphQLTypes["SortOrder"] | undefined | null
};
	["SanityFileAssetFilter"]: {
		/** Apply filters on document level */
	_?: GraphQLTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: GraphQLTypes["IDFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_createdAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_rev?: GraphQLTypes["StringFilter"] | undefined | null,
	_key?: GraphQLTypes["StringFilter"] | undefined | null,
	originalFilename?: GraphQLTypes["StringFilter"] | undefined | null,
	label?: GraphQLTypes["StringFilter"] | undefined | null,
	title?: GraphQLTypes["StringFilter"] | undefined | null,
	description?: GraphQLTypes["StringFilter"] | undefined | null,
	altText?: GraphQLTypes["StringFilter"] | undefined | null,
	sha1hash?: GraphQLTypes["StringFilter"] | undefined | null,
	extension?: GraphQLTypes["StringFilter"] | undefined | null,
	mimeType?: GraphQLTypes["StringFilter"] | undefined | null,
	size?: GraphQLTypes["FloatFilter"] | undefined | null,
	assetId?: GraphQLTypes["StringFilter"] | undefined | null,
	uploadId?: GraphQLTypes["StringFilter"] | undefined | null,
	path?: GraphQLTypes["StringFilter"] | undefined | null,
	url?: GraphQLTypes["StringFilter"] | undefined | null,
	source?: GraphQLTypes["SanityAssetSourceDataFilter"] | undefined | null
};
	["SanityFileAssetSorting"]: {
		_id?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_createdAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_updatedAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_rev?: GraphQLTypes["SortOrder"] | undefined | null,
	_key?: GraphQLTypes["SortOrder"] | undefined | null,
	originalFilename?: GraphQLTypes["SortOrder"] | undefined | null,
	label?: GraphQLTypes["SortOrder"] | undefined | null,
	title?: GraphQLTypes["SortOrder"] | undefined | null,
	description?: GraphQLTypes["SortOrder"] | undefined | null,
	altText?: GraphQLTypes["SortOrder"] | undefined | null,
	sha1hash?: GraphQLTypes["SortOrder"] | undefined | null,
	extension?: GraphQLTypes["SortOrder"] | undefined | null,
	mimeType?: GraphQLTypes["SortOrder"] | undefined | null,
	size?: GraphQLTypes["SortOrder"] | undefined | null,
	assetId?: GraphQLTypes["SortOrder"] | undefined | null,
	uploadId?: GraphQLTypes["SortOrder"] | undefined | null,
	path?: GraphQLTypes["SortOrder"] | undefined | null,
	url?: GraphQLTypes["SortOrder"] | undefined | null,
	source?: GraphQLTypes["SanityAssetSourceDataSorting"] | undefined | null
};
	["EventRentalFilter"]: {
		/** Apply filters on document level */
	_?: GraphQLTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: GraphQLTypes["IDFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_createdAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_rev?: GraphQLTypes["StringFilter"] | undefined | null,
	_key?: GraphQLTypes["StringFilter"] | undefined | null,
	contact?: GraphQLTypes["ContactFilter"] | undefined | null,
	purpose_for_rental?: GraphQLTypes["StringFilter"] | undefined | null,
	describe_your_event?: GraphQLTypes["StringFilter"] | undefined | null,
	phone?: GraphQLTypes["StringFilter"] | undefined | null,
	email?: GraphQLTypes["StringFilter"] | undefined | null,
	company_name?: GraphQLTypes["StringFilter"] | undefined | null,
	company_phone?: GraphQLTypes["StringFilter"] | undefined | null,
	referred?: GraphQLTypes["StringFilter"] | undefined | null,
	referred_by?: GraphQLTypes["StringFilter"] | undefined | null
};
	["ContactFilter"]: {
		/** Apply filters on document level */
	_?: GraphQLTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: GraphQLTypes["IDFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_createdAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_rev?: GraphQLTypes["StringFilter"] | undefined | null,
	_key?: GraphQLTypes["StringFilter"] | undefined | null,
	first_name?: GraphQLTypes["StringFilter"] | undefined | null,
	last_name?: GraphQLTypes["StringFilter"] | undefined | null,
	phone?: GraphQLTypes["StringFilter"] | undefined | null,
	email?: GraphQLTypes["StringFilter"] | undefined | null
};
	["EventRentalSorting"]: {
		_id?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_createdAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_updatedAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_rev?: GraphQLTypes["SortOrder"] | undefined | null,
	_key?: GraphQLTypes["SortOrder"] | undefined | null,
	purpose_for_rental?: GraphQLTypes["SortOrder"] | undefined | null,
	describe_your_event?: GraphQLTypes["SortOrder"] | undefined | null,
	phone?: GraphQLTypes["SortOrder"] | undefined | null,
	email?: GraphQLTypes["SortOrder"] | undefined | null,
	company_name?: GraphQLTypes["SortOrder"] | undefined | null,
	company_phone?: GraphQLTypes["SortOrder"] | undefined | null,
	referred?: GraphQLTypes["SortOrder"] | undefined | null,
	referred_by?: GraphQLTypes["SortOrder"] | undefined | null
};
	["PrayerRequestFilter"]: {
		/** Apply filters on document level */
	_?: GraphQLTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: GraphQLTypes["IDFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_createdAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_rev?: GraphQLTypes["StringFilter"] | undefined | null,
	_key?: GraphQLTypes["StringFilter"] | undefined | null,
	contact?: GraphQLTypes["ContactFilter"] | undefined | null,
	request_email_back?: GraphQLTypes["StringFilter"] | undefined | null,
	request?: GraphQLTypes["StringFilter"] | undefined | null
};
	["PrayerRequestSorting"]: {
		_id?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_createdAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_updatedAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_rev?: GraphQLTypes["SortOrder"] | undefined | null,
	_key?: GraphQLTypes["SortOrder"] | undefined | null,
	request_email_back?: GraphQLTypes["SortOrder"] | undefined | null,
	request?: GraphQLTypes["SortOrder"] | undefined | null
};
	["RightnowMediaFilter"]: {
		/** Apply filters on document level */
	_?: GraphQLTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: GraphQLTypes["IDFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_createdAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_rev?: GraphQLTypes["StringFilter"] | undefined | null,
	_key?: GraphQLTypes["StringFilter"] | undefined | null,
	contact?: GraphQLTypes["ContactFilter"] | undefined | null,
	wind_member?: GraphQLTypes["StringFilter"] | undefined | null,
	has_access?: GraphQLTypes["StringFilter"] | undefined | null
};
	["RightnowMediaSorting"]: {
		_id?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_createdAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_updatedAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_rev?: GraphQLTypes["SortOrder"] | undefined | null,
	_key?: GraphQLTypes["SortOrder"] | undefined | null,
	wind_member?: GraphQLTypes["SortOrder"] | undefined | null,
	has_access?: GraphQLTypes["SortOrder"] | undefined | null
};
	["GiftAssessmentFilter"]: {
		/** Apply filters on document level */
	_?: GraphQLTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: GraphQLTypes["IDFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_createdAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_rev?: GraphQLTypes["StringFilter"] | undefined | null,
	_key?: GraphQLTypes["StringFilter"] | undefined | null,
	contact?: GraphQLTypes["ContactFilter"] | undefined | null,
	dominate_gifts?: GraphQLTypes["StringFilter"] | undefined | null,
	subordinate_gifts?: GraphQLTypes["StringFilter"] | undefined | null,
	ministries_involved_in?: GraphQLTypes["StringFilter"] | undefined | null,
	change_in_ministry?: GraphQLTypes["StringFilter"] | undefined | null,
	lay_or_clergy?: GraphQLTypes["StringFilter"] | undefined | null
};
	["GiftAssessmentSorting"]: {
		_id?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_createdAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_updatedAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_rev?: GraphQLTypes["SortOrder"] | undefined | null,
	_key?: GraphQLTypes["SortOrder"] | undefined | null,
	dominate_gifts?: GraphQLTypes["SortOrder"] | undefined | null,
	subordinate_gifts?: GraphQLTypes["SortOrder"] | undefined | null,
	ministries_involved_in?: GraphQLTypes["SortOrder"] | undefined | null,
	change_in_ministry?: GraphQLTypes["SortOrder"] | undefined | null,
	lay_or_clergy?: GraphQLTypes["SortOrder"] | undefined | null
};
	["VisitorFeedbackFilter"]: {
		/** Apply filters on document level */
	_?: GraphQLTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: GraphQLTypes["IDFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_createdAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_rev?: GraphQLTypes["StringFilter"] | undefined | null,
	_key?: GraphQLTypes["StringFilter"] | undefined | null,
	contact?: GraphQLTypes["ContactFilter"] | undefined | null,
	feedback?: GraphQLTypes["StringFilter"] | undefined | null
};
	["VisitorFeedbackSorting"]: {
		_id?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_createdAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_updatedAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_rev?: GraphQLTypes["SortOrder"] | undefined | null,
	_key?: GraphQLTypes["SortOrder"] | undefined | null,
	feedback?: GraphQLTypes["SortOrder"] | undefined | null
};
	["ScheduledVisitFilter"]: {
		/** Apply filters on document level */
	_?: GraphQLTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: GraphQLTypes["IDFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_createdAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_rev?: GraphQLTypes["StringFilter"] | undefined | null,
	_key?: GraphQLTypes["StringFilter"] | undefined | null,
	contact?: GraphQLTypes["ContactFilter"] | undefined | null,
	attendance?: GraphQLTypes["FloatFilter"] | undefined | null,
	day_of_visit?: GraphQLTypes["StringFilter"] | undefined | null
};
	["ScheduledVisitSorting"]: {
		_id?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_createdAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_updatedAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_rev?: GraphQLTypes["SortOrder"] | undefined | null,
	_key?: GraphQLTypes["SortOrder"] | undefined | null,
	attendance?: GraphQLTypes["SortOrder"] | undefined | null,
	day_of_visit?: GraphQLTypes["SortOrder"] | undefined | null
};
	["MinistryConnectionFilter"]: {
		/** Apply filters on document level */
	_?: GraphQLTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: GraphQLTypes["IDFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_createdAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_rev?: GraphQLTypes["StringFilter"] | undefined | null,
	_key?: GraphQLTypes["StringFilter"] | undefined | null,
	contact?: GraphQLTypes["ContactFilter"] | undefined | null
};
	["MinistryConnectionSorting"]: {
		_id?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_createdAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_updatedAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_rev?: GraphQLTypes["SortOrder"] | undefined | null,
	_key?: GraphQLTypes["SortOrder"] | undefined | null
};
	["NextGenRosterSignupFilter"]: {
		/** Apply filters on document level */
	_?: GraphQLTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: GraphQLTypes["IDFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_createdAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_rev?: GraphQLTypes["StringFilter"] | undefined | null,
	_key?: GraphQLTypes["StringFilter"] | undefined | null,
	first_name?: GraphQLTypes["StringFilter"] | undefined | null,
	last_name?: GraphQLTypes["StringFilter"] | undefined | null,
	age?: GraphQLTypes["StringFilter"] | undefined | null,
	grade?: GraphQLTypes["StringFilter"] | undefined | null,
	gender?: GraphQLTypes["StringFilter"] | undefined | null,
	hobbies?: GraphQLTypes["StringFilter"] | undefined | null,
	allergies?: GraphQLTypes["StringFilter"] | undefined | null
};
	["NextGenRosterSignupSorting"]: {
		_id?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_createdAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_updatedAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_rev?: GraphQLTypes["SortOrder"] | undefined | null,
	_key?: GraphQLTypes["SortOrder"] | undefined | null,
	first_name?: GraphQLTypes["SortOrder"] | undefined | null,
	last_name?: GraphQLTypes["SortOrder"] | undefined | null,
	age?: GraphQLTypes["SortOrder"] | undefined | null,
	grade?: GraphQLTypes["SortOrder"] | undefined | null,
	gender?: GraphQLTypes["SortOrder"] | undefined | null,
	hobbies?: GraphQLTypes["SortOrder"] | undefined | null,
	allergies?: GraphQLTypes["SortOrder"] | undefined | null
};
	["ContactSorting"]: {
		_id?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_createdAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_updatedAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_rev?: GraphQLTypes["SortOrder"] | undefined | null,
	_key?: GraphQLTypes["SortOrder"] | undefined | null,
	first_name?: GraphQLTypes["SortOrder"] | undefined | null,
	last_name?: GraphQLTypes["SortOrder"] | undefined | null,
	phone?: GraphQLTypes["SortOrder"] | undefined | null,
	email?: GraphQLTypes["SortOrder"] | undefined | null
};
	["EventFilter"]: {
		/** Apply filters on document level */
	_?: GraphQLTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: GraphQLTypes["IDFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_createdAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_rev?: GraphQLTypes["StringFilter"] | undefined | null,
	_key?: GraphQLTypes["StringFilter"] | undefined | null,
	name?: GraphQLTypes["StringFilter"] | undefined | null,
	description?: GraphQLTypes["StringFilter"] | undefined | null,
	date?: GraphQLTypes["DateFilter"] | undefined | null,
	time?: GraphQLTypes["TimeTypeFilter"] | undefined | null,
	image?: GraphQLTypes["ImageFilter"] | undefined | null,
	location?: GraphQLTypes["StringFilter"] | undefined | null,
	how_to_signup?: GraphQLTypes["StringFilter"] | undefined | null,
	contact?: GraphQLTypes["LeaderFilter"] | undefined | null,
	ministry_event?: GraphQLTypes["MinistryFilter"] | undefined | null,
	external_host?: GraphQLTypes["StringFilter"] | undefined | null,
	cost?: GraphQLTypes["StringFilter"] | undefined | null
};
	["DateFilter"]: {
		/** Checks if the value is equal to the given input. */
	eq?: GraphQLTypes["Date"] | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: GraphQLTypes["Date"] | undefined | null,
	/** Checks if the value is greater than the given input. */
	gt?: GraphQLTypes["Date"] | undefined | null,
	/** Checks if the value is greater than or equal to the given input. */
	gte?: GraphQLTypes["Date"] | undefined | null,
	/** Checks if the value is lesser than the given input. */
	lt?: GraphQLTypes["Date"] | undefined | null,
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: GraphQLTypes["Date"] | undefined | null,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null
};
	["TimeTypeFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	hour?: GraphQLTypes["StringFilter"] | undefined | null,
	minute?: GraphQLTypes["StringFilter"] | undefined | null,
	time_of_day?: GraphQLTypes["StringFilter"] | undefined | null
};
	["ImageFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	asset?: GraphQLTypes["SanityImageAssetFilter"] | undefined | null,
	media?: GraphQLTypes["GlobalDocumentReferenceFilter"] | undefined | null,
	hotspot?: GraphQLTypes["SanityImageHotspotFilter"] | undefined | null,
	crop?: GraphQLTypes["SanityImageCropFilter"] | undefined | null
};
	["GlobalDocumentReferenceFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_ref?: GraphQLTypes["StringFilter"] | undefined | null,
	_weak?: GraphQLTypes["BooleanFilter"] | undefined | null
};
	["SanityImageHotspotFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	x?: GraphQLTypes["FloatFilter"] | undefined | null,
	y?: GraphQLTypes["FloatFilter"] | undefined | null,
	height?: GraphQLTypes["FloatFilter"] | undefined | null,
	width?: GraphQLTypes["FloatFilter"] | undefined | null
};
	["SanityImageCropFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	top?: GraphQLTypes["FloatFilter"] | undefined | null,
	bottom?: GraphQLTypes["FloatFilter"] | undefined | null,
	left?: GraphQLTypes["FloatFilter"] | undefined | null,
	right?: GraphQLTypes["FloatFilter"] | undefined | null
};
	["LeaderFilter"]: {
		/** Apply filters on document level */
	_?: GraphQLTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: GraphQLTypes["IDFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_createdAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_rev?: GraphQLTypes["StringFilter"] | undefined | null,
	_key?: GraphQLTypes["StringFilter"] | undefined | null,
	contact?: GraphQLTypes["ContactFilter"] | undefined | null,
	position?: GraphQLTypes["StringFilter"] | undefined | null,
	category?: GraphQLTypes["StringFilter"] | undefined | null,
	description?: GraphQLTypes["StringFilter"] | undefined | null,
	image?: GraphQLTypes["ImageFilter"] | undefined | null,
	video?: GraphQLTypes["FileFilter"] | undefined | null
};
	["FileFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	asset?: GraphQLTypes["SanityFileAssetFilter"] | undefined | null,
	media?: GraphQLTypes["GlobalDocumentReferenceFilter"] | undefined | null
};
	["MinistryFilter"]: {
		/** Apply filters on document level */
	_?: GraphQLTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: GraphQLTypes["IDFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_createdAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_rev?: GraphQLTypes["StringFilter"] | undefined | null,
	_key?: GraphQLTypes["StringFilter"] | undefined | null,
	name?: GraphQLTypes["StringFilter"] | undefined | null,
	slug?: GraphQLTypes["SlugFilter"] | undefined | null,
	scripture?: GraphQLTypes["ScriptureFilter"] | undefined | null,
	coach?: GraphQLTypes["LeaderFilter"] | undefined | null,
	image?: GraphQLTypes["ImageFilter"] | undefined | null
};
	["SlugFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	current?: GraphQLTypes["StringFilter"] | undefined | null,
	source?: GraphQLTypes["StringFilter"] | undefined | null
};
	["ScriptureFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	passage?: GraphQLTypes["StringFilter"] | undefined | null,
	verse?: GraphQLTypes["StringFilter"] | undefined | null
};
	["EventSorting"]: {
		_id?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_createdAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_updatedAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_rev?: GraphQLTypes["SortOrder"] | undefined | null,
	_key?: GraphQLTypes["SortOrder"] | undefined | null,
	name?: GraphQLTypes["SortOrder"] | undefined | null,
	description?: GraphQLTypes["SortOrder"] | undefined | null,
	date?: GraphQLTypes["SortOrder"] | undefined | null,
	time?: GraphQLTypes["TimeTypeSorting"] | undefined | null,
	image?: GraphQLTypes["ImageSorting"] | undefined | null,
	location?: GraphQLTypes["SortOrder"] | undefined | null,
	how_to_signup?: GraphQLTypes["SortOrder"] | undefined | null,
	external_host?: GraphQLTypes["SortOrder"] | undefined | null,
	cost?: GraphQLTypes["SortOrder"] | undefined | null
};
	["TimeTypeSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	hour?: GraphQLTypes["SortOrder"] | undefined | null,
	minute?: GraphQLTypes["SortOrder"] | undefined | null,
	time_of_day?: GraphQLTypes["SortOrder"] | undefined | null
};
	["ImageSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	media?: GraphQLTypes["GlobalDocumentReferenceSorting"] | undefined | null,
	hotspot?: GraphQLTypes["SanityImageHotspotSorting"] | undefined | null,
	crop?: GraphQLTypes["SanityImageCropSorting"] | undefined | null
};
	["GlobalDocumentReferenceSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_ref?: GraphQLTypes["SortOrder"] | undefined | null,
	_weak?: GraphQLTypes["SortOrder"] | undefined | null
};
	["SanityImageHotspotSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	x?: GraphQLTypes["SortOrder"] | undefined | null,
	y?: GraphQLTypes["SortOrder"] | undefined | null,
	height?: GraphQLTypes["SortOrder"] | undefined | null,
	width?: GraphQLTypes["SortOrder"] | undefined | null
};
	["SanityImageCropSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	top?: GraphQLTypes["SortOrder"] | undefined | null,
	bottom?: GraphQLTypes["SortOrder"] | undefined | null,
	left?: GraphQLTypes["SortOrder"] | undefined | null,
	right?: GraphQLTypes["SortOrder"] | undefined | null
};
	["LeaderSorting"]: {
		_id?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_createdAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_updatedAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_rev?: GraphQLTypes["SortOrder"] | undefined | null,
	_key?: GraphQLTypes["SortOrder"] | undefined | null,
	position?: GraphQLTypes["SortOrder"] | undefined | null,
	category?: GraphQLTypes["SortOrder"] | undefined | null,
	description?: GraphQLTypes["SortOrder"] | undefined | null,
	image?: GraphQLTypes["ImageSorting"] | undefined | null,
	video?: GraphQLTypes["FileSorting"] | undefined | null
};
	["FileSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	media?: GraphQLTypes["GlobalDocumentReferenceSorting"] | undefined | null
};
	["DeepDiveFilter"]: {
		/** Apply filters on document level */
	_?: GraphQLTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: GraphQLTypes["IDFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_createdAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_rev?: GraphQLTypes["StringFilter"] | undefined | null,
	_key?: GraphQLTypes["StringFilter"] | undefined | null,
	name?: GraphQLTypes["StringFilter"] | undefined | null,
	slug?: GraphQLTypes["SlugFilter"] | undefined | null,
	image?: GraphQLTypes["ImageFilter"] | undefined | null,
	start_date?: GraphQLTypes["DateFilter"] | undefined | null,
	end_date?: GraphQLTypes["DateFilter"] | undefined | null,
	accepting_new_students?: GraphQLTypes["BooleanFilter"] | undefined | null
};
	["DeepDiveSorting"]: {
		_id?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_createdAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_updatedAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_rev?: GraphQLTypes["SortOrder"] | undefined | null,
	_key?: GraphQLTypes["SortOrder"] | undefined | null,
	name?: GraphQLTypes["SortOrder"] | undefined | null,
	slug?: GraphQLTypes["SlugSorting"] | undefined | null,
	image?: GraphQLTypes["ImageSorting"] | undefined | null,
	start_date?: GraphQLTypes["SortOrder"] | undefined | null,
	end_date?: GraphQLTypes["SortOrder"] | undefined | null,
	accepting_new_students?: GraphQLTypes["SortOrder"] | undefined | null
};
	["SlugSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	current?: GraphQLTypes["SortOrder"] | undefined | null,
	source?: GraphQLTypes["SortOrder"] | undefined | null
};
	["MinistrySorting"]: {
		_id?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_createdAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_updatedAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_rev?: GraphQLTypes["SortOrder"] | undefined | null,
	_key?: GraphQLTypes["SortOrder"] | undefined | null,
	name?: GraphQLTypes["SortOrder"] | undefined | null,
	slug?: GraphQLTypes["SlugSorting"] | undefined | null,
	scripture?: GraphQLTypes["ScriptureSorting"] | undefined | null,
	image?: GraphQLTypes["ImageSorting"] | undefined | null
};
	["ScriptureSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	passage?: GraphQLTypes["SortOrder"] | undefined | null,
	verse?: GraphQLTypes["SortOrder"] | undefined | null
};
	["NextGenPageFilter"]: {
		/** Apply filters on document level */
	_?: GraphQLTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: GraphQLTypes["IDFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_createdAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_rev?: GraphQLTypes["StringFilter"] | undefined | null,
	_key?: GraphQLTypes["StringFilter"] | undefined | null,
	cirriculum_file?: GraphQLTypes["FileFilter"] | undefined | null
};
	["NextGenPageSorting"]: {
		_id?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_createdAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_updatedAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_rev?: GraphQLTypes["SortOrder"] | undefined | null,
	_key?: GraphQLTypes["SortOrder"] | undefined | null,
	cirriculum_file?: GraphQLTypes["FileSorting"] | undefined | null
};
	["ProductFilter"]: {
		/** Apply filters on document level */
	_?: GraphQLTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: GraphQLTypes["IDFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_createdAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_rev?: GraphQLTypes["StringFilter"] | undefined | null,
	_key?: GraphQLTypes["StringFilter"] | undefined | null,
	title?: GraphQLTypes["StringFilter"] | undefined | null
};
	["ProductSorting"]: {
		_id?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_createdAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_updatedAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_rev?: GraphQLTypes["SortOrder"] | undefined | null,
	_key?: GraphQLTypes["SortOrder"] | undefined | null,
	title?: GraphQLTypes["SortOrder"] | undefined | null
};
	["DocumentFilter"]: {
		/** Apply filters on document level */
	_?: GraphQLTypes["Sanity_DocumentFilter"] | undefined | null,
	_id?: GraphQLTypes["IDFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_createdAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_updatedAt?: GraphQLTypes["DatetimeFilter"] | undefined | null,
	_rev?: GraphQLTypes["StringFilter"] | undefined | null
};
	["DocumentSorting"]: {
		_id?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_createdAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_updatedAt?: GraphQLTypes["SortOrder"] | undefined | null,
	_rev?: GraphQLTypes["SortOrder"] | undefined | null
};
	["Block"]: {
	__typename: "Block",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	children?: Array<GraphQLTypes["Span"] | undefined | null> | undefined | null,
	style?: string | undefined | null,
	listItem?: string | undefined | null,
	level?: number | undefined | null
};
	["Span"]: {
	__typename: "Span",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	marks?: Array<string | undefined | null> | undefined | null,
	text?: string | undefined | null
};
	["CrossDatasetReference"]: {
	__typename: "CrossDatasetReference",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	_ref?: string | undefined | null,
	_weak?: boolean | undefined | null,
	_dataset?: string | undefined | null,
	_projectId?: string | undefined | null
};
	["ShopifyAssetPreview"]: {
	__typename: "ShopifyAssetPreview",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	height?: number | undefined | null,
	width?: number | undefined | null,
	url?: string | undefined | null
};
	["ShopifyAssetMetadata"]: {
	__typename: "ShopifyAssetMetadata",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	alt?: string | undefined | null,
	duration?: number | undefined | null,
	fileSize?: number | undefined | null,
	height?: number | undefined | null,
	width?: number | undefined | null
};
	["ShopifyAsset"]: {
	__typename: "ShopifyAsset",
	_key?: string | undefined | null,
	_type?: string | undefined | null,
	filename?: string | undefined | null,
	id?: string | undefined | null,
	meta?: GraphQLTypes["ShopifyAssetMetadata"] | undefined | null,
	preview?: GraphQLTypes["ShopifyAssetPreview"] | undefined | null,
	type?: string | undefined | null,
	url?: string | undefined | null
};
	["IntFilter"]: {
		/** Checks if the value is equal to the given input. */
	eq?: number | undefined | null,
	/** Checks if the value is not equal to the given input. */
	neq?: number | undefined | null,
	/** Checks if the value is greater than the given input. */
	gt?: number | undefined | null,
	/** Checks if the value is greater than or equal to the given input. */
	gte?: number | undefined | null,
	/** Checks if the value is lesser than the given input. */
	lt?: number | undefined | null,
	/** Checks if the value is lesser than or equal to the given input. */
	lte?: number | undefined | null,
	/** Checks if the value is defined. */
	is_defined?: boolean | undefined | null
};
	["CrossDatasetReferenceFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	_ref?: GraphQLTypes["StringFilter"] | undefined | null,
	_weak?: GraphQLTypes["BooleanFilter"] | undefined | null,
	_dataset?: GraphQLTypes["StringFilter"] | undefined | null,
	_projectId?: GraphQLTypes["StringFilter"] | undefined | null
};
	["ShopifyAssetPreviewFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	height?: GraphQLTypes["FloatFilter"] | undefined | null,
	width?: GraphQLTypes["FloatFilter"] | undefined | null,
	url?: GraphQLTypes["StringFilter"] | undefined | null
};
	["ShopifyAssetMetadataFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	alt?: GraphQLTypes["StringFilter"] | undefined | null,
	duration?: GraphQLTypes["FloatFilter"] | undefined | null,
	fileSize?: GraphQLTypes["FloatFilter"] | undefined | null,
	height?: GraphQLTypes["FloatFilter"] | undefined | null,
	width?: GraphQLTypes["FloatFilter"] | undefined | null
};
	["ShopifyAssetFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	filename?: GraphQLTypes["StringFilter"] | undefined | null,
	id?: GraphQLTypes["StringFilter"] | undefined | null,
	meta?: GraphQLTypes["ShopifyAssetMetadataFilter"] | undefined | null,
	preview?: GraphQLTypes["ShopifyAssetPreviewFilter"] | undefined | null,
	type?: GraphQLTypes["StringFilter"] | undefined | null,
	url?: GraphQLTypes["StringFilter"] | undefined | null
};
	["MeetingDetailsTypeFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	day?: GraphQLTypes["StringFilter"] | undefined | null,
	time?: GraphQLTypes["TimeTypeFilter"] | undefined | null,
	location?: GraphQLTypes["StringFilter"] | undefined | null
};
	["NextGenRosterSignupGuardianFilter"]: {
		_key?: GraphQLTypes["StringFilter"] | undefined | null,
	_type?: GraphQLTypes["StringFilter"] | undefined | null,
	contact?: GraphQLTypes["ContactFilter"] | undefined | null,
	relationship_to_child?: GraphQLTypes["StringFilter"] | undefined | null
};
	["CrossDatasetReferenceSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	_ref?: GraphQLTypes["SortOrder"] | undefined | null,
	_weak?: GraphQLTypes["SortOrder"] | undefined | null,
	_dataset?: GraphQLTypes["SortOrder"] | undefined | null,
	_projectId?: GraphQLTypes["SortOrder"] | undefined | null
};
	["ShopifyAssetPreviewSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	height?: GraphQLTypes["SortOrder"] | undefined | null,
	width?: GraphQLTypes["SortOrder"] | undefined | null,
	url?: GraphQLTypes["SortOrder"] | undefined | null
};
	["ShopifyAssetMetadataSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	alt?: GraphQLTypes["SortOrder"] | undefined | null,
	duration?: GraphQLTypes["SortOrder"] | undefined | null,
	fileSize?: GraphQLTypes["SortOrder"] | undefined | null,
	height?: GraphQLTypes["SortOrder"] | undefined | null,
	width?: GraphQLTypes["SortOrder"] | undefined | null
};
	["ShopifyAssetSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	filename?: GraphQLTypes["SortOrder"] | undefined | null,
	id?: GraphQLTypes["SortOrder"] | undefined | null,
	meta?: GraphQLTypes["ShopifyAssetMetadataSorting"] | undefined | null,
	preview?: GraphQLTypes["ShopifyAssetPreviewSorting"] | undefined | null,
	type?: GraphQLTypes["SortOrder"] | undefined | null,
	url?: GraphQLTypes["SortOrder"] | undefined | null
};
	["MeetingDetailsTypeSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	day?: GraphQLTypes["SortOrder"] | undefined | null,
	time?: GraphQLTypes["TimeTypeSorting"] | undefined | null,
	location?: GraphQLTypes["SortOrder"] | undefined | null
};
	["NextGenRosterSignupGuardianSorting"]: {
		_key?: GraphQLTypes["SortOrder"] | undefined | null,
	_type?: GraphQLTypes["SortOrder"] | undefined | null,
	relationship_to_child?: GraphQLTypes["SortOrder"] | undefined | null
};
	["ID"]: "scalar" & { name: "ID" }
    }
export enum SortOrder {
	ASC = "ASC",
	DESC = "DESC"
}

type ZEUS_VARIABLES = {
	["DateTime"]: ValueTypes["DateTime"];
	["Date"]: ValueTypes["Date"];
	["JSON"]: ValueTypes["JSON"];
	["SanityImageAssetFilter"]: ValueTypes["SanityImageAssetFilter"];
	["Sanity_DocumentFilter"]: ValueTypes["Sanity_DocumentFilter"];
	["IDFilter"]: ValueTypes["IDFilter"];
	["StringFilter"]: ValueTypes["StringFilter"];
	["DatetimeFilter"]: ValueTypes["DatetimeFilter"];
	["FloatFilter"]: ValueTypes["FloatFilter"];
	["SanityImageMetadataFilter"]: ValueTypes["SanityImageMetadataFilter"];
	["GeopointFilter"]: ValueTypes["GeopointFilter"];
	["SanityImageDimensionsFilter"]: ValueTypes["SanityImageDimensionsFilter"];
	["SanityImagePaletteFilter"]: ValueTypes["SanityImagePaletteFilter"];
	["SanityImagePaletteSwatchFilter"]: ValueTypes["SanityImagePaletteSwatchFilter"];
	["BooleanFilter"]: ValueTypes["BooleanFilter"];
	["SanityAssetSourceDataFilter"]: ValueTypes["SanityAssetSourceDataFilter"];
	["SanityImageAssetSorting"]: ValueTypes["SanityImageAssetSorting"];
	["SortOrder"]: ValueTypes["SortOrder"];
	["SanityImageMetadataSorting"]: ValueTypes["SanityImageMetadataSorting"];
	["GeopointSorting"]: ValueTypes["GeopointSorting"];
	["SanityImageDimensionsSorting"]: ValueTypes["SanityImageDimensionsSorting"];
	["SanityImagePaletteSorting"]: ValueTypes["SanityImagePaletteSorting"];
	["SanityImagePaletteSwatchSorting"]: ValueTypes["SanityImagePaletteSwatchSorting"];
	["SanityAssetSourceDataSorting"]: ValueTypes["SanityAssetSourceDataSorting"];
	["SanityFileAssetFilter"]: ValueTypes["SanityFileAssetFilter"];
	["SanityFileAssetSorting"]: ValueTypes["SanityFileAssetSorting"];
	["EventRentalFilter"]: ValueTypes["EventRentalFilter"];
	["ContactFilter"]: ValueTypes["ContactFilter"];
	["EventRentalSorting"]: ValueTypes["EventRentalSorting"];
	["PrayerRequestFilter"]: ValueTypes["PrayerRequestFilter"];
	["PrayerRequestSorting"]: ValueTypes["PrayerRequestSorting"];
	["RightnowMediaFilter"]: ValueTypes["RightnowMediaFilter"];
	["RightnowMediaSorting"]: ValueTypes["RightnowMediaSorting"];
	["GiftAssessmentFilter"]: ValueTypes["GiftAssessmentFilter"];
	["GiftAssessmentSorting"]: ValueTypes["GiftAssessmentSorting"];
	["VisitorFeedbackFilter"]: ValueTypes["VisitorFeedbackFilter"];
	["VisitorFeedbackSorting"]: ValueTypes["VisitorFeedbackSorting"];
	["ScheduledVisitFilter"]: ValueTypes["ScheduledVisitFilter"];
	["ScheduledVisitSorting"]: ValueTypes["ScheduledVisitSorting"];
	["MinistryConnectionFilter"]: ValueTypes["MinistryConnectionFilter"];
	["MinistryConnectionSorting"]: ValueTypes["MinistryConnectionSorting"];
	["NextGenRosterSignupFilter"]: ValueTypes["NextGenRosterSignupFilter"];
	["NextGenRosterSignupSorting"]: ValueTypes["NextGenRosterSignupSorting"];
	["ContactSorting"]: ValueTypes["ContactSorting"];
	["EventFilter"]: ValueTypes["EventFilter"];
	["DateFilter"]: ValueTypes["DateFilter"];
	["TimeTypeFilter"]: ValueTypes["TimeTypeFilter"];
	["ImageFilter"]: ValueTypes["ImageFilter"];
	["GlobalDocumentReferenceFilter"]: ValueTypes["GlobalDocumentReferenceFilter"];
	["SanityImageHotspotFilter"]: ValueTypes["SanityImageHotspotFilter"];
	["SanityImageCropFilter"]: ValueTypes["SanityImageCropFilter"];
	["LeaderFilter"]: ValueTypes["LeaderFilter"];
	["FileFilter"]: ValueTypes["FileFilter"];
	["MinistryFilter"]: ValueTypes["MinistryFilter"];
	["SlugFilter"]: ValueTypes["SlugFilter"];
	["ScriptureFilter"]: ValueTypes["ScriptureFilter"];
	["EventSorting"]: ValueTypes["EventSorting"];
	["TimeTypeSorting"]: ValueTypes["TimeTypeSorting"];
	["ImageSorting"]: ValueTypes["ImageSorting"];
	["GlobalDocumentReferenceSorting"]: ValueTypes["GlobalDocumentReferenceSorting"];
	["SanityImageHotspotSorting"]: ValueTypes["SanityImageHotspotSorting"];
	["SanityImageCropSorting"]: ValueTypes["SanityImageCropSorting"];
	["LeaderSorting"]: ValueTypes["LeaderSorting"];
	["FileSorting"]: ValueTypes["FileSorting"];
	["DeepDiveFilter"]: ValueTypes["DeepDiveFilter"];
	["DeepDiveSorting"]: ValueTypes["DeepDiveSorting"];
	["SlugSorting"]: ValueTypes["SlugSorting"];
	["MinistrySorting"]: ValueTypes["MinistrySorting"];
	["ScriptureSorting"]: ValueTypes["ScriptureSorting"];
	["NextGenPageFilter"]: ValueTypes["NextGenPageFilter"];
	["NextGenPageSorting"]: ValueTypes["NextGenPageSorting"];
	["ProductFilter"]: ValueTypes["ProductFilter"];
	["ProductSorting"]: ValueTypes["ProductSorting"];
	["DocumentFilter"]: ValueTypes["DocumentFilter"];
	["DocumentSorting"]: ValueTypes["DocumentSorting"];
	["IntFilter"]: ValueTypes["IntFilter"];
	["CrossDatasetReferenceFilter"]: ValueTypes["CrossDatasetReferenceFilter"];
	["ShopifyAssetPreviewFilter"]: ValueTypes["ShopifyAssetPreviewFilter"];
	["ShopifyAssetMetadataFilter"]: ValueTypes["ShopifyAssetMetadataFilter"];
	["ShopifyAssetFilter"]: ValueTypes["ShopifyAssetFilter"];
	["MeetingDetailsTypeFilter"]: ValueTypes["MeetingDetailsTypeFilter"];
	["NextGenRosterSignupGuardianFilter"]: ValueTypes["NextGenRosterSignupGuardianFilter"];
	["CrossDatasetReferenceSorting"]: ValueTypes["CrossDatasetReferenceSorting"];
	["ShopifyAssetPreviewSorting"]: ValueTypes["ShopifyAssetPreviewSorting"];
	["ShopifyAssetMetadataSorting"]: ValueTypes["ShopifyAssetMetadataSorting"];
	["ShopifyAssetSorting"]: ValueTypes["ShopifyAssetSorting"];
	["MeetingDetailsTypeSorting"]: ValueTypes["MeetingDetailsTypeSorting"];
	["NextGenRosterSignupGuardianSorting"]: ValueTypes["NextGenRosterSignupGuardianSorting"];
	["ID"]: ValueTypes["ID"];
}