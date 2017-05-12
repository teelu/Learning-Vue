<template>
  <div id="app">
    <nav-bar title="OMDB VUE FINDER">
      <a slot="right-side" class="nav-item" href="#">HOME</a>
    </nav-bar>
    <div class="container">
      <div class="columns content">
        <form v-on:submit.prevent="onSubmit" class="column is-two-thirds">
          <div class="field">
          <label class="label">Movie Name</label>
          <p class="control">
            <input class="input" type="text" placeholder="Text input" v-model="searchMovieName">
          </p>

          <p class="control">
            <button class="button is-primary">Submit</button>
          </p>
        </div>
        </form>
        <modal v-show="showMovieModal" @close="showMovieModal=false" v-bind:movies="movies"></modal>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Modal from './components/Modal.vue';
import MovieDialog from './components/MovieDialog.vue';

export default {
  name: 'app',
  components: {
    NavBar,
    Modal,
    MovieDialog,
  },
  data () {
    return {
      searchMovieName: '',
      showMovieModal: false,
      results: 0,
      movies: [],
    }
  },
  methods: {
    onSubmit: function() {
      var that = this;
      axios.get('http://www.omdbapi.com/?s=' + this.searchMovieName)
      .then(function(response) {
        that.movies = response.data.Search;
        console.log(response.data.Search);
        that.showMovieModal = true;
      });
    }
  },
}
</script>

<style lang="scss">
  .content {
    padding: 15px;
  }
</style>
