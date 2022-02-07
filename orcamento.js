function calc(){

    const pais = document.getElementById("pais")
    const valor = pais.value
    const indice = pais.selectedIndex
    const text = pais.options[indice].text
     
    // tags do html para completar

     const res = document.getElementById('res')
     const lugar = document.getElementById("lugar")
     const qpessoas = document.getElementById("qpessoas")   
     const qdias = document.getElementById("qdias")   
     const qcom = document.getElementById("qcom")      
     const qpass = document.getElementById('qpass')
    
     
    
     //Número de pessoas

    if( valor == "arg" || valor == "chi"){
      
        lugar.innerHTML= text 
        const pes = document.getElementById("pes").value
        var npes = Number(pes)
        if(npes == 0 || npes<0 ) {
            alert("ERR0 : 0 (ZERO) não é um valor válido.")
        }else if(npes == 1 ){
            var hot = 100
            
        }else if(npes == 2 ){
            var hot = 150
            
        }else if(npes == 3){
            var hot = 3
        
        }else if( npes>=4 && npes <= 6 ){
            var hot = 315
            
        }else {
            qdias.innerHTML = "Nossos pacotes coportam o número máximo de 6 pessoas "
        }

        qpessoas.innerHTML = npes // Número de pessoas
        

    }
    const nnpes =npes
    const vhot = hot 

    // Calcúlo pessoas x noites no hotel

    const dias = document.getElementById("dias")
    const ndias = Number(dias.value)

    const totaldias = ndias*vhot
    qdias.innerHTML= ndias //Número de dias

    //Comida e Passagem

    const vcom = document.getElementById("com").value
    qcom.innerHTML = vcom//comida

    const vpass = document.getElementById("pas").value
    qpass.innerHTML= vpass//passagem

    //Estimativa das pessoas

    const qtotal  = document.getElementById("qtotal")
    qtotal.innerHTML= parseInt(vpass)+parseInt(vcom)+parseInt(vhot)

    //Resultado da máquina

    if(valor == "arg"){
        var rcom = 50
        var rpass = 2500
        var chip = 50
        var seg = 100
        var emerg = 150
    }else if(valor == "chi"){
        var rcom = 30
        var rpass = 1500
        var chip = 30
        var seg = 80
        var emerg = 150
    }

    const fcom = rcom
    const fpass = parseInt(rpass)*parseInt(nnpes)
    const cchip = chip
    const cseg = seg
    const cemerg = emerg
    const cvhot  = parseInt(vhot)*parseInt(nnpes)
    const tviagem = (fcom+fpass+cchip+cseg+cemerg+cvhot)



    const restext = document.getElementById("restext")
    restext.innerHTML=`O valor de uma passagem passagem para ${text} está em ${fpass} reais para ${nnpes} pessoas. A alimentação diaria fica em torno de ${fcom} reais. O hotel para ${nnpes} pessoas por ${ndias} dias é de ${cvhot} reais. Para ${nnpes} pessoas o valor total da com seguro(${cseg}) e chip(${cchip}) para territorio estrangeiro ficaria em tornode  ${tviagem} reais.(Somado o seguro de ${cemerg} reais ).`    

}