import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import replace from '@rollup/plugin-replace';

const config = {
    input: './src/index.ts',//入口文件
    output: {
        file: './dist/ssoConfig.js',//打包后的存放文件
        format: 'iife',//输出格式 amd es iife umd cjs
        name: 'ssoConfig'//如果iife,umd需要指定一个全局变量
    },
    plugins: [
        typescript(), // 使用 TypeScript 插件
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**'
        }),
        replace({
            'process.env.UNIVERSAL_ENV': JSON.stringify(process.env.UNIVERSAL_ENV || 'default')
        })
        // 其他插件和配置...
    ],
}

export default config;