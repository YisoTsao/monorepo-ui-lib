(self.webpackChunk_missuumei_ui=self.webpackChunk_missuumei_ui||[]).push([[278],{"./src/lib/Sidebar/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var jsx_runtime=__webpack_require__("../node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("../node_modules/next/dist/compiled/react/index.js"),iconify=__webpack_require__("../node_modules/@iconify/react/dist/iconify.mjs"),next_router=__webpack_require__("../node_modules/next/router.js");const SubMenu=param=>{let{item}=param;var _item_subNav;const router=(0,next_router.useRouter)(),[subnav,setSubnav]=(0,react.useState)(!0);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("button",{type:"button",className:"w-full flex justify-between items-center p-4 h-14 text-xl hover:bg-[#D9D9D9] cursor-pointer ".concat(item.className),onClick:()=>{item.subNav?setSubnav(!subnav):router.push(item.path)},children:[(0,jsx_runtime.jsxs)("div",{className:"flex items-center text-[#171A1F]",children:[(0,jsx_runtime.jsx)(iconify.In,{icon:item.icon,width:"24",height:"24",color:"#000"}),(0,jsx_runtime.jsx)("div",{className:"ml-4",children:item.title})]}),(0,jsx_runtime.jsx)("div",{children:(null==item?void 0:item.subNav)&&subnav?(0,jsx_runtime.jsx)(iconify.In,{className:["h-8 w-8"].join(" "),icon:null==item?void 0:item.iconOpened}):(null==item?void 0:item.subNav)?(0,jsx_runtime.jsx)(iconify.In,{className:["h-8 w-8"].join(" "),icon:null==item?void 0:item.iconClosed}):null})]}),subnav&&(null===(_item_subNav=item.subNav)||void 0===_item_subNav?void 0:_item_subNav.map((subItem=>(0,jsx_runtime.jsxs)("button",{type:"button",className:["w-full text-lg h-16 pl-12 flex items-center hover:bg-[#D9D9D9]",router.pathname===subItem.path?"bg-[#0C7489] text-white":"bg-[#f5f5f5] text-[#737373]"].join(" "),onClick:()=>router.push(subItem.path),children:[(0,jsx_runtime.jsx)(iconify.In,{icon:subItem.icon,width:"24",height:"24",color:router.pathname===subItem.path?"#fff":"#737373"}),(0,jsx_runtime.jsx)("div",{className:"ml-4",children:subItem.title})]},subItem.path))))]})},Sidebar_SubMenu=SubMenu;SubMenu.__docgenInfo={description:"",methods:[],displayName:"SubMenu",props:{item:{required:!0,tsType:{name:"any"},description:""}}};const Sidebar=param=>{let{className,items}=param;const[isClient]=(0,react.useState)(!0);return isClient&&(0,jsx_runtime.jsx)("aside",{className:["w-64 h-screen justify-center hidden lg:flex",className].join(" "),children:(0,jsx_runtime.jsx)("div",{className:"w-full",children:null==items?void 0:items.map((item=>(0,jsx_runtime.jsx)(Sidebar_SubMenu,{item},null==item?void 0:item.path)))})})};var _Base_parameters,_Base_parameters_docs,_Base_parameters1;Sidebar.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{className:{required:!1,tsType:{name:"string"},description:""},items:{required:!1,tsType:{name:"Array",elements:[{name:"SidebarItem"}],raw:"SidebarItem[]"},description:""}}};const index_stories={component:Sidebar,title:"Sidebar"},Base=(args=>(0,jsx_runtime.jsx)(Sidebar,{...args})).bind({});Base.args={className:"w-64 border border-solid border-gray-300",items:[{title:"場域管理",path:"/admin/regions",icon:""},{title:"預約項目管理",path:"",icon:"",iconClosed:"ri:arrow-down-s-line",iconOpened:"ri:arrow-right-s-line",subNav:[{title:"項目管理",path:"/admin/bookItem",icon:"mingcute:profile-line"},{title:"類別管理",path:"/admin/bookItem/category",icon:"mingcute:profile-line"}]}]},Base.parameters={...Base.parameters,docs:{...null===(_Base_parameters=Base.parameters)||void 0===_Base_parameters?void 0:_Base_parameters.docs,source:{originalSource:"args => {\n  return <Sidebar {...args} />;\n}",...null===(_Base_parameters1=Base.parameters)||void 0===_Base_parameters1||null===(_Base_parameters_docs=_Base_parameters1.docs)||void 0===_Base_parameters_docs?void 0:_Base_parameters_docs.source}}};const __namedExportsOrder=["Base"]},"?93ed":()=>{},"?432f":()=>{},"?af24":()=>{}}]);