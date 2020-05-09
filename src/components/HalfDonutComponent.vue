<template>
  <svg :viewBox="`0 0 ${w} ${h}`" class="svg-content"
    preserveAspectRatio="xMinYMin meet">
    <g class="donut" ref="donut" :transform="`translate(${w / 2},${h})`" />
    <g class="text" ref="text" :transform="`translate(${w / 2}, ${h * .9})`">
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
      w: 400,
      h: 200,
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
        .padAngle(0.01)
        .sort(null)
        .startAngle(-Math.PI / 2)
        .endAngle(Math.PI / 2)
        .value((d) => d.value.seats);
    },
    arc() {
      const radius = Math.min(this.w, this.h);
      return d3.arc().innerRadius(radius * 0.67).outerRadius(radius - 1);
    },
    arcs() {
      return this.pie(this.seats.filter((d) => d.value.seats > 0));
    },
  },
  methods: {
    render() {
      const g = d3.select(this.$refs.donut);
      g.selectAll('path.arc')
        .data(this.arcs)
        .join('path')
        .attr('class', 'arc')
        .attr('fill', (d) => `#${d.data.value.group.color}`)
        .attr('d', this.arc)
        .on('mouseover', (d) => {
          this.text = `${d.data.value.group.name}: ${d.data.value.seats} seat${d.data.value.seats > 1 ? 's' : ''}`;
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
  .svg-content {
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 200px;
  }
</style>
