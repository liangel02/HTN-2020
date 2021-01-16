CREATE DATABASE activities;
USE activities;

CREATE TABLE GoOut (
	IdeaNumber int NOT NULL AUTO_INCREMENT,
    StayActive varchar(255),
    GetCreative varchar(255),
    Foodie varchar(255),
    GetCosy varchar(255),
    GameNight varchar(255),
    SupportLocal varchar(255),
    WildCard varchar(255),
    PRIMARY KEY (IdeaNumber)
);

CREATE TABLE StayHome (
	IdeaNumber int NOT NULL AUTO_INCREMENT,
    StayActive varchar(255),
    GetCreative varchar(255),
    Foodie varchar(255),
    GetCosy varchar(255),
    GameNight varchar(255),
    WildCard varchar(255),
    PRIMARY KEY (IdeaNumber)
);

INSERT INTO GoOut (StayActive, GetCreative, Foodie, GetCosy, GameNight, SupportLocal, WildCard)
VALUES ('Hiking', 'Pottery Painting', 'Cooking Class', 'Go to a Hot Spring', 'Escape Room', 'Museum', 'Axe Throwing');

INSERT INTO StayHome (StayActive, GetCreative, Foodie, GetCosy, GameNight, WildCard)
VALUES ('Yoga', 'Painting and Colouring', 'Baking', 'Watch a Movie/TV Show', 'Play Board Games', 'Make a mini garden');