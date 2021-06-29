import{e,R as t,l as n,a as r,U as i}from"./index.5902a766.js";import{I as o,C as a,D as u,F as s,a as c,S as d}from"./html.worker.a9a3ebbb.js";import"./editor.worker.3f488302.js";var l=function(){function t(e){var t=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval((function(){return t._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return t._stopWorker()}))}return t.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},t.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},t.prototype._checkIfIdle=function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())},t.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=e.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client},t.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then((function(t){e=t})).then((function(e){return t._worker.withSyncedResources(n)})).then((function(t){return e}))},t}(),g=function(){function t(t,n,r){var i=this;this._languageId=t,this._worker=n,this._disposables=[],this._listener=Object.create(null);var o=function(e){var t,n=e.getModeId();n===i._languageId&&(i._listener[e.uri.toString()]=e.onDidChangeContent((function(){clearTimeout(t),t=setTimeout((function(){return i._doValidate(e.uri,n)}),500)})),i._doValidate(e.uri,n))},a=function(t){e.setModelMarkers(t,i._languageId,[]);var n=t.uri.toString(),r=i._listener[n];r&&(r.dispose(),delete i._listener[n])};this._disposables.push(e.onDidCreateModel(o)),this._disposables.push(e.onWillDisposeModel((function(e){a(e)}))),this._disposables.push(e.onDidChangeModelLanguage((function(e){a(e.model),o(e.model)}))),this._disposables.push(r.onDidChange((function(t){e.getModels().forEach((function(e){e.getModeId()===i._languageId&&(a(e),o(e))}))}))),this._disposables.push({dispose:function(){for(var e in i._listener)i._listener[e].dispose()}}),e.getModels().forEach(o)}return t.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},t.prototype._doValidate=function(t,n){this._worker(t).then((function(r){return r.doValidation(t.toString()).then((function(r){var i=r.map((function(e){return n="number"==typeof(t=e).code?String(t.code):t.code,{severity:f(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source};var t,n})),o=e.getModel(t);o&&o.getModeId()===n&&e.setModelMarkers(o,n,i)}))})).then(void 0,(function(e){console.error(e)}))},t}();function f(e){switch(e){case u.Error:return r.Error;case u.Warning:return r.Warning;case u.Information:return r.Info;case u.Hint:return r.Hint;default:return r.Info}}function h(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function p(e){if(e)return new t(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function m(e){var t=n.CompletionItemKind;switch(e){case a.Text:return t.Text;case a.Method:return t.Method;case a.Function:return t.Function;case a.Constructor:return t.Constructor;case a.Field:return t.Field;case a.Variable:return t.Variable;case a.Class:return t.Class;case a.Interface:return t.Interface;case a.Module:return t.Module;case a.Property:return t.Property;case a.Unit:return t.Unit;case a.Value:return t.Value;case a.Enum:return t.Enum;case a.Keyword:return t.Keyword;case a.Snippet:return t.Snippet;case a.Color:return t.Color;case a.File:return t.File;case a.Reference:return t.Reference}return t.Property}function v(e){if(e)return{range:p(e.range),text:e.newText}}var _=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[".",":","<",'"',"=","/"]},enumerable:!1,configurable:!0}),e.prototype.provideCompletionItems=function(e,r,i,a){var u=e.uri;return this._worker(u).then((function(e){return e.doComplete(u.toString(),h(r))})).then((function(i){if(i){var a=e.getWordUntilPosition(r),u=new t(r.lineNumber,a.startColumn,r.lineNumber,a.endColumn),s=i.items.map((function(e){var t,r={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,range:u,kind:m(e.kind)};return e.textEdit&&(void 0!==(t=e.textEdit).insert&&void 0!==t.replace?r.range={insert:p(e.textEdit.insert),replace:p(e.textEdit.replace)}:r.range=p(e.textEdit.range),r.insertText=e.textEdit.newText),e.additionalTextEdits&&(r.additionalTextEdits=e.additionalTextEdits.map(v)),e.insertTextFormat===o.Snippet&&(r.insertTextRules=n.CompletionItemInsertTextRule.InsertAsSnippet),r}));return{isIncomplete:i.isIncomplete,suggestions:s}}}))},e}();function w(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function k(e){if(e)return Array.isArray(e)?e.map(w):[w(e)]}var y=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.doHover(r.toString(),h(t))})).then((function(e){if(e)return{range:p(e.range),contents:k(e.contents)}}))},e}();function b(e){var t=n.DocumentHighlightKind;switch(e){case c.Read:return t.Read;case c.Write:return t.Write;case c.Text:return t.Text}return t.Text}var I=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.findDocumentHighlights(r.toString(),h(t))})).then((function(e){if(e)return e.map((function(e){return{range:p(e.range),kind:b(e.kind)}}))}))},e}();function S(e){var t=n.SymbolKind;switch(e){case d.File:return t.Array;case d.Module:return t.Module;case d.Namespace:return t.Namespace;case d.Package:return t.Package;case d.Class:return t.Class;case d.Method:return t.Method;case d.Property:return t.Property;case d.Field:return t.Field;case d.Constructor:return t.Constructor;case d.Enum:return t.Enum;case d.Interface:return t.Interface;case d.Function:return t.Function;case d.Variable:return t.Variable;case d.Constant:return t.Constant;case d.String:return t.String;case d.Number:return t.Number;case d.Boolean:return t.Boolean;case d.Array:return t.Array}return t.Function}var C=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,t){var n=e.uri;return this._worker(n).then((function(e){return e.findDocumentSymbols(n.toString())})).then((function(e){if(e)return e.map((function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:S(e.kind),tags:[],range:p(e.location.range),selectionRange:p(e.location.range)}}))}))},e}(),x=function(){function e(e){this._worker=e}return e.prototype.provideLinks=function(e,t){var n=e.uri;return this._worker(n).then((function(e){return e.findDocumentLinks(n.toString())})).then((function(e){if(e)return{links:e.map((function(e){return{range:p(e.range),url:e.target}}))}}))},e}();function P(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var R=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.format(r.toString(),null,P(t)).then((function(e){if(e&&0!==e.length)return e.map(v)}))}))},e}(),F=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){var i=e.uri;return this._worker(i).then((function(e){return e.format(i.toString(),function(e){if(e)return{start:h(e.getStartPosition()),end:h(e.getEndPosition())}}(t),P(n)).then((function(e){if(e&&0!==e.length)return e.map(v)}))}))},e}(),E=function(){function e(e){this._worker=e}return e.prototype.provideRenameEdits=function(e,t,n,r){var o=e.uri;return this._worker(o).then((function(e){return e.doRename(o.toString(),h(t),n)})).then((function(e){return function(e){if(!e||!e.changes)return;var t=[];for(var n in e.changes)for(var r=i.parse(n),o=0,a=e.changes[n];o<a.length;o++){var u=a[o];t.push({resource:r,edit:{range:p(u.range),text:u.newText}})}return{edits:t}}(e)}))},e}();var D=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,t,r){var i=e.uri;return this._worker(i).then((function(e){return e.getFoldingRanges(i.toString(),t)})).then((function(e){if(e)return e.map((function(e){var t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case s.Comment:return n.FoldingRangeKind.Comment;case s.Imports:return n.FoldingRangeKind.Imports;case s.Region:return n.FoldingRangeKind.Region}}(e.kind)),t}))}))},e}();var T=function(){function e(e){this._worker=e}return e.prototype.provideSelectionRanges=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.getSelectionRanges(r.toString(),t.map(h))})).then((function(e){if(e)return e.map((function(e){for(var t=[];e;)t.push({range:p(e.range)}),e=e.parent;return t}))}))},e}();function M(e){var t=new l(e),r=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return t.getLanguageServiceWorker.apply(t,e)},i=e.languageId;n.registerCompletionItemProvider(i,new _(r)),n.registerHoverProvider(i,new y(r)),n.registerDocumentHighlightProvider(i,new I(r)),n.registerLinkProvider(i,new x(r)),n.registerFoldingRangeProvider(i,new D(r)),n.registerDocumentSymbolProvider(i,new C(r)),n.registerSelectionRangeProvider(i,new T(r)),n.registerRenameProvider(i,new E(r)),"html"===i&&(n.registerDocumentFormattingEditProvider(i,new R(r)),n.registerDocumentRangeFormattingEditProvider(i,new F(r)),new g(i,r,e))}function W(e){var t=[],r=[],i=new l(e);t.push(i);var o,a,u=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i.getLanguageServiceWorker.apply(i,e)};return o=e.languageId,a=e.modeConfiguration,H(r),a.completionItems&&r.push(n.registerCompletionItemProvider(o,new _(u))),a.hovers&&r.push(n.registerHoverProvider(o,new y(u))),a.documentHighlights&&r.push(n.registerDocumentHighlightProvider(o,new I(u))),a.links&&r.push(n.registerLinkProvider(o,new x(u))),a.documentSymbols&&r.push(n.registerDocumentSymbolProvider(o,new C(u))),a.rename&&r.push(n.registerRenameProvider(o,new E(u))),a.foldingRanges&&r.push(n.registerFoldingRangeProvider(o,new D(u))),a.selectionRanges&&r.push(n.registerSelectionRangeProvider(o,new T(u))),a.documentFormattingEdits&&r.push(n.registerDocumentFormattingEditProvider(o,new R(u))),a.documentRangeFormattingEdits&&r.push(n.registerDocumentRangeFormattingEditProvider(o,new F(u))),a.diagnostics&&r.push(new g(o,u,e)),t.push(L(r)),L(t)}function L(e){return{dispose:function(){return H(e)}}}function H(e){for(;e.length;)e.pop().dispose()}export{W as setupMode,M as setupMode1};
