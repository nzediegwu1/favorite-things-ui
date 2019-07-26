<template>
  <div id="app" class="app-container">
    <div id="page-wrap">
      <HeaderComponent />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/Header";

export default {
  name: "App",
  components: { HeaderComponent }
};
</script>
