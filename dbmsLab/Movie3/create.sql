create table actor(
    actorId int(10) primary key,
    actorName varchar(10),
    gender varchar(5)
);
create table director(
    directorId int(10) primary key,
    directorName varchar(10),
    phone int(10)
);
create table movies(
    movieId int(10) PRIMARY key,
    movieTile varchar(10),
    movieYear int(5),
    movieLang varchar(10),
    directorId int(10) REFERENCES director.directorId
);
CREATE TABLE movieCast(
    actorId int(10) REFERENCES actor.actorId,
    movieId int(10) REFERENCES movies.movieId,
    role varchar(5)
);
create TABLE rating(
    movieId int(10) REFERENCES movies.movieId,
    stars int(5)
);