!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="df700f6c-23e0-4b30-827a-f9881fb687a4",e._sentryDebugIdIdentifier="sentry-dbid-df700f6c-23e0-4b30-827a-f9881fb687a4")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"a795d4d0ab7b284edba22b583ea6769a9f9ec64d"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[20],{9020:function(e,t,l){l.r(t),l.d(t,{default:function(){return ne}});l(57640),l(9924);var n=l(67294),a=l(22195),o=l(91008),s=l(25185),r=l(87462),i=(l(33948),l(50308)),c=l.n(i),d=l(82351),u=l(35539),m=e=>{let{scope:t,setScope:l=c(),isDisabled:o,...s}=e;return n.createElement(a.Flex,(0,r.Z)({gap:3},s),Object.entries(u.k0).map((e=>{let[s,{text:r,tooltip:i}]=e;return n.createElement(a.RadioButton,{key:s,checked:s===t,onChange:()=>l(s),disabled:o},n.createElement(d.Z,{content:i,align:"bottom"},n.createElement(a.TextSmall,{color:"textDescription"},r)))})))},p=l(84580),b=l(46667),g=e=>{let{selectedKey:t,selectedValue:l,onAddHostLabel:o=c(),onRemoveHostLabel:s=c(),isDefault:r=!1,showPlaceholder:i=c(),isDisabled:u}=e;const[m,b]=(0,n.useState)(t||""),[g,h]=(0,n.useState)(l||""),E=()=>{m&&g&&(o({[m]:g}),i())};return n.createElement(a.Flex,{gap:2},n.createElement(p.Z,{component:"input",onChange:b,onBlur:E,placeholder:"Host key",value:m,disabled:u||!r}),n.createElement(p.Z,{component:"input",onChange:h,onBlur:E,placeholder:"Host value",value:g,disabled:u||!r||!m}),r?n.createElement(d.Z,{content:"Save label pair",align:"bottom"},n.createElement(a.Button,{flavour:"borderless",disabled:!m||!g},n.createElement(a.Icon,{name:"check",color:"primary",size:"small"}))):n.createElement(d.Z,{content:"Remove label pair",align:"bottom"},n.createElement(a.Button,{flavour:"borderless",onClick:()=>s(t)},n.createElement(a.Icon,{name:"x",color:"primary",size:"small"}))))};const h=e=>{let{hostLabels:t,onAddHostLabel:l,onRemoveHostLabel:a}=e;return Object.entries(t).map((e=>{let[t,o]=e;return n.createElement(g,{key:t,onAddHostLabel:l,selectedKey:t,selectedValue:o,onRemoveHostLabel:a})}))};var E=e=>{let{hostLabels:t,onAddHostLabel:l=c(),onRemoveHostLabel:o=c(),isEdit:s,isDisabled:r}=e;const i=!!Object.entries(t||{}).length,[d,,u]=(0,b.Z)(!1);return n.createElement(a.Flex,{column:!0,gap:1},n.createElement(a.TextSmall,{color:"textLite"},"Host labels"),i&&n.createElement(h,{hostLabels:t,onAddHostLabel:l,onRemoveHostLabel:o}),(!i||d)&&n.createElement(g,{key:JSON.stringify(t),onAddHostLabel:l,isDefault:!0,showPlaceholder:u,isDisabled:r}),s&&!d&&i&&n.createElement(a.Flex,{justifyContent:"end"},n.createElement(a.Button,{flavour:"borderless",onClick:u},"Add host label")))},f=l(95665);function v(){var e=new Date,t=e.getFullYear(),l=e.getMonth(),n=e.getDate(),a=new Date(0);return a.setFullYear(t,l,n+1),a.setHours(0,0,0,0),a}var C=l(69119),D=l(29422),x=l(95248);const S=Object.entries(u.lI).map((e=>{let[t,l]=e;return{label:l,value:t}})),k=v(),y=(0,C.Z)((0,D.Z)(k,{years:1}));var Z=e=>{let{duration:t,setDuration:l,setDate:o,endDate:s,isDisabled:r}=e;const i=(0,x.by)("offset");return n.createElement(a.Flex,{gap:2},n.createElement(p.Z,{component:"select",title:"Duration",onChange:l,options:S,placeholder:"Select duration",value:t,isDisabled:r}),"custom"===t.value&&n.createElement(a.Flex,{alignSelf:"end"},n.createElement(f.Z,{isSinglePicker:!0,values:{singleDate:s},minDate:k,maxDate:y,utc:i,onChange:o,isPlaying:!1,accessorProps:u.mD,padding:[4,0],width:"auto",accessorTooltipContent:"Select end date"})))};function w(){return(0,C.Z)(Date.now())}const L=w(),O=v();var A=e=>{let{start:t,end:l,onChange:o,isDisabled:s,isEdit:r}=e;const[i,c]=(0,n.useState)(r?"schedule":u.JG),[m,p]=(0,n.useState)(u.yu),[b,g]=(0,n.useState)(0),h=(0,x.by)("offset"),[E,S]=(0,n.useState)(t?new Date(t):r?null:L),[k,y]=(0,n.useState)(l?new Date(l):r?null:O),[A,R]=(0,n.useState)((0,C.Z)((0,D.Z)(E,{days:1})));(0,n.useEffect)((()=>{const e=(0,D.Z)(E,{days:1});R(e),!r&&E>=k&&y(e)}),[E]),(0,n.useEffect)((()=>{o({start:E,end:k,scheduleOption:i,duration:m})}),[E,k,i,m]);const H=v(),I=(0,C.Z)((0,D.Z)(H,{years:1}));return n.createElement(a.Flex,{column:!0,gap:3},!r&&n.createElement(a.Flex,{gap:3},Object.entries(u.Zg).map((e=>{let[t,{text:l,tooltip:o}]=e;return n.createElement(a.RadioButton,{key:t,checked:t===i,onChange:()=>c(t),disabled:s},n.createElement(d.Z,{content:o,align:"bottom"},n.createElement(a.TextSmall,{color:"textDescription"},l)))}))),"now"===i?n.createElement(Z,{duration:m,setDuration:p,setDate:e=>{S(Date.now()),y(e)},endDate:k,isDisabled:s}):n.createElement(a.Flex,{gap:2},n.createElement(a.Flex,{column:!0,gap:2,flex:{grow:1,shrink:1},basis:0},n.createElement(a.TextSmall,null,"Start date"),n.createElement(f.Z,{isSinglePicker:!0,values:{singleDate:new Date(E)},minDate:w(),maxDate:I,utc:h,onChange:e=>{S(e),g((e=>e+1))},isPlaying:!1,accessorProps:u.mD,padding:[4,0],width:"auto",accessorTooltipContent:"Select start date"})),n.createElement(a.Flex,{column:!0,gap:2,flex:{grow:1,shrink:1},basis:0},n.createElement(a.TextSmall,null,"End date"),n.createElement(f.Z,{key:b,isSinglePicker:!0,values:{singleDate:k?new Date(k):k},minDate:A,maxDate:I,utc:h,onChange:y,isPlaying:!1,accessorProps:u.mD,padding:[4,0],width:"auto",accessorTooltipContent:"Select end date"}))))},R=e=>{let{content:t="Loading alerts..."}=e;return n.createElement(a.Flex,{height:45,alignItems:"center",justifyContent:"center"},n.createElement(a.Text,null,t))},H=l(27308),I=e=>n.createElement(a.Flex,(0,r.Z)({gap:2,alignItems:"center"},e),n.createElement(a.Icon,{size:"small",color:"warning",name:"warning_triangle"}),n.createElement(a.Text,null,"This feature is only available to paid plans"),n.createElement(H.Z,{classification:"Pro",content:"Go to Pro plan"}),n.createElement(H.Z,{classification:"Business",content:"Go to Business plan"})),F=(l(88449),l(2490),l(59849),l(31672),l(59461),l(17727),l(89250)),_=l(13477),P=l(33335),B=l(74059),N=l(96929),M=l(3689),T=l(93742),j=l(25403),U=l(4480),z=l(48450);const G=(0,U.CG)({key:"spaceAlertMetas",get:e=>()=>(0,z.uk)(e)});var K=l(62447),V=l(45396),Q=l(93017);const Y={name:"",rooms:[],nodes:[],hostLabels:null,alertNames:[],alertContexts:[],alertRoles:[],startsAt:null,lastsUntil:null},J=e=>{let{id:t,name:l,...n}=e;return{label:l,value:t,...n}},W=e=>({label:e,value:e}),$=e=>{var t;let{rooms:l,nodes:n,hostLabels:a,startsAt:o,lastsUntil:s,...r}=e;return{...r,scope:r.accountId?"personal":u.xQ,canSubmit:!(null===r||void 0===r||null===(t=r.name)||void 0===t||!t.length),rooms:null!==l&&void 0!==l&&l.length?l.map(J):[M.k_],...null!==n&&void 0!==n&&n.length?{nodes:n.map(J).filter((e=>{let{notAvailable:t}=e;return!t}))}:{},...a?{hostLabels:a}:{},...o?{startsAt:o}:{},...s?{lastsUntil:s}:{}}},q=e=>{let{value:t}=e;return t},X=(e,t)=>{const{accountId:l,scope:n,rooms:a,nodes:o,hostLabels:s,startsAt:r,lastsUntil:i,scheduleOption:c,duration:d,...m}=e,p=a.filter((e=>{let{value:t}=e;return t!==u.sr.value})).map(q),b=o.map(q),g=!!Object.keys(s||{}).length,{start:h,end:E}=(e=>{let{startsAt:t,lastsUntil:l,scheduleOption:n,duration:a}=e;if("schedule"==n)return{start:t,end:l};let o,s=Date.now();switch(a){case"oneHour":o=(0,D.Z)(s,{hours:1});break;case"sixHours":o=(0,D.Z)(s,{hours:6});break;case"twelveHours":o=(0,D.Z)(s,{hours:12});break;case"oneDay":o=(0,D.Z)(s,{days:1});break;case"custom":o=l}return{start:s,...o?{end:o}:{}}})({startsAt:r,lastsUntil:i,scheduleOption:c,duration:d});return{...m,..."personal"==n?{account_id:t}:{},...p.length?{room_ids:p}:{},...b.length?{node_ids:b}:{},...g?{host_labels:s}:{},...h?{starts_at:new Date(h).toISOString()}:{},...E?{lasts_until:new Date(E).toISOString()}:{}}};var ee=e=>{var t;let{rule:l,onClose:a,isEdit:o}=e;const s=(0,_.jr)(),r=(0,F.s0)(),i=(0,B.uk)(),[c,d]=(0,b.Z)(),m=(0,T.Z)({all:!0}),p=null===(t=m.find((e=>{let{label:t}=e;return"All nodes"==t})))||void 0===t?void 0:t.value,{loaded:g,value:h,hasError:E}=(()=>{var e;const t=(0,B.th)(),l=(0,U.$P)(G(t));return{loaded:"loading"!==l.state,value:(null===(e=l.contents)||void 0===e?void 0:e.data)||z.ND,hasError:"hasError"===l.state}})(),f=(0,j.wK)(),v=(0,j.j6)(),C=o?v:f,D=(0,j._A)(),[,,x]=(0,Q.Z)(),[S,k]=(0,n.useState)({alertNameOptions:[],alertContextOptions:[],alertRoleOptions:[]}),{alertNameOptions:y,alertContextOptions:Z,alertRoleOptions:w}=S,[L,O]=(0,n.useState)((()=>({...Y,...$(l)}))),A=(0,N.IW)(L.roomIds||[p]),R=(0,n.useCallback)((e=>O((t=>({...t,scope:e})))),[]),H=(0,n.useCallback)((e=>O((t=>({...t,name:e,canSubmit:!(null===e||void 0===e||!e.length)})))),[]),I=(0,n.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const l=(e=>e.length<=1?e:e[e.length-1].value==u.sr.value?[u.sr]:e.filter((e=>{let{value:t}=e;return!!t})))(e),n=l.map((e=>{let{value:t}=e;return t||p})),a=t.length<l.length?l.filter((e=>{let{value:l}=e;return!t.includes(l)}))[0]:null;O((e=>({...e,rooms:l,roomIds:n,lastRoomAdded:a||null})))}),[p]),M=(0,n.useCallback)((e=>O((t=>({...t,nodeIds:e.map((e=>{let{value:t}=e;return t})),nodes:e})))),[]),J=(0,n.useCallback)((e=>O((t=>({...t,hostLabels:{...t.hostLabels,...e}})))),[]),q=(0,n.useCallback)((e=>O((t=>{const l={...t.hostLabels};return delete l[e],{...t,hostLabels:l}}))),[]),ee=(0,n.useCallback)((e=>t=>O((l=>({...l,[e]:t.map((e=>{let{value:t}=e;return t}))})))),[]),te=(0,n.useCallback)((e=>{let{start:t,end:l,scheduleOption:n,duration:a}=e;return O((e=>({...e,startsAt:t,lastsUntil:l,scheduleOption:n,duration:a.value})))}),[]),le=(0,n.useCallback)((()=>{d(),C(X(L,s)).then((()=>{a(),D()})).catch((e=>x((0,K._)(e)))).finally(d)}),[L,s]),ne=(0,V.Z)();(0,n.useEffect)((()=>{var e;const t=(null===(e=L.lastRoomAdded)||void 0===e?void 0:e.value)||p;let l=null;return t&&(l=ne(t)),()=>{var e;return!(null===(e=l)||void 0===e||!e.cancel)&&l.cancel()}}),[L.roomIds,ne]),(0,n.useEffect)((()=>{if(g){const{contexts:e,names:t,roles:l}=h||{};k({alertNameOptions:t?t.map(W):[],alertContextOptions:e?e.map(W):[],alertRoleOptions:l?l.map(W):[]})}}),[g]);const ae=(0,P.gI)("space:CreatePersonalSilencingRule"),oe=(0,n.useCallback)((()=>r("/spaces/".concat(i,"/settings/billing"))),[i]);return{state:L,onScopeChange:R,onRuleNameChange:H,onRoomsSelectionChange:I,roomOptions:m,onNodesSelectionChange:M,nodesOptions:A,alertMetasLoaded:g,alertMetas:h,alertNameOptions:y,alertContextOptions:Z,alertRoleOptions:w,alertMetasError:E,onAlertValueChange:ee,onAddHostLabel:J,onRemoveHostLabel:q,onDatesChange:te,loading:c,onSave:le,spaceCreatePersonalSilencingRule:ae,onUpdateButtonClick:oe}};const te=e=>null!==e&&void 0!==e&&e.length?e.map(W):[],le=()=>n.createElement(a.Box,{as:"hr",height:"1px",width:"100%",sx:{borderWidth:"1px 0px 0px 0px",borderColor:"borderSecondary",borderStyle:"solid"}});var ne=e=>{let{rule:t={},onClose:l,isEdit:r}=e;const{state:i,onScopeChange:c,onRuleNameChange:u,onRoomsSelectionChange:b,roomOptions:g,onNodesSelectionChange:h,nodesOptions:f,alertMetasLoaded:v,alertNameOptions:C,alertContextOptions:D,alertRoleOptions:x,onAlertValueChange:S,onAddHostLabel:k,onRemoveHostLabel:y,onDatesChange:Z,loading:w,onSave:L,spaceCreatePersonalSilencingRule:O,onUpdateButtonClick:H}=ee({rule:t,onClose:l,isEdit:r});return n.createElement(a.Modal,{onEsc:l},n.createElement(s.hz,{style:{maxHeight:"800px"}},n.createElement(a.ModalHeader,{padding:[6,4,3]},n.createElement(a.Flex,{column:!0,gap:2},n.createElement(a.Flex,{flex:!0,alignItems:"center",justifyContent:"between"},n.createElement(a.H4,null,"Add silencing rule"),l&&n.createElement(s.A3,{onClose:l})),n.createElement(a.Text,null,"Define an alert notification silencing rule that will apply to all users or just you."," ",n.createElement(o.Z,{"data-ga":"alert-silencing::click-link-docs::rule-modal","data-testid":"silencing-rules-doc",href:"https://learn.netdata.cloud/docs/alerts-and-notifications/notifications/netdata-cloud-notifications/manage-alert-notification-silencing-rules",rel:"noopener noreferrer",target:"_blank"},"Learn how to configure silencing rules.")),!O&&n.createElement(I,null))),n.createElement(a.ModalBody,{padding:[0]},n.createElement(s.QD,null,n.createElement(a.Flex,{column:!0,gap:3},n.createElement(m,{scope:i.scope,setScope:c,padding:[0,0,1,0],isDisabled:!O}),n.createElement(p.Z,{component:"input",onChange:u,placeholder:"Add rule name",title:"Rule name*",value:i.name,disabled:!O}),n.createElement(p.Z,{component:"select",isMulti:!0,onChange:e=>b(e,i.roomIds),options:g,placeholder:"Select rooms",title:"Rooms*",value:i.rooms,isDisabled:!O}),n.createElement(p.Z,{component:"select",isMulti:!0,onChange:h,options:f,placeholder:"Select nodes",title:"Nodes",value:i.nodes,isDisabled:!O||!f.length}),n.createElement(E,{hostLabels:i.hostLabels,onAddHostLabel:k,onRemoveHostLabel:y,isEdit:r,isDisabled:!O}),v?n.createElement(n.Fragment,null,n.createElement(le,null),n.createElement(p.Z,{component:"select",isMulti:!0,onChange:S("alertNames"),options:C,placeholder:"Select alert name",title:"Alert name",value:te(i.alertNames),isDisabled:!O}),n.createElement(p.Z,{component:"select",isMulti:!0,onChange:S("alertContexts"),options:D,placeholder:"Select alert context",title:"Alert context",value:te(i.alertContexts),isDisabled:!O}),n.createElement(p.Z,{component:"select",isMulti:!0,onChange:S("alertRoles"),options:x,placeholder:"Select alert role",title:"Alert role",value:te(i.alertRoles),isDisabled:!O})):n.createElement(R,null),n.createElement(le,null),n.createElement(A,{start:i.startsAt,end:i.lastsUntil,onChange:Z,isEdit:r,isDisabled:!O}))),n.createElement(s.QD,{alignItems:"end",justifyContent:"center"},n.createElement(a.Flex,{gap:4},n.createElement(a.Button,{flavour:"borderless",label:"Cancel",onClick:l,disabled:w}),O?n.createElement(d.Z,{content:r?"Update the rule":"Create the rule",align:"bottom"},n.createElement(a.Button,{label:"OK",onClick:L,"data-ga":"alert-silencing::click-save-".concat(r?"edit":"new","-rule::rule-modal"),"data-testid":"saveRule-button",textTransform:"uppercase",isLoading:w,disabled:w||!i.canSubmit})):n.createElement(d.Z,{content:"Update to a paid plan in order to be able to create silencing rules",align:"bottom"},n.createElement(a.Button,{label:"Upgrade!",onClick:H})))))))}}}]);