<template>
<div>
   <v-card class="mt-2 mb-2">
      <v-card-title primary-title>
        <div>
          <div class="headline"><span class="textLcd">{{titre}}</span>
            </div>
        </div>
      </v-card-title>
      <v-card-text class="text-md-center">
        <span class="valeurLcd" :style="lcdStyle">
          {{valeur}}
        </span>
        
      </v-card-text>  
    </v-card>
</div>
</template>


<script>
export default {
  props: {
    titre: {
      type: String,
      required: false,
      default: "Valeur"
    },

    valeur: {
      type: Number,
      required: false,
      default: 0
    },

    couleur: {
      type: String,
      required: false,
      default: "#0D47A1"
    }
  },

  computed: {
    lcdStyle() {
      return {
        color: `${this.couleur}`
      };
    }
  },

  data() {
    return {};
  }
};
</script>



<style scoped>
@font-face {
  font-family: "digital-7mono";
  src: url("digital-7_mono-webfont.eot");
  src: url("digital-7_mono-webfont.eot?#iefix") format("embedded-opentype"),
    url("digital-7_mono-webfont.woff2") format("woff2"),
    url("digital-7_mono-webfont.woff") format("woff"),
    url("digital-7_mono-webfont.ttf") format("truetype"),
    url("digital-7_mono-webfont.svg#digital-7mono") format("svg");
  font-weight: normal;
  font-style: normal;
}

.textLcd {
  color: rgba(0, 0, 0, 0.45);
  text-shadow: 2px 2px 3px #555;
}

.valeurLcd {
  font-family: "digital-7mono";
  font-size: 6em;
  text-align: center;
  box-shadow: 0 14px 20px rgba(0, 0, 50, 0.5), 0 10px 20px rgba(0, 0, 0, 0.22);
}
</style>

