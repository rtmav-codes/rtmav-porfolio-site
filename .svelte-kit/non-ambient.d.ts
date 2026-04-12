
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/speak2me" | "/surgicaltheater" | "/trident" | "/walletguard";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/speak2me": Record<string, never>;
			"/surgicaltheater": Record<string, never>;
			"/trident": Record<string, never>;
			"/walletguard": Record<string, never>
		};
		Pathname(): "/" | "/speak2me" | "/surgicaltheater" | "/trident" | "/walletguard";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/code.png" | "/email-white.svg" | "/evoq-ai-featured.png" | "/favicon.ico" | "/github.svg" | "/recent/s2m.jpg" | "/resume.svg" | "/speak2me/dashboard-1.png" | "/speak2me/dashboard-2.png" | "/speak2me/excercise-1.png" | "/speak2me/excercise-2.png" | "/speak2me/excercise-3.png" | "/speak2me/excercise-4.png" | "/speak2me/excercise-5.png" | "/speak2me/excercise-6.png" | "/speak2me/excercise-7.png" | "/speak2me/heatmap-1.png" | "/speak2me/progress-1.png" | "/speak2me-featured.png" | "/sr-featured.png" | "/st-before/.DS_Store" | "/st-before/st-before-1.png" | "/st-before/st-before-2.png" | "/st-before/st-before-3.png" | "/st-before/st-before-4.png" | "/st-before/st-before-5.png" | "/surgical-featured.png" | "/trident-copy.png" | "/twitter.png" | "/wallet-guard-after/.DS_Store" | "/wallet-guard-after/wallet-guard-browser-extension-cover.png" | "/wallet-guard-after/wallet-guard-chat-web3.png" | "/wallet-guard-after/wallet-guard-security-dashboard-cover.png" | "/wallet-guard-after/wallet-guard-security-snap-cover.png" | "/wallet-guard-before/wallet-guard-extension.png" | "/wallet-guard-before/wallet-guard-snap.png" | "/work/.DS_Store" | "/work/bts-housing.png" | "/work/keep-calm.png" | "/work/s2m.png" | "/work/speak2me-logo.png" | "/work/st-logo.png" | "/work/wallet-guard.png" | string & {};
	}
}