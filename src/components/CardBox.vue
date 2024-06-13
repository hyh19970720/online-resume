<script lang="ts" setup></script>

<template>
  <div class="card-box">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card-box {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 12px 16px;
  border-radius: 16px;
  border: 3px solid #000;
  background-color: rgba($color: #fff, $alpha: 0.5);
}
</style>
