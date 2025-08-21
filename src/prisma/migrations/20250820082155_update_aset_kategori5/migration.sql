/*
  Warnings:

  - Added the required column `kategoriAset` to the `Aset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Aset" ADD COLUMN     "kategoriAset" "public"."AsetKategori" NOT NULL;
