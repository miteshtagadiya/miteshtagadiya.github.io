(this.webpackJsonpmitesh=this.webpackJsonpmitesh||[]).push([[20],{605:function(e,t,a){"use strict";a.r(t);var l=a(155),n=a(156),o=a(158),r=a(157),i=a(0),s=a.n(i),c=a(624),m=a(55),p=(a(606),a(607)),h=a(3),u=(a(224),function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onMouseEnter=function(){n.setState({showLabel:!0})},n.onMouseLeave=function(){n.setState({showLabel:!1})},n.state={showLabel:!1},n}return Object(n.a)(a,[{key:"setModalVisible",value:function(e){this.setState({modalVisible:e})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"col-sm-3 m-b-20 m-t-10 card Projects",style:{borderRadius:0,margin:"auto",marginTop:50,marginBottom:50},onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},s.a.createElement("img",{src:this.props.img,className:"image",height:"280",width:"auto",alt:"Myprofile"}),this.state.showLabel?s.a.createElement("div",{style:{position:"absolute",height:280,marginLeft:-15,width:"100%",display:"flex",justifyContent:"center",flexDirection:"column",textAlign:"center",background:"rgb(0,0,0,0.7)",alignItems:"center"}},s.a.createElement("label",{className:"link-label",onClick:function(){h.a.modalview("".concat(window.location.hash,"/").concat(e.props.header)),e.setModalVisible(!0)}},"Details")):null,this.state.showLabel?s.a.createElement("div",{style:{position:"absolute",height:280,width:"100%",padding:"15px",background:"transparent"}},s.a.createElement("label",{className:"label-header",style:{fontSize:25,color:"white"}},this.props.header)):null,s.a.createElement(c.a,{width:"90%",footer:null,height:"80%",title:this.props.header,centered:!0,style:{background:"#00003f",overflow:"scroll"},visible:this.state.modalVisible,onOk:function(){return e.setModalVisible(!1)},onCancel:function(){return e.setModalVisible(!1)}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12 col-xl-6 col-lg-6 col-md-12"},s.a.createElement(p.Carousel,null,this.props.images.map((function(e,t){return s.a.createElement("div",{key:t},s.a.createElement("img",{src:e,height:"365",alt:""}))})))),s.a.createElement("div",{className:"col-sm-12 col-xl-6 col-lg-6 col-md-12"},s.a.createElement("div",null,s.a.createElement("div",{style:{display:"flex",marginTop:20}},s.a.createElement(m.a,{icon:["fas","calendar-alt"],style:{fontSize:18,color:"#7ef0ff",marginRight:15,marginTop:3}}),s.a.createElement("label",null,this.props.projectYear?this.props.projectYear:null)),s.a.createElement("div",{style:{display:"flex",marginTop:20}},s.a.createElement(m.a,{icon:["fas","book"],style:{fontSize:18,color:"#7ef0ff",marginRight:15,marginTop:3}}),s.a.createElement("label",null,this.props.program?this.props.program:null)),this.props.members?s.a.createElement("div",{style:{display:"flex",marginTop:20}},s.a.createElement(m.a,{icon:["fas","user-friends"],style:{fontSize:18,color:"#7ef0ff",marginRight:15,marginTop:3}}),s.a.createElement("label",null,this.props.members?this.props.members:null)):null,s.a.createElement("div",{style:{display:"flex",marginTop:20}},s.a.createElement(m.a,{icon:["fas","code"],style:{fontSize:18,color:"#7ef0ff",marginRight:15,marginTop:3}}),s.a.createElement("label",null,this.props.tech?this.props.tech:null)),s.a.createElement("div",{style:{marginTop:30,marginBottom:30}},s.a.createElement("div",{style:{bottom:100,width:"100%",textAlign:"center"}},this.props.isSocial?s.a.createElement(s.a.Fragment,null,s.a.createElement("a",{href:this.props.github,rel:"noopener noreferrer",target:"_blank","aria-label":"Github",onClick:function(){h.a.event({category:"Project Demo",action:e.props.github,label:"Project Github"})}},s.a.createElement("label",{className:"link-label",style:{marginBottom:10}},"GitHub")),s.a.createElement("a",{href:this.props.demo,rel:"noopener noreferrer",target:"_blank","aria-label":"Demo",onClick:function(){h.a.event({category:"Project Demo",action:e.props.demo,label:"Project Demo"})}},s.a.createElement("label",{className:"link-label",style:{marginTop:10}},"Demo"))):null))))),s.a.createElement("div",{style:{marginTop:20}},this.props.projectDetails)))))}}]),a}(i.Component));t.default=u}}]);