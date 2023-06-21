import { Component, OnInit } from '@angular/core';
import { Cartesian3, Ion, Viewer, createOsmBuildings, createWorldTerrain, Math, Cesium3DTileStyle, Cesium3DTileset, IonResource } from 'cesium';
import { cesiumBuilding, addBuildingGeoJSON } from '../app/cesium/cesium-example'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cesium-buildings';

  ngOnInit(): void {
    cesiumBuilding()
    addBuildingGeoJSON()
  }

  
}
