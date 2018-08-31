<template>
<v-container fluid>
   <v-layout align-center justify-center row fill-height>
       <h1> <span class="titre">Mesures en charge</span></h1> 
    </v-layout>

<!---->
<v-layout row justify-space-around wrap>
    <v-flex sm12 md3>
      <reglage-slider 
      @onChange="onChangeU1"
      titre="Tension primaire en Veff"
      label="U1eff"
      valeurMin='0'
      valeurInitiale='0'
      valeurMax='220'
      couleur='purple darken-1'>
      </reglage-slider>
    </v-flex>

    <v-flex sm12 md3>
      <reglage-slider 
      @onChange="onChangeModule"
      titre="Module de la charge en Ohms"
      label="Charge"
      valeurInitiale='500'
      valeurMin='10'
      valeurMax='500'
      couleur='green darken-1'>
      </reglage-slider>
    </v-flex>

    <v-flex sm12 md3>
      <reglage-slider 
      @onChange="onChangePhase"
      titre="Phase de la charge en degré"
      label="Phase"
      valeurInitiale='0'
      valeurMin='-45'
      valeurMax='45'
      couleur='orange darken-1'>
      </reglage-slider>
    </v-flex>
</v-layout>
<!---->


    
<!-- <v-layout row justify-space-around wrap>
        <v-flex sm12 md3>
            <v-card>
              <v-subheader class="ma-4 info--text">Tension primaire en Veff</v-subheader>
              <v-slider
              class="ma-3"
              color="light-blue darken-4"
              v-model="u1"
              thumb-label="always"
              thumb-size="35"
              label="U1eff"
              prepend-icon='timelapse'
              max="220">
              
              </v-slider>
            </v-card>
        </v-flex>

      <v-flex sm12 md3>
            <v-card>
              <v-subheader class="ma-4 info--text">Module de la charge en &#x3a9</v-subheader>
              <v-slider 
              class="ma-3"
              color='cyan darken-4'
              v-model="module"
              thumb-label="always"
               thumb-size="35"
              label="Charge"
              prepend-icon='av_timer'
              min="10"
              max="500">
              </v-slider>
            </v-card>
      </v-flex>

      <v-flex sm12 md3>
            <v-card>
              <v-subheader class="ma-4 info--text">Phase de la charge en degré</v-subheader>
              <v-slider 
              class="ma-3"
              color="teal darken-4"
              v-model="phase"
              thumb-label="always"
               thumb-size="35"
              label="Phase"
              prepend-icon='waves'
              min="-45"
              max="45">
              </v-slider>
            </v-card>
      </v-flex>
  </v-layout> -->

<v-layout row justify-space-around wrap>
  <v-flex sm12 md3>
    <afficheur-lcd titre="U2eff(en V)" :valeur=getMesures.u2></afficheur-lcd>
  </v-flex>     

  <v-flex sm12 md3>
    <afficheur-lcd titre="I1eff(en A)" :valeur=getMesures.i1></afficheur-lcd>
  </v-flex>  

  <v-flex sm12 md3>
    <afficheur-lcd titre="I2eff(en A)" :valeur=getMesures.i2></afficheur-lcd>
  </v-flex> 
</v-layout>

<v-layout row justify-space-around wrap>
  <v-flex sm12 md3>
    <afficheur-lcd titre="P1 (en W)" :valeur=getMesures.p1></afficheur-lcd>
  </v-flex>     

  <v-flex sm12 md3>
    <afficheur-lcd titre="P2 (en W)" :valeur=getMesures.p2></afficheur-lcd>
  </v-flex>  

  <v-flex sm12 md3>
    <afficheur-lcd titre="Rendement (en %)" :valeur=getMesures.rendement></afficheur-lcd>
  </v-flex> 
</v-layout>

</v-container>
</template>

<script>
import { mapGetters } from "vuex"
import AfficheurLcd from "@/components/afficheur/AfficheurLcd"
import ReglageSlider from "@/components/reglage/ReglageSlider"

export default {
	name: "Mesure",

	components: {
		AfficheurLcd,
		ReglageSlider
	},

	data() {
		return {
			u1: 0,
			module: 500,
			phase: 0
		}
	},

	computed: {
		...mapGetters(["getMesures"])
	},

	mounted() {
		this.load()
	},

	methods: {
		onChangeU1(val) {
			this.u1 = val
			this.$store.dispatch("setNewU1", val)
			this.$store.dispatch("process")
		},
		onChangeModule(val) {
			this.module = val
			this.$store.dispatch("setNewModule", val)
			this.$store.dispatch("process")
		},
		onChangePhase(val) {
			this.phase = val
			this.$store.dispatch("setNewPhase", val)
			this.$store.dispatch("process")
		},

		load() {
			this.$store.dispatch("setMesuresReset")
		}
	}
}
</script>

<style scoped>
.titre {
	text-shadow: 3px 3px 5px #555;
}
</style>
