import React, { useMemo, useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput, ScrollView, FlatList,} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import NivelChip from "../components/NivelChip";
import Card from "../components/Card";
import EstadoVAcio from "../components/EstadoVacio";
import useresponsive from "../hooks/useResposive";
import { colors, radius, spacing, typography } from "../theme";
import { CLASES, NIVELES } from "../data/clases";

export default function ClasesScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const [nivel, setNivel] = useState("Basico");
  const [busqueda, setBusqueda] = useState("");
  const { columnas, paddingHorizontal } = useresponsive(); //desestruturador

  const resultados = useMemo(() => {
    const textoBusqueda = busqueda.trim().toLowerCase();

    return CLASES.filter((clase) => {
      const coincidenciaNivel = nivel === "Todos" || clase.nivel === nivel;

      const coincidenciaTexto =
        textoBusqueda === "" ||
        clase.titulo.toLowerCase().includes(textoBusqueda) ||
        clase.profesor.nombre.toLowerCase().includes(textoBusqueda);

      return coincidenciaNivel && coincidenciaTexto;
    });
  }, [nivel, busqueda]);

  return (
    <View style={[styles.pantalla, { paddingTop: insets.top + spacing.md }]}>
      <View style={{ paddingHorizontal }}>
        <Text style={typography.titulo}>Aplicación para clases de inglés</Text>

        <View style={styles.buscador}>
          <Ionicons name="search" size={18} color={colors.textoSuave} />

          <TextInput
            style={styles.input}
            placeholder="Buscar por título o profesor"
            placeholderTextColor={colors.textoSuave}
            value={busqueda}
            onChangeText={setBusqueda}
            autoCorrect={false}
          />

          {busqueda.length > 0 && (
            <Pressable onPress={() => setBusqueda("")}>
              <Ionicons
                name="close-circle"
                size={18}
                color={colors.textoSuave}
              />
            </Pressable>
          )}
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0, marginTop: spacing.md }}
        contentContainerStyle={{
          paddingHorizontal,
          gap: spacing.sm,
        }}
      >
        {NIVELES.map((item) => (
          <NivelChip
            key={item}
            etiqueta={item}
            activo={item === nivel}
            onPress={() => setNivel(item)}
          />
        ))}
      </ScrollView>

      <FlatList
        data={resultados}
        keyExtractor={(item) => item.id.toString()}
        numColumns={columnas}
        renderItem={({ item }) => (
          <Card
            clase={item}
            onPress={() =>
              navigation.navigate("Detalleclase", {
                clase: item,
              })
            }
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal,
          paddingTop: spacing.md,
          paddingBottom: spacing.xl,
          flexGrow: 1,
        }}

        numColumns={ columnas}
        ListEmptyComponent ={
          <EstadoVAcio
              icono="serarch-ouline"
              titulo='No encoantreamois resialdoa'
              mensaje='La cambnacion de bundqueda no tine resutado'
              onAction={()=> {
                setNivel('Todos');
                setBusqueda('');
               }}


              

        ListEmptyComponent={
          <View style={styles.sinResultados}>
            <Ionicons
              name="search-outline"
              size={42}
              color={colors.textoSuave}
            />

            <Text style={styles.sinResultadosTitulo}>
              No encontramos clases
            </Text>

            <Text style={styles.sinResultadosTexto}>
              Prueba con otro nivel, título o profesor.
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: colors.fondo,
  },

  buscador: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: colors.superficie,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    height: 46,
    marginTop: spacing.lg,
    borderWidth: 1,
    borderColor: colors.borde,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: colors.texto,
    paddingVertical: 0,
  },

  sinResultados: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.xl * 2,
  },

  sinResultadosTitulo: {
    marginTop: spacing.md,
    fontSize: 18,
    fontWeight: "600",
    color: colors.texto,
  },

  sinResultadosTexto: {
    marginTop: spacing.sm,
    fontSize: 14,
    color: colors.textoSuave,
    textAlign: "center",
  },
});
