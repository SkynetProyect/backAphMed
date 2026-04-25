import { AppDataSource } from "./src/infrastructure/adapter/postgres/DataSource";

AppDataSource.initialize()
    .then(() => {
        console.log("🔥 DB conectada correctamente");
    })
    .catch((error) => {
        console.error("❌ Error conectando DB:", error);
    });