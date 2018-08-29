<template>
  <v-container fluid>
    <v-layout align-center justify-center column fill-height>
       <h1> <span class="titre">Saisir le modèle de Kapp </span>   </h1> 
    </v-layout>


    <v-layout row align-center justify-center fill-height>
            
        <v-flex xs12 md6>

          <v-card>
            <v-card-text>
              <v-container>
               <!--   -->
                 <v-form ref="form" v-model="valid" lazy-validation >
                  <v-text-field
                  label="Rapport m"
                  v-model='m'
                  id='rapport_m'
                  :rules="positifRule"
                  required
                  ></v-text-field>

                  <v-text-field
                  label="Résistance Rp"
                  v-model="rp"
                  id='resistance_rp'
                  :rules="positifRule"
                  required
                  ></v-text-field>

                  <v-text-field
                  label="Inductance Lp"
                  v-model="lp"
                  id='inductance_lp'
                  :rules="positifRule"
                  required
                  ></v-text-field>

                  <v-text-field
                  label="Résistance Rs"
                  v-model="rs"
                  id='resistance_rs'
                  :rules="positifRule"
                  required
                  ></v-text-field>

                  <v-text-field
                  label="Réactance Xs"
                  v-model="xs"
                  id='reactance_xs'
                  :rules="positifRule"
                  required
                  ></v-text-field>

                  <v-btn :disabled="!valid" @click.prevent="onSubmit" color="info" >
                  Enregistrer
                  </v-btn>
                 </v-form>
                <!--  -->  
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>  
    </v-layout>
</v-container>
</template>


<script>
export default {
	name: "SaisieModele",

	mounted: function() {
		this.load()
	},
	//

	methods: {
		onSubmit: function() {
			this.$store.dispatch("setModeleKapp", {
				m: this.m,
				rp: this.rp,
				lp: this.lp,
				rs: this.rs,
				xs: this.xs
			})
			this.$router.push("/mesure")
		},
		//
		load: function() {
			const val = this.$store.getters.getModeleKapp
			this.m = val.m
			this.rp = val.rp
			this.lp = val.lp
			this.rs = val.rs
			this.xs = val.xs
		}
	},
	//
	data: function() {
		return {
			valid: false,
			m: "",
			rp: "",
			lp: "",
			rs: "",
			xs: "",

			titre: "Saisir le modèle de Kapp",

			positifRule: [
				val => {
					if (isNaN(val)) {
						return "Cette saisie n'est pas un nombre !"
					} else if (val <= 0) {
						return "Ce nombre doit être positif !"
					} else return true
				}
			]
		}
	}
	//
}
</script>

<style scoped>
.titre {
	text-shadow: 3px 3px 5px #555;
	padding: 50px;
}
</style>
