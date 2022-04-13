import { Response } from 'express';

export function badRequest(res: Response, error: string): Response {
  return errorResponse(res, 400, error);
}

export function notFound(res: Response, error: string): Response {
  return errorResponse(res, 404, error);
}

function errorResponse(res: Response, status: number, error: string) {
  return res.status(status).json({ error });
}