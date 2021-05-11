1. Introducere

Aplicația dezvoltată oferă posibilitatea utilizatorilor să caute diverse melodii după un cuvânt-cheie și să creeze o listă cu melodii pe care doresc să le asculte mai târziu pentru a tine evidența lor pentru momntele în care doresc să le caute sau să le recomande altor persoane.

2. Descriere problemă

Sunt acele momente când auzi la radio sau intr-un magazin o melodie pe care o fredonezi în cap întreaga zi, dar nu știi cum se numește. Poate ți-ai uitat căștile acasă și nu poți asculta toate recomandările youtube-ului în acea zi, așa că pentru a găsi melodia și a nu uita cine o cântă, cum se numește, ce gen este sau anul în care a apărut, o notezi în listă pentru a o căuta mai târziu. Această aplicație își propune să ajute persoanele să caute diverse melodii pe care nu le știu decât după un cuvânt-cheie si ulterior, să își creeze o listă cu acele melodii pentru a nu le uita, astfel încât ulterior să le caute pe alte platforme pentru a le asculta. Desigur, poate fi folosită și pentru a tine evidența melodiilor preferate astfel încât să vizualizezi în același loc detalii despre cântecele preferate, precum anul apariției, genul sau artistul care cântă.

3. Descriere API

La baza aplicației se află 2 API-uri. Unul este creat de mine, iar prin intermediul acestuia au fost evidențiate metodele HTTP, iar celaălalt este un API deja existent care a fost integrat în interiorul aplicației. Primul API, cel creat de mine, este folosit pentru a adăuga în listă informații legate de un cântec pe care dorești să îl asculți: titlu, cântăreț, gen, an, a șterge și a salva informațiile adăugate. Acest API are în spate o bază de date MySql numită my_db, care are în alcătuirea sa tabela Songs. Cel de-al doilea API folosit în realizarea aplicației este iTunes API . Acest API este util, deoarece oferă posibilitatea de a găsi cântece dupa un cuvânt-cheie,iar căutarea acestora se realizează prin intermediul barei de search.

4. Flux de date

Aplicația are la bază un server creat cu ajutorul Node.js și ExpressJs. Datele sunt stocate într-o bază de date MySql și pot fi accesate prin metodele HTTP (POST, GET, UPDATE, DELETE). Accesul la baza de date se realizează automat prin biblioteca Sequelize. Utilizatorul va putea adăuga o melodie, șterge și afișa toate melodiile adăugate până atunci. Atunci când utilizatorul face o cerere pe server de tip CRUD, serverul web va prelucra această cerere și va returna un conținut pe care browserul îl va interpreta și îl va afișa utilizatorului în format JSON,XML etc.

     1) Exemple de request / response
    
 ![image](https://user-images.githubusercontent.com/83112911/117675206-0968eb80-b1b5-11eb-8fdb-fd7b27c1d414.png)


     2)Metode HTTP
    
     POST
     Această metodă presupune crearea unor noi date pe server. În imaginea de mai jos, este reprezentat un request de tip POST:
  ![image](https://user-images.githubusercontent.com/83112911/117665364-6a8bc180-b1ab-11eb-9cf2-43dfa9ad4fd1.png)

  ![image](https://user-images.githubusercontent.com/83112911/117667085-36190500-b1ad-11eb-8230-143d61578c88.png)

     GET
     Metoda GET are rolul de a afișa datele de pe server. 
   ![image](https://user-images.githubusercontent.com/83112911/117666124-35cc3a00-b1ac-11eb-9ae2-e982a76dcbb5.png)
   ![image](https://user-images.githubusercontent.com/83112911/117667142-4630e480-b1ad-11eb-8ea5-44770f39cbe9.png)

     DELETE
     Metoda DELETE e folosită pentru a șterge date de pe server.
   ![image](https://user-images.githubusercontent.com/83112911/117667475-96a84200-b1ad-11eb-853c-c6a99f7c658e.png)
     Se poate observa in screenshotul de mai jos că înregistrarea cu id=3 a fost ștearsă.
   ![image](https://user-images.githubusercontent.com/83112911/117667656-c2c3c300-b1ad-11eb-8567-31bc7d8ef35b.png)
   
     3) iTunes API (Public API)
    
Serviciul utilizat de mine în cadrul aplicației este iTunes API. Acesta nu a necesitat o autentificare cu APIkey sau Oauth înainte de utilizare. Acesta este un API pe care doar se poate aplica metoda GET, arătând informații despre diverse cântece căutate după un cuvânt-cheie. API-ul utilizat de mine a avut următoarea formă: https://itunes.apple.com/search?term=cuvand_de_cautat.

5. Capturi de ecran din aplicatie

Aceasta este pagina principală a aplicației:

![image](https://user-images.githubusercontent.com/83112911/117677982-a3319800-b1b7-11eb-9638-78c6e66250f1.png)

Aici utilizatorul poate să adauge o melodie în lista proprie de melodii:

![image](https://user-images.githubusercontent.com/83112911/117679437-f35d2a00-b1b8-11eb-81d5-d6b0dd1b8891.png)

De asemenea, utilizaotrul poate să vadă lista de cântece creată anterior și să caute diverse cântece după un cuvânt-cheie:
![image](https://user-images.githubusercontent.com/83112911/117679664-256e8c00-b1b9-11eb-93dd-790b2c7b8b90.png)

Aceasta este lista de cântece creată de utilizator:

![image](https://user-images.githubusercontent.com/83112911/117680143-944be500-b1b9-11eb-9e3f-740e5e3076ca.png)

Aceasta este pagina care permite căutarea cântecelor după cuvântul-cheie:

![image](https://user-images.githubusercontent.com/83112911/117682994-4be1f680-b1bc-11eb-9ee2-0461140f93a0.png)

Odată ce apeși pe unul dintre rezultatele căutării, poți vedea informații despre cânteul respectiv astfel încât să poți adăuga în propria listă acele informații:
![image](https://user-images.githubusercontent.com/83112911/117683604-eb06ee00-b1bc-11eb-9aae-cb95a1c04641.png)

De asemenea, dacă ești interesat de mai multe cântece de la o formație care apare în căutări, poți accesa „More about the artist” si te va redirecționa către pagina oficială de la iTunes cu un playlist cu cântece ale formației respective:
![image](https://user-images.githubusercontent.com/83112911/117684279-839d6e00-b1bd-11eb-8cd3-eb5f12fb8b47.png)





