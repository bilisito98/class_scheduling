/* eslint-env node */
import express from 'express';
import pkg from 'pg';
import { ensureAuth } from '../middleware/authMiddleware.js';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pkg;
const router = express.Router();

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  ssl: { rejectUnauthorized: false }
});

router.get('/', ensureAuth, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "Estudiantes" ORDER BY "Id"');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
