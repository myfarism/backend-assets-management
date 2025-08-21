/*
  Warnings:

  - The values [laptop,furniture,kamera] on the enum `AsetKategori` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."AsetKategori_new" AS ENUM ('asetFisik', 'asetDigital');
ALTER TABLE "public"."Aset" ALTER COLUMN "kategoriAset" TYPE "public"."AsetKategori_new" USING ("kategoriAset"::text::"public"."AsetKategori_new");
ALTER TABLE "public"."Lokasi" ALTER COLUMN "kategoriAset" TYPE "public"."AsetKategori_new"[] USING ("kategoriAset"::text::"public"."AsetKategori_new"[]);
ALTER TABLE "public"."Pengadaan" ALTER COLUMN "kategoriAset" TYPE "public"."AsetKategori_new" USING ("kategoriAset"::text::"public"."AsetKategori_new");
ALTER TYPE "public"."AsetKategori" RENAME TO "AsetKategori_old";
ALTER TYPE "public"."AsetKategori_new" RENAME TO "AsetKategori";
DROP TYPE "public"."AsetKategori_old";
COMMIT;

-- AlterEnum
ALTER TYPE "public"."UserRole" ADD VALUE 'user';
