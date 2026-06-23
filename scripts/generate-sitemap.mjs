import fs from 'fs';
import path from 'path';

// Utiliza el dominio real cuando esté disponible.
const DOMAIN = 'https://jardinsecreto.netlify.app';

// Rutas estáticas de la floristería
const routes = [
  '/',
  '/catalogo',
  '/servicios',
  '/nosotros',
  '/contacto'
];

function generateSitemap() {
  const date = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  for (const route of routes) {
    const url = `${DOMAIN}${route === '/' ? '' : route}`;
    xml += `  <url>
    <loc>${url}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>
`;
  }

  xml += `</urlset>`;

  const outputPath = path.join(process.cwd(), 'dist', 'client', 'sitemap.xml');
  
  // Asegurarse de que el directorio exista (normalmente ya existe tras el build)
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(outputPath, xml);
  console.log(`✅ Sitemap generado con éxito en: ${outputPath}`);
}

generateSitemap();
