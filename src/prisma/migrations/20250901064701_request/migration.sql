-- DropForeignKey
ALTER TABLE "public"."Maintenance" DROP CONSTRAINT "Maintenance_idAset_fkey";

-- CreateTable
CREATE TABLE "public"."Request" (
    "requestId" TEXT NOT NULL,
    "namaAset" TEXT NOT NULL,
    "jumlah" BIGINT NOT NULL,
    "kategoriAset" TEXT NOT NULL,
    "tipeKebutuhan" TEXT NOT NULL,
    "tanggalButuh" TIMESTAMP(3) NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "vendor" TEXT,
    "unit" TEXT,
    "langganan" INTEGER NOT NULL,
    "durasi" TEXT,
    "idUser" TEXT NOT NULL,
    "asetAsetId" TEXT,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("requestId")
);

-- AddForeignKey
ALTER TABLE "public"."Maintenance" ADD CONSTRAINT "Maintenance_idAset_fkey" FOREIGN KEY ("idAset") REFERENCES "public"."Aset"("asetId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Request" ADD CONSTRAINT "Request_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Request" ADD CONSTRAINT "Request_asetAsetId_fkey" FOREIGN KEY ("asetAsetId") REFERENCES "public"."Aset"("asetId") ON DELETE SET NULL ON UPDATE CASCADE;
