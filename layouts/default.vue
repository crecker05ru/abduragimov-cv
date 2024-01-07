<template>
  <div class="default-layout" :class="[!isChecked ? 'light-theme' : 'dark-theme']">
    <AppGoogles :darkMode="isChecked"/>
  <header class="header">
<div class="header__inner">

  <p class="header__text">My CV</p>
  <label class="header__switch" :class="{'header__switch-checked': isChecked}">
    <Transition name="rotate"  mode="out-in">
    <svg v-if="!isChecked" class="header__sun-svg header__svg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
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
    <svg v-else-if="isChecked" class="header__moon-svg header__svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">

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
  transition: color ease 1s 1s;

  // background-color: var(--main-background-color);

}

.header {
  &__inner {
    display: flex;
    position: relative;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 80px;
  // background-color: var(--header-background-color);
  // background: linear-gradient(to right ,var(--gradient-from-color),var(--gradient-to-color));
  color: var(--secondary-text-color);
  transition: color ease 1s 1s;

  // transition: all ease 0.5s 0.5s;
  // -webkit-transition: background 1s ease-out;  
  //   -moz-transition: background 1s ease-out;  
  //   -o-transition: background 1s ease-out;  
  //   transition: background 1s ease-out;
  // transition: --gradient-from-color 3s, --gradient-to-color 3s;

  background: linear-gradient(to right, var(--myColor1), var(--myColor2));
  transition: --myColor1 1s, --myColor2 1s;

//   &:hover {  
//   --myColor1: #f00;
//   --myColor2: yellow;
// }
  }
  &__text {
    transition: color ease 1s 1s;
  }
  &__switch {
    display: block;
    position: absolute;
    left: 1rem;
    top: 1rem;
    // width: 32px;
    // height: 22px;
    // background-color: rgb(110, 110, 110);
    // border-radius: 12px;
  }
  // &__switch-checked {
  //   background-color: #c7c7c7;
  //   & .header__switch-span{
  //     transform: translate(100%,0);
  //     background-color: #0691ff;
  //   }
  // }
  // &__switch-span { 
  //   display: block;
  //   position: absolute;
  //   left: 0;
  //   top: 2px;
  //   background-color: #fff;
  //   border-radius: 50%;
  //   width: 17px;
  //   height: 17px;
  //   z-index: 1;
  // }
  &__switch-input {
    width: 0;
    height: 0;
    appearance: none;
    opacity: 0;
  }
  &__svg {
    width: 48px;
    height: auto;
  }

}
.main {
  flex: 1 1 auto;
  min-height: calc(100svh - 160px);
  background-color: var(--main-background-color);
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
  animation: rotate-in 1s;
}
.rotate-leave-active {
  animation: rotate-in 1s reverse;
}
@keyframes rotate-in {
  0% {
    transform: translateY(-150%);
  }
  100% {
    transform: translateY(0);
  }
}
.dark-theme {

   & .header__inner {
    --myColor1: #1c2189;
  --myColor2: #01032b;
    background: linear-gradient(to right, var(--myColor1), var(--myColor2));
  transition: --myColor1 1s 1s, --myColor2 1s 1s;
   }
}

.light-theme {
  // --myColor1: #fff;
  //   --myColor2: #0691ff;
   & .header__inner {

      background: linear-gradient(to right, var(--myColor1), var(--myColor2));
  transition: --myColor1 1s 1s, --myColor2 1s 1s;
   }
}
</style>