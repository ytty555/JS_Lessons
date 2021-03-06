class VideoPlayer {
    constructor() {
        this.player = document.querySelector('.player');
        this.video = this.player.querySelector('.viewer');
        this.progress = document.querySelector('.progress');
        this.progressBar = this.progress.querySelector('.progress__filled');
        this.toggle = this.player.querySelector('.toggle');
        this.skipButtons = this.player.querySelectorAll('[data-skip]');
        this.ranges = this.player.querySelectorAll('.player__slider');
        this.width = 604;
        this.defaultSettings = {
            volume: "0.2",
            playbackRate: "1",
            currentTime: 0
        };
    }

    init() {
        // Start pluging
        this.events();
        this.getSettings();
    }

    events() {
        // All events
        this.video.addEventListener('click', () => this.togglePlay());
        this.toggle.addEventListener('click', () => this.togglePlay());
        this.ranges.forEach(range => range.addEventListener('change', e => this.handleRangeUpdate(e)));
        this.ranges.forEach(range => range.addEventListener('mousemove', e => this.handleRangeUpdate(e)));
        this.skipButtons.forEach(btn => btn.addEventListener('click', e => this.skip(e)));
        this.video.addEventListener('timeupdate', () => this.displayCurrTime());
        this.progress.addEventListener('click', e => this.changeVideoPosition(e));
    }

    getSettings() {
        let settings = {};
        let lsSettingsJSON = localStorage.getItem("videoPlayerSettings");
        if (lsSettingsJSON) {
            settings = JSON.parse(lsSettingsJSON);
        } else {
            settings = this.defaultSettings;
        }

        this.ranges.forEach(range => {
            if (range.name == 'volume') {
                range.value = settings.volume;
            } else {
                range.value = settings.playbackRate;
            }
        });

        this.video.currentTime = settings.currentTime;
        this.video.volume = settings.volume;
        this.video.playbackRate = settings.playbackRate;
    }

    setSettings() {
        let vl, plbr, ct;
        this.ranges.forEach((range) => {
            if (range.name == 'volume') {
                vl = range.value;
            } else {
                plbr = range.value;
            }
        });
        ct = this.video.currentTime;
        
        const settings = {
            volume: vl,
            playbackRate: plbr,
            currentTime: ct
        };

        const settingsJSON = JSON.stringify(settings);

        localStorage.setItem("videoPlayerSettings", settingsJSON);

    }


    togglePlay() {
        // Play/Pause video
        this.video[this.video.paused ? 'play' : 'pause']();
        this.toggle.textContent = this.video.paused ? '⏵' : '⏸';
    }

    handleRangeUpdate(e) {
        // Range change
        this.video[e.target.name] = e.target.value;
    }

    skip(e) {
        // Skip time video
        this.video.currentTime += parseFloat(e.target.dataset.skip);
    }

    displayCurrTime() {
        let currTime = this.video.currentTime;
        let duration = this.video.duration;
        let width = this.width;
        let position = Math.round(width * currTime / duration);

        this.progressBar.style.width = position + "px";

        this.setSettings();
    }

    changeVideoPosition(e) {
        let x = e.offsetX;
        let width = this.width;
        let newPersent = x / width;
        let duration = this.video.duration;

        this.video.currentTime = duration * newPersent;
    }
}

const video = new VideoPlayer();

video.init();