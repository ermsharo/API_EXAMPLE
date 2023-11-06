
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AxiosError } from 'axios';
import { GetData } from "../services/request";

//Quantidade por pagina
//Pagina
//Requisição data, loading error é refresh
//Lingua
//Navegador
//Filtros
//EasyApply
//Actual_ID


interface MyContextType {
  actualId: string;
  data: any | null;
  error: AxiosError | null;
  isLoading: boolean;
  refetchData: Promise<void>;


  setActualId: React.Dispatch<React.SetStateAction<string>>;

}

const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode; // Use ReactNode for children
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [actualId, setActualId] = useState<string>("");




  //Requisição dos posts aqui

  

  // trunk-ignore(eslint/@typescript-eslint/no-explicit-any)
  const { data, error, isLoading, refetchData } = GetData<any>({
    url: `http://127.0.0.1:8080/cards?page=8&per_page=1`,
  });


  return (
    <MyContext.Provider value={{
      actualId,
      setActualId,

      data, error, isLoading, refetchData

    }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }

  return context;
};
