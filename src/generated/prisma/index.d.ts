
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
 * Model Aset
 * 
 */
export type Aset = $Result.DefaultSelection<Prisma.$AsetPayload>
/**
 * Model Maintenance
 * 
 */
export type Maintenance = $Result.DefaultSelection<Prisma.$MaintenancePayload>
/**
 * Model Lokasi
 * 
 */
export type Lokasi = $Result.DefaultSelection<Prisma.$LokasiPayload>
/**
 * Model Perpindahan
 * 
 */
export type Perpindahan = $Result.DefaultSelection<Prisma.$PerpindahanPayload>
/**
 * Model Pengadaan
 * 
 */
export type Pengadaan = $Result.DefaultSelection<Prisma.$PengadaanPayload>
/**
 * Model Notifikasi
 * 
 */
export type Notifikasi = $Result.DefaultSelection<Prisma.$NotifikasiPayload>
/**
 * Model SubAsetKategori
 * 
 */
export type SubAsetKategori = $Result.DefaultSelection<Prisma.$SubAsetKategoriPayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MaintenanceRequestStatus: {
  ontime: 'ontime',
  overdue: 'overdue',
  onprocess: 'onprocess'
};

export type MaintenanceRequestStatus = (typeof MaintenanceRequestStatus)[keyof typeof MaintenanceRequestStatus]


export const AsetStatus: {
  aktif: 'aktif',
  nonaktif: 'nonaktif',
  maintenance: 'maintenance'
};

export type AsetStatus = (typeof AsetStatus)[keyof typeof AsetStatus]


export const AsetKondisi: {
  baik: 'baik',
  normal: 'normal',
  buruk: 'buruk'
};

export type AsetKondisi = (typeof AsetKondisi)[keyof typeof AsetKondisi]


export const AsetKategori: {
  asetFisik: 'asetFisik',
  asetDigital: 'asetDigital'
};

export type AsetKategori = (typeof AsetKategori)[keyof typeof AsetKategori]


export const HakMilik: {
  pribadi: 'pribadi',
  kantor: 'kantor'
};

export type HakMilik = (typeof HakMilik)[keyof typeof HakMilik]


export const UserStatus: {
  aktif: 'aktif',
  nonaktif: 'nonaktif'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]

}

export type MaintenanceRequestStatus = $Enums.MaintenanceRequestStatus

export const MaintenanceRequestStatus: typeof $Enums.MaintenanceRequestStatus

export type AsetStatus = $Enums.AsetStatus

export const AsetStatus: typeof $Enums.AsetStatus

export type AsetKondisi = $Enums.AsetKondisi

export const AsetKondisi: typeof $Enums.AsetKondisi

export type AsetKategori = $Enums.AsetKategori

export const AsetKategori: typeof $Enums.AsetKategori

export type HakMilik = $Enums.HakMilik

export const HakMilik: typeof $Enums.HakMilik

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.aset`: Exposes CRUD operations for the **Aset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asets
    * const asets = await prisma.aset.findMany()
    * ```
    */
  get aset(): Prisma.AsetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenance`: Exposes CRUD operations for the **Maintenance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Maintenances
    * const maintenances = await prisma.maintenance.findMany()
    * ```
    */
  get maintenance(): Prisma.MaintenanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lokasi`: Exposes CRUD operations for the **Lokasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lokasis
    * const lokasis = await prisma.lokasi.findMany()
    * ```
    */
  get lokasi(): Prisma.LokasiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.perpindahan`: Exposes CRUD operations for the **Perpindahan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perpindahans
    * const perpindahans = await prisma.perpindahan.findMany()
    * ```
    */
  get perpindahan(): Prisma.PerpindahanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pengadaan`: Exposes CRUD operations for the **Pengadaan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pengadaans
    * const pengadaans = await prisma.pengadaan.findMany()
    * ```
    */
  get pengadaan(): Prisma.PengadaanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifikasi`: Exposes CRUD operations for the **Notifikasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifikasis
    * const notifikasis = await prisma.notifikasi.findMany()
    * ```
    */
  get notifikasi(): Prisma.NotifikasiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subAsetKategori`: Exposes CRUD operations for the **SubAsetKategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubAsetKategoris
    * const subAsetKategoris = await prisma.subAsetKategori.findMany()
    * ```
    */
  get subAsetKategori(): Prisma.SubAsetKategoriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    Aset: 'Aset',
    Maintenance: 'Maintenance',
    Lokasi: 'Lokasi',
    Perpindahan: 'Perpindahan',
    Pengadaan: 'Pengadaan',
    Notifikasi: 'Notifikasi',
    SubAsetKategori: 'SubAsetKategori',
    UserRole: 'UserRole'
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
      modelProps: "user" | "aset" | "maintenance" | "lokasi" | "perpindahan" | "pengadaan" | "notifikasi" | "subAsetKategori" | "userRole"
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
      Aset: {
        payload: Prisma.$AsetPayload<ExtArgs>
        fields: Prisma.AsetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsetPayload>
          }
          findFirst: {
            args: Prisma.AsetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsetPayload>
          }
          findMany: {
            args: Prisma.AsetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsetPayload>[]
          }
          create: {
            args: Prisma.AsetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsetPayload>
          }
          createMany: {
            args: Prisma.AsetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsetPayload>[]
          }
          delete: {
            args: Prisma.AsetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsetPayload>
          }
          update: {
            args: Prisma.AsetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsetPayload>
          }
          deleteMany: {
            args: Prisma.AsetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AsetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsetPayload>[]
          }
          upsert: {
            args: Prisma.AsetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsetPayload>
          }
          aggregate: {
            args: Prisma.AsetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAset>
          }
          groupBy: {
            args: Prisma.AsetGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsetGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsetCountArgs<ExtArgs>
            result: $Utils.Optional<AsetCountAggregateOutputType> | number
          }
        }
      }
      Maintenance: {
        payload: Prisma.$MaintenancePayload<ExtArgs>
        fields: Prisma.MaintenanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          findFirst: {
            args: Prisma.MaintenanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          findMany: {
            args: Prisma.MaintenanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>[]
          }
          create: {
            args: Prisma.MaintenanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          createMany: {
            args: Prisma.MaintenanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>[]
          }
          delete: {
            args: Prisma.MaintenanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          update: {
            args: Prisma.MaintenanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaintenanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>[]
          }
          upsert: {
            args: Prisma.MaintenanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenancePayload>
          }
          aggregate: {
            args: Prisma.MaintenanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenance>
          }
          groupBy: {
            args: Prisma.MaintenanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceCountAggregateOutputType> | number
          }
        }
      }
      Lokasi: {
        payload: Prisma.$LokasiPayload<ExtArgs>
        fields: Prisma.LokasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LokasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LokasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload>
          }
          findFirst: {
            args: Prisma.LokasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LokasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload>
          }
          findMany: {
            args: Prisma.LokasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload>[]
          }
          create: {
            args: Prisma.LokasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload>
          }
          createMany: {
            args: Prisma.LokasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LokasiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload>[]
          }
          delete: {
            args: Prisma.LokasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload>
          }
          update: {
            args: Prisma.LokasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload>
          }
          deleteMany: {
            args: Prisma.LokasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LokasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LokasiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload>[]
          }
          upsert: {
            args: Prisma.LokasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload>
          }
          aggregate: {
            args: Prisma.LokasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLokasi>
          }
          groupBy: {
            args: Prisma.LokasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<LokasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.LokasiCountArgs<ExtArgs>
            result: $Utils.Optional<LokasiCountAggregateOutputType> | number
          }
        }
      }
      Perpindahan: {
        payload: Prisma.$PerpindahanPayload<ExtArgs>
        fields: Prisma.PerpindahanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerpindahanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerpindahanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerpindahanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerpindahanPayload>
          }
          findFirst: {
            args: Prisma.PerpindahanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerpindahanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerpindahanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerpindahanPayload>
          }
          findMany: {
            args: Prisma.PerpindahanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerpindahanPayload>[]
          }
          create: {
            args: Prisma.PerpindahanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerpindahanPayload>
          }
          createMany: {
            args: Prisma.PerpindahanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PerpindahanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerpindahanPayload>[]
          }
          delete: {
            args: Prisma.PerpindahanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerpindahanPayload>
          }
          update: {
            args: Prisma.PerpindahanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerpindahanPayload>
          }
          deleteMany: {
            args: Prisma.PerpindahanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerpindahanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PerpindahanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerpindahanPayload>[]
          }
          upsert: {
            args: Prisma.PerpindahanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerpindahanPayload>
          }
          aggregate: {
            args: Prisma.PerpindahanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerpindahan>
          }
          groupBy: {
            args: Prisma.PerpindahanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerpindahanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerpindahanCountArgs<ExtArgs>
            result: $Utils.Optional<PerpindahanCountAggregateOutputType> | number
          }
        }
      }
      Pengadaan: {
        payload: Prisma.$PengadaanPayload<ExtArgs>
        fields: Prisma.PengadaanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PengadaanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengadaanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PengadaanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengadaanPayload>
          }
          findFirst: {
            args: Prisma.PengadaanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengadaanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PengadaanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengadaanPayload>
          }
          findMany: {
            args: Prisma.PengadaanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengadaanPayload>[]
          }
          create: {
            args: Prisma.PengadaanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengadaanPayload>
          }
          createMany: {
            args: Prisma.PengadaanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PengadaanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengadaanPayload>[]
          }
          delete: {
            args: Prisma.PengadaanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengadaanPayload>
          }
          update: {
            args: Prisma.PengadaanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengadaanPayload>
          }
          deleteMany: {
            args: Prisma.PengadaanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PengadaanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PengadaanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengadaanPayload>[]
          }
          upsert: {
            args: Prisma.PengadaanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PengadaanPayload>
          }
          aggregate: {
            args: Prisma.PengadaanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePengadaan>
          }
          groupBy: {
            args: Prisma.PengadaanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PengadaanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PengadaanCountArgs<ExtArgs>
            result: $Utils.Optional<PengadaanCountAggregateOutputType> | number
          }
        }
      }
      Notifikasi: {
        payload: Prisma.$NotifikasiPayload<ExtArgs>
        fields: Prisma.NotifikasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotifikasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotifikasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>
          }
          findFirst: {
            args: Prisma.NotifikasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotifikasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>
          }
          findMany: {
            args: Prisma.NotifikasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>[]
          }
          create: {
            args: Prisma.NotifikasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>
          }
          createMany: {
            args: Prisma.NotifikasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotifikasiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>[]
          }
          delete: {
            args: Prisma.NotifikasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>
          }
          update: {
            args: Prisma.NotifikasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>
          }
          deleteMany: {
            args: Prisma.NotifikasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotifikasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotifikasiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>[]
          }
          upsert: {
            args: Prisma.NotifikasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>
          }
          aggregate: {
            args: Prisma.NotifikasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifikasi>
          }
          groupBy: {
            args: Prisma.NotifikasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotifikasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotifikasiCountArgs<ExtArgs>
            result: $Utils.Optional<NotifikasiCountAggregateOutputType> | number
          }
        }
      }
      SubAsetKategori: {
        payload: Prisma.$SubAsetKategoriPayload<ExtArgs>
        fields: Prisma.SubAsetKategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubAsetKategoriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAsetKategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubAsetKategoriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAsetKategoriPayload>
          }
          findFirst: {
            args: Prisma.SubAsetKategoriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAsetKategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubAsetKategoriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAsetKategoriPayload>
          }
          findMany: {
            args: Prisma.SubAsetKategoriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAsetKategoriPayload>[]
          }
          create: {
            args: Prisma.SubAsetKategoriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAsetKategoriPayload>
          }
          createMany: {
            args: Prisma.SubAsetKategoriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubAsetKategoriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAsetKategoriPayload>[]
          }
          delete: {
            args: Prisma.SubAsetKategoriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAsetKategoriPayload>
          }
          update: {
            args: Prisma.SubAsetKategoriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAsetKategoriPayload>
          }
          deleteMany: {
            args: Prisma.SubAsetKategoriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubAsetKategoriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubAsetKategoriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAsetKategoriPayload>[]
          }
          upsert: {
            args: Prisma.SubAsetKategoriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubAsetKategoriPayload>
          }
          aggregate: {
            args: Prisma.SubAsetKategoriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubAsetKategori>
          }
          groupBy: {
            args: Prisma.SubAsetKategoriGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubAsetKategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubAsetKategoriCountArgs<ExtArgs>
            result: $Utils.Optional<SubAsetKategoriCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    aset?: AsetOmit
    maintenance?: MaintenanceOmit
    lokasi?: LokasiOmit
    perpindahan?: PerpindahanOmit
    pengadaan?: PengadaanOmit
    notifikasi?: NotifikasiOmit
    subAsetKategori?: SubAsetKategoriOmit
    userRole?: UserRoleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type AsetCountOutputType
   */

  export type AsetCountOutputType = {
    maintenances: number
    perpindahan: number
  }

  export type AsetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    maintenances?: boolean | AsetCountOutputTypeCountMaintenancesArgs
    perpindahan?: boolean | AsetCountOutputTypeCountPerpindahanArgs
  }

  // Custom InputTypes
  /**
   * AsetCountOutputType without action
   */
  export type AsetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsetCountOutputType
     */
    select?: AsetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AsetCountOutputType without action
   */
  export type AsetCountOutputTypeCountMaintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceWhereInput
  }

  /**
   * AsetCountOutputType without action
   */
  export type AsetCountOutputTypeCountPerpindahanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerpindahanWhereInput
  }


  /**
   * Count Type LokasiCountOutputType
   */

  export type LokasiCountOutputType = {
    subKategoriAset: number
    aset: number
    perpindahan: number
    pengadaan: number
  }

  export type LokasiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subKategoriAset?: boolean | LokasiCountOutputTypeCountSubKategoriAsetArgs
    aset?: boolean | LokasiCountOutputTypeCountAsetArgs
    perpindahan?: boolean | LokasiCountOutputTypeCountPerpindahanArgs
    pengadaan?: boolean | LokasiCountOutputTypeCountPengadaanArgs
  }

  // Custom InputTypes
  /**
   * LokasiCountOutputType without action
   */
  export type LokasiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LokasiCountOutputType
     */
    select?: LokasiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LokasiCountOutputType without action
   */
  export type LokasiCountOutputTypeCountSubKategoriAsetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubAsetKategoriWhereInput
  }

  /**
   * LokasiCountOutputType without action
   */
  export type LokasiCountOutputTypeCountAsetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsetWhereInput
  }

  /**
   * LokasiCountOutputType without action
   */
  export type LokasiCountOutputTypeCountPerpindahanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerpindahanWhereInput
  }

  /**
   * LokasiCountOutputType without action
   */
  export type LokasiCountOutputTypeCountPengadaanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PengadaanWhereInput
  }


  /**
   * Count Type SubAsetKategoriCountOutputType
   */

  export type SubAsetKategoriCountOutputType = {
    asets: number
    lokasi: number
  }

  export type SubAsetKategoriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asets?: boolean | SubAsetKategoriCountOutputTypeCountAsetsArgs
    lokasi?: boolean | SubAsetKategoriCountOutputTypeCountLokasiArgs
  }

  // Custom InputTypes
  /**
   * SubAsetKategoriCountOutputType without action
   */
  export type SubAsetKategoriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAsetKategoriCountOutputType
     */
    select?: SubAsetKategoriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubAsetKategoriCountOutputType without action
   */
  export type SubAsetKategoriCountOutputTypeCountAsetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsetWhereInput
  }

  /**
   * SubAsetKategoriCountOutputType without action
   */
  export type SubAsetKategoriCountOutputTypeCountLokasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LokasiWhereInput
  }


  /**
   * Count Type UserRoleCountOutputType
   */

  export type UserRoleCountOutputType = {
    users: number
  }

  export type UserRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserRoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleCountOutputType
     */
    select?: UserRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
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
    name: string | null
    roleId: string | null
    password: string | null
    lastLogin: Date | null
    createdAt: Date | null
    status: $Enums.UserStatus | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    roleId: string | null
    password: string | null
    lastLogin: Date | null
    createdAt: Date | null
    status: $Enums.UserStatus | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    roleId: number
    password: number
    lastLogin: number
    createdAt: number
    status: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    roleId?: true
    password?: true
    lastLogin?: true
    createdAt?: true
    status?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    roleId?: true
    password?: true
    lastLogin?: true
    createdAt?: true
    status?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    roleId?: true
    password?: true
    lastLogin?: true
    createdAt?: true
    status?: true
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
    name: string
    roleId: string
    password: string
    lastLogin: Date | null
    createdAt: Date
    status: $Enums.UserStatus
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
    name?: boolean
    roleId?: boolean
    password?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    status?: boolean
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    roleId?: boolean
    password?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    status?: boolean
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    roleId?: boolean
    password?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    status?: boolean
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    roleId?: boolean
    password?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    status?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "roleId" | "password" | "lastLogin" | "createdAt" | "status", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | UserRoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$UserRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      roleId: string
      password: string
      lastLogin: Date | null
      createdAt: Date
      status: $Enums.UserStatus
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
    role<T extends UserRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserRoleDefaultArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly name: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly status: FieldRef<"User", 'UserStatus'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Model Aset
   */

  export type AggregateAset = {
    _count: AsetCountAggregateOutputType | null
    _avg: AsetAvgAggregateOutputType | null
    _sum: AsetSumAggregateOutputType | null
    _min: AsetMinAggregateOutputType | null
    _max: AsetMaxAggregateOutputType | null
  }

  export type AsetAvgAggregateOutputType = {
    tahun: number | null
  }

  export type AsetSumAggregateOutputType = {
    tahun: number | null
  }

  export type AsetMinAggregateOutputType = {
    asetId: string | null
    lokasiId: string | null
    subKategoriAsetId: string | null
    kategoriAset: $Enums.AsetKategori | null
    merkDanTipe: string | null
    tahun: number | null
    kondisiAset: $Enums.AsetKondisi | null
    statusAset: $Enums.AsetStatus | null
    nomorSeri: string | null
    masaBerlaku: Date | null
    statusKepemilikan: string | null
    urlQR: string | null
    createdAt: Date | null
    pic: string | null
  }

  export type AsetMaxAggregateOutputType = {
    asetId: string | null
    lokasiId: string | null
    subKategoriAsetId: string | null
    kategoriAset: $Enums.AsetKategori | null
    merkDanTipe: string | null
    tahun: number | null
    kondisiAset: $Enums.AsetKondisi | null
    statusAset: $Enums.AsetStatus | null
    nomorSeri: string | null
    masaBerlaku: Date | null
    statusKepemilikan: string | null
    urlQR: string | null
    createdAt: Date | null
    pic: string | null
  }

  export type AsetCountAggregateOutputType = {
    asetId: number
    lokasiId: number
    subKategoriAsetId: number
    kategoriAset: number
    merkDanTipe: number
    tahun: number
    kondisiAset: number
    statusAset: number
    nomorSeri: number
    masaBerlaku: number
    statusKepemilikan: number
    urlFoto: number
    urlQR: number
    createdAt: number
    pic: number
    _all: number
  }


  export type AsetAvgAggregateInputType = {
    tahun?: true
  }

  export type AsetSumAggregateInputType = {
    tahun?: true
  }

  export type AsetMinAggregateInputType = {
    asetId?: true
    lokasiId?: true
    subKategoriAsetId?: true
    kategoriAset?: true
    merkDanTipe?: true
    tahun?: true
    kondisiAset?: true
    statusAset?: true
    nomorSeri?: true
    masaBerlaku?: true
    statusKepemilikan?: true
    urlQR?: true
    createdAt?: true
    pic?: true
  }

  export type AsetMaxAggregateInputType = {
    asetId?: true
    lokasiId?: true
    subKategoriAsetId?: true
    kategoriAset?: true
    merkDanTipe?: true
    tahun?: true
    kondisiAset?: true
    statusAset?: true
    nomorSeri?: true
    masaBerlaku?: true
    statusKepemilikan?: true
    urlQR?: true
    createdAt?: true
    pic?: true
  }

  export type AsetCountAggregateInputType = {
    asetId?: true
    lokasiId?: true
    subKategoriAsetId?: true
    kategoriAset?: true
    merkDanTipe?: true
    tahun?: true
    kondisiAset?: true
    statusAset?: true
    nomorSeri?: true
    masaBerlaku?: true
    statusKepemilikan?: true
    urlFoto?: true
    urlQR?: true
    createdAt?: true
    pic?: true
    _all?: true
  }

  export type AsetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aset to aggregate.
     */
    where?: AsetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asets to fetch.
     */
    orderBy?: AsetOrderByWithRelationInput | AsetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Asets
    **/
    _count?: true | AsetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsetMaxAggregateInputType
  }

  export type GetAsetAggregateType<T extends AsetAggregateArgs> = {
        [P in keyof T & keyof AggregateAset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAset[P]>
      : GetScalarType<T[P], AggregateAset[P]>
  }




  export type AsetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsetWhereInput
    orderBy?: AsetOrderByWithAggregationInput | AsetOrderByWithAggregationInput[]
    by: AsetScalarFieldEnum[] | AsetScalarFieldEnum
    having?: AsetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsetCountAggregateInputType | true
    _avg?: AsetAvgAggregateInputType
    _sum?: AsetSumAggregateInputType
    _min?: AsetMinAggregateInputType
    _max?: AsetMaxAggregateInputType
  }

  export type AsetGroupByOutputType = {
    asetId: string
    lokasiId: string | null
    subKategoriAsetId: string | null
    kategoriAset: $Enums.AsetKategori
    merkDanTipe: string
    tahun: number | null
    kondisiAset: $Enums.AsetKondisi | null
    statusAset: $Enums.AsetStatus
    nomorSeri: string | null
    masaBerlaku: Date | null
    statusKepemilikan: string
    urlFoto: string[]
    urlQR: string | null
    createdAt: Date
    pic: string | null
    _count: AsetCountAggregateOutputType | null
    _avg: AsetAvgAggregateOutputType | null
    _sum: AsetSumAggregateOutputType | null
    _min: AsetMinAggregateOutputType | null
    _max: AsetMaxAggregateOutputType | null
  }

  type GetAsetGroupByPayload<T extends AsetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsetGroupByOutputType[P]>
            : GetScalarType<T[P], AsetGroupByOutputType[P]>
        }
      >
    >


  export type AsetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    asetId?: boolean
    lokasiId?: boolean
    subKategoriAsetId?: boolean
    kategoriAset?: boolean
    merkDanTipe?: boolean
    tahun?: boolean
    kondisiAset?: boolean
    statusAset?: boolean
    nomorSeri?: boolean
    masaBerlaku?: boolean
    statusKepemilikan?: boolean
    urlFoto?: boolean
    urlQR?: boolean
    createdAt?: boolean
    pic?: boolean
    lokasi?: boolean | Aset$lokasiArgs<ExtArgs>
    subKategoriAset?: boolean | Aset$subKategoriAsetArgs<ExtArgs>
    maintenances?: boolean | Aset$maintenancesArgs<ExtArgs>
    perpindahan?: boolean | Aset$perpindahanArgs<ExtArgs>
    _count?: boolean | AsetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aset"]>

  export type AsetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    asetId?: boolean
    lokasiId?: boolean
    subKategoriAsetId?: boolean
    kategoriAset?: boolean
    merkDanTipe?: boolean
    tahun?: boolean
    kondisiAset?: boolean
    statusAset?: boolean
    nomorSeri?: boolean
    masaBerlaku?: boolean
    statusKepemilikan?: boolean
    urlFoto?: boolean
    urlQR?: boolean
    createdAt?: boolean
    pic?: boolean
    lokasi?: boolean | Aset$lokasiArgs<ExtArgs>
    subKategoriAset?: boolean | Aset$subKategoriAsetArgs<ExtArgs>
  }, ExtArgs["result"]["aset"]>

  export type AsetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    asetId?: boolean
    lokasiId?: boolean
    subKategoriAsetId?: boolean
    kategoriAset?: boolean
    merkDanTipe?: boolean
    tahun?: boolean
    kondisiAset?: boolean
    statusAset?: boolean
    nomorSeri?: boolean
    masaBerlaku?: boolean
    statusKepemilikan?: boolean
    urlFoto?: boolean
    urlQR?: boolean
    createdAt?: boolean
    pic?: boolean
    lokasi?: boolean | Aset$lokasiArgs<ExtArgs>
    subKategoriAset?: boolean | Aset$subKategoriAsetArgs<ExtArgs>
  }, ExtArgs["result"]["aset"]>

  export type AsetSelectScalar = {
    asetId?: boolean
    lokasiId?: boolean
    subKategoriAsetId?: boolean
    kategoriAset?: boolean
    merkDanTipe?: boolean
    tahun?: boolean
    kondisiAset?: boolean
    statusAset?: boolean
    nomorSeri?: boolean
    masaBerlaku?: boolean
    statusKepemilikan?: boolean
    urlFoto?: boolean
    urlQR?: boolean
    createdAt?: boolean
    pic?: boolean
  }

  export type AsetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"asetId" | "lokasiId" | "subKategoriAsetId" | "kategoriAset" | "merkDanTipe" | "tahun" | "kondisiAset" | "statusAset" | "nomorSeri" | "masaBerlaku" | "statusKepemilikan" | "urlFoto" | "urlQR" | "createdAt" | "pic", ExtArgs["result"]["aset"]>
  export type AsetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lokasi?: boolean | Aset$lokasiArgs<ExtArgs>
    subKategoriAset?: boolean | Aset$subKategoriAsetArgs<ExtArgs>
    maintenances?: boolean | Aset$maintenancesArgs<ExtArgs>
    perpindahan?: boolean | Aset$perpindahanArgs<ExtArgs>
    _count?: boolean | AsetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AsetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lokasi?: boolean | Aset$lokasiArgs<ExtArgs>
    subKategoriAset?: boolean | Aset$subKategoriAsetArgs<ExtArgs>
  }
  export type AsetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lokasi?: boolean | Aset$lokasiArgs<ExtArgs>
    subKategoriAset?: boolean | Aset$subKategoriAsetArgs<ExtArgs>
  }

  export type $AsetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aset"
    objects: {
      lokasi: Prisma.$LokasiPayload<ExtArgs> | null
      subKategoriAset: Prisma.$SubAsetKategoriPayload<ExtArgs> | null
      maintenances: Prisma.$MaintenancePayload<ExtArgs>[]
      perpindahan: Prisma.$PerpindahanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      asetId: string
      lokasiId: string | null
      subKategoriAsetId: string | null
      kategoriAset: $Enums.AsetKategori
      merkDanTipe: string
      tahun: number | null
      kondisiAset: $Enums.AsetKondisi | null
      statusAset: $Enums.AsetStatus
      nomorSeri: string | null
      masaBerlaku: Date | null
      statusKepemilikan: string
      urlFoto: string[]
      urlQR: string | null
      createdAt: Date
      pic: string | null
    }, ExtArgs["result"]["aset"]>
    composites: {}
  }

  type AsetGetPayload<S extends boolean | null | undefined | AsetDefaultArgs> = $Result.GetResult<Prisma.$AsetPayload, S>

  type AsetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AsetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AsetCountAggregateInputType | true
    }

  export interface AsetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aset'], meta: { name: 'Aset' } }
    /**
     * Find zero or one Aset that matches the filter.
     * @param {AsetFindUniqueArgs} args - Arguments to find a Aset
     * @example
     * // Get one Aset
     * const aset = await prisma.aset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsetFindUniqueArgs>(args: SelectSubset<T, AsetFindUniqueArgs<ExtArgs>>): Prisma__AsetClient<$Result.GetResult<Prisma.$AsetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AsetFindUniqueOrThrowArgs} args - Arguments to find a Aset
     * @example
     * // Get one Aset
     * const aset = await prisma.aset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsetFindUniqueOrThrowArgs>(args: SelectSubset<T, AsetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsetClient<$Result.GetResult<Prisma.$AsetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsetFindFirstArgs} args - Arguments to find a Aset
     * @example
     * // Get one Aset
     * const aset = await prisma.aset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsetFindFirstArgs>(args?: SelectSubset<T, AsetFindFirstArgs<ExtArgs>>): Prisma__AsetClient<$Result.GetResult<Prisma.$AsetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsetFindFirstOrThrowArgs} args - Arguments to find a Aset
     * @example
     * // Get one Aset
     * const aset = await prisma.aset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsetFindFirstOrThrowArgs>(args?: SelectSubset<T, AsetFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsetClient<$Result.GetResult<Prisma.$AsetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Asets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asets
     * const asets = await prisma.aset.findMany()
     * 
     * // Get first 10 Asets
     * const asets = await prisma.aset.findMany({ take: 10 })
     * 
     * // Only select the `asetId`
     * const asetWithAsetIdOnly = await prisma.aset.findMany({ select: { asetId: true } })
     * 
     */
    findMany<T extends AsetFindManyArgs>(args?: SelectSubset<T, AsetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aset.
     * @param {AsetCreateArgs} args - Arguments to create a Aset.
     * @example
     * // Create one Aset
     * const Aset = await prisma.aset.create({
     *   data: {
     *     // ... data to create a Aset
     *   }
     * })
     * 
     */
    create<T extends AsetCreateArgs>(args: SelectSubset<T, AsetCreateArgs<ExtArgs>>): Prisma__AsetClient<$Result.GetResult<Prisma.$AsetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Asets.
     * @param {AsetCreateManyArgs} args - Arguments to create many Asets.
     * @example
     * // Create many Asets
     * const aset = await prisma.aset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsetCreateManyArgs>(args?: SelectSubset<T, AsetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Asets and returns the data saved in the database.
     * @param {AsetCreateManyAndReturnArgs} args - Arguments to create many Asets.
     * @example
     * // Create many Asets
     * const aset = await prisma.aset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Asets and only return the `asetId`
     * const asetWithAsetIdOnly = await prisma.aset.createManyAndReturn({
     *   select: { asetId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsetCreateManyAndReturnArgs>(args?: SelectSubset<T, AsetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Aset.
     * @param {AsetDeleteArgs} args - Arguments to delete one Aset.
     * @example
     * // Delete one Aset
     * const Aset = await prisma.aset.delete({
     *   where: {
     *     // ... filter to delete one Aset
     *   }
     * })
     * 
     */
    delete<T extends AsetDeleteArgs>(args: SelectSubset<T, AsetDeleteArgs<ExtArgs>>): Prisma__AsetClient<$Result.GetResult<Prisma.$AsetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aset.
     * @param {AsetUpdateArgs} args - Arguments to update one Aset.
     * @example
     * // Update one Aset
     * const aset = await prisma.aset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsetUpdateArgs>(args: SelectSubset<T, AsetUpdateArgs<ExtArgs>>): Prisma__AsetClient<$Result.GetResult<Prisma.$AsetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Asets.
     * @param {AsetDeleteManyArgs} args - Arguments to filter Asets to delete.
     * @example
     * // Delete a few Asets
     * const { count } = await prisma.aset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsetDeleteManyArgs>(args?: SelectSubset<T, AsetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asets
     * const aset = await prisma.aset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsetUpdateManyArgs>(args: SelectSubset<T, AsetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asets and returns the data updated in the database.
     * @param {AsetUpdateManyAndReturnArgs} args - Arguments to update many Asets.
     * @example
     * // Update many Asets
     * const aset = await prisma.aset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Asets and only return the `asetId`
     * const asetWithAsetIdOnly = await prisma.aset.updateManyAndReturn({
     *   select: { asetId: true },
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
    updateManyAndReturn<T extends AsetUpdateManyAndReturnArgs>(args: SelectSubset<T, AsetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Aset.
     * @param {AsetUpsertArgs} args - Arguments to update or create a Aset.
     * @example
     * // Update or create a Aset
     * const aset = await prisma.aset.upsert({
     *   create: {
     *     // ... data to create a Aset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aset we want to update
     *   }
     * })
     */
    upsert<T extends AsetUpsertArgs>(args: SelectSubset<T, AsetUpsertArgs<ExtArgs>>): Prisma__AsetClient<$Result.GetResult<Prisma.$AsetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Asets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsetCountArgs} args - Arguments to filter Asets to count.
     * @example
     * // Count the number of Asets
     * const count = await prisma.aset.count({
     *   where: {
     *     // ... the filter for the Asets we want to count
     *   }
     * })
    **/
    count<T extends AsetCountArgs>(
      args?: Subset<T, AsetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AsetAggregateArgs>(args: Subset<T, AsetAggregateArgs>): Prisma.PrismaPromise<GetAsetAggregateType<T>>

    /**
     * Group by Aset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsetGroupByArgs} args - Group by arguments.
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
      T extends AsetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsetGroupByArgs['orderBy'] }
        : { orderBy?: AsetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AsetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aset model
   */
  readonly fields: AsetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lokasi<T extends Aset$lokasiArgs<ExtArgs> = {}>(args?: Subset<T, Aset$lokasiArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subKategoriAset<T extends Aset$subKategoriAsetArgs<ExtArgs> = {}>(args?: Subset<T, Aset$subKategoriAsetArgs<ExtArgs>>): Prisma__SubAsetKategoriClient<$Result.GetResult<Prisma.$SubAsetKategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    maintenances<T extends Aset$maintenancesArgs<ExtArgs> = {}>(args?: Subset<T, Aset$maintenancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    perpindahan<T extends Aset$perpindahanArgs<ExtArgs> = {}>(args?: Subset<T, Aset$perpindahanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerpindahanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Aset model
   */
  interface AsetFieldRefs {
    readonly asetId: FieldRef<"Aset", 'String'>
    readonly lokasiId: FieldRef<"Aset", 'String'>
    readonly subKategoriAsetId: FieldRef<"Aset", 'String'>
    readonly kategoriAset: FieldRef<"Aset", 'AsetKategori'>
    readonly merkDanTipe: FieldRef<"Aset", 'String'>
    readonly tahun: FieldRef<"Aset", 'Int'>
    readonly kondisiAset: FieldRef<"Aset", 'AsetKondisi'>
    readonly statusAset: FieldRef<"Aset", 'AsetStatus'>
    readonly nomorSeri: FieldRef<"Aset", 'String'>
    readonly masaBerlaku: FieldRef<"Aset", 'DateTime'>
    readonly statusKepemilikan: FieldRef<"Aset", 'String'>
    readonly urlFoto: FieldRef<"Aset", 'String[]'>
    readonly urlQR: FieldRef<"Aset", 'String'>
    readonly createdAt: FieldRef<"Aset", 'DateTime'>
    readonly pic: FieldRef<"Aset", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Aset findUnique
   */
  export type AsetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aset
     */
    select?: AsetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aset
     */
    omit?: AsetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsetInclude<ExtArgs> | null
    /**
     * Filter, which Aset to fetch.
     */
    where: AsetWhereUniqueInput
  }

  /**
   * Aset findUniqueOrThrow
   */
  export type AsetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aset
     */
    select?: AsetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aset
     */
    omit?: AsetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsetInclude<ExtArgs> | null
    /**
     * Filter, which Aset to fetch.
     */
    where: AsetWhereUniqueInput
  }

  /**
   * Aset findFirst
   */
  export type AsetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aset
     */
    select?: AsetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aset
     */
    omit?: AsetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsetInclude<ExtArgs> | null
    /**
     * Filter, which Aset to fetch.
     */
    where?: AsetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asets to fetch.
     */
    orderBy?: AsetOrderByWithRelationInput | AsetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asets.
     */
    cursor?: AsetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asets.
     */
    distinct?: AsetScalarFieldEnum | AsetScalarFieldEnum[]
  }

  /**
   * Aset findFirstOrThrow
   */
  export type AsetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aset
     */
    select?: AsetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aset
     */
    omit?: AsetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsetInclude<ExtArgs> | null
    /**
     * Filter, which Aset to fetch.
     */
    where?: AsetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asets to fetch.
     */
    orderBy?: AsetOrderByWithRelationInput | AsetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asets.
     */
    cursor?: AsetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asets.
     */
    distinct?: AsetScalarFieldEnum | AsetScalarFieldEnum[]
  }

  /**
   * Aset findMany
   */
  export type AsetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aset
     */
    select?: AsetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aset
     */
    omit?: AsetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsetInclude<ExtArgs> | null
    /**
     * Filter, which Asets to fetch.
     */
    where?: AsetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asets to fetch.
     */
    orderBy?: AsetOrderByWithRelationInput | AsetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Asets.
     */
    cursor?: AsetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asets.
     */
    skip?: number
    distinct?: AsetScalarFieldEnum | AsetScalarFieldEnum[]
  }

  /**
   * Aset create
   */
  export type AsetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aset
     */
    select?: AsetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aset
     */
    omit?: AsetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsetInclude<ExtArgs> | null
    /**
     * The data needed to create a Aset.
     */
    data: XOR<AsetCreateInput, AsetUncheckedCreateInput>
  }

  /**
   * Aset createMany
   */
  export type AsetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Asets.
     */
    data: AsetCreateManyInput | AsetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aset createManyAndReturn
   */
  export type AsetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aset
     */
    select?: AsetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aset
     */
    omit?: AsetOmit<ExtArgs> | null
    /**
     * The data used to create many Asets.
     */
    data: AsetCreateManyInput | AsetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Aset update
   */
  export type AsetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aset
     */
    select?: AsetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aset
     */
    omit?: AsetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsetInclude<ExtArgs> | null
    /**
     * The data needed to update a Aset.
     */
    data: XOR<AsetUpdateInput, AsetUncheckedUpdateInput>
    /**
     * Choose, which Aset to update.
     */
    where: AsetWhereUniqueInput
  }

  /**
   * Aset updateMany
   */
  export type AsetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Asets.
     */
    data: XOR<AsetUpdateManyMutationInput, AsetUncheckedUpdateManyInput>
    /**
     * Filter which Asets to update
     */
    where?: AsetWhereInput
    /**
     * Limit how many Asets to update.
     */
    limit?: number
  }

  /**
   * Aset updateManyAndReturn
   */
  export type AsetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aset
     */
    select?: AsetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Aset
     */
    omit?: AsetOmit<ExtArgs> | null
    /**
     * The data used to update Asets.
     */
    data: XOR<AsetUpdateManyMutationInput, AsetUncheckedUpdateManyInput>
    /**
     * Filter which Asets to update
     */
    where?: AsetWhereInput
    /**
     * Limit how many Asets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Aset upsert
   */
  export type AsetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aset
     */
    select?: AsetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aset
     */
    omit?: AsetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsetInclude<ExtArgs> | null
    /**
     * The filter to search for the Aset to update in case it exists.
     */
    where: AsetWhereUniqueInput
    /**
     * In case the Aset found by the `where` argument doesn't exist, create a new Aset with this data.
     */
    create: XOR<AsetCreateInput, AsetUncheckedCreateInput>
    /**
     * In case the Aset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsetUpdateInput, AsetUncheckedUpdateInput>
  }

  /**
   * Aset delete
   */
  export type AsetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aset
     */
    select?: AsetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aset
     */
    omit?: AsetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsetInclude<ExtArgs> | null
    /**
     * Filter which Aset to delete.
     */
    where: AsetWhereUniqueInput
  }

  /**
   * Aset deleteMany
   */
  export type AsetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asets to delete
     */
    where?: AsetWhereInput
    /**
     * Limit how many Asets to delete.
     */
    limit?: number
  }

  /**
   * Aset.lokasi
   */
  export type Aset$lokasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lokasi
     */
    omit?: LokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    where?: LokasiWhereInput
  }

  /**
   * Aset.subKategoriAset
   */
  export type Aset$subKategoriAsetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAsetKategori
     */
    select?: SubAsetKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAsetKategori
     */
    omit?: SubAsetKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAsetKategoriInclude<ExtArgs> | null
    where?: SubAsetKategoriWhereInput
  }

  /**
   * Aset.maintenances
   */
  export type Aset$maintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    where?: MaintenanceWhereInput
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    cursor?: MaintenanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Aset.perpindahan
   */
  export type Aset$perpindahanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perpindahan
     */
    select?: PerpindahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perpindahan
     */
    omit?: PerpindahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerpindahanInclude<ExtArgs> | null
    where?: PerpindahanWhereInput
    orderBy?: PerpindahanOrderByWithRelationInput | PerpindahanOrderByWithRelationInput[]
    cursor?: PerpindahanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerpindahanScalarFieldEnum | PerpindahanScalarFieldEnum[]
  }

  /**
   * Aset without action
   */
  export type AsetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aset
     */
    select?: AsetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aset
     */
    omit?: AsetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsetInclude<ExtArgs> | null
  }


  /**
   * Model Maintenance
   */

  export type AggregateMaintenance = {
    _count: MaintenanceCountAggregateOutputType | null
    _min: MaintenanceMinAggregateOutputType | null
    _max: MaintenanceMaxAggregateOutputType | null
  }

  export type MaintenanceMinAggregateOutputType = {
    maintenanceId: string | null
    deskripsi: string | null
    idAset: string | null
    tanggalMulai: Date | null
    perkiraanSelesai: Date | null
    tanggalSelesai: Date | null
    statusMaintenance: $Enums.MaintenanceRequestStatus | null
    createdAt: Date | null
  }

  export type MaintenanceMaxAggregateOutputType = {
    maintenanceId: string | null
    deskripsi: string | null
    idAset: string | null
    tanggalMulai: Date | null
    perkiraanSelesai: Date | null
    tanggalSelesai: Date | null
    statusMaintenance: $Enums.MaintenanceRequestStatus | null
    createdAt: Date | null
  }

  export type MaintenanceCountAggregateOutputType = {
    maintenanceId: number
    deskripsi: number
    idAset: number
    tanggalMulai: number
    perkiraanSelesai: number
    tanggalSelesai: number
    statusMaintenance: number
    createdAt: number
    _all: number
  }


  export type MaintenanceMinAggregateInputType = {
    maintenanceId?: true
    deskripsi?: true
    idAset?: true
    tanggalMulai?: true
    perkiraanSelesai?: true
    tanggalSelesai?: true
    statusMaintenance?: true
    createdAt?: true
  }

  export type MaintenanceMaxAggregateInputType = {
    maintenanceId?: true
    deskripsi?: true
    idAset?: true
    tanggalMulai?: true
    perkiraanSelesai?: true
    tanggalSelesai?: true
    statusMaintenance?: true
    createdAt?: true
  }

  export type MaintenanceCountAggregateInputType = {
    maintenanceId?: true
    deskripsi?: true
    idAset?: true
    tanggalMulai?: true
    perkiraanSelesai?: true
    tanggalSelesai?: true
    statusMaintenance?: true
    createdAt?: true
    _all?: true
  }

  export type MaintenanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maintenance to aggregate.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Maintenances
    **/
    _count?: true | MaintenanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceMaxAggregateInputType
  }

  export type GetMaintenanceAggregateType<T extends MaintenanceAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenance[P]>
      : GetScalarType<T[P], AggregateMaintenance[P]>
  }




  export type MaintenanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceWhereInput
    orderBy?: MaintenanceOrderByWithAggregationInput | MaintenanceOrderByWithAggregationInput[]
    by: MaintenanceScalarFieldEnum[] | MaintenanceScalarFieldEnum
    having?: MaintenanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceCountAggregateInputType | true
    _min?: MaintenanceMinAggregateInputType
    _max?: MaintenanceMaxAggregateInputType
  }

  export type MaintenanceGroupByOutputType = {
    maintenanceId: string
    deskripsi: string | null
    idAset: string
    tanggalMulai: Date
    perkiraanSelesai: Date
    tanggalSelesai: Date | null
    statusMaintenance: $Enums.MaintenanceRequestStatus
    createdAt: Date
    _count: MaintenanceCountAggregateOutputType | null
    _min: MaintenanceMinAggregateOutputType | null
    _max: MaintenanceMaxAggregateOutputType | null
  }

  type GetMaintenanceGroupByPayload<T extends MaintenanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maintenanceId?: boolean
    deskripsi?: boolean
    idAset?: boolean
    tanggalMulai?: boolean
    perkiraanSelesai?: boolean
    tanggalSelesai?: boolean
    statusMaintenance?: boolean
    createdAt?: boolean
    aset?: boolean | AsetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance"]>

  export type MaintenanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maintenanceId?: boolean
    deskripsi?: boolean
    idAset?: boolean
    tanggalMulai?: boolean
    perkiraanSelesai?: boolean
    tanggalSelesai?: boolean
    statusMaintenance?: boolean
    createdAt?: boolean
    aset?: boolean | AsetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance"]>

  export type MaintenanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    maintenanceId?: boolean
    deskripsi?: boolean
    idAset?: boolean
    tanggalMulai?: boolean
    perkiraanSelesai?: boolean
    tanggalSelesai?: boolean
    statusMaintenance?: boolean
    createdAt?: boolean
    aset?: boolean | AsetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenance"]>

  export type MaintenanceSelectScalar = {
    maintenanceId?: boolean
    deskripsi?: boolean
    idAset?: boolean
    tanggalMulai?: boolean
    perkiraanSelesai?: boolean
    tanggalSelesai?: boolean
    statusMaintenance?: boolean
    createdAt?: boolean
  }

  export type MaintenanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"maintenanceId" | "deskripsi" | "idAset" | "tanggalMulai" | "perkiraanSelesai" | "tanggalSelesai" | "statusMaintenance" | "createdAt", ExtArgs["result"]["maintenance"]>
  export type MaintenanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aset?: boolean | AsetDefaultArgs<ExtArgs>
  }
  export type MaintenanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aset?: boolean | AsetDefaultArgs<ExtArgs>
  }
  export type MaintenanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aset?: boolean | AsetDefaultArgs<ExtArgs>
  }

  export type $MaintenancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Maintenance"
    objects: {
      aset: Prisma.$AsetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      maintenanceId: string
      deskripsi: string | null
      idAset: string
      tanggalMulai: Date
      perkiraanSelesai: Date
      tanggalSelesai: Date | null
      statusMaintenance: $Enums.MaintenanceRequestStatus
      createdAt: Date
    }, ExtArgs["result"]["maintenance"]>
    composites: {}
  }

  type MaintenanceGetPayload<S extends boolean | null | undefined | MaintenanceDefaultArgs> = $Result.GetResult<Prisma.$MaintenancePayload, S>

  type MaintenanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceCountAggregateInputType | true
    }

  export interface MaintenanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Maintenance'], meta: { name: 'Maintenance' } }
    /**
     * Find zero or one Maintenance that matches the filter.
     * @param {MaintenanceFindUniqueArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceFindUniqueArgs>(args: SelectSubset<T, MaintenanceFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Maintenance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceFindUniqueOrThrowArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maintenance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceFindFirstArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceFindFirstArgs>(args?: SelectSubset<T, MaintenanceFindFirstArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Maintenance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceFindFirstOrThrowArgs} args - Arguments to find a Maintenance
     * @example
     * // Get one Maintenance
     * const maintenance = await prisma.maintenance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Maintenances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Maintenances
     * const maintenances = await prisma.maintenance.findMany()
     * 
     * // Get first 10 Maintenances
     * const maintenances = await prisma.maintenance.findMany({ take: 10 })
     * 
     * // Only select the `maintenanceId`
     * const maintenanceWithMaintenanceIdOnly = await prisma.maintenance.findMany({ select: { maintenanceId: true } })
     * 
     */
    findMany<T extends MaintenanceFindManyArgs>(args?: SelectSubset<T, MaintenanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Maintenance.
     * @param {MaintenanceCreateArgs} args - Arguments to create a Maintenance.
     * @example
     * // Create one Maintenance
     * const Maintenance = await prisma.maintenance.create({
     *   data: {
     *     // ... data to create a Maintenance
     *   }
     * })
     * 
     */
    create<T extends MaintenanceCreateArgs>(args: SelectSubset<T, MaintenanceCreateArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Maintenances.
     * @param {MaintenanceCreateManyArgs} args - Arguments to create many Maintenances.
     * @example
     * // Create many Maintenances
     * const maintenance = await prisma.maintenance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceCreateManyArgs>(args?: SelectSubset<T, MaintenanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Maintenances and returns the data saved in the database.
     * @param {MaintenanceCreateManyAndReturnArgs} args - Arguments to create many Maintenances.
     * @example
     * // Create many Maintenances
     * const maintenance = await prisma.maintenance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Maintenances and only return the `maintenanceId`
     * const maintenanceWithMaintenanceIdOnly = await prisma.maintenance.createManyAndReturn({
     *   select: { maintenanceId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Maintenance.
     * @param {MaintenanceDeleteArgs} args - Arguments to delete one Maintenance.
     * @example
     * // Delete one Maintenance
     * const Maintenance = await prisma.maintenance.delete({
     *   where: {
     *     // ... filter to delete one Maintenance
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceDeleteArgs>(args: SelectSubset<T, MaintenanceDeleteArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Maintenance.
     * @param {MaintenanceUpdateArgs} args - Arguments to update one Maintenance.
     * @example
     * // Update one Maintenance
     * const maintenance = await prisma.maintenance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceUpdateArgs>(args: SelectSubset<T, MaintenanceUpdateArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Maintenances.
     * @param {MaintenanceDeleteManyArgs} args - Arguments to filter Maintenances to delete.
     * @example
     * // Delete a few Maintenances
     * const { count } = await prisma.maintenance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceDeleteManyArgs>(args?: SelectSubset<T, MaintenanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Maintenances
     * const maintenance = await prisma.maintenance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceUpdateManyArgs>(args: SelectSubset<T, MaintenanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Maintenances and returns the data updated in the database.
     * @param {MaintenanceUpdateManyAndReturnArgs} args - Arguments to update many Maintenances.
     * @example
     * // Update many Maintenances
     * const maintenance = await prisma.maintenance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Maintenances and only return the `maintenanceId`
     * const maintenanceWithMaintenanceIdOnly = await prisma.maintenance.updateManyAndReturn({
     *   select: { maintenanceId: true },
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
    updateManyAndReturn<T extends MaintenanceUpdateManyAndReturnArgs>(args: SelectSubset<T, MaintenanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Maintenance.
     * @param {MaintenanceUpsertArgs} args - Arguments to update or create a Maintenance.
     * @example
     * // Update or create a Maintenance
     * const maintenance = await prisma.maintenance.upsert({
     *   create: {
     *     // ... data to create a Maintenance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Maintenance we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceUpsertArgs>(args: SelectSubset<T, MaintenanceUpsertArgs<ExtArgs>>): Prisma__MaintenanceClient<$Result.GetResult<Prisma.$MaintenancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Maintenances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceCountArgs} args - Arguments to filter Maintenances to count.
     * @example
     * // Count the number of Maintenances
     * const count = await prisma.maintenance.count({
     *   where: {
     *     // ... the filter for the Maintenances we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceCountArgs>(
      args?: Subset<T, MaintenanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Maintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaintenanceAggregateArgs>(args: Subset<T, MaintenanceAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceAggregateType<T>>

    /**
     * Group by Maintenance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceGroupByArgs} args - Group by arguments.
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
      T extends MaintenanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaintenanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Maintenance model
   */
  readonly fields: MaintenanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Maintenance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aset<T extends AsetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AsetDefaultArgs<ExtArgs>>): Prisma__AsetClient<$Result.GetResult<Prisma.$AsetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Maintenance model
   */
  interface MaintenanceFieldRefs {
    readonly maintenanceId: FieldRef<"Maintenance", 'String'>
    readonly deskripsi: FieldRef<"Maintenance", 'String'>
    readonly idAset: FieldRef<"Maintenance", 'String'>
    readonly tanggalMulai: FieldRef<"Maintenance", 'DateTime'>
    readonly perkiraanSelesai: FieldRef<"Maintenance", 'DateTime'>
    readonly tanggalSelesai: FieldRef<"Maintenance", 'DateTime'>
    readonly statusMaintenance: FieldRef<"Maintenance", 'MaintenanceRequestStatus'>
    readonly createdAt: FieldRef<"Maintenance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Maintenance findUnique
   */
  export type MaintenanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance findUniqueOrThrow
   */
  export type MaintenanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance findFirst
   */
  export type MaintenanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maintenances.
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maintenances.
     */
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Maintenance findFirstOrThrow
   */
  export type MaintenanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenance to fetch.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Maintenances.
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Maintenances.
     */
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Maintenance findMany
   */
  export type MaintenanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter, which Maintenances to fetch.
     */
    where?: MaintenanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Maintenances to fetch.
     */
    orderBy?: MaintenanceOrderByWithRelationInput | MaintenanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Maintenances.
     */
    cursor?: MaintenanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Maintenances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Maintenances.
     */
    skip?: number
    distinct?: MaintenanceScalarFieldEnum | MaintenanceScalarFieldEnum[]
  }

  /**
   * Maintenance create
   */
  export type MaintenanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Maintenance.
     */
    data: XOR<MaintenanceCreateInput, MaintenanceUncheckedCreateInput>
  }

  /**
   * Maintenance createMany
   */
  export type MaintenanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Maintenances.
     */
    data: MaintenanceCreateManyInput | MaintenanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Maintenance createManyAndReturn
   */
  export type MaintenanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * The data used to create many Maintenances.
     */
    data: MaintenanceCreateManyInput | MaintenanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Maintenance update
   */
  export type MaintenanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Maintenance.
     */
    data: XOR<MaintenanceUpdateInput, MaintenanceUncheckedUpdateInput>
    /**
     * Choose, which Maintenance to update.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance updateMany
   */
  export type MaintenanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Maintenances.
     */
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyInput>
    /**
     * Filter which Maintenances to update
     */
    where?: MaintenanceWhereInput
    /**
     * Limit how many Maintenances to update.
     */
    limit?: number
  }

  /**
   * Maintenance updateManyAndReturn
   */
  export type MaintenanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * The data used to update Maintenances.
     */
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyInput>
    /**
     * Filter which Maintenances to update
     */
    where?: MaintenanceWhereInput
    /**
     * Limit how many Maintenances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Maintenance upsert
   */
  export type MaintenanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Maintenance to update in case it exists.
     */
    where: MaintenanceWhereUniqueInput
    /**
     * In case the Maintenance found by the `where` argument doesn't exist, create a new Maintenance with this data.
     */
    create: XOR<MaintenanceCreateInput, MaintenanceUncheckedCreateInput>
    /**
     * In case the Maintenance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceUpdateInput, MaintenanceUncheckedUpdateInput>
  }

  /**
   * Maintenance delete
   */
  export type MaintenanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
    /**
     * Filter which Maintenance to delete.
     */
    where: MaintenanceWhereUniqueInput
  }

  /**
   * Maintenance deleteMany
   */
  export type MaintenanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Maintenances to delete
     */
    where?: MaintenanceWhereInput
    /**
     * Limit how many Maintenances to delete.
     */
    limit?: number
  }

  /**
   * Maintenance without action
   */
  export type MaintenanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Maintenance
     */
    select?: MaintenanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Maintenance
     */
    omit?: MaintenanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceInclude<ExtArgs> | null
  }


  /**
   * Model Lokasi
   */

  export type AggregateLokasi = {
    _count: LokasiCountAggregateOutputType | null
    _min: LokasiMinAggregateOutputType | null
    _max: LokasiMaxAggregateOutputType | null
  }

  export type LokasiMinAggregateOutputType = {
    idLokasi: string | null
    lokasi: string | null
    kategoriAset: $Enums.AsetKategori | null
    createdAt: Date | null
  }

  export type LokasiMaxAggregateOutputType = {
    idLokasi: string | null
    lokasi: string | null
    kategoriAset: $Enums.AsetKategori | null
    createdAt: Date | null
  }

  export type LokasiCountAggregateOutputType = {
    idLokasi: number
    lokasi: number
    kategoriAset: number
    createdAt: number
    _all: number
  }


  export type LokasiMinAggregateInputType = {
    idLokasi?: true
    lokasi?: true
    kategoriAset?: true
    createdAt?: true
  }

  export type LokasiMaxAggregateInputType = {
    idLokasi?: true
    lokasi?: true
    kategoriAset?: true
    createdAt?: true
  }

  export type LokasiCountAggregateInputType = {
    idLokasi?: true
    lokasi?: true
    kategoriAset?: true
    createdAt?: true
    _all?: true
  }

  export type LokasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lokasi to aggregate.
     */
    where?: LokasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lokasis to fetch.
     */
    orderBy?: LokasiOrderByWithRelationInput | LokasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LokasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lokasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lokasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lokasis
    **/
    _count?: true | LokasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LokasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LokasiMaxAggregateInputType
  }

  export type GetLokasiAggregateType<T extends LokasiAggregateArgs> = {
        [P in keyof T & keyof AggregateLokasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLokasi[P]>
      : GetScalarType<T[P], AggregateLokasi[P]>
  }




  export type LokasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LokasiWhereInput
    orderBy?: LokasiOrderByWithAggregationInput | LokasiOrderByWithAggregationInput[]
    by: LokasiScalarFieldEnum[] | LokasiScalarFieldEnum
    having?: LokasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LokasiCountAggregateInputType | true
    _min?: LokasiMinAggregateInputType
    _max?: LokasiMaxAggregateInputType
  }

  export type LokasiGroupByOutputType = {
    idLokasi: string
    lokasi: string
    kategoriAset: $Enums.AsetKategori
    createdAt: Date
    _count: LokasiCountAggregateOutputType | null
    _min: LokasiMinAggregateOutputType | null
    _max: LokasiMaxAggregateOutputType | null
  }

  type GetLokasiGroupByPayload<T extends LokasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LokasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LokasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LokasiGroupByOutputType[P]>
            : GetScalarType<T[P], LokasiGroupByOutputType[P]>
        }
      >
    >


  export type LokasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idLokasi?: boolean
    lokasi?: boolean
    kategoriAset?: boolean
    createdAt?: boolean
    subKategoriAset?: boolean | Lokasi$subKategoriAsetArgs<ExtArgs>
    aset?: boolean | Lokasi$asetArgs<ExtArgs>
    perpindahan?: boolean | Lokasi$perpindahanArgs<ExtArgs>
    pengadaan?: boolean | Lokasi$pengadaanArgs<ExtArgs>
    _count?: boolean | LokasiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lokasi"]>

  export type LokasiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idLokasi?: boolean
    lokasi?: boolean
    kategoriAset?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["lokasi"]>

  export type LokasiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idLokasi?: boolean
    lokasi?: boolean
    kategoriAset?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["lokasi"]>

  export type LokasiSelectScalar = {
    idLokasi?: boolean
    lokasi?: boolean
    kategoriAset?: boolean
    createdAt?: boolean
  }

  export type LokasiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idLokasi" | "lokasi" | "kategoriAset" | "createdAt", ExtArgs["result"]["lokasi"]>
  export type LokasiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subKategoriAset?: boolean | Lokasi$subKategoriAsetArgs<ExtArgs>
    aset?: boolean | Lokasi$asetArgs<ExtArgs>
    perpindahan?: boolean | Lokasi$perpindahanArgs<ExtArgs>
    pengadaan?: boolean | Lokasi$pengadaanArgs<ExtArgs>
    _count?: boolean | LokasiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LokasiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LokasiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LokasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lokasi"
    objects: {
      subKategoriAset: Prisma.$SubAsetKategoriPayload<ExtArgs>[]
      aset: Prisma.$AsetPayload<ExtArgs>[]
      perpindahan: Prisma.$PerpindahanPayload<ExtArgs>[]
      pengadaan: Prisma.$PengadaanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idLokasi: string
      lokasi: string
      kategoriAset: $Enums.AsetKategori
      createdAt: Date
    }, ExtArgs["result"]["lokasi"]>
    composites: {}
  }

  type LokasiGetPayload<S extends boolean | null | undefined | LokasiDefaultArgs> = $Result.GetResult<Prisma.$LokasiPayload, S>

  type LokasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LokasiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LokasiCountAggregateInputType | true
    }

  export interface LokasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lokasi'], meta: { name: 'Lokasi' } }
    /**
     * Find zero or one Lokasi that matches the filter.
     * @param {LokasiFindUniqueArgs} args - Arguments to find a Lokasi
     * @example
     * // Get one Lokasi
     * const lokasi = await prisma.lokasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LokasiFindUniqueArgs>(args: SelectSubset<T, LokasiFindUniqueArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lokasi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LokasiFindUniqueOrThrowArgs} args - Arguments to find a Lokasi
     * @example
     * // Get one Lokasi
     * const lokasi = await prisma.lokasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LokasiFindUniqueOrThrowArgs>(args: SelectSubset<T, LokasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lokasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LokasiFindFirstArgs} args - Arguments to find a Lokasi
     * @example
     * // Get one Lokasi
     * const lokasi = await prisma.lokasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LokasiFindFirstArgs>(args?: SelectSubset<T, LokasiFindFirstArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lokasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LokasiFindFirstOrThrowArgs} args - Arguments to find a Lokasi
     * @example
     * // Get one Lokasi
     * const lokasi = await prisma.lokasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LokasiFindFirstOrThrowArgs>(args?: SelectSubset<T, LokasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lokasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LokasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lokasis
     * const lokasis = await prisma.lokasi.findMany()
     * 
     * // Get first 10 Lokasis
     * const lokasis = await prisma.lokasi.findMany({ take: 10 })
     * 
     * // Only select the `idLokasi`
     * const lokasiWithIdLokasiOnly = await prisma.lokasi.findMany({ select: { idLokasi: true } })
     * 
     */
    findMany<T extends LokasiFindManyArgs>(args?: SelectSubset<T, LokasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lokasi.
     * @param {LokasiCreateArgs} args - Arguments to create a Lokasi.
     * @example
     * // Create one Lokasi
     * const Lokasi = await prisma.lokasi.create({
     *   data: {
     *     // ... data to create a Lokasi
     *   }
     * })
     * 
     */
    create<T extends LokasiCreateArgs>(args: SelectSubset<T, LokasiCreateArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lokasis.
     * @param {LokasiCreateManyArgs} args - Arguments to create many Lokasis.
     * @example
     * // Create many Lokasis
     * const lokasi = await prisma.lokasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LokasiCreateManyArgs>(args?: SelectSubset<T, LokasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lokasis and returns the data saved in the database.
     * @param {LokasiCreateManyAndReturnArgs} args - Arguments to create many Lokasis.
     * @example
     * // Create many Lokasis
     * const lokasi = await prisma.lokasi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lokasis and only return the `idLokasi`
     * const lokasiWithIdLokasiOnly = await prisma.lokasi.createManyAndReturn({
     *   select: { idLokasi: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LokasiCreateManyAndReturnArgs>(args?: SelectSubset<T, LokasiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lokasi.
     * @param {LokasiDeleteArgs} args - Arguments to delete one Lokasi.
     * @example
     * // Delete one Lokasi
     * const Lokasi = await prisma.lokasi.delete({
     *   where: {
     *     // ... filter to delete one Lokasi
     *   }
     * })
     * 
     */
    delete<T extends LokasiDeleteArgs>(args: SelectSubset<T, LokasiDeleteArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lokasi.
     * @param {LokasiUpdateArgs} args - Arguments to update one Lokasi.
     * @example
     * // Update one Lokasi
     * const lokasi = await prisma.lokasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LokasiUpdateArgs>(args: SelectSubset<T, LokasiUpdateArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lokasis.
     * @param {LokasiDeleteManyArgs} args - Arguments to filter Lokasis to delete.
     * @example
     * // Delete a few Lokasis
     * const { count } = await prisma.lokasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LokasiDeleteManyArgs>(args?: SelectSubset<T, LokasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lokasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LokasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lokasis
     * const lokasi = await prisma.lokasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LokasiUpdateManyArgs>(args: SelectSubset<T, LokasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lokasis and returns the data updated in the database.
     * @param {LokasiUpdateManyAndReturnArgs} args - Arguments to update many Lokasis.
     * @example
     * // Update many Lokasis
     * const lokasi = await prisma.lokasi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lokasis and only return the `idLokasi`
     * const lokasiWithIdLokasiOnly = await prisma.lokasi.updateManyAndReturn({
     *   select: { idLokasi: true },
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
    updateManyAndReturn<T extends LokasiUpdateManyAndReturnArgs>(args: SelectSubset<T, LokasiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lokasi.
     * @param {LokasiUpsertArgs} args - Arguments to update or create a Lokasi.
     * @example
     * // Update or create a Lokasi
     * const lokasi = await prisma.lokasi.upsert({
     *   create: {
     *     // ... data to create a Lokasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lokasi we want to update
     *   }
     * })
     */
    upsert<T extends LokasiUpsertArgs>(args: SelectSubset<T, LokasiUpsertArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lokasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LokasiCountArgs} args - Arguments to filter Lokasis to count.
     * @example
     * // Count the number of Lokasis
     * const count = await prisma.lokasi.count({
     *   where: {
     *     // ... the filter for the Lokasis we want to count
     *   }
     * })
    **/
    count<T extends LokasiCountArgs>(
      args?: Subset<T, LokasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LokasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lokasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LokasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LokasiAggregateArgs>(args: Subset<T, LokasiAggregateArgs>): Prisma.PrismaPromise<GetLokasiAggregateType<T>>

    /**
     * Group by Lokasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LokasiGroupByArgs} args - Group by arguments.
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
      T extends LokasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LokasiGroupByArgs['orderBy'] }
        : { orderBy?: LokasiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LokasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLokasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lokasi model
   */
  readonly fields: LokasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lokasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LokasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subKategoriAset<T extends Lokasi$subKategoriAsetArgs<ExtArgs> = {}>(args?: Subset<T, Lokasi$subKategoriAsetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubAsetKategoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aset<T extends Lokasi$asetArgs<ExtArgs> = {}>(args?: Subset<T, Lokasi$asetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    perpindahan<T extends Lokasi$perpindahanArgs<ExtArgs> = {}>(args?: Subset<T, Lokasi$perpindahanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerpindahanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pengadaan<T extends Lokasi$pengadaanArgs<ExtArgs> = {}>(args?: Subset<T, Lokasi$pengadaanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PengadaanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lokasi model
   */
  interface LokasiFieldRefs {
    readonly idLokasi: FieldRef<"Lokasi", 'String'>
    readonly lokasi: FieldRef<"Lokasi", 'String'>
    readonly kategoriAset: FieldRef<"Lokasi", 'AsetKategori'>
    readonly createdAt: FieldRef<"Lokasi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lokasi findUnique
   */
  export type LokasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lokasi
     */
    omit?: LokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    /**
     * Filter, which Lokasi to fetch.
     */
    where: LokasiWhereUniqueInput
  }

  /**
   * Lokasi findUniqueOrThrow
   */
  export type LokasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lokasi
     */
    omit?: LokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    /**
     * Filter, which Lokasi to fetch.
     */
    where: LokasiWhereUniqueInput
  }

  /**
   * Lokasi findFirst
   */
  export type LokasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lokasi
     */
    omit?: LokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    /**
     * Filter, which Lokasi to fetch.
     */
    where?: LokasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lokasis to fetch.
     */
    orderBy?: LokasiOrderByWithRelationInput | LokasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lokasis.
     */
    cursor?: LokasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lokasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lokasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lokasis.
     */
    distinct?: LokasiScalarFieldEnum | LokasiScalarFieldEnum[]
  }

  /**
   * Lokasi findFirstOrThrow
   */
  export type LokasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lokasi
     */
    omit?: LokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    /**
     * Filter, which Lokasi to fetch.
     */
    where?: LokasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lokasis to fetch.
     */
    orderBy?: LokasiOrderByWithRelationInput | LokasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lokasis.
     */
    cursor?: LokasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lokasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lokasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lokasis.
     */
    distinct?: LokasiScalarFieldEnum | LokasiScalarFieldEnum[]
  }

  /**
   * Lokasi findMany
   */
  export type LokasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lokasi
     */
    omit?: LokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    /**
     * Filter, which Lokasis to fetch.
     */
    where?: LokasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lokasis to fetch.
     */
    orderBy?: LokasiOrderByWithRelationInput | LokasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lokasis.
     */
    cursor?: LokasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lokasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lokasis.
     */
    skip?: number
    distinct?: LokasiScalarFieldEnum | LokasiScalarFieldEnum[]
  }

  /**
   * Lokasi create
   */
  export type LokasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lokasi
     */
    omit?: LokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    /**
     * The data needed to create a Lokasi.
     */
    data: XOR<LokasiCreateInput, LokasiUncheckedCreateInput>
  }

  /**
   * Lokasi createMany
   */
  export type LokasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lokasis.
     */
    data: LokasiCreateManyInput | LokasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lokasi createManyAndReturn
   */
  export type LokasiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lokasi
     */
    omit?: LokasiOmit<ExtArgs> | null
    /**
     * The data used to create many Lokasis.
     */
    data: LokasiCreateManyInput | LokasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lokasi update
   */
  export type LokasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lokasi
     */
    omit?: LokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    /**
     * The data needed to update a Lokasi.
     */
    data: XOR<LokasiUpdateInput, LokasiUncheckedUpdateInput>
    /**
     * Choose, which Lokasi to update.
     */
    where: LokasiWhereUniqueInput
  }

  /**
   * Lokasi updateMany
   */
  export type LokasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lokasis.
     */
    data: XOR<LokasiUpdateManyMutationInput, LokasiUncheckedUpdateManyInput>
    /**
     * Filter which Lokasis to update
     */
    where?: LokasiWhereInput
    /**
     * Limit how many Lokasis to update.
     */
    limit?: number
  }

  /**
   * Lokasi updateManyAndReturn
   */
  export type LokasiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lokasi
     */
    omit?: LokasiOmit<ExtArgs> | null
    /**
     * The data used to update Lokasis.
     */
    data: XOR<LokasiUpdateManyMutationInput, LokasiUncheckedUpdateManyInput>
    /**
     * Filter which Lokasis to update
     */
    where?: LokasiWhereInput
    /**
     * Limit how many Lokasis to update.
     */
    limit?: number
  }

  /**
   * Lokasi upsert
   */
  export type LokasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lokasi
     */
    omit?: LokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    /**
     * The filter to search for the Lokasi to update in case it exists.
     */
    where: LokasiWhereUniqueInput
    /**
     * In case the Lokasi found by the `where` argument doesn't exist, create a new Lokasi with this data.
     */
    create: XOR<LokasiCreateInput, LokasiUncheckedCreateInput>
    /**
     * In case the Lokasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LokasiUpdateInput, LokasiUncheckedUpdateInput>
  }

  /**
   * Lokasi delete
   */
  export type LokasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lokasi
     */
    omit?: LokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    /**
     * Filter which Lokasi to delete.
     */
    where: LokasiWhereUniqueInput
  }

  /**
   * Lokasi deleteMany
   */
  export type LokasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lokasis to delete
     */
    where?: LokasiWhereInput
    /**
     * Limit how many Lokasis to delete.
     */
    limit?: number
  }

  /**
   * Lokasi.subKategoriAset
   */
  export type Lokasi$subKategoriAsetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAsetKategori
     */
    select?: SubAsetKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAsetKategori
     */
    omit?: SubAsetKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAsetKategoriInclude<ExtArgs> | null
    where?: SubAsetKategoriWhereInput
    orderBy?: SubAsetKategoriOrderByWithRelationInput | SubAsetKategoriOrderByWithRelationInput[]
    cursor?: SubAsetKategoriWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubAsetKategoriScalarFieldEnum | SubAsetKategoriScalarFieldEnum[]
  }

  /**
   * Lokasi.aset
   */
  export type Lokasi$asetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aset
     */
    select?: AsetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aset
     */
    omit?: AsetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsetInclude<ExtArgs> | null
    where?: AsetWhereInput
    orderBy?: AsetOrderByWithRelationInput | AsetOrderByWithRelationInput[]
    cursor?: AsetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsetScalarFieldEnum | AsetScalarFieldEnum[]
  }

  /**
   * Lokasi.perpindahan
   */
  export type Lokasi$perpindahanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perpindahan
     */
    select?: PerpindahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perpindahan
     */
    omit?: PerpindahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerpindahanInclude<ExtArgs> | null
    where?: PerpindahanWhereInput
    orderBy?: PerpindahanOrderByWithRelationInput | PerpindahanOrderByWithRelationInput[]
    cursor?: PerpindahanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerpindahanScalarFieldEnum | PerpindahanScalarFieldEnum[]
  }

  /**
   * Lokasi.pengadaan
   */
  export type Lokasi$pengadaanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengadaan
     */
    select?: PengadaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengadaan
     */
    omit?: PengadaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengadaanInclude<ExtArgs> | null
    where?: PengadaanWhereInput
    orderBy?: PengadaanOrderByWithRelationInput | PengadaanOrderByWithRelationInput[]
    cursor?: PengadaanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PengadaanScalarFieldEnum | PengadaanScalarFieldEnum[]
  }

  /**
   * Lokasi without action
   */
  export type LokasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lokasi
     */
    omit?: LokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
  }


  /**
   * Model Perpindahan
   */

  export type AggregatePerpindahan = {
    _count: PerpindahanCountAggregateOutputType | null
    _min: PerpindahanMinAggregateOutputType | null
    _max: PerpindahanMaxAggregateOutputType | null
  }

  export type PerpindahanMinAggregateOutputType = {
    idPindahan: string | null
    lokasiId: string | null
    idAset: string | null
    tempatLama: string | null
    tempatBaru: string | null
    tanggalPindah: Date | null
    createdAt: Date | null
  }

  export type PerpindahanMaxAggregateOutputType = {
    idPindahan: string | null
    lokasiId: string | null
    idAset: string | null
    tempatLama: string | null
    tempatBaru: string | null
    tanggalPindah: Date | null
    createdAt: Date | null
  }

  export type PerpindahanCountAggregateOutputType = {
    idPindahan: number
    lokasiId: number
    idAset: number
    tempatLama: number
    tempatBaru: number
    tanggalPindah: number
    createdAt: number
    _all: number
  }


  export type PerpindahanMinAggregateInputType = {
    idPindahan?: true
    lokasiId?: true
    idAset?: true
    tempatLama?: true
    tempatBaru?: true
    tanggalPindah?: true
    createdAt?: true
  }

  export type PerpindahanMaxAggregateInputType = {
    idPindahan?: true
    lokasiId?: true
    idAset?: true
    tempatLama?: true
    tempatBaru?: true
    tanggalPindah?: true
    createdAt?: true
  }

  export type PerpindahanCountAggregateInputType = {
    idPindahan?: true
    lokasiId?: true
    idAset?: true
    tempatLama?: true
    tempatBaru?: true
    tanggalPindah?: true
    createdAt?: true
    _all?: true
  }

  export type PerpindahanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perpindahan to aggregate.
     */
    where?: PerpindahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perpindahans to fetch.
     */
    orderBy?: PerpindahanOrderByWithRelationInput | PerpindahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerpindahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perpindahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perpindahans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Perpindahans
    **/
    _count?: true | PerpindahanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerpindahanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerpindahanMaxAggregateInputType
  }

  export type GetPerpindahanAggregateType<T extends PerpindahanAggregateArgs> = {
        [P in keyof T & keyof AggregatePerpindahan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerpindahan[P]>
      : GetScalarType<T[P], AggregatePerpindahan[P]>
  }




  export type PerpindahanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerpindahanWhereInput
    orderBy?: PerpindahanOrderByWithAggregationInput | PerpindahanOrderByWithAggregationInput[]
    by: PerpindahanScalarFieldEnum[] | PerpindahanScalarFieldEnum
    having?: PerpindahanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerpindahanCountAggregateInputType | true
    _min?: PerpindahanMinAggregateInputType
    _max?: PerpindahanMaxAggregateInputType
  }

  export type PerpindahanGroupByOutputType = {
    idPindahan: string
    lokasiId: string
    idAset: string
    tempatLama: string
    tempatBaru: string
    tanggalPindah: Date
    createdAt: Date
    _count: PerpindahanCountAggregateOutputType | null
    _min: PerpindahanMinAggregateOutputType | null
    _max: PerpindahanMaxAggregateOutputType | null
  }

  type GetPerpindahanGroupByPayload<T extends PerpindahanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerpindahanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerpindahanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerpindahanGroupByOutputType[P]>
            : GetScalarType<T[P], PerpindahanGroupByOutputType[P]>
        }
      >
    >


  export type PerpindahanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPindahan?: boolean
    lokasiId?: boolean
    idAset?: boolean
    tempatLama?: boolean
    tempatBaru?: boolean
    tanggalPindah?: boolean
    createdAt?: boolean
    lokasi?: boolean | LokasiDefaultArgs<ExtArgs>
    aset?: boolean | AsetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perpindahan"]>

  export type PerpindahanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPindahan?: boolean
    lokasiId?: boolean
    idAset?: boolean
    tempatLama?: boolean
    tempatBaru?: boolean
    tanggalPindah?: boolean
    createdAt?: boolean
    lokasi?: boolean | LokasiDefaultArgs<ExtArgs>
    aset?: boolean | AsetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perpindahan"]>

  export type PerpindahanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPindahan?: boolean
    lokasiId?: boolean
    idAset?: boolean
    tempatLama?: boolean
    tempatBaru?: boolean
    tanggalPindah?: boolean
    createdAt?: boolean
    lokasi?: boolean | LokasiDefaultArgs<ExtArgs>
    aset?: boolean | AsetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perpindahan"]>

  export type PerpindahanSelectScalar = {
    idPindahan?: boolean
    lokasiId?: boolean
    idAset?: boolean
    tempatLama?: boolean
    tempatBaru?: boolean
    tanggalPindah?: boolean
    createdAt?: boolean
  }

  export type PerpindahanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idPindahan" | "lokasiId" | "idAset" | "tempatLama" | "tempatBaru" | "tanggalPindah" | "createdAt", ExtArgs["result"]["perpindahan"]>
  export type PerpindahanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lokasi?: boolean | LokasiDefaultArgs<ExtArgs>
    aset?: boolean | AsetDefaultArgs<ExtArgs>
  }
  export type PerpindahanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lokasi?: boolean | LokasiDefaultArgs<ExtArgs>
    aset?: boolean | AsetDefaultArgs<ExtArgs>
  }
  export type PerpindahanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lokasi?: boolean | LokasiDefaultArgs<ExtArgs>
    aset?: boolean | AsetDefaultArgs<ExtArgs>
  }

  export type $PerpindahanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Perpindahan"
    objects: {
      lokasi: Prisma.$LokasiPayload<ExtArgs>
      aset: Prisma.$AsetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idPindahan: string
      lokasiId: string
      idAset: string
      tempatLama: string
      tempatBaru: string
      tanggalPindah: Date
      createdAt: Date
    }, ExtArgs["result"]["perpindahan"]>
    composites: {}
  }

  type PerpindahanGetPayload<S extends boolean | null | undefined | PerpindahanDefaultArgs> = $Result.GetResult<Prisma.$PerpindahanPayload, S>

  type PerpindahanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerpindahanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerpindahanCountAggregateInputType | true
    }

  export interface PerpindahanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Perpindahan'], meta: { name: 'Perpindahan' } }
    /**
     * Find zero or one Perpindahan that matches the filter.
     * @param {PerpindahanFindUniqueArgs} args - Arguments to find a Perpindahan
     * @example
     * // Get one Perpindahan
     * const perpindahan = await prisma.perpindahan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerpindahanFindUniqueArgs>(args: SelectSubset<T, PerpindahanFindUniqueArgs<ExtArgs>>): Prisma__PerpindahanClient<$Result.GetResult<Prisma.$PerpindahanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Perpindahan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerpindahanFindUniqueOrThrowArgs} args - Arguments to find a Perpindahan
     * @example
     * // Get one Perpindahan
     * const perpindahan = await prisma.perpindahan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerpindahanFindUniqueOrThrowArgs>(args: SelectSubset<T, PerpindahanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerpindahanClient<$Result.GetResult<Prisma.$PerpindahanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perpindahan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerpindahanFindFirstArgs} args - Arguments to find a Perpindahan
     * @example
     * // Get one Perpindahan
     * const perpindahan = await prisma.perpindahan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerpindahanFindFirstArgs>(args?: SelectSubset<T, PerpindahanFindFirstArgs<ExtArgs>>): Prisma__PerpindahanClient<$Result.GetResult<Prisma.$PerpindahanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perpindahan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerpindahanFindFirstOrThrowArgs} args - Arguments to find a Perpindahan
     * @example
     * // Get one Perpindahan
     * const perpindahan = await prisma.perpindahan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerpindahanFindFirstOrThrowArgs>(args?: SelectSubset<T, PerpindahanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerpindahanClient<$Result.GetResult<Prisma.$PerpindahanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Perpindahans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerpindahanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perpindahans
     * const perpindahans = await prisma.perpindahan.findMany()
     * 
     * // Get first 10 Perpindahans
     * const perpindahans = await prisma.perpindahan.findMany({ take: 10 })
     * 
     * // Only select the `idPindahan`
     * const perpindahanWithIdPindahanOnly = await prisma.perpindahan.findMany({ select: { idPindahan: true } })
     * 
     */
    findMany<T extends PerpindahanFindManyArgs>(args?: SelectSubset<T, PerpindahanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerpindahanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Perpindahan.
     * @param {PerpindahanCreateArgs} args - Arguments to create a Perpindahan.
     * @example
     * // Create one Perpindahan
     * const Perpindahan = await prisma.perpindahan.create({
     *   data: {
     *     // ... data to create a Perpindahan
     *   }
     * })
     * 
     */
    create<T extends PerpindahanCreateArgs>(args: SelectSubset<T, PerpindahanCreateArgs<ExtArgs>>): Prisma__PerpindahanClient<$Result.GetResult<Prisma.$PerpindahanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Perpindahans.
     * @param {PerpindahanCreateManyArgs} args - Arguments to create many Perpindahans.
     * @example
     * // Create many Perpindahans
     * const perpindahan = await prisma.perpindahan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerpindahanCreateManyArgs>(args?: SelectSubset<T, PerpindahanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Perpindahans and returns the data saved in the database.
     * @param {PerpindahanCreateManyAndReturnArgs} args - Arguments to create many Perpindahans.
     * @example
     * // Create many Perpindahans
     * const perpindahan = await prisma.perpindahan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Perpindahans and only return the `idPindahan`
     * const perpindahanWithIdPindahanOnly = await prisma.perpindahan.createManyAndReturn({
     *   select: { idPindahan: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PerpindahanCreateManyAndReturnArgs>(args?: SelectSubset<T, PerpindahanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerpindahanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Perpindahan.
     * @param {PerpindahanDeleteArgs} args - Arguments to delete one Perpindahan.
     * @example
     * // Delete one Perpindahan
     * const Perpindahan = await prisma.perpindahan.delete({
     *   where: {
     *     // ... filter to delete one Perpindahan
     *   }
     * })
     * 
     */
    delete<T extends PerpindahanDeleteArgs>(args: SelectSubset<T, PerpindahanDeleteArgs<ExtArgs>>): Prisma__PerpindahanClient<$Result.GetResult<Prisma.$PerpindahanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Perpindahan.
     * @param {PerpindahanUpdateArgs} args - Arguments to update one Perpindahan.
     * @example
     * // Update one Perpindahan
     * const perpindahan = await prisma.perpindahan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerpindahanUpdateArgs>(args: SelectSubset<T, PerpindahanUpdateArgs<ExtArgs>>): Prisma__PerpindahanClient<$Result.GetResult<Prisma.$PerpindahanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Perpindahans.
     * @param {PerpindahanDeleteManyArgs} args - Arguments to filter Perpindahans to delete.
     * @example
     * // Delete a few Perpindahans
     * const { count } = await prisma.perpindahan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerpindahanDeleteManyArgs>(args?: SelectSubset<T, PerpindahanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perpindahans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerpindahanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perpindahans
     * const perpindahan = await prisma.perpindahan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerpindahanUpdateManyArgs>(args: SelectSubset<T, PerpindahanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perpindahans and returns the data updated in the database.
     * @param {PerpindahanUpdateManyAndReturnArgs} args - Arguments to update many Perpindahans.
     * @example
     * // Update many Perpindahans
     * const perpindahan = await prisma.perpindahan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Perpindahans and only return the `idPindahan`
     * const perpindahanWithIdPindahanOnly = await prisma.perpindahan.updateManyAndReturn({
     *   select: { idPindahan: true },
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
    updateManyAndReturn<T extends PerpindahanUpdateManyAndReturnArgs>(args: SelectSubset<T, PerpindahanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerpindahanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Perpindahan.
     * @param {PerpindahanUpsertArgs} args - Arguments to update or create a Perpindahan.
     * @example
     * // Update or create a Perpindahan
     * const perpindahan = await prisma.perpindahan.upsert({
     *   create: {
     *     // ... data to create a Perpindahan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Perpindahan we want to update
     *   }
     * })
     */
    upsert<T extends PerpindahanUpsertArgs>(args: SelectSubset<T, PerpindahanUpsertArgs<ExtArgs>>): Prisma__PerpindahanClient<$Result.GetResult<Prisma.$PerpindahanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Perpindahans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerpindahanCountArgs} args - Arguments to filter Perpindahans to count.
     * @example
     * // Count the number of Perpindahans
     * const count = await prisma.perpindahan.count({
     *   where: {
     *     // ... the filter for the Perpindahans we want to count
     *   }
     * })
    **/
    count<T extends PerpindahanCountArgs>(
      args?: Subset<T, PerpindahanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerpindahanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Perpindahan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerpindahanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PerpindahanAggregateArgs>(args: Subset<T, PerpindahanAggregateArgs>): Prisma.PrismaPromise<GetPerpindahanAggregateType<T>>

    /**
     * Group by Perpindahan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerpindahanGroupByArgs} args - Group by arguments.
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
      T extends PerpindahanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerpindahanGroupByArgs['orderBy'] }
        : { orderBy?: PerpindahanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PerpindahanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerpindahanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Perpindahan model
   */
  readonly fields: PerpindahanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Perpindahan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerpindahanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lokasi<T extends LokasiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LokasiDefaultArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    aset<T extends AsetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AsetDefaultArgs<ExtArgs>>): Prisma__AsetClient<$Result.GetResult<Prisma.$AsetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Perpindahan model
   */
  interface PerpindahanFieldRefs {
    readonly idPindahan: FieldRef<"Perpindahan", 'String'>
    readonly lokasiId: FieldRef<"Perpindahan", 'String'>
    readonly idAset: FieldRef<"Perpindahan", 'String'>
    readonly tempatLama: FieldRef<"Perpindahan", 'String'>
    readonly tempatBaru: FieldRef<"Perpindahan", 'String'>
    readonly tanggalPindah: FieldRef<"Perpindahan", 'DateTime'>
    readonly createdAt: FieldRef<"Perpindahan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Perpindahan findUnique
   */
  export type PerpindahanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perpindahan
     */
    select?: PerpindahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perpindahan
     */
    omit?: PerpindahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerpindahanInclude<ExtArgs> | null
    /**
     * Filter, which Perpindahan to fetch.
     */
    where: PerpindahanWhereUniqueInput
  }

  /**
   * Perpindahan findUniqueOrThrow
   */
  export type PerpindahanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perpindahan
     */
    select?: PerpindahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perpindahan
     */
    omit?: PerpindahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerpindahanInclude<ExtArgs> | null
    /**
     * Filter, which Perpindahan to fetch.
     */
    where: PerpindahanWhereUniqueInput
  }

  /**
   * Perpindahan findFirst
   */
  export type PerpindahanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perpindahan
     */
    select?: PerpindahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perpindahan
     */
    omit?: PerpindahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerpindahanInclude<ExtArgs> | null
    /**
     * Filter, which Perpindahan to fetch.
     */
    where?: PerpindahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perpindahans to fetch.
     */
    orderBy?: PerpindahanOrderByWithRelationInput | PerpindahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perpindahans.
     */
    cursor?: PerpindahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perpindahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perpindahans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perpindahans.
     */
    distinct?: PerpindahanScalarFieldEnum | PerpindahanScalarFieldEnum[]
  }

  /**
   * Perpindahan findFirstOrThrow
   */
  export type PerpindahanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perpindahan
     */
    select?: PerpindahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perpindahan
     */
    omit?: PerpindahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerpindahanInclude<ExtArgs> | null
    /**
     * Filter, which Perpindahan to fetch.
     */
    where?: PerpindahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perpindahans to fetch.
     */
    orderBy?: PerpindahanOrderByWithRelationInput | PerpindahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perpindahans.
     */
    cursor?: PerpindahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perpindahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perpindahans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perpindahans.
     */
    distinct?: PerpindahanScalarFieldEnum | PerpindahanScalarFieldEnum[]
  }

  /**
   * Perpindahan findMany
   */
  export type PerpindahanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perpindahan
     */
    select?: PerpindahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perpindahan
     */
    omit?: PerpindahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerpindahanInclude<ExtArgs> | null
    /**
     * Filter, which Perpindahans to fetch.
     */
    where?: PerpindahanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perpindahans to fetch.
     */
    orderBy?: PerpindahanOrderByWithRelationInput | PerpindahanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Perpindahans.
     */
    cursor?: PerpindahanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perpindahans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perpindahans.
     */
    skip?: number
    distinct?: PerpindahanScalarFieldEnum | PerpindahanScalarFieldEnum[]
  }

  /**
   * Perpindahan create
   */
  export type PerpindahanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perpindahan
     */
    select?: PerpindahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perpindahan
     */
    omit?: PerpindahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerpindahanInclude<ExtArgs> | null
    /**
     * The data needed to create a Perpindahan.
     */
    data: XOR<PerpindahanCreateInput, PerpindahanUncheckedCreateInput>
  }

  /**
   * Perpindahan createMany
   */
  export type PerpindahanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Perpindahans.
     */
    data: PerpindahanCreateManyInput | PerpindahanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Perpindahan createManyAndReturn
   */
  export type PerpindahanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perpindahan
     */
    select?: PerpindahanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Perpindahan
     */
    omit?: PerpindahanOmit<ExtArgs> | null
    /**
     * The data used to create many Perpindahans.
     */
    data: PerpindahanCreateManyInput | PerpindahanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerpindahanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Perpindahan update
   */
  export type PerpindahanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perpindahan
     */
    select?: PerpindahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perpindahan
     */
    omit?: PerpindahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerpindahanInclude<ExtArgs> | null
    /**
     * The data needed to update a Perpindahan.
     */
    data: XOR<PerpindahanUpdateInput, PerpindahanUncheckedUpdateInput>
    /**
     * Choose, which Perpindahan to update.
     */
    where: PerpindahanWhereUniqueInput
  }

  /**
   * Perpindahan updateMany
   */
  export type PerpindahanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Perpindahans.
     */
    data: XOR<PerpindahanUpdateManyMutationInput, PerpindahanUncheckedUpdateManyInput>
    /**
     * Filter which Perpindahans to update
     */
    where?: PerpindahanWhereInput
    /**
     * Limit how many Perpindahans to update.
     */
    limit?: number
  }

  /**
   * Perpindahan updateManyAndReturn
   */
  export type PerpindahanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perpindahan
     */
    select?: PerpindahanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Perpindahan
     */
    omit?: PerpindahanOmit<ExtArgs> | null
    /**
     * The data used to update Perpindahans.
     */
    data: XOR<PerpindahanUpdateManyMutationInput, PerpindahanUncheckedUpdateManyInput>
    /**
     * Filter which Perpindahans to update
     */
    where?: PerpindahanWhereInput
    /**
     * Limit how many Perpindahans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerpindahanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Perpindahan upsert
   */
  export type PerpindahanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perpindahan
     */
    select?: PerpindahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perpindahan
     */
    omit?: PerpindahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerpindahanInclude<ExtArgs> | null
    /**
     * The filter to search for the Perpindahan to update in case it exists.
     */
    where: PerpindahanWhereUniqueInput
    /**
     * In case the Perpindahan found by the `where` argument doesn't exist, create a new Perpindahan with this data.
     */
    create: XOR<PerpindahanCreateInput, PerpindahanUncheckedCreateInput>
    /**
     * In case the Perpindahan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerpindahanUpdateInput, PerpindahanUncheckedUpdateInput>
  }

  /**
   * Perpindahan delete
   */
  export type PerpindahanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perpindahan
     */
    select?: PerpindahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perpindahan
     */
    omit?: PerpindahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerpindahanInclude<ExtArgs> | null
    /**
     * Filter which Perpindahan to delete.
     */
    where: PerpindahanWhereUniqueInput
  }

  /**
   * Perpindahan deleteMany
   */
  export type PerpindahanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perpindahans to delete
     */
    where?: PerpindahanWhereInput
    /**
     * Limit how many Perpindahans to delete.
     */
    limit?: number
  }

  /**
   * Perpindahan without action
   */
  export type PerpindahanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perpindahan
     */
    select?: PerpindahanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perpindahan
     */
    omit?: PerpindahanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerpindahanInclude<ExtArgs> | null
  }


  /**
   * Model Pengadaan
   */

  export type AggregatePengadaan = {
    _count: PengadaanCountAggregateOutputType | null
    _avg: PengadaanAvgAggregateOutputType | null
    _sum: PengadaanSumAggregateOutputType | null
    _min: PengadaanMinAggregateOutputType | null
    _max: PengadaanMaxAggregateOutputType | null
  }

  export type PengadaanAvgAggregateOutputType = {
    jumlahAset: number | null
    hargaSatuan: number | null
    totalHarga: number | null
  }

  export type PengadaanSumAggregateOutputType = {
    jumlahAset: number | null
    hargaSatuan: bigint | null
    totalHarga: bigint | null
  }

  export type PengadaanMinAggregateOutputType = {
    pengadaanId: string | null
    tanggalBeli: Date | null
    lokasiId: string | null
    kategoriAset: $Enums.AsetKategori | null
    namaAset: string | null
    jumlahAset: number | null
    hargaSatuan: bigint | null
    totalHarga: bigint | null
    vendor: string | null
    createdAt: Date | null
  }

  export type PengadaanMaxAggregateOutputType = {
    pengadaanId: string | null
    tanggalBeli: Date | null
    lokasiId: string | null
    kategoriAset: $Enums.AsetKategori | null
    namaAset: string | null
    jumlahAset: number | null
    hargaSatuan: bigint | null
    totalHarga: bigint | null
    vendor: string | null
    createdAt: Date | null
  }

  export type PengadaanCountAggregateOutputType = {
    pengadaanId: number
    tanggalBeli: number
    lokasiId: number
    kategoriAset: number
    namaAset: number
    jumlahAset: number
    hargaSatuan: number
    totalHarga: number
    vendor: number
    createdAt: number
    _all: number
  }


  export type PengadaanAvgAggregateInputType = {
    jumlahAset?: true
    hargaSatuan?: true
    totalHarga?: true
  }

  export type PengadaanSumAggregateInputType = {
    jumlahAset?: true
    hargaSatuan?: true
    totalHarga?: true
  }

  export type PengadaanMinAggregateInputType = {
    pengadaanId?: true
    tanggalBeli?: true
    lokasiId?: true
    kategoriAset?: true
    namaAset?: true
    jumlahAset?: true
    hargaSatuan?: true
    totalHarga?: true
    vendor?: true
    createdAt?: true
  }

  export type PengadaanMaxAggregateInputType = {
    pengadaanId?: true
    tanggalBeli?: true
    lokasiId?: true
    kategoriAset?: true
    namaAset?: true
    jumlahAset?: true
    hargaSatuan?: true
    totalHarga?: true
    vendor?: true
    createdAt?: true
  }

  export type PengadaanCountAggregateInputType = {
    pengadaanId?: true
    tanggalBeli?: true
    lokasiId?: true
    kategoriAset?: true
    namaAset?: true
    jumlahAset?: true
    hargaSatuan?: true
    totalHarga?: true
    vendor?: true
    createdAt?: true
    _all?: true
  }

  export type PengadaanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pengadaan to aggregate.
     */
    where?: PengadaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengadaans to fetch.
     */
    orderBy?: PengadaanOrderByWithRelationInput | PengadaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PengadaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengadaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengadaans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pengadaans
    **/
    _count?: true | PengadaanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PengadaanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PengadaanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PengadaanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PengadaanMaxAggregateInputType
  }

  export type GetPengadaanAggregateType<T extends PengadaanAggregateArgs> = {
        [P in keyof T & keyof AggregatePengadaan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePengadaan[P]>
      : GetScalarType<T[P], AggregatePengadaan[P]>
  }




  export type PengadaanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PengadaanWhereInput
    orderBy?: PengadaanOrderByWithAggregationInput | PengadaanOrderByWithAggregationInput[]
    by: PengadaanScalarFieldEnum[] | PengadaanScalarFieldEnum
    having?: PengadaanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PengadaanCountAggregateInputType | true
    _avg?: PengadaanAvgAggregateInputType
    _sum?: PengadaanSumAggregateInputType
    _min?: PengadaanMinAggregateInputType
    _max?: PengadaanMaxAggregateInputType
  }

  export type PengadaanGroupByOutputType = {
    pengadaanId: string
    tanggalBeli: Date
    lokasiId: string
    kategoriAset: $Enums.AsetKategori
    namaAset: string
    jumlahAset: number
    hargaSatuan: bigint
    totalHarga: bigint
    vendor: string
    createdAt: Date
    _count: PengadaanCountAggregateOutputType | null
    _avg: PengadaanAvgAggregateOutputType | null
    _sum: PengadaanSumAggregateOutputType | null
    _min: PengadaanMinAggregateOutputType | null
    _max: PengadaanMaxAggregateOutputType | null
  }

  type GetPengadaanGroupByPayload<T extends PengadaanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PengadaanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PengadaanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PengadaanGroupByOutputType[P]>
            : GetScalarType<T[P], PengadaanGroupByOutputType[P]>
        }
      >
    >


  export type PengadaanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pengadaanId?: boolean
    tanggalBeli?: boolean
    lokasiId?: boolean
    kategoriAset?: boolean
    namaAset?: boolean
    jumlahAset?: boolean
    hargaSatuan?: boolean
    totalHarga?: boolean
    vendor?: boolean
    createdAt?: boolean
    lokasi?: boolean | LokasiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pengadaan"]>

  export type PengadaanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pengadaanId?: boolean
    tanggalBeli?: boolean
    lokasiId?: boolean
    kategoriAset?: boolean
    namaAset?: boolean
    jumlahAset?: boolean
    hargaSatuan?: boolean
    totalHarga?: boolean
    vendor?: boolean
    createdAt?: boolean
    lokasi?: boolean | LokasiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pengadaan"]>

  export type PengadaanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pengadaanId?: boolean
    tanggalBeli?: boolean
    lokasiId?: boolean
    kategoriAset?: boolean
    namaAset?: boolean
    jumlahAset?: boolean
    hargaSatuan?: boolean
    totalHarga?: boolean
    vendor?: boolean
    createdAt?: boolean
    lokasi?: boolean | LokasiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pengadaan"]>

  export type PengadaanSelectScalar = {
    pengadaanId?: boolean
    tanggalBeli?: boolean
    lokasiId?: boolean
    kategoriAset?: boolean
    namaAset?: boolean
    jumlahAset?: boolean
    hargaSatuan?: boolean
    totalHarga?: boolean
    vendor?: boolean
    createdAt?: boolean
  }

  export type PengadaanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pengadaanId" | "tanggalBeli" | "lokasiId" | "kategoriAset" | "namaAset" | "jumlahAset" | "hargaSatuan" | "totalHarga" | "vendor" | "createdAt", ExtArgs["result"]["pengadaan"]>
  export type PengadaanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lokasi?: boolean | LokasiDefaultArgs<ExtArgs>
  }
  export type PengadaanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lokasi?: boolean | LokasiDefaultArgs<ExtArgs>
  }
  export type PengadaanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lokasi?: boolean | LokasiDefaultArgs<ExtArgs>
  }

  export type $PengadaanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pengadaan"
    objects: {
      lokasi: Prisma.$LokasiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pengadaanId: string
      tanggalBeli: Date
      lokasiId: string
      kategoriAset: $Enums.AsetKategori
      namaAset: string
      jumlahAset: number
      hargaSatuan: bigint
      totalHarga: bigint
      vendor: string
      createdAt: Date
    }, ExtArgs["result"]["pengadaan"]>
    composites: {}
  }

  type PengadaanGetPayload<S extends boolean | null | undefined | PengadaanDefaultArgs> = $Result.GetResult<Prisma.$PengadaanPayload, S>

  type PengadaanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PengadaanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PengadaanCountAggregateInputType | true
    }

  export interface PengadaanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pengadaan'], meta: { name: 'Pengadaan' } }
    /**
     * Find zero or one Pengadaan that matches the filter.
     * @param {PengadaanFindUniqueArgs} args - Arguments to find a Pengadaan
     * @example
     * // Get one Pengadaan
     * const pengadaan = await prisma.pengadaan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PengadaanFindUniqueArgs>(args: SelectSubset<T, PengadaanFindUniqueArgs<ExtArgs>>): Prisma__PengadaanClient<$Result.GetResult<Prisma.$PengadaanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pengadaan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PengadaanFindUniqueOrThrowArgs} args - Arguments to find a Pengadaan
     * @example
     * // Get one Pengadaan
     * const pengadaan = await prisma.pengadaan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PengadaanFindUniqueOrThrowArgs>(args: SelectSubset<T, PengadaanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PengadaanClient<$Result.GetResult<Prisma.$PengadaanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengadaan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengadaanFindFirstArgs} args - Arguments to find a Pengadaan
     * @example
     * // Get one Pengadaan
     * const pengadaan = await prisma.pengadaan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PengadaanFindFirstArgs>(args?: SelectSubset<T, PengadaanFindFirstArgs<ExtArgs>>): Prisma__PengadaanClient<$Result.GetResult<Prisma.$PengadaanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengadaan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengadaanFindFirstOrThrowArgs} args - Arguments to find a Pengadaan
     * @example
     * // Get one Pengadaan
     * const pengadaan = await prisma.pengadaan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PengadaanFindFirstOrThrowArgs>(args?: SelectSubset<T, PengadaanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PengadaanClient<$Result.GetResult<Prisma.$PengadaanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pengadaans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengadaanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pengadaans
     * const pengadaans = await prisma.pengadaan.findMany()
     * 
     * // Get first 10 Pengadaans
     * const pengadaans = await prisma.pengadaan.findMany({ take: 10 })
     * 
     * // Only select the `pengadaanId`
     * const pengadaanWithPengadaanIdOnly = await prisma.pengadaan.findMany({ select: { pengadaanId: true } })
     * 
     */
    findMany<T extends PengadaanFindManyArgs>(args?: SelectSubset<T, PengadaanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PengadaanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pengadaan.
     * @param {PengadaanCreateArgs} args - Arguments to create a Pengadaan.
     * @example
     * // Create one Pengadaan
     * const Pengadaan = await prisma.pengadaan.create({
     *   data: {
     *     // ... data to create a Pengadaan
     *   }
     * })
     * 
     */
    create<T extends PengadaanCreateArgs>(args: SelectSubset<T, PengadaanCreateArgs<ExtArgs>>): Prisma__PengadaanClient<$Result.GetResult<Prisma.$PengadaanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pengadaans.
     * @param {PengadaanCreateManyArgs} args - Arguments to create many Pengadaans.
     * @example
     * // Create many Pengadaans
     * const pengadaan = await prisma.pengadaan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PengadaanCreateManyArgs>(args?: SelectSubset<T, PengadaanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pengadaans and returns the data saved in the database.
     * @param {PengadaanCreateManyAndReturnArgs} args - Arguments to create many Pengadaans.
     * @example
     * // Create many Pengadaans
     * const pengadaan = await prisma.pengadaan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pengadaans and only return the `pengadaanId`
     * const pengadaanWithPengadaanIdOnly = await prisma.pengadaan.createManyAndReturn({
     *   select: { pengadaanId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PengadaanCreateManyAndReturnArgs>(args?: SelectSubset<T, PengadaanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PengadaanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pengadaan.
     * @param {PengadaanDeleteArgs} args - Arguments to delete one Pengadaan.
     * @example
     * // Delete one Pengadaan
     * const Pengadaan = await prisma.pengadaan.delete({
     *   where: {
     *     // ... filter to delete one Pengadaan
     *   }
     * })
     * 
     */
    delete<T extends PengadaanDeleteArgs>(args: SelectSubset<T, PengadaanDeleteArgs<ExtArgs>>): Prisma__PengadaanClient<$Result.GetResult<Prisma.$PengadaanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pengadaan.
     * @param {PengadaanUpdateArgs} args - Arguments to update one Pengadaan.
     * @example
     * // Update one Pengadaan
     * const pengadaan = await prisma.pengadaan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PengadaanUpdateArgs>(args: SelectSubset<T, PengadaanUpdateArgs<ExtArgs>>): Prisma__PengadaanClient<$Result.GetResult<Prisma.$PengadaanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pengadaans.
     * @param {PengadaanDeleteManyArgs} args - Arguments to filter Pengadaans to delete.
     * @example
     * // Delete a few Pengadaans
     * const { count } = await prisma.pengadaan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PengadaanDeleteManyArgs>(args?: SelectSubset<T, PengadaanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pengadaans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengadaanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pengadaans
     * const pengadaan = await prisma.pengadaan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PengadaanUpdateManyArgs>(args: SelectSubset<T, PengadaanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pengadaans and returns the data updated in the database.
     * @param {PengadaanUpdateManyAndReturnArgs} args - Arguments to update many Pengadaans.
     * @example
     * // Update many Pengadaans
     * const pengadaan = await prisma.pengadaan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pengadaans and only return the `pengadaanId`
     * const pengadaanWithPengadaanIdOnly = await prisma.pengadaan.updateManyAndReturn({
     *   select: { pengadaanId: true },
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
    updateManyAndReturn<T extends PengadaanUpdateManyAndReturnArgs>(args: SelectSubset<T, PengadaanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PengadaanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pengadaan.
     * @param {PengadaanUpsertArgs} args - Arguments to update or create a Pengadaan.
     * @example
     * // Update or create a Pengadaan
     * const pengadaan = await prisma.pengadaan.upsert({
     *   create: {
     *     // ... data to create a Pengadaan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pengadaan we want to update
     *   }
     * })
     */
    upsert<T extends PengadaanUpsertArgs>(args: SelectSubset<T, PengadaanUpsertArgs<ExtArgs>>): Prisma__PengadaanClient<$Result.GetResult<Prisma.$PengadaanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pengadaans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengadaanCountArgs} args - Arguments to filter Pengadaans to count.
     * @example
     * // Count the number of Pengadaans
     * const count = await prisma.pengadaan.count({
     *   where: {
     *     // ... the filter for the Pengadaans we want to count
     *   }
     * })
    **/
    count<T extends PengadaanCountArgs>(
      args?: Subset<T, PengadaanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PengadaanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pengadaan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengadaanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PengadaanAggregateArgs>(args: Subset<T, PengadaanAggregateArgs>): Prisma.PrismaPromise<GetPengadaanAggregateType<T>>

    /**
     * Group by Pengadaan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengadaanGroupByArgs} args - Group by arguments.
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
      T extends PengadaanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PengadaanGroupByArgs['orderBy'] }
        : { orderBy?: PengadaanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PengadaanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPengadaanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pengadaan model
   */
  readonly fields: PengadaanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pengadaan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PengadaanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lokasi<T extends LokasiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LokasiDefaultArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pengadaan model
   */
  interface PengadaanFieldRefs {
    readonly pengadaanId: FieldRef<"Pengadaan", 'String'>
    readonly tanggalBeli: FieldRef<"Pengadaan", 'DateTime'>
    readonly lokasiId: FieldRef<"Pengadaan", 'String'>
    readonly kategoriAset: FieldRef<"Pengadaan", 'AsetKategori'>
    readonly namaAset: FieldRef<"Pengadaan", 'String'>
    readonly jumlahAset: FieldRef<"Pengadaan", 'Int'>
    readonly hargaSatuan: FieldRef<"Pengadaan", 'BigInt'>
    readonly totalHarga: FieldRef<"Pengadaan", 'BigInt'>
    readonly vendor: FieldRef<"Pengadaan", 'String'>
    readonly createdAt: FieldRef<"Pengadaan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pengadaan findUnique
   */
  export type PengadaanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengadaan
     */
    select?: PengadaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengadaan
     */
    omit?: PengadaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengadaanInclude<ExtArgs> | null
    /**
     * Filter, which Pengadaan to fetch.
     */
    where: PengadaanWhereUniqueInput
  }

  /**
   * Pengadaan findUniqueOrThrow
   */
  export type PengadaanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengadaan
     */
    select?: PengadaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengadaan
     */
    omit?: PengadaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengadaanInclude<ExtArgs> | null
    /**
     * Filter, which Pengadaan to fetch.
     */
    where: PengadaanWhereUniqueInput
  }

  /**
   * Pengadaan findFirst
   */
  export type PengadaanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengadaan
     */
    select?: PengadaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengadaan
     */
    omit?: PengadaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengadaanInclude<ExtArgs> | null
    /**
     * Filter, which Pengadaan to fetch.
     */
    where?: PengadaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengadaans to fetch.
     */
    orderBy?: PengadaanOrderByWithRelationInput | PengadaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pengadaans.
     */
    cursor?: PengadaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengadaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengadaans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pengadaans.
     */
    distinct?: PengadaanScalarFieldEnum | PengadaanScalarFieldEnum[]
  }

  /**
   * Pengadaan findFirstOrThrow
   */
  export type PengadaanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengadaan
     */
    select?: PengadaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengadaan
     */
    omit?: PengadaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengadaanInclude<ExtArgs> | null
    /**
     * Filter, which Pengadaan to fetch.
     */
    where?: PengadaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengadaans to fetch.
     */
    orderBy?: PengadaanOrderByWithRelationInput | PengadaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pengadaans.
     */
    cursor?: PengadaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengadaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengadaans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pengadaans.
     */
    distinct?: PengadaanScalarFieldEnum | PengadaanScalarFieldEnum[]
  }

  /**
   * Pengadaan findMany
   */
  export type PengadaanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengadaan
     */
    select?: PengadaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengadaan
     */
    omit?: PengadaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengadaanInclude<ExtArgs> | null
    /**
     * Filter, which Pengadaans to fetch.
     */
    where?: PengadaanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pengadaans to fetch.
     */
    orderBy?: PengadaanOrderByWithRelationInput | PengadaanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pengadaans.
     */
    cursor?: PengadaanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pengadaans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pengadaans.
     */
    skip?: number
    distinct?: PengadaanScalarFieldEnum | PengadaanScalarFieldEnum[]
  }

  /**
   * Pengadaan create
   */
  export type PengadaanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengadaan
     */
    select?: PengadaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengadaan
     */
    omit?: PengadaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengadaanInclude<ExtArgs> | null
    /**
     * The data needed to create a Pengadaan.
     */
    data: XOR<PengadaanCreateInput, PengadaanUncheckedCreateInput>
  }

  /**
   * Pengadaan createMany
   */
  export type PengadaanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pengadaans.
     */
    data: PengadaanCreateManyInput | PengadaanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pengadaan createManyAndReturn
   */
  export type PengadaanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengadaan
     */
    select?: PengadaanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pengadaan
     */
    omit?: PengadaanOmit<ExtArgs> | null
    /**
     * The data used to create many Pengadaans.
     */
    data: PengadaanCreateManyInput | PengadaanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengadaanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pengadaan update
   */
  export type PengadaanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengadaan
     */
    select?: PengadaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengadaan
     */
    omit?: PengadaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengadaanInclude<ExtArgs> | null
    /**
     * The data needed to update a Pengadaan.
     */
    data: XOR<PengadaanUpdateInput, PengadaanUncheckedUpdateInput>
    /**
     * Choose, which Pengadaan to update.
     */
    where: PengadaanWhereUniqueInput
  }

  /**
   * Pengadaan updateMany
   */
  export type PengadaanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pengadaans.
     */
    data: XOR<PengadaanUpdateManyMutationInput, PengadaanUncheckedUpdateManyInput>
    /**
     * Filter which Pengadaans to update
     */
    where?: PengadaanWhereInput
    /**
     * Limit how many Pengadaans to update.
     */
    limit?: number
  }

  /**
   * Pengadaan updateManyAndReturn
   */
  export type PengadaanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengadaan
     */
    select?: PengadaanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pengadaan
     */
    omit?: PengadaanOmit<ExtArgs> | null
    /**
     * The data used to update Pengadaans.
     */
    data: XOR<PengadaanUpdateManyMutationInput, PengadaanUncheckedUpdateManyInput>
    /**
     * Filter which Pengadaans to update
     */
    where?: PengadaanWhereInput
    /**
     * Limit how many Pengadaans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengadaanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pengadaan upsert
   */
  export type PengadaanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengadaan
     */
    select?: PengadaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengadaan
     */
    omit?: PengadaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengadaanInclude<ExtArgs> | null
    /**
     * The filter to search for the Pengadaan to update in case it exists.
     */
    where: PengadaanWhereUniqueInput
    /**
     * In case the Pengadaan found by the `where` argument doesn't exist, create a new Pengadaan with this data.
     */
    create: XOR<PengadaanCreateInput, PengadaanUncheckedCreateInput>
    /**
     * In case the Pengadaan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PengadaanUpdateInput, PengadaanUncheckedUpdateInput>
  }

  /**
   * Pengadaan delete
   */
  export type PengadaanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengadaan
     */
    select?: PengadaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengadaan
     */
    omit?: PengadaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengadaanInclude<ExtArgs> | null
    /**
     * Filter which Pengadaan to delete.
     */
    where: PengadaanWhereUniqueInput
  }

  /**
   * Pengadaan deleteMany
   */
  export type PengadaanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pengadaans to delete
     */
    where?: PengadaanWhereInput
    /**
     * Limit how many Pengadaans to delete.
     */
    limit?: number
  }

  /**
   * Pengadaan without action
   */
  export type PengadaanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pengadaan
     */
    select?: PengadaanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pengadaan
     */
    omit?: PengadaanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PengadaanInclude<ExtArgs> | null
  }


  /**
   * Model Notifikasi
   */

  export type AggregateNotifikasi = {
    _count: NotifikasiCountAggregateOutputType | null
    _avg: NotifikasiAvgAggregateOutputType | null
    _sum: NotifikasiSumAggregateOutputType | null
    _min: NotifikasiMinAggregateOutputType | null
    _max: NotifikasiMaxAggregateOutputType | null
  }

  export type NotifikasiAvgAggregateOutputType = {
    notifId: number | null
  }

  export type NotifikasiSumAggregateOutputType = {
    notifId: number | null
  }

  export type NotifikasiMinAggregateOutputType = {
    notifId: number | null
  }

  export type NotifikasiMaxAggregateOutputType = {
    notifId: number | null
  }

  export type NotifikasiCountAggregateOutputType = {
    notifId: number
    _all: number
  }


  export type NotifikasiAvgAggregateInputType = {
    notifId?: true
  }

  export type NotifikasiSumAggregateInputType = {
    notifId?: true
  }

  export type NotifikasiMinAggregateInputType = {
    notifId?: true
  }

  export type NotifikasiMaxAggregateInputType = {
    notifId?: true
  }

  export type NotifikasiCountAggregateInputType = {
    notifId?: true
    _all?: true
  }

  export type NotifikasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifikasi to aggregate.
     */
    where?: NotifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifikasis to fetch.
     */
    orderBy?: NotifikasiOrderByWithRelationInput | NotifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifikasis
    **/
    _count?: true | NotifikasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotifikasiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotifikasiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotifikasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotifikasiMaxAggregateInputType
  }

  export type GetNotifikasiAggregateType<T extends NotifikasiAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifikasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifikasi[P]>
      : GetScalarType<T[P], AggregateNotifikasi[P]>
  }




  export type NotifikasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotifikasiWhereInput
    orderBy?: NotifikasiOrderByWithAggregationInput | NotifikasiOrderByWithAggregationInput[]
    by: NotifikasiScalarFieldEnum[] | NotifikasiScalarFieldEnum
    having?: NotifikasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotifikasiCountAggregateInputType | true
    _avg?: NotifikasiAvgAggregateInputType
    _sum?: NotifikasiSumAggregateInputType
    _min?: NotifikasiMinAggregateInputType
    _max?: NotifikasiMaxAggregateInputType
  }

  export type NotifikasiGroupByOutputType = {
    notifId: number
    _count: NotifikasiCountAggregateOutputType | null
    _avg: NotifikasiAvgAggregateOutputType | null
    _sum: NotifikasiSumAggregateOutputType | null
    _min: NotifikasiMinAggregateOutputType | null
    _max: NotifikasiMaxAggregateOutputType | null
  }

  type GetNotifikasiGroupByPayload<T extends NotifikasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotifikasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotifikasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotifikasiGroupByOutputType[P]>
            : GetScalarType<T[P], NotifikasiGroupByOutputType[P]>
        }
      >
    >


  export type NotifikasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notifId?: boolean
  }, ExtArgs["result"]["notifikasi"]>

  export type NotifikasiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notifId?: boolean
  }, ExtArgs["result"]["notifikasi"]>

  export type NotifikasiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notifId?: boolean
  }, ExtArgs["result"]["notifikasi"]>

  export type NotifikasiSelectScalar = {
    notifId?: boolean
  }

  export type NotifikasiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"notifId", ExtArgs["result"]["notifikasi"]>

  export type $NotifikasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notifikasi"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      notifId: number
    }, ExtArgs["result"]["notifikasi"]>
    composites: {}
  }

  type NotifikasiGetPayload<S extends boolean | null | undefined | NotifikasiDefaultArgs> = $Result.GetResult<Prisma.$NotifikasiPayload, S>

  type NotifikasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotifikasiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotifikasiCountAggregateInputType | true
    }

  export interface NotifikasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notifikasi'], meta: { name: 'Notifikasi' } }
    /**
     * Find zero or one Notifikasi that matches the filter.
     * @param {NotifikasiFindUniqueArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotifikasiFindUniqueArgs>(args: SelectSubset<T, NotifikasiFindUniqueArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifikasi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotifikasiFindUniqueOrThrowArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotifikasiFindUniqueOrThrowArgs>(args: SelectSubset<T, NotifikasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifikasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiFindFirstArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotifikasiFindFirstArgs>(args?: SelectSubset<T, NotifikasiFindFirstArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifikasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiFindFirstOrThrowArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotifikasiFindFirstOrThrowArgs>(args?: SelectSubset<T, NotifikasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifikasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifikasis
     * const notifikasis = await prisma.notifikasi.findMany()
     * 
     * // Get first 10 Notifikasis
     * const notifikasis = await prisma.notifikasi.findMany({ take: 10 })
     * 
     * // Only select the `notifId`
     * const notifikasiWithNotifIdOnly = await prisma.notifikasi.findMany({ select: { notifId: true } })
     * 
     */
    findMany<T extends NotifikasiFindManyArgs>(args?: SelectSubset<T, NotifikasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifikasi.
     * @param {NotifikasiCreateArgs} args - Arguments to create a Notifikasi.
     * @example
     * // Create one Notifikasi
     * const Notifikasi = await prisma.notifikasi.create({
     *   data: {
     *     // ... data to create a Notifikasi
     *   }
     * })
     * 
     */
    create<T extends NotifikasiCreateArgs>(args: SelectSubset<T, NotifikasiCreateArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifikasis.
     * @param {NotifikasiCreateManyArgs} args - Arguments to create many Notifikasis.
     * @example
     * // Create many Notifikasis
     * const notifikasi = await prisma.notifikasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotifikasiCreateManyArgs>(args?: SelectSubset<T, NotifikasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifikasis and returns the data saved in the database.
     * @param {NotifikasiCreateManyAndReturnArgs} args - Arguments to create many Notifikasis.
     * @example
     * // Create many Notifikasis
     * const notifikasi = await prisma.notifikasi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifikasis and only return the `notifId`
     * const notifikasiWithNotifIdOnly = await prisma.notifikasi.createManyAndReturn({
     *   select: { notifId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotifikasiCreateManyAndReturnArgs>(args?: SelectSubset<T, NotifikasiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifikasi.
     * @param {NotifikasiDeleteArgs} args - Arguments to delete one Notifikasi.
     * @example
     * // Delete one Notifikasi
     * const Notifikasi = await prisma.notifikasi.delete({
     *   where: {
     *     // ... filter to delete one Notifikasi
     *   }
     * })
     * 
     */
    delete<T extends NotifikasiDeleteArgs>(args: SelectSubset<T, NotifikasiDeleteArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifikasi.
     * @param {NotifikasiUpdateArgs} args - Arguments to update one Notifikasi.
     * @example
     * // Update one Notifikasi
     * const notifikasi = await prisma.notifikasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotifikasiUpdateArgs>(args: SelectSubset<T, NotifikasiUpdateArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifikasis.
     * @param {NotifikasiDeleteManyArgs} args - Arguments to filter Notifikasis to delete.
     * @example
     * // Delete a few Notifikasis
     * const { count } = await prisma.notifikasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotifikasiDeleteManyArgs>(args?: SelectSubset<T, NotifikasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifikasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifikasis
     * const notifikasi = await prisma.notifikasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotifikasiUpdateManyArgs>(args: SelectSubset<T, NotifikasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifikasis and returns the data updated in the database.
     * @param {NotifikasiUpdateManyAndReturnArgs} args - Arguments to update many Notifikasis.
     * @example
     * // Update many Notifikasis
     * const notifikasi = await prisma.notifikasi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifikasis and only return the `notifId`
     * const notifikasiWithNotifIdOnly = await prisma.notifikasi.updateManyAndReturn({
     *   select: { notifId: true },
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
    updateManyAndReturn<T extends NotifikasiUpdateManyAndReturnArgs>(args: SelectSubset<T, NotifikasiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifikasi.
     * @param {NotifikasiUpsertArgs} args - Arguments to update or create a Notifikasi.
     * @example
     * // Update or create a Notifikasi
     * const notifikasi = await prisma.notifikasi.upsert({
     *   create: {
     *     // ... data to create a Notifikasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifikasi we want to update
     *   }
     * })
     */
    upsert<T extends NotifikasiUpsertArgs>(args: SelectSubset<T, NotifikasiUpsertArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifikasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiCountArgs} args - Arguments to filter Notifikasis to count.
     * @example
     * // Count the number of Notifikasis
     * const count = await prisma.notifikasi.count({
     *   where: {
     *     // ... the filter for the Notifikasis we want to count
     *   }
     * })
    **/
    count<T extends NotifikasiCountArgs>(
      args?: Subset<T, NotifikasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotifikasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifikasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotifikasiAggregateArgs>(args: Subset<T, NotifikasiAggregateArgs>): Prisma.PrismaPromise<GetNotifikasiAggregateType<T>>

    /**
     * Group by Notifikasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiGroupByArgs} args - Group by arguments.
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
      T extends NotifikasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotifikasiGroupByArgs['orderBy'] }
        : { orderBy?: NotifikasiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotifikasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotifikasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notifikasi model
   */
  readonly fields: NotifikasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notifikasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotifikasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Notifikasi model
   */
  interface NotifikasiFieldRefs {
    readonly notifId: FieldRef<"Notifikasi", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Notifikasi findUnique
   */
  export type NotifikasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * Filter, which Notifikasi to fetch.
     */
    where: NotifikasiWhereUniqueInput
  }

  /**
   * Notifikasi findUniqueOrThrow
   */
  export type NotifikasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * Filter, which Notifikasi to fetch.
     */
    where: NotifikasiWhereUniqueInput
  }

  /**
   * Notifikasi findFirst
   */
  export type NotifikasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * Filter, which Notifikasi to fetch.
     */
    where?: NotifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifikasis to fetch.
     */
    orderBy?: NotifikasiOrderByWithRelationInput | NotifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifikasis.
     */
    cursor?: NotifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifikasis.
     */
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * Notifikasi findFirstOrThrow
   */
  export type NotifikasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * Filter, which Notifikasi to fetch.
     */
    where?: NotifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifikasis to fetch.
     */
    orderBy?: NotifikasiOrderByWithRelationInput | NotifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifikasis.
     */
    cursor?: NotifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifikasis.
     */
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * Notifikasi findMany
   */
  export type NotifikasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * Filter, which Notifikasis to fetch.
     */
    where?: NotifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifikasis to fetch.
     */
    orderBy?: NotifikasiOrderByWithRelationInput | NotifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifikasis.
     */
    cursor?: NotifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifikasis.
     */
    skip?: number
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * Notifikasi create
   */
  export type NotifikasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * The data needed to create a Notifikasi.
     */
    data: XOR<NotifikasiCreateInput, NotifikasiUncheckedCreateInput>
  }

  /**
   * Notifikasi createMany
   */
  export type NotifikasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifikasis.
     */
    data: NotifikasiCreateManyInput | NotifikasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notifikasi createManyAndReturn
   */
  export type NotifikasiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * The data used to create many Notifikasis.
     */
    data: NotifikasiCreateManyInput | NotifikasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notifikasi update
   */
  export type NotifikasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * The data needed to update a Notifikasi.
     */
    data: XOR<NotifikasiUpdateInput, NotifikasiUncheckedUpdateInput>
    /**
     * Choose, which Notifikasi to update.
     */
    where: NotifikasiWhereUniqueInput
  }

  /**
   * Notifikasi updateMany
   */
  export type NotifikasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifikasis.
     */
    data: XOR<NotifikasiUpdateManyMutationInput, NotifikasiUncheckedUpdateManyInput>
    /**
     * Filter which Notifikasis to update
     */
    where?: NotifikasiWhereInput
    /**
     * Limit how many Notifikasis to update.
     */
    limit?: number
  }

  /**
   * Notifikasi updateManyAndReturn
   */
  export type NotifikasiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * The data used to update Notifikasis.
     */
    data: XOR<NotifikasiUpdateManyMutationInput, NotifikasiUncheckedUpdateManyInput>
    /**
     * Filter which Notifikasis to update
     */
    where?: NotifikasiWhereInput
    /**
     * Limit how many Notifikasis to update.
     */
    limit?: number
  }

  /**
   * Notifikasi upsert
   */
  export type NotifikasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * The filter to search for the Notifikasi to update in case it exists.
     */
    where: NotifikasiWhereUniqueInput
    /**
     * In case the Notifikasi found by the `where` argument doesn't exist, create a new Notifikasi with this data.
     */
    create: XOR<NotifikasiCreateInput, NotifikasiUncheckedCreateInput>
    /**
     * In case the Notifikasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotifikasiUpdateInput, NotifikasiUncheckedUpdateInput>
  }

  /**
   * Notifikasi delete
   */
  export type NotifikasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
    /**
     * Filter which Notifikasi to delete.
     */
    where: NotifikasiWhereUniqueInput
  }

  /**
   * Notifikasi deleteMany
   */
  export type NotifikasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifikasis to delete
     */
    where?: NotifikasiWhereInput
    /**
     * Limit how many Notifikasis to delete.
     */
    limit?: number
  }

  /**
   * Notifikasi without action
   */
  export type NotifikasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifikasi
     */
    omit?: NotifikasiOmit<ExtArgs> | null
  }


  /**
   * Model SubAsetKategori
   */

  export type AggregateSubAsetKategori = {
    _count: SubAsetKategoriCountAggregateOutputType | null
    _min: SubAsetKategoriMinAggregateOutputType | null
    _max: SubAsetKategoriMaxAggregateOutputType | null
  }

  export type SubAsetKategoriMinAggregateOutputType = {
    subAsetId: string | null
    nameSubAset: string | null
    createdAt: Date | null
  }

  export type SubAsetKategoriMaxAggregateOutputType = {
    subAsetId: string | null
    nameSubAset: string | null
    createdAt: Date | null
  }

  export type SubAsetKategoriCountAggregateOutputType = {
    subAsetId: number
    nameSubAset: number
    createdAt: number
    _all: number
  }


  export type SubAsetKategoriMinAggregateInputType = {
    subAsetId?: true
    nameSubAset?: true
    createdAt?: true
  }

  export type SubAsetKategoriMaxAggregateInputType = {
    subAsetId?: true
    nameSubAset?: true
    createdAt?: true
  }

  export type SubAsetKategoriCountAggregateInputType = {
    subAsetId?: true
    nameSubAset?: true
    createdAt?: true
    _all?: true
  }

  export type SubAsetKategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubAsetKategori to aggregate.
     */
    where?: SubAsetKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubAsetKategoris to fetch.
     */
    orderBy?: SubAsetKategoriOrderByWithRelationInput | SubAsetKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubAsetKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubAsetKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubAsetKategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubAsetKategoris
    **/
    _count?: true | SubAsetKategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubAsetKategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubAsetKategoriMaxAggregateInputType
  }

  export type GetSubAsetKategoriAggregateType<T extends SubAsetKategoriAggregateArgs> = {
        [P in keyof T & keyof AggregateSubAsetKategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubAsetKategori[P]>
      : GetScalarType<T[P], AggregateSubAsetKategori[P]>
  }




  export type SubAsetKategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubAsetKategoriWhereInput
    orderBy?: SubAsetKategoriOrderByWithAggregationInput | SubAsetKategoriOrderByWithAggregationInput[]
    by: SubAsetKategoriScalarFieldEnum[] | SubAsetKategoriScalarFieldEnum
    having?: SubAsetKategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubAsetKategoriCountAggregateInputType | true
    _min?: SubAsetKategoriMinAggregateInputType
    _max?: SubAsetKategoriMaxAggregateInputType
  }

  export type SubAsetKategoriGroupByOutputType = {
    subAsetId: string
    nameSubAset: string
    createdAt: Date
    _count: SubAsetKategoriCountAggregateOutputType | null
    _min: SubAsetKategoriMinAggregateOutputType | null
    _max: SubAsetKategoriMaxAggregateOutputType | null
  }

  type GetSubAsetKategoriGroupByPayload<T extends SubAsetKategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubAsetKategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubAsetKategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubAsetKategoriGroupByOutputType[P]>
            : GetScalarType<T[P], SubAsetKategoriGroupByOutputType[P]>
        }
      >
    >


  export type SubAsetKategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subAsetId?: boolean
    nameSubAset?: boolean
    createdAt?: boolean
    asets?: boolean | SubAsetKategori$asetsArgs<ExtArgs>
    lokasi?: boolean | SubAsetKategori$lokasiArgs<ExtArgs>
    _count?: boolean | SubAsetKategoriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subAsetKategori"]>

  export type SubAsetKategoriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subAsetId?: boolean
    nameSubAset?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["subAsetKategori"]>

  export type SubAsetKategoriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subAsetId?: boolean
    nameSubAset?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["subAsetKategori"]>

  export type SubAsetKategoriSelectScalar = {
    subAsetId?: boolean
    nameSubAset?: boolean
    createdAt?: boolean
  }

  export type SubAsetKategoriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"subAsetId" | "nameSubAset" | "createdAt", ExtArgs["result"]["subAsetKategori"]>
  export type SubAsetKategoriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asets?: boolean | SubAsetKategori$asetsArgs<ExtArgs>
    lokasi?: boolean | SubAsetKategori$lokasiArgs<ExtArgs>
    _count?: boolean | SubAsetKategoriCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubAsetKategoriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubAsetKategoriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubAsetKategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubAsetKategori"
    objects: {
      asets: Prisma.$AsetPayload<ExtArgs>[]
      lokasi: Prisma.$LokasiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      subAsetId: string
      nameSubAset: string
      createdAt: Date
    }, ExtArgs["result"]["subAsetKategori"]>
    composites: {}
  }

  type SubAsetKategoriGetPayload<S extends boolean | null | undefined | SubAsetKategoriDefaultArgs> = $Result.GetResult<Prisma.$SubAsetKategoriPayload, S>

  type SubAsetKategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubAsetKategoriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubAsetKategoriCountAggregateInputType | true
    }

  export interface SubAsetKategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubAsetKategori'], meta: { name: 'SubAsetKategori' } }
    /**
     * Find zero or one SubAsetKategori that matches the filter.
     * @param {SubAsetKategoriFindUniqueArgs} args - Arguments to find a SubAsetKategori
     * @example
     * // Get one SubAsetKategori
     * const subAsetKategori = await prisma.subAsetKategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubAsetKategoriFindUniqueArgs>(args: SelectSubset<T, SubAsetKategoriFindUniqueArgs<ExtArgs>>): Prisma__SubAsetKategoriClient<$Result.GetResult<Prisma.$SubAsetKategoriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubAsetKategori that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubAsetKategoriFindUniqueOrThrowArgs} args - Arguments to find a SubAsetKategori
     * @example
     * // Get one SubAsetKategori
     * const subAsetKategori = await prisma.subAsetKategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubAsetKategoriFindUniqueOrThrowArgs>(args: SelectSubset<T, SubAsetKategoriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubAsetKategoriClient<$Result.GetResult<Prisma.$SubAsetKategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubAsetKategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAsetKategoriFindFirstArgs} args - Arguments to find a SubAsetKategori
     * @example
     * // Get one SubAsetKategori
     * const subAsetKategori = await prisma.subAsetKategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubAsetKategoriFindFirstArgs>(args?: SelectSubset<T, SubAsetKategoriFindFirstArgs<ExtArgs>>): Prisma__SubAsetKategoriClient<$Result.GetResult<Prisma.$SubAsetKategoriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubAsetKategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAsetKategoriFindFirstOrThrowArgs} args - Arguments to find a SubAsetKategori
     * @example
     * // Get one SubAsetKategori
     * const subAsetKategori = await prisma.subAsetKategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubAsetKategoriFindFirstOrThrowArgs>(args?: SelectSubset<T, SubAsetKategoriFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubAsetKategoriClient<$Result.GetResult<Prisma.$SubAsetKategoriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubAsetKategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAsetKategoriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubAsetKategoris
     * const subAsetKategoris = await prisma.subAsetKategori.findMany()
     * 
     * // Get first 10 SubAsetKategoris
     * const subAsetKategoris = await prisma.subAsetKategori.findMany({ take: 10 })
     * 
     * // Only select the `subAsetId`
     * const subAsetKategoriWithSubAsetIdOnly = await prisma.subAsetKategori.findMany({ select: { subAsetId: true } })
     * 
     */
    findMany<T extends SubAsetKategoriFindManyArgs>(args?: SelectSubset<T, SubAsetKategoriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubAsetKategoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubAsetKategori.
     * @param {SubAsetKategoriCreateArgs} args - Arguments to create a SubAsetKategori.
     * @example
     * // Create one SubAsetKategori
     * const SubAsetKategori = await prisma.subAsetKategori.create({
     *   data: {
     *     // ... data to create a SubAsetKategori
     *   }
     * })
     * 
     */
    create<T extends SubAsetKategoriCreateArgs>(args: SelectSubset<T, SubAsetKategoriCreateArgs<ExtArgs>>): Prisma__SubAsetKategoriClient<$Result.GetResult<Prisma.$SubAsetKategoriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubAsetKategoris.
     * @param {SubAsetKategoriCreateManyArgs} args - Arguments to create many SubAsetKategoris.
     * @example
     * // Create many SubAsetKategoris
     * const subAsetKategori = await prisma.subAsetKategori.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubAsetKategoriCreateManyArgs>(args?: SelectSubset<T, SubAsetKategoriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubAsetKategoris and returns the data saved in the database.
     * @param {SubAsetKategoriCreateManyAndReturnArgs} args - Arguments to create many SubAsetKategoris.
     * @example
     * // Create many SubAsetKategoris
     * const subAsetKategori = await prisma.subAsetKategori.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubAsetKategoris and only return the `subAsetId`
     * const subAsetKategoriWithSubAsetIdOnly = await prisma.subAsetKategori.createManyAndReturn({
     *   select: { subAsetId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubAsetKategoriCreateManyAndReturnArgs>(args?: SelectSubset<T, SubAsetKategoriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubAsetKategoriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubAsetKategori.
     * @param {SubAsetKategoriDeleteArgs} args - Arguments to delete one SubAsetKategori.
     * @example
     * // Delete one SubAsetKategori
     * const SubAsetKategori = await prisma.subAsetKategori.delete({
     *   where: {
     *     // ... filter to delete one SubAsetKategori
     *   }
     * })
     * 
     */
    delete<T extends SubAsetKategoriDeleteArgs>(args: SelectSubset<T, SubAsetKategoriDeleteArgs<ExtArgs>>): Prisma__SubAsetKategoriClient<$Result.GetResult<Prisma.$SubAsetKategoriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubAsetKategori.
     * @param {SubAsetKategoriUpdateArgs} args - Arguments to update one SubAsetKategori.
     * @example
     * // Update one SubAsetKategori
     * const subAsetKategori = await prisma.subAsetKategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubAsetKategoriUpdateArgs>(args: SelectSubset<T, SubAsetKategoriUpdateArgs<ExtArgs>>): Prisma__SubAsetKategoriClient<$Result.GetResult<Prisma.$SubAsetKategoriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubAsetKategoris.
     * @param {SubAsetKategoriDeleteManyArgs} args - Arguments to filter SubAsetKategoris to delete.
     * @example
     * // Delete a few SubAsetKategoris
     * const { count } = await prisma.subAsetKategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubAsetKategoriDeleteManyArgs>(args?: SelectSubset<T, SubAsetKategoriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubAsetKategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAsetKategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubAsetKategoris
     * const subAsetKategori = await prisma.subAsetKategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubAsetKategoriUpdateManyArgs>(args: SelectSubset<T, SubAsetKategoriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubAsetKategoris and returns the data updated in the database.
     * @param {SubAsetKategoriUpdateManyAndReturnArgs} args - Arguments to update many SubAsetKategoris.
     * @example
     * // Update many SubAsetKategoris
     * const subAsetKategori = await prisma.subAsetKategori.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubAsetKategoris and only return the `subAsetId`
     * const subAsetKategoriWithSubAsetIdOnly = await prisma.subAsetKategori.updateManyAndReturn({
     *   select: { subAsetId: true },
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
    updateManyAndReturn<T extends SubAsetKategoriUpdateManyAndReturnArgs>(args: SelectSubset<T, SubAsetKategoriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubAsetKategoriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubAsetKategori.
     * @param {SubAsetKategoriUpsertArgs} args - Arguments to update or create a SubAsetKategori.
     * @example
     * // Update or create a SubAsetKategori
     * const subAsetKategori = await prisma.subAsetKategori.upsert({
     *   create: {
     *     // ... data to create a SubAsetKategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubAsetKategori we want to update
     *   }
     * })
     */
    upsert<T extends SubAsetKategoriUpsertArgs>(args: SelectSubset<T, SubAsetKategoriUpsertArgs<ExtArgs>>): Prisma__SubAsetKategoriClient<$Result.GetResult<Prisma.$SubAsetKategoriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubAsetKategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAsetKategoriCountArgs} args - Arguments to filter SubAsetKategoris to count.
     * @example
     * // Count the number of SubAsetKategoris
     * const count = await prisma.subAsetKategori.count({
     *   where: {
     *     // ... the filter for the SubAsetKategoris we want to count
     *   }
     * })
    **/
    count<T extends SubAsetKategoriCountArgs>(
      args?: Subset<T, SubAsetKategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubAsetKategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubAsetKategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAsetKategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubAsetKategoriAggregateArgs>(args: Subset<T, SubAsetKategoriAggregateArgs>): Prisma.PrismaPromise<GetSubAsetKategoriAggregateType<T>>

    /**
     * Group by SubAsetKategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubAsetKategoriGroupByArgs} args - Group by arguments.
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
      T extends SubAsetKategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubAsetKategoriGroupByArgs['orderBy'] }
        : { orderBy?: SubAsetKategoriGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubAsetKategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubAsetKategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubAsetKategori model
   */
  readonly fields: SubAsetKategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubAsetKategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubAsetKategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    asets<T extends SubAsetKategori$asetsArgs<ExtArgs> = {}>(args?: Subset<T, SubAsetKategori$asetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lokasi<T extends SubAsetKategori$lokasiArgs<ExtArgs> = {}>(args?: Subset<T, SubAsetKategori$lokasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubAsetKategori model
   */
  interface SubAsetKategoriFieldRefs {
    readonly subAsetId: FieldRef<"SubAsetKategori", 'String'>
    readonly nameSubAset: FieldRef<"SubAsetKategori", 'String'>
    readonly createdAt: FieldRef<"SubAsetKategori", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubAsetKategori findUnique
   */
  export type SubAsetKategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAsetKategori
     */
    select?: SubAsetKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAsetKategori
     */
    omit?: SubAsetKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAsetKategoriInclude<ExtArgs> | null
    /**
     * Filter, which SubAsetKategori to fetch.
     */
    where: SubAsetKategoriWhereUniqueInput
  }

  /**
   * SubAsetKategori findUniqueOrThrow
   */
  export type SubAsetKategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAsetKategori
     */
    select?: SubAsetKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAsetKategori
     */
    omit?: SubAsetKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAsetKategoriInclude<ExtArgs> | null
    /**
     * Filter, which SubAsetKategori to fetch.
     */
    where: SubAsetKategoriWhereUniqueInput
  }

  /**
   * SubAsetKategori findFirst
   */
  export type SubAsetKategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAsetKategori
     */
    select?: SubAsetKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAsetKategori
     */
    omit?: SubAsetKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAsetKategoriInclude<ExtArgs> | null
    /**
     * Filter, which SubAsetKategori to fetch.
     */
    where?: SubAsetKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubAsetKategoris to fetch.
     */
    orderBy?: SubAsetKategoriOrderByWithRelationInput | SubAsetKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubAsetKategoris.
     */
    cursor?: SubAsetKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubAsetKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubAsetKategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubAsetKategoris.
     */
    distinct?: SubAsetKategoriScalarFieldEnum | SubAsetKategoriScalarFieldEnum[]
  }

  /**
   * SubAsetKategori findFirstOrThrow
   */
  export type SubAsetKategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAsetKategori
     */
    select?: SubAsetKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAsetKategori
     */
    omit?: SubAsetKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAsetKategoriInclude<ExtArgs> | null
    /**
     * Filter, which SubAsetKategori to fetch.
     */
    where?: SubAsetKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubAsetKategoris to fetch.
     */
    orderBy?: SubAsetKategoriOrderByWithRelationInput | SubAsetKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubAsetKategoris.
     */
    cursor?: SubAsetKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubAsetKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubAsetKategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubAsetKategoris.
     */
    distinct?: SubAsetKategoriScalarFieldEnum | SubAsetKategoriScalarFieldEnum[]
  }

  /**
   * SubAsetKategori findMany
   */
  export type SubAsetKategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAsetKategori
     */
    select?: SubAsetKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAsetKategori
     */
    omit?: SubAsetKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAsetKategoriInclude<ExtArgs> | null
    /**
     * Filter, which SubAsetKategoris to fetch.
     */
    where?: SubAsetKategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubAsetKategoris to fetch.
     */
    orderBy?: SubAsetKategoriOrderByWithRelationInput | SubAsetKategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubAsetKategoris.
     */
    cursor?: SubAsetKategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubAsetKategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubAsetKategoris.
     */
    skip?: number
    distinct?: SubAsetKategoriScalarFieldEnum | SubAsetKategoriScalarFieldEnum[]
  }

  /**
   * SubAsetKategori create
   */
  export type SubAsetKategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAsetKategori
     */
    select?: SubAsetKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAsetKategori
     */
    omit?: SubAsetKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAsetKategoriInclude<ExtArgs> | null
    /**
     * The data needed to create a SubAsetKategori.
     */
    data: XOR<SubAsetKategoriCreateInput, SubAsetKategoriUncheckedCreateInput>
  }

  /**
   * SubAsetKategori createMany
   */
  export type SubAsetKategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubAsetKategoris.
     */
    data: SubAsetKategoriCreateManyInput | SubAsetKategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubAsetKategori createManyAndReturn
   */
  export type SubAsetKategoriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAsetKategori
     */
    select?: SubAsetKategoriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubAsetKategori
     */
    omit?: SubAsetKategoriOmit<ExtArgs> | null
    /**
     * The data used to create many SubAsetKategoris.
     */
    data: SubAsetKategoriCreateManyInput | SubAsetKategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubAsetKategori update
   */
  export type SubAsetKategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAsetKategori
     */
    select?: SubAsetKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAsetKategori
     */
    omit?: SubAsetKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAsetKategoriInclude<ExtArgs> | null
    /**
     * The data needed to update a SubAsetKategori.
     */
    data: XOR<SubAsetKategoriUpdateInput, SubAsetKategoriUncheckedUpdateInput>
    /**
     * Choose, which SubAsetKategori to update.
     */
    where: SubAsetKategoriWhereUniqueInput
  }

  /**
   * SubAsetKategori updateMany
   */
  export type SubAsetKategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubAsetKategoris.
     */
    data: XOR<SubAsetKategoriUpdateManyMutationInput, SubAsetKategoriUncheckedUpdateManyInput>
    /**
     * Filter which SubAsetKategoris to update
     */
    where?: SubAsetKategoriWhereInput
    /**
     * Limit how many SubAsetKategoris to update.
     */
    limit?: number
  }

  /**
   * SubAsetKategori updateManyAndReturn
   */
  export type SubAsetKategoriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAsetKategori
     */
    select?: SubAsetKategoriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubAsetKategori
     */
    omit?: SubAsetKategoriOmit<ExtArgs> | null
    /**
     * The data used to update SubAsetKategoris.
     */
    data: XOR<SubAsetKategoriUpdateManyMutationInput, SubAsetKategoriUncheckedUpdateManyInput>
    /**
     * Filter which SubAsetKategoris to update
     */
    where?: SubAsetKategoriWhereInput
    /**
     * Limit how many SubAsetKategoris to update.
     */
    limit?: number
  }

  /**
   * SubAsetKategori upsert
   */
  export type SubAsetKategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAsetKategori
     */
    select?: SubAsetKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAsetKategori
     */
    omit?: SubAsetKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAsetKategoriInclude<ExtArgs> | null
    /**
     * The filter to search for the SubAsetKategori to update in case it exists.
     */
    where: SubAsetKategoriWhereUniqueInput
    /**
     * In case the SubAsetKategori found by the `where` argument doesn't exist, create a new SubAsetKategori with this data.
     */
    create: XOR<SubAsetKategoriCreateInput, SubAsetKategoriUncheckedCreateInput>
    /**
     * In case the SubAsetKategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubAsetKategoriUpdateInput, SubAsetKategoriUncheckedUpdateInput>
  }

  /**
   * SubAsetKategori delete
   */
  export type SubAsetKategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAsetKategori
     */
    select?: SubAsetKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAsetKategori
     */
    omit?: SubAsetKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAsetKategoriInclude<ExtArgs> | null
    /**
     * Filter which SubAsetKategori to delete.
     */
    where: SubAsetKategoriWhereUniqueInput
  }

  /**
   * SubAsetKategori deleteMany
   */
  export type SubAsetKategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubAsetKategoris to delete
     */
    where?: SubAsetKategoriWhereInput
    /**
     * Limit how many SubAsetKategoris to delete.
     */
    limit?: number
  }

  /**
   * SubAsetKategori.asets
   */
  export type SubAsetKategori$asetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aset
     */
    select?: AsetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aset
     */
    omit?: AsetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsetInclude<ExtArgs> | null
    where?: AsetWhereInput
    orderBy?: AsetOrderByWithRelationInput | AsetOrderByWithRelationInput[]
    cursor?: AsetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsetScalarFieldEnum | AsetScalarFieldEnum[]
  }

  /**
   * SubAsetKategori.lokasi
   */
  export type SubAsetKategori$lokasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lokasi
     */
    omit?: LokasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    where?: LokasiWhereInput
    orderBy?: LokasiOrderByWithRelationInput | LokasiOrderByWithRelationInput[]
    cursor?: LokasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LokasiScalarFieldEnum | LokasiScalarFieldEnum[]
  }

  /**
   * SubAsetKategori without action
   */
  export type SubAsetKategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubAsetKategori
     */
    select?: SubAsetKategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubAsetKategori
     */
    omit?: SubAsetKategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubAsetKategoriInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleMinAggregateOutputType = {
    userRoleId: string | null
    nameRole: string | null
    createdAt: Date | null
  }

  export type UserRoleMaxAggregateOutputType = {
    userRoleId: string | null
    nameRole: string | null
    createdAt: Date | null
  }

  export type UserRoleCountAggregateOutputType = {
    userRoleId: number
    nameRole: number
    createdAt: number
    _all: number
  }


  export type UserRoleMinAggregateInputType = {
    userRoleId?: true
    nameRole?: true
    createdAt?: true
  }

  export type UserRoleMaxAggregateInputType = {
    userRoleId?: true
    nameRole?: true
    createdAt?: true
  }

  export type UserRoleCountAggregateInputType = {
    userRoleId?: true
    nameRole?: true
    createdAt?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    userRoleId: string
    nameRole: string
    createdAt: Date
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userRoleId?: boolean
    nameRole?: boolean
    createdAt?: boolean
    users?: boolean | UserRole$usersArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userRoleId?: boolean
    nameRole?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userRoleId?: boolean
    nameRole?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    userRoleId?: boolean
    nameRole?: boolean
    createdAt?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userRoleId" | "nameRole" | "createdAt", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserRole$usersArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userRoleId: string
      nameRole: string
      createdAt: Date
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `userRoleId`
     * const userRoleWithUserRoleIdOnly = await prisma.userRole.findMany({ select: { userRoleId: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `userRoleId`
     * const userRoleWithUserRoleIdOnly = await prisma.userRole.createManyAndReturn({
     *   select: { userRoleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `userRoleId`
     * const userRoleWithUserRoleIdOnly = await prisma.userRole.updateManyAndReturn({
     *   select: { userRoleId: true },
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
    updateManyAndReturn<T extends UserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
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
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UserRole$usersArgs<ExtArgs> = {}>(args?: Subset<T, UserRole$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly userRoleId: FieldRef<"UserRole", 'String'>
    readonly nameRole: FieldRef<"UserRole", 'String'>
    readonly createdAt: FieldRef<"UserRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole updateManyAndReturn
   */
  export type UserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole.users
   */
  export type UserRole$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
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
    name: 'name',
    roleId: 'roleId',
    password: 'password',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    status: 'status'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AsetScalarFieldEnum: {
    asetId: 'asetId',
    lokasiId: 'lokasiId',
    subKategoriAsetId: 'subKategoriAsetId',
    kategoriAset: 'kategoriAset',
    merkDanTipe: 'merkDanTipe',
    tahun: 'tahun',
    kondisiAset: 'kondisiAset',
    statusAset: 'statusAset',
    nomorSeri: 'nomorSeri',
    masaBerlaku: 'masaBerlaku',
    statusKepemilikan: 'statusKepemilikan',
    urlFoto: 'urlFoto',
    urlQR: 'urlQR',
    createdAt: 'createdAt',
    pic: 'pic'
  };

  export type AsetScalarFieldEnum = (typeof AsetScalarFieldEnum)[keyof typeof AsetScalarFieldEnum]


  export const MaintenanceScalarFieldEnum: {
    maintenanceId: 'maintenanceId',
    deskripsi: 'deskripsi',
    idAset: 'idAset',
    tanggalMulai: 'tanggalMulai',
    perkiraanSelesai: 'perkiraanSelesai',
    tanggalSelesai: 'tanggalSelesai',
    statusMaintenance: 'statusMaintenance',
    createdAt: 'createdAt'
  };

  export type MaintenanceScalarFieldEnum = (typeof MaintenanceScalarFieldEnum)[keyof typeof MaintenanceScalarFieldEnum]


  export const LokasiScalarFieldEnum: {
    idLokasi: 'idLokasi',
    lokasi: 'lokasi',
    kategoriAset: 'kategoriAset',
    createdAt: 'createdAt'
  };

  export type LokasiScalarFieldEnum = (typeof LokasiScalarFieldEnum)[keyof typeof LokasiScalarFieldEnum]


  export const PerpindahanScalarFieldEnum: {
    idPindahan: 'idPindahan',
    lokasiId: 'lokasiId',
    idAset: 'idAset',
    tempatLama: 'tempatLama',
    tempatBaru: 'tempatBaru',
    tanggalPindah: 'tanggalPindah',
    createdAt: 'createdAt'
  };

  export type PerpindahanScalarFieldEnum = (typeof PerpindahanScalarFieldEnum)[keyof typeof PerpindahanScalarFieldEnum]


  export const PengadaanScalarFieldEnum: {
    pengadaanId: 'pengadaanId',
    tanggalBeli: 'tanggalBeli',
    lokasiId: 'lokasiId',
    kategoriAset: 'kategoriAset',
    namaAset: 'namaAset',
    jumlahAset: 'jumlahAset',
    hargaSatuan: 'hargaSatuan',
    totalHarga: 'totalHarga',
    vendor: 'vendor',
    createdAt: 'createdAt'
  };

  export type PengadaanScalarFieldEnum = (typeof PengadaanScalarFieldEnum)[keyof typeof PengadaanScalarFieldEnum]


  export const NotifikasiScalarFieldEnum: {
    notifId: 'notifId'
  };

  export type NotifikasiScalarFieldEnum = (typeof NotifikasiScalarFieldEnum)[keyof typeof NotifikasiScalarFieldEnum]


  export const SubAsetKategoriScalarFieldEnum: {
    subAsetId: 'subAsetId',
    nameSubAset: 'nameSubAset',
    createdAt: 'createdAt'
  };

  export type SubAsetKategoriScalarFieldEnum = (typeof SubAsetKategoriScalarFieldEnum)[keyof typeof SubAsetKategoriScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    userRoleId: 'userRoleId',
    nameRole: 'nameRole',
    createdAt: 'createdAt'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'AsetKategori'
   */
  export type EnumAsetKategoriFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AsetKategori'>
    


  /**
   * Reference to a field of type 'AsetKategori[]'
   */
  export type ListEnumAsetKategoriFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AsetKategori[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'AsetKondisi'
   */
  export type EnumAsetKondisiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AsetKondisi'>
    


  /**
   * Reference to a field of type 'AsetKondisi[]'
   */
  export type ListEnumAsetKondisiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AsetKondisi[]'>
    


  /**
   * Reference to a field of type 'AsetStatus'
   */
  export type EnumAsetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AsetStatus'>
    


  /**
   * Reference to a field of type 'AsetStatus[]'
   */
  export type ListEnumAsetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AsetStatus[]'>
    


  /**
   * Reference to a field of type 'MaintenanceRequestStatus'
   */
  export type EnumMaintenanceRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaintenanceRequestStatus'>
    


  /**
   * Reference to a field of type 'MaintenanceRequestStatus[]'
   */
  export type ListEnumMaintenanceRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaintenanceRequestStatus[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    roleId?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    role?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    roleId?: SortOrder
    password?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    role?: UserRoleOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    roleId?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    role?: XOR<UserRoleScalarRelationFilter, UserRoleWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    roleId?: SortOrder
    password?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    roleId?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
  }

  export type AsetWhereInput = {
    AND?: AsetWhereInput | AsetWhereInput[]
    OR?: AsetWhereInput[]
    NOT?: AsetWhereInput | AsetWhereInput[]
    asetId?: StringFilter<"Aset"> | string
    lokasiId?: StringNullableFilter<"Aset"> | string | null
    subKategoriAsetId?: StringNullableFilter<"Aset"> | string | null
    kategoriAset?: EnumAsetKategoriFilter<"Aset"> | $Enums.AsetKategori
    merkDanTipe?: StringFilter<"Aset"> | string
    tahun?: IntNullableFilter<"Aset"> | number | null
    kondisiAset?: EnumAsetKondisiNullableFilter<"Aset"> | $Enums.AsetKondisi | null
    statusAset?: EnumAsetStatusFilter<"Aset"> | $Enums.AsetStatus
    nomorSeri?: StringNullableFilter<"Aset"> | string | null
    masaBerlaku?: DateTimeNullableFilter<"Aset"> | Date | string | null
    statusKepemilikan?: StringFilter<"Aset"> | string
    urlFoto?: StringNullableListFilter<"Aset">
    urlQR?: StringNullableFilter<"Aset"> | string | null
    createdAt?: DateTimeFilter<"Aset"> | Date | string
    pic?: StringNullableFilter<"Aset"> | string | null
    lokasi?: XOR<LokasiNullableScalarRelationFilter, LokasiWhereInput> | null
    subKategoriAset?: XOR<SubAsetKategoriNullableScalarRelationFilter, SubAsetKategoriWhereInput> | null
    maintenances?: MaintenanceListRelationFilter
    perpindahan?: PerpindahanListRelationFilter
  }

  export type AsetOrderByWithRelationInput = {
    asetId?: SortOrder
    lokasiId?: SortOrderInput | SortOrder
    subKategoriAsetId?: SortOrderInput | SortOrder
    kategoriAset?: SortOrder
    merkDanTipe?: SortOrder
    tahun?: SortOrderInput | SortOrder
    kondisiAset?: SortOrderInput | SortOrder
    statusAset?: SortOrder
    nomorSeri?: SortOrderInput | SortOrder
    masaBerlaku?: SortOrderInput | SortOrder
    statusKepemilikan?: SortOrder
    urlFoto?: SortOrder
    urlQR?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    pic?: SortOrderInput | SortOrder
    lokasi?: LokasiOrderByWithRelationInput
    subKategoriAset?: SubAsetKategoriOrderByWithRelationInput
    maintenances?: MaintenanceOrderByRelationAggregateInput
    perpindahan?: PerpindahanOrderByRelationAggregateInput
  }

  export type AsetWhereUniqueInput = Prisma.AtLeast<{
    asetId?: string
    AND?: AsetWhereInput | AsetWhereInput[]
    OR?: AsetWhereInput[]
    NOT?: AsetWhereInput | AsetWhereInput[]
    lokasiId?: StringNullableFilter<"Aset"> | string | null
    subKategoriAsetId?: StringNullableFilter<"Aset"> | string | null
    kategoriAset?: EnumAsetKategoriFilter<"Aset"> | $Enums.AsetKategori
    merkDanTipe?: StringFilter<"Aset"> | string
    tahun?: IntNullableFilter<"Aset"> | number | null
    kondisiAset?: EnumAsetKondisiNullableFilter<"Aset"> | $Enums.AsetKondisi | null
    statusAset?: EnumAsetStatusFilter<"Aset"> | $Enums.AsetStatus
    nomorSeri?: StringNullableFilter<"Aset"> | string | null
    masaBerlaku?: DateTimeNullableFilter<"Aset"> | Date | string | null
    statusKepemilikan?: StringFilter<"Aset"> | string
    urlFoto?: StringNullableListFilter<"Aset">
    urlQR?: StringNullableFilter<"Aset"> | string | null
    createdAt?: DateTimeFilter<"Aset"> | Date | string
    pic?: StringNullableFilter<"Aset"> | string | null
    lokasi?: XOR<LokasiNullableScalarRelationFilter, LokasiWhereInput> | null
    subKategoriAset?: XOR<SubAsetKategoriNullableScalarRelationFilter, SubAsetKategoriWhereInput> | null
    maintenances?: MaintenanceListRelationFilter
    perpindahan?: PerpindahanListRelationFilter
  }, "asetId">

  export type AsetOrderByWithAggregationInput = {
    asetId?: SortOrder
    lokasiId?: SortOrderInput | SortOrder
    subKategoriAsetId?: SortOrderInput | SortOrder
    kategoriAset?: SortOrder
    merkDanTipe?: SortOrder
    tahun?: SortOrderInput | SortOrder
    kondisiAset?: SortOrderInput | SortOrder
    statusAset?: SortOrder
    nomorSeri?: SortOrderInput | SortOrder
    masaBerlaku?: SortOrderInput | SortOrder
    statusKepemilikan?: SortOrder
    urlFoto?: SortOrder
    urlQR?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    pic?: SortOrderInput | SortOrder
    _count?: AsetCountOrderByAggregateInput
    _avg?: AsetAvgOrderByAggregateInput
    _max?: AsetMaxOrderByAggregateInput
    _min?: AsetMinOrderByAggregateInput
    _sum?: AsetSumOrderByAggregateInput
  }

  export type AsetScalarWhereWithAggregatesInput = {
    AND?: AsetScalarWhereWithAggregatesInput | AsetScalarWhereWithAggregatesInput[]
    OR?: AsetScalarWhereWithAggregatesInput[]
    NOT?: AsetScalarWhereWithAggregatesInput | AsetScalarWhereWithAggregatesInput[]
    asetId?: StringWithAggregatesFilter<"Aset"> | string
    lokasiId?: StringNullableWithAggregatesFilter<"Aset"> | string | null
    subKategoriAsetId?: StringNullableWithAggregatesFilter<"Aset"> | string | null
    kategoriAset?: EnumAsetKategoriWithAggregatesFilter<"Aset"> | $Enums.AsetKategori
    merkDanTipe?: StringWithAggregatesFilter<"Aset"> | string
    tahun?: IntNullableWithAggregatesFilter<"Aset"> | number | null
    kondisiAset?: EnumAsetKondisiNullableWithAggregatesFilter<"Aset"> | $Enums.AsetKondisi | null
    statusAset?: EnumAsetStatusWithAggregatesFilter<"Aset"> | $Enums.AsetStatus
    nomorSeri?: StringNullableWithAggregatesFilter<"Aset"> | string | null
    masaBerlaku?: DateTimeNullableWithAggregatesFilter<"Aset"> | Date | string | null
    statusKepemilikan?: StringWithAggregatesFilter<"Aset"> | string
    urlFoto?: StringNullableListFilter<"Aset">
    urlQR?: StringNullableWithAggregatesFilter<"Aset"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Aset"> | Date | string
    pic?: StringNullableWithAggregatesFilter<"Aset"> | string | null
  }

  export type MaintenanceWhereInput = {
    AND?: MaintenanceWhereInput | MaintenanceWhereInput[]
    OR?: MaintenanceWhereInput[]
    NOT?: MaintenanceWhereInput | MaintenanceWhereInput[]
    maintenanceId?: StringFilter<"Maintenance"> | string
    deskripsi?: StringNullableFilter<"Maintenance"> | string | null
    idAset?: StringFilter<"Maintenance"> | string
    tanggalMulai?: DateTimeFilter<"Maintenance"> | Date | string
    perkiraanSelesai?: DateTimeFilter<"Maintenance"> | Date | string
    tanggalSelesai?: DateTimeNullableFilter<"Maintenance"> | Date | string | null
    statusMaintenance?: EnumMaintenanceRequestStatusFilter<"Maintenance"> | $Enums.MaintenanceRequestStatus
    createdAt?: DateTimeFilter<"Maintenance"> | Date | string
    aset?: XOR<AsetScalarRelationFilter, AsetWhereInput>
  }

  export type MaintenanceOrderByWithRelationInput = {
    maintenanceId?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    idAset?: SortOrder
    tanggalMulai?: SortOrder
    perkiraanSelesai?: SortOrder
    tanggalSelesai?: SortOrderInput | SortOrder
    statusMaintenance?: SortOrder
    createdAt?: SortOrder
    aset?: AsetOrderByWithRelationInput
  }

  export type MaintenanceWhereUniqueInput = Prisma.AtLeast<{
    maintenanceId?: string
    AND?: MaintenanceWhereInput | MaintenanceWhereInput[]
    OR?: MaintenanceWhereInput[]
    NOT?: MaintenanceWhereInput | MaintenanceWhereInput[]
    deskripsi?: StringNullableFilter<"Maintenance"> | string | null
    idAset?: StringFilter<"Maintenance"> | string
    tanggalMulai?: DateTimeFilter<"Maintenance"> | Date | string
    perkiraanSelesai?: DateTimeFilter<"Maintenance"> | Date | string
    tanggalSelesai?: DateTimeNullableFilter<"Maintenance"> | Date | string | null
    statusMaintenance?: EnumMaintenanceRequestStatusFilter<"Maintenance"> | $Enums.MaintenanceRequestStatus
    createdAt?: DateTimeFilter<"Maintenance"> | Date | string
    aset?: XOR<AsetScalarRelationFilter, AsetWhereInput>
  }, "maintenanceId">

  export type MaintenanceOrderByWithAggregationInput = {
    maintenanceId?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    idAset?: SortOrder
    tanggalMulai?: SortOrder
    perkiraanSelesai?: SortOrder
    tanggalSelesai?: SortOrderInput | SortOrder
    statusMaintenance?: SortOrder
    createdAt?: SortOrder
    _count?: MaintenanceCountOrderByAggregateInput
    _max?: MaintenanceMaxOrderByAggregateInput
    _min?: MaintenanceMinOrderByAggregateInput
  }

  export type MaintenanceScalarWhereWithAggregatesInput = {
    AND?: MaintenanceScalarWhereWithAggregatesInput | MaintenanceScalarWhereWithAggregatesInput[]
    OR?: MaintenanceScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceScalarWhereWithAggregatesInput | MaintenanceScalarWhereWithAggregatesInput[]
    maintenanceId?: StringWithAggregatesFilter<"Maintenance"> | string
    deskripsi?: StringNullableWithAggregatesFilter<"Maintenance"> | string | null
    idAset?: StringWithAggregatesFilter<"Maintenance"> | string
    tanggalMulai?: DateTimeWithAggregatesFilter<"Maintenance"> | Date | string
    perkiraanSelesai?: DateTimeWithAggregatesFilter<"Maintenance"> | Date | string
    tanggalSelesai?: DateTimeNullableWithAggregatesFilter<"Maintenance"> | Date | string | null
    statusMaintenance?: EnumMaintenanceRequestStatusWithAggregatesFilter<"Maintenance"> | $Enums.MaintenanceRequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"Maintenance"> | Date | string
  }

  export type LokasiWhereInput = {
    AND?: LokasiWhereInput | LokasiWhereInput[]
    OR?: LokasiWhereInput[]
    NOT?: LokasiWhereInput | LokasiWhereInput[]
    idLokasi?: StringFilter<"Lokasi"> | string
    lokasi?: StringFilter<"Lokasi"> | string
    kategoriAset?: EnumAsetKategoriFilter<"Lokasi"> | $Enums.AsetKategori
    createdAt?: DateTimeFilter<"Lokasi"> | Date | string
    subKategoriAset?: SubAsetKategoriListRelationFilter
    aset?: AsetListRelationFilter
    perpindahan?: PerpindahanListRelationFilter
    pengadaan?: PengadaanListRelationFilter
  }

  export type LokasiOrderByWithRelationInput = {
    idLokasi?: SortOrder
    lokasi?: SortOrder
    kategoriAset?: SortOrder
    createdAt?: SortOrder
    subKategoriAset?: SubAsetKategoriOrderByRelationAggregateInput
    aset?: AsetOrderByRelationAggregateInput
    perpindahan?: PerpindahanOrderByRelationAggregateInput
    pengadaan?: PengadaanOrderByRelationAggregateInput
  }

  export type LokasiWhereUniqueInput = Prisma.AtLeast<{
    idLokasi?: string
    lokasi?: string
    AND?: LokasiWhereInput | LokasiWhereInput[]
    OR?: LokasiWhereInput[]
    NOT?: LokasiWhereInput | LokasiWhereInput[]
    kategoriAset?: EnumAsetKategoriFilter<"Lokasi"> | $Enums.AsetKategori
    createdAt?: DateTimeFilter<"Lokasi"> | Date | string
    subKategoriAset?: SubAsetKategoriListRelationFilter
    aset?: AsetListRelationFilter
    perpindahan?: PerpindahanListRelationFilter
    pengadaan?: PengadaanListRelationFilter
  }, "idLokasi" | "lokasi">

  export type LokasiOrderByWithAggregationInput = {
    idLokasi?: SortOrder
    lokasi?: SortOrder
    kategoriAset?: SortOrder
    createdAt?: SortOrder
    _count?: LokasiCountOrderByAggregateInput
    _max?: LokasiMaxOrderByAggregateInput
    _min?: LokasiMinOrderByAggregateInput
  }

  export type LokasiScalarWhereWithAggregatesInput = {
    AND?: LokasiScalarWhereWithAggregatesInput | LokasiScalarWhereWithAggregatesInput[]
    OR?: LokasiScalarWhereWithAggregatesInput[]
    NOT?: LokasiScalarWhereWithAggregatesInput | LokasiScalarWhereWithAggregatesInput[]
    idLokasi?: StringWithAggregatesFilter<"Lokasi"> | string
    lokasi?: StringWithAggregatesFilter<"Lokasi"> | string
    kategoriAset?: EnumAsetKategoriWithAggregatesFilter<"Lokasi"> | $Enums.AsetKategori
    createdAt?: DateTimeWithAggregatesFilter<"Lokasi"> | Date | string
  }

  export type PerpindahanWhereInput = {
    AND?: PerpindahanWhereInput | PerpindahanWhereInput[]
    OR?: PerpindahanWhereInput[]
    NOT?: PerpindahanWhereInput | PerpindahanWhereInput[]
    idPindahan?: StringFilter<"Perpindahan"> | string
    lokasiId?: StringFilter<"Perpindahan"> | string
    idAset?: StringFilter<"Perpindahan"> | string
    tempatLama?: StringFilter<"Perpindahan"> | string
    tempatBaru?: StringFilter<"Perpindahan"> | string
    tanggalPindah?: DateTimeFilter<"Perpindahan"> | Date | string
    createdAt?: DateTimeFilter<"Perpindahan"> | Date | string
    lokasi?: XOR<LokasiScalarRelationFilter, LokasiWhereInput>
    aset?: XOR<AsetScalarRelationFilter, AsetWhereInput>
  }

  export type PerpindahanOrderByWithRelationInput = {
    idPindahan?: SortOrder
    lokasiId?: SortOrder
    idAset?: SortOrder
    tempatLama?: SortOrder
    tempatBaru?: SortOrder
    tanggalPindah?: SortOrder
    createdAt?: SortOrder
    lokasi?: LokasiOrderByWithRelationInput
    aset?: AsetOrderByWithRelationInput
  }

  export type PerpindahanWhereUniqueInput = Prisma.AtLeast<{
    idPindahan?: string
    AND?: PerpindahanWhereInput | PerpindahanWhereInput[]
    OR?: PerpindahanWhereInput[]
    NOT?: PerpindahanWhereInput | PerpindahanWhereInput[]
    lokasiId?: StringFilter<"Perpindahan"> | string
    idAset?: StringFilter<"Perpindahan"> | string
    tempatLama?: StringFilter<"Perpindahan"> | string
    tempatBaru?: StringFilter<"Perpindahan"> | string
    tanggalPindah?: DateTimeFilter<"Perpindahan"> | Date | string
    createdAt?: DateTimeFilter<"Perpindahan"> | Date | string
    lokasi?: XOR<LokasiScalarRelationFilter, LokasiWhereInput>
    aset?: XOR<AsetScalarRelationFilter, AsetWhereInput>
  }, "idPindahan">

  export type PerpindahanOrderByWithAggregationInput = {
    idPindahan?: SortOrder
    lokasiId?: SortOrder
    idAset?: SortOrder
    tempatLama?: SortOrder
    tempatBaru?: SortOrder
    tanggalPindah?: SortOrder
    createdAt?: SortOrder
    _count?: PerpindahanCountOrderByAggregateInput
    _max?: PerpindahanMaxOrderByAggregateInput
    _min?: PerpindahanMinOrderByAggregateInput
  }

  export type PerpindahanScalarWhereWithAggregatesInput = {
    AND?: PerpindahanScalarWhereWithAggregatesInput | PerpindahanScalarWhereWithAggregatesInput[]
    OR?: PerpindahanScalarWhereWithAggregatesInput[]
    NOT?: PerpindahanScalarWhereWithAggregatesInput | PerpindahanScalarWhereWithAggregatesInput[]
    idPindahan?: StringWithAggregatesFilter<"Perpindahan"> | string
    lokasiId?: StringWithAggregatesFilter<"Perpindahan"> | string
    idAset?: StringWithAggregatesFilter<"Perpindahan"> | string
    tempatLama?: StringWithAggregatesFilter<"Perpindahan"> | string
    tempatBaru?: StringWithAggregatesFilter<"Perpindahan"> | string
    tanggalPindah?: DateTimeWithAggregatesFilter<"Perpindahan"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Perpindahan"> | Date | string
  }

  export type PengadaanWhereInput = {
    AND?: PengadaanWhereInput | PengadaanWhereInput[]
    OR?: PengadaanWhereInput[]
    NOT?: PengadaanWhereInput | PengadaanWhereInput[]
    pengadaanId?: StringFilter<"Pengadaan"> | string
    tanggalBeli?: DateTimeFilter<"Pengadaan"> | Date | string
    lokasiId?: StringFilter<"Pengadaan"> | string
    kategoriAset?: EnumAsetKategoriFilter<"Pengadaan"> | $Enums.AsetKategori
    namaAset?: StringFilter<"Pengadaan"> | string
    jumlahAset?: IntFilter<"Pengadaan"> | number
    hargaSatuan?: BigIntFilter<"Pengadaan"> | bigint | number
    totalHarga?: BigIntFilter<"Pengadaan"> | bigint | number
    vendor?: StringFilter<"Pengadaan"> | string
    createdAt?: DateTimeFilter<"Pengadaan"> | Date | string
    lokasi?: XOR<LokasiScalarRelationFilter, LokasiWhereInput>
  }

  export type PengadaanOrderByWithRelationInput = {
    pengadaanId?: SortOrder
    tanggalBeli?: SortOrder
    lokasiId?: SortOrder
    kategoriAset?: SortOrder
    namaAset?: SortOrder
    jumlahAset?: SortOrder
    hargaSatuan?: SortOrder
    totalHarga?: SortOrder
    vendor?: SortOrder
    createdAt?: SortOrder
    lokasi?: LokasiOrderByWithRelationInput
  }

  export type PengadaanWhereUniqueInput = Prisma.AtLeast<{
    pengadaanId?: string
    AND?: PengadaanWhereInput | PengadaanWhereInput[]
    OR?: PengadaanWhereInput[]
    NOT?: PengadaanWhereInput | PengadaanWhereInput[]
    tanggalBeli?: DateTimeFilter<"Pengadaan"> | Date | string
    lokasiId?: StringFilter<"Pengadaan"> | string
    kategoriAset?: EnumAsetKategoriFilter<"Pengadaan"> | $Enums.AsetKategori
    namaAset?: StringFilter<"Pengadaan"> | string
    jumlahAset?: IntFilter<"Pengadaan"> | number
    hargaSatuan?: BigIntFilter<"Pengadaan"> | bigint | number
    totalHarga?: BigIntFilter<"Pengadaan"> | bigint | number
    vendor?: StringFilter<"Pengadaan"> | string
    createdAt?: DateTimeFilter<"Pengadaan"> | Date | string
    lokasi?: XOR<LokasiScalarRelationFilter, LokasiWhereInput>
  }, "pengadaanId">

  export type PengadaanOrderByWithAggregationInput = {
    pengadaanId?: SortOrder
    tanggalBeli?: SortOrder
    lokasiId?: SortOrder
    kategoriAset?: SortOrder
    namaAset?: SortOrder
    jumlahAset?: SortOrder
    hargaSatuan?: SortOrder
    totalHarga?: SortOrder
    vendor?: SortOrder
    createdAt?: SortOrder
    _count?: PengadaanCountOrderByAggregateInput
    _avg?: PengadaanAvgOrderByAggregateInput
    _max?: PengadaanMaxOrderByAggregateInput
    _min?: PengadaanMinOrderByAggregateInput
    _sum?: PengadaanSumOrderByAggregateInput
  }

  export type PengadaanScalarWhereWithAggregatesInput = {
    AND?: PengadaanScalarWhereWithAggregatesInput | PengadaanScalarWhereWithAggregatesInput[]
    OR?: PengadaanScalarWhereWithAggregatesInput[]
    NOT?: PengadaanScalarWhereWithAggregatesInput | PengadaanScalarWhereWithAggregatesInput[]
    pengadaanId?: StringWithAggregatesFilter<"Pengadaan"> | string
    tanggalBeli?: DateTimeWithAggregatesFilter<"Pengadaan"> | Date | string
    lokasiId?: StringWithAggregatesFilter<"Pengadaan"> | string
    kategoriAset?: EnumAsetKategoriWithAggregatesFilter<"Pengadaan"> | $Enums.AsetKategori
    namaAset?: StringWithAggregatesFilter<"Pengadaan"> | string
    jumlahAset?: IntWithAggregatesFilter<"Pengadaan"> | number
    hargaSatuan?: BigIntWithAggregatesFilter<"Pengadaan"> | bigint | number
    totalHarga?: BigIntWithAggregatesFilter<"Pengadaan"> | bigint | number
    vendor?: StringWithAggregatesFilter<"Pengadaan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pengadaan"> | Date | string
  }

  export type NotifikasiWhereInput = {
    AND?: NotifikasiWhereInput | NotifikasiWhereInput[]
    OR?: NotifikasiWhereInput[]
    NOT?: NotifikasiWhereInput | NotifikasiWhereInput[]
    notifId?: IntFilter<"Notifikasi"> | number
  }

  export type NotifikasiOrderByWithRelationInput = {
    notifId?: SortOrder
  }

  export type NotifikasiWhereUniqueInput = Prisma.AtLeast<{
    notifId?: number
    AND?: NotifikasiWhereInput | NotifikasiWhereInput[]
    OR?: NotifikasiWhereInput[]
    NOT?: NotifikasiWhereInput | NotifikasiWhereInput[]
  }, "notifId">

  export type NotifikasiOrderByWithAggregationInput = {
    notifId?: SortOrder
    _count?: NotifikasiCountOrderByAggregateInput
    _avg?: NotifikasiAvgOrderByAggregateInput
    _max?: NotifikasiMaxOrderByAggregateInput
    _min?: NotifikasiMinOrderByAggregateInput
    _sum?: NotifikasiSumOrderByAggregateInput
  }

  export type NotifikasiScalarWhereWithAggregatesInput = {
    AND?: NotifikasiScalarWhereWithAggregatesInput | NotifikasiScalarWhereWithAggregatesInput[]
    OR?: NotifikasiScalarWhereWithAggregatesInput[]
    NOT?: NotifikasiScalarWhereWithAggregatesInput | NotifikasiScalarWhereWithAggregatesInput[]
    notifId?: IntWithAggregatesFilter<"Notifikasi"> | number
  }

  export type SubAsetKategoriWhereInput = {
    AND?: SubAsetKategoriWhereInput | SubAsetKategoriWhereInput[]
    OR?: SubAsetKategoriWhereInput[]
    NOT?: SubAsetKategoriWhereInput | SubAsetKategoriWhereInput[]
    subAsetId?: StringFilter<"SubAsetKategori"> | string
    nameSubAset?: StringFilter<"SubAsetKategori"> | string
    createdAt?: DateTimeFilter<"SubAsetKategori"> | Date | string
    asets?: AsetListRelationFilter
    lokasi?: LokasiListRelationFilter
  }

  export type SubAsetKategoriOrderByWithRelationInput = {
    subAsetId?: SortOrder
    nameSubAset?: SortOrder
    createdAt?: SortOrder
    asets?: AsetOrderByRelationAggregateInput
    lokasi?: LokasiOrderByRelationAggregateInput
  }

  export type SubAsetKategoriWhereUniqueInput = Prisma.AtLeast<{
    subAsetId?: string
    AND?: SubAsetKategoriWhereInput | SubAsetKategoriWhereInput[]
    OR?: SubAsetKategoriWhereInput[]
    NOT?: SubAsetKategoriWhereInput | SubAsetKategoriWhereInput[]
    nameSubAset?: StringFilter<"SubAsetKategori"> | string
    createdAt?: DateTimeFilter<"SubAsetKategori"> | Date | string
    asets?: AsetListRelationFilter
    lokasi?: LokasiListRelationFilter
  }, "subAsetId">

  export type SubAsetKategoriOrderByWithAggregationInput = {
    subAsetId?: SortOrder
    nameSubAset?: SortOrder
    createdAt?: SortOrder
    _count?: SubAsetKategoriCountOrderByAggregateInput
    _max?: SubAsetKategoriMaxOrderByAggregateInput
    _min?: SubAsetKategoriMinOrderByAggregateInput
  }

  export type SubAsetKategoriScalarWhereWithAggregatesInput = {
    AND?: SubAsetKategoriScalarWhereWithAggregatesInput | SubAsetKategoriScalarWhereWithAggregatesInput[]
    OR?: SubAsetKategoriScalarWhereWithAggregatesInput[]
    NOT?: SubAsetKategoriScalarWhereWithAggregatesInput | SubAsetKategoriScalarWhereWithAggregatesInput[]
    subAsetId?: StringWithAggregatesFilter<"SubAsetKategori"> | string
    nameSubAset?: StringWithAggregatesFilter<"SubAsetKategori"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SubAsetKategori"> | Date | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userRoleId?: StringFilter<"UserRole"> | string
    nameRole?: StringFilter<"UserRole"> | string
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    users?: UserListRelationFilter
  }

  export type UserRoleOrderByWithRelationInput = {
    userRoleId?: SortOrder
    nameRole?: SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    userRoleId?: string
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    nameRole?: StringFilter<"UserRole"> | string
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    users?: UserListRelationFilter
  }, "userRoleId">

  export type UserRoleOrderByWithAggregationInput = {
    userRoleId?: SortOrder
    nameRole?: SortOrder
    createdAt?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    userRoleId?: StringWithAggregatesFilter<"UserRole"> | string
    nameRole?: StringWithAggregatesFilter<"UserRole"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserRole"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    lastLogin?: Date | string | null
    createdAt?: Date | string
    status?: $Enums.UserStatus
    role: UserRoleCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    roleId: string
    password: string
    lastLogin?: Date | string | null
    createdAt?: Date | string
    status?: $Enums.UserStatus
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    role?: UserRoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    roleId: string
    password: string
    lastLogin?: Date | string | null
    createdAt?: Date | string
    status?: $Enums.UserStatus
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type AsetCreateInput = {
    asetId?: string
    kategoriAset: $Enums.AsetKategori
    merkDanTipe: string
    tahun?: number | null
    kondisiAset?: $Enums.AsetKondisi | null
    statusAset: $Enums.AsetStatus
    nomorSeri?: string | null
    masaBerlaku?: Date | string | null
    statusKepemilikan: string
    urlFoto?: AsetCreateurlFotoInput | string[]
    urlQR?: string | null
    createdAt?: Date | string
    pic?: string | null
    lokasi?: LokasiCreateNestedOneWithoutAsetInput
    subKategoriAset?: SubAsetKategoriCreateNestedOneWithoutAsetsInput
    maintenances?: MaintenanceCreateNestedManyWithoutAsetInput
    perpindahan?: PerpindahanCreateNestedManyWithoutAsetInput
  }

  export type AsetUncheckedCreateInput = {
    asetId?: string
    lokasiId?: string | null
    subKategoriAsetId?: string | null
    kategoriAset: $Enums.AsetKategori
    merkDanTipe: string
    tahun?: number | null
    kondisiAset?: $Enums.AsetKondisi | null
    statusAset: $Enums.AsetStatus
    nomorSeri?: string | null
    masaBerlaku?: Date | string | null
    statusKepemilikan: string
    urlFoto?: AsetCreateurlFotoInput | string[]
    urlQR?: string | null
    createdAt?: Date | string
    pic?: string | null
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutAsetInput
    perpindahan?: PerpindahanUncheckedCreateNestedManyWithoutAsetInput
  }

  export type AsetUpdateInput = {
    asetId?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    merkDanTipe?: StringFieldUpdateOperationsInput | string
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kondisiAset?: NullableEnumAsetKondisiFieldUpdateOperationsInput | $Enums.AsetKondisi | null
    statusAset?: EnumAsetStatusFieldUpdateOperationsInput | $Enums.AsetStatus
    nomorSeri?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusKepemilikan?: StringFieldUpdateOperationsInput | string
    urlFoto?: AsetUpdateurlFotoInput | string[]
    urlQR?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pic?: NullableStringFieldUpdateOperationsInput | string | null
    lokasi?: LokasiUpdateOneWithoutAsetNestedInput
    subKategoriAset?: SubAsetKategoriUpdateOneWithoutAsetsNestedInput
    maintenances?: MaintenanceUpdateManyWithoutAsetNestedInput
    perpindahan?: PerpindahanUpdateManyWithoutAsetNestedInput
  }

  export type AsetUncheckedUpdateInput = {
    asetId?: StringFieldUpdateOperationsInput | string
    lokasiId?: NullableStringFieldUpdateOperationsInput | string | null
    subKategoriAsetId?: NullableStringFieldUpdateOperationsInput | string | null
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    merkDanTipe?: StringFieldUpdateOperationsInput | string
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kondisiAset?: NullableEnumAsetKondisiFieldUpdateOperationsInput | $Enums.AsetKondisi | null
    statusAset?: EnumAsetStatusFieldUpdateOperationsInput | $Enums.AsetStatus
    nomorSeri?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusKepemilikan?: StringFieldUpdateOperationsInput | string
    urlFoto?: AsetUpdateurlFotoInput | string[]
    urlQR?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pic?: NullableStringFieldUpdateOperationsInput | string | null
    maintenances?: MaintenanceUncheckedUpdateManyWithoutAsetNestedInput
    perpindahan?: PerpindahanUncheckedUpdateManyWithoutAsetNestedInput
  }

  export type AsetCreateManyInput = {
    asetId?: string
    lokasiId?: string | null
    subKategoriAsetId?: string | null
    kategoriAset: $Enums.AsetKategori
    merkDanTipe: string
    tahun?: number | null
    kondisiAset?: $Enums.AsetKondisi | null
    statusAset: $Enums.AsetStatus
    nomorSeri?: string | null
    masaBerlaku?: Date | string | null
    statusKepemilikan: string
    urlFoto?: AsetCreateurlFotoInput | string[]
    urlQR?: string | null
    createdAt?: Date | string
    pic?: string | null
  }

  export type AsetUpdateManyMutationInput = {
    asetId?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    merkDanTipe?: StringFieldUpdateOperationsInput | string
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kondisiAset?: NullableEnumAsetKondisiFieldUpdateOperationsInput | $Enums.AsetKondisi | null
    statusAset?: EnumAsetStatusFieldUpdateOperationsInput | $Enums.AsetStatus
    nomorSeri?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusKepemilikan?: StringFieldUpdateOperationsInput | string
    urlFoto?: AsetUpdateurlFotoInput | string[]
    urlQR?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AsetUncheckedUpdateManyInput = {
    asetId?: StringFieldUpdateOperationsInput | string
    lokasiId?: NullableStringFieldUpdateOperationsInput | string | null
    subKategoriAsetId?: NullableStringFieldUpdateOperationsInput | string | null
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    merkDanTipe?: StringFieldUpdateOperationsInput | string
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kondisiAset?: NullableEnumAsetKondisiFieldUpdateOperationsInput | $Enums.AsetKondisi | null
    statusAset?: EnumAsetStatusFieldUpdateOperationsInput | $Enums.AsetStatus
    nomorSeri?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusKepemilikan?: StringFieldUpdateOperationsInput | string
    urlFoto?: AsetUpdateurlFotoInput | string[]
    urlQR?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MaintenanceCreateInput = {
    maintenanceId?: string
    deskripsi?: string | null
    tanggalMulai: Date | string
    perkiraanSelesai: Date | string
    tanggalSelesai?: Date | string | null
    statusMaintenance: $Enums.MaintenanceRequestStatus
    createdAt?: Date | string
    aset: AsetCreateNestedOneWithoutMaintenancesInput
  }

  export type MaintenanceUncheckedCreateInput = {
    maintenanceId?: string
    deskripsi?: string | null
    idAset: string
    tanggalMulai: Date | string
    perkiraanSelesai: Date | string
    tanggalSelesai?: Date | string | null
    statusMaintenance: $Enums.MaintenanceRequestStatus
    createdAt?: Date | string
  }

  export type MaintenanceUpdateInput = {
    maintenanceId?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    perkiraanSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusMaintenance?: EnumMaintenanceRequestStatusFieldUpdateOperationsInput | $Enums.MaintenanceRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aset?: AsetUpdateOneRequiredWithoutMaintenancesNestedInput
  }

  export type MaintenanceUncheckedUpdateInput = {
    maintenanceId?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    idAset?: StringFieldUpdateOperationsInput | string
    tanggalMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    perkiraanSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusMaintenance?: EnumMaintenanceRequestStatusFieldUpdateOperationsInput | $Enums.MaintenanceRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceCreateManyInput = {
    maintenanceId?: string
    deskripsi?: string | null
    idAset: string
    tanggalMulai: Date | string
    perkiraanSelesai: Date | string
    tanggalSelesai?: Date | string | null
    statusMaintenance: $Enums.MaintenanceRequestStatus
    createdAt?: Date | string
  }

  export type MaintenanceUpdateManyMutationInput = {
    maintenanceId?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    perkiraanSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusMaintenance?: EnumMaintenanceRequestStatusFieldUpdateOperationsInput | $Enums.MaintenanceRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceUncheckedUpdateManyInput = {
    maintenanceId?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    idAset?: StringFieldUpdateOperationsInput | string
    tanggalMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    perkiraanSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusMaintenance?: EnumMaintenanceRequestStatusFieldUpdateOperationsInput | $Enums.MaintenanceRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LokasiCreateInput = {
    idLokasi?: string
    lokasi: string
    kategoriAset: $Enums.AsetKategori
    createdAt?: Date | string
    subKategoriAset?: SubAsetKategoriCreateNestedManyWithoutLokasiInput
    aset?: AsetCreateNestedManyWithoutLokasiInput
    perpindahan?: PerpindahanCreateNestedManyWithoutLokasiInput
    pengadaan?: PengadaanCreateNestedManyWithoutLokasiInput
  }

  export type LokasiUncheckedCreateInput = {
    idLokasi?: string
    lokasi: string
    kategoriAset: $Enums.AsetKategori
    createdAt?: Date | string
    subKategoriAset?: SubAsetKategoriUncheckedCreateNestedManyWithoutLokasiInput
    aset?: AsetUncheckedCreateNestedManyWithoutLokasiInput
    perpindahan?: PerpindahanUncheckedCreateNestedManyWithoutLokasiInput
    pengadaan?: PengadaanUncheckedCreateNestedManyWithoutLokasiInput
  }

  export type LokasiUpdateInput = {
    idLokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subKategoriAset?: SubAsetKategoriUpdateManyWithoutLokasiNestedInput
    aset?: AsetUpdateManyWithoutLokasiNestedInput
    perpindahan?: PerpindahanUpdateManyWithoutLokasiNestedInput
    pengadaan?: PengadaanUpdateManyWithoutLokasiNestedInput
  }

  export type LokasiUncheckedUpdateInput = {
    idLokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subKategoriAset?: SubAsetKategoriUncheckedUpdateManyWithoutLokasiNestedInput
    aset?: AsetUncheckedUpdateManyWithoutLokasiNestedInput
    perpindahan?: PerpindahanUncheckedUpdateManyWithoutLokasiNestedInput
    pengadaan?: PengadaanUncheckedUpdateManyWithoutLokasiNestedInput
  }

  export type LokasiCreateManyInput = {
    idLokasi?: string
    lokasi: string
    kategoriAset: $Enums.AsetKategori
    createdAt?: Date | string
  }

  export type LokasiUpdateManyMutationInput = {
    idLokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LokasiUncheckedUpdateManyInput = {
    idLokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerpindahanCreateInput = {
    idPindahan?: string
    tempatLama: string
    tempatBaru: string
    tanggalPindah: Date | string
    createdAt?: Date | string
    lokasi: LokasiCreateNestedOneWithoutPerpindahanInput
    aset: AsetCreateNestedOneWithoutPerpindahanInput
  }

  export type PerpindahanUncheckedCreateInput = {
    idPindahan?: string
    lokasiId: string
    idAset: string
    tempatLama: string
    tempatBaru: string
    tanggalPindah: Date | string
    createdAt?: Date | string
  }

  export type PerpindahanUpdateInput = {
    idPindahan?: StringFieldUpdateOperationsInput | string
    tempatLama?: StringFieldUpdateOperationsInput | string
    tempatBaru?: StringFieldUpdateOperationsInput | string
    tanggalPindah?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasi?: LokasiUpdateOneRequiredWithoutPerpindahanNestedInput
    aset?: AsetUpdateOneRequiredWithoutPerpindahanNestedInput
  }

  export type PerpindahanUncheckedUpdateInput = {
    idPindahan?: StringFieldUpdateOperationsInput | string
    lokasiId?: StringFieldUpdateOperationsInput | string
    idAset?: StringFieldUpdateOperationsInput | string
    tempatLama?: StringFieldUpdateOperationsInput | string
    tempatBaru?: StringFieldUpdateOperationsInput | string
    tanggalPindah?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerpindahanCreateManyInput = {
    idPindahan?: string
    lokasiId: string
    idAset: string
    tempatLama: string
    tempatBaru: string
    tanggalPindah: Date | string
    createdAt?: Date | string
  }

  export type PerpindahanUpdateManyMutationInput = {
    idPindahan?: StringFieldUpdateOperationsInput | string
    tempatLama?: StringFieldUpdateOperationsInput | string
    tempatBaru?: StringFieldUpdateOperationsInput | string
    tanggalPindah?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerpindahanUncheckedUpdateManyInput = {
    idPindahan?: StringFieldUpdateOperationsInput | string
    lokasiId?: StringFieldUpdateOperationsInput | string
    idAset?: StringFieldUpdateOperationsInput | string
    tempatLama?: StringFieldUpdateOperationsInput | string
    tempatBaru?: StringFieldUpdateOperationsInput | string
    tanggalPindah?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengadaanCreateInput = {
    pengadaanId?: string
    tanggalBeli: Date | string
    kategoriAset: $Enums.AsetKategori
    namaAset: string
    jumlahAset: number
    hargaSatuan: bigint | number
    totalHarga: bigint | number
    vendor: string
    createdAt?: Date | string
    lokasi: LokasiCreateNestedOneWithoutPengadaanInput
  }

  export type PengadaanUncheckedCreateInput = {
    pengadaanId?: string
    tanggalBeli: Date | string
    lokasiId: string
    kategoriAset: $Enums.AsetKategori
    namaAset: string
    jumlahAset: number
    hargaSatuan: bigint | number
    totalHarga: bigint | number
    vendor: string
    createdAt?: Date | string
  }

  export type PengadaanUpdateInput = {
    pengadaanId?: StringFieldUpdateOperationsInput | string
    tanggalBeli?: DateTimeFieldUpdateOperationsInput | Date | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    namaAset?: StringFieldUpdateOperationsInput | string
    jumlahAset?: IntFieldUpdateOperationsInput | number
    hargaSatuan?: BigIntFieldUpdateOperationsInput | bigint | number
    totalHarga?: BigIntFieldUpdateOperationsInput | bigint | number
    vendor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasi?: LokasiUpdateOneRequiredWithoutPengadaanNestedInput
  }

  export type PengadaanUncheckedUpdateInput = {
    pengadaanId?: StringFieldUpdateOperationsInput | string
    tanggalBeli?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasiId?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    namaAset?: StringFieldUpdateOperationsInput | string
    jumlahAset?: IntFieldUpdateOperationsInput | number
    hargaSatuan?: BigIntFieldUpdateOperationsInput | bigint | number
    totalHarga?: BigIntFieldUpdateOperationsInput | bigint | number
    vendor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengadaanCreateManyInput = {
    pengadaanId?: string
    tanggalBeli: Date | string
    lokasiId: string
    kategoriAset: $Enums.AsetKategori
    namaAset: string
    jumlahAset: number
    hargaSatuan: bigint | number
    totalHarga: bigint | number
    vendor: string
    createdAt?: Date | string
  }

  export type PengadaanUpdateManyMutationInput = {
    pengadaanId?: StringFieldUpdateOperationsInput | string
    tanggalBeli?: DateTimeFieldUpdateOperationsInput | Date | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    namaAset?: StringFieldUpdateOperationsInput | string
    jumlahAset?: IntFieldUpdateOperationsInput | number
    hargaSatuan?: BigIntFieldUpdateOperationsInput | bigint | number
    totalHarga?: BigIntFieldUpdateOperationsInput | bigint | number
    vendor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengadaanUncheckedUpdateManyInput = {
    pengadaanId?: StringFieldUpdateOperationsInput | string
    tanggalBeli?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasiId?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    namaAset?: StringFieldUpdateOperationsInput | string
    jumlahAset?: IntFieldUpdateOperationsInput | number
    hargaSatuan?: BigIntFieldUpdateOperationsInput | bigint | number
    totalHarga?: BigIntFieldUpdateOperationsInput | bigint | number
    vendor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotifikasiCreateInput = {
    notifId: number
  }

  export type NotifikasiUncheckedCreateInput = {
    notifId: number
  }

  export type NotifikasiUpdateInput = {
    notifId?: IntFieldUpdateOperationsInput | number
  }

  export type NotifikasiUncheckedUpdateInput = {
    notifId?: IntFieldUpdateOperationsInput | number
  }

  export type NotifikasiCreateManyInput = {
    notifId: number
  }

  export type NotifikasiUpdateManyMutationInput = {
    notifId?: IntFieldUpdateOperationsInput | number
  }

  export type NotifikasiUncheckedUpdateManyInput = {
    notifId?: IntFieldUpdateOperationsInput | number
  }

  export type SubAsetKategoriCreateInput = {
    subAsetId?: string
    nameSubAset: string
    createdAt?: Date | string
    asets?: AsetCreateNestedManyWithoutSubKategoriAsetInput
    lokasi?: LokasiCreateNestedManyWithoutSubKategoriAsetInput
  }

  export type SubAsetKategoriUncheckedCreateInput = {
    subAsetId?: string
    nameSubAset: string
    createdAt?: Date | string
    asets?: AsetUncheckedCreateNestedManyWithoutSubKategoriAsetInput
    lokasi?: LokasiUncheckedCreateNestedManyWithoutSubKategoriAsetInput
  }

  export type SubAsetKategoriUpdateInput = {
    subAsetId?: StringFieldUpdateOperationsInput | string
    nameSubAset?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asets?: AsetUpdateManyWithoutSubKategoriAsetNestedInput
    lokasi?: LokasiUpdateManyWithoutSubKategoriAsetNestedInput
  }

  export type SubAsetKategoriUncheckedUpdateInput = {
    subAsetId?: StringFieldUpdateOperationsInput | string
    nameSubAset?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asets?: AsetUncheckedUpdateManyWithoutSubKategoriAsetNestedInput
    lokasi?: LokasiUncheckedUpdateManyWithoutSubKategoriAsetNestedInput
  }

  export type SubAsetKategoriCreateManyInput = {
    subAsetId?: string
    nameSubAset: string
    createdAt?: Date | string
  }

  export type SubAsetKategoriUpdateManyMutationInput = {
    subAsetId?: StringFieldUpdateOperationsInput | string
    nameSubAset?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubAsetKategoriUncheckedUpdateManyInput = {
    subAsetId?: StringFieldUpdateOperationsInput | string
    nameSubAset?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateInput = {
    userRoleId?: string
    nameRole: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type UserRoleUncheckedCreateInput = {
    userRoleId?: string
    nameRole: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type UserRoleUpdateInput = {
    userRoleId?: StringFieldUpdateOperationsInput | string
    nameRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    userRoleId?: StringFieldUpdateOperationsInput | string
    nameRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type UserRoleCreateManyInput = {
    userRoleId?: string
    nameRole: string
    createdAt?: Date | string
  }

  export type UserRoleUpdateManyMutationInput = {
    userRoleId?: StringFieldUpdateOperationsInput | string
    nameRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyInput = {
    userRoleId?: StringFieldUpdateOperationsInput | string
    nameRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type UserRoleScalarRelationFilter = {
    is?: UserRoleWhereInput
    isNot?: UserRoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    roleId?: SortOrder
    password?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    roleId?: SortOrder
    password?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    roleId?: SortOrder
    password?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
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

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type EnumAsetKategoriFilter<$PrismaModel = never> = {
    equals?: $Enums.AsetKategori | EnumAsetKategoriFieldRefInput<$PrismaModel>
    in?: $Enums.AsetKategori[] | ListEnumAsetKategoriFieldRefInput<$PrismaModel>
    notIn?: $Enums.AsetKategori[] | ListEnumAsetKategoriFieldRefInput<$PrismaModel>
    not?: NestedEnumAsetKategoriFilter<$PrismaModel> | $Enums.AsetKategori
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

  export type EnumAsetKondisiNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AsetKondisi | EnumAsetKondisiFieldRefInput<$PrismaModel> | null
    in?: $Enums.AsetKondisi[] | ListEnumAsetKondisiFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AsetKondisi[] | ListEnumAsetKondisiFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAsetKondisiNullableFilter<$PrismaModel> | $Enums.AsetKondisi | null
  }

  export type EnumAsetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AsetStatus | EnumAsetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AsetStatus[] | ListEnumAsetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AsetStatus[] | ListEnumAsetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAsetStatusFilter<$PrismaModel> | $Enums.AsetStatus
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type LokasiNullableScalarRelationFilter = {
    is?: LokasiWhereInput | null
    isNot?: LokasiWhereInput | null
  }

  export type SubAsetKategoriNullableScalarRelationFilter = {
    is?: SubAsetKategoriWhereInput | null
    isNot?: SubAsetKategoriWhereInput | null
  }

  export type MaintenanceListRelationFilter = {
    every?: MaintenanceWhereInput
    some?: MaintenanceWhereInput
    none?: MaintenanceWhereInput
  }

  export type PerpindahanListRelationFilter = {
    every?: PerpindahanWhereInput
    some?: PerpindahanWhereInput
    none?: PerpindahanWhereInput
  }

  export type MaintenanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PerpindahanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AsetCountOrderByAggregateInput = {
    asetId?: SortOrder
    lokasiId?: SortOrder
    subKategoriAsetId?: SortOrder
    kategoriAset?: SortOrder
    merkDanTipe?: SortOrder
    tahun?: SortOrder
    kondisiAset?: SortOrder
    statusAset?: SortOrder
    nomorSeri?: SortOrder
    masaBerlaku?: SortOrder
    statusKepemilikan?: SortOrder
    urlFoto?: SortOrder
    urlQR?: SortOrder
    createdAt?: SortOrder
    pic?: SortOrder
  }

  export type AsetAvgOrderByAggregateInput = {
    tahun?: SortOrder
  }

  export type AsetMaxOrderByAggregateInput = {
    asetId?: SortOrder
    lokasiId?: SortOrder
    subKategoriAsetId?: SortOrder
    kategoriAset?: SortOrder
    merkDanTipe?: SortOrder
    tahun?: SortOrder
    kondisiAset?: SortOrder
    statusAset?: SortOrder
    nomorSeri?: SortOrder
    masaBerlaku?: SortOrder
    statusKepemilikan?: SortOrder
    urlQR?: SortOrder
    createdAt?: SortOrder
    pic?: SortOrder
  }

  export type AsetMinOrderByAggregateInput = {
    asetId?: SortOrder
    lokasiId?: SortOrder
    subKategoriAsetId?: SortOrder
    kategoriAset?: SortOrder
    merkDanTipe?: SortOrder
    tahun?: SortOrder
    kondisiAset?: SortOrder
    statusAset?: SortOrder
    nomorSeri?: SortOrder
    masaBerlaku?: SortOrder
    statusKepemilikan?: SortOrder
    urlQR?: SortOrder
    createdAt?: SortOrder
    pic?: SortOrder
  }

  export type AsetSumOrderByAggregateInput = {
    tahun?: SortOrder
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

  export type EnumAsetKategoriWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AsetKategori | EnumAsetKategoriFieldRefInput<$PrismaModel>
    in?: $Enums.AsetKategori[] | ListEnumAsetKategoriFieldRefInput<$PrismaModel>
    notIn?: $Enums.AsetKategori[] | ListEnumAsetKategoriFieldRefInput<$PrismaModel>
    not?: NestedEnumAsetKategoriWithAggregatesFilter<$PrismaModel> | $Enums.AsetKategori
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAsetKategoriFilter<$PrismaModel>
    _max?: NestedEnumAsetKategoriFilter<$PrismaModel>
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

  export type EnumAsetKondisiNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AsetKondisi | EnumAsetKondisiFieldRefInput<$PrismaModel> | null
    in?: $Enums.AsetKondisi[] | ListEnumAsetKondisiFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AsetKondisi[] | ListEnumAsetKondisiFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAsetKondisiNullableWithAggregatesFilter<$PrismaModel> | $Enums.AsetKondisi | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAsetKondisiNullableFilter<$PrismaModel>
    _max?: NestedEnumAsetKondisiNullableFilter<$PrismaModel>
  }

  export type EnumAsetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AsetStatus | EnumAsetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AsetStatus[] | ListEnumAsetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AsetStatus[] | ListEnumAsetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAsetStatusWithAggregatesFilter<$PrismaModel> | $Enums.AsetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAsetStatusFilter<$PrismaModel>
    _max?: NestedEnumAsetStatusFilter<$PrismaModel>
  }

  export type EnumMaintenanceRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceRequestStatus | EnumMaintenanceRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceRequestStatus[] | ListEnumMaintenanceRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenanceRequestStatus[] | ListEnumMaintenanceRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenanceRequestStatusFilter<$PrismaModel> | $Enums.MaintenanceRequestStatus
  }

  export type AsetScalarRelationFilter = {
    is?: AsetWhereInput
    isNot?: AsetWhereInput
  }

  export type MaintenanceCountOrderByAggregateInput = {
    maintenanceId?: SortOrder
    deskripsi?: SortOrder
    idAset?: SortOrder
    tanggalMulai?: SortOrder
    perkiraanSelesai?: SortOrder
    tanggalSelesai?: SortOrder
    statusMaintenance?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenanceMaxOrderByAggregateInput = {
    maintenanceId?: SortOrder
    deskripsi?: SortOrder
    idAset?: SortOrder
    tanggalMulai?: SortOrder
    perkiraanSelesai?: SortOrder
    tanggalSelesai?: SortOrder
    statusMaintenance?: SortOrder
    createdAt?: SortOrder
  }

  export type MaintenanceMinOrderByAggregateInput = {
    maintenanceId?: SortOrder
    deskripsi?: SortOrder
    idAset?: SortOrder
    tanggalMulai?: SortOrder
    perkiraanSelesai?: SortOrder
    tanggalSelesai?: SortOrder
    statusMaintenance?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMaintenanceRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceRequestStatus | EnumMaintenanceRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceRequestStatus[] | ListEnumMaintenanceRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenanceRequestStatus[] | ListEnumMaintenanceRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenanceRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaintenanceRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaintenanceRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumMaintenanceRequestStatusFilter<$PrismaModel>
  }

  export type SubAsetKategoriListRelationFilter = {
    every?: SubAsetKategoriWhereInput
    some?: SubAsetKategoriWhereInput
    none?: SubAsetKategoriWhereInput
  }

  export type AsetListRelationFilter = {
    every?: AsetWhereInput
    some?: AsetWhereInput
    none?: AsetWhereInput
  }

  export type PengadaanListRelationFilter = {
    every?: PengadaanWhereInput
    some?: PengadaanWhereInput
    none?: PengadaanWhereInput
  }

  export type SubAsetKategoriOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AsetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PengadaanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LokasiCountOrderByAggregateInput = {
    idLokasi?: SortOrder
    lokasi?: SortOrder
    kategoriAset?: SortOrder
    createdAt?: SortOrder
  }

  export type LokasiMaxOrderByAggregateInput = {
    idLokasi?: SortOrder
    lokasi?: SortOrder
    kategoriAset?: SortOrder
    createdAt?: SortOrder
  }

  export type LokasiMinOrderByAggregateInput = {
    idLokasi?: SortOrder
    lokasi?: SortOrder
    kategoriAset?: SortOrder
    createdAt?: SortOrder
  }

  export type LokasiScalarRelationFilter = {
    is?: LokasiWhereInput
    isNot?: LokasiWhereInput
  }

  export type PerpindahanCountOrderByAggregateInput = {
    idPindahan?: SortOrder
    lokasiId?: SortOrder
    idAset?: SortOrder
    tempatLama?: SortOrder
    tempatBaru?: SortOrder
    tanggalPindah?: SortOrder
    createdAt?: SortOrder
  }

  export type PerpindahanMaxOrderByAggregateInput = {
    idPindahan?: SortOrder
    lokasiId?: SortOrder
    idAset?: SortOrder
    tempatLama?: SortOrder
    tempatBaru?: SortOrder
    tanggalPindah?: SortOrder
    createdAt?: SortOrder
  }

  export type PerpindahanMinOrderByAggregateInput = {
    idPindahan?: SortOrder
    lokasiId?: SortOrder
    idAset?: SortOrder
    tempatLama?: SortOrder
    tempatBaru?: SortOrder
    tanggalPindah?: SortOrder
    createdAt?: SortOrder
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type PengadaanCountOrderByAggregateInput = {
    pengadaanId?: SortOrder
    tanggalBeli?: SortOrder
    lokasiId?: SortOrder
    kategoriAset?: SortOrder
    namaAset?: SortOrder
    jumlahAset?: SortOrder
    hargaSatuan?: SortOrder
    totalHarga?: SortOrder
    vendor?: SortOrder
    createdAt?: SortOrder
  }

  export type PengadaanAvgOrderByAggregateInput = {
    jumlahAset?: SortOrder
    hargaSatuan?: SortOrder
    totalHarga?: SortOrder
  }

  export type PengadaanMaxOrderByAggregateInput = {
    pengadaanId?: SortOrder
    tanggalBeli?: SortOrder
    lokasiId?: SortOrder
    kategoriAset?: SortOrder
    namaAset?: SortOrder
    jumlahAset?: SortOrder
    hargaSatuan?: SortOrder
    totalHarga?: SortOrder
    vendor?: SortOrder
    createdAt?: SortOrder
  }

  export type PengadaanMinOrderByAggregateInput = {
    pengadaanId?: SortOrder
    tanggalBeli?: SortOrder
    lokasiId?: SortOrder
    kategoriAset?: SortOrder
    namaAset?: SortOrder
    jumlahAset?: SortOrder
    hargaSatuan?: SortOrder
    totalHarga?: SortOrder
    vendor?: SortOrder
    createdAt?: SortOrder
  }

  export type PengadaanSumOrderByAggregateInput = {
    jumlahAset?: SortOrder
    hargaSatuan?: SortOrder
    totalHarga?: SortOrder
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NotifikasiCountOrderByAggregateInput = {
    notifId?: SortOrder
  }

  export type NotifikasiAvgOrderByAggregateInput = {
    notifId?: SortOrder
  }

  export type NotifikasiMaxOrderByAggregateInput = {
    notifId?: SortOrder
  }

  export type NotifikasiMinOrderByAggregateInput = {
    notifId?: SortOrder
  }

  export type NotifikasiSumOrderByAggregateInput = {
    notifId?: SortOrder
  }

  export type LokasiListRelationFilter = {
    every?: LokasiWhereInput
    some?: LokasiWhereInput
    none?: LokasiWhereInput
  }

  export type LokasiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubAsetKategoriCountOrderByAggregateInput = {
    subAsetId?: SortOrder
    nameSubAset?: SortOrder
    createdAt?: SortOrder
  }

  export type SubAsetKategoriMaxOrderByAggregateInput = {
    subAsetId?: SortOrder
    nameSubAset?: SortOrder
    createdAt?: SortOrder
  }

  export type SubAsetKategoriMinOrderByAggregateInput = {
    subAsetId?: SortOrder
    nameSubAset?: SortOrder
    createdAt?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRoleCountOrderByAggregateInput = {
    userRoleId?: SortOrder
    nameRole?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    userRoleId?: SortOrder
    nameRole?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    userRoleId?: SortOrder
    nameRole?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput
    connect?: UserRoleWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type UserRoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput
    upsert?: UserRoleUpsertWithoutUsersInput
    connect?: UserRoleWhereUniqueInput
    update?: XOR<XOR<UserRoleUpdateToOneWithWhereWithoutUsersInput, UserRoleUpdateWithoutUsersInput>, UserRoleUncheckedUpdateWithoutUsersInput>
  }

  export type AsetCreateurlFotoInput = {
    set: string[]
  }

  export type LokasiCreateNestedOneWithoutAsetInput = {
    create?: XOR<LokasiCreateWithoutAsetInput, LokasiUncheckedCreateWithoutAsetInput>
    connectOrCreate?: LokasiCreateOrConnectWithoutAsetInput
    connect?: LokasiWhereUniqueInput
  }

  export type SubAsetKategoriCreateNestedOneWithoutAsetsInput = {
    create?: XOR<SubAsetKategoriCreateWithoutAsetsInput, SubAsetKategoriUncheckedCreateWithoutAsetsInput>
    connectOrCreate?: SubAsetKategoriCreateOrConnectWithoutAsetsInput
    connect?: SubAsetKategoriWhereUniqueInput
  }

  export type MaintenanceCreateNestedManyWithoutAsetInput = {
    create?: XOR<MaintenanceCreateWithoutAsetInput, MaintenanceUncheckedCreateWithoutAsetInput> | MaintenanceCreateWithoutAsetInput[] | MaintenanceUncheckedCreateWithoutAsetInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutAsetInput | MaintenanceCreateOrConnectWithoutAsetInput[]
    createMany?: MaintenanceCreateManyAsetInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type PerpindahanCreateNestedManyWithoutAsetInput = {
    create?: XOR<PerpindahanCreateWithoutAsetInput, PerpindahanUncheckedCreateWithoutAsetInput> | PerpindahanCreateWithoutAsetInput[] | PerpindahanUncheckedCreateWithoutAsetInput[]
    connectOrCreate?: PerpindahanCreateOrConnectWithoutAsetInput | PerpindahanCreateOrConnectWithoutAsetInput[]
    createMany?: PerpindahanCreateManyAsetInputEnvelope
    connect?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
  }

  export type MaintenanceUncheckedCreateNestedManyWithoutAsetInput = {
    create?: XOR<MaintenanceCreateWithoutAsetInput, MaintenanceUncheckedCreateWithoutAsetInput> | MaintenanceCreateWithoutAsetInput[] | MaintenanceUncheckedCreateWithoutAsetInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutAsetInput | MaintenanceCreateOrConnectWithoutAsetInput[]
    createMany?: MaintenanceCreateManyAsetInputEnvelope
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
  }

  export type PerpindahanUncheckedCreateNestedManyWithoutAsetInput = {
    create?: XOR<PerpindahanCreateWithoutAsetInput, PerpindahanUncheckedCreateWithoutAsetInput> | PerpindahanCreateWithoutAsetInput[] | PerpindahanUncheckedCreateWithoutAsetInput[]
    connectOrCreate?: PerpindahanCreateOrConnectWithoutAsetInput | PerpindahanCreateOrConnectWithoutAsetInput[]
    createMany?: PerpindahanCreateManyAsetInputEnvelope
    connect?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
  }

  export type EnumAsetKategoriFieldUpdateOperationsInput = {
    set?: $Enums.AsetKategori
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumAsetKondisiFieldUpdateOperationsInput = {
    set?: $Enums.AsetKondisi | null
  }

  export type EnumAsetStatusFieldUpdateOperationsInput = {
    set?: $Enums.AsetStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AsetUpdateurlFotoInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LokasiUpdateOneWithoutAsetNestedInput = {
    create?: XOR<LokasiCreateWithoutAsetInput, LokasiUncheckedCreateWithoutAsetInput>
    connectOrCreate?: LokasiCreateOrConnectWithoutAsetInput
    upsert?: LokasiUpsertWithoutAsetInput
    disconnect?: LokasiWhereInput | boolean
    delete?: LokasiWhereInput | boolean
    connect?: LokasiWhereUniqueInput
    update?: XOR<XOR<LokasiUpdateToOneWithWhereWithoutAsetInput, LokasiUpdateWithoutAsetInput>, LokasiUncheckedUpdateWithoutAsetInput>
  }

  export type SubAsetKategoriUpdateOneWithoutAsetsNestedInput = {
    create?: XOR<SubAsetKategoriCreateWithoutAsetsInput, SubAsetKategoriUncheckedCreateWithoutAsetsInput>
    connectOrCreate?: SubAsetKategoriCreateOrConnectWithoutAsetsInput
    upsert?: SubAsetKategoriUpsertWithoutAsetsInput
    disconnect?: SubAsetKategoriWhereInput | boolean
    delete?: SubAsetKategoriWhereInput | boolean
    connect?: SubAsetKategoriWhereUniqueInput
    update?: XOR<XOR<SubAsetKategoriUpdateToOneWithWhereWithoutAsetsInput, SubAsetKategoriUpdateWithoutAsetsInput>, SubAsetKategoriUncheckedUpdateWithoutAsetsInput>
  }

  export type MaintenanceUpdateManyWithoutAsetNestedInput = {
    create?: XOR<MaintenanceCreateWithoutAsetInput, MaintenanceUncheckedCreateWithoutAsetInput> | MaintenanceCreateWithoutAsetInput[] | MaintenanceUncheckedCreateWithoutAsetInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutAsetInput | MaintenanceCreateOrConnectWithoutAsetInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutAsetInput | MaintenanceUpsertWithWhereUniqueWithoutAsetInput[]
    createMany?: MaintenanceCreateManyAsetInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutAsetInput | MaintenanceUpdateWithWhereUniqueWithoutAsetInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutAsetInput | MaintenanceUpdateManyWithWhereWithoutAsetInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type PerpindahanUpdateManyWithoutAsetNestedInput = {
    create?: XOR<PerpindahanCreateWithoutAsetInput, PerpindahanUncheckedCreateWithoutAsetInput> | PerpindahanCreateWithoutAsetInput[] | PerpindahanUncheckedCreateWithoutAsetInput[]
    connectOrCreate?: PerpindahanCreateOrConnectWithoutAsetInput | PerpindahanCreateOrConnectWithoutAsetInput[]
    upsert?: PerpindahanUpsertWithWhereUniqueWithoutAsetInput | PerpindahanUpsertWithWhereUniqueWithoutAsetInput[]
    createMany?: PerpindahanCreateManyAsetInputEnvelope
    set?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
    disconnect?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
    delete?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
    connect?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
    update?: PerpindahanUpdateWithWhereUniqueWithoutAsetInput | PerpindahanUpdateWithWhereUniqueWithoutAsetInput[]
    updateMany?: PerpindahanUpdateManyWithWhereWithoutAsetInput | PerpindahanUpdateManyWithWhereWithoutAsetInput[]
    deleteMany?: PerpindahanScalarWhereInput | PerpindahanScalarWhereInput[]
  }

  export type MaintenanceUncheckedUpdateManyWithoutAsetNestedInput = {
    create?: XOR<MaintenanceCreateWithoutAsetInput, MaintenanceUncheckedCreateWithoutAsetInput> | MaintenanceCreateWithoutAsetInput[] | MaintenanceUncheckedCreateWithoutAsetInput[]
    connectOrCreate?: MaintenanceCreateOrConnectWithoutAsetInput | MaintenanceCreateOrConnectWithoutAsetInput[]
    upsert?: MaintenanceUpsertWithWhereUniqueWithoutAsetInput | MaintenanceUpsertWithWhereUniqueWithoutAsetInput[]
    createMany?: MaintenanceCreateManyAsetInputEnvelope
    set?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    disconnect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    delete?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    connect?: MaintenanceWhereUniqueInput | MaintenanceWhereUniqueInput[]
    update?: MaintenanceUpdateWithWhereUniqueWithoutAsetInput | MaintenanceUpdateWithWhereUniqueWithoutAsetInput[]
    updateMany?: MaintenanceUpdateManyWithWhereWithoutAsetInput | MaintenanceUpdateManyWithWhereWithoutAsetInput[]
    deleteMany?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
  }

  export type PerpindahanUncheckedUpdateManyWithoutAsetNestedInput = {
    create?: XOR<PerpindahanCreateWithoutAsetInput, PerpindahanUncheckedCreateWithoutAsetInput> | PerpindahanCreateWithoutAsetInput[] | PerpindahanUncheckedCreateWithoutAsetInput[]
    connectOrCreate?: PerpindahanCreateOrConnectWithoutAsetInput | PerpindahanCreateOrConnectWithoutAsetInput[]
    upsert?: PerpindahanUpsertWithWhereUniqueWithoutAsetInput | PerpindahanUpsertWithWhereUniqueWithoutAsetInput[]
    createMany?: PerpindahanCreateManyAsetInputEnvelope
    set?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
    disconnect?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
    delete?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
    connect?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
    update?: PerpindahanUpdateWithWhereUniqueWithoutAsetInput | PerpindahanUpdateWithWhereUniqueWithoutAsetInput[]
    updateMany?: PerpindahanUpdateManyWithWhereWithoutAsetInput | PerpindahanUpdateManyWithWhereWithoutAsetInput[]
    deleteMany?: PerpindahanScalarWhereInput | PerpindahanScalarWhereInput[]
  }

  export type AsetCreateNestedOneWithoutMaintenancesInput = {
    create?: XOR<AsetCreateWithoutMaintenancesInput, AsetUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: AsetCreateOrConnectWithoutMaintenancesInput
    connect?: AsetWhereUniqueInput
  }

  export type EnumMaintenanceRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaintenanceRequestStatus
  }

  export type AsetUpdateOneRequiredWithoutMaintenancesNestedInput = {
    create?: XOR<AsetCreateWithoutMaintenancesInput, AsetUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: AsetCreateOrConnectWithoutMaintenancesInput
    upsert?: AsetUpsertWithoutMaintenancesInput
    connect?: AsetWhereUniqueInput
    update?: XOR<XOR<AsetUpdateToOneWithWhereWithoutMaintenancesInput, AsetUpdateWithoutMaintenancesInput>, AsetUncheckedUpdateWithoutMaintenancesInput>
  }

  export type SubAsetKategoriCreateNestedManyWithoutLokasiInput = {
    create?: XOR<SubAsetKategoriCreateWithoutLokasiInput, SubAsetKategoriUncheckedCreateWithoutLokasiInput> | SubAsetKategoriCreateWithoutLokasiInput[] | SubAsetKategoriUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: SubAsetKategoriCreateOrConnectWithoutLokasiInput | SubAsetKategoriCreateOrConnectWithoutLokasiInput[]
    connect?: SubAsetKategoriWhereUniqueInput | SubAsetKategoriWhereUniqueInput[]
  }

  export type AsetCreateNestedManyWithoutLokasiInput = {
    create?: XOR<AsetCreateWithoutLokasiInput, AsetUncheckedCreateWithoutLokasiInput> | AsetCreateWithoutLokasiInput[] | AsetUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: AsetCreateOrConnectWithoutLokasiInput | AsetCreateOrConnectWithoutLokasiInput[]
    createMany?: AsetCreateManyLokasiInputEnvelope
    connect?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
  }

  export type PerpindahanCreateNestedManyWithoutLokasiInput = {
    create?: XOR<PerpindahanCreateWithoutLokasiInput, PerpindahanUncheckedCreateWithoutLokasiInput> | PerpindahanCreateWithoutLokasiInput[] | PerpindahanUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: PerpindahanCreateOrConnectWithoutLokasiInput | PerpindahanCreateOrConnectWithoutLokasiInput[]
    createMany?: PerpindahanCreateManyLokasiInputEnvelope
    connect?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
  }

  export type PengadaanCreateNestedManyWithoutLokasiInput = {
    create?: XOR<PengadaanCreateWithoutLokasiInput, PengadaanUncheckedCreateWithoutLokasiInput> | PengadaanCreateWithoutLokasiInput[] | PengadaanUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: PengadaanCreateOrConnectWithoutLokasiInput | PengadaanCreateOrConnectWithoutLokasiInput[]
    createMany?: PengadaanCreateManyLokasiInputEnvelope
    connect?: PengadaanWhereUniqueInput | PengadaanWhereUniqueInput[]
  }

  export type SubAsetKategoriUncheckedCreateNestedManyWithoutLokasiInput = {
    create?: XOR<SubAsetKategoriCreateWithoutLokasiInput, SubAsetKategoriUncheckedCreateWithoutLokasiInput> | SubAsetKategoriCreateWithoutLokasiInput[] | SubAsetKategoriUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: SubAsetKategoriCreateOrConnectWithoutLokasiInput | SubAsetKategoriCreateOrConnectWithoutLokasiInput[]
    connect?: SubAsetKategoriWhereUniqueInput | SubAsetKategoriWhereUniqueInput[]
  }

  export type AsetUncheckedCreateNestedManyWithoutLokasiInput = {
    create?: XOR<AsetCreateWithoutLokasiInput, AsetUncheckedCreateWithoutLokasiInput> | AsetCreateWithoutLokasiInput[] | AsetUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: AsetCreateOrConnectWithoutLokasiInput | AsetCreateOrConnectWithoutLokasiInput[]
    createMany?: AsetCreateManyLokasiInputEnvelope
    connect?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
  }

  export type PerpindahanUncheckedCreateNestedManyWithoutLokasiInput = {
    create?: XOR<PerpindahanCreateWithoutLokasiInput, PerpindahanUncheckedCreateWithoutLokasiInput> | PerpindahanCreateWithoutLokasiInput[] | PerpindahanUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: PerpindahanCreateOrConnectWithoutLokasiInput | PerpindahanCreateOrConnectWithoutLokasiInput[]
    createMany?: PerpindahanCreateManyLokasiInputEnvelope
    connect?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
  }

  export type PengadaanUncheckedCreateNestedManyWithoutLokasiInput = {
    create?: XOR<PengadaanCreateWithoutLokasiInput, PengadaanUncheckedCreateWithoutLokasiInput> | PengadaanCreateWithoutLokasiInput[] | PengadaanUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: PengadaanCreateOrConnectWithoutLokasiInput | PengadaanCreateOrConnectWithoutLokasiInput[]
    createMany?: PengadaanCreateManyLokasiInputEnvelope
    connect?: PengadaanWhereUniqueInput | PengadaanWhereUniqueInput[]
  }

  export type SubAsetKategoriUpdateManyWithoutLokasiNestedInput = {
    create?: XOR<SubAsetKategoriCreateWithoutLokasiInput, SubAsetKategoriUncheckedCreateWithoutLokasiInput> | SubAsetKategoriCreateWithoutLokasiInput[] | SubAsetKategoriUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: SubAsetKategoriCreateOrConnectWithoutLokasiInput | SubAsetKategoriCreateOrConnectWithoutLokasiInput[]
    upsert?: SubAsetKategoriUpsertWithWhereUniqueWithoutLokasiInput | SubAsetKategoriUpsertWithWhereUniqueWithoutLokasiInput[]
    set?: SubAsetKategoriWhereUniqueInput | SubAsetKategoriWhereUniqueInput[]
    disconnect?: SubAsetKategoriWhereUniqueInput | SubAsetKategoriWhereUniqueInput[]
    delete?: SubAsetKategoriWhereUniqueInput | SubAsetKategoriWhereUniqueInput[]
    connect?: SubAsetKategoriWhereUniqueInput | SubAsetKategoriWhereUniqueInput[]
    update?: SubAsetKategoriUpdateWithWhereUniqueWithoutLokasiInput | SubAsetKategoriUpdateWithWhereUniqueWithoutLokasiInput[]
    updateMany?: SubAsetKategoriUpdateManyWithWhereWithoutLokasiInput | SubAsetKategoriUpdateManyWithWhereWithoutLokasiInput[]
    deleteMany?: SubAsetKategoriScalarWhereInput | SubAsetKategoriScalarWhereInput[]
  }

  export type AsetUpdateManyWithoutLokasiNestedInput = {
    create?: XOR<AsetCreateWithoutLokasiInput, AsetUncheckedCreateWithoutLokasiInput> | AsetCreateWithoutLokasiInput[] | AsetUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: AsetCreateOrConnectWithoutLokasiInput | AsetCreateOrConnectWithoutLokasiInput[]
    upsert?: AsetUpsertWithWhereUniqueWithoutLokasiInput | AsetUpsertWithWhereUniqueWithoutLokasiInput[]
    createMany?: AsetCreateManyLokasiInputEnvelope
    set?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
    disconnect?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
    delete?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
    connect?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
    update?: AsetUpdateWithWhereUniqueWithoutLokasiInput | AsetUpdateWithWhereUniqueWithoutLokasiInput[]
    updateMany?: AsetUpdateManyWithWhereWithoutLokasiInput | AsetUpdateManyWithWhereWithoutLokasiInput[]
    deleteMany?: AsetScalarWhereInput | AsetScalarWhereInput[]
  }

  export type PerpindahanUpdateManyWithoutLokasiNestedInput = {
    create?: XOR<PerpindahanCreateWithoutLokasiInput, PerpindahanUncheckedCreateWithoutLokasiInput> | PerpindahanCreateWithoutLokasiInput[] | PerpindahanUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: PerpindahanCreateOrConnectWithoutLokasiInput | PerpindahanCreateOrConnectWithoutLokasiInput[]
    upsert?: PerpindahanUpsertWithWhereUniqueWithoutLokasiInput | PerpindahanUpsertWithWhereUniqueWithoutLokasiInput[]
    createMany?: PerpindahanCreateManyLokasiInputEnvelope
    set?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
    disconnect?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
    delete?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
    connect?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
    update?: PerpindahanUpdateWithWhereUniqueWithoutLokasiInput | PerpindahanUpdateWithWhereUniqueWithoutLokasiInput[]
    updateMany?: PerpindahanUpdateManyWithWhereWithoutLokasiInput | PerpindahanUpdateManyWithWhereWithoutLokasiInput[]
    deleteMany?: PerpindahanScalarWhereInput | PerpindahanScalarWhereInput[]
  }

  export type PengadaanUpdateManyWithoutLokasiNestedInput = {
    create?: XOR<PengadaanCreateWithoutLokasiInput, PengadaanUncheckedCreateWithoutLokasiInput> | PengadaanCreateWithoutLokasiInput[] | PengadaanUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: PengadaanCreateOrConnectWithoutLokasiInput | PengadaanCreateOrConnectWithoutLokasiInput[]
    upsert?: PengadaanUpsertWithWhereUniqueWithoutLokasiInput | PengadaanUpsertWithWhereUniqueWithoutLokasiInput[]
    createMany?: PengadaanCreateManyLokasiInputEnvelope
    set?: PengadaanWhereUniqueInput | PengadaanWhereUniqueInput[]
    disconnect?: PengadaanWhereUniqueInput | PengadaanWhereUniqueInput[]
    delete?: PengadaanWhereUniqueInput | PengadaanWhereUniqueInput[]
    connect?: PengadaanWhereUniqueInput | PengadaanWhereUniqueInput[]
    update?: PengadaanUpdateWithWhereUniqueWithoutLokasiInput | PengadaanUpdateWithWhereUniqueWithoutLokasiInput[]
    updateMany?: PengadaanUpdateManyWithWhereWithoutLokasiInput | PengadaanUpdateManyWithWhereWithoutLokasiInput[]
    deleteMany?: PengadaanScalarWhereInput | PengadaanScalarWhereInput[]
  }

  export type SubAsetKategoriUncheckedUpdateManyWithoutLokasiNestedInput = {
    create?: XOR<SubAsetKategoriCreateWithoutLokasiInput, SubAsetKategoriUncheckedCreateWithoutLokasiInput> | SubAsetKategoriCreateWithoutLokasiInput[] | SubAsetKategoriUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: SubAsetKategoriCreateOrConnectWithoutLokasiInput | SubAsetKategoriCreateOrConnectWithoutLokasiInput[]
    upsert?: SubAsetKategoriUpsertWithWhereUniqueWithoutLokasiInput | SubAsetKategoriUpsertWithWhereUniqueWithoutLokasiInput[]
    set?: SubAsetKategoriWhereUniqueInput | SubAsetKategoriWhereUniqueInput[]
    disconnect?: SubAsetKategoriWhereUniqueInput | SubAsetKategoriWhereUniqueInput[]
    delete?: SubAsetKategoriWhereUniqueInput | SubAsetKategoriWhereUniqueInput[]
    connect?: SubAsetKategoriWhereUniqueInput | SubAsetKategoriWhereUniqueInput[]
    update?: SubAsetKategoriUpdateWithWhereUniqueWithoutLokasiInput | SubAsetKategoriUpdateWithWhereUniqueWithoutLokasiInput[]
    updateMany?: SubAsetKategoriUpdateManyWithWhereWithoutLokasiInput | SubAsetKategoriUpdateManyWithWhereWithoutLokasiInput[]
    deleteMany?: SubAsetKategoriScalarWhereInput | SubAsetKategoriScalarWhereInput[]
  }

  export type AsetUncheckedUpdateManyWithoutLokasiNestedInput = {
    create?: XOR<AsetCreateWithoutLokasiInput, AsetUncheckedCreateWithoutLokasiInput> | AsetCreateWithoutLokasiInput[] | AsetUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: AsetCreateOrConnectWithoutLokasiInput | AsetCreateOrConnectWithoutLokasiInput[]
    upsert?: AsetUpsertWithWhereUniqueWithoutLokasiInput | AsetUpsertWithWhereUniqueWithoutLokasiInput[]
    createMany?: AsetCreateManyLokasiInputEnvelope
    set?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
    disconnect?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
    delete?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
    connect?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
    update?: AsetUpdateWithWhereUniqueWithoutLokasiInput | AsetUpdateWithWhereUniqueWithoutLokasiInput[]
    updateMany?: AsetUpdateManyWithWhereWithoutLokasiInput | AsetUpdateManyWithWhereWithoutLokasiInput[]
    deleteMany?: AsetScalarWhereInput | AsetScalarWhereInput[]
  }

  export type PerpindahanUncheckedUpdateManyWithoutLokasiNestedInput = {
    create?: XOR<PerpindahanCreateWithoutLokasiInput, PerpindahanUncheckedCreateWithoutLokasiInput> | PerpindahanCreateWithoutLokasiInput[] | PerpindahanUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: PerpindahanCreateOrConnectWithoutLokasiInput | PerpindahanCreateOrConnectWithoutLokasiInput[]
    upsert?: PerpindahanUpsertWithWhereUniqueWithoutLokasiInput | PerpindahanUpsertWithWhereUniqueWithoutLokasiInput[]
    createMany?: PerpindahanCreateManyLokasiInputEnvelope
    set?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
    disconnect?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
    delete?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
    connect?: PerpindahanWhereUniqueInput | PerpindahanWhereUniqueInput[]
    update?: PerpindahanUpdateWithWhereUniqueWithoutLokasiInput | PerpindahanUpdateWithWhereUniqueWithoutLokasiInput[]
    updateMany?: PerpindahanUpdateManyWithWhereWithoutLokasiInput | PerpindahanUpdateManyWithWhereWithoutLokasiInput[]
    deleteMany?: PerpindahanScalarWhereInput | PerpindahanScalarWhereInput[]
  }

  export type PengadaanUncheckedUpdateManyWithoutLokasiNestedInput = {
    create?: XOR<PengadaanCreateWithoutLokasiInput, PengadaanUncheckedCreateWithoutLokasiInput> | PengadaanCreateWithoutLokasiInput[] | PengadaanUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: PengadaanCreateOrConnectWithoutLokasiInput | PengadaanCreateOrConnectWithoutLokasiInput[]
    upsert?: PengadaanUpsertWithWhereUniqueWithoutLokasiInput | PengadaanUpsertWithWhereUniqueWithoutLokasiInput[]
    createMany?: PengadaanCreateManyLokasiInputEnvelope
    set?: PengadaanWhereUniqueInput | PengadaanWhereUniqueInput[]
    disconnect?: PengadaanWhereUniqueInput | PengadaanWhereUniqueInput[]
    delete?: PengadaanWhereUniqueInput | PengadaanWhereUniqueInput[]
    connect?: PengadaanWhereUniqueInput | PengadaanWhereUniqueInput[]
    update?: PengadaanUpdateWithWhereUniqueWithoutLokasiInput | PengadaanUpdateWithWhereUniqueWithoutLokasiInput[]
    updateMany?: PengadaanUpdateManyWithWhereWithoutLokasiInput | PengadaanUpdateManyWithWhereWithoutLokasiInput[]
    deleteMany?: PengadaanScalarWhereInput | PengadaanScalarWhereInput[]
  }

  export type LokasiCreateNestedOneWithoutPerpindahanInput = {
    create?: XOR<LokasiCreateWithoutPerpindahanInput, LokasiUncheckedCreateWithoutPerpindahanInput>
    connectOrCreate?: LokasiCreateOrConnectWithoutPerpindahanInput
    connect?: LokasiWhereUniqueInput
  }

  export type AsetCreateNestedOneWithoutPerpindahanInput = {
    create?: XOR<AsetCreateWithoutPerpindahanInput, AsetUncheckedCreateWithoutPerpindahanInput>
    connectOrCreate?: AsetCreateOrConnectWithoutPerpindahanInput
    connect?: AsetWhereUniqueInput
  }

  export type LokasiUpdateOneRequiredWithoutPerpindahanNestedInput = {
    create?: XOR<LokasiCreateWithoutPerpindahanInput, LokasiUncheckedCreateWithoutPerpindahanInput>
    connectOrCreate?: LokasiCreateOrConnectWithoutPerpindahanInput
    upsert?: LokasiUpsertWithoutPerpindahanInput
    connect?: LokasiWhereUniqueInput
    update?: XOR<XOR<LokasiUpdateToOneWithWhereWithoutPerpindahanInput, LokasiUpdateWithoutPerpindahanInput>, LokasiUncheckedUpdateWithoutPerpindahanInput>
  }

  export type AsetUpdateOneRequiredWithoutPerpindahanNestedInput = {
    create?: XOR<AsetCreateWithoutPerpindahanInput, AsetUncheckedCreateWithoutPerpindahanInput>
    connectOrCreate?: AsetCreateOrConnectWithoutPerpindahanInput
    upsert?: AsetUpsertWithoutPerpindahanInput
    connect?: AsetWhereUniqueInput
    update?: XOR<XOR<AsetUpdateToOneWithWhereWithoutPerpindahanInput, AsetUpdateWithoutPerpindahanInput>, AsetUncheckedUpdateWithoutPerpindahanInput>
  }

  export type LokasiCreateNestedOneWithoutPengadaanInput = {
    create?: XOR<LokasiCreateWithoutPengadaanInput, LokasiUncheckedCreateWithoutPengadaanInput>
    connectOrCreate?: LokasiCreateOrConnectWithoutPengadaanInput
    connect?: LokasiWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type LokasiUpdateOneRequiredWithoutPengadaanNestedInput = {
    create?: XOR<LokasiCreateWithoutPengadaanInput, LokasiUncheckedCreateWithoutPengadaanInput>
    connectOrCreate?: LokasiCreateOrConnectWithoutPengadaanInput
    upsert?: LokasiUpsertWithoutPengadaanInput
    connect?: LokasiWhereUniqueInput
    update?: XOR<XOR<LokasiUpdateToOneWithWhereWithoutPengadaanInput, LokasiUpdateWithoutPengadaanInput>, LokasiUncheckedUpdateWithoutPengadaanInput>
  }

  export type AsetCreateNestedManyWithoutSubKategoriAsetInput = {
    create?: XOR<AsetCreateWithoutSubKategoriAsetInput, AsetUncheckedCreateWithoutSubKategoriAsetInput> | AsetCreateWithoutSubKategoriAsetInput[] | AsetUncheckedCreateWithoutSubKategoriAsetInput[]
    connectOrCreate?: AsetCreateOrConnectWithoutSubKategoriAsetInput | AsetCreateOrConnectWithoutSubKategoriAsetInput[]
    createMany?: AsetCreateManySubKategoriAsetInputEnvelope
    connect?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
  }

  export type LokasiCreateNestedManyWithoutSubKategoriAsetInput = {
    create?: XOR<LokasiCreateWithoutSubKategoriAsetInput, LokasiUncheckedCreateWithoutSubKategoriAsetInput> | LokasiCreateWithoutSubKategoriAsetInput[] | LokasiUncheckedCreateWithoutSubKategoriAsetInput[]
    connectOrCreate?: LokasiCreateOrConnectWithoutSubKategoriAsetInput | LokasiCreateOrConnectWithoutSubKategoriAsetInput[]
    connect?: LokasiWhereUniqueInput | LokasiWhereUniqueInput[]
  }

  export type AsetUncheckedCreateNestedManyWithoutSubKategoriAsetInput = {
    create?: XOR<AsetCreateWithoutSubKategoriAsetInput, AsetUncheckedCreateWithoutSubKategoriAsetInput> | AsetCreateWithoutSubKategoriAsetInput[] | AsetUncheckedCreateWithoutSubKategoriAsetInput[]
    connectOrCreate?: AsetCreateOrConnectWithoutSubKategoriAsetInput | AsetCreateOrConnectWithoutSubKategoriAsetInput[]
    createMany?: AsetCreateManySubKategoriAsetInputEnvelope
    connect?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
  }

  export type LokasiUncheckedCreateNestedManyWithoutSubKategoriAsetInput = {
    create?: XOR<LokasiCreateWithoutSubKategoriAsetInput, LokasiUncheckedCreateWithoutSubKategoriAsetInput> | LokasiCreateWithoutSubKategoriAsetInput[] | LokasiUncheckedCreateWithoutSubKategoriAsetInput[]
    connectOrCreate?: LokasiCreateOrConnectWithoutSubKategoriAsetInput | LokasiCreateOrConnectWithoutSubKategoriAsetInput[]
    connect?: LokasiWhereUniqueInput | LokasiWhereUniqueInput[]
  }

  export type AsetUpdateManyWithoutSubKategoriAsetNestedInput = {
    create?: XOR<AsetCreateWithoutSubKategoriAsetInput, AsetUncheckedCreateWithoutSubKategoriAsetInput> | AsetCreateWithoutSubKategoriAsetInput[] | AsetUncheckedCreateWithoutSubKategoriAsetInput[]
    connectOrCreate?: AsetCreateOrConnectWithoutSubKategoriAsetInput | AsetCreateOrConnectWithoutSubKategoriAsetInput[]
    upsert?: AsetUpsertWithWhereUniqueWithoutSubKategoriAsetInput | AsetUpsertWithWhereUniqueWithoutSubKategoriAsetInput[]
    createMany?: AsetCreateManySubKategoriAsetInputEnvelope
    set?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
    disconnect?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
    delete?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
    connect?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
    update?: AsetUpdateWithWhereUniqueWithoutSubKategoriAsetInput | AsetUpdateWithWhereUniqueWithoutSubKategoriAsetInput[]
    updateMany?: AsetUpdateManyWithWhereWithoutSubKategoriAsetInput | AsetUpdateManyWithWhereWithoutSubKategoriAsetInput[]
    deleteMany?: AsetScalarWhereInput | AsetScalarWhereInput[]
  }

  export type LokasiUpdateManyWithoutSubKategoriAsetNestedInput = {
    create?: XOR<LokasiCreateWithoutSubKategoriAsetInput, LokasiUncheckedCreateWithoutSubKategoriAsetInput> | LokasiCreateWithoutSubKategoriAsetInput[] | LokasiUncheckedCreateWithoutSubKategoriAsetInput[]
    connectOrCreate?: LokasiCreateOrConnectWithoutSubKategoriAsetInput | LokasiCreateOrConnectWithoutSubKategoriAsetInput[]
    upsert?: LokasiUpsertWithWhereUniqueWithoutSubKategoriAsetInput | LokasiUpsertWithWhereUniqueWithoutSubKategoriAsetInput[]
    set?: LokasiWhereUniqueInput | LokasiWhereUniqueInput[]
    disconnect?: LokasiWhereUniqueInput | LokasiWhereUniqueInput[]
    delete?: LokasiWhereUniqueInput | LokasiWhereUniqueInput[]
    connect?: LokasiWhereUniqueInput | LokasiWhereUniqueInput[]
    update?: LokasiUpdateWithWhereUniqueWithoutSubKategoriAsetInput | LokasiUpdateWithWhereUniqueWithoutSubKategoriAsetInput[]
    updateMany?: LokasiUpdateManyWithWhereWithoutSubKategoriAsetInput | LokasiUpdateManyWithWhereWithoutSubKategoriAsetInput[]
    deleteMany?: LokasiScalarWhereInput | LokasiScalarWhereInput[]
  }

  export type AsetUncheckedUpdateManyWithoutSubKategoriAsetNestedInput = {
    create?: XOR<AsetCreateWithoutSubKategoriAsetInput, AsetUncheckedCreateWithoutSubKategoriAsetInput> | AsetCreateWithoutSubKategoriAsetInput[] | AsetUncheckedCreateWithoutSubKategoriAsetInput[]
    connectOrCreate?: AsetCreateOrConnectWithoutSubKategoriAsetInput | AsetCreateOrConnectWithoutSubKategoriAsetInput[]
    upsert?: AsetUpsertWithWhereUniqueWithoutSubKategoriAsetInput | AsetUpsertWithWhereUniqueWithoutSubKategoriAsetInput[]
    createMany?: AsetCreateManySubKategoriAsetInputEnvelope
    set?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
    disconnect?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
    delete?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
    connect?: AsetWhereUniqueInput | AsetWhereUniqueInput[]
    update?: AsetUpdateWithWhereUniqueWithoutSubKategoriAsetInput | AsetUpdateWithWhereUniqueWithoutSubKategoriAsetInput[]
    updateMany?: AsetUpdateManyWithWhereWithoutSubKategoriAsetInput | AsetUpdateManyWithWhereWithoutSubKategoriAsetInput[]
    deleteMany?: AsetScalarWhereInput | AsetScalarWhereInput[]
  }

  export type LokasiUncheckedUpdateManyWithoutSubKategoriAsetNestedInput = {
    create?: XOR<LokasiCreateWithoutSubKategoriAsetInput, LokasiUncheckedCreateWithoutSubKategoriAsetInput> | LokasiCreateWithoutSubKategoriAsetInput[] | LokasiUncheckedCreateWithoutSubKategoriAsetInput[]
    connectOrCreate?: LokasiCreateOrConnectWithoutSubKategoriAsetInput | LokasiCreateOrConnectWithoutSubKategoriAsetInput[]
    upsert?: LokasiUpsertWithWhereUniqueWithoutSubKategoriAsetInput | LokasiUpsertWithWhereUniqueWithoutSubKategoriAsetInput[]
    set?: LokasiWhereUniqueInput | LokasiWhereUniqueInput[]
    disconnect?: LokasiWhereUniqueInput | LokasiWhereUniqueInput[]
    delete?: LokasiWhereUniqueInput | LokasiWhereUniqueInput[]
    connect?: LokasiWhereUniqueInput | LokasiWhereUniqueInput[]
    update?: LokasiUpdateWithWhereUniqueWithoutSubKategoriAsetInput | LokasiUpdateWithWhereUniqueWithoutSubKategoriAsetInput[]
    updateMany?: LokasiUpdateManyWithWhereWithoutSubKategoriAsetInput | LokasiUpdateManyWithWhereWithoutSubKategoriAsetInput[]
    deleteMany?: LokasiScalarWhereInput | LokasiScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
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

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
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

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type NestedEnumAsetKategoriFilter<$PrismaModel = never> = {
    equals?: $Enums.AsetKategori | EnumAsetKategoriFieldRefInput<$PrismaModel>
    in?: $Enums.AsetKategori[] | ListEnumAsetKategoriFieldRefInput<$PrismaModel>
    notIn?: $Enums.AsetKategori[] | ListEnumAsetKategoriFieldRefInput<$PrismaModel>
    not?: NestedEnumAsetKategoriFilter<$PrismaModel> | $Enums.AsetKategori
  }

  export type NestedEnumAsetKondisiNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AsetKondisi | EnumAsetKondisiFieldRefInput<$PrismaModel> | null
    in?: $Enums.AsetKondisi[] | ListEnumAsetKondisiFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AsetKondisi[] | ListEnumAsetKondisiFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAsetKondisiNullableFilter<$PrismaModel> | $Enums.AsetKondisi | null
  }

  export type NestedEnumAsetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AsetStatus | EnumAsetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AsetStatus[] | ListEnumAsetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AsetStatus[] | ListEnumAsetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAsetStatusFilter<$PrismaModel> | $Enums.AsetStatus
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

  export type NestedEnumAsetKategoriWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AsetKategori | EnumAsetKategoriFieldRefInput<$PrismaModel>
    in?: $Enums.AsetKategori[] | ListEnumAsetKategoriFieldRefInput<$PrismaModel>
    notIn?: $Enums.AsetKategori[] | ListEnumAsetKategoriFieldRefInput<$PrismaModel>
    not?: NestedEnumAsetKategoriWithAggregatesFilter<$PrismaModel> | $Enums.AsetKategori
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAsetKategoriFilter<$PrismaModel>
    _max?: NestedEnumAsetKategoriFilter<$PrismaModel>
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

  export type NestedEnumAsetKondisiNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AsetKondisi | EnumAsetKondisiFieldRefInput<$PrismaModel> | null
    in?: $Enums.AsetKondisi[] | ListEnumAsetKondisiFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AsetKondisi[] | ListEnumAsetKondisiFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAsetKondisiNullableWithAggregatesFilter<$PrismaModel> | $Enums.AsetKondisi | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAsetKondisiNullableFilter<$PrismaModel>
    _max?: NestedEnumAsetKondisiNullableFilter<$PrismaModel>
  }

  export type NestedEnumAsetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AsetStatus | EnumAsetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AsetStatus[] | ListEnumAsetStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AsetStatus[] | ListEnumAsetStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAsetStatusWithAggregatesFilter<$PrismaModel> | $Enums.AsetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAsetStatusFilter<$PrismaModel>
    _max?: NestedEnumAsetStatusFilter<$PrismaModel>
  }

  export type NestedEnumMaintenanceRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceRequestStatus | EnumMaintenanceRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceRequestStatus[] | ListEnumMaintenanceRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenanceRequestStatus[] | ListEnumMaintenanceRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenanceRequestStatusFilter<$PrismaModel> | $Enums.MaintenanceRequestStatus
  }

  export type NestedEnumMaintenanceRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceRequestStatus | EnumMaintenanceRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceRequestStatus[] | ListEnumMaintenanceRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenanceRequestStatus[] | ListEnumMaintenanceRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenanceRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaintenanceRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaintenanceRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumMaintenanceRequestStatusFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type UserRoleCreateWithoutUsersInput = {
    userRoleId?: string
    nameRole: string
    createdAt?: Date | string
  }

  export type UserRoleUncheckedCreateWithoutUsersInput = {
    userRoleId?: string
    nameRole: string
    createdAt?: Date | string
  }

  export type UserRoleCreateOrConnectWithoutUsersInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
  }

  export type UserRoleUpsertWithoutUsersInput = {
    update: XOR<UserRoleUpdateWithoutUsersInput, UserRoleUncheckedUpdateWithoutUsersInput>
    create: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
    where?: UserRoleWhereInput
  }

  export type UserRoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: UserRoleWhereInput
    data: XOR<UserRoleUpdateWithoutUsersInput, UserRoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserRoleUpdateWithoutUsersInput = {
    userRoleId?: StringFieldUpdateOperationsInput | string
    nameRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateWithoutUsersInput = {
    userRoleId?: StringFieldUpdateOperationsInput | string
    nameRole?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LokasiCreateWithoutAsetInput = {
    idLokasi?: string
    lokasi: string
    kategoriAset: $Enums.AsetKategori
    createdAt?: Date | string
    subKategoriAset?: SubAsetKategoriCreateNestedManyWithoutLokasiInput
    perpindahan?: PerpindahanCreateNestedManyWithoutLokasiInput
    pengadaan?: PengadaanCreateNestedManyWithoutLokasiInput
  }

  export type LokasiUncheckedCreateWithoutAsetInput = {
    idLokasi?: string
    lokasi: string
    kategoriAset: $Enums.AsetKategori
    createdAt?: Date | string
    subKategoriAset?: SubAsetKategoriUncheckedCreateNestedManyWithoutLokasiInput
    perpindahan?: PerpindahanUncheckedCreateNestedManyWithoutLokasiInput
    pengadaan?: PengadaanUncheckedCreateNestedManyWithoutLokasiInput
  }

  export type LokasiCreateOrConnectWithoutAsetInput = {
    where: LokasiWhereUniqueInput
    create: XOR<LokasiCreateWithoutAsetInput, LokasiUncheckedCreateWithoutAsetInput>
  }

  export type SubAsetKategoriCreateWithoutAsetsInput = {
    subAsetId?: string
    nameSubAset: string
    createdAt?: Date | string
    lokasi?: LokasiCreateNestedManyWithoutSubKategoriAsetInput
  }

  export type SubAsetKategoriUncheckedCreateWithoutAsetsInput = {
    subAsetId?: string
    nameSubAset: string
    createdAt?: Date | string
    lokasi?: LokasiUncheckedCreateNestedManyWithoutSubKategoriAsetInput
  }

  export type SubAsetKategoriCreateOrConnectWithoutAsetsInput = {
    where: SubAsetKategoriWhereUniqueInput
    create: XOR<SubAsetKategoriCreateWithoutAsetsInput, SubAsetKategoriUncheckedCreateWithoutAsetsInput>
  }

  export type MaintenanceCreateWithoutAsetInput = {
    maintenanceId?: string
    deskripsi?: string | null
    tanggalMulai: Date | string
    perkiraanSelesai: Date | string
    tanggalSelesai?: Date | string | null
    statusMaintenance: $Enums.MaintenanceRequestStatus
    createdAt?: Date | string
  }

  export type MaintenanceUncheckedCreateWithoutAsetInput = {
    maintenanceId?: string
    deskripsi?: string | null
    tanggalMulai: Date | string
    perkiraanSelesai: Date | string
    tanggalSelesai?: Date | string | null
    statusMaintenance: $Enums.MaintenanceRequestStatus
    createdAt?: Date | string
  }

  export type MaintenanceCreateOrConnectWithoutAsetInput = {
    where: MaintenanceWhereUniqueInput
    create: XOR<MaintenanceCreateWithoutAsetInput, MaintenanceUncheckedCreateWithoutAsetInput>
  }

  export type MaintenanceCreateManyAsetInputEnvelope = {
    data: MaintenanceCreateManyAsetInput | MaintenanceCreateManyAsetInput[]
    skipDuplicates?: boolean
  }

  export type PerpindahanCreateWithoutAsetInput = {
    idPindahan?: string
    tempatLama: string
    tempatBaru: string
    tanggalPindah: Date | string
    createdAt?: Date | string
    lokasi: LokasiCreateNestedOneWithoutPerpindahanInput
  }

  export type PerpindahanUncheckedCreateWithoutAsetInput = {
    idPindahan?: string
    lokasiId: string
    tempatLama: string
    tempatBaru: string
    tanggalPindah: Date | string
    createdAt?: Date | string
  }

  export type PerpindahanCreateOrConnectWithoutAsetInput = {
    where: PerpindahanWhereUniqueInput
    create: XOR<PerpindahanCreateWithoutAsetInput, PerpindahanUncheckedCreateWithoutAsetInput>
  }

  export type PerpindahanCreateManyAsetInputEnvelope = {
    data: PerpindahanCreateManyAsetInput | PerpindahanCreateManyAsetInput[]
    skipDuplicates?: boolean
  }

  export type LokasiUpsertWithoutAsetInput = {
    update: XOR<LokasiUpdateWithoutAsetInput, LokasiUncheckedUpdateWithoutAsetInput>
    create: XOR<LokasiCreateWithoutAsetInput, LokasiUncheckedCreateWithoutAsetInput>
    where?: LokasiWhereInput
  }

  export type LokasiUpdateToOneWithWhereWithoutAsetInput = {
    where?: LokasiWhereInput
    data: XOR<LokasiUpdateWithoutAsetInput, LokasiUncheckedUpdateWithoutAsetInput>
  }

  export type LokasiUpdateWithoutAsetInput = {
    idLokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subKategoriAset?: SubAsetKategoriUpdateManyWithoutLokasiNestedInput
    perpindahan?: PerpindahanUpdateManyWithoutLokasiNestedInput
    pengadaan?: PengadaanUpdateManyWithoutLokasiNestedInput
  }

  export type LokasiUncheckedUpdateWithoutAsetInput = {
    idLokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subKategoriAset?: SubAsetKategoriUncheckedUpdateManyWithoutLokasiNestedInput
    perpindahan?: PerpindahanUncheckedUpdateManyWithoutLokasiNestedInput
    pengadaan?: PengadaanUncheckedUpdateManyWithoutLokasiNestedInput
  }

  export type SubAsetKategoriUpsertWithoutAsetsInput = {
    update: XOR<SubAsetKategoriUpdateWithoutAsetsInput, SubAsetKategoriUncheckedUpdateWithoutAsetsInput>
    create: XOR<SubAsetKategoriCreateWithoutAsetsInput, SubAsetKategoriUncheckedCreateWithoutAsetsInput>
    where?: SubAsetKategoriWhereInput
  }

  export type SubAsetKategoriUpdateToOneWithWhereWithoutAsetsInput = {
    where?: SubAsetKategoriWhereInput
    data: XOR<SubAsetKategoriUpdateWithoutAsetsInput, SubAsetKategoriUncheckedUpdateWithoutAsetsInput>
  }

  export type SubAsetKategoriUpdateWithoutAsetsInput = {
    subAsetId?: StringFieldUpdateOperationsInput | string
    nameSubAset?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasi?: LokasiUpdateManyWithoutSubKategoriAsetNestedInput
  }

  export type SubAsetKategoriUncheckedUpdateWithoutAsetsInput = {
    subAsetId?: StringFieldUpdateOperationsInput | string
    nameSubAset?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasi?: LokasiUncheckedUpdateManyWithoutSubKategoriAsetNestedInput
  }

  export type MaintenanceUpsertWithWhereUniqueWithoutAsetInput = {
    where: MaintenanceWhereUniqueInput
    update: XOR<MaintenanceUpdateWithoutAsetInput, MaintenanceUncheckedUpdateWithoutAsetInput>
    create: XOR<MaintenanceCreateWithoutAsetInput, MaintenanceUncheckedCreateWithoutAsetInput>
  }

  export type MaintenanceUpdateWithWhereUniqueWithoutAsetInput = {
    where: MaintenanceWhereUniqueInput
    data: XOR<MaintenanceUpdateWithoutAsetInput, MaintenanceUncheckedUpdateWithoutAsetInput>
  }

  export type MaintenanceUpdateManyWithWhereWithoutAsetInput = {
    where: MaintenanceScalarWhereInput
    data: XOR<MaintenanceUpdateManyMutationInput, MaintenanceUncheckedUpdateManyWithoutAsetInput>
  }

  export type MaintenanceScalarWhereInput = {
    AND?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
    OR?: MaintenanceScalarWhereInput[]
    NOT?: MaintenanceScalarWhereInput | MaintenanceScalarWhereInput[]
    maintenanceId?: StringFilter<"Maintenance"> | string
    deskripsi?: StringNullableFilter<"Maintenance"> | string | null
    idAset?: StringFilter<"Maintenance"> | string
    tanggalMulai?: DateTimeFilter<"Maintenance"> | Date | string
    perkiraanSelesai?: DateTimeFilter<"Maintenance"> | Date | string
    tanggalSelesai?: DateTimeNullableFilter<"Maintenance"> | Date | string | null
    statusMaintenance?: EnumMaintenanceRequestStatusFilter<"Maintenance"> | $Enums.MaintenanceRequestStatus
    createdAt?: DateTimeFilter<"Maintenance"> | Date | string
  }

  export type PerpindahanUpsertWithWhereUniqueWithoutAsetInput = {
    where: PerpindahanWhereUniqueInput
    update: XOR<PerpindahanUpdateWithoutAsetInput, PerpindahanUncheckedUpdateWithoutAsetInput>
    create: XOR<PerpindahanCreateWithoutAsetInput, PerpindahanUncheckedCreateWithoutAsetInput>
  }

  export type PerpindahanUpdateWithWhereUniqueWithoutAsetInput = {
    where: PerpindahanWhereUniqueInput
    data: XOR<PerpindahanUpdateWithoutAsetInput, PerpindahanUncheckedUpdateWithoutAsetInput>
  }

  export type PerpindahanUpdateManyWithWhereWithoutAsetInput = {
    where: PerpindahanScalarWhereInput
    data: XOR<PerpindahanUpdateManyMutationInput, PerpindahanUncheckedUpdateManyWithoutAsetInput>
  }

  export type PerpindahanScalarWhereInput = {
    AND?: PerpindahanScalarWhereInput | PerpindahanScalarWhereInput[]
    OR?: PerpindahanScalarWhereInput[]
    NOT?: PerpindahanScalarWhereInput | PerpindahanScalarWhereInput[]
    idPindahan?: StringFilter<"Perpindahan"> | string
    lokasiId?: StringFilter<"Perpindahan"> | string
    idAset?: StringFilter<"Perpindahan"> | string
    tempatLama?: StringFilter<"Perpindahan"> | string
    tempatBaru?: StringFilter<"Perpindahan"> | string
    tanggalPindah?: DateTimeFilter<"Perpindahan"> | Date | string
    createdAt?: DateTimeFilter<"Perpindahan"> | Date | string
  }

  export type AsetCreateWithoutMaintenancesInput = {
    asetId?: string
    kategoriAset: $Enums.AsetKategori
    merkDanTipe: string
    tahun?: number | null
    kondisiAset?: $Enums.AsetKondisi | null
    statusAset: $Enums.AsetStatus
    nomorSeri?: string | null
    masaBerlaku?: Date | string | null
    statusKepemilikan: string
    urlFoto?: AsetCreateurlFotoInput | string[]
    urlQR?: string | null
    createdAt?: Date | string
    pic?: string | null
    lokasi?: LokasiCreateNestedOneWithoutAsetInput
    subKategoriAset?: SubAsetKategoriCreateNestedOneWithoutAsetsInput
    perpindahan?: PerpindahanCreateNestedManyWithoutAsetInput
  }

  export type AsetUncheckedCreateWithoutMaintenancesInput = {
    asetId?: string
    lokasiId?: string | null
    subKategoriAsetId?: string | null
    kategoriAset: $Enums.AsetKategori
    merkDanTipe: string
    tahun?: number | null
    kondisiAset?: $Enums.AsetKondisi | null
    statusAset: $Enums.AsetStatus
    nomorSeri?: string | null
    masaBerlaku?: Date | string | null
    statusKepemilikan: string
    urlFoto?: AsetCreateurlFotoInput | string[]
    urlQR?: string | null
    createdAt?: Date | string
    pic?: string | null
    perpindahan?: PerpindahanUncheckedCreateNestedManyWithoutAsetInput
  }

  export type AsetCreateOrConnectWithoutMaintenancesInput = {
    where: AsetWhereUniqueInput
    create: XOR<AsetCreateWithoutMaintenancesInput, AsetUncheckedCreateWithoutMaintenancesInput>
  }

  export type AsetUpsertWithoutMaintenancesInput = {
    update: XOR<AsetUpdateWithoutMaintenancesInput, AsetUncheckedUpdateWithoutMaintenancesInput>
    create: XOR<AsetCreateWithoutMaintenancesInput, AsetUncheckedCreateWithoutMaintenancesInput>
    where?: AsetWhereInput
  }

  export type AsetUpdateToOneWithWhereWithoutMaintenancesInput = {
    where?: AsetWhereInput
    data: XOR<AsetUpdateWithoutMaintenancesInput, AsetUncheckedUpdateWithoutMaintenancesInput>
  }

  export type AsetUpdateWithoutMaintenancesInput = {
    asetId?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    merkDanTipe?: StringFieldUpdateOperationsInput | string
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kondisiAset?: NullableEnumAsetKondisiFieldUpdateOperationsInput | $Enums.AsetKondisi | null
    statusAset?: EnumAsetStatusFieldUpdateOperationsInput | $Enums.AsetStatus
    nomorSeri?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusKepemilikan?: StringFieldUpdateOperationsInput | string
    urlFoto?: AsetUpdateurlFotoInput | string[]
    urlQR?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pic?: NullableStringFieldUpdateOperationsInput | string | null
    lokasi?: LokasiUpdateOneWithoutAsetNestedInput
    subKategoriAset?: SubAsetKategoriUpdateOneWithoutAsetsNestedInput
    perpindahan?: PerpindahanUpdateManyWithoutAsetNestedInput
  }

  export type AsetUncheckedUpdateWithoutMaintenancesInput = {
    asetId?: StringFieldUpdateOperationsInput | string
    lokasiId?: NullableStringFieldUpdateOperationsInput | string | null
    subKategoriAsetId?: NullableStringFieldUpdateOperationsInput | string | null
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    merkDanTipe?: StringFieldUpdateOperationsInput | string
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kondisiAset?: NullableEnumAsetKondisiFieldUpdateOperationsInput | $Enums.AsetKondisi | null
    statusAset?: EnumAsetStatusFieldUpdateOperationsInput | $Enums.AsetStatus
    nomorSeri?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusKepemilikan?: StringFieldUpdateOperationsInput | string
    urlFoto?: AsetUpdateurlFotoInput | string[]
    urlQR?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pic?: NullableStringFieldUpdateOperationsInput | string | null
    perpindahan?: PerpindahanUncheckedUpdateManyWithoutAsetNestedInput
  }

  export type SubAsetKategoriCreateWithoutLokasiInput = {
    subAsetId?: string
    nameSubAset: string
    createdAt?: Date | string
    asets?: AsetCreateNestedManyWithoutSubKategoriAsetInput
  }

  export type SubAsetKategoriUncheckedCreateWithoutLokasiInput = {
    subAsetId?: string
    nameSubAset: string
    createdAt?: Date | string
    asets?: AsetUncheckedCreateNestedManyWithoutSubKategoriAsetInput
  }

  export type SubAsetKategoriCreateOrConnectWithoutLokasiInput = {
    where: SubAsetKategoriWhereUniqueInput
    create: XOR<SubAsetKategoriCreateWithoutLokasiInput, SubAsetKategoriUncheckedCreateWithoutLokasiInput>
  }

  export type AsetCreateWithoutLokasiInput = {
    asetId?: string
    kategoriAset: $Enums.AsetKategori
    merkDanTipe: string
    tahun?: number | null
    kondisiAset?: $Enums.AsetKondisi | null
    statusAset: $Enums.AsetStatus
    nomorSeri?: string | null
    masaBerlaku?: Date | string | null
    statusKepemilikan: string
    urlFoto?: AsetCreateurlFotoInput | string[]
    urlQR?: string | null
    createdAt?: Date | string
    pic?: string | null
    subKategoriAset?: SubAsetKategoriCreateNestedOneWithoutAsetsInput
    maintenances?: MaintenanceCreateNestedManyWithoutAsetInput
    perpindahan?: PerpindahanCreateNestedManyWithoutAsetInput
  }

  export type AsetUncheckedCreateWithoutLokasiInput = {
    asetId?: string
    subKategoriAsetId?: string | null
    kategoriAset: $Enums.AsetKategori
    merkDanTipe: string
    tahun?: number | null
    kondisiAset?: $Enums.AsetKondisi | null
    statusAset: $Enums.AsetStatus
    nomorSeri?: string | null
    masaBerlaku?: Date | string | null
    statusKepemilikan: string
    urlFoto?: AsetCreateurlFotoInput | string[]
    urlQR?: string | null
    createdAt?: Date | string
    pic?: string | null
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutAsetInput
    perpindahan?: PerpindahanUncheckedCreateNestedManyWithoutAsetInput
  }

  export type AsetCreateOrConnectWithoutLokasiInput = {
    where: AsetWhereUniqueInput
    create: XOR<AsetCreateWithoutLokasiInput, AsetUncheckedCreateWithoutLokasiInput>
  }

  export type AsetCreateManyLokasiInputEnvelope = {
    data: AsetCreateManyLokasiInput | AsetCreateManyLokasiInput[]
    skipDuplicates?: boolean
  }

  export type PerpindahanCreateWithoutLokasiInput = {
    idPindahan?: string
    tempatLama: string
    tempatBaru: string
    tanggalPindah: Date | string
    createdAt?: Date | string
    aset: AsetCreateNestedOneWithoutPerpindahanInput
  }

  export type PerpindahanUncheckedCreateWithoutLokasiInput = {
    idPindahan?: string
    idAset: string
    tempatLama: string
    tempatBaru: string
    tanggalPindah: Date | string
    createdAt?: Date | string
  }

  export type PerpindahanCreateOrConnectWithoutLokasiInput = {
    where: PerpindahanWhereUniqueInput
    create: XOR<PerpindahanCreateWithoutLokasiInput, PerpindahanUncheckedCreateWithoutLokasiInput>
  }

  export type PerpindahanCreateManyLokasiInputEnvelope = {
    data: PerpindahanCreateManyLokasiInput | PerpindahanCreateManyLokasiInput[]
    skipDuplicates?: boolean
  }

  export type PengadaanCreateWithoutLokasiInput = {
    pengadaanId?: string
    tanggalBeli: Date | string
    kategoriAset: $Enums.AsetKategori
    namaAset: string
    jumlahAset: number
    hargaSatuan: bigint | number
    totalHarga: bigint | number
    vendor: string
    createdAt?: Date | string
  }

  export type PengadaanUncheckedCreateWithoutLokasiInput = {
    pengadaanId?: string
    tanggalBeli: Date | string
    kategoriAset: $Enums.AsetKategori
    namaAset: string
    jumlahAset: number
    hargaSatuan: bigint | number
    totalHarga: bigint | number
    vendor: string
    createdAt?: Date | string
  }

  export type PengadaanCreateOrConnectWithoutLokasiInput = {
    where: PengadaanWhereUniqueInput
    create: XOR<PengadaanCreateWithoutLokasiInput, PengadaanUncheckedCreateWithoutLokasiInput>
  }

  export type PengadaanCreateManyLokasiInputEnvelope = {
    data: PengadaanCreateManyLokasiInput | PengadaanCreateManyLokasiInput[]
    skipDuplicates?: boolean
  }

  export type SubAsetKategoriUpsertWithWhereUniqueWithoutLokasiInput = {
    where: SubAsetKategoriWhereUniqueInput
    update: XOR<SubAsetKategoriUpdateWithoutLokasiInput, SubAsetKategoriUncheckedUpdateWithoutLokasiInput>
    create: XOR<SubAsetKategoriCreateWithoutLokasiInput, SubAsetKategoriUncheckedCreateWithoutLokasiInput>
  }

  export type SubAsetKategoriUpdateWithWhereUniqueWithoutLokasiInput = {
    where: SubAsetKategoriWhereUniqueInput
    data: XOR<SubAsetKategoriUpdateWithoutLokasiInput, SubAsetKategoriUncheckedUpdateWithoutLokasiInput>
  }

  export type SubAsetKategoriUpdateManyWithWhereWithoutLokasiInput = {
    where: SubAsetKategoriScalarWhereInput
    data: XOR<SubAsetKategoriUpdateManyMutationInput, SubAsetKategoriUncheckedUpdateManyWithoutLokasiInput>
  }

  export type SubAsetKategoriScalarWhereInput = {
    AND?: SubAsetKategoriScalarWhereInput | SubAsetKategoriScalarWhereInput[]
    OR?: SubAsetKategoriScalarWhereInput[]
    NOT?: SubAsetKategoriScalarWhereInput | SubAsetKategoriScalarWhereInput[]
    subAsetId?: StringFilter<"SubAsetKategori"> | string
    nameSubAset?: StringFilter<"SubAsetKategori"> | string
    createdAt?: DateTimeFilter<"SubAsetKategori"> | Date | string
  }

  export type AsetUpsertWithWhereUniqueWithoutLokasiInput = {
    where: AsetWhereUniqueInput
    update: XOR<AsetUpdateWithoutLokasiInput, AsetUncheckedUpdateWithoutLokasiInput>
    create: XOR<AsetCreateWithoutLokasiInput, AsetUncheckedCreateWithoutLokasiInput>
  }

  export type AsetUpdateWithWhereUniqueWithoutLokasiInput = {
    where: AsetWhereUniqueInput
    data: XOR<AsetUpdateWithoutLokasiInput, AsetUncheckedUpdateWithoutLokasiInput>
  }

  export type AsetUpdateManyWithWhereWithoutLokasiInput = {
    where: AsetScalarWhereInput
    data: XOR<AsetUpdateManyMutationInput, AsetUncheckedUpdateManyWithoutLokasiInput>
  }

  export type AsetScalarWhereInput = {
    AND?: AsetScalarWhereInput | AsetScalarWhereInput[]
    OR?: AsetScalarWhereInput[]
    NOT?: AsetScalarWhereInput | AsetScalarWhereInput[]
    asetId?: StringFilter<"Aset"> | string
    lokasiId?: StringNullableFilter<"Aset"> | string | null
    subKategoriAsetId?: StringNullableFilter<"Aset"> | string | null
    kategoriAset?: EnumAsetKategoriFilter<"Aset"> | $Enums.AsetKategori
    merkDanTipe?: StringFilter<"Aset"> | string
    tahun?: IntNullableFilter<"Aset"> | number | null
    kondisiAset?: EnumAsetKondisiNullableFilter<"Aset"> | $Enums.AsetKondisi | null
    statusAset?: EnumAsetStatusFilter<"Aset"> | $Enums.AsetStatus
    nomorSeri?: StringNullableFilter<"Aset"> | string | null
    masaBerlaku?: DateTimeNullableFilter<"Aset"> | Date | string | null
    statusKepemilikan?: StringFilter<"Aset"> | string
    urlFoto?: StringNullableListFilter<"Aset">
    urlQR?: StringNullableFilter<"Aset"> | string | null
    createdAt?: DateTimeFilter<"Aset"> | Date | string
    pic?: StringNullableFilter<"Aset"> | string | null
  }

  export type PerpindahanUpsertWithWhereUniqueWithoutLokasiInput = {
    where: PerpindahanWhereUniqueInput
    update: XOR<PerpindahanUpdateWithoutLokasiInput, PerpindahanUncheckedUpdateWithoutLokasiInput>
    create: XOR<PerpindahanCreateWithoutLokasiInput, PerpindahanUncheckedCreateWithoutLokasiInput>
  }

  export type PerpindahanUpdateWithWhereUniqueWithoutLokasiInput = {
    where: PerpindahanWhereUniqueInput
    data: XOR<PerpindahanUpdateWithoutLokasiInput, PerpindahanUncheckedUpdateWithoutLokasiInput>
  }

  export type PerpindahanUpdateManyWithWhereWithoutLokasiInput = {
    where: PerpindahanScalarWhereInput
    data: XOR<PerpindahanUpdateManyMutationInput, PerpindahanUncheckedUpdateManyWithoutLokasiInput>
  }

  export type PengadaanUpsertWithWhereUniqueWithoutLokasiInput = {
    where: PengadaanWhereUniqueInput
    update: XOR<PengadaanUpdateWithoutLokasiInput, PengadaanUncheckedUpdateWithoutLokasiInput>
    create: XOR<PengadaanCreateWithoutLokasiInput, PengadaanUncheckedCreateWithoutLokasiInput>
  }

  export type PengadaanUpdateWithWhereUniqueWithoutLokasiInput = {
    where: PengadaanWhereUniqueInput
    data: XOR<PengadaanUpdateWithoutLokasiInput, PengadaanUncheckedUpdateWithoutLokasiInput>
  }

  export type PengadaanUpdateManyWithWhereWithoutLokasiInput = {
    where: PengadaanScalarWhereInput
    data: XOR<PengadaanUpdateManyMutationInput, PengadaanUncheckedUpdateManyWithoutLokasiInput>
  }

  export type PengadaanScalarWhereInput = {
    AND?: PengadaanScalarWhereInput | PengadaanScalarWhereInput[]
    OR?: PengadaanScalarWhereInput[]
    NOT?: PengadaanScalarWhereInput | PengadaanScalarWhereInput[]
    pengadaanId?: StringFilter<"Pengadaan"> | string
    tanggalBeli?: DateTimeFilter<"Pengadaan"> | Date | string
    lokasiId?: StringFilter<"Pengadaan"> | string
    kategoriAset?: EnumAsetKategoriFilter<"Pengadaan"> | $Enums.AsetKategori
    namaAset?: StringFilter<"Pengadaan"> | string
    jumlahAset?: IntFilter<"Pengadaan"> | number
    hargaSatuan?: BigIntFilter<"Pengadaan"> | bigint | number
    totalHarga?: BigIntFilter<"Pengadaan"> | bigint | number
    vendor?: StringFilter<"Pengadaan"> | string
    createdAt?: DateTimeFilter<"Pengadaan"> | Date | string
  }

  export type LokasiCreateWithoutPerpindahanInput = {
    idLokasi?: string
    lokasi: string
    kategoriAset: $Enums.AsetKategori
    createdAt?: Date | string
    subKategoriAset?: SubAsetKategoriCreateNestedManyWithoutLokasiInput
    aset?: AsetCreateNestedManyWithoutLokasiInput
    pengadaan?: PengadaanCreateNestedManyWithoutLokasiInput
  }

  export type LokasiUncheckedCreateWithoutPerpindahanInput = {
    idLokasi?: string
    lokasi: string
    kategoriAset: $Enums.AsetKategori
    createdAt?: Date | string
    subKategoriAset?: SubAsetKategoriUncheckedCreateNestedManyWithoutLokasiInput
    aset?: AsetUncheckedCreateNestedManyWithoutLokasiInput
    pengadaan?: PengadaanUncheckedCreateNestedManyWithoutLokasiInput
  }

  export type LokasiCreateOrConnectWithoutPerpindahanInput = {
    where: LokasiWhereUniqueInput
    create: XOR<LokasiCreateWithoutPerpindahanInput, LokasiUncheckedCreateWithoutPerpindahanInput>
  }

  export type AsetCreateWithoutPerpindahanInput = {
    asetId?: string
    kategoriAset: $Enums.AsetKategori
    merkDanTipe: string
    tahun?: number | null
    kondisiAset?: $Enums.AsetKondisi | null
    statusAset: $Enums.AsetStatus
    nomorSeri?: string | null
    masaBerlaku?: Date | string | null
    statusKepemilikan: string
    urlFoto?: AsetCreateurlFotoInput | string[]
    urlQR?: string | null
    createdAt?: Date | string
    pic?: string | null
    lokasi?: LokasiCreateNestedOneWithoutAsetInput
    subKategoriAset?: SubAsetKategoriCreateNestedOneWithoutAsetsInput
    maintenances?: MaintenanceCreateNestedManyWithoutAsetInput
  }

  export type AsetUncheckedCreateWithoutPerpindahanInput = {
    asetId?: string
    lokasiId?: string | null
    subKategoriAsetId?: string | null
    kategoriAset: $Enums.AsetKategori
    merkDanTipe: string
    tahun?: number | null
    kondisiAset?: $Enums.AsetKondisi | null
    statusAset: $Enums.AsetStatus
    nomorSeri?: string | null
    masaBerlaku?: Date | string | null
    statusKepemilikan: string
    urlFoto?: AsetCreateurlFotoInput | string[]
    urlQR?: string | null
    createdAt?: Date | string
    pic?: string | null
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutAsetInput
  }

  export type AsetCreateOrConnectWithoutPerpindahanInput = {
    where: AsetWhereUniqueInput
    create: XOR<AsetCreateWithoutPerpindahanInput, AsetUncheckedCreateWithoutPerpindahanInput>
  }

  export type LokasiUpsertWithoutPerpindahanInput = {
    update: XOR<LokasiUpdateWithoutPerpindahanInput, LokasiUncheckedUpdateWithoutPerpindahanInput>
    create: XOR<LokasiCreateWithoutPerpindahanInput, LokasiUncheckedCreateWithoutPerpindahanInput>
    where?: LokasiWhereInput
  }

  export type LokasiUpdateToOneWithWhereWithoutPerpindahanInput = {
    where?: LokasiWhereInput
    data: XOR<LokasiUpdateWithoutPerpindahanInput, LokasiUncheckedUpdateWithoutPerpindahanInput>
  }

  export type LokasiUpdateWithoutPerpindahanInput = {
    idLokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subKategoriAset?: SubAsetKategoriUpdateManyWithoutLokasiNestedInput
    aset?: AsetUpdateManyWithoutLokasiNestedInput
    pengadaan?: PengadaanUpdateManyWithoutLokasiNestedInput
  }

  export type LokasiUncheckedUpdateWithoutPerpindahanInput = {
    idLokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subKategoriAset?: SubAsetKategoriUncheckedUpdateManyWithoutLokasiNestedInput
    aset?: AsetUncheckedUpdateManyWithoutLokasiNestedInput
    pengadaan?: PengadaanUncheckedUpdateManyWithoutLokasiNestedInput
  }

  export type AsetUpsertWithoutPerpindahanInput = {
    update: XOR<AsetUpdateWithoutPerpindahanInput, AsetUncheckedUpdateWithoutPerpindahanInput>
    create: XOR<AsetCreateWithoutPerpindahanInput, AsetUncheckedCreateWithoutPerpindahanInput>
    where?: AsetWhereInput
  }

  export type AsetUpdateToOneWithWhereWithoutPerpindahanInput = {
    where?: AsetWhereInput
    data: XOR<AsetUpdateWithoutPerpindahanInput, AsetUncheckedUpdateWithoutPerpindahanInput>
  }

  export type AsetUpdateWithoutPerpindahanInput = {
    asetId?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    merkDanTipe?: StringFieldUpdateOperationsInput | string
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kondisiAset?: NullableEnumAsetKondisiFieldUpdateOperationsInput | $Enums.AsetKondisi | null
    statusAset?: EnumAsetStatusFieldUpdateOperationsInput | $Enums.AsetStatus
    nomorSeri?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusKepemilikan?: StringFieldUpdateOperationsInput | string
    urlFoto?: AsetUpdateurlFotoInput | string[]
    urlQR?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pic?: NullableStringFieldUpdateOperationsInput | string | null
    lokasi?: LokasiUpdateOneWithoutAsetNestedInput
    subKategoriAset?: SubAsetKategoriUpdateOneWithoutAsetsNestedInput
    maintenances?: MaintenanceUpdateManyWithoutAsetNestedInput
  }

  export type AsetUncheckedUpdateWithoutPerpindahanInput = {
    asetId?: StringFieldUpdateOperationsInput | string
    lokasiId?: NullableStringFieldUpdateOperationsInput | string | null
    subKategoriAsetId?: NullableStringFieldUpdateOperationsInput | string | null
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    merkDanTipe?: StringFieldUpdateOperationsInput | string
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kondisiAset?: NullableEnumAsetKondisiFieldUpdateOperationsInput | $Enums.AsetKondisi | null
    statusAset?: EnumAsetStatusFieldUpdateOperationsInput | $Enums.AsetStatus
    nomorSeri?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusKepemilikan?: StringFieldUpdateOperationsInput | string
    urlFoto?: AsetUpdateurlFotoInput | string[]
    urlQR?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pic?: NullableStringFieldUpdateOperationsInput | string | null
    maintenances?: MaintenanceUncheckedUpdateManyWithoutAsetNestedInput
  }

  export type LokasiCreateWithoutPengadaanInput = {
    idLokasi?: string
    lokasi: string
    kategoriAset: $Enums.AsetKategori
    createdAt?: Date | string
    subKategoriAset?: SubAsetKategoriCreateNestedManyWithoutLokasiInput
    aset?: AsetCreateNestedManyWithoutLokasiInput
    perpindahan?: PerpindahanCreateNestedManyWithoutLokasiInput
  }

  export type LokasiUncheckedCreateWithoutPengadaanInput = {
    idLokasi?: string
    lokasi: string
    kategoriAset: $Enums.AsetKategori
    createdAt?: Date | string
    subKategoriAset?: SubAsetKategoriUncheckedCreateNestedManyWithoutLokasiInput
    aset?: AsetUncheckedCreateNestedManyWithoutLokasiInput
    perpindahan?: PerpindahanUncheckedCreateNestedManyWithoutLokasiInput
  }

  export type LokasiCreateOrConnectWithoutPengadaanInput = {
    where: LokasiWhereUniqueInput
    create: XOR<LokasiCreateWithoutPengadaanInput, LokasiUncheckedCreateWithoutPengadaanInput>
  }

  export type LokasiUpsertWithoutPengadaanInput = {
    update: XOR<LokasiUpdateWithoutPengadaanInput, LokasiUncheckedUpdateWithoutPengadaanInput>
    create: XOR<LokasiCreateWithoutPengadaanInput, LokasiUncheckedCreateWithoutPengadaanInput>
    where?: LokasiWhereInput
  }

  export type LokasiUpdateToOneWithWhereWithoutPengadaanInput = {
    where?: LokasiWhereInput
    data: XOR<LokasiUpdateWithoutPengadaanInput, LokasiUncheckedUpdateWithoutPengadaanInput>
  }

  export type LokasiUpdateWithoutPengadaanInput = {
    idLokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subKategoriAset?: SubAsetKategoriUpdateManyWithoutLokasiNestedInput
    aset?: AsetUpdateManyWithoutLokasiNestedInput
    perpindahan?: PerpindahanUpdateManyWithoutLokasiNestedInput
  }

  export type LokasiUncheckedUpdateWithoutPengadaanInput = {
    idLokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subKategoriAset?: SubAsetKategoriUncheckedUpdateManyWithoutLokasiNestedInput
    aset?: AsetUncheckedUpdateManyWithoutLokasiNestedInput
    perpindahan?: PerpindahanUncheckedUpdateManyWithoutLokasiNestedInput
  }

  export type AsetCreateWithoutSubKategoriAsetInput = {
    asetId?: string
    kategoriAset: $Enums.AsetKategori
    merkDanTipe: string
    tahun?: number | null
    kondisiAset?: $Enums.AsetKondisi | null
    statusAset: $Enums.AsetStatus
    nomorSeri?: string | null
    masaBerlaku?: Date | string | null
    statusKepemilikan: string
    urlFoto?: AsetCreateurlFotoInput | string[]
    urlQR?: string | null
    createdAt?: Date | string
    pic?: string | null
    lokasi?: LokasiCreateNestedOneWithoutAsetInput
    maintenances?: MaintenanceCreateNestedManyWithoutAsetInput
    perpindahan?: PerpindahanCreateNestedManyWithoutAsetInput
  }

  export type AsetUncheckedCreateWithoutSubKategoriAsetInput = {
    asetId?: string
    lokasiId?: string | null
    kategoriAset: $Enums.AsetKategori
    merkDanTipe: string
    tahun?: number | null
    kondisiAset?: $Enums.AsetKondisi | null
    statusAset: $Enums.AsetStatus
    nomorSeri?: string | null
    masaBerlaku?: Date | string | null
    statusKepemilikan: string
    urlFoto?: AsetCreateurlFotoInput | string[]
    urlQR?: string | null
    createdAt?: Date | string
    pic?: string | null
    maintenances?: MaintenanceUncheckedCreateNestedManyWithoutAsetInput
    perpindahan?: PerpindahanUncheckedCreateNestedManyWithoutAsetInput
  }

  export type AsetCreateOrConnectWithoutSubKategoriAsetInput = {
    where: AsetWhereUniqueInput
    create: XOR<AsetCreateWithoutSubKategoriAsetInput, AsetUncheckedCreateWithoutSubKategoriAsetInput>
  }

  export type AsetCreateManySubKategoriAsetInputEnvelope = {
    data: AsetCreateManySubKategoriAsetInput | AsetCreateManySubKategoriAsetInput[]
    skipDuplicates?: boolean
  }

  export type LokasiCreateWithoutSubKategoriAsetInput = {
    idLokasi?: string
    lokasi: string
    kategoriAset: $Enums.AsetKategori
    createdAt?: Date | string
    aset?: AsetCreateNestedManyWithoutLokasiInput
    perpindahan?: PerpindahanCreateNestedManyWithoutLokasiInput
    pengadaan?: PengadaanCreateNestedManyWithoutLokasiInput
  }

  export type LokasiUncheckedCreateWithoutSubKategoriAsetInput = {
    idLokasi?: string
    lokasi: string
    kategoriAset: $Enums.AsetKategori
    createdAt?: Date | string
    aset?: AsetUncheckedCreateNestedManyWithoutLokasiInput
    perpindahan?: PerpindahanUncheckedCreateNestedManyWithoutLokasiInput
    pengadaan?: PengadaanUncheckedCreateNestedManyWithoutLokasiInput
  }

  export type LokasiCreateOrConnectWithoutSubKategoriAsetInput = {
    where: LokasiWhereUniqueInput
    create: XOR<LokasiCreateWithoutSubKategoriAsetInput, LokasiUncheckedCreateWithoutSubKategoriAsetInput>
  }

  export type AsetUpsertWithWhereUniqueWithoutSubKategoriAsetInput = {
    where: AsetWhereUniqueInput
    update: XOR<AsetUpdateWithoutSubKategoriAsetInput, AsetUncheckedUpdateWithoutSubKategoriAsetInput>
    create: XOR<AsetCreateWithoutSubKategoriAsetInput, AsetUncheckedCreateWithoutSubKategoriAsetInput>
  }

  export type AsetUpdateWithWhereUniqueWithoutSubKategoriAsetInput = {
    where: AsetWhereUniqueInput
    data: XOR<AsetUpdateWithoutSubKategoriAsetInput, AsetUncheckedUpdateWithoutSubKategoriAsetInput>
  }

  export type AsetUpdateManyWithWhereWithoutSubKategoriAsetInput = {
    where: AsetScalarWhereInput
    data: XOR<AsetUpdateManyMutationInput, AsetUncheckedUpdateManyWithoutSubKategoriAsetInput>
  }

  export type LokasiUpsertWithWhereUniqueWithoutSubKategoriAsetInput = {
    where: LokasiWhereUniqueInput
    update: XOR<LokasiUpdateWithoutSubKategoriAsetInput, LokasiUncheckedUpdateWithoutSubKategoriAsetInput>
    create: XOR<LokasiCreateWithoutSubKategoriAsetInput, LokasiUncheckedCreateWithoutSubKategoriAsetInput>
  }

  export type LokasiUpdateWithWhereUniqueWithoutSubKategoriAsetInput = {
    where: LokasiWhereUniqueInput
    data: XOR<LokasiUpdateWithoutSubKategoriAsetInput, LokasiUncheckedUpdateWithoutSubKategoriAsetInput>
  }

  export type LokasiUpdateManyWithWhereWithoutSubKategoriAsetInput = {
    where: LokasiScalarWhereInput
    data: XOR<LokasiUpdateManyMutationInput, LokasiUncheckedUpdateManyWithoutSubKategoriAsetInput>
  }

  export type LokasiScalarWhereInput = {
    AND?: LokasiScalarWhereInput | LokasiScalarWhereInput[]
    OR?: LokasiScalarWhereInput[]
    NOT?: LokasiScalarWhereInput | LokasiScalarWhereInput[]
    idLokasi?: StringFilter<"Lokasi"> | string
    lokasi?: StringFilter<"Lokasi"> | string
    kategoriAset?: EnumAsetKategoriFilter<"Lokasi"> | $Enums.AsetKategori
    createdAt?: DateTimeFilter<"Lokasi"> | Date | string
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    email: string
    name: string
    password: string
    lastLogin?: Date | string | null
    createdAt?: Date | string
    status?: $Enums.UserStatus
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    email: string
    name: string
    password: string
    lastLogin?: Date | string | null
    createdAt?: Date | string
    status?: $Enums.UserStatus
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    roleId?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
  }

  export type MaintenanceCreateManyAsetInput = {
    maintenanceId?: string
    deskripsi?: string | null
    tanggalMulai: Date | string
    perkiraanSelesai: Date | string
    tanggalSelesai?: Date | string | null
    statusMaintenance: $Enums.MaintenanceRequestStatus
    createdAt?: Date | string
  }

  export type PerpindahanCreateManyAsetInput = {
    idPindahan?: string
    lokasiId: string
    tempatLama: string
    tempatBaru: string
    tanggalPindah: Date | string
    createdAt?: Date | string
  }

  export type MaintenanceUpdateWithoutAsetInput = {
    maintenanceId?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    perkiraanSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusMaintenance?: EnumMaintenanceRequestStatusFieldUpdateOperationsInput | $Enums.MaintenanceRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceUncheckedUpdateWithoutAsetInput = {
    maintenanceId?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    perkiraanSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusMaintenance?: EnumMaintenanceRequestStatusFieldUpdateOperationsInput | $Enums.MaintenanceRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceUncheckedUpdateManyWithoutAsetInput = {
    maintenanceId?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: DateTimeFieldUpdateOperationsInput | Date | string
    perkiraanSelesai?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusMaintenance?: EnumMaintenanceRequestStatusFieldUpdateOperationsInput | $Enums.MaintenanceRequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerpindahanUpdateWithoutAsetInput = {
    idPindahan?: StringFieldUpdateOperationsInput | string
    tempatLama?: StringFieldUpdateOperationsInput | string
    tempatBaru?: StringFieldUpdateOperationsInput | string
    tanggalPindah?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasi?: LokasiUpdateOneRequiredWithoutPerpindahanNestedInput
  }

  export type PerpindahanUncheckedUpdateWithoutAsetInput = {
    idPindahan?: StringFieldUpdateOperationsInput | string
    lokasiId?: StringFieldUpdateOperationsInput | string
    tempatLama?: StringFieldUpdateOperationsInput | string
    tempatBaru?: StringFieldUpdateOperationsInput | string
    tanggalPindah?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerpindahanUncheckedUpdateManyWithoutAsetInput = {
    idPindahan?: StringFieldUpdateOperationsInput | string
    lokasiId?: StringFieldUpdateOperationsInput | string
    tempatLama?: StringFieldUpdateOperationsInput | string
    tempatBaru?: StringFieldUpdateOperationsInput | string
    tanggalPindah?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsetCreateManyLokasiInput = {
    asetId?: string
    subKategoriAsetId?: string | null
    kategoriAset: $Enums.AsetKategori
    merkDanTipe: string
    tahun?: number | null
    kondisiAset?: $Enums.AsetKondisi | null
    statusAset: $Enums.AsetStatus
    nomorSeri?: string | null
    masaBerlaku?: Date | string | null
    statusKepemilikan: string
    urlFoto?: AsetCreateurlFotoInput | string[]
    urlQR?: string | null
    createdAt?: Date | string
    pic?: string | null
  }

  export type PerpindahanCreateManyLokasiInput = {
    idPindahan?: string
    idAset: string
    tempatLama: string
    tempatBaru: string
    tanggalPindah: Date | string
    createdAt?: Date | string
  }

  export type PengadaanCreateManyLokasiInput = {
    pengadaanId?: string
    tanggalBeli: Date | string
    kategoriAset: $Enums.AsetKategori
    namaAset: string
    jumlahAset: number
    hargaSatuan: bigint | number
    totalHarga: bigint | number
    vendor: string
    createdAt?: Date | string
  }

  export type SubAsetKategoriUpdateWithoutLokasiInput = {
    subAsetId?: StringFieldUpdateOperationsInput | string
    nameSubAset?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asets?: AsetUpdateManyWithoutSubKategoriAsetNestedInput
  }

  export type SubAsetKategoriUncheckedUpdateWithoutLokasiInput = {
    subAsetId?: StringFieldUpdateOperationsInput | string
    nameSubAset?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    asets?: AsetUncheckedUpdateManyWithoutSubKategoriAsetNestedInput
  }

  export type SubAsetKategoriUncheckedUpdateManyWithoutLokasiInput = {
    subAsetId?: StringFieldUpdateOperationsInput | string
    nameSubAset?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsetUpdateWithoutLokasiInput = {
    asetId?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    merkDanTipe?: StringFieldUpdateOperationsInput | string
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kondisiAset?: NullableEnumAsetKondisiFieldUpdateOperationsInput | $Enums.AsetKondisi | null
    statusAset?: EnumAsetStatusFieldUpdateOperationsInput | $Enums.AsetStatus
    nomorSeri?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusKepemilikan?: StringFieldUpdateOperationsInput | string
    urlFoto?: AsetUpdateurlFotoInput | string[]
    urlQR?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pic?: NullableStringFieldUpdateOperationsInput | string | null
    subKategoriAset?: SubAsetKategoriUpdateOneWithoutAsetsNestedInput
    maintenances?: MaintenanceUpdateManyWithoutAsetNestedInput
    perpindahan?: PerpindahanUpdateManyWithoutAsetNestedInput
  }

  export type AsetUncheckedUpdateWithoutLokasiInput = {
    asetId?: StringFieldUpdateOperationsInput | string
    subKategoriAsetId?: NullableStringFieldUpdateOperationsInput | string | null
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    merkDanTipe?: StringFieldUpdateOperationsInput | string
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kondisiAset?: NullableEnumAsetKondisiFieldUpdateOperationsInput | $Enums.AsetKondisi | null
    statusAset?: EnumAsetStatusFieldUpdateOperationsInput | $Enums.AsetStatus
    nomorSeri?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusKepemilikan?: StringFieldUpdateOperationsInput | string
    urlFoto?: AsetUpdateurlFotoInput | string[]
    urlQR?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pic?: NullableStringFieldUpdateOperationsInput | string | null
    maintenances?: MaintenanceUncheckedUpdateManyWithoutAsetNestedInput
    perpindahan?: PerpindahanUncheckedUpdateManyWithoutAsetNestedInput
  }

  export type AsetUncheckedUpdateManyWithoutLokasiInput = {
    asetId?: StringFieldUpdateOperationsInput | string
    subKategoriAsetId?: NullableStringFieldUpdateOperationsInput | string | null
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    merkDanTipe?: StringFieldUpdateOperationsInput | string
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kondisiAset?: NullableEnumAsetKondisiFieldUpdateOperationsInput | $Enums.AsetKondisi | null
    statusAset?: EnumAsetStatusFieldUpdateOperationsInput | $Enums.AsetStatus
    nomorSeri?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusKepemilikan?: StringFieldUpdateOperationsInput | string
    urlFoto?: AsetUpdateurlFotoInput | string[]
    urlQR?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PerpindahanUpdateWithoutLokasiInput = {
    idPindahan?: StringFieldUpdateOperationsInput | string
    tempatLama?: StringFieldUpdateOperationsInput | string
    tempatBaru?: StringFieldUpdateOperationsInput | string
    tanggalPindah?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aset?: AsetUpdateOneRequiredWithoutPerpindahanNestedInput
  }

  export type PerpindahanUncheckedUpdateWithoutLokasiInput = {
    idPindahan?: StringFieldUpdateOperationsInput | string
    idAset?: StringFieldUpdateOperationsInput | string
    tempatLama?: StringFieldUpdateOperationsInput | string
    tempatBaru?: StringFieldUpdateOperationsInput | string
    tanggalPindah?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerpindahanUncheckedUpdateManyWithoutLokasiInput = {
    idPindahan?: StringFieldUpdateOperationsInput | string
    idAset?: StringFieldUpdateOperationsInput | string
    tempatLama?: StringFieldUpdateOperationsInput | string
    tempatBaru?: StringFieldUpdateOperationsInput | string
    tanggalPindah?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengadaanUpdateWithoutLokasiInput = {
    pengadaanId?: StringFieldUpdateOperationsInput | string
    tanggalBeli?: DateTimeFieldUpdateOperationsInput | Date | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    namaAset?: StringFieldUpdateOperationsInput | string
    jumlahAset?: IntFieldUpdateOperationsInput | number
    hargaSatuan?: BigIntFieldUpdateOperationsInput | bigint | number
    totalHarga?: BigIntFieldUpdateOperationsInput | bigint | number
    vendor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengadaanUncheckedUpdateWithoutLokasiInput = {
    pengadaanId?: StringFieldUpdateOperationsInput | string
    tanggalBeli?: DateTimeFieldUpdateOperationsInput | Date | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    namaAset?: StringFieldUpdateOperationsInput | string
    jumlahAset?: IntFieldUpdateOperationsInput | number
    hargaSatuan?: BigIntFieldUpdateOperationsInput | bigint | number
    totalHarga?: BigIntFieldUpdateOperationsInput | bigint | number
    vendor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PengadaanUncheckedUpdateManyWithoutLokasiInput = {
    pengadaanId?: StringFieldUpdateOperationsInput | string
    tanggalBeli?: DateTimeFieldUpdateOperationsInput | Date | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    namaAset?: StringFieldUpdateOperationsInput | string
    jumlahAset?: IntFieldUpdateOperationsInput | number
    hargaSatuan?: BigIntFieldUpdateOperationsInput | bigint | number
    totalHarga?: BigIntFieldUpdateOperationsInput | bigint | number
    vendor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsetCreateManySubKategoriAsetInput = {
    asetId?: string
    lokasiId?: string | null
    kategoriAset: $Enums.AsetKategori
    merkDanTipe: string
    tahun?: number | null
    kondisiAset?: $Enums.AsetKondisi | null
    statusAset: $Enums.AsetStatus
    nomorSeri?: string | null
    masaBerlaku?: Date | string | null
    statusKepemilikan: string
    urlFoto?: AsetCreateurlFotoInput | string[]
    urlQR?: string | null
    createdAt?: Date | string
    pic?: string | null
  }

  export type AsetUpdateWithoutSubKategoriAsetInput = {
    asetId?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    merkDanTipe?: StringFieldUpdateOperationsInput | string
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kondisiAset?: NullableEnumAsetKondisiFieldUpdateOperationsInput | $Enums.AsetKondisi | null
    statusAset?: EnumAsetStatusFieldUpdateOperationsInput | $Enums.AsetStatus
    nomorSeri?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusKepemilikan?: StringFieldUpdateOperationsInput | string
    urlFoto?: AsetUpdateurlFotoInput | string[]
    urlQR?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pic?: NullableStringFieldUpdateOperationsInput | string | null
    lokasi?: LokasiUpdateOneWithoutAsetNestedInput
    maintenances?: MaintenanceUpdateManyWithoutAsetNestedInput
    perpindahan?: PerpindahanUpdateManyWithoutAsetNestedInput
  }

  export type AsetUncheckedUpdateWithoutSubKategoriAsetInput = {
    asetId?: StringFieldUpdateOperationsInput | string
    lokasiId?: NullableStringFieldUpdateOperationsInput | string | null
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    merkDanTipe?: StringFieldUpdateOperationsInput | string
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kondisiAset?: NullableEnumAsetKondisiFieldUpdateOperationsInput | $Enums.AsetKondisi | null
    statusAset?: EnumAsetStatusFieldUpdateOperationsInput | $Enums.AsetStatus
    nomorSeri?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusKepemilikan?: StringFieldUpdateOperationsInput | string
    urlFoto?: AsetUpdateurlFotoInput | string[]
    urlQR?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pic?: NullableStringFieldUpdateOperationsInput | string | null
    maintenances?: MaintenanceUncheckedUpdateManyWithoutAsetNestedInput
    perpindahan?: PerpindahanUncheckedUpdateManyWithoutAsetNestedInput
  }

  export type AsetUncheckedUpdateManyWithoutSubKategoriAsetInput = {
    asetId?: StringFieldUpdateOperationsInput | string
    lokasiId?: NullableStringFieldUpdateOperationsInput | string | null
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    merkDanTipe?: StringFieldUpdateOperationsInput | string
    tahun?: NullableIntFieldUpdateOperationsInput | number | null
    kondisiAset?: NullableEnumAsetKondisiFieldUpdateOperationsInput | $Enums.AsetKondisi | null
    statusAset?: EnumAsetStatusFieldUpdateOperationsInput | $Enums.AsetStatus
    nomorSeri?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statusKepemilikan?: StringFieldUpdateOperationsInput | string
    urlFoto?: AsetUpdateurlFotoInput | string[]
    urlQR?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LokasiUpdateWithoutSubKategoriAsetInput = {
    idLokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aset?: AsetUpdateManyWithoutLokasiNestedInput
    perpindahan?: PerpindahanUpdateManyWithoutLokasiNestedInput
    pengadaan?: PengadaanUpdateManyWithoutLokasiNestedInput
  }

  export type LokasiUncheckedUpdateWithoutSubKategoriAsetInput = {
    idLokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aset?: AsetUncheckedUpdateManyWithoutLokasiNestedInput
    perpindahan?: PerpindahanUncheckedUpdateManyWithoutLokasiNestedInput
    pengadaan?: PengadaanUncheckedUpdateManyWithoutLokasiNestedInput
  }

  export type LokasiUncheckedUpdateManyWithoutSubKategoriAsetInput = {
    idLokasi?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    kategoriAset?: EnumAsetKategoriFieldUpdateOperationsInput | $Enums.AsetKategori
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoleInput = {
    id?: string
    email: string
    name: string
    password: string
    lastLogin?: Date | string | null
    createdAt?: Date | string
    status?: $Enums.UserStatus
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
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