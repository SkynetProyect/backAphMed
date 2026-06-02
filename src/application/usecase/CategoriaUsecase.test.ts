import { describe, it, expect, vi } from "vitest";
import CategoriaUsecase from "./CategoriaUsecase";

describe("CategoriaUsecase", () => {
  const mockCategoria = { id: 1, nombre: "Radiología" } as any;
  const gateway: any = {
    getAll: vi.fn().mockResolvedValue([mockCategoria]),
    getById: vi.fn().mockResolvedValue(mockCategoria),
    create: vi.fn().mockResolvedValue(mockCategoria),
    update: vi.fn().mockResolvedValue(mockCategoria),
    delete: vi.fn().mockResolvedValue(true),
  };
  const usecase = new CategoriaUsecase(gateway);

  it("debe devolver todas las categorías", async () => {
    await expect(usecase.getAll()).resolves.toEqual([mockCategoria]);
    expect(gateway.getAll).toHaveBeenCalled();
  });

  it("debe devolver una categoría por id", async () => {
    await expect(usecase.getById(1)).resolves.toEqual(mockCategoria);
    expect(gateway.getById).toHaveBeenCalledWith(1);
  });

  it("debe crear una categoría", async () => {
    await expect(usecase.create(mockCategoria)).resolves.toEqual(mockCategoria);
    expect(gateway.create).toHaveBeenCalledWith(mockCategoria);
  });

  it("debe actualizar una categoría", async () => {
    await expect(usecase.update(mockCategoria)).resolves.toEqual(mockCategoria);
    expect(gateway.update).toHaveBeenCalledWith(mockCategoria);
  });

  it("debe eliminar una categoría", async () => {
    await expect(usecase.delete(1)).resolves.toBe(true);
    expect(gateway.delete).toHaveBeenCalledWith(1);
  });
});