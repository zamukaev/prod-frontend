import webpack, { DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const {
        paths,
        isDev,
        apiUrl,
        project,
    } = options;
    return [
        new HtmlWebpackPlugin({ template: paths.html }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.ProgressPlugin(),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        isDev && new ReactRefreshWebpackPlugin(),

        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: isDev ? 'server' : 'disabled',
        }),

    ].filter(Boolean);
}

export default buildPlugins;
