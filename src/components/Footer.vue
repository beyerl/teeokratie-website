<template>
<div class="bg-light small-caps py-2">
    &copy;2021 Dr. Beyer Webdesign
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HeadFooterer extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .small-caps { font-variant: small-caps; }
</style>
