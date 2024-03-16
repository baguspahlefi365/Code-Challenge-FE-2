import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-vjs-player-component',
  templateUrl: './vjs-player-component.component.html',
  styleUrls: ['./vjs-player-component.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VjsPlayerComponentComponent implements OnInit, OnDestroy {
  @ViewChild('target', { static: true }) target?: ElementRef;

  @Input() options : any;
  player: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    if (this.target) {
      this.player = videojs(this.target.nativeElement, this.options, () => {
        console.log('onPlayerReady', this);
      });
    }
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }

  playVideo() {
    if (this.player) {
      this.player.play();
    }
  }

  resetVideo() {
    if (this.player) {
      this.player.currentTime(0);
      this.player.pause();
    }
  }
}
