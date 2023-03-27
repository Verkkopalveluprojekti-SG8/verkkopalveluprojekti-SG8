-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2023 at 12:59 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ryyst`
--

-- --------------------------------------------------------

--
-- Table structure for table `alkoholittomat`
--

CREATE TABLE `alkoholittomat` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` smallint(5) UNSIGNED NOT NULL,
  `alcohol` smallint(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alkoholittomat`
--

INSERT INTO `alkoholittomat` (`id`, `name`, `price`, `alcohol`) VALUES
(1, NULL, 0, 1),
(2, NULL, 0, 2),
(3, NULL, 0, 3);

-- --------------------------------------------------------

--
-- Table structure for table `liköörit`
--

CREATE TABLE `liköörit` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` smallint(5) UNSIGNED NOT NULL,
  `alcohol` smallint(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `liköörit`
--

INSERT INTO `liköörit` (`id`, `name`, `price`, `alcohol`) VALUES
(1, NULL, 0, 1),
(2, NULL, 0, 2),
(3, NULL, 0, 3);

-- --------------------------------------------------------

--
-- Table structure for table `miedot_juomat`
--

CREATE TABLE `miedot_juomat` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` smallint(5) UNSIGNED NOT NULL,
  `alcohol` smallint(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `miedot_juomat`
--

INSERT INTO `miedot_juomat` (`id`, `name`, `price`, `alcohol`) VALUES
(1, NULL, 0, 1),
(2, NULL, 0, 2),
(3, NULL, 0, 3);

-- --------------------------------------------------------

--
-- Table structure for table `muut`
--

CREATE TABLE `muut` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` smallint(5) UNSIGNED NOT NULL,
  `alcohol` smallint(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `muut`
--

INSERT INTO `muut` (`id`, `name`, `price`, `alcohol`) VALUES
(1, NULL, 0, 1),
(2, NULL, 0, 2),
(3, NULL, 0, 3);

-- --------------------------------------------------------

--
-- Table structure for table `viinit`
--

CREATE TABLE `viinit` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` smallint(5) UNSIGNED NOT NULL,
  `alcohol` smallint(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `viinit`
--

INSERT INTO `viinit` (`id`, `name`, `price`, `alcohol`) VALUES
(1, NULL, 0, 1),
(2, NULL, 0, 2),
(3, NULL, 0, 3);

-- --------------------------------------------------------

--
-- Table structure for table `vodkat_ja_viinat`
--

CREATE TABLE `vodkat_ja_viinat` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` smallint(5) UNSIGNED NOT NULL,
  `alcohol` smallint(5) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vodkat_ja_viinat`
--

INSERT INTO `vodkat_ja_viinat` (`id`, `name`, `price`, `alcohol`) VALUES
(1, NULL, 0, 1),
(2, NULL, 0, 2),
(3, NULL, 0, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alkoholittomat`
--
ALTER TABLE `alkoholittomat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `liköörit`
--
ALTER TABLE `liköörit`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `miedot_juomat`
--
ALTER TABLE `miedot_juomat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `muut`
--
ALTER TABLE `muut`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `viinit`
--
ALTER TABLE `viinit`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vodkat_ja_viinat`
--
ALTER TABLE `vodkat_ja_viinat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alkoholittomat`
--
ALTER TABLE `alkoholittomat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `liköörit`
--
ALTER TABLE `liköörit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `miedot_juomat`
--
ALTER TABLE `miedot_juomat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `muut`
--
ALTER TABLE `muut`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `viinit`
--
ALTER TABLE `viinit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `vodkat_ja_viinat`
--
ALTER TABLE `vodkat_ja_viinat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
