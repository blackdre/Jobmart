<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-light"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    <i class="fas fa-search"></i>
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Search Jobs</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="eg; Python Developer"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style>
</style>