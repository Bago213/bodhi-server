webpackJsonp([3],{2311:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s,d,u,c,f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),p=a(0),m=n(p),g=a(4),h=n(g),y=a(24),T=a(26),b=n(T),w=a(27),v=a(18),E=a(7),M=n(E),R=a(285),x=n(R),C=a(2328),S=n(C),O=a(510),k=n(O),_=a(2329),A=n(_),W=a(2331),B=n(W),j=a(2334),P=n(j),N=a(2333),q=n(N),I=a(2335),D=n(I),F=a(45),L=n(F),U=a(183),z=n(U),V=a(68),Y=n(V),H=a(36),G=a(286),Q=a(67),X=a(499),J=n(X),K=(0,v.defineMessages)({returnRate:{id:"withdrawDetail.returnRate",defaultMessage:"Return rate:"},youBetYouVote:{id:"withdrawDetail.youBetYouVote",defaultMessage:"You bet {qtum} QTUM. You voted {bot} BOT."},totalBetTotalVote:{id:"withdrawDetail.totalBetTotalVote",defaultMessage:"Total bet amount {qtum} QTUM. Total voted amount {bot} BOT."}}),Z=(o=(0,w.withStyles)(S.default,{withTheme:!0}),s=(0,y.connect)(function(e){return{syncBlockTime:e.App.get("syncBlockTime"),walletAddresses:e.App.get("walletAddresses"),walletEncrypted:e.App.get("walletEncrypted"),walletUnlockedUntil:e.App.get("walletUnlockedUntil"),getTopicsReturn:e.Graphql.get("getTopicsReturn"),getTransactionsReturn:e.Graphql.get("getTransactionsReturn"),betBalances:e.Topic.get("betBalances"),voteBalances:e.Topic.get("voteBalances"),escrowClaim:e.Topic.get("escrowClaim"),botWinnings:e.Topic.get("botWinnings"),qtumWinnings:e.Topic.get("qtumWinnings"),withdrawableAddresses:e.Topic.get("withdrawableAddresses")}},function(e){return{getBetAndVoteBalances:function(t,a){return e(z.default.getBetAndVoteBalances(t,a))},getWithdrawableAddresses:function(t,a){return e(z.default.getWithdrawableAddresses(t,a))},getTopics:function(t,a,n,r){return e(Y.default.getTopics(t,a,n,r))},getTransactions:function(t,a){return e(Y.default.getTransactions(t,a))},createWithdrawTx:function(t,a,n,r){return e(Y.default.createWithdrawTx(t,a,n,r))},clearTxReturn:function(){return e(Y.default.clearTxReturn())},setAppLocation:function(t){return e(L.default.setAppLocation(t))},toggleWalletUnlockDialog:function(t){return e(L.default.toggleWalletUnlockDialog(t))},setLastUsedAddress:function(t){return e(L.default.setLastUsedAddress(t))}}}),(0,v.injectIntl)(d=o(d=s((c=u=function(e){function t(e){r(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.renderWithdrawList=function(){var e=a.props.withdrawableAddresses;return e.length>0?m.default.createElement(x.default,null,m.default.createElement(R.TableHead,null,m.default.createElement(R.TableRow,null,m.default.createElement(R.TableCell,{padding:"dense"},m.default.createElement(v.FormattedMessage,{id:"str.address",defaultMessage:"Address"})),m.default.createElement(R.TableCell,{padding:"dense"},m.default.createElement(v.FormattedMessage,{id:"str.type",defaultMessage:"Type"})),m.default.createElement(R.TableCell,{padding:"dense"},m.default.createElement(v.FormattedMessage,{id:"str.amount",defaultMessage:"Amount"})),m.default.createElement(R.TableCell,{padding:"dense"},m.default.createElement(v.FormattedMessage,{id:"str.actions",defaultMessage:"Actions"})))),m.default.createElement(R.TableBody,null,b.default.map(e,function(e,t){return a.renderWinningWithdrawRow(e,t)}))):null},a.renderWinningWithdrawRow=function(e,t){var n=a.getActionButtonConfig(e),r=n.id,i=n.message,l=n.warningTypeClass,o=n.disabled;if(!n.show)return null;var s=e.botWon?e.botWon+" "+H.Token.Bot:"",d=e.qtumWon?e.qtumWon+" "+H.Token.Qtum:"";return m.default.createElement(R.TableRow,{key:t},m.default.createElement(R.TableCell,{padding:"dense"},m.default.createElement("div",null,e.address),r&&i&&m.default.createElement(k.default,{id:r,message:i,className:l})),m.default.createElement(R.TableCell,{padding:"dense"},a.getLocalizedTypeString(e.type)),m.default.createElement(R.TableCell,{padding:"dense"},s+(b.default.isEmpty(s)||b.default.isEmpty(d)?"":", ")+d),m.default.createElement(R.TableCell,{padding:"dense"},m.default.createElement(w.Button,{size:"small",variant:"raised",color:"primary",disabled:o,"data-address":e.address,"data-type":e.type,onClick:a.onWithdrawClicked},m.default.createElement(v.FormattedMessage,{id:"str.withdraw",defaultMessage:"Withdraw"}))))},a.getLocalizedTypeString=function(e){switch(e){case H.TransactionType.WithdrawEscrow:return m.default.createElement(v.FormattedMessage,{id:"str.escrow",defaultMessage:"Escrow"},function(e){return(0,G.i18nToUpperCase)(e)});case H.TransactionType.Withdraw:return m.default.createElement(v.FormattedMessage,{id:"str.winnings",defaultMessage:"Winnings"},function(e){return(0,G.i18nToUpperCase)(e)});default:return""}},a.fetchData=function(){var e=a.props,t=e.getTopics,n=e.getTransactions,r=e.getBetAndVoteBalances,i=e.getWithdrawableAddresses,l=e.walletAddresses,o=a.state.address;t([{address:o}],void 0,1,0),n([{topicAddress:o}],{field:"createdTime",direction:H.SortBy.Descending}),r(o,l),i(o,l)},a.getActionButtonConfig=function(e){var t=a.props,n=t.getTransactionsReturn,r=t.withdrawableAddresses,i=t.classes,l=a.state.address,o=b.default.filter(n,{type:e.type,status:H.TransactionStatus.Pending,topicAddress:l,senderAddress:e.address});return o.length>0?{show:!0,disabled:!0,id:"str.pendingTransactionDisabledMsg",message:"You have a pending transaction for this event. Please wait until it's confirmed before doing another transaction.",warningTypeClass:i.pending}:(o=b.default.filter(n,{type:e.type,status:H.TransactionStatus.Success,topicAddress:l,senderAddress:e.address}),o.length>0?{show:!0,disabled:!0,id:"withdrawDetail.alreadyWithdrawn",message:"You have already withdrawn with this address.",warningTypeClass:i.withdrawn}:b.default.find(r,{type:e.type,address:e.address})?{show:!0,disabled:!1}:{show:!0,disabled:!0})},a.state={address:a.props.match.params.address,topic:void 0},a.onWithdrawClicked=a.onWithdrawClicked.bind(a),a.getEventInfoObjs=a.getEventInfoObjs.bind(a),a.renderWithdrawContainer=a.renderWithdrawContainer.bind(a),a.renderOptions=a.renderOptions.bind(a),a.onAddressChange=a.onAddressChange.bind(a),a}return l(t,e),f(t,[{key:"componentWillMount",value:function(){(0,this.props.setAppLocation)(H.AppLocation.withdraw),this.fetchData()}},{key:"componentWillReceiveProps",value:function(e){var t=this.props,a=t.syncBlockTime,n=t.getTopicsReturn,r=this.state.address;e.syncBlockTime!==a&&this.fetchData();var i=e.getTopicsReturn?b.default.get(e.getTopicsReturn,"data",[]):b.default.get(n,"data",[]),l=b.default.find(i,{address:r});l&&l.status===H.OracleStatus.Withdraw&&this.setState({topic:l})}},{key:"componentWillUnmount",value:function(){this.props.clearTxReturn()}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.syncBlockTime,n=e.getTransactionsReturn,r=e.withdrawableAddresses,i=this.state.topic;if(!i||!r)return null;var l=b.default.find(i.oracles,function(e){return e.token===H.Token.Qtum}),o=b.default.orderBy(b.default.filter(i.oracles,function(e){return e.token===H.Token.Bot}),["blockNum"],[H.SortBy.Ascending.toLowerCase()]);return m.default.createElement("div",null,m.default.createElement(D.default,null),m.default.createElement(w.Paper,{className:t.eventDetailPaper},m.default.createElement(w.Grid,{container:!0,spacing:0},m.default.createElement(w.Grid,{item:!0,xs:12,md:8,className:t.eventDetailContainerGrid},m.default.createElement(w.Typography,{variant:"display1",className:t.eventDetailTitle},i.name),m.default.createElement(w.Grid,{item:!0,xs:12},this.renderWithdrawContainer(),this.renderOptions(),m.default.createElement(q.default,{oracles:i.oracles}),m.default.createElement(P.default,{transactions:n,options:i.options}))),m.default.createElement(w.Grid,{item:!0,xs:12,md:4,className:(0,M.default)(t.eventDetailContainerGrid,"right")},m.default.createElement(B.default,{infoObjs:this.getEventInfoObjs(),className:t.eventDetailInfo}),m.default.createElement(A.default,{blockTime:a,cOracle:l,dOracles:o,isTopicDetail:!0})))))}},{key:"renderWithdrawContainer",value:function(){var e=this.props,t=e.intl,a=e.classes,n=e.betBalances,r=e.voteBalances,i=e.escrowClaim,l=e.botWinnings,o=e.qtumWinnings,s=this.state.topic,d=n[s.resultIdx],u=r[s.resultIdx],c=b.default.sum(n),f=b.default.sum(r),p=c?(o-c)/c*100:0,g=f?(l-f)/f*100:0;return m.default.createElement(w.Paper,{className:a.withdrawPaper},m.default.createElement("div",{className:(0,M.default)(a.withdrawContainerSection,l||o?"":"last")},m.default.createElement("div",{className:a.withdrawContainerSectionIcon},m.default.createElement("i",{className:"icon iconfont icon-ic_reward"})),m.default.createElement(w.Typography,{variant:"body2",className:a.withdrawContainerSectionLabel},m.default.createElement(v.FormattedMessage,{id:"str.winningOutcome",defaultMessage:"Wining Outcome"},function(e){return(0,G.i18nToUpperCase)(e)})),m.default.createElement(w.Typography,{className:a.withdrawWinningOption},s.options[s.resultIdx]),c||f?m.default.createElement(w.Typography,{variant:"caption"},t.formatMessage(K.youBetYouVote,{qtum:d,bot:u})):m.default.createElement(w.Typography,{variant:"caption"},m.default.createElement(v.FormattedMessage,{id:"topic.didNotBetOrVote",defaultMessage:"You did not bet or vote on the winning outcome."}))),Boolean(i||l||o)&&m.default.createElement("div",null,m.default.createElement("div",{className:a.withdrawContainerSection},m.default.createElement("div",{className:a.withdrawContainerSectionIcon},m.default.createElement("i",{className:"icon iconfont icon-ic_token"})),m.default.createElement(w.Typography,{variant:"body2",className:a.withdrawContainerSectionLabel},m.default.createElement(v.FormattedMessage,{id:"withdrawDetail.reward",defaultMessage:"REWARD"},function(e){return(0,G.i18nToUpperCase)(e)})),m.default.createElement("div",null,m.default.createElement("div",{className:a.withdrawRewardWrapper},m.default.createElement(w.Typography,{variant:"display1"},"+",o," ",m.default.createElement("span",{className:a.withdrawToken},"QTUM")),m.default.createElement(w.Typography,{variant:"caption"},t.formatMessage(K.returnRate)+" "+p.toFixed(2)+"%")),m.default.createElement("div",{className:a.withdrawRewardDivider}),m.default.createElement("div",{className:a.withdrawRewardWrapper},m.default.createElement(w.Typography,{variant:"display1"},"+",l," ",m.default.createElement("span",{className:a.withdrawToken},"BOT")),m.default.createElement(w.Typography,{variant:"caption"},t.formatMessage(K.returnRate)+" "+g.toFixed(2)+"%")))),m.default.createElement("div",{className:(0,M.default)(a.withdrawContainerSection,"last")},m.default.createElement("div",{className:a.withdrawContainerSectionIcon},m.default.createElement("i",{className:"icon iconfont icon-ic_wallet"})),m.default.createElement(w.Typography,{variant:"body2",className:a.withdrawContainerSectionLabel},m.default.createElement(v.FormattedMessage,{id:"withdrawDetail.withdrawTo",defaultMessage:"WITHDRAW TO"},function(e){return(0,G.i18nToUpperCase)(e)}))),this.renderWithdrawList()))}},{key:"renderOptions",value:function(){var e=this.props,t=e.intl,a=e.classes,n=e.betBalances,r=e.voteBalances,i=this.state.topic;return m.default.createElement("div",{className:a.withdrawOptionsWrapper},b.default.map(i.options,function(e,l){return m.default.createElement("div",{key:"option-"+l,className:(0,M.default)(a.withdrawContainerSection,"option")},m.default.createElement("div",{className:a.eventOptionNum},l+1),m.default.createElement(w.Typography,{variant:"title",className:i.resultIdx===l?a.withdrawWinningOptionSmall:""},e),m.default.createElement("div",null,m.default.createElement(w.Typography,{variant:"caption"},t.formatMessage(K.totalBetTotalVote,{qtum:i.qtumAmount[l],bot:i.botAmount[l]}))),!(!n[l]&&!r[l])&&m.default.createElement("div",null,m.default.createElement(w.Typography,{variant:"caption"},t.formatMessage(K.youBetYouVote,{qtum:n[l],bot:r[l]}))))}))}},{key:"getEventInfoObjs",value:function(){var e=this.state.topic;if(b.default.isEmpty(e))return[];var t=b.default.sum(e.qtumAmount),a=b.default.sum(e.botAmount),n=void 0;return b.default.map(e.oracles,function(e){var t=e.resultSetterQAddress;t&&(n=t)}),[{label:m.default.createElement(v.FormattedMessage,{id:"eventInfo.predictionFund",defaultMessage:"Prediction Fund"},function(e){return(0,G.i18nToUpperCase)(e)}),content:t+" QTUM"},{label:m.default.createElement(v.FormattedMessage,{id:"eventInfo.voteVolumn",defaultMessage:"Votting Volume"},function(e){return(0,G.i18nToUpperCase)(e)}),content:a+" BOT"},{label:m.default.createElement(v.FormattedMessage,{id:"str.resultSetter",defaultMessage:"Result Setter"},function(e){return(0,G.i18nToUpperCase)(e)}),content:n}]}},{key:"onAddressChange",value:function(e){this.props.setLastUsedAddress(e.target.value)}},{key:"onWithdrawClicked",value:function(e){var t=this.props,a=t.createWithdrawTx,n=t.walletEncrypted,r=t.walletUnlockedUntil,i=t.toggleWalletUnlockDialog,l=this.state.topic,o=e.currentTarget.getAttribute("data-address"),s=e.currentTarget.getAttribute("data-type");(0,Q.doesUserNeedToUnlockWallet)(n,r)?i(!0):(a(s,l.version,l.address,o),J.default.track("topicDetail-withdraw"))}}]),t}(p.Component),u.propTypes={match:h.default.object.isRequired,classes:h.default.object.isRequired,intl:v.intlShape.isRequired,getTopics:h.default.func.isRequired,getTopicsReturn:h.default.object,getTransactions:h.default.func.isRequired,getTransactionsReturn:h.default.array,getBetAndVoteBalances:h.default.func.isRequired,betBalances:h.default.array,voteBalances:h.default.array,getWithdrawableAddresses:h.default.func.isRequired,escrowClaim:h.default.number,botWinnings:h.default.number,qtumWinnings:h.default.number,withdrawableAddresses:h.default.array,createWithdrawTx:h.default.func.isRequired,clearTxReturn:h.default.func.isRequired,syncBlockTime:h.default.number,walletEncrypted:h.default.bool.isRequired,walletUnlockedUntil:h.default.number.isRequired,toggleWalletUnlockDialog:h.default.func.isRequired,walletAddresses:h.default.array.isRequired,setLastUsedAddress:h.default.func.isRequired,setAppLocation:h.default.func.isRequired},u.defaultProps={syncBlockTime:void 0,getTopicsReturn:void 0,getTransactionsReturn:[],betBalances:[],voteBalances:[],withdrawableAddresses:void 0,escrowClaim:void 0,botWinnings:void 0,qtumWinnings:void 0},d=c))||d)||d)||d);t.default=Z},2313:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return{txidLabel:{width:"150px"},txidRow:{position:"relative",height:"85px"},txidWrapper:{position:"absolute",left:"24px",top:"4px",bottom:"4px",right:"24px",paddingTop:"18px"},txIdText:{"&:hover":{color:"#585AFA",cursor:"pointer"},textDecoration:"underline"}}};t.default=n},2314:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),i=n(r),l=a(4),o=n(l),s=a(27),d=a(18),u=a(2313),c=n(u),f=a(134),p=n(f),m=function(e){var t=e.classes,a=e.transaction;return i.default.createElement(s.TableCell,{padding:"dense",className:t.txidRow},i.default.createElement("div",{className:t.txidWrapper},i.default.createElement("div",{className:t.txidLabel},i.default.createElement(d.FormattedMessage,{id:"str.transactionId",defaultMessage:"Transaction ID"})),i.default.createElement("div",{className:t.txIdText,onClick:function(e){e.stopPropagation(),window.open(p.default.explorer.tx+"/"+a.txid,"_blank")}},a.txid)))};m.propTypes={classes:o.default.object.isRequired,transaction:o.default.object.isRequired},t.default=(0,d.injectIntl)((0,s.withStyles)(c.default,{withTheme:!0})(m))},2315:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),i=n(r),l=a(4),o=n(l),s=a(285),d=a(18),u=a(35),c=a(2313),f=n(c),p=function(e){var t=e.classes,a=e.transaction;return i.default.createElement(s.TableCell,{padding:"dense",className:t.txidRow},i.default.createElement("div",{className:t.txidWrapper},i.default.createElement("div",{className:t.txidLabel},i.default.createElement(d.FormattedMessage,{id:"str.addressUsed",defaultMessage:"Address Used"})),i.default.createElement("div",null,a.senderAddress)))};p.propTypes={classes:o.default.object.isRequired,transaction:o.default.object.isRequired},t.default=(0,d.injectIntl)((0,u.withStyles)(f.default,{withTheme:!0})(p))},2323:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return{detailTxWrapper:{marginTop:e.padding.md.px},detailTxTitle:{marginBottom:e.padding.xs.px}}};t.default=n},2324:function(e,t,a){"use strict";function n(e,t,a){var n=(0,i.getIntlProvider)(t,a),r=n.formatMessage;switch(e){case l.TransactionType.ApproveCreateEvent:case l.TransactionType.ApproveSetResult:case l.TransactionType.ApproveVote:return r(o.approveBotTransfer);case l.TransactionType.CreateEvent:return r(o.createEvent);case l.TransactionType.Bet:return r(o.bet);case l.TransactionType.SetResult:return r(o.setResult);case l.TransactionType.Vote:return r(o.vote);case l.TransactionType.FinalizeResult:return r(o.finalizeResult);case l.TransactionType.Withdraw:return r(o.withdraw);case l.TransactionType.WithdrawEscrow:return r(o.withdrawEscrow);case l.TransactionType.Transfer:return r(o.transfer);case l.TransactionType.ResetApprove:return r(o.resetApproval);default:return console.error("Invalid txType: "+e),""}}Object.defineProperty(t,"__esModule",{value:!0}),t.getTxTypeString=n;var r=a(18),i=a(286),l=a(36),o=(0,r.defineMessages)({resetApproval:{id:"tx.resetApproval",defaultMessage:"Reset Approval"},approveBotTransfer:{id:"tx.approveBotTransfer",defaultMessage:"Approve BOT Transfer"},createEvent:{id:"str.createEvent",defaultMessage:"Create Event"},bet:{id:"str.bet",defaultMessage:"Bet"},setResult:{id:"str.setResult",defaultMessage:"Set Result"},vote:{id:"str.vote",defaultMessage:"Vote"},finalizeResult:{id:"str.finalizeResult",defaultMessage:"Finalize Result"},withdraw:{id:"str.withdraw",defaultMessage:"Withdraw"},withdrawEscrow:{id:"str.withdrawEscrow",defaultMessage:"Withdraw Escrow"},transfer:{id:"str.transfer",defaultMessage:"Transfer"}})},2328:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return{importantNoteContainer:{margin:e.padding.xs.px+" "+e.padding.xs.px+" 0px "+e.padding.xs.px},eventDetailPaper:{boxShadow:"none",borderRadius:e.borderRadius},eventDetailContainerGrid:{padding:e.padding.lg.px,overflowX:"hidden","&.right":{borderLeft:e.border,textAlign:"right"}},withdrawOptionsWrapper:{padding:e.padding.md.px},withdrawContainerSection:{width:"100%",display:"block",position:"relative",paddingLeft:e.padding.md.px,marginBottom:e.padding.md.px,"&.last":{margin:0},"&.option":{marginBottom:e.padding.sm.px}},withdrawContainerSectionLabel:{marginBottom:e.padding.xs.px},withdrawContainerSectionIcon:{height:e.sizes.icon,width:e.sizes.icon,lineHeight:1,fontSize:e.sizes.icon,color:e.palette.text.primary,position:"absolute",left:0,top:"-7px"},withdrawToken:{fontSize:e.sizes.font.textSm,fontWeight:e.typography.fontWeightBold},withdrawRewardWrapper:{display:"inline-block",marginBottom:e.padding.unit.px},withdrawRewardDivider:{display:"inline-block",width:"1px",height:"75px",background:e.palette.divider,marginLeft:e.padding.md.px,marginRight:e.padding.md.px},eventDetailTitle:{marginBottom:e.padding.md.px},eventActionButton:{marginTop:e.padding.md.px,backgroundColor:e.palette.primary.main+" !important",color:"white !important"},withdrawPaper:{padding:e.padding.md.px},eventOptionNum:{background:e.palette.background.grey,height:e.sizes.icon,width:e.sizes.icon,lineHeight:e.sizes.icon,borderRadius:e.sizes.icon,overflow:"hidden",textAlign:"center",fontSize:e.sizes.font.meta,fontWeight:e.typography.fontWeightBold,color:e.palette.text.primary,position:"absolute",left:0,top:0},withdrawWinningOption:{color:e.palette.primary.main,fontSize:e.sizes.font.titleSm,fontWeight:e.typography.fontWeightBold,marginBottom:e.padding.unit.px},withdrawWinningOptionSmall:{color:e.palette.primary.main},eventUnconfirmedText:{marginTop:e.padding.sm.px},pending:{color:e.palette.secondary.main},withdrawn:{color:e.palette.primary.main}}};t.default=n},2329:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s,d,u,c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=a(0),p=n(f),m=a(4),g=n(m),h=a(503),y=n(h),T=a(37),b=n(T),w=a(35),v=a(18),E=a(26),M=n(E),R=a(2330),x=n(R),C=a(67),S=0,O=1,k=2,_=3,A=(0,v.defineMessages)({block:{id:"str.block",defaultMessage:"Block"},to:{id:"cardInfo.to",defaultMessage:"To"},anytime:{id:"str.anytime",defaultMessage:"anytime"}}),W=(o=(0,w.withStyles)(x.default,{withTheme:!0}),(0,v.injectIntl)(s=o((u=d=function(e){function t(){var e,a,n,l;r(this,t);for(var o=arguments.length,s=Array(o),d=0;d<o;d++)s[d]=arguments[d];return a=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.getSteps=function(){var e=n.props,t=e.intl.formatMessage,a=e.blockTime,r=e.cOracle,i=e.dOracles,l=e.isTopicDetail,o=t(A.to),s=t(A.anytime),d=[{title:p.default.createElement(v.FormattedMessage,{id:"cardInfo.topic",defaultMessage:"Topic Created"}),description:t(A.block)+": "+(r.blockNum||"")},{title:p.default.createElement(v.FormattedMessage,{id:"str.betting",defaultMessage:"Betting"}),description:(0,C.getShortLocalDateTimeString)(r.startTime)+"\n        "+o+" "+(0,C.getShortLocalDateTimeString)(r.endTime)},{title:p.default.createElement(v.FormattedMessage,{id:"cardInfo.orResultSet",defaultMessage:"Oracle Result Setting"}),description:(0,C.getShortLocalDateTimeString)(r.resultSetStartTime)+"\n        "+o+" "+(0,C.getShortLocalDateTimeString)(r.resultSetEndTime)}],u=void 0;if(M.default.isEmpty(i))d.push({title:p.default.createElement(v.FormattedMessage,{id:"cardInfo.opResultSet",defaultMessage:"Open Result Setting"}),description:(0,C.getShortLocalDateTimeString)(r.resultSetEndTime)+" "+o+" "+s}),u=a<r.startTime?S:a>=r.startTime&&a<r.resultSetStartTime?O:a>=r.resultSetStartTime&&a<r.resultSetEndTime?k:a>=r.resultSetEndTime?_:null;else{M.default.each(i,function(e){d.push({title:p.default.createElement(v.FormattedMessage,{id:"cardInfo.arbitration",defaultMessage:"Arbitration"}),description:(0,C.getShortLocalDateTimeString)(e.startTime)+"\n            "+o+" "+(0,C.getShortLocalDateTimeString)(e.endTime)})});var c=i.length,f=i[i.length-1];l?(d.push({title:p.default.createElement(v.FormattedMessage,{id:"cardInfo.withdraw",defaultMessage:"Withdraw"}),description:(0,C.getShortLocalDateTimeString)(f.endTime)+" "+o+" "+s}),u=a>=f.endTime?k+c+1:null):(d.push({title:p.default.createElement(v.FormattedMessage,{id:"cardInfo.final",defaultMessage:"Finalizing"}),description:(0,C.getShortLocalDateTimeString)(f.endTime)+" "+o+" "+s}),u=a>=f.startTime&&a<f.endTime?k+c:a>=f.endTime?k+c+1:null)}return{current:u,value:d}},l=a,i(n,l)}return l(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.blockTime,n=e.cOracle;if(!a&&!n)return null;var r=this.getSteps();return p.default.createElement(y.default,{activeStep:r.current,orientation:"vertical",className:t.stepperVertRightWrapper},r.value.map(function(e){return p.default.createElement(h.Step,{key:e.title},p.default.createElement(h.StepLabel,{className:t.stepperVertRightLabel},p.default.createElement(b.default,{variant:"title"},e.title),p.default.createElement(b.default,{variant:"caption"},e.description)))}))}}]),t}(f.Component),d.propTypes={intl:v.intlShape.isRequired,classes:g.default.object.isRequired,blockTime:g.default.number.isRequired,cOracle:g.default.object,dOracles:g.default.array.isRequired,isTopicDetail:g.default.bool.isRequired},d.defaultProps={cOracle:{}},s=u))||s)||s);t.default=W},2330:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return{stepperVertRightWrapper:{position:"relative",left:"100%",background:"transparent",marginLeft:"-".concat(e.padding.md.px)},stepperVertRightLabel:{"& > span:last-of-type":{position:"relative",right:"100%",paddingRight:e.padding.unit.px},"& > span:last-of-type > span > span":{marginTop:"2px"}}}};t.default=n},2331:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s,d,u,c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=a(0),p=n(f),m=a(4),g=n(m),h=a(26),y=n(h),T=a(18),b=a(103),w=n(b),v=a(37),E=n(v),M=a(35),R=a(2332),x=n(R),C=(o=(0,M.withStyles)(x.default,{withTheme:!0}),(0,T.injectIntl)(s=o((u=d=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.infoObjs;return a&&0!==a.length?p.default.createElement("div",{className:t.eventInfoWrapper},y.default.map(a,function(e,a){var n=e.label,r=e.highlight,i=e.content;return n&&i&&p.default.createElement(w.default,{key:"info"+a,item:!0,xs:6,md:12,className:t.eventInfoBlock},p.default.createElement(E.default,{variant:"body1"},n),p.default.createElement(E.default,{variant:"title",className:t.eventInfo},i),r&&p.default.createElement(E.default,{variant:"body2",color:"secondary"},r))})):null}}]),t}(f.Component),d.propTypes={classes:g.default.object.isRequired,infoObjs:g.default.array.isRequired},s=u))||s)||s);t.default=C},2332:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return{eventInfoWrapper:{paddingBottom:e.padding.md.px},eventInfoBlock:{marginBottom:"36px"},eventInfo:{marginTop:e.padding.unit.px,wordWrap:"break-word",paddingLeft:e.padding.md.px,fontSize:e.typography.fontSize}}};t.default=n},2333:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s,d,u,c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=a(0),p=n(f),m=a(4),g=n(m),h=a(26),y=n(h),T=a(18),b=a(285),w=n(b),v=a(27),E=a(36),M=a(67),R=a(286),x=a(2323),C=n(x),S=(o=(0,v.withStyles)(C.default,{withTheme:!0}),(0,T.injectIntl)(s=o((u=d=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),c(t,[{key:"getTypeText",value:function(e,t){return e.token===E.Token.Qtum?p.default.createElement(T.FormattedMessage,{id:"str.bettingRound",defaultMessage:"Betting Round"}):1===t?p.default.createElement(T.FormattedMessage,{id:"str.resultSettingRound",defaultMessage:"Result Setting Round"}):p.default.createElement(T.FormattedMessage,{id:"str.arbitrationRoundX",defaultMessage:"Arbitration Round {idx}",values:{idx:t-1}})}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.oracles,r=y.default.orderBy(n,["endTime"]);if(r.length){var i=r[0],l=i.resultIdx,o=i.options,s=i.amounts,d=i.consensusThreshold,u=r[1],c=u.endTime,f=u.token,m={endTime:c,token:f,resultIdx:l,options:o,amounts:s};m.amounts.fill(0),m.amounts[m.resultIdx]=d,r.splice(1,0,m)}return p.default.createElement("div",{className:a.detailTxWrapper},p.default.createElement(v.Typography,{variant:"headline",className:a.detailTxTitle},p.default.createElement(T.FormattedMessage,{id:"str.resultHistory",defaultMessage:"Result History"},function(e){return(0,R.i18nToUpperCase)(e)})),r.length?p.default.createElement(w.default,null,p.default.createElement(b.TableHead,null,p.default.createElement(b.TableRow,null,p.default.createElement(b.TableCell,{padding:"dense"},p.default.createElement(T.FormattedMessage,{id:"str.date",defaultMessage:"Date"})),p.default.createElement(b.TableCell,{padding:"dense"},p.default.createElement(T.FormattedMessage,{id:"str.resultType",defaultMessage:"Result Type"})),p.default.createElement(b.TableCell,{padding:"dense"},p.default.createElement(T.FormattedMessage,{id:"str.winningOutcome",defaultMessage:"Winning Outcome"})),p.default.createElement(b.TableCell,{padding:"dense"},p.default.createElement(T.FormattedMessage,{id:"str.amount",defaultMessage:"Amount"})))),p.default.createElement(b.TableBody,null,y.default.map(r,function(t,a){return p.default.createElement(b.TableRow,{key:"result-"+a,selected:a%2===1},p.default.createElement(b.TableCell,{padding:"dense"},(0,M.getShortLocalDateTimeString)(t.endTime)),p.default.createElement(b.TableCell,{padding:"dense"},e.getTypeText(t,a)),p.default.createElement(b.TableCell,{padding:"dense"},a!==r.length-1&&0!==a?"#"+(t.resultIdx+1)+" "+t.options[t.resultIdx]:""),p.default.createElement(b.TableCell,{padding:"dense"},y.default.sum(t.amounts)+" "+t.token))}))):p.default.createElement(v.Typography,{variant:"body1"},p.default.createElement(T.FormattedMessage,{id:"str.emptyTxHistory",defaultMessage:"You do not have any transactions right now."})))}}]),t}(f.Component),d.propTypes={classes:g.default.object.isRequired,oracles:g.default.array.isRequired},s=u))||s)||s);t.default=S},2334:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s,d,u,c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=a(0),p=n(f),m=a(4),g=n(m),h=a(26),y=n(h),T=a(18),b=a(285),w=n(b),v=a(27),E=a(2323),M=n(E),R=a(2314),x=n(R),C=a(2315),S=n(C),O=a(67),k=a(2324),_=a(36),A=(o=(0,v.withStyles)(M.default,{withTheme:!0}),(0,T.injectIntl)(s=o((u=d=function(e){function t(){var e,a,n,l;r(this,t);for(var o=arguments.length,s=Array(o),d=0;d<o;d++)s[d]=arguments[d];return a=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.renderTxRow=function(e){var t=n.props.intl,a=t.locale,r=t.messages,i=[];return i[0]=p.default.createElement(b.TableRow,{key:e.txid},p.default.createElement(b.TableCell,{padding:"dense"},(0,O.getShortLocalDateTimeString)(e.createdTime)),p.default.createElement(b.TableCell,{padding:"dense"},(0,k.getTxTypeString)(e.type,a,r)),p.default.createElement(b.TableCell,{padding:"dense"},n.getDescription(e)),p.default.createElement(b.TableCell,{padding:"dense"},e.amount?e.amount+" "+e.token:""),p.default.createElement(b.TableCell,{padding:"dense"},e.status)),i[1]=p.default.createElement(b.TableRow,{key:"txaddr-"+e.txid,selected:!0},p.default.createElement(S.default,{transaction:e}),p.default.createElement(b.TableCell,null),p.default.createElement(b.TableCell,null),p.default.createElement(b.TableCell,null),p.default.createElement(b.TableCell,null)),i[2]=p.default.createElement(b.TableRow,{key:"txid-"+e.txid,selected:!0},p.default.createElement(x.default,{transaction:e}),p.default.createElement(b.TableCell,null),p.default.createElement(b.TableCell,null),p.default.createElement(b.TableCell,null),p.default.createElement(b.TableCell,null)),i},n.getDescription=function(e){switch(e.type){case _.TransactionType.Bet:case _.TransactionType.ApproveSetResult:case _.TransactionType.SetResult:case _.TransactionType.ApproveVote:case _.TransactionType.Vote:case _.TransactionType.FinalizeResult:return"#"+(e.optionIdx+1)+" "+e.topic.options[e.optionIdx];default:return}},l=a,i(n,l)}return l(t,e),c(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.transactions,r=t.options;return p.default.createElement("div",{className:a.detailTxWrapper},p.default.createElement(v.Typography,{variant:"headline",className:a.detailTxTitle},p.default.createElement(T.FormattedMessage,{id:"str.transaction",defaultMessage:"TRANSACTIONS"})),n.length&&r.length?p.default.createElement(w.default,null,p.default.createElement(b.TableHead,null,p.default.createElement(b.TableRow,null,p.default.createElement(b.TableCell,{padding:"dense"},p.default.createElement(T.FormattedMessage,{id:"str.date",defaultMessage:"Date"})),p.default.createElement(b.TableCell,{padding:"dense"},p.default.createElement(T.FormattedMessage,{id:"str.type",defaultMessage:"Type"})),p.default.createElement(b.TableCell,{padding:"dense"},p.default.createElement(T.FormattedMessage,{id:"str.description",defaultMessage:"Description"})),p.default.createElement(b.TableCell,{padding:"dense"},p.default.createElement(T.FormattedMessage,{id:"str.amount",defaultMessage:"Amount"})),p.default.createElement(b.TableCell,{padding:"dense"},p.default.createElement(T.FormattedMessage,{id:"str.status",defaultMessage:"Status"})))),p.default.createElement(b.TableBody,null,y.default.map(n,function(t,a){return e.renderTxRow(t,a)}))):p.default.createElement(v.Typography,{variant:"body1"},p.default.createElement(T.FormattedMessage,{id:"str.emptyTxHistory",defaultMessage:"You do not have any transactions right now."})))}}]),t}(f.Component),d.propTypes={intl:T.intlShape.isRequired,classes:g.default.object.isRequired,transactions:g.default.array.isRequired,options:g.default.array.isRequired},s=u))||s)||s);t.default=A},2335:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s,d,u,c,f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),p=a(0),m=n(p),g=a(4),h=n(g),y=a(24),T=a(104),b=a(35),w=a(105),v=n(w),E=a(507),M=n(E),R=a(18),x=a(2336),C=n(x),S=a(36),O=(o=(0,b.withStyles)(C.default,{withTheme:!0}),s=(0,y.connect)(function(e){return{appLocation:e.App.get("appLocation")}}),(0,T.withRouter)(d=(0,R.injectIntl)(d=o(d=s((c=u=function(e){function t(){var e,a,n,l;r(this,t);for(var o=arguments.length,s=Array(o),d=0;d<o;d++)s[d]=arguments[d];return a=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.onBackClick=function(){switch(n.props.appLocation){case S.AppLocation.bet:n.props.history.push(S.RouterPath.qtumPrediction);break;case S.AppLocation.vote:n.props.history.push(S.RouterPath.botCourt);break;case S.AppLocation.resultSet:n.props.history.push(S.RouterPath.set);break;case S.AppLocation.finalize:n.props.history.push(S.RouterPath.finalize);break;case S.AppLocation.withdraw:n.props.history.push(S.RouterPath.withdraw)}},l=a,i(n,l)}return l(t,e),f(t,[{key:"render",value:function(){var e=this.props.classes;return m.default.createElement(v.default,{variant:"raised",size:"small",className:e.button,onClick:this.onBackClick},m.default.createElement(M.default,null),m.default.createElement(R.FormattedMessage,{id:"str.back",defaultMessage:"Back"}))}}]),t}(p.Component),u.propTypes={classes:h.default.object.isRequired,history:h.default.object.isRequired,appLocation:h.default.string.isRequired},d=c))||d)||d)||d)||d);t.default=O},2336:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return{button:{marginBottom:e.padding.xs.px,padding:e.padding.unit.px+" "+e.padding.sm.px+" "+e.padding.unit.px+" "+e.padding.xs.px}}};t.default=n}});