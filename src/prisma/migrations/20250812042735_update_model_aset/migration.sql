/*
  Warnings:

  - The `urlFoto` column on the `Aset` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."Aset" DROP COLUMN "urlFoto",
ADD COLUMN     "urlFoto" TEXT[];
