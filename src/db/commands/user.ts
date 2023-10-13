import {CreateTableInput, CreateTableCommand} from '@aws-sdk/client-dynamodb';

import client from '../client';

const usersTableParams: CreateTableInput = {
    TableName: 'users',
    KeySchema: [
        {AttributeName: 'PK', KeyType: 'HASH'},
        {AttributeName: 'SK', KeyType: 'RANGE'}
    ],
    AttributeDefinitions: [
        {AttributeName: 'PK', AttributeType: 'S'},
        {AttributeName: 'SK', AttributeType: 'S'}
    ],
    ProvisionedThroughput:
        {
            ReadCapacityUnits: 2,
            WriteCapacityUnits: 2
        }
}

const command = new CreateTableCommand(usersTableParams);
client.send(command)
    .then((result) => console.log(result))
    .catch((e) => console.log('error:', e));