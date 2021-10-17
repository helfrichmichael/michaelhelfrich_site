import { Directive, ElementRef } from '@angular/core';

/** 
 * This directive modifies all img tags in the application. It will wait 100 ms and then 
 * set the opacity to 1 to trigger the 3s transition for opacity defined in styles.scss.
 * Additionally, this will set the loading of the image to lazy load. 
 */
@Directive({ selector: 'img' })
export class LazyImgLoaderDirective {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    nativeElement.setAttribute('loading', 'lazy');
    setTimeout(() => {
      // Grab the current attributes and re-apply them if they already exist.
      const currentAttributes = nativeElement.getAttribute('style');
      if (currentAttributes) {
        nativeElement.setAttribute('style', currentAttributes + 'opacity:1');
      } else {
        nativeElement.setAttribute('style',  'opacity:1');
      }
    }, 100);
  }
}