<template>
  <div class="">
    <div class="row g-3">
      <div class="col-lg-4" v-for="post in posts" :key="post.id">
        <post-preview :id="post.id" :title="post.title" :tags="post.tags"
        :description="post.body"
        link="posts" :reaction="post.reactions"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PostPreview from "@/components/posts/PostPreview"
export default {
    props: ['posts'],
    components: { PostPreview },
}
</script>