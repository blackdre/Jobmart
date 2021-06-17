<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">JOBMART.</router-link>
      <Search />
      <button
        class="btn btn-light"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        Menu
      </button>
    </div>
  </nav>

  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">JobMart</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link" data-bs-dismiss="offcanvas"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" data-bs-dismiss="offcanvas"
            >About us</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/jobs" class="nav-link" data-bs-dismiss="offcanvas"
            >Jobs</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/contact-us"
            class="nav-link"
            data-bs-dismiss="offcanvas"
            >Contact us</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/log-in" class="nav-link" data-bs-dismiss="offcanvas"
            >Login</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/sign-up"
            class="nav-link"
            data-bs-dismiss="offcanvas"
            >Sign up</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Search from "./Search.vue";
export default {
  name: "Navbar",
  components: {
    Search,
  },
};
</script>

<style>
</style>