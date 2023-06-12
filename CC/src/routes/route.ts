import { Router } from "express";

import { register, login, getImg} from "../controller/controller";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.get("/img", getImg);


export default router;