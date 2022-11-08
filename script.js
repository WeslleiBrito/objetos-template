
8/*const estudante = {
    nome: 'Wesllei',
    sobrenome: 'Brito',
    numeroMatricula: 1992,
    notas: [8.5, 9.5]
}

estudante.modulo = 'Java Script'

const novoEstudante = {
    ...estudante,
    nome: 'Santos',
    estudante: [...estudante.notas, 9], 
    modulo: 'HTML'

}

console.log(estudante)
console.log(novoEstudante)*/

const carrinho = {
    nome: 'Maria',
    formaDePagamento: 'Boleto',
    endereco: {estado: 'Bahia', cidade: 'Feira de Santana', bairro: 'Tomba', rua: 'Regina Regis', numero: '171'}
}

const compras = [
    {nome: 'Iphone 13', preco: 6000.00, quantidade: 1},
    {nome: 'Tablet', preco: 1500.00, quantidade: 1},
    {nome: 'headset GP20', preco: 290.00, quantidade: 1}
]

carrinho.produtos = [...compras]

quantidadeCompras = carrinho.produtos.length
console.log('A quantidade de itens no carrinho é:', quantidadeCompras)

const carrinhoPresente = {
    ...carrinho,
    nome: 'Wesllei',
    formaDePagamento: 'Cartão presente'
}
