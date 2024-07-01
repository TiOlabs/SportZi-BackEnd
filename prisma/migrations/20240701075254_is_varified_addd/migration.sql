-- CreateTable
CREATE TABLE `User` (
    `user_id` VARCHAR(191) NOT NULL,
    `role` ENUM('PLAYER', 'COACH', 'MANAGER', 'ADMIN', 'SUPERADMIN') NOT NULL,
    `firstname` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `DOB` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NULL,
    `accountNumber` VARCHAR(191) NULL,
    `is_active` VARCHAR(191) NOT NULL DEFAULT 'active',
    `user_image` VARCHAR(191) NULL DEFAULT 'sportzi/hpcqj2p2rzdnmmwmnriu',
    `is_verified` BOOLEAN NULL DEFAULT false,
    `address` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `contry` VARCHAR(191) NULL,
    `Discription` VARCHAR(191) NOT NULL DEFAULT 'Add your Discription',
    `resetPasswordToken` VARCHAR(191) NULL,

    UNIQUE INDEX `User_user_id_key`(`user_id`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Player` (
    `player_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Player_player_id_key`(`player_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Coach` (
    `coach_id` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',
    `sport_id` VARCHAR(191) NOT NULL,
    `rate` INTEGER NULL,
    `averageRate` DOUBLE NOT NULL DEFAULT 0.0,
    `short_desctiption` VARCHAR(191) NOT NULL DEFAULT 'i am a Coach',

    UNIQUE INDEX `Coach_coach_id_key`(`coach_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArcadeManager` (
    `manager_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ArcadeManager_manager_id_key`(`manager_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `admin_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Admin_admin_id_key`(`admin_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SuperAdmin` (
    `superAdmin_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SuperAdmin_superAdmin_id_key`(`superAdmin_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ZoneDiscount` (
    `discount_id` VARCHAR(191) NOT NULL,
    `discount_percentage` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `zone_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ZoneDiscount_discount_id_key`(`discount_id`),
    UNIQUE INDEX `ZoneDiscount_zone_id_key`(`zone_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PackageDiscount` (
    `discount_id` VARCHAR(191) NOT NULL,
    `discount_percentage` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `discount_image` VARCHAR(191) NOT NULL,
    `package_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PackageDiscount_discount_id_key`(`discount_id`),
    UNIQUE INDEX `PackageDiscount_package_id_key`(`package_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Feedbacks` (
    `feedbacks_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Feedbacks_feedbacks_id_key`(`feedbacks_id`),
    PRIMARY KEY (`feedbacks_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CoachFeedbacks` (
    `coach_feedback_id` VARCHAR(191) NOT NULL,
    `rate` DOUBLE NOT NULL,
    `coach_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CoachFeedbacks_coach_feedback_id_key`(`coach_feedback_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArcadeFeedbacks` (
    `arcade_feedback_id` VARCHAR(191) NOT NULL,
    `rate` DOUBLE NOT NULL,
    `arcade_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ArcadeFeedbacks_arcade_feedback_id_key`(`arcade_feedback_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Arcade` (
    `arcade_id` VARCHAR(191) NOT NULL,
    `arcade_name` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `arcade_email` VARCHAR(191) NULL,
    `manager_id` VARCHAR(191) NOT NULL,
    `open_time` VARCHAR(191) NULL,
    `close_time` VARCHAR(191) NULL,
    `arcade_image` VARCHAR(191) NOT NULL DEFAULT 'Your image',
    `distription` VARCHAR(191) NOT NULL DEFAULT 'Add your Discription',
    `averageRate` DOUBLE NOT NULL DEFAULT 0.0,

    UNIQUE INDEX `Arcade_arcade_id_key`(`arcade_id`),
    UNIQUE INDEX `Arcade_arcade_email_key`(`arcade_email`),
    PRIMARY KEY (`arcade_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CoachBookingDetails` (
    `booking_id` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',
    `created_at` VARCHAR(191) NOT NULL,
    `canceled_at` DATETIME(3) NOT NULL,
    `participant_count` INTEGER NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `time` VARCHAR(191) NOT NULL,
    `full_amount` DOUBLE NOT NULL,
    `coach_id` VARCHAR(191) NOT NULL,
    `player_id` VARCHAR(191) NOT NULL,
    `zone_id` VARCHAR(191) NOT NULL,
    `arcade_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CoachBookingDetails_booking_id_key`(`booking_id`),
    UNIQUE INDEX `CoachBookingDetails_player_id_created_at_key`(`player_id`, `created_at`),
    PRIMARY KEY (`booking_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Package` (
    `package_id` VARCHAR(191) NOT NULL,
    `package_name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `package_image` VARCHAR(191) NOT NULL,
    `rate_per_person` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `canceled_at` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'open',
    `arcade_id` VARCHAR(191) NOT NULL,
    `zone_id` VARCHAR(191) NOT NULL,
    `percentageForCoach` INTEGER NOT NULL,

    UNIQUE INDEX `Package_package_id_key`(`package_id`),
    PRIMARY KEY (`package_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Zone` (
    `zone_id` VARCHAR(191) NOT NULL,
    `zone_name` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'open',
    `capacity` INTEGER NOT NULL,
    `rate` INTEGER NOT NULL,
    `full_zone_rate` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL DEFAULT 'Add your Discription',
    `way_of_booking` ENUM('full', 'person_by_person', 'Both') NOT NULL,
    `zone_image` VARCHAR(191) NOT NULL,
    `open_time` VARCHAR(191) NOT NULL,
    `close_time` VARCHAR(191) NOT NULL,
    `arcade_id` VARCHAR(191) NOT NULL,
    `sport_id` VARCHAR(191) NOT NULL,
    `time_Step` DOUBLE NOT NULL,

    UNIQUE INDEX `Zone_zone_id_key`(`zone_id`),
    PRIMARY KEY (`zone_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ZoneBookingDetails` (
    `zone_booking_id` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'success',
    `created_at` VARCHAR(191) NOT NULL,
    `canceled_at` DATETIME(3) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `time` VARCHAR(191) NOT NULL,
    `full_amount` DOUBLE NOT NULL,
    `participant_count` INTEGER NOT NULL,
    `booking_type` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `zone_id` VARCHAR(191) NOT NULL,
    `way_of_booking` ENUM('full', 'person_by_person', 'Both') NOT NULL,

    UNIQUE INDEX `ZoneBookingDetails_zone_booking_id_key`(`zone_booking_id`),
    UNIQUE INDEX `ZoneBookingDetails_user_id_created_at_key`(`user_id`, `created_at`),
    PRIMARY KEY (`zone_booking_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sport` (
    `sport_id` VARCHAR(191) NOT NULL,
    `sport_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Sport_sport_id_key`(`sport_id`),
    UNIQUE INDEX `Sport_sport_name_key`(`sport_name`),
    PRIMARY KEY (`sport_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Availiability` (
    `coach_id` VARCHAR(191) NOT NULL,
    `day` ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday') NOT NULL,
    `time` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Availiability_coach_id_day_time_key`(`coach_id`, `day`, `time`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CoachAssignDetailsForArcade` (
    `coach_id` VARCHAR(191) NOT NULL,
    `arcade_id` VARCHAR(191) NOT NULL,
    `duration` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `assigned_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `canceled_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `CoachAssignDetailsForArcade_coach_id_arcade_id_key`(`coach_id`, `arcade_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CoachAEnrollDetailsForPackage` (
    `coach_id` VARCHAR(191) NOT NULL,
    `package_id` VARCHAR(191) NOT NULL,
    `duration` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `applied_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `canceled_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `CoachAEnrollDetailsForPackage_coach_id_package_id_key`(`coach_id`, `package_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PackageEnrollDetailsForPlayer` (
    `player_id` VARCHAR(191) NOT NULL,
    `package_id` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'success',
    `enrolled_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `canceled_at` DATETIME(3) NOT NULL,
    `rate` INTEGER NOT NULL,
    `duration` INTEGER NOT NULL,

    UNIQUE INDEX `PackageEnrollDetailsForPlayer_player_id_package_id_key`(`player_id`, `package_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserPhone` (
    `phone_number` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `UserPhone_phone_number_user_id_key`(`phone_number`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Achivement` (
    `user_id` VARCHAR(191) NOT NULL,
    `achivement_details` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Achivement_user_id_achivement_details_key`(`user_id`, `achivement_details`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FeedbackComments` (
    `feedback_id` VARCHAR(191) NOT NULL,
    `comment` VARCHAR(500) NOT NULL,

    UNIQUE INDEX `FeedbackComments_feedback_id_key`(`feedback_id`),
    UNIQUE INDEX `FeedbackComments_feedback_id_comment_key`(`feedback_id`, `comment`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CoachBookingDayAndTime` (
    `coach_booking_id` VARCHAR(191) NOT NULL,
    `day` VARCHAR(191) NOT NULL,
    `time` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CoachBookingDayAndTime_coach_booking_id_key`(`coach_booking_id`),
    UNIQUE INDEX `CoachBookingDayAndTime_day_key`(`day`),
    UNIQUE INDEX `CoachBookingDayAndTime_time_key`(`time`),
    UNIQUE INDEX `CoachBookingDayAndTime_coach_booking_id_day_time_key`(`coach_booking_id`, `day`, `time`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArcadePhone` (
    `phone_number` VARCHAR(191) NOT NULL,
    `arcade_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ArcadePhone_phone_number_arcade_id_key`(`phone_number`, `arcade_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PackageDayAndTime` (
    `package_id` VARCHAR(191) NOT NULL,
    `day` ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday') NOT NULL,
    `time` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PackageDayAndTime_package_id_day_time_key`(`package_id`, `day`, `time`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ZoneRejectDayAndTime` (
    `zone_id` VARCHAR(191) NOT NULL,
    `day` ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday') NOT NULL,
    `time` VARCHAR(191) NOT NULL,
    `reason` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ZoneRejectDayAndTime_zone_id_day_time_key`(`zone_id`, `day`, `time`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ZoneRejectDateAndTime` (
    `zone_id` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `time` VARCHAR(191) NOT NULL,
    `reason` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ZoneRejectDateAndTime_zone_id_date_time_key`(`zone_id`, `date`, `time`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `userphoto` (
    `user_id` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `userphoto_image_key`(`image`),
    UNIQUE INDEX `userphoto_user_id_image_key`(`user_id`, `image`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Arcadephoto` (
    `arcade_id` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Arcadephoto_image_key`(`image`),
    UNIQUE INDEX `Arcadephoto_arcade_id_image_key`(`arcade_id`, `image`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReportUser` (
    `report_id` VARCHAR(191) NOT NULL,
    `reporter_user_id` VARCHAR(191) NOT NULL,
    `victim_user_id` VARCHAR(191) NOT NULL,
    `report_reason` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ReportUser_report_id_key`(`report_id`),
    PRIMARY KEY (`report_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReportArcade` (
    `report_id` VARCHAR(191) NOT NULL,
    `reporter_user_id` VARCHAR(191) NOT NULL,
    `victim_arcade_id` VARCHAR(191) NOT NULL,
    `report_reason` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ReportArcade_report_id_key`(`report_id`),
    PRIMARY KEY (`report_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArcadeCancelBookings` (
    `booking_id` VARCHAR(191) NOT NULL,
    `reason` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ArcadeCancelBookings_booking_id_key`(`booking_id`),
    PRIMARY KEY (`booking_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CoachCancelBookings` (
    `booking_id` VARCHAR(191) NOT NULL,
    `reason` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CoachCancelBookings_booking_id_key`(`booking_id`),
    PRIMARY KEY (`booking_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PackageCancelEnrollments` (
    `reason` VARCHAR(191) NOT NULL,
    `player_id` VARCHAR(191) NOT NULL,
    `package_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PackageCancelEnrollments_player_id_package_id_key`(`player_id`, `package_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NotificationForUser` (
    `notification_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `is_read` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `NotificationForUser_notification_id_key`(`notification_id`),
    PRIMARY KEY (`notification_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NotificationForArcade` (
    `notification_id` VARCHAR(191) NOT NULL,
    `arcade_id` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `is_read` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `NotificationForArcade_notification_id_key`(`notification_id`),
    PRIMARY KEY (`notification_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArcadeBooking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `booking_date` VARCHAR(191) NOT NULL,
    `booking_time` VARCHAR(191) NOT NULL,
    `zone` VARCHAR(191) NOT NULL,
    `participant_count` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `cancel_by_admin` BOOLEAN NOT NULL,
    `cancel_by_player` BOOLEAN NOT NULL,
    `cancel_by_arcade` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArcadeRatings` (
    `rating_id` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL,
    `discription` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ArcadeRatings_rating_id_key`(`rating_id`),
    PRIMARY KEY (`rating_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `paymentTest` (
    `payment_id` INTEGER NOT NULL AUTO_INCREMENT,
    `oder_id` VARCHAR(191) NOT NULL,
    `items` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `currency` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `hash` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',

    PRIMARY KEY (`payment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CoachAssignDetails` (
    `assign_id` INTEGER NOT NULL AUTO_INCREMENT,
    `rate` VARCHAR(191) NOT NULL,
    `duration` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `coach_image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`assign_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
