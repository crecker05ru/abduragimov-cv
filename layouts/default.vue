<template>
  <Transition name="back"  mode="out-in">
  <div class="default-layout" :class="[isLightTheme ? 'light-theme' : 'dark-theme']">

    <AppGoogles :darkMode="!isLightTheme"/>
  <header class="header">
<div class="header__inner">

  <p class="header__text">My CV</p>
  <label class="header__switch" :class="{'header__switch-checked': !isLightTheme}">
    <Transition name="rotate"  mode="out-in">
    <svg v-if="isLightTheme" class="header__sun-svg header__svg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 111.69 111.69" xml:space="preserve">
<g id="sun">
	<g>
		<g>
			<circle style="fill:#FCDD66;" cx="55.845" cy="55.845" r="55.845"/>
		</g>
	</g>
	<g>
		<g>
			<circle style="fill:#FBD009;" cx="55.845" cy="55.845" r="46.174"/>
		</g>
	</g>
</g>
</svg>
    <svg v-else-if="!isLightTheme" class="header__moon-svg header__svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">

<circle cx="100" cy="100" r="94.147" fill="#e4e2dc"/>

<clipPath id="a">

<circle cx="100" cy="100" r="94.147"/>

</clipPath>

<g clip-path="url(#a)">

<path d="M173.111-46.282l59.723 39.66 25.005 67.189-19.264 69.056-56.174 44.544-71.628 3.018-59.723-39.66-25.005-67.189L45.308 1.28l56.174-44.544 71.629-3.018z" fill="#f6f4ef"/>

</g>

<path d="M158.551 135.006l-4.072 2.503 6.822 5.83 1.8-4.404-4.55-3.929zM116.907 69.037l-6.653 4.089 11.145 9.525 2.941-7.195-7.433-6.419zM67.138 119.523l-4.542 2.791 7.61 6.503 2.007-4.912-5.075-4.382zM80.286 37.068l4.825-3.028-8.193-6.873-2.097 5.268 5.465 4.633zM143.466 148.273l5.198-3.261-8.826-7.403-2.259 5.674 5.887 4.99z" fill="#e4e2dc" fill-rule="nonzero"/>

<path d="M163.108 73.155l2.628 13.525-12.051 6.679-10.076-9.398 5.824-12.486 13.675 1.68zM83.672 53.684l-7.194 20.408-21.332-.919-5.99-20.976 17.63-12.045 16.886 13.532zM91.359 125.589l-5.626-25.934 22.927-13.364 19.794 17.674-10.692 24.288-26.403-2.664zM35.02 112.946l-3.955-14.875 12.902-8.012 11.929 9.923-5.53 14.145-15.346-1.181zM104.602 180.886l-15.004-13.214 8.155-17.962 20.044 2.111 4.233 19.268-17.428 9.797z" fill="#e4e2dc"/>

</svg>
    </Transition>

    <input class="header__switch-input" type="checkbox" @click="switchTheme" v-model="isChecked" />
  </label>
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
</Transition>
</template>
<script setup lang="ts">
import { ref,onMounted } from 'vue';

const isLightTheme = ref(true)
const isChecked = ref(false)
const language = ref("en")

const switchTheme = () => {
  isLightTheme.value = !isLightTheme.value
  localStorage.setItem('cv-theme',JSON.stringify(isLightTheme.value))
}

onMounted(() => {
  window.addEventListener("beforeunload", () => {
    localStorage.setItem('cv-theme',JSON.stringify(isLightTheme.value))
  });
  const isLight = JSON.parse(localStorage.getItem('cv-theme') || "" )
  setTimeout(() => {
  isLightTheme.value = Boolean(isLight)
  }, 20);
  console.log('isTheme',isLight,isLightTheme.value)
  window.addEventListener("beforeunload", () => {
    localStorage.setItem('cv-theme',JSON.stringify(isLightTheme.value))
  });
})
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
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: var(--main-text-color);

}

.header {
  &__inner {
    display: flex;
    position: relative;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 80px;

  color: var(--secondary-text-color);
  }
  &__text {
    transition: color ease 1s 1s;
  }
  &__switch {
    display: block;
    position: absolute;
    left: 1rem;
    top: 1rem;
    z-index: 3;

  }

  &__switch-input {
    width: 0;
    height: 0;
    appearance: none;
    opacity: 0;
  }
  &__svg {
    width: 48px;
    height: auto;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0px 0px 24px 12px #ffffff99;
    z-index: 5;

  }

}
.main {
  flex: 1 1 auto;
  min-height: calc(100svh - 160px);
  transition: background-color ease 1s 1s;
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
  transition: color, background-color ease 0.5s 0.5s;
  }
}

.rotate-enter-active {
  animation: from-left linear 1s;
}
.rotate-leave-active {
  animation: from-left  linear 1s reverse;
}
.back-enter-active {
  animation: night-day linear 0.5s;
}
.back-leave-active {
  animation: night-day  linear 1s;
}
@keyframes translate-in {
  0% {
    transform: translateX(5000%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes translate-out {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(5000%);
  }
}
@keyframes from-left {
  0% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes day-night {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes night-day {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
.dark-theme {
  --myColor1: #1e2499dd;
  --myColor2: #00044299;
  --myColor3: #00033633;
  --myColor4: #01032b22;
    background: linear-gradient(to right bottom, var(--myColor1), var(--myColor2),var(--myColor3),var(--myColor4)), url('../assets/svg/starry-night.svg');
  transition: --myColor1 2s 0.5s, --myColor2 2s 0.5s, --myColor3 2s 0.5s, --myColor4 2s 0.5s;
  animation: translate-out  linear 1s;
}

.light-theme {
  background: linear-gradient(to right bottom, var(--myColor1), var(--myColor2),var(--myColor3),var(--myColor4)), url('../assets/svg/starry-night.svg');
  transition: --myColor1 2s 0.5s, --myColor2 2s 0.5s , --myColor3 2s 0.5s, --myColor4 2s 0.5s;
  animation: translate-out  linear 1s;
}
.stars-svg {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  opacity: 0;
  &__day {
    opacity: 0;
  }
  &__night {
    opacity: 1;
  }
}
</style>