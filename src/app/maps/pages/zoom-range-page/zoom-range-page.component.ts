import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent implements AfterViewInit{

  @ViewChild('map') divMap?: ElementRef;



  ngAfterViewInit(): void {

    if( !this.divMap ) throw 'Elemento no encontrado'

    const map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-93.12,16.75], // starting position [lng, lat]
      zoom: 10, // starting zoom
    });
  }


}
