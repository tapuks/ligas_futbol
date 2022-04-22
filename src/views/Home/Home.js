import useFetch from "../../hooks/useFetch"
import { Container, Row, Col, Card } from "react-bootstrap"
import { URL_API, TOKEN } from './../../utils/constants'
import Loading from "../../components/Loading"

import Card1 from "../../components/Card1"


import './Home.scss'


export default function Home() {


    const leagues = useFetch(`${URL_API}leagues?${TOKEN}`)

    if (leagues.loading || !leagues.result) {
        return (
            <Loading />
        )
    }


    return (
        <Container>
            <div className="home">
                <Row>
                    {leagues.result.data.map(function (team, index) {
                        return (
                            <Col className="text-center" xs={12} md={6} key={index}>
                                <Card1 id={team.country_id} data={team} link='teams' />
                            </Col>)
                    })}
                </Row>
            </div>

        </Container>

    )
}

