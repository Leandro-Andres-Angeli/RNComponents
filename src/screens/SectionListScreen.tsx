/* eslint-disable react-native/no-inline-styles */
import { SectionList, Text, View } from 'react-native';
import React from 'react';

import { styles } from '../theme/AppTheme';
import HeaderTitle from '../components/HeaderTitle';
import casas from '../data/sectionList';
import ItemSeparator from '../components/ItemSeparator';
const Separator = ({ color = 'blue' }: { color?: string }) => (
  <View style={{ borderWidth: 2, borderColor: color }} />
);
const SectionListScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <SectionList
        ListHeaderComponent={<HeaderTitle title="Section List" />}
        sections={casas}
        ListFooterComponent={
          <HeaderTitle title={`Total casas ${casas.length}`} />
        }
        keyExtractor={(item, index) => item + index}
        stickySectionHeadersEnabled={true}
        renderSectionFooter={({ section }) => (
          <View>
            <Text>Items {section.data.length}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { casa } }) => {
          return (
            <View style={{ backgroundColor: 'gold' }}>
              <HeaderTitle title={casa} />
            </View>
          );
        }}
        SectionSeparatorComponent={ItemSeparator}
        ItemSeparatorComponent={ItemSeparator}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};

export default SectionListScreen;
