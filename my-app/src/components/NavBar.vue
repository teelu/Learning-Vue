<!-- Not Practical Just playing with slots -->
<template>
  <nav class="nav">
    <div class="nav-left">
      <h1>{{title}}</h1>
    </div>

    <div class="nav-right">
      <slot name="right-side"></slot>
    </div>
  </nav>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style>

</style>