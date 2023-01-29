import{e as b,f as p,o as V,c as w,b as t,w as l,d as a,a as e,r as o}from"./index.9ab9e984.js";const y=e("hr",null,null,-1),k=e("p",{class:"italic"},[a(" Datov\xE6lger benytter standard dato type "),e("code",null,'<input type="date">')],-1),x=e("p",null,"Dette betyder at pattern og min og max datoer s\xE6ttes som standarden angiver.",-1),E=e("p",null,[a(" Se mere under "),e("br"),e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date"},"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date"),e("br"),e("a",{href:"https://www.w3schools.com/tags/att_input_type_date.asp"},"https://www.w3schools.com/tags/att_input_type_date.asp")],-1),D=e("table",{class:"table table--compact"},[e("thead",null,[e("tr",null,[e("th",null,"Props"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Beskrivelse")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"v-model")]),e("td",null,[e("code",null,"yyyy-mm-dd")]),e("td",null,[e("code",null,"''")]),e("td")])])],-1),C=b({__name:"DatovaelgerExample",setup(S){const d=p("2022-12-01"),u=p(!0),_=`
<fds-dato-vaelger v-model="datoValg" />

const datoValg = ref('2022-12-01');
const datoValgValid = ref(true);
`;return(T,n)=>{const c=o("fds-alert"),m=o("fds-label"),i=o("fds-dato-vaelger"),f=o("fds-formgroup"),g=o("fds-pre"),s=o("fds-preview-item"),v=o("fds-preview-code"),h=o("fds-preview");return V(),w("section",null,[t(c,{variant:"info",header:"Info",closeable:"",class:"mb-8"},{default:l(()=>[a(" Komponenten benytter ikke DKFDS kalender, da DKFDS script laver om p\xE5 elementer og ikke generisk nok til at bruge i denne sammenh\xE6ng ")]),_:1}),t(h,{header:"Eksempel",href:"https://designsystem.dk/komponenter/datovaelger/"},{default:l(()=>[t(s,null,{default:l(()=>[t(f,null,{default:l(()=>[t(m,null,{default:l(()=>[a(" F\xF8dselsdag ")]),_:1}),t(i,{modelValue:d.value,"onUpdate:modelValue":n[0]||(n[0]=r=>d.value=r),onValid:n[1]||(n[1]=r=>u.value=r)},null,8,["modelValue"])]),_:1}),t(g,{json:{datoValg:d.value,datoValgValid:u.value},header:"JSON DATE format"},null,8,["json"])]),_:1}),y,t(s,null,{default:l(()=>[k,x,E]),_:1}),t(v,null,{default:l(()=>[e("pre",{textContent:_})]),_:1}),t(s,null,{default:l(()=>[D]),_:1})]),_:1})])}}});export{C as default};