import{_ as b}from"./nuxt-link.f4d0fcfb.js";import{v as w,g as y,r as k,h as z,o as c,c as d,a as e,B as _,k as o,b as n,w as f,A as g,l as C,m as $,n as L}from"./entry.52f653c0.js";const N=""+new URL("digtok.f552e7e9.png",import.meta.url).href,M={id:"TopNav",class:"fixed bg-white z-30 flex items-center w-full border-b h-[61px]"},A=e("img",{width:"115",src:N},null,-1),B={class:"hidden md:flex items-center bg-[#F1F1F2] p-1 rounded-full max-w-[380px] w-full"},P=e("input",{type:"text",class:"w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none",placeholder:"Search accounts"},null,-1),j={class:"px-3 py-1 flex items-center border-l border-l-gray-300"},F={class:"flex items-center justify-end gap-3 min-w-[275px] max-w-[320px] w-full"},R=e("span",{class:"px-2 font-medium text-[15px]"},"Upload",-1),E={key:0,class:"flex items-center"},I=e("span",{class:"mx-4 font-medium text-[15px]"},"Log in",-1),O=[I],S={key:1,class:"flex items-center"},V={class:"relative"},T=["src"],U={key:0,id:"PopupMenu",class:"absolute bg-white rounded-lg py-1.5 w-[200px] shadow-xl border top-[43px] -right-2"},q=e("span",{class:"pl-2 font-semibold text-sm"},"Profile",-1),D=e("span",{class:"pl-2 font-semibold text-sm"},"Log Out",-1),G={__name:"TopNav",setup(H){const{$userStore:i,$generalStore:u}=$(),p=w(),m=y();let s=k(!1);z(()=>{document.addEventListener("mouseup",function(r){document.getElementById("PopupMenu").contains(r.target)||(s.value=!1)})});const h=()=>{i.id?m.push("/upload"):u.isLoginOpen=!0},v=()=>{try{i.logout(),m.push("/")}catch(r){console.log(r)}};return(r,t)=>{const x=b,l=L;return c(),d("div",M,[e("div",{class:_([o(p).fullPath==="/"?"max-w-[1150px]":"","flex items-center justify-between w-full px-6 mx-auto"])},[e("div",{class:_(o(p).fullPath==="/"?"w-[80%]":"lg:w-[20%] w-[70%]")},[n(x,{to:"/"},{default:f(()=>[A]),_:1})],2),e("div",B,[P,e("div",j,[n(l,{name:"ri:search-line",color:"#A1A2A7",size:"22"})])]),e("div",F,[e("button",{onClick:t[0]||(t[0]=a=>h()),class:"flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100"},[n(l,{name:"mdi:plus",color:"#000000",size:"22"}),R]),o(i).id?(c(),d("div",S,[n(l,{class:"ml-1 mr-4",name:"carbon:send-alt",color:"#161724",size:"30"}),n(l,{class:"mr-5",name:"bx:message-detail",color:"#161724",size:"27"}),e("div",V,[e("button",{class:"mt-1",onClick:t[2]||(t[2]=a=>g(s)?s.value=!o(s):s=!o(s))},[e("img",{class:"rounded-full",width:"33",src:o(i).image},null,8,T)]),o(s)?(c(),d("div",U,[n(x,{to:`/profile/${o(i).id}`,onClick:t[3]||(t[3]=a=>g(s)?s.value=!1:s=!1),class:"flex items-center justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer"},{default:f(()=>[n(l,{name:"ph:user",size:"20"}),q]),_:1},8,["to"]),e("div",{onClick:t[4]||(t[4]=a=>v()),class:"flex items-center justify-start py-3 px-1.5 hover:bg-gray-100 border-t cursor-pointer"},[n(l,{name:"ic:outline-login",size:"20"}),D])])):C("",!0)])])):(c(),d("div",E,[e("button",{onClick:t[1]||(t[1]=a=>o(u).isLoginOpen=!0),class:"flext items-center bg-[#F02C56] text-white border rounded-md px-3 py-[6px]"},O),n(l,{name:"mdi:dots-vertical",color:"#161724",size:"25"})]))])],2)])}}},Q=G;export{Q as _};