import { BuildOptions } from '../types/config';

export function buildBabelLoader(options: BuildOptions) {
    return {
        test: /\.m?js|ts|tsx$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };
}
