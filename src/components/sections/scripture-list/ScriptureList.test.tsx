import { render, screen } from '@testing-library/react';

import ScriptureList from './ScriptureList';

describe('ScriptureList Component', () => {
  it('renders the event name and formatted date', () => {
    const items = ['John 3:16', '1 Corinthians 2:12', 'Deuteronomy 8:17-18', 'James 1:17'];

    render(<ScriptureList scriptures={items} />);

    items.forEach((item) => expect(screen.getByText(item)).toBeInTheDocument());
  });
});
