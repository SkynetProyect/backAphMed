import { Request, Response, NextFunction } from "express";

const PATIENT_ALLOWED_ROUTES: { method: string; pattern: RegExp }[] = [
    { method: "GET",  pattern: /^\/categorias$/ },
    { method: "GET",  pattern: /^\/categorias\/[^/]+$/ },
    { method: "GET",  pattern: /^\/documentos\/[^/]+$/ },
    { method: "POST", pattern: /^\/documentos$/ },
    { method: "GET",  pattern: /^\/documentos\/byProcedimiento\/[^/]+$/ },
    { method: "GET",  pattern: /^\/imagenes\/[^/]+$/ },
    { method: "POST", pattern: /^\/imagenes$/ },
    { method: "GET",  pattern: /^\/imagenes\/byProcedimiento\/[^/]+$/ },
    { method: "GET",  pattern: /^\/pacientes\/[^/]+$/ },
    { method: "GET",  pattern: /^\/tipocedulas$/ },
    { method: "GET",  pattern: /^\/tipocedulas\/[^/]+$/ },
    { method: "GET",  pattern: /^\/videos\/[^/]+$/ },
    { method: "POST", pattern: /^\/videos$/ },
    { method: "GET",  pattern: /^\/videos\/byProcedimiento\/[^/]+$/ },
    { method: "POST", pattern: /^\/pacientes\/login$/ },
    { method: "POST", pattern: /^\/pacientes$/ },
    { method: "GET", pattern: /^\/procedimientos\/paciente\/[^/]+$/ },
    { method: "GET", pattern: /^\/procedimiento\/paciente\/[^/]+$/ },
    { method: "GET", pattern: /^\/procedimiento\/[^/]+$/ },
    { method: "GET", pattern: /^\/procedimientos\/[^/]+$/ },
];

export const roleGuard = (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    // Si es doctor, acceso total
    if (user?.is_doctor === true) {
        return next();
    }

    // Si es paciente, verificar contra la whitelist
    const requestPath = req.originalUrl.split("?")[0].replace(/\/+$/, "");
    const method = req.method.toUpperCase();
    const isAllowed = PATIENT_ALLOWED_ROUTES.some(
        (route) => route.method === method && route.pattern.test(requestPath)
    );

    if (!isAllowed) {
        return res.status(403).json({ codigo: 403, mensaje: "Acceso denegado", data: null });
    }

    next();
};