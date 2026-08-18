import { createCivilObject } from "./civilObject.js";

export function createObject({ id, type, name }) {
  return createCivilObject({
    id,
    type,
    name,
  });
}
