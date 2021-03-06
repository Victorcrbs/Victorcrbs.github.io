Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    "pages": [
        {
            "name": "page1",
            "elements": [ 
                {
                    "type": "text",
                    "name": "nome",
                    "title": "Nome",
                    "placeHolder": "Digite seu nome",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "email",
                    "title": "E-mail",
                    "placeHolder": "Digite seu e-mail",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "nomecolab",
                    "title": "Nome do colaborador a ser avaliado",
                    "placeHolder": "Digite o nome do colaborador a ser avaliado",
                    "isRequired": true
                },
                {
                    "type": "rating",
                    "name": "eficiencia",
                    "title": "Avalie a eficiência deste colaborador:",
                    "isRequired": true,
                    "rateMin": 1,
                    "rateMax": 10,
                },
                {
                    "type": "comment",
                    "name": "eficienciacomment",
                    "title": "Algum comentário adicional?",
                    "placeHolder":"Este atributo está relacionado a eficiência do liderado em realizar entregas no prazo e dentro do orçamento estabelecido para a atividade."
                },
                {
                    "type": "rating",
                    "name": "eficacia",
                    "title": "Avalie a eficácia deste colaborador:",
                    "isRequired": true,
                    "rateMin": 1,
                    "rateMax": 10,
                },
                {
                    "type": "comment",
                    "name": "eficaciacomment",
                    "title": "Algum comentário adicional?",
                    "placeHolder":"Este atributo está relacionado a eficiência do liderado em realizar entregas no prazo e dentro do orçamento estabelecido para a atividade."
                },
                {
                    "type": "rating",
                    "name": "postura",
                    "title": "Avalie a postura deste colaborador:",
                    "isRequired": true,
                    "rateMin": 1,
                    "rateMax": 10,
                },
                {
                    "type": "comment",
                    "name": "posturacomment",
                    "title": "Algum comentário adicional?",
                    "placeHolder":"Este atributo avalia a postura do liderado em relação a disponibilidade, assiduidade e forma de expressão no ambiente de trabalho."
                },
            ]
        },
        {
            "name": "page2",
            "elements": [
                {
                    "type": "rating",
                    "name": "resiliencia",
                    "title": "Avalie a resiliência deste colaborador:",
                    "isRequired": true,
                    "rateMin": 1,
                    "rateMax": 10,
                },
                {
                    "type": "comment",
                    "name": "resilienciacomment",
                    "title": "Algum comentário adicional?",
                    "placeHolder":"Este atributo avalia o comportamento do liderado diante de momentos de tensões, situações complexas e prazos sem flexibilidade."
                },
                {
                    "type": "rating",
                    "name": "desafios",
                    "title": "Avalie como o colaborador reage a desafios:",
                    "isRequired": true,
                    "rateMin": 1,
                    "rateMax": 10,
                },
                {
                    "type": "comment",
                    "name": "desafioscomment",
                    "title": "Algum comentário adicional?",
                    "placeHolder":"Este atributo avalia o comportamento diante de situações em que envolvem atividades fora do cotidiano do liderado. Ainda avalia o aprendizado para execução de uma nova atividade, ou projeto novo."
                    
                },
                {
                    "type": "rating",
                    "name": "etica",
                    "title": "Avalie a ética deste colaborador:",
                    "isRequired": true,
                    "rateMin": 1,
                    "rateMax": 10,
                },
                {
                    "type": "comment",
                    "name": "eticacomment",
                    "title": "Algum comentário adicional?",
                    "placeHolder":"Este atributo avalia o comportamento do liderado diante de equívocos cometidos, apresentação dos reais resultados do seu trabalho e o posicionamento em relação aos ruídos de informações do ambiente de trabalho."
                },
            ]
        },
        {
            "name": "page3",
            "elements": [
                {
                    "type": "rating",
                    "name": "rp",
                    "title": "Avalie como o colaborador atua em sua resolução de problemas:",
                    "isRequired": true,
                    "rateMin": 1,
                    "rateMax": 10,
                },
                {
                    "type": "comment",
                    "name": "rpcomment",
                    "title": "Algum comentário adicional?",
                    "placeHolder":"Este atributo avalia como o colaborador atua diante da resolução de problemas no seu dia a dia e se o liderado é ativo ou reativo nestas situações."
                },
                {
                    "type": "rating",
                    "name": "comunicacao",
                    "title": "Avalie como o colaborador atua em sua comunicação:",
                    "isRequired": true,
                    "rateMin": 1,
                    "rateMax": 10,
                },
                {
                    "type": "comment",
                    "name": "comunicacaocomment",
                    "title": "Algum comentário adicional?",
                    "placeHolder":"Este atributo avalia a comunicação com todos do ambiente do trabalho. Considera a habilidade para emissão, recepção e feedback das mensagens, seja por meio verbal ou escrito."
                },
                {
                    "type": "rating",
                    "name": "pro",
                    "title": "Avalie a proatividade deste colaborador:",
                    "isRequired": true,
                    "rateMin": 1,
                    "rateMax": 10,
                },
                {
                    "type": "comment",
                    "name": "procomment",
                    "title": "Algum comentário adicional?",
                    "placeHolder":"Este atributo avalia a habilidade em se dispor em ajudar na execução das atividades, sem a necessidade da solicitação de outra pessoa."
                },
            ]
        },
        {
            "name": "page4",
            "elements": [
                {
                    "type": "rating",
                    "name": "relinter",
                    "title": "Avalie como o colaborador atua em seus relacionamentos interpessoais:",
                    "isRequired": true,
                    "rateMin": 1,
                    "rateMax": 10,
                },
                {
                    "type": "comment",
                    "name": "relintercomment",
                    "title": "Algum comentário adicional?",
                    "placeHolder":"Este atributo avalia a habilidade de se relacionar de forma educada e cordial com todos os alunos da equipe: independente do cargo, classe social, orientação sexual, cor e etnia"
                },
                {
                    "type": "rating",
                    "name": "col",
                    "title": "Avalie a colaboração com a equipe deste colaborador:",
                    "isRequired": true,
                    "rateMin": 1,
                    "rateMax": 10,
                },
                {
                    "type": "comment",
                    "name": "colcomment",
                    "title": "Algum comentário adicional?",
                    "placeHolder":"Este atributo avalia a habilidade do funcionário em compartilhar seus conhecimentos com o time, os status das suas atividades e auxílio na execução das atividades nas quais têm maior domínio."
                },
                {
                    "type": "rating",
                    "name": "releq",
                    "title": "Avalie o relacionamento com a equipe deste colaborador:",
                    "isRequired": true,
                    "rateMin": 1,
                    "rateMax": 10,
                },
                {
                    "type": "comment",
                    "name": "releqcomment",
                    "title": "Algum comentário adicional?",
                    "placeHolder":"Este atributo avalia o relacionamento do colaborador com o time, no posicionamento em relação à possíveis indisposições da equipe ou intrigas."
                },
            ]
        },
        {
            "name": "page5",
            "elements": [
                {
                    "type": "rating",
                    "name": "vlempresa",
                    "title": "Avalie a aderência deste colaborador aos valores e diretrizes da empresa:",
                    "isRequired": true,
                    "rateMin": 1,
                    "rateMax": 10,
                },
                {
                    "type": "comment",
                    "name": "vlempresacomment",
                    "title": "Algum comentário adicional?",
                    "placeHolder":"Este atributo avalia a Aderência aos valores e diretrizes da empresa refere-se à habilidade do funcionário em adotar a cultura organizacional, a missão e visão da empresa."
                },
            ]
        }
    ],
    "showQuestionNumbers": "off"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (sender) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
    });

survey.render("surveyElement");

function saveSurveyToPdf(filename, surveyModel, pdfWidth, pdfHeight) {
    var options = {
        fontSize: 14,
        margins: {
            left: 10,
            right: 10,
            top: 10,
            bot: 10
        },
        format: [pdfWidth, pdfHeight]
    };
    var surveyPDF = new SurveyPDF.SurveyPDF(json, options);
    surveyPDF.data = surveyModel.data;
    surveyPDF.save(filename);
}

document
    .getElementById("saveToPDFbtn")
    .onclick = function () {
        var pdfWidth = survey.pdfWidth || 210;
        var pdfHeight = survey.pdfHeight || 297;
        saveSurveyToPdf("RelatorioAVDITech.pdf", survey, pdfWidth, pdfHeight);
    };
