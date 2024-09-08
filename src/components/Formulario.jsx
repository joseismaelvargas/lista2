import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { Lista } from './lista';
import{ v4 as uuidv4}from'uuid'

function Formulario() {
   
    const [tarea,setTarea]=useState("")
    const[array,setarray]=useState([])

      localStorage.setItem("tareas",JSON.stringify(array))
     const borrardesdehijo=(id)=>{
         let borrar=array.filter((element)=>element.id!==id)
         setarray(borrar)
     }
    const agregar=(e)=>{
        e.preventDefault()

         let tareas={
            tarea:tarea,
            id:uuidv4()
         }
         let tareaecha=[tareas,...array]
        setarray(tareaecha)
        limpiarform()
    }
    const input=(e)=>{

      let value=e.target.value
      setTarea(value)
    }
    console.log(array)
    const limpiarform=()=>{
        setTarea("")
    }
  return (
    <>
    <Form className='form container  d-flex' onSubmit={agregar} >
      <Form.Group className="mb-5 input" controlId="formBasicEmail" >
        
        <Form.Control type="text" placeholder="Escriba Su Tarea" value={tarea} onChange={input} />
          
      </Form.Group>

      <Button variant="primary" type="submit"className='button-form' >
          Agregar Tarea
          </Button>
    </Form>
    {/* {
        array.map((element)=>

        
            <Lista lista={element.tarea} id={element.id} borrar={borrardesdehijo}></Lista> 
        )
    } */}
   
    </>
  );
}

export default Formulario;