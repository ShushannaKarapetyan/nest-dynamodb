import {DeleteCommand, DeleteCommandInput} from "@aws-sdk/lib-dynamodb";
import client from "../client";

export const deleteUser = async (id: string) => {
    const deleteUserParams: DeleteCommandInput = {
        TableName: 'users',
        Key: {
            PK: 'USERS',
            SK: id,
        }
    };

    const command: DeleteCommand = new DeleteCommand(deleteUserParams);

    return await client.send(command);
}