import useFetch from '../../hooks/useFetch'
import { TOKEN, URL_API } from '../../utils/constants'
import Loading from '../Loading'
import { Col, Row, Container, Card } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
import classNames from 'classnames'


import './Players.scss'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'


export default function Players(props) {
    const { idTeam, idTemporada } = props



    const plantilla = useFetch(`${URL_API}squad/season/${idTemporada}/team/${idTeam}?${TOKEN}`)


    console.log(plantilla);

    if (!plantilla.result || plantilla.loading) {
        return <Loading />
    }

    return (
        <Container>
            <div className='players'>

                {plantilla.result.data.map(function (player, index) {
                    if (index < 10) {
                        return <Col xs={12} key={index}> <CardPlayer player_id={player.player_id} /></Col>
                    }
                })}
            </div>
        </Container>
    )

}

function CardPlayer(props) {
    const { player_id } = props
    const player = useFetch(`${URL_API}players/${player_id}?${TOKEN}`)
    if (!player.result || player.loading) {
        return <Loading />
    }

    console.log('player', player);
    const { position_id, common_name, nationality, birthdate, image_path } = player.result.data


    // PONER UN DIV CON EL 80 % CENTRADOENTTRE MEDIO
    //  PARA LA IMAGEN CENTRADO, Y QUE QUEDE UN 10% EN CADA LADO PARA PONER EL NOMBRE.
    //  MIRAR DE TRAER LA IMAGEN DEL PAIS HACIENDO LA LLAMADA.
    //  ARREGLAR EL NOMBRE QUE ES DEMASIADO LARGO TRALLENDO SOLO EL APELLIDO


    return (

        <>
            <div className='card-player' style={{ backgroundImage: `url(${image_path})` }}>

                <div className='card-player-name' >{common_name}</div>
            </div>

        </>
    )

}