function Imagechange(){
   var x= document.getElementById("Eyeimage").src;
   var password=document.getElementById("userpassword");
   if(x=="http://localhost/eye.jpg")
   {
       password.type="text";
       document.getElementById("Eyeimage").src="/closedeye.png";
   }
   else
   {
       password.type="password";
       document.getElementById("Eyeimage").src="/eye.jpg";
   }
   
   
}