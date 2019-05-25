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
            header-tag="header"
            class="mt-2"
            :style="{
              'border-color': list.color,
              'border-width': '3px',
            }">
            <div slot="header">
              <span class="dot mr-1" :style="{ 'background-color': list.color }"></span>
              {{ list.key }}
            </div>
            <b-card-group deck>
              <b-card v-for="type in list.values" :key="type.key" :header="type.key">
                <ul>
                  <li v-for="c in type.values" :key="c.key">
                    {{ c.value.nr }} {{ c.value.name }}
                  </li>
                </ul>
              </b-card>
            </b-card-group>
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
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      types: {
        E: 'Effective',
        S: 'Deputy (suppléant)',
      },
    };
  },
  computed: {
    candidatesByEntityListType() {
      return d3.nest()
        .key(d => d.value.list.entity.id)
        .entries(this.candidates)
        .map(entity => ({
          key: entity.key,
          name: entity.values[0].value.list.entity.name_en,
          values: d3.nest()
            .key(d => `${d.value.list.nr} ${d.value.list.name}`)
            .entries(entity.values)
            .map(list => ({
              key: list.key,
              color: `#${list.values[0].value.list.group.color}`,
              values: d3.nest()
                .key(d => this.types[d.value.type])
                .entries(list.values),
            })),
        }));
    },
  },
};
</script>

<style>
.dot {
  height: 12px;
  width: 12px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>
