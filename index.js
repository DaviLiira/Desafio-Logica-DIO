let nomeDoHeroi = "Zigfried"
let xpDoHeroi = parseInt(Math.random() * 20000) + 1;
console.log(xpDoHeroi)


    if (xpDoHeroi < 1000)
        console.log("Rank atual do " + nomeDoHeroi + " é Ferro.")
    else if (xpDoHeroi > 1000 && xpDoHeroi < 2001)
        console.log("Rank atual do " + nomeDoHeroi + " é Bronze.")
        
    else if (xpDoHeroi > 2000 && xpDoHeroi < 5001)
        console.log("Rank atual do " + nomeDoHeroi + " é Prata.")
        
    else if (xpDoHeroi > 5000 && xpDoHeroi < 7001)
        console.log("Rank atual do " + nomeDoHeroi + " é Ouro.")
        
    else if (xpDoHeroi > 7000 && xpDoHeroi < 8001)
        console.log("Rank atual do " + nomeDoHeroi + " é Platina.")
        
    else if (xpDoHeroi > 8000 && xpDoHeroi < 9001)
        console,log("Rank atual do " + nomeDoHeroi + " é Diamante.")
        
    else if (xpDoHeroi > 9000 && xpDoHeroi < 10001)
        console.log("Rank atual do " + nomeDoHeroi + " é Ascendente.")    
        
    else if  (xpDoHeroi > 10000 && xpDoHeroi < 12001)
        console.log("Rank atual do " + nomeDoHeroi + " é Imortal.")
        
    else
        console.log("Rank atual do " + nomeDoHeroi + " é Radiante. Paranbéns, você chegou ao rank maximo")
