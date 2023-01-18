export class OrdersClass {
    constructor(
        private id: number,
        private order_date: string,
        private delivery_date: string,
        private qty: number,
        private fk_client: number,
        private fk_product: number
    ) {
        this.id = id
        this.order_date = order_date
        this.delivery_date = delivery_date
        this.qty = qty
        this.fk_client = fk_client
        this.fk_product = fk_product
    }
public getId(){
    return this.id
}
public setId(newId:number){
    this.id = newId
}

public getOrderDate(){
    return this.order_date
}
public setOrderDate(newOrderDate:string){
    this.order_date = newOrderDate
}

public getDeliveryDate(){
    return this.delivery_date
}
public setDeliveryDate(newDeliveryDate:string){
    this.delivery_date = newDeliveryDate
}

public getQty(){
    return this.qty
}
public setQty(newQty:number){
    this.qty = newQty
}

public getFkClient(){
    return this.fk_client
}
public setFkClient(newFkClient:number){
    this.fk_client = newFkClient
}

public getFkProduct(){
    return this.fk_product
}
public setFkProduct(newFkProduct:number){
    this.fk_product = newFkProduct
}
}