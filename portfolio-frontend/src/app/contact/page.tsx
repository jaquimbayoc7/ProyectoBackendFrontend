import Layout from "@/modules/layouts/layout";
import React from "react";

export default function PageContact() {
  return (
    <Layout>
      {/* Asumimos que Layout o esta section ya tienen un fondo oscuro */}
      <section className="mt-5 flex flex-col gap-3 p-4 mx-auto w-full">
        {" "}
        {/* Añadido padding y max-width para mejor presentación */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63753.20144901825!2d-75.31367436808023!3d2.9377043592896808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b747c5a6b4009%3A0x69acf162bb25539a!2sNeiva%2C%20Huila!5e0!3m2!1ses-419!2sco!4v1747577176522!5m2!1ses-419!2sco"
          width="700"
          height="600"
          className="w-full rounded-2xl"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <form className="flex flex-col gap-4 mt-4">
          {" "}
          {/* Aumentado el gap general del form */}
          <label
            htmlFor="fullName" // Cambiado htmlFor para que coincida con el id del primer input
            className="text-white font-semibold text-2xl mb-2" // Añadido margen inferior
          >
            Contact Form
          </label>
          {/* Contenedor para los inputs de nombre y email, se harán responsivos */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="fullName" // Nombre más descriptivo
              id="fullName" // ID para el label
              placeholder="Full Name"
              className="flex-1 p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              id="email" // ID para el input (aunque no hay label directo, es buena práctica)
              placeholder="Email Address"
              className="flex-1 p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all duration-300"
            />
          </div>
          <textarea
            name="message"
            id="message" // ID para el textarea
            placeholder="Your Message"
            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all duration-300"
          />
          <div className="flex justify-end mt-2">
            {" "}
            {/* Margen superior para separar del textarea */}
            <button
              type="submit" // Especificar el tipo de botón
              className="flex items-center gap-3 text-xl text-yellow-300 bg-gradient-to-br from-neutral-700 to-neutral-800 hover:from-neutral-600 hover:to-neutral-700 py-3 px-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75"
            >
              {/* Icono opcional para el botón */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
              Send Message
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
}
