import { Task } from "@/components/KanbanTaskCard";

export function saveTasksToLocalStorage(tasks: Task[]) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
