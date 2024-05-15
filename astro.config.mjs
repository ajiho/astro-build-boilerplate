import {defineConfig} from 'astro/config'
import mdx from '@astrojs/mdx'


// https://astro.build/config
export default defineConfig({
  //运行根路径
  root:'dist',
  //服务器配置
  server: { port: 8081 },
  //构建配置
  build: {
    // 示例：在生成过程中生成`page.html`而不是`page/index.html`
    format: 'file'
  },
  //md配置
  markdown: {
    shikiConfig: {
      theme: 'dark-plus'
    }
  },
  integrations: [mdx()],
  //源码目录
  srcDir: 'src/html',
  //输出目录
  outDir: 'dist/pages',
  //缓存目录,保持和上面相同即可
  cacheDir: 'dist/pages',
})

