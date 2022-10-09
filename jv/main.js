document.addEventListener("DOMContentLoaded",function(e){
    document.querySelectorAll('.descripcion');

    let alturas = [];
    let alturaMaxima=0;
    const aplicarAlturas =(function aplicarAlturas(){
        parrafos.array.forEach(parrafo => {
            if(alturaMaxima ==0){
                alturas.push(parrafo.clienteHeight);
            }else{
                parrafo.style.height=`+px`;
            }
            return aplicarAlturas;
        });
    })();
    alturaMaxima =Math.max.apply(Math,alturas)
    aplicarAlturas();

});
