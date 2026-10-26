<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import EquipoFormulario from '../components/EquipoFormulario.vue'
import {
  obtenerEquipo, actualizarEquipo,
} from '../services/equiposService'
 
const route = useRoute()
const equipo = ref(null)
const cargando = ref(true)
const editando = ref(false)
const guardando = ref(false)
const error = ref('')
const mensaje = ref('')
 
async function cargar() {
  cargando.value = true
  equipo.value = null
  editando.value = false
  error.value = ''
  mensaje.value = ''
  try {
    equipo.value = await obtenerEquipo(route.params.id)
  } catch (e) {
    error.value = e.message
  } finally {
    cargando.value = false
  }
}
 
function editar() {
  error.value = ''
  mensaje.value = ''
  editando.value = true
}
 
async function guardar(datos) {
  if (guardando.value) return
  guardando.value = true
  error.value = ''
  mensaje.value = ''
  try {
    equipo.value = await actualizarEquipo(route.params.id, datos)
    editando.value = false
    mensaje.value = 'Equipo actualizado correctamente.'
  } catch (e) {
    error.value = e.message
  } finally {
    guardando.value = false
  }
}
 
watch(() => route.params.id, cargar, { immediate: true })
</script>
 
<template>
  <section>
    <p v-if="cargando">Cargando equipo...</p>
    <p v-if="error" class="error" role="alert">{{ error }}</p>
    <p v-if="mensaje" class="correcto" role="status">{{ mensaje }}</p>
    <template v-if="equipo && !cargando">
      <template v-if="editando">
        <h1>Editar equipo</h1>
        <EquipoFormulario :inicial="equipo" :guardando="guardando"
          @guardar="guardar" />
        <button type="button" class="secundario"
          :disabled="guardando" @click="editando = false">
          Cancelar edición
        </button>
      </template>
      <article class="tarjeta" v-else>
        <h1>{{ equipo.nombre }}</h1>
        <dl>
          <dt>ID</dt><dd>{{ equipo.id }}</dd>
          <dt>Código</dt><dd>{{ equipo.codigoInventario }}</dd>
          <dt>Tipo</dt><dd>{{ equipo.tipo }}</dd>
          <dt>Marca</dt><dd>{{ equipo.marca }}</dd>
          <dt>Modelo</dt><dd>{{ equipo.modelo }}</dd>
          <dt>Ubicación</dt><dd>{{ equipo.ubicacion }}</dd>
          <dt>Estado</dt><dd>{{ equipo.estado }}</dd>
          <dt>Fecha de adquisición</dt><dd>{{ equipo.fechaAdquisicion }}</dd>
          <dt>Observaciones</dt>
          <dd>{{ equipo.observaciones || 'Sin observaciones' }}</dd>
        </dl>
        <button type="button" @click="editar">Editar equipo</button>
      </article>
    </template>
    <p><RouterLink to="/equipos">Volver al listado</RouterLink></p>
  </section>
</template>
