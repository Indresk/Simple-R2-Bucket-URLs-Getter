import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

export async function getAllObjectUrls(bucketName, baseUrl) {
    const accessKey = process.env.ACCESSKEY;
    const secretKey = process.env.SECRETKEY;
    const endpoint = process.env.ENDPOINT;

    const s3 = new S3Client({
        region: "auto",
        endpoint: endpoint,
        credentials: {
            accessKeyId: accessKey,
            secretAccessKey: secretKey,
        },
    });

    let continuationToken = null;
    const allObjects = [];

    do {
        const command = new ListObjectsV2Command({
            Bucket: bucketName,
            ContinuationToken: continuationToken,
        });

        const response = await s3.send(command);

        console.log(response)
        
        if (response.Contents) {
            const cleanArray = response.Contents.filter(item => item.Size > 0)
            allObjects.push(...cleanArray);
        }

        continuationToken = response.NextContinuationToken;
    } while (continuationToken);

    return allObjects.map(obj => `${baseUrl}/${obj.Key}`);
}