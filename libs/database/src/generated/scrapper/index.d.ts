
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model MyntraRootCategory
 * 
 */
export type MyntraRootCategory = $Result.DefaultSelection<Prisma.$MyntraRootCategoryPayload>
/**
 * Model MyntraGroupCategory
 * 
 */
export type MyntraGroupCategory = $Result.DefaultSelection<Prisma.$MyntraGroupCategoryPayload>
/**
 * Model MyntraCategory
 * 
 */
export type MyntraCategory = $Result.DefaultSelection<Prisma.$MyntraCategoryPayload>
/**
 * Model MyntraProduct
 * 
 */
export type MyntraProduct = $Result.DefaultSelection<Prisma.$MyntraProductPayload>
/**
 * Model ScrapeProgress
 * 
 */
export type ScrapeProgress = $Result.DefaultSelection<Prisma.$ScrapeProgressPayload>
/**
 * Model BlinkitProduct
 * 
 */
export type BlinkitProduct = $Result.DefaultSelection<Prisma.$BlinkitProductPayload>
/**
 * Model LimeroadProduct
 * 
 */
export type LimeroadProduct = $Result.DefaultSelection<Prisma.$LimeroadProductPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MyntraRootCategories
 * const myntraRootCategories = await prisma.myntraRootCategory.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more MyntraRootCategories
   * const myntraRootCategories = await prisma.myntraRootCategory.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.myntraRootCategory`: Exposes CRUD operations for the **MyntraRootCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MyntraRootCategories
    * const myntraRootCategories = await prisma.myntraRootCategory.findMany()
    * ```
    */
  get myntraRootCategory(): Prisma.MyntraRootCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.myntraGroupCategory`: Exposes CRUD operations for the **MyntraGroupCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MyntraGroupCategories
    * const myntraGroupCategories = await prisma.myntraGroupCategory.findMany()
    * ```
    */
  get myntraGroupCategory(): Prisma.MyntraGroupCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.myntraCategory`: Exposes CRUD operations for the **MyntraCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MyntraCategories
    * const myntraCategories = await prisma.myntraCategory.findMany()
    * ```
    */
  get myntraCategory(): Prisma.MyntraCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.myntraProduct`: Exposes CRUD operations for the **MyntraProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MyntraProducts
    * const myntraProducts = await prisma.myntraProduct.findMany()
    * ```
    */
  get myntraProduct(): Prisma.MyntraProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scrapeProgress`: Exposes CRUD operations for the **ScrapeProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScrapeProgresses
    * const scrapeProgresses = await prisma.scrapeProgress.findMany()
    * ```
    */
  get scrapeProgress(): Prisma.ScrapeProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blinkitProduct`: Exposes CRUD operations for the **BlinkitProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlinkitProducts
    * const blinkitProducts = await prisma.blinkitProduct.findMany()
    * ```
    */
  get blinkitProduct(): Prisma.BlinkitProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.limeroadProduct`: Exposes CRUD operations for the **LimeroadProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LimeroadProducts
    * const limeroadProducts = await prisma.limeroadProduct.findMany()
    * ```
    */
  get limeroadProduct(): Prisma.LimeroadProductDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    MyntraRootCategory: 'MyntraRootCategory',
    MyntraGroupCategory: 'MyntraGroupCategory',
    MyntraCategory: 'MyntraCategory',
    MyntraProduct: 'MyntraProduct',
    ScrapeProgress: 'ScrapeProgress',
    BlinkitProduct: 'BlinkitProduct',
    LimeroadProduct: 'LimeroadProduct'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "myntraRootCategory" | "myntraGroupCategory" | "myntraCategory" | "myntraProduct" | "scrapeProgress" | "blinkitProduct" | "limeroadProduct"
      txIsolationLevel: never
    }
    model: {
      MyntraRootCategory: {
        payload: Prisma.$MyntraRootCategoryPayload<ExtArgs>
        fields: Prisma.MyntraRootCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MyntraRootCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraRootCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MyntraRootCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraRootCategoryPayload>
          }
          findFirst: {
            args: Prisma.MyntraRootCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraRootCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MyntraRootCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraRootCategoryPayload>
          }
          findMany: {
            args: Prisma.MyntraRootCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraRootCategoryPayload>[]
          }
          create: {
            args: Prisma.MyntraRootCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraRootCategoryPayload>
          }
          createMany: {
            args: Prisma.MyntraRootCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MyntraRootCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraRootCategoryPayload>
          }
          update: {
            args: Prisma.MyntraRootCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraRootCategoryPayload>
          }
          deleteMany: {
            args: Prisma.MyntraRootCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MyntraRootCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MyntraRootCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraRootCategoryPayload>
          }
          aggregate: {
            args: Prisma.MyntraRootCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMyntraRootCategory>
          }
          groupBy: {
            args: Prisma.MyntraRootCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MyntraRootCategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MyntraRootCategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MyntraRootCategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MyntraRootCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<MyntraRootCategoryCountAggregateOutputType> | number
          }
        }
      }
      MyntraGroupCategory: {
        payload: Prisma.$MyntraGroupCategoryPayload<ExtArgs>
        fields: Prisma.MyntraGroupCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MyntraGroupCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraGroupCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MyntraGroupCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraGroupCategoryPayload>
          }
          findFirst: {
            args: Prisma.MyntraGroupCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraGroupCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MyntraGroupCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraGroupCategoryPayload>
          }
          findMany: {
            args: Prisma.MyntraGroupCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraGroupCategoryPayload>[]
          }
          create: {
            args: Prisma.MyntraGroupCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraGroupCategoryPayload>
          }
          createMany: {
            args: Prisma.MyntraGroupCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MyntraGroupCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraGroupCategoryPayload>
          }
          update: {
            args: Prisma.MyntraGroupCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraGroupCategoryPayload>
          }
          deleteMany: {
            args: Prisma.MyntraGroupCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MyntraGroupCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MyntraGroupCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraGroupCategoryPayload>
          }
          aggregate: {
            args: Prisma.MyntraGroupCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMyntraGroupCategory>
          }
          groupBy: {
            args: Prisma.MyntraGroupCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MyntraGroupCategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MyntraGroupCategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MyntraGroupCategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MyntraGroupCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<MyntraGroupCategoryCountAggregateOutputType> | number
          }
        }
      }
      MyntraCategory: {
        payload: Prisma.$MyntraCategoryPayload<ExtArgs>
        fields: Prisma.MyntraCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MyntraCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MyntraCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraCategoryPayload>
          }
          findFirst: {
            args: Prisma.MyntraCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MyntraCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraCategoryPayload>
          }
          findMany: {
            args: Prisma.MyntraCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraCategoryPayload>[]
          }
          create: {
            args: Prisma.MyntraCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraCategoryPayload>
          }
          createMany: {
            args: Prisma.MyntraCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MyntraCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraCategoryPayload>
          }
          update: {
            args: Prisma.MyntraCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraCategoryPayload>
          }
          deleteMany: {
            args: Prisma.MyntraCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MyntraCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MyntraCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraCategoryPayload>
          }
          aggregate: {
            args: Prisma.MyntraCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMyntraCategory>
          }
          groupBy: {
            args: Prisma.MyntraCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MyntraCategoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MyntraCategoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MyntraCategoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MyntraCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<MyntraCategoryCountAggregateOutputType> | number
          }
        }
      }
      MyntraProduct: {
        payload: Prisma.$MyntraProductPayload<ExtArgs>
        fields: Prisma.MyntraProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MyntraProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MyntraProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraProductPayload>
          }
          findFirst: {
            args: Prisma.MyntraProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MyntraProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraProductPayload>
          }
          findMany: {
            args: Prisma.MyntraProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraProductPayload>[]
          }
          create: {
            args: Prisma.MyntraProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraProductPayload>
          }
          createMany: {
            args: Prisma.MyntraProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MyntraProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraProductPayload>
          }
          update: {
            args: Prisma.MyntraProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraProductPayload>
          }
          deleteMany: {
            args: Prisma.MyntraProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MyntraProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MyntraProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyntraProductPayload>
          }
          aggregate: {
            args: Prisma.MyntraProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMyntraProduct>
          }
          groupBy: {
            args: Prisma.MyntraProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<MyntraProductGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MyntraProductFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MyntraProductAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MyntraProductCountArgs<ExtArgs>
            result: $Utils.Optional<MyntraProductCountAggregateOutputType> | number
          }
        }
      }
      ScrapeProgress: {
        payload: Prisma.$ScrapeProgressPayload<ExtArgs>
        fields: Prisma.ScrapeProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScrapeProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScrapeProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeProgressPayload>
          }
          findFirst: {
            args: Prisma.ScrapeProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScrapeProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeProgressPayload>
          }
          findMany: {
            args: Prisma.ScrapeProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeProgressPayload>[]
          }
          create: {
            args: Prisma.ScrapeProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeProgressPayload>
          }
          createMany: {
            args: Prisma.ScrapeProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ScrapeProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeProgressPayload>
          }
          update: {
            args: Prisma.ScrapeProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeProgressPayload>
          }
          deleteMany: {
            args: Prisma.ScrapeProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScrapeProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScrapeProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeProgressPayload>
          }
          aggregate: {
            args: Prisma.ScrapeProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScrapeProgress>
          }
          groupBy: {
            args: Prisma.ScrapeProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScrapeProgressGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ScrapeProgressFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ScrapeProgressAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ScrapeProgressCountArgs<ExtArgs>
            result: $Utils.Optional<ScrapeProgressCountAggregateOutputType> | number
          }
        }
      }
      BlinkitProduct: {
        payload: Prisma.$BlinkitProductPayload<ExtArgs>
        fields: Prisma.BlinkitProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlinkitProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlinkitProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlinkitProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlinkitProductPayload>
          }
          findFirst: {
            args: Prisma.BlinkitProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlinkitProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlinkitProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlinkitProductPayload>
          }
          findMany: {
            args: Prisma.BlinkitProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlinkitProductPayload>[]
          }
          create: {
            args: Prisma.BlinkitProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlinkitProductPayload>
          }
          createMany: {
            args: Prisma.BlinkitProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BlinkitProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlinkitProductPayload>
          }
          update: {
            args: Prisma.BlinkitProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlinkitProductPayload>
          }
          deleteMany: {
            args: Prisma.BlinkitProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlinkitProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlinkitProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlinkitProductPayload>
          }
          aggregate: {
            args: Prisma.BlinkitProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlinkitProduct>
          }
          groupBy: {
            args: Prisma.BlinkitProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlinkitProductGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BlinkitProductFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.BlinkitProductAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.BlinkitProductCountArgs<ExtArgs>
            result: $Utils.Optional<BlinkitProductCountAggregateOutputType> | number
          }
        }
      }
      LimeroadProduct: {
        payload: Prisma.$LimeroadProductPayload<ExtArgs>
        fields: Prisma.LimeroadProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LimeroadProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimeroadProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LimeroadProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimeroadProductPayload>
          }
          findFirst: {
            args: Prisma.LimeroadProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimeroadProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LimeroadProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimeroadProductPayload>
          }
          findMany: {
            args: Prisma.LimeroadProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimeroadProductPayload>[]
          }
          create: {
            args: Prisma.LimeroadProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimeroadProductPayload>
          }
          createMany: {
            args: Prisma.LimeroadProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LimeroadProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimeroadProductPayload>
          }
          update: {
            args: Prisma.LimeroadProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimeroadProductPayload>
          }
          deleteMany: {
            args: Prisma.LimeroadProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LimeroadProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LimeroadProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LimeroadProductPayload>
          }
          aggregate: {
            args: Prisma.LimeroadProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLimeroadProduct>
          }
          groupBy: {
            args: Prisma.LimeroadProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<LimeroadProductGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.LimeroadProductFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.LimeroadProductAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.LimeroadProductCountArgs<ExtArgs>
            result: $Utils.Optional<LimeroadProductCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    myntraRootCategory?: MyntraRootCategoryOmit
    myntraGroupCategory?: MyntraGroupCategoryOmit
    myntraCategory?: MyntraCategoryOmit
    myntraProduct?: MyntraProductOmit
    scrapeProgress?: ScrapeProgressOmit
    blinkitProduct?: BlinkitProductOmit
    limeroadProduct?: LimeroadProductOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MyntraRootCategoryCountOutputType
   */

  export type MyntraRootCategoryCountOutputType = {
    groups: number
  }

  export type MyntraRootCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | MyntraRootCategoryCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * MyntraRootCategoryCountOutputType without action
   */
  export type MyntraRootCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraRootCategoryCountOutputType
     */
    select?: MyntraRootCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MyntraRootCategoryCountOutputType without action
   */
  export type MyntraRootCategoryCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyntraGroupCategoryWhereInput
  }


  /**
   * Count Type MyntraGroupCategoryCountOutputType
   */

  export type MyntraGroupCategoryCountOutputType = {
    categories: number
  }

  export type MyntraGroupCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | MyntraGroupCategoryCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * MyntraGroupCategoryCountOutputType without action
   */
  export type MyntraGroupCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraGroupCategoryCountOutputType
     */
    select?: MyntraGroupCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MyntraGroupCategoryCountOutputType without action
   */
  export type MyntraGroupCategoryCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyntraCategoryWhereInput
  }


  /**
   * Count Type MyntraCategoryCountOutputType
   */

  export type MyntraCategoryCountOutputType = {
    products: number
  }

  export type MyntraCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | MyntraCategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * MyntraCategoryCountOutputType without action
   */
  export type MyntraCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraCategoryCountOutputType
     */
    select?: MyntraCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MyntraCategoryCountOutputType without action
   */
  export type MyntraCategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyntraProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model MyntraRootCategory
   */

  export type AggregateMyntraRootCategory = {
    _count: MyntraRootCategoryCountAggregateOutputType | null
    _min: MyntraRootCategoryMinAggregateOutputType | null
    _max: MyntraRootCategoryMaxAggregateOutputType | null
  }

  export type MyntraRootCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type MyntraRootCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type MyntraRootCategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type MyntraRootCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type MyntraRootCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type MyntraRootCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type MyntraRootCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyntraRootCategory to aggregate.
     */
    where?: MyntraRootCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyntraRootCategories to fetch.
     */
    orderBy?: MyntraRootCategoryOrderByWithRelationInput | MyntraRootCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MyntraRootCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyntraRootCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyntraRootCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MyntraRootCategories
    **/
    _count?: true | MyntraRootCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MyntraRootCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MyntraRootCategoryMaxAggregateInputType
  }

  export type GetMyntraRootCategoryAggregateType<T extends MyntraRootCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMyntraRootCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMyntraRootCategory[P]>
      : GetScalarType<T[P], AggregateMyntraRootCategory[P]>
  }




  export type MyntraRootCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyntraRootCategoryWhereInput
    orderBy?: MyntraRootCategoryOrderByWithAggregationInput | MyntraRootCategoryOrderByWithAggregationInput[]
    by: MyntraRootCategoryScalarFieldEnum[] | MyntraRootCategoryScalarFieldEnum
    having?: MyntraRootCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MyntraRootCategoryCountAggregateInputType | true
    _min?: MyntraRootCategoryMinAggregateInputType
    _max?: MyntraRootCategoryMaxAggregateInputType
  }

  export type MyntraRootCategoryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: MyntraRootCategoryCountAggregateOutputType | null
    _min: MyntraRootCategoryMinAggregateOutputType | null
    _max: MyntraRootCategoryMaxAggregateOutputType | null
  }

  type GetMyntraRootCategoryGroupByPayload<T extends MyntraRootCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MyntraRootCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MyntraRootCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MyntraRootCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MyntraRootCategoryGroupByOutputType[P]>
        }
      >
    >


  export type MyntraRootCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    groups?: boolean | MyntraRootCategory$groupsArgs<ExtArgs>
    _count?: boolean | MyntraRootCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["myntraRootCategory"]>



  export type MyntraRootCategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type MyntraRootCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["myntraRootCategory"]>
  export type MyntraRootCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | MyntraRootCategory$groupsArgs<ExtArgs>
    _count?: boolean | MyntraRootCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MyntraRootCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MyntraRootCategory"
    objects: {
      groups: Prisma.$MyntraGroupCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["myntraRootCategory"]>
    composites: {}
  }

  type MyntraRootCategoryGetPayload<S extends boolean | null | undefined | MyntraRootCategoryDefaultArgs> = $Result.GetResult<Prisma.$MyntraRootCategoryPayload, S>

  type MyntraRootCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MyntraRootCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MyntraRootCategoryCountAggregateInputType | true
    }

  export interface MyntraRootCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MyntraRootCategory'], meta: { name: 'MyntraRootCategory' } }
    /**
     * Find zero or one MyntraRootCategory that matches the filter.
     * @param {MyntraRootCategoryFindUniqueArgs} args - Arguments to find a MyntraRootCategory
     * @example
     * // Get one MyntraRootCategory
     * const myntraRootCategory = await prisma.myntraRootCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MyntraRootCategoryFindUniqueArgs>(args: SelectSubset<T, MyntraRootCategoryFindUniqueArgs<ExtArgs>>): Prisma__MyntraRootCategoryClient<$Result.GetResult<Prisma.$MyntraRootCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MyntraRootCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MyntraRootCategoryFindUniqueOrThrowArgs} args - Arguments to find a MyntraRootCategory
     * @example
     * // Get one MyntraRootCategory
     * const myntraRootCategory = await prisma.myntraRootCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MyntraRootCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MyntraRootCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MyntraRootCategoryClient<$Result.GetResult<Prisma.$MyntraRootCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MyntraRootCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraRootCategoryFindFirstArgs} args - Arguments to find a MyntraRootCategory
     * @example
     * // Get one MyntraRootCategory
     * const myntraRootCategory = await prisma.myntraRootCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MyntraRootCategoryFindFirstArgs>(args?: SelectSubset<T, MyntraRootCategoryFindFirstArgs<ExtArgs>>): Prisma__MyntraRootCategoryClient<$Result.GetResult<Prisma.$MyntraRootCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MyntraRootCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraRootCategoryFindFirstOrThrowArgs} args - Arguments to find a MyntraRootCategory
     * @example
     * // Get one MyntraRootCategory
     * const myntraRootCategory = await prisma.myntraRootCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MyntraRootCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MyntraRootCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MyntraRootCategoryClient<$Result.GetResult<Prisma.$MyntraRootCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MyntraRootCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraRootCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MyntraRootCategories
     * const myntraRootCategories = await prisma.myntraRootCategory.findMany()
     * 
     * // Get first 10 MyntraRootCategories
     * const myntraRootCategories = await prisma.myntraRootCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const myntraRootCategoryWithIdOnly = await prisma.myntraRootCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MyntraRootCategoryFindManyArgs>(args?: SelectSubset<T, MyntraRootCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyntraRootCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MyntraRootCategory.
     * @param {MyntraRootCategoryCreateArgs} args - Arguments to create a MyntraRootCategory.
     * @example
     * // Create one MyntraRootCategory
     * const MyntraRootCategory = await prisma.myntraRootCategory.create({
     *   data: {
     *     // ... data to create a MyntraRootCategory
     *   }
     * })
     * 
     */
    create<T extends MyntraRootCategoryCreateArgs>(args: SelectSubset<T, MyntraRootCategoryCreateArgs<ExtArgs>>): Prisma__MyntraRootCategoryClient<$Result.GetResult<Prisma.$MyntraRootCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MyntraRootCategories.
     * @param {MyntraRootCategoryCreateManyArgs} args - Arguments to create many MyntraRootCategories.
     * @example
     * // Create many MyntraRootCategories
     * const myntraRootCategory = await prisma.myntraRootCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MyntraRootCategoryCreateManyArgs>(args?: SelectSubset<T, MyntraRootCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MyntraRootCategory.
     * @param {MyntraRootCategoryDeleteArgs} args - Arguments to delete one MyntraRootCategory.
     * @example
     * // Delete one MyntraRootCategory
     * const MyntraRootCategory = await prisma.myntraRootCategory.delete({
     *   where: {
     *     // ... filter to delete one MyntraRootCategory
     *   }
     * })
     * 
     */
    delete<T extends MyntraRootCategoryDeleteArgs>(args: SelectSubset<T, MyntraRootCategoryDeleteArgs<ExtArgs>>): Prisma__MyntraRootCategoryClient<$Result.GetResult<Prisma.$MyntraRootCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MyntraRootCategory.
     * @param {MyntraRootCategoryUpdateArgs} args - Arguments to update one MyntraRootCategory.
     * @example
     * // Update one MyntraRootCategory
     * const myntraRootCategory = await prisma.myntraRootCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MyntraRootCategoryUpdateArgs>(args: SelectSubset<T, MyntraRootCategoryUpdateArgs<ExtArgs>>): Prisma__MyntraRootCategoryClient<$Result.GetResult<Prisma.$MyntraRootCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MyntraRootCategories.
     * @param {MyntraRootCategoryDeleteManyArgs} args - Arguments to filter MyntraRootCategories to delete.
     * @example
     * // Delete a few MyntraRootCategories
     * const { count } = await prisma.myntraRootCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MyntraRootCategoryDeleteManyArgs>(args?: SelectSubset<T, MyntraRootCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MyntraRootCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraRootCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MyntraRootCategories
     * const myntraRootCategory = await prisma.myntraRootCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MyntraRootCategoryUpdateManyArgs>(args: SelectSubset<T, MyntraRootCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MyntraRootCategory.
     * @param {MyntraRootCategoryUpsertArgs} args - Arguments to update or create a MyntraRootCategory.
     * @example
     * // Update or create a MyntraRootCategory
     * const myntraRootCategory = await prisma.myntraRootCategory.upsert({
     *   create: {
     *     // ... data to create a MyntraRootCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MyntraRootCategory we want to update
     *   }
     * })
     */
    upsert<T extends MyntraRootCategoryUpsertArgs>(args: SelectSubset<T, MyntraRootCategoryUpsertArgs<ExtArgs>>): Prisma__MyntraRootCategoryClient<$Result.GetResult<Prisma.$MyntraRootCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MyntraRootCategories that matches the filter.
     * @param {MyntraRootCategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const myntraRootCategory = await prisma.myntraRootCategory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MyntraRootCategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MyntraRootCategory.
     * @param {MyntraRootCategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const myntraRootCategory = await prisma.myntraRootCategory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MyntraRootCategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of MyntraRootCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraRootCategoryCountArgs} args - Arguments to filter MyntraRootCategories to count.
     * @example
     * // Count the number of MyntraRootCategories
     * const count = await prisma.myntraRootCategory.count({
     *   where: {
     *     // ... the filter for the MyntraRootCategories we want to count
     *   }
     * })
    **/
    count<T extends MyntraRootCategoryCountArgs>(
      args?: Subset<T, MyntraRootCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MyntraRootCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MyntraRootCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraRootCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MyntraRootCategoryAggregateArgs>(args: Subset<T, MyntraRootCategoryAggregateArgs>): Prisma.PrismaPromise<GetMyntraRootCategoryAggregateType<T>>

    /**
     * Group by MyntraRootCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraRootCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MyntraRootCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MyntraRootCategoryGroupByArgs['orderBy'] }
        : { orderBy?: MyntraRootCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MyntraRootCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMyntraRootCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MyntraRootCategory model
   */
  readonly fields: MyntraRootCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MyntraRootCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MyntraRootCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groups<T extends MyntraRootCategory$groupsArgs<ExtArgs> = {}>(args?: Subset<T, MyntraRootCategory$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyntraGroupCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MyntraRootCategory model
   */ 
  interface MyntraRootCategoryFieldRefs {
    readonly id: FieldRef<"MyntraRootCategory", 'String'>
    readonly name: FieldRef<"MyntraRootCategory", 'String'>
    readonly createdAt: FieldRef<"MyntraRootCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MyntraRootCategory findUnique
   */
  export type MyntraRootCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraRootCategory
     */
    select?: MyntraRootCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraRootCategory
     */
    omit?: MyntraRootCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraRootCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MyntraRootCategory to fetch.
     */
    where: MyntraRootCategoryWhereUniqueInput
  }

  /**
   * MyntraRootCategory findUniqueOrThrow
   */
  export type MyntraRootCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraRootCategory
     */
    select?: MyntraRootCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraRootCategory
     */
    omit?: MyntraRootCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraRootCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MyntraRootCategory to fetch.
     */
    where: MyntraRootCategoryWhereUniqueInput
  }

  /**
   * MyntraRootCategory findFirst
   */
  export type MyntraRootCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraRootCategory
     */
    select?: MyntraRootCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraRootCategory
     */
    omit?: MyntraRootCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraRootCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MyntraRootCategory to fetch.
     */
    where?: MyntraRootCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyntraRootCategories to fetch.
     */
    orderBy?: MyntraRootCategoryOrderByWithRelationInput | MyntraRootCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyntraRootCategories.
     */
    cursor?: MyntraRootCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyntraRootCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyntraRootCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyntraRootCategories.
     */
    distinct?: MyntraRootCategoryScalarFieldEnum | MyntraRootCategoryScalarFieldEnum[]
  }

  /**
   * MyntraRootCategory findFirstOrThrow
   */
  export type MyntraRootCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraRootCategory
     */
    select?: MyntraRootCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraRootCategory
     */
    omit?: MyntraRootCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraRootCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MyntraRootCategory to fetch.
     */
    where?: MyntraRootCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyntraRootCategories to fetch.
     */
    orderBy?: MyntraRootCategoryOrderByWithRelationInput | MyntraRootCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyntraRootCategories.
     */
    cursor?: MyntraRootCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyntraRootCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyntraRootCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyntraRootCategories.
     */
    distinct?: MyntraRootCategoryScalarFieldEnum | MyntraRootCategoryScalarFieldEnum[]
  }

  /**
   * MyntraRootCategory findMany
   */
  export type MyntraRootCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraRootCategory
     */
    select?: MyntraRootCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraRootCategory
     */
    omit?: MyntraRootCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraRootCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MyntraRootCategories to fetch.
     */
    where?: MyntraRootCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyntraRootCategories to fetch.
     */
    orderBy?: MyntraRootCategoryOrderByWithRelationInput | MyntraRootCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MyntraRootCategories.
     */
    cursor?: MyntraRootCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyntraRootCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyntraRootCategories.
     */
    skip?: number
    distinct?: MyntraRootCategoryScalarFieldEnum | MyntraRootCategoryScalarFieldEnum[]
  }

  /**
   * MyntraRootCategory create
   */
  export type MyntraRootCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraRootCategory
     */
    select?: MyntraRootCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraRootCategory
     */
    omit?: MyntraRootCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraRootCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MyntraRootCategory.
     */
    data: XOR<MyntraRootCategoryCreateInput, MyntraRootCategoryUncheckedCreateInput>
  }

  /**
   * MyntraRootCategory createMany
   */
  export type MyntraRootCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MyntraRootCategories.
     */
    data: MyntraRootCategoryCreateManyInput | MyntraRootCategoryCreateManyInput[]
  }

  /**
   * MyntraRootCategory update
   */
  export type MyntraRootCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraRootCategory
     */
    select?: MyntraRootCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraRootCategory
     */
    omit?: MyntraRootCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraRootCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MyntraRootCategory.
     */
    data: XOR<MyntraRootCategoryUpdateInput, MyntraRootCategoryUncheckedUpdateInput>
    /**
     * Choose, which MyntraRootCategory to update.
     */
    where: MyntraRootCategoryWhereUniqueInput
  }

  /**
   * MyntraRootCategory updateMany
   */
  export type MyntraRootCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MyntraRootCategories.
     */
    data: XOR<MyntraRootCategoryUpdateManyMutationInput, MyntraRootCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MyntraRootCategories to update
     */
    where?: MyntraRootCategoryWhereInput
    /**
     * Limit how many MyntraRootCategories to update.
     */
    limit?: number
  }

  /**
   * MyntraRootCategory upsert
   */
  export type MyntraRootCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraRootCategory
     */
    select?: MyntraRootCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraRootCategory
     */
    omit?: MyntraRootCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraRootCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MyntraRootCategory to update in case it exists.
     */
    where: MyntraRootCategoryWhereUniqueInput
    /**
     * In case the MyntraRootCategory found by the `where` argument doesn't exist, create a new MyntraRootCategory with this data.
     */
    create: XOR<MyntraRootCategoryCreateInput, MyntraRootCategoryUncheckedCreateInput>
    /**
     * In case the MyntraRootCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MyntraRootCategoryUpdateInput, MyntraRootCategoryUncheckedUpdateInput>
  }

  /**
   * MyntraRootCategory delete
   */
  export type MyntraRootCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraRootCategory
     */
    select?: MyntraRootCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraRootCategory
     */
    omit?: MyntraRootCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraRootCategoryInclude<ExtArgs> | null
    /**
     * Filter which MyntraRootCategory to delete.
     */
    where: MyntraRootCategoryWhereUniqueInput
  }

  /**
   * MyntraRootCategory deleteMany
   */
  export type MyntraRootCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyntraRootCategories to delete
     */
    where?: MyntraRootCategoryWhereInput
    /**
     * Limit how many MyntraRootCategories to delete.
     */
    limit?: number
  }

  /**
   * MyntraRootCategory findRaw
   */
  export type MyntraRootCategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MyntraRootCategory aggregateRaw
   */
  export type MyntraRootCategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MyntraRootCategory.groups
   */
  export type MyntraRootCategory$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraGroupCategory
     */
    select?: MyntraGroupCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraGroupCategory
     */
    omit?: MyntraGroupCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraGroupCategoryInclude<ExtArgs> | null
    where?: MyntraGroupCategoryWhereInput
    orderBy?: MyntraGroupCategoryOrderByWithRelationInput | MyntraGroupCategoryOrderByWithRelationInput[]
    cursor?: MyntraGroupCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MyntraGroupCategoryScalarFieldEnum | MyntraGroupCategoryScalarFieldEnum[]
  }

  /**
   * MyntraRootCategory without action
   */
  export type MyntraRootCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraRootCategory
     */
    select?: MyntraRootCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraRootCategory
     */
    omit?: MyntraRootCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraRootCategoryInclude<ExtArgs> | null
  }


  /**
   * Model MyntraGroupCategory
   */

  export type AggregateMyntraGroupCategory = {
    _count: MyntraGroupCategoryCountAggregateOutputType | null
    _min: MyntraGroupCategoryMinAggregateOutputType | null
    _max: MyntraGroupCategoryMaxAggregateOutputType | null
  }

  export type MyntraGroupCategoryMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    rootCategoryId: string | null
    createdAt: Date | null
  }

  export type MyntraGroupCategoryMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    rootCategoryId: string | null
    createdAt: Date | null
  }

  export type MyntraGroupCategoryCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    rootCategoryId: number
    createdAt: number
    _all: number
  }


  export type MyntraGroupCategoryMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    rootCategoryId?: true
    createdAt?: true
  }

  export type MyntraGroupCategoryMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    rootCategoryId?: true
    createdAt?: true
  }

  export type MyntraGroupCategoryCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    rootCategoryId?: true
    createdAt?: true
    _all?: true
  }

  export type MyntraGroupCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyntraGroupCategory to aggregate.
     */
    where?: MyntraGroupCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyntraGroupCategories to fetch.
     */
    orderBy?: MyntraGroupCategoryOrderByWithRelationInput | MyntraGroupCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MyntraGroupCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyntraGroupCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyntraGroupCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MyntraGroupCategories
    **/
    _count?: true | MyntraGroupCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MyntraGroupCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MyntraGroupCategoryMaxAggregateInputType
  }

  export type GetMyntraGroupCategoryAggregateType<T extends MyntraGroupCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMyntraGroupCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMyntraGroupCategory[P]>
      : GetScalarType<T[P], AggregateMyntraGroupCategory[P]>
  }




  export type MyntraGroupCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyntraGroupCategoryWhereInput
    orderBy?: MyntraGroupCategoryOrderByWithAggregationInput | MyntraGroupCategoryOrderByWithAggregationInput[]
    by: MyntraGroupCategoryScalarFieldEnum[] | MyntraGroupCategoryScalarFieldEnum
    having?: MyntraGroupCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MyntraGroupCategoryCountAggregateInputType | true
    _min?: MyntraGroupCategoryMinAggregateInputType
    _max?: MyntraGroupCategoryMaxAggregateInputType
  }

  export type MyntraGroupCategoryGroupByOutputType = {
    id: string
    slug: string
    title: string
    rootCategoryId: string
    createdAt: Date
    _count: MyntraGroupCategoryCountAggregateOutputType | null
    _min: MyntraGroupCategoryMinAggregateOutputType | null
    _max: MyntraGroupCategoryMaxAggregateOutputType | null
  }

  type GetMyntraGroupCategoryGroupByPayload<T extends MyntraGroupCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MyntraGroupCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MyntraGroupCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MyntraGroupCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MyntraGroupCategoryGroupByOutputType[P]>
        }
      >
    >


  export type MyntraGroupCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    rootCategoryId?: boolean
    createdAt?: boolean
    rootCategory?: boolean | MyntraRootCategoryDefaultArgs<ExtArgs>
    categories?: boolean | MyntraGroupCategory$categoriesArgs<ExtArgs>
    _count?: boolean | MyntraGroupCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["myntraGroupCategory"]>



  export type MyntraGroupCategorySelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    rootCategoryId?: boolean
    createdAt?: boolean
  }

  export type MyntraGroupCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "rootCategoryId" | "createdAt", ExtArgs["result"]["myntraGroupCategory"]>
  export type MyntraGroupCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rootCategory?: boolean | MyntraRootCategoryDefaultArgs<ExtArgs>
    categories?: boolean | MyntraGroupCategory$categoriesArgs<ExtArgs>
    _count?: boolean | MyntraGroupCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MyntraGroupCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MyntraGroupCategory"
    objects: {
      rootCategory: Prisma.$MyntraRootCategoryPayload<ExtArgs>
      categories: Prisma.$MyntraCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      rootCategoryId: string
      createdAt: Date
    }, ExtArgs["result"]["myntraGroupCategory"]>
    composites: {}
  }

  type MyntraGroupCategoryGetPayload<S extends boolean | null | undefined | MyntraGroupCategoryDefaultArgs> = $Result.GetResult<Prisma.$MyntraGroupCategoryPayload, S>

  type MyntraGroupCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MyntraGroupCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MyntraGroupCategoryCountAggregateInputType | true
    }

  export interface MyntraGroupCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MyntraGroupCategory'], meta: { name: 'MyntraGroupCategory' } }
    /**
     * Find zero or one MyntraGroupCategory that matches the filter.
     * @param {MyntraGroupCategoryFindUniqueArgs} args - Arguments to find a MyntraGroupCategory
     * @example
     * // Get one MyntraGroupCategory
     * const myntraGroupCategory = await prisma.myntraGroupCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MyntraGroupCategoryFindUniqueArgs>(args: SelectSubset<T, MyntraGroupCategoryFindUniqueArgs<ExtArgs>>): Prisma__MyntraGroupCategoryClient<$Result.GetResult<Prisma.$MyntraGroupCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MyntraGroupCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MyntraGroupCategoryFindUniqueOrThrowArgs} args - Arguments to find a MyntraGroupCategory
     * @example
     * // Get one MyntraGroupCategory
     * const myntraGroupCategory = await prisma.myntraGroupCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MyntraGroupCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MyntraGroupCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MyntraGroupCategoryClient<$Result.GetResult<Prisma.$MyntraGroupCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MyntraGroupCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraGroupCategoryFindFirstArgs} args - Arguments to find a MyntraGroupCategory
     * @example
     * // Get one MyntraGroupCategory
     * const myntraGroupCategory = await prisma.myntraGroupCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MyntraGroupCategoryFindFirstArgs>(args?: SelectSubset<T, MyntraGroupCategoryFindFirstArgs<ExtArgs>>): Prisma__MyntraGroupCategoryClient<$Result.GetResult<Prisma.$MyntraGroupCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MyntraGroupCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraGroupCategoryFindFirstOrThrowArgs} args - Arguments to find a MyntraGroupCategory
     * @example
     * // Get one MyntraGroupCategory
     * const myntraGroupCategory = await prisma.myntraGroupCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MyntraGroupCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MyntraGroupCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MyntraGroupCategoryClient<$Result.GetResult<Prisma.$MyntraGroupCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MyntraGroupCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraGroupCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MyntraGroupCategories
     * const myntraGroupCategories = await prisma.myntraGroupCategory.findMany()
     * 
     * // Get first 10 MyntraGroupCategories
     * const myntraGroupCategories = await prisma.myntraGroupCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const myntraGroupCategoryWithIdOnly = await prisma.myntraGroupCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MyntraGroupCategoryFindManyArgs>(args?: SelectSubset<T, MyntraGroupCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyntraGroupCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MyntraGroupCategory.
     * @param {MyntraGroupCategoryCreateArgs} args - Arguments to create a MyntraGroupCategory.
     * @example
     * // Create one MyntraGroupCategory
     * const MyntraGroupCategory = await prisma.myntraGroupCategory.create({
     *   data: {
     *     // ... data to create a MyntraGroupCategory
     *   }
     * })
     * 
     */
    create<T extends MyntraGroupCategoryCreateArgs>(args: SelectSubset<T, MyntraGroupCategoryCreateArgs<ExtArgs>>): Prisma__MyntraGroupCategoryClient<$Result.GetResult<Prisma.$MyntraGroupCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MyntraGroupCategories.
     * @param {MyntraGroupCategoryCreateManyArgs} args - Arguments to create many MyntraGroupCategories.
     * @example
     * // Create many MyntraGroupCategories
     * const myntraGroupCategory = await prisma.myntraGroupCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MyntraGroupCategoryCreateManyArgs>(args?: SelectSubset<T, MyntraGroupCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MyntraGroupCategory.
     * @param {MyntraGroupCategoryDeleteArgs} args - Arguments to delete one MyntraGroupCategory.
     * @example
     * // Delete one MyntraGroupCategory
     * const MyntraGroupCategory = await prisma.myntraGroupCategory.delete({
     *   where: {
     *     // ... filter to delete one MyntraGroupCategory
     *   }
     * })
     * 
     */
    delete<T extends MyntraGroupCategoryDeleteArgs>(args: SelectSubset<T, MyntraGroupCategoryDeleteArgs<ExtArgs>>): Prisma__MyntraGroupCategoryClient<$Result.GetResult<Prisma.$MyntraGroupCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MyntraGroupCategory.
     * @param {MyntraGroupCategoryUpdateArgs} args - Arguments to update one MyntraGroupCategory.
     * @example
     * // Update one MyntraGroupCategory
     * const myntraGroupCategory = await prisma.myntraGroupCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MyntraGroupCategoryUpdateArgs>(args: SelectSubset<T, MyntraGroupCategoryUpdateArgs<ExtArgs>>): Prisma__MyntraGroupCategoryClient<$Result.GetResult<Prisma.$MyntraGroupCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MyntraGroupCategories.
     * @param {MyntraGroupCategoryDeleteManyArgs} args - Arguments to filter MyntraGroupCategories to delete.
     * @example
     * // Delete a few MyntraGroupCategories
     * const { count } = await prisma.myntraGroupCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MyntraGroupCategoryDeleteManyArgs>(args?: SelectSubset<T, MyntraGroupCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MyntraGroupCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraGroupCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MyntraGroupCategories
     * const myntraGroupCategory = await prisma.myntraGroupCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MyntraGroupCategoryUpdateManyArgs>(args: SelectSubset<T, MyntraGroupCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MyntraGroupCategory.
     * @param {MyntraGroupCategoryUpsertArgs} args - Arguments to update or create a MyntraGroupCategory.
     * @example
     * // Update or create a MyntraGroupCategory
     * const myntraGroupCategory = await prisma.myntraGroupCategory.upsert({
     *   create: {
     *     // ... data to create a MyntraGroupCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MyntraGroupCategory we want to update
     *   }
     * })
     */
    upsert<T extends MyntraGroupCategoryUpsertArgs>(args: SelectSubset<T, MyntraGroupCategoryUpsertArgs<ExtArgs>>): Prisma__MyntraGroupCategoryClient<$Result.GetResult<Prisma.$MyntraGroupCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MyntraGroupCategories that matches the filter.
     * @param {MyntraGroupCategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const myntraGroupCategory = await prisma.myntraGroupCategory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MyntraGroupCategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MyntraGroupCategory.
     * @param {MyntraGroupCategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const myntraGroupCategory = await prisma.myntraGroupCategory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MyntraGroupCategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of MyntraGroupCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraGroupCategoryCountArgs} args - Arguments to filter MyntraGroupCategories to count.
     * @example
     * // Count the number of MyntraGroupCategories
     * const count = await prisma.myntraGroupCategory.count({
     *   where: {
     *     // ... the filter for the MyntraGroupCategories we want to count
     *   }
     * })
    **/
    count<T extends MyntraGroupCategoryCountArgs>(
      args?: Subset<T, MyntraGroupCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MyntraGroupCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MyntraGroupCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraGroupCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MyntraGroupCategoryAggregateArgs>(args: Subset<T, MyntraGroupCategoryAggregateArgs>): Prisma.PrismaPromise<GetMyntraGroupCategoryAggregateType<T>>

    /**
     * Group by MyntraGroupCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraGroupCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MyntraGroupCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MyntraGroupCategoryGroupByArgs['orderBy'] }
        : { orderBy?: MyntraGroupCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MyntraGroupCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMyntraGroupCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MyntraGroupCategory model
   */
  readonly fields: MyntraGroupCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MyntraGroupCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MyntraGroupCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rootCategory<T extends MyntraRootCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MyntraRootCategoryDefaultArgs<ExtArgs>>): Prisma__MyntraRootCategoryClient<$Result.GetResult<Prisma.$MyntraRootCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends MyntraGroupCategory$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, MyntraGroupCategory$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyntraCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MyntraGroupCategory model
   */ 
  interface MyntraGroupCategoryFieldRefs {
    readonly id: FieldRef<"MyntraGroupCategory", 'String'>
    readonly slug: FieldRef<"MyntraGroupCategory", 'String'>
    readonly title: FieldRef<"MyntraGroupCategory", 'String'>
    readonly rootCategoryId: FieldRef<"MyntraGroupCategory", 'String'>
    readonly createdAt: FieldRef<"MyntraGroupCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MyntraGroupCategory findUnique
   */
  export type MyntraGroupCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraGroupCategory
     */
    select?: MyntraGroupCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraGroupCategory
     */
    omit?: MyntraGroupCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraGroupCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MyntraGroupCategory to fetch.
     */
    where: MyntraGroupCategoryWhereUniqueInput
  }

  /**
   * MyntraGroupCategory findUniqueOrThrow
   */
  export type MyntraGroupCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraGroupCategory
     */
    select?: MyntraGroupCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraGroupCategory
     */
    omit?: MyntraGroupCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraGroupCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MyntraGroupCategory to fetch.
     */
    where: MyntraGroupCategoryWhereUniqueInput
  }

  /**
   * MyntraGroupCategory findFirst
   */
  export type MyntraGroupCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraGroupCategory
     */
    select?: MyntraGroupCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraGroupCategory
     */
    omit?: MyntraGroupCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraGroupCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MyntraGroupCategory to fetch.
     */
    where?: MyntraGroupCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyntraGroupCategories to fetch.
     */
    orderBy?: MyntraGroupCategoryOrderByWithRelationInput | MyntraGroupCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyntraGroupCategories.
     */
    cursor?: MyntraGroupCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyntraGroupCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyntraGroupCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyntraGroupCategories.
     */
    distinct?: MyntraGroupCategoryScalarFieldEnum | MyntraGroupCategoryScalarFieldEnum[]
  }

  /**
   * MyntraGroupCategory findFirstOrThrow
   */
  export type MyntraGroupCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraGroupCategory
     */
    select?: MyntraGroupCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraGroupCategory
     */
    omit?: MyntraGroupCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraGroupCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MyntraGroupCategory to fetch.
     */
    where?: MyntraGroupCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyntraGroupCategories to fetch.
     */
    orderBy?: MyntraGroupCategoryOrderByWithRelationInput | MyntraGroupCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyntraGroupCategories.
     */
    cursor?: MyntraGroupCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyntraGroupCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyntraGroupCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyntraGroupCategories.
     */
    distinct?: MyntraGroupCategoryScalarFieldEnum | MyntraGroupCategoryScalarFieldEnum[]
  }

  /**
   * MyntraGroupCategory findMany
   */
  export type MyntraGroupCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraGroupCategory
     */
    select?: MyntraGroupCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraGroupCategory
     */
    omit?: MyntraGroupCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraGroupCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MyntraGroupCategories to fetch.
     */
    where?: MyntraGroupCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyntraGroupCategories to fetch.
     */
    orderBy?: MyntraGroupCategoryOrderByWithRelationInput | MyntraGroupCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MyntraGroupCategories.
     */
    cursor?: MyntraGroupCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyntraGroupCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyntraGroupCategories.
     */
    skip?: number
    distinct?: MyntraGroupCategoryScalarFieldEnum | MyntraGroupCategoryScalarFieldEnum[]
  }

  /**
   * MyntraGroupCategory create
   */
  export type MyntraGroupCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraGroupCategory
     */
    select?: MyntraGroupCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraGroupCategory
     */
    omit?: MyntraGroupCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraGroupCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MyntraGroupCategory.
     */
    data: XOR<MyntraGroupCategoryCreateInput, MyntraGroupCategoryUncheckedCreateInput>
  }

  /**
   * MyntraGroupCategory createMany
   */
  export type MyntraGroupCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MyntraGroupCategories.
     */
    data: MyntraGroupCategoryCreateManyInput | MyntraGroupCategoryCreateManyInput[]
  }

  /**
   * MyntraGroupCategory update
   */
  export type MyntraGroupCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraGroupCategory
     */
    select?: MyntraGroupCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraGroupCategory
     */
    omit?: MyntraGroupCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraGroupCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MyntraGroupCategory.
     */
    data: XOR<MyntraGroupCategoryUpdateInput, MyntraGroupCategoryUncheckedUpdateInput>
    /**
     * Choose, which MyntraGroupCategory to update.
     */
    where: MyntraGroupCategoryWhereUniqueInput
  }

  /**
   * MyntraGroupCategory updateMany
   */
  export type MyntraGroupCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MyntraGroupCategories.
     */
    data: XOR<MyntraGroupCategoryUpdateManyMutationInput, MyntraGroupCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MyntraGroupCategories to update
     */
    where?: MyntraGroupCategoryWhereInput
    /**
     * Limit how many MyntraGroupCategories to update.
     */
    limit?: number
  }

  /**
   * MyntraGroupCategory upsert
   */
  export type MyntraGroupCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraGroupCategory
     */
    select?: MyntraGroupCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraGroupCategory
     */
    omit?: MyntraGroupCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraGroupCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MyntraGroupCategory to update in case it exists.
     */
    where: MyntraGroupCategoryWhereUniqueInput
    /**
     * In case the MyntraGroupCategory found by the `where` argument doesn't exist, create a new MyntraGroupCategory with this data.
     */
    create: XOR<MyntraGroupCategoryCreateInput, MyntraGroupCategoryUncheckedCreateInput>
    /**
     * In case the MyntraGroupCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MyntraGroupCategoryUpdateInput, MyntraGroupCategoryUncheckedUpdateInput>
  }

  /**
   * MyntraGroupCategory delete
   */
  export type MyntraGroupCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraGroupCategory
     */
    select?: MyntraGroupCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraGroupCategory
     */
    omit?: MyntraGroupCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraGroupCategoryInclude<ExtArgs> | null
    /**
     * Filter which MyntraGroupCategory to delete.
     */
    where: MyntraGroupCategoryWhereUniqueInput
  }

  /**
   * MyntraGroupCategory deleteMany
   */
  export type MyntraGroupCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyntraGroupCategories to delete
     */
    where?: MyntraGroupCategoryWhereInput
    /**
     * Limit how many MyntraGroupCategories to delete.
     */
    limit?: number
  }

  /**
   * MyntraGroupCategory findRaw
   */
  export type MyntraGroupCategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MyntraGroupCategory aggregateRaw
   */
  export type MyntraGroupCategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MyntraGroupCategory.categories
   */
  export type MyntraGroupCategory$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraCategory
     */
    select?: MyntraCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraCategory
     */
    omit?: MyntraCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraCategoryInclude<ExtArgs> | null
    where?: MyntraCategoryWhereInput
    orderBy?: MyntraCategoryOrderByWithRelationInput | MyntraCategoryOrderByWithRelationInput[]
    cursor?: MyntraCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MyntraCategoryScalarFieldEnum | MyntraCategoryScalarFieldEnum[]
  }

  /**
   * MyntraGroupCategory without action
   */
  export type MyntraGroupCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraGroupCategory
     */
    select?: MyntraGroupCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraGroupCategory
     */
    omit?: MyntraGroupCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraGroupCategoryInclude<ExtArgs> | null
  }


  /**
   * Model MyntraCategory
   */

  export type AggregateMyntraCategory = {
    _count: MyntraCategoryCountAggregateOutputType | null
    _min: MyntraCategoryMinAggregateOutputType | null
    _max: MyntraCategoryMaxAggregateOutputType | null
  }

  export type MyntraCategoryMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    href: string | null
    groupCategoryId: string | null
    createdAt: Date | null
  }

  export type MyntraCategoryMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    href: string | null
    groupCategoryId: string | null
    createdAt: Date | null
  }

  export type MyntraCategoryCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    href: number
    groupCategoryId: number
    createdAt: number
    _all: number
  }


  export type MyntraCategoryMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    href?: true
    groupCategoryId?: true
    createdAt?: true
  }

  export type MyntraCategoryMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    href?: true
    groupCategoryId?: true
    createdAt?: true
  }

  export type MyntraCategoryCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    href?: true
    groupCategoryId?: true
    createdAt?: true
    _all?: true
  }

  export type MyntraCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyntraCategory to aggregate.
     */
    where?: MyntraCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyntraCategories to fetch.
     */
    orderBy?: MyntraCategoryOrderByWithRelationInput | MyntraCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MyntraCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyntraCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyntraCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MyntraCategories
    **/
    _count?: true | MyntraCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MyntraCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MyntraCategoryMaxAggregateInputType
  }

  export type GetMyntraCategoryAggregateType<T extends MyntraCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMyntraCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMyntraCategory[P]>
      : GetScalarType<T[P], AggregateMyntraCategory[P]>
  }




  export type MyntraCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyntraCategoryWhereInput
    orderBy?: MyntraCategoryOrderByWithAggregationInput | MyntraCategoryOrderByWithAggregationInput[]
    by: MyntraCategoryScalarFieldEnum[] | MyntraCategoryScalarFieldEnum
    having?: MyntraCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MyntraCategoryCountAggregateInputType | true
    _min?: MyntraCategoryMinAggregateInputType
    _max?: MyntraCategoryMaxAggregateInputType
  }

  export type MyntraCategoryGroupByOutputType = {
    id: string
    slug: string
    title: string
    href: string
    groupCategoryId: string
    createdAt: Date
    _count: MyntraCategoryCountAggregateOutputType | null
    _min: MyntraCategoryMinAggregateOutputType | null
    _max: MyntraCategoryMaxAggregateOutputType | null
  }

  type GetMyntraCategoryGroupByPayload<T extends MyntraCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MyntraCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MyntraCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MyntraCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MyntraCategoryGroupByOutputType[P]>
        }
      >
    >


  export type MyntraCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    href?: boolean
    groupCategoryId?: boolean
    createdAt?: boolean
    groupCategory?: boolean | MyntraGroupCategoryDefaultArgs<ExtArgs>
    products?: boolean | MyntraCategory$productsArgs<ExtArgs>
    _count?: boolean | MyntraCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["myntraCategory"]>



  export type MyntraCategorySelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    href?: boolean
    groupCategoryId?: boolean
    createdAt?: boolean
  }

  export type MyntraCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "href" | "groupCategoryId" | "createdAt", ExtArgs["result"]["myntraCategory"]>
  export type MyntraCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupCategory?: boolean | MyntraGroupCategoryDefaultArgs<ExtArgs>
    products?: boolean | MyntraCategory$productsArgs<ExtArgs>
    _count?: boolean | MyntraCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MyntraCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MyntraCategory"
    objects: {
      groupCategory: Prisma.$MyntraGroupCategoryPayload<ExtArgs>
      products: Prisma.$MyntraProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      href: string
      groupCategoryId: string
      createdAt: Date
    }, ExtArgs["result"]["myntraCategory"]>
    composites: {}
  }

  type MyntraCategoryGetPayload<S extends boolean | null | undefined | MyntraCategoryDefaultArgs> = $Result.GetResult<Prisma.$MyntraCategoryPayload, S>

  type MyntraCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MyntraCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MyntraCategoryCountAggregateInputType | true
    }

  export interface MyntraCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MyntraCategory'], meta: { name: 'MyntraCategory' } }
    /**
     * Find zero or one MyntraCategory that matches the filter.
     * @param {MyntraCategoryFindUniqueArgs} args - Arguments to find a MyntraCategory
     * @example
     * // Get one MyntraCategory
     * const myntraCategory = await prisma.myntraCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MyntraCategoryFindUniqueArgs>(args: SelectSubset<T, MyntraCategoryFindUniqueArgs<ExtArgs>>): Prisma__MyntraCategoryClient<$Result.GetResult<Prisma.$MyntraCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MyntraCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MyntraCategoryFindUniqueOrThrowArgs} args - Arguments to find a MyntraCategory
     * @example
     * // Get one MyntraCategory
     * const myntraCategory = await prisma.myntraCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MyntraCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MyntraCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MyntraCategoryClient<$Result.GetResult<Prisma.$MyntraCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MyntraCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraCategoryFindFirstArgs} args - Arguments to find a MyntraCategory
     * @example
     * // Get one MyntraCategory
     * const myntraCategory = await prisma.myntraCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MyntraCategoryFindFirstArgs>(args?: SelectSubset<T, MyntraCategoryFindFirstArgs<ExtArgs>>): Prisma__MyntraCategoryClient<$Result.GetResult<Prisma.$MyntraCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MyntraCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraCategoryFindFirstOrThrowArgs} args - Arguments to find a MyntraCategory
     * @example
     * // Get one MyntraCategory
     * const myntraCategory = await prisma.myntraCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MyntraCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MyntraCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MyntraCategoryClient<$Result.GetResult<Prisma.$MyntraCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MyntraCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MyntraCategories
     * const myntraCategories = await prisma.myntraCategory.findMany()
     * 
     * // Get first 10 MyntraCategories
     * const myntraCategories = await prisma.myntraCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const myntraCategoryWithIdOnly = await prisma.myntraCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MyntraCategoryFindManyArgs>(args?: SelectSubset<T, MyntraCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyntraCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MyntraCategory.
     * @param {MyntraCategoryCreateArgs} args - Arguments to create a MyntraCategory.
     * @example
     * // Create one MyntraCategory
     * const MyntraCategory = await prisma.myntraCategory.create({
     *   data: {
     *     // ... data to create a MyntraCategory
     *   }
     * })
     * 
     */
    create<T extends MyntraCategoryCreateArgs>(args: SelectSubset<T, MyntraCategoryCreateArgs<ExtArgs>>): Prisma__MyntraCategoryClient<$Result.GetResult<Prisma.$MyntraCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MyntraCategories.
     * @param {MyntraCategoryCreateManyArgs} args - Arguments to create many MyntraCategories.
     * @example
     * // Create many MyntraCategories
     * const myntraCategory = await prisma.myntraCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MyntraCategoryCreateManyArgs>(args?: SelectSubset<T, MyntraCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MyntraCategory.
     * @param {MyntraCategoryDeleteArgs} args - Arguments to delete one MyntraCategory.
     * @example
     * // Delete one MyntraCategory
     * const MyntraCategory = await prisma.myntraCategory.delete({
     *   where: {
     *     // ... filter to delete one MyntraCategory
     *   }
     * })
     * 
     */
    delete<T extends MyntraCategoryDeleteArgs>(args: SelectSubset<T, MyntraCategoryDeleteArgs<ExtArgs>>): Prisma__MyntraCategoryClient<$Result.GetResult<Prisma.$MyntraCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MyntraCategory.
     * @param {MyntraCategoryUpdateArgs} args - Arguments to update one MyntraCategory.
     * @example
     * // Update one MyntraCategory
     * const myntraCategory = await prisma.myntraCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MyntraCategoryUpdateArgs>(args: SelectSubset<T, MyntraCategoryUpdateArgs<ExtArgs>>): Prisma__MyntraCategoryClient<$Result.GetResult<Prisma.$MyntraCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MyntraCategories.
     * @param {MyntraCategoryDeleteManyArgs} args - Arguments to filter MyntraCategories to delete.
     * @example
     * // Delete a few MyntraCategories
     * const { count } = await prisma.myntraCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MyntraCategoryDeleteManyArgs>(args?: SelectSubset<T, MyntraCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MyntraCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MyntraCategories
     * const myntraCategory = await prisma.myntraCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MyntraCategoryUpdateManyArgs>(args: SelectSubset<T, MyntraCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MyntraCategory.
     * @param {MyntraCategoryUpsertArgs} args - Arguments to update or create a MyntraCategory.
     * @example
     * // Update or create a MyntraCategory
     * const myntraCategory = await prisma.myntraCategory.upsert({
     *   create: {
     *     // ... data to create a MyntraCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MyntraCategory we want to update
     *   }
     * })
     */
    upsert<T extends MyntraCategoryUpsertArgs>(args: SelectSubset<T, MyntraCategoryUpsertArgs<ExtArgs>>): Prisma__MyntraCategoryClient<$Result.GetResult<Prisma.$MyntraCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MyntraCategories that matches the filter.
     * @param {MyntraCategoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const myntraCategory = await prisma.myntraCategory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MyntraCategoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MyntraCategory.
     * @param {MyntraCategoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const myntraCategory = await prisma.myntraCategory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MyntraCategoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of MyntraCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraCategoryCountArgs} args - Arguments to filter MyntraCategories to count.
     * @example
     * // Count the number of MyntraCategories
     * const count = await prisma.myntraCategory.count({
     *   where: {
     *     // ... the filter for the MyntraCategories we want to count
     *   }
     * })
    **/
    count<T extends MyntraCategoryCountArgs>(
      args?: Subset<T, MyntraCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MyntraCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MyntraCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MyntraCategoryAggregateArgs>(args: Subset<T, MyntraCategoryAggregateArgs>): Prisma.PrismaPromise<GetMyntraCategoryAggregateType<T>>

    /**
     * Group by MyntraCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MyntraCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MyntraCategoryGroupByArgs['orderBy'] }
        : { orderBy?: MyntraCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MyntraCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMyntraCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MyntraCategory model
   */
  readonly fields: MyntraCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MyntraCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MyntraCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groupCategory<T extends MyntraGroupCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MyntraGroupCategoryDefaultArgs<ExtArgs>>): Prisma__MyntraGroupCategoryClient<$Result.GetResult<Prisma.$MyntraGroupCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends MyntraCategory$productsArgs<ExtArgs> = {}>(args?: Subset<T, MyntraCategory$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyntraProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MyntraCategory model
   */ 
  interface MyntraCategoryFieldRefs {
    readonly id: FieldRef<"MyntraCategory", 'String'>
    readonly slug: FieldRef<"MyntraCategory", 'String'>
    readonly title: FieldRef<"MyntraCategory", 'String'>
    readonly href: FieldRef<"MyntraCategory", 'String'>
    readonly groupCategoryId: FieldRef<"MyntraCategory", 'String'>
    readonly createdAt: FieldRef<"MyntraCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MyntraCategory findUnique
   */
  export type MyntraCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraCategory
     */
    select?: MyntraCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraCategory
     */
    omit?: MyntraCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MyntraCategory to fetch.
     */
    where: MyntraCategoryWhereUniqueInput
  }

  /**
   * MyntraCategory findUniqueOrThrow
   */
  export type MyntraCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraCategory
     */
    select?: MyntraCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraCategory
     */
    omit?: MyntraCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MyntraCategory to fetch.
     */
    where: MyntraCategoryWhereUniqueInput
  }

  /**
   * MyntraCategory findFirst
   */
  export type MyntraCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraCategory
     */
    select?: MyntraCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraCategory
     */
    omit?: MyntraCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MyntraCategory to fetch.
     */
    where?: MyntraCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyntraCategories to fetch.
     */
    orderBy?: MyntraCategoryOrderByWithRelationInput | MyntraCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyntraCategories.
     */
    cursor?: MyntraCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyntraCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyntraCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyntraCategories.
     */
    distinct?: MyntraCategoryScalarFieldEnum | MyntraCategoryScalarFieldEnum[]
  }

  /**
   * MyntraCategory findFirstOrThrow
   */
  export type MyntraCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraCategory
     */
    select?: MyntraCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraCategory
     */
    omit?: MyntraCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MyntraCategory to fetch.
     */
    where?: MyntraCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyntraCategories to fetch.
     */
    orderBy?: MyntraCategoryOrderByWithRelationInput | MyntraCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyntraCategories.
     */
    cursor?: MyntraCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyntraCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyntraCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyntraCategories.
     */
    distinct?: MyntraCategoryScalarFieldEnum | MyntraCategoryScalarFieldEnum[]
  }

  /**
   * MyntraCategory findMany
   */
  export type MyntraCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraCategory
     */
    select?: MyntraCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraCategory
     */
    omit?: MyntraCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MyntraCategories to fetch.
     */
    where?: MyntraCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyntraCategories to fetch.
     */
    orderBy?: MyntraCategoryOrderByWithRelationInput | MyntraCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MyntraCategories.
     */
    cursor?: MyntraCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyntraCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyntraCategories.
     */
    skip?: number
    distinct?: MyntraCategoryScalarFieldEnum | MyntraCategoryScalarFieldEnum[]
  }

  /**
   * MyntraCategory create
   */
  export type MyntraCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraCategory
     */
    select?: MyntraCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraCategory
     */
    omit?: MyntraCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MyntraCategory.
     */
    data: XOR<MyntraCategoryCreateInput, MyntraCategoryUncheckedCreateInput>
  }

  /**
   * MyntraCategory createMany
   */
  export type MyntraCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MyntraCategories.
     */
    data: MyntraCategoryCreateManyInput | MyntraCategoryCreateManyInput[]
  }

  /**
   * MyntraCategory update
   */
  export type MyntraCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraCategory
     */
    select?: MyntraCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraCategory
     */
    omit?: MyntraCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MyntraCategory.
     */
    data: XOR<MyntraCategoryUpdateInput, MyntraCategoryUncheckedUpdateInput>
    /**
     * Choose, which MyntraCategory to update.
     */
    where: MyntraCategoryWhereUniqueInput
  }

  /**
   * MyntraCategory updateMany
   */
  export type MyntraCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MyntraCategories.
     */
    data: XOR<MyntraCategoryUpdateManyMutationInput, MyntraCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MyntraCategories to update
     */
    where?: MyntraCategoryWhereInput
    /**
     * Limit how many MyntraCategories to update.
     */
    limit?: number
  }

  /**
   * MyntraCategory upsert
   */
  export type MyntraCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraCategory
     */
    select?: MyntraCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraCategory
     */
    omit?: MyntraCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MyntraCategory to update in case it exists.
     */
    where: MyntraCategoryWhereUniqueInput
    /**
     * In case the MyntraCategory found by the `where` argument doesn't exist, create a new MyntraCategory with this data.
     */
    create: XOR<MyntraCategoryCreateInput, MyntraCategoryUncheckedCreateInput>
    /**
     * In case the MyntraCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MyntraCategoryUpdateInput, MyntraCategoryUncheckedUpdateInput>
  }

  /**
   * MyntraCategory delete
   */
  export type MyntraCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraCategory
     */
    select?: MyntraCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraCategory
     */
    omit?: MyntraCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraCategoryInclude<ExtArgs> | null
    /**
     * Filter which MyntraCategory to delete.
     */
    where: MyntraCategoryWhereUniqueInput
  }

  /**
   * MyntraCategory deleteMany
   */
  export type MyntraCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyntraCategories to delete
     */
    where?: MyntraCategoryWhereInput
    /**
     * Limit how many MyntraCategories to delete.
     */
    limit?: number
  }

  /**
   * MyntraCategory findRaw
   */
  export type MyntraCategoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MyntraCategory aggregateRaw
   */
  export type MyntraCategoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MyntraCategory.products
   */
  export type MyntraCategory$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraProduct
     */
    select?: MyntraProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraProduct
     */
    omit?: MyntraProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraProductInclude<ExtArgs> | null
    where?: MyntraProductWhereInput
    orderBy?: MyntraProductOrderByWithRelationInput | MyntraProductOrderByWithRelationInput[]
    cursor?: MyntraProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MyntraProductScalarFieldEnum | MyntraProductScalarFieldEnum[]
  }

  /**
   * MyntraCategory without action
   */
  export type MyntraCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraCategory
     */
    select?: MyntraCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraCategory
     */
    omit?: MyntraCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraCategoryInclude<ExtArgs> | null
  }


  /**
   * Model MyntraProduct
   */

  export type AggregateMyntraProduct = {
    _count: MyntraProductCountAggregateOutputType | null
    _min: MyntraProductMinAggregateOutputType | null
    _max: MyntraProductMaxAggregateOutputType | null
  }

  export type MyntraProductMinAggregateOutputType = {
    id: string | null
    productCode: string | null
    href: string | null
    brand: string | null
    title: string | null
    rating: string | null
    ratingCount: string | null
    size: string | null
    SRP: string | null
    MRP: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MyntraProductMaxAggregateOutputType = {
    id: string | null
    productCode: string | null
    href: string | null
    brand: string | null
    title: string | null
    rating: string | null
    ratingCount: string | null
    size: string | null
    SRP: string | null
    MRP: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MyntraProductCountAggregateOutputType = {
    id: number
    productCode: number
    href: number
    brand: number
    title: number
    rating: number
    ratingCount: number
    size: number
    SRP: number
    MRP: number
    images: number
    productDetails: number
    sizeAndFit: number
    materialAndCare: number
    specification: number
    seller: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MyntraProductMinAggregateInputType = {
    id?: true
    productCode?: true
    href?: true
    brand?: true
    title?: true
    rating?: true
    ratingCount?: true
    size?: true
    SRP?: true
    MRP?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MyntraProductMaxAggregateInputType = {
    id?: true
    productCode?: true
    href?: true
    brand?: true
    title?: true
    rating?: true
    ratingCount?: true
    size?: true
    SRP?: true
    MRP?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MyntraProductCountAggregateInputType = {
    id?: true
    productCode?: true
    href?: true
    brand?: true
    title?: true
    rating?: true
    ratingCount?: true
    size?: true
    SRP?: true
    MRP?: true
    images?: true
    productDetails?: true
    sizeAndFit?: true
    materialAndCare?: true
    specification?: true
    seller?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MyntraProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyntraProduct to aggregate.
     */
    where?: MyntraProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyntraProducts to fetch.
     */
    orderBy?: MyntraProductOrderByWithRelationInput | MyntraProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MyntraProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyntraProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyntraProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MyntraProducts
    **/
    _count?: true | MyntraProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MyntraProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MyntraProductMaxAggregateInputType
  }

  export type GetMyntraProductAggregateType<T extends MyntraProductAggregateArgs> = {
        [P in keyof T & keyof AggregateMyntraProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMyntraProduct[P]>
      : GetScalarType<T[P], AggregateMyntraProduct[P]>
  }




  export type MyntraProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyntraProductWhereInput
    orderBy?: MyntraProductOrderByWithAggregationInput | MyntraProductOrderByWithAggregationInput[]
    by: MyntraProductScalarFieldEnum[] | MyntraProductScalarFieldEnum
    having?: MyntraProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MyntraProductCountAggregateInputType | true
    _min?: MyntraProductMinAggregateInputType
    _max?: MyntraProductMaxAggregateInputType
  }

  export type MyntraProductGroupByOutputType = {
    id: string
    productCode: string
    href: string
    brand: string
    title: string
    rating: string | null
    ratingCount: string | null
    size: string | null
    SRP: string | null
    MRP: string | null
    images: string[]
    productDetails: string[]
    sizeAndFit: string[]
    materialAndCare: string[]
    specification: string[]
    seller: string[]
    categoryId: string
    createdAt: Date
    updatedAt: Date
    _count: MyntraProductCountAggregateOutputType | null
    _min: MyntraProductMinAggregateOutputType | null
    _max: MyntraProductMaxAggregateOutputType | null
  }

  type GetMyntraProductGroupByPayload<T extends MyntraProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MyntraProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MyntraProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MyntraProductGroupByOutputType[P]>
            : GetScalarType<T[P], MyntraProductGroupByOutputType[P]>
        }
      >
    >


  export type MyntraProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productCode?: boolean
    href?: boolean
    brand?: boolean
    title?: boolean
    rating?: boolean
    ratingCount?: boolean
    size?: boolean
    SRP?: boolean
    MRP?: boolean
    images?: boolean
    productDetails?: boolean
    sizeAndFit?: boolean
    materialAndCare?: boolean
    specification?: boolean
    seller?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | MyntraCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["myntraProduct"]>



  export type MyntraProductSelectScalar = {
    id?: boolean
    productCode?: boolean
    href?: boolean
    brand?: boolean
    title?: boolean
    rating?: boolean
    ratingCount?: boolean
    size?: boolean
    SRP?: boolean
    MRP?: boolean
    images?: boolean
    productDetails?: boolean
    sizeAndFit?: boolean
    materialAndCare?: boolean
    specification?: boolean
    seller?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MyntraProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productCode" | "href" | "brand" | "title" | "rating" | "ratingCount" | "size" | "SRP" | "MRP" | "images" | "productDetails" | "sizeAndFit" | "materialAndCare" | "specification" | "seller" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["myntraProduct"]>
  export type MyntraProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | MyntraCategoryDefaultArgs<ExtArgs>
  }

  export type $MyntraProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MyntraProduct"
    objects: {
      category: Prisma.$MyntraCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productCode: string
      href: string
      brand: string
      title: string
      rating: string | null
      ratingCount: string | null
      size: string | null
      SRP: string | null
      MRP: string | null
      images: string[]
      productDetails: string[]
      sizeAndFit: string[]
      materialAndCare: string[]
      specification: string[]
      seller: string[]
      categoryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["myntraProduct"]>
    composites: {}
  }

  type MyntraProductGetPayload<S extends boolean | null | undefined | MyntraProductDefaultArgs> = $Result.GetResult<Prisma.$MyntraProductPayload, S>

  type MyntraProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MyntraProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MyntraProductCountAggregateInputType | true
    }

  export interface MyntraProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MyntraProduct'], meta: { name: 'MyntraProduct' } }
    /**
     * Find zero or one MyntraProduct that matches the filter.
     * @param {MyntraProductFindUniqueArgs} args - Arguments to find a MyntraProduct
     * @example
     * // Get one MyntraProduct
     * const myntraProduct = await prisma.myntraProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MyntraProductFindUniqueArgs>(args: SelectSubset<T, MyntraProductFindUniqueArgs<ExtArgs>>): Prisma__MyntraProductClient<$Result.GetResult<Prisma.$MyntraProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MyntraProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MyntraProductFindUniqueOrThrowArgs} args - Arguments to find a MyntraProduct
     * @example
     * // Get one MyntraProduct
     * const myntraProduct = await prisma.myntraProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MyntraProductFindUniqueOrThrowArgs>(args: SelectSubset<T, MyntraProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MyntraProductClient<$Result.GetResult<Prisma.$MyntraProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MyntraProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraProductFindFirstArgs} args - Arguments to find a MyntraProduct
     * @example
     * // Get one MyntraProduct
     * const myntraProduct = await prisma.myntraProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MyntraProductFindFirstArgs>(args?: SelectSubset<T, MyntraProductFindFirstArgs<ExtArgs>>): Prisma__MyntraProductClient<$Result.GetResult<Prisma.$MyntraProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MyntraProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraProductFindFirstOrThrowArgs} args - Arguments to find a MyntraProduct
     * @example
     * // Get one MyntraProduct
     * const myntraProduct = await prisma.myntraProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MyntraProductFindFirstOrThrowArgs>(args?: SelectSubset<T, MyntraProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__MyntraProductClient<$Result.GetResult<Prisma.$MyntraProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MyntraProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MyntraProducts
     * const myntraProducts = await prisma.myntraProduct.findMany()
     * 
     * // Get first 10 MyntraProducts
     * const myntraProducts = await prisma.myntraProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const myntraProductWithIdOnly = await prisma.myntraProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MyntraProductFindManyArgs>(args?: SelectSubset<T, MyntraProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyntraProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MyntraProduct.
     * @param {MyntraProductCreateArgs} args - Arguments to create a MyntraProduct.
     * @example
     * // Create one MyntraProduct
     * const MyntraProduct = await prisma.myntraProduct.create({
     *   data: {
     *     // ... data to create a MyntraProduct
     *   }
     * })
     * 
     */
    create<T extends MyntraProductCreateArgs>(args: SelectSubset<T, MyntraProductCreateArgs<ExtArgs>>): Prisma__MyntraProductClient<$Result.GetResult<Prisma.$MyntraProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MyntraProducts.
     * @param {MyntraProductCreateManyArgs} args - Arguments to create many MyntraProducts.
     * @example
     * // Create many MyntraProducts
     * const myntraProduct = await prisma.myntraProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MyntraProductCreateManyArgs>(args?: SelectSubset<T, MyntraProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MyntraProduct.
     * @param {MyntraProductDeleteArgs} args - Arguments to delete one MyntraProduct.
     * @example
     * // Delete one MyntraProduct
     * const MyntraProduct = await prisma.myntraProduct.delete({
     *   where: {
     *     // ... filter to delete one MyntraProduct
     *   }
     * })
     * 
     */
    delete<T extends MyntraProductDeleteArgs>(args: SelectSubset<T, MyntraProductDeleteArgs<ExtArgs>>): Prisma__MyntraProductClient<$Result.GetResult<Prisma.$MyntraProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MyntraProduct.
     * @param {MyntraProductUpdateArgs} args - Arguments to update one MyntraProduct.
     * @example
     * // Update one MyntraProduct
     * const myntraProduct = await prisma.myntraProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MyntraProductUpdateArgs>(args: SelectSubset<T, MyntraProductUpdateArgs<ExtArgs>>): Prisma__MyntraProductClient<$Result.GetResult<Prisma.$MyntraProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MyntraProducts.
     * @param {MyntraProductDeleteManyArgs} args - Arguments to filter MyntraProducts to delete.
     * @example
     * // Delete a few MyntraProducts
     * const { count } = await prisma.myntraProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MyntraProductDeleteManyArgs>(args?: SelectSubset<T, MyntraProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MyntraProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MyntraProducts
     * const myntraProduct = await prisma.myntraProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MyntraProductUpdateManyArgs>(args: SelectSubset<T, MyntraProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MyntraProduct.
     * @param {MyntraProductUpsertArgs} args - Arguments to update or create a MyntraProduct.
     * @example
     * // Update or create a MyntraProduct
     * const myntraProduct = await prisma.myntraProduct.upsert({
     *   create: {
     *     // ... data to create a MyntraProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MyntraProduct we want to update
     *   }
     * })
     */
    upsert<T extends MyntraProductUpsertArgs>(args: SelectSubset<T, MyntraProductUpsertArgs<ExtArgs>>): Prisma__MyntraProductClient<$Result.GetResult<Prisma.$MyntraProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MyntraProducts that matches the filter.
     * @param {MyntraProductFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const myntraProduct = await prisma.myntraProduct.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MyntraProductFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MyntraProduct.
     * @param {MyntraProductAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const myntraProduct = await prisma.myntraProduct.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MyntraProductAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of MyntraProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraProductCountArgs} args - Arguments to filter MyntraProducts to count.
     * @example
     * // Count the number of MyntraProducts
     * const count = await prisma.myntraProduct.count({
     *   where: {
     *     // ... the filter for the MyntraProducts we want to count
     *   }
     * })
    **/
    count<T extends MyntraProductCountArgs>(
      args?: Subset<T, MyntraProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MyntraProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MyntraProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MyntraProductAggregateArgs>(args: Subset<T, MyntraProductAggregateArgs>): Prisma.PrismaPromise<GetMyntraProductAggregateType<T>>

    /**
     * Group by MyntraProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyntraProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MyntraProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MyntraProductGroupByArgs['orderBy'] }
        : { orderBy?: MyntraProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MyntraProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMyntraProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MyntraProduct model
   */
  readonly fields: MyntraProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MyntraProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MyntraProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends MyntraCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MyntraCategoryDefaultArgs<ExtArgs>>): Prisma__MyntraCategoryClient<$Result.GetResult<Prisma.$MyntraCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MyntraProduct model
   */ 
  interface MyntraProductFieldRefs {
    readonly id: FieldRef<"MyntraProduct", 'String'>
    readonly productCode: FieldRef<"MyntraProduct", 'String'>
    readonly href: FieldRef<"MyntraProduct", 'String'>
    readonly brand: FieldRef<"MyntraProduct", 'String'>
    readonly title: FieldRef<"MyntraProduct", 'String'>
    readonly rating: FieldRef<"MyntraProduct", 'String'>
    readonly ratingCount: FieldRef<"MyntraProduct", 'String'>
    readonly size: FieldRef<"MyntraProduct", 'String'>
    readonly SRP: FieldRef<"MyntraProduct", 'String'>
    readonly MRP: FieldRef<"MyntraProduct", 'String'>
    readonly images: FieldRef<"MyntraProduct", 'String[]'>
    readonly productDetails: FieldRef<"MyntraProduct", 'String[]'>
    readonly sizeAndFit: FieldRef<"MyntraProduct", 'String[]'>
    readonly materialAndCare: FieldRef<"MyntraProduct", 'String[]'>
    readonly specification: FieldRef<"MyntraProduct", 'String[]'>
    readonly seller: FieldRef<"MyntraProduct", 'String[]'>
    readonly categoryId: FieldRef<"MyntraProduct", 'String'>
    readonly createdAt: FieldRef<"MyntraProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"MyntraProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MyntraProduct findUnique
   */
  export type MyntraProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraProduct
     */
    select?: MyntraProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraProduct
     */
    omit?: MyntraProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraProductInclude<ExtArgs> | null
    /**
     * Filter, which MyntraProduct to fetch.
     */
    where: MyntraProductWhereUniqueInput
  }

  /**
   * MyntraProduct findUniqueOrThrow
   */
  export type MyntraProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraProduct
     */
    select?: MyntraProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraProduct
     */
    omit?: MyntraProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraProductInclude<ExtArgs> | null
    /**
     * Filter, which MyntraProduct to fetch.
     */
    where: MyntraProductWhereUniqueInput
  }

  /**
   * MyntraProduct findFirst
   */
  export type MyntraProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraProduct
     */
    select?: MyntraProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraProduct
     */
    omit?: MyntraProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraProductInclude<ExtArgs> | null
    /**
     * Filter, which MyntraProduct to fetch.
     */
    where?: MyntraProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyntraProducts to fetch.
     */
    orderBy?: MyntraProductOrderByWithRelationInput | MyntraProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyntraProducts.
     */
    cursor?: MyntraProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyntraProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyntraProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyntraProducts.
     */
    distinct?: MyntraProductScalarFieldEnum | MyntraProductScalarFieldEnum[]
  }

  /**
   * MyntraProduct findFirstOrThrow
   */
  export type MyntraProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraProduct
     */
    select?: MyntraProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraProduct
     */
    omit?: MyntraProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraProductInclude<ExtArgs> | null
    /**
     * Filter, which MyntraProduct to fetch.
     */
    where?: MyntraProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyntraProducts to fetch.
     */
    orderBy?: MyntraProductOrderByWithRelationInput | MyntraProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyntraProducts.
     */
    cursor?: MyntraProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyntraProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyntraProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyntraProducts.
     */
    distinct?: MyntraProductScalarFieldEnum | MyntraProductScalarFieldEnum[]
  }

  /**
   * MyntraProduct findMany
   */
  export type MyntraProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraProduct
     */
    select?: MyntraProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraProduct
     */
    omit?: MyntraProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraProductInclude<ExtArgs> | null
    /**
     * Filter, which MyntraProducts to fetch.
     */
    where?: MyntraProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyntraProducts to fetch.
     */
    orderBy?: MyntraProductOrderByWithRelationInput | MyntraProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MyntraProducts.
     */
    cursor?: MyntraProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyntraProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyntraProducts.
     */
    skip?: number
    distinct?: MyntraProductScalarFieldEnum | MyntraProductScalarFieldEnum[]
  }

  /**
   * MyntraProduct create
   */
  export type MyntraProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraProduct
     */
    select?: MyntraProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraProduct
     */
    omit?: MyntraProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraProductInclude<ExtArgs> | null
    /**
     * The data needed to create a MyntraProduct.
     */
    data: XOR<MyntraProductCreateInput, MyntraProductUncheckedCreateInput>
  }

  /**
   * MyntraProduct createMany
   */
  export type MyntraProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MyntraProducts.
     */
    data: MyntraProductCreateManyInput | MyntraProductCreateManyInput[]
  }

  /**
   * MyntraProduct update
   */
  export type MyntraProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraProduct
     */
    select?: MyntraProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraProduct
     */
    omit?: MyntraProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraProductInclude<ExtArgs> | null
    /**
     * The data needed to update a MyntraProduct.
     */
    data: XOR<MyntraProductUpdateInput, MyntraProductUncheckedUpdateInput>
    /**
     * Choose, which MyntraProduct to update.
     */
    where: MyntraProductWhereUniqueInput
  }

  /**
   * MyntraProduct updateMany
   */
  export type MyntraProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MyntraProducts.
     */
    data: XOR<MyntraProductUpdateManyMutationInput, MyntraProductUncheckedUpdateManyInput>
    /**
     * Filter which MyntraProducts to update
     */
    where?: MyntraProductWhereInput
    /**
     * Limit how many MyntraProducts to update.
     */
    limit?: number
  }

  /**
   * MyntraProduct upsert
   */
  export type MyntraProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraProduct
     */
    select?: MyntraProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraProduct
     */
    omit?: MyntraProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraProductInclude<ExtArgs> | null
    /**
     * The filter to search for the MyntraProduct to update in case it exists.
     */
    where: MyntraProductWhereUniqueInput
    /**
     * In case the MyntraProduct found by the `where` argument doesn't exist, create a new MyntraProduct with this data.
     */
    create: XOR<MyntraProductCreateInput, MyntraProductUncheckedCreateInput>
    /**
     * In case the MyntraProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MyntraProductUpdateInput, MyntraProductUncheckedUpdateInput>
  }

  /**
   * MyntraProduct delete
   */
  export type MyntraProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraProduct
     */
    select?: MyntraProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraProduct
     */
    omit?: MyntraProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraProductInclude<ExtArgs> | null
    /**
     * Filter which MyntraProduct to delete.
     */
    where: MyntraProductWhereUniqueInput
  }

  /**
   * MyntraProduct deleteMany
   */
  export type MyntraProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyntraProducts to delete
     */
    where?: MyntraProductWhereInput
    /**
     * Limit how many MyntraProducts to delete.
     */
    limit?: number
  }

  /**
   * MyntraProduct findRaw
   */
  export type MyntraProductFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MyntraProduct aggregateRaw
   */
  export type MyntraProductAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * MyntraProduct without action
   */
  export type MyntraProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyntraProduct
     */
    select?: MyntraProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MyntraProduct
     */
    omit?: MyntraProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyntraProductInclude<ExtArgs> | null
  }


  /**
   * Model ScrapeProgress
   */

  export type AggregateScrapeProgress = {
    _count: ScrapeProgressCountAggregateOutputType | null
    _avg: ScrapeProgressAvgAggregateOutputType | null
    _sum: ScrapeProgressSumAggregateOutputType | null
    _min: ScrapeProgressMinAggregateOutputType | null
    _max: ScrapeProgressMaxAggregateOutputType | null
  }

  export type ScrapeProgressAvgAggregateOutputType = {
    totalProducts: number | null
    scrapedProducts: number | null
  }

  export type ScrapeProgressSumAggregateOutputType = {
    totalProducts: number | null
    scrapedProducts: number | null
  }

  export type ScrapeProgressMinAggregateOutputType = {
    id: string | null
    rootCategory: string | null
    groupCategory: string | null
    category: string | null
    totalProducts: number | null
    scrapedProducts: number | null
    status: string | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type ScrapeProgressMaxAggregateOutputType = {
    id: string | null
    rootCategory: string | null
    groupCategory: string | null
    category: string | null
    totalProducts: number | null
    scrapedProducts: number | null
    status: string | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type ScrapeProgressCountAggregateOutputType = {
    id: number
    rootCategory: number
    groupCategory: number
    category: number
    totalProducts: number
    scrapedProducts: number
    status: number
    startedAt: number
    completedAt: number
    _all: number
  }


  export type ScrapeProgressAvgAggregateInputType = {
    totalProducts?: true
    scrapedProducts?: true
  }

  export type ScrapeProgressSumAggregateInputType = {
    totalProducts?: true
    scrapedProducts?: true
  }

  export type ScrapeProgressMinAggregateInputType = {
    id?: true
    rootCategory?: true
    groupCategory?: true
    category?: true
    totalProducts?: true
    scrapedProducts?: true
    status?: true
    startedAt?: true
    completedAt?: true
  }

  export type ScrapeProgressMaxAggregateInputType = {
    id?: true
    rootCategory?: true
    groupCategory?: true
    category?: true
    totalProducts?: true
    scrapedProducts?: true
    status?: true
    startedAt?: true
    completedAt?: true
  }

  export type ScrapeProgressCountAggregateInputType = {
    id?: true
    rootCategory?: true
    groupCategory?: true
    category?: true
    totalProducts?: true
    scrapedProducts?: true
    status?: true
    startedAt?: true
    completedAt?: true
    _all?: true
  }

  export type ScrapeProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapeProgress to aggregate.
     */
    where?: ScrapeProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeProgresses to fetch.
     */
    orderBy?: ScrapeProgressOrderByWithRelationInput | ScrapeProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScrapeProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScrapeProgresses
    **/
    _count?: true | ScrapeProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScrapeProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScrapeProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScrapeProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScrapeProgressMaxAggregateInputType
  }

  export type GetScrapeProgressAggregateType<T extends ScrapeProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateScrapeProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScrapeProgress[P]>
      : GetScalarType<T[P], AggregateScrapeProgress[P]>
  }




  export type ScrapeProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScrapeProgressWhereInput
    orderBy?: ScrapeProgressOrderByWithAggregationInput | ScrapeProgressOrderByWithAggregationInput[]
    by: ScrapeProgressScalarFieldEnum[] | ScrapeProgressScalarFieldEnum
    having?: ScrapeProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScrapeProgressCountAggregateInputType | true
    _avg?: ScrapeProgressAvgAggregateInputType
    _sum?: ScrapeProgressSumAggregateInputType
    _min?: ScrapeProgressMinAggregateInputType
    _max?: ScrapeProgressMaxAggregateInputType
  }

  export type ScrapeProgressGroupByOutputType = {
    id: string
    rootCategory: string
    groupCategory: string
    category: string
    totalProducts: number
    scrapedProducts: number
    status: string
    startedAt: Date | null
    completedAt: Date | null
    _count: ScrapeProgressCountAggregateOutputType | null
    _avg: ScrapeProgressAvgAggregateOutputType | null
    _sum: ScrapeProgressSumAggregateOutputType | null
    _min: ScrapeProgressMinAggregateOutputType | null
    _max: ScrapeProgressMaxAggregateOutputType | null
  }

  type GetScrapeProgressGroupByPayload<T extends ScrapeProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScrapeProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScrapeProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScrapeProgressGroupByOutputType[P]>
            : GetScalarType<T[P], ScrapeProgressGroupByOutputType[P]>
        }
      >
    >


  export type ScrapeProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rootCategory?: boolean
    groupCategory?: boolean
    category?: boolean
    totalProducts?: boolean
    scrapedProducts?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }, ExtArgs["result"]["scrapeProgress"]>



  export type ScrapeProgressSelectScalar = {
    id?: boolean
    rootCategory?: boolean
    groupCategory?: boolean
    category?: boolean
    totalProducts?: boolean
    scrapedProducts?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }

  export type ScrapeProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rootCategory" | "groupCategory" | "category" | "totalProducts" | "scrapedProducts" | "status" | "startedAt" | "completedAt", ExtArgs["result"]["scrapeProgress"]>

  export type $ScrapeProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScrapeProgress"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rootCategory: string
      groupCategory: string
      category: string
      totalProducts: number
      scrapedProducts: number
      status: string
      startedAt: Date | null
      completedAt: Date | null
    }, ExtArgs["result"]["scrapeProgress"]>
    composites: {}
  }

  type ScrapeProgressGetPayload<S extends boolean | null | undefined | ScrapeProgressDefaultArgs> = $Result.GetResult<Prisma.$ScrapeProgressPayload, S>

  type ScrapeProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScrapeProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScrapeProgressCountAggregateInputType | true
    }

  export interface ScrapeProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScrapeProgress'], meta: { name: 'ScrapeProgress' } }
    /**
     * Find zero or one ScrapeProgress that matches the filter.
     * @param {ScrapeProgressFindUniqueArgs} args - Arguments to find a ScrapeProgress
     * @example
     * // Get one ScrapeProgress
     * const scrapeProgress = await prisma.scrapeProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScrapeProgressFindUniqueArgs>(args: SelectSubset<T, ScrapeProgressFindUniqueArgs<ExtArgs>>): Prisma__ScrapeProgressClient<$Result.GetResult<Prisma.$ScrapeProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScrapeProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScrapeProgressFindUniqueOrThrowArgs} args - Arguments to find a ScrapeProgress
     * @example
     * // Get one ScrapeProgress
     * const scrapeProgress = await prisma.scrapeProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScrapeProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, ScrapeProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScrapeProgressClient<$Result.GetResult<Prisma.$ScrapeProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScrapeProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeProgressFindFirstArgs} args - Arguments to find a ScrapeProgress
     * @example
     * // Get one ScrapeProgress
     * const scrapeProgress = await prisma.scrapeProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScrapeProgressFindFirstArgs>(args?: SelectSubset<T, ScrapeProgressFindFirstArgs<ExtArgs>>): Prisma__ScrapeProgressClient<$Result.GetResult<Prisma.$ScrapeProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScrapeProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeProgressFindFirstOrThrowArgs} args - Arguments to find a ScrapeProgress
     * @example
     * // Get one ScrapeProgress
     * const scrapeProgress = await prisma.scrapeProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScrapeProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, ScrapeProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScrapeProgressClient<$Result.GetResult<Prisma.$ScrapeProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScrapeProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScrapeProgresses
     * const scrapeProgresses = await prisma.scrapeProgress.findMany()
     * 
     * // Get first 10 ScrapeProgresses
     * const scrapeProgresses = await prisma.scrapeProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scrapeProgressWithIdOnly = await prisma.scrapeProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScrapeProgressFindManyArgs>(args?: SelectSubset<T, ScrapeProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScrapeProgress.
     * @param {ScrapeProgressCreateArgs} args - Arguments to create a ScrapeProgress.
     * @example
     * // Create one ScrapeProgress
     * const ScrapeProgress = await prisma.scrapeProgress.create({
     *   data: {
     *     // ... data to create a ScrapeProgress
     *   }
     * })
     * 
     */
    create<T extends ScrapeProgressCreateArgs>(args: SelectSubset<T, ScrapeProgressCreateArgs<ExtArgs>>): Prisma__ScrapeProgressClient<$Result.GetResult<Prisma.$ScrapeProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScrapeProgresses.
     * @param {ScrapeProgressCreateManyArgs} args - Arguments to create many ScrapeProgresses.
     * @example
     * // Create many ScrapeProgresses
     * const scrapeProgress = await prisma.scrapeProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScrapeProgressCreateManyArgs>(args?: SelectSubset<T, ScrapeProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ScrapeProgress.
     * @param {ScrapeProgressDeleteArgs} args - Arguments to delete one ScrapeProgress.
     * @example
     * // Delete one ScrapeProgress
     * const ScrapeProgress = await prisma.scrapeProgress.delete({
     *   where: {
     *     // ... filter to delete one ScrapeProgress
     *   }
     * })
     * 
     */
    delete<T extends ScrapeProgressDeleteArgs>(args: SelectSubset<T, ScrapeProgressDeleteArgs<ExtArgs>>): Prisma__ScrapeProgressClient<$Result.GetResult<Prisma.$ScrapeProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScrapeProgress.
     * @param {ScrapeProgressUpdateArgs} args - Arguments to update one ScrapeProgress.
     * @example
     * // Update one ScrapeProgress
     * const scrapeProgress = await prisma.scrapeProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScrapeProgressUpdateArgs>(args: SelectSubset<T, ScrapeProgressUpdateArgs<ExtArgs>>): Prisma__ScrapeProgressClient<$Result.GetResult<Prisma.$ScrapeProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScrapeProgresses.
     * @param {ScrapeProgressDeleteManyArgs} args - Arguments to filter ScrapeProgresses to delete.
     * @example
     * // Delete a few ScrapeProgresses
     * const { count } = await prisma.scrapeProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScrapeProgressDeleteManyArgs>(args?: SelectSubset<T, ScrapeProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScrapeProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScrapeProgresses
     * const scrapeProgress = await prisma.scrapeProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScrapeProgressUpdateManyArgs>(args: SelectSubset<T, ScrapeProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScrapeProgress.
     * @param {ScrapeProgressUpsertArgs} args - Arguments to update or create a ScrapeProgress.
     * @example
     * // Update or create a ScrapeProgress
     * const scrapeProgress = await prisma.scrapeProgress.upsert({
     *   create: {
     *     // ... data to create a ScrapeProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScrapeProgress we want to update
     *   }
     * })
     */
    upsert<T extends ScrapeProgressUpsertArgs>(args: SelectSubset<T, ScrapeProgressUpsertArgs<ExtArgs>>): Prisma__ScrapeProgressClient<$Result.GetResult<Prisma.$ScrapeProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScrapeProgresses that matches the filter.
     * @param {ScrapeProgressFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const scrapeProgress = await prisma.scrapeProgress.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ScrapeProgressFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ScrapeProgress.
     * @param {ScrapeProgressAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const scrapeProgress = await prisma.scrapeProgress.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ScrapeProgressAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ScrapeProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeProgressCountArgs} args - Arguments to filter ScrapeProgresses to count.
     * @example
     * // Count the number of ScrapeProgresses
     * const count = await prisma.scrapeProgress.count({
     *   where: {
     *     // ... the filter for the ScrapeProgresses we want to count
     *   }
     * })
    **/
    count<T extends ScrapeProgressCountArgs>(
      args?: Subset<T, ScrapeProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScrapeProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScrapeProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScrapeProgressAggregateArgs>(args: Subset<T, ScrapeProgressAggregateArgs>): Prisma.PrismaPromise<GetScrapeProgressAggregateType<T>>

    /**
     * Group by ScrapeProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScrapeProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScrapeProgressGroupByArgs['orderBy'] }
        : { orderBy?: ScrapeProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScrapeProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScrapeProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScrapeProgress model
   */
  readonly fields: ScrapeProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScrapeProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScrapeProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScrapeProgress model
   */ 
  interface ScrapeProgressFieldRefs {
    readonly id: FieldRef<"ScrapeProgress", 'String'>
    readonly rootCategory: FieldRef<"ScrapeProgress", 'String'>
    readonly groupCategory: FieldRef<"ScrapeProgress", 'String'>
    readonly category: FieldRef<"ScrapeProgress", 'String'>
    readonly totalProducts: FieldRef<"ScrapeProgress", 'Int'>
    readonly scrapedProducts: FieldRef<"ScrapeProgress", 'Int'>
    readonly status: FieldRef<"ScrapeProgress", 'String'>
    readonly startedAt: FieldRef<"ScrapeProgress", 'DateTime'>
    readonly completedAt: FieldRef<"ScrapeProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScrapeProgress findUnique
   */
  export type ScrapeProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeProgress
     */
    select?: ScrapeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeProgress
     */
    omit?: ScrapeProgressOmit<ExtArgs> | null
    /**
     * Filter, which ScrapeProgress to fetch.
     */
    where: ScrapeProgressWhereUniqueInput
  }

  /**
   * ScrapeProgress findUniqueOrThrow
   */
  export type ScrapeProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeProgress
     */
    select?: ScrapeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeProgress
     */
    omit?: ScrapeProgressOmit<ExtArgs> | null
    /**
     * Filter, which ScrapeProgress to fetch.
     */
    where: ScrapeProgressWhereUniqueInput
  }

  /**
   * ScrapeProgress findFirst
   */
  export type ScrapeProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeProgress
     */
    select?: ScrapeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeProgress
     */
    omit?: ScrapeProgressOmit<ExtArgs> | null
    /**
     * Filter, which ScrapeProgress to fetch.
     */
    where?: ScrapeProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeProgresses to fetch.
     */
    orderBy?: ScrapeProgressOrderByWithRelationInput | ScrapeProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapeProgresses.
     */
    cursor?: ScrapeProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapeProgresses.
     */
    distinct?: ScrapeProgressScalarFieldEnum | ScrapeProgressScalarFieldEnum[]
  }

  /**
   * ScrapeProgress findFirstOrThrow
   */
  export type ScrapeProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeProgress
     */
    select?: ScrapeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeProgress
     */
    omit?: ScrapeProgressOmit<ExtArgs> | null
    /**
     * Filter, which ScrapeProgress to fetch.
     */
    where?: ScrapeProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeProgresses to fetch.
     */
    orderBy?: ScrapeProgressOrderByWithRelationInput | ScrapeProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapeProgresses.
     */
    cursor?: ScrapeProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapeProgresses.
     */
    distinct?: ScrapeProgressScalarFieldEnum | ScrapeProgressScalarFieldEnum[]
  }

  /**
   * ScrapeProgress findMany
   */
  export type ScrapeProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeProgress
     */
    select?: ScrapeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeProgress
     */
    omit?: ScrapeProgressOmit<ExtArgs> | null
    /**
     * Filter, which ScrapeProgresses to fetch.
     */
    where?: ScrapeProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeProgresses to fetch.
     */
    orderBy?: ScrapeProgressOrderByWithRelationInput | ScrapeProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScrapeProgresses.
     */
    cursor?: ScrapeProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeProgresses.
     */
    skip?: number
    distinct?: ScrapeProgressScalarFieldEnum | ScrapeProgressScalarFieldEnum[]
  }

  /**
   * ScrapeProgress create
   */
  export type ScrapeProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeProgress
     */
    select?: ScrapeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeProgress
     */
    omit?: ScrapeProgressOmit<ExtArgs> | null
    /**
     * The data needed to create a ScrapeProgress.
     */
    data: XOR<ScrapeProgressCreateInput, ScrapeProgressUncheckedCreateInput>
  }

  /**
   * ScrapeProgress createMany
   */
  export type ScrapeProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScrapeProgresses.
     */
    data: ScrapeProgressCreateManyInput | ScrapeProgressCreateManyInput[]
  }

  /**
   * ScrapeProgress update
   */
  export type ScrapeProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeProgress
     */
    select?: ScrapeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeProgress
     */
    omit?: ScrapeProgressOmit<ExtArgs> | null
    /**
     * The data needed to update a ScrapeProgress.
     */
    data: XOR<ScrapeProgressUpdateInput, ScrapeProgressUncheckedUpdateInput>
    /**
     * Choose, which ScrapeProgress to update.
     */
    where: ScrapeProgressWhereUniqueInput
  }

  /**
   * ScrapeProgress updateMany
   */
  export type ScrapeProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScrapeProgresses.
     */
    data: XOR<ScrapeProgressUpdateManyMutationInput, ScrapeProgressUncheckedUpdateManyInput>
    /**
     * Filter which ScrapeProgresses to update
     */
    where?: ScrapeProgressWhereInput
    /**
     * Limit how many ScrapeProgresses to update.
     */
    limit?: number
  }

  /**
   * ScrapeProgress upsert
   */
  export type ScrapeProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeProgress
     */
    select?: ScrapeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeProgress
     */
    omit?: ScrapeProgressOmit<ExtArgs> | null
    /**
     * The filter to search for the ScrapeProgress to update in case it exists.
     */
    where: ScrapeProgressWhereUniqueInput
    /**
     * In case the ScrapeProgress found by the `where` argument doesn't exist, create a new ScrapeProgress with this data.
     */
    create: XOR<ScrapeProgressCreateInput, ScrapeProgressUncheckedCreateInput>
    /**
     * In case the ScrapeProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScrapeProgressUpdateInput, ScrapeProgressUncheckedUpdateInput>
  }

  /**
   * ScrapeProgress delete
   */
  export type ScrapeProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeProgress
     */
    select?: ScrapeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeProgress
     */
    omit?: ScrapeProgressOmit<ExtArgs> | null
    /**
     * Filter which ScrapeProgress to delete.
     */
    where: ScrapeProgressWhereUniqueInput
  }

  /**
   * ScrapeProgress deleteMany
   */
  export type ScrapeProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapeProgresses to delete
     */
    where?: ScrapeProgressWhereInput
    /**
     * Limit how many ScrapeProgresses to delete.
     */
    limit?: number
  }

  /**
   * ScrapeProgress findRaw
   */
  export type ScrapeProgressFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ScrapeProgress aggregateRaw
   */
  export type ScrapeProgressAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ScrapeProgress without action
   */
  export type ScrapeProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeProgress
     */
    select?: ScrapeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeProgress
     */
    omit?: ScrapeProgressOmit<ExtArgs> | null
  }


  /**
   * Model BlinkitProduct
   */

  export type AggregateBlinkitProduct = {
    _count: BlinkitProductCountAggregateOutputType | null
    _avg: BlinkitProductAvgAggregateOutputType | null
    _sum: BlinkitProductSumAggregateOutputType | null
    _min: BlinkitProductMinAggregateOutputType | null
    _max: BlinkitProductMaxAggregateOutputType | null
  }

  export type BlinkitProductAvgAggregateOutputType = {
    price: number | null
    mrp: number | null
  }

  export type BlinkitProductSumAggregateOutputType = {
    price: number | null
    mrp: number | null
  }

  export type BlinkitProductMinAggregateOutputType = {
    id: string | null
    sku: string | null
    title: string | null
    brand: string | null
    price: number | null
    mrp: number | null
    quantity: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlinkitProductMaxAggregateOutputType = {
    id: string | null
    sku: string | null
    title: string | null
    brand: string | null
    price: number | null
    mrp: number | null
    quantity: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlinkitProductCountAggregateOutputType = {
    id: number
    sku: number
    title: number
    brand: number
    price: number
    mrp: number
    quantity: number
    images: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlinkitProductAvgAggregateInputType = {
    price?: true
    mrp?: true
  }

  export type BlinkitProductSumAggregateInputType = {
    price?: true
    mrp?: true
  }

  export type BlinkitProductMinAggregateInputType = {
    id?: true
    sku?: true
    title?: true
    brand?: true
    price?: true
    mrp?: true
    quantity?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlinkitProductMaxAggregateInputType = {
    id?: true
    sku?: true
    title?: true
    brand?: true
    price?: true
    mrp?: true
    quantity?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlinkitProductCountAggregateInputType = {
    id?: true
    sku?: true
    title?: true
    brand?: true
    price?: true
    mrp?: true
    quantity?: true
    images?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlinkitProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlinkitProduct to aggregate.
     */
    where?: BlinkitProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlinkitProducts to fetch.
     */
    orderBy?: BlinkitProductOrderByWithRelationInput | BlinkitProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlinkitProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlinkitProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlinkitProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlinkitProducts
    **/
    _count?: true | BlinkitProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlinkitProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlinkitProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlinkitProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlinkitProductMaxAggregateInputType
  }

  export type GetBlinkitProductAggregateType<T extends BlinkitProductAggregateArgs> = {
        [P in keyof T & keyof AggregateBlinkitProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlinkitProduct[P]>
      : GetScalarType<T[P], AggregateBlinkitProduct[P]>
  }




  export type BlinkitProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlinkitProductWhereInput
    orderBy?: BlinkitProductOrderByWithAggregationInput | BlinkitProductOrderByWithAggregationInput[]
    by: BlinkitProductScalarFieldEnum[] | BlinkitProductScalarFieldEnum
    having?: BlinkitProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlinkitProductCountAggregateInputType | true
    _avg?: BlinkitProductAvgAggregateInputType
    _sum?: BlinkitProductSumAggregateInputType
    _min?: BlinkitProductMinAggregateInputType
    _max?: BlinkitProductMaxAggregateInputType
  }

  export type BlinkitProductGroupByOutputType = {
    id: string
    sku: string
    title: string
    brand: string | null
    price: number
    mrp: number | null
    quantity: string | null
    images: string[]
    category: string
    createdAt: Date
    updatedAt: Date
    _count: BlinkitProductCountAggregateOutputType | null
    _avg: BlinkitProductAvgAggregateOutputType | null
    _sum: BlinkitProductSumAggregateOutputType | null
    _min: BlinkitProductMinAggregateOutputType | null
    _max: BlinkitProductMaxAggregateOutputType | null
  }

  type GetBlinkitProductGroupByPayload<T extends BlinkitProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlinkitProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlinkitProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlinkitProductGroupByOutputType[P]>
            : GetScalarType<T[P], BlinkitProductGroupByOutputType[P]>
        }
      >
    >


  export type BlinkitProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    title?: boolean
    brand?: boolean
    price?: boolean
    mrp?: boolean
    quantity?: boolean
    images?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["blinkitProduct"]>



  export type BlinkitProductSelectScalar = {
    id?: boolean
    sku?: boolean
    title?: boolean
    brand?: boolean
    price?: boolean
    mrp?: boolean
    quantity?: boolean
    images?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlinkitProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sku" | "title" | "brand" | "price" | "mrp" | "quantity" | "images" | "category" | "createdAt" | "updatedAt", ExtArgs["result"]["blinkitProduct"]>

  export type $BlinkitProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlinkitProduct"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sku: string
      title: string
      brand: string | null
      price: number
      mrp: number | null
      quantity: string | null
      images: string[]
      category: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blinkitProduct"]>
    composites: {}
  }

  type BlinkitProductGetPayload<S extends boolean | null | undefined | BlinkitProductDefaultArgs> = $Result.GetResult<Prisma.$BlinkitProductPayload, S>

  type BlinkitProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlinkitProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlinkitProductCountAggregateInputType | true
    }

  export interface BlinkitProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlinkitProduct'], meta: { name: 'BlinkitProduct' } }
    /**
     * Find zero or one BlinkitProduct that matches the filter.
     * @param {BlinkitProductFindUniqueArgs} args - Arguments to find a BlinkitProduct
     * @example
     * // Get one BlinkitProduct
     * const blinkitProduct = await prisma.blinkitProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlinkitProductFindUniqueArgs>(args: SelectSubset<T, BlinkitProductFindUniqueArgs<ExtArgs>>): Prisma__BlinkitProductClient<$Result.GetResult<Prisma.$BlinkitProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlinkitProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlinkitProductFindUniqueOrThrowArgs} args - Arguments to find a BlinkitProduct
     * @example
     * // Get one BlinkitProduct
     * const blinkitProduct = await prisma.blinkitProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlinkitProductFindUniqueOrThrowArgs>(args: SelectSubset<T, BlinkitProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlinkitProductClient<$Result.GetResult<Prisma.$BlinkitProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlinkitProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlinkitProductFindFirstArgs} args - Arguments to find a BlinkitProduct
     * @example
     * // Get one BlinkitProduct
     * const blinkitProduct = await prisma.blinkitProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlinkitProductFindFirstArgs>(args?: SelectSubset<T, BlinkitProductFindFirstArgs<ExtArgs>>): Prisma__BlinkitProductClient<$Result.GetResult<Prisma.$BlinkitProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlinkitProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlinkitProductFindFirstOrThrowArgs} args - Arguments to find a BlinkitProduct
     * @example
     * // Get one BlinkitProduct
     * const blinkitProduct = await prisma.blinkitProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlinkitProductFindFirstOrThrowArgs>(args?: SelectSubset<T, BlinkitProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlinkitProductClient<$Result.GetResult<Prisma.$BlinkitProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlinkitProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlinkitProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlinkitProducts
     * const blinkitProducts = await prisma.blinkitProduct.findMany()
     * 
     * // Get first 10 BlinkitProducts
     * const blinkitProducts = await prisma.blinkitProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blinkitProductWithIdOnly = await prisma.blinkitProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlinkitProductFindManyArgs>(args?: SelectSubset<T, BlinkitProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlinkitProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlinkitProduct.
     * @param {BlinkitProductCreateArgs} args - Arguments to create a BlinkitProduct.
     * @example
     * // Create one BlinkitProduct
     * const BlinkitProduct = await prisma.blinkitProduct.create({
     *   data: {
     *     // ... data to create a BlinkitProduct
     *   }
     * })
     * 
     */
    create<T extends BlinkitProductCreateArgs>(args: SelectSubset<T, BlinkitProductCreateArgs<ExtArgs>>): Prisma__BlinkitProductClient<$Result.GetResult<Prisma.$BlinkitProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlinkitProducts.
     * @param {BlinkitProductCreateManyArgs} args - Arguments to create many BlinkitProducts.
     * @example
     * // Create many BlinkitProducts
     * const blinkitProduct = await prisma.blinkitProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlinkitProductCreateManyArgs>(args?: SelectSubset<T, BlinkitProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BlinkitProduct.
     * @param {BlinkitProductDeleteArgs} args - Arguments to delete one BlinkitProduct.
     * @example
     * // Delete one BlinkitProduct
     * const BlinkitProduct = await prisma.blinkitProduct.delete({
     *   where: {
     *     // ... filter to delete one BlinkitProduct
     *   }
     * })
     * 
     */
    delete<T extends BlinkitProductDeleteArgs>(args: SelectSubset<T, BlinkitProductDeleteArgs<ExtArgs>>): Prisma__BlinkitProductClient<$Result.GetResult<Prisma.$BlinkitProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlinkitProduct.
     * @param {BlinkitProductUpdateArgs} args - Arguments to update one BlinkitProduct.
     * @example
     * // Update one BlinkitProduct
     * const blinkitProduct = await prisma.blinkitProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlinkitProductUpdateArgs>(args: SelectSubset<T, BlinkitProductUpdateArgs<ExtArgs>>): Prisma__BlinkitProductClient<$Result.GetResult<Prisma.$BlinkitProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlinkitProducts.
     * @param {BlinkitProductDeleteManyArgs} args - Arguments to filter BlinkitProducts to delete.
     * @example
     * // Delete a few BlinkitProducts
     * const { count } = await prisma.blinkitProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlinkitProductDeleteManyArgs>(args?: SelectSubset<T, BlinkitProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlinkitProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlinkitProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlinkitProducts
     * const blinkitProduct = await prisma.blinkitProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlinkitProductUpdateManyArgs>(args: SelectSubset<T, BlinkitProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlinkitProduct.
     * @param {BlinkitProductUpsertArgs} args - Arguments to update or create a BlinkitProduct.
     * @example
     * // Update or create a BlinkitProduct
     * const blinkitProduct = await prisma.blinkitProduct.upsert({
     *   create: {
     *     // ... data to create a BlinkitProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlinkitProduct we want to update
     *   }
     * })
     */
    upsert<T extends BlinkitProductUpsertArgs>(args: SelectSubset<T, BlinkitProductUpsertArgs<ExtArgs>>): Prisma__BlinkitProductClient<$Result.GetResult<Prisma.$BlinkitProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlinkitProducts that matches the filter.
     * @param {BlinkitProductFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const blinkitProduct = await prisma.blinkitProduct.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: BlinkitProductFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a BlinkitProduct.
     * @param {BlinkitProductAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const blinkitProduct = await prisma.blinkitProduct.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: BlinkitProductAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of BlinkitProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlinkitProductCountArgs} args - Arguments to filter BlinkitProducts to count.
     * @example
     * // Count the number of BlinkitProducts
     * const count = await prisma.blinkitProduct.count({
     *   where: {
     *     // ... the filter for the BlinkitProducts we want to count
     *   }
     * })
    **/
    count<T extends BlinkitProductCountArgs>(
      args?: Subset<T, BlinkitProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlinkitProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlinkitProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlinkitProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlinkitProductAggregateArgs>(args: Subset<T, BlinkitProductAggregateArgs>): Prisma.PrismaPromise<GetBlinkitProductAggregateType<T>>

    /**
     * Group by BlinkitProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlinkitProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlinkitProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlinkitProductGroupByArgs['orderBy'] }
        : { orderBy?: BlinkitProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlinkitProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlinkitProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlinkitProduct model
   */
  readonly fields: BlinkitProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlinkitProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlinkitProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlinkitProduct model
   */ 
  interface BlinkitProductFieldRefs {
    readonly id: FieldRef<"BlinkitProduct", 'String'>
    readonly sku: FieldRef<"BlinkitProduct", 'String'>
    readonly title: FieldRef<"BlinkitProduct", 'String'>
    readonly brand: FieldRef<"BlinkitProduct", 'String'>
    readonly price: FieldRef<"BlinkitProduct", 'Float'>
    readonly mrp: FieldRef<"BlinkitProduct", 'Float'>
    readonly quantity: FieldRef<"BlinkitProduct", 'String'>
    readonly images: FieldRef<"BlinkitProduct", 'String[]'>
    readonly category: FieldRef<"BlinkitProduct", 'String'>
    readonly createdAt: FieldRef<"BlinkitProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"BlinkitProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlinkitProduct findUnique
   */
  export type BlinkitProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlinkitProduct
     */
    select?: BlinkitProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlinkitProduct
     */
    omit?: BlinkitProductOmit<ExtArgs> | null
    /**
     * Filter, which BlinkitProduct to fetch.
     */
    where: BlinkitProductWhereUniqueInput
  }

  /**
   * BlinkitProduct findUniqueOrThrow
   */
  export type BlinkitProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlinkitProduct
     */
    select?: BlinkitProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlinkitProduct
     */
    omit?: BlinkitProductOmit<ExtArgs> | null
    /**
     * Filter, which BlinkitProduct to fetch.
     */
    where: BlinkitProductWhereUniqueInput
  }

  /**
   * BlinkitProduct findFirst
   */
  export type BlinkitProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlinkitProduct
     */
    select?: BlinkitProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlinkitProduct
     */
    omit?: BlinkitProductOmit<ExtArgs> | null
    /**
     * Filter, which BlinkitProduct to fetch.
     */
    where?: BlinkitProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlinkitProducts to fetch.
     */
    orderBy?: BlinkitProductOrderByWithRelationInput | BlinkitProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlinkitProducts.
     */
    cursor?: BlinkitProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlinkitProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlinkitProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlinkitProducts.
     */
    distinct?: BlinkitProductScalarFieldEnum | BlinkitProductScalarFieldEnum[]
  }

  /**
   * BlinkitProduct findFirstOrThrow
   */
  export type BlinkitProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlinkitProduct
     */
    select?: BlinkitProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlinkitProduct
     */
    omit?: BlinkitProductOmit<ExtArgs> | null
    /**
     * Filter, which BlinkitProduct to fetch.
     */
    where?: BlinkitProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlinkitProducts to fetch.
     */
    orderBy?: BlinkitProductOrderByWithRelationInput | BlinkitProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlinkitProducts.
     */
    cursor?: BlinkitProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlinkitProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlinkitProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlinkitProducts.
     */
    distinct?: BlinkitProductScalarFieldEnum | BlinkitProductScalarFieldEnum[]
  }

  /**
   * BlinkitProduct findMany
   */
  export type BlinkitProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlinkitProduct
     */
    select?: BlinkitProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlinkitProduct
     */
    omit?: BlinkitProductOmit<ExtArgs> | null
    /**
     * Filter, which BlinkitProducts to fetch.
     */
    where?: BlinkitProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlinkitProducts to fetch.
     */
    orderBy?: BlinkitProductOrderByWithRelationInput | BlinkitProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlinkitProducts.
     */
    cursor?: BlinkitProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlinkitProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlinkitProducts.
     */
    skip?: number
    distinct?: BlinkitProductScalarFieldEnum | BlinkitProductScalarFieldEnum[]
  }

  /**
   * BlinkitProduct create
   */
  export type BlinkitProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlinkitProduct
     */
    select?: BlinkitProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlinkitProduct
     */
    omit?: BlinkitProductOmit<ExtArgs> | null
    /**
     * The data needed to create a BlinkitProduct.
     */
    data: XOR<BlinkitProductCreateInput, BlinkitProductUncheckedCreateInput>
  }

  /**
   * BlinkitProduct createMany
   */
  export type BlinkitProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlinkitProducts.
     */
    data: BlinkitProductCreateManyInput | BlinkitProductCreateManyInput[]
  }

  /**
   * BlinkitProduct update
   */
  export type BlinkitProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlinkitProduct
     */
    select?: BlinkitProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlinkitProduct
     */
    omit?: BlinkitProductOmit<ExtArgs> | null
    /**
     * The data needed to update a BlinkitProduct.
     */
    data: XOR<BlinkitProductUpdateInput, BlinkitProductUncheckedUpdateInput>
    /**
     * Choose, which BlinkitProduct to update.
     */
    where: BlinkitProductWhereUniqueInput
  }

  /**
   * BlinkitProduct updateMany
   */
  export type BlinkitProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlinkitProducts.
     */
    data: XOR<BlinkitProductUpdateManyMutationInput, BlinkitProductUncheckedUpdateManyInput>
    /**
     * Filter which BlinkitProducts to update
     */
    where?: BlinkitProductWhereInput
    /**
     * Limit how many BlinkitProducts to update.
     */
    limit?: number
  }

  /**
   * BlinkitProduct upsert
   */
  export type BlinkitProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlinkitProduct
     */
    select?: BlinkitProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlinkitProduct
     */
    omit?: BlinkitProductOmit<ExtArgs> | null
    /**
     * The filter to search for the BlinkitProduct to update in case it exists.
     */
    where: BlinkitProductWhereUniqueInput
    /**
     * In case the BlinkitProduct found by the `where` argument doesn't exist, create a new BlinkitProduct with this data.
     */
    create: XOR<BlinkitProductCreateInput, BlinkitProductUncheckedCreateInput>
    /**
     * In case the BlinkitProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlinkitProductUpdateInput, BlinkitProductUncheckedUpdateInput>
  }

  /**
   * BlinkitProduct delete
   */
  export type BlinkitProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlinkitProduct
     */
    select?: BlinkitProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlinkitProduct
     */
    omit?: BlinkitProductOmit<ExtArgs> | null
    /**
     * Filter which BlinkitProduct to delete.
     */
    where: BlinkitProductWhereUniqueInput
  }

  /**
   * BlinkitProduct deleteMany
   */
  export type BlinkitProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlinkitProducts to delete
     */
    where?: BlinkitProductWhereInput
    /**
     * Limit how many BlinkitProducts to delete.
     */
    limit?: number
  }

  /**
   * BlinkitProduct findRaw
   */
  export type BlinkitProductFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * BlinkitProduct aggregateRaw
   */
  export type BlinkitProductAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * BlinkitProduct without action
   */
  export type BlinkitProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlinkitProduct
     */
    select?: BlinkitProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlinkitProduct
     */
    omit?: BlinkitProductOmit<ExtArgs> | null
  }


  /**
   * Model LimeroadProduct
   */

  export type AggregateLimeroadProduct = {
    _count: LimeroadProductCountAggregateOutputType | null
    _min: LimeroadProductMinAggregateOutputType | null
    _max: LimeroadProductMaxAggregateOutputType | null
  }

  export type LimeroadProductMinAggregateOutputType = {
    id: string | null
    itemId: string | null
    title: string | null
    brand: string | null
    price: string | null
    mrp: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LimeroadProductMaxAggregateOutputType = {
    id: string | null
    itemId: string | null
    title: string | null
    brand: string | null
    price: string | null
    mrp: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LimeroadProductCountAggregateOutputType = {
    id: number
    itemId: number
    title: number
    brand: number
    price: number
    mrp: number
    images: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LimeroadProductMinAggregateInputType = {
    id?: true
    itemId?: true
    title?: true
    brand?: true
    price?: true
    mrp?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LimeroadProductMaxAggregateInputType = {
    id?: true
    itemId?: true
    title?: true
    brand?: true
    price?: true
    mrp?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LimeroadProductCountAggregateInputType = {
    id?: true
    itemId?: true
    title?: true
    brand?: true
    price?: true
    mrp?: true
    images?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LimeroadProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LimeroadProduct to aggregate.
     */
    where?: LimeroadProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LimeroadProducts to fetch.
     */
    orderBy?: LimeroadProductOrderByWithRelationInput | LimeroadProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LimeroadProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LimeroadProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LimeroadProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LimeroadProducts
    **/
    _count?: true | LimeroadProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LimeroadProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LimeroadProductMaxAggregateInputType
  }

  export type GetLimeroadProductAggregateType<T extends LimeroadProductAggregateArgs> = {
        [P in keyof T & keyof AggregateLimeroadProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLimeroadProduct[P]>
      : GetScalarType<T[P], AggregateLimeroadProduct[P]>
  }




  export type LimeroadProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LimeroadProductWhereInput
    orderBy?: LimeroadProductOrderByWithAggregationInput | LimeroadProductOrderByWithAggregationInput[]
    by: LimeroadProductScalarFieldEnum[] | LimeroadProductScalarFieldEnum
    having?: LimeroadProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LimeroadProductCountAggregateInputType | true
    _min?: LimeroadProductMinAggregateInputType
    _max?: LimeroadProductMaxAggregateInputType
  }

  export type LimeroadProductGroupByOutputType = {
    id: string
    itemId: string
    title: string
    brand: string | null
    price: string
    mrp: string | null
    images: string[]
    category: string
    createdAt: Date
    updatedAt: Date
    _count: LimeroadProductCountAggregateOutputType | null
    _min: LimeroadProductMinAggregateOutputType | null
    _max: LimeroadProductMaxAggregateOutputType | null
  }

  type GetLimeroadProductGroupByPayload<T extends LimeroadProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LimeroadProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LimeroadProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LimeroadProductGroupByOutputType[P]>
            : GetScalarType<T[P], LimeroadProductGroupByOutputType[P]>
        }
      >
    >


  export type LimeroadProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemId?: boolean
    title?: boolean
    brand?: boolean
    price?: boolean
    mrp?: boolean
    images?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["limeroadProduct"]>



  export type LimeroadProductSelectScalar = {
    id?: boolean
    itemId?: boolean
    title?: boolean
    brand?: boolean
    price?: boolean
    mrp?: boolean
    images?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LimeroadProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "itemId" | "title" | "brand" | "price" | "mrp" | "images" | "category" | "createdAt" | "updatedAt", ExtArgs["result"]["limeroadProduct"]>

  export type $LimeroadProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LimeroadProduct"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemId: string
      title: string
      brand: string | null
      price: string
      mrp: string | null
      images: string[]
      category: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["limeroadProduct"]>
    composites: {}
  }

  type LimeroadProductGetPayload<S extends boolean | null | undefined | LimeroadProductDefaultArgs> = $Result.GetResult<Prisma.$LimeroadProductPayload, S>

  type LimeroadProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LimeroadProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LimeroadProductCountAggregateInputType | true
    }

  export interface LimeroadProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LimeroadProduct'], meta: { name: 'LimeroadProduct' } }
    /**
     * Find zero or one LimeroadProduct that matches the filter.
     * @param {LimeroadProductFindUniqueArgs} args - Arguments to find a LimeroadProduct
     * @example
     * // Get one LimeroadProduct
     * const limeroadProduct = await prisma.limeroadProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LimeroadProductFindUniqueArgs>(args: SelectSubset<T, LimeroadProductFindUniqueArgs<ExtArgs>>): Prisma__LimeroadProductClient<$Result.GetResult<Prisma.$LimeroadProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LimeroadProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LimeroadProductFindUniqueOrThrowArgs} args - Arguments to find a LimeroadProduct
     * @example
     * // Get one LimeroadProduct
     * const limeroadProduct = await prisma.limeroadProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LimeroadProductFindUniqueOrThrowArgs>(args: SelectSubset<T, LimeroadProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LimeroadProductClient<$Result.GetResult<Prisma.$LimeroadProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LimeroadProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimeroadProductFindFirstArgs} args - Arguments to find a LimeroadProduct
     * @example
     * // Get one LimeroadProduct
     * const limeroadProduct = await prisma.limeroadProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LimeroadProductFindFirstArgs>(args?: SelectSubset<T, LimeroadProductFindFirstArgs<ExtArgs>>): Prisma__LimeroadProductClient<$Result.GetResult<Prisma.$LimeroadProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LimeroadProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimeroadProductFindFirstOrThrowArgs} args - Arguments to find a LimeroadProduct
     * @example
     * // Get one LimeroadProduct
     * const limeroadProduct = await prisma.limeroadProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LimeroadProductFindFirstOrThrowArgs>(args?: SelectSubset<T, LimeroadProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__LimeroadProductClient<$Result.GetResult<Prisma.$LimeroadProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LimeroadProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimeroadProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LimeroadProducts
     * const limeroadProducts = await prisma.limeroadProduct.findMany()
     * 
     * // Get first 10 LimeroadProducts
     * const limeroadProducts = await prisma.limeroadProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const limeroadProductWithIdOnly = await prisma.limeroadProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LimeroadProductFindManyArgs>(args?: SelectSubset<T, LimeroadProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LimeroadProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LimeroadProduct.
     * @param {LimeroadProductCreateArgs} args - Arguments to create a LimeroadProduct.
     * @example
     * // Create one LimeroadProduct
     * const LimeroadProduct = await prisma.limeroadProduct.create({
     *   data: {
     *     // ... data to create a LimeroadProduct
     *   }
     * })
     * 
     */
    create<T extends LimeroadProductCreateArgs>(args: SelectSubset<T, LimeroadProductCreateArgs<ExtArgs>>): Prisma__LimeroadProductClient<$Result.GetResult<Prisma.$LimeroadProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LimeroadProducts.
     * @param {LimeroadProductCreateManyArgs} args - Arguments to create many LimeroadProducts.
     * @example
     * // Create many LimeroadProducts
     * const limeroadProduct = await prisma.limeroadProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LimeroadProductCreateManyArgs>(args?: SelectSubset<T, LimeroadProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LimeroadProduct.
     * @param {LimeroadProductDeleteArgs} args - Arguments to delete one LimeroadProduct.
     * @example
     * // Delete one LimeroadProduct
     * const LimeroadProduct = await prisma.limeroadProduct.delete({
     *   where: {
     *     // ... filter to delete one LimeroadProduct
     *   }
     * })
     * 
     */
    delete<T extends LimeroadProductDeleteArgs>(args: SelectSubset<T, LimeroadProductDeleteArgs<ExtArgs>>): Prisma__LimeroadProductClient<$Result.GetResult<Prisma.$LimeroadProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LimeroadProduct.
     * @param {LimeroadProductUpdateArgs} args - Arguments to update one LimeroadProduct.
     * @example
     * // Update one LimeroadProduct
     * const limeroadProduct = await prisma.limeroadProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LimeroadProductUpdateArgs>(args: SelectSubset<T, LimeroadProductUpdateArgs<ExtArgs>>): Prisma__LimeroadProductClient<$Result.GetResult<Prisma.$LimeroadProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LimeroadProducts.
     * @param {LimeroadProductDeleteManyArgs} args - Arguments to filter LimeroadProducts to delete.
     * @example
     * // Delete a few LimeroadProducts
     * const { count } = await prisma.limeroadProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LimeroadProductDeleteManyArgs>(args?: SelectSubset<T, LimeroadProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LimeroadProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimeroadProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LimeroadProducts
     * const limeroadProduct = await prisma.limeroadProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LimeroadProductUpdateManyArgs>(args: SelectSubset<T, LimeroadProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LimeroadProduct.
     * @param {LimeroadProductUpsertArgs} args - Arguments to update or create a LimeroadProduct.
     * @example
     * // Update or create a LimeroadProduct
     * const limeroadProduct = await prisma.limeroadProduct.upsert({
     *   create: {
     *     // ... data to create a LimeroadProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LimeroadProduct we want to update
     *   }
     * })
     */
    upsert<T extends LimeroadProductUpsertArgs>(args: SelectSubset<T, LimeroadProductUpsertArgs<ExtArgs>>): Prisma__LimeroadProductClient<$Result.GetResult<Prisma.$LimeroadProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LimeroadProducts that matches the filter.
     * @param {LimeroadProductFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const limeroadProduct = await prisma.limeroadProduct.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: LimeroadProductFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a LimeroadProduct.
     * @param {LimeroadProductAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const limeroadProduct = await prisma.limeroadProduct.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: LimeroadProductAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of LimeroadProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimeroadProductCountArgs} args - Arguments to filter LimeroadProducts to count.
     * @example
     * // Count the number of LimeroadProducts
     * const count = await prisma.limeroadProduct.count({
     *   where: {
     *     // ... the filter for the LimeroadProducts we want to count
     *   }
     * })
    **/
    count<T extends LimeroadProductCountArgs>(
      args?: Subset<T, LimeroadProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LimeroadProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LimeroadProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimeroadProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LimeroadProductAggregateArgs>(args: Subset<T, LimeroadProductAggregateArgs>): Prisma.PrismaPromise<GetLimeroadProductAggregateType<T>>

    /**
     * Group by LimeroadProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LimeroadProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LimeroadProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LimeroadProductGroupByArgs['orderBy'] }
        : { orderBy?: LimeroadProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LimeroadProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLimeroadProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LimeroadProduct model
   */
  readonly fields: LimeroadProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LimeroadProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LimeroadProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LimeroadProduct model
   */ 
  interface LimeroadProductFieldRefs {
    readonly id: FieldRef<"LimeroadProduct", 'String'>
    readonly itemId: FieldRef<"LimeroadProduct", 'String'>
    readonly title: FieldRef<"LimeroadProduct", 'String'>
    readonly brand: FieldRef<"LimeroadProduct", 'String'>
    readonly price: FieldRef<"LimeroadProduct", 'String'>
    readonly mrp: FieldRef<"LimeroadProduct", 'String'>
    readonly images: FieldRef<"LimeroadProduct", 'String[]'>
    readonly category: FieldRef<"LimeroadProduct", 'String'>
    readonly createdAt: FieldRef<"LimeroadProduct", 'DateTime'>
    readonly updatedAt: FieldRef<"LimeroadProduct", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LimeroadProduct findUnique
   */
  export type LimeroadProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimeroadProduct
     */
    select?: LimeroadProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimeroadProduct
     */
    omit?: LimeroadProductOmit<ExtArgs> | null
    /**
     * Filter, which LimeroadProduct to fetch.
     */
    where: LimeroadProductWhereUniqueInput
  }

  /**
   * LimeroadProduct findUniqueOrThrow
   */
  export type LimeroadProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimeroadProduct
     */
    select?: LimeroadProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimeroadProduct
     */
    omit?: LimeroadProductOmit<ExtArgs> | null
    /**
     * Filter, which LimeroadProduct to fetch.
     */
    where: LimeroadProductWhereUniqueInput
  }

  /**
   * LimeroadProduct findFirst
   */
  export type LimeroadProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimeroadProduct
     */
    select?: LimeroadProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimeroadProduct
     */
    omit?: LimeroadProductOmit<ExtArgs> | null
    /**
     * Filter, which LimeroadProduct to fetch.
     */
    where?: LimeroadProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LimeroadProducts to fetch.
     */
    orderBy?: LimeroadProductOrderByWithRelationInput | LimeroadProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LimeroadProducts.
     */
    cursor?: LimeroadProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LimeroadProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LimeroadProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LimeroadProducts.
     */
    distinct?: LimeroadProductScalarFieldEnum | LimeroadProductScalarFieldEnum[]
  }

  /**
   * LimeroadProduct findFirstOrThrow
   */
  export type LimeroadProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimeroadProduct
     */
    select?: LimeroadProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimeroadProduct
     */
    omit?: LimeroadProductOmit<ExtArgs> | null
    /**
     * Filter, which LimeroadProduct to fetch.
     */
    where?: LimeroadProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LimeroadProducts to fetch.
     */
    orderBy?: LimeroadProductOrderByWithRelationInput | LimeroadProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LimeroadProducts.
     */
    cursor?: LimeroadProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LimeroadProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LimeroadProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LimeroadProducts.
     */
    distinct?: LimeroadProductScalarFieldEnum | LimeroadProductScalarFieldEnum[]
  }

  /**
   * LimeroadProduct findMany
   */
  export type LimeroadProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimeroadProduct
     */
    select?: LimeroadProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimeroadProduct
     */
    omit?: LimeroadProductOmit<ExtArgs> | null
    /**
     * Filter, which LimeroadProducts to fetch.
     */
    where?: LimeroadProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LimeroadProducts to fetch.
     */
    orderBy?: LimeroadProductOrderByWithRelationInput | LimeroadProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LimeroadProducts.
     */
    cursor?: LimeroadProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LimeroadProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LimeroadProducts.
     */
    skip?: number
    distinct?: LimeroadProductScalarFieldEnum | LimeroadProductScalarFieldEnum[]
  }

  /**
   * LimeroadProduct create
   */
  export type LimeroadProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimeroadProduct
     */
    select?: LimeroadProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimeroadProduct
     */
    omit?: LimeroadProductOmit<ExtArgs> | null
    /**
     * The data needed to create a LimeroadProduct.
     */
    data: XOR<LimeroadProductCreateInput, LimeroadProductUncheckedCreateInput>
  }

  /**
   * LimeroadProduct createMany
   */
  export type LimeroadProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LimeroadProducts.
     */
    data: LimeroadProductCreateManyInput | LimeroadProductCreateManyInput[]
  }

  /**
   * LimeroadProduct update
   */
  export type LimeroadProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimeroadProduct
     */
    select?: LimeroadProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimeroadProduct
     */
    omit?: LimeroadProductOmit<ExtArgs> | null
    /**
     * The data needed to update a LimeroadProduct.
     */
    data: XOR<LimeroadProductUpdateInput, LimeroadProductUncheckedUpdateInput>
    /**
     * Choose, which LimeroadProduct to update.
     */
    where: LimeroadProductWhereUniqueInput
  }

  /**
   * LimeroadProduct updateMany
   */
  export type LimeroadProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LimeroadProducts.
     */
    data: XOR<LimeroadProductUpdateManyMutationInput, LimeroadProductUncheckedUpdateManyInput>
    /**
     * Filter which LimeroadProducts to update
     */
    where?: LimeroadProductWhereInput
    /**
     * Limit how many LimeroadProducts to update.
     */
    limit?: number
  }

  /**
   * LimeroadProduct upsert
   */
  export type LimeroadProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimeroadProduct
     */
    select?: LimeroadProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimeroadProduct
     */
    omit?: LimeroadProductOmit<ExtArgs> | null
    /**
     * The filter to search for the LimeroadProduct to update in case it exists.
     */
    where: LimeroadProductWhereUniqueInput
    /**
     * In case the LimeroadProduct found by the `where` argument doesn't exist, create a new LimeroadProduct with this data.
     */
    create: XOR<LimeroadProductCreateInput, LimeroadProductUncheckedCreateInput>
    /**
     * In case the LimeroadProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LimeroadProductUpdateInput, LimeroadProductUncheckedUpdateInput>
  }

  /**
   * LimeroadProduct delete
   */
  export type LimeroadProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimeroadProduct
     */
    select?: LimeroadProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimeroadProduct
     */
    omit?: LimeroadProductOmit<ExtArgs> | null
    /**
     * Filter which LimeroadProduct to delete.
     */
    where: LimeroadProductWhereUniqueInput
  }

  /**
   * LimeroadProduct deleteMany
   */
  export type LimeroadProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LimeroadProducts to delete
     */
    where?: LimeroadProductWhereInput
    /**
     * Limit how many LimeroadProducts to delete.
     */
    limit?: number
  }

  /**
   * LimeroadProduct findRaw
   */
  export type LimeroadProductFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LimeroadProduct aggregateRaw
   */
  export type LimeroadProductAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * LimeroadProduct without action
   */
  export type LimeroadProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LimeroadProduct
     */
    select?: LimeroadProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LimeroadProduct
     */
    omit?: LimeroadProductOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const MyntraRootCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type MyntraRootCategoryScalarFieldEnum = (typeof MyntraRootCategoryScalarFieldEnum)[keyof typeof MyntraRootCategoryScalarFieldEnum]


  export const MyntraGroupCategoryScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    rootCategoryId: 'rootCategoryId',
    createdAt: 'createdAt'
  };

  export type MyntraGroupCategoryScalarFieldEnum = (typeof MyntraGroupCategoryScalarFieldEnum)[keyof typeof MyntraGroupCategoryScalarFieldEnum]


  export const MyntraCategoryScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    href: 'href',
    groupCategoryId: 'groupCategoryId',
    createdAt: 'createdAt'
  };

  export type MyntraCategoryScalarFieldEnum = (typeof MyntraCategoryScalarFieldEnum)[keyof typeof MyntraCategoryScalarFieldEnum]


  export const MyntraProductScalarFieldEnum: {
    id: 'id',
    productCode: 'productCode',
    href: 'href',
    brand: 'brand',
    title: 'title',
    rating: 'rating',
    ratingCount: 'ratingCount',
    size: 'size',
    SRP: 'SRP',
    MRP: 'MRP',
    images: 'images',
    productDetails: 'productDetails',
    sizeAndFit: 'sizeAndFit',
    materialAndCare: 'materialAndCare',
    specification: 'specification',
    seller: 'seller',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MyntraProductScalarFieldEnum = (typeof MyntraProductScalarFieldEnum)[keyof typeof MyntraProductScalarFieldEnum]


  export const ScrapeProgressScalarFieldEnum: {
    id: 'id',
    rootCategory: 'rootCategory',
    groupCategory: 'groupCategory',
    category: 'category',
    totalProducts: 'totalProducts',
    scrapedProducts: 'scrapedProducts',
    status: 'status',
    startedAt: 'startedAt',
    completedAt: 'completedAt'
  };

  export type ScrapeProgressScalarFieldEnum = (typeof ScrapeProgressScalarFieldEnum)[keyof typeof ScrapeProgressScalarFieldEnum]


  export const BlinkitProductScalarFieldEnum: {
    id: 'id',
    sku: 'sku',
    title: 'title',
    brand: 'brand',
    price: 'price',
    mrp: 'mrp',
    quantity: 'quantity',
    images: 'images',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlinkitProductScalarFieldEnum = (typeof BlinkitProductScalarFieldEnum)[keyof typeof BlinkitProductScalarFieldEnum]


  export const LimeroadProductScalarFieldEnum: {
    id: 'id',
    itemId: 'itemId',
    title: 'title',
    brand: 'brand',
    price: 'price',
    mrp: 'mrp',
    images: 'images',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LimeroadProductScalarFieldEnum = (typeof LimeroadProductScalarFieldEnum)[keyof typeof LimeroadProductScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MyntraRootCategoryWhereInput = {
    AND?: MyntraRootCategoryWhereInput | MyntraRootCategoryWhereInput[]
    OR?: MyntraRootCategoryWhereInput[]
    NOT?: MyntraRootCategoryWhereInput | MyntraRootCategoryWhereInput[]
    id?: StringFilter<"MyntraRootCategory"> | string
    name?: StringFilter<"MyntraRootCategory"> | string
    createdAt?: DateTimeFilter<"MyntraRootCategory"> | Date | string
    groups?: MyntraGroupCategoryListRelationFilter
  }

  export type MyntraRootCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    groups?: MyntraGroupCategoryOrderByRelationAggregateInput
  }

  export type MyntraRootCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MyntraRootCategoryWhereInput | MyntraRootCategoryWhereInput[]
    OR?: MyntraRootCategoryWhereInput[]
    NOT?: MyntraRootCategoryWhereInput | MyntraRootCategoryWhereInput[]
    createdAt?: DateTimeFilter<"MyntraRootCategory"> | Date | string
    groups?: MyntraGroupCategoryListRelationFilter
  }, "id" | "name">

  export type MyntraRootCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: MyntraRootCategoryCountOrderByAggregateInput
    _max?: MyntraRootCategoryMaxOrderByAggregateInput
    _min?: MyntraRootCategoryMinOrderByAggregateInput
  }

  export type MyntraRootCategoryScalarWhereWithAggregatesInput = {
    AND?: MyntraRootCategoryScalarWhereWithAggregatesInput | MyntraRootCategoryScalarWhereWithAggregatesInput[]
    OR?: MyntraRootCategoryScalarWhereWithAggregatesInput[]
    NOT?: MyntraRootCategoryScalarWhereWithAggregatesInput | MyntraRootCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MyntraRootCategory"> | string
    name?: StringWithAggregatesFilter<"MyntraRootCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MyntraRootCategory"> | Date | string
  }

  export type MyntraGroupCategoryWhereInput = {
    AND?: MyntraGroupCategoryWhereInput | MyntraGroupCategoryWhereInput[]
    OR?: MyntraGroupCategoryWhereInput[]
    NOT?: MyntraGroupCategoryWhereInput | MyntraGroupCategoryWhereInput[]
    id?: StringFilter<"MyntraGroupCategory"> | string
    slug?: StringFilter<"MyntraGroupCategory"> | string
    title?: StringFilter<"MyntraGroupCategory"> | string
    rootCategoryId?: StringFilter<"MyntraGroupCategory"> | string
    createdAt?: DateTimeFilter<"MyntraGroupCategory"> | Date | string
    rootCategory?: XOR<MyntraRootCategoryScalarRelationFilter, MyntraRootCategoryWhereInput>
    categories?: MyntraCategoryListRelationFilter
  }

  export type MyntraGroupCategoryOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    rootCategoryId?: SortOrder
    createdAt?: SortOrder
    rootCategory?: MyntraRootCategoryOrderByWithRelationInput
    categories?: MyntraCategoryOrderByRelationAggregateInput
  }

  export type MyntraGroupCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug_rootCategoryId?: MyntraGroupCategorySlugRootCategoryIdCompoundUniqueInput
    AND?: MyntraGroupCategoryWhereInput | MyntraGroupCategoryWhereInput[]
    OR?: MyntraGroupCategoryWhereInput[]
    NOT?: MyntraGroupCategoryWhereInput | MyntraGroupCategoryWhereInput[]
    slug?: StringFilter<"MyntraGroupCategory"> | string
    title?: StringFilter<"MyntraGroupCategory"> | string
    rootCategoryId?: StringFilter<"MyntraGroupCategory"> | string
    createdAt?: DateTimeFilter<"MyntraGroupCategory"> | Date | string
    rootCategory?: XOR<MyntraRootCategoryScalarRelationFilter, MyntraRootCategoryWhereInput>
    categories?: MyntraCategoryListRelationFilter
  }, "id" | "slug_rootCategoryId">

  export type MyntraGroupCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    rootCategoryId?: SortOrder
    createdAt?: SortOrder
    _count?: MyntraGroupCategoryCountOrderByAggregateInput
    _max?: MyntraGroupCategoryMaxOrderByAggregateInput
    _min?: MyntraGroupCategoryMinOrderByAggregateInput
  }

  export type MyntraGroupCategoryScalarWhereWithAggregatesInput = {
    AND?: MyntraGroupCategoryScalarWhereWithAggregatesInput | MyntraGroupCategoryScalarWhereWithAggregatesInput[]
    OR?: MyntraGroupCategoryScalarWhereWithAggregatesInput[]
    NOT?: MyntraGroupCategoryScalarWhereWithAggregatesInput | MyntraGroupCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MyntraGroupCategory"> | string
    slug?: StringWithAggregatesFilter<"MyntraGroupCategory"> | string
    title?: StringWithAggregatesFilter<"MyntraGroupCategory"> | string
    rootCategoryId?: StringWithAggregatesFilter<"MyntraGroupCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MyntraGroupCategory"> | Date | string
  }

  export type MyntraCategoryWhereInput = {
    AND?: MyntraCategoryWhereInput | MyntraCategoryWhereInput[]
    OR?: MyntraCategoryWhereInput[]
    NOT?: MyntraCategoryWhereInput | MyntraCategoryWhereInput[]
    id?: StringFilter<"MyntraCategory"> | string
    slug?: StringFilter<"MyntraCategory"> | string
    title?: StringFilter<"MyntraCategory"> | string
    href?: StringFilter<"MyntraCategory"> | string
    groupCategoryId?: StringFilter<"MyntraCategory"> | string
    createdAt?: DateTimeFilter<"MyntraCategory"> | Date | string
    groupCategory?: XOR<MyntraGroupCategoryScalarRelationFilter, MyntraGroupCategoryWhereInput>
    products?: MyntraProductListRelationFilter
  }

  export type MyntraCategoryOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    href?: SortOrder
    groupCategoryId?: SortOrder
    createdAt?: SortOrder
    groupCategory?: MyntraGroupCategoryOrderByWithRelationInput
    products?: MyntraProductOrderByRelationAggregateInput
  }

  export type MyntraCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug_groupCategoryId?: MyntraCategorySlugGroupCategoryIdCompoundUniqueInput
    AND?: MyntraCategoryWhereInput | MyntraCategoryWhereInput[]
    OR?: MyntraCategoryWhereInput[]
    NOT?: MyntraCategoryWhereInput | MyntraCategoryWhereInput[]
    slug?: StringFilter<"MyntraCategory"> | string
    title?: StringFilter<"MyntraCategory"> | string
    href?: StringFilter<"MyntraCategory"> | string
    groupCategoryId?: StringFilter<"MyntraCategory"> | string
    createdAt?: DateTimeFilter<"MyntraCategory"> | Date | string
    groupCategory?: XOR<MyntraGroupCategoryScalarRelationFilter, MyntraGroupCategoryWhereInput>
    products?: MyntraProductListRelationFilter
  }, "id" | "slug_groupCategoryId">

  export type MyntraCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    href?: SortOrder
    groupCategoryId?: SortOrder
    createdAt?: SortOrder
    _count?: MyntraCategoryCountOrderByAggregateInput
    _max?: MyntraCategoryMaxOrderByAggregateInput
    _min?: MyntraCategoryMinOrderByAggregateInput
  }

  export type MyntraCategoryScalarWhereWithAggregatesInput = {
    AND?: MyntraCategoryScalarWhereWithAggregatesInput | MyntraCategoryScalarWhereWithAggregatesInput[]
    OR?: MyntraCategoryScalarWhereWithAggregatesInput[]
    NOT?: MyntraCategoryScalarWhereWithAggregatesInput | MyntraCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MyntraCategory"> | string
    slug?: StringWithAggregatesFilter<"MyntraCategory"> | string
    title?: StringWithAggregatesFilter<"MyntraCategory"> | string
    href?: StringWithAggregatesFilter<"MyntraCategory"> | string
    groupCategoryId?: StringWithAggregatesFilter<"MyntraCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MyntraCategory"> | Date | string
  }

  export type MyntraProductWhereInput = {
    AND?: MyntraProductWhereInput | MyntraProductWhereInput[]
    OR?: MyntraProductWhereInput[]
    NOT?: MyntraProductWhereInput | MyntraProductWhereInput[]
    id?: StringFilter<"MyntraProduct"> | string
    productCode?: StringFilter<"MyntraProduct"> | string
    href?: StringFilter<"MyntraProduct"> | string
    brand?: StringFilter<"MyntraProduct"> | string
    title?: StringFilter<"MyntraProduct"> | string
    rating?: StringNullableFilter<"MyntraProduct"> | string | null
    ratingCount?: StringNullableFilter<"MyntraProduct"> | string | null
    size?: StringNullableFilter<"MyntraProduct"> | string | null
    SRP?: StringNullableFilter<"MyntraProduct"> | string | null
    MRP?: StringNullableFilter<"MyntraProduct"> | string | null
    images?: StringNullableListFilter<"MyntraProduct">
    productDetails?: StringNullableListFilter<"MyntraProduct">
    sizeAndFit?: StringNullableListFilter<"MyntraProduct">
    materialAndCare?: StringNullableListFilter<"MyntraProduct">
    specification?: StringNullableListFilter<"MyntraProduct">
    seller?: StringNullableListFilter<"MyntraProduct">
    categoryId?: StringFilter<"MyntraProduct"> | string
    createdAt?: DateTimeFilter<"MyntraProduct"> | Date | string
    updatedAt?: DateTimeFilter<"MyntraProduct"> | Date | string
    category?: XOR<MyntraCategoryScalarRelationFilter, MyntraCategoryWhereInput>
  }

  export type MyntraProductOrderByWithRelationInput = {
    id?: SortOrder
    productCode?: SortOrder
    href?: SortOrder
    brand?: SortOrder
    title?: SortOrder
    rating?: SortOrder
    ratingCount?: SortOrder
    size?: SortOrder
    SRP?: SortOrder
    MRP?: SortOrder
    images?: SortOrder
    productDetails?: SortOrder
    sizeAndFit?: SortOrder
    materialAndCare?: SortOrder
    specification?: SortOrder
    seller?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: MyntraCategoryOrderByWithRelationInput
  }

  export type MyntraProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productCode?: string
    AND?: MyntraProductWhereInput | MyntraProductWhereInput[]
    OR?: MyntraProductWhereInput[]
    NOT?: MyntraProductWhereInput | MyntraProductWhereInput[]
    href?: StringFilter<"MyntraProduct"> | string
    brand?: StringFilter<"MyntraProduct"> | string
    title?: StringFilter<"MyntraProduct"> | string
    rating?: StringNullableFilter<"MyntraProduct"> | string | null
    ratingCount?: StringNullableFilter<"MyntraProduct"> | string | null
    size?: StringNullableFilter<"MyntraProduct"> | string | null
    SRP?: StringNullableFilter<"MyntraProduct"> | string | null
    MRP?: StringNullableFilter<"MyntraProduct"> | string | null
    images?: StringNullableListFilter<"MyntraProduct">
    productDetails?: StringNullableListFilter<"MyntraProduct">
    sizeAndFit?: StringNullableListFilter<"MyntraProduct">
    materialAndCare?: StringNullableListFilter<"MyntraProduct">
    specification?: StringNullableListFilter<"MyntraProduct">
    seller?: StringNullableListFilter<"MyntraProduct">
    categoryId?: StringFilter<"MyntraProduct"> | string
    createdAt?: DateTimeFilter<"MyntraProduct"> | Date | string
    updatedAt?: DateTimeFilter<"MyntraProduct"> | Date | string
    category?: XOR<MyntraCategoryScalarRelationFilter, MyntraCategoryWhereInput>
  }, "id" | "productCode">

  export type MyntraProductOrderByWithAggregationInput = {
    id?: SortOrder
    productCode?: SortOrder
    href?: SortOrder
    brand?: SortOrder
    title?: SortOrder
    rating?: SortOrder
    ratingCount?: SortOrder
    size?: SortOrder
    SRP?: SortOrder
    MRP?: SortOrder
    images?: SortOrder
    productDetails?: SortOrder
    sizeAndFit?: SortOrder
    materialAndCare?: SortOrder
    specification?: SortOrder
    seller?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MyntraProductCountOrderByAggregateInput
    _max?: MyntraProductMaxOrderByAggregateInput
    _min?: MyntraProductMinOrderByAggregateInput
  }

  export type MyntraProductScalarWhereWithAggregatesInput = {
    AND?: MyntraProductScalarWhereWithAggregatesInput | MyntraProductScalarWhereWithAggregatesInput[]
    OR?: MyntraProductScalarWhereWithAggregatesInput[]
    NOT?: MyntraProductScalarWhereWithAggregatesInput | MyntraProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MyntraProduct"> | string
    productCode?: StringWithAggregatesFilter<"MyntraProduct"> | string
    href?: StringWithAggregatesFilter<"MyntraProduct"> | string
    brand?: StringWithAggregatesFilter<"MyntraProduct"> | string
    title?: StringWithAggregatesFilter<"MyntraProduct"> | string
    rating?: StringNullableWithAggregatesFilter<"MyntraProduct"> | string | null
    ratingCount?: StringNullableWithAggregatesFilter<"MyntraProduct"> | string | null
    size?: StringNullableWithAggregatesFilter<"MyntraProduct"> | string | null
    SRP?: StringNullableWithAggregatesFilter<"MyntraProduct"> | string | null
    MRP?: StringNullableWithAggregatesFilter<"MyntraProduct"> | string | null
    images?: StringNullableListFilter<"MyntraProduct">
    productDetails?: StringNullableListFilter<"MyntraProduct">
    sizeAndFit?: StringNullableListFilter<"MyntraProduct">
    materialAndCare?: StringNullableListFilter<"MyntraProduct">
    specification?: StringNullableListFilter<"MyntraProduct">
    seller?: StringNullableListFilter<"MyntraProduct">
    categoryId?: StringWithAggregatesFilter<"MyntraProduct"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MyntraProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MyntraProduct"> | Date | string
  }

  export type ScrapeProgressWhereInput = {
    AND?: ScrapeProgressWhereInput | ScrapeProgressWhereInput[]
    OR?: ScrapeProgressWhereInput[]
    NOT?: ScrapeProgressWhereInput | ScrapeProgressWhereInput[]
    id?: StringFilter<"ScrapeProgress"> | string
    rootCategory?: StringFilter<"ScrapeProgress"> | string
    groupCategory?: StringFilter<"ScrapeProgress"> | string
    category?: StringFilter<"ScrapeProgress"> | string
    totalProducts?: IntFilter<"ScrapeProgress"> | number
    scrapedProducts?: IntFilter<"ScrapeProgress"> | number
    status?: StringFilter<"ScrapeProgress"> | string
    startedAt?: DateTimeNullableFilter<"ScrapeProgress"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ScrapeProgress"> | Date | string | null
  }

  export type ScrapeProgressOrderByWithRelationInput = {
    id?: SortOrder
    rootCategory?: SortOrder
    groupCategory?: SortOrder
    category?: SortOrder
    totalProducts?: SortOrder
    scrapedProducts?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ScrapeProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScrapeProgressWhereInput | ScrapeProgressWhereInput[]
    OR?: ScrapeProgressWhereInput[]
    NOT?: ScrapeProgressWhereInput | ScrapeProgressWhereInput[]
    rootCategory?: StringFilter<"ScrapeProgress"> | string
    groupCategory?: StringFilter<"ScrapeProgress"> | string
    category?: StringFilter<"ScrapeProgress"> | string
    totalProducts?: IntFilter<"ScrapeProgress"> | number
    scrapedProducts?: IntFilter<"ScrapeProgress"> | number
    status?: StringFilter<"ScrapeProgress"> | string
    startedAt?: DateTimeNullableFilter<"ScrapeProgress"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ScrapeProgress"> | Date | string | null
  }, "id">

  export type ScrapeProgressOrderByWithAggregationInput = {
    id?: SortOrder
    rootCategory?: SortOrder
    groupCategory?: SortOrder
    category?: SortOrder
    totalProducts?: SortOrder
    scrapedProducts?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    _count?: ScrapeProgressCountOrderByAggregateInput
    _avg?: ScrapeProgressAvgOrderByAggregateInput
    _max?: ScrapeProgressMaxOrderByAggregateInput
    _min?: ScrapeProgressMinOrderByAggregateInput
    _sum?: ScrapeProgressSumOrderByAggregateInput
  }

  export type ScrapeProgressScalarWhereWithAggregatesInput = {
    AND?: ScrapeProgressScalarWhereWithAggregatesInput | ScrapeProgressScalarWhereWithAggregatesInput[]
    OR?: ScrapeProgressScalarWhereWithAggregatesInput[]
    NOT?: ScrapeProgressScalarWhereWithAggregatesInput | ScrapeProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScrapeProgress"> | string
    rootCategory?: StringWithAggregatesFilter<"ScrapeProgress"> | string
    groupCategory?: StringWithAggregatesFilter<"ScrapeProgress"> | string
    category?: StringWithAggregatesFilter<"ScrapeProgress"> | string
    totalProducts?: IntWithAggregatesFilter<"ScrapeProgress"> | number
    scrapedProducts?: IntWithAggregatesFilter<"ScrapeProgress"> | number
    status?: StringWithAggregatesFilter<"ScrapeProgress"> | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"ScrapeProgress"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"ScrapeProgress"> | Date | string | null
  }

  export type BlinkitProductWhereInput = {
    AND?: BlinkitProductWhereInput | BlinkitProductWhereInput[]
    OR?: BlinkitProductWhereInput[]
    NOT?: BlinkitProductWhereInput | BlinkitProductWhereInput[]
    id?: StringFilter<"BlinkitProduct"> | string
    sku?: StringFilter<"BlinkitProduct"> | string
    title?: StringFilter<"BlinkitProduct"> | string
    brand?: StringNullableFilter<"BlinkitProduct"> | string | null
    price?: FloatFilter<"BlinkitProduct"> | number
    mrp?: FloatNullableFilter<"BlinkitProduct"> | number | null
    quantity?: StringNullableFilter<"BlinkitProduct"> | string | null
    images?: StringNullableListFilter<"BlinkitProduct">
    category?: StringFilter<"BlinkitProduct"> | string
    createdAt?: DateTimeFilter<"BlinkitProduct"> | Date | string
    updatedAt?: DateTimeFilter<"BlinkitProduct"> | Date | string
  }

  export type BlinkitProductOrderByWithRelationInput = {
    id?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    mrp?: SortOrder
    quantity?: SortOrder
    images?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlinkitProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sku?: string
    AND?: BlinkitProductWhereInput | BlinkitProductWhereInput[]
    OR?: BlinkitProductWhereInput[]
    NOT?: BlinkitProductWhereInput | BlinkitProductWhereInput[]
    title?: StringFilter<"BlinkitProduct"> | string
    brand?: StringNullableFilter<"BlinkitProduct"> | string | null
    price?: FloatFilter<"BlinkitProduct"> | number
    mrp?: FloatNullableFilter<"BlinkitProduct"> | number | null
    quantity?: StringNullableFilter<"BlinkitProduct"> | string | null
    images?: StringNullableListFilter<"BlinkitProduct">
    category?: StringFilter<"BlinkitProduct"> | string
    createdAt?: DateTimeFilter<"BlinkitProduct"> | Date | string
    updatedAt?: DateTimeFilter<"BlinkitProduct"> | Date | string
  }, "id" | "sku">

  export type BlinkitProductOrderByWithAggregationInput = {
    id?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    mrp?: SortOrder
    quantity?: SortOrder
    images?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlinkitProductCountOrderByAggregateInput
    _avg?: BlinkitProductAvgOrderByAggregateInput
    _max?: BlinkitProductMaxOrderByAggregateInput
    _min?: BlinkitProductMinOrderByAggregateInput
    _sum?: BlinkitProductSumOrderByAggregateInput
  }

  export type BlinkitProductScalarWhereWithAggregatesInput = {
    AND?: BlinkitProductScalarWhereWithAggregatesInput | BlinkitProductScalarWhereWithAggregatesInput[]
    OR?: BlinkitProductScalarWhereWithAggregatesInput[]
    NOT?: BlinkitProductScalarWhereWithAggregatesInput | BlinkitProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlinkitProduct"> | string
    sku?: StringWithAggregatesFilter<"BlinkitProduct"> | string
    title?: StringWithAggregatesFilter<"BlinkitProduct"> | string
    brand?: StringNullableWithAggregatesFilter<"BlinkitProduct"> | string | null
    price?: FloatWithAggregatesFilter<"BlinkitProduct"> | number
    mrp?: FloatNullableWithAggregatesFilter<"BlinkitProduct"> | number | null
    quantity?: StringNullableWithAggregatesFilter<"BlinkitProduct"> | string | null
    images?: StringNullableListFilter<"BlinkitProduct">
    category?: StringWithAggregatesFilter<"BlinkitProduct"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlinkitProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlinkitProduct"> | Date | string
  }

  export type LimeroadProductWhereInput = {
    AND?: LimeroadProductWhereInput | LimeroadProductWhereInput[]
    OR?: LimeroadProductWhereInput[]
    NOT?: LimeroadProductWhereInput | LimeroadProductWhereInput[]
    id?: StringFilter<"LimeroadProduct"> | string
    itemId?: StringFilter<"LimeroadProduct"> | string
    title?: StringFilter<"LimeroadProduct"> | string
    brand?: StringNullableFilter<"LimeroadProduct"> | string | null
    price?: StringFilter<"LimeroadProduct"> | string
    mrp?: StringNullableFilter<"LimeroadProduct"> | string | null
    images?: StringNullableListFilter<"LimeroadProduct">
    category?: StringFilter<"LimeroadProduct"> | string
    createdAt?: DateTimeFilter<"LimeroadProduct"> | Date | string
    updatedAt?: DateTimeFilter<"LimeroadProduct"> | Date | string
  }

  export type LimeroadProductOrderByWithRelationInput = {
    id?: SortOrder
    itemId?: SortOrder
    title?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    mrp?: SortOrder
    images?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LimeroadProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    itemId?: string
    AND?: LimeroadProductWhereInput | LimeroadProductWhereInput[]
    OR?: LimeroadProductWhereInput[]
    NOT?: LimeroadProductWhereInput | LimeroadProductWhereInput[]
    title?: StringFilter<"LimeroadProduct"> | string
    brand?: StringNullableFilter<"LimeroadProduct"> | string | null
    price?: StringFilter<"LimeroadProduct"> | string
    mrp?: StringNullableFilter<"LimeroadProduct"> | string | null
    images?: StringNullableListFilter<"LimeroadProduct">
    category?: StringFilter<"LimeroadProduct"> | string
    createdAt?: DateTimeFilter<"LimeroadProduct"> | Date | string
    updatedAt?: DateTimeFilter<"LimeroadProduct"> | Date | string
  }, "id" | "itemId">

  export type LimeroadProductOrderByWithAggregationInput = {
    id?: SortOrder
    itemId?: SortOrder
    title?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    mrp?: SortOrder
    images?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LimeroadProductCountOrderByAggregateInput
    _max?: LimeroadProductMaxOrderByAggregateInput
    _min?: LimeroadProductMinOrderByAggregateInput
  }

  export type LimeroadProductScalarWhereWithAggregatesInput = {
    AND?: LimeroadProductScalarWhereWithAggregatesInput | LimeroadProductScalarWhereWithAggregatesInput[]
    OR?: LimeroadProductScalarWhereWithAggregatesInput[]
    NOT?: LimeroadProductScalarWhereWithAggregatesInput | LimeroadProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LimeroadProduct"> | string
    itemId?: StringWithAggregatesFilter<"LimeroadProduct"> | string
    title?: StringWithAggregatesFilter<"LimeroadProduct"> | string
    brand?: StringNullableWithAggregatesFilter<"LimeroadProduct"> | string | null
    price?: StringWithAggregatesFilter<"LimeroadProduct"> | string
    mrp?: StringNullableWithAggregatesFilter<"LimeroadProduct"> | string | null
    images?: StringNullableListFilter<"LimeroadProduct">
    category?: StringWithAggregatesFilter<"LimeroadProduct"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LimeroadProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LimeroadProduct"> | Date | string
  }

  export type MyntraRootCategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    groups?: MyntraGroupCategoryCreateNestedManyWithoutRootCategoryInput
  }

  export type MyntraRootCategoryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    groups?: MyntraGroupCategoryUncheckedCreateNestedManyWithoutRootCategoryInput
  }

  export type MyntraRootCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: MyntraGroupCategoryUpdateManyWithoutRootCategoryNestedInput
  }

  export type MyntraRootCategoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: MyntraGroupCategoryUncheckedUpdateManyWithoutRootCategoryNestedInput
  }

  export type MyntraRootCategoryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type MyntraRootCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyntraRootCategoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyntraGroupCategoryCreateInput = {
    id?: string
    slug: string
    title: string
    createdAt?: Date | string
    rootCategory: MyntraRootCategoryCreateNestedOneWithoutGroupsInput
    categories?: MyntraCategoryCreateNestedManyWithoutGroupCategoryInput
  }

  export type MyntraGroupCategoryUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    rootCategoryId: string
    createdAt?: Date | string
    categories?: MyntraCategoryUncheckedCreateNestedManyWithoutGroupCategoryInput
  }

  export type MyntraGroupCategoryUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rootCategory?: MyntraRootCategoryUpdateOneRequiredWithoutGroupsNestedInput
    categories?: MyntraCategoryUpdateManyWithoutGroupCategoryNestedInput
  }

  export type MyntraGroupCategoryUncheckedUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rootCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: MyntraCategoryUncheckedUpdateManyWithoutGroupCategoryNestedInput
  }

  export type MyntraGroupCategoryCreateManyInput = {
    id?: string
    slug: string
    title: string
    rootCategoryId: string
    createdAt?: Date | string
  }

  export type MyntraGroupCategoryUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyntraGroupCategoryUncheckedUpdateManyInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rootCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyntraCategoryCreateInput = {
    id?: string
    slug: string
    title: string
    href: string
    createdAt?: Date | string
    groupCategory: MyntraGroupCategoryCreateNestedOneWithoutCategoriesInput
    products?: MyntraProductCreateNestedManyWithoutCategoryInput
  }

  export type MyntraCategoryUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    href: string
    groupCategoryId: string
    createdAt?: Date | string
    products?: MyntraProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type MyntraCategoryUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupCategory?: MyntraGroupCategoryUpdateOneRequiredWithoutCategoriesNestedInput
    products?: MyntraProductUpdateManyWithoutCategoryNestedInput
  }

  export type MyntraCategoryUncheckedUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    groupCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: MyntraProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MyntraCategoryCreateManyInput = {
    id?: string
    slug: string
    title: string
    href: string
    groupCategoryId: string
    createdAt?: Date | string
  }

  export type MyntraCategoryUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyntraCategoryUncheckedUpdateManyInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    groupCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyntraProductCreateInput = {
    id?: string
    productCode: string
    href: string
    brand: string
    title: string
    rating?: string | null
    ratingCount?: string | null
    size?: string | null
    SRP?: string | null
    MRP?: string | null
    images?: MyntraProductCreateimagesInput | string[]
    productDetails?: MyntraProductCreateproductDetailsInput | string[]
    sizeAndFit?: MyntraProductCreatesizeAndFitInput | string[]
    materialAndCare?: MyntraProductCreatematerialAndCareInput | string[]
    specification?: MyntraProductCreatespecificationInput | string[]
    seller?: MyntraProductCreatesellerInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MyntraCategoryCreateNestedOneWithoutProductsInput
  }

  export type MyntraProductUncheckedCreateInput = {
    id?: string
    productCode: string
    href: string
    brand: string
    title: string
    rating?: string | null
    ratingCount?: string | null
    size?: string | null
    SRP?: string | null
    MRP?: string | null
    images?: MyntraProductCreateimagesInput | string[]
    productDetails?: MyntraProductCreateproductDetailsInput | string[]
    sizeAndFit?: MyntraProductCreatesizeAndFitInput | string[]
    materialAndCare?: MyntraProductCreatematerialAndCareInput | string[]
    specification?: MyntraProductCreatespecificationInput | string[]
    seller?: MyntraProductCreatesellerInput | string[]
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MyntraProductUpdateInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    ratingCount?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    SRP?: NullableStringFieldUpdateOperationsInput | string | null
    MRP?: NullableStringFieldUpdateOperationsInput | string | null
    images?: MyntraProductUpdateimagesInput | string[]
    productDetails?: MyntraProductUpdateproductDetailsInput | string[]
    sizeAndFit?: MyntraProductUpdatesizeAndFitInput | string[]
    materialAndCare?: MyntraProductUpdatematerialAndCareInput | string[]
    specification?: MyntraProductUpdatespecificationInput | string[]
    seller?: MyntraProductUpdatesellerInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MyntraCategoryUpdateOneRequiredWithoutProductsNestedInput
  }

  export type MyntraProductUncheckedUpdateInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    ratingCount?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    SRP?: NullableStringFieldUpdateOperationsInput | string | null
    MRP?: NullableStringFieldUpdateOperationsInput | string | null
    images?: MyntraProductUpdateimagesInput | string[]
    productDetails?: MyntraProductUpdateproductDetailsInput | string[]
    sizeAndFit?: MyntraProductUpdatesizeAndFitInput | string[]
    materialAndCare?: MyntraProductUpdatematerialAndCareInput | string[]
    specification?: MyntraProductUpdatespecificationInput | string[]
    seller?: MyntraProductUpdatesellerInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyntraProductCreateManyInput = {
    id?: string
    productCode: string
    href: string
    brand: string
    title: string
    rating?: string | null
    ratingCount?: string | null
    size?: string | null
    SRP?: string | null
    MRP?: string | null
    images?: MyntraProductCreateimagesInput | string[]
    productDetails?: MyntraProductCreateproductDetailsInput | string[]
    sizeAndFit?: MyntraProductCreatesizeAndFitInput | string[]
    materialAndCare?: MyntraProductCreatematerialAndCareInput | string[]
    specification?: MyntraProductCreatespecificationInput | string[]
    seller?: MyntraProductCreatesellerInput | string[]
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MyntraProductUpdateManyMutationInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    ratingCount?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    SRP?: NullableStringFieldUpdateOperationsInput | string | null
    MRP?: NullableStringFieldUpdateOperationsInput | string | null
    images?: MyntraProductUpdateimagesInput | string[]
    productDetails?: MyntraProductUpdateproductDetailsInput | string[]
    sizeAndFit?: MyntraProductUpdatesizeAndFitInput | string[]
    materialAndCare?: MyntraProductUpdatematerialAndCareInput | string[]
    specification?: MyntraProductUpdatespecificationInput | string[]
    seller?: MyntraProductUpdatesellerInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyntraProductUncheckedUpdateManyInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    ratingCount?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    SRP?: NullableStringFieldUpdateOperationsInput | string | null
    MRP?: NullableStringFieldUpdateOperationsInput | string | null
    images?: MyntraProductUpdateimagesInput | string[]
    productDetails?: MyntraProductUpdateproductDetailsInput | string[]
    sizeAndFit?: MyntraProductUpdatesizeAndFitInput | string[]
    materialAndCare?: MyntraProductUpdatematerialAndCareInput | string[]
    specification?: MyntraProductUpdatespecificationInput | string[]
    seller?: MyntraProductUpdatesellerInput | string[]
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeProgressCreateInput = {
    id?: string
    rootCategory: string
    groupCategory: string
    category: string
    totalProducts?: number
    scrapedProducts?: number
    status: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type ScrapeProgressUncheckedCreateInput = {
    id?: string
    rootCategory: string
    groupCategory: string
    category: string
    totalProducts?: number
    scrapedProducts?: number
    status: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type ScrapeProgressUpdateInput = {
    rootCategory?: StringFieldUpdateOperationsInput | string
    groupCategory?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    totalProducts?: IntFieldUpdateOperationsInput | number
    scrapedProducts?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScrapeProgressUncheckedUpdateInput = {
    rootCategory?: StringFieldUpdateOperationsInput | string
    groupCategory?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    totalProducts?: IntFieldUpdateOperationsInput | number
    scrapedProducts?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScrapeProgressCreateManyInput = {
    id?: string
    rootCategory: string
    groupCategory: string
    category: string
    totalProducts?: number
    scrapedProducts?: number
    status: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type ScrapeProgressUpdateManyMutationInput = {
    rootCategory?: StringFieldUpdateOperationsInput | string
    groupCategory?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    totalProducts?: IntFieldUpdateOperationsInput | number
    scrapedProducts?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScrapeProgressUncheckedUpdateManyInput = {
    rootCategory?: StringFieldUpdateOperationsInput | string
    groupCategory?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    totalProducts?: IntFieldUpdateOperationsInput | number
    scrapedProducts?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BlinkitProductCreateInput = {
    id?: string
    sku: string
    title: string
    brand?: string | null
    price: number
    mrp?: number | null
    quantity?: string | null
    images?: BlinkitProductCreateimagesInput | string[]
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlinkitProductUncheckedCreateInput = {
    id?: string
    sku: string
    title: string
    brand?: string | null
    price: number
    mrp?: number | null
    quantity?: string | null
    images?: BlinkitProductCreateimagesInput | string[]
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlinkitProductUpdateInput = {
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    mrp?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    images?: BlinkitProductUpdateimagesInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlinkitProductUncheckedUpdateInput = {
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    mrp?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    images?: BlinkitProductUpdateimagesInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlinkitProductCreateManyInput = {
    id?: string
    sku: string
    title: string
    brand?: string | null
    price: number
    mrp?: number | null
    quantity?: string | null
    images?: BlinkitProductCreateimagesInput | string[]
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlinkitProductUpdateManyMutationInput = {
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    mrp?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    images?: BlinkitProductUpdateimagesInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlinkitProductUncheckedUpdateManyInput = {
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    mrp?: NullableFloatFieldUpdateOperationsInput | number | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    images?: BlinkitProductUpdateimagesInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LimeroadProductCreateInput = {
    id?: string
    itemId: string
    title: string
    brand?: string | null
    price: string
    mrp?: string | null
    images?: LimeroadProductCreateimagesInput | string[]
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LimeroadProductUncheckedCreateInput = {
    id?: string
    itemId: string
    title: string
    brand?: string | null
    price: string
    mrp?: string | null
    images?: LimeroadProductCreateimagesInput | string[]
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LimeroadProductUpdateInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    mrp?: NullableStringFieldUpdateOperationsInput | string | null
    images?: LimeroadProductUpdateimagesInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LimeroadProductUncheckedUpdateInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    mrp?: NullableStringFieldUpdateOperationsInput | string | null
    images?: LimeroadProductUpdateimagesInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LimeroadProductCreateManyInput = {
    id?: string
    itemId: string
    title: string
    brand?: string | null
    price: string
    mrp?: string | null
    images?: LimeroadProductCreateimagesInput | string[]
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LimeroadProductUpdateManyMutationInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    mrp?: NullableStringFieldUpdateOperationsInput | string | null
    images?: LimeroadProductUpdateimagesInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LimeroadProductUncheckedUpdateManyInput = {
    itemId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: StringFieldUpdateOperationsInput | string
    mrp?: NullableStringFieldUpdateOperationsInput | string | null
    images?: LimeroadProductUpdateimagesInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MyntraGroupCategoryListRelationFilter = {
    every?: MyntraGroupCategoryWhereInput
    some?: MyntraGroupCategoryWhereInput
    none?: MyntraGroupCategoryWhereInput
  }

  export type MyntraGroupCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MyntraRootCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type MyntraRootCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type MyntraRootCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MyntraRootCategoryScalarRelationFilter = {
    is?: MyntraRootCategoryWhereInput
    isNot?: MyntraRootCategoryWhereInput
  }

  export type MyntraCategoryListRelationFilter = {
    every?: MyntraCategoryWhereInput
    some?: MyntraCategoryWhereInput
    none?: MyntraCategoryWhereInput
  }

  export type MyntraCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MyntraGroupCategorySlugRootCategoryIdCompoundUniqueInput = {
    slug: string
    rootCategoryId: string
  }

  export type MyntraGroupCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    rootCategoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type MyntraGroupCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    rootCategoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type MyntraGroupCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    rootCategoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type MyntraGroupCategoryScalarRelationFilter = {
    is?: MyntraGroupCategoryWhereInput
    isNot?: MyntraGroupCategoryWhereInput
  }

  export type MyntraProductListRelationFilter = {
    every?: MyntraProductWhereInput
    some?: MyntraProductWhereInput
    none?: MyntraProductWhereInput
  }

  export type MyntraProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MyntraCategorySlugGroupCategoryIdCompoundUniqueInput = {
    slug: string
    groupCategoryId: string
  }

  export type MyntraCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    href?: SortOrder
    groupCategoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type MyntraCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    href?: SortOrder
    groupCategoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type MyntraCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    href?: SortOrder
    groupCategoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MyntraCategoryScalarRelationFilter = {
    is?: MyntraCategoryWhereInput
    isNot?: MyntraCategoryWhereInput
  }

  export type MyntraProductCountOrderByAggregateInput = {
    id?: SortOrder
    productCode?: SortOrder
    href?: SortOrder
    brand?: SortOrder
    title?: SortOrder
    rating?: SortOrder
    ratingCount?: SortOrder
    size?: SortOrder
    SRP?: SortOrder
    MRP?: SortOrder
    images?: SortOrder
    productDetails?: SortOrder
    sizeAndFit?: SortOrder
    materialAndCare?: SortOrder
    specification?: SortOrder
    seller?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MyntraProductMaxOrderByAggregateInput = {
    id?: SortOrder
    productCode?: SortOrder
    href?: SortOrder
    brand?: SortOrder
    title?: SortOrder
    rating?: SortOrder
    ratingCount?: SortOrder
    size?: SortOrder
    SRP?: SortOrder
    MRP?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MyntraProductMinOrderByAggregateInput = {
    id?: SortOrder
    productCode?: SortOrder
    href?: SortOrder
    brand?: SortOrder
    title?: SortOrder
    rating?: SortOrder
    ratingCount?: SortOrder
    size?: SortOrder
    SRP?: SortOrder
    MRP?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type ScrapeProgressCountOrderByAggregateInput = {
    id?: SortOrder
    rootCategory?: SortOrder
    groupCategory?: SortOrder
    category?: SortOrder
    totalProducts?: SortOrder
    scrapedProducts?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ScrapeProgressAvgOrderByAggregateInput = {
    totalProducts?: SortOrder
    scrapedProducts?: SortOrder
  }

  export type ScrapeProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    rootCategory?: SortOrder
    groupCategory?: SortOrder
    category?: SortOrder
    totalProducts?: SortOrder
    scrapedProducts?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ScrapeProgressMinOrderByAggregateInput = {
    id?: SortOrder
    rootCategory?: SortOrder
    groupCategory?: SortOrder
    category?: SortOrder
    totalProducts?: SortOrder
    scrapedProducts?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type ScrapeProgressSumOrderByAggregateInput = {
    totalProducts?: SortOrder
    scrapedProducts?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type BlinkitProductCountOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    mrp?: SortOrder
    quantity?: SortOrder
    images?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlinkitProductAvgOrderByAggregateInput = {
    price?: SortOrder
    mrp?: SortOrder
  }

  export type BlinkitProductMaxOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    mrp?: SortOrder
    quantity?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlinkitProductMinOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    mrp?: SortOrder
    quantity?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlinkitProductSumOrderByAggregateInput = {
    price?: SortOrder
    mrp?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type LimeroadProductCountOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    title?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    mrp?: SortOrder
    images?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LimeroadProductMaxOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    title?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    mrp?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LimeroadProductMinOrderByAggregateInput = {
    id?: SortOrder
    itemId?: SortOrder
    title?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    mrp?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MyntraGroupCategoryCreateNestedManyWithoutRootCategoryInput = {
    create?: XOR<MyntraGroupCategoryCreateWithoutRootCategoryInput, MyntraGroupCategoryUncheckedCreateWithoutRootCategoryInput> | MyntraGroupCategoryCreateWithoutRootCategoryInput[] | MyntraGroupCategoryUncheckedCreateWithoutRootCategoryInput[]
    connectOrCreate?: MyntraGroupCategoryCreateOrConnectWithoutRootCategoryInput | MyntraGroupCategoryCreateOrConnectWithoutRootCategoryInput[]
    createMany?: MyntraGroupCategoryCreateManyRootCategoryInputEnvelope
    connect?: MyntraGroupCategoryWhereUniqueInput | MyntraGroupCategoryWhereUniqueInput[]
  }

  export type MyntraGroupCategoryUncheckedCreateNestedManyWithoutRootCategoryInput = {
    create?: XOR<MyntraGroupCategoryCreateWithoutRootCategoryInput, MyntraGroupCategoryUncheckedCreateWithoutRootCategoryInput> | MyntraGroupCategoryCreateWithoutRootCategoryInput[] | MyntraGroupCategoryUncheckedCreateWithoutRootCategoryInput[]
    connectOrCreate?: MyntraGroupCategoryCreateOrConnectWithoutRootCategoryInput | MyntraGroupCategoryCreateOrConnectWithoutRootCategoryInput[]
    createMany?: MyntraGroupCategoryCreateManyRootCategoryInputEnvelope
    connect?: MyntraGroupCategoryWhereUniqueInput | MyntraGroupCategoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MyntraGroupCategoryUpdateManyWithoutRootCategoryNestedInput = {
    create?: XOR<MyntraGroupCategoryCreateWithoutRootCategoryInput, MyntraGroupCategoryUncheckedCreateWithoutRootCategoryInput> | MyntraGroupCategoryCreateWithoutRootCategoryInput[] | MyntraGroupCategoryUncheckedCreateWithoutRootCategoryInput[]
    connectOrCreate?: MyntraGroupCategoryCreateOrConnectWithoutRootCategoryInput | MyntraGroupCategoryCreateOrConnectWithoutRootCategoryInput[]
    upsert?: MyntraGroupCategoryUpsertWithWhereUniqueWithoutRootCategoryInput | MyntraGroupCategoryUpsertWithWhereUniqueWithoutRootCategoryInput[]
    createMany?: MyntraGroupCategoryCreateManyRootCategoryInputEnvelope
    set?: MyntraGroupCategoryWhereUniqueInput | MyntraGroupCategoryWhereUniqueInput[]
    disconnect?: MyntraGroupCategoryWhereUniqueInput | MyntraGroupCategoryWhereUniqueInput[]
    delete?: MyntraGroupCategoryWhereUniqueInput | MyntraGroupCategoryWhereUniqueInput[]
    connect?: MyntraGroupCategoryWhereUniqueInput | MyntraGroupCategoryWhereUniqueInput[]
    update?: MyntraGroupCategoryUpdateWithWhereUniqueWithoutRootCategoryInput | MyntraGroupCategoryUpdateWithWhereUniqueWithoutRootCategoryInput[]
    updateMany?: MyntraGroupCategoryUpdateManyWithWhereWithoutRootCategoryInput | MyntraGroupCategoryUpdateManyWithWhereWithoutRootCategoryInput[]
    deleteMany?: MyntraGroupCategoryScalarWhereInput | MyntraGroupCategoryScalarWhereInput[]
  }

  export type MyntraGroupCategoryUncheckedUpdateManyWithoutRootCategoryNestedInput = {
    create?: XOR<MyntraGroupCategoryCreateWithoutRootCategoryInput, MyntraGroupCategoryUncheckedCreateWithoutRootCategoryInput> | MyntraGroupCategoryCreateWithoutRootCategoryInput[] | MyntraGroupCategoryUncheckedCreateWithoutRootCategoryInput[]
    connectOrCreate?: MyntraGroupCategoryCreateOrConnectWithoutRootCategoryInput | MyntraGroupCategoryCreateOrConnectWithoutRootCategoryInput[]
    upsert?: MyntraGroupCategoryUpsertWithWhereUniqueWithoutRootCategoryInput | MyntraGroupCategoryUpsertWithWhereUniqueWithoutRootCategoryInput[]
    createMany?: MyntraGroupCategoryCreateManyRootCategoryInputEnvelope
    set?: MyntraGroupCategoryWhereUniqueInput | MyntraGroupCategoryWhereUniqueInput[]
    disconnect?: MyntraGroupCategoryWhereUniqueInput | MyntraGroupCategoryWhereUniqueInput[]
    delete?: MyntraGroupCategoryWhereUniqueInput | MyntraGroupCategoryWhereUniqueInput[]
    connect?: MyntraGroupCategoryWhereUniqueInput | MyntraGroupCategoryWhereUniqueInput[]
    update?: MyntraGroupCategoryUpdateWithWhereUniqueWithoutRootCategoryInput | MyntraGroupCategoryUpdateWithWhereUniqueWithoutRootCategoryInput[]
    updateMany?: MyntraGroupCategoryUpdateManyWithWhereWithoutRootCategoryInput | MyntraGroupCategoryUpdateManyWithWhereWithoutRootCategoryInput[]
    deleteMany?: MyntraGroupCategoryScalarWhereInput | MyntraGroupCategoryScalarWhereInput[]
  }

  export type MyntraRootCategoryCreateNestedOneWithoutGroupsInput = {
    create?: XOR<MyntraRootCategoryCreateWithoutGroupsInput, MyntraRootCategoryUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: MyntraRootCategoryCreateOrConnectWithoutGroupsInput
    connect?: MyntraRootCategoryWhereUniqueInput
  }

  export type MyntraCategoryCreateNestedManyWithoutGroupCategoryInput = {
    create?: XOR<MyntraCategoryCreateWithoutGroupCategoryInput, MyntraCategoryUncheckedCreateWithoutGroupCategoryInput> | MyntraCategoryCreateWithoutGroupCategoryInput[] | MyntraCategoryUncheckedCreateWithoutGroupCategoryInput[]
    connectOrCreate?: MyntraCategoryCreateOrConnectWithoutGroupCategoryInput | MyntraCategoryCreateOrConnectWithoutGroupCategoryInput[]
    createMany?: MyntraCategoryCreateManyGroupCategoryInputEnvelope
    connect?: MyntraCategoryWhereUniqueInput | MyntraCategoryWhereUniqueInput[]
  }

  export type MyntraCategoryUncheckedCreateNestedManyWithoutGroupCategoryInput = {
    create?: XOR<MyntraCategoryCreateWithoutGroupCategoryInput, MyntraCategoryUncheckedCreateWithoutGroupCategoryInput> | MyntraCategoryCreateWithoutGroupCategoryInput[] | MyntraCategoryUncheckedCreateWithoutGroupCategoryInput[]
    connectOrCreate?: MyntraCategoryCreateOrConnectWithoutGroupCategoryInput | MyntraCategoryCreateOrConnectWithoutGroupCategoryInput[]
    createMany?: MyntraCategoryCreateManyGroupCategoryInputEnvelope
    connect?: MyntraCategoryWhereUniqueInput | MyntraCategoryWhereUniqueInput[]
  }

  export type MyntraRootCategoryUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<MyntraRootCategoryCreateWithoutGroupsInput, MyntraRootCategoryUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: MyntraRootCategoryCreateOrConnectWithoutGroupsInput
    upsert?: MyntraRootCategoryUpsertWithoutGroupsInput
    connect?: MyntraRootCategoryWhereUniqueInput
    update?: XOR<XOR<MyntraRootCategoryUpdateToOneWithWhereWithoutGroupsInput, MyntraRootCategoryUpdateWithoutGroupsInput>, MyntraRootCategoryUncheckedUpdateWithoutGroupsInput>
  }

  export type MyntraCategoryUpdateManyWithoutGroupCategoryNestedInput = {
    create?: XOR<MyntraCategoryCreateWithoutGroupCategoryInput, MyntraCategoryUncheckedCreateWithoutGroupCategoryInput> | MyntraCategoryCreateWithoutGroupCategoryInput[] | MyntraCategoryUncheckedCreateWithoutGroupCategoryInput[]
    connectOrCreate?: MyntraCategoryCreateOrConnectWithoutGroupCategoryInput | MyntraCategoryCreateOrConnectWithoutGroupCategoryInput[]
    upsert?: MyntraCategoryUpsertWithWhereUniqueWithoutGroupCategoryInput | MyntraCategoryUpsertWithWhereUniqueWithoutGroupCategoryInput[]
    createMany?: MyntraCategoryCreateManyGroupCategoryInputEnvelope
    set?: MyntraCategoryWhereUniqueInput | MyntraCategoryWhereUniqueInput[]
    disconnect?: MyntraCategoryWhereUniqueInput | MyntraCategoryWhereUniqueInput[]
    delete?: MyntraCategoryWhereUniqueInput | MyntraCategoryWhereUniqueInput[]
    connect?: MyntraCategoryWhereUniqueInput | MyntraCategoryWhereUniqueInput[]
    update?: MyntraCategoryUpdateWithWhereUniqueWithoutGroupCategoryInput | MyntraCategoryUpdateWithWhereUniqueWithoutGroupCategoryInput[]
    updateMany?: MyntraCategoryUpdateManyWithWhereWithoutGroupCategoryInput | MyntraCategoryUpdateManyWithWhereWithoutGroupCategoryInput[]
    deleteMany?: MyntraCategoryScalarWhereInput | MyntraCategoryScalarWhereInput[]
  }

  export type MyntraCategoryUncheckedUpdateManyWithoutGroupCategoryNestedInput = {
    create?: XOR<MyntraCategoryCreateWithoutGroupCategoryInput, MyntraCategoryUncheckedCreateWithoutGroupCategoryInput> | MyntraCategoryCreateWithoutGroupCategoryInput[] | MyntraCategoryUncheckedCreateWithoutGroupCategoryInput[]
    connectOrCreate?: MyntraCategoryCreateOrConnectWithoutGroupCategoryInput | MyntraCategoryCreateOrConnectWithoutGroupCategoryInput[]
    upsert?: MyntraCategoryUpsertWithWhereUniqueWithoutGroupCategoryInput | MyntraCategoryUpsertWithWhereUniqueWithoutGroupCategoryInput[]
    createMany?: MyntraCategoryCreateManyGroupCategoryInputEnvelope
    set?: MyntraCategoryWhereUniqueInput | MyntraCategoryWhereUniqueInput[]
    disconnect?: MyntraCategoryWhereUniqueInput | MyntraCategoryWhereUniqueInput[]
    delete?: MyntraCategoryWhereUniqueInput | MyntraCategoryWhereUniqueInput[]
    connect?: MyntraCategoryWhereUniqueInput | MyntraCategoryWhereUniqueInput[]
    update?: MyntraCategoryUpdateWithWhereUniqueWithoutGroupCategoryInput | MyntraCategoryUpdateWithWhereUniqueWithoutGroupCategoryInput[]
    updateMany?: MyntraCategoryUpdateManyWithWhereWithoutGroupCategoryInput | MyntraCategoryUpdateManyWithWhereWithoutGroupCategoryInput[]
    deleteMany?: MyntraCategoryScalarWhereInput | MyntraCategoryScalarWhereInput[]
  }

  export type MyntraGroupCategoryCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<MyntraGroupCategoryCreateWithoutCategoriesInput, MyntraGroupCategoryUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: MyntraGroupCategoryCreateOrConnectWithoutCategoriesInput
    connect?: MyntraGroupCategoryWhereUniqueInput
  }

  export type MyntraProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MyntraProductCreateWithoutCategoryInput, MyntraProductUncheckedCreateWithoutCategoryInput> | MyntraProductCreateWithoutCategoryInput[] | MyntraProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MyntraProductCreateOrConnectWithoutCategoryInput | MyntraProductCreateOrConnectWithoutCategoryInput[]
    createMany?: MyntraProductCreateManyCategoryInputEnvelope
    connect?: MyntraProductWhereUniqueInput | MyntraProductWhereUniqueInput[]
  }

  export type MyntraProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MyntraProductCreateWithoutCategoryInput, MyntraProductUncheckedCreateWithoutCategoryInput> | MyntraProductCreateWithoutCategoryInput[] | MyntraProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MyntraProductCreateOrConnectWithoutCategoryInput | MyntraProductCreateOrConnectWithoutCategoryInput[]
    createMany?: MyntraProductCreateManyCategoryInputEnvelope
    connect?: MyntraProductWhereUniqueInput | MyntraProductWhereUniqueInput[]
  }

  export type MyntraGroupCategoryUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<MyntraGroupCategoryCreateWithoutCategoriesInput, MyntraGroupCategoryUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: MyntraGroupCategoryCreateOrConnectWithoutCategoriesInput
    upsert?: MyntraGroupCategoryUpsertWithoutCategoriesInput
    connect?: MyntraGroupCategoryWhereUniqueInput
    update?: XOR<XOR<MyntraGroupCategoryUpdateToOneWithWhereWithoutCategoriesInput, MyntraGroupCategoryUpdateWithoutCategoriesInput>, MyntraGroupCategoryUncheckedUpdateWithoutCategoriesInput>
  }

  export type MyntraProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MyntraProductCreateWithoutCategoryInput, MyntraProductUncheckedCreateWithoutCategoryInput> | MyntraProductCreateWithoutCategoryInput[] | MyntraProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MyntraProductCreateOrConnectWithoutCategoryInput | MyntraProductCreateOrConnectWithoutCategoryInput[]
    upsert?: MyntraProductUpsertWithWhereUniqueWithoutCategoryInput | MyntraProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MyntraProductCreateManyCategoryInputEnvelope
    set?: MyntraProductWhereUniqueInput | MyntraProductWhereUniqueInput[]
    disconnect?: MyntraProductWhereUniqueInput | MyntraProductWhereUniqueInput[]
    delete?: MyntraProductWhereUniqueInput | MyntraProductWhereUniqueInput[]
    connect?: MyntraProductWhereUniqueInput | MyntraProductWhereUniqueInput[]
    update?: MyntraProductUpdateWithWhereUniqueWithoutCategoryInput | MyntraProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MyntraProductUpdateManyWithWhereWithoutCategoryInput | MyntraProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MyntraProductScalarWhereInput | MyntraProductScalarWhereInput[]
  }

  export type MyntraProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MyntraProductCreateWithoutCategoryInput, MyntraProductUncheckedCreateWithoutCategoryInput> | MyntraProductCreateWithoutCategoryInput[] | MyntraProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MyntraProductCreateOrConnectWithoutCategoryInput | MyntraProductCreateOrConnectWithoutCategoryInput[]
    upsert?: MyntraProductUpsertWithWhereUniqueWithoutCategoryInput | MyntraProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MyntraProductCreateManyCategoryInputEnvelope
    set?: MyntraProductWhereUniqueInput | MyntraProductWhereUniqueInput[]
    disconnect?: MyntraProductWhereUniqueInput | MyntraProductWhereUniqueInput[]
    delete?: MyntraProductWhereUniqueInput | MyntraProductWhereUniqueInput[]
    connect?: MyntraProductWhereUniqueInput | MyntraProductWhereUniqueInput[]
    update?: MyntraProductUpdateWithWhereUniqueWithoutCategoryInput | MyntraProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MyntraProductUpdateManyWithWhereWithoutCategoryInput | MyntraProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MyntraProductScalarWhereInput | MyntraProductScalarWhereInput[]
  }

  export type MyntraProductCreateimagesInput = {
    set: string[]
  }

  export type MyntraProductCreateproductDetailsInput = {
    set: string[]
  }

  export type MyntraProductCreatesizeAndFitInput = {
    set: string[]
  }

  export type MyntraProductCreatematerialAndCareInput = {
    set: string[]
  }

  export type MyntraProductCreatespecificationInput = {
    set: string[]
  }

  export type MyntraProductCreatesellerInput = {
    set: string[]
  }

  export type MyntraCategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<MyntraCategoryCreateWithoutProductsInput, MyntraCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: MyntraCategoryCreateOrConnectWithoutProductsInput
    connect?: MyntraCategoryWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type MyntraProductUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MyntraProductUpdateproductDetailsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MyntraProductUpdatesizeAndFitInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MyntraProductUpdatematerialAndCareInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MyntraProductUpdatespecificationInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MyntraProductUpdatesellerInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MyntraCategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<MyntraCategoryCreateWithoutProductsInput, MyntraCategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: MyntraCategoryCreateOrConnectWithoutProductsInput
    upsert?: MyntraCategoryUpsertWithoutProductsInput
    connect?: MyntraCategoryWhereUniqueInput
    update?: XOR<XOR<MyntraCategoryUpdateToOneWithWhereWithoutProductsInput, MyntraCategoryUpdateWithoutProductsInput>, MyntraCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type BlinkitProductCreateimagesInput = {
    set: string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type BlinkitProductUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LimeroadProductCreateimagesInput = {
    set: string[]
  }

  export type LimeroadProductUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type MyntraGroupCategoryCreateWithoutRootCategoryInput = {
    id?: string
    slug: string
    title: string
    createdAt?: Date | string
    categories?: MyntraCategoryCreateNestedManyWithoutGroupCategoryInput
  }

  export type MyntraGroupCategoryUncheckedCreateWithoutRootCategoryInput = {
    id?: string
    slug: string
    title: string
    createdAt?: Date | string
    categories?: MyntraCategoryUncheckedCreateNestedManyWithoutGroupCategoryInput
  }

  export type MyntraGroupCategoryCreateOrConnectWithoutRootCategoryInput = {
    where: MyntraGroupCategoryWhereUniqueInput
    create: XOR<MyntraGroupCategoryCreateWithoutRootCategoryInput, MyntraGroupCategoryUncheckedCreateWithoutRootCategoryInput>
  }

  export type MyntraGroupCategoryCreateManyRootCategoryInputEnvelope = {
    data: MyntraGroupCategoryCreateManyRootCategoryInput | MyntraGroupCategoryCreateManyRootCategoryInput[]
  }

  export type MyntraGroupCategoryUpsertWithWhereUniqueWithoutRootCategoryInput = {
    where: MyntraGroupCategoryWhereUniqueInput
    update: XOR<MyntraGroupCategoryUpdateWithoutRootCategoryInput, MyntraGroupCategoryUncheckedUpdateWithoutRootCategoryInput>
    create: XOR<MyntraGroupCategoryCreateWithoutRootCategoryInput, MyntraGroupCategoryUncheckedCreateWithoutRootCategoryInput>
  }

  export type MyntraGroupCategoryUpdateWithWhereUniqueWithoutRootCategoryInput = {
    where: MyntraGroupCategoryWhereUniqueInput
    data: XOR<MyntraGroupCategoryUpdateWithoutRootCategoryInput, MyntraGroupCategoryUncheckedUpdateWithoutRootCategoryInput>
  }

  export type MyntraGroupCategoryUpdateManyWithWhereWithoutRootCategoryInput = {
    where: MyntraGroupCategoryScalarWhereInput
    data: XOR<MyntraGroupCategoryUpdateManyMutationInput, MyntraGroupCategoryUncheckedUpdateManyWithoutRootCategoryInput>
  }

  export type MyntraGroupCategoryScalarWhereInput = {
    AND?: MyntraGroupCategoryScalarWhereInput | MyntraGroupCategoryScalarWhereInput[]
    OR?: MyntraGroupCategoryScalarWhereInput[]
    NOT?: MyntraGroupCategoryScalarWhereInput | MyntraGroupCategoryScalarWhereInput[]
    id?: StringFilter<"MyntraGroupCategory"> | string
    slug?: StringFilter<"MyntraGroupCategory"> | string
    title?: StringFilter<"MyntraGroupCategory"> | string
    rootCategoryId?: StringFilter<"MyntraGroupCategory"> | string
    createdAt?: DateTimeFilter<"MyntraGroupCategory"> | Date | string
  }

  export type MyntraRootCategoryCreateWithoutGroupsInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type MyntraRootCategoryUncheckedCreateWithoutGroupsInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type MyntraRootCategoryCreateOrConnectWithoutGroupsInput = {
    where: MyntraRootCategoryWhereUniqueInput
    create: XOR<MyntraRootCategoryCreateWithoutGroupsInput, MyntraRootCategoryUncheckedCreateWithoutGroupsInput>
  }

  export type MyntraCategoryCreateWithoutGroupCategoryInput = {
    id?: string
    slug: string
    title: string
    href: string
    createdAt?: Date | string
    products?: MyntraProductCreateNestedManyWithoutCategoryInput
  }

  export type MyntraCategoryUncheckedCreateWithoutGroupCategoryInput = {
    id?: string
    slug: string
    title: string
    href: string
    createdAt?: Date | string
    products?: MyntraProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type MyntraCategoryCreateOrConnectWithoutGroupCategoryInput = {
    where: MyntraCategoryWhereUniqueInput
    create: XOR<MyntraCategoryCreateWithoutGroupCategoryInput, MyntraCategoryUncheckedCreateWithoutGroupCategoryInput>
  }

  export type MyntraCategoryCreateManyGroupCategoryInputEnvelope = {
    data: MyntraCategoryCreateManyGroupCategoryInput | MyntraCategoryCreateManyGroupCategoryInput[]
  }

  export type MyntraRootCategoryUpsertWithoutGroupsInput = {
    update: XOR<MyntraRootCategoryUpdateWithoutGroupsInput, MyntraRootCategoryUncheckedUpdateWithoutGroupsInput>
    create: XOR<MyntraRootCategoryCreateWithoutGroupsInput, MyntraRootCategoryUncheckedCreateWithoutGroupsInput>
    where?: MyntraRootCategoryWhereInput
  }

  export type MyntraRootCategoryUpdateToOneWithWhereWithoutGroupsInput = {
    where?: MyntraRootCategoryWhereInput
    data: XOR<MyntraRootCategoryUpdateWithoutGroupsInput, MyntraRootCategoryUncheckedUpdateWithoutGroupsInput>
  }

  export type MyntraRootCategoryUpdateWithoutGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyntraRootCategoryUncheckedUpdateWithoutGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyntraCategoryUpsertWithWhereUniqueWithoutGroupCategoryInput = {
    where: MyntraCategoryWhereUniqueInput
    update: XOR<MyntraCategoryUpdateWithoutGroupCategoryInput, MyntraCategoryUncheckedUpdateWithoutGroupCategoryInput>
    create: XOR<MyntraCategoryCreateWithoutGroupCategoryInput, MyntraCategoryUncheckedCreateWithoutGroupCategoryInput>
  }

  export type MyntraCategoryUpdateWithWhereUniqueWithoutGroupCategoryInput = {
    where: MyntraCategoryWhereUniqueInput
    data: XOR<MyntraCategoryUpdateWithoutGroupCategoryInput, MyntraCategoryUncheckedUpdateWithoutGroupCategoryInput>
  }

  export type MyntraCategoryUpdateManyWithWhereWithoutGroupCategoryInput = {
    where: MyntraCategoryScalarWhereInput
    data: XOR<MyntraCategoryUpdateManyMutationInput, MyntraCategoryUncheckedUpdateManyWithoutGroupCategoryInput>
  }

  export type MyntraCategoryScalarWhereInput = {
    AND?: MyntraCategoryScalarWhereInput | MyntraCategoryScalarWhereInput[]
    OR?: MyntraCategoryScalarWhereInput[]
    NOT?: MyntraCategoryScalarWhereInput | MyntraCategoryScalarWhereInput[]
    id?: StringFilter<"MyntraCategory"> | string
    slug?: StringFilter<"MyntraCategory"> | string
    title?: StringFilter<"MyntraCategory"> | string
    href?: StringFilter<"MyntraCategory"> | string
    groupCategoryId?: StringFilter<"MyntraCategory"> | string
    createdAt?: DateTimeFilter<"MyntraCategory"> | Date | string
  }

  export type MyntraGroupCategoryCreateWithoutCategoriesInput = {
    id?: string
    slug: string
    title: string
    createdAt?: Date | string
    rootCategory: MyntraRootCategoryCreateNestedOneWithoutGroupsInput
  }

  export type MyntraGroupCategoryUncheckedCreateWithoutCategoriesInput = {
    id?: string
    slug: string
    title: string
    rootCategoryId: string
    createdAt?: Date | string
  }

  export type MyntraGroupCategoryCreateOrConnectWithoutCategoriesInput = {
    where: MyntraGroupCategoryWhereUniqueInput
    create: XOR<MyntraGroupCategoryCreateWithoutCategoriesInput, MyntraGroupCategoryUncheckedCreateWithoutCategoriesInput>
  }

  export type MyntraProductCreateWithoutCategoryInput = {
    id?: string
    productCode: string
    href: string
    brand: string
    title: string
    rating?: string | null
    ratingCount?: string | null
    size?: string | null
    SRP?: string | null
    MRP?: string | null
    images?: MyntraProductCreateimagesInput | string[]
    productDetails?: MyntraProductCreateproductDetailsInput | string[]
    sizeAndFit?: MyntraProductCreatesizeAndFitInput | string[]
    materialAndCare?: MyntraProductCreatematerialAndCareInput | string[]
    specification?: MyntraProductCreatespecificationInput | string[]
    seller?: MyntraProductCreatesellerInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MyntraProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    productCode: string
    href: string
    brand: string
    title: string
    rating?: string | null
    ratingCount?: string | null
    size?: string | null
    SRP?: string | null
    MRP?: string | null
    images?: MyntraProductCreateimagesInput | string[]
    productDetails?: MyntraProductCreateproductDetailsInput | string[]
    sizeAndFit?: MyntraProductCreatesizeAndFitInput | string[]
    materialAndCare?: MyntraProductCreatematerialAndCareInput | string[]
    specification?: MyntraProductCreatespecificationInput | string[]
    seller?: MyntraProductCreatesellerInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MyntraProductCreateOrConnectWithoutCategoryInput = {
    where: MyntraProductWhereUniqueInput
    create: XOR<MyntraProductCreateWithoutCategoryInput, MyntraProductUncheckedCreateWithoutCategoryInput>
  }

  export type MyntraProductCreateManyCategoryInputEnvelope = {
    data: MyntraProductCreateManyCategoryInput | MyntraProductCreateManyCategoryInput[]
  }

  export type MyntraGroupCategoryUpsertWithoutCategoriesInput = {
    update: XOR<MyntraGroupCategoryUpdateWithoutCategoriesInput, MyntraGroupCategoryUncheckedUpdateWithoutCategoriesInput>
    create: XOR<MyntraGroupCategoryCreateWithoutCategoriesInput, MyntraGroupCategoryUncheckedCreateWithoutCategoriesInput>
    where?: MyntraGroupCategoryWhereInput
  }

  export type MyntraGroupCategoryUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: MyntraGroupCategoryWhereInput
    data: XOR<MyntraGroupCategoryUpdateWithoutCategoriesInput, MyntraGroupCategoryUncheckedUpdateWithoutCategoriesInput>
  }

  export type MyntraGroupCategoryUpdateWithoutCategoriesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rootCategory?: MyntraRootCategoryUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type MyntraGroupCategoryUncheckedUpdateWithoutCategoriesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rootCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyntraProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MyntraProductWhereUniqueInput
    update: XOR<MyntraProductUpdateWithoutCategoryInput, MyntraProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<MyntraProductCreateWithoutCategoryInput, MyntraProductUncheckedCreateWithoutCategoryInput>
  }

  export type MyntraProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MyntraProductWhereUniqueInput
    data: XOR<MyntraProductUpdateWithoutCategoryInput, MyntraProductUncheckedUpdateWithoutCategoryInput>
  }

  export type MyntraProductUpdateManyWithWhereWithoutCategoryInput = {
    where: MyntraProductScalarWhereInput
    data: XOR<MyntraProductUpdateManyMutationInput, MyntraProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type MyntraProductScalarWhereInput = {
    AND?: MyntraProductScalarWhereInput | MyntraProductScalarWhereInput[]
    OR?: MyntraProductScalarWhereInput[]
    NOT?: MyntraProductScalarWhereInput | MyntraProductScalarWhereInput[]
    id?: StringFilter<"MyntraProduct"> | string
    productCode?: StringFilter<"MyntraProduct"> | string
    href?: StringFilter<"MyntraProduct"> | string
    brand?: StringFilter<"MyntraProduct"> | string
    title?: StringFilter<"MyntraProduct"> | string
    rating?: StringNullableFilter<"MyntraProduct"> | string | null
    ratingCount?: StringNullableFilter<"MyntraProduct"> | string | null
    size?: StringNullableFilter<"MyntraProduct"> | string | null
    SRP?: StringNullableFilter<"MyntraProduct"> | string | null
    MRP?: StringNullableFilter<"MyntraProduct"> | string | null
    images?: StringNullableListFilter<"MyntraProduct">
    productDetails?: StringNullableListFilter<"MyntraProduct">
    sizeAndFit?: StringNullableListFilter<"MyntraProduct">
    materialAndCare?: StringNullableListFilter<"MyntraProduct">
    specification?: StringNullableListFilter<"MyntraProduct">
    seller?: StringNullableListFilter<"MyntraProduct">
    categoryId?: StringFilter<"MyntraProduct"> | string
    createdAt?: DateTimeFilter<"MyntraProduct"> | Date | string
    updatedAt?: DateTimeFilter<"MyntraProduct"> | Date | string
  }

  export type MyntraCategoryCreateWithoutProductsInput = {
    id?: string
    slug: string
    title: string
    href: string
    createdAt?: Date | string
    groupCategory: MyntraGroupCategoryCreateNestedOneWithoutCategoriesInput
  }

  export type MyntraCategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    slug: string
    title: string
    href: string
    groupCategoryId: string
    createdAt?: Date | string
  }

  export type MyntraCategoryCreateOrConnectWithoutProductsInput = {
    where: MyntraCategoryWhereUniqueInput
    create: XOR<MyntraCategoryCreateWithoutProductsInput, MyntraCategoryUncheckedCreateWithoutProductsInput>
  }

  export type MyntraCategoryUpsertWithoutProductsInput = {
    update: XOR<MyntraCategoryUpdateWithoutProductsInput, MyntraCategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<MyntraCategoryCreateWithoutProductsInput, MyntraCategoryUncheckedCreateWithoutProductsInput>
    where?: MyntraCategoryWhereInput
  }

  export type MyntraCategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: MyntraCategoryWhereInput
    data: XOR<MyntraCategoryUpdateWithoutProductsInput, MyntraCategoryUncheckedUpdateWithoutProductsInput>
  }

  export type MyntraCategoryUpdateWithoutProductsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupCategory?: MyntraGroupCategoryUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type MyntraCategoryUncheckedUpdateWithoutProductsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    groupCategoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyntraGroupCategoryCreateManyRootCategoryInput = {
    id?: string
    slug: string
    title: string
    createdAt?: Date | string
  }

  export type MyntraGroupCategoryUpdateWithoutRootCategoryInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: MyntraCategoryUpdateManyWithoutGroupCategoryNestedInput
  }

  export type MyntraGroupCategoryUncheckedUpdateWithoutRootCategoryInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: MyntraCategoryUncheckedUpdateManyWithoutGroupCategoryNestedInput
  }

  export type MyntraGroupCategoryUncheckedUpdateManyWithoutRootCategoryInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyntraCategoryCreateManyGroupCategoryInput = {
    id?: string
    slug: string
    title: string
    href: string
    createdAt?: Date | string
  }

  export type MyntraCategoryUpdateWithoutGroupCategoryInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: MyntraProductUpdateManyWithoutCategoryNestedInput
  }

  export type MyntraCategoryUncheckedUpdateWithoutGroupCategoryInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: MyntraProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MyntraCategoryUncheckedUpdateManyWithoutGroupCategoryInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyntraProductCreateManyCategoryInput = {
    id?: string
    productCode: string
    href: string
    brand: string
    title: string
    rating?: string | null
    ratingCount?: string | null
    size?: string | null
    SRP?: string | null
    MRP?: string | null
    images?: MyntraProductCreateimagesInput | string[]
    productDetails?: MyntraProductCreateproductDetailsInput | string[]
    sizeAndFit?: MyntraProductCreatesizeAndFitInput | string[]
    materialAndCare?: MyntraProductCreatematerialAndCareInput | string[]
    specification?: MyntraProductCreatespecificationInput | string[]
    seller?: MyntraProductCreatesellerInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MyntraProductUpdateWithoutCategoryInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    ratingCount?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    SRP?: NullableStringFieldUpdateOperationsInput | string | null
    MRP?: NullableStringFieldUpdateOperationsInput | string | null
    images?: MyntraProductUpdateimagesInput | string[]
    productDetails?: MyntraProductUpdateproductDetailsInput | string[]
    sizeAndFit?: MyntraProductUpdatesizeAndFitInput | string[]
    materialAndCare?: MyntraProductUpdatematerialAndCareInput | string[]
    specification?: MyntraProductUpdatespecificationInput | string[]
    seller?: MyntraProductUpdatesellerInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyntraProductUncheckedUpdateWithoutCategoryInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    ratingCount?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    SRP?: NullableStringFieldUpdateOperationsInput | string | null
    MRP?: NullableStringFieldUpdateOperationsInput | string | null
    images?: MyntraProductUpdateimagesInput | string[]
    productDetails?: MyntraProductUpdateproductDetailsInput | string[]
    sizeAndFit?: MyntraProductUpdatesizeAndFitInput | string[]
    materialAndCare?: MyntraProductUpdatematerialAndCareInput | string[]
    specification?: MyntraProductUpdatespecificationInput | string[]
    seller?: MyntraProductUpdatesellerInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyntraProductUncheckedUpdateManyWithoutCategoryInput = {
    productCode?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    rating?: NullableStringFieldUpdateOperationsInput | string | null
    ratingCount?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    SRP?: NullableStringFieldUpdateOperationsInput | string | null
    MRP?: NullableStringFieldUpdateOperationsInput | string | null
    images?: MyntraProductUpdateimagesInput | string[]
    productDetails?: MyntraProductUpdateproductDetailsInput | string[]
    sizeAndFit?: MyntraProductUpdatesizeAndFitInput | string[]
    materialAndCare?: MyntraProductUpdatematerialAndCareInput | string[]
    specification?: MyntraProductUpdatespecificationInput | string[]
    seller?: MyntraProductUpdatesellerInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}