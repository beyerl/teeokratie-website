<template>
<div class="mb-4">
    <div class="position-relative max-height-100vh">
        <img class="w-100 h-100" src="../assets/background.png"/>
        <div class="position-absolute title d-flex flex-column justify-content-center h-100">
            <img class="w-100 px-5" src="../assets/title.png"/>
        </div>
        <div class="position-absolute arrow-button w-100">
            <b-button variant="link" @click="onArrowButtonClick">
                <svg class="arrows">
                    <path class="a1" d="M0 0 L30 32 L60 0"></path>
                    <path class="a2" d="M0 20 L30 52 L60 20"></path>
                    <path class="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
            </b-button>
        </div>
    </div>
    <div class="container" id="scrollTop">
        <div class="text-center h1 text-monospace">Willkommen</div>
        <p class="text-justify">
Teeokratie ist ein Retro-Point and Click Adventure, gespickt mitschrägem Humor und mannigfaltigen Anspielungen. Indem Du die rebellische Teesa spielst, die von Ihrem Vater genötigt wurde, im Kloster der Teeisten als Schwester zu dienen. Don Kamille, der Hohepriester dieser Institution, strebt unter dem Banner der Teeokratie an , einen Gottesstaat zu errichten. Unterstützt Du Ihn da bei oder hilfst Du doch lieber den demokatisch orientierten Essenziallisten, die statt Tee die Aufnahme von Nahrungsmitteln bevorzugen? In Kapitel 1, dass jetzt als kostenlose Public Beta zur Verfügung steht, legst Du erst mal Deine Abschlussprüfung als Klosterschwester ab. Steig direkt ein:         </p>
        <b-button block variant="dark" href="https://beyerl.github.io/teeokratie/" target="_blank">
            <img src="../assets/play-outline.svg" class="mr-2" height="16"/>
            Online spielen
        </b-button>
        <b-button block variant="dark" href="../assets/downloads/teeokratie-windows.zip">
            <img src="../assets/desktop-outline.svg" class="mr-2" height="16"/>
            Für Windows herunterladen
            </b-button>
        <b-button block variant="dark" href="../assets/downloads/teeokratie.apk">
             <img src="../assets/android.svg" class="mr-2" height="16"/>
            Für Android herunterladen
            </b-button>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  onArrowButtonClick () {
    const result = document.getElementById('scrollTop')?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.max-height-100vh {
    @media (min-width: 992px) {
        height: 100vh;
    }
}
.arrow-button {
    display: none;
    left: 0;
    right: 0;
    bottom: 1rem;
    z-index: 10;
    @media (min-width: 992px) {
        display: block
    }
}

.arrows {
width: 60px;
height: 72px;
position: absolute;
left: 50%;
margin-left: -30px;
bottom: 20px;
}

.arrows path {
stroke: #222;
fill: transparent;
stroke-width: 1px;
animation: arrow 2s infinite;
-webkit-animation: arrow 2s infinite;
}

@keyframes arrow
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}

@-webkit-keyframes arrow /*Safari and Chrome*/
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}

.arrows path.a1 {
animation-delay:-1s;
-webkit-animation-delay:-1s; /* Safari 和 Chrome */
}

.arrows path.a2 {
animation-delay:-0.5s;
-webkit-animation-delay:-0.5s; /* Safari 和 Chrome */
}

.arrows path.a3 {
animation-delay:0s;
-webkit-animation-delay:0s; /* Safari 和 Chrome */
}
</style>
