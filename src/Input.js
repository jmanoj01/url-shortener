import React, {useState} from 'react'
import db from './firebase'
import { FaLink, FaClipboard } from 'react-icons/fa'; // Import icons
const tinyid = require('tiny-unique-id')

function Input() {
    const [input, setInput] = useState('')
    const [shorten, setShorten] = useState('')

    const handleDb = async() => {
        if (!input) return;
        const slug = tinyid.unique()
        await db.collection('urls').add({
            url: input,
            slug: slug
        })
        setShorten(`${window.location.origin}/${slug}`)
    }
    return (
        <div className='container-fluid d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: '#f0f4f8' }}>
            <div className='card p-4' style={{ width: '100%', maxWidth: '600px', borderRadius: '15px', boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}>
                <h1 className='text-center mb-4' style={{ fontFamily: 'Arial, sans-serif', color: '#343a40' }}>
                    <FaLink /> URL Shortener
                </h1>
                <input 
                    type="url" 
                    value={input} 
                    onChange={e => setInput(e.target.value)} 
                    className='form-control mb-3' 
                    placeholder='Enter URL' 
                    style={{ width: '100%', borderRadius: '5px' }} 
                />
                <input 
                    type="text" 
                    disabled 
                    className='form-control mb-3' 
                    value={shorten} 
                    style={{ width: '100%', borderRadius: '5px' }} 
                />
                <button 
                    onClick={handleDb} 
                    className='btn btn-primary w-100' 
                    style={{ borderRadius: '5px', padding: '10px', transition: 'background-color 0.3s' }}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = '#0056b3'}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = '#007bff'}
                >
                    <FaClipboard /> Shorten URL
                </button>
                <div className='text-center mt-3'>
                    <small className='text-muted'>Paste your long URL above to shorten it!</small>
                </div>
            </div>
        </div>
    )
}

export default Input
