/*
 * Pulls Web Awesome's generated JSX typings into the TypeScript program:
 * every <wa-*> tag becomes a typed member of JSX.IntrinsicElements (the
 * file augments both the global JSX namespace and the "react" module).
 *
 * Requires "allowImportingTsExtensions": true in tsconfig compilerOptions
 * (already set on Lovable TanStack templates).
 */
import "@awesome.me/webawesome/dist/custom-elements-jsx.d.ts";
