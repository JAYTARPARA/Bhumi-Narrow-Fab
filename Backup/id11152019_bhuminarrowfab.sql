-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 24, 2019 at 10:52 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id11152019_bhuminarrowfab`
--

-- --------------------------------------------------------

--
-- Table structure for table `materials`
--

CREATE TABLE `materials` (
  `id` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `material_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `company` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `materials`
--

INSERT INTO `materials` (`id`, `image`, `name`, `price`, `material_id`, `company`, `status`) VALUES
(1, 'AA1.png', 'Test Material', '150/27M', 'AA1', 'Bhumi Narrow Fab', 1),
(2, 'AA2.png', 'Test Material', '150/27M', 'AA2', 'Matrushree Lace', 1),
(3, 'AA3.png', 'Test Material', '80/24M', 'AA3', 'Bhumi Narrow Fab', 1),
(4, 'AB8.png', 'Test Material', '155/100M', 'AB8', 'Matrushree Lace', 1),
(5, 'AB14.png', 'Test Material', '100/100M', 'AB14', 'Bhumi Narrow Fab', 1),
(6, 'AE1.png', 'Test Material', '110/45M', 'AE1', 'Matrushree Lace', 1),
(7, 'AF3.png', 'Test Material', '60/45M', 'AF3', 'Matrushree Lace', 1),
(8, 'AI3.png', 'Test Material', '70/45M', 'AI3', 'Bhumi Narrow Fab', 1),
(9, 'AJ8.png', 'Test Material', '65/45M', 'AJ8', 'Matrushree Lace', 1),
(10, 'AM1.png', 'Test Material', '120/45M', 'AM1', 'Bhumi Narrow Fab', 1),
(11, 'AO1.png', 'Test Material', '110/27M', 'AO1', 'Matrushree Lace', 1),
(12, 'AP7.png', 'Test Material', '100/270M', 'AP7', 'Bhumi Narrow Fab', 1),
(13, 'AQ4.png', 'Test Material', '85/27M', 'AQ4', 'Matrushree Lace', 1),
(15, 'AU4.png', 'Test Material', '85/27M', 'AU4', 'Bhumi Narrow Fab', 1),
(30, '1571316862.jpg', 'new', '550/70M', 'TEST', 'Bhumi Narrow Fab', 0);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `order_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mobile` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `material_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sample` int(11) NOT NULL,
  `piece` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `order_id`, `mobile`, `material_id`, `quantity`, `price`, `sample`, `piece`, `status`, `created_at`) VALUES
(1, 1, '616294787265', '9824868568', 15, 256, '85/27M', 0, 10, 0, '2019-10-11 16:59:41'),
(2, 1, '244473495520', '9824868568', 15, 125, '85/27M', 0, 8, 0, '2019-10-12 04:48:50'),
(4, 1, '382414571009', '9824868568', 15, 125, '85/27M', 1, 5, 0, '2019-10-12 05:16:19'),
(5, 1, '618113027419', '9824868568', 15, 255, '85/27M', 0, 6, 0, '2019-10-12 05:33:32'),
(6, 1, '540721813682', '9824868568', 15, 566, '85/27M', 0, 7, 2, '2019-10-12 05:56:20'),
(7, 1, '433278862386', '9824868568', 15, 565, '85/27M', 0, 9, 1, '2019-10-12 06:06:37'),
(8, 1, '459060568828', '9824868568', 15, 125, '85/27M', 0, 10, 0, '2019-10-12 07:16:59'),
(9, 1, '822801986552', '9824868568', 12, 5460, '100/27M', 1, 6, 2, '2019-10-12 17:05:54'),
(11, 3, '944474291956', '9824868568', 8, 5000, '70/45M', 1, 4, 1, '2019-10-12 17:24:41'),
(15, 4, '019749365740', '8460224419', 8, 1500, '70/45M', 1, 5, 0, '2019-10-14 14:58:43'),
(16, 4, '629667841431', '8460224419', 6, 5000, '110/45M', 0, 2, 0, '2019-10-14 15:00:30'),
(17, 4, '039163164123', '8460224419', 12, 525, '100/27M', 1, 6, 2, '2019-10-16 14:16:46'),
(19, 4, '783636499450', '8460224419', 15, 250, '85/27M', 1, 8, 2, '2019-10-18 15:13:11'),
(21, 9, '597573888951', '7359646977', 15, 28, '85/27M', 1, 4, 0, '2019-10-19 13:32:09'),
(22, 7, '120290816498', '9106141050', 15, 125, '85/27M', 1, 8, 0, '2019-10-19 17:10:22'),
(23, 10, '293171465282', '8460540302', 15, 27, '85/27M', 1, 10, 1, '2019-10-21 12:33:36'),
(24, 4, '431205608213', '8460224419', 15, 1250, '85/27M', 5, 0, 0, '2019-10-21 13:33:01'),
(25, 10, '539488776446', '8460540302', 15, 9, '85/27M', 1, 2, 0, '2019-10-21 19:53:53'),
(26, 10, '454047109951', '8460540302', 15, 500, '85/27M', 1, 0, 2, '2019-10-23 13:34:17');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `mobile` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address` text COLLATE utf8_unicode_ci NOT NULL,
  `gst` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `mobile`, `name`, `address`, `gst`, `status`) VALUES
(1, '9824868568', 'Jay Tarpara', '703 - Shubham Elegance, Near Dabholi Bridge, Singanpore - 395004', 'AA18373783922JA', 1),
(4, '8460224419', 'Jay Vodafone', '209 - Oberon, Pal Gam, Adajan', '22AAAAA0000A1ZW', 1),
(6, '9999999999', 'Test By Jay', 'Surat City', 'SADFASD1234123S', 0),
(7, '9106141050', 'Jay JIO', '703 - Shubham Elegance\nNear Dabholi Bridge', '24APDPL7899A1ZR', 1),
(9, '7359646977', 'Jigar Tarpara', '209 Oberon', '24APDPL7899A1ZR', 1),
(10, '8460540302', 'Purvish Lukhi', '1103 Shubham Elegance', '24ADFFS7899XL1H', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `materials`
--
ALTER TABLE `materials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `order_id` (`order_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mobile` (`mobile`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `materials`
--
ALTER TABLE `materials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
