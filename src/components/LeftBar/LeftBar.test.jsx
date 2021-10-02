import React from 'react'

import { screen, render } from '../../tests/test-util'
import { LeftBar } from './LeftBar'

describe('src/components/BottomBar', () => {
    it('renders the BottomBar component', () => {
        render(<LeftBar></LeftBar>)

        expect(screen.getByRole('left-bar')).toBeInTheDocument()
    })

    it('renders the icons', () => {
        render(<LeftBar></LeftBar>)

        expect(screen.getByRole('reorder')).toBeInTheDocument()
        expect(screen.getByRole('architecture')).toBeInTheDocument()
        expect(screen.getByRole('info')).toBeInTheDocument()
        expect(screen.getByRole('share')).toBeInTheDocument()
    })
})