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
    caducidad date not null,
    stock tinyint not null
);

create table venta(
	folio INT primary key,
    fecha_venta datetime not null,
    total_venta decimal(7,2) not null,
    clienteID int not null,
    foreign key (clienteID) references cliente(clienteID)
);

create table ventaxproducto(
	productoID varchar(15) not null,
    folio int not null,
    cantidad tinyint not null,
    precio_unitario decimal(7,2) not null,
    precio_venta decimal(7,2) not null,
    foreign key (productoID) references producto(productoID),
    foreign key (folio) references venta(folio)
);

create table inventario(
	productoID varchar(15) not null,
    agno smallint not null,
    mes tinyint not null,
    primary key (productoID, agno, mes),
    inventario_inicial decimal(10,2) not null,
    compra decimal(7,2) not null,
    venta decimal(7,2) not null,
    devolucion decimal(7,2),
    merma decimal(7,2) not null,
    salida decimal(7,2) not null,
    inventario_final decimal(7,2) not null,
    foreign key (productoID) references producto(productoID)
);

	