<template>
  <div>
    <HeaderComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "./components/Header";
export default {
  name: "App",
  components: { HeaderComponent }
};
</script>
