 // getting the canvas element
 const c = document.getElementById("matrix");

 // defining the canvas context
 const ctx = c.getContext("2d");

 // making the canvas full screen
 c.height = window.innerHeight;
 c.width = window.innerWidth;

 // letters used on Matrix rain
 // more on: https://bit.ly/3yFJoU3
 const letters = [
   "日",
   "ﾊ",
   "ﾐ",
   "ﾋ",
   "ｰ",
   "ｳ",
   "ｼ",
   "ﾅ",
   "ﾓ",
   "ﾆ",
   "ｻ",
   "ﾜ",
   "ﾂ",
   "ｵ",
   "ﾘ",
   "ｱ",
   "ﾎ",
   "ﾃ",
   "ﾏ",
   "ｹ",
   "ﾒ",
   "ｴ",
   "ｶ",
   "ｷ",
   "ﾑ",
   "ﾕ",
   "ﾗ",
   "ｾ",
   "ﾈ",
   "ｽ",
   "ﾀ",
   "ﾇ",
   "ﾍ",
   ":",
   "・",
   ".",
   "=",
   "*",
   "+",
   "-",
   "<",
   ">",
   "¦",
   "｜",
   "ﾘ",
 ];

 const fontSize = 18;

 // defining how many columns to print based on canvas width and font size
 const columns = c.width / fontSize;

 // creating an array of drops to each column
 let drops = [];

 // starting every drop at a y=1 position
 for (let x = 0; x < columns; x++) drops[x] = 1;

 //drawing the characters
 function draw() {
   // painting the background
   // the trick here is to use opacity
   // so it will fade out with time
   ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
   ctx.fillRect(0, 0, c.width, c.height);

   // defining font styles (color and font family/size)
   ctx.fillStyle = "#0F0";
   ctx.font = `${fontSize}px arial`;

   // drawing the characters
   for (let i = 0; i < drops.length; i++) {
     // get a random letter from the array
     const text = letters[Math.floor(Math.random() * letters.length)];

     // drawing the character
     ctx.fillText(text, i * fontSize, drops[i] * fontSize);

     // moving the drop to the beginning of the canvas when it reaches the bottom
     // or when the random expression is true in order to make the rain randomly
     if (drops[i] * fontSize > c.height && Math.random() > 0.975)
       drops[i] = 0;

     // moving the drop in the Y coordinate
     drops[i]++;
   }

   // recursive call to draw frame by frame
   window.requestAnimationFrame(draw);
 }

 draw()