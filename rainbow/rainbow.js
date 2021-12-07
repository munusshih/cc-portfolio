let colorNow = [];
let colorNext = [];
let temp;
let bignum = [30, 50, 100, 200];
let haha = 30;

function setup() {
  let clientHeight = document.getElementById("rainbow").clientHeight;
  let clientWidth = document.getElementById("rainbow").clientWidth;

  let cnv = createCanvas(clientWidth, clientHeight);
  cnv.parent("rainbow");
  colorMode(HSB);
  generateLines(colorNow);
  generateLines(colorNext);
}

function draw() {
  strokeWeight(10);
  if (frameCount % 200 == 1) {
    generateLines(colorNext);
  }
  drawLines();
}

function generateLines(list) {
  let d = random(255);
  let c = random(255);

  for (let i = 0; i < width; i += 0.5) {
    if (i % haha == int(random(20, 40))) {
      let haha = random(bignum);
      c = random(0, 360);
    }
    d = lerp(d, c, random(0.01, 0.02));
    console.log("generate");
    list[i] = d;
  }
}

function drawLines() {
  for (let i = 0; i < width; i += 0.5) {
    if (colorNow[i] > colorNext[i]) {
      colorNow[i] -= abs(colorNext[i] - colorNow[i]) * 0.03;
    } else {
      colorNow[i] += abs(colorNext[i] - colorNow[i]) * 0.03;
    }

    stroke(colorNow[i], 200, 200);
    noFill()
    circle(width/2, height/2, i*2*sin(frameCount/100));
  }
}

function windowResized() {
  let clientHeight = document.getElementById("rainbow").clientHeight;
  let clientWidth = document.getElementById("rainbow").clientWidth;

  let cnv = createCanvas(clientWidth, clientHeight);
  cnv.parent("rainbow");
}

$(window).resize(function() {
  location.reload();
});
