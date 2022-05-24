function desenharGraficoPizza(){

	var tabela = new google.visualization.DataTable();

	tabela.addColumn('string', 'Categorias');
	tabela.addColumn('number','Tecnologia');
	tabela.addColumn('number', 'Marketing');
	tabela.addColumn('number', 'Administrativo');
	tabela.addColumn('number', 'Linhas de crédito');
	tabela.addColumn('number', 'Segurança');
	tabela.addColumn('number', 'Atendimento ao cliente');

	//tabela.addColumn({ type: 'string', role: "style" });
	//tabela.addColumn({ type: 'number', role: "annotation" })

		tabela.addRows([
			//['Tecnologia', 47814, "color:#a6a6a6", 47814],
			//['Marketing', 22552, "color:#a6a6a6", 22552],
			//['Administrativo', 65243, "color:#1b9af5", 65243],
			//['Linhas de crédito', 55504, "color:#a6a6a6", 55504],
			//['Segurança', 86085, "color:#f5921b", 86085 ],
			//['Atendimento ao cliente', 12605, "color:#a6a6a6", 12605 ]

			["Categorias", 47814,
			22552,
			65243,
			55504,
			86085,
			12605]
		]);	

		tabela.sort({column: 1, asc: true});

		var opcoes = {
			title:'Gastos por unidade de negócio',
			height: 400,
			width: 1000,
			legend: 'none',

			titleTextStyle: 
				{ 
					color: '#5e5851',
					fontName: 'Arial',
					fontSize: 20,
					bold: true,
					italic: false 
				},
			chartArea:
				{
					left: 160,
					top: 100,
					width:'70%',
					height:'70%'
				},

/* 			series: {
				0:{color: "#A6A6A6"},
				1:{color: "#A6A6A6"},
				2:{color: "#F5921B"},
				3:{color: "#A6A6A6"},
				4:{color: "#1B9AF5"},
				5:{color: "#A6A6A6"}
			}, */

			hAxis: { 
				gridlines: {count: 0}
			},
			isStacked: true
		}
	
	var grafico = new google.visualization.BarChart(document.getElementById('graficoPizza'));
            grafico.draw(tabela, opcoes);
    
}