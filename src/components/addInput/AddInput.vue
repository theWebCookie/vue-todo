<template>
  <div :class="$style.inputWrapper">
    <input type="checkbox" disabled :class="$style.checkBox" />
    <input type="text" placeholder="Add your activity" :class="$style.searchBar" v-model="inputValue" @keyup.enter="addActivity" />
  </div>
</template>

<script>
export default {
  name: 'AddInput',
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    addActivity() {
      console.log(this.inputValue);
      this.inputValue = '';
    },
  },
};
</script>

<style module>
.inputWrapper {
  display: flex;
  gap: 10px;
  background-color: #fff;
  padding: 10px 0;
  margin-bottom: 20px;
  border-radius: 5px;
}

.checkBox {
  margin-left: 10px;
}

.searchBar {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  border: none;
}
</style>
