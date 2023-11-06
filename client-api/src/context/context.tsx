import React, { createContext, useContext, useState, ReactNode } from "react";
import { AxiosError } from "axios";
import { GetData } from "../services/request";

interface MyContextType {
  actualId: string;
  data: any | null;
  recipeData: any | null;
  error: AxiosError | null;
  recipeError: AxiosError | null;
  isLoading: boolean;
  recipeIsLoading: boolean;
  refetchData: Promise<void>;
  recipeRefetchData: Promise<void>;
  handleClose: () => void;
  handleOpen: () => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;

  setActualId: React.Dispatch<React.SetStateAction<string>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode; // Use ReactNode for children
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [actualId, setActualId] = useState<string>("");

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  //Requisição dos posts aqui

  // trunk-ignore(eslint/@typescript-eslint/no-explicit-any)
  const { data, error, isLoading, refetchData } = GetData<any>({
    url: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka`,
  });

  const {
    data: recipeData,
    error: recipeError,
    isLoading: recipeIsLoading,
    refetchData: recipeRefetchData,
  } = GetData<any>({
    url: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${actualId}`,
  });

  return (
    <MyContext.Provider
      value={{
        actualId,
        setActualId,
        handleClose,
        handleOpen,
        open,
        setOpen,
        data,
        error,
        isLoading,
        refetchData,
        recipeData,
        recipeError,
        recipeIsLoading,
        recipeRefetchData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};
