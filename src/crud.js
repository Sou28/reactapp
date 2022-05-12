import axios from "axios"


export const getHttp = async (url,formData,callBack,isResponseBlob) => {

    try{
        return await axios
        .get(url)
        .then((result) =>{
              if(callBack) {
                   callBack.call(undefined,{
                       data:result 
                   }) ;
              } else{
                  return result;
              }
        }).catch ((err) =>{
            let thisError='';
            if(err.response.data.error){
                thisError = err.response.data.error.message;
            }else{
                thisError = err;
            }
            if(callBack) {
                callBack.call(undefined,{
                    dataErr:thisError 
                }) ;
           } else{
               return {dataErr : thisError};
           }
        });
    }catch(e){}
}