<script lang="ts" setup>
import { INTRODUCTION } from './data';
import { useIntersectionObserver } from '@/hooks';

const welcomeRef = ref<HTMLDivElement>();
const messageRef = ref<HTMLDivElement>();

const state = reactive({
  sayHi: false,
  title: false,
  message: false,
});

const message = ref('');

const handleObserver = () => {
  state.sayHi = true;
  setTimeout(() => {
    state.title = true;
  }, 250);
  setTimeout(() => {
    state.message = true;
  }, 500);
};

useIntersectionObserver(welcomeRef, handleObserver);

const setTypewriter = () => {
  let index = 0;
  const interval = setInterval(() => {
    message.value += INTRODUCTION[index];
    index++;
    if (index === INTRODUCTION.length) {
      clearInterval(interval);
    }
  }, 30);
};

watchEffect(() => {
  if (messageRef.value) {
    messageRef.value.addEventListener('animationend', setTypewriter);
  }
});

onBeforeUnmount(() => {
  if (messageRef.value) {
    messageRef.value.removeEventListener('animationend', setTypewriter);
  }
});
</script>

<template>
  <div class="welcome" ref="welcomeRef">
    <img v-if="state.sayHi" src="@/assets/svg/say-hi.svg" alt="say-hi" />
    <div v-if="state.title" class="welcome-title page-title">Self-Introduce</div>
    <div v-if="state.message" ref="messageRef" class="welcome-message">
      <p v-html="message"></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes say-hi-in {
  0% {
    transform: rotate(-90deg);
  }
  75% {
    transform: rotate(6deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes title-in {
  0% {
    opacity: 0;
    transform: translateY(-200%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes welcome-message-in {
  0% {
    opacity: 0;
    transform: translateX(-200%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.welcome {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  &-message {
    position: relative;
    flex: 1;
    min-height: 50%;
    max-height: 80%;
    overflow: auto;
    margin: auto 60px auto 32px;
    padding: 24px;
    border-radius: 32px;
    font-size: 30px;
    font-weight: 700;
    background-color: rgba($color: #fff, $alpha: 0.4);
    animation: welcome-message-in 1s cubic-bezier(0.77, 0, 0.175, 1);
    > p {
      white-space: pre-wrap;
      line-height: 1.4;
      &::after {
        @include animation-blink();
        content: '|';
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 0;
      height: 0;
      border: 24px solid transparent;
      border-left-color: rgba($color: #fff, $alpha: 0.4);
      border-bottom-color: rgba($color: #fff, $alpha: 0.4);
      transform: translate(-24px, 84px) rotate(45deg);
    }
  }
  &-title {
    position: absolute;
    top: 20%;
    left: 15%;
    animation: title-in 1s cubic-bezier(0.77, 0, 0.175, 1);
  }
  > img {
    height: 40%;
    margin-top: auto;
    transform-origin: bottom right;
    animation: say-hi-in 1s cubic-bezier(0.77, 0, 0.175, 1);
  }
}
</style>
