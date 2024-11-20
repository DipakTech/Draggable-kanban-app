import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ColumnId } from "./KanbanList";
import { Task } from "./KanbanTaskCard";
import { saveTasksToLocalStorage } from "@/utils/saveToLocalstorage";
import { taskSchema } from "@/validations/taskSchema";

interface AddKanbanTaskDialogProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  newTaskContent: string;
  setNewTaskContent: React.Dispatch<React.SetStateAction<string>>;
  selectedColumnId: ColumnId;
  initialTasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setSelectedColumnId: React.Dispatch<
    React.SetStateAction<"todo" | "in-progress" | "done">
  >;
}

export function AddKanbanTaskDialog({
  isModalOpen,
  newTaskContent,
  selectedColumnId,
  setIsModalOpen,
  setNewTaskContent,
  setSelectedColumnId,
  initialTasks,
  setTasks,
}: AddKanbanTaskDialogProps) {
  const [errors, setErrors] = useState<{
    content?: string;
    columnId?: string;
  }>({});

  const resetForm = () => {
    setNewTaskContent("");
    setSelectedColumnId("todo");
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationResult = taskSchema.safeParse({
      content: newTaskContent,
      columnId: selectedColumnId,
    });

    if (!validationResult.success) {
      const zodErrors = validationResult.error.format();
      setErrors({
        content: zodErrors.content?._errors[0],
        columnId: zodErrors.columnId?._errors[0],
      });
      return;
    }

    try {
      const newTask: Task = {
        id: Date.now().toString(),
        columnId: selectedColumnId,
        content: newTaskContent,
      };

      const updatedTasks = [...initialTasks, newTask];
      setTasks(updatedTasks);
      saveTasksToLocalStorage(updatedTasks);

      toast.success("Task added successfully!");
      resetForm();
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const columnOptions = {
    todo: "To Do",
    "in-progress": "In Progress",
    done: "Done",
  };

  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={(open) => {
        setIsModalOpen(open);
        if (!open) resetForm();
      }}
    >
      <DialogTrigger asChild>
        <Button>Add New Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>
            Fill out the form to create a new task.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="content">Task Content:</Label>
              <Input
                id="content"
                value={newTaskContent}
                onChange={(e) => {
                  setNewTaskContent(e.target.value);
                  setErrors((prev) => ({ ...prev, content: undefined }));
                }}
                placeholder="Enter task content"
                className={errors.content ? "border-red-500" : ""}
              />
              {errors.content && (
                <p className="text-xs text-red-500">{errors.content}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="columnId">Assign to column: </Label>
              <Select
                value={selectedColumnId}
                onValueChange={(value: ColumnId) => {
                  setSelectedColumnId(value);
                  setErrors((prev) => ({ ...prev, columnId: undefined }));
                }}
              >
                <SelectTrigger
                  className={errors.columnId ? "border-red-500" : ""}
                >
                  <SelectValue placeholder="Select column" />
                </SelectTrigger>
                <SelectContent>
                  {(Object.entries(columnOptions) as [ColumnId, string][]).map(
                    ([value, label]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
              {errors.columnId && (
                <p className="text-xs text-red-500">{errors.columnId}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Add Task</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddKanbanTaskDialog;
