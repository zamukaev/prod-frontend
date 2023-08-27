import { fireEvent, render, screen } from '@testing-library/react';
import { renderWithTranslation }
    from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Sidebar rendering', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Sidebar have collapsed class', () => {
        renderWithTranslation(<Sidebar />);
        fireEvent.click(screen.getByTestId('toggle-btn'));
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        fireEvent.click(screen.getByTestId('toggle-btn'));
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
    test('Sidebar have collapsed class', () => {
        renderWithTranslation(<Sidebar />);
        fireEvent.click(screen.getByTestId('toggle-btn'));
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        fireEvent.click(screen.getByTestId('toggle-btn'));
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
