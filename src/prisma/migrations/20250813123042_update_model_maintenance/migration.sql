-- CreateTable
CREATE TABLE "public"."Maintenance" (
    "maintenanceId" TEXT NOT NULL,
    "idAset" TEXT NOT NULL,
    "tanggalMulai" TIMESTAMP(3) NOT NULL,
    "perkiraanSelesai" TIMESTAMP(3) NOT NULL,
    "tanggalSelesai" TIMESTAMP(3),
    "statusMaintenance" "public"."MaintenanceRequestStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Maintenance_pkey" PRIMARY KEY ("maintenanceId")
);

-- AddForeignKey
ALTER TABLE "public"."Maintenance" ADD CONSTRAINT "Maintenance_idAset_fkey" FOREIGN KEY ("idAset") REFERENCES "public"."Aset"("asetId") ON DELETE RESTRICT ON UPDATE CASCADE;
