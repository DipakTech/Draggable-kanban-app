## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DipakTech/Draggable-kanban-app.git
   cd Draggable-kanban-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # OR
   yarn install
   ```

---

# Instructions for Building and Running the Docker Image

## 1. Prerequisites

- Ensure Docker is installed on your system.
- The project should have a valid `dist` directory after running `npm run build`.

---

## 2. Building the Docker Image

1. Open a terminal and navigate to your project directory.
2. Build the Docker image using the following command:
   ```bash
   docker build -t vite-react-app .
   ```
   - The `-t vite-react-app` flag names the image as `vite-react-app`.

---

## 3. Running the Docker Container

To run the containerized application:

1. Use the following command:

   ```bash
   docker run -d -p 3000:3000 vite-react-app
   ```

   - The `-d` flag runs the container in detached mode.
   - The `-p 3000:3000` maps the container's port 3000 to your local machine's port 3000.

2. Access the application in your browser at: [http://localhost:3000](http://localhost:3000).

## Scripts

The following scripts are defined in the `package.json` file:

| Command            | Description                                       |
| ------------------ | ------------------------------------------------- |
| `npm run dev`      | Starts the development server with hot reloading. |
| `npm run build`    | Builds the application for production.            |
| `npm run lint`     | Lints the codebase using ESLint.                  |
| `npm run serve`    | Serves the built application.                     |
| `npm run test`     | Runs unit tests using Vitest.                     |
| `npm run test:ui`  | Opens the Vitest UI for test results.             |
| `npm run coverage` | Generates a test coverage report.                 |

---

## Folder Structure

The typical folder structure for the project is:

```
.
├── __test__
├── src
│   ├── components      # Reusable UI components
│   ├── hooks           # Custom React hooks
│   ├── pages           # Page components (if applicable)
│   ├── routes          # App routing configuration
│   ├── styles          # TailwindCSS and global styles
    ├── assets
    ├── layout
    ├── layout
│   ├── utils           # Utility functions
│   ├── main.tsx        # Application entry point
│   └── App.tsx         # Main App component
├── public              # Static assets
├── .eslintrc.js        # ESLint configuration
├── tailwind.config.js  # TailwindCSS configuration
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project metadata and scripts
```

---

## Dependencies

### Core Dependencies

| Package       | Version   | Description                     |
| ------------- | --------- | ------------------------------- |
| `react`       | `^18.3.1` | React library for building UIs. |
| `react-dom`   | `^18.3.1` | React DOM rendering library.    |
| `vite`        | `^5.4.10` | Fast frontend build tool.       |
| `typescript`  | `^5.5.3`  | Static typing for JavaScript.   |
| `tailwindcss` | `^3.4.14` | Utility-first CSS framework.    |
| `zod`         | `^3.23.8` | TypeScript schema validation.   |

### Dev Dependencies

| Package                | Version   | Description                  |
| ---------------------- | --------- | ---------------------------- |
| `eslint`               | `^9.11.1` | Linting tool for JavaScript. |
| `vitest`               | `^2.1.4`  | Testing framework.           |
| `@vitejs/plugin-react` | `^4.3.2`  | Vite plugin for React.       |

For a complete list, see the `dependencies` and `devDependencies` sections in `package.json`.

---

## Development Guidelines

### Running the Development Server

To start the development server:

```bash
npm run dev
```

The server runs by default at [http://localhost:5173](http://localhost:5173).

### Linting

Lint your codebase:

```bash
npm run lint
```

---

## Testing Guidelines

### Running Tests

Run all unit tests:

```bash
npm run test
```

### Test Coverage

Generate a test coverage report:

```bash
npm run coverage
```

### Vitest UI

Launch the Vitest UI for interactive testing:

```bash
npm run test:ui
```

---

## Building and Deployment

### Build for Production

To generate a production-ready build:

```bash
npm run build
```

### Preview the Build

Preview the built application locally:

```bash
npm run serve
```
