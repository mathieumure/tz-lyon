import { writable } from "svelte/store";

const { subscribe: subscribeCategories, update: updateCategories } = writable(
  undefined
);
const { subscribe: subscribeFormats, update: updateFormats } = writable(
  undefined
);
const { subscribe: subscribeTalks, update: updateTalks } = writable(undefined);

const { subscribe: subscribeSpeakers, update: updateSpeakers } = writable(
  undefined
);

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

export { eventStore };
