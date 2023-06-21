import { from } from "rxjs";
import { Viewer, Ion, createOsmBuildings, IonResource, GeoJsonDataSource, ClassificationType, Cesium3DTileStyle, Cesium3DTileset, createWorldTerrain } from 'cesium';


export function cesiumBuilding()  {
    Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiYTM3YzIxYS02ODhhLTQ3OWMtYmRmMC03ZDA5MzI1ZTZiZGYiLCJpZCI6MTQ2MjY2LCJpYXQiOjE2ODcyNTY5Mjh9.-wKzI3QbAN38_8Up7kbRgB3FFhq92ekqjsyxAe8qwWU';

    const viewer = new Viewer('cesiumContainer', {
        terrainProvider: createWorldTerrain()
    });

    const buildingsTileset = viewer.scene.primitives.add(createOsmBuildings());

    buildingsTileset.style = new Cesium3DTileStyle({
        show: {
            conditions: [
                ['${elementId} === 532245203', false],
                ['${elementId} === 332469316', false],
                ['${elementId} === 332469317', false],
                ['${elementId} === 235368665', false],
                ['${elementId} === 530288180', false],
                ['${elementId} === 530288179', false],
                // If a building does not have one of these elementIds, set `show = true`.
                [true, true]
            ]
        },
        color: "Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('#ffffff')"
    });

    const newBuildingTileset = viewer.scene.primitives.add(
        new Cesium3DTileset({
            url: IonResource.fromAssetId(1868317)
        })
    );
    viewer.flyTo(newBuildingTileset);

    document.querySelector('#toggle-building').onclick = function () {
        newBuildingTileset.show = !newBuildingTileset.show
    }
}

export async function addBuildingGeoJSON() {
    const geoJSONURL = await IonResource.fromAssetId(1867866);

    const geoJSON = await GeoJsonDataSource.load(geoJSONURL, { clampToGround: true });

    const dataSource = await viewer.dataSources.add(geoJSON);

    for (const entity of dataSource.entities.values) {
        entity.polygon.classificationType = ClassificationType.TERRAIN;
    }
}



