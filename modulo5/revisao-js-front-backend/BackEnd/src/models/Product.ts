export class ProductClass {
    constructor(
        private id: number,
        private name: string,
        private price: number,
        private qty_stock: number
    ) {
        this.id = id
        this.name = name
        this.price = price
        this.qty_stock = qty_stock
    }
public getId(){
    return this.id
}
public setId(newId:number){
    this.id = newId
}

public getName(){
    return this.name
}
public setName(newName:string){
    this.name = newName
}

public getPrice(){
    return this.price
}
public setPrice(newPrice:number){
    this.price = newPrice
}

public getQtyStock(){
    return this.qty_stock
}
public setQtyStock(newQtyStock:number){
    this.qty_stock = newQtyStock
}
}