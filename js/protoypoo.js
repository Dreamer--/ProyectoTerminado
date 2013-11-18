var persona = Class.create({
	  initialize: function(nombre) {
	    this.nombre = nombre;
	  },
	  saluda: function(message) {
	    return this.nombre + ': ' + message;
	  },
	  finaliza:function(){
	  	alert("Esto fue gracias al uso de prototype, objetos y metodos!");
	  }
	});


		var nombre=""
		do{
			var tunombre = prompt("Escribe tu nombre, para saludarte");
			switch(tunombre){
				case "":
					alert("Ingresa Tu Nombre Nuevamente Por Favor");
				break;
				default:
					if(confirm("Tu nombre es: "+tunombre+"?")){
						nombre=tunombre;
					}
				break;
			}


		}while(nombre=="")

		// when subclassing, specify the class you want to inherit from
		var erestu = Class.create(persona, {
		  // redefine the speak method
		  saluda: function($super, message) {
		    return $super(message) + ', que lo disfrutes!';
		  }
		});
		var lic = new erestu(nombre);
		alert(lic.saluda(', gracias por saludar, estas entrando en mi sitio de juegos MMORPG'));
		lic.finaliza();
