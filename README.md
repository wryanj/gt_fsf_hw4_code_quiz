# gt_fsf_hw4_code_quiz
This is the fourth homework for the gt fsf class with objective being to create a code quiz meeting specified acceptance criteria. I took some creative liberties to make the game more interesting and visually pleasing, but still ensured all grading criteria was met and acceptance criteria was satisfied. 

## Table of Contents

1.  [Deployed Application](#Deployed-Applicatoin)
2.  [Motivation](#Motivation)
3.  [Description](#Description)
4.  [Credits](#Credits)

## Deployed Application
[https://wryanj.github.io/gt_fsf_hw4_code_quiz/]

## Motivation
I did this to progress my knowledge on javascript, and the various ways to write logic, loops, variables, arrays and manipulate other elements of an HTML file.

## Description
This assignment provided no starter code, so I created my own HTML, JS, and CSS to completed it. For CSS, I used mostly bootstrap 4.5 with a few of my own classes sprinkled on top. For javascript, we used all vanilla js for this assignment by request. 

My styling was done in a way that more resembles real life online test and quizzes. I utilized radio buttons and a submit button for the quiz. 

![image](https://user-images.githubusercontent.com/72420733/104333679-87dfa600-54bf-11eb-8ed2-92a137733a78.png)

The rules of the game I added to a little, to make it more challenging. I intentionally left negative scores as a possibility as to encourage quick answers, but not too fast.

![image](https://user-images.githubusercontent.com/72420733/104333793-a180ed80-54bf-11eb-845b-9d42ea7eff22.png)


For high score storage I used local window storage. To make scoring interesting I made it such that you lose 50 if you choose wrong, but only get 25 if your right. But you have to answer fast so it adds a nice dynamic. Lastly to diversify scores (besides letting you get negative), your time remaining is added to your score at the end as bonus. So the faster you go through the quiz correctly, the higher your score. 

I also made sure to add validation through the program where applicable, including making sure buttons are disabled when appropriate, answers are submitted, and initials are entered correctly when logging high scores. 

In addition, based on the conditions that broke the countdown I had different messaging. If time expired by natural count, you got one message. If you completed before time, you got another. And if you choose incorrect and lost ten seconds as a penalty with not that amount to spare, you were notified as such:

![image](https://user-images.githubusercontent.com/72420733/104334336-34218c80-54c0-11eb-8536-4d94c0310e05.png)

This assignment also helped me understand functional programming better. In my third assignment I made one big function, but with this when I needed lots of them to be re-usable, I had to set it up with lots of global functions and variables so I could always call them again when needed. 


## Credits
I utilized some stack, w3 schools, mozilla and class notes to completed this work. The approach I took was all my own logic. 
