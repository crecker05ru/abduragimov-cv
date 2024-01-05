<template>
  <div class="default-layout" :class="[!isChecked ? 'light-theme' : 'dark-theme']">
    <AppGoogles/>
  <header class="header">
<div class="header__inner">
  <p class="header__text">My CV</p>
  <label class="header__switch" :class="{'header__switch-checked': isChecked}">
    <span class="header__switch-span"></span>
    <input class="header__switch-input" type="checkbox" @click="switchTheme" v-model="isChecked" />
  </label>
  <!-- <div>
    <span>Language</span>
    <label class="header__switch" :class="{'header__switch-checked': language === 'ru'}">
    <span class="header__switch-span"></span>
    <input class="header__switch-input" type="checkbox" @click="switchTheme" v-model="language" />
  </label>
  </div> -->

</div>
  </header>
  <main class="main">
    <slot />

  </main>
  <footer class="footer">
    <div class="footer__inner">
    <p>By Anvar</p>
    <a href="" target="_blank">Github</a>
    </div>
  </footer>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const isLightTheme = ref(true)
const isChecked = ref(false)
const language = ref("en")
const switchTheme = () => {
  isLightTheme.value = !isLightTheme.value
}
</script>
<style lang="scss">

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--scrollbar-track-color); 
  border-radius: 4px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb-color); 
  border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover-color);
}
.default-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: var(--main-text-color);
  // background-color: var(--main-background-color);

}
.header {
  &__inner {
    display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 80px;
  // background-color: var(--header-background-color);
  background: linear-gradient(to right ,var(--gradient-from-color),var(--gradient-to-color));
  color: var(--secondary-text-color);
  }
  &__switch {
    display: block;
    position: relative;
    width: 32px;
    height: 22px;
    background-color: rgb(110, 110, 110);
    border-radius: 12px;
  }
  &__switch-checked {
    background-color: #c7c7c7;
    & .header__switch-span{
      transform: translate(100%,0);
      background-color: #0691ff;
    }
  }
  &__switch-span { 
    display: block;
    position: absolute;
    left: 0;
    top: 2px;
    background-color: #fff;
    border-radius: 50%;
    width: 17px;
    height: 17px;
    z-index: 1;
  }
  &__switch-input {
    width: 0;
    height: 0;
    appearance: none;
    opacity: 0;
  }

}
.main {
  flex: 1 1 auto;
  min-height: calc(100svh - 160px);
  background-color: var(--main-background-color);
}
.footer {
  &__inner {
    display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 80px;
  background-color: var(--footer-background-color);
  color: var(--secondary-text-color);
  }
}

</style>