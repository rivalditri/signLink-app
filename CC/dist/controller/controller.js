"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImg = exports.login = exports.register = void 0;
const user_1 = require("../models/user");
const { Storage } = require('@google-cloud/storage');
// Create a new instance of the storage client
const storage = new Storage({
    projectId: 'signlink',
    keyFilename: 'src/credentials.json',
});
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var username = yield user_1.User.create(Object.assign({}, req.body));
    return res.status(200).json({ message: "data created", data: username });
});
exports.register = register;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var uname = req.body.username;
    var pw = req.body.password;
    if (yield user_1.User.findAll({
        where: {
            username: uname,
            password: pw
        }
    })) {
        return res.status(200).json({ message: "login success" });
    }
    return res.status(201).json({ message: "login fail" });
});
exports.login = login;
const getImg = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [files] = yield storage.bucket('data-image-signlink').getFiles({ prefix: 'Dataset Dictionary/' });
        const imagesData = yield Promise.all(files.map((file) => __awaiter(void 0, void 0, void 0, function* () {
            const fileName = file.name;
            const title = fileName.substring(19, fileName.lastIndexOf('.'));
            const [url] = yield file.getSignedUrl({
                action: 'read',
                expires: '03-01-2500', // Set an appropriate expiration date
            });
            return { "title": title, imageLink: url };
        })));
        res.json(imagesData);
    }
    catch (error) {
        console.error('Error retrieving images:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getImg = getImg;
