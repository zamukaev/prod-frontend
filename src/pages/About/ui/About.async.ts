import React from 'react';

export const AboutAsync = React.lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./About')), 1500);
}));
