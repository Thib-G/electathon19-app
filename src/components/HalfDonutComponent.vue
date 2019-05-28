<template>
  <svg :width="width" :height="height">
    <g class="donut" ref="donut" :transform="`translate(${width / 2},${height})`" />
    <g class="text" ref="text" :transform="`translate(${width / 2}, ${height * .9})`">
      <text>{{ text }}</text>
    </g>
  </svg>
</template>

<script>
import d3 from '@/assets/d3';

export default {
  props: {
    seats: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      width: 400,
      height: 200,
      text: '',
    };
  },
  mounted() {
    this.render();
  },
  watch: {
    seats() {
      this.render();
    },
  },
  computed: {
    pie() {
      return d3.pie()
        .padAngle(0.005)
        .sort(null)
        .startAngle(-Math.PI / 2)
        .endAngle(Math.PI / 2)
        .value(d => d.value.seats);
    },
    arc() {
      const radius = Math.min(this.width, this.height);
      return d3.arc().innerRadius(radius * 0.67).outerRadius(radius - 1);
    },
    arcs() {
      return this.pie(this.seats.filter(d => d.value.seats > 0));
    },
  },
  methods: {
    render() {
      const g = d3.select(this.$refs.donut);
      g.selectAll('path.arc')
        .data(this.arcs)
        .join('path')
        .attr('class', 'arc')
        .attr('fill', d => `#${d.data.value.group.color}`)
        .attr('d', this.arc)
        .on('mouseover', (d) => {
          this.text = `${d.data.value.group.name}: ${d.data.value.seats} seats`;
        })
        .on('mouseout', () => {
          this.text = '';
        });
    },
  },
};
</script>

<style scoped>
  .donut >>> .arc {
    stroke-width: 0;
    cursor: pointer;
  }
  .donut >>> .arc:hover {
    stroke-width: 2;
    stroke: black;
  }
  .text {
    text-anchor: middle;
  }
</style>
