var pessoa = {
	nome: 'William Balbino',
	cargo: 'Estudante de SI - Facisa',
	foto: 'william.png'
}

document.getElementById('nome-cabecalho').innerHTML = pessoa.nome;
document.getElementById('cargo-cabecalho').innerHTML = pessoa.cargo;
document.getElementById('img-cabecalho').src = pessoa.foto;	