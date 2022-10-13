<template>
    <div>
        <app-header />
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="my-2">
                            <img src="~/assets/images/Nuxt-3-Fundamentals_transparent.png" alt="bg-head" class="w-50 px-lg-5 rounded mx-auto d-block">
                        </div>
                        <div class="mt-5">
                            <form class="d-flex col-lg-5 mx-auto" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col-12">
                        <slot />
                    </div>
                </div>
            </div>
        <app-footer />
    </div>
</template>

<script>
import AppHeader from '../components/nav/AppHeader.vue'
import AppFooter from '../components/nav/AppFooter.vue'

    export default {
        components: { AppHeader, AppFooter }
    }
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
*{
    font-family: 'Poppins', sans-serif !important;
}
.nuxt-link-exact-active{
    color: #00DC82 !important;
}

</style>