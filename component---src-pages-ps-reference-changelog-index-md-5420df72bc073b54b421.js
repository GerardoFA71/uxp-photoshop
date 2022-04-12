(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[7005],{55489:function(e,a,n){"use strict";n.r(a),n.d(a,{_frontmatter:function(){return d},default:function(){return p}});var t=n(22122),i=n(19756),o=(n(15007),n(64983)),l=n(99536),r=["components"],d={},m={_frontmatter:d},s=l.Z;function p(e){var a=e.components,n=(0,i.Z)(e,r);return(0,o.mdx)(s,(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"photoshop-api-changelog"},"Photoshop API Changelog"),(0,o.mdx)("h2",{id:"introduction"},"Introduction"),(0,o.mdx)("p",null,"As of now, this documentation site describes API functionality that is available for use to a select number of participants in ",(0,o.mdx)("a",{parentName:"p",href:"https://www.adobeprerelease.com/"},"Adobe Prerelease community"),". We will start to evolve the site to support users and plugin developers outside the Prerelease group, once more functionality is available, and when we can be more confident our changes are stable for the wider audience."),(0,o.mdx)("p",null,"If you would like to join the conversation, please consider joining the ",(0,o.mdx)("a",{parentName:"p",href:"https://www.adobeprerelease.com/"},"Adobe Prerelease community"),"!"),(0,o.mdx)("h2",{id:"photoshop-233-april-2022"},"Photoshop 23.3 (April 2022)"),(0,o.mdx)("h3",{id:"paths-support"},"Paths support"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../classes/document/"},"Document.pathItems")," property is now added, giving access to same APIs from ExtendScript to work with paths."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Document.pathItems")," provides the collection class ",(0,o.mdx)("a",{parentName:"li",href:"../classes/pathitems/"},"PathItems"),", which is a collection of ",(0,o.mdx)("a",{parentName:"li",href:"../classes/pathitem/"},"PathItem")," objects."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"PathItem.subPathItems")," provides the collection class ",(0,o.mdx)("a",{parentName:"li",href:"../classes/subpathitems/"},"SubPathItems"),", which is a collection of ",(0,o.mdx)("a",{parentName:"li",href:"../classes/subpathitem/"},"SubPathItem")," objects."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"SubPathItem.pathPoints")," provides the collection class ",(0,o.mdx)("a",{parentName:"li",href:"../classes/pathpoints/"},"PathPoints"),", which is a collection of ",(0,o.mdx)("a",{parentName:"li",href:"../classes/pathpoint/"},"PathPoint")," objects."),(0,o.mdx)("li",{parentName:"ul"},"Create new paths in the document using ",(0,o.mdx)("a",{parentName:"li",href:"../classes/pathitems/#add"},(0,o.mdx)("inlineCode",{parentName:"a"},"PathItems.add"))," method by providing ",(0,o.mdx)("inlineCode",{parentName:"li"},"PathPointInfo")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"SubPathInfo")," objects. Constructors for them can be found in ",(0,o.mdx)("a",{parentName:"li",href:"../classes/photoshop/"},"app")," object.")),(0,o.mdx)("h3",{id:"load-on-launch-support"},"Load on Launch support"),(0,o.mdx)("p",null,"You can now set your plugin manifest to load your plugin on app launch. See ",(0,o.mdx)("a",{parentName:"p",href:"../../guides/uxp_guide/uxp-misc/manifest-v4/photoshop-manifest/"},"Photoshop Manifest")," for details."),(0,o.mdx)("h3",{id:"batchplay-development-helper-copy-as-javascript"},"batchPlay development helper: Copy as Javascript"),(0,o.mdx)("p",null,"It is now possible to use the Photoshop Actions panel to help build your plugin. Record valid actions, and let Photoshop generate readable and valid batchPlay to use in your UXP plugin. See the ",(0,o.mdx)("a",{parentName:"p",href:"../media/batchplay.md#accepted-action-descriptors"},"batchPlay documentation"),' under "Accepted action descriptors".'),(0,o.mdx)("h3",{id:"core-event-useridle"},'Core event: "userIdle"'),(0,o.mdx)("p",null,"This event is generated when Photoshop detects that a user becomes idle, while Photoshop is the foreground application. A plugin must specify a number of idle seconds, and then may choose to batch process-intensive tasks. See ",(0,o.mdx)("a",{parentName:"p",href:"../media/photoshopcore/"},"photoshopCore"),"."),(0,o.mdx)("h3",{id:"interactive-mode-for-executeasmodal"},"Interactive Mode for executeAsModal"),(0,o.mdx)("p",null,"As an alterative to a UI-blocking progress bar when a plugin is within a Modal Execution scope, ",(0,o.mdx)("inlineCode",{parentName:"p"},"interactiveMode")," can be requested to allow for user interaction in specific circumstances. See ",(0,o.mdx)("a",{parentName:"p",href:"../media/executeasmodal#interactive-mode/"},"Interactive Mode"),"."),(0,o.mdx)("h2",{id:"photoshop-232-february-2022"},"Photoshop 23.2 (February 2022)"),(0,o.mdx)("h3",{id:"channel-support"},"Channel support"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../classes/channels/"},"Channels collections")," behave like other collections in the API. Channels further supports ",(0,o.mdx)("inlineCode",{parentName:"li"},"channels.add()")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"channels.removeAll()"),". "),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../classes/channel"},"Channel class"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Supports four types of channels, as listed in ",(0,o.mdx)("a",{parentName:"li",href:"../modules/constants/#channeltype"},"Constants.ChannelType"),": ",(0,o.mdx)("inlineCode",{parentName:"li"},"COMPONENT"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"MASKEDAREA"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"SELECTEDAREA"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"SPOTCOLOR"),"."),(0,o.mdx)("li",{parentName:"ul"},"Adds the following Channel properties: ",(0,o.mdx)("inlineCode",{parentName:"li"},"name"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"type"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"visible"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"histogram"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"color"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"opacity"),"."),(0,o.mdx)("li",{parentName:"ul"},"Adds the following Channel methods: ",(0,o.mdx)("inlineCode",{parentName:"li"},"remove()"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"merge()")," (for ChannelType.SPOTCOLOR)."),(0,o.mdx)("li",{parentName:"ul"},"Adds to the Document class: ",(0,o.mdx)("inlineCode",{parentName:"li"},"get compositeChannels"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"get activeChannels"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"set activeChannels"),".")))),(0,o.mdx)("h3",{id:"document-transformations"},"Document Transformations"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Document.crop(bounds: Bounds, angle, width, height)"),": Crops the document. The ",(0,o.mdx)("inlineCode",{parentName:"li"},"bounds")," paramter is an array of four coordinates for the region remaining after cropping, ","[left, top, right, bottom]","."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Document.resizeCanvas(width, height, Constants.AnchorPosition)"),": Changes the size of the canvas to display more or less of the image but does not change the image size. See ",(0,o.mdx)("inlineCode",{parentName:"li"},"resizeImage")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Document.resizeImage(width, heigh, resolution, Constants.ResampleMethod, amount)"),": Changes the size of the image. The ",(0,o.mdx)("inlineCode",{parentName:"li"},"amount")," of noise value when using preserve details (Range: 0 1 100)."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Document.rotateCanvas(angle)"),": Rotates the image and resizes the canvas to fit the resized image."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Document.trim(Constants.TrimType, top, left, bottom, right)"),": If ",(0,o.mdx)("inlineCode",{parentName:"li"},"TrimType.TRANSPARENT"),", trims the transparent area around the image on the specified sides of the canvas. Trims surround areas that color match the top left corner or bottom right corner pixel if ",(0,o.mdx)("inlineCode",{parentName:"li"},"TrimType.TOPLEFT")," or ",(0,o.mdx)("inlineCode",{parentName:"li"},"TrimType.BOTTOMRIGHT")," is specified, respectively.")),(0,o.mdx)("h3",{id:"layer-cut-and-copy"},"Layer cut and copy"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"layer.cut()"),": Cut the pixels out of the layer."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"layer.copy(merge: boolean)"),": Copy the layer or if a selection is present the merge option will copy from multiple layers..")),(0,o.mdx)("h3",{id:"layer-methods"},"Layer Methods"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"layer.duplicate(relativeObject?: Document | Layer, insertionLocation?: Constants.ElementPlacement, name?: string)"),": Duplicates the layer, creating a copy above it in layer stack and returns the newly created layer."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"layer.delete()"),": Deletes this layer from the document."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"layer.link()"),": Creates a link between this layer and the target layer if not already linked and returns a list of layers linked to this layer."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"layer.unlink()"),": Unlinks the layer from any existing links.")),(0,o.mdx)("h3",{id:"document-paste"},"Document paste"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"document.paste(intoSelection: boolean)"),": Pastes the contents of the clipboard into the document. If the optional argument is set to true and a selection is active, the contents are pasted into the selection.")),(0,o.mdx)("h3",{id:"document-methods"},"Document Methods"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Document.flatten()"),": Merges all visible layers in the document into a single layer."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Document.mergeVisibleLayers()"),": Flattens all visible layers in the document"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Document.revealAll()"),": Expands the document to show clipped sections."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Document.rasterizeAllLayers()"),": Rasterizes all layers."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Document.splitChannels()"),": Splits the document channels into separate, single-channel documents."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Document.duplicate()"),": Creates a copy of the document, switching to the copy.")),(0,o.mdx)("h3",{id:"solidcolor-api"},(0,o.mdx)("a",{parentName:"h3",href:"../classes/solidcolor"},"SolidColor")," API"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Add require('photoshop').app.SolidColor constructor, which allows for creation of SolidColor objects."),(0,o.mdx)("li",{parentName:"ul"},"APIs that accept colors now also accept SolidColor objects.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"app.foregroundColor and app.backgroundColor."),(0,o.mdx)("li",{parentName:"ul"},"app.documents.add ",(0,o.mdx)("inlineCode",{parentName:"li"},"fillColor")," property."),(0,o.mdx)("li",{parentName:"ul"},"Document.saveAs methods that use colors."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"require('photoshop').core.convertColor")," low level API added, used internally by SolidColor. It uses app color\nsettings to convert between color spaces.")),(0,o.mdx)("h2",{id:"adobe-photoshop-beta-build-65-sep-3-2021"},"Adobe Photoshop Beta Build 65: Sep 3, 2021"),(0,o.mdx)("h3",{id:"layer-transformations"},"Layer Transformations"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"layer.rotate(angle: number, anchor?: Constants.AnchorPosition)"),": Rotate by ",(0,o.mdx)("inlineCode",{parentName:"li"},"angle")," about ",(0,o.mdx)("inlineCode",{parentName:"li"},"anchor"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"layer.scale(width: number, height: number, anchor?: Constants.AnchorPosition)"),": Scale layer by ",(0,o.mdx)("inlineCode",{parentName:"li"},"width")," percent and ",(0,o.mdx)("inlineCode",{parentName:"li"},"height")," percent of the image, relative to ",(0,o.mdx)("inlineCode",{parentName:"li"},"anchor"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"layer.translate(horizontal: number, vertical: number)"),": Translate layer by ",(0,o.mdx)("inlineCode",{parentName:"li"},"horizontal")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"vertical")," offset (by pixel or percent).")),(0,o.mdx)("h3",{id:"appfonts-and-textfont-classes"},"app.fonts and TextFont classes"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"app.fonts")," getter: Returns all installed fonts"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"TextFont")," class and ",(0,o.mdx)("inlineCode",{parentName:"li"},"TextFonts")," collection class")),(0,o.mdx)("h3",{id:"document-properties"},"Document Properties"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Document.bitsPerChannel (read-write): The bits per color channel (type Constants.BitsPerChannelType)"),(0,o.mdx)("li",{parentName:"ul"},"Document.cloudDocument (read only): This document is in the Adobe Creative Cloud (type boolean)"),(0,o.mdx)("li",{parentName:"ul"},"Document.cloudWorkAreaDirectory (read only): Local directory for this cloud document (type string)"),(0,o.mdx)("li",{parentName:"ul"},"Document.histogram (read only): A histogram containing the number of pixels at each color intensity level for the composite channel. The array contains 256 members."),(0,o.mdx)("li",{parentName:"ul"},"Document.name (read only): The name of the document (type string)"),(0,o.mdx)("li",{parentName:"ul"},"Document.path (read only): Full file system path to this document, or the identifier if it is a cloud document (type string)"),(0,o.mdx)("li",{parentName:"ul"},"Document.quickMaskMode (read-write): The state of Quick Mask mode. If true, the app is in Quick Mask mode (type boolean)"),(0,o.mdx)("li",{parentName:"ul"},"Document.saved (read only): True if the document has been saved since the last change (type boolean)")),(0,o.mdx)("h3",{id:"document-color-profile-apis"},"Document Color Profile APIs"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Document.mode property (read only)"),(0,o.mdx)("li",{parentName:"ul"},"Document.colorProfileType and Document.colorProfileName properties (read-write)"),(0,o.mdx)("li",{parentName:"ul"},"Document.changeMode(), Document.convertProfile(), and Document.trap() methods")),(0,o.mdx)("h2",{id:"adobe-photoshop-beta-build-64-aug-6-2021"},"Adobe Photoshop Beta Build 64: Aug 6, 2021"),(0,o.mdx)("h3",{id:"documentsuspendhistory"},(0,o.mdx)("a",{parentName:"h3",href:"../classes/document/#suspendhistory"},"Document.suspendHistory")),(0,o.mdx)("p",null,"This API wraps around ",(0,o.mdx)("a",{parentName:"p",href:"https://adobe.ly/psmodal"},(0,o.mdx)("inlineCode",{parentName:"a"},"core.executeAsModal"))," within a single document to make it easier for you to run your code under a single history state. Unlike it's ExtendScript predecessor, this method takes a Javascript function, rather than a script string."),(0,o.mdx)("h3",{id:"layer-move-apis"},(0,o.mdx)("a",{parentName:"h3",href:"../classes/layer/#move"},"Layer Move APIs")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Arrange layers with ",(0,o.mdx)("inlineCode",{parentName:"li"},"layer.move(targetLayer, Constants.ElementPlacement)"),". Added ",(0,o.mdx)("inlineCode",{parentName:"li"},"Constants.ElementPlacement")," for moving layers: ",(0,o.mdx)("inlineCode",{parentName:"li"},'"placeAfter"')," (place below a layer, below group if group layer), ",(0,o.mdx)("inlineCode",{parentName:"li"},'"placeBefore"')," (place above a layer, above group if group layer), and ",(0,o.mdx)("inlineCode",{parentName:"li"},'"placeInside"')," (inside group layers only)."),(0,o.mdx)("li",{parentName:"ul"},"Send a layer to the back or bring a layer to the front with ",(0,o.mdx)("inlineCode",{parentName:"li"},"layer.sendToBack()")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"layer.bringToFront()"),". If ",(0,o.mdx)("inlineCode",{parentName:"li"},"layer")," is within a group, the commands will operate within that group.")),(0,o.mdx)("h2",{id:"adobe-photoshop-prerelease-build-61-jun-24-2021"},"Adobe Photoshop Prerelease Build 61: Jun 24, 2021"),(0,o.mdx)("h3",{id:"updated-dom-api"},"Updated DOM API"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"New ",(0,o.mdx)("inlineCode",{parentName:"li"},"Layers")," collection, the old ",(0,o.mdx)("inlineCode",{parentName:"li"},"layerTree")," object is now called ",(0,o.mdx)("inlineCode",{parentName:"li"},"layers")," but as a collection using the JavaScript Proxy object. See below for introduction of collections. The old ",(0,o.mdx)("inlineCode",{parentName:"li"},"layers")," behavior is no longer part of the DOM. Most scripts can be updated to replace ",(0,o.mdx)("inlineCode",{parentName:"li"},"layerTree")," with ",(0,o.mdx)("inlineCode",{parentName:"li"},"layers"),".  A document and a layer, if the layer kind is group, will have a valid ",(0,o.mdx)("inlineCode",{parentName:"li"},"layers")," collection. A ",(0,o.mdx)("inlineCode",{parentName:"li"},"pixel")," layer will have ",(0,o.mdx)("inlineCode",{parentName:"li"},"null")," for the ",(0,o.mdx)("inlineCode",{parentName:"li"},"layers")," property. A collection has the same semantics as an Array. The additional ExtendScript routines of ",(0,o.mdx)("inlineCode",{parentName:"li"},"add")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"getByName")," are also available. Use ",(0,o.mdx)("inlineCode",{parentName:"li"},"LayerKind.GROUP")," on a ",(0,o.mdx)("inlineCode",{parentName:"li"},"layer")," to see if any ",(0,o.mdx)("inlineCode",{parentName:"li"},"layers")," are available."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"GroupLayer")," has been removed. Use ",(0,o.mdx)("inlineCode",{parentName:"li"},"activeLayer.kind === LayerKind.GROUP")," instead."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Constants.LayerKind"),', similar to ExtendScript version, but with "group" layer addition.'),(0,o.mdx)("li",{parentName:"ul"},"Layer APIs",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("em",{parentName:"li"},"new")," locked, read-only way to tell if any of the properties are locked"),(0,o.mdx)("li",{parentName:"ul"},"allLocked, pixelsLocked, positionLocked, transparentPixelsLocked properties"),(0,o.mdx)("li",{parentName:"ul"},"Some existing properties exposed in documentation")))),(0,o.mdx)("h2",{id:"adobe-photoshop-prerelease-build-60-jun-10-2021"},"Adobe Photoshop Prerelease Build 60: Jun 10, 2021"),(0,o.mdx)("p",null,"This update contains changes that were made since the MAX 2020 (Adobe Photoshop 22.0) release."),(0,o.mdx)("h3",{id:"breaking-changes"},"Breaking changes"),(0,o.mdx)("p",null,"To use the new set of APIs, your project's ",(0,o.mdx)("inlineCode",{parentName:"p"},"manifest.json")," must be updated to include the following under the ",(0,o.mdx)("inlineCode",{parentName:"p"},"host")," object:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'    "data" : {\n        "apiVersion": 2\n    }\n')),(0,o.mdx)("p",null,"Further, your ",(0,o.mdx)("inlineCode",{parentName:"p"},"manifest.json")," must use version 4:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'  "manifestVersion": 4\n')),(0,o.mdx)("p",null,"To roll back to the MAX 2020 version of the Photoshop DOM API, set the ",(0,o.mdx)("inlineCode",{parentName:"p"},"apiVersion")," to 1."),(0,o.mdx)("h3",{id:"updated-dom-api-1"},"Updated DOM API"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Collections",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"We're introducing collection classes built using ",(0,o.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"},"Proxies"),", to make it easier to interact with the DOM."),(0,o.mdx)("li",{parentName:"ul"},"Try iterating through all the documents as such: ",(0,o.mdx)("inlineCode",{parentName:"li"},"app.documents.forEach(h => console.log(h.title));")))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../classes/historystates/"},"HistoryStates collections")," and ",(0,o.mdx)("a",{parentName:"li",href:"../classes/historystate/"},"HistoryState API"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"We've built HistoryStates to mirror ExtendScript functionality. ",(0,o.mdx)("inlineCode",{parentName:"li"},"length"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"parent"),", and ",(0,o.mdx)("inlineCode",{parentName:"li"},"getByName(name)")," are provided. You can also use indices as such: ",(0,o.mdx)("inlineCode",{parentName:"li"},"activeDocument.historyStates[2]"),"."),(0,o.mdx)("li",{parentName:"ul"},"HistoryState provides ",(0,o.mdx)("inlineCode",{parentName:"li"},"name"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"parent"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"snapshot"),"."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../classes/documents/"},"Documents collections"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Documents also follows ExtendScript functionality. ",(0,o.mdx)("inlineCode",{parentName:"li"},"length"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"add"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"getByName(name)"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"parent")," are provided."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../modules/constants/"},"Constants module"),", collecting all enumerations and constants used in DOM API. Accessible via ",(0,o.mdx)("inlineCode",{parentName:"li"},'require("photoshop").constants'),"."),(0,o.mdx)("li",{parentName:"ul"},"Updated ",(0,o.mdx)("a",{parentName:"li",href:"../classes/photoshop/#createdocument"},"app.createDocument / app.add"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Create a document with no params for a default document, with a predefined preset, or by providing a host of ",(0,o.mdx)("a",{parentName:"li",href:"../objects/documentcreateoptions/"},"DocumentCreateOptions"),")."))),(0,o.mdx)("li",{parentName:"ul"},"Updated ",(0,o.mdx)("a",{parentName:"li",href:"../classes/document/#save"},"document.save")," and ",(0,o.mdx)("a",{parentName:"li",href:"../classes/document/#saveas"},"document.saveAs"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"save")," no longer infers the file type from the requested file name. Instead, it invokes a save dialog for unsaved files, and performs a save operation for saved, modified files."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"saveAs")," is provided for ",(0,o.mdx)("inlineCode",{parentName:"li"},"bmp"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"gif"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"jpg"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"png"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"psb"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"psd")," formats. Use SaveOptions objects to request specific saves (e.g. ",(0,o.mdx)("a",{parentName:"li",href:"../objects/photoshopsaveoptions/"},"PhotoshopSaveOptions"),")."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../classes/layer"},"layer.id getter")),(0,o.mdx)("li",{parentName:"ul"},"Updated ",(0,o.mdx)("a",{parentName:"li",href:"../classes/document/#createlayer"},"document.createLayer")," and ",(0,o.mdx)("a",{parentName:"li",href:"../classes/document/#createlayergroup"},"document.createLayerGroup"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"With respective Create options: ",(0,o.mdx)("a",{parentName:"li",href:"../objects/layercreateoptions/"},"LayerCreateOptions")," and ",(0,o.mdx)("a",{parentName:"li",href:"../objects/grouplayercreateoptions"},"GroupLayerCreateOptions"),"."),(0,o.mdx)("li",{parentName:"ul"},"Collection access updates for Layer and Layer-like items are planned for upcoming releases.")))),(0,o.mdx)("h4",{id:"photoshop-core-updates"},"Photoshop Core updates"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"../media/executeasmodal/"},"Execute as Modal")," allows you to create plugins that can be guaranteed exclusive control over Photoshop during execution. It further allows for clear user feedback when this is occuring, and allows plugins to ",(0,o.mdx)("inlineCode",{parentName:"li"},"suspendHistory")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"resumeHistory"),".")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-changelog-index-md-5420df72bc073b54b421.js.map