export type Mods = Record<string, boolean | string | undefined>;
const classNames = (cls?: string, mods: Mods = {}, additional: Array<string | undefined> = []): string => [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
        .filter(([classNames, value]) => Boolean(value))
        .map(([classNames]) => classNames),

].join(' ');

export default classNames;
