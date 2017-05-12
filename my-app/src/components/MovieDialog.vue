<template>
  <div>
    <p>{{index+1}} - {{movie.Title}}</p>
  </div>
</template>

<script>
  export default {
    props: ['movie', 'index'],
  }
</script>

<style>
</style>