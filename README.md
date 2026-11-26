# Rally Coach

[Download Rally Coach and take the guided tour](https://rally-coach.b4mad.technology/).
[Release downloads and SHA256SUMS](https://github.com/b4mad-technologies/rally-coach/releases/latest).

This repository hosts release binaries, the website and community issues. It does
not contain the application source. Successful packaging does not establish
coaching benefit or clean Windows offline acceptance.

## Requirements and installation

You need your own Richard Burns Rally / RallySimFans installation and supported
recordings. Windows x64 is the initial game target; macOS arm64 and Linux x86_64
bundles are also available. No game, installed game images or satellite imagery
are included. Rally Coach is independent and is not affiliated with or endorsed
by RallySimFans (RSF).

Verify downloads with the release's SHA256SUMS. Builds have no verified publisher
signature. macOS builds are ad-hoc signed and are not notarized. For a trusted
download, Windows SmartScreen may require **More info → Run anyway**. On macOS,
drag the app to Applications and right-click
**Open**; if blocked, use **System Settings → Privacy & Security → Open Anyway**.
Your organization may prevent these actions. Linux AppImages need executable
permission and FUSE, or `--appimage-extract` followed by `squashfs-root/AppRun`.
The .deb requires compatible system WebKitGTK libraries.

## Installation auf Deutsch

Du brauchst eine eigene Installation von Richard Burns Rally / RallySimFans
und unterstützte Aufzeichnungen. Das Spiel läuft unter Windows. Die Versionen
für macOS und Linux können lokal verfügbare Dateien anzeigen.

Prüfe deinen Download anhand der Datei **SHA256SUMS** aus der Veröffentlichung.
Die Builds haben keine verifizierte Herausgebersignatur. Die macOS-Builds sind
ad hoc signiert und nicht notarisiert. Bestätige eine Warnung nur, wenn du dem
Download vertraust. Falls Windows SmartScreen warnt, wähle **Weitere Informationen
→ Trotzdem ausführen**, sofern verfügbar. Ziehe unter macOS die App in den Ordner
Programme. Wenn das Öffnen blockiert wird, wähle **Systemeinstellungen →
Datenschutz & Sicherheit → Dennoch öffnen**. Richtlinien deiner Organisation
können das Öffnen verhindern. Unter Linux muss die AppImage-Datei ausführbar
sein. Ohne FUSE nutze `--appimage-extract` und starte `squashfs-root/AppRun`.
Das .deb-Paket benötigt kompatible WebKitGTK-Bibliotheken.

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
