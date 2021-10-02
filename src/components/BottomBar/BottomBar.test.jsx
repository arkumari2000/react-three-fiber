import React from 'react'

import { screen, render } from '../../tests/test-util'
import { BottomBar } from './BottomBar'

describe('src/components/BottomBar', () => {
    it('renders the BottomBar component', () => {
        render(<BottomBar></BottomBar>)

        expect(screen.getByRole('bottom-bar')).toBeInTheDocument()
    })

    it('renders the icons', () => {
        render(<BottomBar></BottomBar>)

        expect(screen.getByRole('stop')).toBeInTheDocument()
        expect(screen.getByRole('split')).toBeInTheDocument()
        expect(screen.getByRole('cube')).toBeInTheDocument()
    })
})