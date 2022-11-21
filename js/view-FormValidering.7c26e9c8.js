"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[1844],{3604:function(e,l,n){function t(e){return l=>l>e?null:`Feltet må ikke være mindre end ${e}.`}function r(e){return l=>l.length>=e?null:`Feltet må ikke være kortere end ${e} tegn.`}function d(e){return null!==e&&e.replace(/\s+/g,"").length>0?null:"Feltet må ikke være tomt."}function u(e){if(!Array.isArray(e))return"Ukendt indhold";const l=e;return l.some((e=>!0===e.checked))?null:"Angiv venligst et valg"}n.d(l,{QA:function(){return r},_M:function(){return u},rY:function(){return t},v3:function(){return d}})},8083:function(e,l,n){n.r(l),n.d(l,{default:function(){return V}});var t=n(3396),r=n(4870),d=n(7139),u=n(3604);const a=(0,t.Uk)(" Navn "),s=(0,t.Uk)("Indtast navn"),i=(0,t._)("p",{class:"h4"},"Props",-1),o=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th"),(0,t._)("th",null,"Type"),(0,t._)("th",null,"Default"),(0,t._)("th",null,"Beskrivelse")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"modelValue")]),(0,t._)("td",null,[(0,t._)("code",null,"string, number, array")]),(0,t._)("td",null,[(0,t._)("code",null,"null")]),(0,t._)("td")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"validations")]),(0,t._)("td",null,[(0,t._)("code",null,"Array'<'(x?: unknown) => string | null'>'")]),(0,t._)("td",null,[(0,t._)("code",null," [(input: unknown) => { if (!input) { return 'Indtast data'; } return null; }]")]),(0,t._)("td",null,"Et array af valideringsmetoder")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"dirty")]),(0,t._)("td",null,[(0,t._)("code",null,"boolean")]),(0,t._)("td",null,[(0,t._)("code",null,"false")]),(0,t._)("td",null,"Om feltet er blevet berørt")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"useAutoDirty")]),(0,t._)("td",null,[(0,t._)("code",null,"boolean")]),(0,t._)("td",null,[(0,t._)("code",null,"true")]),(0,t._)("td",null,"Om underliggende input eller select felt er blevet berørt (blur event)")])])],-1),_=(0,t._)("p",{class:"h4"},"Provide",-1),f=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th"),(0,t._)("th",null,"Type"),(0,t._)("th",null,"Default"),(0,t._)("th",null,"Beskrivelse")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"provideIsValid")]),(0,t._)("td",null,[(0,t._)("code",null,"boolean")]),(0,t._)("td",null,[(0,t._)("code",null,"true")]),(0,t._)("td",null,"Er alle validations valide")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"provideErrorMessage")]),(0,t._)("td",null,[(0,t._)("code",null,"string")]),(0,t._)("td",null,[(0,t._)("code",null," ''")]),(0,t._)("td",null,"Først fundne fejl")])])],-1),c=(0,t._)("p",null,[(0,t.Uk)("Det er også muligt at brug slot props, "),(0,t._)("code",null,'#default="{ isValid, errorMessage }')],-1),m=(0,t._)("h2",null,"Validerings metoder",-1),p=(0,t._)("p",null,[(0,t.Uk)("Konceptet er at hvis der returneres en fejlbesked "),(0,t._)("code",null,"string"),(0,t.Uk)(" så er der fejl")],-1),v=(0,t._)("p",null,[(0,t.Uk)("returneres der "),(0,t._)("code",null,"null"),(0,t.Uk)(" er modelValue valid")],-1),g=(0,t._)("p",{class:"italic"},[(0,t.Uk)("Komponenten "),(0,t._)("code",null,"xfds-validate"),(0,t.Uk)(" er en valideringswrapper.")],-1),h=(0,t._)("p",{class:"italic"}," Kan evt bruge til at lave egne komponenter der wrapper eksempelvis ovenstående i sin egen validarings-komponent ",-1),k=(0,t._)("p",{class:"italic"},[(0,t.Uk)(" Komponenten "),(0,t._)("code",null,"fds-input"),(0,t.Uk)(" kan udskiftes med egne komponenter eller eg: "),(0,t._)("code",null,"fds-input-number"),(0,t.Uk)(" m.m. ")],-1);var b=(0,t.aZ)({__name:"FormValidering",setup(e){const l=(0,r.iH)({name:"",adress:"",city:"",search:""}),n=(0,r.iH)(!1),b="\n  export function charactersMinLength (length: number): (args: string) => string | null {\n    return (x: string) => \n      (x.length >= length ? null : `Feltet må ikke være kortere end ${length} tegn.`);\n  }",y="\n  export function hasContent (x: string): string | null {\n    return x !== null && x.replace(/\\s+/g, '').length > 0 ? null : 'Feltet må ikke være tomt.';\n  }",V='\n  <xfds-validate\n    :modelValue="user.name"\n    :dirty="dirty"\n    :validations="[hasContent, charactersMinLength(10)]"\n    #default="{ isValid, errorMessage }"\n  >\n  ...\n  </xfds-validate>\n\n\n  // Eller\n\n  <xfds-validate\n    :modelValue="user.name"\n    :validations="[hasContent, charactersMinLength(10)]">\n    <fds-formgroup> // lytter efter provideIsValid\n      <fds-label> Navn </fds-label>\n      <fds-fejlmeddelelse /> // lytter efter provideErrorMessage\n      <fds-hint>Indtast navn</fds-hint>\n      <fds-input v-model="user.name" />\n    </fds-formgroup>\n  </xfds-validate>\n  ',x='\n  <xfds-validate\n    :modelValue="user.name"\n    :dirty="dirty"\n    :validations="[hasContent, charactersMinLength(10)]"\n    #default="{ isValid, errorMessage }"\n  >\n    <fds-formgroup :is-valid="isValid" >\n      <fds-label> Navn </fds-label>\n      <fds-fejlmeddelelse v-if="!isValid">\n        {{ errorMessage }}\n      </fds-fejlmeddelelse>\n      <fds-hint>Indtast navn</fds-hint>\n      <fds-input v-model="user.name" @dirty="dirty = $event"></fds-input>\n    </fds-formgroup>\n  </xfds-validate>\n  ';return(e,w)=>{const U=(0,t.up)("fds-label"),M=(0,t.up)("fds-fejlmeddelelse"),j=(0,t.up)("fds-hint"),W=(0,t.up)("fds-input"),A=(0,t.up)("fds-formgroup"),C=(0,t.up)("xfds-validate"),F=(0,t.up)("fds-pre"),D=(0,t.up)("fds-component-preview");return(0,t.wg)(),(0,t.iD)("section",null,[(0,t.Wm)(D,{header:"Eksempel"},{description:(0,t.w5)((()=>[g,h,k])),code:(0,t.w5)((()=>[(0,t._)("pre",{textContent:x})])),default:(0,t.w5)((()=>[(0,t.Wm)(C,{modelValue:l.value.name,dirty:n.value,validations:[(0,r.SU)(u.v3),(0,r.SU)(u.QA)(10)]},{default:(0,t.w5)((({isValid:e,errorMessage:r})=>[(0,t.Wm)(A,{"is-valid":e},{default:(0,t.w5)((()=>[(0,t.Wm)(U,null,{default:(0,t.w5)((()=>[a])),_:1}),e?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(M,{key:0},{default:(0,t.w5)((()=>[(0,t.Uk)((0,d.zw)(r),1)])),_:2},1024)),(0,t.Wm)(j,null,{default:(0,t.w5)((()=>[s])),_:1}),(0,t.Wm)(W,{modelValue:l.value.name,"onUpdate:modelValue":w[0]||(w[0]=e=>l.value.name=e),onDirty:w[1]||(w[1]=e=>n.value=e)},null,8,["modelValue"])])),_:2},1032,["is-valid"])])),_:1},8,["modelValue","dirty","validations"]),(0,t.Wm)(F,{header:"object data",json:l.value},null,8,["json"]),i,o,_,f,c,(0,t.Wm)(F,{header:"properties",code:V}),m,p,v,(0,t.Wm)(F,{header:"eks på valideringsmetode",code:b}),(0,t.Wm)(F,{header:"eks på valideringsmetode",code:y})])),_:1})])}}});const y=b;var V=y}}]);
//# sourceMappingURL=view-FormValidering.7c26e9c8.js.map