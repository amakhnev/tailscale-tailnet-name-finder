import fetch from 'node-fetch';

(async () => {
  while (true) {
    const res = await fetch("https://login.tailscale.com/admin/api/tcd/offers", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-GB,en;q=0.7",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "sec-gpc": "1",
        "cookie": "SET_COOKIE_HERE",
        "Referer": "https://login.tailscale.com/admin/dns",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": null,
      "method": "GET"
    });

    const data = (await res.json()).data;

    for (const tcd of data.tcds)
      if (tcd.tcd.includes('-yo')
        || tcd.tcd.includes('van-')
        || tcd.tcd.includes('cloud')
        || tcd.tcd.includes('king-')
        || tcd.tcd.includes('great-')
        || tcd.tcd.includes('-yo')
        || tcd.tcd.includes('kitty')
        || tcd.tcd.includes('royal')
        || tcd.tcd.length < 'xxxx-xxxx.ts.net'.length)
      console.log(tcd);

    await new Promise(resolve => setTimeout(resolve, 500));
  }
})();
