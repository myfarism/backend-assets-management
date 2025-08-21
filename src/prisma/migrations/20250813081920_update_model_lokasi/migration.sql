/*
  Warnings:

  - The primary key for the `Lokasi` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "public"."Aset" DROP CONSTRAINT "Aset_lokasiId_fkey";

-- AlterTable
ALTER TABLE "public"."Aset" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "lokasiId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public"."Lokasi" DROP CONSTRAINT "Lokasi_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "idLokasi" DROP DEFAULT,
ALTER COLUMN "idLokasi" SET DATA TYPE TEXT,
ADD CONSTRAINT "Lokasi_pkey" PRIMARY KEY ("idLokasi");
DROP SEQUENCE "Lokasi_idLokasi_seq";

-- AddForeignKey
ALTER TABLE "public"."Aset" ADD CONSTRAINT "Aset_lokasiId_fkey" FOREIGN KEY ("lokasiId") REFERENCES "public"."Lokasi"("idLokasi") ON DELETE RESTRICT ON UPDATE CASCADE;
