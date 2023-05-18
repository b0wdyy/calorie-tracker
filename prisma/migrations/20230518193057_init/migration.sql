-- CreateTable
CREATE TABLE "User" (
    "uuid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Food" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nutrient_uuid" TEXT NOT NULL,
    "picture" TEXT NOT NULL,
    "meal_uuid" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Nutrient" (
    "uuid" TEXT NOT NULL,
    "calories" DOUBLE PRECISION NOT NULL,
    "fat" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "carbs" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Nutrient_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Meal" (
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_uuid" TEXT NOT NULL,
    "agenda_uuid" TEXT NOT NULL,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Agenda" (
    "uuid" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_uuid" TEXT NOT NULL,

    CONSTRAINT "Agenda_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "Food_nutrient_uuid_fkey" FOREIGN KEY ("nutrient_uuid") REFERENCES "Nutrient"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "Food_meal_uuid_fkey" FOREIGN KEY ("meal_uuid") REFERENCES "Meal"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_user_uuid_fkey" FOREIGN KEY ("user_uuid") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_agenda_uuid_fkey" FOREIGN KEY ("agenda_uuid") REFERENCES "Agenda"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agenda" ADD CONSTRAINT "Agenda_user_uuid_fkey" FOREIGN KEY ("user_uuid") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
