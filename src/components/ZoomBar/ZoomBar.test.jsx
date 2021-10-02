import React from 'react'

import { screen, render } from '../../tests/test-util'
import { ZoomBar } from './ZoomBar'

describe('src/components/BottomBar', () => {
    it('renders the BottomBar component', () => {
        render(<ZoomBar></ZoomBar>)

        expect(screen.getByRole('zoom-bar')).toBeInTheDocument()
    })

    it('renders the icons', () => {
        render(<ZoomBar></ZoomBar>)

        expect(screen.getByRole('zoom-in')).toBeInTheDocument()
        expect(screen.getByRole('zoom-out')).toBeInTheDocument()
    })
})