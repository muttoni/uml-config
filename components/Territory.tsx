"use client"
import React, { useState } from "react";
import { CountrySelect } from "./CountrySelect"; // Assume this is a TypeScript component
import { Globe2 } from "lucide-react";
import ConfigSection from "./ConfigSection";
import { Button } from "./ui/button";

const Territory: React.FC = () => {
  const defaultValue="Global"
  const [defaultChanged, setDefaultChanged] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const handleSave = () => {
    // Implement save functionality here
    console.log("Territory saved");
  };

  return (
    <ConfigSection
      title="Territory"
      description="Where in the world is your license valid?"
      icon={<Globe2 className="h-4 w-4"/>}
      defaultValue={defaultValue}
      onClick={() => setDefaultChanged(true)}
    >
      {defaultChanged && (
        <>
          <CountrySelect />
          <Button size="sm" onClick={() => setDefaultChanged(false)} className="mt-2 float-right">
            Save
          </Button>
          <Button size="sm" variant={"secondary"} onClick={() => setDefaultChanged(false)} className="mt-2 me-2  float-right">
            Cancel
          </Button>
        </>
      )}
    </ConfigSection>
  );
};

export default Territory;
