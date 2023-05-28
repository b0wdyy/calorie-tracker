-- CreateTable
CREATE TABLE "Recipe" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ingredients" TEXT[],
    "steps" TEXT[],
    "preparation_time" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "fat" INTEGER NOT NULL,
    "carbs" INTEGER NOT NULL,
    "protein" INTEGER NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("uuid")
);
