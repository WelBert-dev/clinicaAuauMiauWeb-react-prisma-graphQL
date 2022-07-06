import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cliente = {
  __typename?: 'Cliente';
  bairro_c?: Maybe<Scalars['String']>;
  cep_c?: Maybe<Scalars['Int']>;
  cpf_c?: Maybe<Scalars['String']>;
  dt_nasc_c?: Maybe<Scalars['String']>;
  dt_reg_c?: Maybe<Scalars['String']>;
  email_c?: Maybe<Scalars['String']>;
  endereco_c?: Maybe<Scalars['String']>;
  estado_c?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  logradouro_c?: Maybe<Scalars['String']>;
  nome_completo_c?: Maybe<Scalars['String']>;
  pais_c?: Maybe<Scalars['String']>;
  sexo_c?: Maybe<Scalars['String']>;
  tel_cont1_c?: Maybe<Scalars['String']>;
  tel_cont2_c?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'query';
  clientes?: Maybe<Array<Maybe<Cliente>>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Cliente: ResolverTypeWrapper<Cliente>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  query: ResolverTypeWrapper<Query>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Cliente: Cliente;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  String: Scalars['String'];
  query: Query;
};

export type ClienteResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cliente'] = ResolversParentTypes['Cliente']> = {
  bairro_c?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cep_c?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cpf_c?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dt_nasc_c?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dt_reg_c?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email_c?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endereco_c?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  estado_c?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  logradouro_c?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nome_completo_c?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pais_c?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sexo_c?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tel_cont1_c?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tel_cont2_c?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['query'] = ResolversParentTypes['query']> = {
  clientes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cliente']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Cliente?: ClienteResolvers<ContextType>;
  query?: QueryResolvers<ContextType>;
};

