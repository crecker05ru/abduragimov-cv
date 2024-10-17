<template>
<section class="chat">
  <div class="chat__window"></div>
</section>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.chat {
  padding: 16px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: +1;
  background-color: var(--main-background-color);
  border-radius: var(--border-radius);

  
  &__window{
    width: 300px;
    height: 260px;
    border-radius: var(--border-radius);
    border: 1px solid;
    border-color: var(--item-background-color);
    color: var(--main-text-color);
    background-color: var(--gradient-from-color);
  }
}
</style>