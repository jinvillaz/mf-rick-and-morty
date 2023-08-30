import { useTranslation } from 'react-i18next'

import { Character } from '../../shared/types'

import { Avatar, Card, Container, Info, InfoGender, InfoName, InfoSpecie, InfoStatus } from './styles'
import i18n from '../../language';

import en from './en.json'
import es from './es.json'

i18n.addResources('en', 'translation', { ...en });
i18n.addResources('es', 'translation', { ...es });

interface CharacterCardProps {
  character: Character
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { t } = useTranslation()
  return (
    <Container>
      <Card>
        <Avatar src={character.image} alt="Rick and Morthy" />
        <Info>
          <InfoName>{character.name}</InfoName>
          <InfoGender>
            {t('Gender')} - {t(character.gender)}
          </InfoGender>
          <InfoStatus>
            {t('Status')} - {t(character.status)}
          </InfoStatus>
          <InfoSpecie>
            {t('Specie')} - {t(character.species)}
          </InfoSpecie>
        </Info>
      </Card>
    </Container>
  )
}

export default CharacterCard
