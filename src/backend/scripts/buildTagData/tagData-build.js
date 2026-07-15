/**
 * This builds the stuff for the TagInfoData Builder
 * If ran with "npm run build-tagData"
 */

import ESBuild from "esbuild"

ESBuild.build({
    entryPoints: [
        "./src/js/modules/TagInfoData/TagDataBuilder.ts",
    ],
    bundle: true,
    outdir: "./src/backend/scripts/buildTagData/output/",
    platform: "node",
    target: "es2020",
    format: "esm"
});