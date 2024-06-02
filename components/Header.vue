<script setup>




function logout(){
localStorage.removeItem('token')
navigateTo('/login')
}

</script>

<template>
  <v-layout>
    <v-main style="height: 70px; background-color: white">
      <header
        class="d-flex justify-between  align-center bg-theme-lighten-2 px-4"
      >
        <NuxtLink
          href="/"
          class="text-theme fw-bold fz-12 d-flex align-center home-link"
        >
          <Icon name="fluent:ios-arrow-24-filled"/>
         
        </NuxtLink>

        <NuxtLink>
          <v-btn class="button">Crystal Tech lab</v-btn>
        </NuxtLink>
       
      <div class="d-flex" @click="logout()">
          <NuxtLink class="d-flex align-center">
          <v-avatar color="surface-variant">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPv1sFVgD3IEVbxEdiQ8O4mRGCDfyZND6aBA&s" alt="" width="50">
          </v-avatar>
        </NuxtLink>
        <p class="mr-5 ml-3 mt-3">Keily</p>
      
      </div>
      </header>
    </v-main>

  </v-layout>
</template>

<style scoped>
header {
  height: 70px;
}

.logo {
  width: auto;
  height: 42px;
}
.button{
  border-radius: 50px;
  color: red;
  font-weight: bold;
}

.logo-title{
  color: white;
  text-decoration: none !important;
}

.select{
  max-width: 200px;
}
.home-link:hover {
  text-decoration: none !important;
  /* background-color: #216f8c; */
  color: #216f8c;
  border-color: transparent;
}
</style>
