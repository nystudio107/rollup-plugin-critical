interface RollupError extends RollupLogProps {
	parserError?: Error;
	stack?: string;
	watchFiles?: string[];
}

interface RollupWarning extends RollupLogProps {
	chunkName?: string;
	cycle?: string[];
	exportName?: string;
	exporter?: string;
	guess?: string;
	importer?: string;
	missing?: string;
	modules?: string[];
	names?: string[];
	reexporter?: string;
	source?: string;
	sources?: string[];
}

interface RollupLogProps {
	code?: string;
	frame?: string;
	hook?: string;
	id?: string;
	loc?: {
		column: number;
		file?: string;
		line: number;
	};
	message: string;
	name?: string;
	plugin?: string;
	pluginCode?: string;
	pos?: number;
	url?: string;
}

type SourceMapSegment =
	| [number]
	| [number, number, number, number]
	| [number, number, number, number, number];

interface ExistingDecodedSourceMap {
	file?: string;
	mappings: SourceMapSegment[][];
	names: string[];
	sourceRoot?: string;
	sources: string[];
	sourcesContent?: string[];
	version: number;
}

interface ExistingRawSourceMap {
	file?: string;
	mappings: string;
	names: string[];
	sourceRoot?: string;
	sources: string[];
	sourcesContent?: string[];
	version: number;
}

type DecodedSourceMapOrMissing =
	| {
			mappings?: never;
			missing: true;
			plugin: string;
	  }
	| ExistingDecodedSourceMap;

interface SourceMap {
	file: string;
	mappings: string;
	names: string[];
	sources: string[];
	sourcesContent: string[];
	version: number;
	toString(): string;
	toUrl(): string;
}

type SourceMapInput = ExistingRawSourceMap | string | null | { mappings: '' };

type PartialNull<T> = {
	[P in keyof T]: T[P] | null;
};

interface ModuleOptions {
	meta: CustomPluginOptions;
	moduleSideEffects: boolean | 'no-treeshake';
	syntheticNamedExports: boolean | string;
}

interface SourceDescription extends Partial<PartialNull<ModuleOptions>> {
	ast?: AcornNode;
	code: string;
	map?: SourceMapInput;
}

interface TransformModuleJSON extends Partial<PartialNull<ModuleOptions>> {
	ast?: AcornNode;
	code: string;
	// note if plugins use new this.cache to opt-out auto transform cache
	customTransformCache: boolean;
	originalCode: string;
	originalSourcemap: ExistingDecodedSourceMap | null;
	resolvedIds?: ResolvedIdMap;
	sourcemapChain: DecodedSourceMapOrMissing[];
	transformDependencies: string[];
}

interface ModuleJSON extends TransformModuleJSON {
	ast: AcornNode;
	dependencies: string[];
	id: string;
	transformFiles: EmittedFile[] | undefined;
}

interface PluginCache {
	delete(id: string): boolean;
	get<T = any>(id: string): T;
	has(id: string): boolean;
	set<T = any>(id: string, value: T): void;
}

interface MinimalPluginContext {
	meta: PluginContextMeta;
}

interface EmittedAsset {
	fileName?: string;
	name?: string;
	source?: string | Uint8Array;
	type: 'asset';
}

interface EmittedChunk {
	fileName?: string;
	id: string;
	implicitlyLoadedAfterOneOf?: string[];
	importer?: string;
	name?: string;
	preserveSignature?: PreserveEntrySignaturesOption;
	type: 'chunk';
}

type EmittedFile = EmittedAsset | EmittedChunk;

type EmitAsset = (name: string, source?: string | Uint8Array) => string;

type EmitChunk = (id: string, options?: { name?: string }) => string;

type EmitFile = (emittedFile: EmittedFile) => string;

interface ModuleInfo {
	ast: AcornNode | null;
	code: string | null;
	dynamicImporters: readonly string[];
	dynamicallyImportedIds: readonly string[];
	hasModuleSideEffects: boolean | 'no-treeshake';
	id: string;
	implicitlyLoadedAfterOneOf: readonly string[];
	implicitlyLoadedBefore: readonly string[];
	importedIds: readonly string[];
	importers: readonly string[];
	isEntry: boolean;
	isExternal: boolean;
	meta: CustomPluginOptions;
	syntheticNamedExports: boolean | string;
}

type GetModuleInfo = (moduleId: string) => ModuleInfo | null;

interface CustomPluginOptions {
	[plugin: string]: any;
}

interface PluginContext extends MinimalPluginContext {
	addWatchFile: (id: string) => void;
	cache: PluginCache;
	/** @deprecated Use `this.emitFile` instead */
	emitAsset: EmitAsset;
	/** @deprecated Use `this.emitFile` instead */
	emitChunk: EmitChunk;
	emitFile: EmitFile;
	error: (err: RollupError | string, pos?: number | { column: number; line: number }) => never;
	/** @deprecated Use `this.getFileName` instead */
	getAssetFileName: (assetReferenceId: string) => string;
	/** @deprecated Use `this.getFileName` instead */
	getChunkFileName: (chunkReferenceId: string) => string;
	getFileName: (fileReferenceId: string) => string;
	getModuleIds: () => IterableIterator<string>;
	getModuleInfo: GetModuleInfo;
	getWatchFiles: () => string[];
	/** @deprecated Use `this.resolve` instead */
	isExternal: IsExternal;
	/** @deprecated Use `this.getModuleIds` instead */
	moduleIds: IterableIterator<string>;
	parse: (input: string, options?: any) => AcornNode;
	resolve: (
		source: string,
		importer?: string,
		options?: { custom?: CustomPluginOptions; skipSelf?: boolean }
	) => Promise<ResolvedId | null>;
	/** @deprecated Use `this.resolve` instead */
	resolveId: (source: string, importer?: string) => Promise<string | null>;
	setAssetSource: (assetReferenceId: string, source: string | Uint8Array) => void;
	warn: (warning: RollupWarning | string, pos?: number | { column: number; line: number }) => void;
}

interface PluginContextMeta {
	rollupVersion: string;
	watchMode: boolean;
}

interface ResolvedId extends ModuleOptions {
	external: boolean | 'absolute';
	id: string;
}

interface ResolvedIdMap {
	[key: string]: ResolvedId;
}

interface PartialResolvedId extends Partial<PartialNull<ModuleOptions>> {
	external?: boolean | 'absolute' | 'relative';
	id: string;
}

type ResolveIdResult = string | false | null | undefined | PartialResolvedId;

type ResolveIdHook = (
	this: PluginContext,
	source: string,
	importer: string | undefined,
	options: { custom?: CustomPluginOptions }
) => Promise<ResolveIdResult> | ResolveIdResult;

type IsExternal = (
	source: string,
	importer: string | undefined,
	isResolved: boolean
) => boolean;

type IsPureModule = (id: string) => boolean | null | undefined;

type HasModuleSideEffects = (id: string, external: boolean) => boolean;

type LoadResult = SourceDescription | string | null | undefined;

type LoadHook = (this: PluginContext, id: string) => Promise<LoadResult> | LoadResult;

interface TransformPluginContext extends PluginContext {
	getCombinedSourcemap: () => SourceMap;
}

type TransformResult = string | null | undefined | Partial<SourceDescription>;

type TransformHook = (
	this: TransformPluginContext,
	code: string,
	id: string
) => Promise<TransformResult> | TransformResult;

type ModuleParsedHook = (this: PluginContext, info: ModuleInfo) => Promise<void> | void;

type RenderChunkHook = (
	this: PluginContext,
	code: string,
	chunk: RenderedChunk,
	options: NormalizedOutputOptions
) =>
	| Promise<{ code: string; map?: SourceMapInput } | null>
	| { code: string; map?: SourceMapInput }
	| string
	| null;

type ResolveDynamicImportHook = (
	this: PluginContext,
	specifier: string | AcornNode,
	importer: string
) => Promise<ResolveIdResult> | ResolveIdResult;

type ResolveImportMetaHook = (
	this: PluginContext,
	prop: string | null,
	options: { chunkId: string; format: InternalModuleFormat; moduleId: string }
) => string | null | undefined;

type ResolveAssetUrlHook = (
	this: PluginContext,
	options: {
		assetFileName: string;
		chunkId: string;
		format: InternalModuleFormat;
		moduleId: string;
		relativeAssetPath: string;
	}
) => string | null | undefined;

type ResolveFileUrlHook = (
	this: PluginContext,
	options: {
		assetReferenceId: string | null;
		chunkId: string;
		chunkReferenceId: string | null;
		fileName: string;
		format: InternalModuleFormat;
		moduleId: string;
		referenceId: string;
		relativePath: string;
	}
) => string | null | undefined;

type AddonHookFunction = (this: PluginContext) => string | Promise<string>;
type AddonHook = string | AddonHookFunction;

type ChangeEvent = 'create' | 'update' | 'delete';
type WatchChangeHook = (
	this: PluginContext,
	id: string,
	change: { event: ChangeEvent }
) => void;

interface OutputBundle {
	[fileName: string]: OutputAsset | OutputChunk;
}

interface PluginHooks extends OutputPluginHooks {
	buildEnd: (this: PluginContext, err?: Error) => Promise<void> | void;
	buildStart: (this: PluginContext, options: NormalizedInputOptions) => Promise<void> | void;
	closeBundle: (this: PluginContext) => Promise<void> | void;
	closeWatcher: (this: PluginContext) => void;
	load: LoadHook;
	moduleParsed: ModuleParsedHook;
	options: (
		this: MinimalPluginContext,
		options: InputOptions
	) => Promise<InputOptions | null | undefined> | InputOptions | null | undefined;
	resolveDynamicImport: ResolveDynamicImportHook;
	resolveId: ResolveIdHook;
	transform: TransformHook;
	watchChange: WatchChangeHook;
}

interface OutputPluginHooks {
	augmentChunkHash: (this: PluginContext, chunk: PreRenderedChunk) => string | void;
	generateBundle: (
		this: PluginContext,
		options: NormalizedOutputOptions,
		bundle: OutputBundle,
		isWrite: boolean
	) => void | Promise<void>;
	outputOptions: (this: PluginContext, options: OutputOptions) => OutputOptions | null | undefined;
	renderChunk: RenderChunkHook;
	renderDynamicImport: (
		this: PluginContext,
		options: {
			customResolution: string | null;
			format: InternalModuleFormat;
			moduleId: string;
			targetModuleId: string | null;
		}
	) => { left: string; right: string } | null | undefined;
	renderError: (this: PluginContext, err?: Error) => Promise<void> | void;
	renderStart: (
		this: PluginContext,
		outputOptions: NormalizedOutputOptions,
		inputOptions: NormalizedInputOptions
	) => Promise<void> | void;
	/** @deprecated Use `resolveFileUrl` instead */
	resolveAssetUrl: ResolveAssetUrlHook;
	resolveFileUrl: ResolveFileUrlHook;
	resolveImportMeta: ResolveImportMetaHook;
	writeBundle: (
		this: PluginContext,
		options: NormalizedOutputOptions,
		bundle: OutputBundle
	) => void | Promise<void>;
}

interface OutputPluginValueHooks {
	banner: AddonHook;
	cacheKey: string;
	footer: AddonHook;
	intro: AddonHook;
	outro: AddonHook;
}

interface Plugin extends Partial<PluginHooks>, Partial<OutputPluginValueHooks> {
	// for inter-plugin communication
	api?: any;
	name: string;
}

interface OutputPlugin extends Partial<OutputPluginHooks>, Partial<OutputPluginValueHooks> {
	name: string;
}

interface TreeshakingOptions {
	annotations?: boolean;
	moduleSideEffects?: ModuleSideEffectsOption;
	propertyReadSideEffects?: boolean | 'always';
	/** @deprecated Use `moduleSideEffects` instead */
	pureExternalModules?: PureModulesOption;
	tryCatchDeoptimization?: boolean;
	unknownGlobalSideEffects?: boolean;
}

interface NormalizedTreeshakingOptions {
	annotations: boolean;
	moduleSideEffects: HasModuleSideEffects;
	propertyReadSideEffects: boolean | 'always';
	tryCatchDeoptimization: boolean;
	unknownGlobalSideEffects: boolean;
}

interface GetManualChunkApi {
	getModuleIds: () => IterableIterator<string>;
	getModuleInfo: GetModuleInfo;
}
type GetManualChunk = (id: string, api: GetManualChunkApi) => string | null | undefined;

type ExternalOption =
	| (string | RegExp)[]
	| string
	| RegExp
	| ((
			source: string,
			importer: string | undefined,
			isResolved: boolean
	  ) => boolean | null | undefined);
type PureModulesOption = boolean | string[] | IsPureModule;
type GlobalsOption = { [name: string]: string } | ((name: string) => string);
type InputOption = string | string[] | { [entryAlias: string]: string };
type ManualChunksOption = { [chunkAlias: string]: string[] } | GetManualChunk;
type ModuleSideEffectsOption = boolean | 'no-external' | string[] | HasModuleSideEffects;
type PreserveEntrySignaturesOption = false | 'strict' | 'allow-extension' | 'exports-only';
type SourcemapPathTransformOption = (
	relativeSourcePath: string,
	sourcemapPath: string
) => string;

interface InputOptions {
	acorn?: Record<string, unknown>;
	acornInjectPlugins?: (() => unknown)[] | (() => unknown);
	cache?: false | RollupCache;
	context?: string;
	experimentalCacheExpiry?: number;
	external?: ExternalOption;
	/** @deprecated Use the "inlineDynamicImports" output option instead. */
	inlineDynamicImports?: boolean;
	input?: InputOption;
	makeAbsoluteExternalsRelative?: boolean | 'ifRelativeSource';
	/** @deprecated Use the "manualChunks" output option instead. */
	manualChunks?: ManualChunksOption;
	moduleContext?: ((id: string) => string | null | undefined) | { [id: string]: string };
	onwarn?: WarningHandlerWithDefault;
	perf?: boolean;
	plugins?: Plugin[];
	preserveEntrySignatures?: PreserveEntrySignaturesOption;
	/** @deprecated Use the "preserveModules" output option instead. */
	preserveModules?: boolean;
	preserveSymlinks?: boolean;
	shimMissingExports?: boolean;
	strictDeprecations?: boolean;
	treeshake?: boolean | TreeshakingOptions;
	watch?: WatcherOptions | false;
}

interface NormalizedInputOptions {
	acorn: Record<string, unknown>;
	acornInjectPlugins: (() => unknown)[];
	cache: false | undefined | RollupCache;
	context: string;
	experimentalCacheExpiry: number;
	external: IsExternal;
	/** @deprecated Use the "inlineDynamicImports" output option instead. */
	inlineDynamicImports: boolean | undefined;
	input: string[] | { [entryAlias: string]: string };
	makeAbsoluteExternalsRelative: boolean | 'ifRelativeSource';
	/** @deprecated Use the "manualChunks" output option instead. */
	manualChunks: ManualChunksOption | undefined;
	moduleContext: (id: string) => string;
	onwarn: WarningHandler;
	perf: boolean;
	plugins: Plugin[];
	preserveEntrySignatures: PreserveEntrySignaturesOption;
	/** @deprecated Use the "preserveModules" output option instead. */
	preserveModules: boolean | undefined;
	preserveSymlinks: boolean;
	shimMissingExports: boolean;
	strictDeprecations: boolean;
	treeshake: false | NormalizedTreeshakingOptions;
}

type InternalModuleFormat = 'amd' | 'cjs' | 'es' | 'iife' | 'system' | 'umd';

type ModuleFormat = InternalModuleFormat | 'commonjs' | 'esm' | 'module' | 'systemjs';

type OptionsPaths = Record<string, string> | ((id: string) => string);

type InteropType = boolean | 'auto' | 'esModule' | 'default' | 'defaultOnly';

type GetInterop = (id: string | null) => InteropType;

type AmdOptions = (
	| {
			autoId?: false;
			id: string;
	  }
	| {
			autoId: true;
			basePath?: string;
			id?: undefined;
	  }
	| {
			autoId?: false;
			id?: undefined;
	  }
) & {
	define?: string;
};

type NormalizedAmdOptions = (
	| {
			autoId: false;
			id?: string;
	  }
	| {
			autoId: true;
			basePath: string;
	  }
) & {
	define: string;
};

interface OutputOptions {
	amd?: AmdOptions;
	assetFileNames?: string | ((chunkInfo: PreRenderedAsset) => string);
	banner?: string | (() => string | Promise<string>);
	chunkFileNames?: string | ((chunkInfo: PreRenderedChunk) => string);
	compact?: boolean;
	// only required for bundle.write
	dir?: string;
	/** @deprecated Use the "renderDynamicImport" plugin hook instead. */
	dynamicImportFunction?: string;
	entryFileNames?: string | ((chunkInfo: PreRenderedChunk) => string);
	esModule?: boolean;
	exports?: 'default' | 'named' | 'none' | 'auto';
	extend?: boolean;
	externalLiveBindings?: boolean;
	// only required for bundle.write
	file?: string;
	footer?: string | (() => string | Promise<string>);
	format?: ModuleFormat;
	freeze?: boolean;
	globals?: GlobalsOption;
	hoistTransitiveImports?: boolean;
	indent?: string | boolean;
	inlineDynamicImports?: boolean;
	interop?: InteropType | GetInterop;
	intro?: string | (() => string | Promise<string>);
	manualChunks?: ManualChunksOption;
	minifyInternalExports?: boolean;
	name?: string;
	namespaceToStringTag?: boolean;
	noConflict?: boolean;
	outro?: string | (() => string | Promise<string>);
	paths?: OptionsPaths;
	plugins?: OutputPlugin[];
	preferConst?: boolean;
	preserveModules?: boolean;
	preserveModulesRoot?: string;
	sanitizeFileName?: boolean | ((fileName: string) => string);
	sourcemap?: boolean | 'inline' | 'hidden';
	sourcemapExcludeSources?: boolean;
	sourcemapFile?: string;
	sourcemapPathTransform?: SourcemapPathTransformOption;
	strict?: boolean;
	systemNullSetters?: boolean;
	validate?: boolean;
}

interface NormalizedOutputOptions {
	amd: NormalizedAmdOptions;
	assetFileNames: string | ((chunkInfo: PreRenderedAsset) => string);
	banner: () => string | Promise<string>;
	chunkFileNames: string | ((chunkInfo: PreRenderedChunk) => string);
	compact: boolean;
	dir: string | undefined;
	/** @deprecated Use the "renderDynamicImport" plugin hook instead. */
	dynamicImportFunction: string | undefined;
	entryFileNames: string | ((chunkInfo: PreRenderedChunk) => string);
	esModule: boolean;
	exports: 'default' | 'named' | 'none' | 'auto';
	extend: boolean;
	externalLiveBindings: boolean;
	file: string | undefined;
	footer: () => string | Promise<string>;
	format: InternalModuleFormat;
	freeze: boolean;
	globals: GlobalsOption;
	hoistTransitiveImports: boolean;
	indent: true | string;
	inlineDynamicImports: boolean;
	interop: GetInterop;
	intro: () => string | Promise<string>;
	manualChunks: ManualChunksOption;
	minifyInternalExports: boolean;
	name: string | undefined;
	namespaceToStringTag: boolean;
	noConflict: boolean;
	outro: () => string | Promise<string>;
	paths: OptionsPaths;
	plugins: OutputPlugin[];
	preferConst: boolean;
	preserveModules: boolean;
	preserveModulesRoot: string | undefined;
	sanitizeFileName: (fileName: string) => string;
	sourcemap: boolean | 'inline' | 'hidden';
	sourcemapExcludeSources: boolean;
	sourcemapFile: string | undefined;
	sourcemapPathTransform: SourcemapPathTransformOption | undefined;
	strict: boolean;
	systemNullSetters: boolean;
	validate: boolean;
}

type WarningHandlerWithDefault = (
	warning: RollupWarning,
	defaultHandler: WarningHandler
) => void;
type WarningHandler = (warning: RollupWarning) => void;

interface PreRenderedAsset {
	name: string | undefined;
	source: string | Uint8Array;
	type: 'asset';
}

interface OutputAsset extends PreRenderedAsset {
	fileName: string;
	/** @deprecated Accessing "isAsset" on files in the bundle is deprecated, please use "type === \'asset\'" instead */
	isAsset: true;
}

interface RenderedModule {
	code: string | null;
	originalLength: number;
	removedExports: string[];
	renderedExports: string[];
	renderedLength: number;
}

interface PreRenderedChunk {
	exports: string[];
	facadeModuleId: string | null;
	isDynamicEntry: boolean;
	isEntry: boolean;
	isImplicitEntry: boolean;
	modules: {
		[id: string]: RenderedModule;
	};
	name: string;
	type: 'chunk';
}

interface RenderedChunk extends PreRenderedChunk {
	code?: string;
	dynamicImports: string[];
	fileName: string;
	implicitlyLoadedBefore: string[];
	importedBindings: {
		[imported: string]: string[];
	};
	imports: string[];
	map?: SourceMap;
	referencedFiles: string[];
}

interface OutputChunk extends RenderedChunk {
	code: string;
}

interface SerializablePluginCache {
	[key: string]: [number, any];
}

interface RollupCache {
	modules: ModuleJSON[];
	plugins?: Record<string, SerializablePluginCache>;
}

interface ChokidarOptions {
	alwaysStat?: boolean;
	atomic?: boolean | number;
	awaitWriteFinish?:
		| {
				pollInterval?: number;
				stabilityThreshold?: number;
		  }
		| boolean;
	binaryInterval?: number;
	cwd?: string;
	depth?: number;
	disableGlobbing?: boolean;
	followSymlinks?: boolean;
	ignoreInitial?: boolean;
	ignorePermissionErrors?: boolean;
	ignored?: any;
	interval?: number;
	persistent?: boolean;
	useFsEvents?: boolean;
	usePolling?: boolean;
}

interface WatcherOptions {
	buildDelay?: number;
	chokidar?: ChokidarOptions;
	clearScreen?: boolean;
	exclude?: string | RegExp | (string | RegExp)[];
	include?: string | RegExp | (string | RegExp)[];
	skipWrite?: boolean;
}

interface AcornNode {
	end: number;
	start: number;
	type: string;
}

interface PenthouseConfig {
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

type DeclCallback = (node: object, value: string) => boolean;

interface CriticalConfig {
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

interface CriticalPages {
    /** Combined with `criticalUrl` to determine the URLs to scrape for Critical CSS */
    uri: string;
    /** Critical CSS files are named with the `template` path, and saved to the `criticalBase` directory */
    template: string;
}

interface CriticalPluginConfig {
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

/**
 * [Vite.js](https://vitejs.dev/) & [Rollup](https://rollupjs.org/) plugin for generating critical CSS
 * that uses the [critical](https://github.com/addyosmani/critical) generator under the hood.
 *
 * @param {CriticalPluginConfig} pluginConfig - the plugin configuration object
 * @param {Function} callback - callback upon completion of the critical CSS generation
 * @constructor
 */
declare function PluginCritical(pluginConfig: CriticalPluginConfig, callback?: Function): Plugin;

export { CriticalPages, CriticalPluginConfig, PluginCritical };
