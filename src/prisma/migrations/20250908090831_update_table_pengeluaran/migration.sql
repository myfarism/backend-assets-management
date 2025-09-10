/*
  Warnings:

  - Added the required column `deskripsi` to the `Pengeluaran` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idAset` to the `Pengeluaran` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahKeluar` to the `Pengeluaran` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Pengeluaran" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deskripsi" TEXT NOT NULL,
ADD COLUMN     "idAset" TEXT NOT NULL,
ADD COLUMN     "jumlahKeluar" BIGINT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Pengeluaran" ADD CONSTRAINT "Pengeluaran_idAset_fkey" FOREIGN KEY ("idAset") REFERENCES "public"."Aset"("asetId") ON DELETE CASCADE ON UPDATE CASCADE;
