import React, { useState } from 'react'
import {MdAdd,MdClose} from "react-icons/md";

const TagInput = ({tags,setTags}) => {

    const[inputValue,setInputValue]=useState("");

    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
    }
    
    const addNewTag=()=>{
        if(inputValue.trim()!==""){ // this code updates the tags coming from input and clears out any white space before anf sfter the string that's why trim function is used now if the corrected string is not empty then
            setTags([...tags,inputValue.trim()]); // the tags array is updated with all the previous elements and new element inputvalue.trim()
            setInputValue(""); //then input field is set to null to add more new tags
        }
    }

    const handleKeyDown=(e)=>{
       if(e.key==="Enter"){
        addNewTag();
       }
    }

    const handleRemoveTag=(tagToRemove)=>{
        setTags(tags.filter((tag)=> tag!=tagToRemove)); // this function creates a new tags array where there are all previous array elements except the one we have to remove
    }

  return (
    <div>

       {tags?.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-2">
           {tags.map((tag,index)=>(
              <span key={index} className="flex items-center gap-2 text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded">
                # {tag}
                <button onClick={()=>{
                     handleRemoveTag(tag);
                }}
                >
                   <MdClose />
                </button>
              </span>
           ))}
       </div>)}

        <div className="flex items-center gap-3 mt-4">
            <input 
            type="text" 
            value={inputValue}
            className="text-sm bg-transparent border px-3 py-2 rounded outline-none" 
            placeholder="Add Tags" 
            onChange={handleInputChange}    
            onKeyDown={handleKeyDown}
            />
            <button className="w-8 h-8 flex items-center justify-center rounded border border-blue-700 hover:bg-blue-700"
              onClick={()=>{
                addNewTag();
            }}
            >
                <MdAdd className="text-2xl text-blue-700 hover:text-white" />
            </button>
        </div>
    </div>
  )
}

export default TagInput