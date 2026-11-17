/* ============================================================
   CONTENIDO del Plan de Desarrollo 2026–2030 en breve
   Edita aquí los textos. No es necesario tocar app.js.
   - SECT / SEC_H: nombres de los sectores
   - PILARES: los 6 pilares y qué ejes agrupa cada uno
   - EJES: título, resumen de tarjeta y sectores de cada eje
   - DET: detalle de cada eje (objetivo, "lo que te toca",
     objetivos específicos, estrategias y metas)
     En cada estrategia, [C,P,I] = 1 si responde a Cercana,
     Progresista o Incluyente; 0 si no.
   ============================================================ */
const SEC_H={E:"Si eres estudiante",D:"Si eres docente o investigador(a)",A:"Si eres personal administrativo",C:"Para toda la comunidad"};
const SECT={E:"Estudiantes",D:"Docentes e investigación",A:"Personal administrativo",C:"Toda la comunidad"};
const PILARES=[
 {n:"I",t:"Estudiantado con oportunidades para su pleno desarrollo personal",ejes:[1,2]},
 {n:"II",t:"Investigación y desarrollo académico de calidad y equidad",ejes:[3,4,5]},
 {n:"III",t:"Cultura y deporte para el desarrollo integral",ejes:[6,7]},
 {n:"IV",t:"Dignificación del personal académico y administrativo",ejes:[8,9]},
 {n:"V",t:"Gestión y administración al servicio de la comunidad",ejes:[10,11,12,13]},
 {n:"VI",t:"Incidencia y reconocimiento social",ejes:[14,15,16,17,18]}
];
const EJES={
 1:{t:"Estudiantado con oportunidades para su pleno desarrollo",s:"Programas acreditados, acompañamiento para que termines tu carrera, movilidad e inglés, y un puente hacia el empleo.",sec:["E"]},
 2:{t:"Estudios avanzados de excelencia",s:"Posgrados evaluados y reconocidos para formar especialistas de alto nivel.",sec:["E","D"]},
 3:{t:"Investigación abierta, inclusiva y de calidad",s:"Cuerpos Académicos más sólidos, más proyectos con financiamiento externo y laboratorios en mejores condiciones.",sec:["D","E"]},
 4:{t:"Innovación y transferencia de tecnología",s:"Llevar el conocimiento de la Facultad a los sectores público, privado y social.",sec:["D"]},
 5:{t:"Divulgación de la ciencia abierta",s:"Que la ciencia hecha en la Facultad llegue a más personas, con acceso abierto.",sec:["C","D"]},
 6:{t:"Cultura para el desarrollo integral",s:"Actividades culturales, artísticas y de lectura de forma continua y para todas y todos.",sec:["C"]},
 7:{t:"Deporte universitario",s:"Más participación en el deporte, apoyo al talento e instalaciones seguras e inclusivas.",sec:["C","E"]},
 8:{t:"Formación integral del docente",s:"Actualización pedagógica, disciplinar y digital, segunda lengua y estímulos transparentes.",sec:["D"]},
 9:{t:"Dignificación de las y los trabajadores",s:"Capacitación, herramientas, buen clima laboral y reconocimiento para el personal administrativo.",sec:["A"]},
 10:{t:"Gestión administrativa al servicio de la comunidad",s:"Trámites digitales, mantenimiento oportuno y servicios administrativos eficientes.",sec:["A","C"]},
 11:{t:"Fortalecimiento tecnológico",s:"Renovar equipo de cómputo, formar en cultura digital y proteger la información.",sec:["C"]},
 12:{t:"Gobernanza",s:"Órganos colegiados fuertes, gestión participativa y seguridad en la Facultad.",sec:["C"]},
 13:{t:"Manejo de recursos con integridad y transparencia",s:"Control y trazabilidad del presupuesto, y rendición de cuentas a la comunidad.",sec:["C","A"]},
 14:{t:"Reconocimiento de la diversidad social",s:"Igualdad de género, derechos humanos y no discriminación en toda la vida de la Facultad.",sec:["C"]},
 15:{t:"Construcción de una cultura de paz",s:"Prevenir la violencia y aprender a resolver conflictos de forma pacífica.",sec:["C"]},
 16:{t:"Retribución social",s:"Convenios y proyectos con comunidades mexiquenses para devolver a la sociedad lo que aprendemos.",sec:["C"]},
 17:{t:"Comunicación universitaria amplia y moderna",s:"Canales institucionales al día y difusión de los logros de nuestra comunidad.",sec:["C"]},
 18:{t:"Sostenibilidad ambiental y ética ecológica",s:"Un sistema de gestión ambiental con indicadores verificables y más cultura ecológica.",sec:["C"]}
};
// Detalle de los ejes desarrollados. cpi = [Cercana, Progresista, Incluyente]
const DET={
1:{
 obj:"Que cada estudiante de Biología, Biotecnología, Física y Matemáticas reciba una formación de calidad reconocida, cuente con acompañamiento durante su carrera y egrese con lo necesario para incidir en su entorno laboral y social.",
 src:"Plan de Desarrollo, apartado 1",
 foryou:{
  E:["Tutoría académica para el 100 % del estudiantado","Asesorías en matemáticas, física, biología y biotecnología, con atención a quien va en riesgo","Becas y apoyos, y servicio médico en dos turnos","Campañas sobre todas las modalidades de titulación","Movilidad, certificación de inglés y prácticas profesionales con más instituciones"],
  D:["Capacitación alineada con los criterios de los organismos acreditadores","Integración de los criterios del SEAES en programas y guías de los planes reestructurados","Formación en competencias docentes bilingües (UACI)"]
 },
 oes:[
  {k:"Objetivo 1",t:"Programas acreditados y de calidad",d:"Mantener la acreditación nacional e internacional de las cuatro licenciaturas y avanzar hacia estándares internacionales.",
   st:[["Plan documentado para atender las recomendaciones de los organismos acreditadores",[1,1,0]],["Gestión de infraestructura y equipamiento que piden los dictámenes",[1,1,1]],["Capacitación docente continua alineada con la acreditación",[1,1,0]],["Criterios transversales del SEAES en los cuatro planes reestructurados, con seguimiento semestral",[1,1,1]],["Más acervo físico y digital en la Biblioteca de Área del Campus El Cerrillo",[1,0,1]]],
   me:[["4","planes de licenciatura reacreditados durante la administración"],["100 %","de la matrícula en programas reconocidos por su excelencia, desde 2027"],["1,400","estudiantes de licenciatura para 2030"],["2","planes reestructurados con contenidos del SEAES (Biología y Matemáticas)"],["4","manuales de prácticas actualizados cada año"]]},
  {k:"Objetivo 2",t:"Inglés y movilidad",d:"Ampliar las experiencias de internacionalización para formarse con perspectiva global e intercultural.",
   st:[["Difusión de certificaciones de inglés (TOEFL, Cambridge, CELe) con la DAL",[0,1,1]],["Más unidades de aprendizaje con componentes en inglés (UACI)",[1,1,1]],["Recepción de estudiantes extranjeros en los cuatro programas",[0,1,0]]],
   me:[["12","estudiantes al año en movilidad nacional e internacional, desde 2027"],["3","estudiantes al año en movilidad dentro de la UAEMéx"],["2","estudiantes al año certificados en una segunda lengua"]]},
  {k:"Objetivo 3",t:"Que termines tu carrera",d:"Reducir el abandono escolar y mejorar la eficiencia terminal y la titulación.",
   st:[["Día T renovado, con actividades por programa y semestre",[1,0,1]],["Detección temprana de estudiantes en riesgo de abandono, cada semestre",[1,1,1]],["Campañas semestrales sobre modalidades de titulación",[1,1,0]],["Gestión para recuperar o sustituir becas reducidas en 2024-2025",[0,1,1]],["Consultorio médico en dos turnos y Seguro Facultativo para más del 92 %",[1,0,1]]],
   me:[["10.73 %","de abandono escolar como máximo al cierre de la administración"],["28.52 %","de eficiencia terminal por cohorte en 2030"],["11.72 %","de titulación por cohorte en 2030"],["3,276","becas, apoyos o estímulos durante la administración"],["84 %","de sustentantes del EGEL con resultado satisfactorio o sobresaliente, cada año"]]},
  {k:"Objetivo 4",t:"Del aula al empleo",d:"Fortalecer la vinculación con los sectores académico, productivo y social para favorecer la inserción laboral.",
   st:[["Análisis anual de resultados del ProTEP para revisar los planes de estudio",[0,1,0]],["Vinculación con sociedades científicas y empleadores",[1,0,1]],["Más convenios con instituciones receptoras de prácticas profesionales",[1,1,1]]],
   me:[["620","estudiantes y personas egresadas en prácticas o estancias profesionales"],["3","convenios vigentes por programa educativo, como mínimo"],["1","nuevo programa en modalidad dual en 2027"],["25","estudiantes al año en capacitación para la empleabilidad"]]}
 ]},
3:{
 obj:"Hacer investigación de calidad, colaborativa, abierta y útil para la sociedad, con Cuerpos Académicos consolidados, nuevos investigadores, más recursos y mejor infraestructura científica.",
 src:"Plan de Desarrollo, apartado 3",
 foryou:{
  D:["Acompañamiento administrativo para ingresar, permanecer y promoverse en SNII y PRODEP","Estancias de investigación y recepción de investigadores visitantes","Programa de mantenimiento de equipos y ampliación de cómputo con GPU","Capacitación en cómputo de alto rendimiento"],
  E:["Participación de estudiantes de licenciatura y posgrado en proyectos registrados","Acceso a servicios especializados de MANDRA para proyectos de formación"]
 },
 oes:[
  {k:"Objetivo 1",t:"Cuerpos Académicos e investigadores más fuertes",d:"Consolidar los Cuerpos Académicos y aumentar la participación en SNII y PRODEP.",
   st:[["Colaboración en redes nacionales e internacionales y proyectos conjuntos, con el CIRB y el CICBA",[1,0,1]],["Estancias y recepción de investigadores visitantes",[0,1,1]]],
   me:[["8","Cuerpos Académicos de calidad cada año"],["50 %","de los Cuerpos Académicos con investigación orientada a problemas sociales, desde 2027"],["28.57 %","de PTC en redes con pares extranjeros, desde 2028"],["2","investigadores visitantes al año"]]},
  {k:"Objetivo 2",t:"Más proyectos, con impacto",d:"Incrementar los proyectos de investigación y su contribución a problemas prioritarios del entorno.",
   st:[["Registro de proyectos orientados a problemáticas regionales, nacionales e internacionales",[1,1,0]],["Diversificar el financiamiento con convocatorias y convenios",[1,0,1]],["Publicar, participar en foros y proteger la propiedad intelectual",[1,1,1]]],
   me:[["3","proyectos de investigación aplicada con financiamiento externo"],["2","convocatorias externas por año"],["8","estudiantes de licenciatura en proyectos registrados"],["1","proyecto interdisciplinario Biología–Física–Matemáticas–Biotecnología en 2029"]]},
  {k:"Objetivo 3",t:"Laboratorios en buenas condiciones",d:"Fortalecer la infraestructura científica para investigar, formar y ofrecer servicios especializados.",
   st:[["Mantenimiento, modernización y actualización de equipos de centros y laboratorios",[1,1,0]],["Servicios especializados, certificación de laboratorios y mejora continua",[1,1,1]]],
   me:[["1","programa de mantenimiento preventivo y correctivo desde 2027"],["5","proyectos al año atendidos por MANDRA, desde 2027"],["2","ampliaciones de cómputo acelerado con GPU"],["1","laboratorio en proceso de certificación de pruebas para 2028"]]}
 ]}
};

Object.assign(DET,{
2:{
 obj:"Que la maestría y el doctorado de la Facultad mantengan su reconocimiento de excelencia, crezcan con acceso equitativo y formen especialistas de alto nivel que investiguen con pertinencia social.",
 src:"Plan de Desarrollo, apartado 2",
 foryou:{
  E:["Seguimiento a tu trayectoria para detectar a tiempo riesgos académicos","Procedimiento de egreso y graduación claro y difundido","Catálogo de convocatorias de movilidad y apoyo para presentar tu trabajo en eventos científicos","Tesis vinculadas con la Agenda Estratégica de Investigación y con otros sectores"],
  D:["Comités curriculares para evaluar y actualizar los posgrados","Nuevas líneas de generación y aplicación del conocimiento","Convenios para proyectos de investigación dual en posgrado"]
 },
 oes:[
  {k:"Objetivo 1",t:"Posgrados evaluados y reconocidos",d:"Fortalecer la evaluación de la maestría y el doctorado para garantizar su excelencia.",
   st:[["Planes de acción documentados para atender las observaciones de la SECIHTI",[1,0,0]],["Comisiones para evaluar y actualizar los programas de posgrado",[1,1,0]]],
   me:[["4","programas de posgrado en el Sistema Nacional de Posgrados, cada año"],["4","planes de mejora para atender las observaciones de la SECIHTI"],["3","comités curriculares: Maestría y Doctorado en Ciencias y Maestría en Ciencia de Datos"]]},
  {k:"Objetivo 2",t:"Más estudiantes de posgrado",d:"Aumentar la matrícula con acceso equitativo, diverso e incluyente.",
   st:[["Difusión de los posgrados en plataformas digitales actualizadas de la Facultad",[1,1,1]]],
   me:[["53","estudiantes de posgrado para 2030"]]},
  {k:"Objetivo 3",t:"Que concluyas tu posgrado",d:"Impulsar la permanencia, el egreso y la graduación, y reducir el abandono.",
   st:[["Difusión del procedimiento de egreso",[1,1,0]],["Detección temprana de estudiantes en riesgo mediante el seguimiento de su trayectoria",[1,0,0]]],
   me:[["27","personas graduadas de posgrado durante la administración"],["100 %","de la graduación por trabajo terminal de grado, cada año"],["1","tablero anual de indicadores de trayectoria de posgrado"]]},
  {k:"Objetivo 4",t:"Tesis con pertinencia social",d:"Incorporar al estudiantado de posgrado a proyectos y tesis vinculados con la Agenda Estratégica de Investigación.",
   st:[["Difusión de la Agenda Estratégica de Investigación para orientar los protocolos de tesis",[1,0,0]],["Talleres de divulgación y transferencia de tecnología con distintos sectores",[1,1,1]],["Exploración de nuevas líneas de investigación",[1,0,1]],["Convenios con distintos sectores que impacten en la formación de posgrado",[0,1,0]]],
   me:[["19","líneas de generación y aplicación del conocimiento, desde 2027"],["5","protocolos registrados vinculados con la Agenda Estratégica"],["3","proyectos interdisciplinarios de posgrado con dos o más áreas"],["3","convenios para investigación dual en posgrado"]]},
  {k:"Objetivo 5",t:"Movilidad y proyección",d:"Promover la producción académica, la movilidad y la participación en redes y eventos científicos.",
   st:[["Catálogo de convocatorias de movilidad nacional e internacional",[1,1,1]],["Participación del estudiantado de posgrado en eventos científicos",[1,1,1]]],
   me:[["6","estudiantes de posgrado en movilidad o estancia corta"],["3","estudiantes al año en eventos científicos internacionales, desde 2027"]]}
 ]},
4:{
 obj:"Acercar el conocimiento que se genera en la Facultad a los sectores público, privado y social, protegerlo cuando corresponda y convertirlo en innovación con impacto en el Estado de México.",
 src:"Plan de Desarrollo, apartado 4",
 foryou:{
  D:["Apoyo para registrar propiedad intelectual y patentes","Portafolio anual de tecnologías disponibles para transferencia","Encuentros con colegas que ya cuentan con patentes"],
  E:["Ferias científicas, concursos y encuentros de casos de éxito (Green fluidics, Rapax, Biofrost, entre otros)","Reunión anual con egresados que innovan y emprenden"]
 },
 oes:[
  {k:"Objetivo 1",t:"Vinculación para innovar",d:"Fortalecer la vinculación estratégica para potenciar la innovación y el impacto social del conocimiento.",
   st:[["Difusión de los productos generados para impulsar su registro de propiedad intelectual",[1,0,0]],["Acercamiento con empresas, instituciones y organizaciones interesadas en soluciones científicas",[1,0,1]]],
   me:[["1","expediente de solicitud de patente o desarrollo tecnológico ante el IMPI, en 2029"],["1","proyecto academia–gobierno–empresa–sociedad, en 2028"]]},
  {k:"Objetivo 2",t:"Investigación aplicada e interdisciplinaria",d:"Desarrollar proyectos que integren distintas áreas para atender problemas científicos, tecnológicos y sociales.",
   st:[["Catálogo actualizado de la oferta tecnológica de la Facultad y sus centros",[1,0,0]],["Ferias científicas y concursos para estudiantes y personal académico",[1,1,0]],["Identificación de capacidades de innovación con colaboración interinstitucional",[1,0,0]]],
   me:[["1","portafolio anual de tecnologías para transferencia, desde 2027"],["5","proyectos transversales al año con la infraestructura de MANDRA"],["1","encuentro anual de casos de éxito, desde 2027"],["2","ferias o foros de innovación externos"]]},
  {k:"Objetivo 3",t:"Proteger lo que creamos",d:"Impulsar la protección y el aprovechamiento de la propiedad intelectual.",
   st:[["Difusión de logros y capacidades en innovación",[1,0,0]],["Reuniones con investigadores que cuentan con patentes para compartir su experiencia",[1,1,0]]],
   me:[["2","personas capacitadas en propiedad intelectual y gestión de activos de conocimiento"],["2","encuentros entre investigadores con productos de innovación"]]},
  {k:"Objetivo 4",t:"Estudiantes que innovan",d:"Incrementar la participación de estudiantes de licenciatura y posgrado en investigación, innovación y desarrollo tecnológico.",
   st:[["Actividades con personal especializado para despertar ideas de innovación",[1,0,0]]],
   me:[["1","reunión anual con egresados que innovan o emprenden"]]}
 ]},
5:{
 obj:"Que la ciencia hecha en la Facultad llegue a más personas como un bien público, con divulgación dentro y fuera del campus y publicaciones de acceso abierto.",
 src:"Plan de Desarrollo, apartado 5",
 foryou:{
  E:["Convocatorias de divulgación como el Estímulo al Talento Científico y Cultural «José Antonio Alzate»","Jornada anual de Inmersión Científica y Divulgación Disciplinaria"],
  D:["Capacitación en ciencia abierta, gestión de datos y publicación digital","Apoyo para publicar en revistas de acceso abierto y en el Repositorio Institucional"],
  C:["Festival de Ciencias para la Niñez y actividades en museos, ferias y escuelas"]
 },
 oes:[
  {k:"Objetivo 1",t:"Ciencia abierta para todas las audiencias",d:"Posicionar el conocimiento de la Facultad como un bien público accesible dentro y fuera de la institución.",
   st:[["Convocatorias de divulgación para estudiantes, como el Estímulo «José Antonio Alzate»",[1,0,1]],["Divulgación en ferias de ciencia, museos y escuelas de nivel básico y medio",[1,0,1]]],
   me:[["10","actividades de divulgación al año fuera de la Facultad"],["28","eventos académico-científicos, al menos uno internacional"],["1","Festival de Ciencias para la Niñez cada año, de 2026 a 2029"],["3","estudiantes al año en convocatorias externas de divulgación"]]},
  {k:"Objetivo 2",t:"Más publicaciones abiertas",d:"Incrementar la producción de publicaciones científicas y de divulgación con acceso abierto.",
   st:[["Publicación en revistas de acceso abierto vinculadas con la UAEMéx, como Redalyc",[1,0,0]],["Capacitación en herramientas de ciencia abierta y gestión de datos",[1,1,1]]],
   me:[["36 → 44","artículos en revistas indexadas para 2029"],["12","artículos de divulgación en plataformas de acceso abierto"],["10","productos científicos en el Repositorio Institucional"],["20","personas capacitadas en ciencia abierta"]]}
 ]},
6:{
 obj:"Ofrecer de forma continua actividades culturales, artísticas y de lectura, incluyentes y plurales, que den a la comunidad espacios de expresión, convivencia y formación humanística.",
 src:"Plan de Desarrollo, apartado 6",
 foryou:{
  C:["Talleres culturales, presentaciones artísticas y un festival cultural cada año","Un espacio físico permanente para la cultura desde 2028","Programa de fomento a la lectura presencial y digital","Actividades emblemáticas como calaveritas literarias y piñatas científicas"],
  E:["Apoyo institucional para talentos artísticos en eventos externos","Acompañamiento para publicar en el Fondo Editorial de la UAEMéx"]
 },
 oes:[
  {k:"Objetivo 1",t:"Vida cultural para toda la comunidad",d:"Incrementar la participación de toda la comunidad en la vida cultural de la Facultad.",
   st:[["Actividades culturales con convocatoria abierta y vinculación con el CEAC y la CUT de la UAEMéx",[1,1,0]],["Detección, acompañamiento y difusión del talento artístico de la comunidad",[1,1,0]],["Gestión de un espacio físico permanente para actividades artístico-culturales",[1,0,1]]],
   me:[["22","presentaciones artísticas durante la administración"],["9","talleres culturales"],["4","talentos artísticos apoyados para eventos externos"],["1","espacio cultural habilitado y en operación desde 2028"]]},
  {k:"Objetivo 2",t:"Cultura científica y humanística",d:"Fortalecer la lectura y la visibilidad del quehacer académico de la Facultad.",
   st:[["Fomento a la lectura con actividades presenciales y digitales",[1,0,1]],["Producción periódica de contenidos sobre el quehacer científico y cultural",[1,1,0]],["Acompañamiento para publicar en el Fondo Editorial de la UAEMéx",[1,1,1]]],
   me:[["1","programa anual de fomento a la lectura"],["1","texto de la comunidad en el Fondo Editorial, cada año"],["1","convenio de colaboración cultural"]]},
  {k:"Objetivo 3",t:"Nuestro patrimonio cultural",d:"Conservar, incrementar y difundir el patrimonio cultural y artístico de la Facultad.",
   st:[["Inventario, registro documental y adquisición de patrimonio cultural",[1,0,0]],["Exposiciones, publicaciones y canales digitales para darlo a conocer",[1,1,0]]],
   me:[["1","festival cultural anual con talentos de la Facultad"],["1","exposición anual del patrimonio cultural, desde 2027"],["2","nuevas piezas o acervos culturales"],["1","programa anual de conservación del patrimonio, desde 2027"]]}
 ]},
7:{
 obj:"Que más integrantes de la comunidad hagan deporte y actividad física, con apoyo al talento deportivo e instalaciones seguras e inclusivas, para fomentar el bienestar y la convivencia.",
 src:"Plan de Desarrollo, apartado 7",
 foryou:{
  E:["Torneos internos, ligas y mañanas deportivas","Catálogo de deportistas y gestión de apoyos para competir","3 equipos representativos de la Facultad"],
  D:["Actividades deportivas y recreativas pensadas para el personal académico"],
  A:["Actividades deportivas y recreativas pensadas para el personal administrativo"]
 },
 oes:[
  {k:"Objetivo 1",t:"Vida activa y saludable",d:"Fomentar hábitos de actividad física y vida saludable para el bienestar integral.",
   st:[["Programa de torneos internos, mañanas deportivas y ligas en diversas disciplinas",[1,1,1]],["Actividades deportivas y recreativas para el personal académico y administrativo",[1,1,1]]],
   me:[["50.04 %","del estudiantado en actividades de cultura física a 2030"],["26.32 %","del personal administrativo cada año"],["15.38 %","del personal académico cada año"]]},
  {k:"Objetivo 2",t:"Talento deportivo con equidad",d:"Apoyar el talento deportivo y su representación universitaria con equidad de género e inclusión.",
   st:[["Catálogo actualizado de deportistas vinculado con los programas universitarios",[1,1,1]],["Gestión de apoyos para competir en eventos estatales, nacionales e internacionales",[1,1,1]],["Participación de deportistas con discapacidad y de todos los géneros; deporte adaptado",[1,1,1]]],
   me:[["16","deportistas impulsados a nivel estatal, nacional e internacional"],["3","equipos representativos cada año"],["1","evento deportivo inclusivo cada año"]]}
 ]},
8:{
 obj:"Garantizar la actualización continua de la planta docente en lo pedagógico, disciplinar y digital, con apoyo para segunda lengua, estímulos transparentes y estabilidad laboral.",
 src:"Plan de Desarrollo, apartado 8",
 foryou:{
  D:["Programa permanente de actualización didáctica y disciplinar con la DIDEPA","Certificación en competencias digitales y en segunda lengua","Acompañamiento para trámites de PRODEP y SNII","Gestión de concursos de oposición y definitividad","Un espacio digno de trabajo para profesores de asignatura en 2027"]
 },
 oes:[
  {k:"Objetivo 1",t:"Formación docente continua",d:"Enriquecer la oferta de formación pedagógica, disciplinar y digital, alineada con el nuevo modelo educativo y la acreditación.",
   st:[["Programa permanente de actualización didáctica y disciplinar con la DIDEPA",[1,1,1]],["Certificación docente en competencias digitales mediante talleres y convenios",[0,1,1]],["Apoyo para obtener y renovar certificaciones internacionales en segunda lengua",[0,1,1]]],
   me:[["64.57 %","del personal académico en actividades de formación a 2029"],["40.16 %","capacitado en el nuevo modelo educativo"],["25.98 %","actualizado cada año en su disciplina"],["2","profesores con certificación internacional C1 en segunda lengua"]]},
  {k:"Objetivo 2",t:"PRODEP y SNII",d:"Consolidar la habilitación académica y el reconocimiento de la planta docente.",
   st:[["Acompañamiento administrativo para trámites y seguimiento de PRODEP y SNII",[1,1,0]],["Estancias de investigación y formación mediante convenios",[1,0,1]]],
   me:[["56","PTC en el SNII para 2030"],["68.57 %","de PTC con perfil PRODEP, desde 2027"],["9","académicos en estancias internacionales o de movilidad"]]},
  {k:"Objetivo 3",t:"Condiciones laborales dignas",d:"Impulsar condiciones dignas, equitativas y transparentes para la estabilidad y el desarrollo del personal académico.",
   st:[["Gestión de concursos de oposición y convocatorias de definitividad",[1,1,0]],["Espacios físicos y recursos adecuados para docentes de asignatura",[1,1,1]]],
   me:[["27","profesores con definitividad durante la administración"],["1","espacio de trabajo para profesores de asignatura en 2027"]]}
 ]},
9:{
 obj:"Profesionalizar y dignificar al personal administrativo con capacitación, herramientas adecuadas, buen clima laboral y reconocimiento, para un servicio eficiente y con sentido de pertenencia.",
 src:"Plan de Desarrollo, apartado 9",
 foryou:{
  A:["Capacitación en competencias básicas, TIC, equidad de género, ética y cultura de paz","Apoyo para titularte o continuar tus estudios","Actividades de integración del equipo","Promoción de convocatorias de reconocimiento y del Programa de Carrera Administrativa"]
 },
 oes:[
  {k:"Objetivo 1",t:"Un servicio de calidad",d:"Elevar la calidad y eficiencia del servicio que brinda el personal administrativo.",
   st:[["Apoyo para la titulación y superación académica del personal",[0,1,0]],["Actividades periódicas de integración del personal administrativo",[0,1,0]],["Promoción de convocatorias de reconocimiento a la trayectoria y el desempeño",[0,1,0]]],
   me:[["78.95 %","del personal capacitado en competencias básicas, desde 2027"],["78.95 %","capacitado en temas transversales, equidad, ética y paz"],["32","beneficiarios del Programa de Carrera Administrativa a 2029"],["21.05 %","capacitado cada año en tecnologías de la información"]]},
  {k:"Objetivo 2",t:"Mejora continua y reconocimiento",d:"Fortalecer las condiciones laborales y el reconocimiento externo del personal administrativo.",
   st:[["Medición periódica de indicadores de eficiencia y satisfacción para mejorar",[1,0,1]]],
   me:[["1","indicador de desempeño del personal, desde 2027"],["2","integrantes con nota al servicio administrativo"]]}
 ]},
10:{
 obj:"Modernizar la gestión administrativa con buen clima laboral, mantenimiento oportuno de instalaciones, procesos digitales y manuales actualizados, para ofrecer servicios eficientes y transparentes.",
 src:"Plan de Desarrollo, apartado 10",
 foryou:{
  C:["Encuesta anual de satisfacción con los servicios administrativos","Diagnóstico anual de la infraestructura y mantenimiento de aulas, laboratorios y áreas comunes"],
  A:["Plan de mejora a partir del reporte de clima laboral","Manuales de organización y de procedimientos actualizados"]
 },
 oes:[
  {k:"Objetivo 1",t:"Buen clima de trabajo",d:"Mejorar el clima organizacional para favorecer el bienestar y el cumplimiento de objetivos.",
   st:[["Atención a las áreas de oportunidad del reporte bianual de clima laboral",[1,0,1]],["Evaluación de los servicios administrativos con la opinión de quienes los usan",[1,0,1]]],
   me:[["1","plan de mejora del clima laboral, desde 2027"],["1","instrumento anual de satisfacción de servicio, desde 2027"],["2027","Manual de Organización actualizado"],["2028","Manual de Procedimientos actualizado"]]},
  {k:"Objetivo 2",t:"Instalaciones en buen estado",d:"Mantener infraestructura y equipamiento funcionales, seguros e incluyentes.",
   st:[["Mantenimiento preventivo y correctivo de aulas, laboratorios y áreas comunes",[1,1,1]]],
   me:[["1","diagnóstico integral de infraestructura cada año"]]}
 ]},
11:{
 obj:"Actualizar la infraestructura tecnológica, formar a la comunidad en cultura digital, digitalizar procesos y proteger la información de la Facultad.",
 src:"Plan de Desarrollo, apartado 11",
 foryou:{
  C:["Mantenimiento de salas de cómputo, proyectores y red","Campañas de seguridad digital para toda la comunidad"],
  A:["Capacitación en ciberseguridad","Una plataforma digital de apoyo a la gestión en 2027"]
 },
 oes:[
  {k:"Objetivo 1",t:"Equipo y conectividad",d:"Renovar y mantener equipos de cómputo, proyectores y red en condiciones óptimas.",
   st:[["Mantenimiento preventivo y correctivo del equipamiento tecnológico",[0,1,0]]],
   me:[["1","mantenimiento preventivo anual de las salas de cómputo"],["1","gestión anual para la continuidad de la conectividad de MANDRA, desde 2027"]]},
  {k:"Objetivo 2",t:"Información segura",d:"Reforzar la seguridad de la información y los activos digitales.",
   st:[["Campañas periódicas de seguridad digital para toda la comunidad",[1,1,1]]],
   me:[["20","personas del área administrativa capacitadas en ciberseguridad"]]},
  {k:"Objetivo 3",t:"Transformación digital",d:"Digitalizar evidencias y procesos para tomar mejores decisiones.",
   st:[["Automatización progresiva de los procesos con mayor potencial de eficiencia",[1,1,1]]],
   me:[["1","diagnóstico de procesos automatizables para 2027"],["1","plataforma digital de apoyo a la gestión en 2027"]]}
 ]},
12:{
 obj:"Fortalecer órganos colegiados transparentes, una gestión participativa y cercana con el estudiantado, la seguridad y la identidad universitaria.",
 src:"Plan de Desarrollo, apartado 12",
 foryou:{
  E:["Un canal digital para presentar solicitudes y darles seguimiento en 2027","Programa de inducción con identidad universitaria para nuevo ingreso"],
  C:["Actas del H. Consejo de Gobierno publicadas","Dos simulacros al año y campañas de protección civil","Campaña anual del protocolo de atención integral a víctimas"]
 },
 oes:[
  {k:"Objetivo 1",t:"Órganos de gobierno transparentes",d:"Consolidar el funcionamiento transparente y normativo de los órganos de gobierno.",
   st:[["Capacitación normativa para consejeras y consejeros",[0,1,1]],["Seguimiento y difusión pública de los acuerdos colegiados",[1,1,0]]],
   me:[["48","actas del H. Consejo de Gobierno publicadas"],["2","sesiones de capacitación normativa para el H. Consejo de Gobierno"]]},
  {k:"Objetivo 2",t:"Una Facultad segura",d:"Fortalecer la autoprotección y los protocolos de seguridad para toda la comunidad.",
   st:[["Programa Interno de Protección Civil actualizado",[1,1,0]],["Capacitación continua de la Brigada Multifuncional de Protección Universitaria",[1,1,1]],["Registro propio de simulacros e incidentes atendidos",[0,1,0]]],
   me:[["2","simulacros de evacuación cada año"],["1","campaña anual de protocolos de seguridad y protección civil"],["1","campaña anual del protocolo de atención integral a víctimas"],["2","cursos para la brigada en protección civil, derechos humanos y género"]]},
  {k:"Objetivo 3",t:"Te escuchamos",d:"Convertir las necesidades del estudiantado en decisiones de mejora institucional.",
   st:[["Mecanismo formal de escucha activa con canales accesibles y sistemáticos",[1,0,0]]],
   me:[["1","mecanismo digital de atención a solicitudes estudiantiles para 2027"]]},
  {k:"Objetivo 4",t:"Orgullo universitario",d:"Fortalecer la identidad y el sentido de pertenencia.",
   st:[["Actividades conmemorativas y su difusión",[1,0,0]]],
   me:[["1","programa anual de inducción para nuevo ingreso"],["320","asistentes a visitas guiadas"],["1","crónica de la historia de la Facultad en 2029"]]},
  {k:"Objetivo 5",t:"Comunidad participativa",d:"Impulsar la participación en actividades culturales y de divulgación para la cohesión y la inclusión.",
   st:[["Talleres, ciclos de cine, exposiciones, concursos y actividades conmemorativas",[0,1,0]]],
   me:[["680","asistentes a conferencias, foros y charlas sobre pertenencia universitaria"]]}
 ]},
13:{
 obj:"Manejar los recursos financieros con control, trazabilidad y transparencia, generar ingresos extraordinarios y rendir cuentas a la comunidad y a la sociedad.",
 src:"Plan de Desarrollo, apartado 13",
 foryou:{
  C:["Seguimiento trimestral del presupuesto","Bitácora de resultados de auditorías y su atención"],
  A:["Capacitación en herramientas digitales de trazabilidad financiera"],
  D:["Más diplomados y educación continua que generan recursos para la Facultad"]
 },
 oes:[
  {k:"Objetivo 1",t:"Gasto ordenado",d:"Ejercer los recursos con transparencia para asegurar su suficiencia y sostenibilidad.",
   st:[["Reportes trimestrales del ejercicio del gasto por partida",[1,1,0]]],
   me:[["1","análisis anual de seguimiento presupuestal trimestral, desde 2027"]]},
  {k:"Objetivo 2",t:"Más recursos propios",d:"Diversificar la generación de recursos extraordinarios.",
   st:[["Más diplomados y programas de educación continua para nuevos públicos",[0,0,1]],["Base de seguimiento de ingresos extraordinarios",[0,1,0]],["Convenios con contraprestación económica con los sectores público y privado",[1,0,0]]],
   me:[["2","diplomados superiores de educación continua cada año"],["3","convenios con contraprestación económica"],["1","base de seguimiento de ingresos extraordinarios, desde 2027"]]},
  {k:"Objetivo 3",t:"Rendición de cuentas",d:"Consolidar la transparencia para fortalecer la confianza de la comunidad y la sociedad.",
   st:[["Bitácora de control interno de auditorías y su solventación",[1,0,0]],["Herramientas digitales de trazabilidad y capacitación para usarlas",[0,1,0]]],
   me:[["1","bitácora de seguimiento de auditorías en 2027"],["3","personas capacitadas en trazabilidad financiera para 2027"]]}
 ]},
14:{
 obj:"Hacer de la Facultad un espacio de inclusión, igualdad y respeto a la diversidad, con perspectiva de género, derechos humanos y mecanismos de atención y acompañamiento.",
 src:"Plan de Desarrollo, apartado 14",
 foryou:{
  E:["Reuniones de la administración con estudiantes en situación de vulnerabilidad","Talleres y conferencias semestrales sobre género, diversidad e inclusión"],
  C:["Protocolos institucionales difundidos de forma permanente y accesible","Guías, cartillas y manuales sobre respeto a las identidades","Programa de corresponsabilidad, autocuidado y bienestar integral"]
 },
 oes:[
  {k:"Objetivo 1",t:"Cultura de inclusión",d:"Fortalecer el respeto, la igualdad, la no discriminación y el reconocimiento de la diversidad.",
   st:[["Actividades semestrales de formación y sensibilización en género, diversidad e inclusión",[1,0,0]],["Reuniones de la administración con el alumnado en situación de vulnerabilidad",[1,1,0]]],
   me:[["15.18 %","del estudiantado sensibilizado en inclusión de grupos históricamente vulnerados"],["1","registro actualizado de estudiantes en situación de vulnerabilidad, desde 2027"]]},
  {k:"Objetivo 2",t:"Comunidad informada y corresponsable",d:"Prevenir, identificar y atender situaciones de violencia, discriminación y vulneración de derechos.",
   st:[["Registro y monitoreo de las acciones de inclusión y atención a la vulnerabilidad",[1,0,0]]],
   me:[["3","materiales de divulgación al año sobre respeto a las identidades"]]},
  {k:"Objetivo 3",t:"Atención y acompañamiento",d:"Consolidar mecanismos de atención, seguimiento y canalización con confidencialidad.",
   st:[["Campañas permanentes de difusión de los protocolos institucionales",[1,0,0]],["Programa anual de capacitación en derechos humanos, igualdad y prevención de la violencia",[1,1,0]]],
   me:[["1","actividad sociocultural al año sobre inclusión y vulnerabilidad"],["1","actividad anual sobre equidad social y de género"]]},
  {k:"Objetivo 4",t:"Comunicación incluyente",d:"Comunicar con perspectiva de género y evaluar de forma continua las acciones de inclusión.",
   st:[["Mecanismos de identificación, registro, canalización y seguimiento de casos",[1,0,0]],["Sistema de atención de casos de vulnerabilidad con enfoque de derechos humanos",[1,1,0]],["Participación de los tres sectores en iniciativas de inclusión y derechos humanos",[1,0,1]]],
   me:[["1","programa anual de corresponsabilidad y autocuidado, desde 2027"],["1","taller anual del Programa Universitario de Bienestar Integral, desde 2027"]]}
 ]},
15:{
 obj:"Construir una cultura de paz activa que prevenga la violencia, promueva la convivencia y enseñe a resolver los conflictos de forma pacífica, con enfoque de derechos humanos e igualdad sustantiva.",
 src:"Plan de Desarrollo, apartado 15",
 foryou:{
  C:["Jornadas, talleres y cursos de cultura de paz y no violencia","Círculos de paz periódicos","Jornada anual de los 16 días de activismo","Campaña anual de protocolos de prevención y atención de violencias"],
  E:["Actividades comunitarias y proyectos de intervención social para construir paz"],
  D:["Capacitación en mediación, conciliación y círculos de paz"]
 },
 oes:[
  {k:"Objetivo 1",t:"Convivir en paz",d:"Formar a la comunidad en cultura de paz, derechos humanos y no violencia para prevenir conflictos.",
   st:[["Jornadas, talleres y cursos de cultura de paz, derechos humanos y convivencia",[1,1,0]],["Campañas de sensibilización en respeto, empatía y convivencia pacífica",[1,0,1]],["Capacitación del personal en mediación, conciliación y círculos de paz",[1,1,0]],["Círculos de paz periódicos facilitados por personal capacitado",[1,0,1]]],
   me:[["25.22 %","de la comunidad cada año en actividades de convivencia pacífica"],["20","estudiantes en actividades comunitarias para construir paz"],["1","jornada anual de los 16 días de activismo"],["1","campaña anual de protocolos de atención y prevención de violencias"]]}
 ]},
16:{
 obj:"Devolver a la sociedad mexiquense lo que la Facultad aprende, mediante convenios, proyectos colaborativos, servicio comunitario, emprendimiento y salud.",
 src:"Plan de Desarrollo, apartado 16",
 foryou:{
  E:["Formación en economía social y solidaria","Programa de Competencias Laborales y evento anual de emprendimiento","Servicio de atención psicológica y Jornadas Integrales de Salud"],
  D:["Registro y reconocimiento de tus actividades de retribución social","Convocatorias internas de investigación con incidencia social"]
 },
 oes:[
  {k:"Objetivo 1",t:"Ciencia con beneficio social",d:"Fortalecer la vinculación con los sectores público, privado y social para el desarrollo científico y social.",
   st:[["Identificación de oportunidades de bienestar social en los resultados de los proyectos",[1,0,0]]],
   me:[["4","colaboraciones con organizaciones locales o sectores productivos"]]},
  {k:"Objetivo 2",t:"Formación con impacto social",d:"Preparar al estudiantado para contribuir a resolver problemas de su entorno.",
   st:[["Cursos, talleres y conferencias en economía social y solidaria",[1,0,0]],["Proyecto multidisciplinario de economía social y solidaria con los centros de investigación",[1,1,0]]],
   me:[["12","estudiantes capacitados en economía social y solidaria"],["4","proyectos de economía social y solidaria"]]},
  {k:"Objetivo 3",t:"Emprendimiento, comunidad y salud",d:"Consolidar acciones de emprendimiento, servicio comunitario y salud.",
   st:[["Difusión de convocatorias y registro de la retribución social del profesorado",[1,1,0]],["Difusión de competencias laborales y de los servicios de atención psicológica",[1,0,1]],["Jornadas Integrales de Salud Universitaria en la Facultad",[0,0,1]],["Base de datos de convenios con incidencia social y convocatorias internas",[1,0,1]]],
   me:[["Cada año","servicio de atención psicológica en la Facultad"],["40","estudiantes en las Jornadas Integrales de Salud para 2030"],["3","participaciones anuales en servicio comunitario y Brigadas Universitarias"],["1","evento anual de emprendimiento, desde 2027"]]}
 ]},
17:{
 obj:"Mantener canales institucionales actualizados, difundir de forma sistemática los logros de la comunidad y abrir mecanismos de comunicación interna y retroalimentación.",
 src:"Plan de Desarrollo, apartado 17",
 foryou:{
  C:["Al menos un contenido institucional por semana sobre la vida de la Facultad","Boletines periódicos","Mecanismos permanentes de información y retroalimentación para los tres sectores"]
 },
 oes:[
  {k:"Objetivo 1",t:"Comunicación con valores",d:"Campañas digitales que promuevan la cercanía, la inclusión y el progresismo.",
   st:[["Campañas institucionales con contenidos alineados con la identidad universitaria",[1,1,1]]],
   me:[["1","campaña institucional anual sobre los valores de la administración"]]},
  {k:"Objetivo 2",t:"Visibilidad de lo que hacemos",d:"Difundir el quehacer de la Facultad y fortalecer la comunicación interna.",
   st:[["Producción sistemática de contenidos para los medios oficiales",[1,1,1]],["Mecanismos permanentes de información, retroalimentación y participación",[1,1,1]]],
   me:[["52","contenidos institucionales al año"],["24","boletines institucionales durante la administración"]]}
 ]},
18:{
 obj:"Consolidar un sistema de gestión ambiental con indicadores verificables, más cultura ecológica y vinculación con el sector ambiental, para hacer de la Facultad un referente de ética ecológica.",
 src:"Plan de Desarrollo, apartado 18",
 foryou:{
  C:["Menos unicel y desechables, centros de acopio y compostaje","Campañas de reforestación y huertos universitarios","Programas de ahorro de agua, energía y papel","Reporte anual de sostenibilidad"],
  E:["Capacitación ambiental para 50 estudiantes cada año"]
 },
 oes:[
  {k:"Objetivo 1",t:"Manejo de residuos",d:"Gestionar de forma integral los residuos sólidos, especiales y orgánicos.",
   st:[["Programa para reducir materiales de un solo uso",[1,1,1]],["Centros de acopio para residuos especiales",[1,1,1]],["Plan Institucional de Manejo de Residuos Sólidos",[1,0,1]],["Compostaje de residuos de poda y jardinería",[1,1,1]]],
   me:[["1","programa anual de reducción de unicel y desechables"],["1","campaña anual de acopio de aceite vegetal usado"],["1","sistema de compostaje en operación permanente"]]},
  {k:"Objetivo 2",t:"Biodiversidad",d:"Restaurar y conservar la biodiversidad de las instalaciones y su entorno.",
   st:[["Campañas institucionales de reforestación",[1,1,1]],["Mantenimiento permanente de huertos universitarios",[1,1,1]]],
   me:[["1","campaña de reforestación al año"],["1","programa permanente de huertos universitarios"]]},
  {k:"Objetivo 3",t:"Educación ambiental",d:"Formar a la comunidad en sustentabilidad y usar con eficiencia el agua, la energía y el papel.",
   st:[["Capacitación ambiental anual para estudiantes, personal académico y administrativo",[1,1,1]],["Programas de ahorro de agua, eficiencia energética y reducción de papel",[1,0,1]]],
   me:[["50","estudiantes capacitados cada año, desde 2027"],["40","integrantes del personal académico capacitados"],["20","integrantes del personal administrativo capacitados"],["3","programas anuales: agua, energía y papel"]]},
  {k:"Objetivo 4",t:"Gestión ambiental institucional",d:"Participar en la Política Ambiental Universitaria y dar seguimiento verificable al desempeño ambiental.",
   st:[["Convenios y proyectos con organismos del sector ambiental",[1,1,0]],["Reporte institucional de sostenibilidad",[1,1,1]]],
   me:[["1","reporte institucional de sostenibilidad cada año"],["4","convenios con organismos del sector ambiental"]]}
 ]}
});
