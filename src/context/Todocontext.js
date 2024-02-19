import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const Todocontext=createContext({
   todos:[
      {
      id:1,
      Todoname:"first Todo",
      completed:false
      }
   ],
   addtodo:(todo)=>{},
   updatetodo:(id,todo)=>{},
   deletetodo:(id)=>{},
   togelcomplete:(id)=>{}
});

export const Todoprovider=Todocontext.Provider;

export function useTodo(){
   return useContext(Todocontext);
}