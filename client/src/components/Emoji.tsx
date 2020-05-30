import React, { FC } from 'react'

type Props = {
  emoji: string
  label: string
}

const Emoji: FC<Props> = ({ emoji, label }) => (
  <span role="img" aria-label={ label || ''}>
    { emoji }
  </span>
)

export default Emoji
