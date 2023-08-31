import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Sidebar rendering', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('Sidebar have collapsed class', () => {
    componentRender(<Sidebar />);
    fireEvent.click(screen.getByTestId('toggle-btn'));
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    fireEvent.click(screen.getByTestId('toggle-btn'));
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
  test('Sidebar have collapsed class', () => {
    componentRender(<Sidebar />);
    fireEvent.click(screen.getByTestId('toggle-btn'));
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    fireEvent.click(screen.getByTestId('toggle-btn'));
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});
