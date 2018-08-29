<template>
<v-container fluid>
    <v-layout align-center justify-center row fill-height>
       <h1>Modèle de Kapp</h1> 
    </v-layout>

    <v-layout row align-center justify-center fill-height>
            
        <v-flex xs12 md6>
            <v-form ref="form" v-model="valid" lazy-validation>

                <v-text-field
                label="Rapport m"
                v-model='rapport_m'
                id='rapport_m'
                :rules="positifRule"
                required
                ></v-text-field>

                <v-text-field
                label="Résiance Rp"
                v-model='resistance_rp'
                id='resistance_rp'
                :rules="positifRule"
                required
                ></v-text-field>

                <v-text-field
                label="Inductance Lp"
                v-model='inductance_lp'
                id='inductance_lp'
                :rules="positifRule"
                required
                ></v-text-field>

                <v-text-field
                label="Résistance Rs"
                v-model='resistance_rs'
                id='resistance_rs'
                :rules="positifRule"
                required
                ></v-text-field>

                <v-text-field
                label="Réactance Xs"
                v-model='reactance_xs'
                id='reactance_xs'
                :rules="positifRule"
                required
                ></v-text-field>

                <v-btn :disabled="!valid" @click="submit" color="success" >
                Enregistrer
                </v-btn>
            </v-form>
        </v-flex>  
    </v-layout>/>
</v-container>
 
</template>

<script>
import mapGetters from "vuex"

export default {
	name: "Modele",

	data() {
		return {
			valid: false,
			rapport_m: "",
			resistance_rp: "",
			inductance_lp: "",
			resistance_rs: "",
			reactance_xs: "",

			positifRule: [
				v => {
					if (v <= 0) {
						return "La valeur doit exiter et être positive !"
					} else return true
				}
			]
		}
	},

	mounted: function() {
		this.load()
	},

	methods: {
		load: function() {
			const val = this.$store.getters.loadModele
			this.rapport_m = val.m
			this.resistance_rp = val.rp
			this.inductance_lp = val.lp
			this.resistance_rs = val.rs
			this.reactance_xs = val.xs
		},

		submit: function() {
			if (this.$refs.form.validate()) {
				const kapp = {
					m: this.rapport_m,
					rp: this.resistance_rp,
					lp: this.inductance_lp,
					rs: this.resistance_rs,
					xs: this.reactance_xs
				}

				this.$store.dispatch("setKapp", kapp)
			}
		},
		clear() {
			this.$refs.form.reset()
		}
	}
}
</script>

<style scoped>
</style>
