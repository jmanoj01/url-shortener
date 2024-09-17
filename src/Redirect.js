import React, {useEffect} from 'react'
import db from './firebase'
import {useParams} from 'react-router-dom'

function Redirect() {
    const {slug} = useParams()
    useEffect(() => {
        let query = db.collection('urls').where('slug', '==', slug)
        query.onSnapshot((data)=>{
            if(data.empty){
                alert('URL not found')
            }
            let finalData = data.docs[0].data()
            window.location.href = finalData.url
        })
    }, [slug])
    return (
        <div>
            
        </div>
    )
}

export default Redirect
