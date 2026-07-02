import {
  Component,
  Input,
  ContentChild,
  TemplateRef,
  HostListener,
  OnInit,
  OnDestroy
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { CarouselConfig } from '../../../core/models/carousel.types';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel implements OnInit, OnDestroy {
  @Input()
  items: any[] = [];
touchStart = 0;
touchEnd = 0;

  @Input()
  config: CarouselConfig = {
    visibleItems: 3,
    autoPlay: true,
    autoPlayInterval: 3000,
    infinite: true,
    showDots: true,
    showArrows: true
  };

  @ContentChild(TemplateRef)
  template!: TemplateRef<any>;
  currentIndex = 0;
  private timer?: any;
  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  next() {
    const lastIndex =
      this.items.length - this.config.visibleItems;
    if (this.currentIndex >= lastIndex) {
      this.currentIndex =
        this.config.infinite ? 0 : lastIndex;
    }
    else {
      this.currentIndex++;
    }
  }
  previous() {
    const lastIndex =
      this.items.length - this.config.visibleItems;
    if (this.currentIndex <= 0) {
      this.currentIndex =
        this.config.infinite ? lastIndex : 0;
    }
    else {
      this.currentIndex--;
    }
  }

  startAutoPlay() {
    if (!this.config.autoPlay) return;
    this.timer = setInterval(() => {
      this.next();
    }, this.config.autoPlayInterval);
  }

  stopAutoPlay() {
    clearInterval(this.timer);
  }
  goTo(index: number) {
    this.currentIndex = index;
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  @HostListener('window:keydown.arrowright')
  right() {
    this.next();
  }

  @HostListener('window:keydown.arrowleft')
  left() {
    this.previous();
  }

  onTouchStart(event: TouchEvent){
  this.touchStart =
    event.changedTouches[0].screenX;
}

onTouchEnd(event: TouchEvent){
  this.touchEnd =
    event.changedTouches[0].screenX;
  this.handleSwipe();
}

handleSwipe(){

  if(this.touchEnd < this.touchStart - 60){
    this.next();
  }

  if(this.touchEnd > this.touchStart + 60){
    this.previous();
  }
}
}
