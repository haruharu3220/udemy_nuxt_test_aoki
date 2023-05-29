<template>
  <div class="aboutVue">
    <h1>This is an about page</h1>
    <button @click="checkRouteInfo">ルート情報</button>
    <button @click="gotoHome">homeに戻る</button>
  </div>
</template>
<script>
export default {
  name: "AboutVue",
  methods: {
    checkRouteInfo() {
      console.log(this.$route);
      console.log(this.$route.path);
      // console.log(this.)
    },
    gotoHome() {
      this.$router.push("/");
    },
  },
};
</script>
