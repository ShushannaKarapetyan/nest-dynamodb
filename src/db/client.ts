import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import {DynamoDBDocumentClient} from '@aws-sdk/lib-dynamodb';
import configuration from '../config/configuration';

const awsConfig = configuration().aws;

const dynamoClient = new DynamoDBClient({
        region: awsConfig.aws_region,
        credentials: {
            accessKeyId: awsConfig.aws_access_key,
            secretAccessKey: awsConfig.aws_secret_access_key,
        },
    },
);

const docClient = DynamoDBDocumentClient.from(dynamoClient);

export default docClient;