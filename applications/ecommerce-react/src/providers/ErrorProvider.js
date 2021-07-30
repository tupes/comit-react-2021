import { createContext, useState } from "react";

export const ErrorContext = createContext();

export default function ErrorProvider({ children }) {
  const [error, setError] = useState(null);

  const setDataLoadingError = () => {
    const errorMessage = "Unable to load data. Please try again later";
    console.log(errorMessage);

    setError(errorMessage);
  };

  const setCartLoadingError = () => {
    const errorMessage =
      "Unable to load user's cart data. Please try again later";
    console.log(errorMessage);

    setError(errorMessage);
  };

  const setCartUpdateError = () => {
    const errorMessage =
      "Unable to update user's cart data. Please try again later";
    console.log(errorMessage);

    setError(errorMessage);
  };

  return (
    <ErrorContext.Provider
      value={{
        error,
        setError,
        setDataLoadingError,
        setCartLoadingError,
        setCartUpdateError,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
}
