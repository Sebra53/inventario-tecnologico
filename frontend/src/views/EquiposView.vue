<script setup>
import { computed, onMounted, ref } from 'vue'
import {
  obtenerEquipos, eliminarEquipo,
} from '../services/equiposService'
 
const equipos = ref([])
const cargando = ref(true)
const error = ref('')
const mensaje = ref('')
const busqueda = ref('')
const borrando = ref(null)
 
const equiposFiltrados = computed(() => {
  const texto = busqueda.value.trim().toLowerCase()
  return equipos.value.filter(equipo => [
    equipo.nombre, equipo.codigoInventario, equipo.tipo,
    equipo.ubicacion, equipo.estado,
  ].some(campo => String(campo).toLowerCase().includes(texto)))
})
 
async function cargar() {
  cargando.value = true
  error.value = ''
  try {
    equipos.value = await obtenerEquipos()
  } catch (e) {
    error.value = e.message
  } finally {
    cargando.value = false
  }
}
 
async function borrar(equipo) {
  if (borrando.value !== null) return
  if (!confirm(`¿Eliminar el equipo ${equipo.codigoInventario}?`)) return
  borrando.value = equipo.id
  error.value = ''
  mensaje.value = ''
  try {
    await eliminarEquipo(equipo.id)
    mensaje.value = 'Equipo eliminado correctamente.'
    await cargar()
  } catch (e) {
    error.value = e.message
  } finally {
    borrando.value = null
  }
}
 
onMounted(cargar)
</script>
 
<template>
  <section>
    <h1>Equipos registrados</h1>
    <div class="herramientas">
      <label for="busqueda">Buscar equipo</label>
      <input id="busqueda" v-model="busqueda"
        placeholder="Nombre, código, tipo, ubicación o estado" />
      <button type="button" @click="cargar" :disabled="cargando">
        Recargar
      </button>
    </div>
    <p v-if="mensaje" class="correcto" role="status">{{ mensaje }}</p>
    <p v-if="error" class="error" role="alert">{{ error }}</p>
    <p v-if="cargando">Cargando equipos...</p>
    <template v-else-if="!error">
      <p>Total: {{ equipos.length }} · Mostrados: {{ equiposFiltrados.length }}</p>
      <div class="equipos-grid" v-if="equiposFiltrados.length">
        <article v-for="equipo in equiposFiltrados"
          :key="equipo.id" class="tarjeta">
          <span class="estado">{{ equipo.estado }}</span>
          <h2>{{ equipo.nombre }}</h2>
          <p>{{ equipo.codigoInventario }} · {{ equipo.tipo }}</p>
          <p>{{ equipo.marca }} · {{ equipo.modelo }}</p>
          <p>{{ equipo.ubicacion }}</p>
          <div class="acciones">
            <RouterLink :to="`/equipos/${equipo.id}`">
              Ver detalle y editar
            </RouterLink>
            <button type="button" class="peligro"
              :disabled="borrando !== null" @click="borrar(equipo)">
              {{ borrando === equipo.id ? 'Eliminando...' : 'Eliminar' }}
            </button>
          </div>
        </article>
      </div>
      <p v-else>No hay equipos que coincidan con la búsqueda.</p>
    </template>
  </section>
</template>
