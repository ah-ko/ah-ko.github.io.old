var i=1;
var y=0;
var styles = ["yes1","yes2 ","yes3","yes4","yes5","yes6","yes7","yes8","yes9","yes10","yes11","yes12","yes13","yes14","yes15"];
var colours = ["#03A9F4","#9C27B0","#FFEB3B","#F44336","#3F51B5"];


 setInterval(
   function(){


     $("." + styles[y]).css("z-index", i);
     //$("." + styles[y]).css("background-color",colours[y]);
     //i cycle the index
     i++;
     //y cycles the array
     y++;
     if(y==styles.length){
       y=0;
     }

  },1000)