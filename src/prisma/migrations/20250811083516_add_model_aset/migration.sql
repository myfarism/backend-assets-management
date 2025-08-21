-- CreateEnum
CREATE TYPE "public"."AsetKategori" AS ENUM ('laptop', 'furniture', 'kamera');

-- CreateTable
CREATE TABLE "public"."Aset" (
    "asetId" TEXT NOT NULL,
    "lokasi" TEXT NOT NULL,
    "kategori" "public"."AsetKategori" NOT NULL,
    "merkDanTipe" TEXT NOT NULL,
    "tahun" INTEGER NOT NULL,
    "kondisi" "public"."AsetKondisi" NOT NULL,
    "status" "public"."AsetStatus" NOT NULL,

    CONSTRAINT "Aset_pkey" PRIMARY KEY ("asetId")
);
