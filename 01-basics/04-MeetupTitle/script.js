import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const app = createApp({
  data() {
    return {
      meetupTitle: null,
      meetupNumber: null,
    };
  },
  watch: {
    meetupNumber() {
      fetchMeetupById(this.meetupNumber).then((meetups) => {
        this.meetupTitle = meetups.title;
      });
    },
  },
}).mount('#app');
