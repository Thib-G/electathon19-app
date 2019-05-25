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
              placeholder="Chose type"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="mt-2">
        <b-col>
          <CandidatesList v-if="candidates" :candidates="candidates" />
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
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
      options,
      candidates: null,
    };
  },
  methods: {
    getCandidates() {
      this.electathonService.getCandidates(this.selected).then((data) => {
        this.candidates = data;
      });
    },
  },
  components: {
    CandidatesList,
  },
};
</script>
