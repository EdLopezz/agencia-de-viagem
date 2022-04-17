const verHotel = document.querySelector('#verHotel')
let pais = document.querySelector('#pais')
console.log(pais.value)
const paisResultado = document.querySelector('#lugaresPaisResultado')
const lugaresPais = document.querySelector('#lugaresPais')
verHotel.onclick = adicionarLugares

function adicionarLugares(){

    lugaresPais.innerHTML = ""

if(pais.value == "arg"){

        const lugaresArg = new Array (
            '',
            'Buenos Aires',
            'Mendoza',
            'Bariloche'     
             )
        
             lugaresArg.forEach(text => {
               
               
                let lugaresArgOption = document.createElement('option')

                lugaresArgOption.innerHTML = text
               lugaresPais.append(lugaresArgOption)
             })


}
else if(pais.value =='chi'){

    

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
    const hoteisResultado = document.querySelector('#hoteisResultado')
    const hoteisApresentacao = document.querySelector('#hoteisApresentacao')

    const lugaresArg = new Array (
        '',
        'Buenos Aires',
        'Mendoza',
        'Bariloche'     
         )

    const lugaresChi = new Array (
        '',
        'Ilha de Páscoa',
        'Santiago',
        'Val Paraiso'     
         )
      

    if(lugaresPais.value == lugaresArg[1]){
        
        imagemResultado.src = './buenosaries-hotel.jpg'
        textoApresentacao.innerHTML = `O outono e a primavera são as melhores épocas do ano para ir. Além da cidade ficar linda, principalmente na primavera, as temperaturas são bem agradáveis. O inverno não é tão rigoroso, mas é, definitivamente, mais frio do que boa parte do Brasil. No entanto, para quem gosta de temperaturas mais baixas é uma ótima opção, afinal, a cidade fica um charme. Já no verão o calor é intenso e o clima fica bem úmido – leve o guarda-chuva, hein? No geral, a chuva é bem distribuída ao longo do ano e as estações são bem definidas!`

        hoteisResultado.src  = './buenoaires-opcao.jpg'
        hoteisApresentacao.innerHTML = `<h2> La Casona del Alma </h2> </br>Situado a apenas 500 m da Rua Florida, o La Casona del Alma oferece apartamentos completos com Wi-Fi gratuito e TV a cabo no centro de Buenos Aires. A propriedade dispõe de terraço, e fica a 400 m da Plaza de Mayo, a principal praça da região.`

    }else if(lugaresPais.value == lugaresArg[2]){
        imagemResultado.src = './mendoza-hotel.jpg'
        textoApresentacao.innerHTML = `Mendoza é a capital da província de Mendoza na Argentina. Ela está localizada em uma região de contrafortes e altas planícies, no lado leste da Cordilheira dos Andes.

        Mendoza tem cerca de 150 mil habitantes, com uma população metropolitana de 1.200.000, tornando a Grande Mendoza a quarta maior área metropolitana da Argentina.`

        hoteisResultado.src  = './mendoza-opcao.jpg'
        hoteisApresentacao.innerHTML = `<h2>Villaggio Hotel Boutique </h2> </br>O Villaggio Hotel Boutique está localizado em Mendoza, a apenas 1 quarteirão do Cassino de Mendoza e da Plaza Independencia. Esta propriedade tem piscina, banheira de hidromassagem e spa com academia, localizado no 5º andar. Um estacionamento privativo está disponível por um custo extra.

        Os quartos do Villaggio Hotel são modernos, espaçosos e possuem móveis elegantes e decoração com obras de arte. As unidades incluem uma área de estar. Todas as acomodações têm TV LCD a cabo. O Wi-Fi gratuito está à sua disposição em todas as áreas.`

    }else if(lugaresPais.value == lugaresArg[3]){
        imagemResultado.src = './bariloche-hotel.jpg'
        textoApresentacao.innerHTML = `Oficialmente San Carlos de Bariloche é uma cidade da Argentina, localizada na província de Rio Negro, junto à Cordilheira dos Andes, na fronteira com o Chile.

        Com uma localização privilegiada de belezas naturais, é rodeada por lagos, como o Nahuel Huapi e Gutiérrez, e montanhas, como Centro Catedral e o Cerro López.`

        hoteisResultado.src  = './bariloche-opcao.jpg'
        hoteisApresentacao.innerHTML = `<h2>Selina Bariloche </h2> </br>Localizado em San Carlos de Bariloche, a menos de 1 km da Playa del Centro, o Selina Bariloche oferece acomodação com restaurante, estacionamento privativo gratuito, bar e lounge compartilhado. Dispondo de um jardim, o hotel fica a cerca de 1,6 km do Centro Cívico, a menos de 1 km do Clube Andino de Bariloche e a 20 minutos a pé do cassino Tresor. Uma recepção 24 horas, transfer (aeroporto), cozinha compartilhada e Wi-Fi gratuito em todas as áreas estão à sua disposição neste hotel.`

    }

    //Chile

    if(lugaresPais.value == lugaresChi[1]){
        imagemResultado.src = './ilha-de-pascoa.jpg'
        textoApresentacao.innerHTML = `A Ilha de Páscoa ganhou esse nome por ter sido encontrada num domingo de Páscoa de 1722, quando o holandês Jakob Roggeveen desembarcou por lá. Desde então, o local passou por diversas mãos e foi dominado por europeus até 1888, quando um acordo comercial o anexou ao Chile`
        hoteisResultado.src  = './ilha-pascoa-hotel.jpg'
        hoteisApresentacao.innerHTML = `<h2> Hotel Hare Uta </h2> </br>Com um spa, piscina ao ar livre e restaurante, o Hotel Hare Noi Rapanui oferece acomodações em Hanga Roa. O Wi-Fi está disponível, mas a conexão é limitada.

        Os quartos foram inspirados nas casas dos primeiros habitantes da ilha e dispõem de piso em parquet, móveis elegantes e banheiro privativo.
        
        Para sua comodidade, pratos internacionais são servidos no restaurante da casa.`

        

    }else if(lugaresPais.value == lugaresChi[2]){
        imagemResultado.src = './santiago.jpg'
        textoApresentacao.innerHTML = `Santiago é a principal cidade da Região Metropolitana. Tem mais de seis milhões de habitantes e é característica por seu avançado desenvolvimento no nível latino-americano.`
        hoteisResultado.src  = './santiago-hotel.jpg'
        hoteisApresentacao.innerHTML = `<h2> Icon Hotel </h2> </br>Oferecendo uma piscina na cobertura com vistas panorâmicas da Cordilheira dos Andes, o Icon Hotel está localizado em Santiago, no bairro de Las Condes. Você pode desfrutar do restaurante no local e do bar na cobertura. O estacionamento privativo no local é gratuito, e há Wi-Fi disponível em todos os quartos.

        Os quartos possuem ar-condicionado e TV de tela plana a cabo. Todos contam com banheiro privativo com bidê e chuveiro. Para o seu conforto, produtos de banho e secador de cabelo estão incluídos.`

    }else if(lugaresPais.value == lugaresChi[3]){
        imagemResultado.src = './valparaiso.jpg'
        textoApresentacao.innerHTML = `Ser cativado pela arquitectura louca da Cidade Património da Humanidade”. Caminhe pelas suas ruas estreitas, escadas infinitas, elevadores históricos e os seus muitos miradouros. Desfrute da ale-gria dos seus carnavais e espectaculares espectáculos de fogo-de-artifício que dizem adeus às festi-vidades do Ano Novo a partir do mar.`
        hoteisResultado.src  = './valparaiso-hotel.jpg'
        hoteisApresentacao.innerHTML = `<h2> Hotel Winebox Valparaiso </h2> </br>Oferecendo uma piscina na cobertura com vistas panorâmicas da Cordilheira dos Andes, o Icon Hotel está localizado em Santiago, no bairro de Las Condes. Você pode desfrutar do restaurante no local e do bar na cobertura. O estacionamento privativo no local é gratuito, e há Wi-Fi disponível em todos os quartos.

        Os quartos possuem ar-condicionado e TV de tela plana a cabo. Todos contam com banheiro privativo com bidê e chuveiro. Para o seu conforto, produtos de banho e secador de cabelo estão incluídos.`

    }


}

valores(lugaresPais.text)


//Mobile Menu

const mobileMenu = document.getElementById('mobileMenu')

function toggleMenu(){
    const nav = document.getElementById('navbar')

    nav.classList.toggle('active')
}

mobileMenu.addEventListener('click' , toggleMenu)