<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in items" :key='item.title' :to="item.link">

          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>

      </v-list>
    </v-navigation-drawer>



    <v-toolbar dark class="primary">

      <v-toolbar-side-icon
      @click="sideNav =!sideNav" class="hidden-sm-and-up">
       </v-toolbar-side-icon> 
        <v-toolbar-title>
          <router-link to="/" 
          tag="span"
          style="cursor:pointer">
          Tranformateur
          </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class='hidden-xs-only' v-for="item in items" :key='item.title'>
          <v-btn 
            dark 
            flat
            :to="item.link">
            <v-icon left dark>{{ item.icon}}</v-icon>
            {{ item.title}}
          </v-btn>
        </v-toolbar-items>
    </v-toolbar>
  <main>
    <router-view></router-view>
  </main>

  <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "App",

  components: {
    Footer
  },
  //
  data() {
    return {
      sideNav: false,

      items: [
        {
          title: "Modèle",
          icon: "list_alt",
          link: "/modele"
        },
        {
          title: "Mesures",
          icon: "network_check",
          link: "/mesure"
        }
      ]
    };
  },
  //
  methods: {}
  //
};
</script>
