import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from "mapbox-gl";

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {

  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-93.11520332908265, 16.752918789579596);

  ngAfterViewInit(): void {

    if( !this.divMap ) throw 'Elemento no encontrado'

    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });


    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Alex H.';
    // const marker = new Marker(
    //   {
    //     //color:'red',
    //     element: markerHtml
    //   }
    // )
    // .setLngLat(this.currentLngLat)
    // .addTo(this.map);

  }

}
