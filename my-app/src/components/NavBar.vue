<!-- Not Practical Just playing with slots -->
<template>
  <nav class="nav">
    <div class="nav-left">
      <slot name="title"></slot>
    </div>

    <div class="nav-right">
      <slot name="right-side"></slot>
    </div>
  </nav>
</template>

<script>
  export default {

  }
</script>

<style>

</style>