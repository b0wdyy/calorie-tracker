/*
  Warnings:

  - You are about to drop the column `meal_uuid` on the `Food` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Food" DROP CONSTRAINT "Food_meal_uuid_fkey";

-- AlterTable
ALTER TABLE "Food" DROP COLUMN "meal_uuid";

-- CreateTable
CREATE TABLE "FoodsOnMeals" (
    "uuid" TEXT NOT NULL,
    "food_uuid" TEXT NOT NULL,
    "meal_uuid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FoodsOnMeals_pkey" PRIMARY KEY ("uuid")
);

-- AddForeignKey
ALTER TABLE "FoodsOnMeals" ADD CONSTRAINT "FoodsOnMeals_food_uuid_fkey" FOREIGN KEY ("food_uuid") REFERENCES "Food"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodsOnMeals" ADD CONSTRAINT "FoodsOnMeals_meal_uuid_fkey" FOREIGN KEY ("meal_uuid") REFERENCES "Meal"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
