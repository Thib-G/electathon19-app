<template>
  <svg :width="width" :height="height">
    <g>
      <rect :height="height" :width="width" />
    </g>
    <g :transform="`translate(${width / 2},${height / 2})`">
      <circle
        cx="0"
        cy="0"
        :r="width * 0.3"
        class="cbox"
        :class="{ clicked }"
        @click.prevent="clicked = !clicked"
        @keydown.prevent="clicked = !clicked"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      clicked: false,
    };
  },
};
</script>

<style scoped>
.cbox {
  fill: white;
  cursor: pointer;
}
.cbox.clicked {
  fill: red;
}
</style>
