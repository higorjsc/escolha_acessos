"use strict";(self["webpackChunk"]=self["webpackChunk"]||[]).push([[700],{804:(s,e,o)=>{o.r(e),o.d(e,{default:()=>is});var t=o(252);const r={class:"header-container"},i={class:"main-container"};function a(s,e,o,a,l,n){const m=(0,t.up)("vueHeader"),c=(0,t.up)("vueNavBar"),h=(0,t.up)("vueInputs"),u=(0,t.up)("vueFluxograma"),p=(0,t.up)("vueIlustrations"),d=(0,t.up)("vueFooter");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("header",r,[(0,t.Wm)(m)]),(0,t._)("main",i,[(0,t.Wm)(c,{class:"main-elements navbar"}),(0,t.Wm)(h,{class:"main-elements vueInputs"}),(0,t.Wm)(u,{class:"main-elements vueFluxograma"}),(0,t.Wm)(p,{class:"main-elements resultados"})]),(0,t.Wm)(d)],64)}var l=o(613),n=o(543),m=o(158),c=o(354),h=o(567),u=o(577),p=o(963);const d={class:"section-inputs-acessos"},M={class:"titulo-section-acessos"},f={class:"container-inputs-acessos",id:"logistica"},g={class:"subtitulo-inputs-acessos"},_={class:"radio-container"},w=(0,t._)("label",{for:"logistica-sim",name:"logisticaInput",class:"radio-label",id:"logistica-moser-sim"},null,-1),v=(0,t._)("label",{for:"logistica-nao",name:"logisticaInput",class:"radio-label",id:"logistica-moser-nao"},null,-1),b={class:"container-inputs-acessos",id:"rm"},k={class:"subtitulo-inputs-acessos"},C={class:"radio-container"},$=(0,t._)("label",{for:"rm-menor",class:"radio-label",id:"rm-moser-maior"},null,-1),z=(0,t._)("label",{for:"rm-maior",class:"radio-label",id:"rm-moser-maior"},null,-1),P={class:"container-inputs-acessos",id:"sm"},G={class:"subtitulo-inputs-acessos"},I={class:"radio-container"},y=(0,t._)("label",{for:"sm-menor",class:"radio-label",id:"sm-moser-menor"},null,-1),V=(0,t._)("label",{for:"sm-maior",class:"radio-label",id:"sm-moser-maior"},null,-1),R={class:"container-inputs-acessos",id:"op"},D={class:"subtitulo-inputs-acessos"},U={class:"radio-container"},Z=(0,t._)("label",{for:"op-sim",class:"radio-label",id:"op-moser-sim"},null,-1),j=(0,t._)("label",{for:"op-nao",class:"radio-label",id:"op-moser-nao"},null,-1),L={class:"container-inputs-acessos",id:"depth"},O={class:"subtitulo-inputs-acessos"},S=(0,t._)("option",{value:""},null,-1),W={value:"menor"},T={value:"entre"},x={value:"maior"},F={class:"container-inputs-acessos",id:"prod"},H={class:"subtitulo-inputs-acessos"},B=(0,t._)("option",{value:""},null,-1),E={value:"menor"},N={value:"entre"},A={value:"maior"};function K(s,e,o,r,i,a){const l=(0,t.up)("switchLanguage");return(0,t.wg)(),(0,t.iD)("section",d,[(0,t._)("h2",M,(0,u.zw)(s.$t("tituloInputs")),1),(0,t.Wm)(l,{class:"main-elements switch-language"}),(0,t._)("div",f,[(0,t._)("h3",g,(0,u.zw)(s.$t("logisticaTituloMoser")),1),(0,t._)("span",null,(0,u.zw)(s.$t("logisticaDescriptionMoser")),1),(0,t._)("div",_,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":e[0]||(e[0]=s=>i.moser.logistica=s),value:"sim",id:"logistica-sim"},null,512),[[p.G2,i.moser.logistica]]),w,(0,t._)("span",null,(0,u.zw)(s.$t("sim")),1),(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":e[1]||(e[1]=s=>i.moser.logistica=s),value:"nao",id:"logistica-nao"},null,512),[[p.G2,i.moser.logistica]]),v,(0,t._)("span",null,(0,u.zw)(s.$t("nao")),1)])]),(0,t._)("div",b,[(0,t._)("h3",k,(0,u.zw)(s.$t("rmTituloMoser")),1),(0,t._)("span",null,(0,u.zw)(s.$t("rmDescriptionMoser")),1),(0,t._)("div",C,[(0,t.wy)((0,t._)("input",{type:"radio",class:"rm","onUpdate:modelValue":e[2]||(e[2]=s=>i.moser.rockMass=s),value:"menor",id:"rm-menor"},null,512),[[p.G2,i.moser.rockMass]]),$,(0,t._)("span",null,(0,u.zw)(s.$t("rmMenorMoser")),1),(0,t.wy)((0,t._)("input",{type:"radio",class:"rm","onUpdate:modelValue":e[3]||(e[3]=s=>i.moser.rockMass=s),value:"maior",id:"rm-maior"},null,512),[[p.G2,i.moser.rockMass]]),z,(0,t._)("span",null,(0,u.zw)(s.$t("rmMaiorMoser")),1)])]),(0,t._)("div",P,[(0,t._)("h3",G,(0,u.zw)(s.$t("smTituloMoser")),1),(0,t._)("span",null,(0,u.zw)(s.$t("smDescriptionMoser")),1),(0,t._)("div",I,[(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":e[4]||(e[4]=s=>i.moser.surfaceMaterial=s),value:"menor",id:"sm-menor"},null,512),[[p.G2,i.moser.surfaceMaterial]]),y,(0,t._)("span",null,(0,u.zw)(s.$t("smMenorMoser")),1),(0,t.wy)((0,t._)("input",{type:"radio","onUpdate:modelValue":e[5]||(e[5]=s=>i.moser.surfaceMaterial=s),value:"maior",id:"sm-maior"},null,512),[[p.G2,i.moser.surfaceMaterial]]),V,(0,t._)("span",null,(0,u.zw)(s.$t("smMaiorMoser")),1)])]),(0,t._)("div",R,[(0,t._)("h3",D,(0,u.zw)(s.$t("opTituloMoser")),1),(0,t._)("span",null,(0,u.zw)(s.$t("opDescriptionMoser")),1),(0,t._)("div",U,[(0,t.wy)((0,t._)("input",{type:"radio",class:"op","onUpdate:modelValue":e[6]||(e[6]=s=>i.moser.openPit=s),value:"sim",id:"op-sim"},null,512),[[p.G2,i.moser.openPit]]),Z,(0,t._)("span",null,(0,u.zw)(s.$t("sim")),1),(0,t.wy)((0,t._)("input",{type:"radio",class:"op","onUpdate:modelValue":e[7]||(e[7]=s=>i.moser.openPit=s),value:"nao",id:"op-nao"},null,512),[[p.G2,i.moser.openPit]]),j,(0,t._)("span",null,(0,u.zw)(s.$t("nao")),1)])]),(0,t._)("div",L,[(0,t._)("h3",O,(0,u.zw)(s.$t("depthTituloMoser")),1),(0,t._)("span",null,(0,u.zw)(s.$t("depthDescriptionMoser")),1),(0,t.wy)((0,t._)("select",{"onUpdate:modelValue":e[8]||(e[8]=s=>i.moser.depth=s),class:"depth",id:"depth-moser"},[S,(0,t._)("option",W,(0,u.zw)(s.$t("depthMenorMoser")),1),(0,t._)("option",T,(0,u.zw)(s.$t("depthEntreMoser")),1),(0,t._)("option",x,(0,u.zw)(s.$t("depthMaiorMoser")),1)],512),[[p.bM,i.moser.depth]])]),(0,t._)("div",F,[(0,t._)("h3",H,(0,u.zw)(s.$t("prodTituloMoser")),1),(0,t._)("span",null,(0,u.zw)(s.$t("prodDescriptionMoser")),1),(0,t.wy)((0,t._)("select",{"onUpdate:modelValue":e[9]||(e[9]=s=>i.moser.prod=s),class:"prod",id:"prod-moser"},[B,(0,t._)("option",E,(0,u.zw)(s.$t("prodMenorMoser")),1),(0,t._)("option",N,(0,u.zw)(s.$t("prodEntreMoser")),1),(0,t._)("option",A,(0,u.zw)(s.$t("prodMaiorMoser")),1)],512),[[p.bM,i.moser.prod]])])])}var Y=o(645),q=o(433);const J={name:"vue-inputs-moser",components:{switchLanguage:Y.Z},mixins:[q.Z],data(){return{moser:{logistica:"",rockMass:"",surfaceMaterial:"",openPit:"",prod:"",depth:"",resultado:""}}},watch:{moser:{handler(){this.resultado="",this.disableObject(["rm","sm","op","depth","prod"]),this.setDefaultColor(),this.defaultImages(),this.newValue(),this.$store.dispatch("changeInputsAcessos",{metodo:"moser",value:this.moser})},deep:!0}},mounted(){this.setDefaultColor(),this.disableObject(["rm","sm","op","depth","prod"])},methods:{newValue(){"sim"===this.moser.logistica?(this.enableObjects("rm"),this.setColorGreen(["logistica"])):"nao"===this.moser.logistica&&(this.resultado="resultadoShaftMoser",this.showImages(["shaft","superficie"]),this.setColorRed(),this.setColorGreen(["logistica","shaft"])),"sim"===this.moser.logistica&&"menor"===this.moser.rockMass?(this.enableObjects("sm"),this.setColorGreen(["logistica","rockMass"])):"sim"===this.moser.logistica&&"maior"===this.moser.rockMass&&(this.resultado="resultadoShaftMoser",this.showImages(["shaft"]),this.setColorRed(),this.setColorGreen(["logistica","rockMass","shaft"])),"sim"===this.moser.logistica&&"menor"===this.moser.rockMass&&"maior"===this.moser.surfaceMaterial?(this.resultado="resultadoShaftMoser",this.showImages(["shaft"]),this.setColorRed(),this.setColorGreen(["logistica","rockMass","surfaceMaterial","shaft"])):"sim"===this.moser.logistica&&"menor"===this.moser.rockMass&&"menor"===this.moser.surfaceMaterial&&(this.enableObjects("op"),this.setColorGreen(["logistica","rockMass","surfaceMaterial"])),"sim"!==this.moser.logistica||"menor"!==this.moser.rockMass||"menor"!==this.moser.surfaceMaterial||"sim"!==this.moser.openPit&&"nao"!==this.moser.openPit||(this.enableObjects("depth"),this.setColorGreen(["logistica","rockMass","surfaceMaterial","openPit"])),"sim"===this.moser.openPit&&this.showImages(["superficiePit"]),"sim"!==this.moser.logistica||"menor"!==this.moser.rockMass||"menor"!==this.moser.surfaceMaterial||"nao"!==this.moser.openPit||"entre"!==this.moser.depth&&"maior"!==this.moser.depth?"sim"===this.moser.logistica&&"menor"===this.moser.rockMass&&"menor"===this.moser.surfaceMaterial&&"nao"===this.moser.openPit&&"menor"===this.moser.depth&&(this.enableObjects("prod"),this.setColorGreen(["logistica","rockMass","surfaceMaterial","openPit","depthCenter"])):(this.resultado="resultadoShaftMoser",this.showImages(["shaft"]),this.setColorRed(),this.setColorGreen(["logistica","rockMass","surfaceMaterial","openPit","depthCenter","shaft"])),"sim"===this.moser.logistica&&"menor"===this.moser.rockMass&&"menor"===this.moser.surfaceMaterial&&"sim"===this.moser.openPit&&"maior"===this.moser.depth?(this.resultado="resultadoShaftMoser",this.showImages(["shaft"]),this.setColorRed(),this.setColorGreen(["logistica","rockMass","surfaceMaterial","openPit","depthLeft","shaft"])):"sim"!==this.moser.logistica||"menor"!==this.moser.rockMass||"menor"!==this.moser.surfaceMaterial||"sim"!==this.moser.openPit||"menor"!==this.moser.depth&&"entre"!==this.moser.depth||(this.enableObjects("prod"),this.setColorGreen(["logistica","rockMass","surfaceMaterial","openPit","depthLeft"])),"sim"===this.moser.logistica&&"menor"===this.moser.rockMass&&"menor"===this.moser.surfaceMaterial&&"nao"===this.moser.openPit&&"menor"===this.moser.depth&&"menor"===this.moser.prod?(this.resultado="resultadoRampaMoser",this.showImages(["rampa","truck"]),this.setColorRed(),this.setColorGreen(["logistica","rockMass","surfaceMaterial","openPit","depthCenter","prodCenter","rampa"])):"sim"!==this.moser.logistica||"menor"!==this.moser.rockMass||"menor"!==this.moser.surfaceMaterial||"nao"!==this.moser.openPit||"menor"!==this.moser.depth||"entre"!==this.moser.prod&&"maior"!==this.moser.prod||(this.resultado="resultadoShaftMoser",this.showImages(["shaft"]),this.setColorRed(),this.setColorGreen(["logistica","rockMass","surfaceMaterial","openPit","depthCenter","prodCenter","shaft"])),"sim"!==this.moser.logistica||"menor"!==this.moser.rockMass||"menor"!==this.moser.surfaceMaterial||"sim"!==this.moser.openPit||"menor"!==this.moser.depth&&"entre"!==this.moser.depth||"menor"!==this.moser.prod&&"entre"!==this.moser.prod?"sim"!==this.moser.logistica||"menor"!==this.moser.rockMass||"menor"!==this.moser.surfaceMaterial||"sim"!==this.moser.openPit||"menor"!==this.moser.depth&&"entre"!==this.moser.depth||"maior"!==this.moser.prod||(this.resultado="resultadoShaftMoser",this.showImages(["shaft"]),this.setColorRed(),this.setColorGreen(["logistica","rockMass","surfaceMaterial","openPit","depthLeft","prodLeft","shaft"])):(this.resultado="resultadoRampaMoser",this.showImages(["rampaPit","truck"]),this.setColorRed(),this.setColorGreen(["logistica","rockMass","surfaceMaterial","openPit","depthLeft","prodLeft","rampa"]))}}};var Q=o(744);const X=(0,Q.Z)(J,[["render",K]]),ss=X;var es=o(287),os=o(443);const ts={name:"vue-view-moser",components:{vueNavBar:l.Z,vueInputs:ss,vueFluxograma:c.Z,vueHeader:n.Z,vueFooter:m.Z,vueIlustrations:h.Z},mixins:[es.Z],beforeMount(){this.$store.dispatch("changeMetodo","Moser"),(0,os.vK)("temaVermelho")}},rs=(0,Q.Z)(ts,[["render",a]]),is=rs}}]);
//# sourceMappingURL=700.fc5c5ec0.js.map