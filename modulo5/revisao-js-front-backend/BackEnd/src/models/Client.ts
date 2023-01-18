export class ClientClass {
    constructor(
        private id: number,
        private name: string
    ) {
        this.id = id
        this.name = name
    }
    public getId() {
        return this.id
    }
    public setId(newId: number) {
        this.id = newId
    }

    public getName() {
        return this.name
    }
    public setName(newName: string) {
        this.name = newName
    }

}