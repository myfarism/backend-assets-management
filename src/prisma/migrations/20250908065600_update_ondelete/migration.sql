-- DropForeignKey
ALTER TABLE "public"."Perpindahan" DROP CONSTRAINT "Perpindahan_idAset_fkey";

-- AddForeignKey
ALTER TABLE "public"."Perpindahan" ADD CONSTRAINT "Perpindahan_idAset_fkey" FOREIGN KEY ("idAset") REFERENCES "public"."Aset"("asetId") ON DELETE CASCADE ON UPDATE CASCADE;
