# GuitarLa-Tienda-Virtual

GuitarLA es una plataforma de e-commerce que simula la venta de instrumentos musicales. Los usuarios pueden explorar la colección disponible, añadir artículos a un carrito de compras persistente, gestionar cantidades unitarias respetando reglas comerciales específicas y calcular costes consolidados de manera automatizada. El comportamiento y la lógica del carrito de compras están encapsulados en un Custom Hook modular (useCart), el cual gestiona la lectura y escritura en almacenamiento local.

# Características Claves
- Carrito en cabecera: Componente flotante que detalla los artículos seleccionados, cantidades y subtotales en tiempo real.
- Validación de negocio: Restricciones en las cantidades seleccionables por producto (mínimo de 1 y máximo de 5 unidades).
- Estado derivado y optimización: Cálculo de totales y subtotal del carrito optimizados mediante el hook useMemo.
- Persistencia automatizada: Sincronización transparente de la cesta de la compra con LocalStorage.

# Stack Tecnológico
- Frontend: React 19, TypeScript.
- Estilos: Tailwind CSS v4.
- Herramientas de Construcción: Vite.

# Valor Técnico Demostrado
- Desarrollo modular estructurado en componentes de presentación independientes y reutilizables.
- Implementación de flujos de datos en React empleando hooks personalizados para desacoplar el estado comercial de la interfaz.
- Uso de técnicas de optimización mediante el almacenamiento en caché de valores derivados con useMemo.
