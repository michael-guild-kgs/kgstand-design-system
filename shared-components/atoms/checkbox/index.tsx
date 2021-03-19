import React from 'react'
import { InputCheckbox, LabelCheckbox } from './checkbox'

interface Checkbox {
    label: string;
  }


export const Checkbox = ({label}) => {
    return (

            <LabelCheckbox> 
                <InputCheckbox /> {label} 
            </LabelCheckbox> 
      
    )
}


