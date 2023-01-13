import{e as h,f as v,o as x,c as b,b as l,w as o,d as i,a as e,r as t,p as E,q as g,_ as y}from"./index.59297fa2.js";const s=a=>(E("data-v-46cb32d9"),a=a(),g(),a),A=s(()=>e("div",{id:"cookie-message-heading",class:"h3 mt-0 mb-3"}," Fort\xE6l os om du accepterer cookies ",-1)),C=s(()=>e("p",{id:"cookie-message-text",class:"mt-0"},[i(" Vi indsamler statistik ved hj\xE6lp af cookies. Alle indsamlede data anonymiseres. "),e("a",{href:"#"}," L\xE6s mere om vores brug af cookies. ")],-1)),w=s(()=>e("table",{class:"table table--compact"},[e("thead",null,[e("tr",null,[e("th",null,"Props"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Beskrivelse")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"header")]),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"Fort\xE6l os om du accepterer cookies")]),e("td")])])],-1)),j=s(()=>e("table",{class:"table table--compact"},[e("thead",null,[e("tr",null,[e("th",null,"Slots"),e("th",null,"Type")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"header")]),e("td",null,[e("code",null,"props.header")])]),e("tr",null,[e("td",null,[e("code",null,"actions")]),e("td",null,"default knapper")])])],-1)),V=s(()=>e("table",{class:"table table--compact"},[e("thead",null,[e("tr",null,[e("th",null,"Events"),e("th",null,"Type")])]),e("tbody",null,[e("tr",null,[e("td",null,[e("code",null,"@accept")]),e("td",null,"Klik Ja til cookie")]),e("tr",null,[e("td",null,[e("code",null,"@cancel")]),e("td",null,"Klik Nej til cookie")])])],-1)),F=h({__name:"CookieExample",setup(a){const c=v(null),r=`
<fds-cookiemeddelelse @accept="cookieAccept = $event">
  <template #header>
    <div class="h3 mt-0 mb-3" id="cookie-message-heading">
      Fort\xE6l os om du accepterer cookies
    </div>
  </template>
  <p class="mt-0" id="cookie-message-text">
    Vi indsamler statistik ved hj\xE6lp af cookies. Alle indsamlede data anonymiseres.
    <a href="#"> L\xE6s mere om vores brug af cookies. </a>
  </p>
</fds-cookiemeddelelse>

// Eller

<fds-cookiemeddelelse 
  @accept="cookieAccept = true"
  @cancel="cookieAccept = false"
  header="Fort\xE6l os om du accepterer cookies">
  <p class="mt-0" id="cookie-message-text">
    Vi indsamler statistik ved hj\xE6lp af cookies. Alle indsamlede data anonymiseres.
    <a href="#"> L\xE6s mere om vores brug af cookies. </a>
  </p>
</fds-cookiemeddelelse>

// Eller egne knapper

<fds-cookiemeddelelse 
  @accept="cookieAccept = true"
  @cancel="cookieAccept = false"
  header="Fort\xE6l os om du accepterer cookies">
  <p class="mt-0" id="cookie-message-text">
    Vi indsamler statistik ved hj\xE6lp af cookies. Alle indsamlede data anonymiseres.
    <a href="#"> L\xE6s mere om vores brug af cookies. </a>
  </p>
  <template #actions>
    <fds-button
      variant="secondary">
      Accepter cookies
    </fds-button>
    <fds-button
      variant="secondary">
      Nej tak til cookies
    </fds-button>
  </template>
</fds-cookiemeddelelse>
`;return(N,d)=>{const p=t("fds-alert"),u=t("fds-cookiemeddelelse"),m=t("fds-pre"),n=t("fds-preview-item"),k=t("fds-preview-code"),_=t("fds-preview");return x(),b("section",null,[l(p,{variant:"info",header:"Under udvikling",closeable:""},{default:o(()=>[i("Cookiemeddelelse er stadig under udvikling, mindre \xE6ndringer kan forkomme ")]),_:1}),l(_,{header:"Eksempel",href:"https://designsystem.dk/komponenter/cookiemeddelelse/"},{default:o(()=>[l(n,null,{default:o(()=>[l(u,{class:"example_relative",onAccept:d[0]||(d[0]=f=>c.value=!0),onCancel:d[1]||(d[1]=f=>c.value=!1)},{header:o(()=>[A]),default:o(()=>[C]),_:1}),l(m,{header:"Cookimeddelelse",json:{cookieAccept:c.value}},null,8,["json"])]),_:1}),l(k,null,{default:o(()=>[e("pre",{textContent:r})]),_:1}),l(n,null,{default:o(()=>[w,j,V]),_:1})]),_:1})])}}});const I=y(F,[["__scopeId","data-v-46cb32d9"]]);export{I as default};
