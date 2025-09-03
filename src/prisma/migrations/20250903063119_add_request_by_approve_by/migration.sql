/*
  Warnings:

  - Added the required column `requestBy` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Request" ADD COLUMN     "approvedBy" TEXT,
ADD COLUMN     "requestBy" TEXT NOT NULL,
ALTER COLUMN "langganan" DROP NOT NULL;
