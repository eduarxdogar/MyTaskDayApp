import { Component, signal } from '@angular/core';

import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola';
  tasks  = signal ([
    'Instalar el angular cli',
    'crear proyecto',
    'renderiza un proyecto'

  ]);
  name =  signal ('nicolas'); 
  age = 19;
  disabled = true;
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  person = signal ({
    nombre: 'nicolas',
    age : 5,
    avatar :'https://www.w3schools.com/howto/img_avatar.png'

  });

  colorCtl = new  FormControl();
  widthCtrl = new FormControl(50,{
    nonNullable:true, 
  });
  nameCtrl = new FormControl('nicolas',{
    nonNullable:true, 
    validators:[
      Validators.required,
      Validators.minLength(3)
    ]
  });


  constructor() { 
    this.colorCtl.valueChanges.subscribe(value => {
      console.log(value);
    })
  }




  clickHandler(){
    alert('hola')
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);

  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
  changeAge(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState =>{
      return{
      ...prevState,
      age :  parseInt(newValue, 10)
      }
    });

    

  }
  changeName(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState =>{
      return{
      ...prevState,
      nombre : (newValue)
      }
    });

}

}
