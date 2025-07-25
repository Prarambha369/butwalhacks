export default async function handler(req, res) {
  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
  const BASE_ID = process.env.AIRTABLE_BASE_ID || "your_base_id";
  const TABLE_NAME = "Workshops";

  const r = await fetch(
    `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`,
    {
      headers: { Authorization: `Bearer ${AIRTABLE_API_KEY}` },
    },
  );
  const data = await r.json();
  res.status(200).json(data);
}
