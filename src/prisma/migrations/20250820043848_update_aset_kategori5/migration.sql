/*
  Warnings:

  - Added the required column `kategoriAset` to the `Lokasi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Lokasi" ADD COLUMN     "kategoriAset" "public"."AsetKategori" NOT NULL;
