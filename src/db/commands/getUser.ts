import {GetCommand, GetCommandInput} from "@aws-sdk/lib-dynamodb";
import client from "../client";

export const getUser = async (id: string) => {
    const getUserParams: GetCommandInput = {
        TableName: 'users',
        Key: {
            PK: 'USERS',
            SK: id,
        }
    };

    const command: GetCommand = new GetCommand(getUserParams);

    return await client.send(command);
}