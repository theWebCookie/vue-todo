<template>
  <AppHeader />
  <MainContent />
</template>

<script>
import AppHeader from './components/atoms/AppHeader.vue';
import MainContent from './components/templates/MainContent.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    MainContent,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
  background-color: #f5f5f5;
  list-style: none;
}
</style>
