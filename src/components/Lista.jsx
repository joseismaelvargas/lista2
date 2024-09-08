import ListGroup from 'react-bootstrap/ListGroup';



export const Lista=({lista,id,borrar})=>{

    
    return(
        <>
        <div>
             <ListGroup key={id} className='lista container d-flex' >
     <ListGroup.Item className='d-flex justify-content-around '><li>{lista}</li> <button className='button btn btn-danger' onClick={()=>borrar(id)}>Borrar Tarea</button></ListGroup.Item>
    </ListGroup>
    
        </div>
   
        </>
    )
}