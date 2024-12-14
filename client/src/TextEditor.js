
import  { useCallback, useEffect, useRef } from 'react'
import Quill from 'quill'
import "quill/dist/quill.snow.css"
import{io} from 'socket.io-client'


const TOOLBAR_OPTIONS=[
  [{ 'color': [] }],          
  [{ 'font': [] }],
  [{ 'align': [] }],
  [{ 'indent': '-1'}, { 'indent': '+1' }],   

  [{ 'size': ['small', false, 'large', 'huge'] }], 
  ['bold', 'italic', 'underline', 'strike'],  
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],     
  ['link', 'image', 'video'],

                
 
  [{ 'script': 'sub'}, { 'script': 'super' }],     
        
                      
                                           
];


export default function TextEditor() {
  useEffect(()=>{
   const socket= io("http://localhost:3001")
   return()=>{
    socket.disconnect()
   }
  },[])
    const wrapperRef=useCallback(wrapper=>{
        if (wrapper==null)return

        wrapper.innerHTML=""
        const editor=document.createElement("div")
        wrapper.append(editor)
        new Quill(editor,{theme:"snow",modules:{toolbar:TOOLBAR_OPTIONS}})
        //dsdsds
       
    },[])
  return (
    <div className="container" ref={wrapperRef}></div>
  )
}
