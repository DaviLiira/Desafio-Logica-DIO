let nomeDoHeroi = "Zigfried"
let xpDoHeroi = parseInt(Math.random() * 20000) + 1;
console.log(xpDoHeroi)

    switch(true){
    case xpDoHeroi < 1000:
        console.log("Rank atual do " + nomeDoHeroi + " é Ferro.")
        break
    case xpDoHeroi > 1000 && xpDoHeroi < 2001:
        console.log("Rank atual do " + nomeDoHeroi + " é Bronze.")
        break  
    case xpDoHeroi > 2000 && xpDoHeroi < 5001:
        console.log("Rank atual do " + nomeDoHeroi + " é Prata.")
        break      
    case xpDoHeroi > 5000 && xpDoHeroi < 7001:
        console.log("Rank atual do " + nomeDoHeroi + " é Ouro.")
        break       
    case xpDoHeroi > 7000 && xpDoHeroi < 8001:
        console.log("Rank atual do " + nomeDoHeroi + " é Platina.")
        break        
    case xpDoHeroi > 8000 && xpDoHeroi < 9001:
        console,log("Rank atual do " + nomeDoHeroi + " é Diamante.")
        break       
    case xpDoHeroi > 9000 && xpDoHeroi < 10001:
        console.log("Rank atual do " + nomeDoHeroi + " é Ascendente.")
        break   
    case  xpDoHeroi > 10000 && xpDoHeroi < 12001:
        console.log("Rank atual do " + nomeDoHeroi + " é Imortal.")
        break   
    default:
        console.log("Rank atual do " + nomeDoHeroi + " é Radiante. Paranbéns, você chegou ao rank maximo")
}