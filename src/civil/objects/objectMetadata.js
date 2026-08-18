export function createObjectMetadata({
  category = "civil",
  material = null,
  dimensions = null,
  properties = {},
} = {}) {
  return {
    category,
    material,
    dimensions,
    properties,
  };
}
