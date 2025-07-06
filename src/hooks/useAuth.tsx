import axios from "axios"
import type { AxiosPromise } from "axios"
import type { AgroData } from "../interface/AgroData";


const API_URL = 'https://localhost:3000'; 

const fetchData = async (): AxiosPromise<AgroData[]> => {
  try {
    const response = axios.get(API_URL + '/agro-data'); ;
    return response;
  } catch (error) {
    throw error;
  }
}


export function useAgroData() {
  // Simulando dados que viriam de uma API
  const query = fetchData();
  query.then(response => {
    console.log('Dados recebidos:', response.data);
  }).catch(error => {
    console.error('Erro ao buscar dados:', error);
  });

  return query;
}