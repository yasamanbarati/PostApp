//@ts-nocheck

import { ReactNode, useState } from 'react'
import { ReactSortable } from 'react-sortablejs'
import { MediaBodyType } from 'scenes/_slice/type'

interface sortableProps {
  list: MediaBodyType[]
  children: ReactNode
}

export const Sortable = ({ list, children }: sortableProps) => {
  const [listItem, setListItem] = useState<MediaBodyType[]>(list)

  return (
    <ReactSortable
      list={listItem}
      setList={setListItem}
      handle=".dragHandle"
      animation={200}
    >
      {children}
    </ReactSortable>
  )
}
