import type React from "react";
import InputField from "./InputField";
import { CipherService } from "../services/CipherService";
import { useState } from "react";

export default function InputPanel({ tab }: { tab: string }): React.ReactNode {
  const [key, setKey] = useState("");
  const [encrypt, setEncrypt] = useState("");
  const [decrypt, setDecrypt] = useState("");
  function processDecrypt() {
    if (tab === "Caesar") {
      setEncrypt(CipherService.caesarDecrypte(parseInt(key), decrypt));
    } else if (tab === "Vigenere") {
      setEncrypt(CipherService.vigenereDecrypt(key, decrypt));
    }
  }
  function processEncrypt() {
    if (tab === "Caesar") {
      setDecrypt(CipherService.caesarEncrypte(parseInt(key), encrypt));
    } else if (tab === "Vigenere") {
      setDecrypt(CipherService.vigenereEncrypt(key, encrypt));
    }
  }
  return (
    <section className="flex h-full w-full bg-amber-200 items-center justify-center gap-3">
      <InputField value={encrypt} setValue={setEncrypt} />
      <div className="flex flex-col gap-3">
        <input
          className="bg-white w-[100%] h-[3rem] rounded-lg px-2"
          placeholder="Key"
          onChange={(e) => {
            setKey(e.target.value);
          }}
        />
        <button
          className="px-5 py-3 bg-blue-300 rounded-lg cursor-pointer"
          onClick={processEncrypt}
        >
          Mã Hóa
        </button>
        <button
          className="px-5 py-3 bg-blue-300 rounded-lg cursor-pointer"
          onClick={processDecrypt}
        >
          Giải Mã
        </button>
      </div>
      <InputField value={decrypt} setValue={setDecrypt} />
    </section>
  );
}
