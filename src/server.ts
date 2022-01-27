import express from "express";
import swaggerUI from "swagger-ui-express";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();
const port = 3333;
app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(router);

app.listen(port, () => `Servidor executando na porta ${port}`);
