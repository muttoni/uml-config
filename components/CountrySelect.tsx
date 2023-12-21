"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const countrys = [
  {
    value: "global",
    label: "🌎 Global",
  },
  {
    value: "usa",
    label: "🇺🇸 United States",
  },
  {
    value: "canada",
    label: "🇨🇦 Canada",
  },
  {
    value: "china",
    label: "🇪🇺 European Union",
  },
  {
    value: "china",
    label: "🇨🇳 China",
  },
]

export function CountrySelect() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("global")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? countrys.find((country) => country.value === value)?.label
            : "Select country..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search country..." className="h-9" />
          <CommandEmpty>No country found.</CommandEmpty>
          <CommandGroup>
            {countrys.map((country) => (
              <CommandItem
                key={country.value}
                value={country.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                {country.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === country.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
