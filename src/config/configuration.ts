import * as dotenv from 'dotenv';
dotenv.config();

export default () => ({
    app: {
        port: parseInt(process.env.PORT, 10) || 3000,
    },
    aws: {
        aws_region: process.env.AWS_REGION,
        aws_access_key: process.env.AWS_ACCESS_KEY,
        aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
    },
});
