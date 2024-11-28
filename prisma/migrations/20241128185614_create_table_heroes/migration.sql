-- CreateTable
CREATE TABLE `heroes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `civilName` VARCHAR(100) NOT NULL,
    `heroName` VARCHAR(100) NOT NULL,
    `age` INTEGER NOT NULL,
    `team` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
