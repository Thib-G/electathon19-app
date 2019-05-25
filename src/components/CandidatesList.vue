<template>
  <div>
    <h3>Candidates list</h3>
    <b-row class="mt-2">
      <b-col>
        <b-card
          v-for="entity in candidatesByEntityListType"
          :key="entity.key"
          :header="entity.name"
          class="mt-2">
          <b-card
            v-for="list in entity.values"
            :key="list.key"
            :header="list.key"
            class="mt-2">
            <ul>
              <li v-for="type in list.values" :key="type.key">
                {{ type.key }}
                <ul>
                  <li v-for="c in type.values" :key="c.key">
                    {{ c.value.nr }} {{ c.value.name }}
                  </li>
                </ul>
              </li>
            </ul>
          </b-card>
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
        .sort((a, b) => a.value.list.nr - b.value.list.nr)
        .sort((a, b) => a.value.list.entity.id - b.value.list.entity.id);
    },
    candidatesByEntityListType() {
      return d3.nest()
        .key(d => d.value.list.entity.id)
        .entries(this.candidatesArray)
        .map(entity => ({
          key: entity.key,
          name: entity.values[0].value.list.entity.name_en,
          values: d3.nest()
            .key(d => `${d.value.list.nr} ${d.value.list.name}`)
            .entries(entity.values).map(type => ({
              key: type.key,
              values: d3.nest()
                .key(d => d.value.type)
                .entries(type.values),
            })),
        }));
    },
  },
};
</script>
