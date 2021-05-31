export interface PenthouseConfig {
    /** Accessible url. Use file:/// protocol for local html files. */
    url: string;
    /** Original css to extract critical css from */
    cssString: string;
    /** Path to original css file on disk (if using instead of `cssString`) */
    css: string;
    /** Width for critical viewport */
    width: number;
    /** Height for critical viewport */
    height: number;
    /** Configuration for screenshots (not used by default). See [Screenshot example](https://github.com/pocketjoso/penthouse/blob/master/examples/screenshots.js) */
    screenshots: object;
    /** Keep media queries even for width/height values larger than critical viewport. */
    keepLargerMediaQueries: boolean;
    /**
     * Array of css selectors to keep in critical css, even if not appearing in critical viewport.
     * Strings or regex (f.e. `['.keepMeEvenIfNotSeenInDom', /^\.button/]`)
     */
    forceInclude: Array<string>;
    /**
     * Array of css selectors to remove in critical css, even if appearing in critical viewport.
     * Strings or regex (f.e. `['.doNotKeepMeEvenIfNotSeenInDom', /^\.button/]`)
     */
    forceExclude: Array<string>;
    /** Css properties to filter out from critical css */
    propertiesToRemove: Array<string>;
    /** Ms; abort critical CSS generation after this time */
    timeout: number;
    /** Settings for puppeteer. See [Custom puppeteer browser example](https://github.com/pocketjoso/penthouse/blob/master/examples/custom-browser.js) */
    puppeteer: object;
    /** Ms; stop waiting for page load after this time (for sites when page load event is unreliable) */
    pageLoadSkipTimeout: number;
    /**
     * ms; wait time after page load before critical css extraction starts
     * (also before "before" screenshot is taken, if used)
     */
    renderWaitTime: number;
    /** set to false to load JS (not recommended) */
    blockJSRequests: boolean;
    /** characters; strip out inline base64 encoded resources larger than this */
    maxEmbeddedBase64Length: number;
    /** Can be specified to limit nr of elements to inspect per css selector, reducing execution time. */
    maxElementsToCheckPerSelector: number;
    /** specify which user agent string when loading the page */
    userAgent: string;
    /** Set extra http headers to be sent with the request for the url. */
    customPageHeaders: object;
    /** For formatting of each cookie, see [Puppeteer setCookie docs](https://github.com/puppeteer/puppeteer/blob/v1.9.0/docs/api.md#pagesetcookiecookies) */
    cookies: Array<string>;
    /** Make Penthouse throw on errors parsing the original CSS. Legacy option, not recommended */
    strict: boolean;
    /**
     * Let Penthouse stop if the server response code is not matching this value. number and
     * regex types are tested against the [response.status()](https://github.com/puppeteer/puppeteer/blob/v1.14.0/docs/api.md#responsestatus). A function is also allowed and
     * gets [Response](https://github.com/puppeteer/puppeteer/blob/v1.14.0/docs/api.md#class-response) as argument. The function should return a boolean.
     */
    allowedResponseCode: number | RegExp | Function;
}
import { PenthouseConfig } from './penthouse';

export type DeclCallback = (node: object, value: string) => boolean;

export interface CriticalConfig {
    /** Inline critical-path CSS using filamentgroup's loadCSS. Pass an object to configure `inline-critical` */
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
    /** Enable minification of generated critical-path */
    minify: boolean;
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
    rebase: object | Function;
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
import { CriticalConfig } from './critical';

export interface CriticalPages {
    /** Combined with `criticalUrl` to determine the URLs to scrape for Critical CSS */
    uri: string;
    /** Critical CSS files are named with the `template` path, and saved to the `criticalBase` directory */
    template: string;
}

export interface CriticalPluginConfig {
    /**
     * The base URL to use in combination with the `criticalPages` `uri`s to determine the URLs to scrape for Critical CSS.
     * This can also be a file system path. This is combined with `criticalPages.uri`
     * to determine pages to scrap for critical CSS.
     * Determines the `criticalConfig.src` property
     */
    criticalUrl: string;
    /**
     * The base file system path to where the generated Critical CSS file should be saved.
     * This is combined with `criticalPages.template` with `_critical.min.css` appended
     * to it to determine the saved critical CSS file name.
     * Determines the `criticalConfig.target` property
     */
    criticalBase?: string;
    /**
     * An array objects that contain the page `uri`s that are combined with the `criticalUrl` to
     * determine the URLs to scrape for Critical CSS. The resulting files are named with the
     * `template` path, and saved to the `criticalBase` directory
     */
    criticalPages: Partial<CriticalPages>[];
    /**
     * This is the full [config for critical](https://github.com/addyosmani/critical#options) that is passed
     * through to the `critical` package.
     * You may optionally override any properties you like here
     */
    criticalConfig?: Partial<CriticalConfig>;
}
