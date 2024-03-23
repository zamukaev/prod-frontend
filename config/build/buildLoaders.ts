import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const babelLoader = buildBabelLoader(options);

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const scssLoader = buildCssLoader(options.isDev);
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        babelLoader,
        tsLoader,
        scssLoader,
        fileLoader,
        svgLoader,
    ];
}

export default buildLoaders;
