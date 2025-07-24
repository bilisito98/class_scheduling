import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  host: 'dpg-d1rb16muk2gs739oqg4g-a.oregon-postgres.render.com',
  port: 5432,
  user: 'root',
  password: 'eVH6lh9ZCk6GwfQflcJOoADXB7hqcRMg',
  database: 'VSCExtraClases',
  ssl: {
    rejectUnauthorized: false
  }
});

async function createTables() {
  try {
    await client.connect();
    console.log('✅ Conectado a PostgreSQL');

    // 🔧 Crear tabla Tutores
    await client.query(`
      CREATE TABLE IF NOT EXISTS "Tutores" (
        "Id" SERIAL PRIMARY KEY,
        "Nombre" TEXT NOT NULL,
        "Pais" TEXT NOT NULL,
        "Telefono" TEXT NOT NULL,
        "Correo" TEXT NOT NULL,
        "Cursos" TEXT NOT NULL
      );
    `);
    console.log('📘 Tabla "Tutores" creada ✅');

    // 🔧 Crear tabla Estudiantes
    await client.query(`
      CREATE TABLE IF NOT EXISTS "Estudiantes" (
        "Id" SERIAL PRIMARY KEY,
        "NombreEstudiante" TEXT NOT NULL,
        "Curso" TEXT NOT NULL,
        "Modulo" TEXT NOT NULL,
        "Leccion" TEXT NOT NULL,
        "IdAcudiente" TEXT NOT NULL,
        "NombreAcudiente" TEXT NOT NULL,
        "TelefonoAcudiente" TEXT NOT NULL,
        "CorreoAcudiente" TEXT NOT NULL
      );
    `);
    console.log('📘 Tabla "Estudiantes" creada ✅');

  } catch (error) {
    console.error('❌ Error creando tablas:', error.message);
  } finally {
    await client.end();
    console.log('🔌 Conexión cerrada');
  }
}

createTables();
