import { FriendsForFeedDTO } from "../model/DTO/friendshipDTO";

export class CreatStringForFeed {

    public createStringForFeed = (array: FriendsForFeedDTO[]): string => {

        let friendsArray = []
        for (let i = 0; i < array.length; i++) {

            friendsArray.push(`author_id_fk = "${array[i].amigo}" OR `)
        }
        let friendsArrayToString = friendsArray.toString()
        let FriendsStringWithoutComma = friendsArrayToString.replace(/,/g, '')
        let FriendsStringWithoutFinalStrings = FriendsStringWithoutComma.slice(0, -3)

        return FriendsStringWithoutFinalStrings
    }
}