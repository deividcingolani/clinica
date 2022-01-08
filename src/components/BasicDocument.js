import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Create styles
const styles = StyleSheet.create({
  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  page: {},
  section: {
    margin: 1,
    padding: 1,
  },
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
              <View style={styles.section}>
                  <Text> Fecha de cirugia: {fechaCirugia}</Text>
                </View>
                <View style={styles.section}>
                  <Text> Paciente: {paciente}</Text>
                </View>
                <View style={styles.section}>
                  <Text>
                    Servicio: {servicio} Habitacion: {habitacion}     cama: {cama}
                  </Text>
                </View>
                <View style={styles.section}>
                  <Text>
                    Cirujano: {cirujano} Matricula: {matriculaCirujano}
                  </Text>
                </View>
                <View style={styles.section}>
                  <Text>
                    Ayudante 1: {ayundate1} Matricula: {matriculaAyudante1}
                  </Text>
                </View>
                <View style={styles.section}>
                  <Text>
                    Ayudante 2: {ayudante2} Matricula: {matriculaAyudante2}
                  </Text>
                </View>
                <View style={styles.section}>
                  <Text>
                    Instrumentadora: {instrumentadora} Matricula: {matriculaInstrumentadora}
                  </Text>
                </View>
                <View style={styles.section}>
                  <Text>
                  Anestesista: {anestesista} Matricula: {matriculaAnestesista}
                  </Text>
                </View>
                <View style={styles.section}>
                  <Text>
                  Anestesia Empleada: {anestesiaEmpleada}
                  </Text>
                </View>
                <View style={styles.section}>
                  <Text>
                  Anestesia Empleada: {anestesiaEmpleada}
                  </Text>
                </View>
                <View style={styles.section}>
                  <Text>
                  Diagnostico Operatorio: {diagnosticoOperatorio}
                  </Text>
                </View>
                <View style={styles.section}>
                  <Text>
                  Riesgo Operatorio: {riesgoOperatorio}
                  </Text>
                </View>
                <View style={styles.section}>
                  <Text>
                  Operacion Practicada: {operacionPracticada}
                  </Text>
                </View>
                <View style={styles.section}>
                  <Text>
                  Codigo: {codigo}
                  </Text>
                </View>
                <View style={styles.section}>
                  <Text>
                  Categoria de la operacion: {categoriaOperacion}
                  </Text>
                </View>
                <View style={styles.section}>
                  <Text>
                  Detalle de operacion: {detalleOperacion}
                  </Text>
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
