import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'


// https://astro.build/config
export default defineConfig({
    //构建配置
    build: {
        // 示例：在生成过程中生成`page.html`而不是`page/index.html`
        format: 'file'
    },
    // 不要压缩html
    compressHTML: false,
    integrations: [mdx()],
    // 源码目录
    srcDir: 'src/html',
    //输出目录
    outDir: 'dist',
    // 开发工具栏
    devToolbar: {
        enabled: false
    }
})

