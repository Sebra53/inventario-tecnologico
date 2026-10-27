USE inventario_tecnologico;

INSERT INTO equipos (
  codigoInventario, nombre, tipo, marca, modelo,
  ubicacion, estado, fechaAdquisicion, observaciones
) VALUES
('EQ-001', 'Notebook de laboratorio', 'Notebook', 'Lenovo',
 'ThinkPad E14', 'Laboratorio 1', 'Disponible', '2025-03-10',
 'Equipo destinado a prácticas de programación.'),
('EQ-002', 'PC de biblioteca', 'PC', 'Dell',
 'OptiPlex 7010', 'Biblioteca', 'En uso', '2024-08-15',
 'Equipo de consulta para estudiantes.'),
('EQ-003', 'Monitor de laboratorio', 'Monitor', 'Samsung',
 'T350', 'Laboratorio 2', 'Disponible', '2025-04-20',
 'Monitor de 24 pulgadas.'),
('EQ-004', 'Proyector de sala', 'Proyector', 'Epson',
 'PowerLite X49', 'Sala 202', 'Mantención', '2023-05-12',
 'Pendiente de limpieza y revisión de lámpara.'),
('EQ-005', 'Notebook de respaldo', 'Notebook', 'HP',
 'ProBook 440', 'Bodega de informática', 'Baja', '2021-09-08',
 'Retirado del servicio por daño de placa.');


USE inventario_tecnologico;
SELECT id, codigoInventario, nombre, estado FROM equipos ORDER BY id;
SELECT COUNT(*) AS total_equipos FROM equipos;
