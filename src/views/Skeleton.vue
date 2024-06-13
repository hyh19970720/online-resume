<script lang="ts" setup>
const state = reactive({
  isLoaded: false,
});

onMounted(() => {
  document.body.style.pointerEvents = 'none';
  setTimeout(() => {
    state.isLoaded = true;
    document.body.style.pointerEvents = 'auto';
  }, 5000);
});
</script>

<template>
  <div class="global-skeleton">
    <div class="skeleton-letters">
      <template v-if="state.isLoaded">
        <p>Slide Down</p>
      </template>
      <template v-else>
        <span v-for="(str, idx) in 'LOADING'" :style="{ animationDelay: (idx + 1) / 10 + 's' }">{{ str }}</span>
      </template>
      <i class="loading-progress"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@property --left-color {
  syntax: '<color>';
  inherits: false;
  initial-value: #dfe4ea;
}

@property --right-color {
  syntax: '<color>';
  inherits: false;
  initial-value: #2f3542;
}

@keyframes skeleton-loading {
  0% {
    --left-color: #dfe4ea;
    --right-color: #2f3542;
  }
  25% {
    --left-color: #7bed9f;
    --right-color: #3742fa;
  }
  50% {
    --left-color: #eccc68;
    --right-color: #ff4757;
  }
  75% {
    --left-color: #1e90ff;
    --right-color: #2ed573;
  }
  0% {
    --left-color: #dfe4ea;
    --right-color: #2f3542;
  }
}

@keyframes letter-jump {
  0% {
    transform: translateY(0%);
  }
  5% {
    transform: translateY(-50%);
  }
  10% {
    transform: translateY(0%);
  }
}

@keyframes loading-progress {
  0% {
    width: 0;
  }
  10% {
    width: 30%;
  }
  20% {
    width: 50%;
  }
  30% {
    width: 60%;
  }
  40% {
    width: 70%;
  }
  50% {
    width: 80%;
  }
  60% {
    width: 85%;
  }
  70% {
    width: 90%;
  }
  80% {
    width: 95%;
  }
  90% {
    width: 99.5%;
  }
  100% {
    width: 100%;
  }
}

@keyframes zoom-up {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.3);
  }
  20% {
    transform: scale(1);
  }
}

.global-skeleton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(136deg, var(--left-color) 11%, var(--right-color) 97%);
  transition: opacity 0.3s linear, transform 0.3s linear;
  animation: skeleton-loading 20s infinite linear;
  .skeleton-letters {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 240px;
    user-select: none;
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    > p {
      width: 100%;
      text-align: center;
      animation: zoom-up 3s infinite ease-in-out 1s;
    }
    > span {
      animation: letter-jump 3s infinite ease-in-out;
    }
    .loading-progress {
      display: flex;
      align-items: center;
      width: 100%;
      &::after {
        content: '';
        width: 100%;
        height: 2px;
        background: #fff;
        animation: loading-progress 5s linear;
      }
    }
  }
}
</style>
