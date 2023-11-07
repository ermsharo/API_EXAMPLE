import { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

interface UseAxiosProps<T> {
  url: string;
  data?: T;
}

interface UseAxiosState<T> {
  data: T | null;
  error: AxiosError<T> | null;
  isLoading: boolean;
  refetchData: any;
}

export const GetData = <T>({ url }: UseAxiosProps<T>): UseAxiosState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError<T> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response: AxiosResponse<T> = await axios.get(url);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error as AxiosError<T>);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  useEffect(() => {
    setIsLoading(true);
  }, [url]);

  const refetchData = (): void => {
    fetchData();
  };

  return { data, error, isLoading, refetchData };
};

export const PostData = async (body: any, url: string): Promise<boolean> => {
  try {
    const response: AxiosResponse<T> = await axios.post(url, body);
  } catch (error) {
    return false;
  }

  return true;
};

export const PutData = async (body: any, url: string): Promise<boolean> => {
  try {
    const response: AxiosResponse<T> = await axios.put(url, body);
  } catch (error) {
    return false;
  }

  return true;
};

export const DeleteData = async (url: string): Promise<boolean> => {
  try {
    const response: AxiosResponse<T> = await axios.delete(url);
  } catch (error) {
    return false;
  }

  return true;
};
