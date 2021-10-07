import React from 'react'
import { FlatList } from 'react-native'

import GoBackButton from 'packages/components/GoBackButton'
import { PageContainer } from 'packages/styles'

import Licenses from '../../licenses.json'
import CreditsHeader from './components/CreditsHeader'
import LicenseItem from './components/LicenseItem'
import { CreditsBottomContainer, CreditsGroupTitle } from './credits.styles'

const CreditsPage: React.FC = () => {
  return (
    <PageContainer style={{ paddingTop: 80 }} withoutPadding>
      <FlatList
        ListHeaderComponent={CreditsHeader}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        data={Object.entries(Licenses)}
        renderItem={({ item: [key, value] }) => (
          <LicenseItem label={key} license={value} />
        )}
        keyExtractor={([key], index) => {
          if (key) return key

          return index.toString()
        }}
        initialNumToRender={1} // Reduce initial render amount
        removeClippedSubviews={false}
        windowSize={40}
        showsVerticalScrollIndicator={false} // Reduce the scroll indicator
      />

      <GoBackButton style={{ marginTop: 44, marginLeft: 16 }} />

      <CreditsBottomContainer>
        <CreditsGroupTitle>
          Feito por estudantes para estudantes ❤️
        </CreditsGroupTitle>
      </CreditsBottomContainer>
    </PageContainer>
  )
}

export default CreditsPage
