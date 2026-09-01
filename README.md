# Calculadora de Crédito | Credit Calculator

> A professional financial decision-making tool designed to help users evaluate credit options and understand borrowing costs through intuitive, real-time simulations.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 📌 Overview

**Calculadora de Crédito** is a web-based financial simulation tool that empowers users to make informed borrowing decisions. Whether you're evaluating a personal loan, mortgage, or credit line, this calculator provides instant, transparent calculations of:

- **Monthly Payments**: Precise installment amounts based on loan parameters
- **Total Interest Costs**: Complete breakdown of financing charges
- **Amortization Overview**: Total amount payable and interest percentage relative to principal

This tool eliminates financial uncertainty by delivering clear, data-driven insights into the true cost of borrowing, enabling individuals to compare options and plan their finances responsibly.

## ✨ Features

- **Real-Time Calculations**: Instant updates as you modify loan parameters
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Intuitive Interface**: User-friendly input fields with clear, professional layout
- **Financial Insights**: Comprehensive breakdown including:
  - Monthly payment amount
  - Total amount to be paid
  - Total interest charged
  - Interest rate as percentage of principal
- **Visual Feedback**: Interactive UI with gradient design and modern styling
- **Performance Optimized**: Built with React hooks (`useMemo`) for efficient re-renders

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.x or higher)
- **npm**, **yarn**, **pnpm**, or **bun** as your package manager
- **Git** (for version control)

## 🚀 Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd calculadora-credito
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Verify installation**:
   ```bash
   npm run dev
   ```

## 💻 Usage

### Running the Development Server

Start the local development environment:

```bash
npm run dev
```

Then open your browser and navigate to:

```
http://localhost:3000
```

The application will automatically reload when you make changes to source files.

### Using the Calculator

1. Enter the **loan amount** (principal) in the first field
2. Input the **annual interest rate** (as a percentage)
3. Specify the **loan term** (in months)
4. View real-time results including:
   - Monthly payment obligation
   - Total amount to repay
   - Total interest costs
   - Interest burden as a percentage of the principal

### Example Scenario

To simulate a $50,000 loan at 6% annual interest for 60 months:

- Enter **50000** in the loan amount field
- Enter **6** in the interest rate field
- Enter **60** in the loan term field
- Review the calculated monthly payment, total paid, and interest costs

## 📁 Project Structure

```
calculadora-credito/
├── public/                 # Static assets (robots.txt, sitemap.xml)
├── src/
│   ├── app/
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout component
│   │   └── page.tsx       # Home page
│   ├── components/
│   │   ├── CalculatorCard.tsx      # Main calculator component
│   │   ├── InputField.tsx          # Reusable input component
│   │   ├── ResultSummary.tsx       # Results display component
│   │   └── RightPanel.tsx          # Secondary information panel
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── postcss.config.mjs       # PostCSS configuration
├── package.json            # Project dependencies
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🛠️ Technology Stack

| Technology       | Purpose                        | Version |
| ---------------- | ------------------------------ | ------- |
| **Next.js**      | React framework for production | 15.5.18 |
| **React**        | UI library                     | 19.1.0  |
| **TypeScript**   | Type safety                    | ^5      |
| **Tailwind CSS** | Utility-first CSS framework    | ^4      |
| **ESLint**       | Code quality & linting         | ^9      |

## 🔧 Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint to check code quality
npm run lint
```

### Project Conventions

- **Component Structure**: All components are functional components using React hooks
- **State Management**: Local state with `useState` for input values
- **Memoization**: `useMemo` for optimizing calculation performance
- **Styling**: Tailwind CSS utility classes for responsive design
- **Type Safety**: Full TypeScript implementation for better developer experience

### Code Quality

This project uses ESLint to maintain code quality. Run linting before committing:

```bash
npm run lint
```

## 🌐 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js application is using [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project on [Vercel Dashboard](https://vercel.com/dashboard)
3. Select your repository and configure build settings
4. Click "Deploy"

Vercel automatically handles:

- Continuous deployment on every push
- Performance optimization
- Security and SSL certificates
- Global CDN distribution

**[Deploy to Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)**

### Build and Self-Host

```bash
# Build the project
npm run build

# Start the production server
npm start
```

The application will be available at `http://localhost:3000`.

## 📚 Learn More

For more information about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn Next.js features and best practices
- [React Documentation](https://react.dev) - Understand React fundamentals
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Explore Tailwind utilities
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Master TypeScript
- [Next.js GitHub Repository](https://github.com/vercel/next.js) - View source code and contribute

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code:

- Follows the existing code style
- Passes ESLint checks
- Includes comments for complex logic
- Works across different screen sizes

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

**Built with ❤️ by CanonCodeCraft**
