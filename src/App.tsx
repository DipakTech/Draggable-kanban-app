import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import KanbanList from "./components/KanbanList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<KanbanList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
