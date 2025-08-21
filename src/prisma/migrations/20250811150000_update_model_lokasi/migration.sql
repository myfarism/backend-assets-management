/*
  Warnings:

  - A unique constraint covering the columns `[lokasi]` on the table `Lokasi` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Lokasi_lokasi_key" ON "public"."Lokasi"("lokasi");
