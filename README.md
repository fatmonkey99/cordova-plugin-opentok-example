# Video Chat with cordova-plugin-opentok

This is a sample Cordova app and matching web (browser) app demonstrating OpenTOK operation with the cordova-plugin-opentok plugin:
* videochat - cordova app for iOS and Android, 
* web - matching web app, copy into some web server and run

Before you run obtain api key, session id and token from OpenTOK website, edit both videochat.js files (cordova and web) and fire away.

Tested and confirmed it works as of today among these:
* OpenTOK js API on PC Firefox (42.0),
* OpenTOK js API on PC Chrome (46.0.2490.86 m),
* Cordova Android standard web view (did not test xwalk),
* Cordova iOS standard web view (did not test xwalk).

Known issues with the plugin:
* Plugin has old API, no documents, read the source code,
* Signaling does not work - plugin too old, 
* Videos float outside of containing elements - I hope I can tweak with CSS,
* When disconnecting, make sure to unsubscribe and unpublish before session disconnect - otherwise iOS crashes.




