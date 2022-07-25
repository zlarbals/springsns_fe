<template>
  <div>
    <div v-for="post in this.$store.state.posts" v-bind:key="post.id">
        <p> content : {{post.content}}</p>
        <p> nickname : {{post.authorNickname}}</p>
    </div>
  </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('FETCH_POSTS');
    }
}
</script>

<style>

</style>