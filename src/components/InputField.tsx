import type React from "react";

export default function InputField({
  value,
  setValue,
}: {
  value: string;
  setValue: (prop: string) => void;
}): React.ReactNode {
  return (
    <>
      <textarea
        className="inline-block align-top p-[1rem] w-[36%] rounded-lg bg-white h-[36%]"
        placeholder="Nhập văn bản cần mã hóa vào đây"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
    </>
  );
}
