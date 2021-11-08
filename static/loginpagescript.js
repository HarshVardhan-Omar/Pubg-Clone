function Imagechange(){
   var x= document.getElementById("Eyeimage").src;
   var password=document.getElementById("userpassword");
   if(x=="https://pubgclone.herokuapp.com/eye.jpg"||x=="http://localhost:3000/eye.jpg")
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