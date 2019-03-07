class VideoPlayer {
    constructor() {
        this.player = document.querySelector('.player');
        this.video = this.player.querySelector('.viewer');
        this.progress = document.querySelector('.progress');
        this.progressBar = this.progress.querySelector('.progress__filled');
        this.toggle = this.player.querySelector('.toggle');
        this.skipButtons = this.player.querySelectorAll('[data-skip]');
        this.ranges = this.player.querySelectorAll('.player__slider');
    }

    init() {
        // Start pluging
        this.events();
    }

    events() {
        // All events
        this.video.addEventListener('click', () => this.togglePlay());
        this.toggle.addEventListener('click', () => this.togglePlay());
    }

    togglePlay() {
        // Play/Pause video
        this.video[this.video.paused ? 'play' : 'pause']();
        this.toggle.textContent = this.video.paused ? '⏵' : '⏸';
    }

    skip() {
        // Skip time video

    }
}

const video = new VideoPlayer();

video.init();