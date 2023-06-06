const app = Vue.createApp({
  data: () => ({
    message: "Hello Vue.js",
  }),
  //computed＝算出プロパティ
  computed: {
    reversedMessage: function () {
      return this.message.split("").reverse().join("");
    },
  },
  methods: {
    reversedMessageMethods: function () {
      return this.message.split("").reverse().join("");
    },
  },
});
app.mount("#app");
