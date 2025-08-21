/*
  Warnings:

  - You are about to drop the column `subKategoriAset` on the `Aset` table. All the data in the column will be lost.
  - You are about to drop the column `subKategoriAset` on the `Lokasi` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - Added the required column `roleId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Aset" DROP COLUMN "subKategoriAset",
ADD COLUMN     "subKategoriAsetId" TEXT;

-- AlterTable
ALTER TABLE "public"."Lokasi" DROP COLUMN "subKategoriAset";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "role",
ADD COLUMN     "roleId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "public"."SubAsetKategori";

-- DropEnum
DROP TYPE "public"."UserRole";

-- CreateTable
CREATE TABLE "public"."SubAsetKategori" (
    "subAsetId" TEXT NOT NULL,
    "nameSubAset" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SubAsetKategori_pkey" PRIMARY KEY ("subAsetId")
);

-- CreateTable
CREATE TABLE "public"."UserRole" (
    "userRoleId" TEXT NOT NULL,
    "nameRole" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserRole_pkey" PRIMARY KEY ("userRoleId")
);

-- CreateTable
CREATE TABLE "public"."_KategoriToLokasi" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_KategoriToLokasi_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_KategoriToLokasi_B_index" ON "public"."_KategoriToLokasi"("B");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."UserRole"("userRoleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Aset" ADD CONSTRAINT "Aset_subKategoriAsetId_fkey" FOREIGN KEY ("subKategoriAsetId") REFERENCES "public"."SubAsetKategori"("subAsetId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_KategoriToLokasi" ADD CONSTRAINT "_KategoriToLokasi_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Lokasi"("idLokasi") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_KategoriToLokasi" ADD CONSTRAINT "_KategoriToLokasi_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."SubAsetKategori"("subAsetId") ON DELETE CASCADE ON UPDATE CASCADE;
