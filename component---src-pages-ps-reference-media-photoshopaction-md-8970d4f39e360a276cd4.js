"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[51393],{25393:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return s}});var n=a(87462),m=a(63366),r=(a(15007),a(64983)),d=a(91515),i=["components"],o={},l={_frontmatter:o},p=d.Z;function s(e){var t=e.components,a=(0,m.Z)(e,i);return(0,r.mdx)(p,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"photoshopaction"},"photoshopAction"),(0,r.mdx)("p",null,"The module that facilitates Actions being performed in the\nUXP-Photoshop world. You may perform your own ",(0,r.mdx)("inlineCode",{parentName:"p"},"batchPlay")," commands,\nor attach listeners using this module."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"var PhotoshopAction = require('photoshop').action;\n")),(0,r.mdx)("h2",{id:"functions"},"Functions"),(0,r.mdx)("h3",{id:"addnotificationlistener"},"addNotificationListener"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"23.0"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,r.mdx)("p",null,"Attach a listener to a Photoshop event. A callback in the form\nof ",(0,r.mdx)("inlineCode",{parentName:"p"},"(eventName: string, descriptor: Descriptor) => void")," will be performed."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"await PhotoshopAction.addNotificationListener(['open'], onOpenNewDocument)\n")),(0,r.mdx)("h4",{id:"parameters"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"events")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"string"),"[]")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"notifier")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"NotificationListener")))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"batchplay"},"batchPlay"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"23.0"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Promise"),"<ActionDescriptor[]",">"),(0,r.mdx)("p",null,"Performs a batchPlay call with the provided commands. Equivalent\nto an ",(0,r.mdx)("inlineCode",{parentName:"p"},"executeAction")," in ExtendScript."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"var target = { _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum'}\nvar commands = [{ _obj: 'hide', _target: target }]\nawait PhotoshopAction.batchPlay(commands)\n")),(0,r.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"commands")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"ActionDescriptor[]")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options?")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/objects/options/batchplaycommandoptions/"},(0,r.mdx)("em",{parentName:"a"},"BatchPlayCommandOptions")))))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"batchplaysync"},"batchPlaySync"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"23.1"),(0,r.mdx)("p",null,"ActionDescriptor[]"),(0,r.mdx)("p",null,"Performs a batchPlay call with the provided commands. Equivalent\nto an ",(0,r.mdx)("inlineCode",{parentName:"p"},"executeAction")," in ExtendScript."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"var target = { _ref: 'layer', _enum: 'ordinal', _value: 'targetEnum'}\nvar commands = [{ _obj: 'hide', _target: target }]\nawait PhotoshopAction.batchPlay(commands)\n")),(0,r.mdx)("h4",{id:"parameters-2"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"commands")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"ActionDescriptor[]")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"options?")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/objects/options/batchplaycommandoptions/"},(0,r.mdx)("em",{parentName:"a"},"BatchPlayCommandOptions")))))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"getidfromstring"},"getIDFromString"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"24.0"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"number")),(0,r.mdx)("p",null,"Return the identifier number assigned to an action string value.\nIf the string is not already registered, a new ID will be created and returned."),(0,r.mdx)("h4",{id:"parameters-3"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"value")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"string"))))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"removenotificationlistener"},"removeNotificationListener"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"23.0"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,r.mdx)("p",null,"Detaches a listener from a Photoshop event.\nSee ",(0,r.mdx)("a",{parentName:"p",href:"#addNotificationListener"},"addNotificationListener")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"await PhotoshopAction.removeNotificationListener(['open'], onOpenNewDocument)\n")),(0,r.mdx)("h4",{id:"parameters-4"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"events")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("em",{parentName:"td"},"string"),"[]")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"notifier")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"NotificationListener")))),(0,r.mdx)("hr",null),(0,r.mdx)("h3",{id:"validatereference"},"validateReference"),(0,r.mdx)("span",{className:"minversion",style:{display:"block",marginBottom:"-1em",marginLeft:"36em",cssFloat:"left",opacity:"0.5"}},"23.1"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"boolean")),(0,r.mdx)("p",null,"Synchronously validates the given action reference, returning true if it still\nexists. For example, calling this with a closed document would return false."),(0,r.mdx)("p",null,"This feature is intended for advanced developers who understand well how batchPlay works.\nValidate reference could get handy when you want to add new DOM functionality or use low-level code for\nperformance optimization."),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"../batchplay#action-references"},"Action references")," for details."),(0,r.mdx)("p",null,"Supported reference classes:\n",(0,r.mdx)("inlineCode",{parentName:"p"},"action"),",\n",(0,r.mdx)("inlineCode",{parentName:"p"},"document"),",\n",(0,r.mdx)("inlineCode",{parentName:"p"},"channel"),",\n",(0,r.mdx)("inlineCode",{parentName:"p"},"layer"),",\n",(0,r.mdx)("inlineCode",{parentName:"p"},"guide"),",\n",(0,r.mdx)("inlineCode",{parentName:"p"},"historyState"),",\n",(0,r.mdx)("inlineCode",{parentName:"p"},"compsClass"),",\n",(0,r.mdx)("inlineCode",{parentName:"p"},"path"),",\n",(0,r.mdx)("inlineCode",{parentName:"p"},"actionSet")),(0,r.mdx)("h4",{id:"parameters-5"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"ref")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"ActionReference ","|"," ActionReference[]")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-media-photoshopaction-md-8970d4f39e360a276cd4.js.map