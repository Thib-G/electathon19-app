<template>
  <div>
    <h1>Candidates</h1>
    <b-card>
      <b-row>
        <b-col>
          <b-form-group
            id="input-group-1"
            label="Select election type:"
            label-for="input-1"
          >
            <b-form-select
              @change="getCandidates"
              id="input-1"
              v-model="selected"
              :options="options"
              required
              placeholder="Select type"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="input-group-2"
            label="Select entity:"
            label-for="input-2"
          >
            <b-form-select
              id="input-1"
              v-model="selectedEntity"
              :options="entitiesOptions"
              required
              placeholder="Select entity"
              :disabled="entitiesOptions.length === 0"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col>
          <CandidatesList
            v-if="filteredCandidates.length > 0"
            :candidates="filteredCandidates" />
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import d3 from '@/assets/d3';
import ElectathonService from '@/services/electathon-service';

import CandidatesList from '@/components/CandidatesList.vue';

const options = [
  { value: 'CK', text: 'Chambre / Kamer' },
  { value: 'VL', text: 'Parlement flamand / Vlaams Parlement' },
  { value: 'WL', text: 'Parlement régional wallon / Waals Parlement' },
  { value: 'BR', text: 'Parlement de la Région de Bruxelles-Capitale / Brussels Hoofdstedelijk Parlement' },
  { value: 'DE', text: 'Parlement de la Communauté germanophone / Parlement van de Duitstalige Gemeenschap' },
  { value: 'EU', text: 'Parlement européen / Europese Parlement' },
];

export default {
  data() {
    return {
      electathonService: ElectathonService,
      selected: null,
      selectedEntity: null,
      options,
      candidatesObj: null,
    };
  },
  computed: {
    candidates() {
      if (!this.candidatesObj) {
        return [];
      }
      return Object.keys(this.candidatesObj)
        .map(k => ({
          key: k,
          value: this.candidatesObj[k],
        }))
        .sort((a, b) => a.value.type.localeCompare(b.value.type))
        .sort((a, b) => a.value.list.nr - b.value.list.nr)
        .sort((a, b) => a.value.list.entity.id - b.value.list.entity.id);
    },
    filteredCandidates() {
      return this.candidates.filter(d => d.value.list.entity.id === this.selectedEntity);
    },
    entities() {
      return d3.nest()
        .key(d => d.value.list.entity.id)
        .rollup(leaves => leaves[0].value.list.entity.name_en)
        .entries(this.candidates);
    },
    entitiesOptions() {
      return this.entities.map(d => ({
        value: +d.key,
        text: d.value,
      }));
    },
  },
  methods: {
    getCandidates() {
      this.electathonService.getCandidates(this.selected).then((data) => {
        this.candidatesObj = data;
      });
    },
  },
  components: {
    CandidatesList,
  },
};
</script>
