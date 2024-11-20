# Draggable Kanban Board Application

A modern, interactive Kanban board application built with React and TypeScript, featuring drag-and-drop functionality for task management.

🚀 [Live Demo](https://draggable-kanban-app-vrit.vercel.app/)

## ⏱️ Development Time

This project was completed in approximately 2.5 hours as a demonstration of rapid prototyping and implementation skills.

## 🛠️ Technology Stack & Rationale

- **React (v18.3.1)**: For building a responsive and efficient user interface
- **TypeScript**: Ensures type safety and better developer experience
- **Tailwind CSS**: For rapid UI development and consistent styling
- **Vite**: Fast build tool and development server
- **Docker**: For containerization and easy deployment

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker (optional, for containerization)

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

3. Start the development server:

```bash
npm run dev
# OR
yarn dev
```

### Docker Setup (Optional)

1. Build the Docker image:

```bash
docker build -t vite-react-app .
```

2. Run the container:

```bash
docker run -d -p 3000:3000 vite-react-app
```

## 📝 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm run lint`: Run ESLint
- `npm run test`: Run unit tests
- `npm test:ui`: Open Vitest UI
- `npm run coverage`: Generate test coverage report
- `npm run serve`: Preview production build

## 🎯 Known Limitations & Trade-offs

1. **Local Storage**: Currently using browser's local storage for data persistence

2. **Basic Features**: Focused on core drag-and-drop functionality

## 🚀 Future Enhancements

1. **Database Integration**:

   - Implement a proper backend database
   - Add data persistence across sessions
   - Enable multi-user support

2. **Task Management**:

   - Add CRUD operations for tasks
   - Implement task update functionality
   - Add task deletion feature
   - Add task details modal

3. **Additional Features**:
   - User authentication
   - Real-time collaboration
   - Activity logging
   - Task filtering and search
   - Due dates and priorities

## 📁 Project Structure

```
.
├── src/
│   ├── components/     # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components
│   ├── styles/        # TailwindCSS styles
│   ├── utils/         # Utility functions
│   ├── assets/        # Static assets
│   ├── layout/        # Layout components
│   └── routes/        # Routing configuration
├── public/            # Static files
├── __test__/         # Test files
└── [Config files]    # Various configuration files
```
