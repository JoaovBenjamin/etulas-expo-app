
import NodeRSA from 'node-rsa';

const key = new NodeRSA({ b: 512 });
const publicKey = key.exportKey('public');
const privateKey = key.exportKey('private');

export const encryptData = (data) => {
    return key.encrypt(data, 'hex'); 
};

export const decryptData = (cipherText) => {
    return key.decrypt(cipherText, 'utf8'); 
};

export const getPublicKey = () => publicKey;
export const getPrivateKey = () => privateKey;
 