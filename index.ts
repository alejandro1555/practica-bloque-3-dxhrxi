// En esta práctica debéis crear una interfaz con el nombre "UserData" en el archivo "user-data.ts". En esta interfaz, debéis añadir las propiedades "name", "age" y "phone" con los tipos cadena de texto, número y número respectivamente. Tenéis que exportar esta interfaz.
// En el documento "index.ts" debéis importar la interfaz que habéis creado en el punto anterior. Cread una variable llamada "user" que sea del tipo de la interfaz que habéis importado.
// Luego, debéis crear una función llamada "getData" que reciba un tipo genérico, un parámetro del tipo genérico y que saque por consola ese dato.
// Para terminar, asignad un objeto literal (sin clase) a la variable "user" (con los datos que queráis pero que no dé erroes de tipo) y luego realizad dos llamadas a "getData". La primera llamada debe recibir por parámetros el valor de la propiedad "name" del usuario y la segunda el valor de "phone".
// OPCIONAL: Dentro de "getData" añadid un condicional con una guarda para diferenciar cuando reciba un tipo "number" y sacar por consola mensajes distintos para las dos llamadas anteriormente mencionadas.
// Ánimo que ya lo tenéis!

//2. Importamos interfaz del archivo usar-data
import {UserData} from "./user-data"; 

//2. Creamos variable del tipo de la interfaz
let user:UserData; 

//3. Funcion generica que recibe parametro generico y muestra por consola ese dato
function getData<T>(arg: T) : void{
  //Si es un numero
  if(isNumber(arg))
    console.log("El numero es " + arg)
  else 
  console.log("El nombre es " + arg)
}
//4. Asignar objeto literal a una variable
user = {name:'alejandro',
  age:21,
  phone:666777888 } 

//4. Realizar las mmadas a  getData
let llamada1= getData<string>(user.name);
let llamada2= getData<number>(user.phone);

//5. Guarda para diferenciar cuando entra por parametro un numero del tipo number
function isNumber<T>(arg: T) : boolean {
  if(typeof(arg)==typeof(1))
  return true

}

