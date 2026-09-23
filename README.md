# Apex Garage — LMU Setup Planner

Free phone-installable setup guidance, fuel/stint planning, handling diagnosis and a personal setup notebook. No subscription, account, API key or paid setup pack.

## Upload to GitHub yourself

1. **Extract the ZIP.** Upload its extracted contents, not the ZIP itself.
2. Create a **public repository** on GitHub, for example `apex-garage`. Public repositories support GitHub Pages on GitHub Free.
3. Choose **Add file → Upload files**. Upload all extracted files and the `icons` folder, then commit to **main**. `index.html` must be directly in the repository root, alongside `app.js` and `styles.css`, not inside an extra enclosing folder.
4. Open **Settings → Pages**. Select **Deploy from a branch**, then **main** and **/(root)**. Click **Save**.
5. Wait for the deployment to finish, then click **Visit site** in Pages settings. The Actions tab shows deployment progress or errors.
6. Open that published website on your phone.

A computer makes uploading folders easier. On a phone, extract the ZIP in Files and use GitHub’s desktop website if needed. Include the `icons` folder and all three PNG files.

Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Install on your phone

- **iPhone:** open the published website in Safari → Share → Add to Home Screen. If offered, enable Open as Web App.
- **Android:** open it in Chrome → menu → Install app or Add to Home screen.
- Visit once online so the app can cache its files. Offline use depends on browser support and retained site data.

Opening `index.html` directly from Files is not an installation. This is a web app, not an APK. GitHub Pages supplies the HTTPS website needed for phone installation.

## Features

Only five choices appear initially: **car, circuit/layout, session type, session length and weather**. All other inputs are optional under **Advanced options**.

- Qualifying, race and practice; minutes, hours, laps or kilometres; six weather states.
- Full garage guidance: aero, ride height, suspension, dampers, alignment, brakes, electronics, differential, tyres, cooling, power and fuel. Each setting includes its reason, trade-off and a test.
- Exact baseline/chosen-value fields and a garage entry checklist.
- Qualifying-versus-race comparison using separately remembered session lengths.
- Fuel and stint planning: measured pace/consumption, tank capacity, reserve, formation/out-laps, mandatory stops and optional virtual-energy limits.
- Twelve handling diagnoses, one-change tests, better/same/worse results and ordered undo.
- Run history with comparable-condition checks.
- Saved setups and JSON backup/restore.
- Responsive phone layout, home-screen installation, offline assets and optional keep-screen-awake.
- Custom car and circuit options for missing or later content.

## Accuracy and assumptions

**This is a setup guide and notebook, not a verified full numeric setup database.** Load the selected car’s in-game circuit baseline first. Suggestions are conservative directions relative to it. Record the exact values you use. The app has not driven or validated every combination and does not promise an optimal lap.

The catalogue contains 37 named car/variant choices and 37 named circuit/layout choices, plus a custom option for each. Every choice can be combined with each session and weather mode. This is a snapshot of referenced content, not a guarantee covering every livery, future DLC or BOP revision. In-game availability, ranges and event rules take priority. Some alternate layout distances are approximate. Recently announced tracks are flagged in the notes.

Fuel without measured inputs is a broad class estimate. Add representative **lap time and litres per lap** before relying on it. Enter the actual **garage tank capacity** to calculate stops; none is invented. Where applicable, enter virtual energy used per racing lap. Later stints assume energy replenishment to 100%; check the actual service rules.

Timed races round up estimated distance and add an adjustable extra-lap allowance. Leader pace and finish rules can change actual distance. Qualifying defaults to one out-lap and two flying laps, plus reserve. Practice assumes continuous running and selected out-laps. Stint fuel targets mean total departure fuel, not fuel to add. Pit-lane loss excludes service; refuelling-rate examples do not simulate tyre/energy service overlap.

No automatic telemetry, weather forecast, precise tyre-wear model, wet/dry crossover predictor or automatic game-data updates are included. Enter measured observations in the notebook. Skip garage controls your car/event does not expose.

## Data and backups

Your notebook stays in this browser. No login, tracking, server database or cloud sync. Clearing browser/site data removes it. To change phones, export JSON on the old phone and restore on the new phone. Do not upload personal backup JSON to your public repository. Saved values do not change LMU itself; copy them into the game’s garage.

## Sources

Catalogue snapshot: 23 September 2026. The app’s Help page also links these sources. Generic setup advice is clearly labelled as starting guidance, not a copied paid setup.

- https://lemansultimate.com/cars/
- https://lemansultimate.com/circuits/
- https://guide.lemansultimate.com/hc/en-gb/articles/17713037697807-V1-4-2-Update-1-4-Patch-2
- https://lemansultimate.com/wp-content/uploads/2026/06/LMU_BOP_1.3.3.2_Marked-up-1.pdf
- https://lemansultimate.com/le-mans-ultimate-adds-second-us-track-pack-dlc-alongside-elms-2026-season-liveries/

Unofficial companion, not affiliated with Studio 397 or Motorsport Games.

## Troubleshooting

- README appears instead of the app: open the Pages website using **Visit site**, not the repository page.
- 404: check `index.html` is at the root and Pages uses `main` + `/(root)`. Check the Actions deployment result.
- Missing styling/icons: upload every extracted asset and preserve filenames and folders.
- No installation button: use Safari’s Share menu or Chrome’s menu on the published HTTPS website. Private browsing may limit installation/storage.
- Old version: reopen online, choose Help → Check for app update, then accept the update. Back up before clearing site data.
- Stops show a dash: enter tank capacity and review insufficient fuel/energy warnings.

## Development and checks

App v1.0.0. No dependencies or build step. This ZIP’s root is directly deployable. With Node 20 or later, `npm run dev` serves it locally and `npm test` runs the supplied tests.

15 tests passed, covering fuel/energy limits, qualifying, timed races, mandatory stops, capability guards, backup restoration, ordered undo, stale-value removal and run comparison. Fuel outputs were checked for all 25,992 combinations of 38 car choices, 38 circuit choices, six weather states and three sessions. These are software checks, **not on-track setup validation**.

The desktop browser flow was exercised for measured fuel, setup generation, stint output, diagnosis and undo. Real phone installation and offline operation still need checking after you publish to HTTPS. WebMCP is optional and feature-detected; the normal UI works without it.

When updating assets, increment the service-worker cache name in `sw.js`. Relative asset paths support deployment under any repository name.
