import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      meetup: {},
      error: false,
      loading: true,
      errorMessage: '',
    };
  },

  methods: {
    fetchMeetup() {
      this.error = false;
      this.loading = true;

      fetchMeetupById(this.meetupId)
        .then((meetup) => {
          this.meetup = meetup;
        })
        .catch((error) => {
          this.error = true;
          this.errorMessage = error.message;
          return error;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },

  watch: {
    meetupId() {
      this.fetchMeetup();
    },
  },

  mounted() {
    this.fetchMeetup();
  },

  template: `
    <div class="page-meetup">
      <MeetupView :meetup="this.meetup" v-if="meetup && !error && !loading"/>

      <ui-container v-else-if="loading">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-else="error">
        <ui-alert>{{ errorMessage }}</ui-alert>
      </ui-container>
    </div>`,
});
