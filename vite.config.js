import { defineConfig } from "vite"

var b_isDevelopment = (process.env.NODE_ENV == "development")


export default defineConfig({
    base: (!b_isDevelopment) ? "/rbx-microprofiler-info" : "",

    root: "src/",
    build: {
        outDir: "../build/"
    },
})