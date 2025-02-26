## Implementación de Almacenamiento Web
En el Header se implementó un botón que redirige al Login en caso de que no hay ningún usuario logeado. Al logearse, se guardan los datos del Usuario como su nombre en el localStorage. El cual se leerán en el componente Header y mostrará un mensaje de Bienvenida + 'Nombre de Usuario'.

## Implementación de IndexedDB
1.- Se creó un archivo indexedDB.js en la carpeta utils para manejar la configuración de IndexedDB.
2.- Se definió una base de datos llamada AppointmentsDB con una tabla appointments para almacenar las citas.
3.- Se implementaron funciones para abrir la base de datos (openDB), agregar citas (addAppointmentToDB) y obtener citas (getAppointmentsFromDB).
4.- En el componente Appointment, se modificó la función addAppointment para guardar las citas en IndexedDB utilizando la función addAppointmentToDB.
5.- En el componente Appointment, se utilizó la función getAppointmentsFromDB en el useEffect para cargar las citas desde IndexedDB al iniciar la aplicación.

Para comprobar su correcto funcionamiento:

1.- En Google Chrome, presiona Ctrl+Shift+I (o Cmd+Option+I en macOS) o haz clic derecho en la página y selecciona "Inspeccionar".
2.- En las herramientas de desarrollo, selecciona la pestaña "Application" (Aplicación).
3.  El panel izquierdo, busca la sección "Base de datos indexada". Haz clic en ella para expandirla.
4.- Busca la base de datos AppointmentsDB y selecciónala.
5.- Dentro de AppointmentsDB, selecciona la tabla appointments. Aquí podrás ver todas las entradas almacenadas en IndexedDB.

## Credenciales de Acceso Login

**Administrador:**
- **Username:** admin
- **Contraseña:** asd123123
- **Rol:** Administrador

**Doctor:**
- **Username:** juan
- **Contraseña:** 54321
- **Rol:** Doctor

## Cómo Ejecutar el Proyecto

Sigue estos pasos para ejecutar la aplicación en tu entorno local:

1. Clona el repositorio:

    ```sh
    git clone https://github.com/FernandaAvello/m5-t4.git
    cd m5-t4/
    ```

2. Instala las dependencias: Asegúrate de tener Node.js instalado. Luego, instala las dependencias del proyecto:

    ```sh
    npm install
    ```

3. Inicia el servidor de desarrollo: Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo:

    ```sh
    npm run dev
    ```

4. Inicia la base de datos simulada: En una nueva terminal, ejecuta el siguiente comando para iniciar la base de datos simulada utilizando json-server:

    ```sh
    npm run server
    ```

5. Accede a la aplicación: Abre tu navegador y ve a [http://localhost:5173](http://localhost:5173) para ver la aplicación en funcionamiento.
