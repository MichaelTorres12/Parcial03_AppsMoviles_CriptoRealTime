import './globals.css';

export const metadata = {
  title: 'SportsParcial03',
  description: 'Aplicación de estadísticas de criptomonedas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
