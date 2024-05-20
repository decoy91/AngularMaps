import { AfterViewInit, Component } from '@angular/core';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

(mapboxgl as any).accessToken = 'pk.eyJ1IjoiZ2FqaW0iLCJhIjoiY2x2emtiaWdpMDRtdzJxcGY1anh0dXczcCJ9.Y11qj5hJ2xOcM_0aNw3Mfg';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-93.12,16.75], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

}
