exports.id=532,exports.ids=[532],exports.modules={5648:(e,a,r)=>{let s={"3f57188dfd7008615ff1d398c6345ca0e80cb58a":()=>Promise.resolve().then(r.bind(r,4564)).then(e=>e.signInAction),"6f9b72227d0c862ede574dcd2fcad77c0b133a7e":()=>Promise.resolve().then(r.bind(r,4564)).then(e=>e.resetPasswordAction),"75136854def4a1ee4bef1b967cb813465014bc44":()=>Promise.resolve().then(r.bind(r,4564)).then(e=>e.$$ACTION_3),a180e1a9adf98d112545f6786313dcc15f6d8342:()=>Promise.resolve().then(r.bind(r,4564)).then(e=>e.forgotPasswordAction),a783e569f5aefe87bfa1ab1a7c4661dc7d684b99:()=>Promise.resolve().then(r.bind(r,4564)).then(e=>e.$$ACTION_0),c2f16e2aafd5afe7445a8fbd2e4aee40678e49b9:()=>Promise.resolve().then(r.bind(r,4564)).then(e=>e.signOutAction),d078573196121a4ea0db26aa7106e5ea207e1162:()=>Promise.resolve().then(r.bind(r,4564)).then(e=>e.$$ACTION_4),d9cc1c89398570a8cf7230bffa79d667bb5ec85e:()=>Promise.resolve().then(r.bind(r,4564)).then(e=>e.$$ACTION_1),f2cca86679d257455a25f87f6518c7d3cfdc1244:()=>Promise.resolve().then(r.bind(r,4564)).then(e=>e.$$ACTION_2),f5d486edc84f8e1bf6781d47da84207900137bf3:()=>Promise.resolve().then(r.bind(r,4564)).then(e=>e.signUpAction)};async function t(e,...a){return(await s[e]()).apply(null,a)}e.exports={"3f57188dfd7008615ff1d398c6345ca0e80cb58a":t.bind(null,"3f57188dfd7008615ff1d398c6345ca0e80cb58a"),"6f9b72227d0c862ede574dcd2fcad77c0b133a7e":t.bind(null,"6f9b72227d0c862ede574dcd2fcad77c0b133a7e"),"75136854def4a1ee4bef1b967cb813465014bc44":t.bind(null,"75136854def4a1ee4bef1b967cb813465014bc44"),a180e1a9adf98d112545f6786313dcc15f6d8342:t.bind(null,"a180e1a9adf98d112545f6786313dcc15f6d8342"),a783e569f5aefe87bfa1ab1a7c4661dc7d684b99:t.bind(null,"a783e569f5aefe87bfa1ab1a7c4661dc7d684b99"),c2f16e2aafd5afe7445a8fbd2e4aee40678e49b9:t.bind(null,"c2f16e2aafd5afe7445a8fbd2e4aee40678e49b9"),d078573196121a4ea0db26aa7106e5ea207e1162:t.bind(null,"d078573196121a4ea0db26aa7106e5ea207e1162"),d9cc1c89398570a8cf7230bffa79d667bb5ec85e:t.bind(null,"d9cc1c89398570a8cf7230bffa79d667bb5ec85e"),f2cca86679d257455a25f87f6518c7d3cfdc1244:t.bind(null,"f2cca86679d257455a25f87f6518c7d3cfdc1244"),f5d486edc84f8e1bf6781d47da84207900137bf3:t.bind(null,"f5d486edc84f8e1bf6781d47da84207900137bf3")}},7966:(e,a,r)=>{Promise.resolve().then(r.bind(r,8049)),Promise.resolve().then(r.t.bind(r,2481,23)),Promise.resolve().then(r.t.bind(r,9404,23))},4350:(e,a,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},190:(e,a,r)=>{Promise.resolve().then(r.t.bind(r,9404,23))},8049:(e,a,r)=>{"use strict";r.d(a,{default:()=>f});var s=r(326),t=r(7577),n=r(5047),i=r(434),l=r(6226),o=r(3885);let d={appName:"Sportfolio",appDescription:"Sportfolio",domainName:"",crisp:{id:"",onlyShowOnRoutes:["/"]},stripe:{plans:[{priceId:"price_456",name:"Annuel",description:"Parfait pour tester la plateforme",price:14,priceAnchor:19,features:[{name:"Profil en ligne visible de tous"},{name:"Customisation compl\xe8te"},{name:"Mise \xe0 jour"}]},{isFeatured:!0,priceId:"price_456",name:"Annuel",description:"Partage ta confiance",price:39,features:[{name:"Profil en ligne visible de tous"},{name:"Customisation compl\xe8te"},{name:"Mise \xe0 jour"},{name:"Adresse mail pour proposer des \xe9volutions"}]}]},aws:{bucket:"bucket-name",bucketUrl:"https://bucket-name.s3.amazonaws.com/",cdn:"https://cdn-id.cloudfront.net/"},mailgun:{subdomain:"mg",fromNoReply:"ShipFast <noreply@mg.shipfa.st>",fromAdmin:"Marc at ShipFast <marc@mg.shipfa.st>",supportEmail:"negro.guillaume.dev@gmail.com",forwardRepliesTo:"negro.guillaume@gmail.com"},colors:{theme:"light",main:r.n(o)()["[data-theme=light]"]},auth:{loginUrl:"/signin",callbackUrl:"/dashboard"}},c=[{href:"/#produits",label:"Produits"},{href:"/#histoire",label:"Histoire"},{href:"/#faq",label:"FAQ"}],f=()=>{let e=(0,n.useSearchParams)(),[a,r]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{r(!1)},[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("nav",{className:"container flex items-center justify-between px-8 mx-auto","aria-label":"Global",children:[s.jsx("div",{className:"flex lg:hidden",children:(0,s.jsxs)("button",{type:"button",className:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5",onClick:()=>r(!0),children:[s.jsx("span",{className:"sr-only",children:"Open main menu"}),s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 text-base-content",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})})]})}),s.jsx("div",{className:"flex lg:flex-1",children:s.jsx(i.default,{className:"flex items-center gap-2 shrink-0 ",href:"/",title:`${d.appName} hompage`,children:s.jsx(l.default,{src:"/logoSamo_transparent.png",alt:"logo samo aciers",width:200,height:100})})}),s.jsx("div",{className:"hidden lg:flex lg:justify-center lg:gap-12 lg:items-center",children:c.map(e=>s.jsx(i.default,{href:e.href,className:"link link-hover",title:e.label,children:e.label},e.href))}),s.jsx("div",{className:""})]}),s.jsx("div",{className:`relative z-50 ${a?"":"hidden"}`,children:(0,s.jsxs)("div",{className:"fixed inset-y-0 left-0 z-10 w-full px-8 py-4 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[s.jsx(i.default,{className:"flex items-center gap-2 shrink-0 ",title:`${d.appName} hompage`,href:"/",children:s.jsx(l.default,{src:"/logoSamo_transparent.png",alt:"logo samo aciers",width:200,height:100})}),(0,s.jsxs)("button",{type:"button",className:"-m-2.5 rounded-md p-2.5",onClick:()=>r(!1),children:[s.jsx("span",{className:"sr-only",children:"Close menu"}),s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})]})]}),(0,s.jsxs)("div",{className:"flow-root mt-6",children:[s.jsx("div",{className:"py-4",children:s.jsx("div",{className:"flex flex-col gap-y-4 items-start",children:c.map(e=>s.jsx(i.default,{href:e.href,className:"link link-hover",title:e.label,children:e.label},e.href))})}),s.jsx("div",{className:"divider"}),s.jsx(i.default,{className:"flex flex-col",href:"/sportif/enzo",children:"Go to profil"})]})]})})]})}},4564:(e,a,r)=>{"use strict";r.r(a),r.d(a,{$$ACTION_0:()=>c,$$ACTION_1:()=>m,$$ACTION_2:()=>h,$$ACTION_3:()=>p,$$ACTION_4:()=>x,forgotPasswordAction:()=>u,resetPasswordAction:()=>b,signInAction:()=>f,signOutAction:()=>g,signUpAction:()=>d});var s=r(4330);r(166);var t=r(8585);function n(e,a,r){return(0,t.redirect)(`${a}?${e}=${encodeURIComponent(r)}`)}var i=r(1804),l=r(1615),o=r(618);let d=(0,s.j)("a783e569f5aefe87bfa1ab1a7c4661dc7d684b99",c);async function c(e){let a=e.get("email")?.toString(),r=e.get("password")?.toString(),s=(0,i.e)(),t=(0,l.headers)().get("origin");if(!a||!r)return{error:"Email and password are required"};let{error:o}=await s.auth.signUp({email:a,password:r,options:{emailRedirectTo:`${t}/auth/callback`}});return o?(console.error(o.code+" "+o.message),n("error","/sign-up",o.message)):n("success","/sign-up","Thanks for signing up! Please check your email for a verification link.")}let f=(0,s.j)("d9cc1c89398570a8cf7230bffa79d667bb5ec85e",m);async function m(e){let a=e.get("email"),r=e.get("password"),s=(0,i.e)(),{error:l}=await s.auth.signInWithPassword({email:a,password:r});return l?n("error","/sign-in",l.message):(0,t.redirect)("/protected")}let u=(0,s.j)("f2cca86679d257455a25f87f6518c7d3cfdc1244",h);async function h(e){let a=e.get("email")?.toString(),r=(0,i.e)(),s=(0,l.headers)().get("origin"),o=e.get("callbackUrl")?.toString();if(!a)return n("error","/forgot-password","Email is required");let{error:d}=await r.auth.resetPasswordForEmail(a,{redirectTo:`${s}/auth/callback?redirect_to=/protected/reset-password`});return d?(console.error(d.message),n("error","/forgot-password","Could not reset password")):o?(0,t.redirect)(o):n("success","/forgot-password","Check your email for a link to reset your password.")}let b=(0,s.j)("75136854def4a1ee4bef1b967cb813465014bc44",p);async function p(e){let a=(0,i.e)(),r=e.get("password"),s=e.get("confirmPassword");r&&s||n("error","/protected/reset-password","Password and confirm password are required"),r!==s&&n("error","/protected/reset-password","Passwords do not match");let{error:t}=await a.auth.updateUser({password:r});t&&n("error","/protected/reset-password","Password update failed"),n("success","/protected/reset-password","Password updated")}let g=(0,s.j)("d078573196121a4ea0db26aa7106e5ea207e1162",x);async function x(){let e=(0,i.e)();return await e.auth.signOut(),(0,t.redirect)("/sign-in")}(0,o.h)([d,f,u,b,g]),(0,s.j)("f5d486edc84f8e1bf6781d47da84207900137bf3",d),(0,s.j)("3f57188dfd7008615ff1d398c6345ca0e80cb58a",f),(0,s.j)("a180e1a9adf98d112545f6786313dcc15f6d8342",u),(0,s.j)("6f9b72227d0c862ede574dcd2fcad77c0b133a7e",b),(0,s.j)("c2f16e2aafd5afe7445a8fbd2e4aee40678e49b9",g)},9508:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>P,metadata:()=>y});var s=r(9510),t=r(7366),n=r.n(t);r(7272);var i=r(7710);function l(){return(0,s.jsxs)(s.Fragment,{children:[s.jsx("footer",{className:"footer bg-base-200 text-base-content p-10",children:(0,s.jsxs)("div",{className:"footer container mx-auto",children:[(0,s.jsxs)("aside",{children:[s.jsx(i.default,{src:"/logoSamo_transparent.png",alt:"logo samo aciers",width:200,height:100}),s.jsx("p",{children:"Vente d'acier depuis 1991"})]}),(0,s.jsxs)("nav",{children:[s.jsx("h6",{className:"footer-title",children:"Services"}),s.jsx("a",{className:"link link-hover",children:"Branding"}),s.jsx("a",{className:"link link-hover",children:"Design"}),s.jsx("a",{className:"link link-hover",children:"Marketing"}),s.jsx("a",{className:"link link-hover",children:"Advertisement"})]}),(0,s.jsxs)("nav",{children:[s.jsx("h6",{className:"footer-title",children:"Company"}),s.jsx("a",{className:"link link-hover",children:"About us"}),s.jsx("a",{className:"link link-hover",children:"Contact"}),s.jsx("a",{className:"link link-hover",children:"Jobs"}),s.jsx("a",{className:"link link-hover",children:"Press kit"})]}),(0,s.jsxs)("nav",{children:[s.jsx("h6",{className:"footer-title",children:"Legal"}),s.jsx("a",{className:"link link-hover",children:"Terms of use"}),s.jsx("a",{className:"link link-hover",children:"Privacy policy"}),s.jsx("a",{className:"link link-hover",children:"Cookie policy"})]})]})}),s.jsx("footer",{className:"footer footer-center bg-base-200 text-base-content p-4",children:s.jsx("aside",{children:(0,s.jsxs)("p",{children:["Un site con\xe7u par L'atelier GND \xa9 ",new Date().getFullYear()]})})})]})}var o=r(4564),d=r(7371),c=r(1159),f=r(3025),m=r(791),u=r(650);let h=(0,m.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),b=c.forwardRef(({className:e,variant:a,size:r,asChild:t=!1,...n},i)=>{let l=t?f.g7:"button";return s.jsx(l,{className:(0,u.cn)(h({variant:a,size:r,className:e})),ref:i,...n})});b.displayName="Button";var p=r(1804);async function g(){let{data:{user:e}}=await (0,p.e)().auth.getUser();return e?(0,s.jsxs)("div",{className:"flex items-center gap-4",children:["Hey, ",e.email,"!",s.jsx("form",{action:o.signOutAction,children:s.jsx(b,{type:"submit",variant:"outline",children:"Se d\xe9connecter"})})]}):(0,s.jsxs)("div",{className:"flex gap-2",children:[s.jsx("button",{className:"btn btn-outline btn-sm",children:s.jsx(d.default,{href:"/sign-in",children:"Cr\xe9er un compte"})}),s.jsx("button",{className:"btn btn-primary btn-sm",children:s.jsx(d.default,{href:"/sign-up",children:"Se connecter"})})]})}var x=r(8570);let v=(0,x.createProxy)(String.raw`C:\Users\negro\Code\samo_next\components\Header.component.tsx`),{__esModule:j,$$typeof:w}=v;v.default;let N=(0,x.createProxy)(String.raw`C:\Users\negro\Code\samo_next\components\Header.component.tsx#default`),k=()=>s.jsx("header",{className:"bg-base-200 flex",children:(0,s.jsxs)("nav",{className:"container flex items-center justify-between px-8 py-4 mx-auto","aria-label":"Global",children:[s.jsx(N,{}),s.jsx(g,{})]})});process.env.VERCEL_URL&&process.env.VERCEL_URL;let y={title:"Samo aciers",description:"revendeur d'aciers au d\xe9tails"};function P({children:e}){return s.jsx("html",{lang:"en","data-theme":"winter",children:(0,s.jsxs)("body",{className:n().className,children:[s.jsx(k,{}),e,s.jsx(l,{})]})})}},1888:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>n});var s=r(9510),t=r(7371);function n(){return(0,s.jsxs)("div",{children:[s.jsx("h2",{children:"Not Found"}),s.jsx("p",{children:"Could not find requested resource"}),s.jsx(t.default,{href:"/",children:"Return Home"})]})}},650:(e,a,r)=>{"use strict";r.d(a,{cn:()=>n});var s=r(5761),t=r(2386);function n(...e){return(0,t.m6)((0,s.W)(e))}},1804:(e,a,r)=>{"use strict";r.d(a,{e:()=>n});var s=r(6510),t=r(1615);let n=()=>{let e=(0,t.cookies)();return(0,s.createServerClient)("https://oetvulbgrziirxfmrlif.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ldHZ1bGJncnppaXJ4Zm1ybGlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzMDc5MjEsImV4cCI6MjA0MDg4MzkyMX0.1m5ld3Dqigab_3tsPD_l37Xy10gmeErMU5Csm6l3Gz8",{cookies:{getAll:()=>e.getAll(),setAll(a){try{a.forEach(({name:a,value:r,options:s})=>{e.set(a,r,s)})}catch(e){}}}})}},7481:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>t});var s=r(6621);let t=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},4998:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>t});var s=r(6621);let t=e=>[{type:"image/png",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"icon.png")+"?603d046c9a6fdfbb"}]},4362:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>t});var s=r(6621);let t=e=>[{type:"image/png",width:1200,height:600,url:(0,s.fillMetadataSegment)(".",e.params,"opengraph-image.png")+"?2e0bc232e210f89d"}]},625:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>t});var s=r(6621);let t=e=>[{type:"image/png",width:1200,height:600,url:(0,s.fillMetadataSegment)(".",e.params,"twitter-image.png")+"?2e0bc232e210f89d"}]},7272:()=>{}};