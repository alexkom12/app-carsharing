<template>
  <v-app>
    <mainPage />
  </v-app>
</template>

<script>
import mainPage from "./components/mainPage";
import "./assets/styles/resetStyles.css";

export default {
  name: "App",
  components: {
    mainPage
  }
};
</script>

<style lang="sass"></style>
