// CodeEditor.js
"use client"
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyIcon, InfoIcon } from "./icons";


export const CodeViewComponent = () => {
    const code = `/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jDzcv78LBtP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-[#1f2937] text-white p-8">
      <h2 className="text-2xl font-semibold mb-6">Activity</h2>
      <ul className="space-y-4">
        <li className="flex items-start space-x-4">
          <div className="pt-1">
            <CheckCircleIcon className="text-green-500 h-5 w-5" />
            <div className="w-0.5 h-full bg-gray-600 ml-2.5 mt-2" />
          </div>
          <div className="flex-1">
`;
  const [activeTab, setActiveTab] = useState("react");

  const versions = [
    { id: "react", label: "React", code },
    { id: "html", label: "HTML (read-only)", code: "<!-- HTML code here -->" },
  ];

  return (
    <div className="absolute inset-0 z-40 overflow-hidden rounded-lg border border-border bg-background shadow-lg transition-all duration-200 w-full md:w-[calc(50%-.5rem)] left-auto">
      <div data-id="code-browser" className="flex flex-col h-full overflow-hidden bg-muted text-muted-foreground">
        <div className="p-4 flex flex-col gap-4">
          <div>
            <div className="text-sm font-medium flex items-center gap-1 text-foreground">
              Add <span className="hidden sm:inline">this component </span>to your project
              <a target="_blank" className="inline-flex items-center" title="Learn more" href="/docs#integrating-generated-code-into-your-nextjs-app">
                <span className="sr-only">Learn more</span>
                <InfoIcon className="w-3 h-3 ml-0.5" />
              </a>
            </div>
            <div className="pt-2 text-xs">
              <span className="font-medium">Note:</span> By using this code or product you agree to the{" "}
              <a className="underline underline-offset-2 decoration-muted hover:decoration-muted-foreground transition-all" target="_blank" href="/agreement">
                pre-release agreement
              </a>
              .
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="whitespace-nowrap justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-8 flex items-center text-foreground pointer-events-auto shadow-none bg-popover flex-1 px-3 py-1.5 rounded-lg border border-border gap-1">
              <div className="flex items-center line-clamp-1 flex-1 gap-2 font-mono text-xs sm:text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" x2="20" y1="19" y2="19"></line>
                </svg>
                <span className="truncate inline-block">npx v0 add jDzcv78LBtP </span>
              </div>
              <span className="sr-only">Copy cli command</span>
              <CopyIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
          <TabsList className="px-4 text-sm gap-1 flex">
            {versions.map((version) => (
              <TabsTrigger
                key={version.id}
                value={version.id}
                className={`px-4 pt-1.5 pb-1 rounded-t-lg font-medium transition-colors ${
                  activeTab === version.id ? "bg-foreground text-foreground-foreground" : "bg-transparent text-foreground hover:bg-muted"
                }`}
              >
                {version.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="relative flex-1 overflow-hidden">
            {versions.map((version) => (
              <TabsContent key={version.id} value={version.id} className="h-full">
                <CodeMirror
                  value={version.code}
                  height="100%"
                  extensions={[javascript({ jsx: true })]}
                  readOnly
                  theme="dark"
                />
              </TabsContent>
            ))}
            <button className="items-center whitespace-nowrap shrink-0 justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none w-6 h-6 absolute transition-colors translate-x-1 bg-foreground ml-auto hover:bg-accent hover:text-accent-foreground text-foreground-foreground disabled:opacity-100 z-10 flex gap-2 top-5 right-5">
              <CopyIcon className="" />
              <span className="sr-only">Copy cli command</span>
            </button>
          </div>
        </Tabs>
        <div className="p-4 flex items-center gap-1">
          <button className="whitespace-nowrap shrink-0 font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-transparent text-foreground-foreground flex items-center justify-center focus-visible:ring-0 focus-visible:bg-muted h-8 rounded-md px-3 text-xs hover:bg-muted">
            Cancel
          </button>
          <button className="inline-flex items-center whitespace-nowrap shrink-0 justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-8 rounded-md px-3 text-xs ml-auto gap-1.5" data-id="code-browser-save-button">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

