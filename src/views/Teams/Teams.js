
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import './Teams.scss'
import { URL_API, TOKEN } from '../../utils/constants'
import Loading from '../../components/Loading'
import { Container, Row, Col } from 'react-bootstrap'
import Card1 from '../../components/Card1'



export default function Teams() {

    const { idCountry } = useParams()
    const teams = useFetch(`${URL_API}countries/${idCountry}/teams?${TOKEN}`)

    if (teams.loading || !teams.result) {
        return <Loading />
    }

    return (
        <Container>
            <div className='teams'>
                <Row>
                    {teams.result.data.map(function (team, index) {
                        return <Col xs={12} md={3} ><Card1 data={team} link='plantilla' /></Col>

                    })}
                </Row>

            </div>
        </Container>
    )
}