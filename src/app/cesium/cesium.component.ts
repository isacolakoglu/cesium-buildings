import { Component, OnInit } from '@angular/core';
import { Cartesian3, ClassificationType, GeoJsonDataSource, Ion, IonResource, JulianDate, PolygonGraphics, Resource, Viewer, createOsmBuildings, createWorldTerrain } from 'cesium';
//import { cesiumBuilding, addBuildingGeoJSON } from '../cesium/cesium-example';



@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.css']
})
export class CesiumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }
  // async function addBuildingGeoJSON(): Promise<void> { Code here... }
  /*
  async addBuildingGeoJSON()  {
    Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiYTM3YzIxYS02ODhhLTQ3OWMtYmRmMC03ZDA5MzI1ZTZiZGYiLCJpZCI6MTQ2MjY2LCJpYXQiOjE2ODcyNTY5Mjh9.-wKzI3QbAN38_8Up7kbRgB3FFhq92ekqjsyxAe8qwWU';
    const viewer = new Viewer('cesiumContainer', {
      terrainProvider: createWorldTerrain()
    });

    const buildingsTileset = viewer.scene.primitives.add(createOsmBuildings());
    const geoJSONURL = await IonResource.fromAssetId(1867866);

    const geoJSON = await GeoJsonDataSource.load(geoJSONURL, { clampToGround: true });

    const dataSource = await viewer.dataSources.add(geoJSON);

    console.log(dataSource, 'dataSource')

    for (const entity of dataSource.entities.values) {

    }
    
    
  }*/

  
}