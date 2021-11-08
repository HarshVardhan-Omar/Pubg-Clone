function Imagechange(){
    console.log("Inside")
   var x= document.getElementById("Eyeimage").src;
   console.log(x)
   var password=document.getElementById("userpassword");
   if(x=="./eye.jpg")
   {
       password.type="text";
       document.getElementById("Eyeimage").src="./closedeye.png";
   }
   else
   {
       password.type="password";
       document.getElementById("Eyeimage").src="./eye.jpg";
   }
   
   
}