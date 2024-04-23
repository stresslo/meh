const generatePwd = async (pwd) => {
    try {
        const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(pwd));
        const hashed = Array.prototype.map.call(new Uint8Array(hash), x => ('00' + x.toString(16)).slice(-2)).join('');
        return hashed
    } catch (error) {
        return false;
    }
}

export default generatePwd;