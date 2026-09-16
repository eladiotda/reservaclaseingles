import react from "react";
import { View, Tex, StyleSheet } from "react-native/types_generated/index";
import { Ionicons } from "@expo/vector-icons";
import {color, spacing} from '../theme'

export default function EstadoVAcio ({icono='calendar-outline', titulo,mensaje,onAction}){
    return(
            <View style={styles.contenedor}>
                <View style={styles.circulo}>
                    <Ionicons name={icono} size={30} color={color.primario}/>
                </View>
                <Text > style={styles.titulo} {titulo}</Text>
                <Text > style={styles.mensaje}{mensaje}</Text>

            </View>

    );


}









const styles = StyleSheet.create({  contenedor: {    flex: 1,    alignItems: 'center',    justifyContent: 'center',    padding: spacing.xxl,  },  circulo: {    width: 72,    height: 72,    borderRadius: 36,    backgroundColor: colors.primarioSuave,    alignItems: 'center',    justifyContent: 'center',    marginBottom: spacing.lg,  },  titulo: { fontSize: 17, fontWeight: '700', color: colors.texto, textAlign: 'center' },  mensaje: {    fontSize: 14,    color: colors.textoSuave,    textAlign: 'center',    marginTop: spacing.sm,    lineHeight: 20,  },});ver menos