<template>
  <header :class="$style.header"></header>
</template>

<script>
export default {
  name: 'AppHeader',
  components: {},
};
</script>

<style module lang="scss">
.header {
  position: relative;
  background-image: url('../../assets/header.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 450px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(to right, rgba(168, 0, 168, 0.7), rgba(0, 51, 161, 0.7));
    width: 100%;
    height: 450px;
  }
}
</style>
