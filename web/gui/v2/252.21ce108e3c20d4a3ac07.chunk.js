!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="87849cbd-9a2d-4f5e-9c61-a71fb547ad1d",e._sentryDebugIdIdentifier="sentry-dbid-87849cbd-9a2d-4f5e-9c61-a71fb547ad1d")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"a795d4d0ab7b284edba22b583ea6769a9f9ec64d"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[252],{46019:function(e,t,n){n.r(t),n.d(t,{SignIn:function(){return S},default:function(){return B}});n(15306);var a=n(67294),o=n(89250),i=n(17563),r=n(22195),c=n(15794),l=n(1043),d=n(87562),u=n(13600),s=n(60677);const g=s.default.a.withConfig({displayName:"linkButton__LinkButton",componentId:"sc-9kv26a-0"})(["color:",";text-decoration:none;background-color:transparent;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;height:",";background:",";border:1px solid ",";border-radius:2px;max-width:320px;width:100%;",";&:hover{text-decoration:none;color:unset;}"],(0,r.getColor)("background"),(0,r.getSizeBy)(5.5),(0,r.getColor)("mainBackground"),(0,r.getColor)("mainBackground"),(e=>{let{disabled:t}=e;return"\n    opacity: ".concat(t?.4:1,";\n    pointer-events: ").concat(t?"none":"auto",";\n  ")})),f=e=>(0,s.default)(g).withConfig({displayName:"linkButton__makeSocialButton",componentId:"sc-9kv26a-1"})(["box-shadow:0px 0px 1px rgba(0,0,0,0.12);border-radius:2px;background:",";border:1px solid ",";span{flex:1;display:flex;align-items:center;justify-content:center;padding:0 ",";color:",";}"],e,e,(0,r.getSizeBy)(1),(0,r.getColor)("bright"));const m=f("#445260"),p=f("#4285f4");n(33948);var b=n(78312);var h=e=>{let{onSubmit:t,disabled:n,initialValue:o,buttonLabel:i,tagging:c}=e;const[l,d,,u]=(0,r.useInputValue)({value:o||""}),[s,g]=(0,r.useTouchedState)({}),[f,m]=(0,a.useState)(!1),p=(0,a.useCallback)((e=>{e.preventDefault(),t(l)}),[t,l]);return a.createElement(r.Flex,{as:"form",column:!0,gap:4,width:"100%","data-testid":"emailField"},a.createElement(b.U5,{value:l,onChange:d,isValid:f,setIsValid:m,instantFeedback:"positiveFirst",isDirty:u,success:f&&"Valid E-mail",onBlur:g,touched:s,"data-testid":"emailField-input"}),a.createElement(b.Sn,{type:"submit",disabled:n||!u,width:"100%",label:i,onClick:p,"data-ga":"signinup::click-email::".concat(c),"data-testid":"emailField-submitButton"}))},v=n(8360),w=n(91940);var E=()=>a.createElement(r.Flex,{height:"1px",width:"100%",background:"disabled"}),x=n(87462),y=n(46189),k=n(92432);const{demoSlug:C}=y.default;var I=e=>a.createElement(r.Text,(0,x.Z)({textAlign:"center"},e),"Discover the power and simplicity of Netdata in our live infrastructure monitoring"," ",a.createElement(b.Fg,{onClick:()=>{(0,k.L)("signinup","click-demo","sni-view")},href:"/spaces/".concat(C),target:"_blank"},"demo")," ");const _=e=>{let{to:t}=e;return a.createElement(r.Box,{position:"fixed"},a.createElement(r.Button,{as:"a",href:t,flavour:"borderless",label:"Go back to ".concat(t.replace(/#.*/,"")),icon:"arrow_left",rel:"noopener noreferrer"}))},S=()=>{const{search:e}=(0,o.TH)(),t=window.location.hash,n=(0,l.iM)(),{redirect_uri:c}=i.parse(e),s=(0,a.useCallback)((a=>{const o=encodeURIComponent((0,d.$)("/sign-in".concat(e),t)),i=encodeURIComponent((0,d.$)("/sign-up/verify".concat(e),t));n({email:a,redirectURI:o,registerURI:i})}),[]);return(0,a.useEffect)((()=>{if(!/app\.netdata\.cloud/.test(location.hostname))return;const e=document.createElement("script");return e.src="https://zsvdrp94yfxr.statuspage.io/embed/script.js",e.async=!0,document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[]),a.createElement(a.Fragment,null,!!c&&a.createElement(_,{to:c}),a.createElement(w.Z,{"data-testid":"signIn"},a.createElement(r.H1,{textAlign:"center"},"Welcome!"),a.createElement(r.TextBig,{textAlign:"center"},"Sign in and let\u2019s get you started:"),a.createElement(b.Yb,null,a.createElement(r.Flex,{column:!0,gap:4},a.createElement(p,{href:(0,d.G)("google"),disabled:!1,"data-ga":"signinup::click-google::sni-view","data-testid":"signIn-googleButton"},a.createElement(b.xG,null,a.createElement(u.av,null)),a.createElement(r.Text,{textAlign:"center"},"Continue with Google")),a.createElement(m,{href:(0,d.G)("github"),disabled:!1,"data-ga":"signinup::click-github::sni-view","data-testid":"signIn-githubButton"},a.createElement(b.xG,null,a.createElement(u.bY,null)),a.createElement(r.Text,null,"Continue with GitHub"))),a.createElement(r.Flex,{gap:2,alignItems:"center"},a.createElement(E,null),a.createElement(r.H4,null,"or"),a.createElement(E,null)),a.createElement(h,{onSubmit:s,buttonLabel:"Sign in by email",tagging:"sni-view"})),a.createElement(r.Flex,{column:!0,gap:2,alignSelf:"center",width:{max:"480px"}},a.createElement(r.TextBig,{textAlign:"center"},"Don't have a Netdata Cloud account yet? Relax! Sign-in and we will create one for you!"),a.createElement(I,{margin:[4,0,0]}),a.createElement(v.Z,null))))};var B=(0,c.k)(S,"light")},87562:function(e,t,n){n.d(t,{$:function(){return o},G:function(){return i}});var a=n(58591);const o=(e,t)=>{const n=(0,a.kG)(["expires_at",t]),o=t.includes("join-callback")?decodeURIComponent(n):n;return"".concat(window.location.origin).concat(e,"#").concat(o)},i=(e,t)=>{const{search:n,hash:a}=window.location,i=encodeURIComponent(o("/sign-in".concat(n).concat(n.length?"&":"?","oauth=").concat(e,"&"),a)),r=encodeURIComponent(o("/sign-up/verify".concat(n).concat(n.length?"&":"?","oauth=").concat(e,"&"),a));return"/api/v2/auth/account/".concat(e,"?redirect_uri=").concat(i,"&register_uri=").concat(r).concat(t?"&is_unverified_registration=true":"")}},76362:function(e,t,n){n.d(t,{S1:function(){return i},ZT:function(){return a},ae:function(){return c},jU:function(){return r},on:function(){return o}});var a=function(){};function o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function i(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}var r="undefined"!==typeof window,c="undefined"!==typeof navigator},94829:function(e,t,n){var a=n(67294),o=n(76362);t.Z=function(e,t){var n=(0,a.useState)(function(e,t){return void 0!==t?t:!!o.jU&&window.matchMedia(e).matches}(e,t)),i=n[0],r=n[1];return(0,a.useEffect)((function(){var t=!0,n=window.matchMedia(e),a=function(){t&&r(!!n.matches)};return n.addListener(a),r(n.matches),function(){t=!1,n.removeListener(a)}}),[e]),i}}}]);