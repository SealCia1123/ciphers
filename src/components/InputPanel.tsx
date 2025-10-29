import type React from "react";
import InputField from "./InputField";
import { CipherService } from "../services/CipherService";
import { useState } from "react";

export default function InputPanel({ tab }: { tab: string }): React.ReactNode {
    const [key, setKey] = useState(0);
    const [encrypt, setEncrypt] = useState("");
    const [decrypt, setDecrypt] = useState("");
    return (
        <section className="flex h-full w-full bg-amber-200 items-center justify-center gap-3">
            <InputField {encrypt,setEncrypt} />
            <div className="flex flex-col gap-3">
                <input
                    className="bg-white w-[100%] h-[3rem] rounded-lg px-2"
                    placeholder="Key"
                    onChange={(e) => {
                        setKey(parseInt(e.target.value));
                    }}
                />
                <button className="px-5 py-3 bg-blue-300 rounded-lg cursor-pointer">
                    Mã Hóa
                </button>
                <button className="px-5 py-3 bg-blue-300 rounded-lg cursor-pointer">
                    Giải Mã
                </button>
            </div>
            <InputField />
        </section>
    );
}
