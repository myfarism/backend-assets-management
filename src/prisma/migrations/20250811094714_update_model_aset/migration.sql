/*
  Warnings:

  - You are about to drop the column `kategori` on the `Aset` table. All the data in the column will be lost.
  - You are about to drop the column `kondisi` on the `Aset` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Aset` table. All the data in the column will be lost.
  - Added the required column `kategoriAset` to the `Aset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kondisiAset` to the `Aset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomorSeri` to the `Aset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusAset` to the `Aset` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusKepemilikan` to the `Aset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Aset" DROP COLUMN "kategori",
DROP COLUMN "kondisi",
DROP COLUMN "status",
ADD COLUMN     "kategoriAset" "public"."AsetKategori" NOT NULL,
ADD COLUMN     "kondisiAset" "public"."AsetKondisi" NOT NULL,
ADD COLUMN     "masaBerlaku" TIMESTAMP(3),
ADD COLUMN     "nomorSeri" BIGINT NOT NULL,
ADD COLUMN     "statusAset" "public"."AsetStatus" NOT NULL,
ADD COLUMN     "statusKepemilikan" TEXT NOT NULL;
