/*
  Warnings:

  - Added the required column `urlFoto` to the `Aset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Aset" ADD COLUMN     "urlFoto" TEXT NOT NULL;
