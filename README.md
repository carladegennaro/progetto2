¨SUPSI 2026  
Corso d’interaction design, CV429.01  
Docenti: A. Gysin, G. Profeta  

Progetto 1: La conquista dello spazio

# Nasa 70
Autore: Carla De Gennaro \
[Nasa 70](https://carladegennaro.github.io/progetto2/index)


## Introduzione e tema
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat ac felis donec. Nisi est sit amet facilisis magna etiam tempor. Nisl nisi scelerisque eu ultrices vitae. Id aliquet lectus proin nibh nisl. Urna nec tincidunt praesent semper feugiat nibh. Imperdiet dui accumsan sit amet nulla facilisi morbi. Aliquet enim tortor at auctor urna nunc. Id cursus metus aliquam eleifend mi. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Odio morbi quis commodo odio aenean sed. Turpis cursus in hac habitasse. Sed enim ut sem viverra aliquet eget sit. Iaculis at erat pellentesque adipiscing commodo. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Ipsum faucibus vitae aliquet nec ullamcorper sit. Tempus quam pellentesque nec nam aliquam sem et tortor. Turpis egestas sed tempus urna et pharetra pharetra massa. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.


## Riferimenti progettuali
Il layout e la logica visiva del progetto nascono dall'estetica dei database e dei fogli di calcolo. Lo spunto principale per la visualizzazione dei progetti deriva dall'archivio di Viso Haus, da cui è stata ripresa l'idea di una lista di elementi semplice e rigorosa che ricorda la struttura geometrica di una tabella Excel. A questa impostazione per la visualizzazione dei dati si unisce l'ispirazione tratta dal sito di Studio Herrström per la definizione della struttura superiore della pagina. Da questo secondo riferimento è stata infatti ripresa l'architettura del layout che separa la parte introduttiva del sito dalla sezione dedicata ai filtri di navigazione.


## Design dell’interfaccia e modalità di interazione
Facilisis magna etiam tempor orci eu. Felis donec et odio pellentesque diam volutpat commodo. Dis parturient montes nascetur ridiculus mus mauris vitae. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Accumsan sit amet nulla facilisi. Ultricies leo integer malesuada nunc vel risus. Est lorem ipsum dolor sit. Ultrices neque ornare aenean euismod elementum nisi. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Arcu dictum varius duis at consectetur lorem donec massa sapien. Pellentesque habitant morbi tristique senectus. Turpis massa sed elementum tempus egestas sed sed risus pretium. Eros donec ac odio tempor orci. Pellentesque id nibh tortor id aliquet lectus. Risus feugiat in ante metus dictum at. Quam pellentesque nec nam aliquam sem et tortor consequat id. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Sit amet dictum sit amet justo donec enim.


https://github.com/user-attachments/assets/21c0c238-976c-4329-9b67-9aa546798c41

<img width="1512" height="236" alt="0_screen3" src="https://github.com/user-attachments/assets/d984daa3-2bb2-4307-9c80-561e62a14cf1" />
<img width="764" height="214" alt="0_screen2" src="https://github.com/user-attachments/assets/96cfdef9-b144-409d-975a-8db702ccd19a" />
<img width="1512" height="858" alt="0_screen1" src="https://github.com/user-attachments/assets/3e6b42a8-36cc-4d95-963d-4be04024f096" />












## Tecnologia usata
Nunc consequat interdum varius sit amet mattis vulputate. Vehicula ipsum a arcu cursus vitae congue. Odio ut sem nulla pharetra. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Quisque egestas diam in arcu cursus. Eget nulla facilisi etiam dignissim diam. Aenean sed adipiscing diam donec adipiscing tristique. Porttitor massa id neque aliquam. Sem viverra aliquet eget sit amet tellus cras. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Lacus sed turpis tincidunt id aliquet risus feugiat.


```JavaScript
const image = new Image();
image.onload = () => {
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texImage2D(
		gl.TEXTURE_2D,
		level,
		internalFormat,
		srcFormat,
		srcType,
		image
	);
	if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
		gl.generateMipmap(gl.TEXTURE_2D);
	} else {
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	}
};
image.src = url;
```

## Target e contesto d’uso
Per questo target, l'esperienza ideale si sviluppa attraverso una consultazione da postazione desktop, in cui muoversi liberamente e con i propri tempi. L’interfaccia trasforma la navigazione in un percorso molto intuitivo: l'utente ha la possibilità di sfogliare l'archivio in modo spontaneo, lasciandosi guidare dalle anteprime visive per scoprire nuovi progetti quasi per caso, senza dover necessariamente cercare qualcosa di specifico
