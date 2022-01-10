import { Dispatch } from "redux"
import { ActionType } from "../types"

import api from '../api';



export const buscarCep = (cep:any) => {
    return async (dispatch:Dispatch) => {

        const dadosCadastrais = {
            cep,
        }
    
         
        try{
            const data = await api.post("address", dadosCadastrais);   

     
            dispatch({
                type: ActionType.CADASTRO_CEP,
                payload: {
                    dados: data.data.dados,
                }
            })
     
        }catch(e){
            const data = await {
                error:true,
                message:'Usuário ja cadastrado'
            };   
     
            dispatch({
                type: ActionType.CADASTRO_CEP,
                payload: {
                    dados: data,
                }
            })      
        }
      
     

    }
}
