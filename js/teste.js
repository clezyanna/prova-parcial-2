function cronometro(){
	var data = new Date();
	var horas = 0+"0";
	var minutos = 0+"0";
	var segundos =0+"0";
	//var min = parseInt(tempo/60);
	//var seg = tempo%60;

	if (segundo < 59){
      segundo++
      if(segundo < 10){segundo = "0"+segundo}
   }else 
      if(segundo == 59 && minuto < 59){
         segundo = 0+"0";
    minuto++;
    if(minuto < 10){minuto = "0"+minuto}
      }
   if(minuto == 59 && segundo == 59 && hora < 23){
      segundo = 0+"0";
      minuto = 0+"0";
      hora++;
      if(hora < 10){hora = "0"+hora}
   }else 
      if(minuto == 59 && segundo == 59 && hora == 23){
         segundo = 0+"0";
    minuto = 0+"0";
    hora = 0+"0";
      }
   form.cronometro.value = horas +":"+ minutos +":"+ segundos;
}


	/*if(horas < 10){
	horas = "0"+horas;
	}
	if(minutos < 10){
	minutos = "0"+minutos;
	}*/
	

	//document.getElementById("cronometro").innerHTML=horas+":"+minutos;
		
	//}
	//window.setInterval("cronometro()",1000);