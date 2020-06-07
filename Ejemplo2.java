/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.util.Scanner;

/**
 *
 * @author oscardv18
 */
public class Ejemplo2 {
    
    public static void main(String[] args) {
        
        int n1, n2 = 0;
        int suma = 0;
        
        Scanner entrada = new Scanner(System.in);
        
        System.out.println("Ingrese el primer número a sumar: ");
        n1 = entrada.nextInt();
        
        System.out.println("Ingrese el segundo número a sumar: ");
        n2 = entrada.nextInt();
        
        suma = n1 + n2;
        
        System.out.println("La Suma de los dos números es: " + suma);
        
    }
    
}