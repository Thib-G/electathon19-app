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
            <span v-if="resultsObj">
              <a href @click.prevent="getResults">
                <img src="@/assets/icons/refresh.svg" width="15" height="15" class="mr-1">Refresh
              </a>
              <small v-if="resultsObj">Last refresh at {{ lastRefresh }}</small>
            </span>
          </span>
          <b-checkbox v-model="isTest" @change="getResultsNextTick">Test data</b-checkbox>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card v-for="e in resultsNested" :key="e.key" :header="e.name" class="mb-2">
            <b-list-group>
              <b-list-group-item v-for="l in e.values" :key="l.key">
                <svg :width="2 + (l.value.seats * 5)" height="12">
                  <rect
                    x="0" y="0"
                    :width="2 + (l.value.seats * 5)"
                    height="12"
                    :style="{ fill: `#${l.value.list.group.color}` }" />
                </svg>
                {{ l.value.list.name }}: <b>{{ l.value.seats }}</b> seats
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import d3 from '@/assets/d3';

import ElectathonService from '@/services/electathon-service';

export default {
  data() {
    return {
      electathonService: ElectathonService,
      options: ElectathonService.types,
      resultsObj: null,
      isTest: false,
      loading: false,
    };
  },
  mounted() {
    this.getResults();
  },
  watch: {
    selected() {
      this.getResults();
    },
  },
  computed: {
    selected: {
      get() {
        return this.$route.params.id;
      },
      set(newVal) {
        this.$router.push(`/results/${newVal}`);
      },
    },
    results() {
      if (!this.resultsObj) {
        return [];
      }
      return Object.keys(this.resultsObj)
        .filter((k) => Number.isInteger(+k) && k !== '')
        .map((k) => ({
          key: k,
          value: this.resultsObj[k],
        }));
    },
    resultsNested() {
      return d3.nest()
        .key((d) => d.value.list.entity.id)
        .entries(this.results)
        .map((e) => ({
          key: e.key,
          name: e.values[0].value.list.entity.name_en,
          values: e.values.sort((a, b) => b.value.seats - a.value.seats),
        }));
    },
    lastRefresh() {
      if (!this.resultsObj) {
        return '';
      }
      return `${this.resultsObj.date} ${this.resultsObj.time}`;
    },
  },
  methods: {
    getResultsNextTick() {
      this.$nextTick(() => {
        this.getResults();
      });
    },
    getResults() {
      if (this.selected) {
        this.loading = true;
        this.electathonService.getResults(this.selected, this.isTest).then((data) => {
          this.resultsObj = data;
          this.loading = false;
        });
      }
    },
  },
};
</script>
