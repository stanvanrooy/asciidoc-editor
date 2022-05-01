/*! For license information please see 8906.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkweb_project_template=self.webpackChunkweb_project_template||[]).push([[8906],{38906:(e,t,s)=>{s.r(t),s.d(t,{conf:()=>o,language:()=>r});var o={comments:{blockComment:["(*","*)"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"[",close:"]"},{open:"{",close:"}"},{open:"(",close:")"},{open:"(*",close:"*)"},{open:"<*",close:"*>"},{open:"'",close:"'",notIn:["string","comment"]},{open:'"',close:'"',notIn:["string","comment"]}]},r={defaultToken:"",tokenPostfix:".m3",brackets:[{token:"delimiter.curly",open:"{",close:"}"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"delimiter.square",open:"[",close:"]"}],keywords:["AND","ANY","ARRAY","AS","BEGIN","BITS","BRANDED","BY","CASE","CONST","DIV","DO","ELSE","ELSIF","END","EVAL","EXCEPT","EXCEPTION","EXIT","EXPORTS","FINALLY","FOR","FROM","GENERIC","IF","IMPORT","IN","INTERFACE","LOCK","LOOP","METHODS","MOD","MODULE","NOT","OBJECT","OF","OR","OVERRIDES","PROCEDURE","RAISE","RAISES","READONLY","RECORD","REF","REPEAT","RETURN","REVEAL","SET","THEN","TO","TRY","TYPE","TYPECASE","UNSAFE","UNTIL","UNTRACED","VALUE","VAR","WHILE","WITH"],reservedConstNames:["ABS","ADR","ADRSIZE","BITSIZE","BYTESIZE","CEILING","DEC","DISPOSE","FALSE","FIRST","FLOAT","FLOOR","INC","ISTYPE","LAST","LOOPHOLE","MAX","MIN","NARROW","NEW","NIL","NUMBER","ORD","ROUND","SUBARRAY","TRUE","TRUNC","TYPECODE","VAL"],reservedTypeNames:["ADDRESS","ANY","BOOLEAN","CARDINAL","CHAR","EXTENDED","INTEGER","LONGCARD","LONGINT","LONGREAL","MUTEX","NULL","REAL","REFANY","ROOT","TEXT"],operators:["+","-","*","/","&","^","."],relations:["=","#","<","<=",">",">=","<:",":"],delimiters:["|","..","=>",",",";",":="],symbols:/[>=<#.,:;+\-*/&^]+/,escapes:/\\(?:[\\fnrt"']|[0-7]{3})/,tokenizer:{root:[[/_\w*/,"invalid"],[/[a-zA-Z][a-zA-Z0-9_]*/,{cases:{"@keywords":{token:"keyword.$0"},"@reservedConstNames":{token:"constant.reserved.$0"},"@reservedTypeNames":{token:"type.reserved.$0"},"@default":"identifier"}}],{include:"@whitespace"},[/[{}()\[\]]/,"@brackets"],[/[0-9]+\.[0-9]+(?:[DdEeXx][\+\-]?[0-9]+)?/,"number.float"],[/[0-9]+(?:\_[0-9a-fA-F]+)?L?/,"number"],[/@symbols/,{cases:{"@operators":"operators","@relations":"operators","@delimiters":"delimiter","@default":"invalid"}}],[/'[^\\']'/,"string.char"],[/(')(@escapes)(')/,["string.char","string.escape","string.char"]],[/'/,"invalid"],[/"([^"\\]|\\.)*$/,"invalid"],[/"/,"string.text","@text"]],text:[[/[^\\"]+/,"string.text"],[/@escapes/,"string.escape"],[/\\./,"invalid"],[/"/,"string.text","@pop"]],comment:[[/\(\*/,"comment","@push"],[/\*\)/,"comment","@pop"],[/./,"comment"]],pragma:[[/<\*/,"keyword.pragma","@push"],[/\*>/,"keyword.pragma","@pop"],[/./,"keyword.pragma"]],whitespace:[[/[ \t\r\n]+/,"white"],[/\(\*/,"comment","@comment"],[/<\*/,"keyword.pragma","@pragma"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQ3BCLENBQUMsT0FBUSxVQUFXLFFBQ3BCLENBQUMsSUFBSyxZQUVSQyxPQUFRLENBQ04sQ0FBQyxNQUFPLGlCQUFrQixTQUMxQixDQUFDLE1BQU8saUJBQWtCLFFBQzFCLENBQUMsSUFBSyxtQkFFUkMsV0FBWSxDQUNWLENBQUMsYUFBYyxTQUNmLENBQUMsT0FBUSxVQUFXLFlBQ3BCLENBQUMsTUFBTyxpQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvbTMvbTMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVmVyc2lvbjogMC4zMS4xKDMzNzU4Nzg1OWIxYzE3MTMxNGI0MDUwMzE3MTE4OGI2Y2VhNmEzMmEpXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvbW9uYWNvLWVkaXRvci9ibG9iL21haW4vTElDRU5TRS50eHRcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vLyBzcmMvYmFzaWMtbGFuZ3VhZ2VzL20zL20zLnRzXG52YXIgY29uZiA9IHtcbiAgY29tbWVudHM6IHtcbiAgICBibG9ja0NvbW1lbnQ6IFtcIigqXCIsIFwiKilcIl1cbiAgfSxcbiAgYnJhY2tldHM6IFtcbiAgICBbXCJ7XCIsIFwifVwiXSxcbiAgICBbXCJbXCIsIFwiXVwiXSxcbiAgICBbXCIoXCIsIFwiKVwiXVxuICBdLFxuICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgeyBvcGVuOiBcIltcIiwgY2xvc2U6IFwiXVwiIH0sXG4gICAgeyBvcGVuOiBcIntcIiwgY2xvc2U6IFwifVwiIH0sXG4gICAgeyBvcGVuOiBcIihcIiwgY2xvc2U6IFwiKVwiIH0sXG4gICAgeyBvcGVuOiBcIigqXCIsIGNsb3NlOiBcIiopXCIgfSxcbiAgICB7IG9wZW46IFwiPCpcIiwgY2xvc2U6IFwiKj5cIiB9LFxuICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiwgbm90SW46IFtcInN0cmluZ1wiLCBcImNvbW1lbnRcIl0gfSxcbiAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogW1wic3RyaW5nXCIsIFwiY29tbWVudFwiXSB9XG4gIF1cbn07XG52YXIgbGFuZ3VhZ2UgPSB7XG4gIGRlZmF1bHRUb2tlbjogXCJcIixcbiAgdG9rZW5Qb3N0Zml4OiBcIi5tM1wiLFxuICBicmFja2V0czogW1xuICAgIHsgdG9rZW46IFwiZGVsaW1pdGVyLmN1cmx5XCIsIG9wZW46IFwie1wiLCBjbG9zZTogXCJ9XCIgfSxcbiAgICB7IHRva2VuOiBcImRlbGltaXRlci5wYXJlbnRoZXNpc1wiLCBvcGVuOiBcIihcIiwgY2xvc2U6IFwiKVwiIH0sXG4gICAgeyB0b2tlbjogXCJkZWxpbWl0ZXIuc3F1YXJlXCIsIG9wZW46IFwiW1wiLCBjbG9zZTogXCJdXCIgfVxuICBdLFxuICBrZXl3b3JkczogW1xuICAgIFwiQU5EXCIsXG4gICAgXCJBTllcIixcbiAgICBcIkFSUkFZXCIsXG4gICAgXCJBU1wiLFxuICAgIFwiQkVHSU5cIixcbiAgICBcIkJJVFNcIixcbiAgICBcIkJSQU5ERURcIixcbiAgICBcIkJZXCIsXG4gICAgXCJDQVNFXCIsXG4gICAgXCJDT05TVFwiLFxuICAgIFwiRElWXCIsXG4gICAgXCJET1wiLFxuICAgIFwiRUxTRVwiLFxuICAgIFwiRUxTSUZcIixcbiAgICBcIkVORFwiLFxuICAgIFwiRVZBTFwiLFxuICAgIFwiRVhDRVBUXCIsXG4gICAgXCJFWENFUFRJT05cIixcbiAgICBcIkVYSVRcIixcbiAgICBcIkVYUE9SVFNcIixcbiAgICBcIkZJTkFMTFlcIixcbiAgICBcIkZPUlwiLFxuICAgIFwiRlJPTVwiLFxuICAgIFwiR0VORVJJQ1wiLFxuICAgIFwiSUZcIixcbiAgICBcIklNUE9SVFwiLFxuICAgIFwiSU5cIixcbiAgICBcIklOVEVSRkFDRVwiLFxuICAgIFwiTE9DS1wiLFxuICAgIFwiTE9PUFwiLFxuICAgIFwiTUVUSE9EU1wiLFxuICAgIFwiTU9EXCIsXG4gICAgXCJNT0RVTEVcIixcbiAgICBcIk5PVFwiLFxuICAgIFwiT0JKRUNUXCIsXG4gICAgXCJPRlwiLFxuICAgIFwiT1JcIixcbiAgICBcIk9WRVJSSURFU1wiLFxuICAgIFwiUFJPQ0VEVVJFXCIsXG4gICAgXCJSQUlTRVwiLFxuICAgIFwiUkFJU0VTXCIsXG4gICAgXCJSRUFET05MWVwiLFxuICAgIFwiUkVDT1JEXCIsXG4gICAgXCJSRUZcIixcbiAgICBcIlJFUEVBVFwiLFxuICAgIFwiUkVUVVJOXCIsXG4gICAgXCJSRVZFQUxcIixcbiAgICBcIlNFVFwiLFxuICAgIFwiVEhFTlwiLFxuICAgIFwiVE9cIixcbiAgICBcIlRSWVwiLFxuICAgIFwiVFlQRVwiLFxuICAgIFwiVFlQRUNBU0VcIixcbiAgICBcIlVOU0FGRVwiLFxuICAgIFwiVU5USUxcIixcbiAgICBcIlVOVFJBQ0VEXCIsXG4gICAgXCJWQUxVRVwiLFxuICAgIFwiVkFSXCIsXG4gICAgXCJXSElMRVwiLFxuICAgIFwiV0lUSFwiXG4gIF0sXG4gIHJlc2VydmVkQ29uc3ROYW1lczogW1xuICAgIFwiQUJTXCIsXG4gICAgXCJBRFJcIixcbiAgICBcIkFEUlNJWkVcIixcbiAgICBcIkJJVFNJWkVcIixcbiAgICBcIkJZVEVTSVpFXCIsXG4gICAgXCJDRUlMSU5HXCIsXG4gICAgXCJERUNcIixcbiAgICBcIkRJU1BPU0VcIixcbiAgICBcIkZBTFNFXCIsXG4gICAgXCJGSVJTVFwiLFxuICAgIFwiRkxPQVRcIixcbiAgICBcIkZMT09SXCIsXG4gICAgXCJJTkNcIixcbiAgICBcIklTVFlQRVwiLFxuICAgIFwiTEFTVFwiLFxuICAgIFwiTE9PUEhPTEVcIixcbiAgICBcIk1BWFwiLFxuICAgIFwiTUlOXCIsXG4gICAgXCJOQVJST1dcIixcbiAgICBcIk5FV1wiLFxuICAgIFwiTklMXCIsXG4gICAgXCJOVU1CRVJcIixcbiAgICBcIk9SRFwiLFxuICAgIFwiUk9VTkRcIixcbiAgICBcIlNVQkFSUkFZXCIsXG4gICAgXCJUUlVFXCIsXG4gICAgXCJUUlVOQ1wiLFxuICAgIFwiVFlQRUNPREVcIixcbiAgICBcIlZBTFwiXG4gIF0sXG4gIHJlc2VydmVkVHlwZU5hbWVzOiBbXG4gICAgXCJBRERSRVNTXCIsXG4gICAgXCJBTllcIixcbiAgICBcIkJPT0xFQU5cIixcbiAgICBcIkNBUkRJTkFMXCIsXG4gICAgXCJDSEFSXCIsXG4gICAgXCJFWFRFTkRFRFwiLFxuICAgIFwiSU5URUdFUlwiLFxuICAgIFwiTE9OR0NBUkRcIixcbiAgICBcIkxPTkdJTlRcIixcbiAgICBcIkxPTkdSRUFMXCIsXG4gICAgXCJNVVRFWFwiLFxuICAgIFwiTlVMTFwiLFxuICAgIFwiUkVBTFwiLFxuICAgIFwiUkVGQU5ZXCIsXG4gICAgXCJST09UXCIsXG4gICAgXCJURVhUXCJcbiAgXSxcbiAgb3BlcmF0b3JzOiBbXCIrXCIsIFwiLVwiLCBcIipcIiwgXCIvXCIsIFwiJlwiLCBcIl5cIiwgXCIuXCJdLFxuICByZWxhdGlvbnM6IFtcIj1cIiwgXCIjXCIsIFwiPFwiLCBcIjw9XCIsIFwiPlwiLCBcIj49XCIsIFwiPDpcIiwgXCI6XCJdLFxuICBkZWxpbWl0ZXJzOiBbXCJ8XCIsIFwiLi5cIiwgXCI9PlwiLCBcIixcIiwgXCI7XCIsIFwiOj1cIl0sXG4gIHN5bWJvbHM6IC9bPj08Iy4sOjsrXFwtKi8mXl0rLyxcbiAgZXNjYXBlczogL1xcXFwoPzpbXFxcXGZucnRcIiddfFswLTddezN9KS8sXG4gIHRva2VuaXplcjoge1xuICAgIHJvb3Q6IFtcbiAgICAgIFsvX1xcdyovLCBcImludmFsaWRcIl0sXG4gICAgICBbXG4gICAgICAgIC9bYS16QS1aXVthLXpBLVowLTlfXSovLFxuICAgICAgICB7XG4gICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgIFwiQGtleXdvcmRzXCI6IHsgdG9rZW46IFwia2V5d29yZC4kMFwiIH0sXG4gICAgICAgICAgICBcIkByZXNlcnZlZENvbnN0TmFtZXNcIjogeyB0b2tlbjogXCJjb25zdGFudC5yZXNlcnZlZC4kMFwiIH0sXG4gICAgICAgICAgICBcIkByZXNlcnZlZFR5cGVOYW1lc1wiOiB7IHRva2VuOiBcInR5cGUucmVzZXJ2ZWQuJDBcIiB9LFxuICAgICAgICAgICAgXCJAZGVmYXVsdFwiOiBcImlkZW50aWZpZXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHsgaW5jbHVkZTogXCJAd2hpdGVzcGFjZVwiIH0sXG4gICAgICBbL1t7fSgpXFxbXFxdXS8sIFwiQGJyYWNrZXRzXCJdLFxuICAgICAgWy9bMC05XStcXC5bMC05XSsoPzpbRGRFZVh4XVtcXCtcXC1dP1swLTldKyk/LywgXCJudW1iZXIuZmxvYXRcIl0sXG4gICAgICBbL1swLTldKyg/OlxcX1swLTlhLWZBLUZdKyk/TD8vLCBcIm51bWJlclwiXSxcbiAgICAgIFtcbiAgICAgICAgL0BzeW1ib2xzLyxcbiAgICAgICAge1xuICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICBcIkBvcGVyYXRvcnNcIjogXCJvcGVyYXRvcnNcIixcbiAgICAgICAgICAgIFwiQHJlbGF0aW9uc1wiOiBcIm9wZXJhdG9yc1wiLFxuICAgICAgICAgICAgXCJAZGVsaW1pdGVyc1wiOiBcImRlbGltaXRlclwiLFxuICAgICAgICAgICAgXCJAZGVmYXVsdFwiOiBcImludmFsaWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFsvJ1teXFxcXCddJy8sIFwic3RyaW5nLmNoYXJcIl0sXG4gICAgICBbLygnKShAZXNjYXBlcykoJykvLCBbXCJzdHJpbmcuY2hhclwiLCBcInN0cmluZy5lc2NhcGVcIiwgXCJzdHJpbmcuY2hhclwiXV0sXG4gICAgICBbLycvLCBcImludmFsaWRcIl0sXG4gICAgICBbL1wiKFteXCJcXFxcXXxcXFxcLikqJC8sIFwiaW52YWxpZFwiXSxcbiAgICAgIFsvXCIvLCBcInN0cmluZy50ZXh0XCIsIFwiQHRleHRcIl1cbiAgICBdLFxuICAgIHRleHQ6IFtcbiAgICAgIFsvW15cXFxcXCJdKy8sIFwic3RyaW5nLnRleHRcIl0sXG4gICAgICBbL0Blc2NhcGVzLywgXCJzdHJpbmcuZXNjYXBlXCJdLFxuICAgICAgWy9cXFxcLi8sIFwiaW52YWxpZFwiXSxcbiAgICAgIFsvXCIvLCBcInN0cmluZy50ZXh0XCIsIFwiQHBvcFwiXVxuICAgIF0sXG4gICAgY29tbWVudDogW1xuICAgICAgWy9cXChcXCovLCBcImNvbW1lbnRcIiwgXCJAcHVzaFwiXSxcbiAgICAgIFsvXFwqXFwpLywgXCJjb21tZW50XCIsIFwiQHBvcFwiXSxcbiAgICAgIFsvLi8sIFwiY29tbWVudFwiXVxuICAgIF0sXG4gICAgcHJhZ21hOiBbXG4gICAgICBbLzxcXCovLCBcImtleXdvcmQucHJhZ21hXCIsIFwiQHB1c2hcIl0sXG4gICAgICBbL1xcKj4vLCBcImtleXdvcmQucHJhZ21hXCIsIFwiQHBvcFwiXSxcbiAgICAgIFsvLi8sIFwia2V5d29yZC5wcmFnbWFcIl1cbiAgICBdLFxuICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgIFsvWyBcXHRcXHJcXG5dKy8sIFwid2hpdGVcIl0sXG4gICAgICBbL1xcKFxcKi8sIFwiY29tbWVudFwiLCBcIkBjb21tZW50XCJdLFxuICAgICAgWy88XFwqLywgXCJrZXl3b3JkLnByYWdtYVwiLCBcIkBwcmFnbWFcIl1cbiAgICBdXG4gIH1cbn07XG5leHBvcnQge1xuICBjb25mLFxuICBsYW5ndWFnZVxufTtcbiJdLCJuYW1lcyI6WyJjb25mIiwiY29tbWVudHMiLCJibG9ja0NvbW1lbnQiLCJicmFja2V0cyIsImF1dG9DbG9zaW5nUGFpcnMiLCJvcGVuIiwiY2xvc2UiLCJub3RJbiIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwidG9rZW5Qb3N0Zml4IiwidG9rZW4iLCJrZXl3b3JkcyIsInJlc2VydmVkQ29uc3ROYW1lcyIsInJlc2VydmVkVHlwZU5hbWVzIiwib3BlcmF0b3JzIiwicmVsYXRpb25zIiwiZGVsaW1pdGVycyIsInN5bWJvbHMiLCJlc2NhcGVzIiwidG9rZW5pemVyIiwicm9vdCIsImNhc2VzIiwiaW5jbHVkZSIsInRleHQiLCJjb21tZW50IiwicHJhZ21hIiwid2hpdGVzcGFjZSJdLCJzb3VyY2VSb290IjoiIn0=