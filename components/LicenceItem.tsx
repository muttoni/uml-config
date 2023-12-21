"use client"
import { useState } from "react";
import { CountrySelect } from "./CountrySelect";
import { Globe, Globe2, WholeWord } from "lucide-react";
import { Button } from "./ui/button";

export default function LicenceItem({ 
  defaultValue,
  title,
  subtitle,
  children
 }: {
  defaultValue: string
  title: string
  subtitle: string
  children?: React.ReactNode
 }) {
  const [def, setDefault] = useState(defaultValue)
  const [defaultChanged, setDefaultChanged] = useState(false)

  return defaultChanged ? 
      <div className="p-2 px-3">
      <h2 className="font-bold">{title}</h2>
      <p className="text-xs mb-1">{subtitle}</p>
      <CountrySelect />
      <Button size="sm" onClick={() => setDefaultChanged(false)} className="mt-2">Save</Button>
      </div>
    : <div onClick={() => setDefaultChanged(true)} className="text-sm flex justify-between hover:bg-gray-100 p-2 px-3 cursor-pointer rounded-xl">
      <div>
      <h2 className="font-bold">{title}</h2>
      <p className="text-xs mb-1">{subtitle}</p>

      </div>
      
      <span className="flex gap-1 items-center"></span>
    </div>

  
}