<template>
  <div class="row d-flex justify-content-center">
    <div class="card border-0 col-lg-9">
      <div class="card-body overflow-hidden">
        <h5 class="card-title my-3">
          Lorem ipsum dolor sit amet.
        </h5>
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <img class="avatar-img rounded-circle" src="~/assets/images/nuxt.jpg" alt="avatar" style="width: 40px; height: 40px; object-fit: cover; object-position: center">
            <span class="ms-3 text-primary">by hello human</span>
          </div>
          <div class="d-flex align-items-center">
            <i class="bi bi-heart-fill text-danger me-2"></i>
          </div>
        </div>
        <div class="my-3">
          <span class="text-primary" ># </span>
        </div>
        <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae distinctio et harum maxime perferendis quisquam quod recusandae rem! Alias dignissimos distinctio doloribus harum natus qui temporibus tenetur voluptates! Sapiente, sunt.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
  const data = ref()

  definePageMeta({
    layout: "detail",
  });
</script>
