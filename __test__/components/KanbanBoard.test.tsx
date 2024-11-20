import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import { KanbanBoard } from "@/components/KanbanList";

describe("Kanban page", () => {
  it("renders Kanban board ", () => {
    render(
      <MemoryRouter>
        <KanbanBoard />
        {/* <LoginPage /> */}
      </MemoryRouter>,
    );
    expect(screen.getByText("Todo")).toBeInTheDocument();
    expect(screen.getByText("In progress")).toBeInTheDocument();
  });
});
