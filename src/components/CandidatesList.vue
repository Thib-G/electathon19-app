<template>
  <div>
    <h3>Candidates list</h3>
    <b-row class="mt-2">
      <b-col>
        <b-card
          v-for="list in candidatesByList"
          :key="list.key"
          :header="list.key"
          class="mt-2">
          <ul>
            <li v-for="c in list.values" :key="c.key">
              {{ c.value.nr }} {{ c.value.name }}
            </li>
          </ul>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import d3 from '@/assets/d3';

export default {
  props: {
    candidates: {
      type: Object,
      required: true,
    },
  },
  computed: {
    candidatesArray() {
      return Object.keys(this.candidates)
        .map(k => ({
          key: k,
          value: this.candidates[k],
        }))
        .sort((a, b) => a.value.list.nr - b.value.list.nr);
    },
    candidatesByList() {
      return d3.nest()
        .key(d => `${d.value.list.nr} ${d.value.list.name}`)
        .entries(this.candidatesArray);
    },
  },
};
</script>
