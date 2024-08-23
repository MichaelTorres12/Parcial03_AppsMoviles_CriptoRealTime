# Parcial03_AppsMoviles_CriptoRealTime

## Descripción
**Parcial03_AppsMoviles_CriptoRealTime** es una aplicación web en tiempo real que muestra datos y precios actualizados de criptomonedas. La desarrollé como parte del **Módulo de Aplicaciones Móviles Avanzadas** en la **Universidad Francisco Gavidia**. Mi nombre es **Michael Fernando Torres Callejas**, estudiante de esta institución, con el carnet **TC100220**.

Decidí crear esta aplicación para facilitar el seguimiento de las fluctuaciones del mercado de criptomonedas de manera rápida y eficiente. La aplicación está diseñada para ser ligera, rápida y fácil de usar, permitiendo a los usuarios estar siempre al tanto de los movimientos más recientes en el mundo de las criptomonedas.

## Tecnologías Utilizadas
- **Frontend**:
  - **React** con **Next.js**: Decidí usar esta combinación por su eficiencia en la creación de aplicaciones web modernas y de alto rendimiento.
  - **TailwindCSS**: Opté por TailwindCSS debido a su flexibilidad para diseñar y estilizar la interfaz de usuario.
  - **JavaScript**: Utilicé JavaScript para la lógica de la aplicación en el frontend.

- **Backend**:
  - **Node.js** con **Express.js**: Elegí Node.js y Express.js para manejar las solicitudes y servir el contenido dinámico de manera eficiente.
  - **Axios**: Axios fue mi elección para realizar las solicitudes HTTP a la API de criptomonedas debido a su simplicidad y eficacia.

- **Otros**:
  - **Git**: Para el control de versiones, utilicé Git para mantener un historial claro de los cambios realizados durante el desarrollo del proyecto.

## Funcionalidades
- Consulta de precios de criptomonedas en tiempo real.
- Filtrado y búsqueda de criptomonedas específicas.
- Decidí implementar una actualización automática de los datos cada minuto para asegurar que la información mostrada esté siempre al día.

## API Utilizada
- **CoinRanking API**: Después de investigar varias opciones, decidí utilizar esta API para obtener los datos en tiempo real de las criptomonedas. Ofrece información precisa y actualizada sobre los precios y movimientos del mercado.

## Frecuencia de Actualización
- Los datos se actualizan automáticamente cada **10 segundos** para garantizar que la información sea siempre la más reciente y guardando en una variable el valor anterior para comparar.

## Cómo Ejecutar el Proyecto

### Requisitos Previos
- Node.js y npm instalados en tu máquina.

### Instalación
1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/MichaelTorres12/Parcial03_AppsMoviles_CriptoRealTime.git
