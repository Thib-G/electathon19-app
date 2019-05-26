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
              @change="getResults"
              id="input-1"
              v-model="selected"
              :options="options"
              required
              placeholder="Select type"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-checkbox v-model="isTest" @change="getResultsNextTick">Test data</b-checkbox>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card v-for="e in resultsNested" :key="e.key" :header="e.name" class="mb-2">
            <b-list-group>
              <b-list-group-item v-for="l in e.values" :key="l.key">
                <span class="dot mr-1"
                  :style="{ 'background-color': `#${l.value.list.group.color}` }">
                </span>
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
      selected: null,
      options: ElectathonService.types,
      resultsObj: null,
      isTest: false,
    };
  },
  computed: {
    results() {
      if (!this.resultsObj) {
        return [];
      }
      return Object.keys(this.resultsObj)
        .map(k => ({
          key: k,
          value: this.resultsObj[k],
        }))
        .filter(d => d.key !== 'count' && d.key !== '' && d.key !== 'date' && d.key !== 'time');
    },
    resultsNested() {
      return d3.nest()
        .key(d => d.value.list.entity.id)
        .entries(this.results)
        .map(e => ({
          key: e.key,
          name: e.values[0].value.list.entity.name_en,
          values: e.values.sort((a, b) => b.seats - a.seats),
        }));
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
        this.electathonService.getResults(this.selected, this.isTest).then((data) => {
          this.resultsObj = data;
        });
      }
    },
  },
};
</script>
