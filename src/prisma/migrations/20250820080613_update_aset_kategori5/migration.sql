/*
  Warnings:

  - The values [asetFisik,asetDigital] on the enum `AsetKategori` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."AsetKategori_new" AS ENUM ('Aset Fisik', 'Aset Digital');
ALTER TABLE "public"."Lokasi" ALTER COLUMN "kategoriAset" TYPE "public"."AsetKategori_new" USING ("kategoriAset"::text::"public"."AsetKategori_new");
ALTER TABLE "public"."Pengadaan" ALTER COLUMN "kategoriAset" TYPE "public"."AsetKategori_new" USING ("kategoriAset"::text::"public"."AsetKategori_new");
ALTER TYPE "public"."AsetKategori" RENAME TO "AsetKategori_old";
ALTER TYPE "public"."AsetKategori_new" RENAME TO "AsetKategori";
DROP TYPE "public"."AsetKategori_old";
COMMIT;
