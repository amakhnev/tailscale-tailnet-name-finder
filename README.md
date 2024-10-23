# Guide for Searching

This guide is based on the article found at [Yousef Amar's Memo](https://yousefamar.com/memo/articles/hacks/tailnet-name/).

## Steps to Follow

1. Clone the repository and run `npm install` to install the dependencies.

2. Extract the cookie from the Tailscale dashboard (use chrome developer tool, in network tab find `offers`, use request header ) and place it into `fetch-tailnet.mjs` and `set-tailnet.mjs` (search for `SET_COOKIE_HERE`). Additionally, find and change the CSRF token in `set-tailnet.mjs` (search for `SET_TOKEN_HERE`).

3. Adjust the search condition in `fetch-tailnet.mjs` for your desired name.

4. Run `fetch-tailnet.mjs` by executing `node fetch-tailnet.mjs` and wait for your desired name to appear.

5. Once satisfied, change the name and token of your desired name in `set-tailnet.mjs` and run it.
