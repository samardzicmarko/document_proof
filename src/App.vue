<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <dp-footer />
  </v-app>
</template>

<script>
import dpfooter from "./components/dp-footer.vue";

export default {
  name: "App",
  components: {
    "dp-footer": dpfooter,
  },
};
</script>
