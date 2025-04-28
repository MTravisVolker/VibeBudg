/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `hashed_password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "name",
ADD COLUMN     "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "hashed_password" VARCHAR(255) NOT NULL,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "is_superuser" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_verified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "mfa_enabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "Api_Token" (
    "id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "token" TEXT NOT NULL,
    "issued_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(0),

    CONSTRAINT "Api_Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OAuth_Account" (
    "id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "provider" VARCHAR(50) NOT NULL,
    "account_id" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OAuth_Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bill_Status" (
    "id" SMALLSERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "highlight_color_hex" VARCHAR(7),

    CONSTRAINT "Bill_Status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recurrence" (
    "id" SMALLSERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "calculation" VARCHAR(20),
    "archived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Recurrence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SMALLSERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "archived" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bank_Account" (
    "id" SMALLSERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "url" VARCHAR(100),
    "recurrence" SMALLINT,
    "recurrence_value" INTEGER,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "font_color_hex" VARCHAR(7) NOT NULL,

    CONSTRAINT "Bank_Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bills" (
    "id" SMALLSERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "default_amount_due" DECIMAL(10,2) NOT NULL,
    "url" VARCHAR(100),
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "default_draft_account" SMALLINT,
    "category" SMALLINT,
    "recurrence" SMALLINT,
    "recurrence_value" INTEGER,

    CONSTRAINT "Bills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Due_Bills" (
    "id" SMALLSERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "bill" SMALLINT,
    "recurrence" SMALLINT,
    "recurrence_value" INTEGER,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "due_date" DATE NOT NULL,
    "pay_date" DATE,
    "min_amount_due" DECIMAL(10,2) NOT NULL,
    "total_amount_due" DECIMAL(10,2) NOT NULL,
    "status" SMALLINT,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "confirmation" VARCHAR(100),
    "notes" TEXT,
    "draft_account" SMALLINT,

    CONSTRAINT "Due_Bills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bank_Account_Instance" (
    "id" SMALLSERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "bank_account" SMALLINT,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "due_date" DATE NOT NULL,
    "pay_date" DATE,
    "status" SMALLINT,
    "archived" BOOLEAN NOT NULL DEFAULT false,
    "current_balance" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "Bank_Account_Instance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Audit_Log" (
    "id" SERIAL NOT NULL,
    "user_id" UUID NOT NULL,
    "table_name" VARCHAR(50) NOT NULL,
    "row_id" INTEGER NOT NULL,
    "field_name" VARCHAR(100) NOT NULL,
    "action" VARCHAR(20) NOT NULL,
    "value_before_change" TEXT,
    "value_after_change" TEXT,
    "timestamp" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Audit_Log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Api_Token_token_key" ON "Api_Token"("token");

-- CreateIndex
CREATE UNIQUE INDEX "OAuth_Account_provider_account_id_key" ON "OAuth_Account"("provider", "account_id");

-- CreateIndex
CREATE INDEX "Bill_Status_user_id_idx" ON "Bill_Status"("user_id");

-- CreateIndex
CREATE INDEX "Bill_Status_name_idx" ON "Bill_Status"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Bill_Status_user_id_name_key" ON "Bill_Status"("user_id", "name");

-- CreateIndex
CREATE INDEX "Recurrence_user_id_idx" ON "Recurrence"("user_id");

-- CreateIndex
CREATE INDEX "Recurrence_name_idx" ON "Recurrence"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Recurrence_user_id_name_key" ON "Recurrence"("user_id", "name");

-- CreateIndex
CREATE INDEX "Category_user_id_idx" ON "Category"("user_id");

-- CreateIndex
CREATE INDEX "Category_name_idx" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Category_user_id_name_key" ON "Category"("user_id", "name");

-- CreateIndex
CREATE INDEX "Bank_Account_user_id_idx" ON "Bank_Account"("user_id");

-- CreateIndex
CREATE INDEX "Bank_Account_name_idx" ON "Bank_Account"("name");

-- CreateIndex
CREATE INDEX "Bank_Account_recurrence_idx" ON "Bank_Account"("recurrence");

-- CreateIndex
CREATE UNIQUE INDEX "Bank_Account_user_id_name_key" ON "Bank_Account"("user_id", "name");

-- CreateIndex
CREATE INDEX "Bills_user_id_idx" ON "Bills"("user_id");

-- CreateIndex
CREATE INDEX "Bills_name_idx" ON "Bills"("name");

-- CreateIndex
CREATE INDEX "Bills_default_draft_account_idx" ON "Bills"("default_draft_account");

-- CreateIndex
CREATE INDEX "Bills_category_idx" ON "Bills"("category");

-- CreateIndex
CREATE UNIQUE INDEX "Bills_user_id_name_key" ON "Bills"("user_id", "name");

-- CreateIndex
CREATE INDEX "Due_Bills_user_id_idx" ON "Due_Bills"("user_id");

-- CreateIndex
CREATE INDEX "Due_Bills_bill_idx" ON "Due_Bills"("bill");

-- CreateIndex
CREATE INDEX "Due_Bills_recurrence_idx" ON "Due_Bills"("recurrence");

-- CreateIndex
CREATE INDEX "Due_Bills_due_date_idx" ON "Due_Bills"("due_date");

-- CreateIndex
CREATE INDEX "Due_Bills_pay_date_idx" ON "Due_Bills"("pay_date");

-- CreateIndex
CREATE INDEX "Due_Bills_status_idx" ON "Due_Bills"("status");

-- CreateIndex
CREATE INDEX "Due_Bills_draft_account_idx" ON "Due_Bills"("draft_account");

-- CreateIndex
CREATE INDEX "Due_Bills_priority_idx" ON "Due_Bills"("priority");

-- CreateIndex
CREATE INDEX "Bank_Account_Instance_user_id_idx" ON "Bank_Account_Instance"("user_id");

-- CreateIndex
CREATE INDEX "Bank_Account_Instance_bank_account_idx" ON "Bank_Account_Instance"("bank_account");

-- CreateIndex
CREATE INDEX "Bank_Account_Instance_due_date_idx" ON "Bank_Account_Instance"("due_date");

-- CreateIndex
CREATE INDEX "Bank_Account_Instance_pay_date_idx" ON "Bank_Account_Instance"("pay_date");

-- CreateIndex
CREATE INDEX "Bank_Account_Instance_status_idx" ON "Bank_Account_Instance"("status");

-- CreateIndex
CREATE INDEX "Bank_Account_Instance_priority_idx" ON "Bank_Account_Instance"("priority");

-- CreateIndex
CREATE INDEX "Audit_Log_user_id_idx" ON "Audit_Log"("user_id");

-- CreateIndex
CREATE INDEX "Audit_Log_table_name_idx" ON "Audit_Log"("table_name");

-- CreateIndex
CREATE INDEX "Audit_Log_row_id_idx" ON "Audit_Log"("row_id");

-- CreateIndex
CREATE INDEX "Audit_Log_timestamp_idx" ON "Audit_Log"("timestamp");

-- AddForeignKey
ALTER TABLE "Api_Token" ADD CONSTRAINT "Api_Token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OAuth_Account" ADD CONSTRAINT "OAuth_Account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bill_Status" ADD CONSTRAINT "Bill_Status_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recurrence" ADD CONSTRAINT "Recurrence_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bank_Account" ADD CONSTRAINT "Bank_Account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bank_Account" ADD CONSTRAINT "Bank_Account_recurrence_fkey" FOREIGN KEY ("recurrence") REFERENCES "Recurrence"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bills" ADD CONSTRAINT "Bills_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bills" ADD CONSTRAINT "Bills_default_draft_account_fkey" FOREIGN KEY ("default_draft_account") REFERENCES "Bank_Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bills" ADD CONSTRAINT "Bills_category_fkey" FOREIGN KEY ("category") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bills" ADD CONSTRAINT "Bills_recurrence_fkey" FOREIGN KEY ("recurrence") REFERENCES "Recurrence"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Due_Bills" ADD CONSTRAINT "Due_Bills_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Due_Bills" ADD CONSTRAINT "Due_Bills_bill_fkey" FOREIGN KEY ("bill") REFERENCES "Bills"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Due_Bills" ADD CONSTRAINT "Due_Bills_recurrence_fkey" FOREIGN KEY ("recurrence") REFERENCES "Recurrence"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Due_Bills" ADD CONSTRAINT "Due_Bills_status_fkey" FOREIGN KEY ("status") REFERENCES "Bill_Status"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Due_Bills" ADD CONSTRAINT "Due_Bills_draft_account_fkey" FOREIGN KEY ("draft_account") REFERENCES "Bank_Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bank_Account_Instance" ADD CONSTRAINT "Bank_Account_Instance_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bank_Account_Instance" ADD CONSTRAINT "Bank_Account_Instance_bank_account_fkey" FOREIGN KEY ("bank_account") REFERENCES "Bank_Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bank_Account_Instance" ADD CONSTRAINT "Bank_Account_Instance_status_fkey" FOREIGN KEY ("status") REFERENCES "Bill_Status"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Audit_Log" ADD CONSTRAINT "Audit_Log_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
