const express = require("express");
const { getCityFromIP, getTemperatureFromCity } = require("./utils");
require("dotenv").config();

const app = express();

app.get("/api/hello", async (req, res) => {
  try {
    const name = req.query.visitor_name || "Stranger";
    const ipAddresses =
      process.env.MODE === "dev"
        ? "197.211.59.15, 10.203.33.163, 10.204.46.38"
        : req.headers["x-forwarded-for"];

    const ipAddress = ipAddresses ? ipAddresses.split(", ")[0] : null;

    if (!ipAddress) {
      return res.status(400).json({ error: "Unable to determine IP address" });
    }

    const city = await getCityFromIP(ipAddress);
    const temperatureData = await getTemperatureFromCity(city);
    const tempCelsius = Math.round(temperatureData.data.current.temp_c);

    return res.json({
      client_ip: ipAddress,
      location: city,
      greeting: `Hello, ${name}!, the temperature is ${tempCelsius} degrees Celsius in ${city}`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
