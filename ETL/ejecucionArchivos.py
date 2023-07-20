import os
import time
import subprocess
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

ruta_nuevos = "C:/Users/franc/Desktop/ProyectoReportesMineria/ProyectoPlataformaAntofagastaMinerals/ProyectoPlataforma/ETL/Archivos/nuevos/"
ruta_listo = "C:/Users/franc/Desktop/ProyectoReportesMineria/ProyectoPlataformaAntofagastaMinerals/ProyectoPlataforma/ETL/Archivos/listos/"
archivo_etl = "C:/Users/franc/Desktop/ProyectoReportesMineria/ProyectoPlataformaAntofagastaMinerals/ProyectoPlataforma/ETL/extraccionesETL.ipynb"

class CarpetaNuevosHandler(FileSystemEventHandler):
    def on_created(self, event):
        if event.is_directory:
            return
        if event.src_path.endswith(".csv"):
            archivo_csv = event.src_path
            archivo_temporal = "archivo.csv"
            
            # Renombrar temporalmente el archivo a "archivo.csv"
            os.rename(archivo_csv, os.path.join(ruta_nuevos, archivo_temporal))

            # Ejecutar el ETL usando Jupyter nbconvert
            # Esto convertirá el notebook a un script de Python y lo ejecutará
            subprocess.run(["jupyter", "nbconvert", "--to", "script", archivo_etl])
            subprocess.run(["python", archivo_etl.split(".ipynb")[0] + ".py"])

            # Renombrar el archivo nuevamente a su nombre original y moverlo a "listo"
            os.rename(os.path.join(ruta_nuevos, archivo_temporal), os.path.join(ruta_listo, os.path.basename(archivo_csv)))

if __name__ == "__main__":
    # Crear la carpeta "nuevos" si no existe
    if not os.path.exists(ruta_nuevos):
        os.makedirs(ruta_nuevos)
    
    # Crear la carpeta "listo" si no existe
    if not os.path.exists(ruta_listo):
        os.makedirs(ruta_listo)
    
    event_handler = CarpetaNuevosHandler()
    observer = Observer()
    observer.schedule(event_handler, path=ruta_nuevos, recursive=False)
    observer.start()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()

    observer.join()