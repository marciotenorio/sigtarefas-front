<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Sigtarefas Logo"
          class="shrink mr-2"
          contain
          src="https://freeiconshop.com/wp-content/uploads/edd/task-done-flat.png"
          transition="scale-transition"
          width="60"
        />
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
