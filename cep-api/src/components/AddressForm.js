import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Container, Row, Col, Button } from 'reactstrap';

class AddressForm extends Component {
    //setando o estado inicial da aplicação: todos os campos do formulário estão vazios.
    constructor(props){
        super(props);
        this.state = {
            cep: '',
            bairro: '',
            logradouro: '',
            localidade: '',
            uf: '',
            numero: ''
        }
    }

    getCep = async (cep) => {
        return await fetch(`http://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())          
            .then(data => {
                return data;
            })
            .catch(err => console.log(err))
    };

    handleChange = async (field) => {
        const { name, value } = field
        this.setState({[name]: value})
        if(name === 'cep' && value.length ===8 ){
          
          const cepObject = await this.getCep(value)
          if(cepObject.erro){
            return
          }
          const { cep, logradouro, bairro, localidade, uf } = cepObject
          this.setState({cep, logradouro, bairro, localidade, uf})
        }
      }

    handleBlur = (value) => {
        
        const cepObject = this.getCep(value);
        const { cep, logradouro, bairro, localidade, uf } = cepObject;
        this.setState({cep, logradouro, bairro, localidade, uf})
    };

    render(){
        const { cep, logradouro, bairro, localidade, uf, numero } = this.state;

        return(
            <Container>
                <Row>
                    <Col sm="12" md={{ size:6, offset: 3 }}>
                        
                        <Form style={{textAlign:"left"}}>
                            <FormGroup>
                                <Label for="cep" >CEP</Label>
                                <Input 
                                    name="cep" 
                                    value={cep} 
                                    onChange={e => this.handleChange(e.target)} 
                                    onBlur={e => this.handleBlur(e.target.value)} 
                                    maxLength={9} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="logradouro" >Logradouro</Label>
                                <Input 
                                    name="logradouro"
                                    value={logradouro}
                                    onChange={e => this.handleChange(e.target)} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="bairro" >Bairro</Label>
                                <Input 
                                    name="bairro"
                                    value={bairro}
                                    onChange={e => this.handleChange(e.target)} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="localidade" >Localidade</Label>
                                <Input 
                                    name="localidade"
                                    value={localidade}
                                    onChange={e => this.handleChange(e.target)} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="uf" >UF</Label>
                                <Input 
                                    name="uf"
                                    value={uf}
                                    onChange={e => this.handleChange(e.target)} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="numero" >Número</Label>
                                <Input 
                                    name="numero"
                                    value={numero}
                                    onChange={e => this.handleChange(e.target)} />
                            </FormGroup>

                            <FormGroup>
                                <Button 
                                    color="success" 
                                    onClick={this.verificaCep}> Enviar 
                                </Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AddressForm;