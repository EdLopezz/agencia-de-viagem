const verHotel = document.querySelector('#verHotel')
let pais = document.querySelector('#pais')
console.log(pais.value)
const paisResultado = document.querySelector('#lugaresPaisResultado')
const lugaresPais = document.querySelector('#lugaresPais')
verHotel.onclick = adicionarLugares

function adicionarLugares(){

    

if(pais.value == "arg"){
    console.log('ei')
        const lugaresArg = new Array (
            'Buenos Aires',
            'Mendoza',
            'Bariloche'     
             )
        
             lugaresArg.forEach(text => {
               
               
                let lugaresArgOption = document.createElement('option')

                lugaresArgOption.innerHTML = text
                let op = text
               lugaresPais.append(lugaresArgOption)
                
               if(lugaresArgOption.value == lugaresArg[0]){
                   console.log("fionego")
               }

             })

}
else if(pais.value =='chi'){
    console.log('oi')
    const lugaresChi = new Array (
        '',
        'Ilha de Páscoa',
        'Santiago',
        'Val Paraiso'     
         )
        
         const lugaresPais = document.querySelector('#lugaresPais')

         lugaresChi.forEach(texto => {
            
           
            let lugaresChiOption = document.createElement('option')
            
            lugaresChiOption.innerHTML = texto
           lugaresPais.append(lugaresChiOption)

         })

 }
}

function valores(){
    const imagemResultado = document.querySelector('#imagemResultado')
    const textoApresentacao = document.querySelector('#textoApresentacao')
    const lugaresChi = new Array (
        '',
        'Ilha de Páscoa',
        'Santiago',
        'Val Paraiso'     
         )
      console.log(lugaresPais.value)
    if(lugaresPais.value == lugaresChi[1]){
        imagemResultado.src = './ilha-de-pascoa.jpg'
        textoApresentacao.innerHTML = `A Ilha de Páscoa ganhou esse nome por ter sido encontrada num domingo de Páscoa de 1722, quando o holandês Jakob Roggeveen desembarcou por lá. Desde então, o local passou por diversas mãos e foi dominado por europeus até 1888, quando um acordo comercial o anexou ao Chile`
        

    }else if(lugaresPais.value == lugaresChi[2]){
        imagemResultado.src = './santiago.jpg'
        textoApresentacao.innerHTML = `Santiago é a principal cidade da Região Metropolitana. Tem mais de seis milhões de habitantes e é característica por seu avançado desenvolvimento no nível latino-americano.`

    }else if(lugaresPais.value == lugaresChi[3]){
        imagemResultado.src = './valparaiso.jpg'
        textoApresentacao.innerHTML = `Ser cativado pela arquitectura louca da Cidade Património da Humanidade”. Caminhe pelas suas ruas estreitas, escadas infinitas, elevadores históricos e os seus muitos miradouros. Desfrute da ale-gria dos seus carnavais e espectaculares espectáculos de fogo-de-artifício que dizem adeus às festi-vidades do Ano Novo a partir do mar.`

    }


}

valores(lugaresPais.text)
