// import * as ol from 'ol';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';

export const image = new CircleStyle({
  radius: 5,
  fill: undefined,
  stroke: new Stroke({ color: 'red', width: 1 }),
});

export const styles = {
  Point: new Style({
    image,
  }),
  LineString: new Style({
    stroke: new Stroke({
      color: 'green',
      width: 1,
    }),
  }),
  MultiLineString: new Style({
    stroke: new Stroke({
      color: 'green',
      width: 1,
    }),
  }),
  MultiPoint: new Style({
    image,
  }),
  MultiPolygon: new Style({
    stroke: new Stroke({
      color: 'yellow',
      width: 1,
    }),
    fill: new Fill({
      color: 'rgba(255, 255, 0, 0.1)',
    }),
  }),
  Polygon: new Style({
    stroke: new Stroke({
      color: 'blue',
      lineDash: [4],
      width: 3,
    }),
    fill: new Fill({
      color: 'rgba(0, 0, 255, 0.1)',
    }),
  }),
  GeometryCollection: new Style({
    stroke: new Stroke({
      color: 'magenta',
      width: 2,
    }),
    fill: new Fill({
      color: 'magenta',
    }),
    image: new CircleStyle({
      radius: 10,
      fill: undefined,
      stroke: new Stroke({
        color: 'magenta',
      }),
    }),
  }),
  Circle: new Style({
    stroke: new Stroke({
      color: 'red',
      width: 2,
    }),
    fill: new Fill({
      color: 'rgba(255,0,0,0.2)',
    }),
  }),
  LinearRing: {},
};
// export const styleFunction = (feature: ol.Feature) => styles.Polygon; // styles[feature.getGeometry().getType()];
export const styleFunction = () => styles.Polygon; // styles[feature.getGeometry().getType()];
