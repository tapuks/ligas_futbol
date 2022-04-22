import { useParams } from 'react-router-dom'
import Players from '../../components/Players';
import { Container } from 'react-bootstrap';


import './Team.scss'


export default function Team() {
    const { idTeam, idTemporada } = useParams()


    return (
        <div className='team'>
            <Players idTeam={idTeam} idTemporada={idTemporada} />
        </div>
    )
}