# Israel-Palestine Roadmap

Static site. No build step, no dependencies. Hosted on Vercel (framework preset "Other" and output directory `.` are dashboard settings, not in the repo). `vercel.json` rewrites extensionless paths to `index.html` so tab URLs like `/plans` work.

To test, serve the folder so that unknown extensionless paths fall back to `index.html` (a plain `python -m http.server` will 404 on `/plans`). Opening `index.html` from `file://` also works: routing falls back to `#hash` URLs there.

## Files
- `index.html`: all markup, CSS and app JS (pixel map, walker, tabs, rendering). Path routing over http(s): `/` is the intro page, `/timeline` (or any `/<stopid>`), `/<stopid>-pN` (Go deeper item N), `/borders`, `/plans`, `/leaders`, `/cost`, `/about`. Old `#...` links are converted to paths on load. On `file://` the same routes use `#...`. The intro page (`#view-intro`) is the landing view; the logo and the `data-go` links navigate. Also in `index.html`: a floating "Contents" button (built per tab by `tocBuild`, add new sections there) and a color key under each map in the Plans tab (from `SPECS[key].legend`).
- `d0.js`: `window.STOPS=[]` and the source library `S` (key -> {t: title, u: url, k: type, side: perspective, lk: link note}).
- `d0b.js`: more sources (2026 events, apartheid reports, Gaza casualty sources), added with `Object.assign(S,{...})`.
- `s1.js`, `s2.js`, `s3.js`: the 30 timeline stops, pushed onto `STOPS`. Fields: `id, yr, title, map, loc, fight, status [[a,kind,b]], facts[], disputes[{q,views[{who,text,pts?,src}]}], paths[{t,body[],src[]}], src[]`.
- `plans.js`: `window.PLANS`, two-state proposals.
- `leaders.js`: `window.LEADERS`, `LEADER_YEARS`, `LEADER_PERIODS`.
- `cost.js`: casualty sources, `COST.events`, `COST.blocks` (per-conflict figures), `COST.kn` (marker sizes).
- `check-sources.js`: `node check-sources.js` lists any source key used in the data that is missing from `S`. Exits 1 if any.
- `cost2.js`: extra harm metrics on blocks (`inj`, `disp`, `arr`, `homes`), new events, date sorting, URL fill-ins for sources without links (books link to an Open Library search), and per-block source lists. Loads last.

Map polygons, palette (`C`), border specs (`SPECS`) and border sets live in `index.html`. Projection: `X=lon=>(lon-32.2)*30`, `Y=lat=>(33.6-lat)*35` on a 126x210 canvas.

## Content rules
- Neutral, factual, plain conversational English for a newcomer. No "not just X but Y" constructions.
- Never use em dashes or en dashes anywhere in content. Check: `LC_ALL=C.UTF-8 grep -nP "[\x{2013}\x{2014}]" *.js index.html CLAUDE.md` (no output means pass; grep exits 1 then).
- Every figure needs a source key that exists in `S` (run `node check-sources.js`). Only add URLs you have actually verified; never invent a link. A source with no verified URL stays in `S` without `u`.
- Disputed points go in `disputes` with each side's view and that side's sources. Credit loaded terms (occupation, apartheid, genocide, terrorism) to whoever uses them, by naming the party in `views[].who`. Attribute each contested claim to a named party.
- Casualty numbers say whose count they are.

## Checks before committing
- `node --check` each .js file.
- Load the page (served as above) and click through every tab with the browser console open; there should be no errors. Playwright and Chromium work for this in cloud sessions.
- Check phone width (about 390px): the page must not scroll sideways.
- Scroll down on each tab: the Contents button should appear and its list should jump to sections.
- `node check-sources.js` passes.

## Editing tips
- The data files are large (s3.js is about 88 KB). Use targeted edits, not rewrites.
- New timeline stop: add it to the `s*.js` file covering that period, in date order. The road, routes and Contents list build from `STOPS` automatically.
- `COST.events` entries use `d, t, cat (israel|arab|war|intra), by, vic, k, i, n, src`, plus `dp`, `ar`, `hm`, `nl` (raid, arrest or demolition style) and `kn` (marker size).
