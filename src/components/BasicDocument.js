import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from '../logo.png'

// Create styles
const styles = StyleSheet.create({
  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  page: {},
  headerContainer: {
    marginRight: 20,
    marginLeft: 30,
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    width: 200
  },
  textContainer: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  text: {
    fontSize: 11,
    fontWeight: 'normal',
  },
  surgeryDateContainer: {
    marginLeft: 100,
    marginTop: 20,
    marginBottom: 10
  },
  formContianer: {
    marginLeft: 40,
    marginRight: 10
  },
  patientInformationContainer: {
    border: 1,
    padding: 10,
  },
  surgeryInformationContainer: {
    borderLeft: 1,
    marginTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 20
  },
  operationCategoryContainer: {
    alignItems: 'flex-end'
  },
  firmContainer: {
    marginTop: 100,
    alignSelf: 'flex-end',
    borderTop: 1,
    width: 150,
    paddingTop: 5,
    alignItems: 'center',
  }
});

// {
//   "paciente": "1",
//   "servicio": "1",
//   "habitacion": "1",
//   "Cama": "1",
//   "cirujano": "1",
//   "matriculaCirujano": "1",
//   "ayundate1": "1",
//   "matriculaAyudante1": "1",
//   "ayudante2": "1",
//   "matriculaAyudante2": "1",
//   "instrumentadora": "1",
//   "matriculaInstrumentadora": "1",
//   "anestesista": "1",
//   "matriculaAnestesista": "11",
//   "anestesiaEmpleada": "1",
//   "diagnosticoOperatorio": "1",
//   "riesgoOperatorio": "Mediano",
//   "operacionPracticada": "1",
//   "codigo": "1",
//   "categoriaOperacion": " Intermedia",
//   "detalleOperacion": "1"
// }

// Create Document Component
function BasicDocument() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    fechaCirugia,
    paciente,
    servicio,
    habitacion,
    cama,
    cirujano,
    matriculaCirujano,
    ayundate1,
    matriculaAyudante1,
    ayudante2,
    matriculaAyudante2,
    instrumentadora,
    matriculaInstrumentadora,
    anestesista,
    matriculaAnestesista,
    anestesiaEmpleada,
    diagnosticoOperatorio,
    riesgoOperatorio,
    operacionPracticada,
    codigo,
    categoriaOperacion,
    detalleOperacion,
  } = location.state;
  return (
    <>
      {location?.state ? (
        <>
          <button onClick={() => navigate("/", { state: location.state })}>
            Volver al formulario
          </button>
          <PDFViewer style={styles.viewer}>
            {/* Start of the document*/}
            <Document>
              {/*render a single page*/}
              <Page size="A4" style={styles.page}>
                <View style={styles.headerContainer}>
                  <Image style={styles.logo} src={Logo} />
                  <Text>HOJA QUIRURGICA</Text>
                </View>
                <View style={styles.surgeryDateContainer}>
                  <Text style={styles.text} > Fecha de cirugia: {fechaCirugia}</Text>
                </View>
                <View style={styles.formContianer}>
                  <View style={styles.patientInformationContainer}>
                    <Text style={styles.text}> Paciente: {paciente}</Text>
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>
                        Servicio: {servicio}                                           Habitacion: {habitacion}                                          cama: {cama}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.surgeryInformationContainer}>
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>
                        Cirujano: {cirujano}
                      </Text>
                      <Text style={styles.text}>
                        Matricula: {matriculaCirujano}
                      </Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>
                        Ayudante 1: {ayundate1}
                      </Text>
                      <Text style={styles.text}>
                        Matricula: {matriculaAyudante1}
                      </Text>
                    </View >
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>
                        Ayudante 2: {ayudante2}
                      </Text>
                      <Text style={styles.text}>
                        Matricula: {matriculaAyudante2}
                      </Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>
                        Instrumentadora: {instrumentadora}
                      </Text>
                      <Text style={styles.text}>
                        Matricula: {matriculaInstrumentadora}
                      </Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>
                        Anestesista: {anestesista}
                      </Text>
                      <Text style={styles.text}>
                        Matricula: {matriculaAnestesista}
                      </Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>
                        Anestesia Empleada: {anestesiaEmpleada}
                      </Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>
                        Diagnostico Operatorio: {diagnosticoOperatorio}
                      </Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>
                        Riesgo Operatorio:
                      </Text>
                      <View>
                        <Text style={styles.text}>
                          Grave: ( {riesgoOperatorio === 'Grave' && 'x'} )
                        </Text>
                        <Text style={styles.text}>
                          Mediano: ( {riesgoOperatorio === 'Mediano' && 'x'} )
                        </Text>
                        <Text style={styles.text}>
                          Leve: ( {riesgoOperatorio === 'Leve' && 'x'} )
                        </Text>
                      </View>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>
                        Operacion Practicada:
                      </Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>
                        Codigo: {codigo}
                      </Text>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>
                        Categoria de la operacion: {categoriaOperacion}
                      </Text>
                      <View style={styles.operationCategoryContainer}>
                        <Text style={styles.text}>
                          Cirugia:  Menor: ( {categoriaOperacion === 'Menor' && 'x'} ) Media: ( {categoriaOperacion === 'Media' && 'x'} ) Intermedia: ( {categoriaOperacion === 'Intermedia' && 'x'} )
                        </Text>
                        <Text style={styles.text}>
                          Mayor A: ( {categoriaOperacion === 'Mayor A' && 'x'} ) Mayor B: ( {categoriaOperacion === 'Mayor B' && 'x'} ) Mayor C: ( {categoriaOperacion === 'Mayor C' && 'x'} )
                        </Text>
                        <Text style={styles.text}>
                          Gran Cirugía: ( {categoriaOperacion === 'Gran Cirugía' && 'x'} )
                        </Text>
                      </View>
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>
                        Detalle de operacion: {detalleOperacion}
                      </Text>
                    </View>
                    <View style={styles.firmContainer}>
                      <Text style={styles.text}>Firma y sello</Text>
                      <Text style={styles.text}>Profesional</Text>
                    </View>
                  </View>
                </View>
              </Page>
            </Document>
          </PDFViewer>
        </>
      ) : (
        <>
          <h1>No hay ninguna informacion cargada</h1>
          <button onClick={() => navigate("/", { state: location.state })}>
            Volver al formulario
          </button>
        </>
      )}
    </>
  );
}
export default BasicDocument;
