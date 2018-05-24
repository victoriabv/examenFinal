/*Funció per validar que l'empleat tengui més de 18 anys.
Li passam l'edat per paràmetre i ho restam al data da'vui. 
Si l'empleat té menys de 18 mostra un alert i retorna false;
si l'empleat té 18 anys o més retorna l'edat, que serà usada
a la funció "info"*/
function calcularEdat(){
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

/*Funció per calcular el salari net.
Li passa el salari brut per paràmetre i li restam el percentatge de l'IRPF.
Retorna sempre el salari net que s'usa a la funció "info"*/
function calcularSalariNet(){
    var salari=$("#salari").val();
    var irpf=$("#irpf").val();
    var salariNet=salari-(salari*irpf/100);
    return salariNet;
}

/*Funció per assegurar que el password té més de 10 caràcters.
Li passam el password per paràmetre i amb el methode "lenght"
miram la seva extensió*/
function comprovarPassword(){
    var pass=$("#password").val();
    var mida=pass.length;
    if(mida<10){
        alert ("El password ha de tenir com a mínim 10 caràcters");
        return false;
    }
    return password;
}

/*Funció mostrar les dades en un alert, es mostren: nom i llinatge, edat i salari net.
Només es mostren les dades si la funció "calcularEdat" ha retornat una edat*/
function info(){//funció per mostrar les dades en un alert
    var edat=calcularEdat();
    var salNet=calcularSalariNet();
    var password=comprovarPassword();
    if(edat && password){
        var nom=$("#nom").val();
        var llinatges=$("#llinatges").val();  
        alert ("NOM I LLINATGES: "+nom+" "+llinatges+"\n"+"EDAT: "+edat+"\n"+"SALARI NET: "+salNet);
        document.getElementById("formulari").reset();
        return false;
    }else{
        document.getElementById("formulari").reset();
        return false;
    } 
}

//Per: Victòria Binimelis Vadell. 24 de Maig 2018