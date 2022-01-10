import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './services/reducers';
import { bindActionCreators } from 'redux';
import { bucaCepactions } from './services';
import { useEffect, useState } from 'react';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import InputMask from 'react-input-mask';

type FormData = {
  cep:string
}

const schema = yup.object({
  cep: yup.string().required('Número do cep é obrigatório')
}).required();

function App() {
   const dispatch = useDispatch();
   const [ address, setAddress ] = useState();

  const { register, handleSubmit, formState:{ errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const {  buscarCep } = bindActionCreators(bucaCepactions, dispatch);
  const state = useSelector((state: RootState) => state.buscacep);

  const onSubmit = (data: any) => {
    if(state.dados !== undefined && state.dados.length === 0){
      if(state.dados.cep !== data.cep){
        buscarCep(data.cep)
      }
    }
  }
  
  useEffect(()=>{
    setAddress(state.dados)
  },[state.dados])


  console.log(address)
  return (
    <div className="App">
      <header className="App-header">
       <p>Buscar Cep</p>
       <form onSubmit={handleSubmit(onSubmit)}>
         <InputMask mask={'*****-***'}  placeholder='Cep' type='text'  { ...register('cep') }/>
         <button type='submit'>Enviar</button>
       </form>
       <p></p>
      </header>
    </div>
  );
}

export default App;
