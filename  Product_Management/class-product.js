class Product {
    constructor(name,price,desc, img) {
        this.id = 0;
        this.name = name;
        this.price = price;
        this.desc = desc;
        this.img= '';
    }
    init(){
        this.img = this.name+'.jpg';
    }
    getHtml(){
        let str = `<tr>
                    <td>${this.name}</td>
                    <td>${this.price}</td>
                    <td>${this.desc}</td>
                    <td><img src="phone/${this.img}"/></td>
                    <td><button  onclick="editProduct(${this.id})">Edit</button></td>
                    <td><button onclick="deleteProduct(${this.id})">Delete</button></td>
                </tr>`;
        return str;
    }
}