export class CipherService {
    static alphabet: string = "abcdefghijklmnopqrstuvwxyz";
    // c = (p + k) % 26
    static caesarEncrypte(key: number, text: string): string {
        if (text !== null) {
            let result = "";
            for (let i = 0; i < text.length; i++) {
                let num = this.alphabet.lastIndexOf(text[i]);
                result += this.alphabet.charAt((num + key) % 26);
            }
            return result;
        }
        return "";
    }
}
