import style from './Especialidades.module.css'



function Especialidades({setMenu}){
    setMenu('dbv')

    // [['titulo', 'descricao', 'link']]
    const especialidades = [
        ['ADRA (AD)', 
        'Alívio da Fome, Avaliação da Comunidade, Serviço Comunitário, Respostas a Emergências e Desastres, Alfabetização, Resolução de Conflitos, Reassentamento de Refugiados e Desenvolvimento Comunitário.', 
        'https://mda.wiki.br/ADRA'],

        ['Artes e Habilidades Manuais (HM)',
        'Automodelismo, Trabalhos com Agulha, Desenho e Pintura, Musica, Letreiros e Cartazes, Cestaria, Trabalhos em Metal, Arte de Oleiro, Entalhe em Madeira, Ornamentação com Flores, Pintura em Vidro, Tecelagem, Aeromodelismo, Escultura, Cerâmica, Pintura em Tecido, Trabalhos em Feltro, Trabalhos em Acrílico, Modelagem e Fabricação de Sabão, Herança Cultural, Modelagem em Gesso, Crochê, Tricô, Arte de Trançar, etc.',
        'https://mda.wiki.br/Artes_e_Habilidades_Manuais'],

        ['Atividades Agrícolas (AA)',
        'Avicultura, Jardinagem e Horticultura, Agricultura Familiar de Subsistência, Apicultura, Agricultura, Pescaria, Criação de Gado Leiteiro, Pomicultura, Floricultura, Criação de Cavalos, Criação de Pombos, Criação de Ovelhas, Pecuária, Criação de Cabras, etc.',
        'https://mda.wiki.br/Atividades_Agr%C3%ADcolas'],

        ['Atividades Missionárias e Comunitárias (AM)',
        'Arte de Contar Histórias, Arte em Fantoches, Etnologia Missionária, Colportagem, Cidadania Cristã, Estudo de Línguas, Evangelismo Pessoal, Liderança Juvenil, Testemunho Juvenil, Asseio e Cortesia Cristã, Vida Familiar, Temperança, Língua de Sinais, Mordomia, Língua de Sinais, Marcação Bíblica, Pregador Evangelista, Santuário, Dramatização Cristã, etc.',
        'https://mda.wiki.br/Atividades_Mission%C3%A1rias_e_Comunit%C3%A1rias'],

        ['Atividades Profissionais (AP)',
        'Conserto de Sapatos, Fotografia, Mecânica Automotiva, Radioamadorismo, Datilografia, Eletricidade, Carpintaria, Corte e Costura, Taquigrafia, Tipografia, Marcenaria, Encadernação, Alvenaria, Barbearia, Colocação de Papel,de Parede, Contabilidade, Evangelismo, Hidráulica, Jornalismo, Oficio de Alfaiate, Radioeletrônica, Magistério, Radioamadorismo, Cães - Cuidado e Treinamento, Serviço Rádio do Cidadão, etc.',
        'https://mda.wiki.br/Atividades_Profissionais'],

        ['Atividades Recreativas (AR)',
        'Arte de Acampar, Cultura Física, Natação, Salvamento de Afogados, Ciclismo, Excursionismo Pedestre, Filatelia, Arco e Flecha, Caiaque, Canoagem, Numismática, Navegação, Vela, Fogueiras e Cozinha ao Ar Livre, Mapa e Bússola, Pioneiria, Remo, Vida Silvestre, Equitação, Esqui Aquático, Mergulho Livre, Saltos Ornamentais, etc.',
        'https://mda.wiki.br/Atividades_Recreativas'],

        ['Ciência e Saúde (CS)', 
        'Primeiros Socorros, Enfermagem Básica, Óptica, Nutrição, Alerta Vermelho, Reanimação Cardiopulmonar, Resgate Básico, Física, Microscopia, Digestão, Ossos, Músculos e Articulações, Sistema Nervoso, Sangue e defesas do Corpo, Hereditariedade, Coração e Circulação, Bioquímica, Higiene Oral, Metodologia de Estudo, Prevenção de Doenças Tropicais, Patrimônio Histórico, Saúde Mental, Sexualidade Humana, Sistema Respiratório, Habilidades em Matemática, etc.',
        'https://mda.wiki.br/Ci%C3%AAncia_e_Sa%C3%BAde'],

        ['Estudos da Natureza (EN)',
        'Aranhas, Astronomia, Aves, Aves Domésticas, Flores, Árvores, Insetos, Mariposas e Borboletas, Fungos, Mamíferos, Répteis, Rochas e Minerais, Moluscos, Cactos, Climatologia, Fosseis, Samambaias, Arbustos, Aves de Estimação, Gramíneas, Peixes, Anfíbios, Felinos, Rebanhos Domésticos, Cães, Areis, Algas, Cetáceos, Ervas, Eucalipto, Sementes, etc.',
        'https://mda.wiki.br/Estudos_da_Natureza'],
        ['Habilidades Domésticas (HD)', 
        'Arte Culinária, Técnicas de Lavanderia, Cuidados de Bebe, Cuidados da Casa, Técnicas de Fazer Conservas, Orçamento Familiar, Panificação, Costura Básica, Comidas Típicas, Congelamento de Alimentos e Desidratação de Alimentos.',
        'https://mda.wiki.br/Habilidades_Dom%C3%A9sticas'],

        ['Mestrados de Especialiades (ME)', 
        'Mestrado em ADRA, Mestrado em Artes e Habilidades Manuais, Mestrado em Atividades Agrícolas, Mestrado em Testificação, Mestrado em Atividades Profissionais, Mestrado em Ciência e Tecnologia, Mestrado em Aquática, Mestrado em Esportes, Mestrado em Vida Campestre, Mestrado em Atividades Recreativas, Mestrado em Saúde, Mestrado em Zoologia, Mestrado em Ecologia, Mestrado em Botânica e Mestrado em Habilidades Domésticas.',
        'https://mda.wiki.br/Mestrados']


    ]

    let listaEspecialidades = []
    
    for(let i =  0; i < especialidades.length; i++){
        listaEspecialidades.push(
            <div className="col-sm-6 col-md-3">
                <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{especialidades[i][0]}</h5>
                        <p className="card-text">{especialidades[i][1]}</p>
                        <a href={especialidades[i][2]} target="_blank" className="card-link" style={{textDecoration: 'underline'}}>Ver cada especialidade</a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1 className="mb-4">Especialidades dos desbravadores</h1>
            <p>As especialidades são atividades teóricas e práticas focadas em determinado tema específico, como se fossem cursos intensivos. Seu objetivo é levar o desbravador a assimilar novos conhecimentos, desde áreas referentes a nutrição e a saúde, até áreas recreativas, de forma que o capacite e treine para lidar com as mais diversas situações.</p>
            <div className={"row mb-5 justify-content-center " + style.especialidades}>
                {listaEspecialidades}
            </div>

        </div>
    )
}

export default Especialidades