import esbuild from "esbuild";
import {sassPlugin} from "esbuild-sass-plugin";


const ctx = await esbuild.context({
  entryPoints: ["app.jsx"],
  bundle: true,
  outdir: "./dist",
  loader: {'.png': 'dataurl', '.jpg': 'dataurl', '.jpeg': 'dataurl', '.webp': 'dataurl', '.avif': 'dataurl', '.svg': 'dataurl'},
  plugins: [
    sassPlugin({
      filter: /\.module\.scss$/,
      type: 'local-css'
    }),
    sassPlugin({
      filter: /\.scss$/,
      type: 'css'
    })
  ]
});

ctx.watch();