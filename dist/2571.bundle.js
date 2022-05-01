/*! For license information please see 2571.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkweb_project_template=self.webpackChunkweb_project_template||[]).push([[2571],{2571:(e,t,n)=>{n.r(t),n.d(t,{conf:()=>m,language:()=>l});var r=n(87453),i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,d={};i(d,"__esModule",{value:!0}),((e,t,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of a(t))s.call(e,r)||"default"===r||i(e,r,{get:()=>t[r],enumerable:!(n=o(t,r))||n.enumerable})})(d,r);var p=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],m={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,comments:{blockComment:["\x3c!--","--\x3e"]},brackets:[["\x3c!--","--\x3e"],["<",">"],["{","}"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:'"',close:'"'},{open:"'",close:"'"},{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"}],onEnterRules:[{beforeText:new RegExp(`<(?!(?:${p.join("|")}))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$`,"i"),afterText:/^<\/([_:\w][_:\w-.\d]*)\s*>$/i,action:{indentAction:d.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp(`<(?!(?:${p.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`,"i"),action:{indentAction:d.languages.IndentAction.Indent}}],folding:{markers:{start:new RegExp("^\\s*\x3c!--\\s*#region\\b.*--\x3e"),end:new RegExp("^\\s*\x3c!--\\s*#endregion\\b.*--\x3e")}}},l={defaultToken:"",tokenPostfix:".html",ignoreCase:!0,tokenizer:{root:[[/<!DOCTYPE/,"metatag","@doctype"],[/<!--/,"comment","@comment"],[/(<)((?:[\w\-]+:)?[\w\-]+)(\s*)(\/>)/,["delimiter","tag","","delimiter"]],[/(<)(script)/,["delimiter",{token:"tag",next:"@script"}]],[/(<)(style)/,["delimiter",{token:"tag",next:"@style"}]],[/(<)((?:[\w\-]+:)?[\w\-]+)/,["delimiter",{token:"tag",next:"@otherTag"}]],[/(<\/)((?:[\w\-]+:)?[\w\-]+)/,["delimiter",{token:"tag",next:"@otherTag"}]],[/</,"delimiter"],[/[^<]+/]],doctype:[[/[^>]+/,"metatag.content"],[/>/,"metatag","@pop"]],comment:[[/-->/,"comment","@pop"],[/[^-]+/,"comment.content"],[/./,"comment.content"]],otherTag:[[/\/?>/,"delimiter","@pop"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/]],script:[[/type/,"attribute.name","@scriptAfterType"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/>/,{token:"delimiter",next:"@scriptEmbedded",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/(<\/)(script\s*)(>)/,["delimiter","tag",{token:"delimiter",next:"@pop"}]]],scriptAfterType:[[/=/,"delimiter","@scriptAfterTypeEquals"],[/>/,{token:"delimiter",next:"@scriptEmbedded",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptAfterTypeEquals:[[/"([^"]*)"/,{token:"attribute.value",switchTo:"@scriptWithCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value",switchTo:"@scriptWithCustomType.$1"}],[/>/,{token:"delimiter",next:"@scriptEmbedded",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptWithCustomType:[[/>/,{token:"delimiter",next:"@scriptEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptEmbedded:[[/<\/script/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/[^<]+/,""]],style:[[/type/,"attribute.name","@styleAfterType"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/>/,{token:"delimiter",next:"@styleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/(<\/)(style\s*)(>)/,["delimiter","tag",{token:"delimiter",next:"@pop"}]]],styleAfterType:[[/=/,"delimiter","@styleAfterTypeEquals"],[/>/,{token:"delimiter",next:"@styleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleAfterTypeEquals:[[/"([^"]*)"/,{token:"attribute.value",switchTo:"@styleWithCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value",switchTo:"@styleWithCustomType.$1"}],[/>/,{token:"delimiter",next:"@styleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleWithCustomType:[[/>/,{token:"delimiter",next:"@styleEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleEmbedded:[[/<\/style/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/[^<]+/,""]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxtQkFDZCxDQUFDLFlBQWEsbUJBQ2QsQ0FBQyxVQUFXLGtCQUNaLENBQUMsSUFBSyxhQUNOLENBQ0UsSUFDQSxDQUNFWixNQUFPLFlBQ1BDLEtBQU0saUJBQ05LLGFBQWMsYUFHbEIsQ0FBQyxjQUNELENBQUMscUJBQXNCLENBQUMsWUFBYSxNQUFPLENBQUVOLE1BQU8sWUFBYUMsS0FBTSxXQUUxRVksZUFBZ0IsQ0FDZCxDQUFDLElBQUssWUFBYSx5QkFDbkIsQ0FDRSxJQUNBLENBQ0ViLE1BQU8sWUFDUEMsS0FBTSxpQkFDTkssYUFBYyxhQUdsQixDQUFDLGNBQ0QsQ0FBQyxlQUFnQixDQUFFTixNQUFPLFdBQVlDLEtBQU0sVUFFOUNhLHFCQUFzQixDQUNwQixDQUNFLFlBQ0EsQ0FDRWQsTUFBTyxrQkFDUFMsU0FBVSw0QkFHZCxDQUNFLFlBQ0EsQ0FDRVQsTUFBTyxrQkFDUFMsU0FBVSw0QkFHZCxDQUNFLElBQ0EsQ0FDRVQsTUFBTyxZQUNQQyxLQUFNLGlCQUNOSyxhQUFjLGFBR2xCLENBQUMsY0FDRCxDQUFDLGVBQWdCLENBQUVOLE1BQU8sV0FBWUMsS0FBTSxVQUU5Q2Msb0JBQXFCLENBQ25CLENBQ0UsSUFDQSxDQUNFZixNQUFPLFlBQ1BDLEtBQU0scUJBQ05LLGFBQWMsUUFHbEIsQ0FBQyxZQUFhLG1CQUNkLENBQUMsWUFBYSxtQkFDZCxDQUFDLFVBQVcsa0JBQ1osQ0FBQyxJQUFLLGFBQ04sQ0FBQyxjQUNELENBQUMsZUFBZ0IsQ0FBRU4sTUFBTyxXQUFZQyxLQUFNLFVBRTlDZSxjQUFlLENBQ2IsQ0FBQyxXQUFZLENBQUVoQixNQUFPLFdBQVlDLEtBQU0sT0FBUUssYUFBYyxTQUM5RCxDQUFDLFFBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvaHRtbC9odG1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFZlcnNpb246IDAuMzEuMSgzMzc1ODc4NTliMWMxNzEzMTRiNDA1MDMxNzExODhiNmNlYTZhMzJhKVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L21vbmFjby1lZGl0b3IvYmxvYi9tYWluL0xJQ0VOU0UudHh0XG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19tYXJrQXNNb2R1bGUgPSAodGFyZ2V0KSA9PiBfX2RlZlByb3AodGFyZ2V0LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBfX3JlRXhwb3J0ID0gKHRhcmdldCwgbW9kdWxlLCBkZXNjKSA9PiB7XG4gIGlmIChtb2R1bGUgJiYgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgbW9kdWxlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMobW9kdWxlKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodGFyZ2V0LCBrZXkpICYmIGtleSAhPT0gXCJkZWZhdWx0XCIpXG4gICAgICAgIF9fZGVmUHJvcCh0YXJnZXQsIGtleSwgeyBnZXQ6ICgpID0+IG1vZHVsZVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKG1vZHVsZSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG4vLyBzcmMvZmlsbGVycy9tb25hY28tZWRpdG9yLWNvcmUudHNcbnZhciBtb25hY29fZWRpdG9yX2NvcmVfZXhwb3J0cyA9IHt9O1xuX19tYXJrQXNNb2R1bGUobW9uYWNvX2VkaXRvcl9jb3JlX2V4cG9ydHMpO1xuX19yZUV4cG9ydChtb25hY29fZWRpdG9yX2NvcmVfZXhwb3J0cywgbW9uYWNvX2VkaXRvcl9jb3JlX3N0YXIpO1xuaW1wb3J0ICogYXMgbW9uYWNvX2VkaXRvcl9jb3JlX3N0YXIgZnJvbSBcIi4uLy4uL2VkaXRvci9lZGl0b3IuYXBpLmpzXCI7XG5cbi8vIHNyYy9iYXNpYy1sYW5ndWFnZXMvaHRtbC9odG1sLnRzXG52YXIgRU1QVFlfRUxFTUVOVFMgPSBbXG4gIFwiYXJlYVwiLFxuICBcImJhc2VcIixcbiAgXCJiclwiLFxuICBcImNvbFwiLFxuICBcImVtYmVkXCIsXG4gIFwiaHJcIixcbiAgXCJpbWdcIixcbiAgXCJpbnB1dFwiLFxuICBcImtleWdlblwiLFxuICBcImxpbmtcIixcbiAgXCJtZW51aXRlbVwiLFxuICBcIm1ldGFcIixcbiAgXCJwYXJhbVwiLFxuICBcInNvdXJjZVwiLFxuICBcInRyYWNrXCIsXG4gIFwid2JyXCJcbl07XG52YXIgY29uZiA9IHtcbiAgd29yZFBhdHRlcm46IC8oLT9cXGQqXFwuXFxkXFx3Kil8KFteXFxgXFx+XFwhXFxAXFwkXFxeXFwmXFwqXFwoXFwpXFw9XFwrXFxbXFx7XFxdXFx9XFxcXFxcfFxcO1xcOlxcJ1xcXCJcXCxcXC5cXDxcXD5cXC9cXHNdKykvZyxcbiAgY29tbWVudHM6IHtcbiAgICBibG9ja0NvbW1lbnQ6IFtcIjwhLS1cIiwgXCItLT5cIl1cbiAgfSxcbiAgYnJhY2tldHM6IFtcbiAgICBbXCI8IS0tXCIsIFwiLS0+XCJdLFxuICAgIFtcIjxcIiwgXCI+XCJdLFxuICAgIFtcIntcIiwgXCJ9XCJdLFxuICAgIFtcIihcIiwgXCIpXCJdXG4gIF0sXG4gIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICB7IG9wZW46IFwie1wiLCBjbG9zZTogXCJ9XCIgfSxcbiAgICB7IG9wZW46IFwiW1wiLCBjbG9zZTogXCJdXCIgfSxcbiAgICB7IG9wZW46IFwiKFwiLCBjbG9zZTogXCIpXCIgfSxcbiAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgXSxcbiAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcbiAgICB7IG9wZW46IFwie1wiLCBjbG9zZTogXCJ9XCIgfSxcbiAgICB7IG9wZW46IFwiW1wiLCBjbG9zZTogXCJdXCIgfSxcbiAgICB7IG9wZW46IFwiKFwiLCBjbG9zZTogXCIpXCIgfSxcbiAgICB7IG9wZW46IFwiPFwiLCBjbG9zZTogXCI+XCIgfVxuICBdLFxuICBvbkVudGVyUnVsZXM6IFtcbiAgICB7XG4gICAgICBiZWZvcmVUZXh0OiBuZXcgUmVnRXhwKGA8KD8hKD86JHtFTVBUWV9FTEVNRU5UUy5qb2luKFwifFwiKX0pKShbXzpcXFxcd11bXzpcXFxcdy0uXFxcXGRdKikoW14vPl0qKD8hLyk+KVtePF0qJGAsIFwiaVwiKSxcbiAgICAgIGFmdGVyVGV4dDogL148XFwvKFtfOlxcd11bXzpcXHctLlxcZF0qKVxccyo+JC9pLFxuICAgICAgYWN0aW9uOiB7XG4gICAgICAgIGluZGVudEFjdGlvbjogbW9uYWNvX2VkaXRvcl9jb3JlX2V4cG9ydHMubGFuZ3VhZ2VzLkluZGVudEFjdGlvbi5JbmRlbnRPdXRkZW50XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBiZWZvcmVUZXh0OiBuZXcgUmVnRXhwKGA8KD8hKD86JHtFTVBUWV9FTEVNRU5UUy5qb2luKFwifFwiKX0pKShcXFxcd1tcXFxcd1xcXFxkXSopKFteLz5dKig/IS8pPilbXjxdKiRgLCBcImlcIiksXG4gICAgICBhY3Rpb246IHsgaW5kZW50QWN0aW9uOiBtb25hY29fZWRpdG9yX2NvcmVfZXhwb3J0cy5sYW5ndWFnZXMuSW5kZW50QWN0aW9uLkluZGVudCB9XG4gICAgfVxuICBdLFxuICBmb2xkaW5nOiB7XG4gICAgbWFya2Vyczoge1xuICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqPCEtLVxcXFxzKiNyZWdpb25cXFxcYi4qLS0+XCIpLFxuICAgICAgZW5kOiBuZXcgUmVnRXhwKFwiXlxcXFxzKjwhLS1cXFxccyojZW5kcmVnaW9uXFxcXGIuKi0tPlwiKVxuICAgIH1cbiAgfVxufTtcbnZhciBsYW5ndWFnZSA9IHtcbiAgZGVmYXVsdFRva2VuOiBcIlwiLFxuICB0b2tlblBvc3RmaXg6IFwiLmh0bWxcIixcbiAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgdG9rZW5pemVyOiB7XG4gICAgcm9vdDogW1xuICAgICAgWy88IURPQ1RZUEUvLCBcIm1ldGF0YWdcIiwgXCJAZG9jdHlwZVwiXSxcbiAgICAgIFsvPCEtLS8sIFwiY29tbWVudFwiLCBcIkBjb21tZW50XCJdLFxuICAgICAgWy8oPCkoKD86W1xcd1xcLV0rOik/W1xcd1xcLV0rKShcXHMqKShcXC8+KS8sIFtcImRlbGltaXRlclwiLCBcInRhZ1wiLCBcIlwiLCBcImRlbGltaXRlclwiXV0sXG4gICAgICBbLyg8KShzY3JpcHQpLywgW1wiZGVsaW1pdGVyXCIsIHsgdG9rZW46IFwidGFnXCIsIG5leHQ6IFwiQHNjcmlwdFwiIH1dXSxcbiAgICAgIFsvKDwpKHN0eWxlKS8sIFtcImRlbGltaXRlclwiLCB7IHRva2VuOiBcInRhZ1wiLCBuZXh0OiBcIkBzdHlsZVwiIH1dXSxcbiAgICAgIFsvKDwpKCg/OltcXHdcXC1dKzopP1tcXHdcXC1dKykvLCBbXCJkZWxpbWl0ZXJcIiwgeyB0b2tlbjogXCJ0YWdcIiwgbmV4dDogXCJAb3RoZXJUYWdcIiB9XV0sXG4gICAgICBbLyg8XFwvKSgoPzpbXFx3XFwtXSs6KT9bXFx3XFwtXSspLywgW1wiZGVsaW1pdGVyXCIsIHsgdG9rZW46IFwidGFnXCIsIG5leHQ6IFwiQG90aGVyVGFnXCIgfV1dLFxuICAgICAgWy88LywgXCJkZWxpbWl0ZXJcIl0sXG4gICAgICBbL1tePF0rL11cbiAgICBdLFxuICAgIGRvY3R5cGU6IFtcbiAgICAgIFsvW14+XSsvLCBcIm1ldGF0YWcuY29udGVudFwiXSxcbiAgICAgIFsvPi8sIFwibWV0YXRhZ1wiLCBcIkBwb3BcIl1cbiAgICBdLFxuICAgIGNvbW1lbnQ6IFtcbiAgICAgIFsvLS0+LywgXCJjb21tZW50XCIsIFwiQHBvcFwiXSxcbiAgICAgIFsvW14tXSsvLCBcImNvbW1lbnQuY29udGVudFwiXSxcbiAgICAgIFsvLi8sIFwiY29tbWVudC5jb250ZW50XCJdXG4gICAgXSxcbiAgICBvdGhlclRhZzogW1xuICAgICAgWy9cXC8/Pi8sIFwiZGVsaW1pdGVyXCIsIFwiQHBvcFwiXSxcbiAgICAgIFsvXCIoW15cIl0qKVwiLywgXCJhdHRyaWJ1dGUudmFsdWVcIl0sXG4gICAgICBbLycoW14nXSopJy8sIFwiYXR0cmlidXRlLnZhbHVlXCJdLFxuICAgICAgWy9bXFx3XFwtXSsvLCBcImF0dHJpYnV0ZS5uYW1lXCJdLFxuICAgICAgWy89LywgXCJkZWxpbWl0ZXJcIl0sXG4gICAgICBbL1sgXFx0XFxyXFxuXSsvXVxuICAgIF0sXG4gICAgc2NyaXB0OiBbXG4gICAgICBbL3R5cGUvLCBcImF0dHJpYnV0ZS5uYW1lXCIsIFwiQHNjcmlwdEFmdGVyVHlwZVwiXSxcbiAgICAgIFsvXCIoW15cIl0qKVwiLywgXCJhdHRyaWJ1dGUudmFsdWVcIl0sXG4gICAgICBbLycoW14nXSopJy8sIFwiYXR0cmlidXRlLnZhbHVlXCJdLFxuICAgICAgWy9bXFx3XFwtXSsvLCBcImF0dHJpYnV0ZS5uYW1lXCJdLFxuICAgICAgWy89LywgXCJkZWxpbWl0ZXJcIl0sXG4gICAgICBbXG4gICAgICAgIC8+LyxcbiAgICAgICAge1xuICAgICAgICAgIHRva2VuOiBcImRlbGltaXRlclwiLFxuICAgICAgICAgIG5leHQ6IFwiQHNjcmlwdEVtYmVkZGVkXCIsXG4gICAgICAgICAgbmV4dEVtYmVkZGVkOiBcInRleHQvamF2YXNjcmlwdFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgIFsvKDxcXC8pKHNjcmlwdFxccyopKD4pLywgW1wiZGVsaW1pdGVyXCIsIFwidGFnXCIsIHsgdG9rZW46IFwiZGVsaW1pdGVyXCIsIG5leHQ6IFwiQHBvcFwiIH1dXVxuICAgIF0sXG4gICAgc2NyaXB0QWZ0ZXJUeXBlOiBbXG4gICAgICBbLz0vLCBcImRlbGltaXRlclwiLCBcIkBzY3JpcHRBZnRlclR5cGVFcXVhbHNcIl0sXG4gICAgICBbXG4gICAgICAgIC8+LyxcbiAgICAgICAge1xuICAgICAgICAgIHRva2VuOiBcImRlbGltaXRlclwiLFxuICAgICAgICAgIG5leHQ6IFwiQHNjcmlwdEVtYmVkZGVkXCIsXG4gICAgICAgICAgbmV4dEVtYmVkZGVkOiBcInRleHQvamF2YXNjcmlwdFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgIFsvPFxcL3NjcmlwdFxccyo+LywgeyB0b2tlbjogXCJAcmVtYXRjaFwiLCBuZXh0OiBcIkBwb3BcIiB9XVxuICAgIF0sXG4gICAgc2NyaXB0QWZ0ZXJUeXBlRXF1YWxzOiBbXG4gICAgICBbXG4gICAgICAgIC9cIihbXlwiXSopXCIvLFxuICAgICAgICB7XG4gICAgICAgICAgdG9rZW46IFwiYXR0cmlidXRlLnZhbHVlXCIsXG4gICAgICAgICAgc3dpdGNoVG86IFwiQHNjcmlwdFdpdGhDdXN0b21UeXBlLiQxXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgLycoW14nXSopJy8sXG4gICAgICAgIHtcbiAgICAgICAgICB0b2tlbjogXCJhdHRyaWJ1dGUudmFsdWVcIixcbiAgICAgICAgICBzd2l0Y2hUbzogXCJAc2NyaXB0V2l0aEN1c3RvbVR5cGUuJDFcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAvPi8sXG4gICAgICAgIHtcbiAgICAgICAgICB0b2tlbjogXCJkZWxpbWl0ZXJcIixcbiAgICAgICAgICBuZXh0OiBcIkBzY3JpcHRFbWJlZGRlZFwiLFxuICAgICAgICAgIG5leHRFbWJlZGRlZDogXCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46IFwiQHJlbWF0Y2hcIiwgbmV4dDogXCJAcG9wXCIgfV1cbiAgICBdLFxuICAgIHNjcmlwdFdpdGhDdXN0b21UeXBlOiBbXG4gICAgICBbXG4gICAgICAgIC8+LyxcbiAgICAgICAge1xuICAgICAgICAgIHRva2VuOiBcImRlbGltaXRlclwiLFxuICAgICAgICAgIG5leHQ6IFwiQHNjcmlwdEVtYmVkZGVkLiRTMlwiLFxuICAgICAgICAgIG5leHRFbWJlZGRlZDogXCIkUzJcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgWy9cIihbXlwiXSopXCIvLCBcImF0dHJpYnV0ZS52YWx1ZVwiXSxcbiAgICAgIFsvJyhbXiddKiknLywgXCJhdHRyaWJ1dGUudmFsdWVcIl0sXG4gICAgICBbL1tcXHdcXC1dKy8sIFwiYXR0cmlidXRlLm5hbWVcIl0sXG4gICAgICBbLz0vLCBcImRlbGltaXRlclwiXSxcbiAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgWy88XFwvc2NyaXB0XFxzKj4vLCB7IHRva2VuOiBcIkByZW1hdGNoXCIsIG5leHQ6IFwiQHBvcFwiIH1dXG4gICAgXSxcbiAgICBzY3JpcHRFbWJlZGRlZDogW1xuICAgICAgWy88XFwvc2NyaXB0LywgeyB0b2tlbjogXCJAcmVtYXRjaFwiLCBuZXh0OiBcIkBwb3BcIiwgbmV4dEVtYmVkZGVkOiBcIkBwb3BcIiB9XSxcbiAgICAgIFsvW148XSsvLCBcIlwiXVxuICAgIF0sXG4gICAgc3R5bGU6IFtcbiAgICAgIFsvdHlwZS8sIFwiYXR0cmlidXRlLm5hbWVcIiwgXCJAc3R5bGVBZnRlclR5cGVcIl0sXG4gICAgICBbL1wiKFteXCJdKilcIi8sIFwiYXR0cmlidXRlLnZhbHVlXCJdLFxuICAgICAgWy8nKFteJ10qKScvLCBcImF0dHJpYnV0ZS52YWx1ZVwiXSxcbiAgICAgIFsvW1xcd1xcLV0rLywgXCJhdHRyaWJ1dGUubmFtZVwiXSxcbiAgICAgIFsvPS8sIFwiZGVsaW1pdGVyXCJdLFxuICAgICAgW1xuICAgICAgICAvPi8sXG4gICAgICAgIHtcbiAgICAgICAgICB0b2tlbjogXCJkZWxpbWl0ZXJcIixcbiAgICAgICAgICBuZXh0OiBcIkBzdHlsZUVtYmVkZGVkXCIsXG4gICAgICAgICAgbmV4dEVtYmVkZGVkOiBcInRleHQvY3NzXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgWy8oPFxcLykoc3R5bGVcXHMqKSg+KS8sIFtcImRlbGltaXRlclwiLCBcInRhZ1wiLCB7IHRva2VuOiBcImRlbGltaXRlclwiLCBuZXh0OiBcIkBwb3BcIiB9XV1cbiAgICBdLFxuICAgIHN0eWxlQWZ0ZXJUeXBlOiBbXG4gICAgICBbLz0vLCBcImRlbGltaXRlclwiLCBcIkBzdHlsZUFmdGVyVHlwZUVxdWFsc1wiXSxcbiAgICAgIFtcbiAgICAgICAgLz4vLFxuICAgICAgICB7XG4gICAgICAgICAgdG9rZW46IFwiZGVsaW1pdGVyXCIsXG4gICAgICAgICAgbmV4dDogXCJAc3R5bGVFbWJlZGRlZFwiLFxuICAgICAgICAgIG5leHRFbWJlZGRlZDogXCJ0ZXh0L2Nzc1wiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcbiAgICAgIFsvPFxcL3N0eWxlXFxzKj4vLCB7IHRva2VuOiBcIkByZW1hdGNoXCIsIG5leHQ6IFwiQHBvcFwiIH1dXG4gICAgXSxcbiAgICBzdHlsZUFmdGVyVHlwZUVxdWFsczogW1xuICAgICAgW1xuICAgICAgICAvXCIoW15cIl0qKVwiLyxcbiAgICAgICAge1xuICAgICAgICAgIHRva2VuOiBcImF0dHJpYnV0ZS52YWx1ZVwiLFxuICAgICAgICAgIHN3aXRjaFRvOiBcIkBzdHlsZVdpdGhDdXN0b21UeXBlLiQxXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgLycoW14nXSopJy8sXG4gICAgICAgIHtcbiAgICAgICAgICB0b2tlbjogXCJhdHRyaWJ1dGUudmFsdWVcIixcbiAgICAgICAgICBzd2l0Y2hUbzogXCJAc3R5bGVXaXRoQ3VzdG9tVHlwZS4kMVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIC8+LyxcbiAgICAgICAge1xuICAgICAgICAgIHRva2VuOiBcImRlbGltaXRlclwiLFxuICAgICAgICAgIG5leHQ6IFwiQHN0eWxlRW1iZWRkZWRcIixcbiAgICAgICAgICBuZXh0RW1iZWRkZWQ6IFwidGV4dC9jc3NcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgWy9bIFxcdFxcclxcbl0rL10sXG4gICAgICBbLzxcXC9zdHlsZVxccyo+LywgeyB0b2tlbjogXCJAcmVtYXRjaFwiLCBuZXh0OiBcIkBwb3BcIiB9XVxuICAgIF0sXG4gICAgc3R5bGVXaXRoQ3VzdG9tVHlwZTogW1xuICAgICAgW1xuICAgICAgICAvPi8sXG4gICAgICAgIHtcbiAgICAgICAgICB0b2tlbjogXCJkZWxpbWl0ZXJcIixcbiAgICAgICAgICBuZXh0OiBcIkBzdHlsZUVtYmVkZGVkLiRTMlwiLFxuICAgICAgICAgIG5leHRFbWJlZGRlZDogXCIkUzJcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgWy9cIihbXlwiXSopXCIvLCBcImF0dHJpYnV0ZS52YWx1ZVwiXSxcbiAgICAgIFsvJyhbXiddKiknLywgXCJhdHRyaWJ1dGUudmFsdWVcIl0sXG4gICAgICBbL1tcXHdcXC1dKy8sIFwiYXR0cmlidXRlLm5hbWVcIl0sXG4gICAgICBbLz0vLCBcImRlbGltaXRlclwiXSxcbiAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxuICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46IFwiQHJlbWF0Y2hcIiwgbmV4dDogXCJAcG9wXCIgfV1cbiAgICBdLFxuICAgIHN0eWxlRW1iZWRkZWQ6IFtcbiAgICAgIFsvPFxcL3N0eWxlLywgeyB0b2tlbjogXCJAcmVtYXRjaFwiLCBuZXh0OiBcIkBwb3BcIiwgbmV4dEVtYmVkZGVkOiBcIkBwb3BcIiB9XSxcbiAgICAgIFsvW148XSsvLCBcIlwiXVxuICAgIF1cbiAgfVxufTtcbmV4cG9ydCB7XG4gIGNvbmYsXG4gIGxhbmd1YWdlXG59O1xuIl0sIm5hbWVzIjpbIl9fZGVmUHJvcCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX19nZXRPd25Qcm9wRGVzYyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9fZ2V0T3duUHJvcE5hbWVzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIl9faGFzT3duUHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwibW9uYWNvX2VkaXRvcl9jb3JlX2V4cG9ydHMiLCJ2YWx1ZSIsInRhcmdldCIsIm1vZHVsZSIsImRlc2MiLCJrZXkiLCJjYWxsIiwiZ2V0IiwiZW51bWVyYWJsZSIsIl9fcmVFeHBvcnQiLCJFTVBUWV9FTEVNRU5UUyIsImNvbmYiLCJ3b3JkUGF0dGVybiIsImNvbW1lbnRzIiwiYmxvY2tDb21tZW50IiwiYnJhY2tldHMiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwic3Vycm91bmRpbmdQYWlycyIsIm9uRW50ZXJSdWxlcyIsImJlZm9yZVRleHQiLCJSZWdFeHAiLCJqb2luIiwiYWZ0ZXJUZXh0IiwiYWN0aW9uIiwiaW5kZW50QWN0aW9uIiwibGFuZ3VhZ2VzIiwiSW5kZW50QWN0aW9uIiwiSW5kZW50T3V0ZGVudCIsIkluZGVudCIsImZvbGRpbmciLCJtYXJrZXJzIiwic3RhcnQiLCJlbmQiLCJsYW5ndWFnZSIsImRlZmF1bHRUb2tlbiIsInRva2VuUG9zdGZpeCIsImlnbm9yZUNhc2UiLCJ0b2tlbml6ZXIiLCJyb290IiwidG9rZW4iLCJuZXh0IiwiZG9jdHlwZSIsImNvbW1lbnQiLCJvdGhlclRhZyIsInNjcmlwdCIsIm5leHRFbWJlZGRlZCIsInNjcmlwdEFmdGVyVHlwZSIsInNjcmlwdEFmdGVyVHlwZUVxdWFscyIsInN3aXRjaFRvIiwic2NyaXB0V2l0aEN1c3RvbVR5cGUiLCJzY3JpcHRFbWJlZGRlZCIsInN0eWxlIiwic3R5bGVBZnRlclR5cGUiLCJzdHlsZUFmdGVyVHlwZUVxdWFscyIsInN0eWxlV2l0aEN1c3RvbVR5cGUiLCJzdHlsZUVtYmVkZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==