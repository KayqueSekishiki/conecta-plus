import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contact'
import { Button } from '../../styles'

type TagProps = {
  group?: enums.Group
  favorite?: enums.Favorite
  parameter: 'group' | 'favorite'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parameter === 'group') {
    if (props.group === enums.Group.FAMILY) {
      return variaveis.vermelho
    }
    if (props.group === enums.Group.FRIENDS) {
      return variaveis.amareloEscuro
    }
    if (props.group === enums.Group.BUSINESS) {
      return variaveis.amareloClaro
    }
  } else if (props.parameter === 'favorite') {
    if (props.favorite === enums.Favorite.FAVORITED) {
      return variaveis.verde
    }
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    cursor: pointer;

    gap: 8px;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Tag = styled.span<TagProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 64px;
  min-height: 20px;

  color: #fff;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
`

export const Text = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  height: 32px;
  margin-bottom: 8px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const ActionBar = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const DeleteCancelButton = styled(Button)`
  min-width: 80px;
  min-height: 32px;
  background-color: ${variaveis.vermelho};

  &:hover {
    background-color: transparent;
    border: 1px solid ${variaveis.vermelho};
    color: ${variaveis.vermelho};
  }

  &:active {
    background-color: ${variaveis.vermelho};
    color: #fff;
  }
`
