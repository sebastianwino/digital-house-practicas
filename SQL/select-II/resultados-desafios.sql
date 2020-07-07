-- EJERCITACIÓN SQL
-- Clase 2 SQL

-- -> Desafío 1

-- 1) Gunn
select * from actors;

-- 2) Parque Jurasico
select title, awards from movies;

-- 3) 320
select length from movies where title = "titanic";

-- 4) 4
select genre_id from series where title = "Person of Interest";

-- 5) 46
select season_id from episodes where number = 2;


-- -> Desafío 2

-- 1) rey
select title, release_date from movies
where release_date between "1999-10-01 00:00:00" and "2004-12-01 00:00:00";

-- 2) Hotel
select * from movies where title like "%a";

-- 3) 3
select count(first_name) from actors where first_name = "jim";

-- 4) 13
select sum(awards) from movies where title like "%guerra%galaxias%";

-- 5) de
select actors.first_name, actors.last_name, movies.title from actors
inner join movies on movies.id = actors.favorite_movie_id
where actors.first_name = "Leonardo" and actors.last_name like "Di%";


-- -> Desafío 3

-- 1) Titanic
select * from actors
inner join movies on movies.id = actors.favorite_movie_id
where actors.rating = 2.3
order by movies.id;

-- 2) Fantasia
select * from series
inner join genres on series.genre_id = genres.id;

-- 3) Intensamente
select * from movies
inner join genres on movies.genre_id = genres.id
where genres.name = "Animacion";

-- 4) Dern
select * from actor_movie
inner join actors on actor_movie.actor_id = actors.id
inner join movies on actor_movie.movie_id = movies.id
where movies.title = "Parque Jurásico";

-- 5) Mi
select * from movies
inner join genres on movies.genre_id = genres.id
where movies.rating between 1 and 4;


-- -> Desafío 4

-- 1) Infantiles
select genre_id, avg(length), genres.name from movies
inner join genres on movies.genre_id = genres.id
group by genre_id
order by avg(length);

-- 2) Emma
select count(actors.id), actors.first_name, actors.last_name from actor_movie
inner join actors on actor_movie.actor_id = actors.id
inner join movies on actor_movie.movie_id = movies.id
group by actors.id
order by count(actors.id) desc;

-- 3) 4
select genres.name, count(genres.name) from genres
inner join movies on movies.genre_id = genres.id
group by genres.name;