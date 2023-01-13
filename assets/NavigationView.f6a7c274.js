import{e as v,o as _,c as k,b as t,w as n,a as e,d as o,r}from"./index.59297fa2.js";const g=e("p",null," Nedest\xE5ende er et eksempel p\xE5 at udvide eksisterende komponenter, til at g\xF8re brug af vue-router (da DKFDS-Vue3 - ikke selv inkludere vue router) ",-1),h={class:"navbar navbar-primary"},N={class:"navbar-inner container"},b={class:"nav-primary",role:"menu"},x=e("hr",null,null,-1),S=e("p",{class:"italic"},[o(" Komponenten "),e("code",null,"fds-xtnd-nav-item-route"),o(" g\xF8r det nemmer at auto markere om siden er aktiv ")],-1),w=e("p",{class:"italic"}," Se nedest\xE5ende kode for komponenten ",-1),F=v({__name:"NavigationView",setup(y){const d=`
<div class="navbar navbar-primary">
    <div class="navbar-inner container">
        <ul class="nav-primary" role="menu">
            <fds-nav-item-route
                toName="forside"
                :current-route-name="$route.name?.toString()"
                linkTitle="Link title"
            >
                Forside
            </fds-nav-item-route>
            <fds-nav-item-route
                toName="anbefalingernavigation"
                :current-route-name="$route.name?.toString()"
                linkTitle="Link title"
            >
                Denne side
            </fds-nav-item-route>
        </ul>
    </div>
</div>`,m=`
// fds-xtnd-nav-item-route.vue

<template>
  <router-link :to="{ name: toName }" custom v-slot="{ href, navigate, isActive }">
    <li role="none" :class="[{ current: isActive || isPartOfMenu(toName) }]">
      <fds-nav-link :href="href" :title="linkTitle" @click="navigate">
        <slot />
      </fds-nav-link>
    </li>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const props = defineProps({
  toName: {
    type: String,
    default: '',
  },
  currentRouteName: {
    type: String,
    default: null,
  },
  linkTitle: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  tooltip: {
    type: String,
  },
});

const isPartOfMenu = (name: string): boolean => {
  if (route) {
    const [parent] = route.matched;
    if (parent && parent.name === name) {
      return true;
    }
  }
  if (props.currentRouteName) {
    return props.currentRouteName === name;
  }
  return false;
};
<\/script>`;return(a,B)=>{const i=r("fds-xtnd-nav-item-route"),c=r("fds-pre"),s=r("fds-preview-item"),p=r("fds-preview-code"),f=r("fds-preview");return _(),k("section",null,[t(f,{header:"Udvidet Navigationslink til header"},{default:n(()=>[t(s,null,{default:n(()=>{var l,u;return[g,e("div",h,[e("div",N,[e("ul",b,[t(i,{"to-name":"forside","current-route-name":(l=a.$route.name)==null?void 0:l.toString(),"link-title":"Link title"},{default:n(()=>[o(" Forside ")]),_:1},8,["current-route-name"]),t(i,{"to-name":"anbefalingernavigation","current-route-name":(u=a.$route.name)==null?void 0:u.toString(),"link-title":"Link title"},{default:n(()=>[o(" Denne side ")]),_:1},8,["current-route-name"])])])]),t(c,{code:d,header:"Brug af komponent"})]}),_:1}),x,t(s,null,{default:n(()=>[S,w]),_:1}),t(p,null,{default:n(()=>[e("pre",{textContent:m})]),_:1})]),_:1})])}}});export{F as default};
