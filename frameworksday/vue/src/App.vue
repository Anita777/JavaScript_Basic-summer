<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
  
    <h2>Essential Links</h2>
    <list v-bind:list="frameworks"></list>
    <input type="password">
  </div>
</template>

<script>
import List from './List';
import api from '../../react_/src/api.service';

export default {
  components: {
    List
  },
  name: 'app',
  data() {
    return {
      msg: 'Welcome to JavaScript world 2',
      frameworks: []
    }
  },
  mounted() {
    api.serverRequest().then(data => {
      this.frameworks = data;
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  /* list-style-type: none; */
  padding: 0;
}

li {
  /* display: inline-block; */
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
