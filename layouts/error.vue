<template>
    <div class="container">
        <div class="row align-items-center justify-content-center min-vh-100">
            <div class="col-md-9 text-center mx-auto my-0 my-md-5 py-0 py-lg-5 position-relative z-index-9">
                <img src="~/assets/images/not-found.svg" alt="404" class="w-50 mb-3">
                <!-- Content -->
                <!-- <h1 class="display-1 text-primary">404</h1> -->
                Nuxt<h2>Page Not Found!</h2>
                <p>Either something went wrong or this page doesn't exist anymore.</p>
                <nuxt-link to="/" class="btn btn-danger mt-3"><i class="bi bi-arrow-left me-3"></i>Back to home page</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'notFoundUi'
    }
</script>

<style lang="scss" scoped>

</style>