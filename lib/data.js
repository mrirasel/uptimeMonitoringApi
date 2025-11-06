/*
* Title: Uptime Monitoring Api
* Description: file read,write
* Author: Rashidul Islam
* Date: 29/10/2025
*/

//Dependencies
const fs = require('fs');
const path = require('path');


//module scaffoldine
const lib = {};  

//base directory of the data folder    
lib.basedir = path.join(__dirname,'/../.data/');

//write data to file 
lib.create =  function(dir, file, data, callback){
    //file open
    fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', (err, fileDescriptor)=>{

        if(!err && fileDescriptor){
            //convert data to string data
            const stringData = JSON.stringify(data);

            //write data to file and then close it 
            fs.writeFile(fileDescriptor, stringData, (err2)=>{
                if(!err2){
                    fs.close(fileDescriptor, (err3)=>{
                        if(!err3){
                            callback(false);
                        }else{
                            callback('Error closing the new file!');
                        }
                    })
                }else{
                    callback('Error writing the new file!');
                }
            });
        }else{
            callback('Could not create new file. file already exits!');
        }
    });

};

//read file 
lib.read = function(dir, file, callback){
    fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf-8', (err, data)=>{
        callback(err, data);
    })
};

//update file 
lib.update = function(dir, file, data, callback){
    fs.open(`${lib.basedir + dir}/${file}.json`,'r+', (err, fileDescriptor)=>{
        if(!err && fileDescriptor){
            const stringData = JSON.stringify(data);
            fs.writeFile(fileDescriptor, stringData, (err2)=>{
                if(!err2){
                    fs.close(fileDescriptor, (err3)=>{
                        if(!err3){
                            callback(false);
                        }else{
                             callback('File not close for error');
                        }

                    });

                }else{
                    callback('file not update for this is error!');
                }

            });

        }else{
            callback('file not open for error!');
        }

    });

};

//delete file 
lib.delete = function(dir,file,callback){
    fs.unlink(`${lib.basedir + dir}/${file}.json`,(err)=>{
        if(!err){
            callback(false)

        }else{
            callback('Errro Deleting file!');

        }
        
    });

}

