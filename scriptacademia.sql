insert into sa_conceptos(nombre) values ("Cuota"),("Vestuario"),("Derecho a examen"),("Entrada"),("Matricula");

INSERT INTO sa_monto_conceptos
(monto, id_concepto)
VALUES(200000, 1),(220000, 1),(250000, 1),(270000, 1),(280000, 1),(300000, 1),(330000, 1),(150000, 3),(65000, 3);

insert into sa_cursos(nombre,cuota,examen) values ("Pre-Ballet",1,8),("Preparatorio",2,8),("Primero",3,9),("Segundo",3,9),("Tercero",4,9),("Cuarto",4,9),("Quinto",5,9),("Sexto",6,9),("Séptimo",6,9),("Octavo",7,9),("Noveno",7,9),("Décimo",7,9)
,("Decimoprimero",7,9),("Decimosegundo",7,9);