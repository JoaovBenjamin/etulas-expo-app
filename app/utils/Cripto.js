// utils/Cripto.js

import NodeRSA from 'node-rsa';

// Gerar chaves RSA
const key = new NodeRSA({ b: 512 });
const publicKey = key.exportKey('public');
const privateKey = key.exportKey('private');

export const encryptData = (data) => {
    return key.encrypt(data, 'hex'); 
};

export const decryptData = (cipherText) => {
    return key.decrypt(cipherText, 'utf8'); 
};

// Exportar as chaves se necessário
export const getPublicKey = () => publicKey;
export const getPrivateKey = () => privateKey;
 