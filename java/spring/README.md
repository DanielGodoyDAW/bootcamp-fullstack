## Apuntes de clase de Spring Boot

En esta carpeta guardo los apuntes de clase de Spring Boot, anotaciones de clase
y ejercicios prácticos relacionados con Spring Boot.

En springboot dividimos las funcionalidades en distintos paquetes como controllers, services, repositories, etc. para mantener una estructura organizada

- controllers se manejan las solicitudes HTTP y se definen los endpoints de la aplicación
- services se implementa la lógica de negocio de la aplicación
- repositories se manejan las operaciones de acceso a datos, como consultas a la base de datos
- models se definen las entidades o modelos de datos que representan las tablas de la base de datos
- config se pueden colocar las configuraciones de la aplicación, como seguridad, CORS, etc
- dto (data transfer objet) se pueden colocar los objetos de transferencia de datos, que son clases que se utilizan para transferir datos entre capas de la aplicación
- exceptions se pueden colocar las clases de excepciones personalizadas que se utilizan para manejar errores en la aplicación
- mappers se pueden colocar las clases que se encargan de mapear entre objetos de diferentes capas, como mapear entre entidades y DTOs
los mapper se usan para convertir objetos de una capa a otra, por ejemplo, para convertir una entidad de la base de datos a un DTO que se envía al cliente, o para convertir un DTO recibido del cliente a una entidad que se guarda en la base de datos.

los paquetes que instalamos springdatajpa el paquete de validation i/o, el paquete de mysql, etc. se pueden colocar en la carpeta dependencies para mantener una estructura organizada y facilitar la gestión de las dependencias del proyecto.

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

**@ManyToOne** se utiliza para establecer una relación de muchos a uno entre dos entidades en JPA.

```java
@Entity
public class Curso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String descripcion;
    private double precio;
    @ManyToOne
    private Categoria categoria;
    // getters y setters
}   
```

**@ManyToOne(FetchType.LAZY)** se utiliza para establecer una relación de muchos a uno entre dos entidades en JPA, y además indica que la carga de la entidad relacionada se realizará de manera perezosa (lazy loading).
**@ManyToOne(FetchType.EAGER)** se utiliza para establecer una relación de muchos a uno entre dos entidades en JPA, y además indica que la carga de la entidad relacionada se realizará de manera ansiosa (eager loading).

**@OneToMany** se utiliza para establecer una relación de uno a muchos entre dos entidades en JPA.
**@OneToMany(mappedBy = "categoria")** se utiliza para establecer una relación de uno a muchos entre dos entidades en JPA, y además indica que la entidad relacionada es la propietaria de la relación y que el campo "categoria" en la entidad relacionada es el que mapea la relación.

**@JoinColumn** se utiliza para especificar la columna de unión en una relación de muchos a uno en JPA.
```java
@Entity
public class Curso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long id;
    private String nombre;
    private String descripcion;
    private double precio;
    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;
    // getters y setters
}
```

**@JoinColumn(name = "categoria_id")** se utiliza para especificar que la columna de unión en la tabla de la base de datos se llamará "categoria_id".

**JWT** (JSON Web Token) es un estándar abierto para la transmisión segura de información entre partes como un objeto JSON.
Funciona mediante la generación de un token que contiene información codificada, como el ID del usuario o los roles, y se firma digitalmente para garantizar su integridad.
El token se envía al cliente después de que el usuario inicia sesión correctamente, y el cliente lo incluye en las solicitudes posteriores para autenticar al usuario y autorizar el acceso a los recursos protegidos en la aplicación. 
En Spring Boot, se puede utilizar la biblioteca jjwt para generar y validar tokens JWT, y se puede configurar un filtro de seguridad para interceptar las solicitudes y verificar la validez del token antes de permitir el acceso a los recursos protegidos.

Ejemplo de planteamiento de una app

  * Configuracion(tiempoValidezToken, claveSecretaToken)
  * DataLoader(admin)
  * AuthController(login, register) -Rutas no protegidas-
  * Dto (LoginRequest, RegisterRequest, LoginResponse -token-)
  * AuthService
  * Repository (findByEmail, existsByEmail, findByEmailAndPassword)
  * Entidad usuario (id, nopmbre, email, password, roles)
  * Entidad Rol
  * Encriptador de Contraseña
  * Generar Token JWT y comprobar validez del token
  * Filtro de peticiones para validar el token en cada solicitud -Rutas protegidas y no protegidas-
  * Manejo de excepciones para errores de autenticación y autorización

----

Dependencias de seguridad del proyecto:

- Security: spring-boot-starter-security

```properties
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

Creamos una clase de congiguracion por ejemplo SecurityConfig y agregamos las etiquetas
**@Configuration** y **@EnableWebSecurity** para indicar que es una clase de configuración de seguridad.

```java
import org.springframework.context.annotation.Bean;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
  @Bean
  SecurityFilterChain securityFilterChain(HttpSecurity http){
      return http
              .csrf().disable()
              .authorizeHttpRequests()
              .requestMatchers("/api/auth/**").permitAll() // Rutas no protegidas
              .anyRequest().authenticated() // Rutas protegidas
              .and()
              .build();
       }
}
```
En este ejemplo, se ha configurado la seguridad para permitir el acceso a las rutas que comienzan con "/api/auth/" sin autenticación, mientras que todas las demás rutas requieren autenticación.

**@ElementCollection** se utiliza para definir una colección de elementos embebidos en una entidad JPA.
```java
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String email;
    private String password;
    @ElementCollection(fetch = FetchType.EAGER)
    private Set<String> roles = new HashSet<>();
    // getters y setters
}
```

**@CollencionTable** se utiliza para definir una tabla de colección en la base de datos para almacenar los elementos de una colección embebida en una entidad JPA.
```java
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;  
    private String email;
    private String password;
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "role")
    private Set<String> roles = new HashSet<>();
    // getters y setters
}
```

El **PasswordEncoder** se utiliza para encriptar las contraseñas de los usuarios antes de almacenarlas en la base de datos, lo que mejora la seguridad de la aplicación al evitar almacenar contraseñas en texto plano.
En Spring Boot, se puede configurar un PasswordEncoder utilizando la clase BCryptPasswordEncoder, que utiliza el algoritmo de encriptación bcrypt para proteger las contraseñas de los usuarios. 
Al utilizar un PasswordEncoder, se garantiza que las contraseñas de los usuarios estén protegidas y se reduce el riesgo de que las contraseñas sean comprometidas en caso de una brecha de seguridad en la base de datos. Además, al encriptar las contraseñas, se dificulta que los atacantes puedan obtener las contraseñas originales incluso si tienen acceso a la base de datos, lo que mejora la seguridad general de la aplicación.
```java
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
@Configuration
public class SecurityConfig {
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```
Para crear el JWT, se puede utilizar la biblioteca jjwt para generar y validar tokens JWT en Spring Boot.

habra que instalar la dependencia de **OAuth2 Resource ServerOAuth2 Resource Server**

```xml
 <dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security-oauth2-resource-server</artifactId>
</dependency>

<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security-oauth2-resource-server-test</artifactId>
  <scope>test</scope>
</dependency>
```

Usaremos la clase **JwtEncoder** para generar el token JWT, y la clase **JwtDecoder** para validar el token JWT en las solicitudes entrantes.

```java
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Service;
@Service
public class JwtService {
    private final JwtEncoder jwtEncoder;
    private final JwtDecoder jwtDecoder;
    public JwtService(JwtEncoder jwtEncoder, JwtDecoder jwtDecoder) {
        this.jwtEncoder = jwtEncoder; 
        this.jwtDecoder = jwtDecoder;
    }
    public String generateToken(String email, Set<String> roles) {
        // Lógica para generar el token JWT utilizando jwtEncoder
    }
    public boolean validateToken(String token) {
        // Lógica para validar el token JWT utilizando jwtDecoder
    }
}
```

Con **@Value("${jwt.expiration-minutes}")** se inyecta el valor de la propiedad jwt.expiration-minutes desde el archivo application.properties o application.yml en la variable expirationMinutes de la clase JwtService.

```java
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Service;

@Service
public class JwtService {
    private final JwtEncoder jwtEncoder;
    private final JwtDecoder jwtDecoder;
    @Value("${jwt.expiration-minutes}")
    private long expirationMinutes;
    public JwtService(JwtEncoder jwtEncoder, JwtDecoder jwtDecoder) {
        this.jwtEncoder = jwtEncoder;
        this.jwtDecoder = jwtDecoder;
    }
    public String generateToken(String email, Set<String> roles) {
        // Lógica para generar el token JWT utilizando jwtEncoder y expirationMinutes
    }
    public boolean validateToken(String token) {
        // Lógica para validar el token JWT utilizando jwtDecoder
    }
}
```
En aplication.properties habra que agregar la propiedad jwt.expiration-minutes para configurar el tiempo de expiración del token JWT, por ejemplo:

```properties
jwt.expiration-minutes=60
```
En este ejemplo, se ha configurado el tiempo de expiración del token JWT a 60 minutos. Esto significa que el token JWT 
generado por la aplicación será válido durante 60 minutos desde el momento de su creación. Después de ese tiempo, el token expirará 
y ya no será válido para autenticar al usuario en las solicitudes posteriores. 
Configurar un tiempo de expiración adecuado para los tokens JWT es importante para mejorar la seguridad de la aplicación, 
ya que limita el tiempo durante el cual un token comprometido puede ser utilizado por un atacante. 
Además, también se puede configurar un tiempo de expiración más corto para tokens de acceso y un tiempo de expiración más largo 
para tokens de actualización, lo que permite a los usuarios mantener su sesión activa sin tener que volver a autenticarse con frecuencia, 
pero al mismo tiempo limita el tiempo de validez de los tokens de acceso para mejorar la seguridad.

Lo aconsejable sería agregarlo a una variable de entorno en lugar de tenerlo en el archivo application.properties, para evitar exponer información sensible en el código fuente.
```properties
jwt.expiration-minutes=${JWT_EXPIRATION}
```
En este ejemplo, se ha configurado el tiempo de expiración del token JWT utilizando una variable de entorno llamada JWT_EXPIRATION.

## Codigos de estado HTTP:

**HTTPSTATUS.CONFLICT.(value)** se utiliza para indicar que la solicitud no se pudo completar debido a un conflicto con el estado actual del recurso.

**HTTPSTATUS.BAD_REQUEST(value)** se utiliza para indicar que la solicitud no se pudo completar debido a una sintaxis incorrecta o datos inválidos proporcionados por el cliente.

**HTTPSTATUS.NOT_FOUND(value)** se utiliza para indicar que el recurso solicitado no se pudo encontrar en el servidor. Esto puede ocurrir cuando el cliente solicita un recurso que no existe o ha sido eliminado.

la etiqueta **@EnableMethodSecurity** se utiliza para habilitar la seguridad a nivel de método en una aplicación Spring Boot. Esto permite proteger métodos específicos en los controladores o servicios utilizando anotaciones como **@PreAuthorize** o **@Secured** para definir las reglas de autorización basadas en roles o permisos. Al habilitar la seguridad a nivel de método, se puede controlar el acceso a los recursos de manera más granular y garantizar que solo los usuarios autorizados puedan acceder a ciertos métodos o realizar ciertas acciones en la aplicación.

**Authetication Manager** se utiliza para gestionar el proceso de autenticación en una aplicación Spring Boot.
El Authentication Manager es responsable de autenticar a los usuarios y verificar sus credenciales, como el nombre de usuario y la contraseña, para determinar si el usuario es válido y tiene acceso a los recursos protegidos en la aplicación.
En Spring Boot, se puede configurar un Authentication Manager utilizando la clase AuthenticationManagerBuilder para definir cómo se autenticarán los usuarios, por ejemplo, utilizando una base de datos, un servicio de autenticación externo o un proveedor de autenticación personalizado.

```java
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {
    private final UserDetailsService userDetailsService;
    private final PasswordEncoder passwordEncoder;
    public SecurityConfig(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder) {
        this.userDetailsService = userDetailsService;
        this.passwordEncoder = passwordEncoder;
    }
    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
        return http.getSharedObject(AuthenticationManagerBuilder.class)
                .userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder)
                .and()
                .build();
    }
}
```
En este ejemplo, se ha configurado un Authentication Manager que utiliza un UserDetailsService para cargar los detalles del usuario desde la base de datos y un PasswordEncoder para verificar las contraseñas de los usuarios durante el proceso de autenticación.

**Authetication** se utiliza para representar la información de autenticación de un usuario en una aplicación Spring Boot.
La interfaz Authentication es parte del framework de seguridad de Spring y se utiliza para almacenar información sobre el usuario autenticado, como su nombre de usuario, roles y permisos.

En Spring Boot, se puede acceder a la información de autenticación del usuario utilizando el objeto Authentication en los controladores o servicios.
Por ejemplo, se puede obtener el nombre de usuario del usuario autenticado utilizando el método getName del objeto Authentication, o se pueden verificar los roles del usuario utilizando el método getAuthorities para determinar si el usuario tiene acceso a ciertos recursos protegidos en la aplicación.

```java
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class UserController {
    @GetMapping("/user")
    public String getUserInfo(Authentication authentication) {
        String username = authentication.getName();
        return "Información del usuario: " + username;
    }
}
``` 
En este ejemplo, se ha creado un controlador UserController con un endpoint "/user" que devuelve la información del usuario autenticado utilizando el objeto Authentication para obtener el nombre de usuario del usuario autenticado.
