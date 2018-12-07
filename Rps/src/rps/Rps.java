/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rps;

/**
 *
 * @author tutran
 */

import java.util.Scanner;
import java.util.Random;

public class Rps {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
      Scanner reader = new Scanner(System.in);
      Random random = new Random();
      int computerScore = 0;
      int playerScore = 0;
      int counter = 0;
      
      System.out.println("Enter your name: ");
      String playerName = reader.nextLine();
      
      while(counter == 0) {
        int computerChoice = 1 + random.nextInt (3);
        
        System.out.println("Welcome " + playerName + "!" + " Enter 1 for rock, 2 for paper, 3 for scissors.");
        int playerChoice = reader.nextInt();
        
        if (playerChoice == computerChoice) {
            System.out.println("It is a tie!");
        } else if (playerChoice == 1) {
            if (computerChoice == 2) {
                System.out.println("Computer selected paper.");
                System.out.println("Sorry " + playerName + ", you lost this round.");
                computerScore++;
                System.out.println("Computer: " + computerScore);
                System.out.println(playerName + ": " + playerScore);
                
            } else if (computerChoice == 3) {
                System.out.println("Computer selected scissors.");
                System.out.println("Well done " + playerName + " , you won this round.");
                playerScore++;
                System.out.println("Computer: " + computerScore);
                System.out.println(playerName + ": " + playerScore);
            }
            
            
        } else if (playerChoice == 2) {
            if (computerChoice == 1) {
                System.out.println("Computer selected rock");
                System.out.println("Well done " + playerName + " , you won this round.");
                playerScore++;
                System.out.println("Computer: " + computerScore);
                System.out.println(playerName + ": " + playerScore);
                
            } else if (computerChoice == 3) {
                System.out.println("Computer selected scissors.");
                System.out.println("Sorry " + playerName + ", you lost this round.");
                computerScore++;
                System.out.println("Computer: " + computerScore);
                System.out.println(playerName + ": " + playerScore);
            }
            
            
        } else if (playerChoice == 3) {
            if (computerChoice == 1) {
                System.out.println("Computer selected rock.");
                System.out.println("Sorry " + playerName + ", you lost this round.");
                computerScore++;
                System.out.println("Computer: " + computerScore);
                System.out.println(playerName + ": " + playerScore);
                
            } else if (computerChoice == 2) {
                System.out.println("Computer selected paper.");
                System.out.println("Well done " + playerName + " , you won this round.");
                playerScore++;
                System.out.println("Computer: " + computerScore);
                System.out.println(playerName + ": " + playerScore);
            }
          }
      }
      
    }
    
}
