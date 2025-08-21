/*
  Warnings:

  - Added the required column `urlQR` to the `Aset` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."UserStatus" AS ENUM ('aktif', 'nonaktif');

-- AlterTable
ALTER TABLE "public"."Aset" ADD COLUMN     "urlQR" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "status" "public"."UserStatus" NOT NULL DEFAULT 'nonaktif';
