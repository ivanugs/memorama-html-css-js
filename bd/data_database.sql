use yayacmetics;

INSERT INTO cliente (clienteID, nombre, celular, direccion) VALUES
(1, 'Juan Pérez', '555-123-4567', 'Calle 123, Colonia A'),
(2, 'Ana Gómez', '555-987-6543', 'Avenida XYZ, Colonia B'),
(3, 'Pedro Rodríguez', '555-456-7890', 'Calle ABC, Colonia C'),
(4, 'María López', '555-321-6789', 'Avenida 456, Colonia A'),
(5, 'Carlos Sánchez', '555-555-5555', 'Calle 789, Colonia B'),
(6, 'Luisa Martínez', '555-222-3333', 'Avenida ABC, Colonia C'),
(7, 'Miguel González', '555-777-8888', 'Calle 456, Colonia A'),
(8, 'Sofía Pérez', '555-444-4444', 'Avenida 123, Colonia B'),
(9, 'Andrés Ramírez', '555-666-6666', 'Calle XYZ, Colonia C'),
(10, 'Laura Fernández', '555-999-9999', 'Avenida 789, Colonia A');

INSERT INTO producto (productoID, descripcion, categoria, caducidad) VALUES
('7301984567321', 'Producto 1', 'C1', '2023-12-31'),
('7423678109234', 'Producto 2', 'C2', '2023-11-30'),
('7512098345678', 'Producto 3', 'C3', '2024-02-28'),
('7245631987023', 'Producto 4', 'C2', '2024-01-15'),
('7983456172098', 'Producto 5', 'C1', '2023-12-20'),
('7564321890342', 'Producto 6', 'C2', '2023-10-10'),
('7812093465723', 'Producto 7', 'C3', '2024-03-05'),
('7756321980476', 'Producto 8', 'C2', '2024-01-31'),
('7421568937021', 'Producto 9', 'C3', '2023-11-10'),
('7678901234567', 'Producto 10', 'C1', '2024-02-15');

INSERT INTO venta (folio, fecha_venta, total_venta, clienteID) VALUES
(201, '2023-08-25 10:15:00', 100.50, 1),
(202, '2023-08-24 14:30:00', 75.25, 2),
(203, '2023-08-23 16:45:00', 200.75, 3),
(204, '2023-08-22 09:30:00', 50.00, 2),
(205, '2023-08-21 11:20:00', 120.30, 4),
(206, '2023-08-20 15:10:00', 95.80, 4),
(207, '2023-08-19 18:00:00', 60.75, 7),
(208, '2023-08-18 12:45:00', 175.90, 8),
(209, '2023-08-17 14:55:00', 30.25, 7),
(2010, '2023-08-16 17:20:00', 85.40, 9);

INSERT INTO ventaxproducto (productoID, folio, precio_unitario, cantidad, precio_venta) VALUES
('P001', 201, 10.25, 5, 51.25),
('P002', 201, 8.50, 3, 25.50),
('P003', 202, 15.75, 2, 31.50),
('P004', 202, 12.00, 4, 48.00),
('P005', 203, 9.80, 6, 58.80),
('P006', 203, 7.25, 2, 14.50),
('P007', 204, 18.50, 3, 55.50),
('P008', 204, 11.75, 5, 58.75),
('P009', 205, 14.20, 4, 56.80),
('P010', 205, 6.75, 7, 47.25);

INSERT INTO inventario (inventarioID, inventario_inicial, productoID, compra, venta, merma, robo, salida, inventario_final) VALUES
(1001, 1000.00, 'P001', 150.00, 75.00, 10.00, 5.00, 20.00, 1040.00),
(1002, 800.00, 'P002', 120.00, 60.00, 8.00, 4.00, 12.00, 916.00),
(1003, 750.00, 'P003', 80.00, 40.00, 5.00, 2.00, 10.00, 773.00),
(1004, 600.00, 'P004', 100.00, 50.00, 6.00, 3.00, 8.00, 635.00),
(1005, 1200.00, 'P005', 160.00, 80.00, 12.00, 6.00, 24.00, 1338.00),
(1006, 900.00, 'P006', 130.00, 65.00, 9.00, 4.00, 15.00, 977.00),
(1007, 700.00, 'P007', 95.00, 47.50, 7.00, 3.50, 10.00, 731.00),
(1008, 850.00, 'P008', 140.00, 70.00, 10.00, 5.00, 20.00, 925.00),
(1009, 1100.00, 'P009', 180.00, 90.00, 15.00, 7.50, 30.00, 1217.50),
(10010, 950.00, 'P010', 135.00, 67.50, 9.00, 4.50, 18.00, 1041.00);