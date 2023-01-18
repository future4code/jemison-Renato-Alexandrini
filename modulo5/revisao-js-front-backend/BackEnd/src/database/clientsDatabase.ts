import { ClientClass } from './../models/Client';
import { BaseDatabase } from './baseDatabase'
import { TABLE_CLIENTS } from './migrations/tableNames'

export class ClientsDatabase extends BaseDatabase {

    TABLE_NAME = TABLE_CLIENTS

    public async CreateClient(client: ClientClass){
        await super.CreateItem(client)
    }

    public async GetAllClients(){
       await super.GetAll()
    }

    public async ClientNameExists(name: string) {
        const emailExists = await ClientsDatabase.connection(this.TABLE_NAME).where('name', name)
        return emailExists.length > 0
    }
    public async ClientIdExists(clientId:number) {

        const clientExists = await ClientsDatabase.connection(this.TABLE_NAME).where('id', clientId)
        return clientExists.length > 0
    }
    
}