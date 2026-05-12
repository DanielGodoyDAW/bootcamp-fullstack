## Apuntes de clase de Spring Boot

En esta carpeta guardo los apuntes de clase de Spring Boot, anotaciones de clase
y ejercicios prácticos relacionados con Spring Boot.

En springboot dividimos las funcionalidades en distintos paquetes  como controllers, services, repositories, etc. para mantener una estructura organizada

- controllers se manejan las solicitudes HTTP y se definen los endpoints de la aplicación
- services se implementa la lógica de negocio de la aplicación
- repositories se manejan las operaciones de acceso a datos, como consultas a la base de datos
- models se definen las entidades o modelos de datos que representan las tablas de la base de datos
- config se pueden colocar las configuraciones de la aplicación, como seguridad, CORS, etc
- dto se pueden colocar los objetos de transferencia de datos, que son clases que se utilizan para transferir datos entre capas de la aplicación
- exceptions se pueden colocar las clases de excepciones personalizadas que se utilizan para manejar errores en la aplicación

Los controladores son responsables de manejar las solicitudes HTTP y definir los endpoints de la aplicación.

- se use @RestController para indicar que la clase es un controlador REST y se encargará de manejar las solicitudes HTTP
- se use @RequestMapping para definir la ruta base del controlador, por ejemplo @RequestMapping ("/api/users") para un controlador que maneja las operaciones relacionadas con usuarios
  - se use @GetMapping, @PostMapping, @PutMapping, @DeleteMapping para definir los endpoints específicos para cada tipo de solicitud HTTP
  el get vale para obtener datos
  el post para crear nuevos recursos
  el put para actualizar recursos existentes 
  el delete para eliminar recursos
- se use @PathVariable para extraer variables de la ruta, por ejemplo @GetMapping("/{id}") public ResponseEntity getById(@PathVariable Long id)
- se use @RequestBody para recibir el cuerpo de la solicitud en formato JSON, por ejemplo @PostMapping public ResponseEntity create(@RequestBody User user)
- se use ResponseEntity para devolver respuestas HTTP con el código de estado adecuado y el cuerpo de la respuesta, por ejemplo return ResponseEntity.ok(user) o return ResponseEntity.notFound().build()
###
- @pathvariable se utiliza para extraer variables de la ruta en los controladores de Spring Boot. Por ejemplo, si tenemos un endpoint definido como @GetMapping("/{id}"), podemos usar @PathVariable para extraer el valor de "id" de la ruta y utilizarlo 
en el método del controlador. Esto nos permite manejar solicitudes dinámicas y acceder a los datos específicos que se pasan a través de la URL.
- @RequestBody se utiliza para recibir el cuerpo de la solicitud en formato JSON en los controladores de Spring Boot. Por ejemplo, si tenemos un endpoint definido como @PostMapping, podemos usar @RequestBody para recibir el objeto JSON enviado 
en la solicitud y mapearlo a una clase Java. Esto nos permite procesar los datos enviados por el cliente y realizar operaciones como crear o actualizar recursos en la aplicación.
- ResponseEntity se utiliza para devolver respuestas HTTP con el código de estado adecuado y el cuerpo de la respuesta en los controladores de Spring Boot. Por ejemplo, podemos usar ResponseEntity.ok(user) para devolver una respuesta exitosa 
con el objeto "user" en el cuerpo de la respuesta, o ResponseEntity.notFound().build() para devolver una respuesta de "no encontrado" sin cuerpo. Esto nos permite controlar el flujo de la aplicación y proporcionar respuestas adecuadas a las solicitudes del cliente.
###
- El Optional es una clase en Java que se utiliza para representar un valor que puede estar presente o ausente. 
Es una forma de evitar el uso de valores nulos y manejar de manera más segura los casos en los que un valor puede no estar disponible.
- El Optional se utiliza comúnmente en los métodos de los repositorios de Spring Boot para indicar que un valor puede no estar presente en la base de datos. Por ejemplo, si tenemos un método en un repositorio que busca un usuario por su ID, 
podemos devolver un Optional<User> para indicar que el usuario puede no existir en la base de datos. Esto nos permite manejar de manera más segura los casos en los que el usuario no se encuentra y 
evitar errores de NullPointerException al intentar acceder a un valor nulo.

un ejemplo de codigo

```java
@GetMapping("/{id}")
public ResponseEntity<User> getById(@PathVariable Long id) {
    Optional<User> userOptional = userRepository.findById(id);
    if (userOptional.isPresent()) {
        return ResponseEntity.ok(userOptional.get());
    } else {
        return ResponseEntity.notFound().build();
    }
}
```

En este ejemplo, el método getById busca un usuario por su ID utilizando el repositorio. El método findById devuelve un Optional<User>, lo que indica que el usuario puede no estar presente en la base de datos.
Si el usuario está presente, se devuelve una respuesta exitosa con el usuario en el cuerpo de la respuesta. Si el usuario no está presente, se devuelve una respuesta de "no encontrado" sin cuerpo. 
Esto permite manejar de manera segura los casos en los que el usuario no existe y evitar errores de NullPointerException.

- En el dto (Data Transfer Object) se pueden colocar los objetos de transferencia de datos, que son clases que se utilizan para transferir datos entre capas de la aplicación.

en CrearCursoRequest porejemplo se declaran todos los atributos necesarios para crear un curso, como el nombre, la descripción, el precio, etc. 
Estos atributos se utilizan para recibir los datos enviados por el cliente al crear un nuevo curso.
```java
public class CrearCursoRequest {
    private String nombre;
    private String descripcion;
    private double precio;  
    // getters y setters
}
```
En el controlador, se puede utilizar el objeto CrearCursoRequest para recibir los datos enviados por el cliente al crear un nuevo curso.
```java
@PostMapping
public ResponseEntity<Curso> crearCurso(@RequestBody CrearCursoRequest request) {
    Curso curso = new Curso();
    curso.setNombre(request.getNombre());
    curso.setDescripcion(request.getDescripcion());
    curso.setPrecio(request.getPrecio());
    Curso nuevoCurso = cursoRepository.save(curso);
    return ResponseEntity.ok(nuevoCurso);
}
```
En este ejemplo, el método crearCurso recibe un objeto CrearCursoRequest en el cuerpo de la solicitud y utiliza los datos de ese objeto para crear un nuevo curso. Luego, el nuevo curso se guarda en la base de datos utilizando el repositorio y se 
devuelve una respuesta exitosa con el nuevo curso en el cuerpo de la respuesta.

Las cosas que vayan desde la api hacia fuera hay que ponerlas en el **dto**, y las cosas que vengan desde fuera hacia la api hay que ponerlas en el **request**, para mantener una separación clara entre los objetos de transferencia de datos y los objetos de solicitud.

Para instalar cualquier dependencia en Spring Boot, se puede utilizar el archivo pom.xml si se está utilizando Maven como sistema de construcción.
En el archivo pom.xml, se pueden agregar las dependencias necesarias para el proyecto. Por ejemplo, si se desea agregar la dependencia de Spring Web para crear una aplicación web, se puede agregar lo siguiente al archivo pom.xml:

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
```
Después de agregar la dependencia al archivo pom.xml, se debe guardar el archivo y el sistema de construcción (Maven) descargará automáticamente la dependencia y la agregará al proyecto.

