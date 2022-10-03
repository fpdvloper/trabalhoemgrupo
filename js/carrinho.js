

var arr = []

document.addEventListener('DOMContentLoaded',(e)=>{
    
    if (localStorage.getItem('carrinhoStorage') === null || localStorage.getItem('carrinhoStorage') === 'null') {
      //carrinho nulo
      arr = []

    }else{
      //carrinho com conteudo
      arr =  JSON.parse(localStorage.getItem('carrinhoStorage'))
    }
    document.querySelector('.carrinho').innerHTML=''
    //arr.push(e)
    localStorage.setItem('carrinhoStorage',JSON.stringify(arr))
    document.querySelector('.quantidade').innerHTML=arr.length
    arr.map(item=>{  
         return  document.querySelector('.carrinho').innerHTML+='<div class="itemCarrinho">'+
            '<div class="itemCarrinhoLeft">'+
                `<img src="${item.img}"/>`+
                '<div class="">'+
                        '<div>'+item.nome + '</div>'+
                        '<div>'+item.preco + '</div>'+
                '</div>'+
            '</div>'+    
           `<button class="btnDelete" id="${item.id}" onclick="deletarItemDoCarrinho(${item.id})" >EXCLUIR</button>`+
        '</div>'
    })
   return  console.log('teste')
})





var quantidade = 0
const deletarItemDoCarrinho = (id)=>{


    let aux = arr.filter(elem=>{
        if (elem.id !== id) {
            return elem
        }
    })
    arr = aux
    localStorage.setItem('carrinhoStorage',JSON.stringify(arr))
    document.querySelector('.quantidade').innerHTML=arr.length
    document.querySelector('.carrinho').innerHTML=''
    arr.map(item=>{  
        return  document.querySelector('.carrinho').innerHTML+='<div class="itemCarrinho">'+
           '<div class="itemCarrinhoLeft">'+
               `<img src="${item.img}"/>`+
               '<div class="">'+
                       '<div>'+item.nome + '</div>'+
                       '<div>'+item.preco + '</div>'+
               '</div>'+
           '</div>'+    
          `<button class="btnDelete" id="${item.id}" onclick="deletarItemDoCarrinho(${item.id})" >EXCLUIR</button>`+
       '</div>'
   })
}

function adicionarCarrinho(e) {
    swal({
        title: "Obrigado!",
        text: "Seu produto foi adicionado no carrinho",
        icon: "success",
        timer: 3000,
})
    document.querySelector('.carrinho').innerHTML=''
    arr.push(e)
    localStorage.setItem('carrinhoStorage',JSON.stringify(arr))
    document.querySelector('.quantidade').innerHTML=arr.length
    arr.map(item=>{  
         return  document.querySelector('.carrinho').innerHTML+='<div class="itemCarrinho">'+
            '<div class="itemCarrinhoLeft">'+
                `<img src="${item.img}"/>`+
                '<div class="">'+
                        '<div>'+item.nome + '</div>'+
                        '<div>'+item.preco + '</div>'+
                '</div>'+
            '</div>'+    
           `<button class="btnDelete" id="${item.id}" onclick="deletarItemDoCarrinho(${item.id})" >EXCLUIR</button>`+
        '</div>'
    })
}
var selecionado = false;
function mostrarCarrinho(parm){
    if (parm == true) {
        document.querySelector('.fundoCarrinho').classList.add('visivel')
        document.querySelector('.conteudoDoCarrinho').classList.add('carrVisivel')

        selecionado= true
    } else {
        document.querySelector('.fundoCarrinho').classList.remove('visivel')
        document.querySelector('.conteudoDoCarrinho').classList.remove('carrVisivel')
        selecionado= false
    }
}