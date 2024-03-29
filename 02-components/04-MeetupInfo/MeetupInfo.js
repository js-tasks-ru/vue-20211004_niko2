import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',

  props: {
    organizer: {
      type: String,
      requred: true,
    },
    place: {
      type: String,
      requred: true,
    },
    date: {
      type: Number,
      requred: true,
    },
  },

  methods: {
    formatDate(timestamp) {
      return new Date(timestamp).toLocaleDateString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },

    formatAsIsoDate(timestamp) {
      return new Date(timestamp).toISOString().split('T')[0];
    },
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="formatAsIsoDate(date)">{{ formatDate(date) }}</time>
      </li>
    </ul>`,
});
