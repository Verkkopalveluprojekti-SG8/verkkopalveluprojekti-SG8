-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 18, 2023 at 11:49 AM
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
-- Database: `juomat`
--

-- --------------------------------------------------------

--
-- Table structure for table `tuotteet`
--

CREATE TABLE `tuotteet` (
  `id` int(11) NOT NULL,
  `nimi` varchar(255) NOT NULL,
  `hinta` varchar(1000) NOT NULL,
  `alkoholi` decimal(4,2) DEFAULT NULL,
  `kategoria` varchar(255) NOT NULL,
  `koko` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tuotteet`
--

INSERT INTO `tuotteet` (`id`, `nimi`, `hinta`, `alkoholi`, `kategoria`, `koko`) VALUES
(1, 'välivesi', '1.09', '0.00', 'alkoholittomat', '0.33'),
(2, 'Nalle', '1.29', '4.60', 'miedot', '0.33'),
(3, 'votka', '14.99', '40.00', 'vahvat', '0.50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tuotteet`
--
ALTER TABLE `tuotteet`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tuotteet`
--
ALTER TABLE `tuotteet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
