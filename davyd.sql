-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 14-Nov-2023 às 12:45
-- Versão do servidor: 10.4.28-MariaDB
-- versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `davyd`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `member`
--

CREATE TABLE `member` (
  `id` int(11) NOT NULL,
  `name` int(11) NOT NULL,
  `teefone` int(11) NOT NULL,
  `morada` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `members`
--

CREATE TABLE `members` (
  `id` bigint(11) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `telefone` decimal(10,0) DEFAULT NULL,
  `morada` varchar(160) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `members`
--

INSERT INTO `members` (`id`, `name`, `telefone`, `morada`) VALUES
(1, 'Marcelo Cossa', 871234567, 'Patrice Lumumba'),
(3, 'Jossefa Armando', 877654321, 'Fidel Castro Bairro 1'),
(4, 'Marcos Boaventura', 871654321, 'Inhamissa Bairro 3'),
(6, 'Cacilda Andre', 851234321, 'Bilene Bairro A'),
(7, 'Maria Joana', 836579287, 'Manjacaze Bairro C'),
(8, 'Jochua Maria', 879090909, 'Chongoene'),
(9, 'Mateus Junior', 872625629, 'Ciaiai');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `members`
--
ALTER TABLE `members`
  MODIFY `id` bigint(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
