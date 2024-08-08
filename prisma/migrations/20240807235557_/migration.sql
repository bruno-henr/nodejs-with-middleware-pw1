/*
  Warnings:

  - Made the column `userId` on table `Tecnology` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Tecnology" DROP CONSTRAINT "Tecnology_userId_fkey";

-- AlterTable
ALTER TABLE "Tecnology" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Tecnology" ADD CONSTRAINT "Tecnology_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
