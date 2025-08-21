-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('admin', 'superadmin', 'maintenance');

-- CreateEnum
CREATE TYPE "public"."MaintenanceRequestStatus" AS ENUM ('ontime', 'overdue', 'onprocess');

-- CreateEnum
CREATE TYPE "public"."AsetStatus" AS ENUM ('aktif', 'nonaktif', 'maintenance');

-- CreateEnum
CREATE TYPE "public"."AsetKondisi" AS ENUM ('baik', 'normal', 'buruk');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "public"."UserRole" NOT NULL,
    "password" TEXT NOT NULL,
    "lastLogin" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");
