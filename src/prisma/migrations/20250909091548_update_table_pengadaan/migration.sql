/*
  Warnings:

  - Added the required column `kategoriAset` to the `Pengadaan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Pengadaan" ADD COLUMN     "kategoriAset" TEXT NOT NULL;
