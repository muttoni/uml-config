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

const values = [
  {
    value: "all",
    label: "All channels",
  },
  {
    value: "usa",
    label: "Television",
  },
  {
    value: "canada",
    label: "Physical consumer products",
  },
  {
    value: "china",
    label: "Video games",
  },
  {
    value: "china",
    label: "...",
  },
]

export function ChannelSelect() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("all")

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
            ? values.find((v) => v.value === value)?.label
            : "Select v..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search v..." className="h-9" />
          <CommandEmpty>No v found.</CommandEmpty>
          <CommandGroup>
            {values.map((v) => (
              <CommandItem
                key={v.value}
                value={v.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                {v.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === v.value ? "opacity-100" : "opacity-0"
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
