# Min-Commerce

[![version](https://img.shields.io/badge/version-0.1.0-blue)]() [![license](https://img.shields.io/badge/license-MIT-green)]() [![status](https://img.shields.io/badge/status-under%20development-orange)]()

Welcome to Min-Commerce, a comprehensive e-commerce solution currently under active development. This project, when fully completed, will be composed of two main applications, each designed to address vital aspects of online retail operations.

1. **E-commerce storefront**: An intuitive storefront aimed to offer a seamless and user-friendly online shopping experience. Once complete, this module will handle product listings, shopping carts, payment options, shipping settings, order tracking, and more.

2. **Integration Module**: A potent connector, designed to integrate the storefront with BaseLinker systems. Upon completion, this tool will simplify inventory management by synchronizing your internal database with BaseLinker, ensuring real-time product information updates and seamless order processing.

Min-Commerce aims to become your one-stop solution for optimizing your e-commerce business. Stay tuned for updates and get ready to transform your online retail business!

<!-- ![Min-Commerce Logo](/min-commerce-logo.png) -->

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Features

Min-Commerce is built using state-of-the-art technologies and offers a variety of features to enhance your e-commerce operations.

### Technologies

Our application is developed with the following technologies:

#### Storefront

- [Next.js](https://nextjs.org/) for server-rendered react apps
- [Typescript](https://www.typescriptlang.org/) for adding static types to JavaScript and for catching errors
- [React Query](https://react-query.tanstack.com/) for fetching, caching, synchronizing and updating server state
- [TailwindCSS](https://tailwindcss.com/) for utility-first CSS framework

#### Baselinker Integration Module

- [Express.js](https://expressjs.com/) for building web applications and APIs
- [Typescript](https://www.typescriptlang.org/) for static types and error catching
- [Prisma](https://www.prisma.io/) for modern database access

### Key Features

#### Storefront

- **Product List**: Browse through an array of products with details, enabling your customers to make informed decisions.
- **Cart**: A user-friendly cart system that allows customers to add items and review them before checkout.
- **Order Processing**: Simple and efficient order processing for a smooth customer experience.
- **Payment using Przelewy24**: Secure online payments through Przelewy24, providing customers with a variety of payment options.

#### Baselinker Integration Module

- **Product Sync**: Real-time synchronization of product details between your internal database and the e-commerce storefront.
- **Categories Sync**: Manage and sync product categories between your internal system and the online storefront to maintain consistency.

As this project is still under development, stay tuned for more features and enhancements!

## Getting Started

Before starting with the individual modules, clone the repository and run the command from the root of the project directory to install the dependencies.

The instructions on how to setup and run each module of Min-Commerce are located in the respective application directories.

### Prerequisites

Before you begin, ensure you have met the following requirements:

1. You have installed the latest version of [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/).

### Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your_username_/min-commerce.git
   ```
2. Install Yarn packages:
   ```sh
   cd min-commerce
   yarn
   ```

### Running the Applications

If you want to run the individual modules, navigate to the respective module's directory for further setup instructions:

- **E-commerce Storefront (web)**: Proceed to `apps/web` and follow the instructions in the README.md file.
- **BaseLinker Integration Module (baselinker-api-express)**: Proceed to `apps/baselinker-api-express` and follow the instructions in the README.md file.

If you wish to run all applications in development mode simultaneously, you can do so with the following command:

```sh
yarn dev
```

This command will start both the E-commerce Storefront and the BaseLinker Integration Module in development mode. 

Please follow the guidelines and instructions carefully. If you encounter any issues, feel free to open an issue on this GitHub repository.

## Contributing
Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Marcin - marcindev03@gmail.com
