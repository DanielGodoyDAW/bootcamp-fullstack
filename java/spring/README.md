## Apuntes de clase de Spring Boot

En esta carpeta guardo los apuntes de clase de Spring Boot, anotaciones de clase
y ejercicios prácticos relacionados con Spring Boot.

En springboot dividimos las funcionalidades en distintos paquetes como controllers, services, repositories, etc. para mantener una estructura organizada

- controllers se manejan las solicitudes HTTP y se definen los endpoints de la aplicación
- services se implementa la lógica de negocio de la aplicación
- repositories se manejan las operaciones de acceso a datos, como consultas a la base de datos
- models se definen las entidades o modelos de datos que representan las tablas de la base de datos
- config se pueden colocar las configuraciones de la aplicación, como seguridad, CORS, etc
- dto se pueden colocar los objetos de transferencia de datos, que son clases que se utilizan para transferir datos entre capas de la aplicación
- exceptions se pueden colocar las clases de excepciones personalizadas que se utilizan para manejar errores en la aplicación

Los controladores son responsables de manejar las solicitudes HTTP y definir los endpoints de la aplicación.

- se usa **@RestController** para indicar que la clase es un controlador REST y se encargará de manejar las solicitudes HTTP
- se usa **@RequestMapping** para definir la ruta base del controlador, por ejemplo **@RequestMapping("/api/users")** para un controlador que maneja las operaciones relacionadas con usuarios
- se usa **@GetMapping**, **@PostMapping**, **@PutMapping**, **@DeleteMapping** para definir los endpoints específicos para cada tipo de solicitud HTTP
  * el get vale para obtener datos
  * el post para crear nuevos recursos
  * el put para actualizar recursos existentes 
  * el delete para eliminar recursos
- se usa **@PathVariable** para extraer variables de la ruta, por ejemplo @GetMapping("/{id}") public ResponseEntity getById(@PathVariable Long id)
- se usa **@RequestBody** para recibir el cuerpo de la solicitud en formato JSON, por ejemplo @PostMapping public ResponseEntity create(@RequestBody User user)
- se usa **ResponseEntity** para devolver respuestas HTTP con el código de estado adecuado y el cuerpo de la respuesta, por ejemplo return ResponseEntity.ok(user) o return ResponseEntity.notFound().build()
###
- **@pathvariable** se utiliza para extraer variables de la ruta en los controladores de Spring Boot. Por ejemplo, si tenemos un endpoint definido como @GetMapping("/{id}"), podemos usar @PathVariable para extraer el valor de "id" de la ruta y utilizarlo 
en el método del controlador. Esto nos permite manejar solicitudes dinámicas y acceder a los datos específicos que se pasan a través de la URL.
- **@RequestParam** se utiliza para extraer parámetros de la consulta en los controladores de Spring Boot. Por ejemplo, si tenemos un endpoint definido como @GetMapping("/search"), podemos usar @RequestParam para extraer el valor de un parámetro de consulta, como "name", 
y utilizarlo en el método del controlador. Esto nos permite manejar solicitudes con parámetros de consulta y acceder a los datos específicos que se pasan a través de la URL.
- **@RequestBody** se utiliza para recibir el cuerpo de la solicitud en formato JSON en los controladores de Spring Boot. Por ejemplo, si tenemos un endpoint definido como @PostMapping, podemos usar @RequestBody para recibir el objeto JSON enviado 
en la solicitud y mapearlo a una clase Java. Esto nos permite procesar los datos enviados por el cliente y realizar operaciones como crear o actualizar recursos en la aplicación.
- **ResponseEntity** se utiliza para devolver respuestas HTTP con el código de estado adecuado y el cuerpo de la respuesta en los controladores de Spring Boot. Por ejemplo, podemos usar ResponseEntity.ok(user) para devolver una respuesta exitosa 
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

## Validaciones en Spring Boot

Las validaciones en Spring Boot se pueden realizar utilizando anotaciones de validación en los objetos de transferencia de datos (DTO) o en los objetos de solicitud (Request).
el paquete validation i/o se descarga de spring.io, y se pueden utilizar anotaciones como @NotNull, @Size, @Email, etc. para validar los campos de los objetos.

Por ejemplo, si se tiene un DTO para crear un nuevo usuario, se pueden agregar anotaciones de validación a los campos del DTO para asegurarse de que los datos enviados por el cliente sean válidos.

```java
public class CrearUsuarioRequest {
    @NotNull(message = "El nombre es obligatorio")
    @Size(min = 2, max = 50, message = "El nombre debe tener entre 2 y 50 caracteres")
    private String nombre;  
    @NotNull(message = "El correo electrónico es obligatorio")
    @Email(message = "El correo electrónico debe ser válido")
    private String email;
    // getters y setters
}
```
En este ejemplo, se han agregado anotaciones de validación a los campos "nombre" y "email" del DTO CrearUsuarioRequest. 
La anotación @NotNull se utiliza para indicar que el campo es obligatorio, mientras que la anotación @Size se utiliza para validar la longitud del campo "nombre". 
La anotación @Email se utiliza para validar que el campo "email" tenga un formato de correo electrónico válido.

## Las Excepciones en Spring Boot

**@RestControllerAdvice** se utiliza para manejar excepciones de manera global en una aplicación Spring Boot. 
Permite definir métodos que se ejecutarán cuando se produzcan excepciones específicas en cualquier parte de la aplicación. 
Esto es útil para centralizar el manejo de errores y proporcionar respuestas consistentes a los clientes cuando ocurren errores en la aplicación. 
Por ejemplo, se puede definir un método para manejar excepciones de tipo ResourceNotFoundException y devolver una respuesta con un mensaje de error y un código de estado HTTP adecuado.

```java
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<String> handleResourceNotFoundException(ResourceNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }
}
```
En este ejemplo, se ha definido un método handleResourceNotFoundException que se ejecutará cuando se produzca una excepción de tipo ResourceNotFoundException en cualquier parte de la aplicación.

El método devuelve una respuesta con un código de estado HTTP 404 (Not Found) y el mensaje de error proporcionado por la excepción. 
Esto permite manejar de manera centralizada las excepciones de tipo ResourceNotFoundException y proporcionar respuestas consistentes a 
los clientes cuando ocurren errores relacionados con recursos no encontrados en la aplicación.

Para enviar la respuesta se necesita crear un dto de respuesta, por ejemplo:

```java
public class ErrorResponse {
    private String message;
    // constructor, getters y setters
}
```

Luego, en el método del controlador de excepciones, se puede crear una instancia de ErrorResponse con el mensaje de error y devolverla en la respuesta:

```java
@ExceptionHandler(ResourceNotFoundException.class)
public ResponseEntity<ErrorResponse> handleResourceNotFoundException(ResourceNotFoundException ex) {
    ErrorResponse errorResponse = new ErrorResponse(ex.getMessage());
    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
}
```

getBindingResult se utiliza para obtener los resultados de la validación de un objeto en Spring Boot.

En repository se pueden colocar las interfaces de los repositorios que extienden de JpaRepository o CrudRepository para manejar las operaciones de acceso a datos en la base de datos.
Y repository se encarga de interactuar con la base de datos, realizando operaciones como consultas, inserciones, actualizaciones y eliminaciones de datos.

Para hacer las consultas haremos metodos del repositorio, por ejemplo:

```java
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByNombre(String nombre);
}
```

En este ejemplo, se ha definido un método findByNombre en el repositorio UserRepository que permite buscar usuarios por su nombre. Spring Boot generará automáticamente 
la implementación de este método y realizará la consulta a la base de datos para obtener los usuarios que coincidan con el nombre proporcionado. 
Esto facilita la realización de consultas personalizadas sin tener que escribir código SQL manualmente, 
ya que Spring Boot se encarga de generar las consultas necesarias en función de los nombres de los métodos definidos en el repositorio.

Para trabajar con base de datos en Spring Boot, se puede utilizar JPA (Java Persistence API) junto con una implementación como Hibernate.
Para configurar la conexión a la base de datos, se deben agregar las propiedades de conexión en el archivo application.properties o application.yml. Por ejemplo, si se está utilizando MySQL como base de datos, se pueden agregar las siguientes propiedades:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/mi_base_de_datos
spring.datasource.username=usuario
spring.datasource.password=contraseña
spring.jpa.hibernate.ddl-auto=update
``` 
En este ejemplo, se ha configurado la URL de conexión a la base de datos, el nombre de usuario y la contraseña. 
Además, se ha configurado la propiedad spring.jpa.hibernate.ddl-auto para que Hibernate actualice automáticamente el esquema 
de la base de datos en función de las entidades definidas en el proyecto. 
Esto permite trabajar con la base de datos de manera más sencilla, ya que Spring Boot se encarga de gestionar la conexión y 
las operaciones de acceso a datos utilizando JPA y Hibernate.

nos instalamos las dependencias de jpa y h2 para trabajar con base de datos en memoria, y luego configuramos la conexión a la base de datos en el archivo application.properties o application.yml.
```properties
spring.datasource.url=jdbc:h2:mem:mi_base_de_datos
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```
En este ejemplo, se ha configurado la URL de conexión a la base de datos H2 en memoria, el nombre de usuario y la contraseña. 
Además, se ha configurado la propiedad spring.jpa.hibernate.ddl-auto para que Hibernate actualice automáticamente el esquema de la base de datos en función de las entidades definidas en el proyecto. 
Esto permite trabajar con una base de datos en memoria de manera sencilla, ya que no se requiere una configuración adicional para instalar y gestionar una base de datos externa. 
La base de datos H2 se utilizará durante el desarrollo y las pruebas, y se puede cambiar a una base de datos externa como MySQL o PostgreSQL en producción simplemente cambiando las propiedades de conexión en el archivo application.properties o application.yml.

para configurar las propiedades de conexión a la base de datos en el archivo application.properties o application.yml, se deben agregar las siguientes propiedades:

Agregamos @Entity en la clase que representa la entidad de la base de datos, por ejemplo:

```java
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String email;
    // getters y setters
}
```
Si agregamos @Table(name = "users") en la clase User, se indicará que la tabla correspondiente en la base de datos se llamará "users". Si no se agrega la anotación @Table, Spring Boot generará automáticamente el nombre de la tabla en función del nombre de la clase, en este caso "user". 
La anotación @Table se utiliza para personalizar el nombre de la tabla en la base de datos, lo que puede ser útil para mantener una convención de nombres específica o para evitar conflictos con otras tablas en la base de datos. Si no se necesita personalizar el nombre de la tabla, se puede omitir la anotación @Table y Spring Boot se encargará de generar el nombre de la tabla automáticamente.

```java
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String nombre;
  private String email;
  // getters y setters
}
```
para poder trabajar con jps, se necesita un constructor vacio en la clase que representa la entidad de la base de datos, por ejemplo:

```java
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String email; 
    protected User() {
    }
    // getters y setters
}
```
El constructor vacío es necesario para que JPA pueda crear instancias de la entidad de la base de datos cuando se realicen operaciones de acceso a datos, como consultas o inserciones. 
JPA utiliza el constructor vacío para crear objetos de la entidad y luego establecer los valores de los campos utilizando los getters y setters. Sin un constructor vacío, 
JPA no podrá crear instancias de la entidad y se producirá un error al intentar realizar operaciones de acceso a datos. 
Por lo tanto, es importante incluir un constructor vacío en la clase que representa la entidad de la base de datos para garantizar 
el correcto funcionamiento de JPA y evitar errores al trabajar con la base de datos en Spring Boot.

Si lo declaramos protected, se evita que se puedan crear instancias de la clase User desde fuera de la clase, lo que puede ser útil para garantizar la integridad de los datos y evitar la creación de objetos no válidos.

Para crear un repository se crea una interfaz que extienda de JpaRepository o CrudRepository, por ejemplo:

```java
public interface UserRepository extends JpaRepository<User, Long> {
}
```
En este ejemplo, se ha creado una interfaz UserRepository que extiende de JpaRepository.

los metodos que heredan de JpaRepository mas comunes son:
- save: se utiliza para guardar un nuevo objeto en la base de datos o actualizar un objeto existente. Por ejemplo, userRepository.save(user) guardará el objeto "user" en la base de datos.
- findById: se utiliza para buscar un objeto por su ID. Por ejemplo userRepository.findById(id) devolverá un Optional<User> que contiene el objeto "user" con el ID especificado, o un Optional vacío si no se encuentra.
- findAll: se utiliza para obtener una lista de todos los objetos de una entidad. Por ejemplo, userRepository.findAll() devolverá una lista de todos los objetos "user" en la base de datos.
- deleteById: se utiliza para eliminar un objeto por su ID. Por ejemplo, userRepository.deleteById(id) eliminará el objeto "user" con el ID especificado de la base de datos.
- count: se utiliza para contar el número de objetos de una entidad en la base de datos. Por ejemplo, userRepository.count() devolverá el número total de objetos "user" en la base de datos.

con **@Component** se indica que la clase es un componente de Spring y se puede inyectar en otras clases utilizando la anotación @Autowired.
Esto permite que Spring gestione la creación y el ciclo de vida de los objetos de la clase, lo que facilita la inyección de dependencias y la reutilización de código en toda la aplicación.

con **@Transactional** se indica que el método o la clase debe ser ejecutado dentro de una transacción. 
Esto significa que todas las operaciones realizadas dentro del método o la clase serán tratadas como una unidad de trabajo, 
y si ocurre algún error durante la ejecución, todas las operaciones serán revertidas para mantener la integridad de los datos en la base de datos.

Esto es especialmente útil cuando se realizan operaciones que involucran múltiples pasos, como la creación de un nuevo recurso 
que requiere la inserción de datos en varias tablas de la base de datos. Al utilizar @Transactional, se garantiza que todas las 
operaciones se realicen de manera atómica, lo que significa que o todas las operaciones se completan con éxito o ninguna de ellas 
se aplica a la base de datos, evitando así inconsistencias en los datos en caso de errores durante la ejecución.

agregamos la dependecia de mysql al pon.xml para poder conectar con mysql

```xml
<dependency>
      <groupId>com.mysql</groupId>
      <artifactId>mysql-connector-j</artifactId>
      <scope>runtime</scope>
</dependency>
```

modificamos el properties para conectar con mysql

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/mi_base_de_datos
spring.datasource.username=usuario
spring.datasource.password=contraseña
spring.jpa.hibernate.ddl-auto=update
```

se recomienda proteger el archivo application.properties o application.yml que contiene las credenciales de la base de datos, ya que puede contener información sensible como el nombre de usuario y la contraseña.
Para proteger el archivo, se pueden seguir las siguientes prácticas:
- No incluir el archivo en el control de versiones (por ejemplo, utilizando .gitignore)

usar un archivo .env para almacenar las variables de entorno con las credenciales de la base de datos, y luego referenciar esas variables en el archivo application.properties o application.yml.

```properties
spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
```

En config crearemos las clases que crean los objetos de configuración de la aplicación, como la configuración de seguridad, CORS, etc.
le implementamos el implements CommandLineRunner para ejecutar código al iniciar la aplicación, por ejemplo para cargar datos de prueba en la base de datos.

esta interfaz nos implementa una clase abstracta que tiene un método run que se ejecutará al iniciar la aplicación.

para asegurarnos de que cada vez que inicialice la aplicacion no vuelva a cargar los mismos datos de prueba, podemos agregar una condición para verificar si la base de datos ya contiene datos antes de cargar los datos de prueba.

```java
@Component
public class DataLoader implements CommandLineRunner {
    private final UserRepository userRepository;
    public DataLoader(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count() == 0) {
            User user1 = new User();
            user1.setNombre("Juan");
            user1.setEmail("ejemplo@ejemplo.com");
            userRepository.save(user1);
           }
    }
}
```

**@Param** se utiliza para indicar que un parámetro de un método de consulta es un parámetro de la consulta.

para hacer una consulta se usa **@Query** en el repositorio, por ejemplo:

```java
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE u.nombre = :nombre")
    List<User> findByNombre(@Param("nombre") String nombre);
}
```

Aqui el * comunmente usado para coger todos los campos de la tabla varia, en este caso se esta utilizando el alias "u" para referirse a la entidad User, por lo que se debe usar "u" en lugar de "*" para seleccionar todos los campos de la entidad User.