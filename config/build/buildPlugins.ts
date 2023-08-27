import webpack, { DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const { paths, isDev } = options;
    return [
        new HtmlWebpackPlugin({ template: paths.html }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.ProgressPlugin(),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        isDev && new ReactRefreshWebpackPlugin(),
        new BundleAnalyzerPlugin({ openAnalyzer: false }),
    ].filter(Boolean);
}

export default buildPlugins;
