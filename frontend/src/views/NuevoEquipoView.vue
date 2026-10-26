<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import EquipoFormulario from '../components/EquipoFormulario.vue'
import { crearEquipo } from '../services/equiposService'
 
const router = useRouter()
const error = ref('')
const guardando = ref(false)
const mensaje = ref('')
 
async function guardar(datos) {
  if (guardando.value) return
  guardando.value = true
  error.value = ''
  mensaje.value = ''
  try {
    await crearEquipo(datos)
    mensaje.value = 'Equipo registrado correctamente.'
  } catch (e) {
    error.value = e.message
  } finally {
    guardando.value = false
  }
}
</script>
 
<template>
  <section>
    <h1>Nuevo equipo</h1>
    <p v-if="error" class="error" role="alert">{{ error }}</p>
    <template v-if="mensaje">
      <p class="correcto" role="status">{{ mensaje }}</p>
      <button type="button" @click="router.push('/equipos')">
        Ver equipos registrados
      </button>
      <button type="button" class="secundario" @click="mensaje = ''">
        Registrar otro equipo
      </button>
    </template>
    <EquipoFormulario v-else :guardando="guardando" @guardar="guardar" />
    <p><RouterLink to="/equipos">Volver al listado</RouterLink></p>
  </section>
</template>
