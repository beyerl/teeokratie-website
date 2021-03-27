<template>
<div class="bg-primary pb-4">
<div class="container">
    <h2 class="pt-2 text-monospace">Willst Du mehr?</h2>
    <p class="text-justify">
        Hat Dir Kapitel 1 gefallen? Möchtest Du einen zweiten Teil? Dann trage Dich hier mit Deinem Namen ein. Wenn mindestens 20 Personen dafür stimmen, entwickelt Gaudi Games vorraussichtliche im Winter 2021/22 eine Fortsetzung.
        Du kannst auch freiwillig Deine Emailadresse angeben. Dann wirst Du automatisch benachrichtigt, wenn das neue Kapitel zum Download verfügbar ist. Wir verwenden Deine Kontaktdaten ausschließlich zu diesem Zweck.
    </p>
    <b-form v-if="!hasVoted" @submit="onSubmit" class="text-left">
      <div class="row">
        <b-form-group
          id="name-label"
          label="Name"
          label-for="name"
          class="col-md-6"
        >
          <b-form-input
            id="name"
            type="text"
            placeholder="Name eingeben"
            v-model="voter_name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="email-label"
          label="Email"
          label-for="email"
          class="col-md-6"
        >
          <b-form-input
            id="email"
            type="email"
            placeholder="Email eingeben"
            v-model="voter_email"
          ></b-form-input>
        </b-form-group>
      </div>
        <b-button type="submit" block variant="info" class="col-12">Absenden</b-button>
    </b-form>
    <div v-else>
      Danke, Du hast erfolgreich abgestimmt!
    </div>
    <div>
        <div class="h6 mt-3 text-left">Stand der Abstimmung</div>
        <b-progress :value="this.numberOfVoters" :max="20" variant="secondary"></b-progress>
        <div class="text-right mt-1">{{this.numberOfVoters}} von 20 benötigten Stimmen</div>
        <div v-if="this.numberOfVoters >= 20" class="text-danger">Juhu, die benötigte Anzahl wurde erreicht!</div>
    </div>
</div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { db } from '../db'
@Component
export default class Header extends Vue {
  voter_name = '';
  voter_email = '';
  numberOfVoters = 0;
  hasVoted = false;

  onSubmit (event: Event) {
    event.preventDefault()
    db.ref('voters').push({ name: this.voter_name, email: this.voter_email })
    this.numberOfVoters += 1
    console.log(this.numberOfVoters)
    db.ref('voters-count').set(this.numberOfVoters)

    this.hasVoted = true
    localStorage.setItem('hasVoted', 'true')
  }

  mounted () {
    db.ref('voters-count').once('value', snapshot => {
      console.log(snapshot.val())
      this.numberOfVoters = snapshot.val()
    })
    this.hasVoted = localStorage.getItem('hasVoted') === 'true'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
