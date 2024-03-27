"use strict";(self.webpackChunk_missuumei_ui=self.webpackChunk_missuumei_ui||[]).push([[134],{"./src/lib/UploadImage/CustomUpload.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,Customer:()=>Customer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CustomUpload_stories});var jsx_runtime=__webpack_require__("../node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("../node_modules/next/dist/compiled/react/index.js"),iconify=__webpack_require__("../node_modules/@iconify/react/dist/iconify.mjs");const ModalContent=param=>{let{title,setModal,children,onClick,notice=!1}=param;return(0,jsx_runtime.jsxs)("form",{children:[title&&(0,jsx_runtime.jsx)("div",{className:"text-2xl text-gray-700 font-medium border-solid border-b border-gray-300 mb-4 p-4",children:title}),children&&(0,jsx_runtime.jsx)("div",{className:"py-4 px-8",children}),(0,jsx_runtime.jsx)("div",{className:"flex items-center text-base p-4 px-8 justify-around",children:notice?(0,jsx_runtime.jsx)("button",{type:"button",className:"w-24 h-10 px-2 text-white bg-gray-600  rounded",onClick:setModal,children:"確定"}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("button",{type:"button",className:"w-24 h-10 px-2 text-white bg-gray-600  rounded",onClick:setModal,children:"取消"}),onClick&&(0,jsx_runtime.jsx)("button",{type:"button",className:"w-24 h-10 mx-3 text-white bg-gray-500 rounded",onClick,children:"送出"})]})})]})},Modal_ModalContent=ModalContent;ModalContent.__docgenInfo={description:"",methods:[],displayName:"ModalContent",props:{title:{required:!1,tsType:{name:"string"},description:""},setModal:{required:!1,tsType:{name:"any"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"any"},description:""},notice:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ErrorContent=param=>{let{setModal,errmsg}=param;return(0,jsx_runtime.jsx)(Modal_ModalContent,{setModal,onClick:setModal,notice:!0,children:(0,jsx_runtime.jsxs)("div",{className:"w-full max-w-xl",children:[(0,jsx_runtime.jsx)("div",{className:"flex justify-center items-center mb-6",children:(0,jsx_runtime.jsx)(iconify.In,{icon:"fluent-mdl2:status-error-full",color:"red",height:60})}),(0,jsx_runtime.jsx)("div",{className:"text-center text-lg text-gray-500",children:errmsg})]})})},Modal_ErrorContent=ErrorContent;ErrorContent.__docgenInfo={description:"",methods:[],displayName:"ErrorContent",props:{setModal:{required:!0,tsType:{name:"any"},description:""},errmsg:{required:!0,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:""}}};const Modal=param=>{let{modal,unsetModal=()=>{}}=param;const handleKeyUp=e=>{var _document_activeElement;"Escape"!==e.key||["INPUT","SELECT"].includes(null===(_document_activeElement=document.activeElement)||void 0===_document_activeElement?void 0:_document_activeElement.tagName)||unsetModal()};return(0,react.useEffect)((()=>(document.addEventListener("keyup",handleKeyUp),()=>document.removeEventListener("keyup",handleKeyUp))),[unsetModal]),(0,jsx_runtime.jsx)("div",{className:"fixed top-0 left-0 h-screen z-[2000] transition-opacity duration-300 transition-opacity bg-[#000000b3] w-full",children:(0,jsx_runtime.jsx)("div",{className:"w-full h-full flex justify-center items-center p-6",children:(0,jsx_runtime.jsx)("div",{className:"bg-white rounded overflow-y-auto w-full m-auto max-w-[455px] rounded-xl",children:modal})})})},Modal_Modal=Modal;Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{modal:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},unsetModal:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"",defaultValue:{value:"() => {}",computed:!1}}}};const BaseTemplate=param=>{let{file,imageUrl}=param;const[tempImage,setTempImage]=(0,react.useState)(null);return(0,react.useEffect)((()=>{let fileReader,isCancel=!1;return file&&(fileReader=new FileReader,fileReader.onload=e=>{const{result}=e.target;result&&!isCancel&&setTempImage(result.toString())},fileReader.readAsDataURL(file)),()=>{setTempImage(null),isCancel=!0,fileReader&&1===fileReader.readyState&&fileReader.abort()}}),[file]),(0,jsx_runtime.jsx)("div",{className:"max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center",children:(0,jsx_runtime.jsx)("div",{className:"px-4 py-6 w-72 h-56",children:tempImage||imageUrl?(0,jsx_runtime.jsx)("img",{className:"w-full h-full object-contain border-dashed border-2 border-gray-400 p-6 rounded-lg",src:tempImage||imageUrl,alt:""}):(0,jsx_runtime.jsx)("div",{id:"image-preview",className:"max-w-sm p-6 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer",children:(0,jsx_runtime.jsxs)("div",{className:"cursor-pointer",children:[(0,jsx_runtime.jsx)("div",{className:"flex justify-center",children:(0,jsx_runtime.jsx)(iconify.In,{icon:"material-symbols:upload",width:"2.5rem",height:"2.5rem"})}),(0,jsx_runtime.jsx)("p",{className:"font-normal text-sm text-gray-400 py-4",children:"圖片僅支援 png、jpg、jpeg"}),(0,jsx_runtime.jsx)("h5",{className:"mb-2 text-xl font-bold tracking-tight text-gray-700",children:"上傳圖片"})]})})})})},UploadImage_BaseTemplate=BaseTemplate;BaseTemplate.__docgenInfo={description:"",methods:[],displayName:"BaseTemplate",props:{file:{required:!1,tsType:{name:"union",raw:"File | null",elements:[{name:"File"},{name:"null"}]},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""}}};const CustomUpload=param=>{let{className,children,file,setFile,imageUrl}=param;const imageMimeType=/image\/(png|jpg|jpeg)/i,[modal,setModal]=(0,react.useState)(null),hiddenFileInput=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("button",{className:className?[className].join(" "):"",type:"button",onClick:()=>{var _hiddenFileInput_current;null===(_hiddenFileInput_current=hiddenFileInput.current)||void 0===_hiddenFileInput_current||_hiddenFileInput_current.click()},children:[children||(0,jsx_runtime.jsx)(UploadImage_BaseTemplate,{file,imageUrl}),(0,jsx_runtime.jsx)("input",{type:"file",ref:hiddenFileInput,accept:".png, .jpg, .jpeg",onChange:event=>{var _event_target_files,_currentFile_type;const currentFile=null===(_event_target_files=event.target.files)||void 0===_event_target_files?void 0:_event_target_files[0];currentFile?!currentFile||(null===(_currentFile_type=currentFile.type)||void 0===_currentFile_type?void 0:_currentFile_type.match(imageMimeType))?currentFile&&currentFile.size>512e4?setModal((0,jsx_runtime.jsx)(Modal_ErrorContent,{setModal,errmsg:(0,jsx_runtime.jsxs)("span",{children:["選擇的檔案大小：",String((currentFile.size/1024/1024).toFixed(3))," MB",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("hr",{}),"上限：",String(4.8828125.toFixed(3))," MB"]})})):setFile(currentFile):setModal((0,jsx_runtime.jsx)(Modal_ErrorContent,{setModal,errmsg:"圖片僅支援 png、jpg、jpeg!"})):setFile(null)},className:"hidden"})]}),modal&&(0,jsx_runtime.jsx)(Modal_Modal,{modal,unsetModal:setModal})]})};var _Base_parameters,_Base_parameters_docs,_Base_parameters1,_Customer_parameters,_Customer_parameters_docs,_Customer_parameters1;CustomUpload.__docgenInfo={description:"",methods:[],displayName:"CustomUpload",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},file:{required:!1,tsType:{name:"union",raw:"File | null",elements:[{name:"File"},{name:"null"}]},description:""},setFile:{required:!1,tsType:{name:"any"},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:""}}};const CustomUpload_stories={component:CustomUpload,title:"CustomUpload"},Base=(args=>{const[file,setFile]=(0,react.useState)(null);return(0,jsx_runtime.jsx)(CustomUpload,{...args,file,setFile})}).bind({});Base.args={file:null,setFile:()=>{},imageUrl:"https://gobobook.s3.ap-northeast-1.amazonaws.com/regions/DEV/vaadin_golf.svg"};const Customer=(args=>{const[file,setFile]=(0,react.useState)(null);return(0,jsx_runtime.jsx)(CustomUpload,{...args,file,setFile,children:(0,jsx_runtime.jsxs)("div",{className:"border border-solid border-gray-400 p-4",children:[(0,jsx_runtime.jsx)("div",{children:"圖片僅支援 png、jpg、jpeg"}),(0,jsx_runtime.jsx)("div",{children:"點擊上傳"})]})})}).bind({});Customer.args={file:null,setFile:()=>{},imageUrl:""},Base.parameters={...Base.parameters,docs:{...null===(_Base_parameters=Base.parameters)||void 0===_Base_parameters?void 0:_Base_parameters.docs,source:{originalSource:"args => {\n  const [file, setFile] = useState(null);\n  return <CustomUpload {...args} file={file} setFile={setFile} />;\n}",...null===(_Base_parameters1=Base.parameters)||void 0===_Base_parameters1||null===(_Base_parameters_docs=_Base_parameters1.docs)||void 0===_Base_parameters_docs?void 0:_Base_parameters_docs.source}}},Customer.parameters={...Customer.parameters,docs:{...null===(_Customer_parameters=Customer.parameters)||void 0===_Customer_parameters?void 0:_Customer_parameters.docs,source:{originalSource:'args => {\n  const [file, setFile] = useState(null);\n  return <CustomUpload {...args} file={file} setFile={setFile}>\n      <div className="border border-solid border-gray-400 p-4">\n        <div>圖片僅支援 png、jpg、jpeg</div>\n        <div>點擊上傳</div>\n      </div>\n    </CustomUpload>;\n}',...null===(_Customer_parameters1=Customer.parameters)||void 0===_Customer_parameters1||null===(_Customer_parameters_docs=_Customer_parameters1.docs)||void 0===_Customer_parameters_docs?void 0:_Customer_parameters_docs.source}}};const __namedExportsOrder=["Base","Customer"]}}]);