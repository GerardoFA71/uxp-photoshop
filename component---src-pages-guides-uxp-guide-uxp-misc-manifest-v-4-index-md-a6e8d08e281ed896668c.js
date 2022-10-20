"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[9758],{79800:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return s}});var a=t(87462),i=t(63366),d=(t(15007),t(64983)),l=t(91515),r=["components"],m={},o={_frontmatter:m},p=l.Z;function s(e){var n=e.components,t=(0,i.Z)(e,r);return(0,d.mdx)(p,(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"uxp-manifest-v4"},"UXP Manifest v4"),(0,d.mdx)("p",null,"The plugin's manifest is where you include metadata about your plugin. Simply put, the manifest is a list of facts about your plugin in the form of a JSON object. No executable code goes into your manifest."),(0,d.mdx)("p",null,"The manifest is located in your plugin's root folder and must be named ",(0,d.mdx)("inlineCode",{parentName:"p"},"manifest.json"),"."),(0,d.mdx)("p",null,"If you are a bit rusty at reading JSON, ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON"},"here's a good reference"),"."),(0,d.mdx)("p",null,"UXP 6.0 has introduced ",(0,d.mdx)("a",{parentName:"p",href:"../manifest-v5/"},"manifest v5"),". "),(0,d.mdx)("h2",{id:"example-manifest-v4"},"Example manifest (v4)"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "manifestVersion": 4,\n    "id": "YOUR_ID_HERE",\n    "name": "Name of your plugin",\n    "version": "1.0.0",\n    "main": "index.html",\n    "host": {\n        "app": "PS",\n        "minVersion": "23.0.0"\n    },\n    "entrypoints": [\n        {\n            "type": "command",\n            "id": "commandFn",\n            "label": {\n                "default": "Show A Dialog"\n            }\n        },\n        {\n            "type": "panel",\n            "id": "panelName",\n            "label": {\n                "default": "Panel Name"\n            },\n            "minimumSize": {"width": 230, "height": 200},\n            "maximumSize": {"width": 2000, "height": 2000},\n            "preferredDockedSize": {"width": 230, "height": 300},\n            "preferredFloatingSize": {"width": 230, "height": 300},\n            "icons": [\n                {"width":23,"height":23,"path":"icons/dark.png","scale":[1,2],"theme":["darkest","dark","medium"]},\n                {"width":23,"height":23,"path":"icons/light.png","scale":[1,2],"theme":["lightest","light"]}\n            ]\n        }\n    ],\n    "icons": [\n        { "width": 23, "height": 23, "path": "icons/icon_D.png", "scale": [ 1, 2 ], "theme": [ "dark", "darkest" ], "species": [ "generic" ] },\n        { "width": 23, "height": 23, "path": "icons/icon_N.png", "scale": [ 1, 2 ], "theme": [ "lightest", "light" ], "species": [ "generic" ] }\n    ]\n}\n')),(0,d.mdx)("p",null,"See the sections below to learn more about each key/value field. All fields are required unless otherwise noted below."),(0,d.mdx)("h2",{id:"top-level-metadata"},"Top-level metadata"),(0,d.mdx)("p",null,"The top level of the manifest JSON object contains high-level information about your plugin."),(0,d.mdx)("p",null,'Here are the definitions of the keywords in the "Required" column:'),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Develop - required field for the plugin to be loaded."),(0,d.mdx)("li",{parentName:"ul"},"Publish - required field for plugins to be submitted in the Adobe Developer Console and published in the Plugin Manager.")),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Key path"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"),(0,d.mdx)("th",{parentName:"tr",align:null},"Required"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"manifestVersion")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"number")),(0,d.mdx)("td",{parentName:"tr",align:null},"The version of the manifest. For Photoshop, this should be ",(0,d.mdx)("inlineCode",{parentName:"td"},"4")," or higher."),(0,d.mdx)("td",{parentName:"tr",align:null},"Develop / Publish")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"id")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Unique identifier for your plugin. You can get your unique ID on the ",(0,d.mdx)("a",{parentName:"td",href:"https://console.adobe.io/projects"},"Adobe Developer Console"),".%7C Develop / Publish"),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"name")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"The name should be 3 - 45 characters. We recommend your plugin name matches the ",(0,d.mdx)("em",{parentName:"td"},"project name")," you created when getting your plugin ID from the Adobe Developer Console."),(0,d.mdx)("td",{parentName:"tr",align:null},"Develop / Publish")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"version")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Version number of your plugin in ",(0,d.mdx)("inlineCode",{parentName:"td"},"x.y.z")," format. ",(0,d.mdx)("br",null),"Version must be three segments and each version component must be between ",(0,d.mdx)("inlineCode",{parentName:"td"},"0")," and ",(0,d.mdx)("inlineCode",{parentName:"td"},"99"),"."),(0,d.mdx)("td",{parentName:"tr",align:null},"Develop / Publish")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"main")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Path to the your plugin initialization code. This can be a JavaScript file or an HTML file."),(0,d.mdx)("td",{parentName:"tr",align:null},"Optional (defaults to ",(0,d.mdx)("inlineCode",{parentName:"td"},"main.js"),")")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"icons")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"IconDefinition[]")),(0,d.mdx)("td",{parentName:"tr",align:null},"Icons for your plugin (which may be rendered in various contexts, such as the plugin panel) ",(0,d.mdx)("br",null)," PNG, JPG/JPEG formats are supported and the max file size for each icon is 1MB. ",(0,d.mdx)("br",null)," You should specify at least the 1x and 2x size. Icons for the Plugin Manager are uploaded directly via the Adobe Developer Console, not included within your plugin itself. See our ",(0,d.mdx)("a",{parentName:"td",href:"../../../distribution/packaging-your-plugin/"},'"Publishing your plugin" guide')," to learn more."),(0,d.mdx)("td",{parentName:"tr",align:null},"Publish")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"host")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"HostDefinition\\|HostDefinition[]")),(0,d.mdx)("td",{parentName:"tr",align:null},"Describes the supported applications that can be used with this plugin. This can include the type of application, the minimum required version, or the maximum version of the host app that the plugin supports. ",(0,d.mdx)("br",null),(0,d.mdx)("br",null)," ",(0,d.mdx)("strong",{parentName:"td"},"Note:")," An array can ONLY be used during development. A single definition will be needed when submitting to the marketplace"),(0,d.mdx)("td",{parentName:"tr",align:null},"Develop / Publish")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"entryPoints")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"EntryPointDefinition[]")),(0,d.mdx)("td",{parentName:"tr",align:null},"Describes the entries your plugin adds to the ",(0,d.mdx)("em",{parentName:"td"},"Plugins")," menu & plugin panel. See the next section for details."),(0,d.mdx)("td",{parentName:"tr",align:null},"Develop / Publish")))),(0,d.mdx)("h2",{id:"icons"},"Icons"),(0,d.mdx)("p",null,"Icons are not required during development, but ",(0,d.mdx)("em",{parentName:"p"},"must be provided")," when distributing through the Plugin Marketplace.\nThe ",(0,d.mdx)("inlineCode",{parentName:"p"},"icons")," field is an array of a ",(0,d.mdx)("inlineCode",{parentName:"p"},"IconDefinition"),"s."),(0,d.mdx)("h3",{id:"icondefinition"},"IconDefinition"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Key"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"width")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"number")),(0,d.mdx)("td",{parentName:"tr",align:null},"Width in logical pixels")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"height")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"number")),(0,d.mdx)("td",{parentName:"tr",align:null},"Height in logical pixels")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"path")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Path to the icon (relative to the plugin root)")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"scale")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"number[]")),(0,d.mdx)("td",{parentName:"tr",align:null},"Array of scales provided. For example, ",(0,d.mdx)("inlineCode",{parentName:"td"},"[1, 2]")," means that there is a ",(0,d.mdx)("inlineCode",{parentName:"td"},"@1x")," and ",(0,d.mdx)("inlineCode",{parentName:"td"},"@2x")," version of the icon specified at the ",(0,d.mdx)("inlineCode",{parentName:"td"},"path"),". (Densities other than ",(0,d.mdx)("inlineCode",{parentName:"td"},"1x")," can be specified by adding ",(0,d.mdx)("inlineCode",{parentName:"td"},"@2x")," before the icon's extension)")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"theme")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string[]")),(0,d.mdx)("td",{parentName:"tr",align:null},"Array of themes this icon supports. Photoshop supports ",(0,d.mdx)("inlineCode",{parentName:"td"},"lightest"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"light"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"dark"),", and ",(0,d.mdx)("inlineCode",{parentName:"td"},"darkest"),". If all themes are compatible with the icon, you can use ",(0,d.mdx)("inlineCode",{parentName:"td"},"all"),". (Default is ",(0,d.mdx)("inlineCode",{parentName:"td"},"all"),").")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"species")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string[]")),(0,d.mdx)("td",{parentName:"tr",align:null},"Identifies the type of icon and where it would make sense to display it. The default is ",(0,d.mdx)("inlineCode",{parentName:"td"},"generic"),", meaning that Photoshop is free to use this icon anywhere.")))),(0,d.mdx)("h2",{id:"host"},"Host"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"host")," field is an ",(0,d.mdx)("em",{parentName:"p"},"object")," matching the ",(0,d.mdx)("inlineCode",{parentName:"p"},"HostDefinition")," format specified below. This entry allows your plugin to specify which app your plugin can run on such as Adobe XD or Photoshop. During development, the field can contain an ",(0,d.mdx)("em",{parentName:"p"},"array")," of HostDefinition's. This can be very convient during development of cross-compatible UXP plugins. However, during submission to the marketplace, only one HostDefinition is allowed."),(0,d.mdx)("h3",{id:"hostdefinition"},"HostDefinition"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Key"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"),(0,d.mdx)("th",{parentName:"tr",align:null},"Required"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"app")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Indicates the supported application for this plugin (currently, the only valid values here are ",(0,d.mdx)("inlineCode",{parentName:"td"},'"XD"')," and ",(0,d.mdx)("inlineCode",{parentName:"td"},'"PS"'),")."),(0,d.mdx)("td",{parentName:"tr",align:null},"Develop / Publish")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"minVersion")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Minimum required version of the host app (in ",(0,d.mdx)("inlineCode",{parentName:"td"},"x.y")," format) that can run this plugin. The lowest valid version for manifest V4 plugins is version ",(0,d.mdx)("inlineCode",{parentName:"td"},"22.0"),". ",(0,d.mdx)("br",null)," ",(0,d.mdx)("strong",{parentName:"td"},"Note:")," The version number must be at least two segments. Typically, you'll leave the minor segment set to ",(0,d.mdx)("inlineCode",{parentName:"td"},"0"),", e.g. ",(0,d.mdx)("inlineCode",{parentName:"td"},"22.0"),"."),(0,d.mdx)("td",{parentName:"tr",align:null},"Develop / Publish")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"maxVersion")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Maximum version of host app that can run this plugin. Same formatting as ",(0,d.mdx)("inlineCode",{parentName:"td"},"host.minVersion"),"."),(0,d.mdx)("td",{parentName:"tr",align:null},"Optional")))),(0,d.mdx)("h2",{id:"entry-points"},"Entry Points"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"entryPoints")," field is an ",(0,d.mdx)("em",{parentName:"p"},"array")," of objects matching the ",(0,d.mdx)("inlineCode",{parentName:"p"},"EntryPointDefinition")," format specified below. These entries appear both in the ",(0,d.mdx)("em",{parentName:"p"},"Plugins")," menu in the native menubar, and the plugin panel."),(0,d.mdx)("p",null,"Each entry point specifies a ",(0,d.mdx)("inlineCode",{parentName:"p"},"type"),", to create either a direct-action command or a panel show/hide command."),(0,d.mdx)("h3",{id:"entrypointdefinition"},"EntryPointDefinition"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Key"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"type")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Entry point type: either ",(0,d.mdx)("inlineCode",{parentName:"td"},'"command"')," or ",(0,d.mdx)("inlineCode",{parentName:"td"},'"panel"'),".")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"id")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Unique identifier for the entry point. This ",(0,d.mdx)("inlineCode",{parentName:"td"},"id")," will also be mapped to entrypoints defined in your plugin code.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"label")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},"Label for this menu item that the user will select to run your plugin. May be a single string ",(0,d.mdx)("em",{parentName:"td"},"or")," a dictionary of localized strings.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"shortcut")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Object")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("em",{parentName:"td"},"Optional.")," ",(0,d.mdx)("br",null),(0,d.mdx)("br",null),' Object defining Mac and Windows keyboard shortcuts for this menu item. See "Keyboard shortcuts" below for details. Only valid for ',(0,d.mdx)("inlineCode",{parentName:"td"},"command")," entry points.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"minimumSize")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Object")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("em",{parentName:"td"},"Optional.")," Valid only for ",(0,d.mdx)("inlineCode",{parentName:"td"},"panel")," entry points. ",(0,d.mdx)("br",null),(0,d.mdx)("br",null)," Object defining the preferred minimum size of the panel. This object is of the form ",(0,d.mdx)("inlineCode",{parentName:"td"},"{width: number, height: number}")," where each length is in pixel units. The host app may not guarantee the minimum width depending upon context.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"maximumSize")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Object")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("em",{parentName:"td"},"Optional.")," Valid only for ",(0,d.mdx)("inlineCode",{parentName:"td"},"panel")," entry points. ",(0,d.mdx)("br",null),(0,d.mdx)("br",null)," Object defining the preferred maximum size of the panel. This object is of the form ",(0,d.mdx)("inlineCode",{parentName:"td"},"{width: number, height: number}")," where each length is in pixel units. The host app may not guarantee the maximum width depending upon context.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"preferredDockedSize")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Object")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("em",{parentName:"td"},"Optional.")," Valid only for ",(0,d.mdx)("inlineCode",{parentName:"td"},"panel")," entry points. ",(0,d.mdx)("br",null),(0,d.mdx)("br",null)," Object defining the preferred size of the panel when docked. This object is of the form ",(0,d.mdx)("inlineCode",{parentName:"td"},"{width: number, height: number}")," where each length is in pixel units. This setting is a preference, and may not be honored.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"preferredFloatingSize")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"Object")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("em",{parentName:"td"},"Optional.")," Valid only for ",(0,d.mdx)("inlineCode",{parentName:"td"},"panel")," entry points. ",(0,d.mdx)("br",null),(0,d.mdx)("br",null)," Object defining the preferred size of the panel when floating. This object is of the form ",(0,d.mdx)("inlineCode",{parentName:"td"},"{width: number, height: number}")," where each length is in pixel units. This setting is a preference, and may not be honored.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"icons")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"array<object>")),(0,d.mdx)("td",{parentName:"tr",align:null},"Icons for your panel. Each panel in a plugin requires its own set of icon set, which is shown in the toolbars when minimized, and has no additional treatment supplied. A panel icon is 23x23 (46x46) in size, and can be transparent. These are different from the icons in the main plugin. They are optional during development, but ",(0,d.mdx)("em",{parentName:"td"},"must")," be present in the manifest and the project if the plugin is submitted to the Plugin Marketplace via the Developer Console.")))),(0,d.mdx)("h3",{id:"keyboard-shortcuts"},"Keyboard shortcuts"),(0,d.mdx)("blockquote",null,(0,d.mdx)("p",{parentName:"blockquote"},"Shortcuts are not yet available for plugins.")),(0,d.mdx)("h2",{id:"menu-localization"},"Menu Localization"),(0,d.mdx)("p",null,"Plugin menu item labels or panel labels can be localized to match the host's current UI language setting. Other manifest fields such as ",(0,d.mdx)("inlineCode",{parentName:"p"},"name")," ",(0,d.mdx)("em",{parentName:"p"},"cannot be localized yet."),"\nLocalized labels are represented as an object containing multiple translations, instead of a single string value:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'"label": {\n    "default": "Menu Label",\n    "fr": "Etiquette de Menu",\n    "de": "Menübezeichnung"\n}\n')),(0,d.mdx)("p",null,"A default string is always required."),(0,d.mdx)("h2",{id:"inheritance-and-overrides"},"Inheritance and Overrides"),(0,d.mdx)("p",null,"Certain top-level fields can be overridden deeper in the manifest."),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"icons")," can be overridden for each panel's entry point.")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-uxp-guide-uxp-misc-manifest-v-4-index-md-a6e8d08e281ed896668c.js.map