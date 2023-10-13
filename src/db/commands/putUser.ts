import {PutCommand, PutCommandInput} from "@aws-sdk/lib-dynamodb";
import client from "../client";
import {User} from "../../user/users.model";

export const putUser = (user: User) => {
    const putUserParams: PutCommandInput = {
        TableName: 'users',
        Item: {
            PK: 'USERS',
            SK: user.id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            age: user.age,
        }
    };

    const command = new PutCommand(putUserParams);

    return client.send(command);
}
