/* 
	cultivos-cyl.js
    Copyright (C) 2018  Laura Rodríguez Martín

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see https://www.gnu.org/licenses/.	
*/

			var json_file;	
			var años = new Array();
			var provincias = new Array('León', 'Palencia', 'Burgos', 'Soria', 'Segovia', 'Ávila', 'Zamora', 'Salamanca', 'Valladolid');
    		var grupos_cultivo = new Array();
    		var cultivo_frutales = new Array();
    		var cultivo_viñedo = new Array();
    		var cultivo_olivar_o = new Array();
    		var cultivo_citricos = new Array();
    		var cultivo_viveros = new Array();
    		var cultivo_viñedo_p = new Array();
    		var cultivo_olivar = new Array();
    		var cultivo_otros = new Array();
    		var cultivo_viñedo_a = new Array();
    		
			$(document).ready(function(){		
				//Leer el JSON
				json_file = (function() {
		 			var json = null;
		 			$.ajax({
		 				'async': false,
		 				'global': false,
		 				'url': 'https://analisis.datosabiertos.jcyl.es/resource/2vwa-si9n.json?$limit=50000',
		 				'dataType': "json",
		 				'success': function (data) {
		 					json = data;
            			}
        			});
					return json;
    			})();
    		
				var html_año = "<option value='0'>- Seleccionar -</option>";
				var html_grupo = "<option value='0'>- Seleccionar -</option>";
				var aux;
				json_file.forEach(function(item){
					//Años
					aux = item.a_o.split("-");
					if(!años.includes(aux[0])){
	  					años.push(aux[0]);
	  					html_año = html_año + "<option value='"+aux[0]+"'>"+aux[0]+"</option>";
  					}
  					//Grupos Cultivo
  					if(!grupos_cultivo.includes(item.grupo_de_cultivo)){
	  					grupos_cultivo.push(item.grupo_de_cultivo);
  					} 
  					//Frutales
  					if((!cultivo_frutales.includes(item.cultivo))&&(item.grupo_de_cultivo == 'FRUTALES')){
	  					cultivo_frutales.push(item.cultivo);
  					}   					
  					//Viñedo
  					if((!cultivo_viñedo.includes(item.cultivo))&&(item.grupo_de_cultivo == 'VIÑEDO')){
	  					cultivo_viñedo.push(item.cultivo);
  					}  					
  					//Olivar y Otros C.I.
  					if((!cultivo_olivar_o.includes(item.cultivo))&&(item.grupo_de_cultivo == 'OLIVAR Y OTROS C.I.')){
	  					cultivo_olivar_o.push(item.cultivo);
  					}  					
  					//Cítricos
  					if((!cultivo_citricos.includes(item.cultivo))&&(item.grupo_de_cultivo == 'CITRICOS')){
	  					cultivo_citricos.push(item.cultivo);
  					}  					
  					//Viveros
   					if((!cultivo_viveros.includes(item.cultivo))&&(item.grupo_de_cultivo == 'VIVEROS')){
	  					cultivo_viveros.push(item.cultivo);
  					} 					
  					//Viñedo ocupación principal
  					if((!cultivo_viñedo_p.includes(item.cultivo))&&(item.grupo_de_cultivo == 'VIÑEDO OCUPACIÓN PRINCIPAL')){
	  					cultivo_viñedo_p.push(item.cultivo);
  					}  					
  					//Olivar
  					if((!cultivo_olivar.includes(item.cultivo))&&(item.grupo_de_cultivo == 'OLIVAR')){
	  					cultivo_olivar.push(item.cultivo);
  					}  					
  					//Otros cultivos leñosos
  					if((!cultivo_otros.includes(item.cultivo))&&(item.grupo_de_cultivo == 'OTROS CULTIVOS LEÑOSOS')){
	  					cultivo_otros.push(item.cultivo);
  					}  					
  					//Viñedo asociado 
  					if((!cultivo_viñedo_a.includes(item.cultivo))&&(item.grupo_de_cultivo == 'VIÑEDO ASOCIADO')){
	  					cultivo_viñedo_a.push(item.cultivo);
  					}  									
  				});
  				grupos_cultivo.sort();
  				cultivo_frutales.sort();
  				cultivo_viñedo.sort();
  				cultivo_olivar_o.sort();
  				cultivo_citricos.sort();
  				cultivo_viveros.sort();
  				cultivo_viñedo_p.sort();
  				cultivo_olivar.sort();
  				cultivo_otros.sort();
  				cultivo_viñedo_a.sort();
  				for(var i = 0; i < grupos_cultivo.length; i++){
	  				html_grupo = html_grupo + "<option value='"+grupos_cultivo[i]+"'>"+grupos_cultivo[i]+"</option>";
  				}
  				
  				$("#select_año_1").html(html_año);
  				$("#select_año_2").html(html_año);
  				$("#select_año_4").html(html_año);
  				$("#select_año_5").html(html_año);
  				$("#select_grupo_2").html(html_grupo);
  				$("#select_grupo_3").html(html_grupo);
  				$("#select_grupo_4").html(html_grupo);
  				
  				$('#menu_1').click(function() {
	  				$("#menu_1").addClass("active");
	  				$("#menu_2").removeClass("active");
	  				$("#menu_3").removeClass("active");
	  				$("#menu_4").removeClass("active");
	  				$("#menu_5").removeClass("active");
  				});
  				$('#menu_2').click(function() {
	  				$("#menu_2").addClass("active");
	  				$("#menu_1").removeClass("active");
	  				$("#menu_3").removeClass("active");
	  				$("#menu_4").removeClass("active");
	  				$("#menu_5").removeClass("active");
  				});
  				$('#menu_3').click(function() {
	  				$("#menu_3").addClass("active");
	  				$("#menu_1").removeClass("active");
	  				$("#menu_2").removeClass("active");
	  				$("#menu_4").removeClass("active");
	  				$("#menu_5").removeClass("active");
  				});
  				$('#menu_4').click(function() {
	  				$("#menu_4").addClass("active");
	  				$("#menu_1").removeClass("active");
	  				$("#menu_2").removeClass("active");
	  				$("#menu_3").removeClass("active");
	  				$("#menu_5").removeClass("active");
  				});  				  				  				
  				$('#menu_5').click(function() {
	  				$("#menu_5").addClass("active");
	  				$("#menu_1").removeClass("active");
	  				$("#menu_2").removeClass("active");
	  				$("#menu_3").removeClass("active");
	  				$("#menu_4").removeClass("active");
  				});
  				  				
  				$('#select_grupo_3').on('change', function() {
  					console.log(this.value);
  					load_cultivos(this.value, '#select_cultivo_3');
				});
				
				$('#select_grupo_4').on('change', function() {
  					console.log(this.value);
  					load_cultivos(this.value, '#select_cultivo_4');
				});
				
				$("#buscar_5").click(function() {
	  				if(todo_ok_5()){
		  				crear_chart5();	
	  				}		  				
	  			});				
				
				$("#buscar_4").click(function() {
	  				if(todo_ok_4()){
		  				crear_chart4();	
	  				}		  				
	  			});
				
  				$("#buscar_3").click(function() {
	  				if(todo_ok_3()){
		  				crear_chart3();	
	  				}		  				
	  			});								  				
  				$("#buscar_2").click(function() {
	  				if(todo_ok_2()){
		  				crear_chart2();	
	  				}	  				
	  			});	
  				$("#buscar_1").click(function() {
	  				if(todo_ok_1()){
		  				crear_chart1();	
	  				}
  				});
  				
  				function load_cultivos(grupo, select_id){
	  				var html_cultivo = "<option value='0'>- Seleccionar -</option>";
  					switch(grupo){
	  					case 'FRUTALES':
	  						for(var i = 0; i < cultivo_frutales.length; i++){
		  						html_cultivo = html_cultivo + "<option value='"+cultivo_frutales[i]+"'>"+cultivo_frutales[i]+"</option>";
	  						}
	  						break;
	  					case 'VIÑEDO':
	  						for(var i = 0; i < cultivo_viñedo.length; i++){
		  						html_cultivo = html_cultivo + "<option value='"+cultivo_viñedo[i]+"'>"+cultivo_viñedo[i]+"</option>";
	  						}	  					
	  						break;
	  					case 'OLIVAR Y OTROS C.I.':
	  						for(var i = 0; i < cultivo_olivar_o.length; i++){
		  						html_cultivo = html_cultivo + "<option value='"+cultivo_olivar_o[i]+"'>"+cultivo_olivar_o[i]+"</option>";
	  						}	  					
	  						break;
	  					case 'CITRICOS':
	  						for(var i = 0; i < cultivo_citricos.length; i++){
		  						html_cultivo = html_cultivo + "<option value='"+cultivo_citricos[i]+"'>"+cultivo_citricos[i]+"</option>";
	  						}	  					
	  						break;
	  					case 'VIVEROS':
	  						for(var i = 0; i < cultivo_viveros.length; i++){
		  						html_cultivo = html_cultivo + "<option value='"+cultivo_viveros[i]+"'>"+cultivo_viveros[i]+"</option>";
	  						}	  					
	  						break;
	  					case 'VIÑEDO OCUPACIÓN PRINCIPAL':
	  						for(var i = 0; i < cultivo_viñedo_p.length; i++){
		  						html_cultivo = html_cultivo + "<option value='"+cultivo_viñedo_p[i]+"'>"+cultivo_viñedo_p[i]+"</option>";
	  						}	  					
	  						break;
	  					case 'OLIVAR':
	  						for(var i = 0; i < cultivo_olivar.length; i++){
		  						html_cultivo = html_cultivo + "<option value='"+cultivo_olivar[i]+"'>"+cultivo_olivar[i]+"</option>";
	  						}	  					
	  						break;
	  					case 'OTROS CULTIVOS LEÑOSOS':
	  						for(var i = 0; i < cultivo_otros.length; i++){
		  						html_cultivo = html_cultivo + "<option value='"+cultivo_otros[i]+"'>"+cultivo_otros[i]+"</option>";
	  						}	  					
	  						break;
	  					case 'VIÑEDO ASOCIADO':
	  						for(var i = 0; i < cultivo_viñedo_a.length; i++){
		  						html_cultivo = html_cultivo + "<option value='"+cultivo_viñedo_a[i]+"'>"+cultivo_viñedo_a[i]+"</option>";
	  						}	  					
	  						break;		
  					}
  					$(select_id).html(html_cultivo);
  				}
  				
  				function todo_ok_1(){
	  				if($("#select_provincia_1").val() != 0){
		  				$("#select_provincia_1").removeClass('error');
		  				if($("#select_año_1").val() != 0){
			  				$("#select_año_1").removeClass('error');
			  				if($("#select_grafica_1").val() != 0){
				  				$("#select_grafica_1").removeClass('error');
				  				return true;	
			  				}else{
				  				$("#select_grafica_1").addClass('error');
				  				return false;
			  				}
		  				}else{
			  				$("#select_año_1").addClass('error');
			  				return false;
		  				}
	  				}else{
		  				$("#select_provincia_1").addClass('error');
		  				return false;
	  				}
  				}
  				function todo_ok_2(){
	  				if($("#select_provincia_2").val() != 0){
		  				$("#select_provincia_2").removeClass('error');
		  				if($("#select_año_2").val() != 0){
			  				$("#select_año_2").removeClass('error');
			  				if($("#select_grupo_2").val() != 0){
				  				$("#select_grupo_2").removeClass('error');
				  				if($("#select_grafica_2").val() != 0){
					  				$("#select_grafica_2").removeClass('error');
					  				return true;
				  				}else{
					  				$("#select_grafica_2").addClass('error');
					  				return false;
				  				}	
			  				}else{
				  				$("#select_grupo_2").addClass('error');
				  				return false;
			  				}
		  				}else{
			  				$("#select_año_2").addClass('error');
			  				return false;
		  				}
	  				}else{
		  				$("#select_provincia_2").addClass('error');
		  				return false;
	  				}	  				
  				}
  				function todo_ok_3(){
	  				if($("#select_provincia_3").val() != 0){
		  				$("#select_provincia_3").removeClass('error');
		  				if($("#select_grupo_3").val() != 0){
			  				$("#select_grupo_3").removeClass('error');
		  					if($("#select_cultivo_3").val() != 0){
			  					$("#select_cultivo_3").removeClass('error');
		  						if($("#select_grafica_3").val() != 0){
			  						$("#select_grafica_3").removeClass('error');
		  							return true;	
		  						}else{
			  						$("#select_grafica_3").addClass('error');
			  						return false;
		  						}
		  					}else{
			  					$("#select_cultivo_3").addClass('error');
			  					return false;
		  					}
		  				}else{
			  				$("#select_grupo_3").addClass('error');
			  				return false;
		  				}
		  			}else{
			  			$("#select_provincia_3").addClass('error');
			  			return false;
		  			}
  				}
  				function todo_ok_4(){
	  				if($("#select_grupo_4").val() != 0){
		  				$("#select_grupo_4").removeClass('error');
		  				if($("#select_cultivo_4").val() != 0){
			  				$("#select_cultivo_4").removeClass('error');
		  					if($("#select_año_4").val() != 0){
			  					$("#select_año_4").removeClass('error');
		  						if($("#select_grafica_4").val() != 0){
			  						$("#select_grafica_4").removeClass('error');
		  							return true;	
		  						}else{
			  						$("#select_grafica_4").addClass('error');
			  						return false;
		  						}
		  					}else{
			  					$("#select_año_4").addClass('error');
			  					return false;
		  					}
		  				}else{
			  				$("#select_cultivo_4").addClass('error');
			  				return false;
		  				}
		  			}else{
			  			$("#select_grupo_4").addClass('error');
			  			return false;
		  			}
  				}
  				function todo_ok_5(){
	  				if($("#select_año_5").val() != 0){
		  				$("#select_año_5").removeClass('error');
		  				if($("#select_grafica_5").val() != 0){
			  				$("#select_grafica_5").removeClass('error');
				  			return true;	
			  			}else{
				  			$("#select_grafica_5").addClass('error');
				  			return false;
			  			}
		  			}else{
			  			$("#select_año_5").addClass('error');
			  			return false;
		  			}
  				}
  				
  				function crear_chart5(){
	  				var ha_leon = 0;
	  				var ha_palencia = 0;
	  				var ha_burgos = 0;
	  				var ha_soria = 0;
	  				var ha_segovia = 0;
	  				var ha_avila = 0;
	  				var ha_zamora = 0;
	  				var ha_salamanca = 0;
	  				var ha_valladolid = 0;
	  				var chart_5 = [['Provincia', 'Hectáreas', { role: 'style' }]];
	  				json_file.forEach(function(item){
			  			switch(item.codigo_provincia){
				  			case '5':
			  					if(item.superficie_secano_en_producci_n != null){
				  					ha_avila = ha_avila + parseInt(item.superficie_secano_en_producci_n);
			  					}
			  					if(item.superficie_regad_o_en_producci_n != null){
				  					ha_avila = ha_avila + parseInt(item.superficie_regad_o_en_producci_n);
			  					}				  					
				  				break;
				  			case '9':
			  					if(item.superficie_secano_en_producci_n != null){
				  					ha_burgos = ha_burgos + parseInt(item.superficie_secano_en_producci_n);
			  					}
			  					if(item.superficie_regad_o_en_producci_n != null){
				  					ha_burgos = ha_burgos + parseInt(item.superficie_regad_o_en_producci_n);
			  					}				  				
				  				break;
				  			case '24':
			  					if(item.superficie_secano_en_producci_n != null){
				  					ha_leon = ha_leon + parseInt(item.superficie_secano_en_producci_n);
			  					}
			  					if(item.superficie_regad_o_en_producci_n != null){
				  					ha_leon = ha_leon + parseInt(item.superficie_regad_o_en_producci_n);
			  					}				  				
				  				break;
				  			case '34':
			  					if(item.superficie_secano_en_producci_n != null){
				  					ha_palencia = ha_palencia + parseInt(item.superficie_secano_en_producci_n);
			  					}
			  					if(item.superficie_regad_o_en_producci_n != null){
				  					ha_palencia = ha_palencia + parseInt(item.superficie_regad_o_en_producci_n);
			  					}				  				
				  				break;
				  			case '37':
			  					if(item.superficie_secano_en_producci_n != null){
				  					ha_salamanca = ha_salamanca + parseInt(item.superficie_secano_en_producci_n);
			  					}
			  					if(item.superficie_regad_o_en_producci_n != null){
				  					ha_salamanca = ha_salamanca + parseInt(item.superficie_regad_o_en_producci_n);
			  					}				  				
				  				break;
				  			case '40':
			  					if(item.superficie_secano_en_producci_n != null){
				  					ha_segovia = ha_segovia + parseInt(item.superficie_secano_en_producci_n);
			  					}
			  					if(item.superficie_regad_o_en_producci_n != null){
				  					ha_segovia = ha_segovia + parseInt(item.superficie_regad_o_en_producci_n);
			  					}				  				
				  				break;
				  			case '42':
			  					if(item.superficie_secano_en_producci_n != null){
				  					ha_soria = ha_soria + parseInt(item.superficie_secano_en_producci_n);
			  					}
			  					if(item.superficie_regad_o_en_producci_n != null){
				  					ha_soria = ha_soria + parseInt(item.superficie_regad_o_en_producci_n);
			  					}				  				
				  				break;
				  			case '47':
			  					if(item.superficie_secano_en_producci_n != null){
			  						ha_valladolid = ha_valladolid + parseInt(item.superficie_secano_en_producci_n);
		  						}
		  						if(item.superficie_regad_o_en_producci_n != null){				  													ha_valladolid = ha_valladolid + parseInt(item.superficie_regad_o_en_producci_n);
			  					}				  				
				  				break;
				  			case '49':
			  					if(item.superficie_secano_en_producci_n != null){
				  					ha_zamora = ha_zamora + parseInt(item.superficie_secano_en_producci_n);
			  					}
			  					if(item.superficie_regad_o_en_producci_n != null){
				  					ha_zamora = ha_zamora + parseInt(item.superficie_regad_o_en_producci_n);
			  					}				  				
			  					break;
			  			}							  				
		  			});	
		  			for (var i = 0; i < provincias.length; i++) {
						switch(provincias[i]){
							case 'Ávila':
								if(ha_avila != 0){
									chart_5.push([provincias[i], ha_avila, 'color: #3264d2']);	
								}
								break;
							case 'Burgos':
								if(ha_burgos != 0){
									chart_5.push([provincias[i], ha_burgos, 'color: #d73c00']);
								}							
								break;
							case 'León':
								if(ha_leon != 0){
									chart_5.push([provincias[i], ha_leon, 'color: #f79a00']);
								}							
								break;
							case 'Palencia':
								if(ha_palencia != 0){
									chart_5.push([provincias[i], ha_palencia, 'color: #389600']);	
								}							
								break;
							case 'Salamanca':
								if(ha_salamanca != 0){
									chart_5.push([provincias[i], ha_salamanca, 'color: #94009f']);	
								}							
								break;
							case 'Segovia':
								if(ha_segovia != 0){
									chart_5.push([provincias[i], ha_segovia, 'color: #2e98ca']);	
								}							
								break;
							case 'Soria':
								if(ha_soria != 0){
									chart_5.push([provincias[i], ha_soria, 'color: #d84578']);
								}							
								break;
							case 'Valladolid':
								if(ha_valladolid != 0){
									chart_5.push([provincias[i], ha_valladolid, 'color: #3264d2']);
								}							
								break;
							case 'Zamora':
								if(ha_zamora != 0){
									chart_5.push([provincias[i], ha_zamora, 'color: #d73c00']);
								}							
								break;																
						}	  					
					}
		  			if(chart_5.length <= 1){
	  					console.log('No hay datos');
	  					$("#porcentajes_5").html("<div class='alert alert-danger alert-dismissible'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Vaya!</strong> No hay datos disponibles :(, prueba con otros.</div>");	  					
  					}else{
						// Load google charts
						google.charts.load('current', {'packages':['corechart']});
						google.charts.setOnLoadCallback(drawChart5);
						// Draw the chart and set the chart values
						function drawChart5() {
							var data = google.visualization.arrayToDataTable(chart_5);
							var view = new google.visualization.DataView(data);
							view.setColumns([0, 1,
  								{ calc: "stringify",
	  								sourceColumn: 1,
	  								type: "string",
	  								role: "annotation" }, 2]);
	  						// Optional; add a title and set the width and height of the chart
	  						var options = {'title':'Nº Superficies de cultivo leñoso en producción (ha)', legend: 'none'};
	  						// Display the chart inside the <div> element with id="chart_1"
	  						switch($("#select_grafica_5").val()){
								case 'barras_v':
									var chart = new google.visualization.ColumnChart(document.getElementById('chart_5'));
									break;
								case 'barras_h':
									var chart = new google.visualization.BarChart(document.getElementById('chart_5'));
									break;
								case 'circular':
									var chart = new google.visualization.PieChart(document.getElementById('chart_5'));
									break;
							}
							chart.draw(view, options);
						}	  					
	  				}	  				
  				}
  								
  				function crear_chart4(){
	  				var ha_leon = 0;
	  				var ha_palencia = 0;
	  				var ha_burgos = 0;
	  				var ha_soria = 0;
	  				var ha_segovia = 0;
	  				var ha_avila = 0;
	  				var ha_zamora = 0;
	  				var ha_salamanca = 0;
	  				var ha_valladolid = 0;
	  				var aux;
	  				var chart_4 = [['Provincia', 'Hectáreas', { role: 'style' }]];
	  				json_file.forEach(function(item){
		  				aux = item.a_o.split("-");
		  				if((aux[0] == $("#select_año_4").val()) 
		  				&& (item.grupo_de_cultivo == $("#select_grupo_4").val()) 
		  				&& (item.cultivo == $("#select_cultivo_4").val())){
			  				switch(item.codigo_provincia){
				  				case '5':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_avila = ha_avila + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_avila = ha_avila + parseInt(item.superficie_regad_o_en_producci_n);
			  						}				  					
				  					break;
				  				case '9':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_burgos = ha_burgos + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_burgos = ha_burgos + parseInt(item.superficie_regad_o_en_producci_n);
			  						}				  				
				  					break;
				  				case '24':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_leon = ha_leon + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_leon = ha_leon + parseInt(item.superficie_regad_o_en_producci_n);
			  						}				  				
				  					break;
				  				case '34':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_palencia = ha_palencia + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_palencia = ha_palencia + parseInt(item.superficie_regad_o_en_producci_n);
			  						}				  				
				  					break;
				  				case '37':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_salamanca = ha_salamanca + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_salamanca = ha_salamanca + parseInt(item.superficie_regad_o_en_producci_n);
			  						}				  				
				  					break;
				  				case '40':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_segovia = ha_segovia + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_segovia = ha_segovia + parseInt(item.superficie_regad_o_en_producci_n);
			  						}				  				
				  					break;
				  				case '42':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_soria = ha_soria + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_soria = ha_soria + parseInt(item.superficie_regad_o_en_producci_n);
			  						}				  				
				  					break;
				  				case '47':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_valladolid = ha_valladolid + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_valladolid = ha_valladolid + parseInt(item.superficie_regad_o_en_producci_n);
			  						}				  				
				  					break;
				  				case '49':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_zamora = ha_zamora + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_zamora = ha_zamora + parseInt(item.superficie_regad_o_en_producci_n);
			  						}				  				
				  					break;
			  				}
			  			}	
		  			});
		  			console.log(ha_avila);
		  			console.log(ha_burgos);
		  			console.log(ha_leon);
		  			console.log(ha_palencia);
		  			console.log(ha_salamanca);
		  			console.log(ha_segovia);
		  			console.log(ha_soria);
		  			console.log(ha_valladolid);
		  			console.log(ha_zamora);
		  			for (var i = 0; i < provincias.length; i++) {
			  			console.log(provincias[i]);
						switch(provincias[i]){
							case 'Ávila':
								if(ha_avila != 0){
									chart_4.push([provincias[i], ha_avila, 'color: #3264d2']);	
								}
								break;
							case 'Burgos':
								if(ha_burgos != 0){
									chart_4.push([provincias[i], ha_burgos, 'color: #d73c00']);
								}							
								break;
							case 'León':
								if(ha_leon != 0){
									chart_4.push([provincias[i], ha_leon, 'color: #f79a00']);
								}							
								break;
							case 'Palencia':
								if(ha_palencia != 0){
									chart_4.push([provincias[i], ha_palencia, 'color: #389600']);	
								}							
								break;
							case 'Salamanca':
								if(ha_salamanca != 0){
									chart_4.push([provincias[i], ha_salamanca, 'color: #94009f']);	
								}							
								break;
							case 'Segovia':
								if(ha_segovia != 0){
									chart_4.push([provincias[i], ha_segovia, 'color: #2e98ca']);	
								}							
								break;
							case 'Soria':
								if(ha_soria != 0){
									chart_4.push([provincias[i], ha_soria, 'color: #d84578']);
								}							
								break;
							case 'Valladolid':
								if(ha_valladolid != 0){
									chart_4.push([provincias[i], ha_valladolid, 'color: #3264d2']);
								}							
								break;
							case 'Zamora':
								if(ha_zamora != 0){
									chart_4.push([provincias[i], ha_zamora, 'color: #d73c00']);
								}							
								break;																
						}	  					
					}
		  			if(chart_4.length <= 1){
	  					console.log('No hay datos');
	  					$("#porcentajes_4").html("<div class='alert alert-danger alert-dismissible'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Vaya!</strong> No hay datos disponibles :(, prueba con otros.</div>");	  					
  					}else{
						// Load google charts
						google.charts.load('current', {'packages':['corechart']});
						google.charts.setOnLoadCallback(drawChart4);
						// Draw the chart and set the chart values
						function drawChart4() {
							var data = google.visualization.arrayToDataTable(chart_4);
							var view = new google.visualization.DataView(data);
							view.setColumns([0, 1,
  								{ calc: "stringify",
	  								sourceColumn: 1,
	  								type: "string",
	  								role: "annotation" }, 2]);
	  						// Optional; add a title and set the width and height of the chart
	  						var options = {'title':'Nº Superficies de cultivo '+$("#select_cultivo_4").val()+' en producción (ha)', legend: 'none'};
	  						// Display the chart inside the <div> element with id="chart_1"
	  						switch($("#select_grafica_4").val()){
								case 'barras_v':
									var chart = new google.visualization.ColumnChart(document.getElementById('chart_4'));
									break;
								case 'barras_h':
									var chart = new google.visualization.BarChart(document.getElementById('chart_4'));
									break;
								case 'circular':
									var chart = new google.visualization.PieChart(document.getElementById('chart_4'));
									break;
							}
							chart.draw(view, options);
						}	  					
	  				}						  				
  				}

  				function crear_chart3(){
	  				var ha_2010 = 0;
	  				var ha_2011 = 0;
	  				var ha_2012 = 0;
	  				var ha_2013 = 0;
	  				var ha_2014 = 0;
	  				var ha_2015 = 0;
	  				var ha_2016 = 0;
	  				var aux;
	  				var chart_3 = [['Año', 'Hectáreas', { role: 'style' }]];
	  				json_file.forEach(function(item){
		  				aux = item.a_o.split("-");
		  				if((item.codigo_provincia == $("#select_provincia_3").val()) 
		  				&& (item.grupo_de_cultivo == $("#select_grupo_3").val()) 
		  				&& (item.cultivo == $("#select_cultivo_3").val())){
			  				switch(aux[0]){
				  				case '2010':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_2010 = ha_2010 + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_2010 = ha_2010 + parseInt(item.superficie_regad_o_en_producci_n);
			  						}				  					
				  					break;
				  				case '2011':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_2011 = ha_2011 + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_2011 = ha_2011 + parseInt(item.superficie_regad_o_en_producci_n);
			  						}				  				
				  					break;
				  				case '2012':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_2012 = ha_2012 + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_2012 = ha_2012 + parseInt(item.superficie_regad_o_en_producci_n);
			  						}				  				
				  					break;
				  				case '2013':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_2013 = ha_2013 + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_2013 = ha_2013 + parseInt(item.superficie_regad_o_en_producci_n);
			  						}				  				
				  					break;
				  				case '2014':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_2014 = ha_2014 + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_2014 = ha_2014 + parseInt(item.superficie_regad_o_en_producci_n);
			  						}				  				
				  					break;
				  				case '2015':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_2015 = ha_2015 + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_2015 = ha_2015 + parseInt(item.superficie_regad_o_en_producci_n);
			  						}				  				
				  					break;
				  				case '2016':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_2016 = ha_2016 + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_2016 = ha_2016 + parseInt(item.superficie_regad_o_en_producci_n);
			  						}				  				
				  					break;
			  				}
			  			}	
		  			});
		  			for (var i = 0; i < años.length; i++) {
						switch(años[i]){
							case '2010':
								if(ha_2010 != 0){
									chart_3.push([años[i], ha_2010, 'color: #3264d2']);	
								}
								break;
							case '2011':
								if(ha_2011 != 0){
									chart_3.push([años[i], ha_2011, 'color: #d73c00']);
								}							
								break;
							case '2012':
								if(ha_2012 != 0){
									chart_3.push([años[i], ha_2012, 'color: #f79a00']);
								}							
								break;
							case '2013':
								if(ha_2013 != 0){
									chart_3.push([años[i], ha_2013, 'color: #389600']);	
								}							
								break;
							case '2014':
								if(ha_2014 != 0){
									chart_3.push([años[i], ha_2014, 'color: #94009f']);	
								}							
								break;
							case '2015':
								if(ha_2015 != 0){
									chart_3.push([años[i], ha_2015, 'color: #2e98ca']);	
								}							
								break;
							case '2016':
								if(ha_2016 != 0){
									chart_3.push([años[i], ha_2016, 'color: #d84578']);
								}							
								break;
						}	  					
					}	
		  			if(chart_3.length <= 1){
	  					console.log('No hay datos');
	  					$("#porcentajes_3").html("<div class='alert alert-danger alert-dismissible'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Vaya!</strong> No hay datos disponibles :(, prueba con otros.</div>");	  					
  					}else{
						// Load google charts
						google.charts.load('current', {'packages':['corechart']});
						google.charts.setOnLoadCallback(drawChart3);
						// Draw the chart and set the chart values
						function drawChart3() {
							var data = google.visualization.arrayToDataTable(chart_3);
							var view = new google.visualization.DataView(data);
							view.setColumns([0, 1,
  								{ calc: "stringify",
	  								sourceColumn: 1,
	  								type: "string",
	  								role: "annotation" }, 2]);
	  						// Optional; add a title and set the width and height of the chart
	  						var options = {'title':'Nº Superficies de cultivo '+$("#select_cultivo_3").val()+' en producción (ha)', legend: 'none'};
	  						// Display the chart inside the <div> element with id="chart_1"
	  						switch($("#select_grafica_3").val()){
								case 'barras_v':
									var chart = new google.visualization.ColumnChart(document.getElementById('chart_3'));
									break;
								case 'barras_h':
									var chart = new google.visualization.BarChart(document.getElementById('chart_3'));
									break;
								case 'lineal':
									var chart = new google.visualization.LineChart(document.getElementById('chart_3'));
									break;
							}
							chart.draw(view, options);
						}	  					
	  				}					  					
  				}

  				function crear_chart1(){
	  				var ha_frutal = 0;
	  				var ha_viñedo = 0;
	  				var ha_olivar_o = 0;
	  				var ha_citrico = 0;
	  				var ha_vivero = 0;
	  				var ha_viñedo_p = 0;
	  				var ha_olivar = 0;
	  				var ha_otros = 0;
	  				var ha_viñedo_a = 0;
	  				var aux;
	  				var chart_1 = [['Grupo Cultivo', 'Hectáreas', { role: 'style' }]];
  					var p_frutal = 0;
  					var p_viñedo = 0;
  					var p_olivar_o = 0;
  					var p_citrico = 0;
  					var p_vivero = 0;
  					var p_viñedo_p = 0;
  					var p_olivar = 0;
  					var p_otros = 0;
  					var p_viñedo_a = 0;
  					var html_porcentaje = "<p>";
	  				//Recorrer json_file 
	  				json_file.forEach(function(item){
		  				aux = item.a_o.split("-");
	  					if((item.codigo_provincia == $("#select_provincia_1").val()) && (aux[0] == $("#select_año_1").val())){
		  					switch(item.grupo_de_cultivo){
			  					case 'FRUTALES':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_frutal = ha_frutal + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_frutal = ha_frutal + parseInt(item.superficie_regad_o_en_producci_n);
			  						}
			  						break;
			  					case 'VIÑEDO':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_viñedo = ha_viñedo + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_viñedo = ha_viñedo + parseInt(item.superficie_regad_o_en_producci_n);
			  						}
			  						break;	
			  					case 'OLIVAR Y OTROS C.I.':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_olivar_o = ha_olivar_o + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_olivar_o = ha_olivar_o + parseInt(item.superficie_regad_o_en_producci_n);
			  						}
			  						break;
			  					case 'CITRICOS':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_citrico = ha_citrico + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_citrico = ha_citrico + parseInt(item.superficie_regad_o_en_producci_n);
			  						}
			  						break;
			  					case 'VIVEROS':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_vivero = ha_vivero + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_vivero = ha_vivero + parseInt(item.superficie_regad_o_en_producci_n);
			  						}
			  						break;	
			  					case 'VIÑEDO OCUPACIÓN PRINCIPAL':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_viñedo_p = ha_viñedo_p + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_viñedo_p = ha_viñedo_p + parseInt(item.superficie_regad_o_en_producci_n);
			  						}	
			  						break;		  								  								
			  					case 'OLIVAR':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_olivar = ha_olivar + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_olivar = ha_olivar + parseInt(item.superficie_regad_o_en_producci_n);
			  						}
			  						break;
			  					case 'OTROS CULTIVOS LEÑOSOS':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_otros = ha_otros + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_otros = ha_otros + parseInt(item.superficie_regad_o_en_producci_n);
			  						}
			  						break;			  									  							  			  				case 'VIÑEDO ASOCIADO':
			  						if(item.superficie_secano_en_producci_n != null){
				  						ha_viñedo_a = ha_viñedo_a + parseInt(item.superficie_secano_en_producci_n);
			  						}
			  						if(item.superficie_regad_o_en_producci_n != null){
				  						ha_viñedo_a = ha_viñedo_a + parseInt(item.superficie_regad_o_en_producci_n);
			  						}
			  						break;									  								  	
		  					}
	  					}
  					});	
  					  				
  					var ha_total = ha_frutal + ha_viñedo + ha_olivar_o + ha_citrico + ha_vivero + ha_viñedo_p + ha_olivar + ha_otros + ha_viñedo_a;
  					
  					for (var i = 0; i < grupos_cultivo.length; i++) {
						switch(grupos_cultivo[i]){
							case 'FRUTALES':
								if(ha_frutal != 0){
									chart_1.push([grupos_cultivo[i], ha_frutal, 'color: #3264d2']);
									p_frutal = (ha_frutal/ha_total)*100;
									html_porcentaje = html_porcentaje + " <b>FRUTALES: </b>" + Number((p_frutal).toFixed(1)) + "%, ";	
								}
								break;
							case 'VIÑEDO':
								if(ha_viñedo != 0){
									chart_1.push([grupos_cultivo[i], ha_viñedo, 'color: #d73c00']);
									p_viñedo = (ha_viñedo/ha_total)*100;
									html_porcentaje = html_porcentaje + "<b>VIÑEDO: </b>" + Number((p_viñedo).toFixed(1)) + "%, ";
								}							
								break;
							case 'OLIVAR Y OTROS C.I.':
								if(ha_olivar_o != 0){
									chart_1.push([grupos_cultivo[i], ha_olivar_o, 'color: #f79a00']);
									p_olivar_o = (ha_olivar_o/ha_total)*100;
									html_porcentaje = html_porcentaje + "<b>OLIVAR Y OTROS C.I. : </b>" + Number((p_olivar_o).toFixed(1)) + "%, ";	
								}							
								break;
							case 'CITRICOS':
								if(ha_citrico != 0){
									chart_1.push([grupos_cultivo[i], ha_citrico, 'color: #389600']);
									p_citrico = (ha_citrico/ha_total)*100;
									html_porcentaje = html_porcentaje + "<b>CITRICOS: </b>" + Number((p_citrico).toFixed(1)) + "%, ";	
								}							
								break;
							case 'VIVEROS':
								if(ha_vivero != 0){
									chart_1.push([grupos_cultivo[i], ha_vivero, 'color: #94009f']);
									p_vivero = (ha_vivero/ha_total)*100;
									html_porcentaje = html_porcentaje + "<b>VIVEROS: </b>" + Number((p_vivero).toFixed(1)) + "%, ";	
								}							
								break;
							case 'VIÑEDO OCUPACIÓN PRINCIPAL':
								if(ha_viñedo_p != 0){
									chart_1.push([grupos_cultivo[i], ha_viñedo_p, 'color: #2e98ca']);
									p_viñedo_p = (ha_viñedo_p/ha_total)*100;
									html_porcentaje = html_porcentaje + "<b>VIÑEDO OCUPACIÓN PRINCIPAL: </b>" + Number((p_viñedo_p).toFixed(1)) + "%, ";	
								}							
								break;
							case 'OLIVAR':
								if(ha_olivar != 0){
									chart_1.push([grupos_cultivo[i], ha_olivar, 'color: #d84578']);
									p_olivar = (ha_olivar/ha_total)*100;
									html_porcentaje = html_porcentaje + "<b>OLIVAR: </b>" + Number((p_olivar).toFixed(1)) + "%, ";
								}							
								break;
							case 'OTROS CULTIVOS LEÑOSOS':
								if(ha_otros != 0){
									chart_1.push([grupos_cultivo[i], ha_otros, 'color: #3264d2']);
									p_otros = (ha_otros/ha_total)*100;
									html_porcentaje = html_porcentaje + "<b>OTROS CULTIVOS LEÑOSOS: </b>" + Number((p_otros).toFixed(1)) + "%, ";	
								}							
								break;
							case 'VIÑEDO ASOCIADO':
								if(ha_viñedo_a != 0){
									chart_1.push([grupos_cultivo[i], ha_viñedo_a, 'color: #d73c00']);	
									p_viñedo_a = (ha_viñedo_a/ha_total)*100;
									html_porcentaje = html_porcentaje + "<b>VIÑEDO ASOCIADO: </b>" + Number((p_viñedo_a).toFixed(1)) + "%, ";
								}							
								break;
						}	  					
					}
					if(chart_1.length > 1){
						html_porcentaje = html_porcentaje + "</p>";
						$("#porcentajes_1").html(html_porcentaje);	  				
						// Load google charts
						google.charts.load('current', {'packages':['corechart']});
						google.charts.setOnLoadCallback(drawChart1);
						// Draw the chart and set the chart values
						function drawChart1() {
							var data = google.visualization.arrayToDataTable(chart_1);
							var view = new google.visualization.DataView(data);
							view.setColumns([0, 1,
  								{ calc: "stringify",
	  								sourceColumn: 1,
	  								type: "string",
	  								role: "annotation" }, 2]);
	  						// Optional; add a title and set the width and height of the chart
	  						var options = {'title':'Nº de hectáreas en producción de cada grupo de cultivo', legend: 'none'};
	  						// Display the chart inside the <div> element with id="chart_1"
	  						var chart = new google.visualization.ColumnChart(document.getElementById('chart_1'));
	  						switch($("#select_grafica_1").val()){
								case 'barras_v':
									var chart = new google.visualization.ColumnChart(document.getElementById('chart_1'));
									break;
								case 'barras_h':
									var chart = new google.visualization.BarChart(document.getElementById('chart_1'));
									break;
								case 'circular':
									var chart = new google.visualization.PieChart(document.getElementById('chart_1'));
									break;
							}						
							chart.draw(view, options);
						}		
					}else{
	  					$("#porcentajes_1").html("<div class='alert alert-danger alert-dismissible'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Vaya!</strong> No hay datos disponibles :(, prueba con otros.</div>");	  											
					}  				
  				}
  				
  				function crear_chart2(){
	  				var aux;
  					var html_porcentaje = "<p>";
  					var chart_2 = [['Cultivo', 'Hectáreas', { role: 'style' }]];
	  				//Crear contadores hectáreas
	  				switch($("#select_grupo_2").val()){
		  				case 'FRUTALES':
		  					var ha_manzano = 0;
		  					var p_manzano = 0;
		  					var ha_higuera = 0;
		  					var p_higuera = 0;
		  					var ha_granado = 0;
		  					var p_granado = 0;
		  					var ha_peral = 0;
		  					var p_peral = 0;
		  					var ha_membrillo = 0;
		  					var p_membrillo = 0;
		  					var ha_nispero = 0;
		  					var p_nispero = 0;
		  					var ha_albaricoquero = 0;
		  					var p_albaricoquero = 0;
		  					var ha_cerezo_guindo = 0;
		  					var p_cerezo_guindo = 0;
		  					var ha_melocotonero = 0;
		  					var p_melocotonero = 0;
		  					var ha_ciruelo = 0;
		  					var p_ciruelo = 0;
		  					var ha_nogal = 0;
		  					var p_nogal = 0;
		  					var ha_almendro = 0;
		  					var p_almendro = 0;
		  					var ha_avellano = 0;
		  					var p_avellano = 0;
		  					var ha_azufuaifo_o = 0;
		  					var p_azufuaifo_o = 0;
		  					var ha_chirimoyo = 0;
		  					var p_chirimoyo = 0;
		  					var ha_aguacate = 0;
		  					var p_aguacate = 0;
		  					var ha_palmera = 0;
		  					var p_palmera = 0;
		  					var ha_chumbera = 0;
		  					var p_chumbera = 0;
		  					var ha_acerolo_o = 0;
		  					var p_acerolo_o = 0;
		  					var ha_castaño = 0;
		  					var p_castaño = 0;
		  					var ha_pistacho = 0;
		  					var p_pistacho = 0;
		  					var ha_azufuaifo_g_k = 0;
		  					var p_azufuaifo_g_k = 0;
		  					var ha_frambueso = 0;
		  					var p_frambueso = 0;
		  					var ha_kiwi = 0;
		  					var p_kiwi = 0;
		  					var ha_azufuaifo_g_k_o = 0;
		  					var p_azufuaifo_g_k_o = 0;
		  					var ha_azufuaifo_g_k_c = 0;
		  					var p_azufuaifo_g_k_c = 0;
		  					var ha_arandano = 0;
		  					var p_arandano = 0;
		  					var ha_nectarina = 0;
		  					var p_nectarina = 0;
		  					var ha_grosellero = 0;
		  					var p_grosellero = 0;
		  					break;
		  				case 'VIÑEDO':
		  					var ha_mesa = 0;
		  					var p_mesa = 0;
		  					var ha_vino = 0;
		  					var p_vino = 0;
		  					var ha_pasas = 0;
		  					var p_pasas = 0;
		  					break;
		  				case 'OLIVAR Y OTROS C.I.':
		  					var ha_aceite = 0;
		  					var p_aceite = 0;
		  					var ha_morera = 0;
		  					var p_morera = 0;
		  					var ha_mimbrero = 0;
		  					var p_mimbrero = 0;
		  					var ha_mesa = 0;
		  					var p_mesa = 0;
		  					break;
		  				case 'CITRICOS':
		  					var ha_naranjo = 0;
		  					var p_naranjo = 0;
		  					var ha_limonero = 0;
		  					var p_limonero = 0;
		  					break;
		  				case 'VIVEROS':
		  					var ha_viveros = 0;
		  					var p_viveros = 0;
		  					break;
		  				case 'VIÑEDO OCUPACIÓN PRINCIPAL':
		  					var ha_mesa = 0;
		  					var p_mesa = 0;
		  					var ha_vino = 0;
		  					var p_vino = 0;
		  					var ha_pasas = 0;
		  					var p_pasas = 0;
		  					break;
		  				case 'OLIVAR':
		  					var ha_aceite = 0;
		  					var p_aceite = 0;
		  					var ha_mesa = 0;
		  					var p_mesa = 0;
		  					break;
		  				case 'OTROS CULTIVOS LEÑOSOS':
		  					var ha_morera = 0;
		  					var p_morera = 0;
		  					var ha_mimbrero = 0;
		  					var p_mimbrero = 0;
		  					var ha_zumaque = 0;
		  					var p_zumaque = 0;
		  					break;
		  				case 'VIÑEDO ASOCIADO':
		  					var ha_vino = 0;
		  					var p_vino = 0;
		  					break;
	  				}
	  				json_file.forEach(function(item){
		  				aux = item.a_o.split("-");
	  					if((item.codigo_provincia == $("#select_provincia_2").val()) 
	  					&& (aux[0] == $("#select_año_2").val()) 
	  					&& (item.grupo_de_cultivo == $("#select_grupo_2").val())){
	  						switch($("#select_grupo_2").val()){
	  							case 'FRUTALES':
	  								switch(item.cultivo){
		  								case 'MANZANO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_manzano = ha_manzano + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_manzano = ha_manzano + parseInt(item.superficie_regad_o_en_producci_n);
			  								}
		  									break;
		  								case 'HIGUERA':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_higuera = ha_higuera + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_higuera = ha_higuera + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;
		  								case 'GRANADO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_granado = ha_granado + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_granado = ha_granado + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;
		  								case 'PERAL':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_peral = ha_peral + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_peral = ha_peral + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;
		  								case 'MEMBRILLO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_membrillo = ha_membrillo + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_membrillo = ha_membrillo + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;
		  								case 'NISPERO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_nispero = ha_nispero + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_nispero = ha_nispero + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;		  											  			  										case 'ALBARICOQUERO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_albaricoquero = ha_albaricoquero + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_albaricoquero = ha_albaricoquero + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  									
		  									break;										  						  										case 'CEREZO Y GUINDO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_cerezo_guindo = ha_cerezo_guindo + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_cerezo_guindo = ha_cerezo_guindo + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  									
		  									break;							  									  										case 'MELOCOTONERO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_melocotonero = ha_melocotonero + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_melocotonero = ha_melocotonero + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  									
		  									break;	
		  								case 'CIRUELO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_ciruelo = ha_ciruelo + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_ciruelo = ha_ciruelo + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;		  									
		  								case 'NOGAL':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_nogal = ha_nogal + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_nogal = ha_nogal + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;		  									
		  								case 'ALMENDRO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_almendro = ha_almendro + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_almendro = ha_almendro + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;		  									
		  								case 'AVELLANO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_avellano = ha_avellano + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_avellano = ha_avellano + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;
		  								case 'AZUFUAIFO Y OTROS':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_azufuaifo_o = ha_azufuaifo_o + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_azufuaifo_o = ha_azufuaifo_o + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;		  									
		  								case 'CHIRIMOYO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_chirimoyo = ha_chirimoyo + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_chirimoyo = ha_chirimoyo + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;		  									
		  								case 'AGUACATE':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_aguacate = ha_aguacate + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_aguacate = ha_aguacate + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;		  									
		  								case 'PALMERA DATILERA':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_palmera = ha_palmera + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_palmera = ha_palmera + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;		  											  			  										case 'CHUMBERA':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_chumbera = ha_chumbera + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_chumbera = ha_chumbera + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  									
		  									break;	
		  								case 'ACEROLO Y OTROS':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_acerolo_o = ha_acerolo_o + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_acerolo_o = ha_acerolo_o + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;		  									
		  								case 'CASTAÑO FRUTO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_castaño = ha_castaño + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_castaño = ha_castaño + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;		  									
		  								case 'PISTACHO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_pistacho = ha_pistacho + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_pistacho = ha_pistacho + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;		  									
		  								case 'AZUFUAIFO,GUAYABO,KAKI,FRAMBUESO Y OTROS':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_azufuaifo_g_k = ha_azufuaifo_g_k + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_azufuaifo_g_k = ha_azufuaifo_g_k + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;		  														  										case 'FRAMBUESO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_frambueso = ha_frambueso + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_frambueso = ha_frambueso + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  									
		  									break;
		  								case 'KIWI':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_kiwi = ha_kiwi + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_kiwi = ha_kiwi + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;		  									
		  								case 'AZUFUAIFO,GUAYABO,KAKI Y OTROS':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_azufuaifo_g_k_o = ha_azufuaifo_g_k_o + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_azufuaifo_g_k_o = ha_azufuaifo_g_k_o + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;		  									
		  								case 'AZUFAIFO, GUAYABO Y OTROS CARNOSOS':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_azufuaifo_g_k_c = ha_azufuaifo_g_k_c + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_azufuaifo_g_k_c = ha_azufuaifo_g_k_c + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;		  									
		  								case 'ARÁNDANO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_arandano = ha_arandano + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_arandano = ha_arandano + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;		  									
		  								case 'NECTARINA':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_nectarina = ha_nectarina + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_nectarina = ha_nectarina + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  								
		  									break;		  														  										case 'GROSELLERO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_grosellero = ha_grosellero + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_grosellero = ha_grosellero + parseInt(item.superficie_regad_o_en_producci_n);		  										
			  								}		  									
		  									break;		
	  								}
	  								break;
	  							case 'VIÑEDO':
	  								switch(item.cultivo){
		  								case 'VIÑEDO DE UVA MESA':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_mesa = ha_mesa + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_mesa = ha_mesa + parseInt(item.superficie_regad_o_en_producci_n);
			  								}
		  									break;
		  								case 'VIÑEDO DE UVA VINO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_vino = ha_vino + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_vino = ha_vino + parseInt(item.superficie_regad_o_en_producci_n);
			  								}		  								
		  									break;
		  								case 'VIÑEDO DE UVA PASAS':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_pasas = ha_pasas + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_pasas = ha_pasas + parseInt(item.superficie_regad_o_en_producci_n);
			  								}		  								
		  									break;
		  							}
	  								break;
	  							case 'OLIVAR Y OTROS C.I.':
	  								switch(item.cultivo){
		  								case 'OLI ACEITUNA ACEITE':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_aceite = ha_aceite + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_aceite = ha_aceite + parseInt(item.superficie_regad_o_en_producci_n);
			  								}
		  									break;
		  								case 'MORERA Y OTROS':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_morera = ha_morera + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_morera = ha_morera + parseInt(item.superficie_regad_o_en_producci_n);
			  								}		  								
		  									break;
		  								case 'MIMBRERO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_mimbrero = ha_mimbrero + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_mimbrero = ha_mimbrero + parseInt(item.superficie_regad_o_en_producci_n);
			  								}		  								
		  									break;
		  								case 'OLIVAR ACEIUNA MESA':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_mesa = ha_mesa + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_mesa = ha_mesa + parseInt(item.superficie_regad_o_en_producci_n);
			  								}		  								
		  									break;		  									
		  							}
	  								break;
	  							case 'CITRICOS':
	  								switch(item.cultivo){
		  								case 'NARANJO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_naranjo = ha_naranjo + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_naranjo = ha_naranjo + parseInt(item.superficie_regad_o_en_producci_n);
			  								}
		  									break;
		  								case 'LIMONERO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_limonero = ha_limonero + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_limonero = ha_limonero + parseInt(item.superficie_regad_o_en_producci_n);
			  								}		  								
		  									break;	  									
		  							}
	  								break;
	  							case 'VIVEROS':
	  								switch(item.cultivo){
		  								case 'VIVEROS':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_viveros = ha_viveros + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_viveros = ha_viveros + parseInt(item.superficie_regad_o_en_producci_n);
			  								}
		  									break;  									
		  							}
	  								break;
	  							case 'VIÑEDO OCUPACIÓN PRINCIPAL':
	  								switch(item.cultivo){
		  								case 'VIÑEDO DE UVA MESA':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_mesa = ha_mesa + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_mesa = ha_mesa + parseInt(item.superficie_regad_o_en_producci_n);
			  								}
		  									break;
		  								case 'VIÑEDO DE UVA VINO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_vino = ha_vino + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_vino = ha_vino + parseInt(item.superficie_regad_o_en_producci_n);
			  								}		  								
		  									break;	
		  								case 'VIÑEDO DE UVA PASAS Y VIVEROS':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_pasas = ha_pasas + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_pasas = ha_pasas + parseInt(item.superficie_regad_o_en_producci_n);
			  								}		  								
		  									break;		  									  									
		  							}
	  								break;
	  							case 'OLIVAR':
	  								switch(item.cultivo){
		  								case 'OLI ACEITUNA ACEITE':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_aceite = ha_aceite + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_aceite = ha_aceite + parseInt(item.superficie_regad_o_en_producci_n);
			  								}
		  									break;
		  								case 'OLIVAR ACEIUNA MESA':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_mesa = ha_mesa + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_mesa = ha_mesa + parseInt(item.superficie_regad_o_en_producci_n);
			  								}		  								
		  									break;	  									
		  							}
	  								break;
	  							case 'OTROS CULTIVOS LEÑOSOS':
	  								switch(item.cultivo){
		  								case 'MORERA Y OTROS':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_morera = ha_morera + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_morera = ha_morera + parseInt(item.superficie_regad_o_en_producci_n);
			  								}
		  									break;
		  								case 'MIMBRERO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_mimbrero = ha_mimbrero + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_mimbrero = ha_mimbrero + parseInt(item.superficie_regad_o_en_producci_n);
			  								}		  								
		  									break;	
		  								case 'ZUMAQUE':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_zumaque = ha_zumaque + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_zumaque = ha_zumaque + parseInt(item.superficie_regad_o_en_producci_n);
			  								}		  								
		  									break;		  									  									
		  							}
	  								break;
	  							case 'VIÑEDO ASOCIADO':
	  								switch(item.cultivo){
		  								case 'VIÑEDO DE UVA VINO':
		  									if(item.superficie_secano_en_producci_n != null){
		  										ha_vino = ha_vino + parseInt(item.superficie_secano_en_producci_n);
		  									}
		  									if(item.superficie_regad_o_en_producci_n != null){
		  										ha_vino = ha_vino + parseInt(item.superficie_regad_o_en_producci_n);
			  								}
		  									break;  									
		  							}
	  								break;
	  						}	  						
		  				}
		  			});
		  			var ha_total = 0;
		  			switch($('#select_grupo_2').val()){
			  			case 'FRUTALES':
			  				ha_total = ha_total + ha_manzano + ha_higuera + ha_granado + ha_peral + ha_membrillo + ha_nispero + ha_albaricoquero + ha_cerezo_guindo + ha_melocotonero + ha_ciruelo + ha_nogal + ha_almendro + ha_avellano + ha_azufuaifo_o + ha_chirimoyo + ha_aguacate + ha_palmera + ha_chumbera + ha_acerolo_o + ha_castaño + ha_pistacho + ha_azufuaifo_g_k + ha_frambueso + ha_kiwi + ha_azufuaifo_g_k_o + ha_azufuaifo_g_k_c + ha_arandano + ha_nectarina + ha_grosellero;
			  				break;
			  			case 'VIÑEDO':
			  				ha_total = ha_total + ha_mesa + ha_vino + ha_pasas;
			  				break;
			  			case 'OLIVAR Y OTROS C.I.':
			  				ha_total = ha_total + ha_aceite + ha_morera + ha_mimbrero + ha_mesa;
			  				break;
			  			case 'CITRICOS':
			  				ha_total = ha_total + ha_naranjo + ha_limonero;
			  				break;
			  			case 'VIVEROS':
			  				ha_total = ha_total + ha_viveros;
			  				break;
			  			case 'VIÑEDO OCUPACIÓN PRINCIPAL':
			  				ha_total = ha_total + ha_mesa + ha_vino + ha_pasas;
			  				break;
			  			case 'OLIVAR':
			  				ha_total = ha_total + ha_aceite + ha_mesa;
			  				break;
			  			case 'OTROS CULTIVOS LEÑOSOS':
			  				ha_total = ha_total + ha_morera + ha_mimbrero + ha_zumaque;
			  				break;
			  			case 'VIÑEDO ASOCIADO':
			  				ha_total = ha_total + ha_vino;
			  				break;
			  		}
		  			switch($('#select_grupo_2').val()){
			  			case 'FRUTALES':
			  				for(var i = 0; i < cultivo_frutales.length; i++){
				  				switch(cultivo_frutales[i]){
				  					case 'MANZANO':
				  						if(ha_manzano != 0){
				  							chart_2.push([cultivo_frutales[i], ha_manzano, 'color: #3264d2']);
				  							p_manzano = (ha_manzano/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>MANZANO: </b>" + Number((p_manzano).toFixed(1)) + "%, ";
										}
				  						break;
				  					case 'HIGUERA':
				  						if(ha_higuera != 0){
				  							chart_2.push([cultivo_frutales[i], ha_higuera, 'color: #d73c00']);
				  							p_higuera = (ha_higuera/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>HIGUERA: </b>" + Number((p_higuera).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'GRANADO':
				  						if(ha_granado != 0){
				  							chart_2.push([cultivo_frutales[i], ha_granado, 'color: #f79a00']);
				  							p_granado = (ha_granado/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>GRANADO: </b>" + Number((p_granado).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'PERAL':
				  						if(ha_peral != 0){
				  							chart_2.push([cultivo_frutales[i], ha_peral, 'color: #389600']);
				  							p_peral = (ha_peral/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>PERAL: </b>" + Number((p_peral).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'MEMBRILLO':
				  						if(ha_membrillo != 0){
				  							chart_2.push([cultivo_frutales[i], ha_membrillo, 'color: #94009f']);
				  							p_membrillo = (ha_membrillo/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>MEMBRILLO: </b>" + Number((p_membrillo).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'NISPERO':
				  						if(ha_nispero != 0){
				  							chart_2.push([cultivo_frutales[i], ha_nispero, 'color: #2e98ca']);
				  							p_nispero = (ha_nispero/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>NISPERO: </b>" + Number((p_nispero).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'ALBARICOQUERO':
				  						if(ha_albaricoquero != 0){
				  							chart_2.push([cultivo_frutales[i], ha_albaricoquero, 'color: #d84578']);
				  							p_albaricoquero = (ha_albaricoquero/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>ALBARICOQUERO: </b>" + Number((p_albaricoquero).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'CEREZO Y GUINDO':
				  						if(ha_cerezo_guindo != 0){
				  							chart_2.push([cultivo_frutales[i], ha_cerezo_guindo, 'color: #3264d2']);
				  							p_cerezo_guindo = (ha_cerezo_guindo/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>CEREZO Y GUINDO: </b>" + Number((p_cerezo_guindo).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'MELOCOTONERO':
				  						if(ha_melocotonero != 0){
				  							chart_2.push([cultivo_frutales[i], ha_melocotonero, 'color: #d73c00']);
				  							p_melocotonero = (ha_melocotonero/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>MELOCOTONERO: </b>" + Number((p_melocotonero).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'CIRUELO':
				  						if(ha_ciruelo != 0){
				  							chart_2.push([cultivo_frutales[i], ha_ciruelo, 'color: #f79a00']);
				  							p_ciruelo = (ha_ciruelo/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>CIRUELO: </b>" + Number((p_ciruelo).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'NOGAL':
				  						if(ha_nogal != 0){
				  							chart_2.push([cultivo_frutales[i], ha_nogal, 'color: #389600']);
				  							p_nogal = (ha_nogal/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>NOGAL: </b>" + Number((p_nogal).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'ALMENDRO':
				  						if(ha_almendro != 0){
				  							chart_2.push([cultivo_frutales[i], ha_almendro, 'color: #94009f']);
				  							p_almendro = (ha_almendro/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>ALMENDRO: </b>" + Number((p_almendro).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'AVELLANO':
				  						if(ha_avellano != 0){
				  							chart_2.push([cultivo_frutales[i], ha_avellano, 'color: #2e98ca']);
				  							p_avellano = (ha_avellano/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>AVELLANO: </b>" + Number((p_avellano).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'AZUFUAIFO Y OTROS':
				  						if(ha_azufuaifo_o != 0){
				  							chart_2.push([cultivo_frutales[i], ha_azufuaifo_o, 'color: #d84578']);
				  							p_azufuaifo_o = (ha_azufuaifo_o/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>AZUFUAIFO Y OTROS: </b>" + Number((p_azufuaifo_o).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'CHIRIMOYO':
				  						if(ha_chirimoyo != 0){
				  							chart_2.push([cultivo_frutales[i], ha_chirimoyo, 'color: #3264d2']);
				  							p_chirimoyo = (ha_chirimoyo/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>CHIRIMOYO: </b>" + Number((p_chirimoyo).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'AGUACATE':
				  						if(ha_aguacate != 0){
				  							chart_2.push([cultivo_frutales[i], ha_aguacate, 'color: #d73c00']);
				  							p_aguacate = (ha_aguacate/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>AGUACATE: </b>" + Number((p_aguacate).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'PALMERA DATILERA':
				  						if(ha_palmera != 0){
				  							chart_2.push([cultivo_frutales[i], ha_palmera, 'color: #f79a00']);
				  							p_palmera = (ha_palmera/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>PALMERA DATILERA: </b>" + Number((p_palmera).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'CHUMBERA':
				  						if(ha_chumbera != 0){
				  							chart_2.push([cultivo_frutales[i], ha_chumbera, 'color: #389600']);
				  							p_chumbera = (ha_chumbera/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>CHUMBERA: </b>" + Number((p_chumbera).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'ACEROLO Y OTROS':
				  						if(ha_acerolo_o != 0){
				  							chart_2.push([cultivo_frutales[i], ha_acerolo_o, 'color: #94009f']);
				  							p_acerolo_o = (ha_acerolo_o/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>ACEROLO Y OTROS: </b>" + Number((p_acerolo_o).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'CASTAÑO FRUTO':
				  						if(ha_castaño != 0){
				  							chart_2.push([cultivo_frutales[i], ha_castaño, 'color: #2e98ca']);
				  							p_castaño = (ha_castaño/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>CASTAÑO FRUTO: </b>" + Number((p_castaño).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'PISTACHO':
				  						if(ha_pistacho != 0){
				  							chart_2.push([cultivo_frutales[i], ha_pistacho, 'color: #d84578']);
				  							p_pistacho = (ha_pistacho/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>PISTACHO: </b>" + Number((p_pistacho).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'AZUFUAIFO,GUAYABO,KAKI,FRAMBUESO Y OTROS':
				  						if(ha_azufuaifo_g_k != 0){
				  							chart_2.push([cultivo_frutales[i], ha_azufuaifo_g_k, 'color: #3264d2']);
				  							p_azufuaifo_g_k = (ha_azufuaifo_g_k/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>AZUFUAIFO,GUAYABO,KAKI,FRAMBUESO Y OTROS: </b>" + Number((p_azufuaifo_g_k).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'FRAMBUESO':
				  						if(ha_frambueso != 0){
				  							chart_2.push([cultivo_frutales[i], ha_frambueso, 'color: #d73c00']);
				  							p_frambueso = (ha_frambueso/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>FRAMBUESO: </b>" + Number((p_frambueso).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'KIWI':
				  						if(ha_kiwi != 0){
				  							chart_2.push([cultivo_frutales[i], ha_kiwi, 'color: #f79a00']);
				  							p_kiwi = (ha_kiwi/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>KIWI: </b>" + Number((p_kiwi).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'AZUFUAIFO,GUAYABO,KAKI Y OTROS':
				  						if(ha_azufuaifo_g_k_o != 0){
				  							chart_2.push([cultivo_frutales[i], ha_azufuaifo_g_k_o, 'color: #389600']);
				  							p_azufuaifo_g_k_o = (ha_azufuaifo_g_k_o/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>AZUFUAIFO,GUAYABO,KAKI Y OTROS: </b>" + Number((p_azufuaifo_g_k_o).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'AZUFAIFO, GUAYABO Y OTROS CARNOSOS':
				  						if(ha_azufuaifo_g_k_c != 0){
				  							chart_2.push([cultivo_frutales[i], ha_azufuaifo_g_k_c, 'color: #94009f']);
				  							p_azufuaifo_g_k_c = (ha_azufuaifo_g_k_c/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>AZUFAIFO, GUAYABO Y OTROS CARNOSOS: </b>" + Number((p_azufuaifo_g_k_c).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'ARÁNDANO':
				  						if(ha_arandano != 0){
				  							chart_2.push([cultivo_frutales[i], ha_arandano, 'color: #2e98ca']);
				  							p_arandano = (ha_arandano/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>ARÁNDANO: </b>" + Number((p_arandano).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'NECTARINA':
				  						if(ha_nectarina != 0){
				  							chart_2.push([cultivo_frutales[i], ha_nectarina, 'color: #d84578']);
				  							p_nectarina = (ha_nectarina/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>NECTARINA: </b>" + Number((p_nectarina).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'GROSELLERO':
				  						if(ha_grosellero != 0){
				  							chart_2.push([cultivo_frutales[i], ha_grosellero, 'color: #3264d2']);
				  							p_grosellero = (ha_grosellero/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>GROSELLERO: </b>" + Number((p_grosellero).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  				}
			  				}
			  				break;
			  			case 'VIÑEDO':
			  				for(var i = 0; i < cultivo_viñedo.length; i++){
				  				switch(cultivo_viñedo[i]){
					  				case 'VIÑEDO DE UVA MESA':
				  						if(ha_mesa != 0){
				  							chart_2.push([cultivo_viñedo[i], ha_mesa, 'color: #3264d2']);
				  							p_mesa = (ha_mesa/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>VIÑEDO DE UVA MESA: </b>" + Number((p_mesa).toFixed(1)) + "%, ";				  							
										}					  				
					  					break;
					  				case 'VIÑEDO DE UVA VINO':
				  						if(ha_vino != 0){
				  							chart_2.push([cultivo_viñedo[i], ha_vino, 'color: #d73c00']);
				  							p_vino = (ha_vino/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>VIÑEDO DE UVA VINO: </b>" + Number((p_vino).toFixed(1)) + "%, ";				  							
										}					  				
					  					break;
					  				case 'VIÑEDO DE UVA PASAS':
				  						if(ha_pasas != 0){
				  							chart_2.push([cultivo_viñedo[i], ha_pasas, 'color: #f79a00']);
				  							p_pasas = (ha_pasas/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>VIÑEDO DE UVA PASAS: </b>" + Number((p_pasas).toFixed(1)) + "%, ";				  							
										}					  				
					  					break;
					  			}
					  		}			  			
			  				break;
			  			case 'OLIVAR Y OTROS C.I.':
			  				for(var i = 0; i < cultivo_olivar_o.length; i++){
				  				switch(cultivo_olivar_o[i]){
				  					case 'OLI ACEITUNA ACEITE':
				  						if(ha_aceite != 0){
				  							chart_2.push([cultivo_olivar_o[i], ha_aceite, 'color: #3264d2']);
				  							p_aceite = (ha_aceite/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>OLI ACEITUNA ACEITE: </b>" + Number((p_aceite).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'MORERA Y OTROS':
				  						if(ha_morera != 0){
				  							chart_2.push([cultivo_olivar_o[i], ha_morera, 'color: #d73c00']);
				  							p_morera = (ha_morera/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>MORERA Y OTROS: </b>" + Number((p_morera).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'MIMBRERO':
				  						if(ha_mimbrero != 0){
				  							chart_2.push([cultivo_olivar_o[i], ha_mimbrero, 'color: #f79a00']);
				  							p_mimbrero = (ha_mimbrero/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>MIMBRERO: </b>" + Number((p_mimbrero).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'OLIVAR ACEIUNA MESA':
				  						if(ha_mesa != 0){
				  							chart_2.push([cultivo_olivar_o[i], ha_mesa, 'color: #389600']);
				  							p_mesa = (ha_mesa/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>OLIVAR ACEIUNA MESA: </b>" + Number((p_mesa).toFixed(1)) + "%, ";				  							
										}				  						
				  						break;				  				
					  			}
					  		}			  			
			  				break;
			  			case 'CITRICOS':
			  				for(var i = 0; i < cultivo_citricos.length; i++){
				  				switch(cultivo_citricos[i]){
				  					case 'NARANJO':
				  						if(ha_naranjo != 0){
				  							chart_2.push([cultivo_citricos[i], ha_naranjo, 'color: #3264d2']);
				  							p_naranjo = (ha_naranjo/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>NARANJO: </b>" + Number((p_naranjo).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'LIMONERO':
				  						if(ha_limonero != 0){
				  							chart_2.push([cultivo_citricos[i], ha_limonero, 'color: #d73c00']);
				  							p_limonero = (ha_limonero/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>LIMONERO: </b>" + Number((p_limonero).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;					  				
					  			}
					  		}			  			
			  				break;
			  			case 'VIVEROS':
			  				for(var i = 0; i < cultivo_viveros.length; i++){
				  				switch(cultivo_viveros[i]){
					  				case 'VIVEROS':
				  						if(ha_viveros != 0){
				  							chart_2.push([cultivo_viveros[i], ha_viveros, 'color: #3264d2']);
				  							p_viveros = (ha_viveros/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>VIVEROS: </b>" + Number((p_viveros).toFixed(1)) + "%, ";				  							
										}					  				
					  					break;
					  			}
					  		}			  			
			  				break;
			  			case 'VIÑEDO OCUPACIÓN PRINCIPAL':
			  				for(var i = 0; i < cultivo_viñedo_p.length; i++){
				  				switch(cultivo_viñedo_p[i]){
				  					case 'VIÑEDO DE UVA MESA':
				  						if(ha_mesa != 0){
				  							chart_2.push([cultivo_viñedo_p[i], ha_mesa, 'color: #3264d2']);
				  							p_mesa = (ha_mesa/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>VIÑEDO DE UVA MESA: </b>" + Number((p_mesa).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'VIÑEDO DE UVA VINO':
				  						if(ha_vino != 0){
				  							chart_2.push([cultivo_viñedo_p[i], ha_vino, 'color: #d73c00']);
				  							p_vino = (ha_vino/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>VIÑEDO DE UVA VINO: </b>" + Number((p_vino).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'VIÑEDO DE UVA PASAS Y VIVEROS':
				  						if(ha_pasas != 0){
				  							chart_2.push([cultivo_viñedo_p[i], ha_pasas, 'color: #f79a00']);
				  							p_pasas = (ha_pasas/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>VIÑEDO DE UVA PASAS Y VIVEROS: </b>" + Number((p_pasas).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;					  				
					  			}
					  		}			  			
			  				break;
			  			case 'OLIVAR':
			  				for(var i = 0; i < cultivo_olivar.length; i++){
				  				switch(cultivo_olivar[i]){
				  					case 'OLI ACEITUNA ACEITE':
				  						if(ha_aceite != 0){
				  							chart_2.push([cultivo_olivar[i], ha_aceite, 'color: #3264d2']);
				  							p_aceite = (ha_aceite/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>OLI ACEITUNA ACEITE: </b>" + Number((p_aceite).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'OLIVAR ACEIUNA MESA':
				  						if(ha_mesa != 0){
				  							chart_2.push([cultivo_olivar[i], ha_mesa, 'color: #d73c00']);
				  							p_mesa = (ha_mesa/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>OLIVAR ACEIUNA MESA: </b>" + Number((p_mesa).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;					  				
					  			}
					  		}			  			
			  				break;
			  			case 'OTROS CULTIVOS LEÑOSOS':
			  				for(var i = 0; i < cultivo_otros.length; i++){
				  				switch(cultivo_otros[i]){
				  					case 'MORERA Y OTROS':
				  						if(ha_morera != 0){
				  							chart_2.push([cultivo_otros[i], ha_morera, 'color: #3264d2']);
				  							p_morera = (ha_morera/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>MORERA Y OTROS: </b>" + Number((p_morera).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'MIMBRERO':
				  						if(ha_mimbrero != 0){
				  							chart_2.push([cultivo_otros[i], ha_mimbrero, 'color: #d73c00']);
				  							p_mimbrero = (ha_mimbrero/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>MIMBRERO: </b>" + Number((p_mimbrero).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;
				  					case 'ZUMAQUE':
				  						if(ha_zumaque != 0){
				  							chart_2.push([cultivo_otros[i], ha_zumaque, 'color: #f79a00']);
				  							p_zumaque = (ha_zumaque/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>ZUMAQUE: </b>" + Number((p_zumaque).toFixed(1)) + "%, ";				  							
										}				  					
				  						break;					  				
					  			}
					  		}			  			
			  				break;
			  			case 'VIÑEDO ASOCIADO':
			  				for(var i = 0; i < cultivo_viñedo_a.length; i++){
				  				switch(cultivo_viñedo_a[i]){
					  				case 'VIÑEDO DE UVA VINO':
				  						if(ha_vino != 0){
				  							chart_2.push([cultivo_viñedo_a[i], ha_vino, 'color: #3264d2']);
				  							p_vino = (ha_vino/ha_total)*100;
				  							html_porcentaje = html_porcentaje + "<b>VIÑEDO DE UVA VINO: </b>" + Number((p_vino).toFixed(1)) + "%, ";				  							
										}					  				
					  					break;
					  			}
					  		}			  			
			  				break;		
		  			}
		  			if(chart_2.length <= 1){
	  					console.log('No hay datos');
	  					$("#porcentajes_2").html("<div class='alert alert-danger alert-dismissible'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Vaya!</strong> No hay datos disponibles :(, prueba con otros.</div>");	  					
  					}else{
	  					html_porcentaje = html_porcentaje + "</p>";
	  					$("#porcentajes_2").html(html_porcentaje);
	  					google.charts.load('current', {packages: ['corechart']});
	  					google.charts.setOnLoadCallback(drawChart2);
	  					function drawChart2() {
  							var data = google.visualization.arrayToDataTable(chart_2);
  							var view = new google.visualization.DataView(data);
  							view.setColumns([0, 1,
  								{ calc: "stringify",
	  								sourceColumn: 1,
	  								type: "string",
	  								role: "annotation" }, 2]); 
							var options = {'title':'Nº de hectáreas en producción de cada cultivo', legend: 'none'};
							// Instantiate and draw the chart.
							switch($("#select_grafica_2").val()){
								case 'barras_v':
									var chart = new google.visualization.ColumnChart(document.getElementById('chart_2'));
									break;
								case 'barras_h':
									var chart = new google.visualization.BarChart(document.getElementById('chart_2'));
									break;
								case 'circular':
									var chart = new google.visualization.PieChart(document.getElementById('chart_2'));
									break;
							}
							chart.draw(view, options);	  						
         				}
	  				}

  				}
  				$(window).resize(function(){
	  				if(chart_1.length > 1){
		  				drawChart1();	
	  				}
 	  				if(chart_2.length > 1){
		  				drawChart2();	
	  				}
	  				if(chart_3.length > 1){
		  				drawChart3();	
	  				}
	  				if(chart_4.length > 1){
		  				drawChart4();	
	  				}	  					  				 					
				});			
			});