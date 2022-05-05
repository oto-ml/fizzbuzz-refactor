const fs = require("fs");

class JSONReader{
    static readJsonFile(filepath){
        try{
            const rawdata = fs.readFileSync(filepath);
            if (rawdata.length > 0)
                return JSON.parse(rawdata);
            else
                return "Error de lectura, archivo en blanco";
        }catch(err){
            if(err.code == "ENOENT"){
                return "No se encontró el archivo";
            }
        }
        
    }
}

module.exports = JSONReader;