-- CreateTable
CREATE TABLE "sfcuser"
(
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "image" TEXT,
    "provider" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "sfcuser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comment"
(
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "postSlug" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sfcuser_email_key" ON "sfcuser"("email");

-- CreateIndex
CREATE INDEX "comment_postSlug_idx" ON "comment"("postSlug");

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "sfcuser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
