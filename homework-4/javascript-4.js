'use strict';

const treeTemplate = {
    "id": 1,
    "items": [
        {
            "id": 2,
            "items": [
                { 
                    "id": 3 
                }
            ]
        }
    ]
}

class MyTree extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    addLeafShadow(id) {
        this.shadowRoot.innerHTML += `<my-leaf id=${id}></my-leaf>`;
    }

    connectedCallback() {
        const treeTemplate = JSON.parse(this.getAttribute('treeTemplate'));

        if (treeTemplate !== undefined) {
            if (treeTemplate.items !== undefined) {
                for (let i=0; i<treeTemplate.items.length; i++){
                    if (treeTemplate.items[i].items !== undefined) {
                        this.shadowRoot.innerHTML += `<my-tree treeTemplate=${JSON.stringify(treeTemplate.items[i])}></my-tree>`;
                    } else {
                        this.addLeafShadow(treeTemplate.items[i].id);
                    }
                }
            } else {
                this.addLeafShadow(treeTemplate.id);
            }
        }
    }

}

class MyLeaf extends HTMLElement {

    constructor() {
        super()
        this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        const id = this.getAttribute('id');
        this.shadowRoot.innerHTML = `<h3>${id}</h3>`
    }

}

customElements.define('my-tree', MyTree);
customElements.define('my-leaf', MyLeaf);

var a = document.createElement('my-tree')
a.setAttribute('treeTemplate', `${JSON.stringify(treeTemplate)}`)
document.body.appendChild(a);