"use strict";(self.webpackChunk_sunggang_ui_lib=self.webpackChunk_sunggang_ui_lib||[]).push([[376],{"./src/lib/DropImage/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var jsx_runtime=__webpack_require__("../node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("../node_modules/next/dist/compiled/react/index.js"),es=__webpack_require__("../node_modules/react-dropzone/dist/es/index.js"),v4=__webpack_require__("../node_modules/uuid/dist/esm-browser/v4.js");const DropImage=param=>{let{preview=!0,setFiles,imageUrls}=param;const[previewFiles,setPreviewFiles]=(0,react.useState)([]),{getRootProps,getInputProps,isDragActive,isDragAccept,isDragReject}=(0,es.VB)({accept:{"image/png":[".png"],"image/jpeg":[".jpg",".jpeg"]},maxFiles:10,maxSize:5e6,onDrop:dropFiles=>{const newFiles=[];setFiles(dropFiles),dropFiles.forEach((dropFile=>{Object.assign(dropFile,{preview:URL.createObjectURL(dropFile),uuid:(0,v4.A)()}),newFiles.push(dropFile),setPreviewFiles(newFiles)}))}});return(0,jsx_runtime.jsxs)("section",{className:"w-full",children:[(0,jsx_runtime.jsxs)("div",{...getRootProps({className:"dropzone"}),children:[(0,jsx_runtime.jsx)("input",{...getInputProps()}),(0,jsx_runtime.jsx)("div",{className:"flex justify-between",children:(0,jsx_runtime.jsx)("div",{className:"w-full bg-gray-light rounded-lg",children:(0,jsx_runtime.jsx)("div",{className:"border-2 border-dashed border-gray-400 rounded-lg bg-gray-100",children:(0,jsx_runtime.jsxs)("div",{className:"flex items-center flex-col h-48 justify-center",children:[(0,jsx_runtime.jsx)("p",{className:"font-normal text-sm text-gray-400 py-4",children:"圖片僅支援 png、jpg、jpeg"}),(0,jsx_runtime.jsx)("h5",{className:"mb-2 text-xl font-bold tracking-tight text-gray-700",children:"拖曳圖片至此"})]})})})})]}),preview&&(0,jsx_runtime.jsx)("div",{className:"flex pt-2 gap-2",children:(null==previewFiles?void 0:previewFiles.length)?previewFiles.length>0?previewFiles.map((item=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("img",{className:"w-24 h-24 object-cover",src:null==item?void 0:item.preview,alt:""})},null==item?void 0:item.uuid))):null:imageUrls&&imageUrls.length?imageUrls.map((item=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("img",{className:"w-24 h-24 object-cover",src:null==item?void 0:item.url,alt:""})},null==item?void 0:item.url))):null})]})};var _Base_parameters,_Base_parameters_docs,_Base_parameters1;DropImage.__docgenInfo={description:"",methods:[],displayName:"DropImage",props:{preview:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},imageUrls:{required:!1,tsType:{name:"Array",elements:[{name:"ImageItem"}],raw:"ImageItem[]"},description:""},setFiles:{required:!0,tsType:{name:"ReactDispatch",raw:"React.Dispatch<React.SetStateAction<File[]>>",elements:[{name:"ReactSetStateAction",raw:"React.SetStateAction<File[]>",elements:[{name:"Array",elements:[{name:"File"}],raw:"File[]"}]}]},description:""}}};const index_stories={component:DropImage,title:"DropImage"},Base=(args=>(0,jsx_runtime.jsx)(DropImage,{...args})).bind({});Base.args={preview:!0,setFiles:()=>({}),imageUrls:[{url:"https://gobobook.s3.ap-northeast-1.amazonaws.com/regions/DEV/region1.png",book_items_category_id:null},{url:"https://gobobook.s3.ap-northeast-1.amazonaws.com/regions/DEV/region2.png",book_items_category_id:null}]},Base.parameters={...Base.parameters,docs:{...null===(_Base_parameters=Base.parameters)||void 0===_Base_parameters?void 0:_Base_parameters.docs,source:{originalSource:"args => {\n  return <DropImage {...args} />;\n}",...null===(_Base_parameters1=Base.parameters)||void 0===_Base_parameters1||null===(_Base_parameters_docs=_Base_parameters1.docs)||void 0===_Base_parameters_docs?void 0:_Base_parameters_docs.source}}};const __namedExportsOrder=["Base"]}}]);