import socketIOClient from "socket.io-client";
import React, { setState, useState, useEffect } from 'react';
export default function Pinball() {

console.log("Starting Pinball Controls");

// change endpoint to public IP with port forward to local servers
const ENDPOINT = "24.60.168.240:8080"
//local const ENDPOINT = "http://192.168.86.250:8080";

// Live Tesing (Hardware Available)
const socket = socketIOClient(ENDPOINT);

//Local Testing (No Hardware Available)
//const socket = { emit : ()=>{console.log("TESTING")}}

let [buttonCount, setButtonCount] = useState(0);
let [keyHistory, updateKeyHistory] = useState([]);
let keyPressedTimeStart = useState(new Date().getTime())
let keyPressedTimeEnd = useState(new Date().getTime())
let buttonDuration = useState(keyPressedTimeEnd[0] - keyPressedTimeStart[0])

function increaseButtonCount(buttonCount) {
  setButtonCount( prevCount => prevCount+1);
}

// PINBALL RELAY CONTROLS - BELOW -

function turnOnLeftFlipper(){
  console.log("Turn On Left Flipper");
//  socket.emit("turnOnLeftFlipper",1);
  socket.emit("changeLeftFlipper",1);
}

function turnOffLeftFlipper(){
  console.log("Turn Off Left Flipper");
//  socket.emit("turnOnLeftFlipper",0)
  socket.emit("changeLeftFlipper",0);
}

function turnOnRightFlipper(){
  console.log("Turn On Left Flipper");
//  socket.emit("turnOnRightFlipper",1);
  socket.emit("changeRightFlipper",1);
}

function turnOffRightFlipper(){
  console.log("Turn Off Right Flipper");
//  socket.emit("turnOnRightFlipper",0)
  socket.emit("changeRightFlipper",0);
}

function turnOnUpperRightFlipper(){
  console.log("Turn On Upper Right Flipper");
  socket.emit("changeUpperRightFlipper",1);
}

function turnOffUpperRightFlipper(){
  console.log("Turn Off Upper Right Flipper");
  socket.emit("changeUpperRightFlipper",0);
}

// SHOOT BUTTON
function turnOnShootButton(){
  console.log("Turn On Shoot Button");
  socket.emit("shootButton",1);
}

function turnOffShootButton(){
  console.log("Turn Off Shoot Button");
  socket.emit("shootButton",0)
}

// START / CREDIT BUTTON
function turnOnStartButton(){
  console.log("Turn On Start Button");
  socket.emit("startButton",1);
}

function turnOffStartButton(){
  console.log("Turn Off Start Button");
  socket.emit("startButton",0)
}

// PINBALL RELAY CONTROLS - ABOVE -


// KEYBOARD CONTROLS

const leftFlipperKey1 = useKeyPress('a');
const leftFlipperKey2 = useKeyPress('A');
const leftFlipperKey3 = useKeyPress('ArrowLeft');
const leftFlipperKey4 = useKeyPress(',');
const leftFlipperKey5 = useKeyPress('<');

const rightFlipperKey1 = useKeyPress('s');
const rightFlipperKey2 = useKeyPress('S');
const rightFlipperKey3 = useKeyPress('ArrowRight');
const rightFlipperKey4 = useKeyPress('.');
const rightFlipperKey5 = useKeyPress('>');

const upperRightFlipperKey1 = useKeyPress('d');
const upperRightFlipperKey2 = useKeyPress('D');
const upperRightFlipperKey3 = useKeyPress('ArrowDown');
const upperRightFlipperKey4 = useKeyPress('/');
const upperRightFlipperKey5 = useKeyPress('?');

const startKey1 = useKeyPress('w');
const startKey2 = useKeyPress('W');
const startKey3 = useKeyPress(' ');
const startKey4 = useKeyPress('ArrowUp');
const startKey5 = useKeyPress('N');
const startKey6 = useKeyPress('n');

const shootKey1 = useKeyPress('e');
const shootKey2 = useKeyPress('E');
const shootKey3 = useKeyPress('p');
const shootKey4 = useKeyPress('P');
const shootKey5 = useKeyPress('1');
const shootKey6 = useKeyPress('M');
const shootKey7 = useKeyPress('n');


function useKeyPress(targetKey) {

    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);
    let duplicateKeyFlag = useState(false);
    let keyHistoryLength

            // If pressed key is our target key then set to true
    function downHandler({ key }) {
                keyHistory.push(key);
                console.log("Key Pressed: ", key);
            //    console.log("Key History Length", keyHistoryLength);
                if (keyHistory[keyHistoryLength] == targetKey ){
                  duplicateKeyFlag = true;
            //       console.log("Duplicate Key ", duplicateKeyFlag);
                } else {
                  duplicateKeyFlag = false
            //      console.log("Duplicate Key ", duplicateKeyFlag);
                };

                if (key === targetKey) {
                  setKeyPressed(true);
                  keyPressedTimeStart[0] = new Date().getTime();

        if (duplicateKeyFlag === true){
      //     console.log("Duplicate Key ", duplicateKeyFlag);
            keyPressedTimeStart[0] = keyPressedTimeStart[0]
      //      console.log("Key Down Time:", keyPressedTimeStart[0])
          } else {
            keyPressedTimeStart[0] = new Date().getTime();
          }

          switch(targetKey) {
            case "a":
            case "A":
            case "ArrowLeft":
            case "<":
            case ",":
                turnOnLeftFlipper()
                increaseButtonCount()
                break;
            case "s":
            case "S":
            case "ArrowRight":
            case ">":
            case ".":
                turnOnRightFlipper()
                turnOnUpperRightFlipper()
                increaseButtonCount()
              break;
            case "w":
            case "W":
            case " ":
            case "ArrowUp":
            case "M":
            case "m":
                turnOnShootButton()
                break;
            case "e":
            case "E":
            case "p":
            case "P":
            case "n":
            case "N":
            case "1":
                turnOnStartButton()
                break;
            case "d":
            case "D":
            case "ArrowDown":
            case "/":
            case "?":
                turnOnUpperRightFlipper()
                increaseButtonCount()
                break;
            default:
              // code block
          }

      }
    }


    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
        keyPressedTimeEnd[0] = new Date().getTime();
      //  console.log("Key Up Time:", keyPressedTimeEnd[0])
        buttonDuration =   keyPressedTimeEnd[0] - keyPressedTimeStart[0];
          buttonDuration = buttonDuration.toFixed(2)/1000
    //    console.log("Key Pressed Time (buttonDuration):", keyPressedTimeEnd[0],keyPressedTimeStart[0], buttonDuration)

        switch(targetKey) {
            case "a":
            case "A":
            case "ArrowLeft":
            case "<":
            case ",":
            turnOffLeftFlipper()
            break;

            case "s":
            case "S":
            case "ArrowRight":
            case ">":
            case ".":
            turnOffRightFlipper()
            turnOffUpperRightFlipper()
            break;

            case "w":
            case "W":
            case " ":
            case "ArrowUp":
            case "M":
            case "m":
            turnOffShootButton()
            break;

            case "e":
            case "E":
            case "p":
            case "P":
            case "n":
            case "N":
            case "1":
            turnOffStartButton()
            break;

            case "d":
            case "D":
            case "ArrowDown":
            case "/":
            case "?":
            turnOffUpperRightFlipper()
            break;
          default:
            // code block
        }

      }
    }

    // Add event listeners to listen for key presses
    useEffect(() => {
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener('keydown', downHandler);
        window.removeEventListener('keyup', upHandler);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return keyPressed;
  } // end function useKeyPress(targetKey)

return (<></>)
}
