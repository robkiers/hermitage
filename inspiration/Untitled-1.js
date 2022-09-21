import React from "react";

export default class App extends React.Component {
//   state = {};
//   ref = React.createRef(null);
  
//   componentDidMount() {
//     const context = this.ref.current.getContext("2d");
//     const image = new Image();
//     image.onload = function(res) {
//       console.log("res", res);
//       context.drawImage(image, 0, 0);
//     };
//     image.onerror = function(err) {
//       console.log("err", err);
//     };
//     image.src = require("./assets/layer01.png");
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello CodeSandbox</h1>
//         <canvas ref={this.ref} />
//       </div>
//     );
//   }



}


// import "./App.css";
// import img01 from "./assets/layer01.png";
// import React from "react";

// function App() {
//   return <Canvas id="canvas" width="1580" height="789"></Canvas>;
// }

// export default class App extends React.Component {
//   state = {};
//   ref = React.createRef(null);
//   componentDidMount() {
//     const context = this.ref.current.getContext("2d");
//     const image = new Image();
//     image.onload = function(res) {
//       console.log("res", res);
//       context.drawImage(image, 0, 0);
//     };
//     image.onerror = function(err) {
//       console.log("err", err);
//     };
//     image.src = require(img01);
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello CodeSandbox</h1>
//         <canvas ref={this.ref} />
//       </div>
//     );
//   }
// }


const ctx = canvas.getContext("2d");

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
cx = width/2; //center x
cy = height/2; //center y

const stars = createStars(20);
drawEffect(cx,cy);

// mousemove event
var drawerFlag = false, frameFlag = false;
window.addEventListener("mousemove", (e) => {

    if (!drawerFlag && !frameFlag) {
        drawerFlag = true;
        setTimeout(()=>{ 
            drawEffect(e.clientX, e.clientY); //frameFlag
            drawerFlag = false;
        }, 25); //frame delay 
    } // if

}); //window.addEventListener




function drawCanvas(color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
}

function drawCircle(x, y, r, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.fillStyle = color;
    ctx.fill();
}


function drawEffect(mx, my){
    const x = (p) => calcPercentMove(mx, cx, p);
    const y = (p) => calcPercentMove(my, cy, p);
    frameFlag = true
    requestAnimationFrame(() => {


        drawStars(stars, mx, my, -0.5);

        //circles
        drawCircle(x(1), y(1), 300, "#c1c1c115");
        drawCircle(x(2), y(2), 260, "#c1c1c115");
        drawCircle(x(3), y(3), 220, "#c1c1c130");
        drawCircle(x(4), y(4), 180, "#c1c1c140");

        //moon
        drawCircle(x(5), y(5), 140, "#e1e1e1cc");

        //moon decoration
        drawCircle(x(5)-90, y(5)+20, 30, "#c1c1c180"); 
        drawCircle(x(5)+40, y(5)-70, 50, "#c1c1c180");

        //mouse circle
        drawCircle(mx, my, 20, "#f1f1f180");

        frameFlag = false
    }) //requestAnimatioFrame

}

// tool 
function calcPercentMove (point, ref, percent){
    return Math.round(((point - ref) * percent/100) + ref);
}

function createStars(cantidad  = 10){
    const stars =[];

    for(i=0;i<cantidad;i++){
        const x = rand(50, width-50);
        const y = rand(50, height-50);
        stars.push([x,y]); 
    }
    
    return stars;
}

function drawStars(stars, mx, my, p){
    
    drawCanvas("#050b16f1");
    stars.forEach((star)=>{

        let x = calcPercentMove(mx, star[0], p);
        let y = calcPercentMove(my, star[1], p);
        drawCircle(x, y, 1, "#c1c1c1c1");

    }) //forEach

}

//tool
function rand(min, max){
    return Math.round(Math.random() * (max-min) + min)
}