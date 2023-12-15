let canvas = document.getElementById("canvas");
let g = canvas.getContext("2d"); 

const gamestate_start=0;
const gamestate_ingame=1;
const gamestate_gameover=2;

const ingamgestate_start=0;
const ingamgestate_roll=1;
const ingamgestate_end=0;

let boardPositionSize= 50;
let pawnPosition = [];
let boardPosition=[];
let playerAmoutButtons = [];