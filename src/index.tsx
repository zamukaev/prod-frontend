import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';

import 'app/styles/index.scss';

import 'shared/config/i18n/i18n';

const root = document.querySelector('#root');

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
