(this["webpackJsonpart-website"]=this["webpackJsonpart-website"]||[]).push([[0],{144:function(e,t,a){"use strict";a.r(t);var i=a(3),n=a(0),o=a.n(n),s=a(7),r=a.n(s),c=(a(67),a(48)),l=a(49),h=a(15),d=a(56),u=a(55),p=a(31),m=a(30),b=a(50),j=a(17);var g=function(e){console.log(e.photos);var t=Object(n.useState)(0),a=Object(m.a)(t,2),o=a[0],s=a[1],r=Object(n.useState)(!1),c=Object(m.a)(r,2),l=c[0],h=c[1],d=Object(n.useCallback)((function(e,t){t.photo;var a=t.index;s(a),h(!0)}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)(b.a,{photos:e.photos,onClick:d}),Object(i.jsx)(j.b,{children:l?Object(i.jsx)(j.a,{onClose:function(){s(0),h(!1)},children:Object(i.jsx)(j.c,{currentIndex:o,views:e.photos.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{srcset:e.srcSet,caption:e.title})}))})}):null})]})},f=a(13),w=a.p+"static/media/bio.cac6a00b.jpg";function x(){return Object(i.jsx)(f.a,{style:{width:"60rem",height:"auto"},border:"info",children:Object(i.jsxs)(f.a.Body,{children:[Object(i.jsx)(f.a.Title,{children:"MICHAEL'S EXCELLENT ART ADVENTURE"}),Object(i.jsxs)(f.a.Text,{children:[Object(i.jsx)("img",{className:"bio-image",alt:"self potrait",src:w}),Object(i.jsx)("p",{class:"font-weight-bold",children:"Visual Arts - "}),Object(i.jsx)("p",{children:'My first art gig came during a hot stay in Puerto Vallarta, Mexico in the 1970\'s. The owners of a resturant that I frequented  offered me free beverages as long as I would sit on their patio and draw. At the time I was experimenting with a rapidograh ink pen to achieve fine detail in my drawings.The owners believed that having a young "art student" on the premises was good for business.'}),Object(i.jsx)("p",{children:'I never saw much tourist traffic in the place, but they had great coffee and fresh juices. Later the couple began feeding me lunches.The commercial facade ended and I became the couple\'s adopted son for awhile. My mother attributed my good fortune to the fact "her angels were looking after me." Perhaps.'}),Object(i.jsx)("p",{children:"I sketched on-and-off for years, but a renewed interest in playing music and a demanding career in technology marketing limited  time spent creating visual art."}),Object(i.jsx)("p",{children:"Then, 2002 I started working with 8, 9, and 10 year old kids at the day care run by my wife Tamie. We had a blast creating digital music and cell animation together after school. This launched a major career change for me from business to education. "}),Object(i.jsx)("p",{children:"The first job offered to me after graduation was as a K-8 art teacher, though I lacked the art credentials. I quickly enrolled in lessons at the Gage Academy of Art, a bastion of realism and classical art instruction. My motivation  was simply to stay more than a week or two to ahead of the middle school students!!"}),Object(i.jsx)("p",{children:"As it turns out children don't mind adults learning along with them in a supported environment. And, we explored every art medium we could lay our hands on! The art program became recognized throughout the district. The kid's parents even nominated me for a \"Heroes in the Classroom\" award sponsored by the Seahawks. That's the power of art!"}),Object(i.jsx)("p",{children:'My personal art was also progressing. In 2011, I switched to the aqua oil medium to create my "Life Card Series". These are scenes and people of my past. The paintings feature a naive style, high chroma color, caricatures, and nature imagery.'}),Object(i.jsx)("p",{children:'More recently my art has taken a realist bent: "Self Portrait", "Hailey", "Zorn", and "Still Life" are examples.'}),Object(i.jsx)("p",{class:"font-weight-bold",children:"The Music -"}),Object(i.jsx)("p",{children:"During the period 2002-2007, I focused heavily on digital music composition and recording. I had been playing acoustic guitar for years but now turned to synthesizers, piano, and electric guitar."}),Object(i.jsx)("p",{children:'Much of the music from this period---and the most interesting---was done with children. The musical collective became known as "The Standing Waves".'}),Object(i.jsx)("p",{children:"You can hear a sample  of the The Standing Waves sessions by clicking HERE."}),Object(i.jsx)("p",{children:"My son, Jesse Callahan, was also a musical collaborator with me and he later joined the Dropping Gems record label. Jesse also built this web archival site. MANY THANKS!"}),Object(i.jsx)("p",{children:"The artist formerly known as MC Seattle, WA February 2021"})]})]})})}var v=a(53),O=a.n(v),y=a(18),k=a(54),T=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).handleClick=function(){null!=i.state.selectedTicket?i.setState({visible:!0}):i.setState((function(e){return{visible:!e.visible}}))},i.state={visible:!1,photos:[]},i.loadPhotos=i.loadPhotos.bind(Object(h.a)(i)),i}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.loadPhotos()}},{key:"loadPhotos",value:function(){var e=this,t={api_key:"f2737a7592fe109a4b7c2af0af0281b5",photoset_id:"72157718132731867",user_id:"192004326@N04",format:"json",per_page:"120",extras:"url_m,url_c,url_l,url_h,url_o"},a="https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos";a=Object.keys(t).reduce((function(e,a){return e+"&"+a+"="+t[a]}),a),O()(a,{name:"jsonFlickrApi"},(function(t,a){var i=a.photoset.photo.map((function(e){var t=parseFloat(e.width_o/e.height_o);return console.log(e.url_l),{src:void 0===e.url_l?e.url_m:e.url_l,width:parseInt(e.width_o),height:parseInt(e.height_o),title:e.title,aspectRatio:t,alt:e.title,key:e.id,srcSet:["".concat(e.url_m," ").concat(e.width_m,"w"),"".concat(e.url_c," ").concat(e.width_c,"w"),"".concat(e.url_l," ").concat(e.width_l,"w"),"".concat(e.url_h," ").concat(e.width_h,"w")],sizes:"(min-width: 480px) 50vw, (min-width: 1024px) 33.3vw, 100vw"}}));e.setState({photos:e.state.photos?e.state.photos.concat(i):i})}))}},{key:"render",value:function(){console.log(this.state.photos);var e=null,t=null,a=null;return this.state.photos?(!1===this.state.visible?(e=Object(i.jsx)(g,{photos:this.state.photos}),t=Object(i.jsx)(y.a,{size:"lg",style:{float:"right",marginTop:"5px",marginBottom:"5px"},variant:"outline-info",onClick:this.handleClick,children:"MICHAEL CALLAHAN'S ART WORKS"})):(e=Object(i.jsx)("div",{className:"vertical-center",children:Object(i.jsx)(x,{})}),a=Object(i.jsx)(y.a,{href:"https://soundcloud.com/the-standing-waves",target:"_blank",rel:"noreferrer",size:"lg",style:{float:"left",marginLeft:"100px",marginTop:"5px",marginBottom:"5px"},variant:"outline-info",children:"MUSIC LINKS"}),t=Object(i.jsx)(y.a,{size:"lg",style:{float:"right",marginRight:"100px",marginTop:"5px",marginBottom:"5px"},variant:"outline-info",onClick:this.handleClick,children:"BACK TO GALLERY"})),Object(i.jsxs)("div",{children:[e,Object(i.jsxs)(k.a,{children:[a,t]})]})):Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("div",{id:"msg-app-loading",className:"loading-msg",children:"Loading"})})}}]),a}(n.Component),_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,146)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),o(e),s(e)}))};a(143);r.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(T,{})}),document.getElementById("root")),_()},67:function(e,t,a){}},[[144,1,2]]]);
//# sourceMappingURL=main.ed8aeed0.chunk.js.map