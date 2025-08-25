/*
  Warnings:

  - A unique constraint covering the columns `[nameSubAset]` on the table `SubAsetKategori` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SubAsetKategori_nameSubAset_key" ON "public"."SubAsetKategori"("nameSubAset");
