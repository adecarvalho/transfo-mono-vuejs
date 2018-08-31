<template>
<div>
  <v-card>
    <v-subheader class="ma-4 info--text">
      {{titre}}
    </v-subheader>
      <v-flex xs12>
          <v-slider
            class="ma-3"
            :color="couleur"
            v-model="reglage"
            thumb-label="always"
            thumb-size="35"
            :label="label"
            prepend-icon='timelapse'
            :min="valeurMin"
            :max="valeurMax"
            @change="onValueChange"
            >
          </v-slider>
      </v-flex>
  </v-card>
</div>
</template>

<script>
export default {
	props: {
		titre: {
			type: String,
			required: false,
			default: "Réglage"
		},
		label: {
			type: String,
			required: false,
			default: "val"
		},
		valeurMin: {
			type: String,
			required: false,
			default: "0"
		},
		valeurMax: {
			type: String,
			required: false,
			default: "100"
		},
		valeurInitiale: {
			type: String,
			required: false,
			default: "0"
		},
		couleur: {
			type: String,
			required: false,
			default: "light-blue darken-4"
		}
	},

	mounted() {
		this.load()
	},

	methods: {
		load() {
			this.reglage = this.valeurInitiale
		},

		onValueChange(val) {
			this.$emit("onChange", val)
		}
	},

	data() {
		return {
			reglage: 0
		}
	}
}
</script>


<style scoped>
</style>
