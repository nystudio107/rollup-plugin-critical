declare module 'critical' {
  export function generate(params: Partial<CriticalConfig>, cb?: (err: Error | null, result?: CriticalResult) => void): Promise<CriticalResult>;
  export function stream(params: Partial<CriticalConfig>): NodeJS.ReadWriteStream;
}

interface CriticalResult {
  css: string;
  html: string;
  uncritical: string;
}

type DeclCallback = (node: object, value: string) => boolean;

interface PostcssUrlAsset {
    url: string;
    pathname: string;
    absolutePath: string;
    relativePath: string;
    search: string;
    hash: string;
}

type RebaseFn = (asset: PostcssUrlAsset) => string;

interface RebaseConfig {
    from: string;
    to: string;
}

interface CriticalConfig {
    inline: boolean | Partial<{
        strategy: string;
        basePath: string;
        replaceStylesheets: string[] | boolean | ((href: string) => string);
    }>;
    base: string;
    html: string;
    css: Array<string>;
    src: string;
    target: string | Partial<{
        css: string;
        html: string;
        uncritical: string;
    }>;
    width: number;
    height: number;
    dimensions: Array<{ width: number; height: number }>;
    extract: boolean;
    inlineImages: boolean;
    assetPaths: Array<string>;
    maxImageFileSize: number;
    rebase: RebaseConfig | RebaseFn | boolean;
    ignore: Array<string> | Partial<{
        atrule: Array<string>;
        rule: Array<string>;
        decl: DeclCallback;
    }>;
    include: Array<string | RegExp>;
    userAgent: string;
    penthouse: Partial<PenthouseConfig>;
    request: object;
    user: string;
    pass: string;
    strict: boolean;
    ignoreInlinedStyles: boolean;
    concurrency: number;
    postcss: Array<object>;
    cleanCSS: object;
}
