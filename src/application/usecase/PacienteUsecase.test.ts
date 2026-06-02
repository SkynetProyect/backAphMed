import { describe, it, expect, vi } from "vitest";
import PacienteUsecase from "./PacienteUsecase";

describe("PacienteUsecase", () => {
  const mockPaciente = { id: 1, nombre: "Juan", identificacion: "123" } as any;
  const paginatedResult = { data: [mockPaciente], page: 1, pageSize: 10, total: 1 } as any;
  const gateway: any = {
    getAll: vi.fn().mockResolvedValue(paginatedResult),
    getById: vi.fn().mockResolvedValue(mockPaciente),
    create: vi.fn().mockResolvedValue(mockPaciente),
    update: vi.fn().mockResolvedValue(mockPaciente),
    delete: vi.fn().mockResolvedValue(true),
    login: vi.fn().mockResolvedValue(mockPaciente),
  };
  const usecase = new PacienteUsecase(gateway);

  it("debe devolver pacientes paginados", async () => {
    await expect(usecase.getAll(1, 10)).resolves.toEqual(paginatedResult);
    expect(gateway.getAll).toHaveBeenCalledWith(1, 10);
  });

  it("debe devolver un paciente por id", async () => {
    await expect(usecase.getById(1)).resolves.toEqual(mockPaciente);
    expect(gateway.getById).toHaveBeenCalledWith(1);
  });

  it("debe crear un paciente", async () => {
    await expect(usecase.create(mockPaciente)).resolves.toEqual(mockPaciente);
    expect(gateway.create).toHaveBeenCalledWith(mockPaciente);
  });

  it("debe actualizar un paciente", async () => {
    await expect(usecase.update(mockPaciente)).resolves.toEqual(mockPaciente);
    expect(gateway.update).toHaveBeenCalledWith(mockPaciente);
  });

  it("debe eliminar un paciente", async () => {
    await expect(usecase.delete(1)).resolves.toBe(true);
    expect(gateway.delete).toHaveBeenCalledWith(1);
  });

  it("debe iniciar sesión de paciente", async () => {
    await expect(usecase.login("123", "pass", false)).resolves.toEqual(mockPaciente);
    expect(gateway.login).toHaveBeenCalledWith("123", "pass", false);
  });
});