import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button";

import { faGlobe, faMobile, faMobileAlt, faShieldAlt } from "@fortawesome/free-solid-svg-icons";

import IconText from "./IconText";
import "./Institutional.scss";

const Institutional = () => {
    return (
        <section className="institutional text-light py-5">
            <Container>
            <Row>
                <Col xs={12} lg={5} />

                <Col xs={12} lg={7}>
                    <h2 className="institutional-title my-5">Já nascemos digital</h2>
                    <p className="mb-5">
                        Qui do excepteur consequat eiusmod do quis magna do mollit laborum nulla exercitation.
                        Ipsum tempor exercitation labore qui anim esse mollit magna nisi sit voluptate voluptate sit non.
                        Reprehenderit Lorem aute dolor amet voluptate nulla enim ipsum ut culpa cillum. Mollit incididunt
                        occaecat reprehenderit magna adipisicing officia elit aliqua quis aliqua.
                    </p>

                    <div className="px-2">
                        <IconText icon={faMobileAlt} className="mb-2 p-0">Sem filas e sem burocracia</IconText>
                        <IconText icon={faMobile} className="mb-2">Simples e prático</IconText>
                        <IconText icon={faGlobe} className="mb-2">Abertura de conta 100% online</IconText>
                        <IconText icon={faShieldAlt} className="mb-2">Transações seguras</IconText>

                    </div>
                    <Button variant="outline-light" className="mt-5">Abra sua conta</Button>
                </Col>
            </Row>
        </Container>
        </section>
        
    )
}

export default Institutional;