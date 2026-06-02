import { describe, it, expect, vi } from "vitest";
import VideoUsecase from "./VideoUsecase";

describe("VideoUsecase", () => {
  const mockVideo = { id: 1, nombre: "video.mp4" } as any;
  const gateway: any = {
    getAll: vi.fn().mockResolvedValue([mockVideo]),
    getById: vi.fn().mockResolvedValue(mockVideo),
    create: vi.fn().mockResolvedValue(mockVideo),
    update: vi.fn().mockResolvedValue(mockVideo),
    delete: vi.fn().mockResolvedValue(true),
    getByProcedimiento: vi.fn().mockResolvedValue([mockVideo]),
    deleteByProcedimiento: vi.fn().mockResolvedValue(true),
  };
  const usecase = new VideoUsecase(gateway);

  it("debe devolver todos los videos", async () => {
    await expect(usecase.getAll()).resolves.toEqual([mockVideo]);
    expect(gateway.getAll).toHaveBeenCalled();
  });

  it("debe devolver un video por id", async () => {
    await expect(usecase.getById(1)).resolves.toEqual(mockVideo);
    expect(gateway.getById).toHaveBeenCalledWith(1);
  });

  it("debe crear un video", async () => {
    await expect(usecase.create(mockVideo)).resolves.toEqual(mockVideo);
    expect(gateway.create).toHaveBeenCalledWith(mockVideo);
  });

  it("debe actualizar un video", async () => {
    await expect(usecase.update(mockVideo)).resolves.toEqual(mockVideo);
    expect(gateway.update).toHaveBeenCalledWith(mockVideo);
  });

  it("debe eliminar un video", async () => {
    await expect(usecase.delete(1)).resolves.toBe(true);
    expect(gateway.delete).toHaveBeenCalledWith(1);
  });

  it("debe devolver videos por procedimiento", async () => {
    await expect(usecase.getByProcedimiento(2)).resolves.toEqual([mockVideo]);
    expect(gateway.getByProcedimiento).toHaveBeenCalledWith(2);
  });

  it("debe eliminar videos por procedimiento", async () => {
    await expect(usecase.deleteByProcedimiento(2)).resolves.toBe(true);
    expect(gateway.deleteByProcedimiento).toHaveBeenCalledWith(2);
  });
});