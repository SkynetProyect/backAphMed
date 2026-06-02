import { describe, it, expect, vi } from "vitest";
import ProcedimientoUsecase from "./ProcedimientoUsecase";

describe("ProcedimientoUsecase", () => {
  const mockProcedimiento = { id: 1, nombre: "Revisión" } as any;
  const gateway: any = {
    getAll: vi.fn().mockResolvedValue([mockProcedimiento]),
    getById: vi.fn().mockResolvedValue(mockProcedimiento),
    create: vi.fn().mockResolvedValue(mockProcedimiento),
    update: vi.fn().mockResolvedValue(mockProcedimiento),
    delete: vi.fn().mockResolvedValue(true),
    getByPaciente: vi.fn().mockResolvedValue([mockProcedimiento]),
  };
  const usecase = new ProcedimientoUsecase(gateway);

  it("debe devolver todos los procedimientos", async () => {
    await expect(usecase.getAll()).resolves.toEqual([mockProcedimiento]);
    expect(gateway.getAll).toHaveBeenCalled();
  });

  it("debe devolver un procedimiento por id", async () => {
    await expect(usecase.getById(1)).resolves.toEqual(mockProcedimiento);
    expect(gateway.getById).toHaveBeenCalledWith(1);
  });

  it("debe crear un procedimiento", async () => {
    await expect(usecase.create(mockProcedimiento)).resolves.toEqual(mockProcedimiento);
    expect(gateway.create).toHaveBeenCalledWith(mockProcedimiento);
  });

  it("debe actualizar un procedimiento", async () => {
    await expect(usecase.update(mockProcedimiento)).resolves.toEqual(mockProcedimiento);
    expect(gateway.update).toHaveBeenCalledWith(mockProcedimiento);
  });

  it("debe eliminar un procedimiento", async () => {
    await expect(usecase.delete(1)).resolves.toBe(true);
    expect(gateway.delete).toHaveBeenCalledWith(1);
  });

  it("debe devolver procedimientos por paciente", async () => {
    await expect(usecase.getByPaciente(1)).resolves.toEqual([mockProcedimiento]);
    expect(gateway.getByPaciente).toHaveBeenCalledWith(1);
  });
});