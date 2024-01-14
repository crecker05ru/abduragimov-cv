<template >
<div v-if="isOpened" class="app-modal" >
  <div class="app-modal__wrapper">
  <div class="app-modal__inner">
    <button class="app-modal__close-button" @click="closeModalHandler">X</button>
    <div class="app-modal__content"> <slot/></div>
  

  </div>
</div>
</div>
</template>
<script lang="ts" setup>
defineProps<{
  isOpened: boolean
}>()
const emit = defineEmits(['close-modal'])

const closeModalHandler = () => {
emit('close-modal')
}
</script>
<style lang="scss">
.app-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000009;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  &__wrapper {
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 460px) {
    width: 100%;
    }
  }
  &__inner {
    padding: 16px;
    min-width: 720px;
    margin-left: auto;
    margin-right: auto;
    max-width: 980px;
    background-color: #fff;
    border-radius: 8px;
    @media screen and (max-width: 780px) {
    min-width: 420px;
    }
    @media screen and (max-width: 460px) {
    min-width: 100%;
    padding: 0px;
    padding-top: 24px;
    }
  }
  &__close-button {
    position: absolute;
    top: 8px;
    right: 16px;
    font-size: 24px;
    border: none;
    background-color: transparent;
    @media screen and (max-width: 460px) {
    min-width: 100%;

    }

  }
  &__content {
    margin-top: 24px;
  }
}
</style>