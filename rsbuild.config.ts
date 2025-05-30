import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import path from 'node:path';

export default ({ env, command, envMode }) => {

  return defineConfig({
    plugins: [pluginVue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  })
}
