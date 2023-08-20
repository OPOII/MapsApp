import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';
@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent implements AfterViewInit{
  @ViewChild('map') divMap?: ElementRef;

  public map?:Map;
  public currentLngLat:LngLat=new LngLat(-74.09772732189673, 4.651439917764421);
  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

     this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    // const markerHtml=document.createElement('div');
    // markerHtml.innerHTML='Bryan Grueso';

    // const marker=new Marker({
    //   element:markerHtml
    // })
    // .setLngLat(this.currentLngLat)
    // .addTo(this.map)
  }
}
