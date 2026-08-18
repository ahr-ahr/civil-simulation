const METERS_PER_UNIT = 1;

export function metersToWorld(meters) {
  return meters / METERS_PER_UNIT;
}

export function worldToMeters(units) {
  return units * METERS_PER_UNIT;
}
