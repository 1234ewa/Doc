/**
 * Datos curriculares del Dr. Jorge Alberto Campos Castellanos
 * para Presentación, Formación, Exámenes acreditados y Congresos.
 */

// ——— FORMACIÓN PRINCIPAL ———
export const FORMACION_PRINCIPAL = {
  institucion: "Hospital Clinic i Provincial de Barcelona, España",
  titulo: "Urología",
  catedratico: "Prof. Dr. José María Gil-Vernet Vila",
  calificacion: "Sobresaliente (máxima a obtenerse)",
  calificacionEn: "Outstanding (Maximum to be obtained)",
};

// ——— SUB-ESPECIALIDADES (centros y profesores) ———
export const SUBESPECIALIDADES_FORMACION = [
  {
    id: "endourologia",
    tituloEs: "Endourología",
    tituloEn: "Endourology",
    institucion: "Clínica la Luz, Madrid, España",
    profesor: "Prof. Dr. Enrique Pérez-Castro Ellendt",
    cargo: "Catedrático de Urología, Jefe del Departamento de Urología e Inventor del Ureteroscopio Rígido",
  },
  {
    id: "cirugia-robotica",
    tituloEs: "Cirugía Robótica",
    tituloEn: "Robotic Surgery",
    institucion: "Cleveland Clinic, Ohio, Estados Unidos",
    profesor: "Dr. Vipul Patel",
    cargo: "Chairman Robotic Surgery",
  },
];

// ——— EXÁMENES ACREDITADOS ———
export const EXAMENES_ACREDITADOS = [
  {
    es: "Examen Nacional de Medicina 1984.",
    en: "Mexico's Medicine National Exam.",
  },
  {
    es: "FMGEMS: Clinical Sciences y el examen de Inglés, julio 1984.",
    en: "FMGEMS Clinical Sciences and English Exam, July 1984.",
  },
  {
    es: "Certificación del Título de Médico Cirujano en el Extranjero: Homologación al Título Español de Licenciado en Medicina y Cirugía.",
    en: "Certification of the title of medical surgeon abroad: Homologation to the Spanish degree of Bachelor of Medicine and Surgery.",
  },
  {
    es: "Consejo Mexicano de Urología. Certificación el 3 de mayo de 1990.",
    en: "Mexican Council of Urology. Certification.",
  },
  {
    es: "Consejo Mexicano de Urología. Última Certificación 30 de Enero 2025.",
    en: "Mexican Council of Urology. Last Certification.",
  },
];

// ——— CONGRESOS Y REUNIONES ———
export type CongresoItem = {
  numero: number;
  es: string;
  en: string;
  fecha?: string;
};

export const CONGRESOS: CongresoItem[] = [
  { numero: 1, es: "Curso de Cirugía Plástica y Reconstructiva.", en: "Plastic and Reconstructive Surgery Course.", fecha: "Oct. 3, 1981. Hospital American British Cowdray." },
  { numero: 2, es: "Reunión Conjunta de Nefrología (S.M.N. y el I.M.I.N.) Instituto Nacional de la Nutrición \"S.Z\"", en: "Joint Nephrology meeting.", fecha: "Oct. 21, 1982. Ixtapa, Méx." },
  { numero: 3, es: "III Encuentro Estudiantil. Escuela Médico Militar.", en: "III Student Meeting.", fecha: "Nov. 10, 1982. México, D.F." },
  { numero: 4, es: "Los Principios Físicos y Tecnológicos del Ultrasonido en la Práctica. Sociedad Mexicana de Radiología, A.C.", en: "The Physical and Technological principles of Ultrasound in Practice.", fecha: "Ene. 31 a Feb 2, 1983. México, D.F." },
  { numero: 5, es: "Ultrasonido en Medicina. Sociedad Mexicana de Radiología.", en: "Ultrasound in Medicine. Mexican Society of Radiology.", fecha: "Ene. 31 a Feb 3, 1983. México, D.F." },
  { numero: 6, es: "Avances en Reumatología. Instituto Nacional de la Nutrición \"S.Z.\"", en: "Advances in Rheumatology.", fecha: "Marzo 26, 1983. México, D.F." },
  { numero: 7, es: "III Curso Anual de Nefrología Clínica. Instituto Nacional de la Nutrición.", en: "III Annual Course on Clinical Nephrology.", fecha: "Jun. 10, 1983. México, D.F." },
  { numero: 8, es: "American College of Surgeons Annual Meeting.", en: "American College of Surgeons Annual Meeting.", fecha: "Oct. 13-18, 1985. Chicago, U.S.A." },
  { numero: 9, es: "American College of Surgeons Annual Meeting. Gastrointestinal Disease.", en: "American College of Surgeons Annual Meeting. Gastrointestinal Disease.", fecha: "Oct. 14, 1985. Chicago, U.S.A." },
  { numero: 10, es: "Jornades Urologiques de L'Hospital General de la Madre de Déu de L'Esperanza.", en: "Urological Conferences of the General Hospital of la Madre de Déu de L'Esperanza.", fecha: "Marzo 13-15, 1986. Barcelona, España." },
  { numero: 11, es: "Simposium Internacional de Urología Pediátrica. Fundación Puigvert.", en: "International Symposium on Pediatric Urology.", fecha: "Jun. 18-20, 1986. Barcelona, España." },
  { numero: 12, es: "IV Congreso Mundial de Endourologia y Ondas de Choque. Clínica la Luz.", en: "IV World Congress of Endourology and Shock Waves.", fecha: "Sept. 1986. Madrid, España." },
  { numero: 13, es: "VIII Reunión Nacional de Urotransplante. Sociedad Española de Urología.", en: "VIII National Meeting on Urotransplant.", fecha: "Ene. 27, 1987. Andorra la Bella, Andorra." },
  { numero: 14, es: "III Reunión Urológica Interhospitalaria. Hospital de la Madre de Dios y la Esperanza.", en: "III Interhospital Urological Meeting.", fecha: "Feb. 20, 1987. Barcelona, España." },
  { numero: 15, es: "IX Congreso Internacional de Urología. Hospital Clinic de Barcelona.", en: "IX International Congress of Urology.", fecha: "Abr. 20, 1987. Barcelona, España." },
  { numero: 16, es: "6e International Forum d'Andrologie. Hôpital St. Antoine.", en: "6th International Andrology Forum.", fecha: "May. 3, 1988. Paris, France." },
  { numero: 17, es: "LII Congreso Nacional de Urología. Sociedad Española de Urología.", en: "LII National Congress of Urology.", fecha: "May. 31, 1987. Palma de Mallorca, España." },
  { numero: 18, es: "Primer Congreso Europeo de Video-Cirugía.", en: "First European Congress of Video-Surgery.", fecha: "Nov. 25, 1987. Barcelona, España." },
  { numero: 19, es: "LIII Congreso Nacional de Urología. Sociedad Española de Urología.", en: "LIII National Congress of Urology.", fecha: "Jun. 12, 1988. Bilbao, España." },
  { numero: 20, es: "III Curso Taller Endourología y Ureteroscopia. Secretaría de la Defensa Nacional. Hospital Central Militar.", en: "III Endourology and Ureteroscopy Workshop Course. 21 horas, Categoría I.", fecha: "Nov. 16, 1989. México, D.F." },
  { numero: 21, es: "Urología Ginecológica. Hospital Central de Concentración Nacional. Petróleos Mexicanos.", en: "Gynecological Urology.", fecha: "Abril 25, 1990. México, D.F." },
  { numero: 22, es: "American Urological Association. Eighty-Fifth Annual Meeting.", en: "American Urological Association. 85th Annual Meeting.", fecha: "May. 13, 1990. New Orleans." },
  { numero: 23, es: "Litotricia Extracorpórea. Máquina Wolf 2300. Hospital Especialidades. Centro Médico Nacional. I.M.S.S.", en: "Extracorporeal Lithotripsy. Wolf 2300 Machine.", fecha: "Jul. 1°, 1990. México, D.F." },
  { numero: 24, es: "I Curso Internacional de Endourologia y Uro-radiologia. Hospital de Especialidades Centro Médico La Raza. 14 horas.", en: "I International Course on Endourology and Uro-radiology.", fecha: "Sep. 6, 1990. México, D.F." },
  { numero: 25, es: "Curso Monográfico. Cirugía Transuretral. Hospital de Especialidades Centro Médico La Raza.", en: "Monographic Course. Transurethral Surgery.", fecha: "Nov. 26, 1990. México, D.F." },
  { numero: 26, es: "Minimally Invasive Surgery. Laparoscopy and Endoscopy. Baylor University Medical Center.", en: "Minimally Invasive Surgery. Laparoscopy and Endoscopy.", fecha: "Abril 4, 1991. Dallas, U.S.A." },
  { numero: 27, es: "American Urological Association. Eighty-Sixth Annual Meeting.", en: "American Urological Association. 86th Annual Meeting.", fecha: "Jun. 2, 1991. Toronto." },
  { numero: 28, es: "Curso Teórico de Cirugía Laparoscópica. Hospital Santa Teresa. Universidad Anáhuac. 10 horas.", en: "Theoretical Course on Laparoscopic Surgery.", fecha: "Dic. 1, 1991. México, D.F." },
  { numero: 29, es: "American Urological Association. Asistencia y participación anual desde New Orleans (may 13-17, 1990) hasta Las Vegas (Abril 26-29, 2025). Asistencia consecutiva en 35 Congresos.", en: "American Urological Association. Consecutive attendance and participation in 35 meetings since 1990.", fecha: "1990 - 2025." },
  { numero: 30, es: "International Conference on Natural Orifice Translumenal Endoscopic Surgery (NOTES).", en: "International Conference on NOTES.", fecha: "Jul. 13-14, 2007. Boston, Massachusetts." },
  { numero: 31, es: "25th World Congress of EndoUrology & SWL.", en: "25th World Congress of EndoUrology & SWL.", fecha: "Oct. 30 – Nov. 3, 2007. Cancún, México." },
];

// Congresos organizados por el doctor
export const CONGRESOS_ORGANIZADOS = [
  {
    tituloEs: "Avances en Urología. Hospital ABC 1990.",
    tituloEn: "Advances in Urology. Theoretical – Practical Course.",
    detalle: "Un curso teórico – práctico.",
  },
  {
    tituloEs: "Endourología en la Urología. 1991.",
    tituloEn: "Endourology in Urology. Live Surgery Course.",
    detalle: "Curso con cirugía en vivo. Profesores invitados: Wilfrido Castañeda Zúñiga, Janis Letourneau (Minnesota University).",
  },
  {
    tituloEs: "La Física Aplicada a la Urología. Efectos de la velocidad, tiempo, presión en el sistema renourinario.",
    tituloEn: "Physics Applied to Urology. The effects of velocity, time, pressure, and genetics on the Renal System.",
    detalle: "21 cursos teórico – prácticos. Colaboradores: Hospital Ángeles Lomas, NASA, Max Planck Institute, California Institute of Technology (Caltech), Universidad Anáhuac Grupo Alpha. Empresas: Boston Scientific, INTUITIVE; Maserati, McLaren, Mercedes Benz, Lotus, Nissan, Acura, Land Rover, Lexus, BMW Motorrad, Harley Davidson.",
  },
];

// ——— CONTRIBUCIÓN CIENTÍFICA ———
export const CONTRIBUCION_CIENTIFICA = {
  journalOfUrology: {
    titulo: "Journal of Urology",
    es: "Publicaciones distinguidas en la revista, con técnicas quirúrgicas únicas. Revista de mayor difusión mundial en Urología.",
    en: "Distinguished publications in the journal, with unique surgical techniques – World's most widely distributed urology journal.",
  },
  aua: {
    titulo: "American Urological Association",
    es: "Presentación en el congreso anual, en diferentes ocasiones, de técnicas quirúrgicas con Láser para Próstata desde los años 90's. Las primeras mundiales presentadas en este rubro.",
    en: "Presentation at the annual congress on multiple occasions of laser surgical techniques for prostate since the 1990s. Among the first in the world presented in this field.",
  },
  congresosMundiales: [
    {
      es: "Trasplante simultáneo de Riñón y Páncreas.",
      en: "Simultaneous Kidney and Pancreas Transplant.",
    },
    {
      es: "Segmentos Intestinales para sustitución en cáncer de vejiga.",
      en: "Intestinal segments for substitution in bladder cancer.",
    },
    {
      es: "Cirugía Láser en técnicas Abiertas, Endourología, Laparoscopía y Robótica.",
      en: "Laser surgery in Open, Endourology, Laparoscopy and Robotic techniques.",
    },
    {
      es: "Utilización de ultrasonido en el quirófano pre-operatorio, complementando el diagnóstico preciso realizado en consulta, permite una planeación quirúrgica exacta en el propio quirófano. Su uso simultáneo durante la intervención es una herramienta valiosa para el seguimiento en tiempo real.",
      en: "Use of ultrasound in the pre-operative operating room, complementing the precise diagnosis from consultation, allows exact surgical planning in the OR. Its simultaneous use during the procedure is a valuable tool for real-time monitoring when needed.",
    },
    {
      es: "Infertilidad: Várices en testículos (Varicocele) bilateral laparoscópico con corrección simultánea de hernia inguinal y umbilical. Presentado en el 4° Congreso de Cirugía endoscópica en Kyoto, Japón.",
      en: "Infertility: Bilateral laparoscopic testicular varicoceles with simultaneous correction of inguinal and umbilical hernia. Presented at the 4th Congress of Endoscopic Surgery, Kyoto, Japan.",
    },
  ],
  fisicaAplicada: {
    tituloEs: "La Física Aplicada a la Urología",
    tituloEn: "Physics Applied to Urology",
    totalCursos: 21,
    colaboradores: [
      "Médicos Hospital Ángeles Lomas",
      "NASA",
      "Max Planck Institute",
      "California Institute of Technology (Caltech)",
      "Universidad Anáhuac Grupo Alpha",
    ],
    empresasMedicas: [
      {
        nombre: "Boston Scientific",
        descripcion: "Una de las empresas más grandes de insumos médicos. Video en su página web: extracción de casi 40 cálculos urinarios sin lesionar ningún tejido.",
        url: "https://www.youtube.com/watch?v=zecRlttg1CU&list=PLdpY62PRXgF85UnABA25Ty0jRTNu5Y-Tg",
      },
      {
        nombre: "INTUITIVE",
        descripcion: "La empresa más grande de Robótica.",
      },
    ],
    empresasAutomotrices: [
      "Maserati",
      "McLaren",
      "Mercedes Benz",
      "Lotus",
      "Nissan",
      "Acura",
      "Land Rover",
      "Lexus",
      "BMW Motorrad",
      "Harley Davidson",
    ],
  },
  patentes: {
    oficina: "United States Patent Trademark Office",
    es: "Dos patentes únicas en la historia de la Urología mexicana.",
    en: "Two unique patents in the history of Mexican Urology.",
  },
};

// ——— EXPERIENCIA HOSPITALARIA ———
export const EXPERIENCIA_HOSPITALARIA = [
  {
    institucion: "Hospital Clinic de Barcelona",
    detalle: "Entrenamiento en uno de los hospitales más afamados en el mundo.",
    detalleEn: "Training at one of the world's most renowned hospitals.",
  },
  {
    institucion: "Hospital ABC",
    detalle: "13 años.",
    detalleEn: "13 years.",
  },
  {
    institucion: "Hospital Ángeles Lomas",
    detalle: "Desde hace 26 años.",
    detalleEn: "26 years to date.",
  },
];

// ——— ESTUDIOS DE ESPECIALIDAD, CURSOS DE ENTRENAMIENTO, SUBESPECIALIDADES ———
export const ESTUDIOS_ESPECIALIDAD_CURSOS = [
  { numero: 1, es: "Hospital General de Zona # 1 \"Gabriel Mancera\" – Cirugía General.", en: "General Surgery.", fecha: "Marzo 1985 - Febrero 1986." },
  { numero: 2, es: "Hospital Clinic i Provincial, Barcelona España. Especialidad de Urología. Catedrático: Prof. Dr. José María Gil-Vernet. Autor y desarrollador de múltiples técnicas quirúrgicas utilizadas mundialmente y de algunos instrumentos quirúrgicos. Médico de S.M. Juan Carlos I de España.", en: "Urology Training. Chair and Professor of Urology Prof. Dr. José María Gil-Vernet. Author and developer of multiple surgical techniques used worldwide and some surgical instruments. Physician to HRH Juan Carlos I de España.", fecha: "Marzo 1986 - Febrero 1989." },
  { numero: 3, es: "Urología Pediátrica. Departamento de Urología del Hospital de la Vall d'Hebrón. Dr. Rafael Gosalbez, jefe de servicio.", en: "Pediatric Urology. Dr. Rafael Gosalbez.", fecha: "Sept. - Nov. 1988. Barcelona, España." },
  { numero: 4, es: "Entrenamiento Endourológico: Clínica La Luz Madrid-España. Jefe del Departamento e Inventor del Ureteroscopio: Dr. Enrique Pérez-Castro Ellendt.", en: "Endourologic Training. Dr. Enrique Pérez-Castro Ellendt, Inventor of the Ureteroscope.", fecha: "Marzo 1989 - Abril 1989." },
  { numero: 5, es: "Visita a entrenamiento en Oncología: University of California at Los Ángeles (UCLA). Jefe del Departamento: Dr. Jean B. de Kernion. Autor de múltiples trabajos de Oncología Urológica. En UCLA fueron los primeros trabajos para desarrollar el VIAGRA.", en: "Visit to Oncology Training. Dr. Jean B. de Kernion.", fecha: "Abr. 1989. Los Angeles, CA. U.S.A." },
  { numero: 6, es: "Visita al Departamento de Urología en Caracas, Venezuela. Jefe del Departamento Dr. René Sotelo: Autor de múltiples trabajos internacionales y reconocido cirujano mundialmente.", en: "Visit to the Urology Department in Venezuela. Dr. René Sotelo.", fecha: "" },
  { numero: 7, es: "Taller Práctico Vaporización Prostática con Láser KTP \"Green Light\". Hands on Lab.", en: "Practical Workshop Prostatic Vaporization with KTP \"Green Light\" Laser. Hands on Lab.", fecha: "09 Marzo 2007." },
  { numero: 8, es: "International Conference on Natural Orifice Translumenal Endoscopic Surgery (NOTES). Hands on Lab.", en: "International Conference on NOTES. Hands on Lab.", fecha: "Julio 13-14, 2007. Boston, Massachusetts." },
  { numero: 9, es: "Entrenamiento y visita en Cirugía robótica, Columbus, Ohio. Jefe del Departamento Dr. Vipul Patel. Certificado en \"Off-site Training as a Console Surgeon\" Da Vinci S, Intuitive Surgical.", en: "Training and Visit in Robotic Surgery, Columbus, Ohio. Dr. Vipul Patel. Certified \"Off-site Training as a Console Surgeon\" Da Vinci S.", fecha: "Julio 18, 2007." },
  { numero: 10, es: "Beneficios del tratamiento de la Hipertrofia Prostática Benigna con Láser KTP \"Green Light\". Hospital Ángeles de las Lomas.", en: "Benefits of the treatment of Benign Prostatic Hypertrophy with KTP \"Green Light\" Laser.", fecha: "29 de Octubre 2007." },
  { numero: 11, es: "Single Port Robotic Surgery. The Da Vinci S System, PG Course, Hands on Lab. Instructor: Jeffrey Caddedu, M.D. Southwestern University. American Urological Association Meeting, San Diego.", en: "Single Port Robotic Surgery. Da Vinci S System, Hands on Lab.", fecha: "" },
  { numero: 12, es: "NOSCAR NOTES Hands On Lab.", en: "NOSCAR NOTES Hands On Lab.", fecha: "Jul 14, 2007. Boston, Massachusetts." },
  { numero: 13, es: "Certificación Cirujano Robótico.", en: "Robotic Surgeon Certification.", fecha: "2 de Noviembre 2016." },
  { numero: 14, es: "Diversos Cursos de Cirugía robótica atendidos.", en: "Various Robotic Surgery Courses attended.", fecha: "" },
];

// ——— PREMIOS NACIONALES ———
export const PREMIOS_NACIONALES = {
  patentes: "IMPI (Instituto Mexicano de la Propiedad Industrial)",
};

// ——— CERTIFICACIONES INTERNACIONALES ———
export const CERTIFICACIONES_INTERNACIONALES = [
  "Certificación Cirujano Robótico (2016)",
  "Off-site Training as a Console Surgeon – Da Vinci S, Intuitive Surgical (2007)",
];

// ——— SOCIEDADES A LAS QUE PERTENECE ———
export const SOCIEDADES = [
  { es: "Sociedad Española de Urología. Socio Electivo desde 1986.", en: "Spanish Society of Urology. Elective Member since 1986. (Has been)." },
  { es: "Endourological Society. Miembro desde 1989.", en: "Endourological Society. Member since 1989. (Has been)." },
  { es: "Miembro de la Mesa Directiva del Consejo Mexicano como tercer Vocal. Diciembre de 1990.", en: "Member of the Board of the Mexican Council as third Vocal. December 1990. (Has been)." },
  { es: "Participación en la Elaboración del Examen de certificación del Consejo Mexicano de Urología. Marzo 1992.", en: "Participation in the Preparation of the Certification Exam of the Mexican Council of Urology." },
  { es: "Miembro de Cuerpo Médico Hospital A.B.C. (American British Cowdray). 1991 – 2015.", en: "Staff Member Hospital A.B.C. 1991 – 2015." },
  { es: "Miembro del Cuerpo Médico del Hospital Ángeles del Pedregal – Ángeles Health System. Desde 1991. Donde actualmente labora.", en: "Staff member Hospital Ángeles del Pedregal – Ángeles Health System since 1991. Currently works." },
  { es: "Miembro de la American Urological Association. Active Member desde 1991. Participación en todos los congresos desde 1990 a la fecha. 34 congresos consecutivos.", en: "Member of the American Urological Association. Active member since 1991. Having participated in all congresses from 1990 to date. 34 consecutive meetings." },
];

// ——— COMUNICACIONES Y VIDEOS PRESENTADOS EN CONGRESOS ———
export type TrabajoPresentado = {
  titulo: string;
  tituloEn?: string;
  tipo?: "Video" | "Poster" | "Comunicación";
};
export type ComunicacionCongreso = {
  numero: number;
  reunion: string;
  reunionEn: string;
  fecha?: string;
  nota?: string;
  trabajos: TrabajoPresentado[];
};

export const COMUNICACIONES_CONGRESOS: ComunicacionCongreso[] = [
  {
    numero: 1,
    reunion: "Reunión Conjunta del IMIN y SMN. Ixtapa, México.",
    reunionEn: "Joint meeting of the IMIN and SMN.",
    fecha: "Oct. 21, 1982.",
    trabajos: [
      { titulo: "Hemodinámica Glomerular en Ratas con Hipertensión Renovascular en Fase Tardía. F. Gabbai, M. Franco, E. Tapia, L. Díaz, J. Campos, y J. Herrera-Acosta.", tituloEn: "Glomerular Hemodynamics in Rats with Renovascular Hypertension in Late Phase." },
      { titulo: "Valoración del Sistema Retroalimentario Túbulo-Glomerular (SRTG) en la Fase Tardía de la HTA Renovascular en Ratas. M. Franco, E. Tapia, G. Linfa, F. Gabbai, L. Díaz, J. Campos, J. Herrera-Acosta.", tituloEn: "Assessment of the Tubulo-Glomerular Feedback System (TGFS) in the Late phase of Renovascular Hypertension in Rats." },
    ],
  },
  {
    numero: 2,
    reunion: "VIII Reunión Nacional de Urotransplante. Sociedad Española de Urología. Andorra la Bella, Andorra.",
    reunionEn: "VIII National Urotransplant Meeting.",
    fecha: "Ene. 27, 1987.",
    trabajos: [
      { titulo: "Resolución de la Fístula Calicilar Recidivante mantenida por Estenosis Piélica, Mediante Descenso Renal Subcapsular. R. Gutiérrez, J. Campos, J. Pedemonte, J.M. Mallafré, C. Vargas.", tituloEn: "Resolution of the Recurrent Calicillar Fistula maintained by Renal Pelvis Stenosis, Through Subcapsular Renal Descent." },
      { titulo: "Estenosis de Arteria Renal. Causa de Hipertensión Renovascular y Anuria Prolongada en un Transplantado Renal. A. Alcaraz, P. Carretero, R. Talbot-Wright, C. Pellice, J. Campos.", tituloEn: "Renal Artery Stenosis. Cause of Renovascular Hypertension and Prolonged Anuria in a Kidney Transplant." },
      { titulo: "Obstrucción Ureteral por acúmulos de Hongos en un Transplantado Renal con Candidiasis Sistémica. R. Gutiérrez, J. Calvo, J. M. Mallafré, J. Pedemonte, J. Campos, y J. M. Gil-Vernet Sedó.", tituloEn: "Ureteral Obstruction due to Fungal Accumulations in a kidney Transplant with Systemic Candidiasis." },
    ],
  },
  {
    numero: 3,
    reunion: "IX Curso Internacional de Urología. Avances en Urología. Cátedra de Urología Hospital Clinic de Barcelona. Barcelona, España.",
    reunionEn: "IX International Urology Course. Advances in Urology.",
    fecha: "Abr. 20, 1987.",
    trabajos: [
      { titulo: "Colaboración quirúrgica durante el congreso en las sesiones operatorias con los profesores de Urología invitados. Leading urologists from all Europe and the US (Peter Alken, Terry D. Allen, etc.) came to do complex and most original surgeries.", tituloEn: "Surgical Collaboration during the congress in the operating sessions." },
    ],
  },
  {
    numero: 4,
    reunion: "LII Congreso Nacional de Urología. Sociedad Española de Urología. Palma de Mallorca, España.",
    reunionEn: "LII National Congress of Urology.",
    fecha: "May. 31, 1987.",
    trabajos: [
      { titulo: "Oncocitoma Renal. Aportación de Dos Nuevos Casos. J. Calvo, J. Campos, R. Gutiérrez del Pozo y J. Alcover.", tituloEn: "Renal Oncocytoma. Contribution of Two New cases." },
      { titulo: "Tumores Retroperitoneales. Evaluación de seis Liposarcomas. C. Pellicé (Jr.), L. A. Hidalgo, J. Pedemonte, J. Campos, X. Sala y P. Carretero.", tituloEn: "Retroperitoneal Tumors. Evaluation of Six Liposarcomas." },
      { titulo: "Anulación Funcional Renal por Quistes. J. Alcover, J. Campos, J. M. Mallafré, R. Gutiérrez, J. Calvo y C. Pellicé.", tituloEn: "Non-Functional Kidney due to Renal Cysts." },
    ],
  },
  {
    numero: 5,
    reunion: "Primer Congreso Europeo de Video-Cirugía. Barcelona, España.",
    reunionEn: "First European Congress of Video Surgery.",
    fecha: "Nov. 25, 1987.",
    trabajos: [
      { titulo: "New Technique of Correction for Vesico-Ureteral Reflux. J. M. Gil-Vernet, P. Carretero González, J. M. Mallafré Sala, J. Campos Castellanos, R. Gutiérrez del Pozo." },
      { titulo: "Total Pancreas Transplantation. Pancreatic-Ureterostomy. J. M. Gil-Vernet Sedó, J. Alcover García, J. Talbot-Wrigth, J. Campos Castellanos, J. M. Gil-Vernet." },
      { titulo: "Orthotopic Renal Transplantation. J. M. Gil-Vernet, P. Carretero González, R. Gutiérrez del Pozo, J. M. Mallafré Sala, J. Campos Castellanos." },
      { titulo: "Monoblock Extramucosal Vasovasostomy. J. Campos Castellanos, S. Ictech Diek, M. Janeiro Sarabia, J. M. Gil-Vernet Sedo, J. M. Gil-Vernet Vila." },
      { titulo: "Testicle Autotransplant. J. M. Mallafré Sala, R. Talbot-Wrigth, J. M. Gil-Vernet Sedó, R. Gutiérrez del Pozo, J. Campos Castellanos, J. M. Gil-Vernet Vila." },
    ],
  },
  {
    numero: 6,
    reunion: "6e International Forum d'Andrologie. Hôpital St. Antoine. Paris, France.",
    reunionEn: "6th International Andrology Forum.",
    fecha: "May. 3, 1988.",
    trabajos: [
      { titulo: "Radical prostatectomy. An Easy way of Membranous Anastomosis.", tipo: "Video", tituloEn: "O. Bielsa, R. Gutiérrez, R. Alvarez, P. Carretero, J. Campos, J. M. Gil-Vernet." },
      { titulo: "Radical Prostatectomy. New Maneuver for Membranous Anastomosis.", tipo: "Poster", tituloEn: "J. Campos, R. Gutiérrez, R. Alvarez-Vijande, Gil-Vernet, O. Bielsa, P. Carretero y J. M. Gil-Vernet." },
    ],
  },
  {
    numero: 7,
    reunion: "LIII Congreso Nacional de Urología. Sociedad Española de Urología. Bilbao, España.",
    reunionEn: "LIII National Congress of Urology.",
    fecha: "Jun. 12, 1988.",
    trabajos: [
      { titulo: "Ureterorrenoscopia. Nuestros Primeros 56 casos.", tipo: "Comunicación", tituloEn: "Ureterorenoscopy. Our first 56 cases." },
      { titulo: "Absceso del Psoas resuelto por procedimiento Endourológico.", tipo: "Poster", tituloEn: "Psoas Abscess resolved by endourological Procedure. J. Campos, J. Alcover, S. Corominas, J. Pedemonte, O. Bielsa y M. Puyol." },
      { titulo: "Gangrena de Fournier y Trombosis EspongioCavernosa.", tipo: "Poster", tituloEn: "Fournier's Gangrene and Spongiocavernous Thrombosis. J. Campos, Martos, S. Corominas, J. Alcover, R. Talbot, O. Bielsa y R. Gutiérrez." },
      { titulo: "Tumor de los Cordones Sexuales en Testículo: Tumor de Células Sertoli-Leydig con Elementos Heterólogos y Patrón Retiforme.", tipo: "Poster", tituloEn: "Sex Cord Tumor in Testicle: Sertoli-Leydig Cell Tumor with Heterologous Elements and Retiform Pattern. R. Gutiérrez, J. Campos, A. Palacín, J. Pedemonte, R. Samson y J. Alcover." },
    ],
  },
  {
    numero: 8,
    reunion: "XXI Congreso de la Sociedad Internacional de Urología. Buenos Aires, Argentina.",
    reunionEn: "XXI Congress of the International Society of Urology.",
    fecha: "Oct. 9, 1988.",
    trabajos: [
      { titulo: "Conservative Surgery in Renal Cancer. Enucleation Resection.", tipo: "Video", tituloEn: "J. M. Gil-Vernet, J. M. Gil-Vernet (Jr.), J. A. Campos (Spain)." },
      { titulo: "Microsurgical Transureterostomy for Treatment of Unilateral Segmental Megaureter. J.M. Gil-Vernet, J. A. Campos, J.M. Gil-Vernet Jr. (Spain)." },
      { titulo: "Surgical Management of Vesico-Uterine Fistula.", tipo: "Video", tituloEn: "J. M. Gil-Vernet, A. Gil-Vernet, J. A. Campos, J. M. Mallafré (Spain)." },
      { titulo: "Urogenital Diaphragm Raising Maneuver.", tipo: "Video", tituloEn: "J. M. Gil-Vernet, J. A. Campos, J.M. Mallafre, Gil-Vernet (Jr.) (Spain)." },
      { titulo: "Urogenital Diaphragm Raising Maneuver.", tipo: "Comunicación", tituloEn: "J.M. Gil-Vernet, J.M. Gil-Vernet Jr., J. A. Campos, R. Gutiérrez del Pozo (Spain)." },
    ],
  },
  {
    numero: 9,
    reunion: "IX Reunión Nacional de Urotransplante. Sociedad Española de Urología. Oviedo.",
    reunionEn: "IX National Urotransplant Meeting.",
    fecha: "14, 15 y 16 de Abril de 1988.",
    trabajos: [
      { titulo: "Trasplante Renal en Receptores Hiperinmunizados. O. Bielsa, F. Oppenheimer, A. Alcaráz, J. Campos, R. Sansón, S. Ictech.", tituloEn: "Kidney Transplant in Hyperimmunized Recipients." },
      { titulo: "Cistitis Intersticial en el Trasplantado. ¿Es efectiva la Terapia Inmunosupresora? M. Puyol, R. Talbot-Wright, O. Bielsa, J. M. Fidalgo, J. Campos, y J. Calvo.", tituloEn: "Interstitial Cystitis in the Transplant Patient. Is Immunosuppressive Therapy Effective?" },
      { titulo: "Cirugía de Banco en el Trasplante Renal. R. Talbot-Wright, J. Campos, R. Alvarez Vijande, R. Gutiérrez, J. Calvo, y P. Carretero.", tituloEn: "Bench Surgery in kidney Transplant." },
    ],
  },
  {
    numero: 10,
    reunion: "American Urological Association. Eighty-Sixth Annual Meeting. Toronto.",
    reunionEn: "American Urological Association. 86th Annual Meeting.",
    fecha: "Jun. 6, 1991.",
    trabajos: [
      { titulo: "Endoureterotomy for Distal Ureteral Stenosis.", tipo: "Video", tituloEn: "J. A. Campos, L. C. Sánchez, R. Vega and F. Gómez Orta." },
      { titulo: "Ultrasonically Guided Diversion Nephrostomy. J. A. Campos, R. Vega, F. Gómez Orta, A. Porras." },
      { titulo: "Giant Urethral Lithiasis. L. C. Sánchez, J. A. Campos, O. Hernández, R. Vega, L. Conde." },
    ],
  },
  {
    numero: 11,
    reunion: "Colegio Mexicano de Urología: XVI Congreso. Mazatlán.",
    reunionEn: "Mexican College of Urology XVI Congress.",
    fecha: "Mayo 1992.",
    trabajos: [
      { titulo: "Presentación del Simposium Pre-Congreso. \"Laparoscopía en Urología\". NOTA: Primeros trabajos de Laparoscopía en Urología presentados en un congreso mexicano. Dos ponencias y seis videos, con la mayor serie entonces presentada de 500 ureteroscopias y los primeros videos de ureteropieloscopía flexible.", tituloEn: "Presentation of the Pre-Congress Symposium. \"Laparoscopy in Urology\". First papers in Laparoscopy in Urology at a Mexican congress. Two podium sessions and six videos, with largest series of 500 ureteroscopies and first videos of flexible ureteropyeloscopy." },
    ],
  },
  {
    numero: 12,
    reunion: "4th World Congress of Endoscopic Surgery. Kyoto, Japón.",
    reunionEn: "4th World Congress of Endoscopic Surgery.",
    fecha: "1994.",
    trabajos: [
      { titulo: "Laparoscopic Varix Ligation. The Bilateral Varicocele. J. A. Campos." },
    ],
  },
  {
    numero: 13,
    reunion: "American Urological Association. Ninety Annual Meeting.",
    reunionEn: "American Urological Association. 90th Annual Meeting.",
    fecha: "Abril 23 - 28, 1995.",
    trabajos: [
      { titulo: "Urethral Stenosis Close to the External Urethral Sphincter. Practical Hints for Residents. A. Cota, J. A. Campos. Seleccionado en VIDEO UROLOGY TIMES.", tituloEn: "Selected for publication in VIDEO UROLOGY TIMES, having been presented at the American Urological Association." },
      { titulo: "Laparoscopic Varix Ligation. Preoperative evaluation, Technical Aspects and Indications in the Bilateral Varicocele. J.A. Campos, A. Cota, et.al." },
      { titulo: "Laser assisted Endoscopic Resection of Large Prostates with a Straight Firing Fiber. J.A. Campos, A. Cota." },
      { titulo: "The Value and Properties of Cold in situ Lithotripsy. A. Cota, J. A. Campos." },
    ],
  },
  {
    numero: 14,
    reunion: "American Urological Association. Ninety One Annual Meeting.",
    reunionEn: "American Urological Association. 91st Annual Meeting.",
    fecha: "1996.",
    trabajos: [
      { titulo: "Penile Fracture After 48 Hours. Practical Hints for Residents. J.A. Campos, A. Cota, et al." },
      { titulo: "Urogenital Diaphragm Raising Maneuver. The Gil-Vernet Technique. J.A. Campos, A. Cota, et al." },
    ],
  },
  {
    numero: 15,
    reunion: "American Urological Association. Ninety Two Annual Meeting.",
    reunionEn: "American Urological Association. 92nd Annual Meeting.",
    fecha: "April 12 – 17, 1997.",
    trabajos: [
      { titulo: "Calcified Double \"J\" Stent. The Swiss Lithoclast. J.A Campos, et al." },
    ],
  },
  {
    numero: 16,
    reunion: "American Urological Association. 115th Annual Meeting. Walter E. Washington Convention Center, Washington, D.C.",
    reunionEn: "American Urological Association. 2020 115th Annual Meeting.",
    fecha: "2020.",
    trabajos: [
      { titulo: "Laser-assisted Endoscopic Resection of Large Prostates with a Straight Firing Fiber. A Quarter of a Century follow-up. J.A Campos, Cholico, M, et.al." },
      { titulo: "Testicular transplant in man. Whole organ transplant. Historic video 1978. J.A. Campos, J.M. Gil-Vernet, J.M. Gil-Vernet Jr, Cholico, M.", tituloEn: "To our knowledge the testicular transplant is the only one that has been performed in history from a cadaveric to a living donor. It was carried out in 1978 in Barcelona, Spain, by Prof. Dr. J.M. Gil-Vernet. Both works represent very important efforts in contributing to improving and opening new horizons in the world of urology of our time." },
    ],
  },
];
