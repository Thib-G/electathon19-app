<template>
  <div>
    <h1>Detailed results</h1>
    <b-card>
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group
            id="input-group-1"
            label="Select election type:"
            label-for="input-1"
          >
            <b-form-select
              @change="getDetailResults"
              id="input-1"
              v-model="selected"
              :options="options"
              required
              placeholder="Select type"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group
            id="input-group-2"
            label="Select level:"
            label-for="input-2"
          >
            <b-form-select
              @change="getDetailResults"
              id="input-1"
              v-model="selectedLevel"
              :options="levelOptions"
              required
              placeholder="Select level"
              :disabled="levelOptions.length === 0"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import ElectathonService from '@/services/electathon-service';

export default {
  data() {
    return {
      electathonService: ElectathonService,
      options: ElectathonService.types,
      selected: null,
      levelOptions: ElectathonService.levels,
      selectedLevel: null,
      resultsObj: null,
    };
  },
  methods: {
    getDetailResults() {
      const type = this.selected;
      const level = this.selectedOption;
      this.electathonService.getDetailResults(type, level).then((data) => {
        this.resultsObj = data;
      });
    },
  },
};
</script>
