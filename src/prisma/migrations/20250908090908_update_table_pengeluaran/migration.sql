/*
  Warnings:

  - Added the required column `addedBy` to the `Pengeluaran` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Pengeluaran" ADD COLUMN     "addedBy" TEXT NOT NULL;
