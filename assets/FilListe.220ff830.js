import{e as v,f as s,o as b,c as w,b as e,w as d,a as l,d as f,r as n}from"./index.59297fa2.js";const x=l("p",{class:"form-label"}," Vedh\xE6ftet filer ",-1),k=l("table",{class:"table table--compact"},[l("thead",null,[l("tr",null,[l("th",null,"Props"),l("th",null,"Type"),l("th",null,"Default"),l("th",null,"Beskrivelse")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"list")]),l("td",null,[l("code",null,"Array<FdsFileModel>>")]),l("td",null,[l("code",null,"[]")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"icons")]),l("td",null,[l("code",null,"Record<string, string>")]),l("td",null,[l("code",null," { pdf: 'file-pdf', image: 'file-image', doc: 'file-word', odt: 'file-word', xls: 'file-excel', } ")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"defaultIcon")]),l("td",null,[l("code",null,"string")]),l("td",null,[l("code",null,"'insert-drive-file'")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"canDelete")]),l("td",null,[l("code",null,"boolean")]),l("td",null,[l("code",null,"true")]),l("td")]),l("tr",null,[l("td",null,[l("code",null,"canDownload")]),l("td",null,[l("code",null,"boolean")]),l("td",null,[l("code",null,"true")]),l("td")])])],-1),h=l("table",{class:"table table--compact"},[l("thead",null,[l("tr",null,[l("th",null,"Events"),l("th",null,"Returns"),l("th",null,"Beskrivelse")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,"@download")]),l("td",null,[f(" FdsFileModel: "),l("code",null," { id: string; filename: string; label?: string; type: string; } ")]),l("td",null,"Ved klik p\xE5 filens navn")]),l("tr",null,[l("td",null,[l("code",null,"@delete")]),l("td",null,[f(" FdsFileModel: "),l("code",null," { id: string; filename: string; label?: string; type: string; } ")]),l("td",null,"Ved klik p\xE5 fjern ikon")])])],-1),F=v({__name:"FilListe",setup(y){const i=s(null),u=s(null),c=s([{id:"a",filename:"Banankage.jpg",type:"image/jpg"},{id:"b",filename:"Opskrift.pdf",type:"pdf"},{id:"c",filename:"Regnskab.xls",type:"xls"},{id:"d",filename:"KodeFil.json",type:"json"}]),p=`
<xfds-file-list
  :list="filListe"
  @download="filToDownload = $event"
  @delete="filToDelete = $event"
/>

const filListe = ref<FdsFileModel[]>([
  {
    id: 'a',
    filename: 'Banankage.jpg',
    type: 'image/jpg',
  },
  {
    id: 'b',
    filename: 'Opskrift.pdf',
    type: 'pdf',
  },
  {
    id: 'c',
    filename: 'Regnskab.xls',
    type: 'xls',
  },
  {
    id: 'd',
    filename: 'KodeFil.json',
    type: 'json',
  },
]);

`;return(j,t)=>{const _=n("xfds-file-list"),a=n("fds-pre"),r=n("fds-preview-item"),m=n("fds-preview-code"),g=n("fds-preview");return b(),w("section",null,[e(g,{header:"Fil liste"},{default:d(()=>[e(r,null,{default:d(()=>[x,e(_,{list:c.value,onDownload:t[0]||(t[0]=o=>i.value=o),onDelete:t[1]||(t[1]=o=>u.value=o)},null,8,["list"]),e(a,{header:"Download JSON",json:i.value},null,8,["json"]),e(a,{header:"Delete JSON",json:u.value},null,8,["json"])]),_:1}),e(m,null,{default:d(()=>[l("pre",{textContent:p})]),_:1}),e(r,null,{default:d(()=>[k,h]),_:1})]),_:1})])}}});export{F as default};
