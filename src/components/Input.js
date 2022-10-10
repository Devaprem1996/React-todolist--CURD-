import React, { useState } from 'react'
import {Box} from '@mui/material'
import {Typography}from  '@mui/material'
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';

export const Input = () => {
    const [note, setnote] = useState("");
    const [add, setAdd] = useState([]);
    const [apiid, setApiId] = useState();
    
   
    
   
    
    const handleClick = (e) => {
        setAdd(pre => {
            return [...pre, note]
        })
        setnote("");
    };

    const handleRemove = (id) => {
        setAdd(pre => {
            return pre.filter((i, index) => {
               return index !== id
           })
        })
        
       
    }
  


    const handleEdit = (id) => {
        const selected = add.find((list, index) => { return index === id });
        setnote(selected);
        setApiId(id);
        
    }

    const handleUpdate = (e) => { 
        e.preventDefault();


        const entireProduct = [...add]
        
        const updateProduct = [note];
       
        entireProduct[apiid] = updateProduct;
        
        setAdd([...entireProduct]);

        setnote("");
        
    };

  
  
    return (
        <Box className='todo-container'>
            <div className='headerText'>
                <Typography className='text' variant='h3' >
                What's your plan today ?
                </Typography>
            </div>
            <div className='input-container'>
                <input className='input' auto type="text" onChange={(e) => {
                    setnote(e.target.value)
                }} placeholder="drop text here" value={note} ></input>
                <button className='addbtn' onClick={handleClick} >add</button>
               
                </div>  
                
                {add.map((item, idx) => {
                     return <div className='note-container' key={idx} >
                         <div className='note'>{item}</div>
                         <div className='btns'>
                         <button className='editBtn' onClick={() => { handleEdit(idx) }}> <ModeEditOutlineIcon/> </button>
                         <button className='editBtn'onClick={handleUpdate}><CheckIcon/></button>
                         <button className='editBtn' onClick={() => { handleRemove(idx) }}><DeleteIcon/></button>
                             
                            </div>
                         
                    </div>
                })}

               
              
        </Box>
            
    
  )
}
