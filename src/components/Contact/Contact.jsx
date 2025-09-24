import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: '', email: '', telefono: '', empresa: '', comentarios: '', privacidad: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-10 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">Contacto</h1>
      <p className="text-lg mb-10 text-gray-700 dark:text-gray-300">
        ¡Envíanos tus datos y nos pondremos en contacto contigo!
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6 text-black dark:text-white">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="nombre">Nombre</label>
          <input type="text" name="nombre" id="nombre" value={formData.nombre} onChange={handleChange} className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400" required />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400" required />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="telefono">Teléfono</label>
          <input type="tel" name="telefono" id="telefono" value={formData.telefono} onChange={handleChange} className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400" required />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="empresa">Empresa (Solo si tiene)</label>
          <input type="text" name="empresa" id="empresa" value={formData.empresa} onChange={handleChange} className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400" />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="comentarios">Comentarios</label>
          <textarea name="comentarios" id="comentarios" value={formData.comentarios} onChange={handleChange} rows="4" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"></textarea>
        </div>

        <div className="flex items-center">
          <input type="checkbox" name="privacidad" id="privacidad" checked={formData.privacidad} onChange={handleChange} className="mr-2" required />
          <label className="text-gray-700 dark:text-gray-300" htmlFor="privacidad">Acepto la política de privacidad</label>
        </div>

        <button type="submit" className="w-full p-3 text-white bg-black dark:bg-gray-700 rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">
          Enviar
        </button>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
          Al enviar este formulario, aceptas que el equipo de LP se pondrá en contacto contigo dentro de un plazo de hasta 60 días. Nos comprometemos a responder lo antes posible y a mantener la confidencialidad de tus datos personales.
        </p>
      </form>
    </div>
  );
}
