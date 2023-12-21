import { CountrySelect } from "@/components/CountrySelect";
import LicenceItem from "@/components/LicenceItem";
import Territory from "@/components/Territory";
import { ArrowUpRightSquare, Check, Cross, Globe2, Infinity as Inf, X } from "lucide-react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { ChannelSelect } from "@/components/ChannelSelect";
import { ExpirationDate } from "@/components/ExpirationDate";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-2 py-10 md:p-10 lg:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        </div>
      </div>
      <div className="max-w-md rounded-xl p-4 mx-auto border w-full flex flex-col gap-3">
        <div>
          <h1 className="font-bold text-center text-lg">Configure your license</h1>
          <p className="flex items-center gap-1 text-sm justify-center">Powered by
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3" viewBox="0 0 401 92" fill="none">
            <g clipPath="url(#clip0_27_4)">
            <path d="M354.834 89.9932H373.263V52.8671L401 2.19496H379.822L354.834 49.1043V89.9932ZM338.654 40.638H359.332L338.654 2.19496H317.914L338.654 40.638ZM297.798 32.5481C297.798 41.5787 292.926 45.9686 283.617 45.9686H265.813V19.5665H282.993C292.301 19.5665 297.798 23.5174 297.798 32.5481ZM246.76 89.9932H265.813V63.3402H283.617C284.679 63.3402 285.741 63.2774 286.803 63.2147L300.734 89.9932H321.1L304.045 57.7587C312.167 52.1772 316.102 42.9584 316.102 32.5481C316.102 15.5528 305.67 2.19496 282.993 2.19496H246.76V89.9932ZM220.459 45.9686H211.901C211.901 57.3197 203.467 65.7233 192.91 65.7233V74.3149C177.417 74.3149 166.172 61.4588 166.172 45.9686C166.172 29.2243 176.168 17.9986 192.91 17.9986C208.403 17.9986 220.459 29.8514 220.459 45.9686ZM192.91 92V82.9693C213.213 82.9693 228.456 67.1029 228.456 45.9686H237.826C237.826 20.9461 218.46 0 192.91 0C165.485 0 147.806 19.1275 147.806 45.9686C147.806 70.9911 167.359 92 192.91 92ZM101.015 89.9932H120.256V19.5037H147.931V2.13224H73.4032V19.5037H101.015V89.9932ZM34.9212 92C54.0372 92 69.53 80.4608 69.53 61.1452C69.53 42.9584 55.9738 30.2904 34.8587 30.2904V43.6483C25.1133 43.6483 17.9916 39.3838 17.9916 30.5412C17.9916 21.6987 24.1762 16.4935 35.3585 16.4935C44.5417 16.4935 50.1016 20.319 51.4759 25.3361H68.468C67.1561 11.3511 54.0372 0 34.9836 0C14.868 0 0.562237 12.6053 0.562237 31.0429C0.562237 49.4806 15.4303 60.5181 34.8587 60.5181V47.7873C45.1664 47.7873 52.2256 52.4281 52.2256 61.4588C52.2256 70.4894 44.979 75.5692 34.9212 75.5692C25.8629 75.5692 19.5534 71.5556 17.6168 66.0368H0C2.49883 80.5862 15.8051 92 34.9212 92Z" fill="currentColor"/>
            </g>
            <defs>
            <clipPath id="clip0_27_4">
            <rect width="401" height="92" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            <Link href="https://github.com/storyprotocol/protocol-contracts/blob/main/SPUML-v1.pdf" target="_blank" className="flex items-center gap-1 justify-start"><ArrowUpRightSquare className="w-3 h-3 flex-shrink" /></Link>
          </p>
        </div>

        <Tabs defaultValue="presets" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="presets">Presets</TabsTrigger>
        <TabsTrigger value="custom">Custom</TabsTrigger>
      </TabsList>

      <TabsContent value="presets">
      <RadioGroup defaultValue="no" className="space-y-2">
                  <div className="flex items-center space-x-3 rounded  p-2">
                    <RadioGroupItem value="no" id="r1" />
                    <Label htmlFor="r1" className="flex flex-col gap-1">
                      <span className="font-bold">Open Domain</span>
                      <span className="text-xs font-light flex flex-wrap items-center gap-1">
                        <X className="h-2 w-2"/> attribution
                        <Check className="h-2 w-2"/> commercial use
                        <Check className="h-2 w-2"/> derivatives
                        <Check className="h-2 w-2"/> all content
                      </span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 rounded  p-2">
                    <RadioGroupItem value="free-a" id="r2" />
                    <Label htmlFor="r2" className="flex flex-col gap-1">
                      <span className="font-bold">Free with Attribution</span>
                      <span className="text-xs font-light flex flex-wrap items-center gap-1">
                        <Check className="h-2 w-2"/> attribution
                        <Check className="h-2 w-2"/> commercial use
                        <Check className="h-2 w-2"/> derivatives
                        <Check className="h-2 w-2"/> all content
                      </span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 rounded  p-2">
                    <RadioGroupItem value="paid-no-a" id="r3" />
                    <Label htmlFor="r3" className="flex flex-col gap-1">
                      <span className="font-bold">Paid, no attribution</span>
                      <span className="text-xs font-light flex flex-wrap items-center gap-1">
                        <X className="h-2 w-2"/> attribution 
                        <Check className="h-2 w-2"/> commercial use
                        <Check className="h-2 w-2"/> derivatives
                        <Check className="h-2 w-2"/> all content
                        <Check className="h-2 w-2"/> license fee
                        <Check className="h-2 w-2"/> revenue share
                      </span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 rounded  p-2">
                    <RadioGroupItem value="paid-a" id="r4" />
                    <Label htmlFor="r4" className="flex flex-col gap-1">
                      <span className="font-bold">Paid with attribution</span>
                      <span className="text-xs font-light flex flex-wrap items-center gap-1">
                        <X className="h-2 w-2"/> attribution
                        <Check className="h-2 w-2"/> commercial use
                        <Check className="h-2 w-2"/> derivatives
                        <Check className="h-2 w-2"/> all content
                      </span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 rounded  p-2">
                    <RadioGroupItem value="no-deriv" id="r5" />
                    <Label htmlFor="r5" className="flex flex-col gap-1">
                      <span className="font-bold">No derivatives</span>
                      <span className="text-xs font-light flex flex-wrap items-center gap-1">
                        <Check className="h-2 w-2"/> attribution
                        <X className="h-2 w-2"/> commercial use
                        <X className="h-2 w-2"/> derivatives
                        <X className="h-2 w-2"/> all content
                      </span>
                    </Label>
                  </div>
                </RadioGroup>
      </TabsContent>

      <TabsContent value="custom">
      <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline" >
              <div className="flex w-full justify-between cursor-pointer rounded-xl me-2">
                <h2 className="font-bold">Territory</h2>
                <span className="flex gap-1 items-center"><Globe2 className="h-4 w-4"/> Global</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="relative mb-2">
                <p className="text-xs mb-1">Where is this license valid?</p>
                <CountrySelect />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline">
            <div className="flex w-full justify-between cursor-pointer rounded-xl me-2">
                <h2 className="font-bold">Channels</h2>
                <span className="flex gap-1 items-center"><Inf className="h-4 w-4"/></span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
            <div className="relative mb-2">
                <p className="text-xs mb-1">What channels of distribution are allowed?</p>
                <ChannelSelect />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline">
            <div className="flex w-full justify-between cursor-pointer rounded-xl me-2">
                <h2 className="font-bold">Expiration</h2>
                <span className="flex gap-1 items-center"><Inf className="h-4 w-4"/></span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
            <div className="relative mb-2">
                <p className="text-xs mb-1">When does this license expire?</p>
                <ExpirationDate />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline">
            <div className="flex w-full justify-between cursor-pointer rounded-xl me-2">
                <h2 className="font-bold">Revocable</h2>
                <span className="flex gap-1 items-center"><Check className="h-4 w-4"/></span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
            <div className="relative mb-2">
                <p className="text-xs mb-2">Can you revoke this license?</p>
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="r1" />
                    <Label htmlFor="r1">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="r2" />
                    <Label htmlFor="r2">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-transferable">
            <AccordionTrigger className="hover:no-underline">
            <div className="flex w-full justify-between cursor-pointer rounded-xl me-2">
                <h2 className="font-bold">Transferable</h2>
                <span className="flex gap-1 items-center"><Check className="h-4 w-4"/></span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
            <div className="relative mb-2">
                <p className="text-xs mb-2">Can you transfer this license?</p>
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="r1" />
                    <Label htmlFor="r1">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="r2" />
                    <Label htmlFor="r2">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="hover:no-underline">
            <div className="flex w-full justify-between cursor-pointer rounded-xl me-2">
                <h2 className="font-bold">Attribution</h2>
                <span className="flex gap-1 items-center"><Check className="h-4 w-4"/></span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
            <div className="relative mb-2">
                <p className="text-xs mb-2">Is attribution required?</p>
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="r1" />
                    <Label htmlFor="r1">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="r2" />
                    <Label htmlFor="r2">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="hover:no-underline">
            <div className="flex w-full justify-between cursor-pointer rounded-xl me-2">
                <h2 className="font-bold">Derivatives</h2>
                <span className="flex gap-1 items-center"><X className="h-4 w-4"/></span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
            <div className="relative mb-2">
                <p className="text-xs mb-2">Are derivative works allowed?</p>
                <RadioGroup defaultValue="no">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="r1" />
                    <Label htmlFor="r1">No</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-a" id="r2" />
                    <Label htmlFor="r2">Yes, with attribution</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-ap" id="r3" />
                    <Label htmlFor="r3">Yes, with approval</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-rp" id="r4" />
                    <Label htmlFor="r4">Yes, with reciprocal license</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-rs" id="r5" />
                    <Label htmlFor="r5">Yes, with revenue share</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-rc" id="r6" />
                    <Label htmlFor="r6">Yes, with revenue ceiling</Label>
                  </div>
                </RadioGroup>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="hover:no-underline">
            <div className="flex w-full justify-between cursor-pointer rounded-xl me-2">
                <h2 className="font-bold">Content</h2>
                <span className="flex gap-1 items-center"><Inf className="h-4 w-4"/></span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
            <div className="relative mb-2">
                <p className="text-xs mb-2">What content standards do you want to impose?</p>
                <RadioGroup defaultValue="" className="">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="r1" />
                    <Label htmlFor="r1" className="flex flex-col gap-1">
                      <span className="font-bold">No hate</span>
                      <span className="text-xs font-light">Prohibited to use the IP in a way that is unlawful,
defamatory, harassing, abusive, racist, hateful, or cruel, or that promotes any such
activity. Determined at your sole discretion.</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-a" id="r2" />
                    <Label htmlFor="r2" className="flex flex-col gap-1">
                      <span className="font-bold">Suitable for all ages</span>
                      <span className="text-xs font-light">Derivatives may use the IP in a manner that is
suitable for all ages, and contains nothing in theme or language, nudity, sex,
violence or other matters that would offend parents whose younger children view
derivative work. Determined at your sole discretion. </span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-ap" id="r3" />
                    <Label htmlFor="r3" className="flex flex-col gap-1">
                      <span className="font-bold">No drugs or weapons</span>
                      <span className="text-xs font-light">Prohibited to use your IP in connection with the
advertising or promotion of any drugs, weapons, or related accessories</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-rp" id="r4" />
                    <Label htmlFor="r4" className="flex flex-col gap-1">
                      <span className="font-bold">No pornography</span>
                      <span className="text-xs font-light">Prohibited to use your IP in a manner that would be
considered pornographic, as determined at your sole discretion</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="hover:no-underline">
            <div className="flex w-full justify-between cursor-pointer rounded-xl me-2">
                <h2 className="font-bold">Commercial Use</h2>
                <span className="flex gap-1 items-center"><X className="h-4 w-4"/></span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
            <div className="relative mb-2">
                <p className="text-xs mb-2">Is your IP compatible with commercial use?</p>
                <RadioGroup defaultValue="no" className="">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="r1" />
                    <Label htmlFor="r1" className="flex flex-col gap-1">
                      <span className="font-bold">No</span>
                      <span className="text-xs font-light">Valid only for noncommercial, personal use only</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-a" id="r2" />
                    <Label htmlFor="r2" className="flex flex-col gap-1">
                      <span className="font-bold">Yes</span>
                      <span className="text-xs font-light">Commercial use is allowed, without restrictions </span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-ap" id="r3" />
                    <Label htmlFor="r3" className="flex flex-col gap-1">
                      <span className="font-bold">Yes, but only for certain commercializers</span>
                      <span className="text-xs font-light">Only specific categories of tags apply</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-rp" id="r4" />
                    <Label htmlFor="r4" className="flex flex-col gap-1">
                      <span className="font-bold">Yes, with attribution</span>
                      <span className="text-xs font-light">Commercial use is allowed, as long as attribution is present.</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-rp" id="r5" />
                    <Label htmlFor="r5" className="flex flex-col gap-1">
                      <span className="font-bold">Yes, with revenue share</span>
                      <span className="text-xs font-light">Commercial use is allowed, with revenue share.</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-rp" id="r6" />
                    <Label htmlFor="r6" className="flex flex-col gap-1">
                      <span className="font-bold">Yes, with revenue ceiling</span>
                      <span className="text-xs font-light">Commercial use is allowed, with revenue ceiling.</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className="hover:no-underline">
            <div className="flex w-full justify-between cursor-pointer rounded-xl me-2">
                <h2 className="font-bold">Licensing Fee</h2>
                <span className="flex gap-1 items-center"><X className="h-4 w-4"/></span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
            <div className="relative mb-2">
                <p className="text-xs mb-2">Do you require a license fee?</p>
                <RadioGroup defaultValue="no" className="">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="r1" />
                    <Label htmlFor="r1" className="flex flex-col gap-1">
                      <span className="font-bold">No</span>
                      <span className="text-xs font-light">No licensing fee required</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-a" id="r2" />
                    <Label htmlFor="r2" className="flex flex-col gap-1">
                      <span className="font-bold">Yes, monthly</span>
                      <span className="text-xs font-light"><Input placeholder={"Input monthly amount"}/></span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-ap" id="r3" />
                    <Label htmlFor="r3" className="flex flex-col gap-1">
                      <span className="font-bold">Yes, one-time</span>
                      <span className="text-xs font-light"><Input placeholder={"Input one-time amount"}/></span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger className="hover:no-underline">
            <div className="flex w-full justify-between cursor-pointer rounded-xl me-2">
                <h2 className="font-bold">Sublicensable</h2>
                <span className="flex gap-1 items-center"><X className="h-4 w-4"/></span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
            <div className="relative mb-2">
                <p className="text-xs mb-2">Can this license be sublicensed?</p>
                <RadioGroup defaultValue="no">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="r1" />
                    <Label htmlFor="r1">No</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes-a" id="r2" />
                    <Label htmlFor="r2">Yes</Label>
                  </div>
                </RadioGroup>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>

      </Tabs>


      {/* <LicenceItem />

      <LicenceItem defaultValueString="All" title="Channels" subtitle="In what types of work can your IP be used?" /> */}
      <Button size="lg" className="">Publish</Button>
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      </div>
    </main>
  )
}
