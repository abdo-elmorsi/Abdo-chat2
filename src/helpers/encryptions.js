import CryptoJS from 'crypto-js';

export const encryptName = (message) => {
    return CryptoJS.AES.encrypt(message,
        CryptoJS.enc.Hex.parse("000102030405060708090a0b0c0d0e0f"),
        {
            iv: CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f"),
            mode: CryptoJS.mode.CBC,
            format: CryptoJS.format.Hex,
            padding: CryptoJS.pad.Pkcs7
        }).toString();
}

// Encrypt
export const encrypt = (message, key = 'secret') => {
    return CryptoJS.AES.encrypt(message, key, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString();
}


// Decrypt
export const decrypt = (message, key = 'secret') => {
    const bytes = CryptoJS.AES.decrypt(message, key, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return bytes.toString(CryptoJS.enc.Utf8);
}