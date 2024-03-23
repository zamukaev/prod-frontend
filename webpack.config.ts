import path from 'path';
import { Configuration } from 'webpack';

import buildWebpackConfig from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPath } from './config/build/types/config';

export default (env: BuildEnv): Configuration => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 5000;
    const apiUrl = env.apiUrl || 'http://localhost:8000';

    return buildWebpackConfig({
        mode,
        paths,
        port: PORT,
        isDev,
        apiUrl,
        project: 'frontend',
    });
};
