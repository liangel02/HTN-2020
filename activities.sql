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

INSERT INTO GoOut (StayActive, GetCreative, Foodie, GetCosy, GameNight, SupportLocal, WildCard)
VALUES ('Skating', 'Pottery Class', 'Go to a Fancy Restaurant', 'Spa Day', 'Arcade', 'Art Gallery', 'Go to a Zoo'); 

INSERT INTO GoOut (StayActive, GetCreative, Foodie, GetCosy, GameNight, SupportLocal, WildCard)
VALUES ('Dance Class', 'Painting Class', 'Wine & Cheese Tasting', "Movie Theatre", 'Fair', 'Go to a Fundraising Event', 'Hot Air Balloon Ride'); 

INSERT INTO GoOut (StayActive, GetCreative, Foodie, GetCosy, GameNight, SupportLocal, WildCard)
VALUES ('Goat Yoga', 'Make gift baskets for each other', 'Go to a Retro Restaurant', 'Drive-In Theatre', 'Laser Tag', 'Go thrifting', 'Go to a random concert');

INSERT INTO GoOut (StayActive, GetCreative, Foodie, GetCosy, GameNight, SupportLocal, WildCard)
VALUES ('Tree-top Trekking', 'Go to an improv class', 'Go to a local Cafe', 'Set up a Picnic', 'Mini Golf', 'Go to a local community event', 'Play a tourist in your hometown'); 

INSERT INTO GoOut (StayActive, GetCreative, Foodie, GetCosy, GameNight, SupportLocal, WildCard)
VALUES ('Aerial Silks', 'Go to an improv class', 'Go to a Casual Restaurant', 'Go to the beach', 'Go-Karting', 'Watch a local play/musical', 'Go antique hunting'); 

INSERT INTO GoOut (StayActive, GetCreative, Foodie, GetCosy, GameNight, SupportLocal, WildCard)
VALUES ('Bubble Soccer', 'Go to a Glass Blowing Class', 'Purchase your favourite snacks', 'Drive-In Theatre', 'Bowling', 'Explore small buisnesses nearby', 'Arrange a scavenger hunt'); 



INSERT INTO StayHome (StayActive, GetCreative, Foodie, GetCosy, GameNight, WildCard)
VALUES ('Yoga', 'Painting and Colouring', 'Baking', 'Watch a Movie/TV Show', 'Play Board Games', 'Make a mini garden');

INSERT INTO StayHome (StayActive, GetCreative, Foodie, GetCosy, GameNight, WildCard)
VALUES ('Water Balloon Fight', 'Sharpie Mug Drawing', 'Cook a Multiple Course Meal', 'Spa Day', 'Play Chess', 'DIY Science Experiment'); 

INSERT INTO StayHome (StayActive, GetCreative, Foodie, GetCosy, GameNight, WildCard)
VALUES ('Nerf Gun Fight', 'Make Shrinky Dinks', 'Make mug cakes', 'Build a fort', 'Learn Card Tricks', 'Have a Photoshoot'); 

INSERT INTO StayHome (StayActive, GetCreative, Foodie, GetCosy, GameNight, WildCard)
VALUES ('Backyard Camping', 'Learn to crochet', 'Decorate sugar cookies', 'Write love letters to each other', 'Play Card Games', 'Put together a puzzle'); 

INSERT INTO StayHome (StayActive, GetCreative, Foodie, GetCosy, GameNight, WildCard)
VALUES ('Backyard Camping', 'Make candles together', 'Invent a new recipe', 'Cuddle together', 'Play Ping Pong', 'Play Chess'); 