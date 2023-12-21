import React, { ReactNode } from "react";

interface ConfigSectionProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  defaultValue?: string;
  onClick?: () => void;
  children?: ReactNode;
}

const ConfigSection: React.FC<ConfigSectionProps> = ({ title, description, icon, defaultValue, onClick, children }) => {
  return (
    <div className="text-sm flex flex-col">
      {!children && <div onClick={onClick} className="flex justify-between hover:bg-gray-100 p-2 px-3 cursor-pointer rounded-xl">
        <h2 className="font-bold">{title}</h2>
        {icon && !children && <span className="flex gap-1 items-center">{icon} {defaultValue}</span>}
      </div>
}
      {children && (
        <div className="">
          <h2 className="font-bold">{title}</h2>
          {description && <p className="text-xs mb-1">{description}</p>}
          {children}
        </div>
      )}
    </div>
  );
};

export default ConfigSection;
