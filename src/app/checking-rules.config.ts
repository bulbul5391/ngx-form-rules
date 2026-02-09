import { FormRule } from '../../dist/ngx-form-rules';

export const RULES: FormRule[] = [
    { 
      trigger: 'valueA', 
      onValue: true, 
      disable: ['valueC'],
      enable: ['valueB'] 
    },
    { 
      trigger: 'valueA', 
      onValue: false, 
      disable: ['valueB'], 
      enable: [] 
    }    
];