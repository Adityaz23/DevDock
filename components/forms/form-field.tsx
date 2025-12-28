import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
interface FormFiledProps{
    label:string;
    id:string;
    name:string;
    placeholer:string;
    required:boolean;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}
export default function FormField({label,id,placeholder,required,onChange,name}){
    return(
        <div className="space-y-2">
            <Label htmlFor={id}>{label}</Label>
            <Input id={id}
            name={name}
            placeholder={placeholder}
            required
            onChange={onChange}/>
        </div>
    )
}