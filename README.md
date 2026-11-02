# Rally Coach — public alpha

[Download Rally Coach and take the guided tour](https://b4mad-technologies.github.io/rally-coach/).
[Release downloads and SHA256SUMS](https://github.com/b4mad-technologies/rally-coach/releases/latest).

This repository hosts release binaries, the website and community issues. It does
not contain the application source. Alpha software may have bugs; successful
packaging does not establish coaching benefit or clean Windows offline acceptance.

## Requirements and installation

You need your own Richard Burns Rally / RallySimFans installation and supported
recordings. Windows x64 is the initial game target; macOS arm64 and Linux x86_64
bundles are also available. No game, installed game images or satellite imagery
are included. Rally Coach is independent and is not affiliated with or endorsed
by RallySimFans (RSF).

Verify downloads with the release's SHA256SUMS. Builds are unsigned, and macOS
builds are not notarized. For a trusted download, Windows SmartScreen may require
**More info → Run anyway**. On macOS, drag the app to Applications and right-click
**Open**; if blocked, use **System Settings → Privacy & Security → Open Anyway**.
Your organization may prevent these actions. Linux AppImages need executable
permission and FUSE, or `--appimage-extract` followed by `squashfs-root/AppRun`.
The .deb requires compatible system WebKitGTK libraries.

## Privacy and offline operation

Telemetry import, analysis, coaching, preparation and stored history are computed
and kept locally. No login, cloud analysis, analytics, remote crash reporting,
online activation or automatic updates are used. The offline core and its required
assets ship with the app, including first launch. Updates are downloaded manually.

Maps are the only online data source: the app uses its bounded local map cache,
then the configured tile host for missing map data. Cached maps remain usable
offline. Missing map data narrows dependent advice or gives an explicit absence
reason without blocking unrelated features. Telemetry, pacenotes, coaching results
and stored history are not uploaded to the map host. The app observes selected
telemetry/game paths read-only.

## Feedback

[Report a bug or share feedback](https://github.com/b4mad-technologies/rally-coach/issues/new/choose).
Include the app version, operating system and reproduction steps. Omit personal
paths, usernames, private recordings and game assets from public reports.
