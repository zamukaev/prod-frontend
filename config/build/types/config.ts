export type BuildMode = 'development' | 'production';

export interface BuildPath {
    entry: string;
    build: string;
    html: string;
    src: string;
}
export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPath;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: 'storybook' | 'frontend' | 'jest';
}

export interface BuildEnv {
    port: number;
    mode: BuildMode;
    apiUrl: string;
}
