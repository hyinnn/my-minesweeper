(this.webpackJsonpminesweeperjs=this.webpackJsonpminesweeperjs||[]).push([[0],{10:function(e,t,a){e.exports=a(11)},11:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a(9),s=a(3),i=a(1),o=a(4),l=a(5),u=a(0),c=a.n(u),h=a(8),v=a.n(h),f=(a(16),["white","#1E90FF","#228B22","#FF0000","#191970","#8B0000","#3CB371","black","#FFA07A"]),p=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t={fontWeight:"*"===this.props.value||"F"===this.props.value?"bolder":"normal",color:f[this.props.value]};return c.a.createElement("div",{className:"square",onClick:function(){return e.props.onClick()},onContextMenu:function(t){t.preventDefault(),e.props.onContextMenu()}},c.a.createElement("div",{style:t,className:"value"},this.props.value))}}]),a}(c.a.Component),m=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){for(var e=this,t={width:34*this.props.cols},a=[],n=function(n){for(var r=[],s=function(t){r.push(c.a.createElement(p,{value:e.props.player[n][t],onClick:function(){return e.props.onClick(n,t)},onContextMenu:function(){return e.props.onContextMenu(n,t)}}))},i=0;i<e.props.cols;i++)s(i);a.push(c.a.createElement("div",{style:t,className:"board-row"},r))},r=0;r<this.props.rows;r++)n(r);return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("button",{className:"game-icon"})),c.a.createElement("div",{className:"board"},a))}}]),a}(c.a.Component),d=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).M=9,n.N=9,n.mines=10,n.state={squares:n.initializeSquares(),player:Array(n.M).fill().map((function(){return Array(n.N).fill(null)})),gameIsOver:!1,revealCount:0},n}return Object(i.a)(a,[{key:"countAdjMines",value:function(e,t,a){for(var n=0,r=t-1;r<=t+1;r++)for(var s=a-1;s<=a+1;s++)r>=0&&r<this.M&&s>=0&&s<this.N&&"*"===e[r][s]&&n++;return n}},{key:"initializeSquares",value:function(){for(var e=this,t=Array(this.M).fill().map((function(){return Array(e.N).fill(0)})),a=new Set,n=0;n<this.mines;n++){for(var r=Math.floor(Math.random()*this.M),s=Math.floor(Math.random()*this.N);a.has(r*this.N+s);)r=Math.floor(Math.random()*this.M),s=Math.floor(Math.random()*this.N);a.add(r*this.N+s),t[r][s]="*"}for(var i=0;i<this.M;i++)for(var o=0;o<this.N;o++)"*"!==t[i][o]&&(t[i][o]=this.countAdjMines(t,i,o));return t}}]),Object(i.a)(a,[{key:"revealAllMines",value:function(e,t){for(var a=[],n=0;n<t.length;n++)a[n]=e[n].slice();for(var r=0;r<t.length;r++)for(var s=0;s<t[r].length;s++)"*"===t[r][s]&&(a[r][s]="*");return a}},{key:"isValid",value:function(e,t,a){return t>=0&&t<this.M&&a>=0&&a<this.N&&null===e[t][a]}},{key:"getAdj",value:function(e,t,a){for(var n=[],r=t-1;r<=t+1;r++)for(var s=a-1;s<=a+1;s++)r===t&&s===a||this.isValid(e,r,s)&&n.push([r,s]);return n}},{key:"handleContext",value:function(e,t){if(!this.state.gameIsOver){this.state.squares;var a=this.state.player;"F"===a[e][t]?a[e][t]=null:null===a[e][t]&&(a[e][t]="F"),this.setState({player:a})}}},{key:"handleClick",value:function(e,t){if(!this.state.gameIsOver){var a=this.state.squares,s=this.state.player,i=this.state.revealCount,o=a[e][t];if("F"!==s[e][t])if("*"!==o){for(var l=[[e,t]];l.length>0;){var u=l.pop(),c=Object(r.a)(u,2),h=c[0],v=c[1];if(null===s[h][v]&&i++,s[h][v]=a[h][v],console.log(i),0===a[h][v]){var f,p=this.getAdj(s,h,v),m=Object(n.a)(p);try{for(m.s();!(f=m.n()).done;){var d=f.value;l.push(d)}}catch(M){m.e(M)}finally{m.f()}}}this.setState({player:s,revealCount:i}),i===this.M*this.N-this.mines&&(alert("You won!"),this.setState({gameIsOver:!0}))}else{var y=this.revealAllMines(s,a);this.setState({gameIsOver:!0,player:y})}}}},{key:"render",value:function(){var e=this;return c.a.createElement(m,{rows:this.M,cols:this.N,squares:this.state.squares,player:this.state.player,onClick:function(t,a){return e.handleClick(t,a)},onContextMenu:function(t,a){e.handleContext(t,a)}})}}]),a}(c.a.Component);v.a.render(c.a.createElement("div",null,c.a.createElement(d,null)),document.getElementById("root"))},16:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.d1471236.chunk.js.map