<template>
<v-container>

  <v-layout row justify-center wrap >

    <v-flex xs12 sm12  md5 >
      <v-card>
        <v-card-media
          :src="imagekapp"
          height="400px"
          contain
        ></v-card-media>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Modèle de Kapp</h3>
            <div>Ce schéma modélise le transformateur monophasé en régime non saturé.</div>
          </div>
        </v-card-title>
      </v-card>

    </v-flex>

    <v-flex xs12 sm12 md4 offset-md2>
      <v-carousel hide-controls hide-delimiters interval="2000">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-flex>

  </v-layout>
</v-container>

</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/assets/img_transfo_a.png")
        },
        {
          src: require("@/assets/img_transfo_b.png")
        },
        {
          src: require("@/assets/wiki_transfo_1.png")
        },
        {
          src: require("@/assets/wiki_transfo_2.png")
        },
        {
          src: require("@/assets/wiki_transfo_3.png")
        },
        {
          src: require("@/assets/wiki_transfo_4.png")
        },
        {
          src: require("@/assets/wiki_transfo_5.png")
        },
      ],

      imagekapp:require("@/assets/kapp.svg")
    }
  }
}
</script>
