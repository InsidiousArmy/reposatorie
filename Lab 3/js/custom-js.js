// the first thing that we are going to do is make sure that all our HTML has been rendered
document.addEventListener('DOMContentLoaded', (loaded) =>{
   // Now test to see if our JS is connected
   console.log('Welcome!!!');
   // now let's look at how we can output our HTML
   document.getElementById("ex2").innerHTML = "<h4>blah blah blah</h4>" + "<p>owefjiwjefowiejfowejfoweifjewoifjwoefisdfsldmsmfkldsmfldsmfkdsmlmdslkfdkf</p>";
   // Well now we can't see our HTML ... Let's style it with JS
   document.getElementById("ex2").style.color = "#ff2f00";
   document.getElementById("ex2").style.padding = "0% 10%";
   document.getElementById("ex1").innerHTML = 
"<div id='logo-container'>" +
         "<a href='index.html'>" +
            "<img id='logo' src='./img/logo.png' alt='header logo'>" +
         "</a>" +
       "</div>"
   

});