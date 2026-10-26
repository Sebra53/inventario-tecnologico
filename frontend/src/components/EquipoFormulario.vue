<script setup>
import { ref } from 'vue'
 
const props = defineProps({
  inicial: { type: Object, default: () => ({}) },
  guardando: { type: Boolean, default: false },
})
const emit = defineEmits(['guardar'])
 
const equipo = ref({
  codigoInventario: props.inicial.codigoInventario ?? '',
  nombre: props.inicial.nombre ?? '',
  tipo: props.inicial.tipo ?? '',
  marca: props.inicial.marca ?? '',
  modelo: props.inicial.modelo ?? '',
  ubicacion: props.inicial.ubicacion ?? '',
  estado: props.inicial.estado ?? 'Disponible',
  fechaAdquisicion: props.inicial.fechaAdquisicion ?? '',
  observaciones: props.inicial.observaciones ?? '',
})
const estados = ['Disponible', 'En uso', 'Mantención', 'Baja']
 
function enviar() {
  if (!props.guardando) emit('guardar', { ...equipo.value })
}
</script>
 
<template>
  <form class="formulario" @submit.prevent="enviar">
    <p>Los campos con * son obligatorios.</p>
    <label for="codigo">Código de inventario *</label>
    <input id="codigo" v-model.trim="equipo.codigoInventario"
      minlength="3" maxlength="30" required />
 
    <label for="nombre">Nombre *</label>
    <input id="nombre" v-model.trim="equipo.nombre"
      minlength="3" maxlength="100" required />
 
    <label for="tipo">Tipo *</label>
    <input id="tipo" v-model.trim="equipo.tipo"
      maxlength="60" placeholder="Notebook, PC, Monitor..." required />
 
    <label for="marca">Marca *</label>
    <input id="marca" v-model.trim="equipo.marca"
      maxlength="60" required />
 
    <label for="modelo">Modelo *</label>
    <input id="modelo" v-model.trim="equipo.modelo"
      maxlength="60" required />
 
    <label for="ubicacion">Ubicación *</label>
    <input id="ubicacion" v-model.trim="equipo.ubicacion"
      maxlength="100" required />
 
    <label for="estado">Estado *</label>
    <select id="estado" v-model="equipo.estado" required>
      <option v-for="estado in estados" :key="estado" :value="estado">
        {{ estado }}
      </option>
    </select>
 
    <label for="fecha">Fecha de adquisición *</label>
    <input id="fecha" v-model="equipo.fechaAdquisicion"
      type="date" required />
 
    <label for="observaciones">Observaciones</label>
    <textarea id="observaciones" v-model="equipo.observaciones"
      rows="4"></textarea>
 
    <button type="submit" :disabled="guardando">
      {{ guardando ? 'Guardando...' : 'Guardar equipo' }}
    </button>
  </form>
</template>
