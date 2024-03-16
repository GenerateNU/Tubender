import { MeasurementUnit, MaterialEnum } from "./enums";

export type Measurement = {
    value: number;
    unit: { value: MeasurementUnit; label: string };
  }
  
export type FormValues = {
    material: { label: string; value: MaterialEnum };
    length: Measurement;
    bendCount: number;
    bends: {
      straightTubeBefore: Measurement;
      direction: Measurement,
      radius: Measurement;
      arcLength: Measurement;
      extrusion: Measurement;
      straightTubeAfter: Measurement;
    }[];
  }
  