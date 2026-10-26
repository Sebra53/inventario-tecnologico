const API = 'http://localhost:3000/equipos'
 
async function leerRespuesta(respuesta) {
  const datos = await respuesta.json().catch(() => null)
  if (!respuesta.ok) {
    const mensaje = Array.isArray(datos?.message)
      ? datos.message.join(', ')
      : datos?.message
    throw new Error(mensaje || 'No fue posible realizar la operación.')
  }
  return datos
}
 
async function solicitar(url, opciones = {}) {
  let respuesta
  try {
    respuesta = await fetch(url, opciones)
  } catch {
    throw new Error(
      'No fue posible conectar con la API. Revise que NestJS esté activo.'
    )
  }
  return leerRespuesta(respuesta)
}
 
export function obtenerEquipos() {
  return solicitar(API)
}
 
export function obtenerEquipo(id) {
  return solicitar(`${API}/${id}`)
}
 
export function crearEquipo(datos) {
  return solicitar(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  })
}
 
export function actualizarEquipo(id, datos) {
  return solicitar(`${API}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  })
}
 
export function eliminarEquipo(id) {
  return solicitar(`${API}/${id}`, { method: 'DELETE' })
}
