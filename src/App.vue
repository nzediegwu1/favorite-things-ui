<template>
  <div id="app" class="app-container">
    <SidebarMenu></SidebarMenu>
    <div id="page-wrap">
      <HeaderComponent/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "./components/Header";
import SidebarMenu from "./components/SidebarMenu";

export default {
  name: "App",
  components: { HeaderComponent, SidebarMenu }
};
</script>
