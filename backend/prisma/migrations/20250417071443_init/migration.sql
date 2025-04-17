-- CreateTable
CREATE TABLE "Bill" (
    "id" SERIAL NOT NULL,
    "customer" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "billedBy" TEXT NOT NULL,
    "items" TEXT NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Bill_pkey" PRIMARY KEY ("id")
);
