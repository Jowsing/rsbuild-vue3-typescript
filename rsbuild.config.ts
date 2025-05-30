import { defineConfig } from "@rsbuild/core";
import { resolve } from "path";

import { pluginVue } from "@rsbuild/plugin-vue";
import { pluginCssMinimizer } from '@rsbuild/plugin-css-minimizer';
import { UnoCSSRspackPlugin } from '@unocss/webpack/rspack';
import { presetAttributify } from '@unocss/preset-attributify';
import { presetUno } from '@unocss/preset-uno';

export default ({ env, command, envMode }) => {
	console.log("envMode ->", envMode);
	return defineConfig({
		html: {
			title: process.env.HTML_TITLE,
			template: "./public/index.html",
		},
		plugins: [
			pluginVue(),
      pluginCssMinimizer(),
		],
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src"),
			},
		},
    tools: {
      lightningcssLoader: false,
      rspack: {
        plugins: [
          UnoCSSRspackPlugin({
            presets: [presetUno(), presetAttributify()],
          }),
        ],
      },
    },
	});
};
