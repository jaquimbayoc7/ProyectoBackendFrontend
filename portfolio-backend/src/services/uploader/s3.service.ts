import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Injectable } from "@nestjs/common";
import { env } from "process";

Injectable();
export class UploaderService {
  private client: S3Client;
  private bucketName: string;
  constructor() {
    this.bucketName = env.awsBucketName;
    this.client = new S3Client({
      region: env.awsRegion,
      credentials: {
        accessKeyId: env.awsAccessKey,
        secretAccessKey: env.awsSecretKey,
      },
    });
  }

  async upload(image: Express.Multer.File, key: string) {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: key + '.jpg',
      Body: image.buffer,
    });

    await this.client.send(command);
  }

  async getSignedUrl(key: string): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: key + '.jpg',
    });

    return await getSignedUrl(this.client, command, { expiresIn: 3600 });
  }

  async delete(key: string) {
    const command = new DeleteObjectCommand({
      Bucket: this.bucketName,
      Key: key + '.jpg',
    });

    await this.client.send(command);
  }
}