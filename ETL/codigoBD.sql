CREATE TABLE flota(
	nombre_flota text,
	PRIMARY KEY(nombre_flota)
);

CREATE TABLE camion(
	flota text,
	id_camion text,
	PRIMARY KEY(flota, id_camion),
	FOREIGN KEY(flota) REFERENCES flota(nombre_flota)
);

CREATE TABLE rajo(
	nombre_rajo text,
	PRIMARY KEY(nombre_rajo)
);

CREATE TABLE fase(
	rajo text,
	id_fase text,
	estado boolean,
	PRIMARY KEY(rajo, id_fase),
	FOREIGN KEY(rajo) REFERENCES rajo(nombre_rajo)
);

CREATE TABLE extraccion(
	fecha date,
	flota text,
	camion text,
	material text,
	origen text,
	destino text,
	rajo text,
	fase text,
	tonelaje float,
	ciclos integer,
	PRIMARY KEY(fecha, rajo, fase, flota, camion, origen, destino, material),
	FOREIGN KEY(flota, camion) REFERENCES camion(flota, id_camion),
	FOREIGN KEY(rajo, fase) REFERENCES fase(rajo, id_fase)
);

create table factor_carga(
	fecha_inicio date,
	fecha_termino date,
	rajo text,
	tonelaje float,
	PRIMARY KEY(fecha_inicio, fecha_termino, rajo),
	FOREIGN KEY(rajo) REFERENCES rajo(nombre_rajo)
);

CREATE TABLE reporte_diario(
	fecha date,
	rajo text,
	fase text,
	extraccion_mineral float,
	extraccion_lastre float,
	total_extraccion float,
	remanejo float,
	movimiento_total float,
	chancado float,
	PRIMARY KEY(fecha, rajo, fase),
	FOREIGN KEY(rajo, fase) REFERENCES fase(rajo, id_fase)
);

CREATE TABLE datos_plan(
	fecha date,
	rajo text,
	extraccion_mineral float,
	extraccion_oxidos_mixtos float,
	extraccion_lastre float,
	total_extraccion float,
	remanejo float,
	movimiento_total float,
	chancado float,
	PRIMARY KEY(fecha, rajo),
	FOREIGN KEY(rajo) REFERENCES rajo(nombre_rajo)
);

CREATE TABLE users(
	correo text,
	password text,
	admin boolean,
	PRIMARY KEY(correo)
);