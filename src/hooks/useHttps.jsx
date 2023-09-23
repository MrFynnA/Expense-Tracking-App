import { useState } from "react"


const useHttps=(applyData)=>{
const[error,setError]=useState(null)
const[isLoading,setIsLoading]=useState(false)

const request=async(requestItems,abortSignal)=>{

    try{
        setIsLoading(true)      
        const url=requestItems.url
        const res =await fetch(url,{
            method:requestItems.method ?requestItems.method:'GET',
            body:requestItems.body?requestItems.body:null,
            headers:requestItems.headers?requestItems.headers:{},
            signal:abortSignal
        } )

        if(!res.ok){
            throw new Error('couldnt fetch data 404')
        }

       const data=res.json()
       setIsLoading(false)
       applyData(data)

    }catch(error){
         setError(error.message)
         setIsLoading(false)
    }
      
}

return {
    error,
    isLoading,
    request
}

}

export default useHttps