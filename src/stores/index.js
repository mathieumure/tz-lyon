import { writable } from "svelte/store";

const categories = writable([]);
const formats = writable([]);
const talks = writable([]);
const speakers = writable([]);
const tracks = writable([]);
const description = writable({ name: 'TechnoZaure' });
const filterStore = writable({ trackId: '', categoryId: '' });
const selectedTalkStore = writable('');

const eventStore = {
  categories,
  formats,
  talks,
  speakers,
  tracks,
  description,
  setEvent: (event) => {
    categories.set(event.categories);
    formats.set(event.formats);
    talks.set(event.talks);
    speakers.set(event.speakers);
    tracks.set(event.tracks);
    description.set({ name: event.name });
  },
};

export { eventStore, filterStore, selectedTalkStore };
