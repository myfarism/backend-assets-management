/*
  Warnings:

  - The values [baik,normal,buruk] on the enum `AsetKondisi` will be removed. If these variants are still used in the database, this will fail.
  - The values [aktif,nonaktif,maintenance] on the enum `AsetStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [pribadi,kantor] on the enum `HakMilik` will be removed. If these variants are still used in the database, this will fail.
  - The values [ontime,overdue,onprocess] on the enum `MaintenanceRequestStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [laptop,furniture,kamera,elektronik] on the enum `SubAsetKategori` will be removed. If these variants are still used in the database, this will fail.
  - The values [admin,superadmin,maintenance,user] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.
  - The values [aktif,nonaktif] on the enum `UserStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."AsetKondisi_new" AS ENUM ('Baik', 'Normal', 'Buruk');
ALTER TABLE "public"."Aset" ALTER COLUMN "kondisiAset" TYPE "public"."AsetKondisi_new" USING ("kondisiAset"::text::"public"."AsetKondisi_new");
ALTER TYPE "public"."AsetKondisi" RENAME TO "AsetKondisi_old";
ALTER TYPE "public"."AsetKondisi_new" RENAME TO "AsetKondisi";
DROP TYPE "public"."AsetKondisi_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "public"."AsetStatus_new" AS ENUM ('Aktif', 'Non Aktif', 'Maintenance');
ALTER TABLE "public"."Aset" ALTER COLUMN "statusAset" TYPE "public"."AsetStatus_new" USING ("statusAset"::text::"public"."AsetStatus_new");
ALTER TYPE "public"."AsetStatus" RENAME TO "AsetStatus_old";
ALTER TYPE "public"."AsetStatus_new" RENAME TO "AsetStatus";
DROP TYPE "public"."AsetStatus_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "public"."HakMilik_new" AS ENUM ('Pribad', 'Kantor');
ALTER TYPE "public"."HakMilik" RENAME TO "HakMilik_old";
ALTER TYPE "public"."HakMilik_new" RENAME TO "HakMilik";
DROP TYPE "public"."HakMilik_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "public"."MaintenanceRequestStatus_new" AS ENUM ('On Time', 'Overdue', 'On Process');
ALTER TABLE "public"."Maintenance" ALTER COLUMN "statusMaintenance" TYPE "public"."MaintenanceRequestStatus_new" USING ("statusMaintenance"::text::"public"."MaintenanceRequestStatus_new");
ALTER TYPE "public"."MaintenanceRequestStatus" RENAME TO "MaintenanceRequestStatus_old";
ALTER TYPE "public"."MaintenanceRequestStatus_new" RENAME TO "MaintenanceRequestStatus";
DROP TYPE "public"."MaintenanceRequestStatus_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "public"."SubAsetKategori_new" AS ENUM ('Laptop', 'Furniture', 'Kamera', 'Elektronik');
ALTER TABLE "public"."Aset" ALTER COLUMN "subKategoriAset" TYPE "public"."SubAsetKategori_new" USING ("subKategoriAset"::text::"public"."SubAsetKategori_new");
ALTER TABLE "public"."Lokasi" ALTER COLUMN "subKategoriAset" TYPE "public"."SubAsetKategori_new"[] USING ("subKategoriAset"::text::"public"."SubAsetKategori_new"[]);
ALTER TYPE "public"."SubAsetKategori" RENAME TO "SubAsetKategori_old";
ALTER TYPE "public"."SubAsetKategori_new" RENAME TO "SubAsetKategori";
DROP TYPE "public"."SubAsetKategori_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "public"."UserRole_new" AS ENUM ('Admin', 'Super Admin', 'Maintenance', 'User');
ALTER TABLE "public"."User" ALTER COLUMN "role" TYPE "public"."UserRole_new" USING ("role"::text::"public"."UserRole_new");
ALTER TYPE "public"."UserRole" RENAME TO "UserRole_old";
ALTER TYPE "public"."UserRole_new" RENAME TO "UserRole";
DROP TYPE "public"."UserRole_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "public"."UserStatus_new" AS ENUM ('Aktif', 'Non Aktif');
ALTER TABLE "public"."User" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "public"."User" ALTER COLUMN "status" TYPE "public"."UserStatus_new" USING ("status"::text::"public"."UserStatus_new");
ALTER TYPE "public"."UserStatus" RENAME TO "UserStatus_old";
ALTER TYPE "public"."UserStatus_new" RENAME TO "UserStatus";
DROP TYPE "public"."UserStatus_old";
ALTER TABLE "public"."User" ALTER COLUMN "status" SET DEFAULT 'Non Aktif';
COMMIT;

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "status" SET DEFAULT 'Non Aktif';
