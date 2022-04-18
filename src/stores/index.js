import { writable } from "svelte/store";

const categories = writable([]);
const formats = writable([]);
const talks = writable([]);
const speakers = writable([]);
const tracks = writable([]);
const levels = writable([]);
const description = writable({ name: "TechnoZaure" });
const filterStore = writable({ trackId: "", categoryId: "" });
const selectedTalkStore = writable("");
const slots = writable([]);

const eventStore = {
  categories,
  formats,
  talks,
  speakers,
  tracks,
  levels,
  description,
  slots,
  setEvent: (event) => {
    categories.set(event.categories);
    formats.set(event.formats);
    talks.set(event.talks);
    speakers.set(event.speakers);
    tracks.set(event.tracks);
    levels.set(event.levels);
    description.set({ name: event.name, date: event.conferenceDates?.start });
    slots.set(event.slots);
  },
};

export { eventStore, filterStore, selectedTalkStore };
