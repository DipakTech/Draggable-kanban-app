import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import { KanbanBoard } from "./components/KanbanList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<KanbanBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
