import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
type query {
    clientes: [Cliente]
}

type Cliente {
    id: ID
    cpf_c: String
	nome_completo_c: String
	dt_nasc_c: Date
	sexo_c: String
	dt_reg_c: Date
	tel_cont1_c: String
	tel_cont2_c: String
	email_c: String
	pais_c: String
	estado_c: String
	logradouro_c: String
	bairro_c: String
	endereco_c: String
	cep_c: Int
}
`;
