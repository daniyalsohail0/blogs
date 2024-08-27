import { Schema, Document, Model } from 'mongoose'

export interface Blog extends Document {
    author: string;
    title: string;
    description: string;
    keywords: [string];
    metaTags: string;
    metaDescription: string;
    permalink: string;
    content: string;
    featuredImage: string;
    categories: [string];
    createdAt: Date;
    updatedAt: Date;
}