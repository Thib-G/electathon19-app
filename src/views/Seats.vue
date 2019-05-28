<template>
  <div>
    <h1>Results <span v-if="isTest">(TEST)</span></h1>
    <b-card>
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group
            id="input-group-1"
            label="Select election type:"
            label-for="input-1"
          >
            <b-form-select
              id="input-1"
              v-model="selected"
              :options="options"
              required
              placeholder="Select type"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12" class="d-flex align-items-center justify-content-between">
          <span v-if="loading">
            Loading...
          </span>
          <span v-else>
            <span v-if="seatsObj">
              <a href @click.prevent="getSeats">
                <img src="@/assets/icons/refresh.svg" width="15" height="15" class="mr-1">Refresh
              </a>
            </span>
          </span>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card :header="selectedText" class="mb-2">
            <b-card class="mb-2 text-center">
              <HalfDonutComponent :seats="seats" />
            </b-card>
            <b-list-group>
              <b-list-group-item v-for="item in seats" :key="item.key"
                class="d-flex align-items-center justify-content-between">
                <span>
                  <svg :width="2 + (item.value.seats * 5)" height="12">
                    <rect
                      x="0" y="0"
                      :width="2 + (item.value.seats * 5)"
                      height="12"
                      :style="{ fill: `#${item.value.group.color}` }" />
                  </svg>
                  {{ item.value.group.name }}: <b>{{ item.value.seats }}</b> seats
                </span>
                <span class="small">
                  F: <b>{{ item.value.women }}</b> M: <b>{{ item.value.men }}</b>
                </span>
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import ElectathonService from '@/services/electathon-service';

import HalfDonutComponent from '@/components/HalfDonutComponent.vue';

export default {
  data() {
    return {
      electathonService: ElectathonService,
      options: ElectathonService.types,
      seatsObj: null,
      isTest: false,
      loading: false,
    };
  },
  mounted() {
    this.getSeats();
  },
  watch: {
    selected() {
      this.getSeats();
    },
  },
  computed: {
    selected: {
      get() {
        return this.$route.params.id;
      },
      set(newVal) {
        this.$router.push(`/seats/${newVal}`);
      },
    },
    selectedText() {
      return this.options.find(x => x.value === this.selected).text;
    },
    seats() {
      if (!this.seatsObj) {
        return [];
      }
      return Object.keys(this.seatsObj)
        .filter(k => Number.isInteger(+k) && k !== '')
        .map(k => ({
          key: k,
          value: this.seatsObj[k],
        }))
        .sort((a, b) => b.value.seats - a.value.seats);
    },
  },
  methods: {
    getSeats() {
      if (this.selected) {
        this.loading = true;
        this.electathonService.getSeats(this.selected).then((data) => {
          this.seatsObj = data;
          this.loading = false;
        });
      }
    },
  },
  components: {
    HalfDonutComponent,
  },
};
</script>
