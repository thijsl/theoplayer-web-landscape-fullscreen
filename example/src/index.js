import * as THEOplayer from 'theoplayer';
import {LandscapeFullscreenTHEOplayer} from "theoplayer-web-landscape-fullscreen";

const element = document.getElementById('my-player');
const configuration = {
    license: 'your_license_string',
    libraryLocation: './vendor/theoplayer/'
};

const player = new THEOplayer.Player(element, configuration);
const pipPlayer = new LandscapeFullscreenTHEOplayer(THEOplayer, player, {useScreenOrientationAPI: true, useCssTransform: true});
window.player = player;

player.src = '//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8';