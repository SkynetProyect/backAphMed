import { describe, it, expect, vi } from "vitest";
import DocumentoUsecase from "./DocumentoUsecase";

describe("DocumentoUsecase", () => {
  const mockDocumento = { id: 1, nombre: "documento.pdf" } as any;
  const gateway: any = {
    getAll: vi.fn().mockResolvedValue([mockDocumento]),
    getById: vi.fn().mockResolvedValue(mockDocumento),
    create: vi.fn().mockResolvedValue(mockDocumento),
    update: vi.fn().mockResolvedValue(mockDocumento),
    delete: vi.fn().mockResolvedValue(true),
    getByProcedimiento: vi.fn().mockResolvedValue([mockDocumento]),
    deleteByProcedimiento: vi.fn().mockResolvedValue(true),
  };
  const usecase = new DocumentoUsecase(gateway);

  it("debe devolver todos los documentos", async () => {
    await expect(usecase.getAll()).resolves.toEqual([mockDocumento]);
    expect(gateway.getAll).toHaveBeenCalled();
  });

  it("debe devolver un documento por id", async () => {
    await expect(usecase.getById(1)).resolves.toEqual(mockDocumento);
    expect(gateway.getById).toHaveBeenCalledWith(1);
  });

  it("debe crear un documento", async () => {
    await expect(usecase.create(mockDocumento)).resolves.toEqual(mockDocumento);
    expect(gateway.create).toHaveBeenCalledWith(mockDocumento);
  });

  it("debe actualizar un documento", async () => {
    await expect(usecase.update(mockDocumento)).resolves.toEqual(mockDocumento);
    expect(gateway.update).toHaveBeenCalledWith(mockDocumento);
  });

  it("debe eliminar un documento", async () => {
    await expect(usecase.delete(1)).resolves.toBe(true);
    expect(gateway.delete).toHaveBeenCalledWith(1);
  });

  it("debe devolver documentos por procedimiento", async () => {
    await expect(usecase.getByProcedimiento(2)).resolves.toEqual([mockDocumento]);
    expect(gateway.getByProcedimiento).toHaveBeenCalledWith(2);
  });

  it("debe eliminar documentos por procedimiento", async () => {
    await expect(usecase.deleteByProcedimiento(2)).resolves.toBe(true);
    expect(gateway.deleteByProcedimiento).toHaveBeenCalledWith(2);
  });
});