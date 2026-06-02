import { describe, it, expect, vi } from "vitest";
import DoctorUsecase from "./DoctorUsecase";

describe("DoctorUsecase", () => {
  const mockDoctor = { id: 1, nombre: "Dr. Pérez" } as any;
  const gateway: any = {
    getAll: vi.fn().mockResolvedValue([mockDoctor]),
    getById: vi.fn().mockResolvedValue(mockDoctor),
    create: vi.fn().mockResolvedValue(mockDoctor),
    update: vi.fn().mockResolvedValue(mockDoctor),
    delete: vi.fn().mockResolvedValue(true),
  };
  const usecase = new DoctorUsecase(gateway);

  it("debe devolver todos los doctores", async () => {
    await expect(usecase.getAll()).resolves.toEqual([mockDoctor]);
    expect(gateway.getAll).toHaveBeenCalled();
  });

  it("debe devolver un doctor por id", async () => {
    await expect(usecase.getById(1)).resolves.toEqual(mockDoctor);
    expect(gateway.getById).toHaveBeenCalledWith(1);
  });

  it("debe crear un doctor", async () => {
    await expect(usecase.create(mockDoctor)).resolves.toEqual(mockDoctor);
    expect(gateway.create).toHaveBeenCalledWith(mockDoctor);
  });

  it("debe actualizar un doctor", async () => {
    await expect(usecase.update(mockDoctor)).resolves.toEqual(mockDoctor);
    expect(gateway.update).toHaveBeenCalledWith(mockDoctor);
  });

  it("debe eliminar un doctor", async () => {
    await expect(usecase.delete(1)).resolves.toBe(true);
    expect(gateway.delete).toHaveBeenCalledWith(1);
  });
});