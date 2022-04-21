import { Spinner } from 'react-bootstrap'


import './Loading.scss'

export default function Loading() {
    return (
        <div className='loading'>
            <Spinner animation="border" variant="primary" />
            <span>Cargando...</span>
        </div>
    )
}