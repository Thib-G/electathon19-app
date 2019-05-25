<template>
  <div>
    <h1>Entities</h1>
    <b-card>
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group
            id="input-group-1"
            label="Select election type:"
            label-for="input-1"
          >
            <b-form-select
              @change="getEntities"
              id="input-1"
              v-model="selected"
              :options="options"
              required
              placeholder="Select type"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-table :items="entities" class="small-text" small />
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
      selected: null,
      options: ElectathonService.types,
      entitiesObj: null,
    };
  },
  computed: {
    entities() {
      if (!this.entitiesObj) {
        return [];
      }
      return Object.keys(this.entitiesObj).map(k => this.entitiesObj[k]);
    },
  },
  methods: {
    getEntities() {
      this.electathonService.getEntities(this.selected).then((data) => {
        this.entitiesObj = data;
      });
    },
  },
};
</script>
