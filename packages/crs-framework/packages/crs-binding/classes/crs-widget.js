class s extends HTMLElement{async disconnectedCallback(){this.#e()}#e(){this.dataset.ready="false";for(let e of this.children)crs.binding.utils.unmarkElement(e),e.remove()}async onMessage(e){this.#e();let t=e.context;typeof t!="object"&&(t=crs.binding.data.getContext(t)),this.innerHTML=e.html||await fetch(e.url).then(n=>n.text()).catch(n=>console.error(n)),await crs.binding.parsers.parseElements(this.children,t,{}),await crs.binding.data.updateContext(t.bid),this.dataset.ready="true"}}customElements.define("crs-widget",s);export{s as Widget};
