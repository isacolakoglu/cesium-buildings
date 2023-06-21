import { Directive, ElementRef, OnInit } from '@angular/core';
import { Math, Cartesian3, Ion, Viewer, createOsmBuildings, createWorldTerrain } from 'cesium';


@Directive({
  selector: '[appCesium]'
})
export class CesiumDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
      
  }
}
