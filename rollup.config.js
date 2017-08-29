import node from "rollup-plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import buble from "rollup-plugin-buble";
import uglify from "rollup-plugin-uglify";

const production = !process.env.ROLLUP_WATCH;

export default {
  name: "app",
  input: "js/index.js",
  output: {
    sourcemap: true,
    format: "iife",
    file: "wwwroot/bundle.js"
  },
  plugins: [
      node(),
      svelte(),
      production && buble({ exclude: 'node_modules/**' }),
      production && uglify()
  ]
};
