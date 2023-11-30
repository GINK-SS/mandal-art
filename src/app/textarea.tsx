'use client';
type TextareaProps = {
  placeholder?: string;
};

export default function Textarea({ placeholder }: TextareaProps) {
  return (
    <textarea
      className="w-full h-full m-[1px] text-center border-0 resize-none outline-0"
      placeholder={placeholder}
    />
  );
}
