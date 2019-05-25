<template>
  <div id="app">
    <NavbarComponent />
    <b-container>
      <b-row class="mt-3">
        <b-col>
          <keep-alive>
            <router-view />
          </keep-alive>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavbarComponent from '@/components/navbar/NavbarComponent.vue';

export default {
  components: {
    NavbarComponent,
  },
};
</script>
