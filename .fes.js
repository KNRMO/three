/*
 * @Description:
 * @Version: 1.668
 * @Autor: 地虎降天龙
 * @Date: 2023-10-16 10:53:09
 * @LastEditors: 地虎降天龙
 * @LastEditTime: 2023-12-13 08:46:51
 */
// import { resolve } from 'path';
import { join } from 'path';
import { defineBuildConfig, someApi, plugin, ApplyPluginsType } from '@fesjs/fes';
import { templateCompilerOptions } from '@tresjs/core';
import UnoCSS from 'unocss/vite';
// import glsl from 'vite-plugin-glsl';


const timeStamp = new Date().getTime()
export default defineBuildConfig({
    title: 'TvT.js',
    publicPath: './',
    access: {
        roles: {
            admin: ['*'],
            manager: ['/'],
        },
    },
    layout: {
        navigation: null,
    },
    enums: {
        status: [
            ['0', '无效的'],
            ['1', '有效的'],
        ],
    },
    //add by 地虎降天龙
    viteVuePlugin: {
        ...templateCompilerOptions,
    },
    viteOption: {
        base: "/icegl-three-vue-tres/", //     ./     /icegl-three-vue-tres/
        plugins: [
            UnoCSS({
                /* options */
            }),
            // glsl(),
        ],
        build: {
            rollupOptions: {
                output: {
                    chunkFileNames: `js/[name].[hash]${timeStamp}.js`,
                    entryFileNames: `js/[name].[hash]${timeStamp}.js`,
                    assetFileNames: `[ext]/[name].[hash]${timeStamp}.[ext]`,
                },
            }
        },
    },
    alias: { PLS: join(__dirname, './src/plugins') },
    // { find: 'pls', replacement: resolve(__dirname, './src/plugins') },
    // { '@': join(__dirname, '/src') }
});

