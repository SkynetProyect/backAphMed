import { describe, it, expect, vi } from "vitest";
import TypeccUsecase from "./TypeccUsecase";

describe("TypeccUsecase", () => {
  const mockTypecc = { id: 1, nombre: "Cédula" } as any;
  const gateway: any = {
    getAll: vi.fn().mockResolvedValue([mockTypecc]),
    getById: vi.fn().mockResolvedValue(mockTypecc),
    create: vi.fn().mockResolvedValue(mockTypecc),
    update: vi.fn().mockResolvedValue(mockTypecc),
    delete: vi.fn().mockResolvedValue(true),
  };
  const usecase = new TypeccUsecase(gateway);

  it("debe devolver todos los tipos de cédula", async () => {
    await expect(usecase.getAll()).resolves.toEqual([mockTypecc]);
    expect(gateway.getAll).toHaveBeenCalled();
  });

  it("debe devolver un tipo de cédula por id", async () => {
    await expect(usecase.getById(1)).resolves.toEqual(mockTypecc);
    expect(gateway.getById).toHaveBeenCalledWith(1);
  });

  it("debe crear un tipo de cédula", async () => {
    await expect(usecase.create(mockTypecc)).resolves.toEqual(mockTypecc);
    expect(gateway.create).toHaveBeenCalledWith(mockTypecc);
  });

  it("debe actualizar un tipo de cédula", async () => {
    await expect(usecase.update(mockTypecc)).resolves.toEqual(mockTypecc);
    expect(gateway.update).toHaveBeenCalledWith(mockTypecc);
  });

  it("debe eliminar un tipo de cédula", async () => {
    await expect(usecase.delete(1)).resolves.toBe(true);
    expect(gateway.delete).toHaveBeenCalledWith(1);
  });
});