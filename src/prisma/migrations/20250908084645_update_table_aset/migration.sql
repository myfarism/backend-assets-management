/*
  Warnings:

  - Added the required column `addedBy` to the `Aset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Aset" ADD COLUMN     "addedBy" TEXT NOT NULL;
