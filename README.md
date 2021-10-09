# theoplayer-web-landscape-fullscreen

The `LandscapeFullscreenTHEOplayer` class provides an API to implement the landscape-fullscreen UX pattern.

What's the landscape-fullscreen UX pattern?

1. If the viewer goes to fullscreen on a mobile device, the application forces landscape 
2. If the viewer goes to landscape on a mobile device, the application forces force fullscreen

This is a community project and is not maintained by THEO Technologies.

## Usage

You can include this project through its NPM package at [https://www.npmjs.com/package/theoplayer-web-landscape-fullscreen](https://www.npmjs.com/package/theoplayer-web-landscape-fullscreen), as demonstrated by the [`example/`](example/).
You can also modify and integrate [`src/LandscapeFullscreenTHEOplayer`](src/LandscapeFullscreenTHEOplayer.js) in your project.

To use this project, you must create an instance of the `LandscapeFullscreenTHEOplayer` class. E.g.:
```javascript
const landscapeFullscreenPlayer = new LandscapeFullscreenTHEOplayer(THEOplayer, player, {
    useScreenOrientationAPI: true,
    useCssTransform: true
});
```

* When you set `useScreenOrientationAPI: true`, the Screen Orientation API is used to implement the landscape-fullscreen UX pattern (when it's available).
* When you set `useCssTransform: true`, CSS transform functions are used to implement the landscape-fullscreen UX pattern.

### API

TO DO

## Limitations

TO DO

## Remarks

* We welcome pull requests.