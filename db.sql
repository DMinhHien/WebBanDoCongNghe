USE [master]
GO
/****** Object:  Database [WebBanDoCongNghe]    Script Date: 12/27/2024 11:15:36 AM ******/
CREATE DATABASE [WebBanDoCongNghe]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'WebBanDoCongNghe', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\WebBanDoCongNghe.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'WebBanDoCongNghe_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\WebBanDoCongNghe_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [WebBanDoCongNghe] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [WebBanDoCongNghe].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [WebBanDoCongNghe] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [WebBanDoCongNghe] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [WebBanDoCongNghe] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [WebBanDoCongNghe] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [WebBanDoCongNghe] SET ARITHABORT OFF 
GO
ALTER DATABASE [WebBanDoCongNghe] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [WebBanDoCongNghe] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [WebBanDoCongNghe] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [WebBanDoCongNghe] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [WebBanDoCongNghe] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [WebBanDoCongNghe] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [WebBanDoCongNghe] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [WebBanDoCongNghe] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [WebBanDoCongNghe] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [WebBanDoCongNghe] SET  ENABLE_BROKER 
GO
ALTER DATABASE [WebBanDoCongNghe] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [WebBanDoCongNghe] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [WebBanDoCongNghe] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [WebBanDoCongNghe] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [WebBanDoCongNghe] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [WebBanDoCongNghe] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [WebBanDoCongNghe] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [WebBanDoCongNghe] SET RECOVERY FULL 
GO
ALTER DATABASE [WebBanDoCongNghe] SET  MULTI_USER 
GO
ALTER DATABASE [WebBanDoCongNghe] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [WebBanDoCongNghe] SET DB_CHAINING OFF 
GO
ALTER DATABASE [WebBanDoCongNghe] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [WebBanDoCongNghe] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [WebBanDoCongNghe] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [WebBanDoCongNghe] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'WebBanDoCongNghe', N'ON'
GO
ALTER DATABASE [WebBanDoCongNghe] SET QUERY_STORE = ON
GO
ALTER DATABASE [WebBanDoCongNghe] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [WebBanDoCongNghe]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 12/27/2024 11:15:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoleClaims]    Script Date: 12/27/2024 11:15:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoleClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetRoleClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 12/27/2024 11:15:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoles](
	[Id] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](256) NULL,
	[NormalizedName] [nvarchar](256) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 12/27/2024 11:15:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 12/27/2024 11:15:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserLogins](
	[LoginProvider] [nvarchar](450) NOT NULL,
	[ProviderKey] [nvarchar](450) NOT NULL,
	[ProviderDisplayName] [nvarchar](max) NULL,
	[UserId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY CLUSTERED 
(
	[LoginProvider] ASC,
	[ProviderKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 12/27/2024 11:15:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserRoles](
	[UserId] [nvarchar](450) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserRoles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 12/27/2024 11:15:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUsers](
	[Id] [nvarchar](450) NOT NULL,
	[birthDate] [datetime2](7) NULL,
	[Address] [nvarchar](max) NULL,
	[UserName] [nvarchar](256) NULL,
	[NormalizedUserName] [nvarchar](256) NULL,
	[Email] [nvarchar](256) NULL,
	[NormalizedEmail] [nvarchar](256) NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[SecurityStamp] [nvarchar](max) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
	[PhoneNumber] [nvarchar](max) NULL,
	[PhoneNumberConfirmed] [bit] NOT NULL,
	[TwoFactorEnabled] [bit] NOT NULL,
	[LockoutEnd] [datetimeoffset](7) NULL,
	[LockoutEnabled] [bit] NOT NULL,
	[AccessFailedCount] [int] NOT NULL,
	[AccountName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_AspNetUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserTokens]    Script Date: 12/27/2024 11:15:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserTokens](
	[UserId] [nvarchar](450) NOT NULL,
	[LoginProvider] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](450) NOT NULL,
	[Value] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserTokens] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[LoginProvider] ASC,
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cart]    Script Date: 12/27/2024 11:15:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cart](
	[id] [nvarchar](450) NOT NULL,
	[userId] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Cart] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CartDetail]    Script Date: 12/27/2024 11:15:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CartDetail](
	[id] [nvarchar](450) NOT NULL,
	[idCart] [nvarchar](max) NOT NULL,
	[idProduct] [nvarchar](max) NOT NULL,
	[quantity] [int] NOT NULL,
 CONSTRAINT [PK_CartDetail] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 12/27/2024 11:15:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[id] [nvarchar](450) NOT NULL,
	[name] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Comment]    Script Date: 12/27/2024 11:15:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comment](
	[id] [nvarchar](450) NOT NULL,
	[userId] [nvarchar](max) NOT NULL,
	[content] [nvarchar](max) NOT NULL,
	[productId] [nvarchar](max) NOT NULL,
	[rating] [float] NOT NULL,
	[date] [datetime] NOT NULL,
 CONSTRAINT [PK_Comment] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CommentLike]    Script Date: 12/27/2024 11:15:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CommentLike](
	[id] [nvarchar](450) NOT NULL,
	[userId] [nvarchar](max) NOT NULL,
	[idComment] [nvarchar](max) NOT NULL,
	[date] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_CommentLike] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 12/27/2024 11:15:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[id] [nvarchar](450) NOT NULL,
	[productName] [nvarchar](max) NOT NULL,
	[image] [nvarchar](max) NOT NULL,
	[unitPrice] [float] NOT NULL,
	[categoryId] [nvarchar](max) NOT NULL,
	[quantity] [int] NOT NULL,
	[idShop] [nvarchar](max) NOT NULL,
	[status] [nvarchar](max) NOT NULL,
	[description] [nvarchar](max) NOT NULL,
	[rating] [float] NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Receipt]    Script Date: 12/27/2024 11:15:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Receipt](
	[id] [nvarchar](450) NOT NULL,
	[userId] [nvarchar](max) NOT NULL,
	[date] [datetime] NOT NULL,
 CONSTRAINT [PK_Receipt] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ReceiptDetail]    Script Date: 12/27/2024 11:15:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReceiptDetail](
	[id] [nvarchar](450) NOT NULL,
	[idReceipt] [nvarchar](max) NOT NULL,
	[idProduct] [nvarchar](max) NOT NULL,
	[quantity] [int] NOT NULL,
 CONSTRAINT [PK_ReceiptDetail] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Search]    Script Date: 12/27/2024 11:15:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Search](
	[id] [nvarchar](450) NOT NULL,
	[userId] [nvarchar](max) NOT NULL,
	[content] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Search] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Shop]    Script Date: 12/27/2024 11:15:36 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Shop](
	[id] [nvarchar](450) NOT NULL,
	[userId] [nvarchar](max) NOT NULL,
	[name] [nvarchar](max) NOT NULL,
	[address] [nvarchar](max) NOT NULL,
	[rating] [float] NOT NULL,
	[image] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Shop] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20241103141431_Init', N'8.0.10')
GO
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'42a5f2d0-a4ec-4b4a-a29f-3a1e7cf2349f', N'User', N'USER', NULL)
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'f98f0309-560f-49a1-81bf-277971d8d469', N'Admin', N'ADMIN', NULL)
GO
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'09bccb4f-9f78-4d96-bfed-d39500ec57d6', N'42a5f2d0-a4ec-4b4a-a29f-3a1e7cf2349f')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'18faa81a-ccc6-4034-9384-53bfd36ec5e9', N'42a5f2d0-a4ec-4b4a-a29f-3a1e7cf2349f')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'1b2c7246-a64c-408a-89a3-838ea0995217', N'42a5f2d0-a4ec-4b4a-a29f-3a1e7cf2349f')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'1c61bf1c-5da7-4edb-9ea8-340faa46ab94', N'42a5f2d0-a4ec-4b4a-a29f-3a1e7cf2349f')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'405c36f2-d449-49a6-9033-4df8e0249f11', N'42a5f2d0-a4ec-4b4a-a29f-3a1e7cf2349f')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'5cd122ce-90a3-44e3-86a8-965440e519b7', N'42a5f2d0-a4ec-4b4a-a29f-3a1e7cf2349f')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'7a62ff97-df85-4c4c-8d20-6b2674d9c007', N'42a5f2d0-a4ec-4b4a-a29f-3a1e7cf2349f')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'd2591d97-bbd3-490c-9d53-a7316e9e0e95', N'42a5f2d0-a4ec-4b4a-a29f-3a1e7cf2349f')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'd7090710-365d-4c05-9d98-1f7c0a9eecab', N'42a5f2d0-a4ec-4b4a-a29f-3a1e7cf2349f')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'c0492989-731f-494d-a6d6-6972b9eeeaf8', N'f98f0309-560f-49a1-81bf-277971d8d469')
GO
INSERT [dbo].[AspNetUsers] ([Id], [birthDate], [Address], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [AccountName]) VALUES (N'09bccb4f-9f78-4d96-bfed-d39500ec57d6', CAST(N'2024-12-23T11:12:12.9450000' AS DateTime2), N'128 Nguyen Thi Dinh', N'step@gmail.com', N'STEP@GMAIL.COM', N'step@gmail.com', N'STEP@GMAIL.COM', 0, N'AQAAAAIAAYagAAAAEC+75cXnsgP8HatCItVkkaWsk08+RCzjh5gRK/GImq0IjPEETYx83WKmiS/zck9+yw==', N'2KYR2HLT4CJII6W524CAW3HRRJAZA6J3', N'892ac94a-6228-46c2-97d1-2c9a57fb4075', N'0123456788', 0, 0, NULL, 1, 0, N'Step')
INSERT [dbo].[AspNetUsers] ([Id], [birthDate], [Address], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [AccountName]) VALUES (N'18faa81a-ccc6-4034-9384-53bfd36ec5e9', CAST(N'2004-10-14T00:00:00.0000000' AS DateTime2), N'128 Nguyen Thi Dinh', N'duongminhhien14@gmail.com', N'DUONGMINHHIEN14@GMAIL.COM', N'duongminhhien14@gmail.com', N'DUONGMINHHIEN14@GMAIL.COM', 0, N'AQAAAAIAAYagAAAAEGV8SasRQrtJnm1ppaKOd1dObavuYI79UkDyy1DgFqMOQMRyB+hCUzWotQPX9M5cMg==', N'N7XJIGQNOJTN6N63WEESP6EY22AU74IV', N'0f6bafa0-952f-4b0c-8452-fa72f27f8092', NULL, 0, 0, NULL, 1, 0, N'Minh Hien')
INSERT [dbo].[AspNetUsers] ([Id], [birthDate], [Address], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [AccountName]) VALUES (N'1b2c7246-a64c-408a-89a3-838ea0995217', CAST(N'1970-01-01T00:00:00.0000000' AS DateTime2), N'40 Nguyễn Hữu Cảnh', N'hien@gmail.com', N'HIEN@GMAIL.COM', N'hien@gmail.com', N'HIEN@GMAIL.COM', 0, N'AQAAAAIAAYagAAAAENa4dxEgCPSHwA+YWT+g9pLpSyjOSimcuk4aasRTt1Vy+Vhc4Su51fBjKksYeJlIaA==', N'JFJ2KDNDNSC2NV6OTTW6URLUMAC5P4UC', N'78ba3a16-4414-4041-9dbf-91d15369b22c', NULL, 0, 0, NULL, 1, 0, N'Minh Hien')
INSERT [dbo].[AspNetUsers] ([Id], [birthDate], [Address], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [AccountName]) VALUES (N'1c61bf1c-5da7-4edb-9ea8-340faa46ab94', CAST(N'2013-12-25T17:00:00.0000000' AS DateTime2), N'128 Nguyen Thi Dinh', N'votranchi112004@gmail.com', N'VOTRANCHI112004@GMAIL.COM', N'votranchi112004@gmail.com', N'VOTRANCHI112004@GMAIL.COM', 0, N'AQAAAAIAAYagAAAAEIMBuIS02DbIQYGAvi7vDVG61ljO1qbH9MjyqnuVw0kjHIPOX+cr3RXxdOvDTIFilQ==', N'5SGOBRBG3QSYPHHY35ITUSKS6AS7PRK2', N'60599eb3-328c-4a76-a481-1df50898521e', N'0908224076', 0, 0, NULL, 1, 0, N'ChiTatHello')
INSERT [dbo].[AspNetUsers] ([Id], [birthDate], [Address], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [AccountName]) VALUES (N'405c36f2-d449-49a6-9033-4df8e0249f11', CAST(N'2005-02-24T17:00:00.0000000' AS DateTime2), N'34 Nguyễn Hữu Cảnh', N'thevinh@gmail.com', N'THEVINH@GMAIL.COM', N'thevinh@gmail.com', N'THEVINH@GMAIL.COM', 0, N'AQAAAAIAAYagAAAAEBpi4zt4STnYUwsiNhqriWwmRGho0onj7l4Iws/3SXd2U7YR9owgV4BqvZX9MtKgQQ==', N'X5DNFFX6AMWDAGSOKJRRLV6D56RECARX', N'e7b1c954-5ad5-4f0a-a82b-564f622f9889', N'089890039', 0, 0, NULL, 1, 0, N'Lưu Nguyễn Thế Vinh')
INSERT [dbo].[AspNetUsers] ([Id], [birthDate], [Address], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [AccountName]) VALUES (N'5cd122ce-90a3-44e3-86a8-965440e519b7', CAST(N'2004-06-14T17:00:00.0000000' AS DateTime2), N'Bình Dương', N'duongtx1@gmail.com', N'DUONGTX1@GMAIL.COM', N'duongtx1@gmail.com', N'DUONGTX1@GMAIL.COM', 0, N'AQAAAAIAAYagAAAAEBXX234CqHsdc204q7g2k9Mtem2vfzJ9zzZsJvTl0j/6ujeFEb/Zhk2pnTRNl1yiXQ==', N'LU5OKBYENAOLLBJSUHZNYDUPP55VYKGG', N'591b4f17-894d-4431-900a-47b2f5b17255', N'012345678', 0, 0, NULL, 1, 0, N'Trịnh Xuân Dương')
INSERT [dbo].[AspNetUsers] ([Id], [birthDate], [Address], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [AccountName]) VALUES (N'7a62ff97-df85-4c4c-8d20-6b2674d9c007', CAST(N'2015-06-08T17:00:00.0000000' AS DateTime2), N'Quận 12,TPHCM', N'rudi@gmail.com', N'RUDI@GMAIL.COM', N'rudi@gmail.com', N'RUDI@GMAIL.COM', 0, N'AQAAAAIAAYagAAAAEF5MufG6WuYUqL0Ji2nrZj0SxoQZMVi35+QTmf/TWh3fFB3TKrkgUJNzghBjgj2k3g==', N'HMNBXKHV7RU6TVP5CSIBEBVQ2VWMHO2K', N'12e2ac53-7252-4f90-8672-e39edbce563c', N'08888888', 0, 0, NULL, 1, 0, N'Rudi')
INSERT [dbo].[AspNetUsers] ([Id], [birthDate], [Address], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [AccountName]) VALUES (N'c0492989-731f-494d-a6d6-6972b9eeeaf8', CAST(N'1970-01-01T00:00:00.0000000' AS DateTime2), N'128 Nguyen Thi Dinh', N'admin@gmail.com', N'ADMIN@GMAIL.COM', N'admin@gmail.com', N'ADMIN@GMAIL.COM', 0, N'AQAAAAIAAYagAAAAEB3v9tM1qJQYLwEgAfVnWbI2qwfPCkJrxYujjRP9YtOCqmX9Tj6T1FWIzdOMLn6Hvg==', N'NECYP3T5AGG6UXSOY4DPYAEDJGLPTXFY', N'cec93bcc-f4a6-4956-9924-e241aa3b2fbe', NULL, 0, 0, NULL, 1, 0, N'Admin')
INSERT [dbo].[AspNetUsers] ([Id], [birthDate], [Address], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [AccountName]) VALUES (N'd2591d97-bbd3-490c-9d53-a7316e9e0e95', CAST(N'2017-02-06T17:00:00.0000000' AS DateTime2), N'TP Biên Hòa', N'nhhien@gmail.com', N'NHHIEN@GMAIL.COM', N'nhhien@gmail.com', N'NHHIEN@GMAIL.COM', 0, N'AQAAAAIAAYagAAAAEFPpkU7167HLcGmyoYN96An2ERXAvl7pUFTuddqcEAWKC77XP9CIUnqsPqzluYweig==', N'7TXAC6OAQ3XWJV7I4XO5X7I7CET3M6KN', N'd8ce37a5-475b-418a-9c05-2ccaae94b761', N'08888888', 0, 0, NULL, 1, 0, N'Hoang Hien')
INSERT [dbo].[AspNetUsers] ([Id], [birthDate], [Address], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [AccountName]) VALUES (N'd7090710-365d-4c05-9d98-1f7c0a9eecab', CAST(N'2004-06-14T17:00:00.0000000' AS DateTime2), N'TPHCM', N'truongminhduy@gmail.com', N'TRUONGMINHDUY@GMAIL.COM', N'truongminhduy@gmail.com', N'TRUONGMINHDUY@GMAIL.COM', 0, N'AQAAAAIAAYagAAAAEOsLUKg5l2Z6voRgXc1CFALuQZbvgx1YuxopdVdq5+Q/xmWXNqLcoB3bYGOIQ5fPVA==', N'QS2FK3TBXYHIL6FKMRIBXJD2H2WO7EUP', N'a855503b-ef2b-4d88-b1aa-71b45d21c55c', N'012345678', 0, 0, NULL, 1, 0, N'Trương Minh Duy')
GO
INSERT [dbo].[Cart] ([id], [userId]) VALUES (N'5977ab28-3', N'5cd122ce-90a3-44e3-86a8-965440e519b7')
INSERT [dbo].[Cart] ([id], [userId]) VALUES (N'5be56d22-6', N'7a62ff97-df85-4c4c-8d20-6b2674d9c007')
INSERT [dbo].[Cart] ([id], [userId]) VALUES (N'7119edbd-c', N'1c61bf1c-5da7-4edb-9ea8-340faa46ab94')
INSERT [dbo].[Cart] ([id], [userId]) VALUES (N'81cdae79-1', N'c0492989-731f-494d-a6d6-6972b9eeeaf8')
INSERT [dbo].[Cart] ([id], [userId]) VALUES (N'afaccf49-f', N'405c36f2-d449-49a6-9033-4df8e0249f11')
INSERT [dbo].[Cart] ([id], [userId]) VALUES (N'CA01', N'1b2c7246-a64c-408a-89a3-838ea0995217')
INSERT [dbo].[Cart] ([id], [userId]) VALUES (N'CA02', N'18faa81a-ccc6-4034-9384-53bfd36ec5e9')
INSERT [dbo].[Cart] ([id], [userId]) VALUES (N'CA03', N'09bccb4f-9f78-4d96-bfed-d39500ec57d6')
INSERT [dbo].[Cart] ([id], [userId]) VALUES (N'cc7add9a-d', N'd2591d97-bbd3-490c-9d53-a7316e9e0e95')
INSERT [dbo].[Cart] ([id], [userId]) VALUES (N'e102a538-e', N'd7090710-365d-4c05-9d98-1f7c0a9eecab')
GO
INSERT [dbo].[CartDetail] ([id], [idCart], [idProduct], [quantity]) VALUES (N'CAD01', N'CA01', N'PR01', 10)
INSERT [dbo].[CartDetail] ([id], [idCart], [idProduct], [quantity]) VALUES (N'CAD02', N'CA01', N'PR02', 5)
INSERT [dbo].[CartDetail] ([id], [idCart], [idProduct], [quantity]) VALUES (N'CAD03', N'CA01', N'PR05', 1)
GO
INSERT [dbo].[Category] ([id], [name]) VALUES (N'2a1c1c73-c', N'Tablet')
INSERT [dbo].[Category] ([id], [name]) VALUES (N'52b44e5e-a', N'Tai nghe')
INSERT [dbo].[Category] ([id], [name]) VALUES (N'8bb59228-b', N'Phụ kiện')
INSERT [dbo].[Category] ([id], [name]) VALUES (N'CATE01', N'Điện thoại')
INSERT [dbo].[Category] ([id], [name]) VALUES (N'CATE02', N'Máy tính')
INSERT [dbo].[Category] ([id], [name]) VALUES (N'd43462b8-4', N'Laptop')
INSERT [dbo].[Category] ([id], [name]) VALUES (N'd55642b0-b', N'Đồng hồ điện tử')
INSERT [dbo].[Category] ([id], [name]) VALUES (N'eb5e9dcc-8', N'Console ')
GO
INSERT [dbo].[Comment] ([id], [userId], [content], [productId], [rating], [date]) VALUES (N'130dbe91-7', N'09bccb4f-9f78-4d96-bfed-d39500ec57d6', N'Sản phẩm rất tốt, nên ủng hộ', N'2eb253ce-2', 5, CAST(N'2024-12-26T17:45:40.177' AS DateTime))
INSERT [dbo].[Comment] ([id], [userId], [content], [productId], [rating], [date]) VALUES (N'2b74bd24-4', N'18faa81a-ccc6-4034-9384-53bfd36ec5e9', N'Tệ', N'4fccf709-b', 1, CAST(N'2024-12-19T21:36:20.163' AS DateTime))
INSERT [dbo].[Comment] ([id], [userId], [content], [productId], [rating], [date]) VALUES (N'728797d3-1', N'c0492989-731f-494d-a6d6-6972b9eeeaf8', N'Khong ngon', N'af40f88a-7', 5, CAST(N'2024-12-15T16:01:17.253' AS DateTime))
INSERT [dbo].[Comment] ([id], [userId], [content], [productId], [rating], [date]) VALUES (N'879d8f74-0', N'c0492989-731f-494d-a6d6-6972b9eeeaf8', N'Ngon', N'af40f88a-7', 5, CAST(N'2024-12-15T16:01:17.253' AS DateTime))
INSERT [dbo].[Comment] ([id], [userId], [content], [productId], [rating], [date]) VALUES (N'8949497f-f', N'18faa81a-ccc6-4034-9384-53bfd36ec5e9', N'Sản phẩm tốt', N'4ec4512a-7', 5, CAST(N'2024-12-26T17:48:39.350' AS DateTime))
INSERT [dbo].[Comment] ([id], [userId], [content], [productId], [rating], [date]) VALUES (N'9099ca37-1', N'1c61bf1c-5da7-4edb-9ea8-340faa46ab94', N'Sản phẩm tốt nhưng nghe hơi rè', N'9b604110-0', 4, CAST(N'2024-12-26T17:47:31.313' AS DateTime))
INSERT [dbo].[Comment] ([id], [userId], [content], [productId], [rating], [date]) VALUES (N'c1c64791-2', N'1c61bf1c-5da7-4edb-9ea8-340faa46ab94', N'Sản phẩm không đúng mô tả', N'4ec4512a-7', 3, CAST(N'2024-12-26T17:47:04.053' AS DateTime))
INSERT [dbo].[Comment] ([id], [userId], [content], [productId], [rating], [date]) VALUES (N'ebc278d7-d', N'18faa81a-ccc6-4034-9384-53bfd36ec5e9', N'Tốt', N'4fccf709-b', 4, CAST(N'2024-12-19T21:35:40.220' AS DateTime))
INSERT [dbo].[Comment] ([id], [userId], [content], [productId], [rating], [date]) VALUES (N'f3195783-2', N'7a62ff97-df85-4c4c-8d20-6b2674d9c007', N'Sản phẩm rẻ tốt', N'331484e0-1', 5, CAST(N'2024-12-27T10:50:16.180' AS DateTime))
GO
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'10b41ac4-c', N'ASUS TUF Gaming F15 (2022)', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fdownload.png?alt=media&token=2d4419cc-198e-484b-9c5b-57570b8fb131', 20000000, N'd43462b8-4', 4, N'ace120c9-3', N'đã sử dụng (90%)', N'Sản phảm còn hdsd, hộp', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'292e6f8f-e', N'Màn hình Gaming Asus TUF VG279Q3A 27 inch', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fasus-vg279q3a-27-inch-fhd-thumb-600x600.jpg?alt=media&token=95d74685-6bd7-4068-ba69-e5efbb973b15', 8000000, N'CATE02', 3, N'e500add0-2', N'đã sử dụng(80%)', N'Màn hình FHD', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'29534f66-6', N'Laptop Lenovo Gaming Legion 5', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Flenovo-legion-5-16irx9-i7-83dg0051vn-1-750x500.jpg?alt=media&token=c36cea6b-1b2f-41b1-b50d-4a943aaaf883', 25000000, N'd43462b8-4', 6, N'ace120c9-3', N'đã sử dụng (99%)', N'Sản phảm còn hdsd, hộp', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'2eb253ce-2', N'Samsung Galaxy Fold', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fsamsung-galaxy-fold-black-600x600.jpg?alt=media&token=ed33e902-657f-4230-a832-0b4c5bf9269f', 33000000, N'CATE01', 3, N'2f030822-2', N'mới (100%)', N'Sản phảm còn hdsd, hộp', 5)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'331484e0-1', N'Chuột Razer DeathAdder Essential-Ergonomic', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2F7591-chuot-razer-deathadder-essential-ergonomic-001.jpg?alt=media&token=ee0c45a4-d01c-414b-8a24-128cc45cf609', 200000, N'8bb59228-b', 11, N'2f030822-2', N'mới (100%)', N'Sản phảm còn hdsd, hộp', 5)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'4522d52c-1', N'GIGABYTE G5 MD', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fimages.jpg?alt=media&token=a55cad34-28e1-4a25-9434-246c6c644fe5', 19000000, N'd43462b8-4', 4, N'ace120c9-3', N'đã sử dụng(80%)', N'Sản phảm còn hdsd, hộp', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'459ed7bd-9', N'Xiaomi Redmi 9A ( 3 GB / 32 GB)', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2F1685192825738169581-big.jpeg?alt=media&token=7d1bc3d5-4e5d-482a-b97a-a8daf0cb1029', 2000000, N'CATE01', 3, N'a0499052-c', N'đã sử dụng (90%)', N'Sản phẩm còn sử dụng tốt', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'4ec4512a-7', N'Cáp iPhone dây dù C to lightning', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Flist-new-72.jpg?alt=media&token=60da56c0-19ab-4138-9e16-2b955e58ff9c', 50000, N'8bb59228-b', 15, N'853dc40e-0', N'mới (100%)', N'Sản phảm còn hdsd, hộp', 4)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'4fa5769b-9', N'Màn hình ASUS ROG Strix XG309CM 30" IPS 220Hz 1ms G-Sync HDR10', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fasus_rog_strix_xg309cm_gearvn_588c737217834526b1700d70a7c7c8f4_53807e0687f347e8a95dc713ba901592_1024x1024.webp?alt=media&token=3212aeae-494d-4fb5-af8b-3bf5f94a9f60', 10000000, N'CATE02', 3, N'e500add0-2', N'đã sử dụng (90%)', N'Sản phẩm còn sử dụng tốt', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'4ff38f4d-5', N'Dualshock 5 ', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fc4ced5e4-6dd2-44d4-b8cf-795336f18864.b36f9bb71bcf08d98fd96c6d656da5d5-1024x1024.png?alt=media&token=7ece89a2-6c08-4913-95ff-0b219ee035f5', 1500000, N'8bb59228-b', 3, N'756d9259-f', N'mới (100%)', N'Sản phảm còn hdsd, hộp', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'50c61236-6', N'Apple Watch Series 10', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2FMXLN3ref_VW_34FR%2Bwatch-case-42-aluminum-rosegold-nc-s10_VW_34FR%2Bwatch-face-42-aluminum-rosegold-s10_VW_34FR.png?alt=media&token=5f024fcb-416e-47dc-92e1-a554af29ce4d', 11000000, N'd55642b0-b', 5, N'b42521f4-a', N'mới (100%)', N'Sản phẩm còn hộp, đẹp,...', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'52a37e07-f', N'Chuột Gaming Logitech G402', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Flogitech-g402.webp?alt=media&token=1cfbd999-45bc-4be6-a9ba-a1cf08e878b9', 300000, N'8bb59228-b', 3, N'10e45af7-5', N'đã sử dụng (90%)', N'Sản phảm còn hdsd, hộp', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'5f4b25e9-2', N'Điện thoại Nokia 105 4G Pro', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fnokia-105-4g-den-thumb-600x600.jpg?alt=media&token=bad61a6a-8a40-495f-b7c8-2185ca3f9481', 680000, N'CATE01', 4, N'a0499052-c', N'mới (100%)', N'Sản phẩm còn sử dụng tốt', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'8b415628-5', N'Iphone 16 Pro Max', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fiphone-16-pro-finish-select-202409-6-9inch_9b775ca8ac634d6587360f54b909ecfd_master.webp?alt=media&token=aeb86ced-650a-4241-b18b-e0ba63cbdae9', 33000000, N'CATE01', 10, N'b42521f4-a', N'đã sử dụng (90%)', N'Sản phẩm mới đầy đủ phù kiện ', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'903aee8a-0', N'Bàn phím cơ AKKO 3087 v2 DS Ocean Star ', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fthumbphim-recovered-recovered_267e97e1955a416ebc59d2aabcdf227e_943e2216bceb4b11904c6249de9c260a_1024x1024.webp?alt=media&token=b994ecd4-ba8d-4d27-98ae-081b7475d2c0', 900000, N'8bb59228-b', 2, N'2f030822-2', N'đã sử dụng (90%)', N'Bàn phím cơ AKKO 3087 v2 DS Ocean Star ', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'9b604110-0', N'Airpod 4', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fairpods-4-cong-usb-c-anc-2-638615780223885505-750x500.jpg?alt=media&token=02a4f6c5-e680-4b50-8f25-d7d9b448fa9b', 7000000, N'52b44e5e-a', 12, N'b42521f4-a', N'đã sử dụng (90%)', N'Sản phẩm còn hộp, hdsd,...', 4)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'acf31698-1', N'Chuột Logitech G102 Lightsync RGB', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Flogitech-g102-lightsync-rgb-wired-gaming-mouse-black-903150-_41483e8daff448edbb83afc2524b811f_master.webp?alt=media&token=32600a71-09c4-49ba-b3e4-c1870b58c03b', 150000, N'8bb59228-b', 10, N'10e45af7-5', N'đã sử dụng(80%)', N'Sản phảm còn hdsd, hộp', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'ad126986-2', N'Iphone 15 Pro Max ', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fiphone-15-pro-max-black-thumbnew-600x600.jpg?alt=media&token=a0843d2d-aefc-43bd-a250-6d6ad85ab703', 15000000, N'CATE01', 4, N'b42521f4-a', N'đã sử dụng (90%)', N'Sản phẩm còn hộp, hdsd,...', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'ae52b15e-5', N'Macbook Pro 13 inch 2020', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fmacbook_pro_13_inch_intel_m1.jpg?alt=media&token=acb50efb-a7c9-4afa-bccd-cbf4ebfc58be', 22000000, N'd43462b8-4', 1, N'2f030822-2', N'đã sử dụng(80%)', N'Sản phẩm đã qua sử dụng, còn hộp ', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'b317a934-3', N'Tai nghe Sony WI-SP700N', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Ftai-nghe-sony-wi-sp700n-P6753-1647507457770.jpg?alt=media&token=b170e1d2-d8bf-4f76-91de-6aa773e11894', 1200000, N'52b44e5e-a', 4, N'756d9259-f', N'đã sử dụng (90%)', N'Sản phảm còn hdsd, hộp', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'b382f73c-6', N'Chuột Logitech G502 Hero', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2FLogitech-G502-A.jpg?alt=media&token=9e1631e7-81da-42be-ab55-38a9992894d8', 1500000, N'8bb59228-b', 4, N'10e45af7-5', N'đã sử dụng (99%)', N'Sản phảm còn hdsd, hộp', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'b7c92d4c-e', N'Iphone SE 2022', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fapple-iphone-se-3-2022-chinh-hang_9szb-as.webp?alt=media&token=4e716b82-ef6a-400f-9bb6-5269893b35b0', 10000000, N'CATE01', 1, N'b42521f4-a', N'đã sử dụng(80%)', N'Sản phẩm còn hộp, hdsd,...', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'bf2c0a6b-6', N'Iphone 15', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fiphone-15-1-1-750x500.jpg?alt=media&token=d311dfef-f3ff-4b12-8b12-b4b6c924ee4d', 12000000, N'CATE01', 5, N'b42521f4-a', N'đã sử dụng (99%)', N'Sản phẩm còn hộp, hdsd,...', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'c198beff-9', N'Chuột Razer DeathAdder V3 Pro White Wireless', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Ff7a42cd48b1a7f325af695b3dba_1024x1024_d0730f9347bd45858c1a36aa992b51fb_64e87797e31545279c73ab9f23cf1228.webp?alt=media&token=7f409c30-8a09-4fd3-9b87-0152e9c60928', 2300000, N'8bb59228-b', 2, N'2f030822-2', N'đã sử dụng (90%)', N'Sản phảm còn hdsd, hộp', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'cefef30b-8', N'Tai Nghe Sony MDR-XB550AP', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fsony-mdrxb550ap-den.jpg?alt=media&token=3f1d5fc5-11d3-4991-9511-384d2a27f086', 1000000, N'52b44e5e-a', 12, N'756d9259-f', N'đã sử dụng (90%)', N'Sản phảm còn hdsd, hộp', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'cf89bc49-e', N'Samsung Galaxy Note 10', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fsamsung-galaxy-note-10-silver-600x600.jpg?alt=media&token=509c0561-466a-4cfd-aa8e-9291a6dba557', 21000000, N'CATE01', 2, N'2f030822-2', N'mới (100%)', N'Sản phảm còn hdsd, hộp', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'd88b69e4-c', N'Ipad Air 4', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fipad_air_4_2020_PINK_2tmobile.jpg?alt=media&token=74de847c-e60d-4cbb-969a-3b9e00d82bd7', 16000000, N'2a1c1c73-c', 10, N'b42521f4-a', N'đã sử dụng (90%)', N'Sản phẩm còn hộp, hdsd,...', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'df85cb08-c', N'Samsung J7 Prime', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fsamsung-galaxy-j7-prime-hh-600x600.jpg?alt=media&token=641303a2-5050-4a55-b69a-17f3793d7ce4', 3000000, N'CATE01', 2, N'a0499052-c', N'đã sử dụng (90%)', N'Sản phẩm còn sử dụng tốt', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'e308cf16-6', N'RAM 16GB  DDR4 laptop, PC', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2FRam-16GB-4.webp?alt=media&token=5e33202c-b720-4d3b-9197-765834f53625', 500000, N'8bb59228-b', 2, N'e500add0-2', N'đã sử dụng (99%)', N'Sản phẩm còn sử dụng tốt', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'e42589b4-f', N'RAM 16GB DDR4 3200MHz For Laptop', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Ftai-xuong-removebg-preview-dfe3cc3d-7e17-4f01-bd3c-91b08b1b7e09.webp?alt=media&token=80bac4cf-555f-466e-a68d-a885d2450a44', 790000, N'8bb59228-b', 10, N'853dc40e-0', N'đã sử dụng (90%)', N'Sản phảm còn hdsd, hộp', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'e74d2c09-4', N'MX Keys S Wireless Keyboard', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fmx-keys-s-keyboard-top-view-graphite-us.webp?alt=media&token=62fa34ea-c959-4db3-910e-bdf2b3b3317c', 200000, N'8bb59228-b', 5, N'10e45af7-5', N'đã sử dụng (99%)', N'Sản phảm còn hdsd, hộp', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'ef8da6d6-9', N'ExpertCenter D7 Tower (D700TE)', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fimages%20(4).jpg?alt=media&token=5b8f8e1c-75fd-435f-af63-625b0aac295a', 4000000, N'CATE02', 4, N'e500add0-2', N'đã sử dụng (90%)', N'Sản phẩm còn sử dụng tốt', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'f2784211-f', N'Cáp Sạc Nhanh Cổng Micro Usb / Type C', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fcap-sac-nhanh-cong-micro-usb-type-c-cho-dien-thoai-android.webp?alt=media&token=e8df2018-49cb-4f7d-a1e0-2572539e4ad7', 50000, N'8bb59228-b', 20, N'853dc40e-0', N'mới (100%)', N'Sản phảm còn hdsd, hộp', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'f37ac0ee-6', N'PS5 Pro ', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fimages%20(2).jpg?alt=media&token=0dc03999-fff5-4ce1-9d95-178f8c53c1e3', 19000000, N'eb5e9dcc-8', 4, N'756d9259-f', N'mới (100%)', N'Sản phảm còn hdsd, hộp', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'f62612e8-a', N'Laptop MSI Gaming Bravo 15', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fmsi-bravo-15-b7ed-r5-010vn-thumb-2-400x400.png?alt=media&token=686444fd-c652-4610-87dd-050e51e7777e', 15000000, N'd43462b8-4', 7, N'ace120c9-3', N'đã sử dụng (99%)', N'Sản phảm còn hdsd, hộp', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'f6cc11c9-7', N'Tai nghe Sony WH-1000XM5', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2F3123_tai_nghe_sony_wh_1000xm5_blue_songlongmedia.png?alt=media&token=af0dd2ba-1c5a-487d-a617-aa28877074e7', 5000000, N'52b44e5e-a', 5, N'756d9259-f', N'đã sử dụng (90%)', N'Sản phảm còn hdsd,không hộp', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'f7218a87-1', N'Acer Nitro 5', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2FAcer-Nitro-5-2020-i5-10300H-GTX-1650Ti-01.jpg?alt=media&token=fa69b3fc-f053-4026-8afd-1a8fa795ed7f', 19000000, N'd43462b8-4', 4, N'ace120c9-3', N'đã sử dụng (99%)', N'Sản phảm còn hdsd, hộp', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'f83b0269-3', N'Tai nghe Razer Kraken V3 X', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fimages%20(3).jpg?alt=media&token=390bf974-579d-4c39-a3a3-8b6960b7f813', 1200000, N'52b44e5e-a', 4, N'2f030822-2', N'đã sử dụng (99%)', N'Sản phảm còn hdsd, hộp', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'fafebee9-a', N'HP Victus 16', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2F26xspmi2-285-hp-victus-16-core-i5-11400h-ram-8gb-ssd-256gb.jpg?alt=media&token=712853c8-1ffa-45d5-8ac9-fb916e39628c', 22000000, N'd43462b8-4', 3, N'ace120c9-3', N'đã sử dụng (99%)', N'Sản phẩm còn mới, sử dụng tốt,...', 0)
INSERT [dbo].[Product] ([id], [productName], [image], [unitPrice], [categoryId], [quantity], [idShop], [status], [description], [rating]) VALUES (N'fda1f642-c', N'Bàn di chuột Razer Firefly V2 Hard Chroma', N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2F9096_https___hybrismediaprod_blob_core_windows_net_sys_master_phoenix_images_container_h67_hcf_9081440960542_firefly_v2_gallery_hero.jpg?alt=media&token=e247a26f-939b-429d-b7d3-76ec79a99838', 300000, N'8bb59228-b', 10, N'2f030822-2', N'đã sử dụng (90%)', N'Sản phảm còn hdsd, hộp', 0)
GO
INSERT [dbo].[Receipt] ([id], [userId], [date]) VALUES (N'222d0c16-d', N'1c61bf1c-5da7-4edb-9ea8-340faa46ab94', CAST(N'2024-12-26T17:46:44.613' AS DateTime))
INSERT [dbo].[Receipt] ([id], [userId], [date]) VALUES (N'55eab668-e', N'09bccb4f-9f78-4d96-bfed-d39500ec57d6', CAST(N'2024-12-26T17:45:17.763' AS DateTime))
INSERT [dbo].[Receipt] ([id], [userId], [date]) VALUES (N'6b3111f7-4', N'd7090710-365d-4c05-9d98-1f7c0a9eecab', CAST(N'2024-12-25T09:32:57.783' AS DateTime))
INSERT [dbo].[Receipt] ([id], [userId], [date]) VALUES (N'ac129732-4', N'7a62ff97-df85-4c4c-8d20-6b2674d9c007', CAST(N'2024-12-27T10:49:59.673' AS DateTime))
INSERT [dbo].[Receipt] ([id], [userId], [date]) VALUES (N'b6a74144-1', N'1c61bf1c-5da7-4edb-9ea8-340faa46ab94', CAST(N'2024-12-21T17:25:23.463' AS DateTime))
INSERT [dbo].[Receipt] ([id], [userId], [date]) VALUES (N'cc1e555e-c', N'1c61bf1c-5da7-4edb-9ea8-340faa46ab94', CAST(N'2024-12-21T20:59:59.550' AS DateTime))
INSERT [dbo].[Receipt] ([id], [userId], [date]) VALUES (N'cd1cdfea-2', N'1c61bf1c-5da7-4edb-9ea8-340faa46ab94', CAST(N'2024-12-21T20:55:00.273' AS DateTime))
INSERT [dbo].[Receipt] ([id], [userId], [date]) VALUES (N'dad52469-5', N'18faa81a-ccc6-4034-9384-53bfd36ec5e9', CAST(N'2024-12-26T17:48:17.690' AS DateTime))
GO
INSERT [dbo].[ReceiptDetail] ([id], [idReceipt], [idProduct], [quantity]) VALUES (N'36a9a2f4-9ded-4375-af04-11457953d249', N'55eab668-e', N'2eb253ce-2', 1)
INSERT [dbo].[ReceiptDetail] ([id], [idReceipt], [idProduct], [quantity]) VALUES (N'39628d71-3c7b-478a-beac-d71a149ecd66', N'dad52469-5', N'4ec4512a-7', 2)
INSERT [dbo].[ReceiptDetail] ([id], [idReceipt], [idProduct], [quantity]) VALUES (N'5503cc73-66db-4119-87b7-459f11bd2475', N'222d0c16-d', N'4ec4512a-7', 3)
INSERT [dbo].[ReceiptDetail] ([id], [idReceipt], [idProduct], [quantity]) VALUES (N'5c6e3453-5a21-455c-9cfd-c0942ac17299', N'cc1e555e-c', N'ad126986-2', 1)
INSERT [dbo].[ReceiptDetail] ([id], [idReceipt], [idProduct], [quantity]) VALUES (N'c25101a9-025b-4f3c-a49d-f76bb2835582', N'cd1cdfea-2', N'ad126986-2', 1)
INSERT [dbo].[ReceiptDetail] ([id], [idReceipt], [idProduct], [quantity]) VALUES (N'dd423a2e-c3c6-4397-99e8-9f7aedfd543e', N'b6a74144-1', N'9b604110-0', 1)
INSERT [dbo].[ReceiptDetail] ([id], [idReceipt], [idProduct], [quantity]) VALUES (N'f6948157-397c-45c4-9d58-3cf75b8cb00b', N'ac129732-4', N'331484e0-1', 1)
GO
INSERT [dbo].[Shop] ([id], [userId], [name], [address], [rating], [image]) VALUES (N'10e45af7-5', N'405c36f2-d449-49a6-9033-4df8e0249f11', N'Thế giới Chuột ', N'40 Nguyễn Hữu Cảnh', 0, N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fhong-kong-china-12th-july-2022-customers-are-seen-at-the-swiss-electronics-company-logitech-store-in-hong-kong-credit-image-budrul-chukrutsopa-images-via-zuma-press-wire-2JHGYXG.jpg?alt=media&token=76b5fcf3-592f-460a-9c54-81750a45ca78')
INSERT [dbo].[Shop] ([id], [userId], [name], [address], [rating], [image]) VALUES (N'2f030822-2', N'd7090710-365d-4c05-9d98-1f7c0a9eecab', N'Shop LinhTinh', N'TPHCM', 5, N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fgioi-thieu-shopcongnghe-1.jpg?alt=media&token=8127ce1d-7197-42f6-a1a7-ff84c2caee2e')
INSERT [dbo].[Shop] ([id], [userId], [name], [address], [rating], [image]) VALUES (N'756d9259-f', N'18faa81a-ccc6-4034-9384-53bfd36ec5e9', N'Sony LinhTinh', N'12', 0, N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fimages%20(1).jpg?alt=media&token=3f6bc9bf-ce31-4e14-bd0a-acd53ecffadc')
INSERT [dbo].[Shop] ([id], [userId], [name], [address], [rating], [image]) VALUES (N'853dc40e-0', N'5cd122ce-90a3-44e3-86a8-965440e519b7', N'Tech Shop Binh Duong', N'Bình Dương', 4, N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fimages.png?alt=media&token=ad1a49e5-9a0b-4e65-9467-a931db6804e5')
INSERT [dbo].[Shop] ([id], [userId], [name], [address], [rating], [image]) VALUES (N'a0499052-c', N'd2591d97-bbd3-490c-9d53-a7316e9e0e95', N'Mobile 2nd hand', N'Biên Hòa', 0, N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fproduct-jpeg-500x500.webp?alt=media&token=b4e43041-00e2-44ff-bb68-b5795d9e8898')
INSERT [dbo].[Shop] ([id], [userId], [name], [address], [rating], [image]) VALUES (N'ace120c9-3', N'09bccb4f-9f78-4d96-bfed-d39500ec57d6', N'Laptop 247', N'200 Đ. Trường ChinhPhường 13, Tân Bình, Hồ Chí Minh', 0, N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2Fimages%20(5).jpg?alt=media&token=17c8a3b0-37d5-43a2-8b60-06fb655e49d9')
INSERT [dbo].[Shop] ([id], [userId], [name], [address], [rating], [image]) VALUES (N'b42521f4-a', N'1c61bf1c-5da7-4edb-9ea8-340faa46ab94', N'T&T Shop ', N'128 Nguyen Thi Dinh', 0, N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2FApple-Hongdae-Seoul-media-preview-interior_big.jpg.large.jpg?alt=media&token=3a6c7283-1b90-4bf7-9e86-7393afaf6958')
INSERT [dbo].[Shop] ([id], [userId], [name], [address], [rating], [image]) VALUES (N'e500add0-2', N'7a62ff97-df85-4c4c-8d20-6b2674d9c007', N'PC 2nd hand', N'Quận 12, TPHCM', 0, N'https://firebasestorage.googleapis.com/v0/b/le-gallerie.appspot.com/o/images2%2F(10).jpg?alt=media&token=392d4a79-605b-44e0-a241-a01c65f15d76')
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetRoleClaims_RoleId]    Script Date: 12/27/2024 11:15:36 AM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetRoleClaims_RoleId] ON [dbo].[AspNetRoleClaims]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [RoleNameIndex]    Script Date: 12/27/2024 11:15:36 AM ******/
CREATE UNIQUE NONCLUSTERED INDEX [RoleNameIndex] ON [dbo].[AspNetRoles]
(
	[NormalizedName] ASC
)
WHERE ([NormalizedName] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserClaims_UserId]    Script Date: 12/27/2024 11:15:36 AM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserClaims_UserId] ON [dbo].[AspNetUserClaims]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserLogins_UserId]    Script Date: 12/27/2024 11:15:36 AM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserLogins_UserId] ON [dbo].[AspNetUserLogins]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_AspNetUserRoles_RoleId]    Script Date: 12/27/2024 11:15:36 AM ******/
CREATE NONCLUSTERED INDEX [IX_AspNetUserRoles_RoleId] ON [dbo].[AspNetUserRoles]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [EmailIndex]    Script Date: 12/27/2024 11:15:37 AM ******/
CREATE NONCLUSTERED INDEX [EmailIndex] ON [dbo].[AspNetUsers]
(
	[NormalizedEmail] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UserNameIndex]    Script Date: 12/27/2024 11:15:37 AM ******/
CREATE UNIQUE NONCLUSTERED INDEX [UserNameIndex] ON [dbo].[AspNetUsers]
(
	[NormalizedUserName] ASC
)
WHERE ([NormalizedUserName] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AspNetRoleClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetRoleClaims] CHECK CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserClaims] CHECK CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserLogins]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserLogins] CHECK CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserTokens]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserTokens] CHECK CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId]
GO
USE [master]
GO
ALTER DATABASE [WebBanDoCongNghe] SET  READ_WRITE 
GO
