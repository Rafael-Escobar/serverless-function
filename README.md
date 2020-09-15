
# AI Homeless Squad Store


A different way to find out some important informations about our Homeless Squad Store and its products :)

## Problem description

Many customers want to have the independence to buy any time they'd like to. Thinking in that, we found out an innovative way to give them this possibility.


We're happy to show you our AI by Homeless Squad Store, which queries a Vtex Store through the AWS Lex bot and shows the responses in real-time for a user. This application should gives the possibility to make our customers more time into our webstore.

## Navigation
 - When searching for a product you want to know about, just type Enter, after a click on the special area. Once you send a request, our AI will try to help you in the best way!
 
- If our Ai didn't understand what you want, it will try to give you the best instructions to make things go well.
 

## Architecture


 ![Architecture from Application](https://media.discordapp.net/attachments/748631628665847850/755232872910028800/unknown.png) 
 
- As a user, a request should be made through our Chatbot, which sends to Amazon Lex. All request and response from our Store is handled by Amazon Lambda and then send back to the final user;
 

## Definition of done
- It is required to use Vtex Store and Amazon Services.
- The application must solve one real problem, in this case, giving responses about the products we have in Homeless Squad Store.
##### Initial Application Screen:

 ![Initial Application Screen](https://uploaddeimagens.com.br/images/002/879/524/full/Captura_de_Tela_2020-09-15_a%CC%80s_00.48.58.png?1600141869) 

##### AI Conversation Screen:

 ![AI Conversation Screen](https://uploaddeimagens.com.br/images/002/879/525/full/Captura_de_Tela_2020-09-15_a%CC%80s_00.49.12.png?1600141888) 

##### AI Real Interaction Screen:

 ![AI Real Interaction Screen](https://uploaddeimagens.com.br/images/002/879/527/full/Captura_de_Tela_2020-09-15_a%CC%80s_00.50.01.png?1600141907) 

## How it was planned

Once We've never worked together and also most of us had never worked with Amazon or ChatBots before, We decided to begin this project making the configs from amazon and coding a single file, trying to make it works at all. With all the techs (Html, Css, JavaScript) at the same file. Going slow and keep based on the documentation We were sure it would be a great challenger.

### Learning About The Envolved Technologies

We told you above, for this project We had to take the time to read the documentation and learn these new technologies. To understand the structure and configurations was not so hard, but including making all of the parts of the project have interaction themselves into the project was a big challenger. But, in the end, it has all worked.

## How it was coded

We got started configuring Amazons Account and trying to config Amazon Lambda Functions. Then, after finish that We started to connect with a simple frontend file as We found into the Amazon Documentation. At the first moment, We coded the frontend all together in just one file, to make sure all requirements would be up to. Break the only one file in more external files was the next step, the Amazon templates has no the styles as we wanted, then We make our own Layout and styles for that. After got all files working separately right, We made a couple of tests about the user's queries possibilities. It showed itself very stable.


## Ok, but how do I use it?
 It's already deployed on Netlify and you can find it out [Here](https://homeless-bot.netlify.app/)
 1. ### Clone the repository
    
    $ git clone https://github.com/Rafael-Escobar/serverless-function.git

2. ####  Open this file in yout Browser or with Live Server extension
    ```
    /frontend/index.html
    ```

3. #### To check about the Css styles check out the following file :
    ```
    /frontend/css/style.css
    ```

4. #### For see our Scripts, check out thes two files:
    ```
    /frontend/js/index.js
    /lambda/index.js
    ```

## And about the Team?
- [Antonio Augusto de Assis](https://github.com/antonio-arcanjo)
- [Claudio Lira](https://github.com/macindex)
- [Felipe Prestes](https://github.com/feprestes)
- [Gustavo Akira Uekita](#)
- [Rafael Augusto Machado Escobar](https://github.com/Rafael-Escobar)
- [Railson Rames](#)
- [Rodrigo Tavares](https://github.com/rtavaresramos)
- [Victor Lima](https://github.com/VictorLima2003)
- [Vinícius Zomer](#)
- [Washington Luiz Tavares Santos Júnior](https://github.com/wjuniori)

## And about the evaluation?

Well, this challenge really made We try our best. We spent hours learning how to do stuff in the techs we never used before and We're really into Amazon, Vtex and Team Work, it was't that hard to code this project, since Amazon documentation and Vtex Module from Hiring Coders' Bootcamp really helped the programmers.

At first, We were excited about the possibility to go to the final moment from this bootcamp and cause the time and learn curve, We assume maybe we made some mistakes on the road, but it was necessarry, cause We could see that if we have a bit more experience with these technologies, We would do great things in a bigger way into this project... Learning to code with the techs we used came almost naturally as We needed to implement things, and We're really satisfied about it.
