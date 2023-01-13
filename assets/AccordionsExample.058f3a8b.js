import{e as c,o as m,c as p,b as i,w as o,a as e,r as a}from"./index.2aa85a96.js";const h=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),_=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),q=e("p",{class:"h4"}," Accordion med custom header ",-1),f=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),g=e("table",{class:"table table--compact"},[e("thead",null,[e("tr",null,[e("th",null,"Props"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Beskrivelse")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"header")]),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"null")]),e("td")]),e("tr",null,[e("td",null,[e("code",null,"header-tag")]),e("td",null,[e("code",null,"'h2' | 'h3' | 'h4' | 'h5' | 'h6'")]),e("td",null,[e("code",null,"'h2'")]),e("td")]),e("tr",null,[e("td",null,[e("code",null,"variant")]),e("td",null,[e("code",null,"'success' | 'warning' | 'error'")]),e("td",null,[e("code",null,"null")]),e("td")]),e("tr",null,[e("td",null,[e("code",null,"variantText")]),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"''")]),e("td")]),e("tr",null,[e("td",null,[e("code",null,"expanded")]),e("td",null,[e("code",null,"Boolean")]),e("td",null,[e("code",null,"false")]),e("td")])])],-1),b=e("table",{class:"table table--compact"},[e("thead",null,[e("tr",null,[e("th",null,"Slots"),e("th",null,"Default"),e("th",null,"Beskrivelse")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"header")]),e("td",null,[e("code",null,"prop.header, prop.variantText")]),e("td")]),e("tr",null,[e("td",null,[e("code",null,"default")]),e("td",null,[e("code")]),e("td")])])],-1),x=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),v=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),A=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),L=e("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),k=c({__name:"AccordionsExample",setup(U){const s=`
<fds-accordion header="Accordion normal header" class="mb-4">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</fds-accordion>

<fds-accordion header="Accordion normal header" header-tag="h3" class="mb-4">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</fds-accordion>

<fds-accordion class="mb-4" header-tag="h3">
  <template #header>
    <p class="h4">Accordion med custom header</p>
  </template>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</fds-accordion>`,r=`
<fds-accordion-group>
  <fds-accordion header="Accordion header med hint">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </fds-accordion>

  <fds-accordion
    header="Accordion header med Success"
    variant="success"
    variant-text="Success"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </fds-accordion>

  <fds-accordion
    header="Accordion header med advarsel"
    variant="warning"
    variant-text="Advarsel"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </fds-accordion>

  <fds-accordion header="Accordion header med Fejl" variant="error">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </fds-accordion>
</fds-accordion-group>
`;return(w,C)=>{const t=a("fds-accordion"),d=a("fds-preview-item"),n=a("fds-preview-code"),l=a("fds-preview"),u=a("fds-accordion-group");return m(),p("section",null,[i(l,{header:"Single Accordions",href:"https://designsystem.dk/komponenter/accordions/"},{default:o(()=>[i(d,null,{default:o(()=>[i(t,{header:"Accordion normal header",class:"mb-4"},{default:o(()=>[h]),_:1}),i(t,{header:"Accordion normal header","header-tag":"h3",class:"mb-4"},{default:o(()=>[_]),_:1}),i(t,{class:"mb-4","header-tag":"h3"},{header:o(()=>[q]),default:o(()=>[f]),_:1})]),_:1}),i(n,null,{default:o(()=>[e("pre",{textContent:s})]),_:1}),i(d,null,{default:o(()=>[g,b]),_:1})]),_:1}),i(l,{header:"Accordion gruppe"},{default:o(()=>[i(d,null,{default:o(()=>[i(u,null,{default:o(()=>[i(t,{header:"Accordion header med hint"},{default:o(()=>[x]),_:1}),i(t,{header:"Accordion header med Success",variant:"success","variant-text":"Success"},{default:o(()=>[v]),_:1}),i(t,{header:"Accordion header med advarsel",variant:"warning","variant-text":"Advarsel"},{default:o(()=>[A]),_:1}),i(t,{header:"Accordion header med Fejl",variant:"error"},{default:o(()=>[L]),_:1})]),_:1})]),_:1}),i(n,null,{default:o(()=>[e("pre",{textContent:r})]),_:1})]),_:1})])}}});export{k as default};
