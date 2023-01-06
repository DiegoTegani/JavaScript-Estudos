function JurosSimples(capital, taxa, tempo){
    return console.log(`${capital * taxa * tempo}`)
}

JurosSimples(1000, 0.1, 3)

function JurosCompostos(capital, taxa, tempo){
    return console.log(`${capital * 1+taxa ** tempo}`)
}

JurosCompostos((1000, 0.1, 3))