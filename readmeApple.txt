1. Vai nella cartella del progetto
Se sei in IntelliJ, apri il terminale integrato (in basso) o apri il Terminale di macOS e digita:
cd /percorso/della/cartella/BeingDigital

3. Esegui la build con Maven wrapper

./mvnw clean package
Questo compilerà il progetto e creerà il file BeingDigital-1.0.jar dentro target/.

4. Avvia l’applicazione Spring Boot
Una volta finita la build, lancia l’app così:

java -jar target/BeingDigital-1.0.jar –spring.datasource.password="<giusy2001>" –spring.datasource.username="<root> -spring.datasource.url=jdbc:mysql://localhost:3306/be_digital_db"
⚠️ Nota bene:
Devi sostituire <username_database> e <password_database> con le credenziali reali del tuo database.
I due -- devono essere doppi trattini (non uno solo, e non “–” tipografico).

5. Apri il browser
Vai su:
http://localhost:8080
e l’app dovrebbe essere attiva 🚀.
