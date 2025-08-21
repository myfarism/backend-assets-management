/*
  Warnings:

  - The values [Pribad] on the enum `HakMilik` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."HakMilik_new" AS ENUM ('Pribadi', 'Kantor');
ALTER TYPE "public"."HakMilik" RENAME TO "HakMilik_old";
ALTER TYPE "public"."HakMilik_new" RENAME TO "HakMilik";
DROP TYPE "public"."HakMilik_old";
COMMIT;
