import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
const config = {
    input: './src/index.js',//入口文件
    output: {
        file: './dist/bundle2.js',//打包后的存放文件
        format: 'es',//输出格式 amd es iife umd cjs
        name: 'pointInit',//如果iife,umd需要指定一个全局变量
    },
    watch: {  // 配置监听处理
        exclude: 'node_modules/**'
    },
    plugins: [
        // typescript(), // 使用 TypeScript 插件
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**'
        })
    ]
}

export default config;