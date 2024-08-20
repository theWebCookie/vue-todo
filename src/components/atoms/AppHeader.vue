<template>
  <header :class="$style.header"></header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style module lang="scss">
.header {
  position: relative;
  background-image: url('../../assets/header.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 80%;
  width: 100%;
  height: 450px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient($header-gradient-angle, $header-gradient-start, $header-gradient-middle, $header-gradient-end);
    width: 100%;
    height: 450px;
  }
}
</style>
