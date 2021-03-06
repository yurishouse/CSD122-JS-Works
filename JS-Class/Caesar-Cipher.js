function cipher(plainText) {
    var cCodes = [];
    for (var i=0;i<plainText.length;i++){
        cCodes.push(plainText.charCodeAt(i));
    }
    var cipherText = "";
    while (cCodes.length > 0){
        var cCodeNew = cCodes.shift()+3;
        if (cCodeNew > 122)
            cCodeNew -=26;
        if (cCodeNew > 90 && cCodeNew < 96)
            cCodeNew -=26;
        cipherText += String.fromCharCode(cCodeNew);
    }
    return cipherText;
}

function decipher(encryptedText) {
    var cCodes = [];
    for (var i=0;i<encryptedText.length;i++){
        cCodes.push(encryptedText.charCodeAt(i));
    }
    var plainText = "";
    while (cCodes.length > 0){
        var cCodeNew = cCodes.shift()-3;
        if (cCodeNew < 65)
            cCodeNew +=26;
        if (cCodeNew < 97 && cCodeNew > 90)
            cCodeNew +=26;
        plainText += String.fromCharCode(cCodeNew);
    }
    return plainText;
}

const readline = require('readline-sync');
const choice = readline.question(`Do you want to Encode(1) or Decode(2): `);
const Texts = readline.question(`Enter the text you want to encode / decode: `);
if (choice == 1){
        console.log(`This is the encrypted text`);
        console.log(cipher(Texts));
    }
    if (choice == 2){
        console.log(`This is the decrypted text`);
        console.log(decipher(Texts));
    }
    if (choice != 1 & choice != 2)
        console.log(`Error, please enter 1 or 2`);



