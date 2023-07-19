import { ConfigModule } from "@nestjs/config";
import { User } from "../entities/user.entity";
import { DataSource, DataSourceOptions, Entity } from "typeorm";
import {config } from 'dotenv'
import { FactorCarga } from "../entities/factor-carga.entity";
import { Rajo } from "../entities/rajo.entity";
import { Visita } from "../entities/visita.entity";
import { Reporte } from "../entities/reporte.entity";
import { Fase } from "../entities/fase.entity";
import { DatosPlan } from "../entities/datos_plan.entity";

    //Para que funcione las varaibles de entorno tengo que agregar el metodo CONFIG
    ConfigModule.forRoot({
        envFilePath: '.env',
        isGlobal: true,
    })
    //Para la BD de Users y Visitas (1)
    config({path: '.env',});
    const entities = [User];//falta agregar visita nose si como recurso o entidad y ademas ver como incluirla
    const entityFiles = entities.map(entity => entity.prototype.constructor);

    //Configuracion base de datos
    const DatabaseConfig : DataSourceOptions = {
        type: process.env.TYPEORM_CONNECTION as any,
        host: process.env.TYPEORM_HOST,
        port: parseInt(process.env.TYPEORM_PORT as string),
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        synchronize: process.env.TYPEORM_SYNCHRONIZE == "true",
        logging: process.env.TYPEORM_LOGGING == "true",
        entities: [User,FactorCarga,Rajo,Fase,Visita,Reporte,DatosPlan],
        migrations: [__dirname + '/../migrations/*{.ts,.js}'],//importo mis entities de mi carpeta(user,)
    }

    const DatabaseConfigDB: DataSourceOptions = {
        type: process.env.TYPEORM_CONNECTION as any,
        host: process.env.TYPEORM_HOST,
        port: parseInt(process.env.TYPEORM_PORT as string),
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        synchronize: process.env.TYPEORM_SYNCHRONIZE == "true",
        logging: process.env.TYPEORM_LOGGING == "true",
        entities: [FactorCarga,Rajo],
        migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    };
    const TestConfig: DataSourceOptions = {
        type: 'sqlite3' as any,
        database: ':memory:',
        dropSchema: true,
        entities: [User],
        synchronize: true,
        logging: false,
        migrations: [__dirname + '/../migrations/*{.ts,.js}'],
        
    }
    //Creo una clase factory para que me retorne la configuracion correspondiente
    class DataSourceFactory{
        private constructor(){}
        //
        static createDataSource(env:String): DataSourceOptions{//En caso que quiera hacer testing le paso una llave a create
            if (env == 'extracciones') {
                return DatabaseConfigDB;
            } else {
                return DatabaseConfig;
            }
        }
    }
    //

    const DataSourceConfig = DataSourceFactory.createDataSource(process.env.NODE_ENV);

    export { DatabaseConfig }; //Exporto la configuracion correspondiente
    //Exporto la configuracion correspondiente

    //Para la configuración del archivo json
    export const  AppDS = new DataSource(DataSourceConfig)//es el reflejo de tu config en el json 
    

