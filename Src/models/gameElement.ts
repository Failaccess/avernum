export interface gameElement {
    description : string;
    id : string;
    previous : gameElement | null;
    choice1 : gameElement | null;
    choice2 : gameElement | null;
    choice3 : gameElement | null;
    choice4 : gameElement | null;
    choice5 : gameElement | null;
}

export interface Game {
    elementList : gameElement[];
}