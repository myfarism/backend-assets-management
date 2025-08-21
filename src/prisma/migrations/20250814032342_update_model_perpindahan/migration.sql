/*
  Warnings:

  - Added the required column `tempatLama` to the `Perpindahan` table without a default value. This is not possible if the table is not empty.
  - Made the column `tempatBaru` on table `Perpindahan` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Perpindahan" ADD COLUMN     "tempatLama" TEXT NOT NULL,
ALTER COLUMN "tempatBaru" SET NOT NULL;
