/*
  Warnings:

  - You are about to drop the column `kategoriAset` on the `Pengadaan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Pengadaan" DROP COLUMN "kategoriAset",
ADD COLUMN     "subKategoriAsetId" TEXT;

-- AddForeignKey
ALTER TABLE "public"."Pengadaan" ADD CONSTRAINT "Pengadaan_subKategoriAsetId_fkey" FOREIGN KEY ("subKategoriAsetId") REFERENCES "public"."SubAsetKategori"("subAsetId") ON DELETE SET NULL ON UPDATE CASCADE;
