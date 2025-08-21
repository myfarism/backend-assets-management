/*
  Warnings:

  - You are about to drop the column `lokasi` on the `Aset` table. All the data in the column will be lost.
  - Added the required column `lokasiId` to the `Aset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Aset" DROP COLUMN "lokasi",
ADD COLUMN     "lokasiId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "public"."Lokasi" (
    "idLokasi" SERIAL NOT NULL,
    "lokasi" TEXT NOT NULL,
    "kategoriAset" "public"."AsetKategori"[],

    CONSTRAINT "Lokasi_pkey" PRIMARY KEY ("idLokasi")
);

-- AddForeignKey
ALTER TABLE "public"."Aset" ADD CONSTRAINT "Aset_lokasiId_fkey" FOREIGN KEY ("lokasiId") REFERENCES "public"."Lokasi"("idLokasi") ON DELETE RESTRICT ON UPDATE CASCADE;
