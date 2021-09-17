const encrypt = (plaintext, key) => {
  return [...plaintext]
    .map((char) => {
      let x = char.charCodeAt(0);
      if (x >= 65 && x <= 90) {
        return String.fromCharCode(((x + key - 65) % 26) + 65);
      } else if (x >= 97 && x <= 122) {
        return String.fromCharCode(((x + key - 97) % 26) + 97);
      } else {
        return char;
      }
    })
    .join('');
};

const decrypt = (ciphertext, key) => {
  return [...ciphertext]
    .map((char) => {
      let x = char.charCodeAt(0);
      if (x >= 65 && x <= 90) {
        return String.fromCharCode(((x - 65 - key + 26) % 26) + 65);
      } else if (x >= 97 && x <= 122) {
        return String.fromCharCode(((x - 97 - key + 26) % 26) + 97);
      } else {
        return char;
      }
    })
    .join('');
};

const menu = `==SHIFT CIPHER==
1. Encrypt
2. Decrypt
Option: `;

const shiftCipher = () => {
  const option = prompt(menu);

  if (option !== '1' && option !== '2') {
    console.log('Wrong input!');
  } else {
    const text = prompt(`Input text: `);
    const key = parseInt(prompt(`Input key: `));
    if (option === '1') console.log('Result\t:', encrypt(text, key));
    else if (option === '2') console.log('Result\t:', decrypt(text, key));
  }
};

shiftCipher();
