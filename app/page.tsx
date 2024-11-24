"use client"

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import Image from 'next/image';

import { RefreshIcon, ImageIcon, ThumbsUpIcon, ThumbsDownIcon } from './icons';

import { FloatingPromptInput } from "./FloatingPromptInput";
import CommitPropComponent from "./CommitPromptComponent";
import CommitPromptRightSideComponent from "./CommitPromptRightSideComponent";
import { CodeViewComponent } from "./CodeViewComponent";
import { cn } from "@/lib/utils";

export default function App() {
    const [showCode, setShowCode] = useState(false);
    const [selectedVersion, setSelectedVersion] = useState(null);

    const handleVersionClick = (version) => {
        setSelectedVersion(version);
        setShowCode(true);
    };

    const handleCodeToggle = () => {
        console.log("handleCodeToggle clicked");
        setShowCode(!showCode);
    };

    return (
        <div className="flex h-screen pb-10">
            <div className="flex-1 h-full overflow-auto">
                <div className="timeline-container h-full flex flex-col">


                    <div className="flex flex-1 flex-col p-4 pt-3 lg:pt-0 md:pb-10 gap-6 border-t lg:border-t-0 bg-background lg:bg-background">


                        {/* this houses sidebar on the left, iframe in middle, code in the right */}
                        <div className="flex flex-row  gap-4 flex-1 items-start">

                            {/* SIDEBAR COMPONENT, HOUSES THE HISTORY AND DISPLAYS THE THUMBNAILS */}
                            <div className="@container bg-background rounded-lg hidden  py-2 overflow-hidden origin-left lg:flex flex-col transition-all select-none ease-out duration-300  max-h-[calc(100vh-190px)] w-[138px]">
                                {/* History header */}
                                <div className="flex items-center transition-transform ease-out duration-300 px-2 pb-3">
                                    <h2 className="text-sm text-foreground font-medium transition-all duration-300 opacity-100">
                                        History
                                    </h2>

                                </div>

                                {/* Thumbnails */}
                                <div className="flex-1 flex flex-col-reverse overflow-auto no-scrollbar">
                                    <div data-area="thumbnails" className="flex flex-col gap-3 px-[6px]">
                                        {[0, 1, 2, 3, 4].map((version) => (
                                            <div key={version} data-id={`c-${version}`}>
                                                <button
                                                    className={`flex w-full h-full group shrink-0 z-10 cursor-pointer relative outline-none focus-visible:ring-1 focus:ring-gray-700 rounded-md min-h-[25px] min-w-[40px] ${selectedVersion === version
                                                        ? "border-blue-600"
                                                        : "border-gray-200 hover:border-gray-700 group-[[data-state=open]]:border-gray-700"
                                                        }`}
                                                    tabIndex="0"
                                                    data-state="closed"
                                                    onClick={() => handleVersionClick(version)}
                                                >
                                                    <div className="aspect-video origin-top-left w-full rounded-md border overflow-hidden ease-out shadow-sm transition-all duration-300 [&_iframe]:hover:!opacity-100">
                                                        <div
                                                            className={`w-full h-full group-[[data-state=open]]:opacity-100 ${selectedVersion === version
                                                                ? "opacity-100"
                                                                : "opacity-50 hover:opacity-100"
                                                                }`}
                                                        >
                                                            <img
                                                                alt={`Thumbnail for prompt: ${version}`}
                                                                draggable="false"
                                                                loading="lazy"
                                                                width="320"
                                                                height="180"
                                                                decoding="async"
                                                                data-nimg="1"
                                                                className="object-cover aspect-video text-xs text-zinc-700 text-left"
                                                                src={`/placeholder.svg`}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        title={`v${version}`}
                                                        className={`h-6 px-2 w-8 font-mono absolute border transition-all duration-300 text-xs flex items-center justify-center rounded-sm z-10 left-1 bottom-1 ${selectedVersion === version
                                                            ? "bg-primary text-primary-foreground border"
                                                            : "bg-muted text-secondary-foreground  border group-hover:bg-primary  group-hover:text-primary-foreground"
                                                            }`}
                                                    >
                                                        v{version}
                                                    </div>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            {/* TOOLBAR COMPONENT, IFRAME COMPONENT, AND CODE AREA NOTICE FLEX COLUMN */}
                            <div className="w-full sm:order-2 relative h-full flex flex-col gap-3 flex-1 lg:p-3 bg-background rounded-xl">
                                {/* Toolbar */}
                                <div data-id="toolbar-top" className="flex items-center gap-8">
                                    {/* Prompt and buttons */}
                                    <div className="hidden lg:flex flex-1">
                                        <CommitPropComponent></CommitPropComponent>
                                        <CommitPromptRightSideComponent handleCodeToggle={handleCodeToggle}></CommitPromptRightSideComponent>
                                    </div>
                                </div>



                                {/* <div className="@iframeandcodecontainer flex flex-row h-full "> */}
                                    {/* Iframe container */}
                                    
                                <div className="flex flex-1 relative mx-auto h-full w-full">
                                    <div className={cn("absolute inset-0 overflow-hidden rounded-lg border border-black/5 bg-muted shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.04)] duration-200 transition-all", { "w-[calc(50%-.5rem)]" : showCode, "w-full" : !showCode})}>
                                        <div className="relative w-full h-full overflow-hidden pointer-events-auto">
                                            <iframe
                                                src={
                                                    selectedVersion !== null
                                                        ? `/api/v${selectedVersion}/iframe`
                                                        : null
                                                }
                                                className="w-full h-full"
                                            />
                                        </div>
                                    </div>
                                    {showCode && <CodeViewComponent/> }

                                </div>
                                          

                                {/* </div> */}




                            </div>

                            {/* Code editor */}

                        </div>

                        {/* Bottom toolbar */}
                        <div data-id="toolbar-bottom" className="w-full lg:hidden">
                            {/* Prompt and buttons */}
                        </div>
                    </div>

                    {/* History sidebar */}
                    <FloatingPromptInput></FloatingPromptInput>

                </div>



            </div>
        </div>
    );
}