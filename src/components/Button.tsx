import React from "react";
import Image from "next/image";


type ButtonProps = {
  type?: 'button' | 'submit';
  variant?: string;
  icon?: string;
  title: string;
};

function Button({ type, title, icon, variant }: ButtonProps) {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
}

export default Button;
