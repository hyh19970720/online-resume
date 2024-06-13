<script lang="ts" setup>
import { useIntersectionObserver } from '@/hooks';
import { CardBox } from '@/components';
import { TECHNOLOGY_STACKS } from './data';

const technologyStackRef = ref<HTMLDivElement>();

const state = reactive({
  icon: false,
  stacks: false,
  title: false,
});

const handleObserver = () => {
  state.icon = true;
  state.stacks = true;
  setTimeout(() => {
    state.title = true;
  }, 250);
};

useIntersectionObserver(technologyStackRef, handleObserver);

const on = {
  beforeEnter(el: HTMLElement) {
    el.style.transform = 'translateX(-120%)';
    el.style.opacity = '0';
  },
  enter(el: HTMLElement, done: () => void) {
    el.style.transitionProperty = 'transform, opacity';
    el.style.transitionDuration = '500ms';
    el.style.transitionTimingFunction = 'ease-out';
    setTimeout(() => {
      el.style.transform = 'translateX(0)';
      el.style.opacity = '1';
    }, 500);
    setTimeout(done);
  },
};
</script>

<template>
  <div class="technology-stack" ref="technologyStackRef">
    <img
      v-if="state.icon"
      class="technology-stack-icon"
      src="@/assets/svg/technology-stack.svg"
      alt="technology-stack"
    />
    <div v-if="state.title" class="technology-stack-title page-title">Technology Stack</div>
    <ul class="technology-stack-list">
      <template v-for="(item, index) in TECHNOLOGY_STACKS">
        <Transition v-on="on">
          <li v-if="state.stacks" :style="{ transitionDelay: index * 0.3 + 's' }" :key="item.title">
            <CardBox>
              <h3>{{ item.title }}</h3>
              <ul class="stacks">
                <li
                  v-for="stack in item.items"
                  :key="stack.name"
                  :style="{ '--active-color': stack.color, '--active-width': stack.rate }"
                >
                  <span class="progress"></span>
                  <img class="stack-icon" :src="stack.icon" :alt="stack.name" />
                  <span class="stack-name"> {{ stack.name }}</span>
                </li>
              </ul>
            </CardBox>
          </li>
        </Transition>
      </template>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@keyframes image-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
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

.technology-stack {
  position: relative;
  width: 100%;
  height: 100%;
  &-icon {
    position: absolute;
    right: 5%;
    bottom: -5px;
    animation: image-up 0.3s forwards;
  }
  &-title {
    position: absolute;
    top: 20%;
    right: 6%;
    animation: title-in 0.3s forwards;
  }
  &-list {
    position: absolute;
    top: 50%;
    left: 10%;
    display: flex;
    flex-direction: column;
    width: 50%;
    max-height: 95%;
    overflow: auto;
    transform: translateY(-50%);
    > li {
      margin-bottom: 12px;
      h3 {
        font-size: 24px;
        padding-bottom: 12px;
      }
      .stacks {
        display: flex;
        flex-direction: column;
        gap: 8px;
        > li {
          display: flex;
          align-items: center;
          .progress {
            flex: 1;
            display: flex;
            align-items: center;
            height: 16px;
            border-radius: 0 12px 12px 0;
            background-color: rgba($color: #fff, $alpha: 0.5);
            &::after {
              content: '';
              width: calc(var(--active-width) / 10 * 100%);
              height: inherit;
              border-radius: inherit;
              background-color: var(--active-color);
            }
          }
          .stack-icon {
            width: 24px;
            height: 24px;
            margin-left: 12px;
          }
          .stack-name {
            width: 140px;
            padding-left: 10px;
            font-size: 20px;
            font-weight: bold;
            color: var(--active-color);
          }
        }
      }
    }
  }
}
</style>
