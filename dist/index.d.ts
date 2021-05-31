import { Plugin } from 'rollup';
interface CriticalPages {
    uri: string;
    template: string;
}
interface CriticalPluginConfig {
    criticalUrl: string;
    criticalBase?: string;
    criticalPages: Partial<CriticalPages>[];
    criticalConfig?: Partial<CriticalConfig>;
}
declare function PluginCritical(pluginConfig: CriticalPluginConfig, callback?: Function): Plugin;
export default PluginCritical;
