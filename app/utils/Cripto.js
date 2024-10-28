import CryptoJS from "crypto-js";

const secretKey = "04c5ddca952fc03ea2720f5efb23bc243b6109952f89acda7b8e986d00cd8635";

export const encryptData = (data) => {
    return CryptoJS.AES.encrypt(data, secretKey).toString();
};

export const decryptData = (cipherText) => {
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
};
