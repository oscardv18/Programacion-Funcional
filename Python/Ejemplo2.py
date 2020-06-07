#Escribir una función que simule una calculadora científica que permita calcular el seno, coseno, tangente, exponencial y logaritmo neperiano. La función preguntará al usuario el valor y la función a aplicar*

from math import sin, cos, tan, exp, log
 
functions = {'sin':sin, 'cos':cos, 'tan':tan, 'exp':exp, 'log':log}
result = 0

f = input('Introduce la función a aplicar (sin, cos, tan, exp, log): ')
n = int(input('Introduce un entero positivo: '))

if f == 'sin':
    
    result = sin(n)
    
    print(f"El seno es: {result}")
    
elif f == 'cos':
    
    result = cos(n)
    
    print(f"El coseno es: {result}")
    
elif f == 'tan':
    
    result = tan(n)
    
    print(f"La tangente es: {result}")
    
elif f == 'exp':
    
    result = exp(n)
    
    print(f"La Exponencial es: {result}")
    
elif f == 'log':
    
    result = log(n)
    
    print(f"El Logaritmo es: {result}")
    
else :
    print("ERROR 33-12 OPCIÓN NO ENCONTRADA")