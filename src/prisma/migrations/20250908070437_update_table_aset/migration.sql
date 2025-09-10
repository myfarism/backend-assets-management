/*
  Warnings:

  - Changed the type of `jumlah` on the `Aset` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."Aset" DROP COLUMN "jumlah",
ADD COLUMN     "jumlah" BIGINT NOT NULL;

-- CreateTable
CREATE TABLE "public"."Pengeluaran" (
    "pengeluaranId" TEXT NOT NULL,

    CONSTRAINT "Pengeluaran_pkey" PRIMARY KEY ("pengeluaranId")
);
