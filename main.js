
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;
function add() {
   img_imgTag=new Image();
   img_imgTag.onload = uploadBackground;
 img_imgTag.src = img_image;  
}

function uploadBackground() {

  ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}


window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
  keyPressed = e.keyCode;
  console.log(keyPressed);

  if ((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
alphabetkey();
document.getElementById("d1").innerHTML="You pressed an Alphabetic Key" ;
console.log("alphabetkey");
   }
   function alphabetkey(){
     img_image="Alphabetic_Key.jpg";
     add();
   }
   if ((keyPressed >=48 && keyPressed <=57)){
    numerickey();
    document.getElementById("d1").innerHTML="You pressed an Number Key" ;
    console.log("numerickey");
       }
       function numerickey(){
         img_image="Numeric_Key.jpg";
         add();
       }
       if ((keyPressed >=37&& keyPressed <=40)){
        arrow_key();
        document.getElementById("d1").innerHTML="You pressed an Arrow Key" ;
        console.log("arrow_key");
           }
           function arrow_key(){
             img_image="Arrow_Key.jpg";
             add();
           }
           if ((keyPressed ==17 )){
            special_key();
            document.getElementById("d1").innerHTML="You pressed an Special Key" ;
            console.log("special_key");
               }
               function special_key(){
                 img_image="Special_Key.jpg";
                 add();
               }
               if ((keyPressed ==18 )){
                special_key();
                document.getElementById("d1").innerHTML="You pressed an Special Key" ;
                console.log("special_key");
                   }
                   function special_key(){
                     img_image="Special_Key.jpg";
                     add();
                   }
                   if ((keyPressed ==27 )){
                    special_key();
                    document.getElementById("d1").innerHTML="You pressed an Special Key" ;
                    console.log("special_key");
                       }
                       function special_key(){
                         img_image="Special_Key.jpg";
                         add();
                       }
}