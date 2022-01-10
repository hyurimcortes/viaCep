import { ActionType } from "../types"

const initialState = {
    dados:[],
};

const BuscaCepReducer = (state: any = initialState, action:any): any => {
    switch (action.type){       
           case ActionType.CADASTRO_CEP:
                return {
                    ...state,
                    dados: action.payload.dados
                }
            default:
                return state
    }
}

export default BuscaCepReducer