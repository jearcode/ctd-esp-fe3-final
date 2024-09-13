import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect} from "react";

const Form = () => {

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [messageDone, setMessageDone] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [messageUser, setMessageUser] = useState({ name: false, email: false });
  const [messageShow, setMessageShow] = useState({ name: false, email: false });

  const emailValidateByRegex = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regex.test(email);
  };

  const isNameValid = (name) => name.trim().length >= 5;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setMessageShow((prevMessageShow) => ({
      ...prevMessageShow,
      [name]: true,
    }));
  };

  useEffect(() => {
    const isFormValid = isNameValid(formData.name) && emailValidateByRegex(formData.email);
    setButtonDisabled(!isFormValid);

    setMessageUser({      
      name: !isNameValid(formData.name),
      email: !emailValidateByRegex(formData.email),
    });
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageDone(true);
    console.log(`Datos del usuario:\nNombre: ${formData.name}\nEmail: ${formData.email} `);
    
    setTimeout(() => {
      setMessageDone(false);
      setFormData({ name: "", email: "" });
      setMessageShow({ name: false, email: false });
    }, 4000);
  };

  return (
    <div className="flex justify-center items-center p-4">
      {messageDone ? (
        <div className="max-w-md mx-auto bg-white dark:bg-zinc-900 text-black dark:text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">
            ¡Has sido registrado con éxito!
          </h3>
          <p className="text-zinc-900 dark:text-zinc-100">
            ¡Gracias por registrarte, <span className="font-semibold">{formData.name}</span>!
            te contáctaremos cuanto antes vía email.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm min-w-[360px] mx-auto bg-white dark:bg-zinc-900 text-black dark:text-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">¡Contáctanos!</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu nombre"
            />
            <div className="h-6 mt-1">
              {messageShow.name && (
                <p className="text-sm">
                  {messageUser.name ? (
                    <FontAwesomeIcon className="w-[15px] text-red-500" icon={faX} />
                  ) : (
                    <FontAwesomeIcon className="w-[15px] text-green-500" icon={faCheck} />
                  )}
                  <span className="ml-2">El nombre debe tener más de 5 caracteres</span>
                </p>
              )}
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu email"
            />
            <div className="h-6 mt-1">
              {messageShow.email && (
                <p className="text-sm">
                  {messageUser.email ? (
                    <FontAwesomeIcon className="w-[15px] text-red-500" icon={faX} />
                  ) : (
                    <FontAwesomeIcon className="w-[15px] text-green-500" icon={faCheck} />
                  )}
                  <span className="ml-2">El correo electrónico debe ser válido</span>
                </p>
              )}
            </div>
          </div>
          <button
            disabled={buttonDisabled}
            type="submit"
            className={`w-full ${buttonDisabled ? 'bg-blue-300 dark:bg-blue-950' : 'bg-blue-500 hover:bg-blue-600'} text-white font-bold py-2 px-4 rounded-lg transition duration-300`}
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
