// id nbr interval / id nb show interval / id ess nombre d'essait / id inn input de nombre random / id btn tester la positio / id res la div de reultat / id b msg / id ul list d'essait
// variable de init
test=false
ess=document.getElementById('ess').innerHTML
document.getElementById('inn').hidden=true;
document.getElementById('btn').hidden=true;
document.getElementById('esss').hidden=true;
document.getElementById('replaydiv').hidden=true;
// interval
// random
// condition
document.getElementById('nbr').addEventListener('change',interval)
function interval(){
    max=Number(document.getElementById('nbr').value)
    if(Number.isInteger(max)&max>1&max<10000){
        document.getElementById('nb').innerHTML=max
        test=true
        ran=Math.floor(Math.random()*max+1)
        document.getElementById('nbr').disabled=true
        document.getElementById('rand').value=ran
        console.log(ran)
        document.getElementById('inn').hidden=false;
        document.getElementById('btn').hidden=false;
        document.getElementById('esss').hidden=false;
    }else{
        alert('il faut entrer un nombre entre 1 et 10000')
    }
}
// recherche de number
document.getElementById('btn').addEventListener('click',rechercher)
function rechercher(){
    inn=document.getElementById('inn').value
    if(ess!=0){
        ess--
        document.getElementById('ess').innerHTML=ess
        if(inn>0){
            document.getElementById('ul').innerHTML+='<li>'+inn+'</li>'
            if (ran<inn){
                document.getElementById('b').innerHTML='le nombre rechercher est plus petit que ça'
            }else if(ran>inn){
                document.getElementById('b').innerHTML='le nombre rechercher est plus grand que ça'
            }else{
                document.getElementById('b').innerHTML='BRAVO'
                document.getElementById('inn').disabled=true;
                document.getElementById('btn').disabled=true;
                document.getElementById('replaydiv').hidden=false;
            }
        }
    }else{
        document.getElementById('inn').disabled=true;
        document.getElementById('btn').disabled=true;
        document.getElementById('replaydiv').hidden=false;
    }
}
//replay
document.getElementById('replay').addEventListener('click',replay)
function replay(){
    window.location.reload();
}
