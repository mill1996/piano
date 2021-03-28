// Array keyboard key => piano key
// this Array has default key=>value
var key = new Array();

// update keyboard key => piano key
function updateKey(keyboardKey,pianoKey){
    //update Array key
    //write to file system
}

function getPianoKey(keyboardKey){
    //return pianoKey
}

function getKeyboardKey(pianoKey){
    //return pianoKey
}

function setConfig(){
    //write Array key to file system
}

function readConfig(){
    //read key.conf
        //if it exist, load it into Array key
        //if isn't exist, => setconfig()
}

function keyDown(keyboardKey){
    // get pianoKey and send to music-engine
}

function keyUp(keyboardKey){
    // get pianoKey and send to music-engine
}