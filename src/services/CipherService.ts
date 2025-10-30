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
  static caesarDecrypte(key: number, text: string): string {
    if (text !== null) {
      let result = "";
      for (let i = 0; i < text.length; i++) {
        let num = this.alphabet.lastIndexOf(text[i]);
        result += this.alphabet.charAt((num - key + 26) % 26);
      }
      return result;
    }
    return "";
  }
  // c = (p + k) % 26
  static vigenereEncrypt(key: string, text: string): string {
    if (key !== null && text !== null) {
      let result = "";
      let idx = 0;
      for (let i = 0; i < text.length; i++) {
        let numText = this.alphabet.lastIndexOf(text[i]);
        // c = MIOMIO
        // k = KEYKEY
        if (idx >= key.length) {
          idx = 0;
        }
        let numKey = this.alphabet.lastIndexOf(key[idx]);
        result += this.alphabet.charAt((numText + numKey) % 26);
        idx++;
      }
      return result;
    }
    return "";
  }

  static vigenereDecrypt(key: string, text: string): string {
    if (key !== null && text !== null) {
      let result = "";
      let idx = 0;
      for (let i = 0; i < text.length; i++) {
        let numText = this.alphabet.lastIndexOf(text[i]);
        // c = MIOMIO
        // k = KEYKEY
        if (idx >= key.length) {
          idx = 0;
        }
        let numKey = this.alphabet.lastIndexOf(key[idx]);
        result += this.alphabet.charAt((numText - numKey + 26) % 26);
        idx++;
      }
      return result;
    }
    return "";
  }
}
