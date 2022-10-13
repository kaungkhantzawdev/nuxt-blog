<template>
    <div>
        <div class="container" v-if="store.getLoading">
          <div class="row">
            <div class="col-12 d-flex">
              <div class="spinner-grow text-primary mx-auto" role="status" >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        <postsPostList :posts="store.getPosts" />
    </div>
</template>

<script setup>
import { usePostStore } from '~/stores/PostStore.js'
const config = useRuntimeConfig()
const store = usePostStore()

onMounted(() => {
  // store.setPosts("hello")
  $fetch(config.API_BASE_URL+'posts')
      .then(res => {
        // console.log(res)
        store.setPosts(res.posts)
        store.setLoading()
      })
      .catch(err => console.log(err))
})
</script>