import data from "../data/data.json";

export function loadNotes() {
  return Promise.resolve(data.notes);
}
