"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[6646],{9872:function(l,e,n){n.r(e),n.d(e,{default:function(){return _}});var t=n(3396),d=n(4870);const u=(0,t._)("p",{class:"form-label"},"Vedhæftet filer",-1),i=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Props"),(0,t._)("th",null,"Type"),(0,t._)("th",null,"Default"),(0,t._)("th",null,"Beskrivelse")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"list")]),(0,t._)("td",null,[(0,t._)("code",null,"Array<FdsFileModel>>")]),(0,t._)("td",null,[(0,t._)("code",null,"[]")]),(0,t._)("td")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"icons")]),(0,t._)("td",null,[(0,t._)("code",null,"Record<string, string>")]),(0,t._)("td",null,[(0,t._)("code",null," { pdf: 'file-pdf', image: 'file-image', doc: 'file-word', odt: 'file-word', xls: 'file-excel', } ")]),(0,t._)("td")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"defaultIcon")]),(0,t._)("td",null,[(0,t._)("code",null,"string")]),(0,t._)("td",null,[(0,t._)("code",null,"'insert-drive-file'")]),(0,t._)("td")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"canDelete")]),(0,t._)("td",null,[(0,t._)("code",null,"boolean")]),(0,t._)("td",null,[(0,t._)("code",null,"true")]),(0,t._)("td")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"canDownload")]),(0,t._)("td",null,[(0,t._)("code",null,"boolean")]),(0,t._)("td",null,[(0,t._)("code",null,"true")]),(0,t._)("td")])])],-1),o=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Events"),(0,t._)("th",null,"Returns"),(0,t._)("th",null,"Beskrivelse")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"@download")]),(0,t._)("td",null,[(0,t.Uk)(" FdsFileModel: "),(0,t._)("code",null," { id: string; filename: string; label?: string; type: string; } ")]),(0,t._)("td",null,"Ved klik på filens navn")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"@delete")]),(0,t._)("td",null,[(0,t.Uk)(" FdsFileModel: "),(0,t._)("code",null," { id: string; filename: string; label?: string; type: string; } ")]),(0,t._)("td",null,"Ved klik på fjern ikon")])])],-1);var a=(0,t.aZ)({__name:"FilListe",setup(l){const e=(0,d.iH)(null),n=(0,d.iH)(null),a=(0,d.iH)([{id:"a",filename:"Banankage.jpg",type:"image/jpg"},{id:"b",filename:"Opskrift.pdf",type:"pdf"},{id:"c",filename:"Regnskab.xls",type:"xls"},{id:"d",filename:"KodeFil.json",type:"json"}]),s="\n<xfds-file-list\n  :list=\"filListe\"\n  @download=\"filToDownload = $event\"\n  @delete=\"filToDelete = $event\"\n/>\n\nconst filListe = ref<FdsFileModel[]>([\n  {\n    id: 'a',\n    filename: 'Banankage.jpg',\n    type: 'image/jpg',\n  },\n  {\n    id: 'b',\n    filename: 'Opskrift.pdf',\n    type: 'pdf',\n  },\n  {\n    id: 'c',\n    filename: 'Regnskab.xls',\n    type: 'xls',\n  },\n  {\n    id: 'd',\n    filename: 'KodeFil.json',\n    type: 'json',\n  },\n]);\n\n";return(l,d)=>{const _=(0,t.up)("xfds-file-list"),r=(0,t.up)("fds-pre"),f=(0,t.up)("fds-preview-item"),c=(0,t.up)("fds-preview-code"),p=(0,t.up)("fds-preview");return(0,t.wg)(),(0,t.iD)("section",null,[(0,t.Wm)(p,{header:"Fil liste"},{default:(0,t.w5)((()=>[(0,t.Wm)(f,null,{default:(0,t.w5)((()=>[u,(0,t.Wm)(_,{list:a.value,onDownload:d[0]||(d[0]=l=>e.value=l),onDelete:d[1]||(d[1]=l=>n.value=l)},null,8,["list"]),(0,t.Wm)(r,{header:"Download JSON",json:e.value},null,8,["json"]),(0,t.Wm)(r,{header:"Delete JSON",json:n.value},null,8,["json"])])),_:1}),(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t._)("pre",{textContent:s})])),_:1}),(0,t.Wm)(f,null,{default:(0,t.w5)((()=>[i,o])),_:1})])),_:1})])}}});const s=a;var _=s}}]);
//# sourceMappingURL=view-FilListe.ac848828.js.map