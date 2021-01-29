import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Fetches data and renders the bubbles", async () => {

  const { getByText } = render(<BubblePage />);
  getByText("bubbles");
});
