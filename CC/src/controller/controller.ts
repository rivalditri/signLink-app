import { RequestHandler } from "express";
import { File } from '@google-cloud/storage';


import { User } from "../models/user";

const { Storage } = require('@google-cloud/storage');

// Create a new instance of the storage client
const storage = new Storage({
    projectId: 'signlink',
    keyFilename: 'src/credentials.json',
});

export const register: RequestHandler = async (req, res, next) => {
    var username = await User.create({ ...req.body});
    return res.status(200).json({ message: "data created", data: username });
};

export const login: RequestHandler = async (req, res, next) => {
    var uname = req.body.username;
    var pw = req.body.password;

    if(await User.findAll({
        where: {
            username: uname,
            password: pw
        }
    })
    ){
        return res.status(200).json({ message: "login success"});
    }
    return res.status(201).json({ message: "login fail"});
};

export const getImg: RequestHandler = async (req, res, next) => {
    try {
        const [files] = await storage.bucket('data-image-signlink').getFiles({ prefix: 'Dataset Dictionary/'});
    
        const imagesData = await Promise.all(
            files.map(async (file: File) => {
                const fileName = file.name;
                const title = fileName.substring(19, fileName.lastIndexOf('.'));
            const [url] = await file.getSignedUrl({
                action: 'read',
                expires: '03-01-2500', // Set an appropriate expiration date
            });
            return {"title": title, imageLink: url };
            })
            );
        res.json(imagesData);
    } catch (error) {
        console.error('Error retrieving images:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};