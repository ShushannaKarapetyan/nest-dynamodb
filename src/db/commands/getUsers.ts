import {ScanCommandInput, ScanCommand} from "@aws-sdk/lib-dynamodb";
import client from "../client";

export const getUsers = async () => {
    const getUsersParams: ScanCommandInput = {
        TableName: 'users',
    }

    const command = new ScanCommand(getUsersParams);

    return await client.send(command);
}