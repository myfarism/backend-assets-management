/*
  Warnings:

  - You are about to drop the column `asetAsetId` on the `Request` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Request" DROP CONSTRAINT "Request_asetAsetId_fkey";

-- AlterTable
ALTER TABLE "public"."Request" DROP COLUMN "asetAsetId";
