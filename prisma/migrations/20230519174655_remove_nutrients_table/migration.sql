/*
  Warnings:

  - You are about to drop the column `nutrient_uuid` on the `Food` table. All the data in the column will be lost.
  - You are about to drop the column `user_uuid` on the `Meal` table. All the data in the column will be lost.
  - You are about to drop the `Nutrient` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `calories` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `carbs` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fat` to the `Food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `Food` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Food" DROP CONSTRAINT "Food_nutrient_uuid_fkey";

-- DropForeignKey
ALTER TABLE "Meal" DROP CONSTRAINT "Meal_user_uuid_fkey";

-- AlterTable
ALTER TABLE "Food" DROP COLUMN "nutrient_uuid",
ADD COLUMN     "calories" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "carbs" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "fat" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "protein" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Meal" DROP COLUMN "user_uuid";

-- DropTable
DROP TABLE "Nutrient";
