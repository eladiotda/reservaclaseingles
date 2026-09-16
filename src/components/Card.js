import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EtiquetaNivel from './EtiquetaNivel';
import { colors, radius, spacing, sombra } from '../theme';
import { formatearPrecio } from '../data/clases';

export default function Card ({clase, onPress, ancho}){
    return(
        <Pressable
            onPress={onPress}
            style={({pressed}) => [
                style.tarjeta,
                ancho ? {width: ancho} : {flex: 1},
                pressed && {opacity: 0.85},
            ]}
        >
            <Image source={{uri: clase.imagen}} style={style.imagen} resizeMode='cover'/>

            <View style={style.cuerpo}>
                <View style={style.pie}>
                    <EtiquetaNivel nivel={clase.nivel}/>

                    <View style={style.filaCentro}>
                        <Ionicons name='star' size={12} color={colors.acento}/>
                        <Text style={style.meta}>{clase.rating}</Text>
                    </View>
                </View>

                <Text style={style.titulo} numberOfLines={2}>
                    {clase.titulo}
                </Text>

                <View style={style.filaProfesor}>
                    <Image source={{uri: clase.profesor.foto}} style={style.avatar}/>
                    <Text style={style.profesor} numberOfLines={1}>
                        {clase.profesor.nombre}
                    </Text>
                </View>

                <View style={style.pie}>
                    <View style={style.filaCentro}>
                        <Text style={style.meta}>{clase.duracion} min</Text>
                        <Text style={style.punto}>•</Text>
                        <Text style={style.meta}>{clase.modalidad}</Text>
                    </View>

                    <Text style={style.precio}>{formatearPrecio(clase.precio)}</Text>
                </View>
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