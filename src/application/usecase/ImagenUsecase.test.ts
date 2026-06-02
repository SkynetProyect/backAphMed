import { describe, it, expect, vi } from "vitest";
import ImagenUsecase from "./ImagenUsecase";

describe("ImagenUsecase", () => {
  const mockImagen = { id: 1, nombre: "imagen.jpg" } as any;
  const gateway: any = {
    getAll: vi.fn().mockResolvedValue([mockImagen]),
    getById: vi.fn().mockResolvedValue(mockImagen),
    create: vi.fn().mockResolvedValue(mockImagen),
    update: vi.fn().mockResolvedValue(mockImagen),
    delete: vi.fn().mockResolvedValue(true),
    getByProcedimiento: vi.fn().mockResolvedValue([mockImagen]),
    deleteByProcedimiento: vi.fn().mockResolvedValue(true),
  };
  const usecase = new ImagenUsecase(gateway);

  it("debe devolver todas las imágenes", async () => {
    await expect(usecase.getAll()).resolves.toEqual([mockImagen]);
    expect(gateway.getAll).toHaveBeenCalled();
  });

  it("debe devolver una imagen por id", async () => {
    await expect(usecase.getById(1)).resolves.toEqual(mockImagen);
    expect(gateway.getById).toHaveBeenCalledWith(1);
  });

  it("debe crear una imagen", async () => {
    await expect(usecase.create(mockImagen)).resolves.toEqual(mockImagen);
    expect(gateway.create).toHaveBeenCalledWith(mockImagen);
  });

  it("debe actualizar una imagen", async () => {
    await expect(usecase.update(mockImagen)).resolves.toEqual(mockImagen);
    expect(gateway.update).toHaveBeenCalledWith(mockImagen);
  });

  it("debe eliminar una imagen", async () => {
    await expect(usecase.delete(1)).resolves.toBe(true);
    expect(gateway.delete).toHaveBeenCalledWith(1);
  });

  it("debe devolver imágenes por procedimiento", async () => {
    await expect(usecase.getByProcedimiento(3)).resolves.toEqual([mockImagen]);
    expect(gateway.getByProcedimiento).toHaveBeenCalledWith(3);
  });

  it("debe eliminar imágenes por procedimiento", async () => {
    await expect(usecase.deleteByProcedimiento(3)).resolves.toBe(true);
    expect(gateway.deleteByProcedimiento).toHaveBeenCalledWith(3);
  });
});