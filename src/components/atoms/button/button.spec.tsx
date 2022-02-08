import { render } from "@testing-library/react";
import React from "react";
import { Button } from ".";

describe("button", () => {
  it("renders as expected", () => {
    const { container } = render(<Button>Test</Button>);

    expect(container).toMatchSnapshot();
  });
});
