"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[7119],{1117:function(l,e,n){n.r(e),n.d(e,{default:function(){return i}});var t=n(3396),u=n(4870);const r=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Props"),(0,t._)("th",null,"Type"),(0,t._)("th",null,"Default"),(0,t._)("th",null,"Beskrivelse")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"list")]),(0,t._)("td",null,[(0,t._)("code",null,"Array[any]")]),(0,t._)("td",null,[(0,t._)("code",null,"null")]),(0,t._)("td",null,"Tager imod en et vilkårligt array")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"skip")]),(0,t._)("td",null,[(0,t._)("code",null,"Number")]),(0,t._)("td",null,[(0,t._)("code",null," 0")]),(0,t._)("td",null,"Antal elementer der skal skippes")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"pageSize")]),(0,t._)("td",null,[(0,t._)("code",null,"Number")]),(0,t._)("td",null,[(0,t._)("code",null,"10")]),(0,t._)("td",null,"Antal elementer per side, default 10")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"dirty")]),(0,t._)("td",null,[(0,t._)("code",null,"boolean")]),(0,t._)("td",null,[(0,t._)("code",null,"false")]),(0,t._)("td",null,"Om feltet er blevet berørt")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"useAutoDirty")]),(0,t._)("td",null,[(0,t._)("code",null,"boolean")]),(0,t._)("td",null,[(0,t._)("code",null,"true")]),(0,t._)("td",null,"Om underliggende input eller select felt er blevet berørt (blur event)")])])],-1),d=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Events"),(0,t._)("th",null,"return"),(0,t._)("th",null,"Beskrivelse")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"@filteredPage")]),(0,t._)("td",null,[(0,t._)("code",null,"Array[any]")]),(0,t._)("td",null,"Filtreret liste, med nuværende side elementer")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"@skip")]),(0,t._)("td",null,[(0,t._)("code",null,"Number")]),(0,t._)("td",null,"Antal elementer der er skippet")])])],-1);var _=(0,t.aZ)({__name:"PagineringExample",setup(l){const e=(0,u.iH)([]),n=(0,u.iH)(0),_=(0,t.Fl)((()=>{const l=200;return[...Array(l).keys()].map((l=>({id:(l+1).toString(),indhold:`Data${l}`})))})),a='\n<fds-paginering\n  :list="largeArray"\n  @filteredPage="filteredPagingList = $event"\n  @skip="skipPaging = $event"\n/>\n';return(l,i)=>{const s=(0,t.up)("fds-paginering"),o=(0,t.up)("fds-pre"),p=(0,t.up)("fds-preview-item"),c=(0,t.up)("fds-preview-code"),m=(0,t.up)("fds-preview");return(0,t.wg)(),(0,t.iD)("section",null,[(0,t.Wm)(m,{header:"Eksempel",href:"https://designsystem.dk/komponenter/paginering/"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,{list:(0,u.SU)(_),onFilteredPage:i[0]||(i[0]=l=>e.value=l),onSkip:i[1]||(i[1]=l=>n.value=l)},null,8,["list"]),(0,t.Wm)(o,{header:"filter list",json:{skipPaging:n.value}},null,8,["json"]),(0,t.Wm)(o,{header:"filter list",json:{filteredPagingList:e.value}},null,8,["json"])])),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[r,d])),_:1}),(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t._)("pre",{textContent:a})])),_:1})])),_:1})])}}});const a=_;var i=a}}]);
//# sourceMappingURL=view-PagineringExample.70dd713d.js.map