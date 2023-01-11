export class PurchasesClass {
    constructor(private id: string, private userId: string, private productId:string, private quantity:number, private totalPrice: number) {
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.totalPrice = totalPrice
    }

    public getId(): string {
        return this.id
    }
    public setId(newId: string): void {
        this.id = newId
    }

    public getUserId(): string {
        return this.userId
    }
    public setUserId(newUserId: string): void {
        this.userId = newUserId
    }

    public getProductId():string {
        return this.productId
    }
    public setProductId(newProductId: string): void {
        this.productId = newProductId
    }

    public getQuantity(): number {
        return this.quantity
    }
    public setQuantity(newQuantity: number): void {
        this.quantity = newQuantity
    }

    public getTotalPrice(): number {
        return this.totalPrice
    }
    public setTotalPrice(newTotalPrice: number): void {
        this.totalPrice = newTotalPrice
    }
}