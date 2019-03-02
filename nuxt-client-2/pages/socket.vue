<template>
  <div>
    <button type="button" class="btn btn-primary" @click="getMes">Submit</button>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  head: {
    title: "Socket test authenticate"
  },
  data() {
    return {
      message: null
    };
  },
  computed: {
    ...mapState({
      email: state => state.email,
      id: state => state.id,
      token: state => state.token
    })
  },
  watch: {
    // whenever brokenLinks change
    //   message: function () {
    //       //this.click = false
    //       this.message = null
    //   }
  },
  created() {
    // this.loading = true
    // this.getBrokenLink().then(() => {
    //     this.loading = false
    // })
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
    // websocket
    window.Echo.private(`notification-${this.id}`).listen(
      "PrivateMessage",
      e => {
        this.message = e.message;
        //console.log(e);
      }
    );
  },
  methods: {
    // async getBrokenLink() {
    //     await this.$store.dispatch('checkBrokenLink/getBrokenLink')
    // },
    // async checkBrokenLink() {
    //     this.$nuxt.$loading.start()
    //     this.click = true
    //     await this.$store.dispatch('checkBrokenLink/checkBrokenLink')
    //     this.$nuxt.$loading.finish()
    // },
    // changeBrokenLink() {
    //     this.$store.dispatch('checkBrokenLink/changeBrokenLink', this.brokenLinks)
    // },
    // changeTypeLink() {
    //     this.$store.dispatch('checkBrokenLink/changeTypeLink')
    // }
    async getMes() {
      await this.$store.dispatch("auth/getMes");
    }
  }
};
</script>

<style scoped>
</style>
