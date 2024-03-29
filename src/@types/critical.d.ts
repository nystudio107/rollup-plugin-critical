declare module 'critical';

type DeclCallback = (node: object, value: string) => boolean;

interface PostcssUrlAsset {
    /** original url */
    url: string;
    /** url pathname (url without search or hash) */
     pathname: string;
     /** absolute path to asset */
    absolutePath: string;
    /** current relative path to asset */
    relativePath: string;
    /** search from url, ex. ?query=1 from ./image.png?query=1 **/
    search: string;
    /** hash from url, ex. #spriteLink from ../asset.svg#spriteLink */
    hash: string;
}

type RebaseFn = (asset: PostcssUrlAsset) => string;

interface RebaseConfig {
    from: string;
    to: string;
}

interface CriticalConfig {
    /** Inline critical-path CSS using Filament Group's loadCSS. Pass an object to configure `inline-critical` */
    inline: boolean;
    /** Base directory in which the source and destination are to be written */
    base: string;
    /** HTML source to be operated against. This option takes precedence over the `src` option */
    html: string;
    /** An array of paths to css files, file globs or Vinyl file objects. */
    css: Array<string>;
    /** Location of the HTML source to be operated against */
    src: string;
    /**
     * Location of where to save the output of an operation.
     * Use an object with 'html' and 'css' props if you want to store both
     */
    target: string | Partial<{
        css: string;
        html: string;
        uncritical: string;
    }>;
    /** Width of the target viewport */
    width: number;
    /** Height of the target viewport */
    height: number;
    /**
     * Remove the inlined styles from any stylesheets referenced in the HTML.
     * It generates new references based on extracted content so it's safe to use for
     * multiple HTML files referencing the same stylesheet. Use with caution.
     * Removing the critical CSS per page results in a unique async loaded CSS file for every page.
     * Meaning you can't rely on cache across multiple pages
     */
    extract: boolean;
    /** Inline images */
    inlineImages: boolean;
    /** List of directories/urls where the inliner should start looking for assets */
    assetPaths: Array<string>;
    /** Sets a max file size (in bytes) for base64 inlined images */
    maxImageFileSize: number;
    /**
     * Critical tries it's best to rebase the asset paths relative to the document.
     * If this doesn't work as expected you can always use this option to control the rebase paths.
     * See postcss-url for details. (https://github.com/pocketjoso/penthouse#usage-1).
     */
    rebase: RebaseConfig | RebaseFn;
    /** ignore CSS rules */
    ignore: Partial<{
        atrule: Array<string>;
        rule: Array<string>;
        decl: DeclCallback;
    }>;
    /** User agent to use when fetching a remote src */
    userAgent: string;
    /** Configuration options for `penthouse`. */
    penthouse: Partial<PenthouseConfig>;
    /** Configuration options for `got`. */
    request: object;
    /** RFC2617 basic authorization: `user` */
    user: string;
    /** RFC2617 basic authorization: `pass` */
    pass: string;
    /** Throw an error if no css is found */
    strict: boolean;
}
