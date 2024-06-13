<script lang="ts" setup>
import Skeleton from './Skeleton.vue';
import Welcome from './Welcome.vue';
import TechnologyStack from './TechnologyStack.vue';
</script>

<template>
  <div class="home">
    <section><Skeleton /></section>
    <section><Welcome /></section>
    <section><TechnologyStack /></section>
  </div>
</template>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  > section {
    width: 100vw;
    height: 100vh;
    scroll-snap-align: start;
    overflow: hidden;
  }
}
</style>
