# Consideraciones técnicas para la construcción del proyecto.

Este proyecto fue diseñado basándose en los siguientes principios que
definen su arquitectura y algunas prácticas:

- Arquitectura limpia
- Patron MVVM
- Principios S.O.L.I.D
- clean code
- Redux Toolkit
- Unit test

## Arquitectura limpia (clean architecture)
Arquitectura limpia según Robert C. Martin, esta arquitectura permite tener nuestro
proyecto separado por capas y otorgar una flexibilidad a cambios de una forma más ágil
por una detección fácil de donde podemos realizar un cambio sin que otros lugares
sean afectados por este y el código pueda romper, cumpliendo con los principios solid, es ideal para proyectos 
medianos a grande, por ello para un sistema como este no era necesario, pero para la práctica
y mostrar habilidades en una entrevista es justificado.

## Patron MVVM
Me gusta como este patron puede convivir en medio de la arquitectura limpia
y el framework, dejando un código más limpio, separando la lógica de la ui e integrando todo
lo necesario como nuestra gestión de estado global o algún caso de uso que se pueda implementarse
directamente de la arquitectura limpia, para unificar la entrega de datos que la ui necesita.

## Principios S.O.L.I.D
Gracias a las directrices que ya dictamina la arquitectura limpia, muchos de estos principios están siendo
implementados, como la inversion de dependencias, principio de abierto y cerrado también el principio de responsabilidad única.

## Clean code
Para nombrar algunos puntos sobre esto, como lo es el naming, es importante tener un nombramiento bien descriptivo
de cualquier entidad que creamos dentro del código para que nuestro yo del futuro vuelva y no diga ¿qué hace esta función?, 
además de no sobrecargar de líneas a métodos o clases. 

## Redux Toolkit
Elegí esta librería, ya que no había trabajado mucho con ella en un proyecto real y era buen momento, es muy poderosa
y simple de usar, para persistir el estado del juego de manera global, almacenando los puntajes, 
movimientos algunas acciones que el jugador realiza y nos permite seguir haciendo un código más limpio. 
