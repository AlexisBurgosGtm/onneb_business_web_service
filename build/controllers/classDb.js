const DbName = "posdb_r1";

var tblDocumentos = {
    name: 'documentos',
    columns: {
        ID:{ primaryKey: true, autoIncrement: true },
        CODSUCURSAL:{dataType: "string"},
        EMPNIT:{dataType: "string"},
        CODDOC:{dataType: "string"},
        ANIO:{dataType: "number"},
        MES:{dataType: "number"},
        DIA:{dataType: "number"},
        FECHA:{dataType: "string"},
        FECHAENTREGA:{dataType: "string"},
        FORMAENTREGA:{dataType: "string"},
        NITCLIE:{dataType: "string"},
        CODCLIE:{dataType: "string"},
        NOMCLIE:{dataType: "string"},
        DIRCLIE:{dataType: "string"},
        TOTALCOSTO:{dataType: "number"},
        TOTALPRECIO:{dataType: "number"},
        DIRENTREGA:{dataType: "string"},
        OBS:{dataType: "string"},
        USUARIO:{dataType: "string"},
        CODVEN:{dataType: "number"},
        LAT:{dataType: "string"},
        LONG:{dataType: "string"},
        JSONPRODUCTOS:{dataType: "string"},
        tipo_pago:{dataType: "string"},
        tipo_doc:{dataType: "string"},
        entrega_contacto:{dataType: "string"},
        entrega_telefono:{dataType: "string"},
        entrega_direccion:{dataType: "string"},
        entrega_referencia:{dataType: "string"},
        entrega_lat:{dataType: "string"},
        entrega_long:{dataType: "string"},
        domicilio: {dataType: "string"}
    }
};

var tblProductos = {
    name: 'productos',
    columns: {
        ID:{ primaryKey: true, autoIncrement: true },
        CODSUCURSAL:{dataType: "string"},
        CODPROD:{dataType: "string"},
        DESPROD:{dataType: "string"},
        CODMEDIDA:{dataType: "string"},
        EQUIVALE:{dataType: "number"},
        COSTO:{dataType: "number"},
        PRECIO:{dataType: "number"},
        PRECIOA:{dataType: "number"},
        PRECIOB:{dataType: "number"},
        PRECIOC:{dataType: "number"},
        DESMARCA:{dataType: "string"},
        EXENTO:{dataType: "number"},
        EXISTENCIA:{dataType: "number"},
        DESPROD3:{dataType: "string"}
    }
};

var tblClientes = {
    name: 'clientes',
    columns: {
        ID:{ primaryKey: true, autoIncrement: true },
        CODSUCURSAL:{dataType: "string"},
        CODIGO:{dataType: "string"},
        DESMUNI:{dataType: "string"},
        DIRCLIE:{dataType: "string"},
        LASTSALE:{dataType: "string"},
        LAT:{dataType: "string"},
        LONG:{dataType: "string"},
        NIT:{dataType: "string"},
        NOMCLIE:{dataType: "string"},
        REFERENCIA:{dataType: "string"},
        STVISITA:{dataType: "string"},
        VISITA:{dataType: "string"},
        TELEFONO:{dataType: "string"},
        TIPONEGOCIO:{dataType:"string"},
        NEGOCIO:{dataType:"string"}
    }
};

var tblTempventas = {
    name: 'tempventa',
    columns: {
        ID:{ primaryKey: true, autoIncrement: true },
        CODSUCURSAL:{dataType: "string"},
        EMPNIT:{dataType: "string"},
        CODDOC:{dataType: "string"},
        CODPROD:{dataType: "string"},
        DESPROD:{dataType: "string"},
        CODMEDIDA:{dataType: "string"},
        EQUIVALE:{dataType: "number"},
        CANTIDAD:{dataType: "number"},
        TOTALUNIDADES:{dataType: "number"},
        COSTO:{dataType: "number"},
        PRECIO:{dataType: "number"},
        TOTALCOSTO:{dataType: "number"},
        TOTALPRECIO:{dataType: "number"},       
        EXENTO:{dataType: "number"},
        USUARIO:{dataType: "string"},
        TIPOPRECIO:{dataType: "string"},
        EXISTENCIA:{dataType: "number"}
    }
};

var tblTempventasPos = {
    name: 'temp_pos',
    columns: {
        ID:{ primaryKey: true, autoIncrement: true },
        CODSUCURSAL:{dataType: "string"},
        EMPNIT:{dataType: "string"},
        CODDOC:{dataType: "string"},
        CODPROD:{dataType: "string"},
        DESPROD:{dataType: "string"},
        CODMEDIDA:{dataType: "string"},
        EQUIVALE:{dataType: "number"},
        CANTIDAD:{dataType: "number"},
        TOTALUNIDADES:{dataType: "number"},
        COSTO:{dataType: "number"},
        PRECIO:{dataType: "number"},
        DESCUENTO:{dataType: "number"},
        TOTALCOSTO:{dataType: "number"},
        TOTALPRECIO:{dataType: "number"},       
        EXENTO:{dataType: "number"},
        USUARIO:{dataType: "string"},
        TIPOPRECIO:{dataType: "string"},
        EXISTENCIA:{dataType: "number"},
        CODBODEGA:{dataType: "string"},
        NOLOTE:{dataType: "string"},
        CODLISTA:{dataType: "string"},
        FLETE:{dataType: "number"}
    }
};

var tblCredenciales = {
    name: 'credenciales',
    columns: {
        ID:{ primaryKey: true, autoIncrement: true },
        CODSUCURSAL:{dataType: "string"},
        USUARIO:{dataType: "string"},
        PASS:{dataType: "string"},
        NIVEL:{dataType: "string"},
        DAYUPDATED:{dataType: "number"}
    }
};



var database = {
    name: DbName,
    tables: [tblDocumentos,tblProductos,tblClientes,tblTempventas,tblTempventasPos,tblCredenciales]
};
 
// initiate jsstore connection
var connection = new JsStore.Connection();

async function connectDb(){
   
        var isDbCreated = await connection.initDb(database);
        // isDbCreated will be true when database will be initiated for first time
        if(isDbCreated){
            //alert('Db Created & connection is opened');
           
        }
        else{
            //alert('Connection is opened');
          
        }
    
}
//inicia la conexión a la db
connectDb();