function calcularEdat(){//funció per validar que l'empleat tengui més de 18 anys
    var datanaix=new Date ($("#datanaix").val());
    var avui=new Date();
    var edat=parseInt((avui -datanaix)/365/24/60/60/1000);
    if(edat<18){
        alert ("L'empleat té menys de 18 anys");
        return false;
    }else{
        return edat;
    }
}

function calcularSalariNet(){
    var salari=$("#salari").val();
    var irpf=$("#irpf").val();
    var salariNet=salari-(salari*irpf/100);
    return salariNet;
}
    
     
    function info(){//funció per mostrar les dades en un alert
        var edat=calcularEdat();
        var salNet=calcularSalariNet();
        if(calcularEdat){
            var nom=$("#nom").val();
            var llinatges=$("#llinatges").val();
            
            alert ("NOM I LLINATGES: "+nom +llinatges+"\n"+"EDAT: "+edat+"\n"+"SALARI NET: "+salNet);
            document.getElementById("formulari").reset();
            return false;
        }else{
            document.getElementById("formulari").reset();
            return false;
        } 
    }