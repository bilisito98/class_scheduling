import express from 'express';
import cors from 'cors';
import pkg from 'pg';

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: 'dpg-d1rb16muk2gs739oqg4g-a.oregon-postgres.render.com',
  port: 5432,
  user: 'root',
  password: 'eVH6lh9ZCk6GwfQflcJOoADXB7hqcRMg',
  database: 'VSCExtraClases',
  ssl: { rejectUnauthorized: false }
});

app.get('/estudiantes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "Estudiantes" ORDER BY "Id"');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
