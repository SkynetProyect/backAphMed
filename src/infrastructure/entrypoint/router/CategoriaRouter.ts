import { Router } from "express";
import CategoriaHandler from "../handler/CategoriaHandler";
import CategoriaUsecase from "../../../application/usecase/CategoriaUsecase";
import Adapter from "../../adapter/postgres/categoria/adapter/Adapter";

const router = Router();
const handler = new CategoriaHandler(new CategoriaUsecase(new Adapter()));

router.get("/", handler.getAll);
router.get("/:id", handler.getById);
router.post("/", handler.create);
router.put("/:id", handler.update);
router.delete("/:id", handler.delete);

export default router;