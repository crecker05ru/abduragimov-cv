<template>
  <div class="default-layout light-theme">
  <header class="header">
<div class="header__inner">
  <p class="header__text">My CV</p>
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
<style lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: var(--main-text-color);
}
.header {
  &__inner {
    display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 80px;
  // background-color: var(--header-background-color);
  background: linear-gradient(to right ,#fff,var(--header-background-color));
  color: var(--secondary-text-color);
  }

}
.main {
  flex: 1 1 auto;
  height: calc(100svh - 160px);
  background-color: var(--main-background-color);
}
.footer {
  &__inner {
    display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 80px;
  background-color: var(--footer-background-color);
  color: var(--secondary-text-color);
  }
}

</style>