create database yayacmetics;

use yayacmetics;

create table cliente (
	clienteID int primary key,
    nombre varchar(45) not null,
    celular varchar(14) not null,
    direccion varchar(100) not null
);

create table producto (
	productoID varchar(15) primary key,
    descripcion varchar(100) not null,
    categoria char(2) not null,
    caducidad date not null
);

create table venta(
	ventaID INT primary key,
    fecha_venta datetime not null,
    total_venta decimal(7,2) not null,
    clienteID int not null,
    foreign key (clienteID) references cliente(clienteID)
);

create table ventaxproducto(
	productoID varchar(15) not null,
    ventaID int not null,
    precio_unitario decimal(7,2) not null,
    cantidad tinyint not null,
    precio_venta decimal(7,2) not null,
    foreign key (productoID) references producto(productoID),
    foreign key (ventaID) references venta(ventaID)
);

create table inventario(
	inventarioID int primary key,
    inventario_inicial decimal(10,2) not null,
    productoID varchar(15) not null,
    compra decimal(7,2) not null,
    venta decimal(7,2) not null,
    merma decimal(7,2) not null,
    robo decimal(7,2) not null,
    salida decimal(7,2) not null,
    inventario_final decimal(7,2) not null,
    foreign key (productoID) references producto(productoID)
);

	