<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    variant="dark"
  >
    <b-navbar-brand to="/">
      Electathon 2019
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse
      id="nav-collapse"
      is-nav
    >
      <b-navbar-nav>
        <b-nav-item
          v-for="r in navRoutes"
          :key="r.name"
          :to="r.path"
          active-class="active"
        >
          {{ r.meta.longName }}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    navRoutes() {
      return this.$router.options.routes.filter((r) => r.meta.menu);
    },
  },
};
</script>
