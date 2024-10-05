const readline = require('readline');

// Criar interface para entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Perguntar o nome do herói
rl.question('Digite o nome do herói: ', (nome) => {
    // Perguntar a quantidade de XP
    rl.question('Digite a quantidade de experiência (XP) do herói: ', (xp) => {
        xp = parseInt(xp, 10);
        let nivel;

        // Estrutura de decisão para determinar o nível baseado na XP
        if (xp < 1000) {
            nivel = "Ferro";
        } else if (xp >= 1001 && xp <= 2000) {
            nivel = "Bronze";
        } else if (xp >= 2001 && xp <= 5000) {
            nivel = "Prata";
        } else if (xp >= 5001 && xp <= 7000) {
            nivel = "Ouro";
        } else if (xp >= 7001 && xp <= 8000) {
            nivel = "Platina";
        } else if (xp >= 8001 && xp <= 9000) {
            nivel = "Ascendente";
        } else if (xp >= 9001 && xp <= 10000) {
            nivel = "Imortal";
        } else {
            nivel = "Radiante";
        }

        // Saída final
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

        // Fechar a interface
        rl.close();
    });
});
