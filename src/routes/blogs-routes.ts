import express, { Response, Request } from "express";

const router = express.Router();

router.get("/blogs", (req: Request, res: Response) => {
  res.status(200).json({ message: "working" });
});

export default router;
