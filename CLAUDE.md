# Israel-Palestine Roadmap

Static site. No build step, no dependencies. Open `index.html` in a browser to test. Hosted on Vercel (framework preset "Other", output directory `.`).

## Files
- `index.html`: all markup, CSS and app JS (pixel map, walker, tabs, rendering). Hash routing: `#<stopid>`, `#<stopid>-pN` (Go deeper item N), `#borders`, `#plans`, `#leaders`, `#cost`, `#about`.
- `d0.js`: `window.STOPS=[]` and the source library `S` (key -> {t: title, u: url, k: type, side: perspective, lk: link note}).
- `d0b.js`: more sources (2026 events, apartheid reports, Gaza casualty sources), added with `Object.assign(S,{...})`.
- `s1.js`, `s2.js`, `s3.js`: the 30 timeline stops, pushed onto `STOPS`. Fields: `id, yr, title, map, loc, fight, status [[a,kind,b]], facts[], disputes[{q,views[{who,text,pts?,src}]}], paths[{t,body[],src[]}], src[]`.
- `plans.js`: `window.PLANS`, two-state proposals.
- `leaders.js`: `window.LEADERS`, `LEADER_YEARS`, `LEADER_PERIODS`.
- `cost.js`: casualty sources, `COST.events`, `COST.blocks` (per-conflict figures), `COST.kn` (marker sizes).
- `cost2.js`: extra harm metrics on blocks (`inj`, `disp`, `arr`, `homes`), new events, date sorting, URL fill-ins for sources without links (books link to an Open Library search), and per-block source lists. Loads last.

Map polygons, palette (`C`), border specs (`SPECS`) and border sets live in `index.html`. Projection: `X=lon=>(lon-32.2)*30`, `Y=lat=>(33.6-lat)*35` on a 126x210 canvas.

## Content rules
- Neutral, factual, plain conversational English for a newcomer. No "not just X but Y" constructions.
- Never use em dashes or en dashes anywhere in content. Check: `LC_ALL=C.UTF-8 grep -nP "[\x{2013}\x{2014}]" *.js index.html`.
- Every figure needs a source key that exists in `S`. Only add URLs you have actually verified; never invent a link.
- Disputed points go in `disputes` with each side's view and that side's sources. Credit loaded terms (occupation, apartheid, genocide, terrorism) to whoever uses them.
- Casualty numbers say whose count they are.

## Checks before committing
- `node --check` each .js file.
- Load the page and click through every tab with the browser console open; there should be no errors.
- Check phone width (about 390px): the page must not scroll sideways.
