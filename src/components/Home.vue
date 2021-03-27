<template>
<div>
    <Header></Header>
    <Vote></Vote>
    <Footer></Footer>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Header from './Header.vue'
import Vote from './Vote.vue'
import Footer from './Footer.vue'

@Component({
  components: {
    Header,
    Vote,
    Footer
  }
})
export default class Home extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
