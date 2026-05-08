import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import Websocket from "ws";
dotenv.config();

const cliente = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string,
  {
    realtime: {
      transport: Websocket as any,
    },
  }
);

export async function uploadFile(file: Buffer,filePath: string
): Promise<string | null> {
  const { error } = await cliente.storage
    .from(process.env.SUPABASE_BUCKET as string)
    .upload(filePath, file);

  if (error) {
    console.error("Error uploading file:", error);
    return null;
  }

  const { data } = cliente.storage
    .from(process.env.SUPABASE_BUCKET as string)
    .getPublicUrl(filePath);

  return data.publicUrl;
}


export async function deleteFile(objectPaths: string[]): Promise<boolean> {
  const { error } = await cliente.storage
    .from(process.env.SUPABASE_BUCKET as string)
    .remove(objectPaths);

  if (error) {
    console.error("Error deleting file:", error);
    return false;
  }

  return true;
}