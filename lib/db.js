// Database utilities for Postgres (form submissions)
import { Pool } from 'pg';

let pool;

export function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.POSTGRES_URL || 'postgresql://localhost:5432/flowitec_submissions',
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    });
  }
  return pool;
}

export async function initDatabase() {
  try {
    const client = await getPool().connect();
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS submissions (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          type VARCHAR(50) NOT NULL,
          payload JSONB NOT NULL,
          attachments JSONB,
          status VARCHAR(20) DEFAULT 'new',
          created_at TIMESTAMP DEFAULT NOW()
        );
      `);
      
      await client.query(`
        CREATE INDEX IF NOT EXISTS idx_submissions_type ON submissions(type);
        CREATE INDEX IF NOT EXISTS idx_submissions_created ON submissions(created_at);
      `);
      console.log('✅ Database initialized successfully');
    } finally {
      client.release();
    }
  } catch (error) {
    console.warn('⚠️ Database initialization skipped (Postgres not available):', error.message);
    // Non-critical - forms will still work without database
  }
}

export async function saveSubmission(type, payload, attachments = []) {
  try {
    const client = await getPool().connect();
    try {
      const result = await client.query(
        'INSERT INTO submissions (type, payload, attachments) VALUES ($1, $2, $3) RETURNING id',
        [type, JSON.stringify(payload), JSON.stringify(attachments)]
      );
      return result.rows[0];
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Database save error (non-critical):', error.message);
    // Return mock ID if database is unavailable
    return { id: `mock-${Date.now()}` };
  }
}