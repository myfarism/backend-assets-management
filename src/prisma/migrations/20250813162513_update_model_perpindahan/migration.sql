-- CreateTable
CREATE TABLE "public"."Perpindahan" (
    "idPindahan" TEXT NOT NULL,
    "lokasiId" TEXT NOT NULL,
    "idAset" TEXT NOT NULL,
    "tempatBaru" TEXT,
    "tanggalPindah" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Perpindahan_pkey" PRIMARY KEY ("idPindahan")
);

-- AddForeignKey
ALTER TABLE "public"."Perpindahan" ADD CONSTRAINT "Perpindahan_lokasiId_fkey" FOREIGN KEY ("lokasiId") REFERENCES "public"."Lokasi"("idLokasi") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Perpindahan" ADD CONSTRAINT "Perpindahan_idAset_fkey" FOREIGN KEY ("idAset") REFERENCES "public"."Aset"("asetId") ON DELETE RESTRICT ON UPDATE CASCADE;
