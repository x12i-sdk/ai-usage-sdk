# @x12i/ai-usage-sdk usage example

SDK for AI coding-agent and API-platform usage/billing adapters, vault crypto, and allowlisted proxy core.

This consuming application demonstrates **round-trip a local vault record through the encryption helpers** using the published npm package, pinned to `0.1.1`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Load a provider's supported usage adapter in a consuming application.
- Protect locally stored provider material through the vault helpers and explicit proxy allowlist.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/ai-usage-sdk)
- [Implementation monorepo](https://github.com/x12i/ai-agents-dashboard)
- [Reviewed package source](https://github.com/x12i/ai-agents-dashboard/tree/baf24ec41ba9b0881c90b237606f78e854057841/packages/sdk)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
