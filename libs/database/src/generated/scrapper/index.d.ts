
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
 * Model MyntraProduct
 * 
 */
export type MyntraProduct = $Result.DefaultSelection<Prisma.$MyntraProductPayload>
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
 * // Fetch zero or more MyntraProducts
 * const myntraProducts = await prisma.myntraProduct.findMany()
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
   * // Fetch zero or more MyntraProducts
   * const myntraProducts = await prisma.myntraProduct.findMany()
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
   * `prisma.myntraProduct`: Exposes CRUD operations for the **MyntraProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MyntraProducts
    * const myntraProducts = await prisma.myntraProduct.findMany()
    * ```
    */
  get myntraProduct(): Prisma.MyntraProductDelegate<ExtArgs, ClientOptions>;

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
    MyntraProduct: 'MyntraProduct',
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
      modelProps: "myntraProduct" | "blinkitProduct" | "limeroadProduct"
      txIsolationLevel: never
    }
    model: {
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
    myntraProduct?: MyntraProductOmit
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
   * Models
   */

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
    rootCategory: string | null
    groupCategory: string | null
    categorySlug: string | null
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
    rootCategory: string | null
    groupCategory: string | null
    categorySlug: string | null
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
    rootCategory: number
    groupCategory: number
    categorySlug: number
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
    rootCategory?: true
    groupCategory?: true
    categorySlug?: true
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
    rootCategory?: true
    groupCategory?: true
    categorySlug?: true
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
    rootCategory?: true
    groupCategory?: true
    categorySlug?: true
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
    rootCategory: string
    groupCategory: string
    categorySlug: string
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
    rootCategory?: boolean
    groupCategory?: boolean
    categorySlug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
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
    rootCategory?: boolean
    groupCategory?: boolean
    categorySlug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MyntraProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productCode" | "href" | "brand" | "title" | "rating" | "ratingCount" | "size" | "SRP" | "MRP" | "images" | "productDetails" | "sizeAndFit" | "materialAndCare" | "specification" | "seller" | "rootCategory" | "groupCategory" | "categorySlug" | "createdAt" | "updatedAt", ExtArgs["result"]["myntraProduct"]>

  export type $MyntraProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MyntraProduct"
    objects: {}
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
      rootCategory: string
      groupCategory: string
      categorySlug: string
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
    readonly rootCategory: FieldRef<"MyntraProduct", 'String'>
    readonly groupCategory: FieldRef<"MyntraProduct", 'String'>
    readonly categorySlug: FieldRef<"MyntraProduct", 'String'>
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
    rootCategory: 'rootCategory',
    groupCategory: 'groupCategory',
    categorySlug: 'categorySlug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MyntraProductScalarFieldEnum = (typeof MyntraProductScalarFieldEnum)[keyof typeof MyntraProductScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


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
    rootCategory?: StringFilter<"MyntraProduct"> | string
    groupCategory?: StringFilter<"MyntraProduct"> | string
    categorySlug?: StringFilter<"MyntraProduct"> | string
    createdAt?: DateTimeFilter<"MyntraProduct"> | Date | string
    updatedAt?: DateTimeFilter<"MyntraProduct"> | Date | string
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
    rootCategory?: SortOrder
    groupCategory?: SortOrder
    categorySlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    rootCategory?: StringFilter<"MyntraProduct"> | string
    groupCategory?: StringFilter<"MyntraProduct"> | string
    categorySlug?: StringFilter<"MyntraProduct"> | string
    createdAt?: DateTimeFilter<"MyntraProduct"> | Date | string
    updatedAt?: DateTimeFilter<"MyntraProduct"> | Date | string
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
    rootCategory?: SortOrder
    groupCategory?: SortOrder
    categorySlug?: SortOrder
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
    rootCategory?: StringWithAggregatesFilter<"MyntraProduct"> | string
    groupCategory?: StringWithAggregatesFilter<"MyntraProduct"> | string
    categorySlug?: StringWithAggregatesFilter<"MyntraProduct"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MyntraProduct"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MyntraProduct"> | Date | string
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
    rootCategory: string
    groupCategory: string
    categorySlug: string
    createdAt?: Date | string
    updatedAt?: Date | string
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
    rootCategory: string
    groupCategory: string
    categorySlug: string
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
    rootCategory?: StringFieldUpdateOperationsInput | string
    groupCategory?: StringFieldUpdateOperationsInput | string
    categorySlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    rootCategory?: StringFieldUpdateOperationsInput | string
    groupCategory?: StringFieldUpdateOperationsInput | string
    categorySlug?: StringFieldUpdateOperationsInput | string
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
    rootCategory: string
    groupCategory: string
    categorySlug: string
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
    rootCategory?: StringFieldUpdateOperationsInput | string
    groupCategory?: StringFieldUpdateOperationsInput | string
    categorySlug?: StringFieldUpdateOperationsInput | string
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
    rootCategory?: StringFieldUpdateOperationsInput | string
    groupCategory?: StringFieldUpdateOperationsInput | string
    categorySlug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    rootCategory?: SortOrder
    groupCategory?: SortOrder
    categorySlug?: SortOrder
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
    rootCategory?: SortOrder
    groupCategory?: SortOrder
    categorySlug?: SortOrder
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
    rootCategory?: SortOrder
    groupCategory?: SortOrder
    categorySlug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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