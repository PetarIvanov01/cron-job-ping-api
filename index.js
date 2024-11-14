pingApi();
async function pingApi() {
  try {
    const response = await fetch(
      "https://drizzleexpress-api.onrender.com/health"
    );
    const status = await response.json();
    const timestamp = new Date().toISOString();
    console.log({
      status,
      timestamp,
    });
  } catch (error) {
    console.error("Error fetching server health:", error);
  }
}
