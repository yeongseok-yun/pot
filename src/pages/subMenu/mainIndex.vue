<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar  rounded>
      <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
    v-model="drawer"
    >
      <v-list>
        
      <router-link class="navbar-brand" :to="{name : 'Info'}">
          <v-list :items="items"></v-list>
      </router-link>
      </v-list>
      
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      
      <router-view/>


    </v-main>
  </v-layout>
</template>

<script>
import {ref} from 'vue';
export default {
  setup(){
    const drawer = ref(true);
    const items = ref(['메뉴1','메뉴2','메뉴3','메뉴4'])

    return {
      drawer,
      items
    }
  }
};
</script>