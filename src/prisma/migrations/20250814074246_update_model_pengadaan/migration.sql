-- CreateTable
CREATE TABLE "public"."Pengadaan" (
    "pengadaanId" TEXT NOT NULL,
    "tanggalBeli" TIMESTAMP(3) NOT NULL,
    "lokasiId" TEXT NOT NULL,
    "kategoriAset" "public"."AsetKategori" NOT NULL,
    "namaAset" TEXT NOT NULL,
    "jumlahAset" INTEGER NOT NULL,
    "hargaSatuan" BIGINT NOT NULL,
    "totalHarga" BIGINT NOT NULL,
    "vendor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pengadaan_pkey" PRIMARY KEY ("pengadaanId")
);

-- AddForeignKey
ALTER TABLE "public"."Pengadaan" ADD CONSTRAINT "Pengadaan_lokasiId_fkey" FOREIGN KEY ("lokasiId") REFERENCES "public"."Lokasi"("idLokasi") ON DELETE RESTRICT ON UPDATE CASCADE;
