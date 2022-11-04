customElements.define('custom-tag',class extends HTMLElement{
    connectedCallback(){
        const temp = this.attachShadow({mode:'open'});
        temp.innerHTML = `<h1 class="error" > ${this.getAttribute('data')}</h1>`
    }
})