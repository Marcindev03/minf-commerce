import express from "express";
import morgan from "morgan";
import { globalHandler } from "./helpers/globalHandler";
import { SupportedMethods } from "./config/general";
import { transformUrlParamsToObject } from "./helpers";
import { omit } from "lodash";

const app = express();
const port = 4040;

app.use(express.json());
app.use(morgan("common"));

app.get("*", (req, res) => {
  return res.json({
    message: "Welcome to minfcommerce baselinker integration server",
  });
});

app.post("/baselinker", (req, res) => {
  let requestBody = "";

  req.on("data", (chunk) => {
    requestBody += chunk.toString();
  });

  req.on("end", () => {
    const urlParams = new URLSearchParams(requestBody);
    const params = transformUrlParamsToObject(urlParams);

    const method = urlParams.get("action") as SupportedMethods;

    return globalHandler(req, res, method, omit(params, ["action", "bl_pass"]));
  });
});

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});
