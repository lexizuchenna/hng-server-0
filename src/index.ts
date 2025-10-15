import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.use("/me", async (req: Request, res: Response) => {
  try {
    const resp = await fetch("https://catfact.ninja/fact");

    if (resp.ok) {
      const data = await resp.json();

      return res.status(200).json({
        status: "success",
        user: {
          email: process.env.EMAIL,
          name: process.env.NAME,
          stack: "Nodejs/Express",
        },
        timestamp: new Date().toISOString(),
        fact: data.fact,
      });
    }

    return res.status(400).json({
      message: "Something went wrong with cat API, please refresh",
      status: "failed",
      error: await resp.json(),
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal sever error",
      status: "failed",
      error: error,
    });
  }
});

app.use("/", (req: Request, res: Response) => {
  try {
    return res.status(200).json("Hello World!");
  } catch (error) {
    return res.status(500).json({
      message: "Internal sever error",
      status: "failed",
      error: error,
    });
  }
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
