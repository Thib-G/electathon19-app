<template>
  <div class="home">
    <h1>Welcome to Electathon 2019</h1>
    <b-card>
      <h2>Playing with elections 2019 open data</h2>
      <ul>
        <li v-for="r in $router.options.routes" :key="r.name">
          <router-link :to="r.path">{{ r.meta.longName }}</router-link>
        </li>
      </ul>
      <h3>Data</h3>
      <p>Based on open-data provided by
        <a href="https://elections.openknowledge.be/" target="_blank">Open Knowledge Belgium</a>.
      </p>
      <p>API developed by
        <a href="https://github.com/jbelien/elections-be-api" target="_blank">@jbelien</a>.</p>
      <h3>Source code</h3>
      <p>Source code is available on
        <a href="https://github.com/Thib-G/electathon19-app" target="_blank">Github</a>.</p>
      <p>Contact: Thibaut Goelff <a href="https://twitter.com/tgoelff" target="_blank">@tgoelff</a>.</p>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>
