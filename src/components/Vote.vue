<template>
<div class="bg-primary pb-4">
<div class="container">
    <h2 class="pt-2 text-monospace">Willst Du mehr?</h2>
    <p class="text-justify">
        Hat Dir Kapitel 1 gefallen? Möchtest Du einen zweiten Teil? Dann trage Dich hier mit Deiner Emailadresse ein. Wenn sich mindestens 20 Personen registrieren, entwickelt Gaudi Games vorraussichtliche im Winter 2021/22 eine Fortsetzung. Du wirst dann automatisch per Mail benachrichtigt, wenn sie zum Download verfügbar ist. Wir verwenden Deine Kontaktdaten ausschließelich zu diesem Zweck.
    </p>
    <b-form @submit="onSubmit" class="text-left">
      <b-form-group
        id="input-group-1"
        label="Email"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          placeholder="Email eingeben"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" block variant="info">Absenden</b-button>
    </b-form>
    <div>
        <div class="h6 mt-3 text-left">Stand der Abstimmung</div>
        <b-progress :value="2" :max="20" variant="secondary"></b-progress>
        <div class="text-right mt-1">2 von 20 benötigten Stimmen</div>
    </div>
</div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  onSubmit (event: Event) {
    event.preventDefault()
    alert(JSON.stringify(event))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
