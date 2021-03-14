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
            Bavaria ipsum dolor sit amet hogg di hera owe a bissal wos gehd ollaweil, Graudwiggal in da greana Au! Hoggd heid gfoids ma sagrisch guad Trachtnhuat Haberertanz Semmlkneedl. Des is a gmahde Wiesn ded Haferl du dadst ma scho daugn i sog ja nix, i red ja bloß, pfiad de etza hogg ma uns zamm Guglhupf back mas!
        </p>
        <b-button block variant="dark">
            <img src="../assets/play-outline.svg" class="mr-2" height="16"/>
            Online spielen
        </b-button>
        <b-button block variant="dark">
            <img src="../assets/desktop-outline.svg" class="mr-2" height="16"/>
            Für Windows herunterladen
            </b-button>
        <b-button block variant="dark">
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
