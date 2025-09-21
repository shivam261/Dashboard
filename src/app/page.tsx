
"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { HoverEffect } from "../components/ui/card-hover-effect";

export default function SparklesPreview() {
  const projects = [
    {
      title: "Integration Content",
      description:
        "Operating an integration scenario requires certain integration artifacts. Using the OData API you can access integration artifacts. Integration artifacts contain the information required for the runtime components to process messages. ",
      link: "https://api.sap.com/api/IntegrationContent/overview",
    },
    {
      title: "Runtime Artifacts",
      description:
        "The Integration Runtime Artifacts API lets you query information about all runtime artifacts that are deployed in your tenant.",
      link: "https://api.sap.com/api/IntegrationContent/resource/Runtime_Artifacts",
    },
    {
      title: "Integration flow",
      description:
        "An integration flow is a graphical representation of the data flow between different systems in an integration scenario. It defines the sequence of steps and the data transformations that occur as data is processed and transferred between systems.",
      link: "https://api.sap.com/api/IntegrationContent/resource/Integration_Flow",
    },
    {
      title: "Value mapping",
        description:
          "A value mapping allows you to transform one representation of an object to another representation. In most situations when data is exchanged between two systems, two ways of representing the same data need to be translated.",
      link: "https://api.sap.com/api/IntegrationContent/resource/Value_Mapping",
    },
    {
      title: "OData API",
      description:
        "You can use an OData API to expose data sources as OData endpoints. You can design an OData in the Web UI Design section. The system generates from an OData API an integration flow that contains by default an OData sender adapter.",
      link: "https://api.sap.com/api/IntegrationContent/documents",
    },
    {
      title: "Integration Packages - Design",
      description:
        "Represents an integration package in the Cloud Integration Design section.You can use resource IntegrationPackages to access (create, update, delete, read) integration packages.",
      link: "https://api.sap.com/api/IntegrationContent/document",
    },
  ];

  return (
    <div 
      className="min-h-screen w-full bg-black flex flex-col overflow-hidden"
      style={{ 
        minHeight: '100vh', 
        width: '100%', 
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      {/* Full width flex container for menubar */}
      <div 
        className="fixed top-4 left-0 w-full flex justify-center items-center z-50" 
        style={{ 
          position: 'fixed', 
          top: '1rem',
          left: 0,
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          zIndex: 50,
          pointerEvents: 'auto'
        }}
      >
        <div style={{ position: 'relative', zIndex: 51 }}>
          <Menubar className="dark:bg-gray-900/90 dark:border-gray-700 dark:text-white bg-white border-gray-200 text-gray-900 backdrop-blur-sm">
            <MenubarMenu>
            <MenubarTrigger className="dark:text-white dark:hover:bg-gray-800">Login</MenubarTrigger>
            <MenubarContent className="dark:bg-gray-900 dark:border-gray-700">
              <MenubarItem className="dark:text-white dark:hover:bg-gray-800">
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem className="dark:text-white dark:hover:bg-gray-800">New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem className="dark:text-white dark:hover:bg-gray-800">Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem className="dark:text-white dark:hover:bg-gray-800">Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="dark:text-white dark:hover:bg-gray-800">Sign-up</MenubarTrigger>
            <MenubarContent className="dark:bg-gray-900 dark:border-gray-700">
              <MenubarItem className="dark:text-white dark:hover:bg-gray-800">Undo</MenubarItem>
              <MenubarItem className="dark:text-white dark:hover:bg-gray-800">Redo</MenubarItem>
              <MenubarSeparator />
              <MenubarItem className="dark:text-white dark:hover:bg-gray-800">Find</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="dark:text-white dark:hover:bg-gray-800">Team</MenubarTrigger>
            <MenubarContent className="dark:bg-gray-900 dark:border-gray-700">
              <MenubarItem className="dark:text-white dark:hover:bg-gray-800">Reload</MenubarItem>
              <MenubarItem className="dark:text-white dark:hover:bg-gray-800">Force Reload</MenubarItem>
              <MenubarSeparator />
              <MenubarItem className="dark:text-white dark:hover:bg-gray-800">Toggle Fullscreen</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        </div>
      </div>

      {/* Main content centered in remaining space */}
      <div className="flex-1 flex flex-col items-center justify-start pt-20" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '5rem' }}>
        <h1 
          className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20 mb-8"
          style={{
            fontSize: 'clamp(2rem, 8vw, 6rem)',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#ffffff',
            position: 'relative',
            zIndex: 20,
            marginBottom: '2rem'
          }}
        >
          Integration Content
        </h1>
        <div className="w-[40rem] h-40 relative mb-16" style={{ width: '40rem', height: '10rem', position: 'relative', marginBottom: '4rem' }}>
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        
        {/* Cards section after sparkling effect */}
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
      
    </div>
  );
}
