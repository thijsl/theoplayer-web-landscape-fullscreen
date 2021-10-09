export class LandscapeFullscreenTHEOplayer {
    constructor(THEOplayer, player, configuration) {
        this.THEOplayer = THEOplayer;
        this.player = player;
        this.configuration = configuration;
    }

    get landscape() {

    }

    set landscape(value) {

    }

    supportsLandscape() {

    }

    addEventListener(event, callback) {
        if (event == "orientationchange") {
            return false;
        } else if (event == "enterlandscape") {

        } else if (event == "exitlandscape") {

        }
    }

    removeEventListener(event, callback) {
        if (event == "orientationchange") {
            return false;
        } else if (event == "enterlandscape") {

        } else if (event == "exitlandscape") {

        }
    }


}