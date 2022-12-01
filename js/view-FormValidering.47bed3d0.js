"use strict";(self["webpackChunkexample"]=self["webpackChunkexample"]||[]).push([[1844],{3604:function(e,l,n){function t(e){return l=>l>e?null:`Feltet må ikke være mindre end ${e}.`}function d(e){return l=>l.length>=e?null:`Feltet må ikke være kortere end ${e} tegn.`}function a(e){return null!==e&&e.replace(/\s+/g,"").length>0?null:"Feltet må ikke være tomt."}function r(e){if(!Array.isArray(e))return"Ukendt indhold";const l=e;return l.some((e=>!0===e.checked))?null:"Angiv venligst et valg"}n.d(l,{QA:function(){return d},_M:function(){return r},rY:function(){return t},v3:function(){return a}})},5022:function(e,l,n){n.r(l),n.d(l,{default:function(){return V}});var t=n(3396),d=n(4870),a=n(3604),r=n(2482);n(1785);class u{constructor(){(0,r.Z)(this,"validatorItems",[])}clear(){this.validatorItems=[]}removeItem(e){this.validatorItems=this.validatorItems.filter((l=>l.key!==e))}removeItemsByType(e){this.validatorItems=this.validatorItems.filter((l=>l.type!==e))}addItem(e){this.validatorItems=this.validatorItems.filter((l=>l.key!==e.key)),this.validatorItems.push(e)}addItems(e){const l=e.map((e=>e.key));this.validatorItems=this.validatorItems.filter((e=>!l.includes(e.key)))}getItem(e,l){return this.validatorItems.find((n=>n.key===e&&n.type===l))}getUnvalidItems(){return this.validatorItems.filter((e=>!e.valid))}getUnvalidItemsReasonsByKey(e){return this.validatorItems.filter((l=>!l.valid&&l.key===e)).flatMap((e=>e.reasons??[]))}exists(e){return void 0!==this.validatorItems.find((l=>l.key===e))}isValid(e){return this.validatorItems.find((l=>l.key===e))?.valid??!1}isEveryValid(){return this.validatorItems.every((e=>e.valid))}}const s=(0,t._)("hr",null,null,-1),i=(0,t._)("p",{class:"italic"},[(0,t.Uk)("Komponenten "),(0,t._)("code",null,"xfds-validate"),(0,t.Uk)(" er en valideringswrapper.")],-1),o=(0,t._)("p",{class:"italic"}," Kan evt bruge til at lave egne komponenter der wrapper eksempelvis ovenstående i sin egen validarings-komponent ",-1),m=(0,t._)("p",{class:"italic"},[(0,t.Uk)(" Komponenten "),(0,t._)("code",null,"fds-input"),(0,t.Uk)(" kan udskiftes med egne komponenter eller eg: "),(0,t._)("code",null,"fds-input-number"),(0,t.Uk)(" m.m. ")],-1),_=(0,t._)("p",null,"Se evt nedestående eksempler for andre måde at opnå det samme",-1),f=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Props"),(0,t._)("th",null,"Type"),(0,t._)("th",null,"Default"),(0,t._)("th",null,"Beskrivelse")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"modelValue")]),(0,t._)("td",null,[(0,t._)("code",null,"string, number, array")]),(0,t._)("td",null,[(0,t._)("code",null,"null")]),(0,t._)("td")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"validations")]),(0,t._)("td",null,[(0,t._)("code",null,"Array'<'(x?: unknown) => string | null'>'")]),(0,t._)("td",null,[(0,t._)("code",null," [(input: unknown) => { if (!input) { return 'Indtast data'; } return null; }]")]),(0,t._)("td",null,"Et array af valideringsmetoder")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"id")]),(0,t._)("td",null,[(0,t._)("code",null,"string")]),(0,t._)("td",null,[(0,t._)("code",null,"null (auto id)")]),(0,t._)("td")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"dirty")]),(0,t._)("td",null,[(0,t._)("code",null,"boolean")]),(0,t._)("td",null,[(0,t._)("code",null,"false")]),(0,t._)("td",null,"Om feltet er blevet berørt")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"useAutoDirty")]),(0,t._)("td",null,[(0,t._)("code",null,"boolean")]),(0,t._)("td",null,[(0,t._)("code",null,"true")]),(0,t._)("td",null,"Om underliggende input eller select felt er blevet berørt (blur event)")])])],-1),v=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Events"),(0,t._)("th",null,"Returns"),(0,t._)("th",null,"Beskrivelse")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"@validated")]),(0,t._)("td",null,[(0,t.Uk)(" ValidatorItem: "),(0,t._)("code",null," { key: string; type: string; reasons?: string[]; valid: boolean; dirty: boolean; } ")]),(0,t._)("td",null," Hver gang input valideres returneres et ValidatorItem object. Der indeholder den fulde sandhed ")])])],-1),c=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Slot #default binds"),(0,t._)("th",null,"Beskrivelse")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"isValidWaitForDirty")]),(0,t._)("td",null,"Er form valid - Bliver kun aktiveret efter underligge input/select er blur")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"isValid")]),(0,t._)("td",null,"Er form valid")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"errorMessage")]),(0,t._)("td",null,"Først fundne fejlbesked")])])],-1),p=(0,t._)("p",{class:"h4"},"Provide",-1),h=(0,t._)("table",{class:"table table--compact"},[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th"),(0,t._)("th",null,"Type"),(0,t._)("th",null,"Default"),(0,t._)("th",null,"Beskrivelse")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"provideIsValid")]),(0,t._)("td",null,[(0,t._)("code",null,"boolean")]),(0,t._)("td",null,[(0,t._)("code",null,"true")]),(0,t._)("td",null,"Er alle validations valide")]),(0,t._)("tr",null,[(0,t._)("td",null,[(0,t._)("code",null,"provideErrorMessage")]),(0,t._)("td",null,[(0,t._)("code",null,"string")]),(0,t._)("td",null,[(0,t._)("code",null," ''")]),(0,t._)("td",null,"Først fundne fejl")])])],-1),g=(0,t._)("hr",null,null,-1),k=(0,t._)("h2",null,"Validerings metoder",-1),b=(0,t._)("p",null,[(0,t.Uk)("Konceptet er at hvis der returneres en fejlbesked "),(0,t._)("code",null,"string"),(0,t.Uk)(" så er der fejl")],-1),y=(0,t._)("p",null,[(0,t.Uk)("returneres der "),(0,t._)("code",null,"null"),(0,t.Uk)(" er modelValue valid")],-1);var I=(0,t.aZ)({__name:"FormValidering",setup(e){const l=(0,d.iH)(new u),n=(0,d.iH)({name:"",adress:"",city:"",search:""}),r=((0,d.iH)(!1),"\n  export function charactersMinLength (length: number): (args: string) => string | null {\n    return (x: string) => \n      (x.length >= length ? null : `Feltet må ikke være kortere end ${length} tegn.`);\n  }"),I="\n  export function hasContent (x: string): string | null {\n    return x !== null && x.replace(/\\s+/g, '').length > 0 ? null : 'Feltet må ikke være tomt.';\n  }",x='\n\n<xfds-validate\n  :modelValue="user.name"\n  @validated="validator.addItem($event)"\n  :validations="[hasContent, charactersMinLength(10)]"\n>\n  <fds-formgroup>\n    <fds-label> Navn </fds-label>\n    <fds-fejlmeddelelse />\n    <fds-hint>Indtast navn</fds-hint>\n    <fds-input v-model="user.name" />\n  </fds-formgroup>\n</xfds-validate>\n\n',V='\n<xfds-validate \n  :modelValue="user.name" \n  :validations="[hasContent, charactersMinLength(10)]">\n  <xfds-form-input\n    label="Navn"\n    hint="Indtast navn"\n    tooltip="Input tooltip"\n    v-model="user.name"\n  />\n</xfds-validate>\n\n\n\n<xfds-validate :modelValue="user.name" :validations="[hasContent, charactersMinLength(10)]">\n  <fds-formgroup>\n    <fds-label> Navn </fds-label>\n    <fds-fejlmeddelelse />\n    <fds-hint>Indtast navn</fds-hint>\n    <fds-input v-model="user.name" />\n  </fds-formgroup>\n</xfds-validate>\n\n\n<xfds-validate\n  :modelValue="user.name"\n  :dirty="dirty"\n  :validations="[hasContent, charactersMinLength(10)]"\n  #default="{ isValidWaitForDirty, errorMessage }"\n>\n  <fds-formgroup :is-valid="isValidWaitForDirty">\n    <fds-label> Navn </fds-label>\n    <fds-fejlmeddelelse v-if="!isValidWaitForDirty">\n      {{ errorMessage }}\n    </fds-fejlmeddelelse>\n    <fds-hint>Indtast navn</fds-hint>\n    <fds-input v-model="user.name" @dirty="dirty = $event"></fds-input>\n  </fds-formgroup>\n</xfds-validate>\n';return(e,u)=>{const w=(0,t.up)("fds-label"),W=(0,t.up)("fds-fejlmeddelelse"),U=(0,t.up)("fds-hint"),j=(0,t.up)("fds-input"),F=(0,t.up)("fds-formgroup"),M=(0,t.up)("xfds-validate"),C=(0,t.up)("fds-pre"),D=(0,t.up)("fds-preview-item"),A=(0,t.up)("fds-preview-code"),E=(0,t.up)("fds-preview");return(0,t.wg)(),(0,t.iD)("section",null,[(0,t.Wm)(E,{header:"Eksempel"},{default:(0,t.w5)((()=>[(0,t.Wm)(D,null,{default:(0,t.w5)((()=>[(0,t.Wm)(M,{modelValue:n.value.name,onValidated:u[1]||(u[1]=e=>l.value.addItem(e)),validations:[(0,d.SU)(a.v3),(0,d.SU)(a.QA)(10)]},{default:(0,t.w5)((()=>[(0,t.Wm)(F,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" Navn ")])),_:1}),(0,t.Wm)(W),(0,t.Wm)(U,null,{default:(0,t.w5)((()=>[(0,t.Uk)("Indtast navn")])),_:1}),(0,t.Wm)(j,{modelValue:n.value.name,"onUpdate:modelValue":u[0]||(u[0]=e=>n.value.name=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue","validations"]),(0,t.Wm)(C,{header:"object data",json:{navn:n.value.name}},null,8,["json"]),(0,t.Wm)(C,{header:"@validated",json:{validatedList:l.value.validatorItems}},null,8,["json"])])),_:1}),s,(0,t.Wm)(D,null,{default:(0,t.w5)((()=>[i,o,m,_])),_:1}),(0,t.Wm)(A,null,{default:(0,t.w5)((()=>[(0,t._)("pre",{textContent:x})])),_:1}),(0,t.Wm)(D,null,{default:(0,t.w5)((()=>[f,v,c,p,h])),_:1}),g,(0,t.Wm)(D,null,{default:(0,t.w5)((()=>[k,b,y,(0,t.Wm)(C,{header:"eks på valideringsmetode",code:r}),(0,t.Wm)(C,{header:"eks på valideringsmetode",code:I})])),_:1}),(0,t.Wm)(A,{header:"Andre eksempler"},{default:(0,t.w5)((()=>[(0,t._)("pre",{textContent:V})])),_:1})])),_:1})])}}});const x=I;var V=x},2482:function(e,l,n){function t(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}n.d(l,{Z:function(){return t}})}}]);
//# sourceMappingURL=view-FormValidering.47bed3d0.js.map