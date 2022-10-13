<template>
    <div>
      <div class="card border-0">
        <div class="card-body overflow-hidden">
          <h5 class="card-title my-3">
            <nuxt-link :to="['/'+ link +'/']+id" class="text-truncate text-decoration-none">{{ title }}</nuxt-link>
          </h5>
          <p class="card-text">{{ description.substring(0, 120) }} ...</p>
          <div class="my-3">
            <span class="text-primary" v-for="tag in tags" :key="tag.id"># {{ tag }}</span>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <img class="avatar-img rounded-circle" src="~/assets/images/nuxt.jpg" alt="avatar" style="width: 40px; height: 40px; object-fit: cover; object-position: center">
              <span class="ms-3 text-primary">by hello human</span>
            </div>
            <div class="d-flex align-items-center">
              <i class="bi bi-heart-fill text-danger me-2"></i> {{ reaction }}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

    export default {
      props: {
        id: {
          required: false
        },
        title: {
          type: String,
          required: false
        },
        description: {
          type: String,
          required: false
        },
        link: {
          type: String,
          required: false
        },
        tags: {
          type: Array,
          required: false
        },
        reaction: {
          required: false
        }
      },
      computed: {
        react(){
          return this.reaction_count = this.reaction
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>