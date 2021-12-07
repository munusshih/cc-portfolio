let colors = [
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#000000",
  "#ffffff",
  "#cc0000"
];

function setup() {
  let clientHeight = document.getElementById("about").clientHeight;
  let clientWidth = document.getElementById("about").clientWidth;

  let cnv = createCanvas(clientWidth, clientHeight);
  cnv.parent("about");
  frameRate(30);
  background(255, 0, 0);
}

function draw() {
  if (width > 250) {
    background(255, 0, 0);
    let n = abs(map(mouseY, 0, height, 5, 100)) + 1;
    let y = abs(map(mouseY, 0, height, 100, 5)) + 1;
    let size = width / n;
    let sizee = width / y;
    let h = 1;

    push();
    noStroke();
    translate(0, height - height / 3);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < h; j++) {
        fill(random(colors));
        rect(i * size, j * size, size, size);
      }
    }
    
    for (let i = 0; i < y; i++) {
      for (let j = 0; j < h; j++) {
        fill(random(colors));
        rect(i * sizee, j * sizee+sizee, sizee, size);
      }
    }

    pop();
  }
}

function windowResized() {
  let clientHeight = document.getElementById("about").clientHeight;
  let clientWidth = document.getElementById("about").clientWidth;

  let cnv = createCanvas(clientWidth, clientHeight);
  cnv.parent("about");
}
