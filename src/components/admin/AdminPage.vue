<template>
  <v-app>
    <admin-navbar/>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
        justify-center
        align-center
        >
        <v-flex text-xs-center>
          <v-tooltip left>
            <v-btn icon large :href="source" target="_blank" slot="activator">
              <v-icon large>code</v-icon>
            </v-btn>
            <span>Source</span>
          </v-tooltip>
          <v-tooltip right>
            <v-btn icon large href="https://codepen.io/johnjleider/pen/rJdVMq" target="_blank" slot="activator">
              <v-icon large>mdi-codepen</v-icon>
            </v-btn>
            <span>Codepen</span>
          </v-tooltip>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
  <v-footer color="indigo" app>
    <span class="white--text">&copy; 2017</span>
  </v-footer>
  </v-app>
</template>

<script>
import AdminNavbar from './AdminNavbar'

export default {
  name: 'AdminPage',
  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  },
  components: {
    'admin-navbar': AdminNavbar,
  },
}
</script>
