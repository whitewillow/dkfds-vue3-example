import{e as j,f,n as F,o as w,c as I,b as l,w as t,j as m,k as C,l as M,d as n,a as e,r as d}from"./index.c3cdafea.js";const B=e("hr",null,null,-1),D=e("p",{class:"italic"},[n(" Komponenten "),e("code",null,"xfds-validate"),n(" er en valideringswrapper. ")],-1),N=e("p",{class:"italic"}," Kan evt bruge til at lave egne komponenter der wrapper eksempelvis ovenst\xE5ende i sin egen validarings-komponent ",-1),L=e("p",{class:"italic"},[n(" Komponenten "),e("code",null,"fds-input"),n(" kan udskiftes med egne komponenter eller eg: "),e("code",null,"fds-input-number"),n(" m.m. ")],-1),A=e("p",null,"Se evt nedest\xE5ende eksempler for andre m\xE5de at opn\xE5 det samme",-1),K=e("table",{class:"table table--compact"},[e("thead",null,[e("tr",null,[e("th",null,"Props"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Beskrivelse")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"modelValue")]),e("td",null,[e("code",null,"string, number, array")]),e("td",null,[e("code",null,"null")]),e("td")]),e("tr",null,[e("td",null,[e("code",null,"validations")]),e("td",null,[e("code",null,"Array'<'(x?: unknown) => string | null'>'")]),e("td",null,[e("code",null," [(input: unknown) => { if (!input) { return 'Indtast data'; } return null; }]")]),e("td",null,"Et array af valideringsmetoder")]),e("tr",null,[e("td",null,[e("code",null,"id")]),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"null (auto id)")]),e("td")]),e("tr",null,[e("td",null,[e("code",null,"dirty")]),e("td",null,[e("code",null,"boolean")]),e("td",null,[e("code",null,"false")]),e("td",null,"Om feltet er blevet ber\xF8rt")]),e("tr",null,[e("td",null,[e("code",null,"useAutoDirty")]),e("td",null,[e("code",null,"boolean")]),e("td",null,[e("code",null,"true")]),e("td",null,"Om underliggende input eller select felt er blevet ber\xF8rt (blur event)")])])],-1),W=e("table",{class:"table table--compact"},[e("thead",null,[e("tr",null,[e("th",null,"Events"),e("th",null,"Returns"),e("th",null,"Beskrivelse")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"@validated")]),e("td",null,[n(" ValidatorItem: "),e("code",null," { key: string; type: string; reasons?: string[]; valid: boolean; dirty: boolean; } ")]),e("td",null," Hver gang input valideres returneres et ValidatorItem object. Der indeholder den fulde sandhed ")])])],-1),P=e("table",{class:"table table--compact"},[e("thead",null,[e("tr",null,[e("th",null,"Slot #default binds"),e("th",null,"Beskrivelse")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"isValidWaitForDirty")]),e("td",null,"Er form valid - Bliver kun aktiveret efter underligge input/select er blur")]),e("tr",null,[e("td",null,[e("code",null,"isValid")]),e("td",null,"Er form valid")]),e("tr",null,[e("td",null,[e("code",null,"errorMessage")]),e("td",null,"F\xF8rst fundne fejlbesked")])])],-1),T=e("p",{class:"h4"}," Provide ",-1),$=e("table",{class:"table table--compact"},[e("thead",null,[e("tr",null,[e("th"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Beskrivelse")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"provideIsValid")]),e("td",null,[e("code",null,"boolean")]),e("td",null,[e("code",null,"true")]),e("td",null,"Er alle validations valide")]),e("tr",null,[e("td",null,[e("code",null,"provideErrorMessage")]),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null," ''")]),e("td",null,"F\xF8rst fundne fejl")])])],-1),O=e("hr",null,null,-1),S=e("h2",null,"Validerings metoder",-1),H=e("p",null,[n("Konceptet er at hvis der returneres en fejlbesked "),e("code",null,"string"),n(" s\xE5 er der fejl")],-1),R=e("p",null,[n("returneres der "),e("code",null,"null"),n(" er modelValue valid")],-1),G=j({__name:"FormValidering",setup(U){const i=f(new F),a=f({name:"",adress:"",city:"",search:""}),v=`
  export function charactersMinLength (length: number): (args: string) => string | null {
    return (x: string) =>
      (x.length >= length ? null : \`Feltet m\xE5 ikke v\xE6re kortere end \${length} tegn.\`);
  }`,p=`
  export function hasContent (x: string): string | null {
    return x !== null && x.replace(/\\s+/g, '').length > 0 ? null : 'Feltet m\xE5 ikke v\xE6re tomt.';
  }`,_=`

<xfds-validate
  :modelValue="user.name"
  @validated="validator.addItem($event)"
  :validations="[hasContent, charactersMinLength(10)]"
>
  <fds-formgroup>
    <fds-label> Navn </fds-label>
    <fds-fejlmeddelelse />
    <fds-hint>Indtast navn</fds-hint>
    <fds-input v-model="user.name" />
  </fds-formgroup>
</xfds-validate>

`,h=`
<xfds-validate
  :modelValue="user.name"
  :validations="[hasContent, charactersMinLength(10)]">
  <xfds-form-input
    label="Navn"
    hint="Indtast navn"
    tooltip="Input tooltip"
    v-model="user.name"
  />
</xfds-validate>



<xfds-validate :modelValue="user.name" :validations="[hasContent, charactersMinLength(10)]">
  <fds-formgroup>
    <fds-label> Navn </fds-label>
    <fds-fejlmeddelelse />
    <fds-hint>Indtast navn</fds-hint>
    <fds-input v-model="user.name" />
  </fds-formgroup>
</xfds-validate>


<xfds-validate
  :modelValue="user.name"
  :dirty="dirty"
  :validations="[hasContent, charactersMinLength(10)]"
  #default="{ isValidWaitForDirty, errorMessage }"
>
  <fds-formgroup :is-valid="isValidWaitForDirty">
    <fds-label> Navn </fds-label>
    <fds-fejlmeddelelse v-if="!isValidWaitForDirty">
      {{ errorMessage }}
    </fds-fejlmeddelelse>
    <fds-hint>Indtast navn</fds-hint>
    <fds-input v-model="user.name" @dirty="dirty = $event"></fds-input>
  </fds-formgroup>
</xfds-validate>
`;return(q,s)=>{const g=d("fds-label"),b=d("fds-fejlmeddelelse"),x=d("fds-hint"),k=d("fds-input"),V=d("fds-formgroup"),y=d("xfds-validate"),o=d("fds-pre"),r=d("fds-preview-item"),c=d("fds-preview-code"),E=d("fds-preview");return w(),I("section",null,[l(E,{header:"Eksempel"},{default:t(()=>[l(r,null,{default:t(()=>[l(y,{"model-value":a.value.name,validations:[m(C),m(M)(10)],onValidated:s[1]||(s[1]=u=>i.value.addItem(u))},{default:t(()=>[l(V,null,{default:t(()=>[l(g,null,{default:t(()=>[n(" Navn ")]),_:1}),l(b),l(x,null,{default:t(()=>[n("Indtast navn")]),_:1}),l(k,{modelValue:a.value.name,"onUpdate:modelValue":s[0]||(s[0]=u=>a.value.name=u)},null,8,["modelValue"])]),_:1})]),_:1},8,["model-value","validations"]),l(o,{header:"object data",json:{navn:a.value.name}},null,8,["json"]),l(o,{header:"@validated",json:{validatedList:i.value.validatorItems}},null,8,["json"])]),_:1}),B,l(r,null,{default:t(()=>[D,N,L,A]),_:1}),l(c,null,{default:t(()=>[e("pre",{textContent:_})]),_:1}),l(r,null,{default:t(()=>[K,W,P,T,$]),_:1}),O,l(r,null,{default:t(()=>[S,H,R,l(o,{header:"eks p\xE5 valideringsmetode",code:v}),l(o,{header:"eks p\xE5 valideringsmetode",code:p})]),_:1}),l(c,{header:"Andre eksempler"},{default:t(()=>[e("pre",{textContent:h})]),_:1})]),_:1})])}}});export{G as default};
