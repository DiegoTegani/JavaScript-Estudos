function compras(trabalho1, trabalho2){
    const comprarSorvete =  trabalho1 || trabalho2
    const comprarTv50 =  trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)// bitwiser xor
    const comprarTv32 =  trabalho1 != trabalho2
    const manterSaudadevel =  !comprarSorvete //operardor unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudadevel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))