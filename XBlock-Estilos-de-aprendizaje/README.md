# Resultados del test de estilos de aprendizaje de Bandler & Grinder

Para una correcta interpretación de los resultados que arroja el test de Bandler y Grinder implementado, se realiza una representación gráfica de dichos resultados.


# Contenido

- [Resultados del test de estilos de aprendizaje de Bandler & Grinder](#resultados-del-test-de-estilos-de-aprendizaje-de-bandler--grinder)
- [Contenido](#contenido)
- [1. Prerrequisitos](#1-prerrequisitos)
- [2. Posibles Resultados](#2-posibles-resultados)
- [3. Modo de Uso](#3-modo-de-uso)
  - [3.1 Vista Docente](#31-vista-docente)
  - [3.2 Vista Estudiante](#32-vista-estudiante)
- [4. Gestor de reglas](#4-gestor-de-reglas)
  - [4.1 Vista Reglas Maestro](#41-vista-reglas-maestro)
  - [4.2 Vista Reglas Estudiante](#42-vista-reglas-estudiante)

# 1. Prerrequisitos

Se requiere que al menos un estudiante haya diligenciado por completo el test de Bandler y Grinder y adicionalmente, haya seleccionado la opción “enviar” con el objetivo de presentar el resultado obtenido, y del mismo modo el docente pueda observar los resultados de los estudiantes que han llenado el test.

# 2. Posibles Resultados

Además de los tres grandes tipos de dominancia correspondientes a: visual, auditivo y kinestésico se pueden presentar casos en los cuales un estudiante presente el mismo porcentaje en dos tipos. Por lo anterior, existen 6 posibles resultados, presentados a continuación: 

- Visual
- Auditivo
- Kinestésico
- Visual-Auditivo
- Visual-Kinestésico
- Auditivo-Kinestésico

# 3. Modo de Uso

## 3.1 Vista Docente

Para visualizar los resultados de los estudiantes desde la vista diseñada para el docente, es necesario seleccionar la opción “Vista Studio Analytics”. Esto despliega una nueva interfaz, tal y como se muestra en las siguientes imágenes.  

En esta interfaz, el docente puede visualizar una tabla con el ID del estudiante, el nombre del test que ha diligenciado y el resultado obtenido. Para este caso, se presenta el tipo de dominancia del estudiante y los porcentajes asociados a cada uno de ellos (Visual, Auditivo y Kinestésico).

Para visualizar las gráficas, se debe seleccionar la opción “Mostrar Gráficas”, la cual presenta automáticamente dos gráficas generadas de acuerdo a los resultados obtenidos. En la parte derecha se muestra un gráfico circular, en términos de porcentajes, que clasifica la cantidad de estudiantes que hacen parte de las dominancias. En la parte izquierda se presenta un gráfico de barras, que permite determinar el total de estudiantes pertenecientes a cada dominancia. 

![Tabla de Resultados](https://raw.githubusercontent.com/LauraMamian/XBlock-Estilos-de-aprendizaje/grupo3/img/res_tabla.png)

![Grafica de Resultados](https://raw.githubusercontent.com/LauraMamian/XBlock-Estilos-de-aprendizaje/grupo3/img/res_grafs.png)

## 3.2 Vista Estudiante

El estudiante visualiza la interfaz principal que contiene las 40 preguntas correspondientes al test que se ha seleccionado previamente, en este caso es Bandler-Grinder.

Al completar todo el test, para visualizar el resultado obtenido, se debe seleccionar la opción “Enviar”. Esto despliega inmediatamente una interfaz en donde se indican los 3 tipos de dominancia: Visual, Auditiva y Kinestésica, seguido del porcentaje determinado de acuerdo a las respuestas del test, ordenadas en forma descendente.

![Resultado de estudiante](https://raw.githubusercontent.com/LauraMamian/XBlock-Estilos-de-aprendizaje/grupo3/img/res_est1.jpg)

En la parte inferior de la interfaz, se presenta una gráfica de barras complementaria que indica los porcentajes obtenidos de cada una de las tres dominancias (Visual, Auditivo y Kinestésico) en el eje Y y los tipos de dominancia sobre el eje X.

![Grafica de estudiante](https://raw.githubusercontent.com/LauraMamian/XBlock-Estilos-de-aprendizaje/grupo3/img/res_est2.jpg)

Finalmente solo está habilitada la opción “Vista Studio Analytics” que redirige a la vista docente.

# 4. Gestor de reglas
Para la implementación de las reglas se hace uso de cohortes, donde se dividirán los estudiantes en grupos pequeños, estos grupos serán conformados según los resultados obtenidos en el test de aprendizaje, de esta forma los estudiantes tendrán un aprendizaje personalizado dependiendo de su estilo de aprendizaje y a su vez tendrán acceso a recursos que se enfoquen a su cohorte asignada, los cuales serán subidos, editados y/o controlados por el maestro.

Al observar los resultados, se podrá acceder a dos vistas diferentes, las cuales son: vista reglas maestro y vista reglas estudiantes.

## 4.1 Vista Reglas Maestro

Inicialmente la interfaz consta de la selección del tipo de archivo que se subirá, el usuario, en este caso el maestro, deberá seleccionar una opción para poder continuar. 

![Reglas maestro](https://raw.githubusercontent.com/LauraMamian/XBlock-Estilos-de-aprendizaje/grupo3/img/reg_maes.jpeg)

Continuando se desplegará una interfaz donde el usuario deberá cargar el archivo y seleccionar la cohorte a la cual enviará este, por ultimo presionar al botón subir donde obtendrá un mensaje que dirá “Recurso subido exitosamente”, lo cual indica que se siguieron los pasos correctamente.

![Seleccion maestro](https://raw.githubusercontent.com/LauraMamian/XBlock-Estilos-de-aprendizaje/grupo3/img/selec_maes.jpeg)

Nota: Al seleccionar un tipo de archivo, se le sugerirá una cohorte que más convenga con este, pero el usuario tiene la opción de cambiarla, pero siempre debe seleccionar una dado que el no hacerlo no permitirá la subida del archivo.

## 4.2 Vista Reglas Estudiante

En esta interfaz el usuario estudiante observara los resultados obtenidos realizado el test, la cohorte a la que ha sido asignado dado estos resultados y los recursos que se encuentran disponibles para él y donde puede acceder a ellos.

![Reglas estudiante](https://raw.githubusercontent.com/LauraMamian/XBlock-Estilos-de-aprendizaje/grupo3/img/reg_est.jpeg)
