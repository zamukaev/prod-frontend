import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';
import 'shared/config/i18n/i18n';
import 'app/styles/index.scss';

const root = document.querySelector('#root');

ReactDOM.createRoot(root as Element).render(

    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
