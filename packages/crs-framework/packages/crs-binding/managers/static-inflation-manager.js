import"./../expressions/code-factories/if.js";import"./../expressions/code-factories/case.js";class r{async inflateElements(n,e){for(const t of n)await this.inflateElement(t,e)}async inflateElement(n,e){await this.#n(n,e),await this.#e(n,e),await this.inflateElements(n.children,e)}async#n(n,e){if(!(n.children.length>0)){if(n.textContent.indexOf("&{")!=-1)return n.textContent=await crs.binding.translations.get_with_markup(n.textContent);if(n.textContent.indexOf("${")!=-1){const i=(await crs.binding.expression.sanitize(n.textContent)).expression,s=new Function("context",["return ","`",i,"`"].join(""));n.textContent=s(e)}}}async#e(n,e){for(const t of n.attributes)await this.#t(t,e)}async#t(n,e){if(n.name.indexOf(".attr")!=-1)return this.#r(n,e);let t;if(n.name.indexOf(".if")!=-1?t=await crs.binding.expression.ifFactory(n.value):n.name.indexOf(".case")!=-1&&(t=await crs.binding.expression.caseFactory(n.value)),t!=null){const i=await t.function(e);if(n.name.indexOf("classlist.")!=-1)return await this.#a(n,i);if(n.name.indexOf("style.")!=-1)return await this.#s(n,i);await this.#i(n,i),n.ownerElement.removeAttribute(n.name)}t=null}async#i(n,e){const t=n.name.replace(".if","").replace(".case","");if(n.value.indexOf("?")==-1){e?n.ownerElement.setAttribute(t,e):n.ownerElement.removeAttribute(t);return}e==null?n.ownerElement.removeAttribute(t):n.ownerElement.setAttribute(t,e)}async#s(n,e){const t=n.name.split(".")[1];n.ownerElement.style[t]=e||""}async#a(n,e){n.ownerElement.classList.add(e)}async#r(n,e){const t=n.name.replace(".attr",""),i=crs.binding.expression.sanitize(n.value).expression,a=new Function("context",["return ","`",i,"`"].join(""))(e);n.ownerElement.setAttribute(t,a)}}crs.binding.staticInflationManager=new r;export{r as StaticInflationManager};