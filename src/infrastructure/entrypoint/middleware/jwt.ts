import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default_jwt_secret";

export const jwtGuard = (req: Request, res: Response, next: NextFunction) => {
    const requestPath = req.originalUrl.split("?")[0].replace(/\/+$/, "");
    if (requestPath === "/pacientes/login" || requestPath.startsWith("/apidocs")) {
        return next();
    }

    const authHeader = req.headers.authorization ?? "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;

    if (!token) {
        return res.status(401).json({ codigo: 401, mensaje: "Token no proporcionado", data: null });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        (req as any).user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ codigo: 401, mensaje: "Token inválido", data: null });
    }
};
