(self.webpackChunk_open_sauced_docs=self.webpackChunk_open_sauced_docs||[]).push([[82],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8547:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={},s="Dark Mode Feature",d={unversionedId:"styling/dark-mode",id:"styling/dark-mode",isDocsHomePage:!1,title:"Dark Mode Feature",description:'This project supports "dark mode" styling, and by default it will follow the color preference on your device. It also allows for overriding this using buttons at the top right of the screen, which will persist the preference to local storage on your device. More info about color preference web API\'s can be found here in the MDN Web Docs.',source:"@site/docs/styling/dark-mode.md",sourceDirName:"styling",slug:"/styling/dark-mode",permalink:"/styling/dark-mode",editUrl:"https://github.com/open-sauced/open-sauced/edit/main/docs/docs/styling/dark-mode.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Fetching Data from the GitHub GraphQL API",permalink:"/contributing/fetching-data-from-github"},next:{title:"Getting started",permalink:"/storybook/getting-started"}},c=[{value:"Implementation Approach",id:"implementation-approach",children:[]},{value:"Theme Context Use",id:"theme-context-use",children:[]},{value:"SVG Images",id:"svg-images",children:[]},{value:"Loading Skeletons",id:"loading-skeletons",children:[]},{value:"Best Practices Moving Forward",id:"best-practices-moving-forward",children:[]},{value:"References",id:"references",children:[]}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dark-mode-feature"},"Dark Mode Feature"),(0,o.kt)("p",null,'This project supports "dark mode" styling, and by default it will follow the color preference on your device. It also allows for overriding this using buttons at the top right of the screen, which will persist the preference to local storage on your device. More info about color preference web API\'s can be found here in the ',(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"},"MDN Web Docs"),"."),(0,o.kt)("h2",{id:"implementation-approach"},"Implementation Approach"),(0,o.kt)("p",null,"The implementation is done in 4 steps."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The functional component in ",(0,o.kt)("inlineCode",{parentName:"li"},"src/containers/App.js")," has a ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect")," hook that checks the user's ",(0,o.kt)("inlineCode",{parentName:"li"},"localStorage")," for a stored entry of ",(0,o.kt)("inlineCode",{parentName:"li"},"theme"),'.  This value should be either "dark", "light", no entry at all. The hook runs only on initial page load, and if no local storage entry is found, it uses a default value of "system". It applies this value to the ',(0,o.kt)("inlineCode",{parentName:"li"},"ThemeContext")," defined in ",(0,o.kt)("inlineCode",{parentName:"li"},"src/ThemeContext.js"),"."),(0,o.kt)("li",{parentName:"ul"},"Also found in ",(0,o.kt)("inlineCode",{parentName:"li"},"src/containers/App.js")," is a function called ",(0,o.kt)("inlineCode",{parentName:"li"},"systemIsDark")," that can look at the user's device color preference to determine whether or not the system would prefer dark mode."),(0,o.kt)("li",{parentName:"ul"},"Also found in ",(0,o.kt)("inlineCode",{parentName:"li"},"src/containers/App.js")," is a function called ",(0,o.kt)("inlineCode",{parentName:"li"},"applyTheme"),' that checks the theme value and decides whether to include or remove the CSS classname "dark" to the ',(0,o.kt)("inlineCode",{parentName:"li"},"document.body")," element. This determination would be made according to this table.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Value of ",(0,o.kt)("inlineCode",{parentName:"th"},"theme")),(0,o.kt)("th",{parentName:"tr",align:null},"Result of ",(0,o.kt)("inlineCode",{parentName:"th"},"systemIsDark")),(0,o.kt)("th",{parentName:"tr",align:null},"Apply ",(0,o.kt)("inlineCode",{parentName:"th"},"body.dark"),"?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"system"),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null},"include")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"system"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"remove")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dark"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A"),(0,o.kt)("td",{parentName:"tr",align:null},"include")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"light"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A"),(0,o.kt)("td",{parentName:"tr",align:null},"remove")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Found in ",(0,o.kt)("inlineCode",{parentName:"li"},"src/components/ThemeButtonGroup.js")," is a component with three buttons, each of which can be used to change the ",(0,o.kt)("inlineCode",{parentName:"li"},"ThemeContext")," value.")),(0,o.kt)("h2",{id:"theme-context-use"},"Theme Context Use"),(0,o.kt)("p",null,"At this time, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ThemeContext")," only affects the ",(0,o.kt)("inlineCode",{parentName:"p"},"ThemeButtonGroup")," component from a logic standpoint, but the ",(0,o.kt)("inlineCode",{parentName:"p"},"body.dark")," CSS class declaration affects many places in the codebase. The broad effects of the ",(0,o.kt)("inlineCode",{parentName:"p"},"body.dark")," CSS class declaration are found in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/index.css"),".\nThere are more specific impacts for components that extend ",(0,o.kt)("inlineCode",{parentName:"p"},"styled-components")," (found in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/styles/"),") and the style declarations for these refer to descendants of ",(0,o.kt)("inlineCode",{parentName:"p"},"body.dark"),". These impacts are found in overrides of color-related properties such as ",(0,o.kt)("inlineCode",{parentName:"p"},"color"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"background-color"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fill"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"filter"),"."),(0,o.kt)("h2",{id:"svg-images"},"SVG Images"),(0,o.kt)("p",null,"SVG images can have their coloring controlled by a few different means, depending on the way they're rendered. This project has some mix in its use of SVG files for icons/images. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the case of its use of the library ",(0,o.kt)("inlineCode",{parentName:"li"},"@primer/octicons-react"),", these SVG files are rendered directly into markup rather than as the ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," attribute of an ",(0,o.kt)("inlineCode",{parentName:"li"},"<img>")," tag, and so the ",(0,o.kt)("inlineCode",{parentName:"li"},"fill")," CSS property is controlled by ",(0,o.kt)("inlineCode",{parentName:"li"},"src/index.css"),"."),(0,o.kt)("li",{parentName:"ul"},"In the case of its use of SVG files in the repository, these are rendered as the ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," attribute of an ",(0,o.kt)("inlineCode",{parentName:"li"},"<img>")," tag, and therefore the ",(0,o.kt)("inlineCode",{parentName:"li"},"filter")," CSS property is controlled by ",(0,o.kt)("inlineCode",{parentName:"li"},"src/index.css"),"."),(0,o.kt)("li",{parentName:"ul"},"In the case of an SVG used as a background-image for a form element (",(0,o.kt)("inlineCode",{parentName:"li"},"src/styles/Search.js"),"), we use an alternate SVG file for dark mode whose ",(0,o.kt)("inlineCode",{parentName:"li"},"fill")," property has been adjusted, since this use case doesn't allow for controlling the SVG colors separately from the form element's background colors.")),(0,o.kt)("h2",{id:"loading-skeletons"},"Loading Skeletons"),(0,o.kt)("p",null,"This project uses components from the library ",(0,o.kt)("inlineCode",{parentName:"p"},"react-loading-skeleton"),", and these are addressed in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/index.css")," based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dvtng/react-loading-skeleton/blob/master/src/skeleton.js"},"this file")," from their source code."),(0,o.kt)("h2",{id:"best-practices-moving-forward"},"Best Practices Moving Forward"),(0,o.kt)("p",null,"For future work, components with coloring aspects should make use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"styled-components")," library and should include CSS style declarations to handle the case of ",(0,o.kt)("inlineCode",{parentName:"p"},"body.dark"),". For example, below is a component definition used in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/styles/TextArea.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import styled from "styled-components";\nimport {margin, size, borderRadius, colors, fontSize} from "./variables";\nconst Container = styled.textarea`\n  margin-bottom: 12px;\n  border-radius: ${borderRadius};\n  border: 1px solid ${colors.lightestGrey};\n  box-sizing: border-box;\n  box-shadow: none;\n  font-size: ${fontSize.default};\n  margin-bottom: ${size.tiny};\n  outline: none;\n  padding: ${size.tiny};\n  width: 100%;\n  body.dark & {\n    background-color: ${colors.darkestGrey};\n    color: ${colors.lightestGrey};\n  }\n`;\n')),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.blog/2020/03/31/building-dark-mode-on-stack-overflow/"},"Dark Mode at Stack Overflow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@union_io/swapping-fill-color-on-image-tag-svgs-using-css-filters-fa4818bf7ec6"},"Color Control of SVGs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/context.html#consuming-multiple-contexts"},"React Context Docs"))))}m.isMDXComponent=!0}}]);