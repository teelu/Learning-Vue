<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <movie-dialog slot="modal-content" v-for="(movie, index) in movies" v-bind:movie="movie" v-bind:index="index"></movie-dialog>
      </div>
    </div>
    <button class="modal-close" @click="$emit('close')"></button>
  </div>
</template>

<script>
  import MovieDialog from './MovieDialog.vue';

  export default {
    props: [ 'movies' ],
    components: {
      MovieDialog,
    },
    methods: {
    },
    updated: function() {
    }
  }
</script>

<style>
</style>