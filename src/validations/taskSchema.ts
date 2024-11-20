import { z } from "zod";

export const taskSchema = z.object({
  content: z.string().trim().nonempty("Task content is required"),
  columnId: z.enum(["todo", "in-progress", "done"], {
    errorMap: () => ({ message: "Column selection is required" }),
  }),
});
