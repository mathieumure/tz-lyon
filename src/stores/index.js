import { writable } from "svelte/store";

const { subscribe: subscribeCategories, update: updateCategories } = writable(
  []
);
const { subscribe: subscribeFormats, update: updateFormats } = writable([]);

const { subscribe: subscribeTalks, update: updateTalks } = writable([]);

const { subscribe: subscribeSpeakers, update: updateSpeakers } = writable([]);

const filterStore = writable('');

const selectedTalkStore = writable('');

const eventStore = {
  categories: {
    subscribe: subscribeCategories,
  },
  formats: {
    subscribe: subscribeFormats,
  },
  talks: {
    subscribe: subscribeTalks,
  },
  speakers: {
    subscribe: subscribeSpeakers,
  },
  setEvent: (event) => {
    updateCategories((_) => [...event.categories]);
    updateFormats((_) => [...event.formats]);
    updateTalks((_) => [...event.talks]);
    updateSpeakers((_) => [...event.speakers]);
  },
};

export { eventStore, filterStore, selectedTalkStore };
