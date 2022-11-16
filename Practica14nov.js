const PromptSync = require("prompt-sync");
const prompt = require("prompt-sync")();

//Algoritmo de Ordenamiento:
/*var arreglo = [5,2,9,6,1,8,3,7,4,10];

function Ordenamiento(arreglo) { 
    let n = arreglo.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++)
        {
            if(arreglo[j] < arreglo[min]) 
            {
                min=j; 
            }
        }
        if (min != i)
        {
            let temp = arreglo[i]; 
            arreglo[i] = arreglo[min];
            arreglo[min] = temp;      
        }
    }
    return arreglo;
}

Ordenamiento(arreglo);
console.log(arreglo);
*/

//Algoritmo MergeSort

var arr1 = [2, 11, 13];
var arr2 = [5, 7, 19];

function mergesort(izquierda, derecha) 
{
    let i = 0;
    let j = 0;
    let resultados = [];

    while (i < izquierda.length || j < derecha.length) 
    {
        if (i == izquierda.length) 
        {
            resultados.push(derecha[j]);
            j++;
        } else if (j == derecha.length || izquierda[i] <= derecha[j]) 
        {
            resultados.push(izquierda[i])
            i++;
        } else 
        {
            resultados.push(derecha[j]);
            j++;
        }
    }

    return resultados;
}

let resultado = mergesort(arr1, arr2);
console.log(resultado); 