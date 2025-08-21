/*
  Warnings:

  - You are about to drop the column `kategoriAset` on the `Aset` table. All the data in the column will be lost.
  - You are about to drop the column `kategoriAset` on the `Lokasi` table. All the data in the column will be lost.
  - Added the required column `subKategoriAset` to the `Aset` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."SubAsetKategori" AS ENUM ('laptop', 'furniture', 'kamera', 'elektronik');

-- DropForeignKey
ALTER TABLE "public"."Aset" DROP CONSTRAINT "Aset_lokasiId_fkey";

-- AlterTable
ALTER TABLE "public"."Aset" DROP COLUMN "kategoriAset",
ADD COLUMN     "subKategoriAset" "public"."SubAsetKategori" NOT NULL,
ALTER COLUMN "tahun" DROP NOT NULL,
ALTER COLUMN "kondisiAset" DROP NOT NULL,
ALTER COLUMN "nomorSeri" DROP NOT NULL,
ALTER COLUMN "lokasiId" DROP NOT NULL,
ALTER COLUMN "urlQR" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."Lokasi" DROP COLUMN "kategoriAset",
ADD COLUMN     "subKategoriAset" "public"."SubAsetKategori"[];

-- AddForeignKey
ALTER TABLE "public"."Aset" ADD CONSTRAINT "Aset_lokasiId_fkey" FOREIGN KEY ("lokasiId") REFERENCES "public"."Lokasi"("idLokasi") ON DELETE SET NULL ON UPDATE CASCADE;
