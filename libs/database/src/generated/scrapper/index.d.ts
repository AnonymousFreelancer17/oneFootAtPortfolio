
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
 * Model ScrappedItem
 * 
 */
export type ScrappedItem = $Result.DefaultSelection<Prisma.$ScrappedItemPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ScrappedItems
 * const scrappedItems = await prisma.scrappedItem.findMany()
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
   * // Fetch zero or more ScrappedItems
   * const scrappedItems = await prisma.scrappedItem.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.scrappedItem`: Exposes CRUD operations for the **ScrappedItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScrappedItems
    * const scrappedItems = await prisma.scrappedItem.findMany()
    * ```
    */
  get scrappedItem(): Prisma.ScrappedItemDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    ScrappedItem: 'ScrappedItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "scrappedItem"
      txIsolationLevel: never
    }
    model: {
      ScrappedItem: {
        payload: Prisma.$ScrappedItemPayload<ExtArgs>
        fields: Prisma.ScrappedItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScrappedItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrappedItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScrappedItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrappedItemPayload>
          }
          findFirst: {
            args: Prisma.ScrappedItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrappedItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScrappedItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrappedItemPayload>
          }
          findMany: {
            args: Prisma.ScrappedItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrappedItemPayload>[]
          }
          create: {
            args: Prisma.ScrappedItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrappedItemPayload>
          }
          createMany: {
            args: Prisma.ScrappedItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ScrappedItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrappedItemPayload>
          }
          update: {
            args: Prisma.ScrappedItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrappedItemPayload>
          }
          deleteMany: {
            args: Prisma.ScrappedItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScrappedItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScrappedItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrappedItemPayload>
          }
          aggregate: {
            args: Prisma.ScrappedItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScrappedItem>
          }
          groupBy: {
            args: Prisma.ScrappedItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScrappedItemGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ScrappedItemFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ScrappedItemAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ScrappedItemCountArgs<ExtArgs>
            result: $Utils.Optional<ScrappedItemCountAggregateOutputType> | number
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
   * Model ScrappedItem
   */

  export type AggregateScrappedItem = {
    _count: ScrappedItemCountAggregateOutputType | null
    _min: ScrappedItemMinAggregateOutputType | null
    _max: ScrappedItemMaxAggregateOutputType | null
  }

  export type ScrappedItemMinAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
  }

  export type ScrappedItemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
  }

  export type ScrappedItemCountAggregateOutputType = {
    id: number
    title: number
    url: number
    _all: number
  }


  export type ScrappedItemMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
  }

  export type ScrappedItemMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
  }

  export type ScrappedItemCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    _all?: true
  }

  export type ScrappedItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrappedItem to aggregate.
     */
    where?: ScrappedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrappedItems to fetch.
     */
    orderBy?: ScrappedItemOrderByWithRelationInput | ScrappedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScrappedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrappedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrappedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScrappedItems
    **/
    _count?: true | ScrappedItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScrappedItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScrappedItemMaxAggregateInputType
  }

  export type GetScrappedItemAggregateType<T extends ScrappedItemAggregateArgs> = {
        [P in keyof T & keyof AggregateScrappedItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScrappedItem[P]>
      : GetScalarType<T[P], AggregateScrappedItem[P]>
  }




  export type ScrappedItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScrappedItemWhereInput
    orderBy?: ScrappedItemOrderByWithAggregationInput | ScrappedItemOrderByWithAggregationInput[]
    by: ScrappedItemScalarFieldEnum[] | ScrappedItemScalarFieldEnum
    having?: ScrappedItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScrappedItemCountAggregateInputType | true
    _min?: ScrappedItemMinAggregateInputType
    _max?: ScrappedItemMaxAggregateInputType
  }

  export type ScrappedItemGroupByOutputType = {
    id: string
    title: string
    url: string
    _count: ScrappedItemCountAggregateOutputType | null
    _min: ScrappedItemMinAggregateOutputType | null
    _max: ScrappedItemMaxAggregateOutputType | null
  }

  type GetScrappedItemGroupByPayload<T extends ScrappedItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScrappedItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScrappedItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScrappedItemGroupByOutputType[P]>
            : GetScalarType<T[P], ScrappedItemGroupByOutputType[P]>
        }
      >
    >


  export type ScrappedItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
  }, ExtArgs["result"]["scrappedItem"]>


  export type ScrappedItemSelectScalar = {
    id?: boolean
    title?: boolean
    url?: boolean
  }


  export type $ScrappedItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScrappedItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      url: string
    }, ExtArgs["result"]["scrappedItem"]>
    composites: {}
  }

  type ScrappedItemGetPayload<S extends boolean | null | undefined | ScrappedItemDefaultArgs> = $Result.GetResult<Prisma.$ScrappedItemPayload, S>

  type ScrappedItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ScrappedItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ScrappedItemCountAggregateInputType | true
    }

  export interface ScrappedItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScrappedItem'], meta: { name: 'ScrappedItem' } }
    /**
     * Find zero or one ScrappedItem that matches the filter.
     * @param {ScrappedItemFindUniqueArgs} args - Arguments to find a ScrappedItem
     * @example
     * // Get one ScrappedItem
     * const scrappedItem = await prisma.scrappedItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScrappedItemFindUniqueArgs>(args: SelectSubset<T, ScrappedItemFindUniqueArgs<ExtArgs>>): Prisma__ScrappedItemClient<$Result.GetResult<Prisma.$ScrappedItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ScrappedItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ScrappedItemFindUniqueOrThrowArgs} args - Arguments to find a ScrappedItem
     * @example
     * // Get one ScrappedItem
     * const scrappedItem = await prisma.scrappedItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScrappedItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ScrappedItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScrappedItemClient<$Result.GetResult<Prisma.$ScrappedItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ScrappedItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrappedItemFindFirstArgs} args - Arguments to find a ScrappedItem
     * @example
     * // Get one ScrappedItem
     * const scrappedItem = await prisma.scrappedItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScrappedItemFindFirstArgs>(args?: SelectSubset<T, ScrappedItemFindFirstArgs<ExtArgs>>): Prisma__ScrappedItemClient<$Result.GetResult<Prisma.$ScrappedItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ScrappedItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrappedItemFindFirstOrThrowArgs} args - Arguments to find a ScrappedItem
     * @example
     * // Get one ScrappedItem
     * const scrappedItem = await prisma.scrappedItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScrappedItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ScrappedItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScrappedItemClient<$Result.GetResult<Prisma.$ScrappedItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ScrappedItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrappedItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScrappedItems
     * const scrappedItems = await prisma.scrappedItem.findMany()
     * 
     * // Get first 10 ScrappedItems
     * const scrappedItems = await prisma.scrappedItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scrappedItemWithIdOnly = await prisma.scrappedItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScrappedItemFindManyArgs>(args?: SelectSubset<T, ScrappedItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrappedItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ScrappedItem.
     * @param {ScrappedItemCreateArgs} args - Arguments to create a ScrappedItem.
     * @example
     * // Create one ScrappedItem
     * const ScrappedItem = await prisma.scrappedItem.create({
     *   data: {
     *     // ... data to create a ScrappedItem
     *   }
     * })
     * 
     */
    create<T extends ScrappedItemCreateArgs>(args: SelectSubset<T, ScrappedItemCreateArgs<ExtArgs>>): Prisma__ScrappedItemClient<$Result.GetResult<Prisma.$ScrappedItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ScrappedItems.
     * @param {ScrappedItemCreateManyArgs} args - Arguments to create many ScrappedItems.
     * @example
     * // Create many ScrappedItems
     * const scrappedItem = await prisma.scrappedItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScrappedItemCreateManyArgs>(args?: SelectSubset<T, ScrappedItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ScrappedItem.
     * @param {ScrappedItemDeleteArgs} args - Arguments to delete one ScrappedItem.
     * @example
     * // Delete one ScrappedItem
     * const ScrappedItem = await prisma.scrappedItem.delete({
     *   where: {
     *     // ... filter to delete one ScrappedItem
     *   }
     * })
     * 
     */
    delete<T extends ScrappedItemDeleteArgs>(args: SelectSubset<T, ScrappedItemDeleteArgs<ExtArgs>>): Prisma__ScrappedItemClient<$Result.GetResult<Prisma.$ScrappedItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ScrappedItem.
     * @param {ScrappedItemUpdateArgs} args - Arguments to update one ScrappedItem.
     * @example
     * // Update one ScrappedItem
     * const scrappedItem = await prisma.scrappedItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScrappedItemUpdateArgs>(args: SelectSubset<T, ScrappedItemUpdateArgs<ExtArgs>>): Prisma__ScrappedItemClient<$Result.GetResult<Prisma.$ScrappedItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ScrappedItems.
     * @param {ScrappedItemDeleteManyArgs} args - Arguments to filter ScrappedItems to delete.
     * @example
     * // Delete a few ScrappedItems
     * const { count } = await prisma.scrappedItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScrappedItemDeleteManyArgs>(args?: SelectSubset<T, ScrappedItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScrappedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrappedItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScrappedItems
     * const scrappedItem = await prisma.scrappedItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScrappedItemUpdateManyArgs>(args: SelectSubset<T, ScrappedItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ScrappedItem.
     * @param {ScrappedItemUpsertArgs} args - Arguments to update or create a ScrappedItem.
     * @example
     * // Update or create a ScrappedItem
     * const scrappedItem = await prisma.scrappedItem.upsert({
     *   create: {
     *     // ... data to create a ScrappedItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScrappedItem we want to update
     *   }
     * })
     */
    upsert<T extends ScrappedItemUpsertArgs>(args: SelectSubset<T, ScrappedItemUpsertArgs<ExtArgs>>): Prisma__ScrappedItemClient<$Result.GetResult<Prisma.$ScrappedItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more ScrappedItems that matches the filter.
     * @param {ScrappedItemFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const scrappedItem = await prisma.scrappedItem.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: ScrappedItemFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ScrappedItem.
     * @param {ScrappedItemAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const scrappedItem = await prisma.scrappedItem.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ScrappedItemAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ScrappedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrappedItemCountArgs} args - Arguments to filter ScrappedItems to count.
     * @example
     * // Count the number of ScrappedItems
     * const count = await prisma.scrappedItem.count({
     *   where: {
     *     // ... the filter for the ScrappedItems we want to count
     *   }
     * })
    **/
    count<T extends ScrappedItemCountArgs>(
      args?: Subset<T, ScrappedItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScrappedItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScrappedItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrappedItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScrappedItemAggregateArgs>(args: Subset<T, ScrappedItemAggregateArgs>): Prisma.PrismaPromise<GetScrappedItemAggregateType<T>>

    /**
     * Group by ScrappedItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrappedItemGroupByArgs} args - Group by arguments.
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
      T extends ScrappedItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScrappedItemGroupByArgs['orderBy'] }
        : { orderBy?: ScrappedItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScrappedItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScrappedItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScrappedItem model
   */
  readonly fields: ScrappedItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScrappedItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScrappedItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ScrappedItem model
   */ 
  interface ScrappedItemFieldRefs {
    readonly id: FieldRef<"ScrappedItem", 'String'>
    readonly title: FieldRef<"ScrappedItem", 'String'>
    readonly url: FieldRef<"ScrappedItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ScrappedItem findUnique
   */
  export type ScrappedItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrappedItem
     */
    select?: ScrappedItemSelect<ExtArgs> | null
    /**
     * Filter, which ScrappedItem to fetch.
     */
    where: ScrappedItemWhereUniqueInput
  }

  /**
   * ScrappedItem findUniqueOrThrow
   */
  export type ScrappedItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrappedItem
     */
    select?: ScrappedItemSelect<ExtArgs> | null
    /**
     * Filter, which ScrappedItem to fetch.
     */
    where: ScrappedItemWhereUniqueInput
  }

  /**
   * ScrappedItem findFirst
   */
  export type ScrappedItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrappedItem
     */
    select?: ScrappedItemSelect<ExtArgs> | null
    /**
     * Filter, which ScrappedItem to fetch.
     */
    where?: ScrappedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrappedItems to fetch.
     */
    orderBy?: ScrappedItemOrderByWithRelationInput | ScrappedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrappedItems.
     */
    cursor?: ScrappedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrappedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrappedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrappedItems.
     */
    distinct?: ScrappedItemScalarFieldEnum | ScrappedItemScalarFieldEnum[]
  }

  /**
   * ScrappedItem findFirstOrThrow
   */
  export type ScrappedItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrappedItem
     */
    select?: ScrappedItemSelect<ExtArgs> | null
    /**
     * Filter, which ScrappedItem to fetch.
     */
    where?: ScrappedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrappedItems to fetch.
     */
    orderBy?: ScrappedItemOrderByWithRelationInput | ScrappedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrappedItems.
     */
    cursor?: ScrappedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrappedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrappedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrappedItems.
     */
    distinct?: ScrappedItemScalarFieldEnum | ScrappedItemScalarFieldEnum[]
  }

  /**
   * ScrappedItem findMany
   */
  export type ScrappedItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrappedItem
     */
    select?: ScrappedItemSelect<ExtArgs> | null
    /**
     * Filter, which ScrappedItems to fetch.
     */
    where?: ScrappedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrappedItems to fetch.
     */
    orderBy?: ScrappedItemOrderByWithRelationInput | ScrappedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScrappedItems.
     */
    cursor?: ScrappedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrappedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrappedItems.
     */
    skip?: number
    distinct?: ScrappedItemScalarFieldEnum | ScrappedItemScalarFieldEnum[]
  }

  /**
   * ScrappedItem create
   */
  export type ScrappedItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrappedItem
     */
    select?: ScrappedItemSelect<ExtArgs> | null
    /**
     * The data needed to create a ScrappedItem.
     */
    data: XOR<ScrappedItemCreateInput, ScrappedItemUncheckedCreateInput>
  }

  /**
   * ScrappedItem createMany
   */
  export type ScrappedItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScrappedItems.
     */
    data: ScrappedItemCreateManyInput | ScrappedItemCreateManyInput[]
  }

  /**
   * ScrappedItem update
   */
  export type ScrappedItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrappedItem
     */
    select?: ScrappedItemSelect<ExtArgs> | null
    /**
     * The data needed to update a ScrappedItem.
     */
    data: XOR<ScrappedItemUpdateInput, ScrappedItemUncheckedUpdateInput>
    /**
     * Choose, which ScrappedItem to update.
     */
    where: ScrappedItemWhereUniqueInput
  }

  /**
   * ScrappedItem updateMany
   */
  export type ScrappedItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScrappedItems.
     */
    data: XOR<ScrappedItemUpdateManyMutationInput, ScrappedItemUncheckedUpdateManyInput>
    /**
     * Filter which ScrappedItems to update
     */
    where?: ScrappedItemWhereInput
  }

  /**
   * ScrappedItem upsert
   */
  export type ScrappedItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrappedItem
     */
    select?: ScrappedItemSelect<ExtArgs> | null
    /**
     * The filter to search for the ScrappedItem to update in case it exists.
     */
    where: ScrappedItemWhereUniqueInput
    /**
     * In case the ScrappedItem found by the `where` argument doesn't exist, create a new ScrappedItem with this data.
     */
    create: XOR<ScrappedItemCreateInput, ScrappedItemUncheckedCreateInput>
    /**
     * In case the ScrappedItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScrappedItemUpdateInput, ScrappedItemUncheckedUpdateInput>
  }

  /**
   * ScrappedItem delete
   */
  export type ScrappedItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrappedItem
     */
    select?: ScrappedItemSelect<ExtArgs> | null
    /**
     * Filter which ScrappedItem to delete.
     */
    where: ScrappedItemWhereUniqueInput
  }

  /**
   * ScrappedItem deleteMany
   */
  export type ScrappedItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrappedItems to delete
     */
    where?: ScrappedItemWhereInput
  }

  /**
   * ScrappedItem findRaw
   */
  export type ScrappedItemFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ScrappedItem aggregateRaw
   */
  export type ScrappedItemAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * ScrappedItem without action
   */
  export type ScrappedItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrappedItem
     */
    select?: ScrappedItemSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const ScrappedItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    url: 'url'
  };

  export type ScrappedItemScalarFieldEnum = (typeof ScrappedItemScalarFieldEnum)[keyof typeof ScrappedItemScalarFieldEnum]


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


  export type ScrappedItemWhereInput = {
    AND?: ScrappedItemWhereInput | ScrappedItemWhereInput[]
    OR?: ScrappedItemWhereInput[]
    NOT?: ScrappedItemWhereInput | ScrappedItemWhereInput[]
    id?: StringFilter<"ScrappedItem"> | string
    title?: StringFilter<"ScrappedItem"> | string
    url?: StringFilter<"ScrappedItem"> | string
  }

  export type ScrappedItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
  }

  export type ScrappedItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScrappedItemWhereInput | ScrappedItemWhereInput[]
    OR?: ScrappedItemWhereInput[]
    NOT?: ScrappedItemWhereInput | ScrappedItemWhereInput[]
    title?: StringFilter<"ScrappedItem"> | string
    url?: StringFilter<"ScrappedItem"> | string
  }, "id">

  export type ScrappedItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    _count?: ScrappedItemCountOrderByAggregateInput
    _max?: ScrappedItemMaxOrderByAggregateInput
    _min?: ScrappedItemMinOrderByAggregateInput
  }

  export type ScrappedItemScalarWhereWithAggregatesInput = {
    AND?: ScrappedItemScalarWhereWithAggregatesInput | ScrappedItemScalarWhereWithAggregatesInput[]
    OR?: ScrappedItemScalarWhereWithAggregatesInput[]
    NOT?: ScrappedItemScalarWhereWithAggregatesInput | ScrappedItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScrappedItem"> | string
    title?: StringWithAggregatesFilter<"ScrappedItem"> | string
    url?: StringWithAggregatesFilter<"ScrappedItem"> | string
  }

  export type ScrappedItemCreateInput = {
    id?: string
    title: string
    url: string
  }

  export type ScrappedItemUncheckedCreateInput = {
    id?: string
    title: string
    url: string
  }

  export type ScrappedItemUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ScrappedItemUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ScrappedItemCreateManyInput = {
    id?: string
    title: string
    url: string
  }

  export type ScrappedItemUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type ScrappedItemUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
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

  export type ScrappedItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
  }

  export type ScrappedItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
  }

  export type ScrappedItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ScrappedItemDefaultArgs instead
     */
    export type ScrappedItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ScrappedItemDefaultArgs<ExtArgs>

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