import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "node:path";


export default defineConfig({
    plugins: [
        reactRouter(),
        tsconfigPaths()
    ],
    resolve: {
        alias: {
            "@rescui/card": "@rescui/card/lib/index.js",
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                loadPaths: [path.resolve(__dirname, "app/css")],
            },
        },
    },
    ssr: {
        noExternal: [/@jetbrains/, /@rescui/]
    }
});