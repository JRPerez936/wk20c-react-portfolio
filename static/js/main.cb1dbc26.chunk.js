(this["webpackJsonpwk20c-react-portfolio"]=this["webpackJsonpwk20c-react-portfolio"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/about_me.333937a0.jpg"},,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){var n={"./OnlyBans.png":13,"./and chill logo.PNG":14,"./run_buddy.PNG":15,"./spot.png":16,"./techBlog.PNG":17,"./weather.PNG":18};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=12},function(e,t,a){e.exports=a.p+"static/media/OnlyBans.c3856d9d.png"},function(e,t,a){e.exports=a.p+"static/media/and chill logo.6de091cd.PNG"},function(e,t,a){e.exports=a.p+"static/media/run_buddy.58baea8a.PNG"},function(e,t,a){e.exports=a.p+"static/media/spot.e2abc48a.png"},function(e,t,a){e.exports=a.p+"static/media/techBlog.ef4b430c.PNG"},function(e,t,a){e.exports=a.p+"static/media/weather.8c89edd9.PNG"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),o=(a(11),a(1));function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}var u=function(e){var t=e.categories,a=void 0===t?[]:t,l=e.setCurrentCategory,c=e.currentCategory;return Object(n.useEffect)((function(){document.title=i(c.name)}),[c]),r.a.createElement("header",{className:"flex-row px-1 space-between"},r.a.createElement("h2",null,r.a.createElement("a",{"data-testid":"link",href:"/"},"Justin Perez")),r.a.createElement("nav",null,r.a.createElement("ul",{className:"flex-row"},a.map((function(e){return r.a.createElement("li",{className:"mx-1 ".concat(c.name===e.name&&"navActive"),key:e.name},r.a.createElement("span",{onClick:function(){l(e)}},i(e.name)))})))))};var m=function(e){var t=e.categories,a=void 0===t?[]:t,n=e.setCurrentCategory,l=e.currentCategory;return r.a.createElement(u,{categories:a,setCurrentCategory:n,currentCategory:l})},s=a(4),d=a.n(s);var p=function(){return r.a.createElement("section",{className:"my-5"},r.a.createElement("h1",{id:"about"},"About Me"),r.a.createElement("img",{src:d.a,className:"my-2",style:{width:"15%"},alt:"perez_j"}),r.a.createElement("div",{className:"my-2"},r.a.createElement("p",null,"Hi, my name is Justin Perez. I am a Full Stack Web Developer, and a Junior at Rutgers University studying Information Technology and Computer Science. I've been described as efficient and hardworking, and am constantly improving my skills in communication and problem-solving. I actively strive towards discovering and learning to use cutting-edge technology and software that may become useful in workplace enviornments.")))},E=function(){var e=Object(n.useState)([{name:"Spot",category:"spot.png",github:"https://github.com/JRPerez936/spot",deploy:"https://fierce-bayou-66905.herokuapp.com/"},{name:"And Chill",category:"and chill logo.PNG",github:"https://github.com/JRPerez936/project-1",deploy:"https://pfizzz.github.io/project-1/"},{name:"Tech Blog",category:"techBlog.PNG",github:"https://github.com/JRPerez936/WK14-Tech-Blog",deploy:"https://desolate-brook-02162.herokuapp.com/#"},{name:"Weather Dashboard",category:"weather.PNG",github:"https://github.com/JRPerez936/WK6C-Weather-Dashboard",deploy:"https://jrperez936.github.io/WK6C-Weather-Dashboard/"},{name:"Run Buddy",category:"run_buddy.PNG",github:"https://github.com/JRPerez936/run-buddy",deploy:"https://jrperez936.github.io/run-buddy/"}]),t=Object(o.a)(e,1)[0];return r.a.createElement("div",null,r.a.createElement("div",{className:"flex-row"},t.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("img",{src:a(12)("./".concat(e.category)),alt:e.name,className:"img-thumbnail mx-1",key:e.name}),r.a.createElement("h2",null,e.name),r.a.createElement("a",{href:e.github},r.a.createElement("button",null,"Github")),r.a.createElement("a",{href:e.deploy},r.a.createElement("button",null,"Website")))}))))};var g=function(){return r.a.createElement("section",null,r.a.createElement(E,null))},h=a(5);var b=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),u=i[0],m=i[1],s=a.name,d=a.email,p=a.message,E=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);m(t?"":"Your email is invalid.")}else e.target.value.length?m(""):m("".concat(e.target.name," is required."))};return r.a.createElement("section",null,r.a.createElement("h1",{"data-testid":"h1tag"},"Contact me"),r.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),u||(l(Object(h.a)({},e.target.name,e.target.value)),console.log("Form",a))}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"text",name:"name",defaultValue:s,onBlur:E})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{type:"email",name:"email",defaultValue:d,onBlur:E})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("textarea",{name:"message",rows:"5",defaultValue:p,onBlur:E})),u&&r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},u)),r.a.createElement("button",{"data-testid":"button",type:"submit"},"Submit")))};var f=function(){return r.a.createElement("footer",null,r.a.createElement("h2",null,"Reach Out:",r.a.createElement("a",{href:"https://github.com/JRPerez936",className:"ml-2",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",null,r.a.createElement("i",{class:"fab fa-github"}),"Github")),r.a.createElement("a",{href:"https://www.linkedin.com/in/justin-perez-667268211/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",null,r.a.createElement("i",{class:"fab fa-linkedin"}),"Linkedin")),r.a.createElement("a",{href:"https://twitter.com/justin_pretzel",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",null,r.a.createElement("i",{class:"fab fa-twitter"}),"Twitter"))))};var y=function(){return r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement("h2",null,"My Resume:"),r.a.createElement("a",{href:"https://docs.google.com/document/d/1F33xOluDqNLEFD_SStkcGQ9Sw3PPbikf/edit?usp=sharing&ouid=113144781945645951195&rtpof=true&sd=true"},r.a.createElement("button",null,"Download"))),r.a.createElement("section",null,r.a.createElement("h3",null,"Proficiencies:"),r.a.createElement("h3",null," Front End"),r.a.createElement("ul",null,r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"Javascript"),r.a.createElement("li",null,"jQuery"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Materialize"),r.a.createElement("li",null,"Bootstrap")),r.a.createElement("h3",null," Back End "),r.a.createElement("ul",null,r.a.createElement("li",null,"MySQL,Sequelize"),r.a.createElement("li",null,"Mongoose,MongoDB"),r.a.createElement("li",null,"APIs,REST"),r.a.createElement("li",null,"Node"),r.a.createElement("li",null,"Express"))))};var v=function(){var e=Object(n.useState)([{name:"About",description:"Projects I Have Worked On"},{name:"Portfolio",description:"Projects I Have Worked On"},{name:"Contact",description:"Reach Out Here"},{name:"Resume",description:"Work & Coding Experience"}]),t=Object(o.a)(e,1)[0],a=Object(n.useState)(t[0]),l=Object(o.a)(a,2),c=l[0],i=l[1];return r.a.createElement("div",null,r.a.createElement(m,{categories:t,setCurrentCategory:i,currentCategory:c}),r.a.createElement("main",null,"Portfolio"===c.name?r.a.createElement(g,null):"Contact"===c.name?r.a.createElement(b,null):"Resume"===c.name?r.a.createElement(y,null):r.a.createElement(p,null)),r.a.createElement(f,null))},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),P()}],[[6,1,2]]]);
//# sourceMappingURL=main.cb1dbc26.chunk.js.map