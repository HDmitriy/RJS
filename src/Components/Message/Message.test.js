import { render, screen } from '@testing-library/react';
import { Message } from "./Message"

describe("message test", () => {
  test('Message text', () => {
    render(<Message />);
    const messageText = screen.getByText(/homework/i);
    expect(messageText).toBeInTheDocument();
})});
