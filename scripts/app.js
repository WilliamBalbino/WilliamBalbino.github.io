var app =  angular.module('sitePessoal', ['ngRoute']);


app.controller('mainController', function($scope) {
	$scope.nome = 'William Balbino';
	$scope.cargo = 'Estudante de Sistemas de Informação - UniFacisa';
	$scope.foto = 'images/william.png';

	$scope.resumo = [
		'Graduando do 8º período de Sistemas de Informação pela Unifacisa.', 
		'Iniciando as pesquisas para o TCC na area de Engenharia de software, com o tema provisório "Utilizando metaheurísticas para solucionar	problemas de prioridade de testes"'
	];

	$scope.curso = [
		{
			data: ' 2017',
			descricao: 'Jornada de cursos de desenvolvimento WEB LTI'
		}
	];

	$scope.academico = [
		'Graduando do 8º período de Sistemas de Informação pela UniFacisa.'
	];

	$scope.ano = new Date().getFullYear();
	
});