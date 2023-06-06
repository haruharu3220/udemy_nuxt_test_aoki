//監視プロパティで書いたコード
// const app = Vue.createApp({
//   data: () => ({
//     firstName: "",
//     lastName: "",
//     fullName: "",
//   }),
//   //監視プロパティ(watch)
//   watch: {
//     firstName: function (value) {
//       this.fullName = value + " " + this.lastName;
//     },
//     lastName: function (value) {
//       this.fullName = this.firstName + " " + value;
//     },
//   },
// });
// app.mount("#app");

//算出プロパティで書いたコード＝スッキリしている
const app = Vue.createApp({
  data: () => ({
    firstName: "",
    lastName: "",
  }),
  computed: {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  },
});
app.mount("#app");
