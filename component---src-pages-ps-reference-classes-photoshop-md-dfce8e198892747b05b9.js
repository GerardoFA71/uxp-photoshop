(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[5992],{3999:function(e,t,a){"use strict";a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return i}});var n=a(22122),r=a(19756),m=(a(15007),a(64983)),d=a(99536),o=["components"],p={},l={_frontmatter:p},s=d.Z;function i(e){var t=e.components,a=(0,r.Z)(e,o);return(0,m.mdx)(s,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"photoshop"},"Photoshop"),(0,m.mdx)("p",null,"The top level application object, root of the Photoshop DOM"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre"},"const app = require('photoshop').app\n")),(0,m.mdx)("p",null,"From here you can access open documents, tools, UI elements and run commands or menu items."),(0,m.mdx)("h2",{id:"properties"},"Properties"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Access"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"actionTree"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/actionset/"},(0,m.mdx)("em",{parentName:"a"},"ActionSet")),"[]"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Read-only"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Returns the action tree shown in Actions panel, as an array of ActionSets, each containing actions")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"activeDocument"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/document/"},(0,m.mdx)("em",{parentName:"a"},"Document"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Read-write"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The current active document")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"backgroundColor"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/solidcolor/"},(0,m.mdx)("em",{parentName:"a"},"SolidColor"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Read-only"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The default background color and color style for documents.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"currentTool"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/objects/tool/"},(0,m.mdx)("em",{parentName:"a"},"Tool"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Read-only"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Current selected tool. For now, the Tool class is an object with only an ","`","id","`"," field. In the future, we aim to provide tools with their own classes")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"displayDialogs"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#dialogmodes"},(0,m.mdx)("em",{parentName:"a"},"DialogModes"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Read-write"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The dialog mode for the application, which controls what types of dialogs should be displayed when your code is interacting with Photoshop.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"documents"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/documents/"},(0,m.mdx)("em",{parentName:"a"},"Documents"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Read-only"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"A list of the documents currently open")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"fonts"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/textfonts/"},(0,m.mdx)("em",{parentName:"a"},"TextFonts"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Read-only"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The fonts installed on this system.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"foregroundColor"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/classes/solidcolor/"},(0,m.mdx)("em",{parentName:"a"},"SolidColor"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Read-write"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The default foreground color (used to paint, fill, and stroke selections)")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},"typename"),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"string")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"Read-only"),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The class name of the referenced Photoshop object")))),(0,m.mdx)("h2",{id:"methods"},"Methods"),(0,m.mdx)("h3",{id:"batchplay"},"batchPlay"),(0,m.mdx)("p",null,(0,m.mdx)("em",{parentName:"p"},"Promise"),"<",(0,m.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/interfaces/actiondescriptor/"},(0,m.mdx)("em",{parentName:"a"},"ActionDescriptor")),"[]",">"),(0,m.mdx)("p",null,"At the heart of all our APIs is batchPlay. It is the evolution of executeAction. It accepts\nActionDescriptors deserialized from JS objects, and can play multiple descriptors sequentially\nwithout updating the UI. This API is subject to change and may be accessible in other ways in the future."),(0,m.mdx)("h4",{id:"parameters"},"Parameters"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("inlineCode",{parentName:"td"},"commands")),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"any"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("inlineCode",{parentName:"td"},"options")),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"any"))))),(0,m.mdx)("hr",null),(0,m.mdx)("h3",{id:"bringtofront"},"bringToFront"),(0,m.mdx)("p",null,(0,m.mdx)("em",{parentName:"p"},"void")),(0,m.mdx)("p",null,"Brings application to focus, useful when your script ends, or requires an input"),(0,m.mdx)("hr",null),(0,m.mdx)("h3",{id:"convertunits"},"convertUnits"),(0,m.mdx)("p",null,(0,m.mdx)("em",{parentName:"p"},"number")),(0,m.mdx)("p",null,"Convert the given value from one unit to another. Available units are:\nConstants.Units.{CM, MM, INCHES, PIXELS, POINTS, PICAS}.\nUse ",(0,m.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/document/#resolution"},"Document.resolution")," when converting from or to PIXELS.\nFor example, use this routine for converting a document's width from pixels to inches."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"// convert the current document's width to inches\nconst exportDoc = psApp.activeDocument;\nlet widthInInches = psApp.convertUnits(exportDoc.width, \n                                       Constants.Units.PIXELS, \n                                       Constant.Units.INCHES, \n                                       exportDoc.resolution);\n\n")),(0,m.mdx)("h4",{id:"parameters-1"},"Parameters"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("inlineCode",{parentName:"td"},"fromValue")),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"number")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The value that is to be converted.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("inlineCode",{parentName:"td"},"fromUnits")),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#units"},(0,m.mdx)("em",{parentName:"a"},"Units"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The unit that the fromValue is in. Use ",(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#units"},"Constants.Units")," for valid values.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("inlineCode",{parentName:"td"},"toUnits")),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#units"},(0,m.mdx)("em",{parentName:"a"},"Units"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The unit that the return value is in. Use ",(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/modules/constants/#units"},"Constants.Units")," for valid values.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("inlineCode",{parentName:"td"},"resolution?")),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"number")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"The pixels per inch value to use when converting to and from pixel values.")))),(0,m.mdx)("hr",null),(0,m.mdx)("h3",{id:"createdocument"},"createDocument"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"async")," : ",(0,m.mdx)("em",{parentName:"p"},"Promise"),"<",(0,m.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/document/"},(0,m.mdx)("em",{parentName:"a"},"Document")),">"),(0,m.mdx)("p",null,"Create a new document."),(0,m.mdx)("p",null,'No options will create a document of 7 x 5 inches at 300 pixels per inch.\nThis is the same as the "Default Photoshop Size" preset.'),(0,m.mdx)("p",null,"An object with a 'preset' string parameter can be used to specify any of\nthe other presets that come installed with Photoshop or created by users."),(0,m.mdx)("p",null,"An object with one or more parameters can also be supplied. Any parameter\nmissing will be set to the default of: width 2100 pixels, height 1500 pixels,\nresolution 300 pixels per inch, mode: @RGBColorMode and a fill of white with\nno transparency."),(0,m.mdx)("h4",{id:"parameters-2"},"Parameters"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("inlineCode",{parentName:"td"},"options?")),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("a",{parentName:"td",href:"/uxp-photoshop/ps_reference/objects/createoptions/documentcreateoptions/"},(0,m.mdx)("em",{parentName:"a"},"DocumentCreateOptions"))),(0,m.mdx)("td",{parentName:"tr",align:"left"},"@DocumentCreateOptions")))),(0,m.mdx)("hr",null),(0,m.mdx)("h3",{id:"open"},"open"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"async")," : ",(0,m.mdx)("em",{parentName:"p"},"Promise"),"<",(0,m.mdx)("a",{parentName:"p",href:"/uxp-photoshop/ps_reference/classes/document/"},(0,m.mdx)("em",{parentName:"a"},"Document")),">"),(0,m.mdx)("p",null,"Opens the specified document and returns the model"),(0,m.mdx)("blockquote",null,(0,m.mdx)("p",{parentName:"blockquote"},"(0.4.0) Please note that this API now requires you to provide a UXPFileEntry")),(0,m.mdx)("h4",{id:"parameters-3"},"Parameters"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("inlineCode",{parentName:"td"},"entry?")),(0,m.mdx)("td",{parentName:"tr",align:"left"},"File")))),(0,m.mdx)("hr",null),(0,m.mdx)("h3",{id:"showalert"},"showAlert"),(0,m.mdx)("p",null,(0,m.mdx)("em",{parentName:"p"},"Promise"),"<void",">"),(0,m.mdx)("p",null,"Shows an alert in Photoshop with the given message"),(0,m.mdx)("h4",{id:"parameters-4"},"Parameters"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,m.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("inlineCode",{parentName:"td"},"message")),(0,m.mdx)("td",{parentName:"tr",align:"left"},(0,m.mdx)("em",{parentName:"td"},"string"))))))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-classes-photoshop-md-dfce8e198892747b05b9.js.map