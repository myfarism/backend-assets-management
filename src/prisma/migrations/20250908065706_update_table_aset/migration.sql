/*
  Warnings:

  - Made the column `jumlah` on table `Aset` required. This step will fail if there are existing NULL values in that column.
  - Made the column `unit` on table `Aset` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Aset" ALTER COLUMN "jumlah" SET NOT NULL,
ALTER COLUMN "unit" SET NOT NULL;
