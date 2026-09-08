import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import EtiquetaNivel from './EtiquetaNivel';
import { colors, radius, spacing, typografy} from '../theme';
import LabelLevel from './EtiquetaNivel';
import {CLASES, formatearPrecio} from '../data/clases';

export default function Card ({urlImagen, onPress, ancho}){
    return(
        <Pressable
            onPress={onPress}

        >
            <Image source={{uri:'La url de la imagen'}} style={""} resizeMode='cover'/>
            <View>
                <EtiquetaNivel nivel={clase.nivel}/>
            </View>
            <View>
                <Text>
                    {clase.profesor.nombre} 
                </Text>
                <Text>
                    {clase.horarios}
                </Text>
                <Text>
                    {clase.precio}
                </Text>
            </View>
       </Pressable>

    )
}

    const style = StyleSheet.create({
        tarjeta: {
            backgroundColor: colors.superficie,
            borderRadius: radius.lg,
            overflow: 'hidden',
            marginBottom: spacing.lg,
  },
        imagen: {
            width: '100%',
            height: 130,
            backgroundColor: colors.primarioSuave,
  },
        cuerpo: {
            padding: spacing.lg,
            gap: spacing.sm,
  },
        titulo: { fontSize: 16, fontWeight: '700', color: colors.texto },
        filaProfesor: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
        avatar: { width: 24, height: 24, borderRadius: 12, backgroundColor: colors.borde },
        profesor: { fontSize: 13, color: colors.textoSuave, flexShrink: 1 },
        pie: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: spacing.xs,
  },
        filaCentro: { flexDirection: 'row', alignItems: 'center', gap: 4 },
        meta: { fontSize: 12, color: colors.textoSuave },
        punto: { color: colors.borde, marginHorizontal: 2 },
        precio: { fontSize: 14, fontWeight: '800', color: colors.primario },
});