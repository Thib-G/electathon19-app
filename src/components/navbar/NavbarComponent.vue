<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">Electathon 2019</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" active-class="active" exact>Home</b-nav-item>
        <b-nav-item to="/candidates" active-class="active" exact>Candidates</b-nav-item>
        <b-nav-item to="/results" active-class="active" exact>Results</b-nav-item>
        <b-nav-item to="/about" active-class="active" exact>About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
