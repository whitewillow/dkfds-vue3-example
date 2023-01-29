import{e as _,o as k,c as g,b as t,w as n,a as e,j as d,d as o,i as h,r}from"./index.9ab9e984.js";const x=e("p",null," Nedest\xE5ende er et eksempel p\xE5 at udvide eksisterende komponenter, til at g\xF8re brug af vue-router (da DKFDS-Vue3 - ikke selv inkludere vue router) ",-1),N={class:"navbar navbar-primary"},b={class:"navbar-inner container"},S={class:"nav-primary",role:"menu"},w=e("hr",null,null,-1),y=e("p",{class:"italic"},[o(" Komponenten "),e("code",null,"fds-xtnd-nav-item-route"),o(" g\xF8r det nemmer at auto markere om siden er aktiv ")],-1),R=e("p",{class:"italic"}," Se nedest\xE5ende kode for komponenten ",-1),V=_({__name:"NavigationView",setup(F){const a=h(),m=`
import { useRoute } from 'vue-router';
import { navigation } from 'dkfds-vue3/utils';

const route = useRoute();

// S\xF8rger for at "burger menu" virker
new navigation().init();

<div class="navbar navbar-primary">
    <div class="navbar-inner container">
        <ul class="nav-primary" role="menu">
            <fds-nav-item-route
                toName="forside"
                :current-route-name="route.name?.toString()"
                linkTitle="Link title"
            >
                Forside
            </fds-nav-item-route>
            <fds-nav-item-route
                toName="anbefalingernavigation"
                :current-route-name="route.name?.toString()"
                linkTitle="Link title"
            >
                Denne side
            </fds-nav-item-route>
        </ul>
    </div>
</div>`,c=`
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
<\/script>`;return(B,C)=>{const i=r("fds-xtnd-nav-item-route"),p=r("fds-pre"),s=r("fds-preview-item"),f=r("fds-preview-code"),v=r("fds-preview");return k(),g("section",null,[t(v,{header:"Udvidet Navigationslink til header"},{default:n(()=>[t(s,null,{default:n(()=>{var u,l;return[x,e("div",N,[e("div",b,[e("ul",S,[t(i,{"to-name":"forside","current-route-name":(u=d(a).name)==null?void 0:u.toString(),"link-title":"Link title"},{default:n(()=>[o(" Forside ")]),_:1},8,["current-route-name"]),t(i,{"to-name":"anbefalingernavigation","current-route-name":(l=d(a).name)==null?void 0:l.toString(),"link-title":"Link title"},{default:n(()=>[o(" Denne side ")]),_:1},8,["current-route-name"])])])]),t(p,{code:m,header:"Brug af komponent"})]}),_:1}),w,t(s,null,{default:n(()=>[y,R]),_:1}),t(f,null,{default:n(()=>[e("pre",{textContent:c})]),_:1})]),_:1})])}}});export{V as default};
