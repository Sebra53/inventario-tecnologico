<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="encabezado">
    <RouterLink class="marca" to="/equipos">
      Inventario tecnológico
    </RouterLink>
  </header>

  <nav class="navbar" aria-label="Navegación principal">
    <RouterLink to="/equipos">Equipos</RouterLink>
    <RouterLink to="/equipos/nuevo">Nuevo equipo</RouterLink>
  </nav>

  <main class="pagina">
    <RouterView />
  </main>

  <footer>
    Inventario de equipamiento tecnológico · IPVG
  </footer>
</template>