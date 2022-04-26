import useFetch from '../../hooks/useFetch'
import { TOKEN, URL_API } from '../../utils/constants'
import Loading from '../Loading'
import { Col, Row, Container, Card } from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
import classNames from 'classnames'
import { useEffect, useState } from 'react'



import './Players.scss'


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

                {/* {plantilla.result.data.map(function (player, index) {
                    if (index < 1) {
                        return <Col xs={12} key={index}> <CardPlayer player_id={player.player_id} /></Col>
                    }
                })} */}
            </div>
        </Container>
    )

}

function CardPlayer(props) {
    const { player_id } = props
    // const player = useFetch(`${URL_API}players/${player_id}?${TOKEN}`)
    const [imgNationality, setImgNationality] = useState(null)
    // if (!player.result || player.loading) {
    //     return <Loading />
    // }

    // console.log('player', player);
    // const { position_id, lastname, nationality, birthdate, image_path } = player.result.data



    // PONER UN DIV CON EL 80 % CENTRADOENTTRE MEDIO
    //  PARA LA IMAGEN CENTRADO, Y QUE QUEDE UN 10% EN CADA LADO PARA PONER EL NOMBRE.
    //  MIRAR DE TRAER LA IMAGEN DEL PAIS HACIENDO LA LLAMADA.
    //  ARREGLAR EL NOMBRE QUE ES DEMASIADO LARGO TRALLENDO SOLO EL APELLIDO





    return (

        <>
            <GetImgNationality setImgNationality={setImgNationality} nationality={3} />
            <div className='card-player'>
                {/* <div className='card-player-photo' style={{ backgroundImage: `url(${image_path})` }}></div>
                <div className='card-player-name' >{lastname.slice(0, 11)}</div> */}
                {/* <div className='card-player-number'>{position_id}</div> */}
                <div className='card-player-country' style={imgNationality ? { backgroundImage: `url(${imgNationality})` } : ''} ></div>


            </div>

        </>
    )

}

function GetImgNationality(props) {
    const { setImgNationality, nationality } = props
    const countries = useFetch(`${URL_API}countries?${TOKEN}`)

    if (!countries.result || countries.loading) {
        return <Loading />
    }
    else {
        countries.result.data.map(function (item) {
            if (item.name == nationality) {
                setImgNationality(item.image_path)
            }

        })
    }


}