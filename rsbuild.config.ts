import { defineConfig } from '@rsbuild/core'
import { resolve } from 'path'

import { pluginVue } from '@rsbuild/plugin-vue'
import { pluginCssMinimizer } from '@rsbuild/plugin-css-minimizer'

export default ({ env, command, envMode }) => {
  return defineConfig({
    html: {
      title: process.env.HTML_TITLE,
      template: './public/index.html',
    },
    plugins: [pluginVue(), pluginCssMinimizer()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  })
}
