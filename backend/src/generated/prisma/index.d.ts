
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Api_Token
 * 
 */
export type Api_Token = $Result.DefaultSelection<Prisma.$Api_TokenPayload>
/**
 * Model OAuth_Account
 * 
 */
export type OAuth_Account = $Result.DefaultSelection<Prisma.$OAuth_AccountPayload>
/**
 * Model Bill_Status
 * 
 */
export type Bill_Status = $Result.DefaultSelection<Prisma.$Bill_StatusPayload>
/**
 * Model Recurrence
 * 
 */
export type Recurrence = $Result.DefaultSelection<Prisma.$RecurrencePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Bank_Account
 * 
 */
export type Bank_Account = $Result.DefaultSelection<Prisma.$Bank_AccountPayload>
/**
 * Model Bills
 * 
 */
export type Bills = $Result.DefaultSelection<Prisma.$BillsPayload>
/**
 * Model Due_Bills
 * 
 */
export type Due_Bills = $Result.DefaultSelection<Prisma.$Due_BillsPayload>
/**
 * Model Bank_Account_Instance
 * 
 */
export type Bank_Account_Instance = $Result.DefaultSelection<Prisma.$Bank_Account_InstancePayload>
/**
 * Model Audit_Log
 * 
 */
export type Audit_Log = $Result.DefaultSelection<Prisma.$Audit_LogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.api_Token`: Exposes CRUD operations for the **Api_Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Api_Tokens
    * const api_Tokens = await prisma.api_Token.findMany()
    * ```
    */
  get api_Token(): Prisma.Api_TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.oAuth_Account`: Exposes CRUD operations for the **OAuth_Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OAuth_Accounts
    * const oAuth_Accounts = await prisma.oAuth_Account.findMany()
    * ```
    */
  get oAuth_Account(): Prisma.OAuth_AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bill_Status`: Exposes CRUD operations for the **Bill_Status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bill_Statuses
    * const bill_Statuses = await prisma.bill_Status.findMany()
    * ```
    */
  get bill_Status(): Prisma.Bill_StatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recurrence`: Exposes CRUD operations for the **Recurrence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recurrences
    * const recurrences = await prisma.recurrence.findMany()
    * ```
    */
  get recurrence(): Prisma.RecurrenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bank_Account`: Exposes CRUD operations for the **Bank_Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bank_Accounts
    * const bank_Accounts = await prisma.bank_Account.findMany()
    * ```
    */
  get bank_Account(): Prisma.Bank_AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bills`: Exposes CRUD operations for the **Bills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bills.findMany()
    * ```
    */
  get bills(): Prisma.BillsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.due_Bills`: Exposes CRUD operations for the **Due_Bills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Due_Bills
    * const due_Bills = await prisma.due_Bills.findMany()
    * ```
    */
  get due_Bills(): Prisma.Due_BillsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bank_Account_Instance`: Exposes CRUD operations for the **Bank_Account_Instance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bank_Account_Instances
    * const bank_Account_Instances = await prisma.bank_Account_Instance.findMany()
    * ```
    */
  get bank_Account_Instance(): Prisma.Bank_Account_InstanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audit_Log`: Exposes CRUD operations for the **Audit_Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audit_Logs
    * const audit_Logs = await prisma.audit_Log.findMany()
    * ```
    */
  get audit_Log(): Prisma.Audit_LogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Api_Token: 'Api_Token',
    OAuth_Account: 'OAuth_Account',
    Bill_Status: 'Bill_Status',
    Recurrence: 'Recurrence',
    Category: 'Category',
    Bank_Account: 'Bank_Account',
    Bills: 'Bills',
    Due_Bills: 'Due_Bills',
    Bank_Account_Instance: 'Bank_Account_Instance',
    Audit_Log: 'Audit_Log'
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
      modelProps: "user" | "api_Token" | "oAuth_Account" | "bill_Status" | "recurrence" | "category" | "bank_Account" | "bills" | "due_Bills" | "bank_Account_Instance" | "audit_Log"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Api_Token: {
        payload: Prisma.$Api_TokenPayload<ExtArgs>
        fields: Prisma.Api_TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Api_TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Api_TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Api_TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Api_TokenPayload>
          }
          findFirst: {
            args: Prisma.Api_TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Api_TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Api_TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Api_TokenPayload>
          }
          findMany: {
            args: Prisma.Api_TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Api_TokenPayload>[]
          }
          create: {
            args: Prisma.Api_TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Api_TokenPayload>
          }
          createMany: {
            args: Prisma.Api_TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Api_TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Api_TokenPayload>[]
          }
          delete: {
            args: Prisma.Api_TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Api_TokenPayload>
          }
          update: {
            args: Prisma.Api_TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Api_TokenPayload>
          }
          deleteMany: {
            args: Prisma.Api_TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Api_TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Api_TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Api_TokenPayload>[]
          }
          upsert: {
            args: Prisma.Api_TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Api_TokenPayload>
          }
          aggregate: {
            args: Prisma.Api_TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApi_Token>
          }
          groupBy: {
            args: Prisma.Api_TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<Api_TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.Api_TokenCountArgs<ExtArgs>
            result: $Utils.Optional<Api_TokenCountAggregateOutputType> | number
          }
        }
      }
      OAuth_Account: {
        payload: Prisma.$OAuth_AccountPayload<ExtArgs>
        fields: Prisma.OAuth_AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OAuth_AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuth_AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OAuth_AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuth_AccountPayload>
          }
          findFirst: {
            args: Prisma.OAuth_AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuth_AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OAuth_AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuth_AccountPayload>
          }
          findMany: {
            args: Prisma.OAuth_AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuth_AccountPayload>[]
          }
          create: {
            args: Prisma.OAuth_AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuth_AccountPayload>
          }
          createMany: {
            args: Prisma.OAuth_AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OAuth_AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuth_AccountPayload>[]
          }
          delete: {
            args: Prisma.OAuth_AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuth_AccountPayload>
          }
          update: {
            args: Prisma.OAuth_AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuth_AccountPayload>
          }
          deleteMany: {
            args: Prisma.OAuth_AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OAuth_AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OAuth_AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuth_AccountPayload>[]
          }
          upsert: {
            args: Prisma.OAuth_AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuth_AccountPayload>
          }
          aggregate: {
            args: Prisma.OAuth_AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOAuth_Account>
          }
          groupBy: {
            args: Prisma.OAuth_AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<OAuth_AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.OAuth_AccountCountArgs<ExtArgs>
            result: $Utils.Optional<OAuth_AccountCountAggregateOutputType> | number
          }
        }
      }
      Bill_Status: {
        payload: Prisma.$Bill_StatusPayload<ExtArgs>
        fields: Prisma.Bill_StatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Bill_StatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bill_StatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Bill_StatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bill_StatusPayload>
          }
          findFirst: {
            args: Prisma.Bill_StatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bill_StatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Bill_StatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bill_StatusPayload>
          }
          findMany: {
            args: Prisma.Bill_StatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bill_StatusPayload>[]
          }
          create: {
            args: Prisma.Bill_StatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bill_StatusPayload>
          }
          createMany: {
            args: Prisma.Bill_StatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Bill_StatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bill_StatusPayload>[]
          }
          delete: {
            args: Prisma.Bill_StatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bill_StatusPayload>
          }
          update: {
            args: Prisma.Bill_StatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bill_StatusPayload>
          }
          deleteMany: {
            args: Prisma.Bill_StatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Bill_StatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Bill_StatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bill_StatusPayload>[]
          }
          upsert: {
            args: Prisma.Bill_StatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bill_StatusPayload>
          }
          aggregate: {
            args: Prisma.Bill_StatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBill_Status>
          }
          groupBy: {
            args: Prisma.Bill_StatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<Bill_StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.Bill_StatusCountArgs<ExtArgs>
            result: $Utils.Optional<Bill_StatusCountAggregateOutputType> | number
          }
        }
      }
      Recurrence: {
        payload: Prisma.$RecurrencePayload<ExtArgs>
        fields: Prisma.RecurrenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecurrenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecurrenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload>
          }
          findFirst: {
            args: Prisma.RecurrenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecurrenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload>
          }
          findMany: {
            args: Prisma.RecurrenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload>[]
          }
          create: {
            args: Prisma.RecurrenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload>
          }
          createMany: {
            args: Prisma.RecurrenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecurrenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload>[]
          }
          delete: {
            args: Prisma.RecurrenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload>
          }
          update: {
            args: Prisma.RecurrenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload>
          }
          deleteMany: {
            args: Prisma.RecurrenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecurrenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecurrenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload>[]
          }
          upsert: {
            args: Prisma.RecurrenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload>
          }
          aggregate: {
            args: Prisma.RecurrenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurrence>
          }
          groupBy: {
            args: Prisma.RecurrenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecurrenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecurrenceCountArgs<ExtArgs>
            result: $Utils.Optional<RecurrenceCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Bank_Account: {
        payload: Prisma.$Bank_AccountPayload<ExtArgs>
        fields: Prisma.Bank_AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Bank_AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Bank_AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_AccountPayload>
          }
          findFirst: {
            args: Prisma.Bank_AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Bank_AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_AccountPayload>
          }
          findMany: {
            args: Prisma.Bank_AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_AccountPayload>[]
          }
          create: {
            args: Prisma.Bank_AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_AccountPayload>
          }
          createMany: {
            args: Prisma.Bank_AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Bank_AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_AccountPayload>[]
          }
          delete: {
            args: Prisma.Bank_AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_AccountPayload>
          }
          update: {
            args: Prisma.Bank_AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_AccountPayload>
          }
          deleteMany: {
            args: Prisma.Bank_AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Bank_AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Bank_AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_AccountPayload>[]
          }
          upsert: {
            args: Prisma.Bank_AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_AccountPayload>
          }
          aggregate: {
            args: Prisma.Bank_AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBank_Account>
          }
          groupBy: {
            args: Prisma.Bank_AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<Bank_AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.Bank_AccountCountArgs<ExtArgs>
            result: $Utils.Optional<Bank_AccountCountAggregateOutputType> | number
          }
        }
      }
      Bills: {
        payload: Prisma.$BillsPayload<ExtArgs>
        fields: Prisma.BillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>
          }
          findFirst: {
            args: Prisma.BillsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>
          }
          findMany: {
            args: Prisma.BillsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>[]
          }
          create: {
            args: Prisma.BillsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>
          }
          createMany: {
            args: Prisma.BillsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>[]
          }
          delete: {
            args: Prisma.BillsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>
          }
          update: {
            args: Prisma.BillsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>
          }
          deleteMany: {
            args: Prisma.BillsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>[]
          }
          upsert: {
            args: Prisma.BillsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillsPayload>
          }
          aggregate: {
            args: Prisma.BillsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBills>
          }
          groupBy: {
            args: Prisma.BillsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillsCountArgs<ExtArgs>
            result: $Utils.Optional<BillsCountAggregateOutputType> | number
          }
        }
      }
      Due_Bills: {
        payload: Prisma.$Due_BillsPayload<ExtArgs>
        fields: Prisma.Due_BillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Due_BillsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Due_BillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Due_BillsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Due_BillsPayload>
          }
          findFirst: {
            args: Prisma.Due_BillsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Due_BillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Due_BillsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Due_BillsPayload>
          }
          findMany: {
            args: Prisma.Due_BillsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Due_BillsPayload>[]
          }
          create: {
            args: Prisma.Due_BillsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Due_BillsPayload>
          }
          createMany: {
            args: Prisma.Due_BillsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Due_BillsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Due_BillsPayload>[]
          }
          delete: {
            args: Prisma.Due_BillsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Due_BillsPayload>
          }
          update: {
            args: Prisma.Due_BillsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Due_BillsPayload>
          }
          deleteMany: {
            args: Prisma.Due_BillsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Due_BillsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Due_BillsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Due_BillsPayload>[]
          }
          upsert: {
            args: Prisma.Due_BillsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Due_BillsPayload>
          }
          aggregate: {
            args: Prisma.Due_BillsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDue_Bills>
          }
          groupBy: {
            args: Prisma.Due_BillsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Due_BillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Due_BillsCountArgs<ExtArgs>
            result: $Utils.Optional<Due_BillsCountAggregateOutputType> | number
          }
        }
      }
      Bank_Account_Instance: {
        payload: Prisma.$Bank_Account_InstancePayload<ExtArgs>
        fields: Prisma.Bank_Account_InstanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Bank_Account_InstanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_Account_InstancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Bank_Account_InstanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_Account_InstancePayload>
          }
          findFirst: {
            args: Prisma.Bank_Account_InstanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_Account_InstancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Bank_Account_InstanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_Account_InstancePayload>
          }
          findMany: {
            args: Prisma.Bank_Account_InstanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_Account_InstancePayload>[]
          }
          create: {
            args: Prisma.Bank_Account_InstanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_Account_InstancePayload>
          }
          createMany: {
            args: Prisma.Bank_Account_InstanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Bank_Account_InstanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_Account_InstancePayload>[]
          }
          delete: {
            args: Prisma.Bank_Account_InstanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_Account_InstancePayload>
          }
          update: {
            args: Prisma.Bank_Account_InstanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_Account_InstancePayload>
          }
          deleteMany: {
            args: Prisma.Bank_Account_InstanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Bank_Account_InstanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Bank_Account_InstanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_Account_InstancePayload>[]
          }
          upsert: {
            args: Prisma.Bank_Account_InstanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Bank_Account_InstancePayload>
          }
          aggregate: {
            args: Prisma.Bank_Account_InstanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBank_Account_Instance>
          }
          groupBy: {
            args: Prisma.Bank_Account_InstanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<Bank_Account_InstanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.Bank_Account_InstanceCountArgs<ExtArgs>
            result: $Utils.Optional<Bank_Account_InstanceCountAggregateOutputType> | number
          }
        }
      }
      Audit_Log: {
        payload: Prisma.$Audit_LogPayload<ExtArgs>
        fields: Prisma.Audit_LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Audit_LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Audit_LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogPayload>
          }
          findFirst: {
            args: Prisma.Audit_LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Audit_LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogPayload>
          }
          findMany: {
            args: Prisma.Audit_LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogPayload>[]
          }
          create: {
            args: Prisma.Audit_LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogPayload>
          }
          createMany: {
            args: Prisma.Audit_LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Audit_LogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogPayload>[]
          }
          delete: {
            args: Prisma.Audit_LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogPayload>
          }
          update: {
            args: Prisma.Audit_LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogPayload>
          }
          deleteMany: {
            args: Prisma.Audit_LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Audit_LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Audit_LogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogPayload>[]
          }
          upsert: {
            args: Prisma.Audit_LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogPayload>
          }
          aggregate: {
            args: Prisma.Audit_LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudit_Log>
          }
          groupBy: {
            args: Prisma.Audit_LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<Audit_LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.Audit_LogCountArgs<ExtArgs>
            result: $Utils.Optional<Audit_LogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    user?: UserOmit
    api_Token?: Api_TokenOmit
    oAuth_Account?: OAuth_AccountOmit
    bill_Status?: Bill_StatusOmit
    recurrence?: RecurrenceOmit
    category?: CategoryOmit
    bank_Account?: Bank_AccountOmit
    bills?: BillsOmit
    due_Bills?: Due_BillsOmit
    bank_Account_Instance?: Bank_Account_InstanceOmit
    audit_Log?: Audit_LogOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    apiTokens: number
    oauthAccounts: number
    billStatuses: number
    recurrences: number
    categories: number
    bankAccounts: number
    bills: number
    dueBills: number
    bankAccountInstances: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiTokens?: boolean | UserCountOutputTypeCountApiTokensArgs
    oauthAccounts?: boolean | UserCountOutputTypeCountOauthAccountsArgs
    billStatuses?: boolean | UserCountOutputTypeCountBillStatusesArgs
    recurrences?: boolean | UserCountOutputTypeCountRecurrencesArgs
    categories?: boolean | UserCountOutputTypeCountCategoriesArgs
    bankAccounts?: boolean | UserCountOutputTypeCountBankAccountsArgs
    bills?: boolean | UserCountOutputTypeCountBillsArgs
    dueBills?: boolean | UserCountOutputTypeCountDueBillsArgs
    bankAccountInstances?: boolean | UserCountOutputTypeCountBankAccountInstancesArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApiTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Api_TokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOauthAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuth_AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBillStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Bill_StatusWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecurrencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurrenceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Bank_AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDueBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Due_BillsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBankAccountInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Bank_Account_InstanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Audit_LogWhereInput
  }


  /**
   * Count Type Bill_StatusCountOutputType
   */

  export type Bill_StatusCountOutputType = {
    dueBills: number
    bankAccountInstances: number
  }

  export type Bill_StatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dueBills?: boolean | Bill_StatusCountOutputTypeCountDueBillsArgs
    bankAccountInstances?: boolean | Bill_StatusCountOutputTypeCountBankAccountInstancesArgs
  }

  // Custom InputTypes
  /**
   * Bill_StatusCountOutputType without action
   */
  export type Bill_StatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill_StatusCountOutputType
     */
    select?: Bill_StatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Bill_StatusCountOutputType without action
   */
  export type Bill_StatusCountOutputTypeCountDueBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Due_BillsWhereInput
  }

  /**
   * Bill_StatusCountOutputType without action
   */
  export type Bill_StatusCountOutputTypeCountBankAccountInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Bank_Account_InstanceWhereInput
  }


  /**
   * Count Type RecurrenceCountOutputType
   */

  export type RecurrenceCountOutputType = {
    bankAccounts: number
    dueBills: number
    Bills: number
  }

  export type RecurrenceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankAccounts?: boolean | RecurrenceCountOutputTypeCountBankAccountsArgs
    dueBills?: boolean | RecurrenceCountOutputTypeCountDueBillsArgs
    Bills?: boolean | RecurrenceCountOutputTypeCountBillsArgs
  }

  // Custom InputTypes
  /**
   * RecurrenceCountOutputType without action
   */
  export type RecurrenceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceCountOutputType
     */
    select?: RecurrenceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecurrenceCountOutputType without action
   */
  export type RecurrenceCountOutputTypeCountBankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Bank_AccountWhereInput
  }

  /**
   * RecurrenceCountOutputType without action
   */
  export type RecurrenceCountOutputTypeCountDueBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Due_BillsWhereInput
  }

  /**
   * RecurrenceCountOutputType without action
   */
  export type RecurrenceCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillsWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    bills: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bills?: boolean | CategoryCountOutputTypeCountBillsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillsWhereInput
  }


  /**
   * Count Type Bank_AccountCountOutputType
   */

  export type Bank_AccountCountOutputType = {
    bills: number
    dueBills: number
    bankAccountInstances: number
  }

  export type Bank_AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bills?: boolean | Bank_AccountCountOutputTypeCountBillsArgs
    dueBills?: boolean | Bank_AccountCountOutputTypeCountDueBillsArgs
    bankAccountInstances?: boolean | Bank_AccountCountOutputTypeCountBankAccountInstancesArgs
  }

  // Custom InputTypes
  /**
   * Bank_AccountCountOutputType without action
   */
  export type Bank_AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_AccountCountOutputType
     */
    select?: Bank_AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Bank_AccountCountOutputType without action
   */
  export type Bank_AccountCountOutputTypeCountBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillsWhereInput
  }

  /**
   * Bank_AccountCountOutputType without action
   */
  export type Bank_AccountCountOutputTypeCountDueBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Due_BillsWhereInput
  }

  /**
   * Bank_AccountCountOutputType without action
   */
  export type Bank_AccountCountOutputTypeCountBankAccountInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Bank_Account_InstanceWhereInput
  }


  /**
   * Count Type BillsCountOutputType
   */

  export type BillsCountOutputType = {
    dueBills: number
  }

  export type BillsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dueBills?: boolean | BillsCountOutputTypeCountDueBillsArgs
  }

  // Custom InputTypes
  /**
   * BillsCountOutputType without action
   */
  export type BillsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillsCountOutputType
     */
    select?: BillsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BillsCountOutputType without action
   */
  export type BillsCountOutputTypeCountDueBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Due_BillsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    hashed_password: string | null
    is_active: boolean | null
    is_superuser: boolean | null
    is_verified: boolean | null
    mfa_enabled: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    hashed_password: string | null
    is_active: boolean | null
    is_superuser: boolean | null
    is_verified: boolean | null
    mfa_enabled: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    hashed_password: number
    is_active: number
    is_superuser: number
    is_verified: number
    mfa_enabled: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    hashed_password?: true
    is_active?: true
    is_superuser?: true
    is_verified?: true
    mfa_enabled?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    hashed_password?: true
    is_active?: true
    is_superuser?: true
    is_verified?: true
    mfa_enabled?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    hashed_password?: true
    is_active?: true
    is_superuser?: true
    is_verified?: true
    mfa_enabled?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    hashed_password: string
    is_active: boolean
    is_superuser: boolean
    is_verified: boolean
    mfa_enabled: boolean
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hashed_password?: boolean
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: boolean
    updated_at?: boolean
    apiTokens?: boolean | User$apiTokensArgs<ExtArgs>
    oauthAccounts?: boolean | User$oauthAccountsArgs<ExtArgs>
    billStatuses?: boolean | User$billStatusesArgs<ExtArgs>
    recurrences?: boolean | User$recurrencesArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    bankAccounts?: boolean | User$bankAccountsArgs<ExtArgs>
    bills?: boolean | User$billsArgs<ExtArgs>
    dueBills?: boolean | User$dueBillsArgs<ExtArgs>
    bankAccountInstances?: boolean | User$bankAccountInstancesArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hashed_password?: boolean
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hashed_password?: boolean
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    hashed_password?: boolean
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "hashed_password" | "is_active" | "is_superuser" | "is_verified" | "mfa_enabled" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiTokens?: boolean | User$apiTokensArgs<ExtArgs>
    oauthAccounts?: boolean | User$oauthAccountsArgs<ExtArgs>
    billStatuses?: boolean | User$billStatusesArgs<ExtArgs>
    recurrences?: boolean | User$recurrencesArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    bankAccounts?: boolean | User$bankAccountsArgs<ExtArgs>
    bills?: boolean | User$billsArgs<ExtArgs>
    dueBills?: boolean | User$dueBillsArgs<ExtArgs>
    bankAccountInstances?: boolean | User$bankAccountInstancesArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      apiTokens: Prisma.$Api_TokenPayload<ExtArgs>[]
      oauthAccounts: Prisma.$OAuth_AccountPayload<ExtArgs>[]
      billStatuses: Prisma.$Bill_StatusPayload<ExtArgs>[]
      recurrences: Prisma.$RecurrencePayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      bankAccounts: Prisma.$Bank_AccountPayload<ExtArgs>[]
      bills: Prisma.$BillsPayload<ExtArgs>[]
      dueBills: Prisma.$Due_BillsPayload<ExtArgs>[]
      bankAccountInstances: Prisma.$Bank_Account_InstancePayload<ExtArgs>[]
      auditLogs: Prisma.$Audit_LogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      hashed_password: string
      is_active: boolean
      is_superuser: boolean
      is_verified: boolean
      mfa_enabled: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apiTokens<T extends User$apiTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$apiTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Api_TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    oauthAccounts<T extends User$oauthAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$oauthAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuth_AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    billStatuses<T extends User$billStatusesArgs<ExtArgs> = {}>(args?: Subset<T, User$billStatusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bill_StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recurrences<T extends User$recurrencesArgs<ExtArgs> = {}>(args?: Subset<T, User$recurrencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends User$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bankAccounts<T extends User$bankAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$bankAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bank_AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bills<T extends User$billsArgs<ExtArgs> = {}>(args?: Subset<T, User$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dueBills<T extends User$dueBillsArgs<ExtArgs> = {}>(args?: Subset<T, User$dueBillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Due_BillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bankAccountInstances<T extends User$bankAccountInstancesArgs<ExtArgs> = {}>(args?: Subset<T, User$bankAccountInstancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bank_Account_InstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Audit_LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly hashed_password: FieldRef<"User", 'String'>
    readonly is_active: FieldRef<"User", 'Boolean'>
    readonly is_superuser: FieldRef<"User", 'Boolean'>
    readonly is_verified: FieldRef<"User", 'Boolean'>
    readonly mfa_enabled: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.apiTokens
   */
  export type User$apiTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api_Token
     */
    select?: Api_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api_Token
     */
    omit?: Api_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Api_TokenInclude<ExtArgs> | null
    where?: Api_TokenWhereInput
    orderBy?: Api_TokenOrderByWithRelationInput | Api_TokenOrderByWithRelationInput[]
    cursor?: Api_TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Api_TokenScalarFieldEnum | Api_TokenScalarFieldEnum[]
  }

  /**
   * User.oauthAccounts
   */
  export type User$oauthAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuth_Account
     */
    select?: OAuth_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuth_Account
     */
    omit?: OAuth_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuth_AccountInclude<ExtArgs> | null
    where?: OAuth_AccountWhereInput
    orderBy?: OAuth_AccountOrderByWithRelationInput | OAuth_AccountOrderByWithRelationInput[]
    cursor?: OAuth_AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OAuth_AccountScalarFieldEnum | OAuth_AccountScalarFieldEnum[]
  }

  /**
   * User.billStatuses
   */
  export type User$billStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill_Status
     */
    select?: Bill_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill_Status
     */
    omit?: Bill_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bill_StatusInclude<ExtArgs> | null
    where?: Bill_StatusWhereInput
    orderBy?: Bill_StatusOrderByWithRelationInput | Bill_StatusOrderByWithRelationInput[]
    cursor?: Bill_StatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Bill_StatusScalarFieldEnum | Bill_StatusScalarFieldEnum[]
  }

  /**
   * User.recurrences
   */
  export type User$recurrencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurrence
     */
    omit?: RecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    where?: RecurrenceWhereInput
    orderBy?: RecurrenceOrderByWithRelationInput | RecurrenceOrderByWithRelationInput[]
    cursor?: RecurrenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecurrenceScalarFieldEnum | RecurrenceScalarFieldEnum[]
  }

  /**
   * User.categories
   */
  export type User$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * User.bankAccounts
   */
  export type User$bankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account
     */
    select?: Bank_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account
     */
    omit?: Bank_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_AccountInclude<ExtArgs> | null
    where?: Bank_AccountWhereInput
    orderBy?: Bank_AccountOrderByWithRelationInput | Bank_AccountOrderByWithRelationInput[]
    cursor?: Bank_AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Bank_AccountScalarFieldEnum | Bank_AccountScalarFieldEnum[]
  }

  /**
   * User.bills
   */
  export type User$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    where?: BillsWhereInput
    orderBy?: BillsOrderByWithRelationInput | BillsOrderByWithRelationInput[]
    cursor?: BillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * User.dueBills
   */
  export type User$dueBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Due_Bills
     */
    select?: Due_BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Due_Bills
     */
    omit?: Due_BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Due_BillsInclude<ExtArgs> | null
    where?: Due_BillsWhereInput
    orderBy?: Due_BillsOrderByWithRelationInput | Due_BillsOrderByWithRelationInput[]
    cursor?: Due_BillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Due_BillsScalarFieldEnum | Due_BillsScalarFieldEnum[]
  }

  /**
   * User.bankAccountInstances
   */
  export type User$bankAccountInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account_Instance
     */
    select?: Bank_Account_InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account_Instance
     */
    omit?: Bank_Account_InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_Account_InstanceInclude<ExtArgs> | null
    where?: Bank_Account_InstanceWhereInput
    orderBy?: Bank_Account_InstanceOrderByWithRelationInput | Bank_Account_InstanceOrderByWithRelationInput[]
    cursor?: Bank_Account_InstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Bank_Account_InstanceScalarFieldEnum | Bank_Account_InstanceScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Log
     */
    select?: Audit_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Log
     */
    omit?: Audit_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogInclude<ExtArgs> | null
    where?: Audit_LogWhereInput
    orderBy?: Audit_LogOrderByWithRelationInput | Audit_LogOrderByWithRelationInput[]
    cursor?: Audit_LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Audit_LogScalarFieldEnum | Audit_LogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Api_Token
   */

  export type AggregateApi_Token = {
    _count: Api_TokenCountAggregateOutputType | null
    _avg: Api_TokenAvgAggregateOutputType | null
    _sum: Api_TokenSumAggregateOutputType | null
    _min: Api_TokenMinAggregateOutputType | null
    _max: Api_TokenMaxAggregateOutputType | null
  }

  export type Api_TokenAvgAggregateOutputType = {
    id: number | null
  }

  export type Api_TokenSumAggregateOutputType = {
    id: number | null
  }

  export type Api_TokenMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    token: string | null
    issued_at: Date | null
    expires_at: Date | null
  }

  export type Api_TokenMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    token: string | null
    issued_at: Date | null
    expires_at: Date | null
  }

  export type Api_TokenCountAggregateOutputType = {
    id: number
    user_id: number
    token: number
    issued_at: number
    expires_at: number
    _all: number
  }


  export type Api_TokenAvgAggregateInputType = {
    id?: true
  }

  export type Api_TokenSumAggregateInputType = {
    id?: true
  }

  export type Api_TokenMinAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    issued_at?: true
    expires_at?: true
  }

  export type Api_TokenMaxAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    issued_at?: true
    expires_at?: true
  }

  export type Api_TokenCountAggregateInputType = {
    id?: true
    user_id?: true
    token?: true
    issued_at?: true
    expires_at?: true
    _all?: true
  }

  export type Api_TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Api_Token to aggregate.
     */
    where?: Api_TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Api_Tokens to fetch.
     */
    orderBy?: Api_TokenOrderByWithRelationInput | Api_TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Api_TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Api_Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Api_Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Api_Tokens
    **/
    _count?: true | Api_TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Api_TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Api_TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Api_TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Api_TokenMaxAggregateInputType
  }

  export type GetApi_TokenAggregateType<T extends Api_TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateApi_Token]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApi_Token[P]>
      : GetScalarType<T[P], AggregateApi_Token[P]>
  }




  export type Api_TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Api_TokenWhereInput
    orderBy?: Api_TokenOrderByWithAggregationInput | Api_TokenOrderByWithAggregationInput[]
    by: Api_TokenScalarFieldEnum[] | Api_TokenScalarFieldEnum
    having?: Api_TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Api_TokenCountAggregateInputType | true
    _avg?: Api_TokenAvgAggregateInputType
    _sum?: Api_TokenSumAggregateInputType
    _min?: Api_TokenMinAggregateInputType
    _max?: Api_TokenMaxAggregateInputType
  }

  export type Api_TokenGroupByOutputType = {
    id: number
    user_id: string
    token: string
    issued_at: Date
    expires_at: Date | null
    _count: Api_TokenCountAggregateOutputType | null
    _avg: Api_TokenAvgAggregateOutputType | null
    _sum: Api_TokenSumAggregateOutputType | null
    _min: Api_TokenMinAggregateOutputType | null
    _max: Api_TokenMaxAggregateOutputType | null
  }

  type GetApi_TokenGroupByPayload<T extends Api_TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Api_TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Api_TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Api_TokenGroupByOutputType[P]>
            : GetScalarType<T[P], Api_TokenGroupByOutputType[P]>
        }
      >
    >


  export type Api_TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    issued_at?: boolean
    expires_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api_Token"]>

  export type Api_TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    issued_at?: boolean
    expires_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api_Token"]>

  export type Api_TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    token?: boolean
    issued_at?: boolean
    expires_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api_Token"]>

  export type Api_TokenSelectScalar = {
    id?: boolean
    user_id?: boolean
    token?: boolean
    issued_at?: boolean
    expires_at?: boolean
  }

  export type Api_TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "token" | "issued_at" | "expires_at", ExtArgs["result"]["api_Token"]>
  export type Api_TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Api_TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Api_TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Api_TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Api_Token"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      token: string
      issued_at: Date
      expires_at: Date | null
    }, ExtArgs["result"]["api_Token"]>
    composites: {}
  }

  type Api_TokenGetPayload<S extends boolean | null | undefined | Api_TokenDefaultArgs> = $Result.GetResult<Prisma.$Api_TokenPayload, S>

  type Api_TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Api_TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Api_TokenCountAggregateInputType | true
    }

  export interface Api_TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Api_Token'], meta: { name: 'Api_Token' } }
    /**
     * Find zero or one Api_Token that matches the filter.
     * @param {Api_TokenFindUniqueArgs} args - Arguments to find a Api_Token
     * @example
     * // Get one Api_Token
     * const api_Token = await prisma.api_Token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Api_TokenFindUniqueArgs>(args: SelectSubset<T, Api_TokenFindUniqueArgs<ExtArgs>>): Prisma__Api_TokenClient<$Result.GetResult<Prisma.$Api_TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Api_Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Api_TokenFindUniqueOrThrowArgs} args - Arguments to find a Api_Token
     * @example
     * // Get one Api_Token
     * const api_Token = await prisma.api_Token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Api_TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, Api_TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Api_TokenClient<$Result.GetResult<Prisma.$Api_TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api_Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_TokenFindFirstArgs} args - Arguments to find a Api_Token
     * @example
     * // Get one Api_Token
     * const api_Token = await prisma.api_Token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Api_TokenFindFirstArgs>(args?: SelectSubset<T, Api_TokenFindFirstArgs<ExtArgs>>): Prisma__Api_TokenClient<$Result.GetResult<Prisma.$Api_TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api_Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_TokenFindFirstOrThrowArgs} args - Arguments to find a Api_Token
     * @example
     * // Get one Api_Token
     * const api_Token = await prisma.api_Token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Api_TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, Api_TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__Api_TokenClient<$Result.GetResult<Prisma.$Api_TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Api_Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Api_Tokens
     * const api_Tokens = await prisma.api_Token.findMany()
     * 
     * // Get first 10 Api_Tokens
     * const api_Tokens = await prisma.api_Token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const api_TokenWithIdOnly = await prisma.api_Token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Api_TokenFindManyArgs>(args?: SelectSubset<T, Api_TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Api_TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Api_Token.
     * @param {Api_TokenCreateArgs} args - Arguments to create a Api_Token.
     * @example
     * // Create one Api_Token
     * const Api_Token = await prisma.api_Token.create({
     *   data: {
     *     // ... data to create a Api_Token
     *   }
     * })
     * 
     */
    create<T extends Api_TokenCreateArgs>(args: SelectSubset<T, Api_TokenCreateArgs<ExtArgs>>): Prisma__Api_TokenClient<$Result.GetResult<Prisma.$Api_TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Api_Tokens.
     * @param {Api_TokenCreateManyArgs} args - Arguments to create many Api_Tokens.
     * @example
     * // Create many Api_Tokens
     * const api_Token = await prisma.api_Token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Api_TokenCreateManyArgs>(args?: SelectSubset<T, Api_TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Api_Tokens and returns the data saved in the database.
     * @param {Api_TokenCreateManyAndReturnArgs} args - Arguments to create many Api_Tokens.
     * @example
     * // Create many Api_Tokens
     * const api_Token = await prisma.api_Token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Api_Tokens and only return the `id`
     * const api_TokenWithIdOnly = await prisma.api_Token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Api_TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, Api_TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Api_TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Api_Token.
     * @param {Api_TokenDeleteArgs} args - Arguments to delete one Api_Token.
     * @example
     * // Delete one Api_Token
     * const Api_Token = await prisma.api_Token.delete({
     *   where: {
     *     // ... filter to delete one Api_Token
     *   }
     * })
     * 
     */
    delete<T extends Api_TokenDeleteArgs>(args: SelectSubset<T, Api_TokenDeleteArgs<ExtArgs>>): Prisma__Api_TokenClient<$Result.GetResult<Prisma.$Api_TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Api_Token.
     * @param {Api_TokenUpdateArgs} args - Arguments to update one Api_Token.
     * @example
     * // Update one Api_Token
     * const api_Token = await prisma.api_Token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Api_TokenUpdateArgs>(args: SelectSubset<T, Api_TokenUpdateArgs<ExtArgs>>): Prisma__Api_TokenClient<$Result.GetResult<Prisma.$Api_TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Api_Tokens.
     * @param {Api_TokenDeleteManyArgs} args - Arguments to filter Api_Tokens to delete.
     * @example
     * // Delete a few Api_Tokens
     * const { count } = await prisma.api_Token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Api_TokenDeleteManyArgs>(args?: SelectSubset<T, Api_TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Api_Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Api_Tokens
     * const api_Token = await prisma.api_Token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Api_TokenUpdateManyArgs>(args: SelectSubset<T, Api_TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Api_Tokens and returns the data updated in the database.
     * @param {Api_TokenUpdateManyAndReturnArgs} args - Arguments to update many Api_Tokens.
     * @example
     * // Update many Api_Tokens
     * const api_Token = await prisma.api_Token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Api_Tokens and only return the `id`
     * const api_TokenWithIdOnly = await prisma.api_Token.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Api_TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, Api_TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Api_TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Api_Token.
     * @param {Api_TokenUpsertArgs} args - Arguments to update or create a Api_Token.
     * @example
     * // Update or create a Api_Token
     * const api_Token = await prisma.api_Token.upsert({
     *   create: {
     *     // ... data to create a Api_Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Api_Token we want to update
     *   }
     * })
     */
    upsert<T extends Api_TokenUpsertArgs>(args: SelectSubset<T, Api_TokenUpsertArgs<ExtArgs>>): Prisma__Api_TokenClient<$Result.GetResult<Prisma.$Api_TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Api_Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_TokenCountArgs} args - Arguments to filter Api_Tokens to count.
     * @example
     * // Count the number of Api_Tokens
     * const count = await prisma.api_Token.count({
     *   where: {
     *     // ... the filter for the Api_Tokens we want to count
     *   }
     * })
    **/
    count<T extends Api_TokenCountArgs>(
      args?: Subset<T, Api_TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Api_TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Api_Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Api_TokenAggregateArgs>(args: Subset<T, Api_TokenAggregateArgs>): Prisma.PrismaPromise<GetApi_TokenAggregateType<T>>

    /**
     * Group by Api_Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Api_TokenGroupByArgs} args - Group by arguments.
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
      T extends Api_TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Api_TokenGroupByArgs['orderBy'] }
        : { orderBy?: Api_TokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Api_TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApi_TokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Api_Token model
   */
  readonly fields: Api_TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Api_Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Api_TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Api_Token model
   */
  interface Api_TokenFieldRefs {
    readonly id: FieldRef<"Api_Token", 'Int'>
    readonly user_id: FieldRef<"Api_Token", 'String'>
    readonly token: FieldRef<"Api_Token", 'String'>
    readonly issued_at: FieldRef<"Api_Token", 'DateTime'>
    readonly expires_at: FieldRef<"Api_Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Api_Token findUnique
   */
  export type Api_TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api_Token
     */
    select?: Api_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api_Token
     */
    omit?: Api_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Api_TokenInclude<ExtArgs> | null
    /**
     * Filter, which Api_Token to fetch.
     */
    where: Api_TokenWhereUniqueInput
  }

  /**
   * Api_Token findUniqueOrThrow
   */
  export type Api_TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api_Token
     */
    select?: Api_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api_Token
     */
    omit?: Api_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Api_TokenInclude<ExtArgs> | null
    /**
     * Filter, which Api_Token to fetch.
     */
    where: Api_TokenWhereUniqueInput
  }

  /**
   * Api_Token findFirst
   */
  export type Api_TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api_Token
     */
    select?: Api_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api_Token
     */
    omit?: Api_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Api_TokenInclude<ExtArgs> | null
    /**
     * Filter, which Api_Token to fetch.
     */
    where?: Api_TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Api_Tokens to fetch.
     */
    orderBy?: Api_TokenOrderByWithRelationInput | Api_TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Api_Tokens.
     */
    cursor?: Api_TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Api_Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Api_Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Api_Tokens.
     */
    distinct?: Api_TokenScalarFieldEnum | Api_TokenScalarFieldEnum[]
  }

  /**
   * Api_Token findFirstOrThrow
   */
  export type Api_TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api_Token
     */
    select?: Api_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api_Token
     */
    omit?: Api_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Api_TokenInclude<ExtArgs> | null
    /**
     * Filter, which Api_Token to fetch.
     */
    where?: Api_TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Api_Tokens to fetch.
     */
    orderBy?: Api_TokenOrderByWithRelationInput | Api_TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Api_Tokens.
     */
    cursor?: Api_TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Api_Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Api_Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Api_Tokens.
     */
    distinct?: Api_TokenScalarFieldEnum | Api_TokenScalarFieldEnum[]
  }

  /**
   * Api_Token findMany
   */
  export type Api_TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api_Token
     */
    select?: Api_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api_Token
     */
    omit?: Api_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Api_TokenInclude<ExtArgs> | null
    /**
     * Filter, which Api_Tokens to fetch.
     */
    where?: Api_TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Api_Tokens to fetch.
     */
    orderBy?: Api_TokenOrderByWithRelationInput | Api_TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Api_Tokens.
     */
    cursor?: Api_TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Api_Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Api_Tokens.
     */
    skip?: number
    distinct?: Api_TokenScalarFieldEnum | Api_TokenScalarFieldEnum[]
  }

  /**
   * Api_Token create
   */
  export type Api_TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api_Token
     */
    select?: Api_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api_Token
     */
    omit?: Api_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Api_TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Api_Token.
     */
    data: XOR<Api_TokenCreateInput, Api_TokenUncheckedCreateInput>
  }

  /**
   * Api_Token createMany
   */
  export type Api_TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Api_Tokens.
     */
    data: Api_TokenCreateManyInput | Api_TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Api_Token createManyAndReturn
   */
  export type Api_TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api_Token
     */
    select?: Api_TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Api_Token
     */
    omit?: Api_TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Api_Tokens.
     */
    data: Api_TokenCreateManyInput | Api_TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Api_TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Api_Token update
   */
  export type Api_TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api_Token
     */
    select?: Api_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api_Token
     */
    omit?: Api_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Api_TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Api_Token.
     */
    data: XOR<Api_TokenUpdateInput, Api_TokenUncheckedUpdateInput>
    /**
     * Choose, which Api_Token to update.
     */
    where: Api_TokenWhereUniqueInput
  }

  /**
   * Api_Token updateMany
   */
  export type Api_TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Api_Tokens.
     */
    data: XOR<Api_TokenUpdateManyMutationInput, Api_TokenUncheckedUpdateManyInput>
    /**
     * Filter which Api_Tokens to update
     */
    where?: Api_TokenWhereInput
    /**
     * Limit how many Api_Tokens to update.
     */
    limit?: number
  }

  /**
   * Api_Token updateManyAndReturn
   */
  export type Api_TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api_Token
     */
    select?: Api_TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Api_Token
     */
    omit?: Api_TokenOmit<ExtArgs> | null
    /**
     * The data used to update Api_Tokens.
     */
    data: XOR<Api_TokenUpdateManyMutationInput, Api_TokenUncheckedUpdateManyInput>
    /**
     * Filter which Api_Tokens to update
     */
    where?: Api_TokenWhereInput
    /**
     * Limit how many Api_Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Api_TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Api_Token upsert
   */
  export type Api_TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api_Token
     */
    select?: Api_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api_Token
     */
    omit?: Api_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Api_TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Api_Token to update in case it exists.
     */
    where: Api_TokenWhereUniqueInput
    /**
     * In case the Api_Token found by the `where` argument doesn't exist, create a new Api_Token with this data.
     */
    create: XOR<Api_TokenCreateInput, Api_TokenUncheckedCreateInput>
    /**
     * In case the Api_Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Api_TokenUpdateInput, Api_TokenUncheckedUpdateInput>
  }

  /**
   * Api_Token delete
   */
  export type Api_TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api_Token
     */
    select?: Api_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api_Token
     */
    omit?: Api_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Api_TokenInclude<ExtArgs> | null
    /**
     * Filter which Api_Token to delete.
     */
    where: Api_TokenWhereUniqueInput
  }

  /**
   * Api_Token deleteMany
   */
  export type Api_TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Api_Tokens to delete
     */
    where?: Api_TokenWhereInput
    /**
     * Limit how many Api_Tokens to delete.
     */
    limit?: number
  }

  /**
   * Api_Token without action
   */
  export type Api_TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api_Token
     */
    select?: Api_TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api_Token
     */
    omit?: Api_TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Api_TokenInclude<ExtArgs> | null
  }


  /**
   * Model OAuth_Account
   */

  export type AggregateOAuth_Account = {
    _count: OAuth_AccountCountAggregateOutputType | null
    _avg: OAuth_AccountAvgAggregateOutputType | null
    _sum: OAuth_AccountSumAggregateOutputType | null
    _min: OAuth_AccountMinAggregateOutputType | null
    _max: OAuth_AccountMaxAggregateOutputType | null
  }

  export type OAuth_AccountAvgAggregateOutputType = {
    id: number | null
  }

  export type OAuth_AccountSumAggregateOutputType = {
    id: number | null
  }

  export type OAuth_AccountMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    provider: string | null
    account_id: string | null
    created_at: Date | null
  }

  export type OAuth_AccountMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    provider: string | null
    account_id: string | null
    created_at: Date | null
  }

  export type OAuth_AccountCountAggregateOutputType = {
    id: number
    user_id: number
    provider: number
    account_id: number
    created_at: number
    _all: number
  }


  export type OAuth_AccountAvgAggregateInputType = {
    id?: true
  }

  export type OAuth_AccountSumAggregateInputType = {
    id?: true
  }

  export type OAuth_AccountMinAggregateInputType = {
    id?: true
    user_id?: true
    provider?: true
    account_id?: true
    created_at?: true
  }

  export type OAuth_AccountMaxAggregateInputType = {
    id?: true
    user_id?: true
    provider?: true
    account_id?: true
    created_at?: true
  }

  export type OAuth_AccountCountAggregateInputType = {
    id?: true
    user_id?: true
    provider?: true
    account_id?: true
    created_at?: true
    _all?: true
  }

  export type OAuth_AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuth_Account to aggregate.
     */
    where?: OAuth_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuth_Accounts to fetch.
     */
    orderBy?: OAuth_AccountOrderByWithRelationInput | OAuth_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OAuth_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuth_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuth_Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OAuth_Accounts
    **/
    _count?: true | OAuth_AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OAuth_AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OAuth_AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OAuth_AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OAuth_AccountMaxAggregateInputType
  }

  export type GetOAuth_AccountAggregateType<T extends OAuth_AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateOAuth_Account]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOAuth_Account[P]>
      : GetScalarType<T[P], AggregateOAuth_Account[P]>
  }




  export type OAuth_AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuth_AccountWhereInput
    orderBy?: OAuth_AccountOrderByWithAggregationInput | OAuth_AccountOrderByWithAggregationInput[]
    by: OAuth_AccountScalarFieldEnum[] | OAuth_AccountScalarFieldEnum
    having?: OAuth_AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OAuth_AccountCountAggregateInputType | true
    _avg?: OAuth_AccountAvgAggregateInputType
    _sum?: OAuth_AccountSumAggregateInputType
    _min?: OAuth_AccountMinAggregateInputType
    _max?: OAuth_AccountMaxAggregateInputType
  }

  export type OAuth_AccountGroupByOutputType = {
    id: number
    user_id: string
    provider: string
    account_id: string
    created_at: Date
    _count: OAuth_AccountCountAggregateOutputType | null
    _avg: OAuth_AccountAvgAggregateOutputType | null
    _sum: OAuth_AccountSumAggregateOutputType | null
    _min: OAuth_AccountMinAggregateOutputType | null
    _max: OAuth_AccountMaxAggregateOutputType | null
  }

  type GetOAuth_AccountGroupByPayload<T extends OAuth_AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OAuth_AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OAuth_AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OAuth_AccountGroupByOutputType[P]>
            : GetScalarType<T[P], OAuth_AccountGroupByOutputType[P]>
        }
      >
    >


  export type OAuth_AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    provider?: boolean
    account_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuth_Account"]>

  export type OAuth_AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    provider?: boolean
    account_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuth_Account"]>

  export type OAuth_AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    provider?: boolean
    account_id?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuth_Account"]>

  export type OAuth_AccountSelectScalar = {
    id?: boolean
    user_id?: boolean
    provider?: boolean
    account_id?: boolean
    created_at?: boolean
  }

  export type OAuth_AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "provider" | "account_id" | "created_at", ExtArgs["result"]["oAuth_Account"]>
  export type OAuth_AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OAuth_AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OAuth_AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OAuth_AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OAuth_Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      provider: string
      account_id: string
      created_at: Date
    }, ExtArgs["result"]["oAuth_Account"]>
    composites: {}
  }

  type OAuth_AccountGetPayload<S extends boolean | null | undefined | OAuth_AccountDefaultArgs> = $Result.GetResult<Prisma.$OAuth_AccountPayload, S>

  type OAuth_AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OAuth_AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OAuth_AccountCountAggregateInputType | true
    }

  export interface OAuth_AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OAuth_Account'], meta: { name: 'OAuth_Account' } }
    /**
     * Find zero or one OAuth_Account that matches the filter.
     * @param {OAuth_AccountFindUniqueArgs} args - Arguments to find a OAuth_Account
     * @example
     * // Get one OAuth_Account
     * const oAuth_Account = await prisma.oAuth_Account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OAuth_AccountFindUniqueArgs>(args: SelectSubset<T, OAuth_AccountFindUniqueArgs<ExtArgs>>): Prisma__OAuth_AccountClient<$Result.GetResult<Prisma.$OAuth_AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OAuth_Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OAuth_AccountFindUniqueOrThrowArgs} args - Arguments to find a OAuth_Account
     * @example
     * // Get one OAuth_Account
     * const oAuth_Account = await prisma.oAuth_Account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OAuth_AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, OAuth_AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OAuth_AccountClient<$Result.GetResult<Prisma.$OAuth_AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuth_Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuth_AccountFindFirstArgs} args - Arguments to find a OAuth_Account
     * @example
     * // Get one OAuth_Account
     * const oAuth_Account = await prisma.oAuth_Account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OAuth_AccountFindFirstArgs>(args?: SelectSubset<T, OAuth_AccountFindFirstArgs<ExtArgs>>): Prisma__OAuth_AccountClient<$Result.GetResult<Prisma.$OAuth_AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OAuth_Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuth_AccountFindFirstOrThrowArgs} args - Arguments to find a OAuth_Account
     * @example
     * // Get one OAuth_Account
     * const oAuth_Account = await prisma.oAuth_Account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OAuth_AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, OAuth_AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__OAuth_AccountClient<$Result.GetResult<Prisma.$OAuth_AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OAuth_Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuth_AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OAuth_Accounts
     * const oAuth_Accounts = await prisma.oAuth_Account.findMany()
     * 
     * // Get first 10 OAuth_Accounts
     * const oAuth_Accounts = await prisma.oAuth_Account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oAuth_AccountWithIdOnly = await prisma.oAuth_Account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OAuth_AccountFindManyArgs>(args?: SelectSubset<T, OAuth_AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuth_AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OAuth_Account.
     * @param {OAuth_AccountCreateArgs} args - Arguments to create a OAuth_Account.
     * @example
     * // Create one OAuth_Account
     * const OAuth_Account = await prisma.oAuth_Account.create({
     *   data: {
     *     // ... data to create a OAuth_Account
     *   }
     * })
     * 
     */
    create<T extends OAuth_AccountCreateArgs>(args: SelectSubset<T, OAuth_AccountCreateArgs<ExtArgs>>): Prisma__OAuth_AccountClient<$Result.GetResult<Prisma.$OAuth_AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OAuth_Accounts.
     * @param {OAuth_AccountCreateManyArgs} args - Arguments to create many OAuth_Accounts.
     * @example
     * // Create many OAuth_Accounts
     * const oAuth_Account = await prisma.oAuth_Account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OAuth_AccountCreateManyArgs>(args?: SelectSubset<T, OAuth_AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OAuth_Accounts and returns the data saved in the database.
     * @param {OAuth_AccountCreateManyAndReturnArgs} args - Arguments to create many OAuth_Accounts.
     * @example
     * // Create many OAuth_Accounts
     * const oAuth_Account = await prisma.oAuth_Account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OAuth_Accounts and only return the `id`
     * const oAuth_AccountWithIdOnly = await prisma.oAuth_Account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OAuth_AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, OAuth_AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuth_AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OAuth_Account.
     * @param {OAuth_AccountDeleteArgs} args - Arguments to delete one OAuth_Account.
     * @example
     * // Delete one OAuth_Account
     * const OAuth_Account = await prisma.oAuth_Account.delete({
     *   where: {
     *     // ... filter to delete one OAuth_Account
     *   }
     * })
     * 
     */
    delete<T extends OAuth_AccountDeleteArgs>(args: SelectSubset<T, OAuth_AccountDeleteArgs<ExtArgs>>): Prisma__OAuth_AccountClient<$Result.GetResult<Prisma.$OAuth_AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OAuth_Account.
     * @param {OAuth_AccountUpdateArgs} args - Arguments to update one OAuth_Account.
     * @example
     * // Update one OAuth_Account
     * const oAuth_Account = await prisma.oAuth_Account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OAuth_AccountUpdateArgs>(args: SelectSubset<T, OAuth_AccountUpdateArgs<ExtArgs>>): Prisma__OAuth_AccountClient<$Result.GetResult<Prisma.$OAuth_AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OAuth_Accounts.
     * @param {OAuth_AccountDeleteManyArgs} args - Arguments to filter OAuth_Accounts to delete.
     * @example
     * // Delete a few OAuth_Accounts
     * const { count } = await prisma.oAuth_Account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OAuth_AccountDeleteManyArgs>(args?: SelectSubset<T, OAuth_AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OAuth_Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuth_AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OAuth_Accounts
     * const oAuth_Account = await prisma.oAuth_Account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OAuth_AccountUpdateManyArgs>(args: SelectSubset<T, OAuth_AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OAuth_Accounts and returns the data updated in the database.
     * @param {OAuth_AccountUpdateManyAndReturnArgs} args - Arguments to update many OAuth_Accounts.
     * @example
     * // Update many OAuth_Accounts
     * const oAuth_Account = await prisma.oAuth_Account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OAuth_Accounts and only return the `id`
     * const oAuth_AccountWithIdOnly = await prisma.oAuth_Account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OAuth_AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, OAuth_AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuth_AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OAuth_Account.
     * @param {OAuth_AccountUpsertArgs} args - Arguments to update or create a OAuth_Account.
     * @example
     * // Update or create a OAuth_Account
     * const oAuth_Account = await prisma.oAuth_Account.upsert({
     *   create: {
     *     // ... data to create a OAuth_Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OAuth_Account we want to update
     *   }
     * })
     */
    upsert<T extends OAuth_AccountUpsertArgs>(args: SelectSubset<T, OAuth_AccountUpsertArgs<ExtArgs>>): Prisma__OAuth_AccountClient<$Result.GetResult<Prisma.$OAuth_AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OAuth_Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuth_AccountCountArgs} args - Arguments to filter OAuth_Accounts to count.
     * @example
     * // Count the number of OAuth_Accounts
     * const count = await prisma.oAuth_Account.count({
     *   where: {
     *     // ... the filter for the OAuth_Accounts we want to count
     *   }
     * })
    **/
    count<T extends OAuth_AccountCountArgs>(
      args?: Subset<T, OAuth_AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OAuth_AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OAuth_Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuth_AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OAuth_AccountAggregateArgs>(args: Subset<T, OAuth_AccountAggregateArgs>): Prisma.PrismaPromise<GetOAuth_AccountAggregateType<T>>

    /**
     * Group by OAuth_Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuth_AccountGroupByArgs} args - Group by arguments.
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
      T extends OAuth_AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OAuth_AccountGroupByArgs['orderBy'] }
        : { orderBy?: OAuth_AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OAuth_AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOAuth_AccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OAuth_Account model
   */
  readonly fields: OAuth_AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OAuth_Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OAuth_AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OAuth_Account model
   */
  interface OAuth_AccountFieldRefs {
    readonly id: FieldRef<"OAuth_Account", 'Int'>
    readonly user_id: FieldRef<"OAuth_Account", 'String'>
    readonly provider: FieldRef<"OAuth_Account", 'String'>
    readonly account_id: FieldRef<"OAuth_Account", 'String'>
    readonly created_at: FieldRef<"OAuth_Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OAuth_Account findUnique
   */
  export type OAuth_AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuth_Account
     */
    select?: OAuth_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuth_Account
     */
    omit?: OAuth_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuth_AccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuth_Account to fetch.
     */
    where: OAuth_AccountWhereUniqueInput
  }

  /**
   * OAuth_Account findUniqueOrThrow
   */
  export type OAuth_AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuth_Account
     */
    select?: OAuth_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuth_Account
     */
    omit?: OAuth_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuth_AccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuth_Account to fetch.
     */
    where: OAuth_AccountWhereUniqueInput
  }

  /**
   * OAuth_Account findFirst
   */
  export type OAuth_AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuth_Account
     */
    select?: OAuth_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuth_Account
     */
    omit?: OAuth_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuth_AccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuth_Account to fetch.
     */
    where?: OAuth_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuth_Accounts to fetch.
     */
    orderBy?: OAuth_AccountOrderByWithRelationInput | OAuth_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuth_Accounts.
     */
    cursor?: OAuth_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuth_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuth_Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuth_Accounts.
     */
    distinct?: OAuth_AccountScalarFieldEnum | OAuth_AccountScalarFieldEnum[]
  }

  /**
   * OAuth_Account findFirstOrThrow
   */
  export type OAuth_AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuth_Account
     */
    select?: OAuth_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuth_Account
     */
    omit?: OAuth_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuth_AccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuth_Account to fetch.
     */
    where?: OAuth_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuth_Accounts to fetch.
     */
    orderBy?: OAuth_AccountOrderByWithRelationInput | OAuth_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuth_Accounts.
     */
    cursor?: OAuth_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuth_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuth_Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuth_Accounts.
     */
    distinct?: OAuth_AccountScalarFieldEnum | OAuth_AccountScalarFieldEnum[]
  }

  /**
   * OAuth_Account findMany
   */
  export type OAuth_AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuth_Account
     */
    select?: OAuth_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuth_Account
     */
    omit?: OAuth_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuth_AccountInclude<ExtArgs> | null
    /**
     * Filter, which OAuth_Accounts to fetch.
     */
    where?: OAuth_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuth_Accounts to fetch.
     */
    orderBy?: OAuth_AccountOrderByWithRelationInput | OAuth_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OAuth_Accounts.
     */
    cursor?: OAuth_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuth_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuth_Accounts.
     */
    skip?: number
    distinct?: OAuth_AccountScalarFieldEnum | OAuth_AccountScalarFieldEnum[]
  }

  /**
   * OAuth_Account create
   */
  export type OAuth_AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuth_Account
     */
    select?: OAuth_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuth_Account
     */
    omit?: OAuth_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuth_AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a OAuth_Account.
     */
    data: XOR<OAuth_AccountCreateInput, OAuth_AccountUncheckedCreateInput>
  }

  /**
   * OAuth_Account createMany
   */
  export type OAuth_AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OAuth_Accounts.
     */
    data: OAuth_AccountCreateManyInput | OAuth_AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OAuth_Account createManyAndReturn
   */
  export type OAuth_AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuth_Account
     */
    select?: OAuth_AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OAuth_Account
     */
    omit?: OAuth_AccountOmit<ExtArgs> | null
    /**
     * The data used to create many OAuth_Accounts.
     */
    data: OAuth_AccountCreateManyInput | OAuth_AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuth_AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OAuth_Account update
   */
  export type OAuth_AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuth_Account
     */
    select?: OAuth_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuth_Account
     */
    omit?: OAuth_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuth_AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a OAuth_Account.
     */
    data: XOR<OAuth_AccountUpdateInput, OAuth_AccountUncheckedUpdateInput>
    /**
     * Choose, which OAuth_Account to update.
     */
    where: OAuth_AccountWhereUniqueInput
  }

  /**
   * OAuth_Account updateMany
   */
  export type OAuth_AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OAuth_Accounts.
     */
    data: XOR<OAuth_AccountUpdateManyMutationInput, OAuth_AccountUncheckedUpdateManyInput>
    /**
     * Filter which OAuth_Accounts to update
     */
    where?: OAuth_AccountWhereInput
    /**
     * Limit how many OAuth_Accounts to update.
     */
    limit?: number
  }

  /**
   * OAuth_Account updateManyAndReturn
   */
  export type OAuth_AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuth_Account
     */
    select?: OAuth_AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OAuth_Account
     */
    omit?: OAuth_AccountOmit<ExtArgs> | null
    /**
     * The data used to update OAuth_Accounts.
     */
    data: XOR<OAuth_AccountUpdateManyMutationInput, OAuth_AccountUncheckedUpdateManyInput>
    /**
     * Filter which OAuth_Accounts to update
     */
    where?: OAuth_AccountWhereInput
    /**
     * Limit how many OAuth_Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuth_AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OAuth_Account upsert
   */
  export type OAuth_AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuth_Account
     */
    select?: OAuth_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuth_Account
     */
    omit?: OAuth_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuth_AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the OAuth_Account to update in case it exists.
     */
    where: OAuth_AccountWhereUniqueInput
    /**
     * In case the OAuth_Account found by the `where` argument doesn't exist, create a new OAuth_Account with this data.
     */
    create: XOR<OAuth_AccountCreateInput, OAuth_AccountUncheckedCreateInput>
    /**
     * In case the OAuth_Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OAuth_AccountUpdateInput, OAuth_AccountUncheckedUpdateInput>
  }

  /**
   * OAuth_Account delete
   */
  export type OAuth_AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuth_Account
     */
    select?: OAuth_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuth_Account
     */
    omit?: OAuth_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuth_AccountInclude<ExtArgs> | null
    /**
     * Filter which OAuth_Account to delete.
     */
    where: OAuth_AccountWhereUniqueInput
  }

  /**
   * OAuth_Account deleteMany
   */
  export type OAuth_AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuth_Accounts to delete
     */
    where?: OAuth_AccountWhereInput
    /**
     * Limit how many OAuth_Accounts to delete.
     */
    limit?: number
  }

  /**
   * OAuth_Account without action
   */
  export type OAuth_AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuth_Account
     */
    select?: OAuth_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OAuth_Account
     */
    omit?: OAuth_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuth_AccountInclude<ExtArgs> | null
  }


  /**
   * Model Bill_Status
   */

  export type AggregateBill_Status = {
    _count: Bill_StatusCountAggregateOutputType | null
    _avg: Bill_StatusAvgAggregateOutputType | null
    _sum: Bill_StatusSumAggregateOutputType | null
    _min: Bill_StatusMinAggregateOutputType | null
    _max: Bill_StatusMaxAggregateOutputType | null
  }

  export type Bill_StatusAvgAggregateOutputType = {
    id: number | null
  }

  export type Bill_StatusSumAggregateOutputType = {
    id: number | null
  }

  export type Bill_StatusMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    name: string | null
    archived: boolean | null
    highlight_color_hex: string | null
  }

  export type Bill_StatusMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    name: string | null
    archived: boolean | null
    highlight_color_hex: string | null
  }

  export type Bill_StatusCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    archived: number
    highlight_color_hex: number
    _all: number
  }


  export type Bill_StatusAvgAggregateInputType = {
    id?: true
  }

  export type Bill_StatusSumAggregateInputType = {
    id?: true
  }

  export type Bill_StatusMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    archived?: true
    highlight_color_hex?: true
  }

  export type Bill_StatusMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    archived?: true
    highlight_color_hex?: true
  }

  export type Bill_StatusCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    archived?: true
    highlight_color_hex?: true
    _all?: true
  }

  export type Bill_StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bill_Status to aggregate.
     */
    where?: Bill_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bill_Statuses to fetch.
     */
    orderBy?: Bill_StatusOrderByWithRelationInput | Bill_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Bill_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bill_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bill_Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bill_Statuses
    **/
    _count?: true | Bill_StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Bill_StatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Bill_StatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bill_StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bill_StatusMaxAggregateInputType
  }

  export type GetBill_StatusAggregateType<T extends Bill_StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateBill_Status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBill_Status[P]>
      : GetScalarType<T[P], AggregateBill_Status[P]>
  }




  export type Bill_StatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Bill_StatusWhereInput
    orderBy?: Bill_StatusOrderByWithAggregationInput | Bill_StatusOrderByWithAggregationInput[]
    by: Bill_StatusScalarFieldEnum[] | Bill_StatusScalarFieldEnum
    having?: Bill_StatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bill_StatusCountAggregateInputType | true
    _avg?: Bill_StatusAvgAggregateInputType
    _sum?: Bill_StatusSumAggregateInputType
    _min?: Bill_StatusMinAggregateInputType
    _max?: Bill_StatusMaxAggregateInputType
  }

  export type Bill_StatusGroupByOutputType = {
    id: number
    user_id: string
    name: string
    archived: boolean
    highlight_color_hex: string | null
    _count: Bill_StatusCountAggregateOutputType | null
    _avg: Bill_StatusAvgAggregateOutputType | null
    _sum: Bill_StatusSumAggregateOutputType | null
    _min: Bill_StatusMinAggregateOutputType | null
    _max: Bill_StatusMaxAggregateOutputType | null
  }

  type GetBill_StatusGroupByPayload<T extends Bill_StatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bill_StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bill_StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bill_StatusGroupByOutputType[P]>
            : GetScalarType<T[P], Bill_StatusGroupByOutputType[P]>
        }
      >
    >


  export type Bill_StatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    archived?: boolean
    highlight_color_hex?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dueBills?: boolean | Bill_Status$dueBillsArgs<ExtArgs>
    bankAccountInstances?: boolean | Bill_Status$bankAccountInstancesArgs<ExtArgs>
    _count?: boolean | Bill_StatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill_Status"]>

  export type Bill_StatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    archived?: boolean
    highlight_color_hex?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill_Status"]>

  export type Bill_StatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    archived?: boolean
    highlight_color_hex?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill_Status"]>

  export type Bill_StatusSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    archived?: boolean
    highlight_color_hex?: boolean
  }

  export type Bill_StatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "archived" | "highlight_color_hex", ExtArgs["result"]["bill_Status"]>
  export type Bill_StatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dueBills?: boolean | Bill_Status$dueBillsArgs<ExtArgs>
    bankAccountInstances?: boolean | Bill_Status$bankAccountInstancesArgs<ExtArgs>
    _count?: boolean | Bill_StatusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Bill_StatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Bill_StatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Bill_StatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bill_Status"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      dueBills: Prisma.$Due_BillsPayload<ExtArgs>[]
      bankAccountInstances: Prisma.$Bank_Account_InstancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      name: string
      archived: boolean
      highlight_color_hex: string | null
    }, ExtArgs["result"]["bill_Status"]>
    composites: {}
  }

  type Bill_StatusGetPayload<S extends boolean | null | undefined | Bill_StatusDefaultArgs> = $Result.GetResult<Prisma.$Bill_StatusPayload, S>

  type Bill_StatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Bill_StatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Bill_StatusCountAggregateInputType | true
    }

  export interface Bill_StatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bill_Status'], meta: { name: 'Bill_Status' } }
    /**
     * Find zero or one Bill_Status that matches the filter.
     * @param {Bill_StatusFindUniqueArgs} args - Arguments to find a Bill_Status
     * @example
     * // Get one Bill_Status
     * const bill_Status = await prisma.bill_Status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Bill_StatusFindUniqueArgs>(args: SelectSubset<T, Bill_StatusFindUniqueArgs<ExtArgs>>): Prisma__Bill_StatusClient<$Result.GetResult<Prisma.$Bill_StatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bill_Status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Bill_StatusFindUniqueOrThrowArgs} args - Arguments to find a Bill_Status
     * @example
     * // Get one Bill_Status
     * const bill_Status = await prisma.bill_Status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Bill_StatusFindUniqueOrThrowArgs>(args: SelectSubset<T, Bill_StatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Bill_StatusClient<$Result.GetResult<Prisma.$Bill_StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill_Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bill_StatusFindFirstArgs} args - Arguments to find a Bill_Status
     * @example
     * // Get one Bill_Status
     * const bill_Status = await prisma.bill_Status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Bill_StatusFindFirstArgs>(args?: SelectSubset<T, Bill_StatusFindFirstArgs<ExtArgs>>): Prisma__Bill_StatusClient<$Result.GetResult<Prisma.$Bill_StatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bill_Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bill_StatusFindFirstOrThrowArgs} args - Arguments to find a Bill_Status
     * @example
     * // Get one Bill_Status
     * const bill_Status = await prisma.bill_Status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Bill_StatusFindFirstOrThrowArgs>(args?: SelectSubset<T, Bill_StatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__Bill_StatusClient<$Result.GetResult<Prisma.$Bill_StatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bill_Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bill_StatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bill_Statuses
     * const bill_Statuses = await prisma.bill_Status.findMany()
     * 
     * // Get first 10 Bill_Statuses
     * const bill_Statuses = await prisma.bill_Status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bill_StatusWithIdOnly = await prisma.bill_Status.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Bill_StatusFindManyArgs>(args?: SelectSubset<T, Bill_StatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bill_StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bill_Status.
     * @param {Bill_StatusCreateArgs} args - Arguments to create a Bill_Status.
     * @example
     * // Create one Bill_Status
     * const Bill_Status = await prisma.bill_Status.create({
     *   data: {
     *     // ... data to create a Bill_Status
     *   }
     * })
     * 
     */
    create<T extends Bill_StatusCreateArgs>(args: SelectSubset<T, Bill_StatusCreateArgs<ExtArgs>>): Prisma__Bill_StatusClient<$Result.GetResult<Prisma.$Bill_StatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bill_Statuses.
     * @param {Bill_StatusCreateManyArgs} args - Arguments to create many Bill_Statuses.
     * @example
     * // Create many Bill_Statuses
     * const bill_Status = await prisma.bill_Status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Bill_StatusCreateManyArgs>(args?: SelectSubset<T, Bill_StatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bill_Statuses and returns the data saved in the database.
     * @param {Bill_StatusCreateManyAndReturnArgs} args - Arguments to create many Bill_Statuses.
     * @example
     * // Create many Bill_Statuses
     * const bill_Status = await prisma.bill_Status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bill_Statuses and only return the `id`
     * const bill_StatusWithIdOnly = await prisma.bill_Status.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Bill_StatusCreateManyAndReturnArgs>(args?: SelectSubset<T, Bill_StatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bill_StatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bill_Status.
     * @param {Bill_StatusDeleteArgs} args - Arguments to delete one Bill_Status.
     * @example
     * // Delete one Bill_Status
     * const Bill_Status = await prisma.bill_Status.delete({
     *   where: {
     *     // ... filter to delete one Bill_Status
     *   }
     * })
     * 
     */
    delete<T extends Bill_StatusDeleteArgs>(args: SelectSubset<T, Bill_StatusDeleteArgs<ExtArgs>>): Prisma__Bill_StatusClient<$Result.GetResult<Prisma.$Bill_StatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bill_Status.
     * @param {Bill_StatusUpdateArgs} args - Arguments to update one Bill_Status.
     * @example
     * // Update one Bill_Status
     * const bill_Status = await prisma.bill_Status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Bill_StatusUpdateArgs>(args: SelectSubset<T, Bill_StatusUpdateArgs<ExtArgs>>): Prisma__Bill_StatusClient<$Result.GetResult<Prisma.$Bill_StatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bill_Statuses.
     * @param {Bill_StatusDeleteManyArgs} args - Arguments to filter Bill_Statuses to delete.
     * @example
     * // Delete a few Bill_Statuses
     * const { count } = await prisma.bill_Status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Bill_StatusDeleteManyArgs>(args?: SelectSubset<T, Bill_StatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bill_Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bill_StatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bill_Statuses
     * const bill_Status = await prisma.bill_Status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Bill_StatusUpdateManyArgs>(args: SelectSubset<T, Bill_StatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bill_Statuses and returns the data updated in the database.
     * @param {Bill_StatusUpdateManyAndReturnArgs} args - Arguments to update many Bill_Statuses.
     * @example
     * // Update many Bill_Statuses
     * const bill_Status = await prisma.bill_Status.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bill_Statuses and only return the `id`
     * const bill_StatusWithIdOnly = await prisma.bill_Status.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Bill_StatusUpdateManyAndReturnArgs>(args: SelectSubset<T, Bill_StatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bill_StatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bill_Status.
     * @param {Bill_StatusUpsertArgs} args - Arguments to update or create a Bill_Status.
     * @example
     * // Update or create a Bill_Status
     * const bill_Status = await prisma.bill_Status.upsert({
     *   create: {
     *     // ... data to create a Bill_Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bill_Status we want to update
     *   }
     * })
     */
    upsert<T extends Bill_StatusUpsertArgs>(args: SelectSubset<T, Bill_StatusUpsertArgs<ExtArgs>>): Prisma__Bill_StatusClient<$Result.GetResult<Prisma.$Bill_StatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bill_Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bill_StatusCountArgs} args - Arguments to filter Bill_Statuses to count.
     * @example
     * // Count the number of Bill_Statuses
     * const count = await prisma.bill_Status.count({
     *   where: {
     *     // ... the filter for the Bill_Statuses we want to count
     *   }
     * })
    **/
    count<T extends Bill_StatusCountArgs>(
      args?: Subset<T, Bill_StatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bill_StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bill_Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bill_StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Bill_StatusAggregateArgs>(args: Subset<T, Bill_StatusAggregateArgs>): Prisma.PrismaPromise<GetBill_StatusAggregateType<T>>

    /**
     * Group by Bill_Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bill_StatusGroupByArgs} args - Group by arguments.
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
      T extends Bill_StatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Bill_StatusGroupByArgs['orderBy'] }
        : { orderBy?: Bill_StatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Bill_StatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBill_StatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bill_Status model
   */
  readonly fields: Bill_StatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bill_Status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Bill_StatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dueBills<T extends Bill_Status$dueBillsArgs<ExtArgs> = {}>(args?: Subset<T, Bill_Status$dueBillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Due_BillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bankAccountInstances<T extends Bill_Status$bankAccountInstancesArgs<ExtArgs> = {}>(args?: Subset<T, Bill_Status$bankAccountInstancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bank_Account_InstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Bill_Status model
   */
  interface Bill_StatusFieldRefs {
    readonly id: FieldRef<"Bill_Status", 'Int'>
    readonly user_id: FieldRef<"Bill_Status", 'String'>
    readonly name: FieldRef<"Bill_Status", 'String'>
    readonly archived: FieldRef<"Bill_Status", 'Boolean'>
    readonly highlight_color_hex: FieldRef<"Bill_Status", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bill_Status findUnique
   */
  export type Bill_StatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill_Status
     */
    select?: Bill_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill_Status
     */
    omit?: Bill_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bill_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Bill_Status to fetch.
     */
    where: Bill_StatusWhereUniqueInput
  }

  /**
   * Bill_Status findUniqueOrThrow
   */
  export type Bill_StatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill_Status
     */
    select?: Bill_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill_Status
     */
    omit?: Bill_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bill_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Bill_Status to fetch.
     */
    where: Bill_StatusWhereUniqueInput
  }

  /**
   * Bill_Status findFirst
   */
  export type Bill_StatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill_Status
     */
    select?: Bill_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill_Status
     */
    omit?: Bill_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bill_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Bill_Status to fetch.
     */
    where?: Bill_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bill_Statuses to fetch.
     */
    orderBy?: Bill_StatusOrderByWithRelationInput | Bill_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bill_Statuses.
     */
    cursor?: Bill_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bill_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bill_Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bill_Statuses.
     */
    distinct?: Bill_StatusScalarFieldEnum | Bill_StatusScalarFieldEnum[]
  }

  /**
   * Bill_Status findFirstOrThrow
   */
  export type Bill_StatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill_Status
     */
    select?: Bill_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill_Status
     */
    omit?: Bill_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bill_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Bill_Status to fetch.
     */
    where?: Bill_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bill_Statuses to fetch.
     */
    orderBy?: Bill_StatusOrderByWithRelationInput | Bill_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bill_Statuses.
     */
    cursor?: Bill_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bill_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bill_Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bill_Statuses.
     */
    distinct?: Bill_StatusScalarFieldEnum | Bill_StatusScalarFieldEnum[]
  }

  /**
   * Bill_Status findMany
   */
  export type Bill_StatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill_Status
     */
    select?: Bill_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill_Status
     */
    omit?: Bill_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bill_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Bill_Statuses to fetch.
     */
    where?: Bill_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bill_Statuses to fetch.
     */
    orderBy?: Bill_StatusOrderByWithRelationInput | Bill_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bill_Statuses.
     */
    cursor?: Bill_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bill_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bill_Statuses.
     */
    skip?: number
    distinct?: Bill_StatusScalarFieldEnum | Bill_StatusScalarFieldEnum[]
  }

  /**
   * Bill_Status create
   */
  export type Bill_StatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill_Status
     */
    select?: Bill_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill_Status
     */
    omit?: Bill_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bill_StatusInclude<ExtArgs> | null
    /**
     * The data needed to create a Bill_Status.
     */
    data: XOR<Bill_StatusCreateInput, Bill_StatusUncheckedCreateInput>
  }

  /**
   * Bill_Status createMany
   */
  export type Bill_StatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bill_Statuses.
     */
    data: Bill_StatusCreateManyInput | Bill_StatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bill_Status createManyAndReturn
   */
  export type Bill_StatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill_Status
     */
    select?: Bill_StatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bill_Status
     */
    omit?: Bill_StatusOmit<ExtArgs> | null
    /**
     * The data used to create many Bill_Statuses.
     */
    data: Bill_StatusCreateManyInput | Bill_StatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bill_StatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bill_Status update
   */
  export type Bill_StatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill_Status
     */
    select?: Bill_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill_Status
     */
    omit?: Bill_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bill_StatusInclude<ExtArgs> | null
    /**
     * The data needed to update a Bill_Status.
     */
    data: XOR<Bill_StatusUpdateInput, Bill_StatusUncheckedUpdateInput>
    /**
     * Choose, which Bill_Status to update.
     */
    where: Bill_StatusWhereUniqueInput
  }

  /**
   * Bill_Status updateMany
   */
  export type Bill_StatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bill_Statuses.
     */
    data: XOR<Bill_StatusUpdateManyMutationInput, Bill_StatusUncheckedUpdateManyInput>
    /**
     * Filter which Bill_Statuses to update
     */
    where?: Bill_StatusWhereInput
    /**
     * Limit how many Bill_Statuses to update.
     */
    limit?: number
  }

  /**
   * Bill_Status updateManyAndReturn
   */
  export type Bill_StatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill_Status
     */
    select?: Bill_StatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bill_Status
     */
    omit?: Bill_StatusOmit<ExtArgs> | null
    /**
     * The data used to update Bill_Statuses.
     */
    data: XOR<Bill_StatusUpdateManyMutationInput, Bill_StatusUncheckedUpdateManyInput>
    /**
     * Filter which Bill_Statuses to update
     */
    where?: Bill_StatusWhereInput
    /**
     * Limit how many Bill_Statuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bill_StatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bill_Status upsert
   */
  export type Bill_StatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill_Status
     */
    select?: Bill_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill_Status
     */
    omit?: Bill_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bill_StatusInclude<ExtArgs> | null
    /**
     * The filter to search for the Bill_Status to update in case it exists.
     */
    where: Bill_StatusWhereUniqueInput
    /**
     * In case the Bill_Status found by the `where` argument doesn't exist, create a new Bill_Status with this data.
     */
    create: XOR<Bill_StatusCreateInput, Bill_StatusUncheckedCreateInput>
    /**
     * In case the Bill_Status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Bill_StatusUpdateInput, Bill_StatusUncheckedUpdateInput>
  }

  /**
   * Bill_Status delete
   */
  export type Bill_StatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill_Status
     */
    select?: Bill_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill_Status
     */
    omit?: Bill_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bill_StatusInclude<ExtArgs> | null
    /**
     * Filter which Bill_Status to delete.
     */
    where: Bill_StatusWhereUniqueInput
  }

  /**
   * Bill_Status deleteMany
   */
  export type Bill_StatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bill_Statuses to delete
     */
    where?: Bill_StatusWhereInput
    /**
     * Limit how many Bill_Statuses to delete.
     */
    limit?: number
  }

  /**
   * Bill_Status.dueBills
   */
  export type Bill_Status$dueBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Due_Bills
     */
    select?: Due_BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Due_Bills
     */
    omit?: Due_BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Due_BillsInclude<ExtArgs> | null
    where?: Due_BillsWhereInput
    orderBy?: Due_BillsOrderByWithRelationInput | Due_BillsOrderByWithRelationInput[]
    cursor?: Due_BillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Due_BillsScalarFieldEnum | Due_BillsScalarFieldEnum[]
  }

  /**
   * Bill_Status.bankAccountInstances
   */
  export type Bill_Status$bankAccountInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account_Instance
     */
    select?: Bank_Account_InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account_Instance
     */
    omit?: Bank_Account_InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_Account_InstanceInclude<ExtArgs> | null
    where?: Bank_Account_InstanceWhereInput
    orderBy?: Bank_Account_InstanceOrderByWithRelationInput | Bank_Account_InstanceOrderByWithRelationInput[]
    cursor?: Bank_Account_InstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Bank_Account_InstanceScalarFieldEnum | Bank_Account_InstanceScalarFieldEnum[]
  }

  /**
   * Bill_Status without action
   */
  export type Bill_StatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill_Status
     */
    select?: Bill_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill_Status
     */
    omit?: Bill_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bill_StatusInclude<ExtArgs> | null
  }


  /**
   * Model Recurrence
   */

  export type AggregateRecurrence = {
    _count: RecurrenceCountAggregateOutputType | null
    _avg: RecurrenceAvgAggregateOutputType | null
    _sum: RecurrenceSumAggregateOutputType | null
    _min: RecurrenceMinAggregateOutputType | null
    _max: RecurrenceMaxAggregateOutputType | null
  }

  export type RecurrenceAvgAggregateOutputType = {
    id: number | null
  }

  export type RecurrenceSumAggregateOutputType = {
    id: number | null
  }

  export type RecurrenceMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    name: string | null
    calculation: string | null
    archived: boolean | null
  }

  export type RecurrenceMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    name: string | null
    calculation: string | null
    archived: boolean | null
  }

  export type RecurrenceCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    calculation: number
    archived: number
    _all: number
  }


  export type RecurrenceAvgAggregateInputType = {
    id?: true
  }

  export type RecurrenceSumAggregateInputType = {
    id?: true
  }

  export type RecurrenceMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    calculation?: true
    archived?: true
  }

  export type RecurrenceMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    calculation?: true
    archived?: true
  }

  export type RecurrenceCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    calculation?: true
    archived?: true
    _all?: true
  }

  export type RecurrenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recurrence to aggregate.
     */
    where?: RecurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recurrences to fetch.
     */
    orderBy?: RecurrenceOrderByWithRelationInput | RecurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recurrences
    **/
    _count?: true | RecurrenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecurrenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecurrenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecurrenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecurrenceMaxAggregateInputType
  }

  export type GetRecurrenceAggregateType<T extends RecurrenceAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurrence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurrence[P]>
      : GetScalarType<T[P], AggregateRecurrence[P]>
  }




  export type RecurrenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurrenceWhereInput
    orderBy?: RecurrenceOrderByWithAggregationInput | RecurrenceOrderByWithAggregationInput[]
    by: RecurrenceScalarFieldEnum[] | RecurrenceScalarFieldEnum
    having?: RecurrenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecurrenceCountAggregateInputType | true
    _avg?: RecurrenceAvgAggregateInputType
    _sum?: RecurrenceSumAggregateInputType
    _min?: RecurrenceMinAggregateInputType
    _max?: RecurrenceMaxAggregateInputType
  }

  export type RecurrenceGroupByOutputType = {
    id: number
    user_id: string
    name: string
    calculation: string | null
    archived: boolean
    _count: RecurrenceCountAggregateOutputType | null
    _avg: RecurrenceAvgAggregateOutputType | null
    _sum: RecurrenceSumAggregateOutputType | null
    _min: RecurrenceMinAggregateOutputType | null
    _max: RecurrenceMaxAggregateOutputType | null
  }

  type GetRecurrenceGroupByPayload<T extends RecurrenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecurrenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecurrenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecurrenceGroupByOutputType[P]>
            : GetScalarType<T[P], RecurrenceGroupByOutputType[P]>
        }
      >
    >


  export type RecurrenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    calculation?: boolean
    archived?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bankAccounts?: boolean | Recurrence$bankAccountsArgs<ExtArgs>
    dueBills?: boolean | Recurrence$dueBillsArgs<ExtArgs>
    Bills?: boolean | Recurrence$BillsArgs<ExtArgs>
    _count?: boolean | RecurrenceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurrence"]>

  export type RecurrenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    calculation?: boolean
    archived?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurrence"]>

  export type RecurrenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    calculation?: boolean
    archived?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurrence"]>

  export type RecurrenceSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    calculation?: boolean
    archived?: boolean
  }

  export type RecurrenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "calculation" | "archived", ExtArgs["result"]["recurrence"]>
  export type RecurrenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bankAccounts?: boolean | Recurrence$bankAccountsArgs<ExtArgs>
    dueBills?: boolean | Recurrence$dueBillsArgs<ExtArgs>
    Bills?: boolean | Recurrence$BillsArgs<ExtArgs>
    _count?: boolean | RecurrenceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecurrenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecurrenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecurrencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recurrence"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      bankAccounts: Prisma.$Bank_AccountPayload<ExtArgs>[]
      dueBills: Prisma.$Due_BillsPayload<ExtArgs>[]
      Bills: Prisma.$BillsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      name: string
      calculation: string | null
      archived: boolean
    }, ExtArgs["result"]["recurrence"]>
    composites: {}
  }

  type RecurrenceGetPayload<S extends boolean | null | undefined | RecurrenceDefaultArgs> = $Result.GetResult<Prisma.$RecurrencePayload, S>

  type RecurrenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecurrenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecurrenceCountAggregateInputType | true
    }

  export interface RecurrenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recurrence'], meta: { name: 'Recurrence' } }
    /**
     * Find zero or one Recurrence that matches the filter.
     * @param {RecurrenceFindUniqueArgs} args - Arguments to find a Recurrence
     * @example
     * // Get one Recurrence
     * const recurrence = await prisma.recurrence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecurrenceFindUniqueArgs>(args: SelectSubset<T, RecurrenceFindUniqueArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recurrence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecurrenceFindUniqueOrThrowArgs} args - Arguments to find a Recurrence
     * @example
     * // Get one Recurrence
     * const recurrence = await prisma.recurrence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecurrenceFindUniqueOrThrowArgs>(args: SelectSubset<T, RecurrenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recurrence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceFindFirstArgs} args - Arguments to find a Recurrence
     * @example
     * // Get one Recurrence
     * const recurrence = await prisma.recurrence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecurrenceFindFirstArgs>(args?: SelectSubset<T, RecurrenceFindFirstArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recurrence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceFindFirstOrThrowArgs} args - Arguments to find a Recurrence
     * @example
     * // Get one Recurrence
     * const recurrence = await prisma.recurrence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecurrenceFindFirstOrThrowArgs>(args?: SelectSubset<T, RecurrenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recurrences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recurrences
     * const recurrences = await prisma.recurrence.findMany()
     * 
     * // Get first 10 Recurrences
     * const recurrences = await prisma.recurrence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recurrenceWithIdOnly = await prisma.recurrence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecurrenceFindManyArgs>(args?: SelectSubset<T, RecurrenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recurrence.
     * @param {RecurrenceCreateArgs} args - Arguments to create a Recurrence.
     * @example
     * // Create one Recurrence
     * const Recurrence = await prisma.recurrence.create({
     *   data: {
     *     // ... data to create a Recurrence
     *   }
     * })
     * 
     */
    create<T extends RecurrenceCreateArgs>(args: SelectSubset<T, RecurrenceCreateArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recurrences.
     * @param {RecurrenceCreateManyArgs} args - Arguments to create many Recurrences.
     * @example
     * // Create many Recurrences
     * const recurrence = await prisma.recurrence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecurrenceCreateManyArgs>(args?: SelectSubset<T, RecurrenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recurrences and returns the data saved in the database.
     * @param {RecurrenceCreateManyAndReturnArgs} args - Arguments to create many Recurrences.
     * @example
     * // Create many Recurrences
     * const recurrence = await prisma.recurrence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recurrences and only return the `id`
     * const recurrenceWithIdOnly = await prisma.recurrence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecurrenceCreateManyAndReturnArgs>(args?: SelectSubset<T, RecurrenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recurrence.
     * @param {RecurrenceDeleteArgs} args - Arguments to delete one Recurrence.
     * @example
     * // Delete one Recurrence
     * const Recurrence = await prisma.recurrence.delete({
     *   where: {
     *     // ... filter to delete one Recurrence
     *   }
     * })
     * 
     */
    delete<T extends RecurrenceDeleteArgs>(args: SelectSubset<T, RecurrenceDeleteArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recurrence.
     * @param {RecurrenceUpdateArgs} args - Arguments to update one Recurrence.
     * @example
     * // Update one Recurrence
     * const recurrence = await prisma.recurrence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecurrenceUpdateArgs>(args: SelectSubset<T, RecurrenceUpdateArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recurrences.
     * @param {RecurrenceDeleteManyArgs} args - Arguments to filter Recurrences to delete.
     * @example
     * // Delete a few Recurrences
     * const { count } = await prisma.recurrence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecurrenceDeleteManyArgs>(args?: SelectSubset<T, RecurrenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recurrences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recurrences
     * const recurrence = await prisma.recurrence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecurrenceUpdateManyArgs>(args: SelectSubset<T, RecurrenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recurrences and returns the data updated in the database.
     * @param {RecurrenceUpdateManyAndReturnArgs} args - Arguments to update many Recurrences.
     * @example
     * // Update many Recurrences
     * const recurrence = await prisma.recurrence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recurrences and only return the `id`
     * const recurrenceWithIdOnly = await prisma.recurrence.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecurrenceUpdateManyAndReturnArgs>(args: SelectSubset<T, RecurrenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recurrence.
     * @param {RecurrenceUpsertArgs} args - Arguments to update or create a Recurrence.
     * @example
     * // Update or create a Recurrence
     * const recurrence = await prisma.recurrence.upsert({
     *   create: {
     *     // ... data to create a Recurrence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recurrence we want to update
     *   }
     * })
     */
    upsert<T extends RecurrenceUpsertArgs>(args: SelectSubset<T, RecurrenceUpsertArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recurrences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceCountArgs} args - Arguments to filter Recurrences to count.
     * @example
     * // Count the number of Recurrences
     * const count = await prisma.recurrence.count({
     *   where: {
     *     // ... the filter for the Recurrences we want to count
     *   }
     * })
    **/
    count<T extends RecurrenceCountArgs>(
      args?: Subset<T, RecurrenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecurrenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recurrence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecurrenceAggregateArgs>(args: Subset<T, RecurrenceAggregateArgs>): Prisma.PrismaPromise<GetRecurrenceAggregateType<T>>

    /**
     * Group by Recurrence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceGroupByArgs} args - Group by arguments.
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
      T extends RecurrenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecurrenceGroupByArgs['orderBy'] }
        : { orderBy?: RecurrenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecurrenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecurrenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recurrence model
   */
  readonly fields: RecurrenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recurrence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecurrenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bankAccounts<T extends Recurrence$bankAccountsArgs<ExtArgs> = {}>(args?: Subset<T, Recurrence$bankAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bank_AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dueBills<T extends Recurrence$dueBillsArgs<ExtArgs> = {}>(args?: Subset<T, Recurrence$dueBillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Due_BillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Bills<T extends Recurrence$BillsArgs<ExtArgs> = {}>(args?: Subset<T, Recurrence$BillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Recurrence model
   */
  interface RecurrenceFieldRefs {
    readonly id: FieldRef<"Recurrence", 'Int'>
    readonly user_id: FieldRef<"Recurrence", 'String'>
    readonly name: FieldRef<"Recurrence", 'String'>
    readonly calculation: FieldRef<"Recurrence", 'String'>
    readonly archived: FieldRef<"Recurrence", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Recurrence findUnique
   */
  export type RecurrenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurrence
     */
    omit?: RecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    /**
     * Filter, which Recurrence to fetch.
     */
    where: RecurrenceWhereUniqueInput
  }

  /**
   * Recurrence findUniqueOrThrow
   */
  export type RecurrenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurrence
     */
    omit?: RecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    /**
     * Filter, which Recurrence to fetch.
     */
    where: RecurrenceWhereUniqueInput
  }

  /**
   * Recurrence findFirst
   */
  export type RecurrenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurrence
     */
    omit?: RecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    /**
     * Filter, which Recurrence to fetch.
     */
    where?: RecurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recurrences to fetch.
     */
    orderBy?: RecurrenceOrderByWithRelationInput | RecurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recurrences.
     */
    cursor?: RecurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recurrences.
     */
    distinct?: RecurrenceScalarFieldEnum | RecurrenceScalarFieldEnum[]
  }

  /**
   * Recurrence findFirstOrThrow
   */
  export type RecurrenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurrence
     */
    omit?: RecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    /**
     * Filter, which Recurrence to fetch.
     */
    where?: RecurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recurrences to fetch.
     */
    orderBy?: RecurrenceOrderByWithRelationInput | RecurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recurrences.
     */
    cursor?: RecurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recurrences.
     */
    distinct?: RecurrenceScalarFieldEnum | RecurrenceScalarFieldEnum[]
  }

  /**
   * Recurrence findMany
   */
  export type RecurrenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurrence
     */
    omit?: RecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    /**
     * Filter, which Recurrences to fetch.
     */
    where?: RecurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recurrences to fetch.
     */
    orderBy?: RecurrenceOrderByWithRelationInput | RecurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recurrences.
     */
    cursor?: RecurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recurrences.
     */
    skip?: number
    distinct?: RecurrenceScalarFieldEnum | RecurrenceScalarFieldEnum[]
  }

  /**
   * Recurrence create
   */
  export type RecurrenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurrence
     */
    omit?: RecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Recurrence.
     */
    data: XOR<RecurrenceCreateInput, RecurrenceUncheckedCreateInput>
  }

  /**
   * Recurrence createMany
   */
  export type RecurrenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recurrences.
     */
    data: RecurrenceCreateManyInput | RecurrenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recurrence createManyAndReturn
   */
  export type RecurrenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recurrence
     */
    omit?: RecurrenceOmit<ExtArgs> | null
    /**
     * The data used to create many Recurrences.
     */
    data: RecurrenceCreateManyInput | RecurrenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recurrence update
   */
  export type RecurrenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurrence
     */
    omit?: RecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Recurrence.
     */
    data: XOR<RecurrenceUpdateInput, RecurrenceUncheckedUpdateInput>
    /**
     * Choose, which Recurrence to update.
     */
    where: RecurrenceWhereUniqueInput
  }

  /**
   * Recurrence updateMany
   */
  export type RecurrenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recurrences.
     */
    data: XOR<RecurrenceUpdateManyMutationInput, RecurrenceUncheckedUpdateManyInput>
    /**
     * Filter which Recurrences to update
     */
    where?: RecurrenceWhereInput
    /**
     * Limit how many Recurrences to update.
     */
    limit?: number
  }

  /**
   * Recurrence updateManyAndReturn
   */
  export type RecurrenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recurrence
     */
    omit?: RecurrenceOmit<ExtArgs> | null
    /**
     * The data used to update Recurrences.
     */
    data: XOR<RecurrenceUpdateManyMutationInput, RecurrenceUncheckedUpdateManyInput>
    /**
     * Filter which Recurrences to update
     */
    where?: RecurrenceWhereInput
    /**
     * Limit how many Recurrences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recurrence upsert
   */
  export type RecurrenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurrence
     */
    omit?: RecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Recurrence to update in case it exists.
     */
    where: RecurrenceWhereUniqueInput
    /**
     * In case the Recurrence found by the `where` argument doesn't exist, create a new Recurrence with this data.
     */
    create: XOR<RecurrenceCreateInput, RecurrenceUncheckedCreateInput>
    /**
     * In case the Recurrence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecurrenceUpdateInput, RecurrenceUncheckedUpdateInput>
  }

  /**
   * Recurrence delete
   */
  export type RecurrenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurrence
     */
    omit?: RecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    /**
     * Filter which Recurrence to delete.
     */
    where: RecurrenceWhereUniqueInput
  }

  /**
   * Recurrence deleteMany
   */
  export type RecurrenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recurrences to delete
     */
    where?: RecurrenceWhereInput
    /**
     * Limit how many Recurrences to delete.
     */
    limit?: number
  }

  /**
   * Recurrence.bankAccounts
   */
  export type Recurrence$bankAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account
     */
    select?: Bank_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account
     */
    omit?: Bank_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_AccountInclude<ExtArgs> | null
    where?: Bank_AccountWhereInput
    orderBy?: Bank_AccountOrderByWithRelationInput | Bank_AccountOrderByWithRelationInput[]
    cursor?: Bank_AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Bank_AccountScalarFieldEnum | Bank_AccountScalarFieldEnum[]
  }

  /**
   * Recurrence.dueBills
   */
  export type Recurrence$dueBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Due_Bills
     */
    select?: Due_BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Due_Bills
     */
    omit?: Due_BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Due_BillsInclude<ExtArgs> | null
    where?: Due_BillsWhereInput
    orderBy?: Due_BillsOrderByWithRelationInput | Due_BillsOrderByWithRelationInput[]
    cursor?: Due_BillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Due_BillsScalarFieldEnum | Due_BillsScalarFieldEnum[]
  }

  /**
   * Recurrence.Bills
   */
  export type Recurrence$BillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    where?: BillsWhereInput
    orderBy?: BillsOrderByWithRelationInput | BillsOrderByWithRelationInput[]
    cursor?: BillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * Recurrence without action
   */
  export type RecurrenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurrence
     */
    omit?: RecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    name: string | null
    archived: boolean | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    name: string | null
    archived: boolean | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    archived: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    archived?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    archived?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    archived?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    user_id: string
    name: string
    archived: boolean
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    archived?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bills?: boolean | Category$billsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    archived?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    archived?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    archived?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "archived", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bills?: boolean | Category$billsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      bills: Prisma.$BillsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      name: string
      archived: boolean
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bills<T extends Category$billsArgs<ExtArgs> = {}>(args?: Subset<T, Category$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly user_id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly archived: FieldRef<"Category", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.bills
   */
  export type Category$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    where?: BillsWhereInput
    orderBy?: BillsOrderByWithRelationInput | BillsOrderByWithRelationInput[]
    cursor?: BillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Bank_Account
   */

  export type AggregateBank_Account = {
    _count: Bank_AccountCountAggregateOutputType | null
    _avg: Bank_AccountAvgAggregateOutputType | null
    _sum: Bank_AccountSumAggregateOutputType | null
    _min: Bank_AccountMinAggregateOutputType | null
    _max: Bank_AccountMaxAggregateOutputType | null
  }

  export type Bank_AccountAvgAggregateOutputType = {
    id: number | null
    recurrence: number | null
    recurrence_value: number | null
  }

  export type Bank_AccountSumAggregateOutputType = {
    id: number | null
    recurrence: number | null
    recurrence_value: number | null
  }

  export type Bank_AccountMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    name: string | null
    url: string | null
    recurrence: number | null
    recurrence_value: number | null
    archived: boolean | null
    font_color_hex: string | null
  }

  export type Bank_AccountMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    name: string | null
    url: string | null
    recurrence: number | null
    recurrence_value: number | null
    archived: boolean | null
    font_color_hex: string | null
  }

  export type Bank_AccountCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    url: number
    recurrence: number
    recurrence_value: number
    archived: number
    font_color_hex: number
    _all: number
  }


  export type Bank_AccountAvgAggregateInputType = {
    id?: true
    recurrence?: true
    recurrence_value?: true
  }

  export type Bank_AccountSumAggregateInputType = {
    id?: true
    recurrence?: true
    recurrence_value?: true
  }

  export type Bank_AccountMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    url?: true
    recurrence?: true
    recurrence_value?: true
    archived?: true
    font_color_hex?: true
  }

  export type Bank_AccountMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    url?: true
    recurrence?: true
    recurrence_value?: true
    archived?: true
    font_color_hex?: true
  }

  export type Bank_AccountCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    url?: true
    recurrence?: true
    recurrence_value?: true
    archived?: true
    font_color_hex?: true
    _all?: true
  }

  export type Bank_AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bank_Account to aggregate.
     */
    where?: Bank_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bank_Accounts to fetch.
     */
    orderBy?: Bank_AccountOrderByWithRelationInput | Bank_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Bank_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bank_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bank_Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bank_Accounts
    **/
    _count?: true | Bank_AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Bank_AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Bank_AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bank_AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bank_AccountMaxAggregateInputType
  }

  export type GetBank_AccountAggregateType<T extends Bank_AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateBank_Account]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBank_Account[P]>
      : GetScalarType<T[P], AggregateBank_Account[P]>
  }




  export type Bank_AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Bank_AccountWhereInput
    orderBy?: Bank_AccountOrderByWithAggregationInput | Bank_AccountOrderByWithAggregationInput[]
    by: Bank_AccountScalarFieldEnum[] | Bank_AccountScalarFieldEnum
    having?: Bank_AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bank_AccountCountAggregateInputType | true
    _avg?: Bank_AccountAvgAggregateInputType
    _sum?: Bank_AccountSumAggregateInputType
    _min?: Bank_AccountMinAggregateInputType
    _max?: Bank_AccountMaxAggregateInputType
  }

  export type Bank_AccountGroupByOutputType = {
    id: number
    user_id: string
    name: string
    url: string | null
    recurrence: number | null
    recurrence_value: number | null
    archived: boolean
    font_color_hex: string
    _count: Bank_AccountCountAggregateOutputType | null
    _avg: Bank_AccountAvgAggregateOutputType | null
    _sum: Bank_AccountSumAggregateOutputType | null
    _min: Bank_AccountMinAggregateOutputType | null
    _max: Bank_AccountMaxAggregateOutputType | null
  }

  type GetBank_AccountGroupByPayload<T extends Bank_AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bank_AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bank_AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bank_AccountGroupByOutputType[P]>
            : GetScalarType<T[P], Bank_AccountGroupByOutputType[P]>
        }
      >
    >


  export type Bank_AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    url?: boolean
    recurrence?: boolean
    recurrence_value?: boolean
    archived?: boolean
    font_color_hex?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recurrenceModel?: boolean | Bank_Account$recurrenceModelArgs<ExtArgs>
    bills?: boolean | Bank_Account$billsArgs<ExtArgs>
    dueBills?: boolean | Bank_Account$dueBillsArgs<ExtArgs>
    bankAccountInstances?: boolean | Bank_Account$bankAccountInstancesArgs<ExtArgs>
    _count?: boolean | Bank_AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bank_Account"]>

  export type Bank_AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    url?: boolean
    recurrence?: boolean
    recurrence_value?: boolean
    archived?: boolean
    font_color_hex?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recurrenceModel?: boolean | Bank_Account$recurrenceModelArgs<ExtArgs>
  }, ExtArgs["result"]["bank_Account"]>

  export type Bank_AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    url?: boolean
    recurrence?: boolean
    recurrence_value?: boolean
    archived?: boolean
    font_color_hex?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    recurrenceModel?: boolean | Bank_Account$recurrenceModelArgs<ExtArgs>
  }, ExtArgs["result"]["bank_Account"]>

  export type Bank_AccountSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    url?: boolean
    recurrence?: boolean
    recurrence_value?: boolean
    archived?: boolean
    font_color_hex?: boolean
  }

  export type Bank_AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "url" | "recurrence" | "recurrence_value" | "archived" | "font_color_hex", ExtArgs["result"]["bank_Account"]>
  export type Bank_AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recurrenceModel?: boolean | Bank_Account$recurrenceModelArgs<ExtArgs>
    bills?: boolean | Bank_Account$billsArgs<ExtArgs>
    dueBills?: boolean | Bank_Account$dueBillsArgs<ExtArgs>
    bankAccountInstances?: boolean | Bank_Account$bankAccountInstancesArgs<ExtArgs>
    _count?: boolean | Bank_AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Bank_AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recurrenceModel?: boolean | Bank_Account$recurrenceModelArgs<ExtArgs>
  }
  export type Bank_AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    recurrenceModel?: boolean | Bank_Account$recurrenceModelArgs<ExtArgs>
  }

  export type $Bank_AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bank_Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      recurrenceModel: Prisma.$RecurrencePayload<ExtArgs> | null
      bills: Prisma.$BillsPayload<ExtArgs>[]
      dueBills: Prisma.$Due_BillsPayload<ExtArgs>[]
      bankAccountInstances: Prisma.$Bank_Account_InstancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      name: string
      url: string | null
      recurrence: number | null
      recurrence_value: number | null
      archived: boolean
      font_color_hex: string
    }, ExtArgs["result"]["bank_Account"]>
    composites: {}
  }

  type Bank_AccountGetPayload<S extends boolean | null | undefined | Bank_AccountDefaultArgs> = $Result.GetResult<Prisma.$Bank_AccountPayload, S>

  type Bank_AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Bank_AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Bank_AccountCountAggregateInputType | true
    }

  export interface Bank_AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bank_Account'], meta: { name: 'Bank_Account' } }
    /**
     * Find zero or one Bank_Account that matches the filter.
     * @param {Bank_AccountFindUniqueArgs} args - Arguments to find a Bank_Account
     * @example
     * // Get one Bank_Account
     * const bank_Account = await prisma.bank_Account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Bank_AccountFindUniqueArgs>(args: SelectSubset<T, Bank_AccountFindUniqueArgs<ExtArgs>>): Prisma__Bank_AccountClient<$Result.GetResult<Prisma.$Bank_AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bank_Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Bank_AccountFindUniqueOrThrowArgs} args - Arguments to find a Bank_Account
     * @example
     * // Get one Bank_Account
     * const bank_Account = await prisma.bank_Account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Bank_AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, Bank_AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Bank_AccountClient<$Result.GetResult<Prisma.$Bank_AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bank_Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_AccountFindFirstArgs} args - Arguments to find a Bank_Account
     * @example
     * // Get one Bank_Account
     * const bank_Account = await prisma.bank_Account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Bank_AccountFindFirstArgs>(args?: SelectSubset<T, Bank_AccountFindFirstArgs<ExtArgs>>): Prisma__Bank_AccountClient<$Result.GetResult<Prisma.$Bank_AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bank_Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_AccountFindFirstOrThrowArgs} args - Arguments to find a Bank_Account
     * @example
     * // Get one Bank_Account
     * const bank_Account = await prisma.bank_Account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Bank_AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, Bank_AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__Bank_AccountClient<$Result.GetResult<Prisma.$Bank_AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bank_Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bank_Accounts
     * const bank_Accounts = await prisma.bank_Account.findMany()
     * 
     * // Get first 10 Bank_Accounts
     * const bank_Accounts = await prisma.bank_Account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bank_AccountWithIdOnly = await prisma.bank_Account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Bank_AccountFindManyArgs>(args?: SelectSubset<T, Bank_AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bank_AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bank_Account.
     * @param {Bank_AccountCreateArgs} args - Arguments to create a Bank_Account.
     * @example
     * // Create one Bank_Account
     * const Bank_Account = await prisma.bank_Account.create({
     *   data: {
     *     // ... data to create a Bank_Account
     *   }
     * })
     * 
     */
    create<T extends Bank_AccountCreateArgs>(args: SelectSubset<T, Bank_AccountCreateArgs<ExtArgs>>): Prisma__Bank_AccountClient<$Result.GetResult<Prisma.$Bank_AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bank_Accounts.
     * @param {Bank_AccountCreateManyArgs} args - Arguments to create many Bank_Accounts.
     * @example
     * // Create many Bank_Accounts
     * const bank_Account = await prisma.bank_Account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Bank_AccountCreateManyArgs>(args?: SelectSubset<T, Bank_AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bank_Accounts and returns the data saved in the database.
     * @param {Bank_AccountCreateManyAndReturnArgs} args - Arguments to create many Bank_Accounts.
     * @example
     * // Create many Bank_Accounts
     * const bank_Account = await prisma.bank_Account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bank_Accounts and only return the `id`
     * const bank_AccountWithIdOnly = await prisma.bank_Account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Bank_AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, Bank_AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bank_AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bank_Account.
     * @param {Bank_AccountDeleteArgs} args - Arguments to delete one Bank_Account.
     * @example
     * // Delete one Bank_Account
     * const Bank_Account = await prisma.bank_Account.delete({
     *   where: {
     *     // ... filter to delete one Bank_Account
     *   }
     * })
     * 
     */
    delete<T extends Bank_AccountDeleteArgs>(args: SelectSubset<T, Bank_AccountDeleteArgs<ExtArgs>>): Prisma__Bank_AccountClient<$Result.GetResult<Prisma.$Bank_AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bank_Account.
     * @param {Bank_AccountUpdateArgs} args - Arguments to update one Bank_Account.
     * @example
     * // Update one Bank_Account
     * const bank_Account = await prisma.bank_Account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Bank_AccountUpdateArgs>(args: SelectSubset<T, Bank_AccountUpdateArgs<ExtArgs>>): Prisma__Bank_AccountClient<$Result.GetResult<Prisma.$Bank_AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bank_Accounts.
     * @param {Bank_AccountDeleteManyArgs} args - Arguments to filter Bank_Accounts to delete.
     * @example
     * // Delete a few Bank_Accounts
     * const { count } = await prisma.bank_Account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Bank_AccountDeleteManyArgs>(args?: SelectSubset<T, Bank_AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bank_Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bank_Accounts
     * const bank_Account = await prisma.bank_Account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Bank_AccountUpdateManyArgs>(args: SelectSubset<T, Bank_AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bank_Accounts and returns the data updated in the database.
     * @param {Bank_AccountUpdateManyAndReturnArgs} args - Arguments to update many Bank_Accounts.
     * @example
     * // Update many Bank_Accounts
     * const bank_Account = await prisma.bank_Account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bank_Accounts and only return the `id`
     * const bank_AccountWithIdOnly = await prisma.bank_Account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Bank_AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, Bank_AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bank_AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bank_Account.
     * @param {Bank_AccountUpsertArgs} args - Arguments to update or create a Bank_Account.
     * @example
     * // Update or create a Bank_Account
     * const bank_Account = await prisma.bank_Account.upsert({
     *   create: {
     *     // ... data to create a Bank_Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bank_Account we want to update
     *   }
     * })
     */
    upsert<T extends Bank_AccountUpsertArgs>(args: SelectSubset<T, Bank_AccountUpsertArgs<ExtArgs>>): Prisma__Bank_AccountClient<$Result.GetResult<Prisma.$Bank_AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bank_Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_AccountCountArgs} args - Arguments to filter Bank_Accounts to count.
     * @example
     * // Count the number of Bank_Accounts
     * const count = await prisma.bank_Account.count({
     *   where: {
     *     // ... the filter for the Bank_Accounts we want to count
     *   }
     * })
    **/
    count<T extends Bank_AccountCountArgs>(
      args?: Subset<T, Bank_AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bank_AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bank_Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Bank_AccountAggregateArgs>(args: Subset<T, Bank_AccountAggregateArgs>): Prisma.PrismaPromise<GetBank_AccountAggregateType<T>>

    /**
     * Group by Bank_Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_AccountGroupByArgs} args - Group by arguments.
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
      T extends Bank_AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Bank_AccountGroupByArgs['orderBy'] }
        : { orderBy?: Bank_AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Bank_AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBank_AccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bank_Account model
   */
  readonly fields: Bank_AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bank_Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Bank_AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recurrenceModel<T extends Bank_Account$recurrenceModelArgs<ExtArgs> = {}>(args?: Subset<T, Bank_Account$recurrenceModelArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bills<T extends Bank_Account$billsArgs<ExtArgs> = {}>(args?: Subset<T, Bank_Account$billsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dueBills<T extends Bank_Account$dueBillsArgs<ExtArgs> = {}>(args?: Subset<T, Bank_Account$dueBillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Due_BillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bankAccountInstances<T extends Bank_Account$bankAccountInstancesArgs<ExtArgs> = {}>(args?: Subset<T, Bank_Account$bankAccountInstancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bank_Account_InstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Bank_Account model
   */
  interface Bank_AccountFieldRefs {
    readonly id: FieldRef<"Bank_Account", 'Int'>
    readonly user_id: FieldRef<"Bank_Account", 'String'>
    readonly name: FieldRef<"Bank_Account", 'String'>
    readonly url: FieldRef<"Bank_Account", 'String'>
    readonly recurrence: FieldRef<"Bank_Account", 'Int'>
    readonly recurrence_value: FieldRef<"Bank_Account", 'Int'>
    readonly archived: FieldRef<"Bank_Account", 'Boolean'>
    readonly font_color_hex: FieldRef<"Bank_Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bank_Account findUnique
   */
  export type Bank_AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account
     */
    select?: Bank_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account
     */
    omit?: Bank_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_AccountInclude<ExtArgs> | null
    /**
     * Filter, which Bank_Account to fetch.
     */
    where: Bank_AccountWhereUniqueInput
  }

  /**
   * Bank_Account findUniqueOrThrow
   */
  export type Bank_AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account
     */
    select?: Bank_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account
     */
    omit?: Bank_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_AccountInclude<ExtArgs> | null
    /**
     * Filter, which Bank_Account to fetch.
     */
    where: Bank_AccountWhereUniqueInput
  }

  /**
   * Bank_Account findFirst
   */
  export type Bank_AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account
     */
    select?: Bank_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account
     */
    omit?: Bank_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_AccountInclude<ExtArgs> | null
    /**
     * Filter, which Bank_Account to fetch.
     */
    where?: Bank_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bank_Accounts to fetch.
     */
    orderBy?: Bank_AccountOrderByWithRelationInput | Bank_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bank_Accounts.
     */
    cursor?: Bank_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bank_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bank_Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bank_Accounts.
     */
    distinct?: Bank_AccountScalarFieldEnum | Bank_AccountScalarFieldEnum[]
  }

  /**
   * Bank_Account findFirstOrThrow
   */
  export type Bank_AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account
     */
    select?: Bank_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account
     */
    omit?: Bank_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_AccountInclude<ExtArgs> | null
    /**
     * Filter, which Bank_Account to fetch.
     */
    where?: Bank_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bank_Accounts to fetch.
     */
    orderBy?: Bank_AccountOrderByWithRelationInput | Bank_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bank_Accounts.
     */
    cursor?: Bank_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bank_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bank_Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bank_Accounts.
     */
    distinct?: Bank_AccountScalarFieldEnum | Bank_AccountScalarFieldEnum[]
  }

  /**
   * Bank_Account findMany
   */
  export type Bank_AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account
     */
    select?: Bank_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account
     */
    omit?: Bank_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_AccountInclude<ExtArgs> | null
    /**
     * Filter, which Bank_Accounts to fetch.
     */
    where?: Bank_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bank_Accounts to fetch.
     */
    orderBy?: Bank_AccountOrderByWithRelationInput | Bank_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bank_Accounts.
     */
    cursor?: Bank_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bank_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bank_Accounts.
     */
    skip?: number
    distinct?: Bank_AccountScalarFieldEnum | Bank_AccountScalarFieldEnum[]
  }

  /**
   * Bank_Account create
   */
  export type Bank_AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account
     */
    select?: Bank_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account
     */
    omit?: Bank_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Bank_Account.
     */
    data: XOR<Bank_AccountCreateInput, Bank_AccountUncheckedCreateInput>
  }

  /**
   * Bank_Account createMany
   */
  export type Bank_AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bank_Accounts.
     */
    data: Bank_AccountCreateManyInput | Bank_AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bank_Account createManyAndReturn
   */
  export type Bank_AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account
     */
    select?: Bank_AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account
     */
    omit?: Bank_AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Bank_Accounts.
     */
    data: Bank_AccountCreateManyInput | Bank_AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bank_Account update
   */
  export type Bank_AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account
     */
    select?: Bank_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account
     */
    omit?: Bank_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Bank_Account.
     */
    data: XOR<Bank_AccountUpdateInput, Bank_AccountUncheckedUpdateInput>
    /**
     * Choose, which Bank_Account to update.
     */
    where: Bank_AccountWhereUniqueInput
  }

  /**
   * Bank_Account updateMany
   */
  export type Bank_AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bank_Accounts.
     */
    data: XOR<Bank_AccountUpdateManyMutationInput, Bank_AccountUncheckedUpdateManyInput>
    /**
     * Filter which Bank_Accounts to update
     */
    where?: Bank_AccountWhereInput
    /**
     * Limit how many Bank_Accounts to update.
     */
    limit?: number
  }

  /**
   * Bank_Account updateManyAndReturn
   */
  export type Bank_AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account
     */
    select?: Bank_AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account
     */
    omit?: Bank_AccountOmit<ExtArgs> | null
    /**
     * The data used to update Bank_Accounts.
     */
    data: XOR<Bank_AccountUpdateManyMutationInput, Bank_AccountUncheckedUpdateManyInput>
    /**
     * Filter which Bank_Accounts to update
     */
    where?: Bank_AccountWhereInput
    /**
     * Limit how many Bank_Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bank_Account upsert
   */
  export type Bank_AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account
     */
    select?: Bank_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account
     */
    omit?: Bank_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Bank_Account to update in case it exists.
     */
    where: Bank_AccountWhereUniqueInput
    /**
     * In case the Bank_Account found by the `where` argument doesn't exist, create a new Bank_Account with this data.
     */
    create: XOR<Bank_AccountCreateInput, Bank_AccountUncheckedCreateInput>
    /**
     * In case the Bank_Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Bank_AccountUpdateInput, Bank_AccountUncheckedUpdateInput>
  }

  /**
   * Bank_Account delete
   */
  export type Bank_AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account
     */
    select?: Bank_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account
     */
    omit?: Bank_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_AccountInclude<ExtArgs> | null
    /**
     * Filter which Bank_Account to delete.
     */
    where: Bank_AccountWhereUniqueInput
  }

  /**
   * Bank_Account deleteMany
   */
  export type Bank_AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bank_Accounts to delete
     */
    where?: Bank_AccountWhereInput
    /**
     * Limit how many Bank_Accounts to delete.
     */
    limit?: number
  }

  /**
   * Bank_Account.recurrenceModel
   */
  export type Bank_Account$recurrenceModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurrence
     */
    omit?: RecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    where?: RecurrenceWhereInput
  }

  /**
   * Bank_Account.bills
   */
  export type Bank_Account$billsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    where?: BillsWhereInput
    orderBy?: BillsOrderByWithRelationInput | BillsOrderByWithRelationInput[]
    cursor?: BillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * Bank_Account.dueBills
   */
  export type Bank_Account$dueBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Due_Bills
     */
    select?: Due_BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Due_Bills
     */
    omit?: Due_BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Due_BillsInclude<ExtArgs> | null
    where?: Due_BillsWhereInput
    orderBy?: Due_BillsOrderByWithRelationInput | Due_BillsOrderByWithRelationInput[]
    cursor?: Due_BillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Due_BillsScalarFieldEnum | Due_BillsScalarFieldEnum[]
  }

  /**
   * Bank_Account.bankAccountInstances
   */
  export type Bank_Account$bankAccountInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account_Instance
     */
    select?: Bank_Account_InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account_Instance
     */
    omit?: Bank_Account_InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_Account_InstanceInclude<ExtArgs> | null
    where?: Bank_Account_InstanceWhereInput
    orderBy?: Bank_Account_InstanceOrderByWithRelationInput | Bank_Account_InstanceOrderByWithRelationInput[]
    cursor?: Bank_Account_InstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Bank_Account_InstanceScalarFieldEnum | Bank_Account_InstanceScalarFieldEnum[]
  }

  /**
   * Bank_Account without action
   */
  export type Bank_AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account
     */
    select?: Bank_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account
     */
    omit?: Bank_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_AccountInclude<ExtArgs> | null
  }


  /**
   * Model Bills
   */

  export type AggregateBills = {
    _count: BillsCountAggregateOutputType | null
    _avg: BillsAvgAggregateOutputType | null
    _sum: BillsSumAggregateOutputType | null
    _min: BillsMinAggregateOutputType | null
    _max: BillsMaxAggregateOutputType | null
  }

  export type BillsAvgAggregateOutputType = {
    id: number | null
    default_amount_due: Decimal | null
    default_draft_account: number | null
    category: number | null
    recurrence: number | null
    recurrence_value: number | null
  }

  export type BillsSumAggregateOutputType = {
    id: number | null
    default_amount_due: Decimal | null
    default_draft_account: number | null
    category: number | null
    recurrence: number | null
    recurrence_value: number | null
  }

  export type BillsMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    name: string | null
    default_amount_due: Decimal | null
    url: string | null
    archived: boolean | null
    default_draft_account: number | null
    category: number | null
    recurrence: number | null
    recurrence_value: number | null
  }

  export type BillsMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    name: string | null
    default_amount_due: Decimal | null
    url: string | null
    archived: boolean | null
    default_draft_account: number | null
    category: number | null
    recurrence: number | null
    recurrence_value: number | null
  }

  export type BillsCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    default_amount_due: number
    url: number
    archived: number
    default_draft_account: number
    category: number
    recurrence: number
    recurrence_value: number
    _all: number
  }


  export type BillsAvgAggregateInputType = {
    id?: true
    default_amount_due?: true
    default_draft_account?: true
    category?: true
    recurrence?: true
    recurrence_value?: true
  }

  export type BillsSumAggregateInputType = {
    id?: true
    default_amount_due?: true
    default_draft_account?: true
    category?: true
    recurrence?: true
    recurrence_value?: true
  }

  export type BillsMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    default_amount_due?: true
    url?: true
    archived?: true
    default_draft_account?: true
    category?: true
    recurrence?: true
    recurrence_value?: true
  }

  export type BillsMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    default_amount_due?: true
    url?: true
    archived?: true
    default_draft_account?: true
    category?: true
    recurrence?: true
    recurrence_value?: true
  }

  export type BillsCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    default_amount_due?: true
    url?: true
    archived?: true
    default_draft_account?: true
    category?: true
    recurrence?: true
    recurrence_value?: true
    _all?: true
  }

  export type BillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bills to aggregate.
     */
    where?: BillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillsOrderByWithRelationInput | BillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bills
    **/
    _count?: true | BillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillsMaxAggregateInputType
  }

  export type GetBillsAggregateType<T extends BillsAggregateArgs> = {
        [P in keyof T & keyof AggregateBills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBills[P]>
      : GetScalarType<T[P], AggregateBills[P]>
  }




  export type BillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillsWhereInput
    orderBy?: BillsOrderByWithAggregationInput | BillsOrderByWithAggregationInput[]
    by: BillsScalarFieldEnum[] | BillsScalarFieldEnum
    having?: BillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillsCountAggregateInputType | true
    _avg?: BillsAvgAggregateInputType
    _sum?: BillsSumAggregateInputType
    _min?: BillsMinAggregateInputType
    _max?: BillsMaxAggregateInputType
  }

  export type BillsGroupByOutputType = {
    id: number
    user_id: string
    name: string
    default_amount_due: Decimal
    url: string | null
    archived: boolean
    default_draft_account: number | null
    category: number | null
    recurrence: number | null
    recurrence_value: number | null
    _count: BillsCountAggregateOutputType | null
    _avg: BillsAvgAggregateOutputType | null
    _sum: BillsSumAggregateOutputType | null
    _min: BillsMinAggregateOutputType | null
    _max: BillsMaxAggregateOutputType | null
  }

  type GetBillsGroupByPayload<T extends BillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillsGroupByOutputType[P]>
            : GetScalarType<T[P], BillsGroupByOutputType[P]>
        }
      >
    >


  export type BillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    default_amount_due?: boolean
    url?: boolean
    archived?: boolean
    default_draft_account?: boolean
    category?: boolean
    recurrence?: boolean
    recurrence_value?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    defaultDraftAccount?: boolean | Bills$defaultDraftAccountArgs<ExtArgs>
    categoryModel?: boolean | Bills$categoryModelArgs<ExtArgs>
    recurrenceModel?: boolean | Bills$recurrenceModelArgs<ExtArgs>
    dueBills?: boolean | Bills$dueBillsArgs<ExtArgs>
    _count?: boolean | BillsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bills"]>

  export type BillsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    default_amount_due?: boolean
    url?: boolean
    archived?: boolean
    default_draft_account?: boolean
    category?: boolean
    recurrence?: boolean
    recurrence_value?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    defaultDraftAccount?: boolean | Bills$defaultDraftAccountArgs<ExtArgs>
    categoryModel?: boolean | Bills$categoryModelArgs<ExtArgs>
    recurrenceModel?: boolean | Bills$recurrenceModelArgs<ExtArgs>
  }, ExtArgs["result"]["bills"]>

  export type BillsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    default_amount_due?: boolean
    url?: boolean
    archived?: boolean
    default_draft_account?: boolean
    category?: boolean
    recurrence?: boolean
    recurrence_value?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    defaultDraftAccount?: boolean | Bills$defaultDraftAccountArgs<ExtArgs>
    categoryModel?: boolean | Bills$categoryModelArgs<ExtArgs>
    recurrenceModel?: boolean | Bills$recurrenceModelArgs<ExtArgs>
  }, ExtArgs["result"]["bills"]>

  export type BillsSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    default_amount_due?: boolean
    url?: boolean
    archived?: boolean
    default_draft_account?: boolean
    category?: boolean
    recurrence?: boolean
    recurrence_value?: boolean
  }

  export type BillsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "default_amount_due" | "url" | "archived" | "default_draft_account" | "category" | "recurrence" | "recurrence_value", ExtArgs["result"]["bills"]>
  export type BillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    defaultDraftAccount?: boolean | Bills$defaultDraftAccountArgs<ExtArgs>
    categoryModel?: boolean | Bills$categoryModelArgs<ExtArgs>
    recurrenceModel?: boolean | Bills$recurrenceModelArgs<ExtArgs>
    dueBills?: boolean | Bills$dueBillsArgs<ExtArgs>
    _count?: boolean | BillsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BillsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    defaultDraftAccount?: boolean | Bills$defaultDraftAccountArgs<ExtArgs>
    categoryModel?: boolean | Bills$categoryModelArgs<ExtArgs>
    recurrenceModel?: boolean | Bills$recurrenceModelArgs<ExtArgs>
  }
  export type BillsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    defaultDraftAccount?: boolean | Bills$defaultDraftAccountArgs<ExtArgs>
    categoryModel?: boolean | Bills$categoryModelArgs<ExtArgs>
    recurrenceModel?: boolean | Bills$recurrenceModelArgs<ExtArgs>
  }

  export type $BillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bills"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      defaultDraftAccount: Prisma.$Bank_AccountPayload<ExtArgs> | null
      categoryModel: Prisma.$CategoryPayload<ExtArgs> | null
      recurrenceModel: Prisma.$RecurrencePayload<ExtArgs> | null
      dueBills: Prisma.$Due_BillsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      name: string
      default_amount_due: Prisma.Decimal
      url: string | null
      archived: boolean
      default_draft_account: number | null
      category: number | null
      recurrence: number | null
      recurrence_value: number | null
    }, ExtArgs["result"]["bills"]>
    composites: {}
  }

  type BillsGetPayload<S extends boolean | null | undefined | BillsDefaultArgs> = $Result.GetResult<Prisma.$BillsPayload, S>

  type BillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillsCountAggregateInputType | true
    }

  export interface BillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bills'], meta: { name: 'Bills' } }
    /**
     * Find zero or one Bills that matches the filter.
     * @param {BillsFindUniqueArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillsFindUniqueArgs>(args: SelectSubset<T, BillsFindUniqueArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bills that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillsFindUniqueOrThrowArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillsFindUniqueOrThrowArgs>(args: SelectSubset<T, BillsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsFindFirstArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillsFindFirstArgs>(args?: SelectSubset<T, BillsFindFirstArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsFindFirstOrThrowArgs} args - Arguments to find a Bills
     * @example
     * // Get one Bills
     * const bills = await prisma.bills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillsFindFirstOrThrowArgs>(args?: SelectSubset<T, BillsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bills.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billsWithIdOnly = await prisma.bills.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillsFindManyArgs>(args?: SelectSubset<T, BillsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bills.
     * @param {BillsCreateArgs} args - Arguments to create a Bills.
     * @example
     * // Create one Bills
     * const Bills = await prisma.bills.create({
     *   data: {
     *     // ... data to create a Bills
     *   }
     * })
     * 
     */
    create<T extends BillsCreateArgs>(args: SelectSubset<T, BillsCreateArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bills.
     * @param {BillsCreateManyArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bills = await prisma.bills.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillsCreateManyArgs>(args?: SelectSubset<T, BillsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bills and returns the data saved in the database.
     * @param {BillsCreateManyAndReturnArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bills = await prisma.bills.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bills and only return the `id`
     * const billsWithIdOnly = await prisma.bills.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillsCreateManyAndReturnArgs>(args?: SelectSubset<T, BillsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bills.
     * @param {BillsDeleteArgs} args - Arguments to delete one Bills.
     * @example
     * // Delete one Bills
     * const Bills = await prisma.bills.delete({
     *   where: {
     *     // ... filter to delete one Bills
     *   }
     * })
     * 
     */
    delete<T extends BillsDeleteArgs>(args: SelectSubset<T, BillsDeleteArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bills.
     * @param {BillsUpdateArgs} args - Arguments to update one Bills.
     * @example
     * // Update one Bills
     * const bills = await prisma.bills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillsUpdateArgs>(args: SelectSubset<T, BillsUpdateArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bills.
     * @param {BillsDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillsDeleteManyArgs>(args?: SelectSubset<T, BillsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bills = await prisma.bills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillsUpdateManyArgs>(args: SelectSubset<T, BillsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills and returns the data updated in the database.
     * @param {BillsUpdateManyAndReturnArgs} args - Arguments to update many Bills.
     * @example
     * // Update many Bills
     * const bills = await prisma.bills.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bills and only return the `id`
     * const billsWithIdOnly = await prisma.bills.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BillsUpdateManyAndReturnArgs>(args: SelectSubset<T, BillsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bills.
     * @param {BillsUpsertArgs} args - Arguments to update or create a Bills.
     * @example
     * // Update or create a Bills
     * const bills = await prisma.bills.upsert({
     *   create: {
     *     // ... data to create a Bills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bills we want to update
     *   }
     * })
     */
    upsert<T extends BillsUpsertArgs>(args: SelectSubset<T, BillsUpsertArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bills.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends BillsCountArgs>(
      args?: Subset<T, BillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BillsAggregateArgs>(args: Subset<T, BillsAggregateArgs>): Prisma.PrismaPromise<GetBillsAggregateType<T>>

    /**
     * Group by Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillsGroupByArgs} args - Group by arguments.
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
      T extends BillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillsGroupByArgs['orderBy'] }
        : { orderBy?: BillsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bills model
   */
  readonly fields: BillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    defaultDraftAccount<T extends Bills$defaultDraftAccountArgs<ExtArgs> = {}>(args?: Subset<T, Bills$defaultDraftAccountArgs<ExtArgs>>): Prisma__Bank_AccountClient<$Result.GetResult<Prisma.$Bank_AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    categoryModel<T extends Bills$categoryModelArgs<ExtArgs> = {}>(args?: Subset<T, Bills$categoryModelArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    recurrenceModel<T extends Bills$recurrenceModelArgs<ExtArgs> = {}>(args?: Subset<T, Bills$recurrenceModelArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dueBills<T extends Bills$dueBillsArgs<ExtArgs> = {}>(args?: Subset<T, Bills$dueBillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Due_BillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Bills model
   */
  interface BillsFieldRefs {
    readonly id: FieldRef<"Bills", 'Int'>
    readonly user_id: FieldRef<"Bills", 'String'>
    readonly name: FieldRef<"Bills", 'String'>
    readonly default_amount_due: FieldRef<"Bills", 'Decimal'>
    readonly url: FieldRef<"Bills", 'String'>
    readonly archived: FieldRef<"Bills", 'Boolean'>
    readonly default_draft_account: FieldRef<"Bills", 'Int'>
    readonly category: FieldRef<"Bills", 'Int'>
    readonly recurrence: FieldRef<"Bills", 'Int'>
    readonly recurrence_value: FieldRef<"Bills", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Bills findUnique
   */
  export type BillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where: BillsWhereUniqueInput
  }

  /**
   * Bills findUniqueOrThrow
   */
  export type BillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where: BillsWhereUniqueInput
  }

  /**
   * Bills findFirst
   */
  export type BillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillsOrderByWithRelationInput | BillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * Bills findFirstOrThrow
   */
  export type BillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillsOrderByWithRelationInput | BillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * Bills findMany
   */
  export type BillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillsOrderByWithRelationInput | BillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bills.
     */
    cursor?: BillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    distinct?: BillsScalarFieldEnum | BillsScalarFieldEnum[]
  }

  /**
   * Bills create
   */
  export type BillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * The data needed to create a Bills.
     */
    data: XOR<BillsCreateInput, BillsUncheckedCreateInput>
  }

  /**
   * Bills createMany
   */
  export type BillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bills.
     */
    data: BillsCreateManyInput | BillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bills createManyAndReturn
   */
  export type BillsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * The data used to create many Bills.
     */
    data: BillsCreateManyInput | BillsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bills update
   */
  export type BillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * The data needed to update a Bills.
     */
    data: XOR<BillsUpdateInput, BillsUncheckedUpdateInput>
    /**
     * Choose, which Bills to update.
     */
    where: BillsWhereUniqueInput
  }

  /**
   * Bills updateMany
   */
  export type BillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bills.
     */
    data: XOR<BillsUpdateManyMutationInput, BillsUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillsWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
  }

  /**
   * Bills updateManyAndReturn
   */
  export type BillsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * The data used to update Bills.
     */
    data: XOR<BillsUpdateManyMutationInput, BillsUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillsWhereInput
    /**
     * Limit how many Bills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bills upsert
   */
  export type BillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * The filter to search for the Bills to update in case it exists.
     */
    where: BillsWhereUniqueInput
    /**
     * In case the Bills found by the `where` argument doesn't exist, create a new Bills with this data.
     */
    create: XOR<BillsCreateInput, BillsUncheckedCreateInput>
    /**
     * In case the Bills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillsUpdateInput, BillsUncheckedUpdateInput>
  }

  /**
   * Bills delete
   */
  export type BillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    /**
     * Filter which Bills to delete.
     */
    where: BillsWhereUniqueInput
  }

  /**
   * Bills deleteMany
   */
  export type BillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bills to delete
     */
    where?: BillsWhereInput
    /**
     * Limit how many Bills to delete.
     */
    limit?: number
  }

  /**
   * Bills.defaultDraftAccount
   */
  export type Bills$defaultDraftAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account
     */
    select?: Bank_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account
     */
    omit?: Bank_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_AccountInclude<ExtArgs> | null
    where?: Bank_AccountWhereInput
  }

  /**
   * Bills.categoryModel
   */
  export type Bills$categoryModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Bills.recurrenceModel
   */
  export type Bills$recurrenceModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurrence
     */
    omit?: RecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    where?: RecurrenceWhereInput
  }

  /**
   * Bills.dueBills
   */
  export type Bills$dueBillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Due_Bills
     */
    select?: Due_BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Due_Bills
     */
    omit?: Due_BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Due_BillsInclude<ExtArgs> | null
    where?: Due_BillsWhereInput
    orderBy?: Due_BillsOrderByWithRelationInput | Due_BillsOrderByWithRelationInput[]
    cursor?: Due_BillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Due_BillsScalarFieldEnum | Due_BillsScalarFieldEnum[]
  }

  /**
   * Bills without action
   */
  export type BillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
  }


  /**
   * Model Due_Bills
   */

  export type AggregateDue_Bills = {
    _count: Due_BillsCountAggregateOutputType | null
    _avg: Due_BillsAvgAggregateOutputType | null
    _sum: Due_BillsSumAggregateOutputType | null
    _min: Due_BillsMinAggregateOutputType | null
    _max: Due_BillsMaxAggregateOutputType | null
  }

  export type Due_BillsAvgAggregateOutputType = {
    id: number | null
    bill: number | null
    recurrence: number | null
    recurrence_value: number | null
    priority: number | null
    min_amount_due: Decimal | null
    total_amount_due: Decimal | null
    status: number | null
    draft_account: number | null
  }

  export type Due_BillsSumAggregateOutputType = {
    id: number | null
    bill: number | null
    recurrence: number | null
    recurrence_value: number | null
    priority: number | null
    min_amount_due: Decimal | null
    total_amount_due: Decimal | null
    status: number | null
    draft_account: number | null
  }

  export type Due_BillsMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    bill: number | null
    recurrence: number | null
    recurrence_value: number | null
    priority: number | null
    due_date: Date | null
    pay_date: Date | null
    min_amount_due: Decimal | null
    total_amount_due: Decimal | null
    status: number | null
    archived: boolean | null
    confirmation: string | null
    notes: string | null
    draft_account: number | null
  }

  export type Due_BillsMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    bill: number | null
    recurrence: number | null
    recurrence_value: number | null
    priority: number | null
    due_date: Date | null
    pay_date: Date | null
    min_amount_due: Decimal | null
    total_amount_due: Decimal | null
    status: number | null
    archived: boolean | null
    confirmation: string | null
    notes: string | null
    draft_account: number | null
  }

  export type Due_BillsCountAggregateOutputType = {
    id: number
    user_id: number
    bill: number
    recurrence: number
    recurrence_value: number
    priority: number
    due_date: number
    pay_date: number
    min_amount_due: number
    total_amount_due: number
    status: number
    archived: number
    confirmation: number
    notes: number
    draft_account: number
    _all: number
  }


  export type Due_BillsAvgAggregateInputType = {
    id?: true
    bill?: true
    recurrence?: true
    recurrence_value?: true
    priority?: true
    min_amount_due?: true
    total_amount_due?: true
    status?: true
    draft_account?: true
  }

  export type Due_BillsSumAggregateInputType = {
    id?: true
    bill?: true
    recurrence?: true
    recurrence_value?: true
    priority?: true
    min_amount_due?: true
    total_amount_due?: true
    status?: true
    draft_account?: true
  }

  export type Due_BillsMinAggregateInputType = {
    id?: true
    user_id?: true
    bill?: true
    recurrence?: true
    recurrence_value?: true
    priority?: true
    due_date?: true
    pay_date?: true
    min_amount_due?: true
    total_amount_due?: true
    status?: true
    archived?: true
    confirmation?: true
    notes?: true
    draft_account?: true
  }

  export type Due_BillsMaxAggregateInputType = {
    id?: true
    user_id?: true
    bill?: true
    recurrence?: true
    recurrence_value?: true
    priority?: true
    due_date?: true
    pay_date?: true
    min_amount_due?: true
    total_amount_due?: true
    status?: true
    archived?: true
    confirmation?: true
    notes?: true
    draft_account?: true
  }

  export type Due_BillsCountAggregateInputType = {
    id?: true
    user_id?: true
    bill?: true
    recurrence?: true
    recurrence_value?: true
    priority?: true
    due_date?: true
    pay_date?: true
    min_amount_due?: true
    total_amount_due?: true
    status?: true
    archived?: true
    confirmation?: true
    notes?: true
    draft_account?: true
    _all?: true
  }

  export type Due_BillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Due_Bills to aggregate.
     */
    where?: Due_BillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Due_Bills to fetch.
     */
    orderBy?: Due_BillsOrderByWithRelationInput | Due_BillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Due_BillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Due_Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Due_Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Due_Bills
    **/
    _count?: true | Due_BillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Due_BillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Due_BillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Due_BillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Due_BillsMaxAggregateInputType
  }

  export type GetDue_BillsAggregateType<T extends Due_BillsAggregateArgs> = {
        [P in keyof T & keyof AggregateDue_Bills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDue_Bills[P]>
      : GetScalarType<T[P], AggregateDue_Bills[P]>
  }




  export type Due_BillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Due_BillsWhereInput
    orderBy?: Due_BillsOrderByWithAggregationInput | Due_BillsOrderByWithAggregationInput[]
    by: Due_BillsScalarFieldEnum[] | Due_BillsScalarFieldEnum
    having?: Due_BillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Due_BillsCountAggregateInputType | true
    _avg?: Due_BillsAvgAggregateInputType
    _sum?: Due_BillsSumAggregateInputType
    _min?: Due_BillsMinAggregateInputType
    _max?: Due_BillsMaxAggregateInputType
  }

  export type Due_BillsGroupByOutputType = {
    id: number
    user_id: string
    bill: number | null
    recurrence: number | null
    recurrence_value: number | null
    priority: number
    due_date: Date
    pay_date: Date | null
    min_amount_due: Decimal
    total_amount_due: Decimal
    status: number | null
    archived: boolean
    confirmation: string | null
    notes: string | null
    draft_account: number | null
    _count: Due_BillsCountAggregateOutputType | null
    _avg: Due_BillsAvgAggregateOutputType | null
    _sum: Due_BillsSumAggregateOutputType | null
    _min: Due_BillsMinAggregateOutputType | null
    _max: Due_BillsMaxAggregateOutputType | null
  }

  type GetDue_BillsGroupByPayload<T extends Due_BillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Due_BillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Due_BillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Due_BillsGroupByOutputType[P]>
            : GetScalarType<T[P], Due_BillsGroupByOutputType[P]>
        }
      >
    >


  export type Due_BillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bill?: boolean
    recurrence?: boolean
    recurrence_value?: boolean
    priority?: boolean
    due_date?: boolean
    pay_date?: boolean
    min_amount_due?: boolean
    total_amount_due?: boolean
    status?: boolean
    archived?: boolean
    confirmation?: boolean
    notes?: boolean
    draft_account?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    billModel?: boolean | Due_Bills$billModelArgs<ExtArgs>
    recurrenceModel?: boolean | Due_Bills$recurrenceModelArgs<ExtArgs>
    statusModel?: boolean | Due_Bills$statusModelArgs<ExtArgs>
    draftAccount?: boolean | Due_Bills$draftAccountArgs<ExtArgs>
  }, ExtArgs["result"]["due_Bills"]>

  export type Due_BillsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bill?: boolean
    recurrence?: boolean
    recurrence_value?: boolean
    priority?: boolean
    due_date?: boolean
    pay_date?: boolean
    min_amount_due?: boolean
    total_amount_due?: boolean
    status?: boolean
    archived?: boolean
    confirmation?: boolean
    notes?: boolean
    draft_account?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    billModel?: boolean | Due_Bills$billModelArgs<ExtArgs>
    recurrenceModel?: boolean | Due_Bills$recurrenceModelArgs<ExtArgs>
    statusModel?: boolean | Due_Bills$statusModelArgs<ExtArgs>
    draftAccount?: boolean | Due_Bills$draftAccountArgs<ExtArgs>
  }, ExtArgs["result"]["due_Bills"]>

  export type Due_BillsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bill?: boolean
    recurrence?: boolean
    recurrence_value?: boolean
    priority?: boolean
    due_date?: boolean
    pay_date?: boolean
    min_amount_due?: boolean
    total_amount_due?: boolean
    status?: boolean
    archived?: boolean
    confirmation?: boolean
    notes?: boolean
    draft_account?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    billModel?: boolean | Due_Bills$billModelArgs<ExtArgs>
    recurrenceModel?: boolean | Due_Bills$recurrenceModelArgs<ExtArgs>
    statusModel?: boolean | Due_Bills$statusModelArgs<ExtArgs>
    draftAccount?: boolean | Due_Bills$draftAccountArgs<ExtArgs>
  }, ExtArgs["result"]["due_Bills"]>

  export type Due_BillsSelectScalar = {
    id?: boolean
    user_id?: boolean
    bill?: boolean
    recurrence?: boolean
    recurrence_value?: boolean
    priority?: boolean
    due_date?: boolean
    pay_date?: boolean
    min_amount_due?: boolean
    total_amount_due?: boolean
    status?: boolean
    archived?: boolean
    confirmation?: boolean
    notes?: boolean
    draft_account?: boolean
  }

  export type Due_BillsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "bill" | "recurrence" | "recurrence_value" | "priority" | "due_date" | "pay_date" | "min_amount_due" | "total_amount_due" | "status" | "archived" | "confirmation" | "notes" | "draft_account", ExtArgs["result"]["due_Bills"]>
  export type Due_BillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    billModel?: boolean | Due_Bills$billModelArgs<ExtArgs>
    recurrenceModel?: boolean | Due_Bills$recurrenceModelArgs<ExtArgs>
    statusModel?: boolean | Due_Bills$statusModelArgs<ExtArgs>
    draftAccount?: boolean | Due_Bills$draftAccountArgs<ExtArgs>
  }
  export type Due_BillsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    billModel?: boolean | Due_Bills$billModelArgs<ExtArgs>
    recurrenceModel?: boolean | Due_Bills$recurrenceModelArgs<ExtArgs>
    statusModel?: boolean | Due_Bills$statusModelArgs<ExtArgs>
    draftAccount?: boolean | Due_Bills$draftAccountArgs<ExtArgs>
  }
  export type Due_BillsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    billModel?: boolean | Due_Bills$billModelArgs<ExtArgs>
    recurrenceModel?: boolean | Due_Bills$recurrenceModelArgs<ExtArgs>
    statusModel?: boolean | Due_Bills$statusModelArgs<ExtArgs>
    draftAccount?: boolean | Due_Bills$draftAccountArgs<ExtArgs>
  }

  export type $Due_BillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Due_Bills"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      billModel: Prisma.$BillsPayload<ExtArgs> | null
      recurrenceModel: Prisma.$RecurrencePayload<ExtArgs> | null
      statusModel: Prisma.$Bill_StatusPayload<ExtArgs> | null
      draftAccount: Prisma.$Bank_AccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      bill: number | null
      recurrence: number | null
      recurrence_value: number | null
      priority: number
      due_date: Date
      pay_date: Date | null
      min_amount_due: Prisma.Decimal
      total_amount_due: Prisma.Decimal
      status: number | null
      archived: boolean
      confirmation: string | null
      notes: string | null
      draft_account: number | null
    }, ExtArgs["result"]["due_Bills"]>
    composites: {}
  }

  type Due_BillsGetPayload<S extends boolean | null | undefined | Due_BillsDefaultArgs> = $Result.GetResult<Prisma.$Due_BillsPayload, S>

  type Due_BillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Due_BillsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Due_BillsCountAggregateInputType | true
    }

  export interface Due_BillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Due_Bills'], meta: { name: 'Due_Bills' } }
    /**
     * Find zero or one Due_Bills that matches the filter.
     * @param {Due_BillsFindUniqueArgs} args - Arguments to find a Due_Bills
     * @example
     * // Get one Due_Bills
     * const due_Bills = await prisma.due_Bills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Due_BillsFindUniqueArgs>(args: SelectSubset<T, Due_BillsFindUniqueArgs<ExtArgs>>): Prisma__Due_BillsClient<$Result.GetResult<Prisma.$Due_BillsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Due_Bills that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Due_BillsFindUniqueOrThrowArgs} args - Arguments to find a Due_Bills
     * @example
     * // Get one Due_Bills
     * const due_Bills = await prisma.due_Bills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Due_BillsFindUniqueOrThrowArgs>(args: SelectSubset<T, Due_BillsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Due_BillsClient<$Result.GetResult<Prisma.$Due_BillsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Due_Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Due_BillsFindFirstArgs} args - Arguments to find a Due_Bills
     * @example
     * // Get one Due_Bills
     * const due_Bills = await prisma.due_Bills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Due_BillsFindFirstArgs>(args?: SelectSubset<T, Due_BillsFindFirstArgs<ExtArgs>>): Prisma__Due_BillsClient<$Result.GetResult<Prisma.$Due_BillsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Due_Bills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Due_BillsFindFirstOrThrowArgs} args - Arguments to find a Due_Bills
     * @example
     * // Get one Due_Bills
     * const due_Bills = await prisma.due_Bills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Due_BillsFindFirstOrThrowArgs>(args?: SelectSubset<T, Due_BillsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Due_BillsClient<$Result.GetResult<Prisma.$Due_BillsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Due_Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Due_BillsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Due_Bills
     * const due_Bills = await prisma.due_Bills.findMany()
     * 
     * // Get first 10 Due_Bills
     * const due_Bills = await prisma.due_Bills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const due_BillsWithIdOnly = await prisma.due_Bills.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Due_BillsFindManyArgs>(args?: SelectSubset<T, Due_BillsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Due_BillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Due_Bills.
     * @param {Due_BillsCreateArgs} args - Arguments to create a Due_Bills.
     * @example
     * // Create one Due_Bills
     * const Due_Bills = await prisma.due_Bills.create({
     *   data: {
     *     // ... data to create a Due_Bills
     *   }
     * })
     * 
     */
    create<T extends Due_BillsCreateArgs>(args: SelectSubset<T, Due_BillsCreateArgs<ExtArgs>>): Prisma__Due_BillsClient<$Result.GetResult<Prisma.$Due_BillsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Due_Bills.
     * @param {Due_BillsCreateManyArgs} args - Arguments to create many Due_Bills.
     * @example
     * // Create many Due_Bills
     * const due_Bills = await prisma.due_Bills.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Due_BillsCreateManyArgs>(args?: SelectSubset<T, Due_BillsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Due_Bills and returns the data saved in the database.
     * @param {Due_BillsCreateManyAndReturnArgs} args - Arguments to create many Due_Bills.
     * @example
     * // Create many Due_Bills
     * const due_Bills = await prisma.due_Bills.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Due_Bills and only return the `id`
     * const due_BillsWithIdOnly = await prisma.due_Bills.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Due_BillsCreateManyAndReturnArgs>(args?: SelectSubset<T, Due_BillsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Due_BillsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Due_Bills.
     * @param {Due_BillsDeleteArgs} args - Arguments to delete one Due_Bills.
     * @example
     * // Delete one Due_Bills
     * const Due_Bills = await prisma.due_Bills.delete({
     *   where: {
     *     // ... filter to delete one Due_Bills
     *   }
     * })
     * 
     */
    delete<T extends Due_BillsDeleteArgs>(args: SelectSubset<T, Due_BillsDeleteArgs<ExtArgs>>): Prisma__Due_BillsClient<$Result.GetResult<Prisma.$Due_BillsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Due_Bills.
     * @param {Due_BillsUpdateArgs} args - Arguments to update one Due_Bills.
     * @example
     * // Update one Due_Bills
     * const due_Bills = await prisma.due_Bills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Due_BillsUpdateArgs>(args: SelectSubset<T, Due_BillsUpdateArgs<ExtArgs>>): Prisma__Due_BillsClient<$Result.GetResult<Prisma.$Due_BillsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Due_Bills.
     * @param {Due_BillsDeleteManyArgs} args - Arguments to filter Due_Bills to delete.
     * @example
     * // Delete a few Due_Bills
     * const { count } = await prisma.due_Bills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Due_BillsDeleteManyArgs>(args?: SelectSubset<T, Due_BillsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Due_Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Due_BillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Due_Bills
     * const due_Bills = await prisma.due_Bills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Due_BillsUpdateManyArgs>(args: SelectSubset<T, Due_BillsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Due_Bills and returns the data updated in the database.
     * @param {Due_BillsUpdateManyAndReturnArgs} args - Arguments to update many Due_Bills.
     * @example
     * // Update many Due_Bills
     * const due_Bills = await prisma.due_Bills.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Due_Bills and only return the `id`
     * const due_BillsWithIdOnly = await prisma.due_Bills.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Due_BillsUpdateManyAndReturnArgs>(args: SelectSubset<T, Due_BillsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Due_BillsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Due_Bills.
     * @param {Due_BillsUpsertArgs} args - Arguments to update or create a Due_Bills.
     * @example
     * // Update or create a Due_Bills
     * const due_Bills = await prisma.due_Bills.upsert({
     *   create: {
     *     // ... data to create a Due_Bills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Due_Bills we want to update
     *   }
     * })
     */
    upsert<T extends Due_BillsUpsertArgs>(args: SelectSubset<T, Due_BillsUpsertArgs<ExtArgs>>): Prisma__Due_BillsClient<$Result.GetResult<Prisma.$Due_BillsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Due_Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Due_BillsCountArgs} args - Arguments to filter Due_Bills to count.
     * @example
     * // Count the number of Due_Bills
     * const count = await prisma.due_Bills.count({
     *   where: {
     *     // ... the filter for the Due_Bills we want to count
     *   }
     * })
    **/
    count<T extends Due_BillsCountArgs>(
      args?: Subset<T, Due_BillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Due_BillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Due_Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Due_BillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Due_BillsAggregateArgs>(args: Subset<T, Due_BillsAggregateArgs>): Prisma.PrismaPromise<GetDue_BillsAggregateType<T>>

    /**
     * Group by Due_Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Due_BillsGroupByArgs} args - Group by arguments.
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
      T extends Due_BillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Due_BillsGroupByArgs['orderBy'] }
        : { orderBy?: Due_BillsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Due_BillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDue_BillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Due_Bills model
   */
  readonly fields: Due_BillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Due_Bills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Due_BillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    billModel<T extends Due_Bills$billModelArgs<ExtArgs> = {}>(args?: Subset<T, Due_Bills$billModelArgs<ExtArgs>>): Prisma__BillsClient<$Result.GetResult<Prisma.$BillsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    recurrenceModel<T extends Due_Bills$recurrenceModelArgs<ExtArgs> = {}>(args?: Subset<T, Due_Bills$recurrenceModelArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    statusModel<T extends Due_Bills$statusModelArgs<ExtArgs> = {}>(args?: Subset<T, Due_Bills$statusModelArgs<ExtArgs>>): Prisma__Bill_StatusClient<$Result.GetResult<Prisma.$Bill_StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    draftAccount<T extends Due_Bills$draftAccountArgs<ExtArgs> = {}>(args?: Subset<T, Due_Bills$draftAccountArgs<ExtArgs>>): Prisma__Bank_AccountClient<$Result.GetResult<Prisma.$Bank_AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Due_Bills model
   */
  interface Due_BillsFieldRefs {
    readonly id: FieldRef<"Due_Bills", 'Int'>
    readonly user_id: FieldRef<"Due_Bills", 'String'>
    readonly bill: FieldRef<"Due_Bills", 'Int'>
    readonly recurrence: FieldRef<"Due_Bills", 'Int'>
    readonly recurrence_value: FieldRef<"Due_Bills", 'Int'>
    readonly priority: FieldRef<"Due_Bills", 'Int'>
    readonly due_date: FieldRef<"Due_Bills", 'DateTime'>
    readonly pay_date: FieldRef<"Due_Bills", 'DateTime'>
    readonly min_amount_due: FieldRef<"Due_Bills", 'Decimal'>
    readonly total_amount_due: FieldRef<"Due_Bills", 'Decimal'>
    readonly status: FieldRef<"Due_Bills", 'Int'>
    readonly archived: FieldRef<"Due_Bills", 'Boolean'>
    readonly confirmation: FieldRef<"Due_Bills", 'String'>
    readonly notes: FieldRef<"Due_Bills", 'String'>
    readonly draft_account: FieldRef<"Due_Bills", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Due_Bills findUnique
   */
  export type Due_BillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Due_Bills
     */
    select?: Due_BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Due_Bills
     */
    omit?: Due_BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Due_BillsInclude<ExtArgs> | null
    /**
     * Filter, which Due_Bills to fetch.
     */
    where: Due_BillsWhereUniqueInput
  }

  /**
   * Due_Bills findUniqueOrThrow
   */
  export type Due_BillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Due_Bills
     */
    select?: Due_BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Due_Bills
     */
    omit?: Due_BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Due_BillsInclude<ExtArgs> | null
    /**
     * Filter, which Due_Bills to fetch.
     */
    where: Due_BillsWhereUniqueInput
  }

  /**
   * Due_Bills findFirst
   */
  export type Due_BillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Due_Bills
     */
    select?: Due_BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Due_Bills
     */
    omit?: Due_BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Due_BillsInclude<ExtArgs> | null
    /**
     * Filter, which Due_Bills to fetch.
     */
    where?: Due_BillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Due_Bills to fetch.
     */
    orderBy?: Due_BillsOrderByWithRelationInput | Due_BillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Due_Bills.
     */
    cursor?: Due_BillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Due_Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Due_Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Due_Bills.
     */
    distinct?: Due_BillsScalarFieldEnum | Due_BillsScalarFieldEnum[]
  }

  /**
   * Due_Bills findFirstOrThrow
   */
  export type Due_BillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Due_Bills
     */
    select?: Due_BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Due_Bills
     */
    omit?: Due_BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Due_BillsInclude<ExtArgs> | null
    /**
     * Filter, which Due_Bills to fetch.
     */
    where?: Due_BillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Due_Bills to fetch.
     */
    orderBy?: Due_BillsOrderByWithRelationInput | Due_BillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Due_Bills.
     */
    cursor?: Due_BillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Due_Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Due_Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Due_Bills.
     */
    distinct?: Due_BillsScalarFieldEnum | Due_BillsScalarFieldEnum[]
  }

  /**
   * Due_Bills findMany
   */
  export type Due_BillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Due_Bills
     */
    select?: Due_BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Due_Bills
     */
    omit?: Due_BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Due_BillsInclude<ExtArgs> | null
    /**
     * Filter, which Due_Bills to fetch.
     */
    where?: Due_BillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Due_Bills to fetch.
     */
    orderBy?: Due_BillsOrderByWithRelationInput | Due_BillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Due_Bills.
     */
    cursor?: Due_BillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Due_Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Due_Bills.
     */
    skip?: number
    distinct?: Due_BillsScalarFieldEnum | Due_BillsScalarFieldEnum[]
  }

  /**
   * Due_Bills create
   */
  export type Due_BillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Due_Bills
     */
    select?: Due_BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Due_Bills
     */
    omit?: Due_BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Due_BillsInclude<ExtArgs> | null
    /**
     * The data needed to create a Due_Bills.
     */
    data: XOR<Due_BillsCreateInput, Due_BillsUncheckedCreateInput>
  }

  /**
   * Due_Bills createMany
   */
  export type Due_BillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Due_Bills.
     */
    data: Due_BillsCreateManyInput | Due_BillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Due_Bills createManyAndReturn
   */
  export type Due_BillsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Due_Bills
     */
    select?: Due_BillsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Due_Bills
     */
    omit?: Due_BillsOmit<ExtArgs> | null
    /**
     * The data used to create many Due_Bills.
     */
    data: Due_BillsCreateManyInput | Due_BillsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Due_BillsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Due_Bills update
   */
  export type Due_BillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Due_Bills
     */
    select?: Due_BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Due_Bills
     */
    omit?: Due_BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Due_BillsInclude<ExtArgs> | null
    /**
     * The data needed to update a Due_Bills.
     */
    data: XOR<Due_BillsUpdateInput, Due_BillsUncheckedUpdateInput>
    /**
     * Choose, which Due_Bills to update.
     */
    where: Due_BillsWhereUniqueInput
  }

  /**
   * Due_Bills updateMany
   */
  export type Due_BillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Due_Bills.
     */
    data: XOR<Due_BillsUpdateManyMutationInput, Due_BillsUncheckedUpdateManyInput>
    /**
     * Filter which Due_Bills to update
     */
    where?: Due_BillsWhereInput
    /**
     * Limit how many Due_Bills to update.
     */
    limit?: number
  }

  /**
   * Due_Bills updateManyAndReturn
   */
  export type Due_BillsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Due_Bills
     */
    select?: Due_BillsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Due_Bills
     */
    omit?: Due_BillsOmit<ExtArgs> | null
    /**
     * The data used to update Due_Bills.
     */
    data: XOR<Due_BillsUpdateManyMutationInput, Due_BillsUncheckedUpdateManyInput>
    /**
     * Filter which Due_Bills to update
     */
    where?: Due_BillsWhereInput
    /**
     * Limit how many Due_Bills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Due_BillsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Due_Bills upsert
   */
  export type Due_BillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Due_Bills
     */
    select?: Due_BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Due_Bills
     */
    omit?: Due_BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Due_BillsInclude<ExtArgs> | null
    /**
     * The filter to search for the Due_Bills to update in case it exists.
     */
    where: Due_BillsWhereUniqueInput
    /**
     * In case the Due_Bills found by the `where` argument doesn't exist, create a new Due_Bills with this data.
     */
    create: XOR<Due_BillsCreateInput, Due_BillsUncheckedCreateInput>
    /**
     * In case the Due_Bills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Due_BillsUpdateInput, Due_BillsUncheckedUpdateInput>
  }

  /**
   * Due_Bills delete
   */
  export type Due_BillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Due_Bills
     */
    select?: Due_BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Due_Bills
     */
    omit?: Due_BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Due_BillsInclude<ExtArgs> | null
    /**
     * Filter which Due_Bills to delete.
     */
    where: Due_BillsWhereUniqueInput
  }

  /**
   * Due_Bills deleteMany
   */
  export type Due_BillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Due_Bills to delete
     */
    where?: Due_BillsWhereInput
    /**
     * Limit how many Due_Bills to delete.
     */
    limit?: number
  }

  /**
   * Due_Bills.billModel
   */
  export type Due_Bills$billModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bills
     */
    select?: BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bills
     */
    omit?: BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillsInclude<ExtArgs> | null
    where?: BillsWhereInput
  }

  /**
   * Due_Bills.recurrenceModel
   */
  export type Due_Bills$recurrenceModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recurrence
     */
    omit?: RecurrenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    where?: RecurrenceWhereInput
  }

  /**
   * Due_Bills.statusModel
   */
  export type Due_Bills$statusModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill_Status
     */
    select?: Bill_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill_Status
     */
    omit?: Bill_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bill_StatusInclude<ExtArgs> | null
    where?: Bill_StatusWhereInput
  }

  /**
   * Due_Bills.draftAccount
   */
  export type Due_Bills$draftAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account
     */
    select?: Bank_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account
     */
    omit?: Bank_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_AccountInclude<ExtArgs> | null
    where?: Bank_AccountWhereInput
  }

  /**
   * Due_Bills without action
   */
  export type Due_BillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Due_Bills
     */
    select?: Due_BillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Due_Bills
     */
    omit?: Due_BillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Due_BillsInclude<ExtArgs> | null
  }


  /**
   * Model Bank_Account_Instance
   */

  export type AggregateBank_Account_Instance = {
    _count: Bank_Account_InstanceCountAggregateOutputType | null
    _avg: Bank_Account_InstanceAvgAggregateOutputType | null
    _sum: Bank_Account_InstanceSumAggregateOutputType | null
    _min: Bank_Account_InstanceMinAggregateOutputType | null
    _max: Bank_Account_InstanceMaxAggregateOutputType | null
  }

  export type Bank_Account_InstanceAvgAggregateOutputType = {
    id: number | null
    bank_account: number | null
    priority: number | null
    status: number | null
    current_balance: Decimal | null
  }

  export type Bank_Account_InstanceSumAggregateOutputType = {
    id: number | null
    bank_account: number | null
    priority: number | null
    status: number | null
    current_balance: Decimal | null
  }

  export type Bank_Account_InstanceMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    bank_account: number | null
    priority: number | null
    due_date: Date | null
    pay_date: Date | null
    status: number | null
    archived: boolean | null
    current_balance: Decimal | null
  }

  export type Bank_Account_InstanceMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    bank_account: number | null
    priority: number | null
    due_date: Date | null
    pay_date: Date | null
    status: number | null
    archived: boolean | null
    current_balance: Decimal | null
  }

  export type Bank_Account_InstanceCountAggregateOutputType = {
    id: number
    user_id: number
    bank_account: number
    priority: number
    due_date: number
    pay_date: number
    status: number
    archived: number
    current_balance: number
    _all: number
  }


  export type Bank_Account_InstanceAvgAggregateInputType = {
    id?: true
    bank_account?: true
    priority?: true
    status?: true
    current_balance?: true
  }

  export type Bank_Account_InstanceSumAggregateInputType = {
    id?: true
    bank_account?: true
    priority?: true
    status?: true
    current_balance?: true
  }

  export type Bank_Account_InstanceMinAggregateInputType = {
    id?: true
    user_id?: true
    bank_account?: true
    priority?: true
    due_date?: true
    pay_date?: true
    status?: true
    archived?: true
    current_balance?: true
  }

  export type Bank_Account_InstanceMaxAggregateInputType = {
    id?: true
    user_id?: true
    bank_account?: true
    priority?: true
    due_date?: true
    pay_date?: true
    status?: true
    archived?: true
    current_balance?: true
  }

  export type Bank_Account_InstanceCountAggregateInputType = {
    id?: true
    user_id?: true
    bank_account?: true
    priority?: true
    due_date?: true
    pay_date?: true
    status?: true
    archived?: true
    current_balance?: true
    _all?: true
  }

  export type Bank_Account_InstanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bank_Account_Instance to aggregate.
     */
    where?: Bank_Account_InstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bank_Account_Instances to fetch.
     */
    orderBy?: Bank_Account_InstanceOrderByWithRelationInput | Bank_Account_InstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Bank_Account_InstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bank_Account_Instances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bank_Account_Instances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bank_Account_Instances
    **/
    _count?: true | Bank_Account_InstanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Bank_Account_InstanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Bank_Account_InstanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bank_Account_InstanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bank_Account_InstanceMaxAggregateInputType
  }

  export type GetBank_Account_InstanceAggregateType<T extends Bank_Account_InstanceAggregateArgs> = {
        [P in keyof T & keyof AggregateBank_Account_Instance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBank_Account_Instance[P]>
      : GetScalarType<T[P], AggregateBank_Account_Instance[P]>
  }




  export type Bank_Account_InstanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Bank_Account_InstanceWhereInput
    orderBy?: Bank_Account_InstanceOrderByWithAggregationInput | Bank_Account_InstanceOrderByWithAggregationInput[]
    by: Bank_Account_InstanceScalarFieldEnum[] | Bank_Account_InstanceScalarFieldEnum
    having?: Bank_Account_InstanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bank_Account_InstanceCountAggregateInputType | true
    _avg?: Bank_Account_InstanceAvgAggregateInputType
    _sum?: Bank_Account_InstanceSumAggregateInputType
    _min?: Bank_Account_InstanceMinAggregateInputType
    _max?: Bank_Account_InstanceMaxAggregateInputType
  }

  export type Bank_Account_InstanceGroupByOutputType = {
    id: number
    user_id: string
    bank_account: number | null
    priority: number
    due_date: Date
    pay_date: Date | null
    status: number | null
    archived: boolean
    current_balance: Decimal
    _count: Bank_Account_InstanceCountAggregateOutputType | null
    _avg: Bank_Account_InstanceAvgAggregateOutputType | null
    _sum: Bank_Account_InstanceSumAggregateOutputType | null
    _min: Bank_Account_InstanceMinAggregateOutputType | null
    _max: Bank_Account_InstanceMaxAggregateOutputType | null
  }

  type GetBank_Account_InstanceGroupByPayload<T extends Bank_Account_InstanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Bank_Account_InstanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bank_Account_InstanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bank_Account_InstanceGroupByOutputType[P]>
            : GetScalarType<T[P], Bank_Account_InstanceGroupByOutputType[P]>
        }
      >
    >


  export type Bank_Account_InstanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bank_account?: boolean
    priority?: boolean
    due_date?: boolean
    pay_date?: boolean
    status?: boolean
    archived?: boolean
    current_balance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bankAccount?: boolean | Bank_Account_Instance$bankAccountArgs<ExtArgs>
    statusModel?: boolean | Bank_Account_Instance$statusModelArgs<ExtArgs>
  }, ExtArgs["result"]["bank_Account_Instance"]>

  export type Bank_Account_InstanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bank_account?: boolean
    priority?: boolean
    due_date?: boolean
    pay_date?: boolean
    status?: boolean
    archived?: boolean
    current_balance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bankAccount?: boolean | Bank_Account_Instance$bankAccountArgs<ExtArgs>
    statusModel?: boolean | Bank_Account_Instance$statusModelArgs<ExtArgs>
  }, ExtArgs["result"]["bank_Account_Instance"]>

  export type Bank_Account_InstanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    bank_account?: boolean
    priority?: boolean
    due_date?: boolean
    pay_date?: boolean
    status?: boolean
    archived?: boolean
    current_balance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bankAccount?: boolean | Bank_Account_Instance$bankAccountArgs<ExtArgs>
    statusModel?: boolean | Bank_Account_Instance$statusModelArgs<ExtArgs>
  }, ExtArgs["result"]["bank_Account_Instance"]>

  export type Bank_Account_InstanceSelectScalar = {
    id?: boolean
    user_id?: boolean
    bank_account?: boolean
    priority?: boolean
    due_date?: boolean
    pay_date?: boolean
    status?: boolean
    archived?: boolean
    current_balance?: boolean
  }

  export type Bank_Account_InstanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "bank_account" | "priority" | "due_date" | "pay_date" | "status" | "archived" | "current_balance", ExtArgs["result"]["bank_Account_Instance"]>
  export type Bank_Account_InstanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bankAccount?: boolean | Bank_Account_Instance$bankAccountArgs<ExtArgs>
    statusModel?: boolean | Bank_Account_Instance$statusModelArgs<ExtArgs>
  }
  export type Bank_Account_InstanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bankAccount?: boolean | Bank_Account_Instance$bankAccountArgs<ExtArgs>
    statusModel?: boolean | Bank_Account_Instance$statusModelArgs<ExtArgs>
  }
  export type Bank_Account_InstanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bankAccount?: boolean | Bank_Account_Instance$bankAccountArgs<ExtArgs>
    statusModel?: boolean | Bank_Account_Instance$statusModelArgs<ExtArgs>
  }

  export type $Bank_Account_InstancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bank_Account_Instance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      bankAccount: Prisma.$Bank_AccountPayload<ExtArgs> | null
      statusModel: Prisma.$Bill_StatusPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      bank_account: number | null
      priority: number
      due_date: Date
      pay_date: Date | null
      status: number | null
      archived: boolean
      current_balance: Prisma.Decimal
    }, ExtArgs["result"]["bank_Account_Instance"]>
    composites: {}
  }

  type Bank_Account_InstanceGetPayload<S extends boolean | null | undefined | Bank_Account_InstanceDefaultArgs> = $Result.GetResult<Prisma.$Bank_Account_InstancePayload, S>

  type Bank_Account_InstanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Bank_Account_InstanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Bank_Account_InstanceCountAggregateInputType | true
    }

  export interface Bank_Account_InstanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bank_Account_Instance'], meta: { name: 'Bank_Account_Instance' } }
    /**
     * Find zero or one Bank_Account_Instance that matches the filter.
     * @param {Bank_Account_InstanceFindUniqueArgs} args - Arguments to find a Bank_Account_Instance
     * @example
     * // Get one Bank_Account_Instance
     * const bank_Account_Instance = await prisma.bank_Account_Instance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Bank_Account_InstanceFindUniqueArgs>(args: SelectSubset<T, Bank_Account_InstanceFindUniqueArgs<ExtArgs>>): Prisma__Bank_Account_InstanceClient<$Result.GetResult<Prisma.$Bank_Account_InstancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bank_Account_Instance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Bank_Account_InstanceFindUniqueOrThrowArgs} args - Arguments to find a Bank_Account_Instance
     * @example
     * // Get one Bank_Account_Instance
     * const bank_Account_Instance = await prisma.bank_Account_Instance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Bank_Account_InstanceFindUniqueOrThrowArgs>(args: SelectSubset<T, Bank_Account_InstanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Bank_Account_InstanceClient<$Result.GetResult<Prisma.$Bank_Account_InstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bank_Account_Instance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_Account_InstanceFindFirstArgs} args - Arguments to find a Bank_Account_Instance
     * @example
     * // Get one Bank_Account_Instance
     * const bank_Account_Instance = await prisma.bank_Account_Instance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Bank_Account_InstanceFindFirstArgs>(args?: SelectSubset<T, Bank_Account_InstanceFindFirstArgs<ExtArgs>>): Prisma__Bank_Account_InstanceClient<$Result.GetResult<Prisma.$Bank_Account_InstancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bank_Account_Instance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_Account_InstanceFindFirstOrThrowArgs} args - Arguments to find a Bank_Account_Instance
     * @example
     * // Get one Bank_Account_Instance
     * const bank_Account_Instance = await prisma.bank_Account_Instance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Bank_Account_InstanceFindFirstOrThrowArgs>(args?: SelectSubset<T, Bank_Account_InstanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__Bank_Account_InstanceClient<$Result.GetResult<Prisma.$Bank_Account_InstancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bank_Account_Instances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_Account_InstanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bank_Account_Instances
     * const bank_Account_Instances = await prisma.bank_Account_Instance.findMany()
     * 
     * // Get first 10 Bank_Account_Instances
     * const bank_Account_Instances = await prisma.bank_Account_Instance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bank_Account_InstanceWithIdOnly = await prisma.bank_Account_Instance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Bank_Account_InstanceFindManyArgs>(args?: SelectSubset<T, Bank_Account_InstanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bank_Account_InstancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bank_Account_Instance.
     * @param {Bank_Account_InstanceCreateArgs} args - Arguments to create a Bank_Account_Instance.
     * @example
     * // Create one Bank_Account_Instance
     * const Bank_Account_Instance = await prisma.bank_Account_Instance.create({
     *   data: {
     *     // ... data to create a Bank_Account_Instance
     *   }
     * })
     * 
     */
    create<T extends Bank_Account_InstanceCreateArgs>(args: SelectSubset<T, Bank_Account_InstanceCreateArgs<ExtArgs>>): Prisma__Bank_Account_InstanceClient<$Result.GetResult<Prisma.$Bank_Account_InstancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bank_Account_Instances.
     * @param {Bank_Account_InstanceCreateManyArgs} args - Arguments to create many Bank_Account_Instances.
     * @example
     * // Create many Bank_Account_Instances
     * const bank_Account_Instance = await prisma.bank_Account_Instance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Bank_Account_InstanceCreateManyArgs>(args?: SelectSubset<T, Bank_Account_InstanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bank_Account_Instances and returns the data saved in the database.
     * @param {Bank_Account_InstanceCreateManyAndReturnArgs} args - Arguments to create many Bank_Account_Instances.
     * @example
     * // Create many Bank_Account_Instances
     * const bank_Account_Instance = await prisma.bank_Account_Instance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bank_Account_Instances and only return the `id`
     * const bank_Account_InstanceWithIdOnly = await prisma.bank_Account_Instance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Bank_Account_InstanceCreateManyAndReturnArgs>(args?: SelectSubset<T, Bank_Account_InstanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bank_Account_InstancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bank_Account_Instance.
     * @param {Bank_Account_InstanceDeleteArgs} args - Arguments to delete one Bank_Account_Instance.
     * @example
     * // Delete one Bank_Account_Instance
     * const Bank_Account_Instance = await prisma.bank_Account_Instance.delete({
     *   where: {
     *     // ... filter to delete one Bank_Account_Instance
     *   }
     * })
     * 
     */
    delete<T extends Bank_Account_InstanceDeleteArgs>(args: SelectSubset<T, Bank_Account_InstanceDeleteArgs<ExtArgs>>): Prisma__Bank_Account_InstanceClient<$Result.GetResult<Prisma.$Bank_Account_InstancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bank_Account_Instance.
     * @param {Bank_Account_InstanceUpdateArgs} args - Arguments to update one Bank_Account_Instance.
     * @example
     * // Update one Bank_Account_Instance
     * const bank_Account_Instance = await prisma.bank_Account_Instance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Bank_Account_InstanceUpdateArgs>(args: SelectSubset<T, Bank_Account_InstanceUpdateArgs<ExtArgs>>): Prisma__Bank_Account_InstanceClient<$Result.GetResult<Prisma.$Bank_Account_InstancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bank_Account_Instances.
     * @param {Bank_Account_InstanceDeleteManyArgs} args - Arguments to filter Bank_Account_Instances to delete.
     * @example
     * // Delete a few Bank_Account_Instances
     * const { count } = await prisma.bank_Account_Instance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Bank_Account_InstanceDeleteManyArgs>(args?: SelectSubset<T, Bank_Account_InstanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bank_Account_Instances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_Account_InstanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bank_Account_Instances
     * const bank_Account_Instance = await prisma.bank_Account_Instance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Bank_Account_InstanceUpdateManyArgs>(args: SelectSubset<T, Bank_Account_InstanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bank_Account_Instances and returns the data updated in the database.
     * @param {Bank_Account_InstanceUpdateManyAndReturnArgs} args - Arguments to update many Bank_Account_Instances.
     * @example
     * // Update many Bank_Account_Instances
     * const bank_Account_Instance = await prisma.bank_Account_Instance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bank_Account_Instances and only return the `id`
     * const bank_Account_InstanceWithIdOnly = await prisma.bank_Account_Instance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Bank_Account_InstanceUpdateManyAndReturnArgs>(args: SelectSubset<T, Bank_Account_InstanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Bank_Account_InstancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bank_Account_Instance.
     * @param {Bank_Account_InstanceUpsertArgs} args - Arguments to update or create a Bank_Account_Instance.
     * @example
     * // Update or create a Bank_Account_Instance
     * const bank_Account_Instance = await prisma.bank_Account_Instance.upsert({
     *   create: {
     *     // ... data to create a Bank_Account_Instance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bank_Account_Instance we want to update
     *   }
     * })
     */
    upsert<T extends Bank_Account_InstanceUpsertArgs>(args: SelectSubset<T, Bank_Account_InstanceUpsertArgs<ExtArgs>>): Prisma__Bank_Account_InstanceClient<$Result.GetResult<Prisma.$Bank_Account_InstancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bank_Account_Instances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_Account_InstanceCountArgs} args - Arguments to filter Bank_Account_Instances to count.
     * @example
     * // Count the number of Bank_Account_Instances
     * const count = await prisma.bank_Account_Instance.count({
     *   where: {
     *     // ... the filter for the Bank_Account_Instances we want to count
     *   }
     * })
    **/
    count<T extends Bank_Account_InstanceCountArgs>(
      args?: Subset<T, Bank_Account_InstanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bank_Account_InstanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bank_Account_Instance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_Account_InstanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Bank_Account_InstanceAggregateArgs>(args: Subset<T, Bank_Account_InstanceAggregateArgs>): Prisma.PrismaPromise<GetBank_Account_InstanceAggregateType<T>>

    /**
     * Group by Bank_Account_Instance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bank_Account_InstanceGroupByArgs} args - Group by arguments.
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
      T extends Bank_Account_InstanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Bank_Account_InstanceGroupByArgs['orderBy'] }
        : { orderBy?: Bank_Account_InstanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Bank_Account_InstanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBank_Account_InstanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bank_Account_Instance model
   */
  readonly fields: Bank_Account_InstanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bank_Account_Instance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Bank_Account_InstanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bankAccount<T extends Bank_Account_Instance$bankAccountArgs<ExtArgs> = {}>(args?: Subset<T, Bank_Account_Instance$bankAccountArgs<ExtArgs>>): Prisma__Bank_AccountClient<$Result.GetResult<Prisma.$Bank_AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    statusModel<T extends Bank_Account_Instance$statusModelArgs<ExtArgs> = {}>(args?: Subset<T, Bank_Account_Instance$statusModelArgs<ExtArgs>>): Prisma__Bill_StatusClient<$Result.GetResult<Prisma.$Bill_StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bank_Account_Instance model
   */
  interface Bank_Account_InstanceFieldRefs {
    readonly id: FieldRef<"Bank_Account_Instance", 'Int'>
    readonly user_id: FieldRef<"Bank_Account_Instance", 'String'>
    readonly bank_account: FieldRef<"Bank_Account_Instance", 'Int'>
    readonly priority: FieldRef<"Bank_Account_Instance", 'Int'>
    readonly due_date: FieldRef<"Bank_Account_Instance", 'DateTime'>
    readonly pay_date: FieldRef<"Bank_Account_Instance", 'DateTime'>
    readonly status: FieldRef<"Bank_Account_Instance", 'Int'>
    readonly archived: FieldRef<"Bank_Account_Instance", 'Boolean'>
    readonly current_balance: FieldRef<"Bank_Account_Instance", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Bank_Account_Instance findUnique
   */
  export type Bank_Account_InstanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account_Instance
     */
    select?: Bank_Account_InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account_Instance
     */
    omit?: Bank_Account_InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_Account_InstanceInclude<ExtArgs> | null
    /**
     * Filter, which Bank_Account_Instance to fetch.
     */
    where: Bank_Account_InstanceWhereUniqueInput
  }

  /**
   * Bank_Account_Instance findUniqueOrThrow
   */
  export type Bank_Account_InstanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account_Instance
     */
    select?: Bank_Account_InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account_Instance
     */
    omit?: Bank_Account_InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_Account_InstanceInclude<ExtArgs> | null
    /**
     * Filter, which Bank_Account_Instance to fetch.
     */
    where: Bank_Account_InstanceWhereUniqueInput
  }

  /**
   * Bank_Account_Instance findFirst
   */
  export type Bank_Account_InstanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account_Instance
     */
    select?: Bank_Account_InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account_Instance
     */
    omit?: Bank_Account_InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_Account_InstanceInclude<ExtArgs> | null
    /**
     * Filter, which Bank_Account_Instance to fetch.
     */
    where?: Bank_Account_InstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bank_Account_Instances to fetch.
     */
    orderBy?: Bank_Account_InstanceOrderByWithRelationInput | Bank_Account_InstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bank_Account_Instances.
     */
    cursor?: Bank_Account_InstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bank_Account_Instances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bank_Account_Instances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bank_Account_Instances.
     */
    distinct?: Bank_Account_InstanceScalarFieldEnum | Bank_Account_InstanceScalarFieldEnum[]
  }

  /**
   * Bank_Account_Instance findFirstOrThrow
   */
  export type Bank_Account_InstanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account_Instance
     */
    select?: Bank_Account_InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account_Instance
     */
    omit?: Bank_Account_InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_Account_InstanceInclude<ExtArgs> | null
    /**
     * Filter, which Bank_Account_Instance to fetch.
     */
    where?: Bank_Account_InstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bank_Account_Instances to fetch.
     */
    orderBy?: Bank_Account_InstanceOrderByWithRelationInput | Bank_Account_InstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bank_Account_Instances.
     */
    cursor?: Bank_Account_InstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bank_Account_Instances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bank_Account_Instances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bank_Account_Instances.
     */
    distinct?: Bank_Account_InstanceScalarFieldEnum | Bank_Account_InstanceScalarFieldEnum[]
  }

  /**
   * Bank_Account_Instance findMany
   */
  export type Bank_Account_InstanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account_Instance
     */
    select?: Bank_Account_InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account_Instance
     */
    omit?: Bank_Account_InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_Account_InstanceInclude<ExtArgs> | null
    /**
     * Filter, which Bank_Account_Instances to fetch.
     */
    where?: Bank_Account_InstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bank_Account_Instances to fetch.
     */
    orderBy?: Bank_Account_InstanceOrderByWithRelationInput | Bank_Account_InstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bank_Account_Instances.
     */
    cursor?: Bank_Account_InstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bank_Account_Instances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bank_Account_Instances.
     */
    skip?: number
    distinct?: Bank_Account_InstanceScalarFieldEnum | Bank_Account_InstanceScalarFieldEnum[]
  }

  /**
   * Bank_Account_Instance create
   */
  export type Bank_Account_InstanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account_Instance
     */
    select?: Bank_Account_InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account_Instance
     */
    omit?: Bank_Account_InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_Account_InstanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Bank_Account_Instance.
     */
    data: XOR<Bank_Account_InstanceCreateInput, Bank_Account_InstanceUncheckedCreateInput>
  }

  /**
   * Bank_Account_Instance createMany
   */
  export type Bank_Account_InstanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bank_Account_Instances.
     */
    data: Bank_Account_InstanceCreateManyInput | Bank_Account_InstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bank_Account_Instance createManyAndReturn
   */
  export type Bank_Account_InstanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account_Instance
     */
    select?: Bank_Account_InstanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account_Instance
     */
    omit?: Bank_Account_InstanceOmit<ExtArgs> | null
    /**
     * The data used to create many Bank_Account_Instances.
     */
    data: Bank_Account_InstanceCreateManyInput | Bank_Account_InstanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_Account_InstanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bank_Account_Instance update
   */
  export type Bank_Account_InstanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account_Instance
     */
    select?: Bank_Account_InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account_Instance
     */
    omit?: Bank_Account_InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_Account_InstanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Bank_Account_Instance.
     */
    data: XOR<Bank_Account_InstanceUpdateInput, Bank_Account_InstanceUncheckedUpdateInput>
    /**
     * Choose, which Bank_Account_Instance to update.
     */
    where: Bank_Account_InstanceWhereUniqueInput
  }

  /**
   * Bank_Account_Instance updateMany
   */
  export type Bank_Account_InstanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bank_Account_Instances.
     */
    data: XOR<Bank_Account_InstanceUpdateManyMutationInput, Bank_Account_InstanceUncheckedUpdateManyInput>
    /**
     * Filter which Bank_Account_Instances to update
     */
    where?: Bank_Account_InstanceWhereInput
    /**
     * Limit how many Bank_Account_Instances to update.
     */
    limit?: number
  }

  /**
   * Bank_Account_Instance updateManyAndReturn
   */
  export type Bank_Account_InstanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account_Instance
     */
    select?: Bank_Account_InstanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account_Instance
     */
    omit?: Bank_Account_InstanceOmit<ExtArgs> | null
    /**
     * The data used to update Bank_Account_Instances.
     */
    data: XOR<Bank_Account_InstanceUpdateManyMutationInput, Bank_Account_InstanceUncheckedUpdateManyInput>
    /**
     * Filter which Bank_Account_Instances to update
     */
    where?: Bank_Account_InstanceWhereInput
    /**
     * Limit how many Bank_Account_Instances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_Account_InstanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bank_Account_Instance upsert
   */
  export type Bank_Account_InstanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account_Instance
     */
    select?: Bank_Account_InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account_Instance
     */
    omit?: Bank_Account_InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_Account_InstanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Bank_Account_Instance to update in case it exists.
     */
    where: Bank_Account_InstanceWhereUniqueInput
    /**
     * In case the Bank_Account_Instance found by the `where` argument doesn't exist, create a new Bank_Account_Instance with this data.
     */
    create: XOR<Bank_Account_InstanceCreateInput, Bank_Account_InstanceUncheckedCreateInput>
    /**
     * In case the Bank_Account_Instance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Bank_Account_InstanceUpdateInput, Bank_Account_InstanceUncheckedUpdateInput>
  }

  /**
   * Bank_Account_Instance delete
   */
  export type Bank_Account_InstanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account_Instance
     */
    select?: Bank_Account_InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account_Instance
     */
    omit?: Bank_Account_InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_Account_InstanceInclude<ExtArgs> | null
    /**
     * Filter which Bank_Account_Instance to delete.
     */
    where: Bank_Account_InstanceWhereUniqueInput
  }

  /**
   * Bank_Account_Instance deleteMany
   */
  export type Bank_Account_InstanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bank_Account_Instances to delete
     */
    where?: Bank_Account_InstanceWhereInput
    /**
     * Limit how many Bank_Account_Instances to delete.
     */
    limit?: number
  }

  /**
   * Bank_Account_Instance.bankAccount
   */
  export type Bank_Account_Instance$bankAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account
     */
    select?: Bank_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account
     */
    omit?: Bank_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_AccountInclude<ExtArgs> | null
    where?: Bank_AccountWhereInput
  }

  /**
   * Bank_Account_Instance.statusModel
   */
  export type Bank_Account_Instance$statusModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill_Status
     */
    select?: Bill_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bill_Status
     */
    omit?: Bill_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bill_StatusInclude<ExtArgs> | null
    where?: Bill_StatusWhereInput
  }

  /**
   * Bank_Account_Instance without action
   */
  export type Bank_Account_InstanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bank_Account_Instance
     */
    select?: Bank_Account_InstanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bank_Account_Instance
     */
    omit?: Bank_Account_InstanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Bank_Account_InstanceInclude<ExtArgs> | null
  }


  /**
   * Model Audit_Log
   */

  export type AggregateAudit_Log = {
    _count: Audit_LogCountAggregateOutputType | null
    _avg: Audit_LogAvgAggregateOutputType | null
    _sum: Audit_LogSumAggregateOutputType | null
    _min: Audit_LogMinAggregateOutputType | null
    _max: Audit_LogMaxAggregateOutputType | null
  }

  export type Audit_LogAvgAggregateOutputType = {
    id: number | null
    row_id: number | null
  }

  export type Audit_LogSumAggregateOutputType = {
    id: number | null
    row_id: number | null
  }

  export type Audit_LogMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    table_name: string | null
    row_id: number | null
    field_name: string | null
    action: string | null
    value_before_change: string | null
    value_after_change: string | null
    timestamp: Date | null
  }

  export type Audit_LogMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    table_name: string | null
    row_id: number | null
    field_name: string | null
    action: string | null
    value_before_change: string | null
    value_after_change: string | null
    timestamp: Date | null
  }

  export type Audit_LogCountAggregateOutputType = {
    id: number
    user_id: number
    table_name: number
    row_id: number
    field_name: number
    action: number
    value_before_change: number
    value_after_change: number
    timestamp: number
    _all: number
  }


  export type Audit_LogAvgAggregateInputType = {
    id?: true
    row_id?: true
  }

  export type Audit_LogSumAggregateInputType = {
    id?: true
    row_id?: true
  }

  export type Audit_LogMinAggregateInputType = {
    id?: true
    user_id?: true
    table_name?: true
    row_id?: true
    field_name?: true
    action?: true
    value_before_change?: true
    value_after_change?: true
    timestamp?: true
  }

  export type Audit_LogMaxAggregateInputType = {
    id?: true
    user_id?: true
    table_name?: true
    row_id?: true
    field_name?: true
    action?: true
    value_before_change?: true
    value_after_change?: true
    timestamp?: true
  }

  export type Audit_LogCountAggregateInputType = {
    id?: true
    user_id?: true
    table_name?: true
    row_id?: true
    field_name?: true
    action?: true
    value_before_change?: true
    value_after_change?: true
    timestamp?: true
    _all?: true
  }

  export type Audit_LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audit_Log to aggregate.
     */
    where?: Audit_LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audit_Logs to fetch.
     */
    orderBy?: Audit_LogOrderByWithRelationInput | Audit_LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Audit_LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audit_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audit_Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Audit_Logs
    **/
    _count?: true | Audit_LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Audit_LogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Audit_LogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Audit_LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Audit_LogMaxAggregateInputType
  }

  export type GetAudit_LogAggregateType<T extends Audit_LogAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit_Log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_Log[P]>
      : GetScalarType<T[P], AggregateAudit_Log[P]>
  }




  export type Audit_LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Audit_LogWhereInput
    orderBy?: Audit_LogOrderByWithAggregationInput | Audit_LogOrderByWithAggregationInput[]
    by: Audit_LogScalarFieldEnum[] | Audit_LogScalarFieldEnum
    having?: Audit_LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Audit_LogCountAggregateInputType | true
    _avg?: Audit_LogAvgAggregateInputType
    _sum?: Audit_LogSumAggregateInputType
    _min?: Audit_LogMinAggregateInputType
    _max?: Audit_LogMaxAggregateInputType
  }

  export type Audit_LogGroupByOutputType = {
    id: number
    user_id: string
    table_name: string
    row_id: number
    field_name: string
    action: string
    value_before_change: string | null
    value_after_change: string | null
    timestamp: Date
    _count: Audit_LogCountAggregateOutputType | null
    _avg: Audit_LogAvgAggregateOutputType | null
    _sum: Audit_LogSumAggregateOutputType | null
    _min: Audit_LogMinAggregateOutputType | null
    _max: Audit_LogMaxAggregateOutputType | null
  }

  type GetAudit_LogGroupByPayload<T extends Audit_LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Audit_LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Audit_LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Audit_LogGroupByOutputType[P]>
            : GetScalarType<T[P], Audit_LogGroupByOutputType[P]>
        }
      >
    >


  export type Audit_LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    table_name?: boolean
    row_id?: boolean
    field_name?: boolean
    action?: boolean
    value_before_change?: boolean
    value_after_change?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audit_Log"]>

  export type Audit_LogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    table_name?: boolean
    row_id?: boolean
    field_name?: boolean
    action?: boolean
    value_before_change?: boolean
    value_after_change?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audit_Log"]>

  export type Audit_LogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    table_name?: boolean
    row_id?: boolean
    field_name?: boolean
    action?: boolean
    value_before_change?: boolean
    value_after_change?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audit_Log"]>

  export type Audit_LogSelectScalar = {
    id?: boolean
    user_id?: boolean
    table_name?: boolean
    row_id?: boolean
    field_name?: boolean
    action?: boolean
    value_before_change?: boolean
    value_after_change?: boolean
    timestamp?: boolean
  }

  export type Audit_LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "table_name" | "row_id" | "field_name" | "action" | "value_before_change" | "value_after_change" | "timestamp", ExtArgs["result"]["audit_Log"]>
  export type Audit_LogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Audit_LogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Audit_LogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Audit_LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Audit_Log"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      table_name: string
      row_id: number
      field_name: string
      action: string
      value_before_change: string | null
      value_after_change: string | null
      timestamp: Date
    }, ExtArgs["result"]["audit_Log"]>
    composites: {}
  }

  type Audit_LogGetPayload<S extends boolean | null | undefined | Audit_LogDefaultArgs> = $Result.GetResult<Prisma.$Audit_LogPayload, S>

  type Audit_LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Audit_LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Audit_LogCountAggregateInputType | true
    }

  export interface Audit_LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Audit_Log'], meta: { name: 'Audit_Log' } }
    /**
     * Find zero or one Audit_Log that matches the filter.
     * @param {Audit_LogFindUniqueArgs} args - Arguments to find a Audit_Log
     * @example
     * // Get one Audit_Log
     * const audit_Log = await prisma.audit_Log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Audit_LogFindUniqueArgs>(args: SelectSubset<T, Audit_LogFindUniqueArgs<ExtArgs>>): Prisma__Audit_LogClient<$Result.GetResult<Prisma.$Audit_LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audit_Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Audit_LogFindUniqueOrThrowArgs} args - Arguments to find a Audit_Log
     * @example
     * // Get one Audit_Log
     * const audit_Log = await prisma.audit_Log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Audit_LogFindUniqueOrThrowArgs>(args: SelectSubset<T, Audit_LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Audit_LogClient<$Result.GetResult<Prisma.$Audit_LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_LogFindFirstArgs} args - Arguments to find a Audit_Log
     * @example
     * // Get one Audit_Log
     * const audit_Log = await prisma.audit_Log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Audit_LogFindFirstArgs>(args?: SelectSubset<T, Audit_LogFindFirstArgs<ExtArgs>>): Prisma__Audit_LogClient<$Result.GetResult<Prisma.$Audit_LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_LogFindFirstOrThrowArgs} args - Arguments to find a Audit_Log
     * @example
     * // Get one Audit_Log
     * const audit_Log = await prisma.audit_Log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Audit_LogFindFirstOrThrowArgs>(args?: SelectSubset<T, Audit_LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__Audit_LogClient<$Result.GetResult<Prisma.$Audit_LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audit_Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_Logs
     * const audit_Logs = await prisma.audit_Log.findMany()
     * 
     * // Get first 10 Audit_Logs
     * const audit_Logs = await prisma.audit_Log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audit_LogWithIdOnly = await prisma.audit_Log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Audit_LogFindManyArgs>(args?: SelectSubset<T, Audit_LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Audit_LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audit_Log.
     * @param {Audit_LogCreateArgs} args - Arguments to create a Audit_Log.
     * @example
     * // Create one Audit_Log
     * const Audit_Log = await prisma.audit_Log.create({
     *   data: {
     *     // ... data to create a Audit_Log
     *   }
     * })
     * 
     */
    create<T extends Audit_LogCreateArgs>(args: SelectSubset<T, Audit_LogCreateArgs<ExtArgs>>): Prisma__Audit_LogClient<$Result.GetResult<Prisma.$Audit_LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audit_Logs.
     * @param {Audit_LogCreateManyArgs} args - Arguments to create many Audit_Logs.
     * @example
     * // Create many Audit_Logs
     * const audit_Log = await prisma.audit_Log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Audit_LogCreateManyArgs>(args?: SelectSubset<T, Audit_LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audit_Logs and returns the data saved in the database.
     * @param {Audit_LogCreateManyAndReturnArgs} args - Arguments to create many Audit_Logs.
     * @example
     * // Create many Audit_Logs
     * const audit_Log = await prisma.audit_Log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audit_Logs and only return the `id`
     * const audit_LogWithIdOnly = await prisma.audit_Log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Audit_LogCreateManyAndReturnArgs>(args?: SelectSubset<T, Audit_LogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Audit_LogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Audit_Log.
     * @param {Audit_LogDeleteArgs} args - Arguments to delete one Audit_Log.
     * @example
     * // Delete one Audit_Log
     * const Audit_Log = await prisma.audit_Log.delete({
     *   where: {
     *     // ... filter to delete one Audit_Log
     *   }
     * })
     * 
     */
    delete<T extends Audit_LogDeleteArgs>(args: SelectSubset<T, Audit_LogDeleteArgs<ExtArgs>>): Prisma__Audit_LogClient<$Result.GetResult<Prisma.$Audit_LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audit_Log.
     * @param {Audit_LogUpdateArgs} args - Arguments to update one Audit_Log.
     * @example
     * // Update one Audit_Log
     * const audit_Log = await prisma.audit_Log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Audit_LogUpdateArgs>(args: SelectSubset<T, Audit_LogUpdateArgs<ExtArgs>>): Prisma__Audit_LogClient<$Result.GetResult<Prisma.$Audit_LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audit_Logs.
     * @param {Audit_LogDeleteManyArgs} args - Arguments to filter Audit_Logs to delete.
     * @example
     * // Delete a few Audit_Logs
     * const { count } = await prisma.audit_Log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Audit_LogDeleteManyArgs>(args?: SelectSubset<T, Audit_LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_Logs
     * const audit_Log = await prisma.audit_Log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Audit_LogUpdateManyArgs>(args: SelectSubset<T, Audit_LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_Logs and returns the data updated in the database.
     * @param {Audit_LogUpdateManyAndReturnArgs} args - Arguments to update many Audit_Logs.
     * @example
     * // Update many Audit_Logs
     * const audit_Log = await prisma.audit_Log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Audit_Logs and only return the `id`
     * const audit_LogWithIdOnly = await prisma.audit_Log.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Audit_LogUpdateManyAndReturnArgs>(args: SelectSubset<T, Audit_LogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Audit_LogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Audit_Log.
     * @param {Audit_LogUpsertArgs} args - Arguments to update or create a Audit_Log.
     * @example
     * // Update or create a Audit_Log
     * const audit_Log = await prisma.audit_Log.upsert({
     *   create: {
     *     // ... data to create a Audit_Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_Log we want to update
     *   }
     * })
     */
    upsert<T extends Audit_LogUpsertArgs>(args: SelectSubset<T, Audit_LogUpsertArgs<ExtArgs>>): Prisma__Audit_LogClient<$Result.GetResult<Prisma.$Audit_LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audit_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_LogCountArgs} args - Arguments to filter Audit_Logs to count.
     * @example
     * // Count the number of Audit_Logs
     * const count = await prisma.audit_Log.count({
     *   where: {
     *     // ... the filter for the Audit_Logs we want to count
     *   }
     * })
    **/
    count<T extends Audit_LogCountArgs>(
      args?: Subset<T, Audit_LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit_Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Audit_LogAggregateArgs>(args: Subset<T, Audit_LogAggregateArgs>): Prisma.PrismaPromise<GetAudit_LogAggregateType<T>>

    /**
     * Group by Audit_Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_LogGroupByArgs} args - Group by arguments.
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
      T extends Audit_LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Audit_LogGroupByArgs['orderBy'] }
        : { orderBy?: Audit_LogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Audit_LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudit_LogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Audit_Log model
   */
  readonly fields: Audit_LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Audit_Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Audit_LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Audit_Log model
   */
  interface Audit_LogFieldRefs {
    readonly id: FieldRef<"Audit_Log", 'Int'>
    readonly user_id: FieldRef<"Audit_Log", 'String'>
    readonly table_name: FieldRef<"Audit_Log", 'String'>
    readonly row_id: FieldRef<"Audit_Log", 'Int'>
    readonly field_name: FieldRef<"Audit_Log", 'String'>
    readonly action: FieldRef<"Audit_Log", 'String'>
    readonly value_before_change: FieldRef<"Audit_Log", 'String'>
    readonly value_after_change: FieldRef<"Audit_Log", 'String'>
    readonly timestamp: FieldRef<"Audit_Log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Audit_Log findUnique
   */
  export type Audit_LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Log
     */
    select?: Audit_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Log
     */
    omit?: Audit_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogInclude<ExtArgs> | null
    /**
     * Filter, which Audit_Log to fetch.
     */
    where: Audit_LogWhereUniqueInput
  }

  /**
   * Audit_Log findUniqueOrThrow
   */
  export type Audit_LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Log
     */
    select?: Audit_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Log
     */
    omit?: Audit_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogInclude<ExtArgs> | null
    /**
     * Filter, which Audit_Log to fetch.
     */
    where: Audit_LogWhereUniqueInput
  }

  /**
   * Audit_Log findFirst
   */
  export type Audit_LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Log
     */
    select?: Audit_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Log
     */
    omit?: Audit_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogInclude<ExtArgs> | null
    /**
     * Filter, which Audit_Log to fetch.
     */
    where?: Audit_LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audit_Logs to fetch.
     */
    orderBy?: Audit_LogOrderByWithRelationInput | Audit_LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audit_Logs.
     */
    cursor?: Audit_LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audit_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audit_Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audit_Logs.
     */
    distinct?: Audit_LogScalarFieldEnum | Audit_LogScalarFieldEnum[]
  }

  /**
   * Audit_Log findFirstOrThrow
   */
  export type Audit_LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Log
     */
    select?: Audit_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Log
     */
    omit?: Audit_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogInclude<ExtArgs> | null
    /**
     * Filter, which Audit_Log to fetch.
     */
    where?: Audit_LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audit_Logs to fetch.
     */
    orderBy?: Audit_LogOrderByWithRelationInput | Audit_LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audit_Logs.
     */
    cursor?: Audit_LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audit_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audit_Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audit_Logs.
     */
    distinct?: Audit_LogScalarFieldEnum | Audit_LogScalarFieldEnum[]
  }

  /**
   * Audit_Log findMany
   */
  export type Audit_LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Log
     */
    select?: Audit_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Log
     */
    omit?: Audit_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogInclude<ExtArgs> | null
    /**
     * Filter, which Audit_Logs to fetch.
     */
    where?: Audit_LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audit_Logs to fetch.
     */
    orderBy?: Audit_LogOrderByWithRelationInput | Audit_LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Audit_Logs.
     */
    cursor?: Audit_LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audit_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audit_Logs.
     */
    skip?: number
    distinct?: Audit_LogScalarFieldEnum | Audit_LogScalarFieldEnum[]
  }

  /**
   * Audit_Log create
   */
  export type Audit_LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Log
     */
    select?: Audit_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Log
     */
    omit?: Audit_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogInclude<ExtArgs> | null
    /**
     * The data needed to create a Audit_Log.
     */
    data: XOR<Audit_LogCreateInput, Audit_LogUncheckedCreateInput>
  }

  /**
   * Audit_Log createMany
   */
  export type Audit_LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Audit_Logs.
     */
    data: Audit_LogCreateManyInput | Audit_LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Audit_Log createManyAndReturn
   */
  export type Audit_LogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Log
     */
    select?: Audit_LogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Log
     */
    omit?: Audit_LogOmit<ExtArgs> | null
    /**
     * The data used to create many Audit_Logs.
     */
    data: Audit_LogCreateManyInput | Audit_LogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Audit_Log update
   */
  export type Audit_LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Log
     */
    select?: Audit_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Log
     */
    omit?: Audit_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogInclude<ExtArgs> | null
    /**
     * The data needed to update a Audit_Log.
     */
    data: XOR<Audit_LogUpdateInput, Audit_LogUncheckedUpdateInput>
    /**
     * Choose, which Audit_Log to update.
     */
    where: Audit_LogWhereUniqueInput
  }

  /**
   * Audit_Log updateMany
   */
  export type Audit_LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Audit_Logs.
     */
    data: XOR<Audit_LogUpdateManyMutationInput, Audit_LogUncheckedUpdateManyInput>
    /**
     * Filter which Audit_Logs to update
     */
    where?: Audit_LogWhereInput
    /**
     * Limit how many Audit_Logs to update.
     */
    limit?: number
  }

  /**
   * Audit_Log updateManyAndReturn
   */
  export type Audit_LogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Log
     */
    select?: Audit_LogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Log
     */
    omit?: Audit_LogOmit<ExtArgs> | null
    /**
     * The data used to update Audit_Logs.
     */
    data: XOR<Audit_LogUpdateManyMutationInput, Audit_LogUncheckedUpdateManyInput>
    /**
     * Filter which Audit_Logs to update
     */
    where?: Audit_LogWhereInput
    /**
     * Limit how many Audit_Logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Audit_Log upsert
   */
  export type Audit_LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Log
     */
    select?: Audit_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Log
     */
    omit?: Audit_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogInclude<ExtArgs> | null
    /**
     * The filter to search for the Audit_Log to update in case it exists.
     */
    where: Audit_LogWhereUniqueInput
    /**
     * In case the Audit_Log found by the `where` argument doesn't exist, create a new Audit_Log with this data.
     */
    create: XOR<Audit_LogCreateInput, Audit_LogUncheckedCreateInput>
    /**
     * In case the Audit_Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Audit_LogUpdateInput, Audit_LogUncheckedUpdateInput>
  }

  /**
   * Audit_Log delete
   */
  export type Audit_LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Log
     */
    select?: Audit_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Log
     */
    omit?: Audit_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogInclude<ExtArgs> | null
    /**
     * Filter which Audit_Log to delete.
     */
    where: Audit_LogWhereUniqueInput
  }

  /**
   * Audit_Log deleteMany
   */
  export type Audit_LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audit_Logs to delete
     */
    where?: Audit_LogWhereInput
    /**
     * Limit how many Audit_Logs to delete.
     */
    limit?: number
  }

  /**
   * Audit_Log without action
   */
  export type Audit_LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Log
     */
    select?: Audit_LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Log
     */
    omit?: Audit_LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    hashed_password: 'hashed_password',
    is_active: 'is_active',
    is_superuser: 'is_superuser',
    is_verified: 'is_verified',
    mfa_enabled: 'mfa_enabled',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Api_TokenScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    token: 'token',
    issued_at: 'issued_at',
    expires_at: 'expires_at'
  };

  export type Api_TokenScalarFieldEnum = (typeof Api_TokenScalarFieldEnum)[keyof typeof Api_TokenScalarFieldEnum]


  export const OAuth_AccountScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    provider: 'provider',
    account_id: 'account_id',
    created_at: 'created_at'
  };

  export type OAuth_AccountScalarFieldEnum = (typeof OAuth_AccountScalarFieldEnum)[keyof typeof OAuth_AccountScalarFieldEnum]


  export const Bill_StatusScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    archived: 'archived',
    highlight_color_hex: 'highlight_color_hex'
  };

  export type Bill_StatusScalarFieldEnum = (typeof Bill_StatusScalarFieldEnum)[keyof typeof Bill_StatusScalarFieldEnum]


  export const RecurrenceScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    calculation: 'calculation',
    archived: 'archived'
  };

  export type RecurrenceScalarFieldEnum = (typeof RecurrenceScalarFieldEnum)[keyof typeof RecurrenceScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    archived: 'archived'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const Bank_AccountScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    url: 'url',
    recurrence: 'recurrence',
    recurrence_value: 'recurrence_value',
    archived: 'archived',
    font_color_hex: 'font_color_hex'
  };

  export type Bank_AccountScalarFieldEnum = (typeof Bank_AccountScalarFieldEnum)[keyof typeof Bank_AccountScalarFieldEnum]


  export const BillsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    default_amount_due: 'default_amount_due',
    url: 'url',
    archived: 'archived',
    default_draft_account: 'default_draft_account',
    category: 'category',
    recurrence: 'recurrence',
    recurrence_value: 'recurrence_value'
  };

  export type BillsScalarFieldEnum = (typeof BillsScalarFieldEnum)[keyof typeof BillsScalarFieldEnum]


  export const Due_BillsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    bill: 'bill',
    recurrence: 'recurrence',
    recurrence_value: 'recurrence_value',
    priority: 'priority',
    due_date: 'due_date',
    pay_date: 'pay_date',
    min_amount_due: 'min_amount_due',
    total_amount_due: 'total_amount_due',
    status: 'status',
    archived: 'archived',
    confirmation: 'confirmation',
    notes: 'notes',
    draft_account: 'draft_account'
  };

  export type Due_BillsScalarFieldEnum = (typeof Due_BillsScalarFieldEnum)[keyof typeof Due_BillsScalarFieldEnum]


  export const Bank_Account_InstanceScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    bank_account: 'bank_account',
    priority: 'priority',
    due_date: 'due_date',
    pay_date: 'pay_date',
    status: 'status',
    archived: 'archived',
    current_balance: 'current_balance'
  };

  export type Bank_Account_InstanceScalarFieldEnum = (typeof Bank_Account_InstanceScalarFieldEnum)[keyof typeof Bank_Account_InstanceScalarFieldEnum]


  export const Audit_LogScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    table_name: 'table_name',
    row_id: 'row_id',
    field_name: 'field_name',
    action: 'action',
    value_before_change: 'value_before_change',
    value_after_change: 'value_after_change',
    timestamp: 'timestamp'
  };

  export type Audit_LogScalarFieldEnum = (typeof Audit_LogScalarFieldEnum)[keyof typeof Audit_LogScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    hashed_password?: StringFilter<"User"> | string
    is_active?: BoolFilter<"User"> | boolean
    is_superuser?: BoolFilter<"User"> | boolean
    is_verified?: BoolFilter<"User"> | boolean
    mfa_enabled?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    apiTokens?: Api_TokenListRelationFilter
    oauthAccounts?: OAuth_AccountListRelationFilter
    billStatuses?: Bill_StatusListRelationFilter
    recurrences?: RecurrenceListRelationFilter
    categories?: CategoryListRelationFilter
    bankAccounts?: Bank_AccountListRelationFilter
    bills?: BillsListRelationFilter
    dueBills?: Due_BillsListRelationFilter
    bankAccountInstances?: Bank_Account_InstanceListRelationFilter
    auditLogs?: Audit_LogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    hashed_password?: SortOrder
    is_active?: SortOrder
    is_superuser?: SortOrder
    is_verified?: SortOrder
    mfa_enabled?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    apiTokens?: Api_TokenOrderByRelationAggregateInput
    oauthAccounts?: OAuth_AccountOrderByRelationAggregateInput
    billStatuses?: Bill_StatusOrderByRelationAggregateInput
    recurrences?: RecurrenceOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    bankAccounts?: Bank_AccountOrderByRelationAggregateInput
    bills?: BillsOrderByRelationAggregateInput
    dueBills?: Due_BillsOrderByRelationAggregateInput
    bankAccountInstances?: Bank_Account_InstanceOrderByRelationAggregateInput
    auditLogs?: Audit_LogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hashed_password?: StringFilter<"User"> | string
    is_active?: BoolFilter<"User"> | boolean
    is_superuser?: BoolFilter<"User"> | boolean
    is_verified?: BoolFilter<"User"> | boolean
    mfa_enabled?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    apiTokens?: Api_TokenListRelationFilter
    oauthAccounts?: OAuth_AccountListRelationFilter
    billStatuses?: Bill_StatusListRelationFilter
    recurrences?: RecurrenceListRelationFilter
    categories?: CategoryListRelationFilter
    bankAccounts?: Bank_AccountListRelationFilter
    bills?: BillsListRelationFilter
    dueBills?: Due_BillsListRelationFilter
    bankAccountInstances?: Bank_Account_InstanceListRelationFilter
    auditLogs?: Audit_LogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    hashed_password?: SortOrder
    is_active?: SortOrder
    is_superuser?: SortOrder
    is_verified?: SortOrder
    mfa_enabled?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    hashed_password?: StringWithAggregatesFilter<"User"> | string
    is_active?: BoolWithAggregatesFilter<"User"> | boolean
    is_superuser?: BoolWithAggregatesFilter<"User"> | boolean
    is_verified?: BoolWithAggregatesFilter<"User"> | boolean
    mfa_enabled?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type Api_TokenWhereInput = {
    AND?: Api_TokenWhereInput | Api_TokenWhereInput[]
    OR?: Api_TokenWhereInput[]
    NOT?: Api_TokenWhereInput | Api_TokenWhereInput[]
    id?: IntFilter<"Api_Token"> | number
    user_id?: UuidFilter<"Api_Token"> | string
    token?: StringFilter<"Api_Token"> | string
    issued_at?: DateTimeFilter<"Api_Token"> | Date | string
    expires_at?: DateTimeNullableFilter<"Api_Token"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type Api_TokenOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    issued_at?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type Api_TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: Api_TokenWhereInput | Api_TokenWhereInput[]
    OR?: Api_TokenWhereInput[]
    NOT?: Api_TokenWhereInput | Api_TokenWhereInput[]
    user_id?: UuidFilter<"Api_Token"> | string
    issued_at?: DateTimeFilter<"Api_Token"> | Date | string
    expires_at?: DateTimeNullableFilter<"Api_Token"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type Api_TokenOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    issued_at?: SortOrder
    expires_at?: SortOrderInput | SortOrder
    _count?: Api_TokenCountOrderByAggregateInput
    _avg?: Api_TokenAvgOrderByAggregateInput
    _max?: Api_TokenMaxOrderByAggregateInput
    _min?: Api_TokenMinOrderByAggregateInput
    _sum?: Api_TokenSumOrderByAggregateInput
  }

  export type Api_TokenScalarWhereWithAggregatesInput = {
    AND?: Api_TokenScalarWhereWithAggregatesInput | Api_TokenScalarWhereWithAggregatesInput[]
    OR?: Api_TokenScalarWhereWithAggregatesInput[]
    NOT?: Api_TokenScalarWhereWithAggregatesInput | Api_TokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Api_Token"> | number
    user_id?: UuidWithAggregatesFilter<"Api_Token"> | string
    token?: StringWithAggregatesFilter<"Api_Token"> | string
    issued_at?: DateTimeWithAggregatesFilter<"Api_Token"> | Date | string
    expires_at?: DateTimeNullableWithAggregatesFilter<"Api_Token"> | Date | string | null
  }

  export type OAuth_AccountWhereInput = {
    AND?: OAuth_AccountWhereInput | OAuth_AccountWhereInput[]
    OR?: OAuth_AccountWhereInput[]
    NOT?: OAuth_AccountWhereInput | OAuth_AccountWhereInput[]
    id?: IntFilter<"OAuth_Account"> | number
    user_id?: UuidFilter<"OAuth_Account"> | string
    provider?: StringFilter<"OAuth_Account"> | string
    account_id?: StringFilter<"OAuth_Account"> | string
    created_at?: DateTimeFilter<"OAuth_Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OAuth_AccountOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    provider?: SortOrder
    account_id?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OAuth_AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    provider_account_id?: OAuth_AccountProviderAccount_idCompoundUniqueInput
    AND?: OAuth_AccountWhereInput | OAuth_AccountWhereInput[]
    OR?: OAuth_AccountWhereInput[]
    NOT?: OAuth_AccountWhereInput | OAuth_AccountWhereInput[]
    user_id?: UuidFilter<"OAuth_Account"> | string
    provider?: StringFilter<"OAuth_Account"> | string
    account_id?: StringFilter<"OAuth_Account"> | string
    created_at?: DateTimeFilter<"OAuth_Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_account_id">

  export type OAuth_AccountOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    provider?: SortOrder
    account_id?: SortOrder
    created_at?: SortOrder
    _count?: OAuth_AccountCountOrderByAggregateInput
    _avg?: OAuth_AccountAvgOrderByAggregateInput
    _max?: OAuth_AccountMaxOrderByAggregateInput
    _min?: OAuth_AccountMinOrderByAggregateInput
    _sum?: OAuth_AccountSumOrderByAggregateInput
  }

  export type OAuth_AccountScalarWhereWithAggregatesInput = {
    AND?: OAuth_AccountScalarWhereWithAggregatesInput | OAuth_AccountScalarWhereWithAggregatesInput[]
    OR?: OAuth_AccountScalarWhereWithAggregatesInput[]
    NOT?: OAuth_AccountScalarWhereWithAggregatesInput | OAuth_AccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OAuth_Account"> | number
    user_id?: UuidWithAggregatesFilter<"OAuth_Account"> | string
    provider?: StringWithAggregatesFilter<"OAuth_Account"> | string
    account_id?: StringWithAggregatesFilter<"OAuth_Account"> | string
    created_at?: DateTimeWithAggregatesFilter<"OAuth_Account"> | Date | string
  }

  export type Bill_StatusWhereInput = {
    AND?: Bill_StatusWhereInput | Bill_StatusWhereInput[]
    OR?: Bill_StatusWhereInput[]
    NOT?: Bill_StatusWhereInput | Bill_StatusWhereInput[]
    id?: IntFilter<"Bill_Status"> | number
    user_id?: UuidFilter<"Bill_Status"> | string
    name?: StringFilter<"Bill_Status"> | string
    archived?: BoolFilter<"Bill_Status"> | boolean
    highlight_color_hex?: StringNullableFilter<"Bill_Status"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dueBills?: Due_BillsListRelationFilter
    bankAccountInstances?: Bank_Account_InstanceListRelationFilter
  }

  export type Bill_StatusOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    archived?: SortOrder
    highlight_color_hex?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    dueBills?: Due_BillsOrderByRelationAggregateInput
    bankAccountInstances?: Bank_Account_InstanceOrderByRelationAggregateInput
  }

  export type Bill_StatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_name?: Bill_StatusUser_idNameCompoundUniqueInput
    AND?: Bill_StatusWhereInput | Bill_StatusWhereInput[]
    OR?: Bill_StatusWhereInput[]
    NOT?: Bill_StatusWhereInput | Bill_StatusWhereInput[]
    user_id?: UuidFilter<"Bill_Status"> | string
    name?: StringFilter<"Bill_Status"> | string
    archived?: BoolFilter<"Bill_Status"> | boolean
    highlight_color_hex?: StringNullableFilter<"Bill_Status"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dueBills?: Due_BillsListRelationFilter
    bankAccountInstances?: Bank_Account_InstanceListRelationFilter
  }, "id" | "user_id_name">

  export type Bill_StatusOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    archived?: SortOrder
    highlight_color_hex?: SortOrderInput | SortOrder
    _count?: Bill_StatusCountOrderByAggregateInput
    _avg?: Bill_StatusAvgOrderByAggregateInput
    _max?: Bill_StatusMaxOrderByAggregateInput
    _min?: Bill_StatusMinOrderByAggregateInput
    _sum?: Bill_StatusSumOrderByAggregateInput
  }

  export type Bill_StatusScalarWhereWithAggregatesInput = {
    AND?: Bill_StatusScalarWhereWithAggregatesInput | Bill_StatusScalarWhereWithAggregatesInput[]
    OR?: Bill_StatusScalarWhereWithAggregatesInput[]
    NOT?: Bill_StatusScalarWhereWithAggregatesInput | Bill_StatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bill_Status"> | number
    user_id?: UuidWithAggregatesFilter<"Bill_Status"> | string
    name?: StringWithAggregatesFilter<"Bill_Status"> | string
    archived?: BoolWithAggregatesFilter<"Bill_Status"> | boolean
    highlight_color_hex?: StringNullableWithAggregatesFilter<"Bill_Status"> | string | null
  }

  export type RecurrenceWhereInput = {
    AND?: RecurrenceWhereInput | RecurrenceWhereInput[]
    OR?: RecurrenceWhereInput[]
    NOT?: RecurrenceWhereInput | RecurrenceWhereInput[]
    id?: IntFilter<"Recurrence"> | number
    user_id?: UuidFilter<"Recurrence"> | string
    name?: StringFilter<"Recurrence"> | string
    calculation?: StringNullableFilter<"Recurrence"> | string | null
    archived?: BoolFilter<"Recurrence"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bankAccounts?: Bank_AccountListRelationFilter
    dueBills?: Due_BillsListRelationFilter
    Bills?: BillsListRelationFilter
  }

  export type RecurrenceOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    calculation?: SortOrderInput | SortOrder
    archived?: SortOrder
    user?: UserOrderByWithRelationInput
    bankAccounts?: Bank_AccountOrderByRelationAggregateInput
    dueBills?: Due_BillsOrderByRelationAggregateInput
    Bills?: BillsOrderByRelationAggregateInput
  }

  export type RecurrenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_name?: RecurrenceUser_idNameCompoundUniqueInput
    AND?: RecurrenceWhereInput | RecurrenceWhereInput[]
    OR?: RecurrenceWhereInput[]
    NOT?: RecurrenceWhereInput | RecurrenceWhereInput[]
    user_id?: UuidFilter<"Recurrence"> | string
    name?: StringFilter<"Recurrence"> | string
    calculation?: StringNullableFilter<"Recurrence"> | string | null
    archived?: BoolFilter<"Recurrence"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bankAccounts?: Bank_AccountListRelationFilter
    dueBills?: Due_BillsListRelationFilter
    Bills?: BillsListRelationFilter
  }, "id" | "user_id_name">

  export type RecurrenceOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    calculation?: SortOrderInput | SortOrder
    archived?: SortOrder
    _count?: RecurrenceCountOrderByAggregateInput
    _avg?: RecurrenceAvgOrderByAggregateInput
    _max?: RecurrenceMaxOrderByAggregateInput
    _min?: RecurrenceMinOrderByAggregateInput
    _sum?: RecurrenceSumOrderByAggregateInput
  }

  export type RecurrenceScalarWhereWithAggregatesInput = {
    AND?: RecurrenceScalarWhereWithAggregatesInput | RecurrenceScalarWhereWithAggregatesInput[]
    OR?: RecurrenceScalarWhereWithAggregatesInput[]
    NOT?: RecurrenceScalarWhereWithAggregatesInput | RecurrenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recurrence"> | number
    user_id?: UuidWithAggregatesFilter<"Recurrence"> | string
    name?: StringWithAggregatesFilter<"Recurrence"> | string
    calculation?: StringNullableWithAggregatesFilter<"Recurrence"> | string | null
    archived?: BoolWithAggregatesFilter<"Recurrence"> | boolean
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    user_id?: UuidFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    archived?: BoolFilter<"Category"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bills?: BillsListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    archived?: SortOrder
    user?: UserOrderByWithRelationInput
    bills?: BillsOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_name?: CategoryUser_idNameCompoundUniqueInput
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    user_id?: UuidFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    archived?: BoolFilter<"Category"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bills?: BillsListRelationFilter
  }, "id" | "user_id_name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    archived?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    user_id?: UuidWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    archived?: BoolWithAggregatesFilter<"Category"> | boolean
  }

  export type Bank_AccountWhereInput = {
    AND?: Bank_AccountWhereInput | Bank_AccountWhereInput[]
    OR?: Bank_AccountWhereInput[]
    NOT?: Bank_AccountWhereInput | Bank_AccountWhereInput[]
    id?: IntFilter<"Bank_Account"> | number
    user_id?: UuidFilter<"Bank_Account"> | string
    name?: StringFilter<"Bank_Account"> | string
    url?: StringNullableFilter<"Bank_Account"> | string | null
    recurrence?: IntNullableFilter<"Bank_Account"> | number | null
    recurrence_value?: IntNullableFilter<"Bank_Account"> | number | null
    archived?: BoolFilter<"Bank_Account"> | boolean
    font_color_hex?: StringFilter<"Bank_Account"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recurrenceModel?: XOR<RecurrenceNullableScalarRelationFilter, RecurrenceWhereInput> | null
    bills?: BillsListRelationFilter
    dueBills?: Due_BillsListRelationFilter
    bankAccountInstances?: Bank_Account_InstanceListRelationFilter
  }

  export type Bank_AccountOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    recurrence?: SortOrderInput | SortOrder
    recurrence_value?: SortOrderInput | SortOrder
    archived?: SortOrder
    font_color_hex?: SortOrder
    user?: UserOrderByWithRelationInput
    recurrenceModel?: RecurrenceOrderByWithRelationInput
    bills?: BillsOrderByRelationAggregateInput
    dueBills?: Due_BillsOrderByRelationAggregateInput
    bankAccountInstances?: Bank_Account_InstanceOrderByRelationAggregateInput
  }

  export type Bank_AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_name?: Bank_AccountUser_idNameCompoundUniqueInput
    AND?: Bank_AccountWhereInput | Bank_AccountWhereInput[]
    OR?: Bank_AccountWhereInput[]
    NOT?: Bank_AccountWhereInput | Bank_AccountWhereInput[]
    user_id?: UuidFilter<"Bank_Account"> | string
    name?: StringFilter<"Bank_Account"> | string
    url?: StringNullableFilter<"Bank_Account"> | string | null
    recurrence?: IntNullableFilter<"Bank_Account"> | number | null
    recurrence_value?: IntNullableFilter<"Bank_Account"> | number | null
    archived?: BoolFilter<"Bank_Account"> | boolean
    font_color_hex?: StringFilter<"Bank_Account"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    recurrenceModel?: XOR<RecurrenceNullableScalarRelationFilter, RecurrenceWhereInput> | null
    bills?: BillsListRelationFilter
    dueBills?: Due_BillsListRelationFilter
    bankAccountInstances?: Bank_Account_InstanceListRelationFilter
  }, "id" | "user_id_name">

  export type Bank_AccountOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    recurrence?: SortOrderInput | SortOrder
    recurrence_value?: SortOrderInput | SortOrder
    archived?: SortOrder
    font_color_hex?: SortOrder
    _count?: Bank_AccountCountOrderByAggregateInput
    _avg?: Bank_AccountAvgOrderByAggregateInput
    _max?: Bank_AccountMaxOrderByAggregateInput
    _min?: Bank_AccountMinOrderByAggregateInput
    _sum?: Bank_AccountSumOrderByAggregateInput
  }

  export type Bank_AccountScalarWhereWithAggregatesInput = {
    AND?: Bank_AccountScalarWhereWithAggregatesInput | Bank_AccountScalarWhereWithAggregatesInput[]
    OR?: Bank_AccountScalarWhereWithAggregatesInput[]
    NOT?: Bank_AccountScalarWhereWithAggregatesInput | Bank_AccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bank_Account"> | number
    user_id?: UuidWithAggregatesFilter<"Bank_Account"> | string
    name?: StringWithAggregatesFilter<"Bank_Account"> | string
    url?: StringNullableWithAggregatesFilter<"Bank_Account"> | string | null
    recurrence?: IntNullableWithAggregatesFilter<"Bank_Account"> | number | null
    recurrence_value?: IntNullableWithAggregatesFilter<"Bank_Account"> | number | null
    archived?: BoolWithAggregatesFilter<"Bank_Account"> | boolean
    font_color_hex?: StringWithAggregatesFilter<"Bank_Account"> | string
  }

  export type BillsWhereInput = {
    AND?: BillsWhereInput | BillsWhereInput[]
    OR?: BillsWhereInput[]
    NOT?: BillsWhereInput | BillsWhereInput[]
    id?: IntFilter<"Bills"> | number
    user_id?: UuidFilter<"Bills"> | string
    name?: StringFilter<"Bills"> | string
    default_amount_due?: DecimalFilter<"Bills"> | Decimal | DecimalJsLike | number | string
    url?: StringNullableFilter<"Bills"> | string | null
    archived?: BoolFilter<"Bills"> | boolean
    default_draft_account?: IntNullableFilter<"Bills"> | number | null
    category?: IntNullableFilter<"Bills"> | number | null
    recurrence?: IntNullableFilter<"Bills"> | number | null
    recurrence_value?: IntNullableFilter<"Bills"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    defaultDraftAccount?: XOR<Bank_AccountNullableScalarRelationFilter, Bank_AccountWhereInput> | null
    categoryModel?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    recurrenceModel?: XOR<RecurrenceNullableScalarRelationFilter, RecurrenceWhereInput> | null
    dueBills?: Due_BillsListRelationFilter
  }

  export type BillsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    default_amount_due?: SortOrder
    url?: SortOrderInput | SortOrder
    archived?: SortOrder
    default_draft_account?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    recurrence?: SortOrderInput | SortOrder
    recurrence_value?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    defaultDraftAccount?: Bank_AccountOrderByWithRelationInput
    categoryModel?: CategoryOrderByWithRelationInput
    recurrenceModel?: RecurrenceOrderByWithRelationInput
    dueBills?: Due_BillsOrderByRelationAggregateInput
  }

  export type BillsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_name?: BillsUser_idNameCompoundUniqueInput
    AND?: BillsWhereInput | BillsWhereInput[]
    OR?: BillsWhereInput[]
    NOT?: BillsWhereInput | BillsWhereInput[]
    user_id?: UuidFilter<"Bills"> | string
    name?: StringFilter<"Bills"> | string
    default_amount_due?: DecimalFilter<"Bills"> | Decimal | DecimalJsLike | number | string
    url?: StringNullableFilter<"Bills"> | string | null
    archived?: BoolFilter<"Bills"> | boolean
    default_draft_account?: IntNullableFilter<"Bills"> | number | null
    category?: IntNullableFilter<"Bills"> | number | null
    recurrence?: IntNullableFilter<"Bills"> | number | null
    recurrence_value?: IntNullableFilter<"Bills"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    defaultDraftAccount?: XOR<Bank_AccountNullableScalarRelationFilter, Bank_AccountWhereInput> | null
    categoryModel?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    recurrenceModel?: XOR<RecurrenceNullableScalarRelationFilter, RecurrenceWhereInput> | null
    dueBills?: Due_BillsListRelationFilter
  }, "id" | "user_id_name">

  export type BillsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    default_amount_due?: SortOrder
    url?: SortOrderInput | SortOrder
    archived?: SortOrder
    default_draft_account?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    recurrence?: SortOrderInput | SortOrder
    recurrence_value?: SortOrderInput | SortOrder
    _count?: BillsCountOrderByAggregateInput
    _avg?: BillsAvgOrderByAggregateInput
    _max?: BillsMaxOrderByAggregateInput
    _min?: BillsMinOrderByAggregateInput
    _sum?: BillsSumOrderByAggregateInput
  }

  export type BillsScalarWhereWithAggregatesInput = {
    AND?: BillsScalarWhereWithAggregatesInput | BillsScalarWhereWithAggregatesInput[]
    OR?: BillsScalarWhereWithAggregatesInput[]
    NOT?: BillsScalarWhereWithAggregatesInput | BillsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bills"> | number
    user_id?: UuidWithAggregatesFilter<"Bills"> | string
    name?: StringWithAggregatesFilter<"Bills"> | string
    default_amount_due?: DecimalWithAggregatesFilter<"Bills"> | Decimal | DecimalJsLike | number | string
    url?: StringNullableWithAggregatesFilter<"Bills"> | string | null
    archived?: BoolWithAggregatesFilter<"Bills"> | boolean
    default_draft_account?: IntNullableWithAggregatesFilter<"Bills"> | number | null
    category?: IntNullableWithAggregatesFilter<"Bills"> | number | null
    recurrence?: IntNullableWithAggregatesFilter<"Bills"> | number | null
    recurrence_value?: IntNullableWithAggregatesFilter<"Bills"> | number | null
  }

  export type Due_BillsWhereInput = {
    AND?: Due_BillsWhereInput | Due_BillsWhereInput[]
    OR?: Due_BillsWhereInput[]
    NOT?: Due_BillsWhereInput | Due_BillsWhereInput[]
    id?: IntFilter<"Due_Bills"> | number
    user_id?: UuidFilter<"Due_Bills"> | string
    bill?: IntNullableFilter<"Due_Bills"> | number | null
    recurrence?: IntNullableFilter<"Due_Bills"> | number | null
    recurrence_value?: IntNullableFilter<"Due_Bills"> | number | null
    priority?: IntFilter<"Due_Bills"> | number
    due_date?: DateTimeFilter<"Due_Bills"> | Date | string
    pay_date?: DateTimeNullableFilter<"Due_Bills"> | Date | string | null
    min_amount_due?: DecimalFilter<"Due_Bills"> | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFilter<"Due_Bills"> | Decimal | DecimalJsLike | number | string
    status?: IntNullableFilter<"Due_Bills"> | number | null
    archived?: BoolFilter<"Due_Bills"> | boolean
    confirmation?: StringNullableFilter<"Due_Bills"> | string | null
    notes?: StringNullableFilter<"Due_Bills"> | string | null
    draft_account?: IntNullableFilter<"Due_Bills"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    billModel?: XOR<BillsNullableScalarRelationFilter, BillsWhereInput> | null
    recurrenceModel?: XOR<RecurrenceNullableScalarRelationFilter, RecurrenceWhereInput> | null
    statusModel?: XOR<Bill_StatusNullableScalarRelationFilter, Bill_StatusWhereInput> | null
    draftAccount?: XOR<Bank_AccountNullableScalarRelationFilter, Bank_AccountWhereInput> | null
  }

  export type Due_BillsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bill?: SortOrderInput | SortOrder
    recurrence?: SortOrderInput | SortOrder
    recurrence_value?: SortOrderInput | SortOrder
    priority?: SortOrder
    due_date?: SortOrder
    pay_date?: SortOrderInput | SortOrder
    min_amount_due?: SortOrder
    total_amount_due?: SortOrder
    status?: SortOrderInput | SortOrder
    archived?: SortOrder
    confirmation?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    draft_account?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    billModel?: BillsOrderByWithRelationInput
    recurrenceModel?: RecurrenceOrderByWithRelationInput
    statusModel?: Bill_StatusOrderByWithRelationInput
    draftAccount?: Bank_AccountOrderByWithRelationInput
  }

  export type Due_BillsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Due_BillsWhereInput | Due_BillsWhereInput[]
    OR?: Due_BillsWhereInput[]
    NOT?: Due_BillsWhereInput | Due_BillsWhereInput[]
    user_id?: UuidFilter<"Due_Bills"> | string
    bill?: IntNullableFilter<"Due_Bills"> | number | null
    recurrence?: IntNullableFilter<"Due_Bills"> | number | null
    recurrence_value?: IntNullableFilter<"Due_Bills"> | number | null
    priority?: IntFilter<"Due_Bills"> | number
    due_date?: DateTimeFilter<"Due_Bills"> | Date | string
    pay_date?: DateTimeNullableFilter<"Due_Bills"> | Date | string | null
    min_amount_due?: DecimalFilter<"Due_Bills"> | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFilter<"Due_Bills"> | Decimal | DecimalJsLike | number | string
    status?: IntNullableFilter<"Due_Bills"> | number | null
    archived?: BoolFilter<"Due_Bills"> | boolean
    confirmation?: StringNullableFilter<"Due_Bills"> | string | null
    notes?: StringNullableFilter<"Due_Bills"> | string | null
    draft_account?: IntNullableFilter<"Due_Bills"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    billModel?: XOR<BillsNullableScalarRelationFilter, BillsWhereInput> | null
    recurrenceModel?: XOR<RecurrenceNullableScalarRelationFilter, RecurrenceWhereInput> | null
    statusModel?: XOR<Bill_StatusNullableScalarRelationFilter, Bill_StatusWhereInput> | null
    draftAccount?: XOR<Bank_AccountNullableScalarRelationFilter, Bank_AccountWhereInput> | null
  }, "id">

  export type Due_BillsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bill?: SortOrderInput | SortOrder
    recurrence?: SortOrderInput | SortOrder
    recurrence_value?: SortOrderInput | SortOrder
    priority?: SortOrder
    due_date?: SortOrder
    pay_date?: SortOrderInput | SortOrder
    min_amount_due?: SortOrder
    total_amount_due?: SortOrder
    status?: SortOrderInput | SortOrder
    archived?: SortOrder
    confirmation?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    draft_account?: SortOrderInput | SortOrder
    _count?: Due_BillsCountOrderByAggregateInput
    _avg?: Due_BillsAvgOrderByAggregateInput
    _max?: Due_BillsMaxOrderByAggregateInput
    _min?: Due_BillsMinOrderByAggregateInput
    _sum?: Due_BillsSumOrderByAggregateInput
  }

  export type Due_BillsScalarWhereWithAggregatesInput = {
    AND?: Due_BillsScalarWhereWithAggregatesInput | Due_BillsScalarWhereWithAggregatesInput[]
    OR?: Due_BillsScalarWhereWithAggregatesInput[]
    NOT?: Due_BillsScalarWhereWithAggregatesInput | Due_BillsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Due_Bills"> | number
    user_id?: UuidWithAggregatesFilter<"Due_Bills"> | string
    bill?: IntNullableWithAggregatesFilter<"Due_Bills"> | number | null
    recurrence?: IntNullableWithAggregatesFilter<"Due_Bills"> | number | null
    recurrence_value?: IntNullableWithAggregatesFilter<"Due_Bills"> | number | null
    priority?: IntWithAggregatesFilter<"Due_Bills"> | number
    due_date?: DateTimeWithAggregatesFilter<"Due_Bills"> | Date | string
    pay_date?: DateTimeNullableWithAggregatesFilter<"Due_Bills"> | Date | string | null
    min_amount_due?: DecimalWithAggregatesFilter<"Due_Bills"> | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalWithAggregatesFilter<"Due_Bills"> | Decimal | DecimalJsLike | number | string
    status?: IntNullableWithAggregatesFilter<"Due_Bills"> | number | null
    archived?: BoolWithAggregatesFilter<"Due_Bills"> | boolean
    confirmation?: StringNullableWithAggregatesFilter<"Due_Bills"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Due_Bills"> | string | null
    draft_account?: IntNullableWithAggregatesFilter<"Due_Bills"> | number | null
  }

  export type Bank_Account_InstanceWhereInput = {
    AND?: Bank_Account_InstanceWhereInput | Bank_Account_InstanceWhereInput[]
    OR?: Bank_Account_InstanceWhereInput[]
    NOT?: Bank_Account_InstanceWhereInput | Bank_Account_InstanceWhereInput[]
    id?: IntFilter<"Bank_Account_Instance"> | number
    user_id?: UuidFilter<"Bank_Account_Instance"> | string
    bank_account?: IntNullableFilter<"Bank_Account_Instance"> | number | null
    priority?: IntFilter<"Bank_Account_Instance"> | number
    due_date?: DateTimeFilter<"Bank_Account_Instance"> | Date | string
    pay_date?: DateTimeNullableFilter<"Bank_Account_Instance"> | Date | string | null
    status?: IntNullableFilter<"Bank_Account_Instance"> | number | null
    archived?: BoolFilter<"Bank_Account_Instance"> | boolean
    current_balance?: DecimalFilter<"Bank_Account_Instance"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bankAccount?: XOR<Bank_AccountNullableScalarRelationFilter, Bank_AccountWhereInput> | null
    statusModel?: XOR<Bill_StatusNullableScalarRelationFilter, Bill_StatusWhereInput> | null
  }

  export type Bank_Account_InstanceOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bank_account?: SortOrderInput | SortOrder
    priority?: SortOrder
    due_date?: SortOrder
    pay_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    archived?: SortOrder
    current_balance?: SortOrder
    user?: UserOrderByWithRelationInput
    bankAccount?: Bank_AccountOrderByWithRelationInput
    statusModel?: Bill_StatusOrderByWithRelationInput
  }

  export type Bank_Account_InstanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Bank_Account_InstanceWhereInput | Bank_Account_InstanceWhereInput[]
    OR?: Bank_Account_InstanceWhereInput[]
    NOT?: Bank_Account_InstanceWhereInput | Bank_Account_InstanceWhereInput[]
    user_id?: UuidFilter<"Bank_Account_Instance"> | string
    bank_account?: IntNullableFilter<"Bank_Account_Instance"> | number | null
    priority?: IntFilter<"Bank_Account_Instance"> | number
    due_date?: DateTimeFilter<"Bank_Account_Instance"> | Date | string
    pay_date?: DateTimeNullableFilter<"Bank_Account_Instance"> | Date | string | null
    status?: IntNullableFilter<"Bank_Account_Instance"> | number | null
    archived?: BoolFilter<"Bank_Account_Instance"> | boolean
    current_balance?: DecimalFilter<"Bank_Account_Instance"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bankAccount?: XOR<Bank_AccountNullableScalarRelationFilter, Bank_AccountWhereInput> | null
    statusModel?: XOR<Bill_StatusNullableScalarRelationFilter, Bill_StatusWhereInput> | null
  }, "id">

  export type Bank_Account_InstanceOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    bank_account?: SortOrderInput | SortOrder
    priority?: SortOrder
    due_date?: SortOrder
    pay_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    archived?: SortOrder
    current_balance?: SortOrder
    _count?: Bank_Account_InstanceCountOrderByAggregateInput
    _avg?: Bank_Account_InstanceAvgOrderByAggregateInput
    _max?: Bank_Account_InstanceMaxOrderByAggregateInput
    _min?: Bank_Account_InstanceMinOrderByAggregateInput
    _sum?: Bank_Account_InstanceSumOrderByAggregateInput
  }

  export type Bank_Account_InstanceScalarWhereWithAggregatesInput = {
    AND?: Bank_Account_InstanceScalarWhereWithAggregatesInput | Bank_Account_InstanceScalarWhereWithAggregatesInput[]
    OR?: Bank_Account_InstanceScalarWhereWithAggregatesInput[]
    NOT?: Bank_Account_InstanceScalarWhereWithAggregatesInput | Bank_Account_InstanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bank_Account_Instance"> | number
    user_id?: UuidWithAggregatesFilter<"Bank_Account_Instance"> | string
    bank_account?: IntNullableWithAggregatesFilter<"Bank_Account_Instance"> | number | null
    priority?: IntWithAggregatesFilter<"Bank_Account_Instance"> | number
    due_date?: DateTimeWithAggregatesFilter<"Bank_Account_Instance"> | Date | string
    pay_date?: DateTimeNullableWithAggregatesFilter<"Bank_Account_Instance"> | Date | string | null
    status?: IntNullableWithAggregatesFilter<"Bank_Account_Instance"> | number | null
    archived?: BoolWithAggregatesFilter<"Bank_Account_Instance"> | boolean
    current_balance?: DecimalWithAggregatesFilter<"Bank_Account_Instance"> | Decimal | DecimalJsLike | number | string
  }

  export type Audit_LogWhereInput = {
    AND?: Audit_LogWhereInput | Audit_LogWhereInput[]
    OR?: Audit_LogWhereInput[]
    NOT?: Audit_LogWhereInput | Audit_LogWhereInput[]
    id?: IntFilter<"Audit_Log"> | number
    user_id?: UuidFilter<"Audit_Log"> | string
    table_name?: StringFilter<"Audit_Log"> | string
    row_id?: IntFilter<"Audit_Log"> | number
    field_name?: StringFilter<"Audit_Log"> | string
    action?: StringFilter<"Audit_Log"> | string
    value_before_change?: StringNullableFilter<"Audit_Log"> | string | null
    value_after_change?: StringNullableFilter<"Audit_Log"> | string | null
    timestamp?: DateTimeFilter<"Audit_Log"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type Audit_LogOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    table_name?: SortOrder
    row_id?: SortOrder
    field_name?: SortOrder
    action?: SortOrder
    value_before_change?: SortOrderInput | SortOrder
    value_after_change?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type Audit_LogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Audit_LogWhereInput | Audit_LogWhereInput[]
    OR?: Audit_LogWhereInput[]
    NOT?: Audit_LogWhereInput | Audit_LogWhereInput[]
    user_id?: UuidFilter<"Audit_Log"> | string
    table_name?: StringFilter<"Audit_Log"> | string
    row_id?: IntFilter<"Audit_Log"> | number
    field_name?: StringFilter<"Audit_Log"> | string
    action?: StringFilter<"Audit_Log"> | string
    value_before_change?: StringNullableFilter<"Audit_Log"> | string | null
    value_after_change?: StringNullableFilter<"Audit_Log"> | string | null
    timestamp?: DateTimeFilter<"Audit_Log"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type Audit_LogOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    table_name?: SortOrder
    row_id?: SortOrder
    field_name?: SortOrder
    action?: SortOrder
    value_before_change?: SortOrderInput | SortOrder
    value_after_change?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: Audit_LogCountOrderByAggregateInput
    _avg?: Audit_LogAvgOrderByAggregateInput
    _max?: Audit_LogMaxOrderByAggregateInput
    _min?: Audit_LogMinOrderByAggregateInput
    _sum?: Audit_LogSumOrderByAggregateInput
  }

  export type Audit_LogScalarWhereWithAggregatesInput = {
    AND?: Audit_LogScalarWhereWithAggregatesInput | Audit_LogScalarWhereWithAggregatesInput[]
    OR?: Audit_LogScalarWhereWithAggregatesInput[]
    NOT?: Audit_LogScalarWhereWithAggregatesInput | Audit_LogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Audit_Log"> | number
    user_id?: UuidWithAggregatesFilter<"Audit_Log"> | string
    table_name?: StringWithAggregatesFilter<"Audit_Log"> | string
    row_id?: IntWithAggregatesFilter<"Audit_Log"> | number
    field_name?: StringWithAggregatesFilter<"Audit_Log"> | string
    action?: StringWithAggregatesFilter<"Audit_Log"> | string
    value_before_change?: StringNullableWithAggregatesFilter<"Audit_Log"> | string | null
    value_after_change?: StringNullableWithAggregatesFilter<"Audit_Log"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"Audit_Log"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuth_AccountCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountCreateNestedManyWithoutUserInput
    bills?: BillsCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenUncheckedCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuth_AccountUncheckedCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusUncheckedCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountUncheckedCreateNestedManyWithoutUserInput
    bills?: BillsUncheckedCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuth_AccountUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUpdateManyWithoutUserNestedInput
    bills?: BillsUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUncheckedUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuth_AccountUncheckedUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUncheckedUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillsUncheckedUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUncheckedUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Api_TokenCreateInput = {
    token: string
    issued_at?: Date | string
    expires_at?: Date | string | null
    user: UserCreateNestedOneWithoutApiTokensInput
  }

  export type Api_TokenUncheckedCreateInput = {
    id?: number
    user_id: string
    token: string
    issued_at?: Date | string
    expires_at?: Date | string | null
  }

  export type Api_TokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutApiTokensNestedInput
  }

  export type Api_TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Api_TokenCreateManyInput = {
    id?: number
    user_id: string
    token: string
    issued_at?: Date | string
    expires_at?: Date | string | null
  }

  export type Api_TokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Api_TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OAuth_AccountCreateInput = {
    provider: string
    account_id: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutOauthAccountsInput
  }

  export type OAuth_AccountUncheckedCreateInput = {
    id?: number
    user_id: string
    provider: string
    account_id: string
    created_at?: Date | string
  }

  export type OAuth_AccountUpdateInput = {
    provider?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOauthAccountsNestedInput
  }

  export type OAuth_AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuth_AccountCreateManyInput = {
    id?: number
    user_id: string
    provider: string
    account_id: string
    created_at?: Date | string
  }

  export type OAuth_AccountUpdateManyMutationInput = {
    provider?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuth_AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Bill_StatusCreateInput = {
    name: string
    archived?: boolean
    highlight_color_hex?: string | null
    user: UserCreateNestedOneWithoutBillStatusesInput
    dueBills?: Due_BillsCreateNestedManyWithoutStatusModelInput
    bankAccountInstances?: Bank_Account_InstanceCreateNestedManyWithoutStatusModelInput
  }

  export type Bill_StatusUncheckedCreateInput = {
    id?: number
    user_id: string
    name: string
    archived?: boolean
    highlight_color_hex?: string | null
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutStatusModelInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedCreateNestedManyWithoutStatusModelInput
  }

  export type Bill_StatusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    highlight_color_hex?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutBillStatusesNestedInput
    dueBills?: Due_BillsUpdateManyWithoutStatusModelNestedInput
    bankAccountInstances?: Bank_Account_InstanceUpdateManyWithoutStatusModelNestedInput
  }

  export type Bill_StatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    highlight_color_hex?: NullableStringFieldUpdateOperationsInput | string | null
    dueBills?: Due_BillsUncheckedUpdateManyWithoutStatusModelNestedInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedUpdateManyWithoutStatusModelNestedInput
  }

  export type Bill_StatusCreateManyInput = {
    id?: number
    user_id: string
    name: string
    archived?: boolean
    highlight_color_hex?: string | null
  }

  export type Bill_StatusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    highlight_color_hex?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Bill_StatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    highlight_color_hex?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecurrenceCreateInput = {
    name: string
    calculation?: string | null
    archived?: boolean
    user: UserCreateNestedOneWithoutRecurrencesInput
    bankAccounts?: Bank_AccountCreateNestedManyWithoutRecurrenceModelInput
    dueBills?: Due_BillsCreateNestedManyWithoutRecurrenceModelInput
    Bills?: BillsCreateNestedManyWithoutRecurrenceModelInput
  }

  export type RecurrenceUncheckedCreateInput = {
    id?: number
    user_id: string
    name: string
    calculation?: string | null
    archived?: boolean
    bankAccounts?: Bank_AccountUncheckedCreateNestedManyWithoutRecurrenceModelInput
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutRecurrenceModelInput
    Bills?: BillsUncheckedCreateNestedManyWithoutRecurrenceModelInput
  }

  export type RecurrenceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    calculation?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutRecurrencesNestedInput
    bankAccounts?: Bank_AccountUpdateManyWithoutRecurrenceModelNestedInput
    dueBills?: Due_BillsUpdateManyWithoutRecurrenceModelNestedInput
    Bills?: BillsUpdateManyWithoutRecurrenceModelNestedInput
  }

  export type RecurrenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calculation?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    bankAccounts?: Bank_AccountUncheckedUpdateManyWithoutRecurrenceModelNestedInput
    dueBills?: Due_BillsUncheckedUpdateManyWithoutRecurrenceModelNestedInput
    Bills?: BillsUncheckedUpdateManyWithoutRecurrenceModelNestedInput
  }

  export type RecurrenceCreateManyInput = {
    id?: number
    user_id: string
    name: string
    calculation?: string | null
    archived?: boolean
  }

  export type RecurrenceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    calculation?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecurrenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calculation?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryCreateInput = {
    name: string
    archived?: boolean
    user: UserCreateNestedOneWithoutCategoriesInput
    bills?: BillsCreateNestedManyWithoutCategoryModelInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    user_id: string
    name: string
    archived?: boolean
    bills?: BillsUncheckedCreateNestedManyWithoutCategoryModelInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
    bills?: BillsUpdateManyWithoutCategoryModelNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    bills?: BillsUncheckedUpdateManyWithoutCategoryModelNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    user_id: string
    name: string
    archived?: boolean
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Bank_AccountCreateInput = {
    name: string
    url?: string | null
    recurrence_value?: number | null
    archived?: boolean
    font_color_hex: string
    user: UserCreateNestedOneWithoutBankAccountsInput
    recurrenceModel?: RecurrenceCreateNestedOneWithoutBankAccountsInput
    bills?: BillsCreateNestedManyWithoutDefaultDraftAccountInput
    dueBills?: Due_BillsCreateNestedManyWithoutDraftAccountInput
    bankAccountInstances?: Bank_Account_InstanceCreateNestedManyWithoutBankAccountInput
  }

  export type Bank_AccountUncheckedCreateInput = {
    id?: number
    user_id: string
    name: string
    url?: string | null
    recurrence?: number | null
    recurrence_value?: number | null
    archived?: boolean
    font_color_hex: string
    bills?: BillsUncheckedCreateNestedManyWithoutDefaultDraftAccountInput
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutDraftAccountInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type Bank_AccountUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    font_color_hex?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBankAccountsNestedInput
    recurrenceModel?: RecurrenceUpdateOneWithoutBankAccountsNestedInput
    bills?: BillsUpdateManyWithoutDefaultDraftAccountNestedInput
    dueBills?: Due_BillsUpdateManyWithoutDraftAccountNestedInput
    bankAccountInstances?: Bank_Account_InstanceUpdateManyWithoutBankAccountNestedInput
  }

  export type Bank_AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    font_color_hex?: StringFieldUpdateOperationsInput | string
    bills?: BillsUncheckedUpdateManyWithoutDefaultDraftAccountNestedInput
    dueBills?: Due_BillsUncheckedUpdateManyWithoutDraftAccountNestedInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type Bank_AccountCreateManyInput = {
    id?: number
    user_id: string
    name: string
    url?: string | null
    recurrence?: number | null
    recurrence_value?: number | null
    archived?: boolean
    font_color_hex: string
  }

  export type Bank_AccountUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    font_color_hex?: StringFieldUpdateOperationsInput | string
  }

  export type Bank_AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    font_color_hex?: StringFieldUpdateOperationsInput | string
  }

  export type BillsCreateInput = {
    name: string
    default_amount_due: Decimal | DecimalJsLike | number | string
    url?: string | null
    archived?: boolean
    recurrence_value?: number | null
    user: UserCreateNestedOneWithoutBillsInput
    defaultDraftAccount?: Bank_AccountCreateNestedOneWithoutBillsInput
    categoryModel?: CategoryCreateNestedOneWithoutBillsInput
    recurrenceModel?: RecurrenceCreateNestedOneWithoutBillsInput
    dueBills?: Due_BillsCreateNestedManyWithoutBillModelInput
  }

  export type BillsUncheckedCreateInput = {
    id?: number
    user_id: string
    name: string
    default_amount_due: Decimal | DecimalJsLike | number | string
    url?: string | null
    archived?: boolean
    default_draft_account?: number | null
    category?: number | null
    recurrence?: number | null
    recurrence_value?: number | null
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutBillModelInput
  }

  export type BillsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    default_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutBillsNestedInput
    defaultDraftAccount?: Bank_AccountUpdateOneWithoutBillsNestedInput
    categoryModel?: CategoryUpdateOneWithoutBillsNestedInput
    recurrenceModel?: RecurrenceUpdateOneWithoutBillsNestedInput
    dueBills?: Due_BillsUpdateManyWithoutBillModelNestedInput
  }

  export type BillsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    default_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    default_draft_account?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    dueBills?: Due_BillsUncheckedUpdateManyWithoutBillModelNestedInput
  }

  export type BillsCreateManyInput = {
    id?: number
    user_id: string
    name: string
    default_amount_due: Decimal | DecimalJsLike | number | string
    url?: string | null
    archived?: boolean
    default_draft_account?: number | null
    category?: number | null
    recurrence?: number | null
    recurrence_value?: number | null
  }

  export type BillsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    default_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BillsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    default_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    default_draft_account?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Due_BillsCreateInput = {
    recurrence_value?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    min_amount_due: Decimal | DecimalJsLike | number | string
    total_amount_due: Decimal | DecimalJsLike | number | string
    archived?: boolean
    confirmation?: string | null
    notes?: string | null
    user: UserCreateNestedOneWithoutDueBillsInput
    billModel?: BillsCreateNestedOneWithoutDueBillsInput
    recurrenceModel?: RecurrenceCreateNestedOneWithoutDueBillsInput
    statusModel?: Bill_StatusCreateNestedOneWithoutDueBillsInput
    draftAccount?: Bank_AccountCreateNestedOneWithoutDueBillsInput
  }

  export type Due_BillsUncheckedCreateInput = {
    id?: number
    user_id: string
    bill?: number | null
    recurrence?: number | null
    recurrence_value?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    min_amount_due: Decimal | DecimalJsLike | number | string
    total_amount_due: Decimal | DecimalJsLike | number | string
    status?: number | null
    archived?: boolean
    confirmation?: string | null
    notes?: string | null
    draft_account?: number | null
  }

  export type Due_BillsUpdateInput = {
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    min_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    confirmation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDueBillsNestedInput
    billModel?: BillsUpdateOneWithoutDueBillsNestedInput
    recurrenceModel?: RecurrenceUpdateOneWithoutDueBillsNestedInput
    statusModel?: Bill_StatusUpdateOneWithoutDueBillsNestedInput
    draftAccount?: Bank_AccountUpdateOneWithoutDueBillsNestedInput
  }

  export type Due_BillsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    bill?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    min_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    confirmation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    draft_account?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Due_BillsCreateManyInput = {
    id?: number
    user_id: string
    bill?: number | null
    recurrence?: number | null
    recurrence_value?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    min_amount_due: Decimal | DecimalJsLike | number | string
    total_amount_due: Decimal | DecimalJsLike | number | string
    status?: number | null
    archived?: boolean
    confirmation?: string | null
    notes?: string | null
    draft_account?: number | null
  }

  export type Due_BillsUpdateManyMutationInput = {
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    min_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    confirmation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Due_BillsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    bill?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    min_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    confirmation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    draft_account?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Bank_Account_InstanceCreateInput = {
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    archived?: boolean
    current_balance: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutBankAccountInstancesInput
    bankAccount?: Bank_AccountCreateNestedOneWithoutBankAccountInstancesInput
    statusModel?: Bill_StatusCreateNestedOneWithoutBankAccountInstancesInput
  }

  export type Bank_Account_InstanceUncheckedCreateInput = {
    id?: number
    user_id: string
    bank_account?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    status?: number | null
    archived?: boolean
    current_balance: Decimal | DecimalJsLike | number | string
  }

  export type Bank_Account_InstanceUpdateInput = {
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    current_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutBankAccountInstancesNestedInput
    bankAccount?: Bank_AccountUpdateOneWithoutBankAccountInstancesNestedInput
    statusModel?: Bill_StatusUpdateOneWithoutBankAccountInstancesNestedInput
  }

  export type Bank_Account_InstanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    bank_account?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    current_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type Bank_Account_InstanceCreateManyInput = {
    id?: number
    user_id: string
    bank_account?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    status?: number | null
    archived?: boolean
    current_balance: Decimal | DecimalJsLike | number | string
  }

  export type Bank_Account_InstanceUpdateManyMutationInput = {
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    current_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type Bank_Account_InstanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    bank_account?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    current_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type Audit_LogCreateInput = {
    table_name: string
    row_id: number
    field_name: string
    action: string
    value_before_change?: string | null
    value_after_change?: string | null
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type Audit_LogUncheckedCreateInput = {
    id?: number
    user_id: string
    table_name: string
    row_id: number
    field_name: string
    action: string
    value_before_change?: string | null
    value_after_change?: string | null
    timestamp?: Date | string
  }

  export type Audit_LogUpdateInput = {
    table_name?: StringFieldUpdateOperationsInput | string
    row_id?: IntFieldUpdateOperationsInput | number
    field_name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    value_before_change?: NullableStringFieldUpdateOperationsInput | string | null
    value_after_change?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type Audit_LogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    table_name?: StringFieldUpdateOperationsInput | string
    row_id?: IntFieldUpdateOperationsInput | number
    field_name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    value_before_change?: NullableStringFieldUpdateOperationsInput | string | null
    value_after_change?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Audit_LogCreateManyInput = {
    id?: number
    user_id: string
    table_name: string
    row_id: number
    field_name: string
    action: string
    value_before_change?: string | null
    value_after_change?: string | null
    timestamp?: Date | string
  }

  export type Audit_LogUpdateManyMutationInput = {
    table_name?: StringFieldUpdateOperationsInput | string
    row_id?: IntFieldUpdateOperationsInput | number
    field_name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    value_before_change?: NullableStringFieldUpdateOperationsInput | string | null
    value_after_change?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Audit_LogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    table_name?: StringFieldUpdateOperationsInput | string
    row_id?: IntFieldUpdateOperationsInput | number
    field_name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    value_before_change?: NullableStringFieldUpdateOperationsInput | string | null
    value_after_change?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type Api_TokenListRelationFilter = {
    every?: Api_TokenWhereInput
    some?: Api_TokenWhereInput
    none?: Api_TokenWhereInput
  }

  export type OAuth_AccountListRelationFilter = {
    every?: OAuth_AccountWhereInput
    some?: OAuth_AccountWhereInput
    none?: OAuth_AccountWhereInput
  }

  export type Bill_StatusListRelationFilter = {
    every?: Bill_StatusWhereInput
    some?: Bill_StatusWhereInput
    none?: Bill_StatusWhereInput
  }

  export type RecurrenceListRelationFilter = {
    every?: RecurrenceWhereInput
    some?: RecurrenceWhereInput
    none?: RecurrenceWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type Bank_AccountListRelationFilter = {
    every?: Bank_AccountWhereInput
    some?: Bank_AccountWhereInput
    none?: Bank_AccountWhereInput
  }

  export type BillsListRelationFilter = {
    every?: BillsWhereInput
    some?: BillsWhereInput
    none?: BillsWhereInput
  }

  export type Due_BillsListRelationFilter = {
    every?: Due_BillsWhereInput
    some?: Due_BillsWhereInput
    none?: Due_BillsWhereInput
  }

  export type Bank_Account_InstanceListRelationFilter = {
    every?: Bank_Account_InstanceWhereInput
    some?: Bank_Account_InstanceWhereInput
    none?: Bank_Account_InstanceWhereInput
  }

  export type Audit_LogListRelationFilter = {
    every?: Audit_LogWhereInput
    some?: Audit_LogWhereInput
    none?: Audit_LogWhereInput
  }

  export type Api_TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OAuth_AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Bill_StatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecurrenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Bank_AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Due_BillsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Bank_Account_InstanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Audit_LogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashed_password?: SortOrder
    is_active?: SortOrder
    is_superuser?: SortOrder
    is_verified?: SortOrder
    mfa_enabled?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashed_password?: SortOrder
    is_active?: SortOrder
    is_superuser?: SortOrder
    is_verified?: SortOrder
    mfa_enabled?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashed_password?: SortOrder
    is_active?: SortOrder
    is_superuser?: SortOrder
    is_verified?: SortOrder
    mfa_enabled?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Api_TokenCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    issued_at?: SortOrder
    expires_at?: SortOrder
  }

  export type Api_TokenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Api_TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    issued_at?: SortOrder
    expires_at?: SortOrder
  }

  export type Api_TokenMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    token?: SortOrder
    issued_at?: SortOrder
    expires_at?: SortOrder
  }

  export type Api_TokenSumOrderByAggregateInput = {
    id?: SortOrder
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
  }

  export type OAuth_AccountProviderAccount_idCompoundUniqueInput = {
    provider: string
    account_id: string
  }

  export type OAuth_AccountCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    provider?: SortOrder
    account_id?: SortOrder
    created_at?: SortOrder
  }

  export type OAuth_AccountAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OAuth_AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    provider?: SortOrder
    account_id?: SortOrder
    created_at?: SortOrder
  }

  export type OAuth_AccountMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    provider?: SortOrder
    account_id?: SortOrder
    created_at?: SortOrder
  }

  export type OAuth_AccountSumOrderByAggregateInput = {
    id?: SortOrder
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
  }

  export type Bill_StatusUser_idNameCompoundUniqueInput = {
    user_id: string
    name: string
  }

  export type Bill_StatusCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    archived?: SortOrder
    highlight_color_hex?: SortOrder
  }

  export type Bill_StatusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Bill_StatusMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    archived?: SortOrder
    highlight_color_hex?: SortOrder
  }

  export type Bill_StatusMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    archived?: SortOrder
    highlight_color_hex?: SortOrder
  }

  export type Bill_StatusSumOrderByAggregateInput = {
    id?: SortOrder
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
  }

  export type RecurrenceUser_idNameCompoundUniqueInput = {
    user_id: string
    name: string
  }

  export type RecurrenceCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    calculation?: SortOrder
    archived?: SortOrder
  }

  export type RecurrenceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RecurrenceMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    calculation?: SortOrder
    archived?: SortOrder
  }

  export type RecurrenceMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    calculation?: SortOrder
    archived?: SortOrder
  }

  export type RecurrenceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryUser_idNameCompoundUniqueInput = {
    user_id: string
    name: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    archived?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    archived?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    archived?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RecurrenceNullableScalarRelationFilter = {
    is?: RecurrenceWhereInput | null
    isNot?: RecurrenceWhereInput | null
  }

  export type Bank_AccountUser_idNameCompoundUniqueInput = {
    user_id: string
    name: string
  }

  export type Bank_AccountCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    recurrence?: SortOrder
    recurrence_value?: SortOrder
    archived?: SortOrder
    font_color_hex?: SortOrder
  }

  export type Bank_AccountAvgOrderByAggregateInput = {
    id?: SortOrder
    recurrence?: SortOrder
    recurrence_value?: SortOrder
  }

  export type Bank_AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    recurrence?: SortOrder
    recurrence_value?: SortOrder
    archived?: SortOrder
    font_color_hex?: SortOrder
  }

  export type Bank_AccountMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    recurrence?: SortOrder
    recurrence_value?: SortOrder
    archived?: SortOrder
    font_color_hex?: SortOrder
  }

  export type Bank_AccountSumOrderByAggregateInput = {
    id?: SortOrder
    recurrence?: SortOrder
    recurrence_value?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Bank_AccountNullableScalarRelationFilter = {
    is?: Bank_AccountWhereInput | null
    isNot?: Bank_AccountWhereInput | null
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type BillsUser_idNameCompoundUniqueInput = {
    user_id: string
    name: string
  }

  export type BillsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    default_amount_due?: SortOrder
    url?: SortOrder
    archived?: SortOrder
    default_draft_account?: SortOrder
    category?: SortOrder
    recurrence?: SortOrder
    recurrence_value?: SortOrder
  }

  export type BillsAvgOrderByAggregateInput = {
    id?: SortOrder
    default_amount_due?: SortOrder
    default_draft_account?: SortOrder
    category?: SortOrder
    recurrence?: SortOrder
    recurrence_value?: SortOrder
  }

  export type BillsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    default_amount_due?: SortOrder
    url?: SortOrder
    archived?: SortOrder
    default_draft_account?: SortOrder
    category?: SortOrder
    recurrence?: SortOrder
    recurrence_value?: SortOrder
  }

  export type BillsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    default_amount_due?: SortOrder
    url?: SortOrder
    archived?: SortOrder
    default_draft_account?: SortOrder
    category?: SortOrder
    recurrence?: SortOrder
    recurrence_value?: SortOrder
  }

  export type BillsSumOrderByAggregateInput = {
    id?: SortOrder
    default_amount_due?: SortOrder
    default_draft_account?: SortOrder
    category?: SortOrder
    recurrence?: SortOrder
    recurrence_value?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BillsNullableScalarRelationFilter = {
    is?: BillsWhereInput | null
    isNot?: BillsWhereInput | null
  }

  export type Bill_StatusNullableScalarRelationFilter = {
    is?: Bill_StatusWhereInput | null
    isNot?: Bill_StatusWhereInput | null
  }

  export type Due_BillsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bill?: SortOrder
    recurrence?: SortOrder
    recurrence_value?: SortOrder
    priority?: SortOrder
    due_date?: SortOrder
    pay_date?: SortOrder
    min_amount_due?: SortOrder
    total_amount_due?: SortOrder
    status?: SortOrder
    archived?: SortOrder
    confirmation?: SortOrder
    notes?: SortOrder
    draft_account?: SortOrder
  }

  export type Due_BillsAvgOrderByAggregateInput = {
    id?: SortOrder
    bill?: SortOrder
    recurrence?: SortOrder
    recurrence_value?: SortOrder
    priority?: SortOrder
    min_amount_due?: SortOrder
    total_amount_due?: SortOrder
    status?: SortOrder
    draft_account?: SortOrder
  }

  export type Due_BillsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bill?: SortOrder
    recurrence?: SortOrder
    recurrence_value?: SortOrder
    priority?: SortOrder
    due_date?: SortOrder
    pay_date?: SortOrder
    min_amount_due?: SortOrder
    total_amount_due?: SortOrder
    status?: SortOrder
    archived?: SortOrder
    confirmation?: SortOrder
    notes?: SortOrder
    draft_account?: SortOrder
  }

  export type Due_BillsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bill?: SortOrder
    recurrence?: SortOrder
    recurrence_value?: SortOrder
    priority?: SortOrder
    due_date?: SortOrder
    pay_date?: SortOrder
    min_amount_due?: SortOrder
    total_amount_due?: SortOrder
    status?: SortOrder
    archived?: SortOrder
    confirmation?: SortOrder
    notes?: SortOrder
    draft_account?: SortOrder
  }

  export type Due_BillsSumOrderByAggregateInput = {
    id?: SortOrder
    bill?: SortOrder
    recurrence?: SortOrder
    recurrence_value?: SortOrder
    priority?: SortOrder
    min_amount_due?: SortOrder
    total_amount_due?: SortOrder
    status?: SortOrder
    draft_account?: SortOrder
  }

  export type Bank_Account_InstanceCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bank_account?: SortOrder
    priority?: SortOrder
    due_date?: SortOrder
    pay_date?: SortOrder
    status?: SortOrder
    archived?: SortOrder
    current_balance?: SortOrder
  }

  export type Bank_Account_InstanceAvgOrderByAggregateInput = {
    id?: SortOrder
    bank_account?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    current_balance?: SortOrder
  }

  export type Bank_Account_InstanceMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bank_account?: SortOrder
    priority?: SortOrder
    due_date?: SortOrder
    pay_date?: SortOrder
    status?: SortOrder
    archived?: SortOrder
    current_balance?: SortOrder
  }

  export type Bank_Account_InstanceMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    bank_account?: SortOrder
    priority?: SortOrder
    due_date?: SortOrder
    pay_date?: SortOrder
    status?: SortOrder
    archived?: SortOrder
    current_balance?: SortOrder
  }

  export type Bank_Account_InstanceSumOrderByAggregateInput = {
    id?: SortOrder
    bank_account?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    current_balance?: SortOrder
  }

  export type Audit_LogCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    table_name?: SortOrder
    row_id?: SortOrder
    field_name?: SortOrder
    action?: SortOrder
    value_before_change?: SortOrder
    value_after_change?: SortOrder
    timestamp?: SortOrder
  }

  export type Audit_LogAvgOrderByAggregateInput = {
    id?: SortOrder
    row_id?: SortOrder
  }

  export type Audit_LogMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    table_name?: SortOrder
    row_id?: SortOrder
    field_name?: SortOrder
    action?: SortOrder
    value_before_change?: SortOrder
    value_after_change?: SortOrder
    timestamp?: SortOrder
  }

  export type Audit_LogMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    table_name?: SortOrder
    row_id?: SortOrder
    field_name?: SortOrder
    action?: SortOrder
    value_before_change?: SortOrder
    value_after_change?: SortOrder
    timestamp?: SortOrder
  }

  export type Audit_LogSumOrderByAggregateInput = {
    id?: SortOrder
    row_id?: SortOrder
  }

  export type Api_TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<Api_TokenCreateWithoutUserInput, Api_TokenUncheckedCreateWithoutUserInput> | Api_TokenCreateWithoutUserInput[] | Api_TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Api_TokenCreateOrConnectWithoutUserInput | Api_TokenCreateOrConnectWithoutUserInput[]
    createMany?: Api_TokenCreateManyUserInputEnvelope
    connect?: Api_TokenWhereUniqueInput | Api_TokenWhereUniqueInput[]
  }

  export type OAuth_AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuth_AccountCreateWithoutUserInput, OAuth_AccountUncheckedCreateWithoutUserInput> | OAuth_AccountCreateWithoutUserInput[] | OAuth_AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuth_AccountCreateOrConnectWithoutUserInput | OAuth_AccountCreateOrConnectWithoutUserInput[]
    createMany?: OAuth_AccountCreateManyUserInputEnvelope
    connect?: OAuth_AccountWhereUniqueInput | OAuth_AccountWhereUniqueInput[]
  }

  export type Bill_StatusCreateNestedManyWithoutUserInput = {
    create?: XOR<Bill_StatusCreateWithoutUserInput, Bill_StatusUncheckedCreateWithoutUserInput> | Bill_StatusCreateWithoutUserInput[] | Bill_StatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Bill_StatusCreateOrConnectWithoutUserInput | Bill_StatusCreateOrConnectWithoutUserInput[]
    createMany?: Bill_StatusCreateManyUserInputEnvelope
    connect?: Bill_StatusWhereUniqueInput | Bill_StatusWhereUniqueInput[]
  }

  export type RecurrenceCreateNestedManyWithoutUserInput = {
    create?: XOR<RecurrenceCreateWithoutUserInput, RecurrenceUncheckedCreateWithoutUserInput> | RecurrenceCreateWithoutUserInput[] | RecurrenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurrenceCreateOrConnectWithoutUserInput | RecurrenceCreateOrConnectWithoutUserInput[]
    createMany?: RecurrenceCreateManyUserInputEnvelope
    connect?: RecurrenceWhereUniqueInput | RecurrenceWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type Bank_AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<Bank_AccountCreateWithoutUserInput, Bank_AccountUncheckedCreateWithoutUserInput> | Bank_AccountCreateWithoutUserInput[] | Bank_AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Bank_AccountCreateOrConnectWithoutUserInput | Bank_AccountCreateOrConnectWithoutUserInput[]
    createMany?: Bank_AccountCreateManyUserInputEnvelope
    connect?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
  }

  export type BillsCreateNestedManyWithoutUserInput = {
    create?: XOR<BillsCreateWithoutUserInput, BillsUncheckedCreateWithoutUserInput> | BillsCreateWithoutUserInput[] | BillsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutUserInput | BillsCreateOrConnectWithoutUserInput[]
    createMany?: BillsCreateManyUserInputEnvelope
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
  }

  export type Due_BillsCreateNestedManyWithoutUserInput = {
    create?: XOR<Due_BillsCreateWithoutUserInput, Due_BillsUncheckedCreateWithoutUserInput> | Due_BillsCreateWithoutUserInput[] | Due_BillsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutUserInput | Due_BillsCreateOrConnectWithoutUserInput[]
    createMany?: Due_BillsCreateManyUserInputEnvelope
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
  }

  export type Bank_Account_InstanceCreateNestedManyWithoutUserInput = {
    create?: XOR<Bank_Account_InstanceCreateWithoutUserInput, Bank_Account_InstanceUncheckedCreateWithoutUserInput> | Bank_Account_InstanceCreateWithoutUserInput[] | Bank_Account_InstanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Bank_Account_InstanceCreateOrConnectWithoutUserInput | Bank_Account_InstanceCreateOrConnectWithoutUserInput[]
    createMany?: Bank_Account_InstanceCreateManyUserInputEnvelope
    connect?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
  }

  export type Audit_LogCreateNestedManyWithoutUserInput = {
    create?: XOR<Audit_LogCreateWithoutUserInput, Audit_LogUncheckedCreateWithoutUserInput> | Audit_LogCreateWithoutUserInput[] | Audit_LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Audit_LogCreateOrConnectWithoutUserInput | Audit_LogCreateOrConnectWithoutUserInput[]
    createMany?: Audit_LogCreateManyUserInputEnvelope
    connect?: Audit_LogWhereUniqueInput | Audit_LogWhereUniqueInput[]
  }

  export type Api_TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Api_TokenCreateWithoutUserInput, Api_TokenUncheckedCreateWithoutUserInput> | Api_TokenCreateWithoutUserInput[] | Api_TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Api_TokenCreateOrConnectWithoutUserInput | Api_TokenCreateOrConnectWithoutUserInput[]
    createMany?: Api_TokenCreateManyUserInputEnvelope
    connect?: Api_TokenWhereUniqueInput | Api_TokenWhereUniqueInput[]
  }

  export type OAuth_AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuth_AccountCreateWithoutUserInput, OAuth_AccountUncheckedCreateWithoutUserInput> | OAuth_AccountCreateWithoutUserInput[] | OAuth_AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuth_AccountCreateOrConnectWithoutUserInput | OAuth_AccountCreateOrConnectWithoutUserInput[]
    createMany?: OAuth_AccountCreateManyUserInputEnvelope
    connect?: OAuth_AccountWhereUniqueInput | OAuth_AccountWhereUniqueInput[]
  }

  export type Bill_StatusUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Bill_StatusCreateWithoutUserInput, Bill_StatusUncheckedCreateWithoutUserInput> | Bill_StatusCreateWithoutUserInput[] | Bill_StatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Bill_StatusCreateOrConnectWithoutUserInput | Bill_StatusCreateOrConnectWithoutUserInput[]
    createMany?: Bill_StatusCreateManyUserInputEnvelope
    connect?: Bill_StatusWhereUniqueInput | Bill_StatusWhereUniqueInput[]
  }

  export type RecurrenceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecurrenceCreateWithoutUserInput, RecurrenceUncheckedCreateWithoutUserInput> | RecurrenceCreateWithoutUserInput[] | RecurrenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurrenceCreateOrConnectWithoutUserInput | RecurrenceCreateOrConnectWithoutUserInput[]
    createMany?: RecurrenceCreateManyUserInputEnvelope
    connect?: RecurrenceWhereUniqueInput | RecurrenceWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type Bank_AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Bank_AccountCreateWithoutUserInput, Bank_AccountUncheckedCreateWithoutUserInput> | Bank_AccountCreateWithoutUserInput[] | Bank_AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Bank_AccountCreateOrConnectWithoutUserInput | Bank_AccountCreateOrConnectWithoutUserInput[]
    createMany?: Bank_AccountCreateManyUserInputEnvelope
    connect?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
  }

  export type BillsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BillsCreateWithoutUserInput, BillsUncheckedCreateWithoutUserInput> | BillsCreateWithoutUserInput[] | BillsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutUserInput | BillsCreateOrConnectWithoutUserInput[]
    createMany?: BillsCreateManyUserInputEnvelope
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
  }

  export type Due_BillsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Due_BillsCreateWithoutUserInput, Due_BillsUncheckedCreateWithoutUserInput> | Due_BillsCreateWithoutUserInput[] | Due_BillsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutUserInput | Due_BillsCreateOrConnectWithoutUserInput[]
    createMany?: Due_BillsCreateManyUserInputEnvelope
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
  }

  export type Bank_Account_InstanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Bank_Account_InstanceCreateWithoutUserInput, Bank_Account_InstanceUncheckedCreateWithoutUserInput> | Bank_Account_InstanceCreateWithoutUserInput[] | Bank_Account_InstanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Bank_Account_InstanceCreateOrConnectWithoutUserInput | Bank_Account_InstanceCreateOrConnectWithoutUserInput[]
    createMany?: Bank_Account_InstanceCreateManyUserInputEnvelope
    connect?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
  }

  export type Audit_LogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Audit_LogCreateWithoutUserInput, Audit_LogUncheckedCreateWithoutUserInput> | Audit_LogCreateWithoutUserInput[] | Audit_LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Audit_LogCreateOrConnectWithoutUserInput | Audit_LogCreateOrConnectWithoutUserInput[]
    createMany?: Audit_LogCreateManyUserInputEnvelope
    connect?: Audit_LogWhereUniqueInput | Audit_LogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Api_TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<Api_TokenCreateWithoutUserInput, Api_TokenUncheckedCreateWithoutUserInput> | Api_TokenCreateWithoutUserInput[] | Api_TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Api_TokenCreateOrConnectWithoutUserInput | Api_TokenCreateOrConnectWithoutUserInput[]
    upsert?: Api_TokenUpsertWithWhereUniqueWithoutUserInput | Api_TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Api_TokenCreateManyUserInputEnvelope
    set?: Api_TokenWhereUniqueInput | Api_TokenWhereUniqueInput[]
    disconnect?: Api_TokenWhereUniqueInput | Api_TokenWhereUniqueInput[]
    delete?: Api_TokenWhereUniqueInput | Api_TokenWhereUniqueInput[]
    connect?: Api_TokenWhereUniqueInput | Api_TokenWhereUniqueInput[]
    update?: Api_TokenUpdateWithWhereUniqueWithoutUserInput | Api_TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Api_TokenUpdateManyWithWhereWithoutUserInput | Api_TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Api_TokenScalarWhereInput | Api_TokenScalarWhereInput[]
  }

  export type OAuth_AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuth_AccountCreateWithoutUserInput, OAuth_AccountUncheckedCreateWithoutUserInput> | OAuth_AccountCreateWithoutUserInput[] | OAuth_AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuth_AccountCreateOrConnectWithoutUserInput | OAuth_AccountCreateOrConnectWithoutUserInput[]
    upsert?: OAuth_AccountUpsertWithWhereUniqueWithoutUserInput | OAuth_AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuth_AccountCreateManyUserInputEnvelope
    set?: OAuth_AccountWhereUniqueInput | OAuth_AccountWhereUniqueInput[]
    disconnect?: OAuth_AccountWhereUniqueInput | OAuth_AccountWhereUniqueInput[]
    delete?: OAuth_AccountWhereUniqueInput | OAuth_AccountWhereUniqueInput[]
    connect?: OAuth_AccountWhereUniqueInput | OAuth_AccountWhereUniqueInput[]
    update?: OAuth_AccountUpdateWithWhereUniqueWithoutUserInput | OAuth_AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuth_AccountUpdateManyWithWhereWithoutUserInput | OAuth_AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuth_AccountScalarWhereInput | OAuth_AccountScalarWhereInput[]
  }

  export type Bill_StatusUpdateManyWithoutUserNestedInput = {
    create?: XOR<Bill_StatusCreateWithoutUserInput, Bill_StatusUncheckedCreateWithoutUserInput> | Bill_StatusCreateWithoutUserInput[] | Bill_StatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Bill_StatusCreateOrConnectWithoutUserInput | Bill_StatusCreateOrConnectWithoutUserInput[]
    upsert?: Bill_StatusUpsertWithWhereUniqueWithoutUserInput | Bill_StatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Bill_StatusCreateManyUserInputEnvelope
    set?: Bill_StatusWhereUniqueInput | Bill_StatusWhereUniqueInput[]
    disconnect?: Bill_StatusWhereUniqueInput | Bill_StatusWhereUniqueInput[]
    delete?: Bill_StatusWhereUniqueInput | Bill_StatusWhereUniqueInput[]
    connect?: Bill_StatusWhereUniqueInput | Bill_StatusWhereUniqueInput[]
    update?: Bill_StatusUpdateWithWhereUniqueWithoutUserInput | Bill_StatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Bill_StatusUpdateManyWithWhereWithoutUserInput | Bill_StatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Bill_StatusScalarWhereInput | Bill_StatusScalarWhereInput[]
  }

  export type RecurrenceUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecurrenceCreateWithoutUserInput, RecurrenceUncheckedCreateWithoutUserInput> | RecurrenceCreateWithoutUserInput[] | RecurrenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurrenceCreateOrConnectWithoutUserInput | RecurrenceCreateOrConnectWithoutUserInput[]
    upsert?: RecurrenceUpsertWithWhereUniqueWithoutUserInput | RecurrenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecurrenceCreateManyUserInputEnvelope
    set?: RecurrenceWhereUniqueInput | RecurrenceWhereUniqueInput[]
    disconnect?: RecurrenceWhereUniqueInput | RecurrenceWhereUniqueInput[]
    delete?: RecurrenceWhereUniqueInput | RecurrenceWhereUniqueInput[]
    connect?: RecurrenceWhereUniqueInput | RecurrenceWhereUniqueInput[]
    update?: RecurrenceUpdateWithWhereUniqueWithoutUserInput | RecurrenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecurrenceUpdateManyWithWhereWithoutUserInput | RecurrenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecurrenceScalarWhereInput | RecurrenceScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type Bank_AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<Bank_AccountCreateWithoutUserInput, Bank_AccountUncheckedCreateWithoutUserInput> | Bank_AccountCreateWithoutUserInput[] | Bank_AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Bank_AccountCreateOrConnectWithoutUserInput | Bank_AccountCreateOrConnectWithoutUserInput[]
    upsert?: Bank_AccountUpsertWithWhereUniqueWithoutUserInput | Bank_AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Bank_AccountCreateManyUserInputEnvelope
    set?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
    disconnect?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
    delete?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
    connect?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
    update?: Bank_AccountUpdateWithWhereUniqueWithoutUserInput | Bank_AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Bank_AccountUpdateManyWithWhereWithoutUserInput | Bank_AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Bank_AccountScalarWhereInput | Bank_AccountScalarWhereInput[]
  }

  export type BillsUpdateManyWithoutUserNestedInput = {
    create?: XOR<BillsCreateWithoutUserInput, BillsUncheckedCreateWithoutUserInput> | BillsCreateWithoutUserInput[] | BillsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutUserInput | BillsCreateOrConnectWithoutUserInput[]
    upsert?: BillsUpsertWithWhereUniqueWithoutUserInput | BillsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BillsCreateManyUserInputEnvelope
    set?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    disconnect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    delete?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    update?: BillsUpdateWithWhereUniqueWithoutUserInput | BillsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BillsUpdateManyWithWhereWithoutUserInput | BillsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BillsScalarWhereInput | BillsScalarWhereInput[]
  }

  export type Due_BillsUpdateManyWithoutUserNestedInput = {
    create?: XOR<Due_BillsCreateWithoutUserInput, Due_BillsUncheckedCreateWithoutUserInput> | Due_BillsCreateWithoutUserInput[] | Due_BillsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutUserInput | Due_BillsCreateOrConnectWithoutUserInput[]
    upsert?: Due_BillsUpsertWithWhereUniqueWithoutUserInput | Due_BillsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Due_BillsCreateManyUserInputEnvelope
    set?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    disconnect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    delete?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    update?: Due_BillsUpdateWithWhereUniqueWithoutUserInput | Due_BillsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Due_BillsUpdateManyWithWhereWithoutUserInput | Due_BillsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Due_BillsScalarWhereInput | Due_BillsScalarWhereInput[]
  }

  export type Bank_Account_InstanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<Bank_Account_InstanceCreateWithoutUserInput, Bank_Account_InstanceUncheckedCreateWithoutUserInput> | Bank_Account_InstanceCreateWithoutUserInput[] | Bank_Account_InstanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Bank_Account_InstanceCreateOrConnectWithoutUserInput | Bank_Account_InstanceCreateOrConnectWithoutUserInput[]
    upsert?: Bank_Account_InstanceUpsertWithWhereUniqueWithoutUserInput | Bank_Account_InstanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Bank_Account_InstanceCreateManyUserInputEnvelope
    set?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    disconnect?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    delete?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    connect?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    update?: Bank_Account_InstanceUpdateWithWhereUniqueWithoutUserInput | Bank_Account_InstanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Bank_Account_InstanceUpdateManyWithWhereWithoutUserInput | Bank_Account_InstanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Bank_Account_InstanceScalarWhereInput | Bank_Account_InstanceScalarWhereInput[]
  }

  export type Audit_LogUpdateManyWithoutUserNestedInput = {
    create?: XOR<Audit_LogCreateWithoutUserInput, Audit_LogUncheckedCreateWithoutUserInput> | Audit_LogCreateWithoutUserInput[] | Audit_LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Audit_LogCreateOrConnectWithoutUserInput | Audit_LogCreateOrConnectWithoutUserInput[]
    upsert?: Audit_LogUpsertWithWhereUniqueWithoutUserInput | Audit_LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Audit_LogCreateManyUserInputEnvelope
    set?: Audit_LogWhereUniqueInput | Audit_LogWhereUniqueInput[]
    disconnect?: Audit_LogWhereUniqueInput | Audit_LogWhereUniqueInput[]
    delete?: Audit_LogWhereUniqueInput | Audit_LogWhereUniqueInput[]
    connect?: Audit_LogWhereUniqueInput | Audit_LogWhereUniqueInput[]
    update?: Audit_LogUpdateWithWhereUniqueWithoutUserInput | Audit_LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Audit_LogUpdateManyWithWhereWithoutUserInput | Audit_LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Audit_LogScalarWhereInput | Audit_LogScalarWhereInput[]
  }

  export type Api_TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Api_TokenCreateWithoutUserInput, Api_TokenUncheckedCreateWithoutUserInput> | Api_TokenCreateWithoutUserInput[] | Api_TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Api_TokenCreateOrConnectWithoutUserInput | Api_TokenCreateOrConnectWithoutUserInput[]
    upsert?: Api_TokenUpsertWithWhereUniqueWithoutUserInput | Api_TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Api_TokenCreateManyUserInputEnvelope
    set?: Api_TokenWhereUniqueInput | Api_TokenWhereUniqueInput[]
    disconnect?: Api_TokenWhereUniqueInput | Api_TokenWhereUniqueInput[]
    delete?: Api_TokenWhereUniqueInput | Api_TokenWhereUniqueInput[]
    connect?: Api_TokenWhereUniqueInput | Api_TokenWhereUniqueInput[]
    update?: Api_TokenUpdateWithWhereUniqueWithoutUserInput | Api_TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Api_TokenUpdateManyWithWhereWithoutUserInput | Api_TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Api_TokenScalarWhereInput | Api_TokenScalarWhereInput[]
  }

  export type OAuth_AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuth_AccountCreateWithoutUserInput, OAuth_AccountUncheckedCreateWithoutUserInput> | OAuth_AccountCreateWithoutUserInput[] | OAuth_AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuth_AccountCreateOrConnectWithoutUserInput | OAuth_AccountCreateOrConnectWithoutUserInput[]
    upsert?: OAuth_AccountUpsertWithWhereUniqueWithoutUserInput | OAuth_AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuth_AccountCreateManyUserInputEnvelope
    set?: OAuth_AccountWhereUniqueInput | OAuth_AccountWhereUniqueInput[]
    disconnect?: OAuth_AccountWhereUniqueInput | OAuth_AccountWhereUniqueInput[]
    delete?: OAuth_AccountWhereUniqueInput | OAuth_AccountWhereUniqueInput[]
    connect?: OAuth_AccountWhereUniqueInput | OAuth_AccountWhereUniqueInput[]
    update?: OAuth_AccountUpdateWithWhereUniqueWithoutUserInput | OAuth_AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuth_AccountUpdateManyWithWhereWithoutUserInput | OAuth_AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuth_AccountScalarWhereInput | OAuth_AccountScalarWhereInput[]
  }

  export type Bill_StatusUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Bill_StatusCreateWithoutUserInput, Bill_StatusUncheckedCreateWithoutUserInput> | Bill_StatusCreateWithoutUserInput[] | Bill_StatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Bill_StatusCreateOrConnectWithoutUserInput | Bill_StatusCreateOrConnectWithoutUserInput[]
    upsert?: Bill_StatusUpsertWithWhereUniqueWithoutUserInput | Bill_StatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Bill_StatusCreateManyUserInputEnvelope
    set?: Bill_StatusWhereUniqueInput | Bill_StatusWhereUniqueInput[]
    disconnect?: Bill_StatusWhereUniqueInput | Bill_StatusWhereUniqueInput[]
    delete?: Bill_StatusWhereUniqueInput | Bill_StatusWhereUniqueInput[]
    connect?: Bill_StatusWhereUniqueInput | Bill_StatusWhereUniqueInput[]
    update?: Bill_StatusUpdateWithWhereUniqueWithoutUserInput | Bill_StatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Bill_StatusUpdateManyWithWhereWithoutUserInput | Bill_StatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Bill_StatusScalarWhereInput | Bill_StatusScalarWhereInput[]
  }

  export type RecurrenceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecurrenceCreateWithoutUserInput, RecurrenceUncheckedCreateWithoutUserInput> | RecurrenceCreateWithoutUserInput[] | RecurrenceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecurrenceCreateOrConnectWithoutUserInput | RecurrenceCreateOrConnectWithoutUserInput[]
    upsert?: RecurrenceUpsertWithWhereUniqueWithoutUserInput | RecurrenceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecurrenceCreateManyUserInputEnvelope
    set?: RecurrenceWhereUniqueInput | RecurrenceWhereUniqueInput[]
    disconnect?: RecurrenceWhereUniqueInput | RecurrenceWhereUniqueInput[]
    delete?: RecurrenceWhereUniqueInput | RecurrenceWhereUniqueInput[]
    connect?: RecurrenceWhereUniqueInput | RecurrenceWhereUniqueInput[]
    update?: RecurrenceUpdateWithWhereUniqueWithoutUserInput | RecurrenceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecurrenceUpdateManyWithWhereWithoutUserInput | RecurrenceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecurrenceScalarWhereInput | RecurrenceScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type Bank_AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Bank_AccountCreateWithoutUserInput, Bank_AccountUncheckedCreateWithoutUserInput> | Bank_AccountCreateWithoutUserInput[] | Bank_AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Bank_AccountCreateOrConnectWithoutUserInput | Bank_AccountCreateOrConnectWithoutUserInput[]
    upsert?: Bank_AccountUpsertWithWhereUniqueWithoutUserInput | Bank_AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Bank_AccountCreateManyUserInputEnvelope
    set?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
    disconnect?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
    delete?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
    connect?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
    update?: Bank_AccountUpdateWithWhereUniqueWithoutUserInput | Bank_AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Bank_AccountUpdateManyWithWhereWithoutUserInput | Bank_AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Bank_AccountScalarWhereInput | Bank_AccountScalarWhereInput[]
  }

  export type BillsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BillsCreateWithoutUserInput, BillsUncheckedCreateWithoutUserInput> | BillsCreateWithoutUserInput[] | BillsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutUserInput | BillsCreateOrConnectWithoutUserInput[]
    upsert?: BillsUpsertWithWhereUniqueWithoutUserInput | BillsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BillsCreateManyUserInputEnvelope
    set?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    disconnect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    delete?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    update?: BillsUpdateWithWhereUniqueWithoutUserInput | BillsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BillsUpdateManyWithWhereWithoutUserInput | BillsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BillsScalarWhereInput | BillsScalarWhereInput[]
  }

  export type Due_BillsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Due_BillsCreateWithoutUserInput, Due_BillsUncheckedCreateWithoutUserInput> | Due_BillsCreateWithoutUserInput[] | Due_BillsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutUserInput | Due_BillsCreateOrConnectWithoutUserInput[]
    upsert?: Due_BillsUpsertWithWhereUniqueWithoutUserInput | Due_BillsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Due_BillsCreateManyUserInputEnvelope
    set?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    disconnect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    delete?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    update?: Due_BillsUpdateWithWhereUniqueWithoutUserInput | Due_BillsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Due_BillsUpdateManyWithWhereWithoutUserInput | Due_BillsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Due_BillsScalarWhereInput | Due_BillsScalarWhereInput[]
  }

  export type Bank_Account_InstanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Bank_Account_InstanceCreateWithoutUserInput, Bank_Account_InstanceUncheckedCreateWithoutUserInput> | Bank_Account_InstanceCreateWithoutUserInput[] | Bank_Account_InstanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Bank_Account_InstanceCreateOrConnectWithoutUserInput | Bank_Account_InstanceCreateOrConnectWithoutUserInput[]
    upsert?: Bank_Account_InstanceUpsertWithWhereUniqueWithoutUserInput | Bank_Account_InstanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Bank_Account_InstanceCreateManyUserInputEnvelope
    set?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    disconnect?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    delete?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    connect?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    update?: Bank_Account_InstanceUpdateWithWhereUniqueWithoutUserInput | Bank_Account_InstanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Bank_Account_InstanceUpdateManyWithWhereWithoutUserInput | Bank_Account_InstanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Bank_Account_InstanceScalarWhereInput | Bank_Account_InstanceScalarWhereInput[]
  }

  export type Audit_LogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Audit_LogCreateWithoutUserInput, Audit_LogUncheckedCreateWithoutUserInput> | Audit_LogCreateWithoutUserInput[] | Audit_LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Audit_LogCreateOrConnectWithoutUserInput | Audit_LogCreateOrConnectWithoutUserInput[]
    upsert?: Audit_LogUpsertWithWhereUniqueWithoutUserInput | Audit_LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Audit_LogCreateManyUserInputEnvelope
    set?: Audit_LogWhereUniqueInput | Audit_LogWhereUniqueInput[]
    disconnect?: Audit_LogWhereUniqueInput | Audit_LogWhereUniqueInput[]
    delete?: Audit_LogWhereUniqueInput | Audit_LogWhereUniqueInput[]
    connect?: Audit_LogWhereUniqueInput | Audit_LogWhereUniqueInput[]
    update?: Audit_LogUpdateWithWhereUniqueWithoutUserInput | Audit_LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Audit_LogUpdateManyWithWhereWithoutUserInput | Audit_LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Audit_LogScalarWhereInput | Audit_LogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutApiTokensInput = {
    create?: XOR<UserCreateWithoutApiTokensInput, UserUncheckedCreateWithoutApiTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiTokensInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutApiTokensNestedInput = {
    create?: XOR<UserCreateWithoutApiTokensInput, UserUncheckedCreateWithoutApiTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiTokensInput
    upsert?: UserUpsertWithoutApiTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApiTokensInput, UserUpdateWithoutApiTokensInput>, UserUncheckedUpdateWithoutApiTokensInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutOauthAccountsInput = {
    create?: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOauthAccountsNestedInput = {
    create?: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthAccountsInput
    upsert?: UserUpsertWithoutOauthAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOauthAccountsInput, UserUpdateWithoutOauthAccountsInput>, UserUncheckedUpdateWithoutOauthAccountsInput>
  }

  export type UserCreateNestedOneWithoutBillStatusesInput = {
    create?: XOR<UserCreateWithoutBillStatusesInput, UserUncheckedCreateWithoutBillStatusesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillStatusesInput
    connect?: UserWhereUniqueInput
  }

  export type Due_BillsCreateNestedManyWithoutStatusModelInput = {
    create?: XOR<Due_BillsCreateWithoutStatusModelInput, Due_BillsUncheckedCreateWithoutStatusModelInput> | Due_BillsCreateWithoutStatusModelInput[] | Due_BillsUncheckedCreateWithoutStatusModelInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutStatusModelInput | Due_BillsCreateOrConnectWithoutStatusModelInput[]
    createMany?: Due_BillsCreateManyStatusModelInputEnvelope
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
  }

  export type Bank_Account_InstanceCreateNestedManyWithoutStatusModelInput = {
    create?: XOR<Bank_Account_InstanceCreateWithoutStatusModelInput, Bank_Account_InstanceUncheckedCreateWithoutStatusModelInput> | Bank_Account_InstanceCreateWithoutStatusModelInput[] | Bank_Account_InstanceUncheckedCreateWithoutStatusModelInput[]
    connectOrCreate?: Bank_Account_InstanceCreateOrConnectWithoutStatusModelInput | Bank_Account_InstanceCreateOrConnectWithoutStatusModelInput[]
    createMany?: Bank_Account_InstanceCreateManyStatusModelInputEnvelope
    connect?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
  }

  export type Due_BillsUncheckedCreateNestedManyWithoutStatusModelInput = {
    create?: XOR<Due_BillsCreateWithoutStatusModelInput, Due_BillsUncheckedCreateWithoutStatusModelInput> | Due_BillsCreateWithoutStatusModelInput[] | Due_BillsUncheckedCreateWithoutStatusModelInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutStatusModelInput | Due_BillsCreateOrConnectWithoutStatusModelInput[]
    createMany?: Due_BillsCreateManyStatusModelInputEnvelope
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
  }

  export type Bank_Account_InstanceUncheckedCreateNestedManyWithoutStatusModelInput = {
    create?: XOR<Bank_Account_InstanceCreateWithoutStatusModelInput, Bank_Account_InstanceUncheckedCreateWithoutStatusModelInput> | Bank_Account_InstanceCreateWithoutStatusModelInput[] | Bank_Account_InstanceUncheckedCreateWithoutStatusModelInput[]
    connectOrCreate?: Bank_Account_InstanceCreateOrConnectWithoutStatusModelInput | Bank_Account_InstanceCreateOrConnectWithoutStatusModelInput[]
    createMany?: Bank_Account_InstanceCreateManyStatusModelInputEnvelope
    connect?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutBillStatusesNestedInput = {
    create?: XOR<UserCreateWithoutBillStatusesInput, UserUncheckedCreateWithoutBillStatusesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillStatusesInput
    upsert?: UserUpsertWithoutBillStatusesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBillStatusesInput, UserUpdateWithoutBillStatusesInput>, UserUncheckedUpdateWithoutBillStatusesInput>
  }

  export type Due_BillsUpdateManyWithoutStatusModelNestedInput = {
    create?: XOR<Due_BillsCreateWithoutStatusModelInput, Due_BillsUncheckedCreateWithoutStatusModelInput> | Due_BillsCreateWithoutStatusModelInput[] | Due_BillsUncheckedCreateWithoutStatusModelInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutStatusModelInput | Due_BillsCreateOrConnectWithoutStatusModelInput[]
    upsert?: Due_BillsUpsertWithWhereUniqueWithoutStatusModelInput | Due_BillsUpsertWithWhereUniqueWithoutStatusModelInput[]
    createMany?: Due_BillsCreateManyStatusModelInputEnvelope
    set?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    disconnect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    delete?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    update?: Due_BillsUpdateWithWhereUniqueWithoutStatusModelInput | Due_BillsUpdateWithWhereUniqueWithoutStatusModelInput[]
    updateMany?: Due_BillsUpdateManyWithWhereWithoutStatusModelInput | Due_BillsUpdateManyWithWhereWithoutStatusModelInput[]
    deleteMany?: Due_BillsScalarWhereInput | Due_BillsScalarWhereInput[]
  }

  export type Bank_Account_InstanceUpdateManyWithoutStatusModelNestedInput = {
    create?: XOR<Bank_Account_InstanceCreateWithoutStatusModelInput, Bank_Account_InstanceUncheckedCreateWithoutStatusModelInput> | Bank_Account_InstanceCreateWithoutStatusModelInput[] | Bank_Account_InstanceUncheckedCreateWithoutStatusModelInput[]
    connectOrCreate?: Bank_Account_InstanceCreateOrConnectWithoutStatusModelInput | Bank_Account_InstanceCreateOrConnectWithoutStatusModelInput[]
    upsert?: Bank_Account_InstanceUpsertWithWhereUniqueWithoutStatusModelInput | Bank_Account_InstanceUpsertWithWhereUniqueWithoutStatusModelInput[]
    createMany?: Bank_Account_InstanceCreateManyStatusModelInputEnvelope
    set?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    disconnect?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    delete?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    connect?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    update?: Bank_Account_InstanceUpdateWithWhereUniqueWithoutStatusModelInput | Bank_Account_InstanceUpdateWithWhereUniqueWithoutStatusModelInput[]
    updateMany?: Bank_Account_InstanceUpdateManyWithWhereWithoutStatusModelInput | Bank_Account_InstanceUpdateManyWithWhereWithoutStatusModelInput[]
    deleteMany?: Bank_Account_InstanceScalarWhereInput | Bank_Account_InstanceScalarWhereInput[]
  }

  export type Due_BillsUncheckedUpdateManyWithoutStatusModelNestedInput = {
    create?: XOR<Due_BillsCreateWithoutStatusModelInput, Due_BillsUncheckedCreateWithoutStatusModelInput> | Due_BillsCreateWithoutStatusModelInput[] | Due_BillsUncheckedCreateWithoutStatusModelInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutStatusModelInput | Due_BillsCreateOrConnectWithoutStatusModelInput[]
    upsert?: Due_BillsUpsertWithWhereUniqueWithoutStatusModelInput | Due_BillsUpsertWithWhereUniqueWithoutStatusModelInput[]
    createMany?: Due_BillsCreateManyStatusModelInputEnvelope
    set?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    disconnect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    delete?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    update?: Due_BillsUpdateWithWhereUniqueWithoutStatusModelInput | Due_BillsUpdateWithWhereUniqueWithoutStatusModelInput[]
    updateMany?: Due_BillsUpdateManyWithWhereWithoutStatusModelInput | Due_BillsUpdateManyWithWhereWithoutStatusModelInput[]
    deleteMany?: Due_BillsScalarWhereInput | Due_BillsScalarWhereInput[]
  }

  export type Bank_Account_InstanceUncheckedUpdateManyWithoutStatusModelNestedInput = {
    create?: XOR<Bank_Account_InstanceCreateWithoutStatusModelInput, Bank_Account_InstanceUncheckedCreateWithoutStatusModelInput> | Bank_Account_InstanceCreateWithoutStatusModelInput[] | Bank_Account_InstanceUncheckedCreateWithoutStatusModelInput[]
    connectOrCreate?: Bank_Account_InstanceCreateOrConnectWithoutStatusModelInput | Bank_Account_InstanceCreateOrConnectWithoutStatusModelInput[]
    upsert?: Bank_Account_InstanceUpsertWithWhereUniqueWithoutStatusModelInput | Bank_Account_InstanceUpsertWithWhereUniqueWithoutStatusModelInput[]
    createMany?: Bank_Account_InstanceCreateManyStatusModelInputEnvelope
    set?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    disconnect?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    delete?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    connect?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    update?: Bank_Account_InstanceUpdateWithWhereUniqueWithoutStatusModelInput | Bank_Account_InstanceUpdateWithWhereUniqueWithoutStatusModelInput[]
    updateMany?: Bank_Account_InstanceUpdateManyWithWhereWithoutStatusModelInput | Bank_Account_InstanceUpdateManyWithWhereWithoutStatusModelInput[]
    deleteMany?: Bank_Account_InstanceScalarWhereInput | Bank_Account_InstanceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRecurrencesInput = {
    create?: XOR<UserCreateWithoutRecurrencesInput, UserUncheckedCreateWithoutRecurrencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecurrencesInput
    connect?: UserWhereUniqueInput
  }

  export type Bank_AccountCreateNestedManyWithoutRecurrenceModelInput = {
    create?: XOR<Bank_AccountCreateWithoutRecurrenceModelInput, Bank_AccountUncheckedCreateWithoutRecurrenceModelInput> | Bank_AccountCreateWithoutRecurrenceModelInput[] | Bank_AccountUncheckedCreateWithoutRecurrenceModelInput[]
    connectOrCreate?: Bank_AccountCreateOrConnectWithoutRecurrenceModelInput | Bank_AccountCreateOrConnectWithoutRecurrenceModelInput[]
    createMany?: Bank_AccountCreateManyRecurrenceModelInputEnvelope
    connect?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
  }

  export type Due_BillsCreateNestedManyWithoutRecurrenceModelInput = {
    create?: XOR<Due_BillsCreateWithoutRecurrenceModelInput, Due_BillsUncheckedCreateWithoutRecurrenceModelInput> | Due_BillsCreateWithoutRecurrenceModelInput[] | Due_BillsUncheckedCreateWithoutRecurrenceModelInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutRecurrenceModelInput | Due_BillsCreateOrConnectWithoutRecurrenceModelInput[]
    createMany?: Due_BillsCreateManyRecurrenceModelInputEnvelope
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
  }

  export type BillsCreateNestedManyWithoutRecurrenceModelInput = {
    create?: XOR<BillsCreateWithoutRecurrenceModelInput, BillsUncheckedCreateWithoutRecurrenceModelInput> | BillsCreateWithoutRecurrenceModelInput[] | BillsUncheckedCreateWithoutRecurrenceModelInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutRecurrenceModelInput | BillsCreateOrConnectWithoutRecurrenceModelInput[]
    createMany?: BillsCreateManyRecurrenceModelInputEnvelope
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
  }

  export type Bank_AccountUncheckedCreateNestedManyWithoutRecurrenceModelInput = {
    create?: XOR<Bank_AccountCreateWithoutRecurrenceModelInput, Bank_AccountUncheckedCreateWithoutRecurrenceModelInput> | Bank_AccountCreateWithoutRecurrenceModelInput[] | Bank_AccountUncheckedCreateWithoutRecurrenceModelInput[]
    connectOrCreate?: Bank_AccountCreateOrConnectWithoutRecurrenceModelInput | Bank_AccountCreateOrConnectWithoutRecurrenceModelInput[]
    createMany?: Bank_AccountCreateManyRecurrenceModelInputEnvelope
    connect?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
  }

  export type Due_BillsUncheckedCreateNestedManyWithoutRecurrenceModelInput = {
    create?: XOR<Due_BillsCreateWithoutRecurrenceModelInput, Due_BillsUncheckedCreateWithoutRecurrenceModelInput> | Due_BillsCreateWithoutRecurrenceModelInput[] | Due_BillsUncheckedCreateWithoutRecurrenceModelInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutRecurrenceModelInput | Due_BillsCreateOrConnectWithoutRecurrenceModelInput[]
    createMany?: Due_BillsCreateManyRecurrenceModelInputEnvelope
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
  }

  export type BillsUncheckedCreateNestedManyWithoutRecurrenceModelInput = {
    create?: XOR<BillsCreateWithoutRecurrenceModelInput, BillsUncheckedCreateWithoutRecurrenceModelInput> | BillsCreateWithoutRecurrenceModelInput[] | BillsUncheckedCreateWithoutRecurrenceModelInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutRecurrenceModelInput | BillsCreateOrConnectWithoutRecurrenceModelInput[]
    createMany?: BillsCreateManyRecurrenceModelInputEnvelope
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRecurrencesNestedInput = {
    create?: XOR<UserCreateWithoutRecurrencesInput, UserUncheckedCreateWithoutRecurrencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecurrencesInput
    upsert?: UserUpsertWithoutRecurrencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecurrencesInput, UserUpdateWithoutRecurrencesInput>, UserUncheckedUpdateWithoutRecurrencesInput>
  }

  export type Bank_AccountUpdateManyWithoutRecurrenceModelNestedInput = {
    create?: XOR<Bank_AccountCreateWithoutRecurrenceModelInput, Bank_AccountUncheckedCreateWithoutRecurrenceModelInput> | Bank_AccountCreateWithoutRecurrenceModelInput[] | Bank_AccountUncheckedCreateWithoutRecurrenceModelInput[]
    connectOrCreate?: Bank_AccountCreateOrConnectWithoutRecurrenceModelInput | Bank_AccountCreateOrConnectWithoutRecurrenceModelInput[]
    upsert?: Bank_AccountUpsertWithWhereUniqueWithoutRecurrenceModelInput | Bank_AccountUpsertWithWhereUniqueWithoutRecurrenceModelInput[]
    createMany?: Bank_AccountCreateManyRecurrenceModelInputEnvelope
    set?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
    disconnect?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
    delete?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
    connect?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
    update?: Bank_AccountUpdateWithWhereUniqueWithoutRecurrenceModelInput | Bank_AccountUpdateWithWhereUniqueWithoutRecurrenceModelInput[]
    updateMany?: Bank_AccountUpdateManyWithWhereWithoutRecurrenceModelInput | Bank_AccountUpdateManyWithWhereWithoutRecurrenceModelInput[]
    deleteMany?: Bank_AccountScalarWhereInput | Bank_AccountScalarWhereInput[]
  }

  export type Due_BillsUpdateManyWithoutRecurrenceModelNestedInput = {
    create?: XOR<Due_BillsCreateWithoutRecurrenceModelInput, Due_BillsUncheckedCreateWithoutRecurrenceModelInput> | Due_BillsCreateWithoutRecurrenceModelInput[] | Due_BillsUncheckedCreateWithoutRecurrenceModelInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutRecurrenceModelInput | Due_BillsCreateOrConnectWithoutRecurrenceModelInput[]
    upsert?: Due_BillsUpsertWithWhereUniqueWithoutRecurrenceModelInput | Due_BillsUpsertWithWhereUniqueWithoutRecurrenceModelInput[]
    createMany?: Due_BillsCreateManyRecurrenceModelInputEnvelope
    set?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    disconnect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    delete?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    update?: Due_BillsUpdateWithWhereUniqueWithoutRecurrenceModelInput | Due_BillsUpdateWithWhereUniqueWithoutRecurrenceModelInput[]
    updateMany?: Due_BillsUpdateManyWithWhereWithoutRecurrenceModelInput | Due_BillsUpdateManyWithWhereWithoutRecurrenceModelInput[]
    deleteMany?: Due_BillsScalarWhereInput | Due_BillsScalarWhereInput[]
  }

  export type BillsUpdateManyWithoutRecurrenceModelNestedInput = {
    create?: XOR<BillsCreateWithoutRecurrenceModelInput, BillsUncheckedCreateWithoutRecurrenceModelInput> | BillsCreateWithoutRecurrenceModelInput[] | BillsUncheckedCreateWithoutRecurrenceModelInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutRecurrenceModelInput | BillsCreateOrConnectWithoutRecurrenceModelInput[]
    upsert?: BillsUpsertWithWhereUniqueWithoutRecurrenceModelInput | BillsUpsertWithWhereUniqueWithoutRecurrenceModelInput[]
    createMany?: BillsCreateManyRecurrenceModelInputEnvelope
    set?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    disconnect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    delete?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    update?: BillsUpdateWithWhereUniqueWithoutRecurrenceModelInput | BillsUpdateWithWhereUniqueWithoutRecurrenceModelInput[]
    updateMany?: BillsUpdateManyWithWhereWithoutRecurrenceModelInput | BillsUpdateManyWithWhereWithoutRecurrenceModelInput[]
    deleteMany?: BillsScalarWhereInput | BillsScalarWhereInput[]
  }

  export type Bank_AccountUncheckedUpdateManyWithoutRecurrenceModelNestedInput = {
    create?: XOR<Bank_AccountCreateWithoutRecurrenceModelInput, Bank_AccountUncheckedCreateWithoutRecurrenceModelInput> | Bank_AccountCreateWithoutRecurrenceModelInput[] | Bank_AccountUncheckedCreateWithoutRecurrenceModelInput[]
    connectOrCreate?: Bank_AccountCreateOrConnectWithoutRecurrenceModelInput | Bank_AccountCreateOrConnectWithoutRecurrenceModelInput[]
    upsert?: Bank_AccountUpsertWithWhereUniqueWithoutRecurrenceModelInput | Bank_AccountUpsertWithWhereUniqueWithoutRecurrenceModelInput[]
    createMany?: Bank_AccountCreateManyRecurrenceModelInputEnvelope
    set?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
    disconnect?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
    delete?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
    connect?: Bank_AccountWhereUniqueInput | Bank_AccountWhereUniqueInput[]
    update?: Bank_AccountUpdateWithWhereUniqueWithoutRecurrenceModelInput | Bank_AccountUpdateWithWhereUniqueWithoutRecurrenceModelInput[]
    updateMany?: Bank_AccountUpdateManyWithWhereWithoutRecurrenceModelInput | Bank_AccountUpdateManyWithWhereWithoutRecurrenceModelInput[]
    deleteMany?: Bank_AccountScalarWhereInput | Bank_AccountScalarWhereInput[]
  }

  export type Due_BillsUncheckedUpdateManyWithoutRecurrenceModelNestedInput = {
    create?: XOR<Due_BillsCreateWithoutRecurrenceModelInput, Due_BillsUncheckedCreateWithoutRecurrenceModelInput> | Due_BillsCreateWithoutRecurrenceModelInput[] | Due_BillsUncheckedCreateWithoutRecurrenceModelInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutRecurrenceModelInput | Due_BillsCreateOrConnectWithoutRecurrenceModelInput[]
    upsert?: Due_BillsUpsertWithWhereUniqueWithoutRecurrenceModelInput | Due_BillsUpsertWithWhereUniqueWithoutRecurrenceModelInput[]
    createMany?: Due_BillsCreateManyRecurrenceModelInputEnvelope
    set?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    disconnect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    delete?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    update?: Due_BillsUpdateWithWhereUniqueWithoutRecurrenceModelInput | Due_BillsUpdateWithWhereUniqueWithoutRecurrenceModelInput[]
    updateMany?: Due_BillsUpdateManyWithWhereWithoutRecurrenceModelInput | Due_BillsUpdateManyWithWhereWithoutRecurrenceModelInput[]
    deleteMany?: Due_BillsScalarWhereInput | Due_BillsScalarWhereInput[]
  }

  export type BillsUncheckedUpdateManyWithoutRecurrenceModelNestedInput = {
    create?: XOR<BillsCreateWithoutRecurrenceModelInput, BillsUncheckedCreateWithoutRecurrenceModelInput> | BillsCreateWithoutRecurrenceModelInput[] | BillsUncheckedCreateWithoutRecurrenceModelInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutRecurrenceModelInput | BillsCreateOrConnectWithoutRecurrenceModelInput[]
    upsert?: BillsUpsertWithWhereUniqueWithoutRecurrenceModelInput | BillsUpsertWithWhereUniqueWithoutRecurrenceModelInput[]
    createMany?: BillsCreateManyRecurrenceModelInputEnvelope
    set?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    disconnect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    delete?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    update?: BillsUpdateWithWhereUniqueWithoutRecurrenceModelInput | BillsUpdateWithWhereUniqueWithoutRecurrenceModelInput[]
    updateMany?: BillsUpdateManyWithWhereWithoutRecurrenceModelInput | BillsUpdateManyWithWhereWithoutRecurrenceModelInput[]
    deleteMany?: BillsScalarWhereInput | BillsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type BillsCreateNestedManyWithoutCategoryModelInput = {
    create?: XOR<BillsCreateWithoutCategoryModelInput, BillsUncheckedCreateWithoutCategoryModelInput> | BillsCreateWithoutCategoryModelInput[] | BillsUncheckedCreateWithoutCategoryModelInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutCategoryModelInput | BillsCreateOrConnectWithoutCategoryModelInput[]
    createMany?: BillsCreateManyCategoryModelInputEnvelope
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
  }

  export type BillsUncheckedCreateNestedManyWithoutCategoryModelInput = {
    create?: XOR<BillsCreateWithoutCategoryModelInput, BillsUncheckedCreateWithoutCategoryModelInput> | BillsCreateWithoutCategoryModelInput[] | BillsUncheckedCreateWithoutCategoryModelInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutCategoryModelInput | BillsCreateOrConnectWithoutCategoryModelInput[]
    createMany?: BillsCreateManyCategoryModelInputEnvelope
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    upsert?: UserUpsertWithoutCategoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCategoriesInput, UserUpdateWithoutCategoriesInput>, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type BillsUpdateManyWithoutCategoryModelNestedInput = {
    create?: XOR<BillsCreateWithoutCategoryModelInput, BillsUncheckedCreateWithoutCategoryModelInput> | BillsCreateWithoutCategoryModelInput[] | BillsUncheckedCreateWithoutCategoryModelInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutCategoryModelInput | BillsCreateOrConnectWithoutCategoryModelInput[]
    upsert?: BillsUpsertWithWhereUniqueWithoutCategoryModelInput | BillsUpsertWithWhereUniqueWithoutCategoryModelInput[]
    createMany?: BillsCreateManyCategoryModelInputEnvelope
    set?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    disconnect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    delete?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    update?: BillsUpdateWithWhereUniqueWithoutCategoryModelInput | BillsUpdateWithWhereUniqueWithoutCategoryModelInput[]
    updateMany?: BillsUpdateManyWithWhereWithoutCategoryModelInput | BillsUpdateManyWithWhereWithoutCategoryModelInput[]
    deleteMany?: BillsScalarWhereInput | BillsScalarWhereInput[]
  }

  export type BillsUncheckedUpdateManyWithoutCategoryModelNestedInput = {
    create?: XOR<BillsCreateWithoutCategoryModelInput, BillsUncheckedCreateWithoutCategoryModelInput> | BillsCreateWithoutCategoryModelInput[] | BillsUncheckedCreateWithoutCategoryModelInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutCategoryModelInput | BillsCreateOrConnectWithoutCategoryModelInput[]
    upsert?: BillsUpsertWithWhereUniqueWithoutCategoryModelInput | BillsUpsertWithWhereUniqueWithoutCategoryModelInput[]
    createMany?: BillsCreateManyCategoryModelInputEnvelope
    set?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    disconnect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    delete?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    update?: BillsUpdateWithWhereUniqueWithoutCategoryModelInput | BillsUpdateWithWhereUniqueWithoutCategoryModelInput[]
    updateMany?: BillsUpdateManyWithWhereWithoutCategoryModelInput | BillsUpdateManyWithWhereWithoutCategoryModelInput[]
    deleteMany?: BillsScalarWhereInput | BillsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBankAccountsInput = {
    create?: XOR<UserCreateWithoutBankAccountsInput, UserUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBankAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type RecurrenceCreateNestedOneWithoutBankAccountsInput = {
    create?: XOR<RecurrenceCreateWithoutBankAccountsInput, RecurrenceUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: RecurrenceCreateOrConnectWithoutBankAccountsInput
    connect?: RecurrenceWhereUniqueInput
  }

  export type BillsCreateNestedManyWithoutDefaultDraftAccountInput = {
    create?: XOR<BillsCreateWithoutDefaultDraftAccountInput, BillsUncheckedCreateWithoutDefaultDraftAccountInput> | BillsCreateWithoutDefaultDraftAccountInput[] | BillsUncheckedCreateWithoutDefaultDraftAccountInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutDefaultDraftAccountInput | BillsCreateOrConnectWithoutDefaultDraftAccountInput[]
    createMany?: BillsCreateManyDefaultDraftAccountInputEnvelope
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
  }

  export type Due_BillsCreateNestedManyWithoutDraftAccountInput = {
    create?: XOR<Due_BillsCreateWithoutDraftAccountInput, Due_BillsUncheckedCreateWithoutDraftAccountInput> | Due_BillsCreateWithoutDraftAccountInput[] | Due_BillsUncheckedCreateWithoutDraftAccountInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutDraftAccountInput | Due_BillsCreateOrConnectWithoutDraftAccountInput[]
    createMany?: Due_BillsCreateManyDraftAccountInputEnvelope
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
  }

  export type Bank_Account_InstanceCreateNestedManyWithoutBankAccountInput = {
    create?: XOR<Bank_Account_InstanceCreateWithoutBankAccountInput, Bank_Account_InstanceUncheckedCreateWithoutBankAccountInput> | Bank_Account_InstanceCreateWithoutBankAccountInput[] | Bank_Account_InstanceUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: Bank_Account_InstanceCreateOrConnectWithoutBankAccountInput | Bank_Account_InstanceCreateOrConnectWithoutBankAccountInput[]
    createMany?: Bank_Account_InstanceCreateManyBankAccountInputEnvelope
    connect?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
  }

  export type BillsUncheckedCreateNestedManyWithoutDefaultDraftAccountInput = {
    create?: XOR<BillsCreateWithoutDefaultDraftAccountInput, BillsUncheckedCreateWithoutDefaultDraftAccountInput> | BillsCreateWithoutDefaultDraftAccountInput[] | BillsUncheckedCreateWithoutDefaultDraftAccountInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutDefaultDraftAccountInput | BillsCreateOrConnectWithoutDefaultDraftAccountInput[]
    createMany?: BillsCreateManyDefaultDraftAccountInputEnvelope
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
  }

  export type Due_BillsUncheckedCreateNestedManyWithoutDraftAccountInput = {
    create?: XOR<Due_BillsCreateWithoutDraftAccountInput, Due_BillsUncheckedCreateWithoutDraftAccountInput> | Due_BillsCreateWithoutDraftAccountInput[] | Due_BillsUncheckedCreateWithoutDraftAccountInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutDraftAccountInput | Due_BillsCreateOrConnectWithoutDraftAccountInput[]
    createMany?: Due_BillsCreateManyDraftAccountInputEnvelope
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
  }

  export type Bank_Account_InstanceUncheckedCreateNestedManyWithoutBankAccountInput = {
    create?: XOR<Bank_Account_InstanceCreateWithoutBankAccountInput, Bank_Account_InstanceUncheckedCreateWithoutBankAccountInput> | Bank_Account_InstanceCreateWithoutBankAccountInput[] | Bank_Account_InstanceUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: Bank_Account_InstanceCreateOrConnectWithoutBankAccountInput | Bank_Account_InstanceCreateOrConnectWithoutBankAccountInput[]
    createMany?: Bank_Account_InstanceCreateManyBankAccountInputEnvelope
    connect?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutBankAccountsNestedInput = {
    create?: XOR<UserCreateWithoutBankAccountsInput, UserUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBankAccountsInput
    upsert?: UserUpsertWithoutBankAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBankAccountsInput, UserUpdateWithoutBankAccountsInput>, UserUncheckedUpdateWithoutBankAccountsInput>
  }

  export type RecurrenceUpdateOneWithoutBankAccountsNestedInput = {
    create?: XOR<RecurrenceCreateWithoutBankAccountsInput, RecurrenceUncheckedCreateWithoutBankAccountsInput>
    connectOrCreate?: RecurrenceCreateOrConnectWithoutBankAccountsInput
    upsert?: RecurrenceUpsertWithoutBankAccountsInput
    disconnect?: RecurrenceWhereInput | boolean
    delete?: RecurrenceWhereInput | boolean
    connect?: RecurrenceWhereUniqueInput
    update?: XOR<XOR<RecurrenceUpdateToOneWithWhereWithoutBankAccountsInput, RecurrenceUpdateWithoutBankAccountsInput>, RecurrenceUncheckedUpdateWithoutBankAccountsInput>
  }

  export type BillsUpdateManyWithoutDefaultDraftAccountNestedInput = {
    create?: XOR<BillsCreateWithoutDefaultDraftAccountInput, BillsUncheckedCreateWithoutDefaultDraftAccountInput> | BillsCreateWithoutDefaultDraftAccountInput[] | BillsUncheckedCreateWithoutDefaultDraftAccountInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutDefaultDraftAccountInput | BillsCreateOrConnectWithoutDefaultDraftAccountInput[]
    upsert?: BillsUpsertWithWhereUniqueWithoutDefaultDraftAccountInput | BillsUpsertWithWhereUniqueWithoutDefaultDraftAccountInput[]
    createMany?: BillsCreateManyDefaultDraftAccountInputEnvelope
    set?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    disconnect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    delete?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    update?: BillsUpdateWithWhereUniqueWithoutDefaultDraftAccountInput | BillsUpdateWithWhereUniqueWithoutDefaultDraftAccountInput[]
    updateMany?: BillsUpdateManyWithWhereWithoutDefaultDraftAccountInput | BillsUpdateManyWithWhereWithoutDefaultDraftAccountInput[]
    deleteMany?: BillsScalarWhereInput | BillsScalarWhereInput[]
  }

  export type Due_BillsUpdateManyWithoutDraftAccountNestedInput = {
    create?: XOR<Due_BillsCreateWithoutDraftAccountInput, Due_BillsUncheckedCreateWithoutDraftAccountInput> | Due_BillsCreateWithoutDraftAccountInput[] | Due_BillsUncheckedCreateWithoutDraftAccountInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutDraftAccountInput | Due_BillsCreateOrConnectWithoutDraftAccountInput[]
    upsert?: Due_BillsUpsertWithWhereUniqueWithoutDraftAccountInput | Due_BillsUpsertWithWhereUniqueWithoutDraftAccountInput[]
    createMany?: Due_BillsCreateManyDraftAccountInputEnvelope
    set?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    disconnect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    delete?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    update?: Due_BillsUpdateWithWhereUniqueWithoutDraftAccountInput | Due_BillsUpdateWithWhereUniqueWithoutDraftAccountInput[]
    updateMany?: Due_BillsUpdateManyWithWhereWithoutDraftAccountInput | Due_BillsUpdateManyWithWhereWithoutDraftAccountInput[]
    deleteMany?: Due_BillsScalarWhereInput | Due_BillsScalarWhereInput[]
  }

  export type Bank_Account_InstanceUpdateManyWithoutBankAccountNestedInput = {
    create?: XOR<Bank_Account_InstanceCreateWithoutBankAccountInput, Bank_Account_InstanceUncheckedCreateWithoutBankAccountInput> | Bank_Account_InstanceCreateWithoutBankAccountInput[] | Bank_Account_InstanceUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: Bank_Account_InstanceCreateOrConnectWithoutBankAccountInput | Bank_Account_InstanceCreateOrConnectWithoutBankAccountInput[]
    upsert?: Bank_Account_InstanceUpsertWithWhereUniqueWithoutBankAccountInput | Bank_Account_InstanceUpsertWithWhereUniqueWithoutBankAccountInput[]
    createMany?: Bank_Account_InstanceCreateManyBankAccountInputEnvelope
    set?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    disconnect?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    delete?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    connect?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    update?: Bank_Account_InstanceUpdateWithWhereUniqueWithoutBankAccountInput | Bank_Account_InstanceUpdateWithWhereUniqueWithoutBankAccountInput[]
    updateMany?: Bank_Account_InstanceUpdateManyWithWhereWithoutBankAccountInput | Bank_Account_InstanceUpdateManyWithWhereWithoutBankAccountInput[]
    deleteMany?: Bank_Account_InstanceScalarWhereInput | Bank_Account_InstanceScalarWhereInput[]
  }

  export type BillsUncheckedUpdateManyWithoutDefaultDraftAccountNestedInput = {
    create?: XOR<BillsCreateWithoutDefaultDraftAccountInput, BillsUncheckedCreateWithoutDefaultDraftAccountInput> | BillsCreateWithoutDefaultDraftAccountInput[] | BillsUncheckedCreateWithoutDefaultDraftAccountInput[]
    connectOrCreate?: BillsCreateOrConnectWithoutDefaultDraftAccountInput | BillsCreateOrConnectWithoutDefaultDraftAccountInput[]
    upsert?: BillsUpsertWithWhereUniqueWithoutDefaultDraftAccountInput | BillsUpsertWithWhereUniqueWithoutDefaultDraftAccountInput[]
    createMany?: BillsCreateManyDefaultDraftAccountInputEnvelope
    set?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    disconnect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    delete?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    connect?: BillsWhereUniqueInput | BillsWhereUniqueInput[]
    update?: BillsUpdateWithWhereUniqueWithoutDefaultDraftAccountInput | BillsUpdateWithWhereUniqueWithoutDefaultDraftAccountInput[]
    updateMany?: BillsUpdateManyWithWhereWithoutDefaultDraftAccountInput | BillsUpdateManyWithWhereWithoutDefaultDraftAccountInput[]
    deleteMany?: BillsScalarWhereInput | BillsScalarWhereInput[]
  }

  export type Due_BillsUncheckedUpdateManyWithoutDraftAccountNestedInput = {
    create?: XOR<Due_BillsCreateWithoutDraftAccountInput, Due_BillsUncheckedCreateWithoutDraftAccountInput> | Due_BillsCreateWithoutDraftAccountInput[] | Due_BillsUncheckedCreateWithoutDraftAccountInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutDraftAccountInput | Due_BillsCreateOrConnectWithoutDraftAccountInput[]
    upsert?: Due_BillsUpsertWithWhereUniqueWithoutDraftAccountInput | Due_BillsUpsertWithWhereUniqueWithoutDraftAccountInput[]
    createMany?: Due_BillsCreateManyDraftAccountInputEnvelope
    set?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    disconnect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    delete?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    update?: Due_BillsUpdateWithWhereUniqueWithoutDraftAccountInput | Due_BillsUpdateWithWhereUniqueWithoutDraftAccountInput[]
    updateMany?: Due_BillsUpdateManyWithWhereWithoutDraftAccountInput | Due_BillsUpdateManyWithWhereWithoutDraftAccountInput[]
    deleteMany?: Due_BillsScalarWhereInput | Due_BillsScalarWhereInput[]
  }

  export type Bank_Account_InstanceUncheckedUpdateManyWithoutBankAccountNestedInput = {
    create?: XOR<Bank_Account_InstanceCreateWithoutBankAccountInput, Bank_Account_InstanceUncheckedCreateWithoutBankAccountInput> | Bank_Account_InstanceCreateWithoutBankAccountInput[] | Bank_Account_InstanceUncheckedCreateWithoutBankAccountInput[]
    connectOrCreate?: Bank_Account_InstanceCreateOrConnectWithoutBankAccountInput | Bank_Account_InstanceCreateOrConnectWithoutBankAccountInput[]
    upsert?: Bank_Account_InstanceUpsertWithWhereUniqueWithoutBankAccountInput | Bank_Account_InstanceUpsertWithWhereUniqueWithoutBankAccountInput[]
    createMany?: Bank_Account_InstanceCreateManyBankAccountInputEnvelope
    set?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    disconnect?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    delete?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    connect?: Bank_Account_InstanceWhereUniqueInput | Bank_Account_InstanceWhereUniqueInput[]
    update?: Bank_Account_InstanceUpdateWithWhereUniqueWithoutBankAccountInput | Bank_Account_InstanceUpdateWithWhereUniqueWithoutBankAccountInput[]
    updateMany?: Bank_Account_InstanceUpdateManyWithWhereWithoutBankAccountInput | Bank_Account_InstanceUpdateManyWithWhereWithoutBankAccountInput[]
    deleteMany?: Bank_Account_InstanceScalarWhereInput | Bank_Account_InstanceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBillsInput = {
    create?: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillsInput
    connect?: UserWhereUniqueInput
  }

  export type Bank_AccountCreateNestedOneWithoutBillsInput = {
    create?: XOR<Bank_AccountCreateWithoutBillsInput, Bank_AccountUncheckedCreateWithoutBillsInput>
    connectOrCreate?: Bank_AccountCreateOrConnectWithoutBillsInput
    connect?: Bank_AccountWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutBillsInput = {
    create?: XOR<CategoryCreateWithoutBillsInput, CategoryUncheckedCreateWithoutBillsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBillsInput
    connect?: CategoryWhereUniqueInput
  }

  export type RecurrenceCreateNestedOneWithoutBillsInput = {
    create?: XOR<RecurrenceCreateWithoutBillsInput, RecurrenceUncheckedCreateWithoutBillsInput>
    connectOrCreate?: RecurrenceCreateOrConnectWithoutBillsInput
    connect?: RecurrenceWhereUniqueInput
  }

  export type Due_BillsCreateNestedManyWithoutBillModelInput = {
    create?: XOR<Due_BillsCreateWithoutBillModelInput, Due_BillsUncheckedCreateWithoutBillModelInput> | Due_BillsCreateWithoutBillModelInput[] | Due_BillsUncheckedCreateWithoutBillModelInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutBillModelInput | Due_BillsCreateOrConnectWithoutBillModelInput[]
    createMany?: Due_BillsCreateManyBillModelInputEnvelope
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
  }

  export type Due_BillsUncheckedCreateNestedManyWithoutBillModelInput = {
    create?: XOR<Due_BillsCreateWithoutBillModelInput, Due_BillsUncheckedCreateWithoutBillModelInput> | Due_BillsCreateWithoutBillModelInput[] | Due_BillsUncheckedCreateWithoutBillModelInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutBillModelInput | Due_BillsCreateOrConnectWithoutBillModelInput[]
    createMany?: Due_BillsCreateManyBillModelInputEnvelope
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutBillsNestedInput = {
    create?: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBillsInput
    upsert?: UserUpsertWithoutBillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBillsInput, UserUpdateWithoutBillsInput>, UserUncheckedUpdateWithoutBillsInput>
  }

  export type Bank_AccountUpdateOneWithoutBillsNestedInput = {
    create?: XOR<Bank_AccountCreateWithoutBillsInput, Bank_AccountUncheckedCreateWithoutBillsInput>
    connectOrCreate?: Bank_AccountCreateOrConnectWithoutBillsInput
    upsert?: Bank_AccountUpsertWithoutBillsInput
    disconnect?: Bank_AccountWhereInput | boolean
    delete?: Bank_AccountWhereInput | boolean
    connect?: Bank_AccountWhereUniqueInput
    update?: XOR<XOR<Bank_AccountUpdateToOneWithWhereWithoutBillsInput, Bank_AccountUpdateWithoutBillsInput>, Bank_AccountUncheckedUpdateWithoutBillsInput>
  }

  export type CategoryUpdateOneWithoutBillsNestedInput = {
    create?: XOR<CategoryCreateWithoutBillsInput, CategoryUncheckedCreateWithoutBillsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBillsInput
    upsert?: CategoryUpsertWithoutBillsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBillsInput, CategoryUpdateWithoutBillsInput>, CategoryUncheckedUpdateWithoutBillsInput>
  }

  export type RecurrenceUpdateOneWithoutBillsNestedInput = {
    create?: XOR<RecurrenceCreateWithoutBillsInput, RecurrenceUncheckedCreateWithoutBillsInput>
    connectOrCreate?: RecurrenceCreateOrConnectWithoutBillsInput
    upsert?: RecurrenceUpsertWithoutBillsInput
    disconnect?: RecurrenceWhereInput | boolean
    delete?: RecurrenceWhereInput | boolean
    connect?: RecurrenceWhereUniqueInput
    update?: XOR<XOR<RecurrenceUpdateToOneWithWhereWithoutBillsInput, RecurrenceUpdateWithoutBillsInput>, RecurrenceUncheckedUpdateWithoutBillsInput>
  }

  export type Due_BillsUpdateManyWithoutBillModelNestedInput = {
    create?: XOR<Due_BillsCreateWithoutBillModelInput, Due_BillsUncheckedCreateWithoutBillModelInput> | Due_BillsCreateWithoutBillModelInput[] | Due_BillsUncheckedCreateWithoutBillModelInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutBillModelInput | Due_BillsCreateOrConnectWithoutBillModelInput[]
    upsert?: Due_BillsUpsertWithWhereUniqueWithoutBillModelInput | Due_BillsUpsertWithWhereUniqueWithoutBillModelInput[]
    createMany?: Due_BillsCreateManyBillModelInputEnvelope
    set?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    disconnect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    delete?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    update?: Due_BillsUpdateWithWhereUniqueWithoutBillModelInput | Due_BillsUpdateWithWhereUniqueWithoutBillModelInput[]
    updateMany?: Due_BillsUpdateManyWithWhereWithoutBillModelInput | Due_BillsUpdateManyWithWhereWithoutBillModelInput[]
    deleteMany?: Due_BillsScalarWhereInput | Due_BillsScalarWhereInput[]
  }

  export type Due_BillsUncheckedUpdateManyWithoutBillModelNestedInput = {
    create?: XOR<Due_BillsCreateWithoutBillModelInput, Due_BillsUncheckedCreateWithoutBillModelInput> | Due_BillsCreateWithoutBillModelInput[] | Due_BillsUncheckedCreateWithoutBillModelInput[]
    connectOrCreate?: Due_BillsCreateOrConnectWithoutBillModelInput | Due_BillsCreateOrConnectWithoutBillModelInput[]
    upsert?: Due_BillsUpsertWithWhereUniqueWithoutBillModelInput | Due_BillsUpsertWithWhereUniqueWithoutBillModelInput[]
    createMany?: Due_BillsCreateManyBillModelInputEnvelope
    set?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    disconnect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    delete?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    connect?: Due_BillsWhereUniqueInput | Due_BillsWhereUniqueInput[]
    update?: Due_BillsUpdateWithWhereUniqueWithoutBillModelInput | Due_BillsUpdateWithWhereUniqueWithoutBillModelInput[]
    updateMany?: Due_BillsUpdateManyWithWhereWithoutBillModelInput | Due_BillsUpdateManyWithWhereWithoutBillModelInput[]
    deleteMany?: Due_BillsScalarWhereInput | Due_BillsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDueBillsInput = {
    create?: XOR<UserCreateWithoutDueBillsInput, UserUncheckedCreateWithoutDueBillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDueBillsInput
    connect?: UserWhereUniqueInput
  }

  export type BillsCreateNestedOneWithoutDueBillsInput = {
    create?: XOR<BillsCreateWithoutDueBillsInput, BillsUncheckedCreateWithoutDueBillsInput>
    connectOrCreate?: BillsCreateOrConnectWithoutDueBillsInput
    connect?: BillsWhereUniqueInput
  }

  export type RecurrenceCreateNestedOneWithoutDueBillsInput = {
    create?: XOR<RecurrenceCreateWithoutDueBillsInput, RecurrenceUncheckedCreateWithoutDueBillsInput>
    connectOrCreate?: RecurrenceCreateOrConnectWithoutDueBillsInput
    connect?: RecurrenceWhereUniqueInput
  }

  export type Bill_StatusCreateNestedOneWithoutDueBillsInput = {
    create?: XOR<Bill_StatusCreateWithoutDueBillsInput, Bill_StatusUncheckedCreateWithoutDueBillsInput>
    connectOrCreate?: Bill_StatusCreateOrConnectWithoutDueBillsInput
    connect?: Bill_StatusWhereUniqueInput
  }

  export type Bank_AccountCreateNestedOneWithoutDueBillsInput = {
    create?: XOR<Bank_AccountCreateWithoutDueBillsInput, Bank_AccountUncheckedCreateWithoutDueBillsInput>
    connectOrCreate?: Bank_AccountCreateOrConnectWithoutDueBillsInput
    connect?: Bank_AccountWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDueBillsNestedInput = {
    create?: XOR<UserCreateWithoutDueBillsInput, UserUncheckedCreateWithoutDueBillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDueBillsInput
    upsert?: UserUpsertWithoutDueBillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDueBillsInput, UserUpdateWithoutDueBillsInput>, UserUncheckedUpdateWithoutDueBillsInput>
  }

  export type BillsUpdateOneWithoutDueBillsNestedInput = {
    create?: XOR<BillsCreateWithoutDueBillsInput, BillsUncheckedCreateWithoutDueBillsInput>
    connectOrCreate?: BillsCreateOrConnectWithoutDueBillsInput
    upsert?: BillsUpsertWithoutDueBillsInput
    disconnect?: BillsWhereInput | boolean
    delete?: BillsWhereInput | boolean
    connect?: BillsWhereUniqueInput
    update?: XOR<XOR<BillsUpdateToOneWithWhereWithoutDueBillsInput, BillsUpdateWithoutDueBillsInput>, BillsUncheckedUpdateWithoutDueBillsInput>
  }

  export type RecurrenceUpdateOneWithoutDueBillsNestedInput = {
    create?: XOR<RecurrenceCreateWithoutDueBillsInput, RecurrenceUncheckedCreateWithoutDueBillsInput>
    connectOrCreate?: RecurrenceCreateOrConnectWithoutDueBillsInput
    upsert?: RecurrenceUpsertWithoutDueBillsInput
    disconnect?: RecurrenceWhereInput | boolean
    delete?: RecurrenceWhereInput | boolean
    connect?: RecurrenceWhereUniqueInput
    update?: XOR<XOR<RecurrenceUpdateToOneWithWhereWithoutDueBillsInput, RecurrenceUpdateWithoutDueBillsInput>, RecurrenceUncheckedUpdateWithoutDueBillsInput>
  }

  export type Bill_StatusUpdateOneWithoutDueBillsNestedInput = {
    create?: XOR<Bill_StatusCreateWithoutDueBillsInput, Bill_StatusUncheckedCreateWithoutDueBillsInput>
    connectOrCreate?: Bill_StatusCreateOrConnectWithoutDueBillsInput
    upsert?: Bill_StatusUpsertWithoutDueBillsInput
    disconnect?: Bill_StatusWhereInput | boolean
    delete?: Bill_StatusWhereInput | boolean
    connect?: Bill_StatusWhereUniqueInput
    update?: XOR<XOR<Bill_StatusUpdateToOneWithWhereWithoutDueBillsInput, Bill_StatusUpdateWithoutDueBillsInput>, Bill_StatusUncheckedUpdateWithoutDueBillsInput>
  }

  export type Bank_AccountUpdateOneWithoutDueBillsNestedInput = {
    create?: XOR<Bank_AccountCreateWithoutDueBillsInput, Bank_AccountUncheckedCreateWithoutDueBillsInput>
    connectOrCreate?: Bank_AccountCreateOrConnectWithoutDueBillsInput
    upsert?: Bank_AccountUpsertWithoutDueBillsInput
    disconnect?: Bank_AccountWhereInput | boolean
    delete?: Bank_AccountWhereInput | boolean
    connect?: Bank_AccountWhereUniqueInput
    update?: XOR<XOR<Bank_AccountUpdateToOneWithWhereWithoutDueBillsInput, Bank_AccountUpdateWithoutDueBillsInput>, Bank_AccountUncheckedUpdateWithoutDueBillsInput>
  }

  export type UserCreateNestedOneWithoutBankAccountInstancesInput = {
    create?: XOR<UserCreateWithoutBankAccountInstancesInput, UserUncheckedCreateWithoutBankAccountInstancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBankAccountInstancesInput
    connect?: UserWhereUniqueInput
  }

  export type Bank_AccountCreateNestedOneWithoutBankAccountInstancesInput = {
    create?: XOR<Bank_AccountCreateWithoutBankAccountInstancesInput, Bank_AccountUncheckedCreateWithoutBankAccountInstancesInput>
    connectOrCreate?: Bank_AccountCreateOrConnectWithoutBankAccountInstancesInput
    connect?: Bank_AccountWhereUniqueInput
  }

  export type Bill_StatusCreateNestedOneWithoutBankAccountInstancesInput = {
    create?: XOR<Bill_StatusCreateWithoutBankAccountInstancesInput, Bill_StatusUncheckedCreateWithoutBankAccountInstancesInput>
    connectOrCreate?: Bill_StatusCreateOrConnectWithoutBankAccountInstancesInput
    connect?: Bill_StatusWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBankAccountInstancesNestedInput = {
    create?: XOR<UserCreateWithoutBankAccountInstancesInput, UserUncheckedCreateWithoutBankAccountInstancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBankAccountInstancesInput
    upsert?: UserUpsertWithoutBankAccountInstancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBankAccountInstancesInput, UserUpdateWithoutBankAccountInstancesInput>, UserUncheckedUpdateWithoutBankAccountInstancesInput>
  }

  export type Bank_AccountUpdateOneWithoutBankAccountInstancesNestedInput = {
    create?: XOR<Bank_AccountCreateWithoutBankAccountInstancesInput, Bank_AccountUncheckedCreateWithoutBankAccountInstancesInput>
    connectOrCreate?: Bank_AccountCreateOrConnectWithoutBankAccountInstancesInput
    upsert?: Bank_AccountUpsertWithoutBankAccountInstancesInput
    disconnect?: Bank_AccountWhereInput | boolean
    delete?: Bank_AccountWhereInput | boolean
    connect?: Bank_AccountWhereUniqueInput
    update?: XOR<XOR<Bank_AccountUpdateToOneWithWhereWithoutBankAccountInstancesInput, Bank_AccountUpdateWithoutBankAccountInstancesInput>, Bank_AccountUncheckedUpdateWithoutBankAccountInstancesInput>
  }

  export type Bill_StatusUpdateOneWithoutBankAccountInstancesNestedInput = {
    create?: XOR<Bill_StatusCreateWithoutBankAccountInstancesInput, Bill_StatusUncheckedCreateWithoutBankAccountInstancesInput>
    connectOrCreate?: Bill_StatusCreateOrConnectWithoutBankAccountInstancesInput
    upsert?: Bill_StatusUpsertWithoutBankAccountInstancesInput
    disconnect?: Bill_StatusWhereInput | boolean
    delete?: Bill_StatusWhereInput | boolean
    connect?: Bill_StatusWhereUniqueInput
    update?: XOR<XOR<Bill_StatusUpdateToOneWithWhereWithoutBankAccountInstancesInput, Bill_StatusUpdateWithoutBankAccountInstancesInput>, Bill_StatusUncheckedUpdateWithoutBankAccountInstancesInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Api_TokenCreateWithoutUserInput = {
    token: string
    issued_at?: Date | string
    expires_at?: Date | string | null
  }

  export type Api_TokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    issued_at?: Date | string
    expires_at?: Date | string | null
  }

  export type Api_TokenCreateOrConnectWithoutUserInput = {
    where: Api_TokenWhereUniqueInput
    create: XOR<Api_TokenCreateWithoutUserInput, Api_TokenUncheckedCreateWithoutUserInput>
  }

  export type Api_TokenCreateManyUserInputEnvelope = {
    data: Api_TokenCreateManyUserInput | Api_TokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OAuth_AccountCreateWithoutUserInput = {
    provider: string
    account_id: string
    created_at?: Date | string
  }

  export type OAuth_AccountUncheckedCreateWithoutUserInput = {
    id?: number
    provider: string
    account_id: string
    created_at?: Date | string
  }

  export type OAuth_AccountCreateOrConnectWithoutUserInput = {
    where: OAuth_AccountWhereUniqueInput
    create: XOR<OAuth_AccountCreateWithoutUserInput, OAuth_AccountUncheckedCreateWithoutUserInput>
  }

  export type OAuth_AccountCreateManyUserInputEnvelope = {
    data: OAuth_AccountCreateManyUserInput | OAuth_AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Bill_StatusCreateWithoutUserInput = {
    name: string
    archived?: boolean
    highlight_color_hex?: string | null
    dueBills?: Due_BillsCreateNestedManyWithoutStatusModelInput
    bankAccountInstances?: Bank_Account_InstanceCreateNestedManyWithoutStatusModelInput
  }

  export type Bill_StatusUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    archived?: boolean
    highlight_color_hex?: string | null
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutStatusModelInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedCreateNestedManyWithoutStatusModelInput
  }

  export type Bill_StatusCreateOrConnectWithoutUserInput = {
    where: Bill_StatusWhereUniqueInput
    create: XOR<Bill_StatusCreateWithoutUserInput, Bill_StatusUncheckedCreateWithoutUserInput>
  }

  export type Bill_StatusCreateManyUserInputEnvelope = {
    data: Bill_StatusCreateManyUserInput | Bill_StatusCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RecurrenceCreateWithoutUserInput = {
    name: string
    calculation?: string | null
    archived?: boolean
    bankAccounts?: Bank_AccountCreateNestedManyWithoutRecurrenceModelInput
    dueBills?: Due_BillsCreateNestedManyWithoutRecurrenceModelInput
    Bills?: BillsCreateNestedManyWithoutRecurrenceModelInput
  }

  export type RecurrenceUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    calculation?: string | null
    archived?: boolean
    bankAccounts?: Bank_AccountUncheckedCreateNestedManyWithoutRecurrenceModelInput
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutRecurrenceModelInput
    Bills?: BillsUncheckedCreateNestedManyWithoutRecurrenceModelInput
  }

  export type RecurrenceCreateOrConnectWithoutUserInput = {
    where: RecurrenceWhereUniqueInput
    create: XOR<RecurrenceCreateWithoutUserInput, RecurrenceUncheckedCreateWithoutUserInput>
  }

  export type RecurrenceCreateManyUserInputEnvelope = {
    data: RecurrenceCreateManyUserInput | RecurrenceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutUserInput = {
    name: string
    archived?: boolean
    bills?: BillsCreateNestedManyWithoutCategoryModelInput
  }

  export type CategoryUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    archived?: boolean
    bills?: BillsUncheckedCreateNestedManyWithoutCategoryModelInput
  }

  export type CategoryCreateOrConnectWithoutUserInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryCreateManyUserInputEnvelope = {
    data: CategoryCreateManyUserInput | CategoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Bank_AccountCreateWithoutUserInput = {
    name: string
    url?: string | null
    recurrence_value?: number | null
    archived?: boolean
    font_color_hex: string
    recurrenceModel?: RecurrenceCreateNestedOneWithoutBankAccountsInput
    bills?: BillsCreateNestedManyWithoutDefaultDraftAccountInput
    dueBills?: Due_BillsCreateNestedManyWithoutDraftAccountInput
    bankAccountInstances?: Bank_Account_InstanceCreateNestedManyWithoutBankAccountInput
  }

  export type Bank_AccountUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    url?: string | null
    recurrence?: number | null
    recurrence_value?: number | null
    archived?: boolean
    font_color_hex: string
    bills?: BillsUncheckedCreateNestedManyWithoutDefaultDraftAccountInput
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutDraftAccountInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type Bank_AccountCreateOrConnectWithoutUserInput = {
    where: Bank_AccountWhereUniqueInput
    create: XOR<Bank_AccountCreateWithoutUserInput, Bank_AccountUncheckedCreateWithoutUserInput>
  }

  export type Bank_AccountCreateManyUserInputEnvelope = {
    data: Bank_AccountCreateManyUserInput | Bank_AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BillsCreateWithoutUserInput = {
    name: string
    default_amount_due: Decimal | DecimalJsLike | number | string
    url?: string | null
    archived?: boolean
    recurrence_value?: number | null
    defaultDraftAccount?: Bank_AccountCreateNestedOneWithoutBillsInput
    categoryModel?: CategoryCreateNestedOneWithoutBillsInput
    recurrenceModel?: RecurrenceCreateNestedOneWithoutBillsInput
    dueBills?: Due_BillsCreateNestedManyWithoutBillModelInput
  }

  export type BillsUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    default_amount_due: Decimal | DecimalJsLike | number | string
    url?: string | null
    archived?: boolean
    default_draft_account?: number | null
    category?: number | null
    recurrence?: number | null
    recurrence_value?: number | null
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutBillModelInput
  }

  export type BillsCreateOrConnectWithoutUserInput = {
    where: BillsWhereUniqueInput
    create: XOR<BillsCreateWithoutUserInput, BillsUncheckedCreateWithoutUserInput>
  }

  export type BillsCreateManyUserInputEnvelope = {
    data: BillsCreateManyUserInput | BillsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Due_BillsCreateWithoutUserInput = {
    recurrence_value?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    min_amount_due: Decimal | DecimalJsLike | number | string
    total_amount_due: Decimal | DecimalJsLike | number | string
    archived?: boolean
    confirmation?: string | null
    notes?: string | null
    billModel?: BillsCreateNestedOneWithoutDueBillsInput
    recurrenceModel?: RecurrenceCreateNestedOneWithoutDueBillsInput
    statusModel?: Bill_StatusCreateNestedOneWithoutDueBillsInput
    draftAccount?: Bank_AccountCreateNestedOneWithoutDueBillsInput
  }

  export type Due_BillsUncheckedCreateWithoutUserInput = {
    id?: number
    bill?: number | null
    recurrence?: number | null
    recurrence_value?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    min_amount_due: Decimal | DecimalJsLike | number | string
    total_amount_due: Decimal | DecimalJsLike | number | string
    status?: number | null
    archived?: boolean
    confirmation?: string | null
    notes?: string | null
    draft_account?: number | null
  }

  export type Due_BillsCreateOrConnectWithoutUserInput = {
    where: Due_BillsWhereUniqueInput
    create: XOR<Due_BillsCreateWithoutUserInput, Due_BillsUncheckedCreateWithoutUserInput>
  }

  export type Due_BillsCreateManyUserInputEnvelope = {
    data: Due_BillsCreateManyUserInput | Due_BillsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Bank_Account_InstanceCreateWithoutUserInput = {
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    archived?: boolean
    current_balance: Decimal | DecimalJsLike | number | string
    bankAccount?: Bank_AccountCreateNestedOneWithoutBankAccountInstancesInput
    statusModel?: Bill_StatusCreateNestedOneWithoutBankAccountInstancesInput
  }

  export type Bank_Account_InstanceUncheckedCreateWithoutUserInput = {
    id?: number
    bank_account?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    status?: number | null
    archived?: boolean
    current_balance: Decimal | DecimalJsLike | number | string
  }

  export type Bank_Account_InstanceCreateOrConnectWithoutUserInput = {
    where: Bank_Account_InstanceWhereUniqueInput
    create: XOR<Bank_Account_InstanceCreateWithoutUserInput, Bank_Account_InstanceUncheckedCreateWithoutUserInput>
  }

  export type Bank_Account_InstanceCreateManyUserInputEnvelope = {
    data: Bank_Account_InstanceCreateManyUserInput | Bank_Account_InstanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Audit_LogCreateWithoutUserInput = {
    table_name: string
    row_id: number
    field_name: string
    action: string
    value_before_change?: string | null
    value_after_change?: string | null
    timestamp?: Date | string
  }

  export type Audit_LogUncheckedCreateWithoutUserInput = {
    id?: number
    table_name: string
    row_id: number
    field_name: string
    action: string
    value_before_change?: string | null
    value_after_change?: string | null
    timestamp?: Date | string
  }

  export type Audit_LogCreateOrConnectWithoutUserInput = {
    where: Audit_LogWhereUniqueInput
    create: XOR<Audit_LogCreateWithoutUserInput, Audit_LogUncheckedCreateWithoutUserInput>
  }

  export type Audit_LogCreateManyUserInputEnvelope = {
    data: Audit_LogCreateManyUserInput | Audit_LogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Api_TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: Api_TokenWhereUniqueInput
    update: XOR<Api_TokenUpdateWithoutUserInput, Api_TokenUncheckedUpdateWithoutUserInput>
    create: XOR<Api_TokenCreateWithoutUserInput, Api_TokenUncheckedCreateWithoutUserInput>
  }

  export type Api_TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: Api_TokenWhereUniqueInput
    data: XOR<Api_TokenUpdateWithoutUserInput, Api_TokenUncheckedUpdateWithoutUserInput>
  }

  export type Api_TokenUpdateManyWithWhereWithoutUserInput = {
    where: Api_TokenScalarWhereInput
    data: XOR<Api_TokenUpdateManyMutationInput, Api_TokenUncheckedUpdateManyWithoutUserInput>
  }

  export type Api_TokenScalarWhereInput = {
    AND?: Api_TokenScalarWhereInput | Api_TokenScalarWhereInput[]
    OR?: Api_TokenScalarWhereInput[]
    NOT?: Api_TokenScalarWhereInput | Api_TokenScalarWhereInput[]
    id?: IntFilter<"Api_Token"> | number
    user_id?: UuidFilter<"Api_Token"> | string
    token?: StringFilter<"Api_Token"> | string
    issued_at?: DateTimeFilter<"Api_Token"> | Date | string
    expires_at?: DateTimeNullableFilter<"Api_Token"> | Date | string | null
  }

  export type OAuth_AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: OAuth_AccountWhereUniqueInput
    update: XOR<OAuth_AccountUpdateWithoutUserInput, OAuth_AccountUncheckedUpdateWithoutUserInput>
    create: XOR<OAuth_AccountCreateWithoutUserInput, OAuth_AccountUncheckedCreateWithoutUserInput>
  }

  export type OAuth_AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: OAuth_AccountWhereUniqueInput
    data: XOR<OAuth_AccountUpdateWithoutUserInput, OAuth_AccountUncheckedUpdateWithoutUserInput>
  }

  export type OAuth_AccountUpdateManyWithWhereWithoutUserInput = {
    where: OAuth_AccountScalarWhereInput
    data: XOR<OAuth_AccountUpdateManyMutationInput, OAuth_AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type OAuth_AccountScalarWhereInput = {
    AND?: OAuth_AccountScalarWhereInput | OAuth_AccountScalarWhereInput[]
    OR?: OAuth_AccountScalarWhereInput[]
    NOT?: OAuth_AccountScalarWhereInput | OAuth_AccountScalarWhereInput[]
    id?: IntFilter<"OAuth_Account"> | number
    user_id?: UuidFilter<"OAuth_Account"> | string
    provider?: StringFilter<"OAuth_Account"> | string
    account_id?: StringFilter<"OAuth_Account"> | string
    created_at?: DateTimeFilter<"OAuth_Account"> | Date | string
  }

  export type Bill_StatusUpsertWithWhereUniqueWithoutUserInput = {
    where: Bill_StatusWhereUniqueInput
    update: XOR<Bill_StatusUpdateWithoutUserInput, Bill_StatusUncheckedUpdateWithoutUserInput>
    create: XOR<Bill_StatusCreateWithoutUserInput, Bill_StatusUncheckedCreateWithoutUserInput>
  }

  export type Bill_StatusUpdateWithWhereUniqueWithoutUserInput = {
    where: Bill_StatusWhereUniqueInput
    data: XOR<Bill_StatusUpdateWithoutUserInput, Bill_StatusUncheckedUpdateWithoutUserInput>
  }

  export type Bill_StatusUpdateManyWithWhereWithoutUserInput = {
    where: Bill_StatusScalarWhereInput
    data: XOR<Bill_StatusUpdateManyMutationInput, Bill_StatusUncheckedUpdateManyWithoutUserInput>
  }

  export type Bill_StatusScalarWhereInput = {
    AND?: Bill_StatusScalarWhereInput | Bill_StatusScalarWhereInput[]
    OR?: Bill_StatusScalarWhereInput[]
    NOT?: Bill_StatusScalarWhereInput | Bill_StatusScalarWhereInput[]
    id?: IntFilter<"Bill_Status"> | number
    user_id?: UuidFilter<"Bill_Status"> | string
    name?: StringFilter<"Bill_Status"> | string
    archived?: BoolFilter<"Bill_Status"> | boolean
    highlight_color_hex?: StringNullableFilter<"Bill_Status"> | string | null
  }

  export type RecurrenceUpsertWithWhereUniqueWithoutUserInput = {
    where: RecurrenceWhereUniqueInput
    update: XOR<RecurrenceUpdateWithoutUserInput, RecurrenceUncheckedUpdateWithoutUserInput>
    create: XOR<RecurrenceCreateWithoutUserInput, RecurrenceUncheckedCreateWithoutUserInput>
  }

  export type RecurrenceUpdateWithWhereUniqueWithoutUserInput = {
    where: RecurrenceWhereUniqueInput
    data: XOR<RecurrenceUpdateWithoutUserInput, RecurrenceUncheckedUpdateWithoutUserInput>
  }

  export type RecurrenceUpdateManyWithWhereWithoutUserInput = {
    where: RecurrenceScalarWhereInput
    data: XOR<RecurrenceUpdateManyMutationInput, RecurrenceUncheckedUpdateManyWithoutUserInput>
  }

  export type RecurrenceScalarWhereInput = {
    AND?: RecurrenceScalarWhereInput | RecurrenceScalarWhereInput[]
    OR?: RecurrenceScalarWhereInput[]
    NOT?: RecurrenceScalarWhereInput | RecurrenceScalarWhereInput[]
    id?: IntFilter<"Recurrence"> | number
    user_id?: UuidFilter<"Recurrence"> | string
    name?: StringFilter<"Recurrence"> | string
    calculation?: StringNullableFilter<"Recurrence"> | string | null
    archived?: BoolFilter<"Recurrence"> | boolean
  }

  export type CategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
  }

  export type CategoryUpdateManyWithWhereWithoutUserInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    user_id?: UuidFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    archived?: BoolFilter<"Category"> | boolean
  }

  export type Bank_AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: Bank_AccountWhereUniqueInput
    update: XOR<Bank_AccountUpdateWithoutUserInput, Bank_AccountUncheckedUpdateWithoutUserInput>
    create: XOR<Bank_AccountCreateWithoutUserInput, Bank_AccountUncheckedCreateWithoutUserInput>
  }

  export type Bank_AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: Bank_AccountWhereUniqueInput
    data: XOR<Bank_AccountUpdateWithoutUserInput, Bank_AccountUncheckedUpdateWithoutUserInput>
  }

  export type Bank_AccountUpdateManyWithWhereWithoutUserInput = {
    where: Bank_AccountScalarWhereInput
    data: XOR<Bank_AccountUpdateManyMutationInput, Bank_AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type Bank_AccountScalarWhereInput = {
    AND?: Bank_AccountScalarWhereInput | Bank_AccountScalarWhereInput[]
    OR?: Bank_AccountScalarWhereInput[]
    NOT?: Bank_AccountScalarWhereInput | Bank_AccountScalarWhereInput[]
    id?: IntFilter<"Bank_Account"> | number
    user_id?: UuidFilter<"Bank_Account"> | string
    name?: StringFilter<"Bank_Account"> | string
    url?: StringNullableFilter<"Bank_Account"> | string | null
    recurrence?: IntNullableFilter<"Bank_Account"> | number | null
    recurrence_value?: IntNullableFilter<"Bank_Account"> | number | null
    archived?: BoolFilter<"Bank_Account"> | boolean
    font_color_hex?: StringFilter<"Bank_Account"> | string
  }

  export type BillsUpsertWithWhereUniqueWithoutUserInput = {
    where: BillsWhereUniqueInput
    update: XOR<BillsUpdateWithoutUserInput, BillsUncheckedUpdateWithoutUserInput>
    create: XOR<BillsCreateWithoutUserInput, BillsUncheckedCreateWithoutUserInput>
  }

  export type BillsUpdateWithWhereUniqueWithoutUserInput = {
    where: BillsWhereUniqueInput
    data: XOR<BillsUpdateWithoutUserInput, BillsUncheckedUpdateWithoutUserInput>
  }

  export type BillsUpdateManyWithWhereWithoutUserInput = {
    where: BillsScalarWhereInput
    data: XOR<BillsUpdateManyMutationInput, BillsUncheckedUpdateManyWithoutUserInput>
  }

  export type BillsScalarWhereInput = {
    AND?: BillsScalarWhereInput | BillsScalarWhereInput[]
    OR?: BillsScalarWhereInput[]
    NOT?: BillsScalarWhereInput | BillsScalarWhereInput[]
    id?: IntFilter<"Bills"> | number
    user_id?: UuidFilter<"Bills"> | string
    name?: StringFilter<"Bills"> | string
    default_amount_due?: DecimalFilter<"Bills"> | Decimal | DecimalJsLike | number | string
    url?: StringNullableFilter<"Bills"> | string | null
    archived?: BoolFilter<"Bills"> | boolean
    default_draft_account?: IntNullableFilter<"Bills"> | number | null
    category?: IntNullableFilter<"Bills"> | number | null
    recurrence?: IntNullableFilter<"Bills"> | number | null
    recurrence_value?: IntNullableFilter<"Bills"> | number | null
  }

  export type Due_BillsUpsertWithWhereUniqueWithoutUserInput = {
    where: Due_BillsWhereUniqueInput
    update: XOR<Due_BillsUpdateWithoutUserInput, Due_BillsUncheckedUpdateWithoutUserInput>
    create: XOR<Due_BillsCreateWithoutUserInput, Due_BillsUncheckedCreateWithoutUserInput>
  }

  export type Due_BillsUpdateWithWhereUniqueWithoutUserInput = {
    where: Due_BillsWhereUniqueInput
    data: XOR<Due_BillsUpdateWithoutUserInput, Due_BillsUncheckedUpdateWithoutUserInput>
  }

  export type Due_BillsUpdateManyWithWhereWithoutUserInput = {
    where: Due_BillsScalarWhereInput
    data: XOR<Due_BillsUpdateManyMutationInput, Due_BillsUncheckedUpdateManyWithoutUserInput>
  }

  export type Due_BillsScalarWhereInput = {
    AND?: Due_BillsScalarWhereInput | Due_BillsScalarWhereInput[]
    OR?: Due_BillsScalarWhereInput[]
    NOT?: Due_BillsScalarWhereInput | Due_BillsScalarWhereInput[]
    id?: IntFilter<"Due_Bills"> | number
    user_id?: UuidFilter<"Due_Bills"> | string
    bill?: IntNullableFilter<"Due_Bills"> | number | null
    recurrence?: IntNullableFilter<"Due_Bills"> | number | null
    recurrence_value?: IntNullableFilter<"Due_Bills"> | number | null
    priority?: IntFilter<"Due_Bills"> | number
    due_date?: DateTimeFilter<"Due_Bills"> | Date | string
    pay_date?: DateTimeNullableFilter<"Due_Bills"> | Date | string | null
    min_amount_due?: DecimalFilter<"Due_Bills"> | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFilter<"Due_Bills"> | Decimal | DecimalJsLike | number | string
    status?: IntNullableFilter<"Due_Bills"> | number | null
    archived?: BoolFilter<"Due_Bills"> | boolean
    confirmation?: StringNullableFilter<"Due_Bills"> | string | null
    notes?: StringNullableFilter<"Due_Bills"> | string | null
    draft_account?: IntNullableFilter<"Due_Bills"> | number | null
  }

  export type Bank_Account_InstanceUpsertWithWhereUniqueWithoutUserInput = {
    where: Bank_Account_InstanceWhereUniqueInput
    update: XOR<Bank_Account_InstanceUpdateWithoutUserInput, Bank_Account_InstanceUncheckedUpdateWithoutUserInput>
    create: XOR<Bank_Account_InstanceCreateWithoutUserInput, Bank_Account_InstanceUncheckedCreateWithoutUserInput>
  }

  export type Bank_Account_InstanceUpdateWithWhereUniqueWithoutUserInput = {
    where: Bank_Account_InstanceWhereUniqueInput
    data: XOR<Bank_Account_InstanceUpdateWithoutUserInput, Bank_Account_InstanceUncheckedUpdateWithoutUserInput>
  }

  export type Bank_Account_InstanceUpdateManyWithWhereWithoutUserInput = {
    where: Bank_Account_InstanceScalarWhereInput
    data: XOR<Bank_Account_InstanceUpdateManyMutationInput, Bank_Account_InstanceUncheckedUpdateManyWithoutUserInput>
  }

  export type Bank_Account_InstanceScalarWhereInput = {
    AND?: Bank_Account_InstanceScalarWhereInput | Bank_Account_InstanceScalarWhereInput[]
    OR?: Bank_Account_InstanceScalarWhereInput[]
    NOT?: Bank_Account_InstanceScalarWhereInput | Bank_Account_InstanceScalarWhereInput[]
    id?: IntFilter<"Bank_Account_Instance"> | number
    user_id?: UuidFilter<"Bank_Account_Instance"> | string
    bank_account?: IntNullableFilter<"Bank_Account_Instance"> | number | null
    priority?: IntFilter<"Bank_Account_Instance"> | number
    due_date?: DateTimeFilter<"Bank_Account_Instance"> | Date | string
    pay_date?: DateTimeNullableFilter<"Bank_Account_Instance"> | Date | string | null
    status?: IntNullableFilter<"Bank_Account_Instance"> | number | null
    archived?: BoolFilter<"Bank_Account_Instance"> | boolean
    current_balance?: DecimalFilter<"Bank_Account_Instance"> | Decimal | DecimalJsLike | number | string
  }

  export type Audit_LogUpsertWithWhereUniqueWithoutUserInput = {
    where: Audit_LogWhereUniqueInput
    update: XOR<Audit_LogUpdateWithoutUserInput, Audit_LogUncheckedUpdateWithoutUserInput>
    create: XOR<Audit_LogCreateWithoutUserInput, Audit_LogUncheckedCreateWithoutUserInput>
  }

  export type Audit_LogUpdateWithWhereUniqueWithoutUserInput = {
    where: Audit_LogWhereUniqueInput
    data: XOR<Audit_LogUpdateWithoutUserInput, Audit_LogUncheckedUpdateWithoutUserInput>
  }

  export type Audit_LogUpdateManyWithWhereWithoutUserInput = {
    where: Audit_LogScalarWhereInput
    data: XOR<Audit_LogUpdateManyMutationInput, Audit_LogUncheckedUpdateManyWithoutUserInput>
  }

  export type Audit_LogScalarWhereInput = {
    AND?: Audit_LogScalarWhereInput | Audit_LogScalarWhereInput[]
    OR?: Audit_LogScalarWhereInput[]
    NOT?: Audit_LogScalarWhereInput | Audit_LogScalarWhereInput[]
    id?: IntFilter<"Audit_Log"> | number
    user_id?: UuidFilter<"Audit_Log"> | string
    table_name?: StringFilter<"Audit_Log"> | string
    row_id?: IntFilter<"Audit_Log"> | number
    field_name?: StringFilter<"Audit_Log"> | string
    action?: StringFilter<"Audit_Log"> | string
    value_before_change?: StringNullableFilter<"Audit_Log"> | string | null
    value_after_change?: StringNullableFilter<"Audit_Log"> | string | null
    timestamp?: DateTimeFilter<"Audit_Log"> | Date | string
  }

  export type UserCreateWithoutApiTokensInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    oauthAccounts?: OAuth_AccountCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountCreateNestedManyWithoutUserInput
    bills?: BillsCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApiTokensInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    oauthAccounts?: OAuth_AccountUncheckedCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusUncheckedCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountUncheckedCreateNestedManyWithoutUserInput
    bills?: BillsUncheckedCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApiTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiTokensInput, UserUncheckedCreateWithoutApiTokensInput>
  }

  export type UserUpsertWithoutApiTokensInput = {
    update: XOR<UserUpdateWithoutApiTokensInput, UserUncheckedUpdateWithoutApiTokensInput>
    create: XOR<UserCreateWithoutApiTokensInput, UserUncheckedCreateWithoutApiTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApiTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApiTokensInput, UserUncheckedUpdateWithoutApiTokensInput>
  }

  export type UserUpdateWithoutApiTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthAccounts?: OAuth_AccountUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUpdateManyWithoutUserNestedInput
    bills?: BillsUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApiTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthAccounts?: OAuth_AccountUncheckedUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUncheckedUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillsUncheckedUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUncheckedUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOauthAccountsInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountCreateNestedManyWithoutUserInput
    bills?: BillsCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOauthAccountsInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenUncheckedCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusUncheckedCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountUncheckedCreateNestedManyWithoutUserInput
    bills?: BillsUncheckedCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOauthAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
  }

  export type UserUpsertWithoutOauthAccountsInput = {
    update: XOR<UserUpdateWithoutOauthAccountsInput, UserUncheckedUpdateWithoutOauthAccountsInput>
    create: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOauthAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOauthAccountsInput, UserUncheckedUpdateWithoutOauthAccountsInput>
  }

  export type UserUpdateWithoutOauthAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUpdateManyWithoutUserNestedInput
    bills?: BillsUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOauthAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUncheckedUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUncheckedUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillsUncheckedUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUncheckedUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBillStatusesInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuth_AccountCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountCreateNestedManyWithoutUserInput
    bills?: BillsCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBillStatusesInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenUncheckedCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuth_AccountUncheckedCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountUncheckedCreateNestedManyWithoutUserInput
    bills?: BillsUncheckedCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBillStatusesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBillStatusesInput, UserUncheckedCreateWithoutBillStatusesInput>
  }

  export type Due_BillsCreateWithoutStatusModelInput = {
    recurrence_value?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    min_amount_due: Decimal | DecimalJsLike | number | string
    total_amount_due: Decimal | DecimalJsLike | number | string
    archived?: boolean
    confirmation?: string | null
    notes?: string | null
    user: UserCreateNestedOneWithoutDueBillsInput
    billModel?: BillsCreateNestedOneWithoutDueBillsInput
    recurrenceModel?: RecurrenceCreateNestedOneWithoutDueBillsInput
    draftAccount?: Bank_AccountCreateNestedOneWithoutDueBillsInput
  }

  export type Due_BillsUncheckedCreateWithoutStatusModelInput = {
    id?: number
    user_id: string
    bill?: number | null
    recurrence?: number | null
    recurrence_value?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    min_amount_due: Decimal | DecimalJsLike | number | string
    total_amount_due: Decimal | DecimalJsLike | number | string
    archived?: boolean
    confirmation?: string | null
    notes?: string | null
    draft_account?: number | null
  }

  export type Due_BillsCreateOrConnectWithoutStatusModelInput = {
    where: Due_BillsWhereUniqueInput
    create: XOR<Due_BillsCreateWithoutStatusModelInput, Due_BillsUncheckedCreateWithoutStatusModelInput>
  }

  export type Due_BillsCreateManyStatusModelInputEnvelope = {
    data: Due_BillsCreateManyStatusModelInput | Due_BillsCreateManyStatusModelInput[]
    skipDuplicates?: boolean
  }

  export type Bank_Account_InstanceCreateWithoutStatusModelInput = {
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    archived?: boolean
    current_balance: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutBankAccountInstancesInput
    bankAccount?: Bank_AccountCreateNestedOneWithoutBankAccountInstancesInput
  }

  export type Bank_Account_InstanceUncheckedCreateWithoutStatusModelInput = {
    id?: number
    user_id: string
    bank_account?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    archived?: boolean
    current_balance: Decimal | DecimalJsLike | number | string
  }

  export type Bank_Account_InstanceCreateOrConnectWithoutStatusModelInput = {
    where: Bank_Account_InstanceWhereUniqueInput
    create: XOR<Bank_Account_InstanceCreateWithoutStatusModelInput, Bank_Account_InstanceUncheckedCreateWithoutStatusModelInput>
  }

  export type Bank_Account_InstanceCreateManyStatusModelInputEnvelope = {
    data: Bank_Account_InstanceCreateManyStatusModelInput | Bank_Account_InstanceCreateManyStatusModelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBillStatusesInput = {
    update: XOR<UserUpdateWithoutBillStatusesInput, UserUncheckedUpdateWithoutBillStatusesInput>
    create: XOR<UserCreateWithoutBillStatusesInput, UserUncheckedCreateWithoutBillStatusesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBillStatusesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBillStatusesInput, UserUncheckedUpdateWithoutBillStatusesInput>
  }

  export type UserUpdateWithoutBillStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuth_AccountUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUpdateManyWithoutUserNestedInput
    bills?: BillsUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBillStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUncheckedUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuth_AccountUncheckedUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillsUncheckedUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUncheckedUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Due_BillsUpsertWithWhereUniqueWithoutStatusModelInput = {
    where: Due_BillsWhereUniqueInput
    update: XOR<Due_BillsUpdateWithoutStatusModelInput, Due_BillsUncheckedUpdateWithoutStatusModelInput>
    create: XOR<Due_BillsCreateWithoutStatusModelInput, Due_BillsUncheckedCreateWithoutStatusModelInput>
  }

  export type Due_BillsUpdateWithWhereUniqueWithoutStatusModelInput = {
    where: Due_BillsWhereUniqueInput
    data: XOR<Due_BillsUpdateWithoutStatusModelInput, Due_BillsUncheckedUpdateWithoutStatusModelInput>
  }

  export type Due_BillsUpdateManyWithWhereWithoutStatusModelInput = {
    where: Due_BillsScalarWhereInput
    data: XOR<Due_BillsUpdateManyMutationInput, Due_BillsUncheckedUpdateManyWithoutStatusModelInput>
  }

  export type Bank_Account_InstanceUpsertWithWhereUniqueWithoutStatusModelInput = {
    where: Bank_Account_InstanceWhereUniqueInput
    update: XOR<Bank_Account_InstanceUpdateWithoutStatusModelInput, Bank_Account_InstanceUncheckedUpdateWithoutStatusModelInput>
    create: XOR<Bank_Account_InstanceCreateWithoutStatusModelInput, Bank_Account_InstanceUncheckedCreateWithoutStatusModelInput>
  }

  export type Bank_Account_InstanceUpdateWithWhereUniqueWithoutStatusModelInput = {
    where: Bank_Account_InstanceWhereUniqueInput
    data: XOR<Bank_Account_InstanceUpdateWithoutStatusModelInput, Bank_Account_InstanceUncheckedUpdateWithoutStatusModelInput>
  }

  export type Bank_Account_InstanceUpdateManyWithWhereWithoutStatusModelInput = {
    where: Bank_Account_InstanceScalarWhereInput
    data: XOR<Bank_Account_InstanceUpdateManyMutationInput, Bank_Account_InstanceUncheckedUpdateManyWithoutStatusModelInput>
  }

  export type UserCreateWithoutRecurrencesInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuth_AccountCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountCreateNestedManyWithoutUserInput
    bills?: BillsCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecurrencesInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenUncheckedCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuth_AccountUncheckedCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountUncheckedCreateNestedManyWithoutUserInput
    bills?: BillsUncheckedCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecurrencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecurrencesInput, UserUncheckedCreateWithoutRecurrencesInput>
  }

  export type Bank_AccountCreateWithoutRecurrenceModelInput = {
    name: string
    url?: string | null
    recurrence_value?: number | null
    archived?: boolean
    font_color_hex: string
    user: UserCreateNestedOneWithoutBankAccountsInput
    bills?: BillsCreateNestedManyWithoutDefaultDraftAccountInput
    dueBills?: Due_BillsCreateNestedManyWithoutDraftAccountInput
    bankAccountInstances?: Bank_Account_InstanceCreateNestedManyWithoutBankAccountInput
  }

  export type Bank_AccountUncheckedCreateWithoutRecurrenceModelInput = {
    id?: number
    user_id: string
    name: string
    url?: string | null
    recurrence_value?: number | null
    archived?: boolean
    font_color_hex: string
    bills?: BillsUncheckedCreateNestedManyWithoutDefaultDraftAccountInput
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutDraftAccountInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type Bank_AccountCreateOrConnectWithoutRecurrenceModelInput = {
    where: Bank_AccountWhereUniqueInput
    create: XOR<Bank_AccountCreateWithoutRecurrenceModelInput, Bank_AccountUncheckedCreateWithoutRecurrenceModelInput>
  }

  export type Bank_AccountCreateManyRecurrenceModelInputEnvelope = {
    data: Bank_AccountCreateManyRecurrenceModelInput | Bank_AccountCreateManyRecurrenceModelInput[]
    skipDuplicates?: boolean
  }

  export type Due_BillsCreateWithoutRecurrenceModelInput = {
    recurrence_value?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    min_amount_due: Decimal | DecimalJsLike | number | string
    total_amount_due: Decimal | DecimalJsLike | number | string
    archived?: boolean
    confirmation?: string | null
    notes?: string | null
    user: UserCreateNestedOneWithoutDueBillsInput
    billModel?: BillsCreateNestedOneWithoutDueBillsInput
    statusModel?: Bill_StatusCreateNestedOneWithoutDueBillsInput
    draftAccount?: Bank_AccountCreateNestedOneWithoutDueBillsInput
  }

  export type Due_BillsUncheckedCreateWithoutRecurrenceModelInput = {
    id?: number
    user_id: string
    bill?: number | null
    recurrence_value?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    min_amount_due: Decimal | DecimalJsLike | number | string
    total_amount_due: Decimal | DecimalJsLike | number | string
    status?: number | null
    archived?: boolean
    confirmation?: string | null
    notes?: string | null
    draft_account?: number | null
  }

  export type Due_BillsCreateOrConnectWithoutRecurrenceModelInput = {
    where: Due_BillsWhereUniqueInput
    create: XOR<Due_BillsCreateWithoutRecurrenceModelInput, Due_BillsUncheckedCreateWithoutRecurrenceModelInput>
  }

  export type Due_BillsCreateManyRecurrenceModelInputEnvelope = {
    data: Due_BillsCreateManyRecurrenceModelInput | Due_BillsCreateManyRecurrenceModelInput[]
    skipDuplicates?: boolean
  }

  export type BillsCreateWithoutRecurrenceModelInput = {
    name: string
    default_amount_due: Decimal | DecimalJsLike | number | string
    url?: string | null
    archived?: boolean
    recurrence_value?: number | null
    user: UserCreateNestedOneWithoutBillsInput
    defaultDraftAccount?: Bank_AccountCreateNestedOneWithoutBillsInput
    categoryModel?: CategoryCreateNestedOneWithoutBillsInput
    dueBills?: Due_BillsCreateNestedManyWithoutBillModelInput
  }

  export type BillsUncheckedCreateWithoutRecurrenceModelInput = {
    id?: number
    user_id: string
    name: string
    default_amount_due: Decimal | DecimalJsLike | number | string
    url?: string | null
    archived?: boolean
    default_draft_account?: number | null
    category?: number | null
    recurrence_value?: number | null
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutBillModelInput
  }

  export type BillsCreateOrConnectWithoutRecurrenceModelInput = {
    where: BillsWhereUniqueInput
    create: XOR<BillsCreateWithoutRecurrenceModelInput, BillsUncheckedCreateWithoutRecurrenceModelInput>
  }

  export type BillsCreateManyRecurrenceModelInputEnvelope = {
    data: BillsCreateManyRecurrenceModelInput | BillsCreateManyRecurrenceModelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRecurrencesInput = {
    update: XOR<UserUpdateWithoutRecurrencesInput, UserUncheckedUpdateWithoutRecurrencesInput>
    create: XOR<UserCreateWithoutRecurrencesInput, UserUncheckedCreateWithoutRecurrencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecurrencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecurrencesInput, UserUncheckedUpdateWithoutRecurrencesInput>
  }

  export type UserUpdateWithoutRecurrencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuth_AccountUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUpdateManyWithoutUserNestedInput
    bills?: BillsUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecurrencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUncheckedUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuth_AccountUncheckedUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillsUncheckedUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUncheckedUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Bank_AccountUpsertWithWhereUniqueWithoutRecurrenceModelInput = {
    where: Bank_AccountWhereUniqueInput
    update: XOR<Bank_AccountUpdateWithoutRecurrenceModelInput, Bank_AccountUncheckedUpdateWithoutRecurrenceModelInput>
    create: XOR<Bank_AccountCreateWithoutRecurrenceModelInput, Bank_AccountUncheckedCreateWithoutRecurrenceModelInput>
  }

  export type Bank_AccountUpdateWithWhereUniqueWithoutRecurrenceModelInput = {
    where: Bank_AccountWhereUniqueInput
    data: XOR<Bank_AccountUpdateWithoutRecurrenceModelInput, Bank_AccountUncheckedUpdateWithoutRecurrenceModelInput>
  }

  export type Bank_AccountUpdateManyWithWhereWithoutRecurrenceModelInput = {
    where: Bank_AccountScalarWhereInput
    data: XOR<Bank_AccountUpdateManyMutationInput, Bank_AccountUncheckedUpdateManyWithoutRecurrenceModelInput>
  }

  export type Due_BillsUpsertWithWhereUniqueWithoutRecurrenceModelInput = {
    where: Due_BillsWhereUniqueInput
    update: XOR<Due_BillsUpdateWithoutRecurrenceModelInput, Due_BillsUncheckedUpdateWithoutRecurrenceModelInput>
    create: XOR<Due_BillsCreateWithoutRecurrenceModelInput, Due_BillsUncheckedCreateWithoutRecurrenceModelInput>
  }

  export type Due_BillsUpdateWithWhereUniqueWithoutRecurrenceModelInput = {
    where: Due_BillsWhereUniqueInput
    data: XOR<Due_BillsUpdateWithoutRecurrenceModelInput, Due_BillsUncheckedUpdateWithoutRecurrenceModelInput>
  }

  export type Due_BillsUpdateManyWithWhereWithoutRecurrenceModelInput = {
    where: Due_BillsScalarWhereInput
    data: XOR<Due_BillsUpdateManyMutationInput, Due_BillsUncheckedUpdateManyWithoutRecurrenceModelInput>
  }

  export type BillsUpsertWithWhereUniqueWithoutRecurrenceModelInput = {
    where: BillsWhereUniqueInput
    update: XOR<BillsUpdateWithoutRecurrenceModelInput, BillsUncheckedUpdateWithoutRecurrenceModelInput>
    create: XOR<BillsCreateWithoutRecurrenceModelInput, BillsUncheckedCreateWithoutRecurrenceModelInput>
  }

  export type BillsUpdateWithWhereUniqueWithoutRecurrenceModelInput = {
    where: BillsWhereUniqueInput
    data: XOR<BillsUpdateWithoutRecurrenceModelInput, BillsUncheckedUpdateWithoutRecurrenceModelInput>
  }

  export type BillsUpdateManyWithWhereWithoutRecurrenceModelInput = {
    where: BillsScalarWhereInput
    data: XOR<BillsUpdateManyMutationInput, BillsUncheckedUpdateManyWithoutRecurrenceModelInput>
  }

  export type UserCreateWithoutCategoriesInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuth_AccountCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountCreateNestedManyWithoutUserInput
    bills?: BillsCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCategoriesInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenUncheckedCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuth_AccountUncheckedCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusUncheckedCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceUncheckedCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountUncheckedCreateNestedManyWithoutUserInput
    bills?: BillsUncheckedCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
  }

  export type BillsCreateWithoutCategoryModelInput = {
    name: string
    default_amount_due: Decimal | DecimalJsLike | number | string
    url?: string | null
    archived?: boolean
    recurrence_value?: number | null
    user: UserCreateNestedOneWithoutBillsInput
    defaultDraftAccount?: Bank_AccountCreateNestedOneWithoutBillsInput
    recurrenceModel?: RecurrenceCreateNestedOneWithoutBillsInput
    dueBills?: Due_BillsCreateNestedManyWithoutBillModelInput
  }

  export type BillsUncheckedCreateWithoutCategoryModelInput = {
    id?: number
    user_id: string
    name: string
    default_amount_due: Decimal | DecimalJsLike | number | string
    url?: string | null
    archived?: boolean
    default_draft_account?: number | null
    recurrence?: number | null
    recurrence_value?: number | null
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutBillModelInput
  }

  export type BillsCreateOrConnectWithoutCategoryModelInput = {
    where: BillsWhereUniqueInput
    create: XOR<BillsCreateWithoutCategoryModelInput, BillsUncheckedCreateWithoutCategoryModelInput>
  }

  export type BillsCreateManyCategoryModelInputEnvelope = {
    data: BillsCreateManyCategoryModelInput | BillsCreateManyCategoryModelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCategoriesInput = {
    update: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type UserUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuth_AccountUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUpdateManyWithoutUserNestedInput
    bills?: BillsUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUncheckedUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuth_AccountUncheckedUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUncheckedUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUncheckedUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillsUncheckedUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUncheckedUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BillsUpsertWithWhereUniqueWithoutCategoryModelInput = {
    where: BillsWhereUniqueInput
    update: XOR<BillsUpdateWithoutCategoryModelInput, BillsUncheckedUpdateWithoutCategoryModelInput>
    create: XOR<BillsCreateWithoutCategoryModelInput, BillsUncheckedCreateWithoutCategoryModelInput>
  }

  export type BillsUpdateWithWhereUniqueWithoutCategoryModelInput = {
    where: BillsWhereUniqueInput
    data: XOR<BillsUpdateWithoutCategoryModelInput, BillsUncheckedUpdateWithoutCategoryModelInput>
  }

  export type BillsUpdateManyWithWhereWithoutCategoryModelInput = {
    where: BillsScalarWhereInput
    data: XOR<BillsUpdateManyMutationInput, BillsUncheckedUpdateManyWithoutCategoryModelInput>
  }

  export type UserCreateWithoutBankAccountsInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuth_AccountCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    bills?: BillsCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBankAccountsInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenUncheckedCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuth_AccountUncheckedCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusUncheckedCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    bills?: BillsUncheckedCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBankAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBankAccountsInput, UserUncheckedCreateWithoutBankAccountsInput>
  }

  export type RecurrenceCreateWithoutBankAccountsInput = {
    name: string
    calculation?: string | null
    archived?: boolean
    user: UserCreateNestedOneWithoutRecurrencesInput
    dueBills?: Due_BillsCreateNestedManyWithoutRecurrenceModelInput
    Bills?: BillsCreateNestedManyWithoutRecurrenceModelInput
  }

  export type RecurrenceUncheckedCreateWithoutBankAccountsInput = {
    id?: number
    user_id: string
    name: string
    calculation?: string | null
    archived?: boolean
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutRecurrenceModelInput
    Bills?: BillsUncheckedCreateNestedManyWithoutRecurrenceModelInput
  }

  export type RecurrenceCreateOrConnectWithoutBankAccountsInput = {
    where: RecurrenceWhereUniqueInput
    create: XOR<RecurrenceCreateWithoutBankAccountsInput, RecurrenceUncheckedCreateWithoutBankAccountsInput>
  }

  export type BillsCreateWithoutDefaultDraftAccountInput = {
    name: string
    default_amount_due: Decimal | DecimalJsLike | number | string
    url?: string | null
    archived?: boolean
    recurrence_value?: number | null
    user: UserCreateNestedOneWithoutBillsInput
    categoryModel?: CategoryCreateNestedOneWithoutBillsInput
    recurrenceModel?: RecurrenceCreateNestedOneWithoutBillsInput
    dueBills?: Due_BillsCreateNestedManyWithoutBillModelInput
  }

  export type BillsUncheckedCreateWithoutDefaultDraftAccountInput = {
    id?: number
    user_id: string
    name: string
    default_amount_due: Decimal | DecimalJsLike | number | string
    url?: string | null
    archived?: boolean
    category?: number | null
    recurrence?: number | null
    recurrence_value?: number | null
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutBillModelInput
  }

  export type BillsCreateOrConnectWithoutDefaultDraftAccountInput = {
    where: BillsWhereUniqueInput
    create: XOR<BillsCreateWithoutDefaultDraftAccountInput, BillsUncheckedCreateWithoutDefaultDraftAccountInput>
  }

  export type BillsCreateManyDefaultDraftAccountInputEnvelope = {
    data: BillsCreateManyDefaultDraftAccountInput | BillsCreateManyDefaultDraftAccountInput[]
    skipDuplicates?: boolean
  }

  export type Due_BillsCreateWithoutDraftAccountInput = {
    recurrence_value?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    min_amount_due: Decimal | DecimalJsLike | number | string
    total_amount_due: Decimal | DecimalJsLike | number | string
    archived?: boolean
    confirmation?: string | null
    notes?: string | null
    user: UserCreateNestedOneWithoutDueBillsInput
    billModel?: BillsCreateNestedOneWithoutDueBillsInput
    recurrenceModel?: RecurrenceCreateNestedOneWithoutDueBillsInput
    statusModel?: Bill_StatusCreateNestedOneWithoutDueBillsInput
  }

  export type Due_BillsUncheckedCreateWithoutDraftAccountInput = {
    id?: number
    user_id: string
    bill?: number | null
    recurrence?: number | null
    recurrence_value?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    min_amount_due: Decimal | DecimalJsLike | number | string
    total_amount_due: Decimal | DecimalJsLike | number | string
    status?: number | null
    archived?: boolean
    confirmation?: string | null
    notes?: string | null
  }

  export type Due_BillsCreateOrConnectWithoutDraftAccountInput = {
    where: Due_BillsWhereUniqueInput
    create: XOR<Due_BillsCreateWithoutDraftAccountInput, Due_BillsUncheckedCreateWithoutDraftAccountInput>
  }

  export type Due_BillsCreateManyDraftAccountInputEnvelope = {
    data: Due_BillsCreateManyDraftAccountInput | Due_BillsCreateManyDraftAccountInput[]
    skipDuplicates?: boolean
  }

  export type Bank_Account_InstanceCreateWithoutBankAccountInput = {
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    archived?: boolean
    current_balance: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutBankAccountInstancesInput
    statusModel?: Bill_StatusCreateNestedOneWithoutBankAccountInstancesInput
  }

  export type Bank_Account_InstanceUncheckedCreateWithoutBankAccountInput = {
    id?: number
    user_id: string
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    status?: number | null
    archived?: boolean
    current_balance: Decimal | DecimalJsLike | number | string
  }

  export type Bank_Account_InstanceCreateOrConnectWithoutBankAccountInput = {
    where: Bank_Account_InstanceWhereUniqueInput
    create: XOR<Bank_Account_InstanceCreateWithoutBankAccountInput, Bank_Account_InstanceUncheckedCreateWithoutBankAccountInput>
  }

  export type Bank_Account_InstanceCreateManyBankAccountInputEnvelope = {
    data: Bank_Account_InstanceCreateManyBankAccountInput | Bank_Account_InstanceCreateManyBankAccountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBankAccountsInput = {
    update: XOR<UserUpdateWithoutBankAccountsInput, UserUncheckedUpdateWithoutBankAccountsInput>
    create: XOR<UserCreateWithoutBankAccountsInput, UserUncheckedCreateWithoutBankAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBankAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBankAccountsInput, UserUncheckedUpdateWithoutBankAccountsInput>
  }

  export type UserUpdateWithoutBankAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuth_AccountUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    bills?: BillsUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBankAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUncheckedUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuth_AccountUncheckedUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUncheckedUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillsUncheckedUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUncheckedUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RecurrenceUpsertWithoutBankAccountsInput = {
    update: XOR<RecurrenceUpdateWithoutBankAccountsInput, RecurrenceUncheckedUpdateWithoutBankAccountsInput>
    create: XOR<RecurrenceCreateWithoutBankAccountsInput, RecurrenceUncheckedCreateWithoutBankAccountsInput>
    where?: RecurrenceWhereInput
  }

  export type RecurrenceUpdateToOneWithWhereWithoutBankAccountsInput = {
    where?: RecurrenceWhereInput
    data: XOR<RecurrenceUpdateWithoutBankAccountsInput, RecurrenceUncheckedUpdateWithoutBankAccountsInput>
  }

  export type RecurrenceUpdateWithoutBankAccountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    calculation?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutRecurrencesNestedInput
    dueBills?: Due_BillsUpdateManyWithoutRecurrenceModelNestedInput
    Bills?: BillsUpdateManyWithoutRecurrenceModelNestedInput
  }

  export type RecurrenceUncheckedUpdateWithoutBankAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calculation?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    dueBills?: Due_BillsUncheckedUpdateManyWithoutRecurrenceModelNestedInput
    Bills?: BillsUncheckedUpdateManyWithoutRecurrenceModelNestedInput
  }

  export type BillsUpsertWithWhereUniqueWithoutDefaultDraftAccountInput = {
    where: BillsWhereUniqueInput
    update: XOR<BillsUpdateWithoutDefaultDraftAccountInput, BillsUncheckedUpdateWithoutDefaultDraftAccountInput>
    create: XOR<BillsCreateWithoutDefaultDraftAccountInput, BillsUncheckedCreateWithoutDefaultDraftAccountInput>
  }

  export type BillsUpdateWithWhereUniqueWithoutDefaultDraftAccountInput = {
    where: BillsWhereUniqueInput
    data: XOR<BillsUpdateWithoutDefaultDraftAccountInput, BillsUncheckedUpdateWithoutDefaultDraftAccountInput>
  }

  export type BillsUpdateManyWithWhereWithoutDefaultDraftAccountInput = {
    where: BillsScalarWhereInput
    data: XOR<BillsUpdateManyMutationInput, BillsUncheckedUpdateManyWithoutDefaultDraftAccountInput>
  }

  export type Due_BillsUpsertWithWhereUniqueWithoutDraftAccountInput = {
    where: Due_BillsWhereUniqueInput
    update: XOR<Due_BillsUpdateWithoutDraftAccountInput, Due_BillsUncheckedUpdateWithoutDraftAccountInput>
    create: XOR<Due_BillsCreateWithoutDraftAccountInput, Due_BillsUncheckedCreateWithoutDraftAccountInput>
  }

  export type Due_BillsUpdateWithWhereUniqueWithoutDraftAccountInput = {
    where: Due_BillsWhereUniqueInput
    data: XOR<Due_BillsUpdateWithoutDraftAccountInput, Due_BillsUncheckedUpdateWithoutDraftAccountInput>
  }

  export type Due_BillsUpdateManyWithWhereWithoutDraftAccountInput = {
    where: Due_BillsScalarWhereInput
    data: XOR<Due_BillsUpdateManyMutationInput, Due_BillsUncheckedUpdateManyWithoutDraftAccountInput>
  }

  export type Bank_Account_InstanceUpsertWithWhereUniqueWithoutBankAccountInput = {
    where: Bank_Account_InstanceWhereUniqueInput
    update: XOR<Bank_Account_InstanceUpdateWithoutBankAccountInput, Bank_Account_InstanceUncheckedUpdateWithoutBankAccountInput>
    create: XOR<Bank_Account_InstanceCreateWithoutBankAccountInput, Bank_Account_InstanceUncheckedCreateWithoutBankAccountInput>
  }

  export type Bank_Account_InstanceUpdateWithWhereUniqueWithoutBankAccountInput = {
    where: Bank_Account_InstanceWhereUniqueInput
    data: XOR<Bank_Account_InstanceUpdateWithoutBankAccountInput, Bank_Account_InstanceUncheckedUpdateWithoutBankAccountInput>
  }

  export type Bank_Account_InstanceUpdateManyWithWhereWithoutBankAccountInput = {
    where: Bank_Account_InstanceScalarWhereInput
    data: XOR<Bank_Account_InstanceUpdateManyMutationInput, Bank_Account_InstanceUncheckedUpdateManyWithoutBankAccountInput>
  }

  export type UserCreateWithoutBillsInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuth_AccountCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBillsInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenUncheckedCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuth_AccountUncheckedCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusUncheckedCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountUncheckedCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
  }

  export type Bank_AccountCreateWithoutBillsInput = {
    name: string
    url?: string | null
    recurrence_value?: number | null
    archived?: boolean
    font_color_hex: string
    user: UserCreateNestedOneWithoutBankAccountsInput
    recurrenceModel?: RecurrenceCreateNestedOneWithoutBankAccountsInput
    dueBills?: Due_BillsCreateNestedManyWithoutDraftAccountInput
    bankAccountInstances?: Bank_Account_InstanceCreateNestedManyWithoutBankAccountInput
  }

  export type Bank_AccountUncheckedCreateWithoutBillsInput = {
    id?: number
    user_id: string
    name: string
    url?: string | null
    recurrence?: number | null
    recurrence_value?: number | null
    archived?: boolean
    font_color_hex: string
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutDraftAccountInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type Bank_AccountCreateOrConnectWithoutBillsInput = {
    where: Bank_AccountWhereUniqueInput
    create: XOR<Bank_AccountCreateWithoutBillsInput, Bank_AccountUncheckedCreateWithoutBillsInput>
  }

  export type CategoryCreateWithoutBillsInput = {
    name: string
    archived?: boolean
    user: UserCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutBillsInput = {
    id?: number
    user_id: string
    name: string
    archived?: boolean
  }

  export type CategoryCreateOrConnectWithoutBillsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBillsInput, CategoryUncheckedCreateWithoutBillsInput>
  }

  export type RecurrenceCreateWithoutBillsInput = {
    name: string
    calculation?: string | null
    archived?: boolean
    user: UserCreateNestedOneWithoutRecurrencesInput
    bankAccounts?: Bank_AccountCreateNestedManyWithoutRecurrenceModelInput
    dueBills?: Due_BillsCreateNestedManyWithoutRecurrenceModelInput
  }

  export type RecurrenceUncheckedCreateWithoutBillsInput = {
    id?: number
    user_id: string
    name: string
    calculation?: string | null
    archived?: boolean
    bankAccounts?: Bank_AccountUncheckedCreateNestedManyWithoutRecurrenceModelInput
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutRecurrenceModelInput
  }

  export type RecurrenceCreateOrConnectWithoutBillsInput = {
    where: RecurrenceWhereUniqueInput
    create: XOR<RecurrenceCreateWithoutBillsInput, RecurrenceUncheckedCreateWithoutBillsInput>
  }

  export type Due_BillsCreateWithoutBillModelInput = {
    recurrence_value?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    min_amount_due: Decimal | DecimalJsLike | number | string
    total_amount_due: Decimal | DecimalJsLike | number | string
    archived?: boolean
    confirmation?: string | null
    notes?: string | null
    user: UserCreateNestedOneWithoutDueBillsInput
    recurrenceModel?: RecurrenceCreateNestedOneWithoutDueBillsInput
    statusModel?: Bill_StatusCreateNestedOneWithoutDueBillsInput
    draftAccount?: Bank_AccountCreateNestedOneWithoutDueBillsInput
  }

  export type Due_BillsUncheckedCreateWithoutBillModelInput = {
    id?: number
    user_id: string
    recurrence?: number | null
    recurrence_value?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    min_amount_due: Decimal | DecimalJsLike | number | string
    total_amount_due: Decimal | DecimalJsLike | number | string
    status?: number | null
    archived?: boolean
    confirmation?: string | null
    notes?: string | null
    draft_account?: number | null
  }

  export type Due_BillsCreateOrConnectWithoutBillModelInput = {
    where: Due_BillsWhereUniqueInput
    create: XOR<Due_BillsCreateWithoutBillModelInput, Due_BillsUncheckedCreateWithoutBillModelInput>
  }

  export type Due_BillsCreateManyBillModelInputEnvelope = {
    data: Due_BillsCreateManyBillModelInput | Due_BillsCreateManyBillModelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBillsInput = {
    update: XOR<UserUpdateWithoutBillsInput, UserUncheckedUpdateWithoutBillsInput>
    create: XOR<UserCreateWithoutBillsInput, UserUncheckedCreateWithoutBillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBillsInput, UserUncheckedUpdateWithoutBillsInput>
  }

  export type UserUpdateWithoutBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuth_AccountUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUncheckedUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuth_AccountUncheckedUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUncheckedUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUncheckedUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUncheckedUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Bank_AccountUpsertWithoutBillsInput = {
    update: XOR<Bank_AccountUpdateWithoutBillsInput, Bank_AccountUncheckedUpdateWithoutBillsInput>
    create: XOR<Bank_AccountCreateWithoutBillsInput, Bank_AccountUncheckedCreateWithoutBillsInput>
    where?: Bank_AccountWhereInput
  }

  export type Bank_AccountUpdateToOneWithWhereWithoutBillsInput = {
    where?: Bank_AccountWhereInput
    data: XOR<Bank_AccountUpdateWithoutBillsInput, Bank_AccountUncheckedUpdateWithoutBillsInput>
  }

  export type Bank_AccountUpdateWithoutBillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    font_color_hex?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBankAccountsNestedInput
    recurrenceModel?: RecurrenceUpdateOneWithoutBankAccountsNestedInput
    dueBills?: Due_BillsUpdateManyWithoutDraftAccountNestedInput
    bankAccountInstances?: Bank_Account_InstanceUpdateManyWithoutBankAccountNestedInput
  }

  export type Bank_AccountUncheckedUpdateWithoutBillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    font_color_hex?: StringFieldUpdateOperationsInput | string
    dueBills?: Due_BillsUncheckedUpdateManyWithoutDraftAccountNestedInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type CategoryUpsertWithoutBillsInput = {
    update: XOR<CategoryUpdateWithoutBillsInput, CategoryUncheckedUpdateWithoutBillsInput>
    create: XOR<CategoryCreateWithoutBillsInput, CategoryUncheckedCreateWithoutBillsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBillsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBillsInput, CategoryUncheckedUpdateWithoutBillsInput>
  }

  export type CategoryUpdateWithoutBillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecurrenceUpsertWithoutBillsInput = {
    update: XOR<RecurrenceUpdateWithoutBillsInput, RecurrenceUncheckedUpdateWithoutBillsInput>
    create: XOR<RecurrenceCreateWithoutBillsInput, RecurrenceUncheckedCreateWithoutBillsInput>
    where?: RecurrenceWhereInput
  }

  export type RecurrenceUpdateToOneWithWhereWithoutBillsInput = {
    where?: RecurrenceWhereInput
    data: XOR<RecurrenceUpdateWithoutBillsInput, RecurrenceUncheckedUpdateWithoutBillsInput>
  }

  export type RecurrenceUpdateWithoutBillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    calculation?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutRecurrencesNestedInput
    bankAccounts?: Bank_AccountUpdateManyWithoutRecurrenceModelNestedInput
    dueBills?: Due_BillsUpdateManyWithoutRecurrenceModelNestedInput
  }

  export type RecurrenceUncheckedUpdateWithoutBillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calculation?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    bankAccounts?: Bank_AccountUncheckedUpdateManyWithoutRecurrenceModelNestedInput
    dueBills?: Due_BillsUncheckedUpdateManyWithoutRecurrenceModelNestedInput
  }

  export type Due_BillsUpsertWithWhereUniqueWithoutBillModelInput = {
    where: Due_BillsWhereUniqueInput
    update: XOR<Due_BillsUpdateWithoutBillModelInput, Due_BillsUncheckedUpdateWithoutBillModelInput>
    create: XOR<Due_BillsCreateWithoutBillModelInput, Due_BillsUncheckedCreateWithoutBillModelInput>
  }

  export type Due_BillsUpdateWithWhereUniqueWithoutBillModelInput = {
    where: Due_BillsWhereUniqueInput
    data: XOR<Due_BillsUpdateWithoutBillModelInput, Due_BillsUncheckedUpdateWithoutBillModelInput>
  }

  export type Due_BillsUpdateManyWithWhereWithoutBillModelInput = {
    where: Due_BillsScalarWhereInput
    data: XOR<Due_BillsUpdateManyMutationInput, Due_BillsUncheckedUpdateManyWithoutBillModelInput>
  }

  export type UserCreateWithoutDueBillsInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuth_AccountCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountCreateNestedManyWithoutUserInput
    bills?: BillsCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDueBillsInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenUncheckedCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuth_AccountUncheckedCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusUncheckedCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountUncheckedCreateNestedManyWithoutUserInput
    bills?: BillsUncheckedCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDueBillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDueBillsInput, UserUncheckedCreateWithoutDueBillsInput>
  }

  export type BillsCreateWithoutDueBillsInput = {
    name: string
    default_amount_due: Decimal | DecimalJsLike | number | string
    url?: string | null
    archived?: boolean
    recurrence_value?: number | null
    user: UserCreateNestedOneWithoutBillsInput
    defaultDraftAccount?: Bank_AccountCreateNestedOneWithoutBillsInput
    categoryModel?: CategoryCreateNestedOneWithoutBillsInput
    recurrenceModel?: RecurrenceCreateNestedOneWithoutBillsInput
  }

  export type BillsUncheckedCreateWithoutDueBillsInput = {
    id?: number
    user_id: string
    name: string
    default_amount_due: Decimal | DecimalJsLike | number | string
    url?: string | null
    archived?: boolean
    default_draft_account?: number | null
    category?: number | null
    recurrence?: number | null
    recurrence_value?: number | null
  }

  export type BillsCreateOrConnectWithoutDueBillsInput = {
    where: BillsWhereUniqueInput
    create: XOR<BillsCreateWithoutDueBillsInput, BillsUncheckedCreateWithoutDueBillsInput>
  }

  export type RecurrenceCreateWithoutDueBillsInput = {
    name: string
    calculation?: string | null
    archived?: boolean
    user: UserCreateNestedOneWithoutRecurrencesInput
    bankAccounts?: Bank_AccountCreateNestedManyWithoutRecurrenceModelInput
    Bills?: BillsCreateNestedManyWithoutRecurrenceModelInput
  }

  export type RecurrenceUncheckedCreateWithoutDueBillsInput = {
    id?: number
    user_id: string
    name: string
    calculation?: string | null
    archived?: boolean
    bankAccounts?: Bank_AccountUncheckedCreateNestedManyWithoutRecurrenceModelInput
    Bills?: BillsUncheckedCreateNestedManyWithoutRecurrenceModelInput
  }

  export type RecurrenceCreateOrConnectWithoutDueBillsInput = {
    where: RecurrenceWhereUniqueInput
    create: XOR<RecurrenceCreateWithoutDueBillsInput, RecurrenceUncheckedCreateWithoutDueBillsInput>
  }

  export type Bill_StatusCreateWithoutDueBillsInput = {
    name: string
    archived?: boolean
    highlight_color_hex?: string | null
    user: UserCreateNestedOneWithoutBillStatusesInput
    bankAccountInstances?: Bank_Account_InstanceCreateNestedManyWithoutStatusModelInput
  }

  export type Bill_StatusUncheckedCreateWithoutDueBillsInput = {
    id?: number
    user_id: string
    name: string
    archived?: boolean
    highlight_color_hex?: string | null
    bankAccountInstances?: Bank_Account_InstanceUncheckedCreateNestedManyWithoutStatusModelInput
  }

  export type Bill_StatusCreateOrConnectWithoutDueBillsInput = {
    where: Bill_StatusWhereUniqueInput
    create: XOR<Bill_StatusCreateWithoutDueBillsInput, Bill_StatusUncheckedCreateWithoutDueBillsInput>
  }

  export type Bank_AccountCreateWithoutDueBillsInput = {
    name: string
    url?: string | null
    recurrence_value?: number | null
    archived?: boolean
    font_color_hex: string
    user: UserCreateNestedOneWithoutBankAccountsInput
    recurrenceModel?: RecurrenceCreateNestedOneWithoutBankAccountsInput
    bills?: BillsCreateNestedManyWithoutDefaultDraftAccountInput
    bankAccountInstances?: Bank_Account_InstanceCreateNestedManyWithoutBankAccountInput
  }

  export type Bank_AccountUncheckedCreateWithoutDueBillsInput = {
    id?: number
    user_id: string
    name: string
    url?: string | null
    recurrence?: number | null
    recurrence_value?: number | null
    archived?: boolean
    font_color_hex: string
    bills?: BillsUncheckedCreateNestedManyWithoutDefaultDraftAccountInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedCreateNestedManyWithoutBankAccountInput
  }

  export type Bank_AccountCreateOrConnectWithoutDueBillsInput = {
    where: Bank_AccountWhereUniqueInput
    create: XOR<Bank_AccountCreateWithoutDueBillsInput, Bank_AccountUncheckedCreateWithoutDueBillsInput>
  }

  export type UserUpsertWithoutDueBillsInput = {
    update: XOR<UserUpdateWithoutDueBillsInput, UserUncheckedUpdateWithoutDueBillsInput>
    create: XOR<UserCreateWithoutDueBillsInput, UserUncheckedCreateWithoutDueBillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDueBillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDueBillsInput, UserUncheckedUpdateWithoutDueBillsInput>
  }

  export type UserUpdateWithoutDueBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuth_AccountUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUpdateManyWithoutUserNestedInput
    bills?: BillsUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDueBillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUncheckedUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuth_AccountUncheckedUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUncheckedUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillsUncheckedUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BillsUpsertWithoutDueBillsInput = {
    update: XOR<BillsUpdateWithoutDueBillsInput, BillsUncheckedUpdateWithoutDueBillsInput>
    create: XOR<BillsCreateWithoutDueBillsInput, BillsUncheckedCreateWithoutDueBillsInput>
    where?: BillsWhereInput
  }

  export type BillsUpdateToOneWithWhereWithoutDueBillsInput = {
    where?: BillsWhereInput
    data: XOR<BillsUpdateWithoutDueBillsInput, BillsUncheckedUpdateWithoutDueBillsInput>
  }

  export type BillsUpdateWithoutDueBillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    default_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutBillsNestedInput
    defaultDraftAccount?: Bank_AccountUpdateOneWithoutBillsNestedInput
    categoryModel?: CategoryUpdateOneWithoutBillsNestedInput
    recurrenceModel?: RecurrenceUpdateOneWithoutBillsNestedInput
  }

  export type BillsUncheckedUpdateWithoutDueBillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    default_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    default_draft_account?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RecurrenceUpsertWithoutDueBillsInput = {
    update: XOR<RecurrenceUpdateWithoutDueBillsInput, RecurrenceUncheckedUpdateWithoutDueBillsInput>
    create: XOR<RecurrenceCreateWithoutDueBillsInput, RecurrenceUncheckedCreateWithoutDueBillsInput>
    where?: RecurrenceWhereInput
  }

  export type RecurrenceUpdateToOneWithWhereWithoutDueBillsInput = {
    where?: RecurrenceWhereInput
    data: XOR<RecurrenceUpdateWithoutDueBillsInput, RecurrenceUncheckedUpdateWithoutDueBillsInput>
  }

  export type RecurrenceUpdateWithoutDueBillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    calculation?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutRecurrencesNestedInput
    bankAccounts?: Bank_AccountUpdateManyWithoutRecurrenceModelNestedInput
    Bills?: BillsUpdateManyWithoutRecurrenceModelNestedInput
  }

  export type RecurrenceUncheckedUpdateWithoutDueBillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calculation?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    bankAccounts?: Bank_AccountUncheckedUpdateManyWithoutRecurrenceModelNestedInput
    Bills?: BillsUncheckedUpdateManyWithoutRecurrenceModelNestedInput
  }

  export type Bill_StatusUpsertWithoutDueBillsInput = {
    update: XOR<Bill_StatusUpdateWithoutDueBillsInput, Bill_StatusUncheckedUpdateWithoutDueBillsInput>
    create: XOR<Bill_StatusCreateWithoutDueBillsInput, Bill_StatusUncheckedCreateWithoutDueBillsInput>
    where?: Bill_StatusWhereInput
  }

  export type Bill_StatusUpdateToOneWithWhereWithoutDueBillsInput = {
    where?: Bill_StatusWhereInput
    data: XOR<Bill_StatusUpdateWithoutDueBillsInput, Bill_StatusUncheckedUpdateWithoutDueBillsInput>
  }

  export type Bill_StatusUpdateWithoutDueBillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    highlight_color_hex?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutBillStatusesNestedInput
    bankAccountInstances?: Bank_Account_InstanceUpdateManyWithoutStatusModelNestedInput
  }

  export type Bill_StatusUncheckedUpdateWithoutDueBillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    highlight_color_hex?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccountInstances?: Bank_Account_InstanceUncheckedUpdateManyWithoutStatusModelNestedInput
  }

  export type Bank_AccountUpsertWithoutDueBillsInput = {
    update: XOR<Bank_AccountUpdateWithoutDueBillsInput, Bank_AccountUncheckedUpdateWithoutDueBillsInput>
    create: XOR<Bank_AccountCreateWithoutDueBillsInput, Bank_AccountUncheckedCreateWithoutDueBillsInput>
    where?: Bank_AccountWhereInput
  }

  export type Bank_AccountUpdateToOneWithWhereWithoutDueBillsInput = {
    where?: Bank_AccountWhereInput
    data: XOR<Bank_AccountUpdateWithoutDueBillsInput, Bank_AccountUncheckedUpdateWithoutDueBillsInput>
  }

  export type Bank_AccountUpdateWithoutDueBillsInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    font_color_hex?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBankAccountsNestedInput
    recurrenceModel?: RecurrenceUpdateOneWithoutBankAccountsNestedInput
    bills?: BillsUpdateManyWithoutDefaultDraftAccountNestedInput
    bankAccountInstances?: Bank_Account_InstanceUpdateManyWithoutBankAccountNestedInput
  }

  export type Bank_AccountUncheckedUpdateWithoutDueBillsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    font_color_hex?: StringFieldUpdateOperationsInput | string
    bills?: BillsUncheckedUpdateManyWithoutDefaultDraftAccountNestedInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type UserCreateWithoutBankAccountInstancesInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuth_AccountCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountCreateNestedManyWithoutUserInput
    bills?: BillsCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBankAccountInstancesInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenUncheckedCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuth_AccountUncheckedCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusUncheckedCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountUncheckedCreateNestedManyWithoutUserInput
    bills?: BillsUncheckedCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: Audit_LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBankAccountInstancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBankAccountInstancesInput, UserUncheckedCreateWithoutBankAccountInstancesInput>
  }

  export type Bank_AccountCreateWithoutBankAccountInstancesInput = {
    name: string
    url?: string | null
    recurrence_value?: number | null
    archived?: boolean
    font_color_hex: string
    user: UserCreateNestedOneWithoutBankAccountsInput
    recurrenceModel?: RecurrenceCreateNestedOneWithoutBankAccountsInput
    bills?: BillsCreateNestedManyWithoutDefaultDraftAccountInput
    dueBills?: Due_BillsCreateNestedManyWithoutDraftAccountInput
  }

  export type Bank_AccountUncheckedCreateWithoutBankAccountInstancesInput = {
    id?: number
    user_id: string
    name: string
    url?: string | null
    recurrence?: number | null
    recurrence_value?: number | null
    archived?: boolean
    font_color_hex: string
    bills?: BillsUncheckedCreateNestedManyWithoutDefaultDraftAccountInput
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutDraftAccountInput
  }

  export type Bank_AccountCreateOrConnectWithoutBankAccountInstancesInput = {
    where: Bank_AccountWhereUniqueInput
    create: XOR<Bank_AccountCreateWithoutBankAccountInstancesInput, Bank_AccountUncheckedCreateWithoutBankAccountInstancesInput>
  }

  export type Bill_StatusCreateWithoutBankAccountInstancesInput = {
    name: string
    archived?: boolean
    highlight_color_hex?: string | null
    user: UserCreateNestedOneWithoutBillStatusesInput
    dueBills?: Due_BillsCreateNestedManyWithoutStatusModelInput
  }

  export type Bill_StatusUncheckedCreateWithoutBankAccountInstancesInput = {
    id?: number
    user_id: string
    name: string
    archived?: boolean
    highlight_color_hex?: string | null
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutStatusModelInput
  }

  export type Bill_StatusCreateOrConnectWithoutBankAccountInstancesInput = {
    where: Bill_StatusWhereUniqueInput
    create: XOR<Bill_StatusCreateWithoutBankAccountInstancesInput, Bill_StatusUncheckedCreateWithoutBankAccountInstancesInput>
  }

  export type UserUpsertWithoutBankAccountInstancesInput = {
    update: XOR<UserUpdateWithoutBankAccountInstancesInput, UserUncheckedUpdateWithoutBankAccountInstancesInput>
    create: XOR<UserCreateWithoutBankAccountInstancesInput, UserUncheckedCreateWithoutBankAccountInstancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBankAccountInstancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBankAccountInstancesInput, UserUncheckedUpdateWithoutBankAccountInstancesInput>
  }

  export type UserUpdateWithoutBankAccountInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuth_AccountUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUpdateManyWithoutUserNestedInput
    bills?: BillsUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBankAccountInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUncheckedUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuth_AccountUncheckedUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUncheckedUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillsUncheckedUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: Audit_LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Bank_AccountUpsertWithoutBankAccountInstancesInput = {
    update: XOR<Bank_AccountUpdateWithoutBankAccountInstancesInput, Bank_AccountUncheckedUpdateWithoutBankAccountInstancesInput>
    create: XOR<Bank_AccountCreateWithoutBankAccountInstancesInput, Bank_AccountUncheckedCreateWithoutBankAccountInstancesInput>
    where?: Bank_AccountWhereInput
  }

  export type Bank_AccountUpdateToOneWithWhereWithoutBankAccountInstancesInput = {
    where?: Bank_AccountWhereInput
    data: XOR<Bank_AccountUpdateWithoutBankAccountInstancesInput, Bank_AccountUncheckedUpdateWithoutBankAccountInstancesInput>
  }

  export type Bank_AccountUpdateWithoutBankAccountInstancesInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    font_color_hex?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBankAccountsNestedInput
    recurrenceModel?: RecurrenceUpdateOneWithoutBankAccountsNestedInput
    bills?: BillsUpdateManyWithoutDefaultDraftAccountNestedInput
    dueBills?: Due_BillsUpdateManyWithoutDraftAccountNestedInput
  }

  export type Bank_AccountUncheckedUpdateWithoutBankAccountInstancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    font_color_hex?: StringFieldUpdateOperationsInput | string
    bills?: BillsUncheckedUpdateManyWithoutDefaultDraftAccountNestedInput
    dueBills?: Due_BillsUncheckedUpdateManyWithoutDraftAccountNestedInput
  }

  export type Bill_StatusUpsertWithoutBankAccountInstancesInput = {
    update: XOR<Bill_StatusUpdateWithoutBankAccountInstancesInput, Bill_StatusUncheckedUpdateWithoutBankAccountInstancesInput>
    create: XOR<Bill_StatusCreateWithoutBankAccountInstancesInput, Bill_StatusUncheckedCreateWithoutBankAccountInstancesInput>
    where?: Bill_StatusWhereInput
  }

  export type Bill_StatusUpdateToOneWithWhereWithoutBankAccountInstancesInput = {
    where?: Bill_StatusWhereInput
    data: XOR<Bill_StatusUpdateWithoutBankAccountInstancesInput, Bill_StatusUncheckedUpdateWithoutBankAccountInstancesInput>
  }

  export type Bill_StatusUpdateWithoutBankAccountInstancesInput = {
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    highlight_color_hex?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutBillStatusesNestedInput
    dueBills?: Due_BillsUpdateManyWithoutStatusModelNestedInput
  }

  export type Bill_StatusUncheckedUpdateWithoutBankAccountInstancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    highlight_color_hex?: NullableStringFieldUpdateOperationsInput | string | null
    dueBills?: Due_BillsUncheckedUpdateManyWithoutStatusModelNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuth_AccountCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountCreateNestedManyWithoutUserInput
    bills?: BillsCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    hashed_password: string
    is_active?: boolean
    is_superuser?: boolean
    is_verified?: boolean
    mfa_enabled?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    apiTokens?: Api_TokenUncheckedCreateNestedManyWithoutUserInput
    oauthAccounts?: OAuth_AccountUncheckedCreateNestedManyWithoutUserInput
    billStatuses?: Bill_StatusUncheckedCreateNestedManyWithoutUserInput
    recurrences?: RecurrenceUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    bankAccounts?: Bank_AccountUncheckedCreateNestedManyWithoutUserInput
    bills?: BillsUncheckedCreateNestedManyWithoutUserInput
    dueBills?: Due_BillsUncheckedCreateNestedManyWithoutUserInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuth_AccountUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUpdateManyWithoutUserNestedInput
    bills?: BillsUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_superuser?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    mfa_enabled?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    apiTokens?: Api_TokenUncheckedUpdateManyWithoutUserNestedInput
    oauthAccounts?: OAuth_AccountUncheckedUpdateManyWithoutUserNestedInput
    billStatuses?: Bill_StatusUncheckedUpdateManyWithoutUserNestedInput
    recurrences?: RecurrenceUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    bankAccounts?: Bank_AccountUncheckedUpdateManyWithoutUserNestedInput
    bills?: BillsUncheckedUpdateManyWithoutUserNestedInput
    dueBills?: Due_BillsUncheckedUpdateManyWithoutUserNestedInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Api_TokenCreateManyUserInput = {
    id?: number
    token: string
    issued_at?: Date | string
    expires_at?: Date | string | null
  }

  export type OAuth_AccountCreateManyUserInput = {
    id?: number
    provider: string
    account_id: string
    created_at?: Date | string
  }

  export type Bill_StatusCreateManyUserInput = {
    id?: number
    name: string
    archived?: boolean
    highlight_color_hex?: string | null
  }

  export type RecurrenceCreateManyUserInput = {
    id?: number
    name: string
    calculation?: string | null
    archived?: boolean
  }

  export type CategoryCreateManyUserInput = {
    id?: number
    name: string
    archived?: boolean
  }

  export type Bank_AccountCreateManyUserInput = {
    id?: number
    name: string
    url?: string | null
    recurrence?: number | null
    recurrence_value?: number | null
    archived?: boolean
    font_color_hex: string
  }

  export type BillsCreateManyUserInput = {
    id?: number
    name: string
    default_amount_due: Decimal | DecimalJsLike | number | string
    url?: string | null
    archived?: boolean
    default_draft_account?: number | null
    category?: number | null
    recurrence?: number | null
    recurrence_value?: number | null
  }

  export type Due_BillsCreateManyUserInput = {
    id?: number
    bill?: number | null
    recurrence?: number | null
    recurrence_value?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    min_amount_due: Decimal | DecimalJsLike | number | string
    total_amount_due: Decimal | DecimalJsLike | number | string
    status?: number | null
    archived?: boolean
    confirmation?: string | null
    notes?: string | null
    draft_account?: number | null
  }

  export type Bank_Account_InstanceCreateManyUserInput = {
    id?: number
    bank_account?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    status?: number | null
    archived?: boolean
    current_balance: Decimal | DecimalJsLike | number | string
  }

  export type Audit_LogCreateManyUserInput = {
    id?: number
    table_name: string
    row_id: number
    field_name: string
    action: string
    value_before_change?: string | null
    value_after_change?: string | null
    timestamp?: Date | string
  }

  export type Api_TokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Api_TokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Api_TokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    issued_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OAuth_AccountUpdateWithoutUserInput = {
    provider?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuth_AccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuth_AccountUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Bill_StatusUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    highlight_color_hex?: NullableStringFieldUpdateOperationsInput | string | null
    dueBills?: Due_BillsUpdateManyWithoutStatusModelNestedInput
    bankAccountInstances?: Bank_Account_InstanceUpdateManyWithoutStatusModelNestedInput
  }

  export type Bill_StatusUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    highlight_color_hex?: NullableStringFieldUpdateOperationsInput | string | null
    dueBills?: Due_BillsUncheckedUpdateManyWithoutStatusModelNestedInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedUpdateManyWithoutStatusModelNestedInput
  }

  export type Bill_StatusUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    highlight_color_hex?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecurrenceUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    calculation?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    bankAccounts?: Bank_AccountUpdateManyWithoutRecurrenceModelNestedInput
    dueBills?: Due_BillsUpdateManyWithoutRecurrenceModelNestedInput
    Bills?: BillsUpdateManyWithoutRecurrenceModelNestedInput
  }

  export type RecurrenceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    calculation?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    bankAccounts?: Bank_AccountUncheckedUpdateManyWithoutRecurrenceModelNestedInput
    dueBills?: Due_BillsUncheckedUpdateManyWithoutRecurrenceModelNestedInput
    Bills?: BillsUncheckedUpdateManyWithoutRecurrenceModelNestedInput
  }

  export type RecurrenceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    calculation?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoryUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    bills?: BillsUpdateManyWithoutCategoryModelNestedInput
  }

  export type CategoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    bills?: BillsUncheckedUpdateManyWithoutCategoryModelNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    archived?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Bank_AccountUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    font_color_hex?: StringFieldUpdateOperationsInput | string
    recurrenceModel?: RecurrenceUpdateOneWithoutBankAccountsNestedInput
    bills?: BillsUpdateManyWithoutDefaultDraftAccountNestedInput
    dueBills?: Due_BillsUpdateManyWithoutDraftAccountNestedInput
    bankAccountInstances?: Bank_Account_InstanceUpdateManyWithoutBankAccountNestedInput
  }

  export type Bank_AccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    font_color_hex?: StringFieldUpdateOperationsInput | string
    bills?: BillsUncheckedUpdateManyWithoutDefaultDraftAccountNestedInput
    dueBills?: Due_BillsUncheckedUpdateManyWithoutDraftAccountNestedInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type Bank_AccountUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    font_color_hex?: StringFieldUpdateOperationsInput | string
  }

  export type BillsUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    default_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    defaultDraftAccount?: Bank_AccountUpdateOneWithoutBillsNestedInput
    categoryModel?: CategoryUpdateOneWithoutBillsNestedInput
    recurrenceModel?: RecurrenceUpdateOneWithoutBillsNestedInput
    dueBills?: Due_BillsUpdateManyWithoutBillModelNestedInput
  }

  export type BillsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    default_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    default_draft_account?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    dueBills?: Due_BillsUncheckedUpdateManyWithoutBillModelNestedInput
  }

  export type BillsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    default_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    default_draft_account?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Due_BillsUpdateWithoutUserInput = {
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    min_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    confirmation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    billModel?: BillsUpdateOneWithoutDueBillsNestedInput
    recurrenceModel?: RecurrenceUpdateOneWithoutDueBillsNestedInput
    statusModel?: Bill_StatusUpdateOneWithoutDueBillsNestedInput
    draftAccount?: Bank_AccountUpdateOneWithoutDueBillsNestedInput
  }

  export type Due_BillsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bill?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    min_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    confirmation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    draft_account?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Due_BillsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bill?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    min_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    confirmation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    draft_account?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Bank_Account_InstanceUpdateWithoutUserInput = {
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    current_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bankAccount?: Bank_AccountUpdateOneWithoutBankAccountInstancesNestedInput
    statusModel?: Bill_StatusUpdateOneWithoutBankAccountInstancesNestedInput
  }

  export type Bank_Account_InstanceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bank_account?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    current_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type Bank_Account_InstanceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bank_account?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    current_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type Audit_LogUpdateWithoutUserInput = {
    table_name?: StringFieldUpdateOperationsInput | string
    row_id?: IntFieldUpdateOperationsInput | number
    field_name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    value_before_change?: NullableStringFieldUpdateOperationsInput | string | null
    value_after_change?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Audit_LogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_name?: StringFieldUpdateOperationsInput | string
    row_id?: IntFieldUpdateOperationsInput | number
    field_name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    value_before_change?: NullableStringFieldUpdateOperationsInput | string | null
    value_after_change?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Audit_LogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    table_name?: StringFieldUpdateOperationsInput | string
    row_id?: IntFieldUpdateOperationsInput | number
    field_name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    value_before_change?: NullableStringFieldUpdateOperationsInput | string | null
    value_after_change?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Due_BillsCreateManyStatusModelInput = {
    id?: number
    user_id: string
    bill?: number | null
    recurrence?: number | null
    recurrence_value?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    min_amount_due: Decimal | DecimalJsLike | number | string
    total_amount_due: Decimal | DecimalJsLike | number | string
    archived?: boolean
    confirmation?: string | null
    notes?: string | null
    draft_account?: number | null
  }

  export type Bank_Account_InstanceCreateManyStatusModelInput = {
    id?: number
    user_id: string
    bank_account?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    archived?: boolean
    current_balance: Decimal | DecimalJsLike | number | string
  }

  export type Due_BillsUpdateWithoutStatusModelInput = {
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    min_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    confirmation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDueBillsNestedInput
    billModel?: BillsUpdateOneWithoutDueBillsNestedInput
    recurrenceModel?: RecurrenceUpdateOneWithoutDueBillsNestedInput
    draftAccount?: Bank_AccountUpdateOneWithoutDueBillsNestedInput
  }

  export type Due_BillsUncheckedUpdateWithoutStatusModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    bill?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    min_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    confirmation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    draft_account?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Due_BillsUncheckedUpdateManyWithoutStatusModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    bill?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    min_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    confirmation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    draft_account?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Bank_Account_InstanceUpdateWithoutStatusModelInput = {
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    current_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutBankAccountInstancesNestedInput
    bankAccount?: Bank_AccountUpdateOneWithoutBankAccountInstancesNestedInput
  }

  export type Bank_Account_InstanceUncheckedUpdateWithoutStatusModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    bank_account?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    current_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type Bank_Account_InstanceUncheckedUpdateManyWithoutStatusModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    bank_account?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    current_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type Bank_AccountCreateManyRecurrenceModelInput = {
    id?: number
    user_id: string
    name: string
    url?: string | null
    recurrence_value?: number | null
    archived?: boolean
    font_color_hex: string
  }

  export type Due_BillsCreateManyRecurrenceModelInput = {
    id?: number
    user_id: string
    bill?: number | null
    recurrence_value?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    min_amount_due: Decimal | DecimalJsLike | number | string
    total_amount_due: Decimal | DecimalJsLike | number | string
    status?: number | null
    archived?: boolean
    confirmation?: string | null
    notes?: string | null
    draft_account?: number | null
  }

  export type BillsCreateManyRecurrenceModelInput = {
    id?: number
    user_id: string
    name: string
    default_amount_due: Decimal | DecimalJsLike | number | string
    url?: string | null
    archived?: boolean
    default_draft_account?: number | null
    category?: number | null
    recurrence_value?: number | null
  }

  export type Bank_AccountUpdateWithoutRecurrenceModelInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    font_color_hex?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBankAccountsNestedInput
    bills?: BillsUpdateManyWithoutDefaultDraftAccountNestedInput
    dueBills?: Due_BillsUpdateManyWithoutDraftAccountNestedInput
    bankAccountInstances?: Bank_Account_InstanceUpdateManyWithoutBankAccountNestedInput
  }

  export type Bank_AccountUncheckedUpdateWithoutRecurrenceModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    font_color_hex?: StringFieldUpdateOperationsInput | string
    bills?: BillsUncheckedUpdateManyWithoutDefaultDraftAccountNestedInput
    dueBills?: Due_BillsUncheckedUpdateManyWithoutDraftAccountNestedInput
    bankAccountInstances?: Bank_Account_InstanceUncheckedUpdateManyWithoutBankAccountNestedInput
  }

  export type Bank_AccountUncheckedUpdateManyWithoutRecurrenceModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    font_color_hex?: StringFieldUpdateOperationsInput | string
  }

  export type Due_BillsUpdateWithoutRecurrenceModelInput = {
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    min_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    confirmation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDueBillsNestedInput
    billModel?: BillsUpdateOneWithoutDueBillsNestedInput
    statusModel?: Bill_StatusUpdateOneWithoutDueBillsNestedInput
    draftAccount?: Bank_AccountUpdateOneWithoutDueBillsNestedInput
  }

  export type Due_BillsUncheckedUpdateWithoutRecurrenceModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    bill?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    min_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    confirmation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    draft_account?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Due_BillsUncheckedUpdateManyWithoutRecurrenceModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    bill?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    min_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    confirmation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    draft_account?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BillsUpdateWithoutRecurrenceModelInput = {
    name?: StringFieldUpdateOperationsInput | string
    default_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutBillsNestedInput
    defaultDraftAccount?: Bank_AccountUpdateOneWithoutBillsNestedInput
    categoryModel?: CategoryUpdateOneWithoutBillsNestedInput
    dueBills?: Due_BillsUpdateManyWithoutBillModelNestedInput
  }

  export type BillsUncheckedUpdateWithoutRecurrenceModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    default_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    default_draft_account?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    dueBills?: Due_BillsUncheckedUpdateManyWithoutBillModelNestedInput
  }

  export type BillsUncheckedUpdateManyWithoutRecurrenceModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    default_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    default_draft_account?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BillsCreateManyCategoryModelInput = {
    id?: number
    user_id: string
    name: string
    default_amount_due: Decimal | DecimalJsLike | number | string
    url?: string | null
    archived?: boolean
    default_draft_account?: number | null
    recurrence?: number | null
    recurrence_value?: number | null
  }

  export type BillsUpdateWithoutCategoryModelInput = {
    name?: StringFieldUpdateOperationsInput | string
    default_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutBillsNestedInput
    defaultDraftAccount?: Bank_AccountUpdateOneWithoutBillsNestedInput
    recurrenceModel?: RecurrenceUpdateOneWithoutBillsNestedInput
    dueBills?: Due_BillsUpdateManyWithoutBillModelNestedInput
  }

  export type BillsUncheckedUpdateWithoutCategoryModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    default_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    default_draft_account?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    dueBills?: Due_BillsUncheckedUpdateManyWithoutBillModelNestedInput
  }

  export type BillsUncheckedUpdateManyWithoutCategoryModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    default_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    default_draft_account?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BillsCreateManyDefaultDraftAccountInput = {
    id?: number
    user_id: string
    name: string
    default_amount_due: Decimal | DecimalJsLike | number | string
    url?: string | null
    archived?: boolean
    category?: number | null
    recurrence?: number | null
    recurrence_value?: number | null
  }

  export type Due_BillsCreateManyDraftAccountInput = {
    id?: number
    user_id: string
    bill?: number | null
    recurrence?: number | null
    recurrence_value?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    min_amount_due: Decimal | DecimalJsLike | number | string
    total_amount_due: Decimal | DecimalJsLike | number | string
    status?: number | null
    archived?: boolean
    confirmation?: string | null
    notes?: string | null
  }

  export type Bank_Account_InstanceCreateManyBankAccountInput = {
    id?: number
    user_id: string
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    status?: number | null
    archived?: boolean
    current_balance: Decimal | DecimalJsLike | number | string
  }

  export type BillsUpdateWithoutDefaultDraftAccountInput = {
    name?: StringFieldUpdateOperationsInput | string
    default_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutBillsNestedInput
    categoryModel?: CategoryUpdateOneWithoutBillsNestedInput
    recurrenceModel?: RecurrenceUpdateOneWithoutBillsNestedInput
    dueBills?: Due_BillsUpdateManyWithoutBillModelNestedInput
  }

  export type BillsUncheckedUpdateWithoutDefaultDraftAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    default_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    dueBills?: Due_BillsUncheckedUpdateManyWithoutBillModelNestedInput
  }

  export type BillsUncheckedUpdateManyWithoutDefaultDraftAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    default_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Due_BillsUpdateWithoutDraftAccountInput = {
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    min_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    confirmation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDueBillsNestedInput
    billModel?: BillsUpdateOneWithoutDueBillsNestedInput
    recurrenceModel?: RecurrenceUpdateOneWithoutDueBillsNestedInput
    statusModel?: Bill_StatusUpdateOneWithoutDueBillsNestedInput
  }

  export type Due_BillsUncheckedUpdateWithoutDraftAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    bill?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    min_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    confirmation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Due_BillsUncheckedUpdateManyWithoutDraftAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    bill?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    min_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    confirmation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Bank_Account_InstanceUpdateWithoutBankAccountInput = {
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    current_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutBankAccountInstancesNestedInput
    statusModel?: Bill_StatusUpdateOneWithoutBankAccountInstancesNestedInput
  }

  export type Bank_Account_InstanceUncheckedUpdateWithoutBankAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    current_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type Bank_Account_InstanceUncheckedUpdateManyWithoutBankAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    current_balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type Due_BillsCreateManyBillModelInput = {
    id?: number
    user_id: string
    recurrence?: number | null
    recurrence_value?: number | null
    priority?: number
    due_date: Date | string
    pay_date?: Date | string | null
    min_amount_due: Decimal | DecimalJsLike | number | string
    total_amount_due: Decimal | DecimalJsLike | number | string
    status?: number | null
    archived?: boolean
    confirmation?: string | null
    notes?: string | null
    draft_account?: number | null
  }

  export type Due_BillsUpdateWithoutBillModelInput = {
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    min_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    archived?: BoolFieldUpdateOperationsInput | boolean
    confirmation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDueBillsNestedInput
    recurrenceModel?: RecurrenceUpdateOneWithoutDueBillsNestedInput
    statusModel?: Bill_StatusUpdateOneWithoutDueBillsNestedInput
    draftAccount?: Bank_AccountUpdateOneWithoutDueBillsNestedInput
  }

  export type Due_BillsUncheckedUpdateWithoutBillModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    min_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    confirmation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    draft_account?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Due_BillsUncheckedUpdateManyWithoutBillModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    recurrence?: NullableIntFieldUpdateOperationsInput | number | null
    recurrence_value?: NullableIntFieldUpdateOperationsInput | number | null
    priority?: IntFieldUpdateOperationsInput | number
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    pay_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    min_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    total_amount_due?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    archived?: BoolFieldUpdateOperationsInput | boolean
    confirmation?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    draft_account?: NullableIntFieldUpdateOperationsInput | number | null
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