<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />

  <main class="pagina">
    <RouterView />
  </main>

  <footer>
    Inventario de equipamiento tecnológico · IPVG
  </footer>
</template>