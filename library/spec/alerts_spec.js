import React from 'react'
import {SuccessAlert} from '../src/pivotal-ui-react/alerts/alerts'
import ReactTestUtils from 'react-addons-test-utils'

describe('Alert', () => {
  const rendered = props => {
    const reactElement = ReactTestUtils.renderIntoDocument(<SuccessAlert {...props}/>)
    const htmlElement = ReactTestUtils.scryRenderedDOMComponentsWithTag(reactElement, 'div')
    return htmlElement[0]
  }

  it('passes down the className, id, and style properties', () => {
    expect(rendered({className: 'foobar'}).classList).toContain('foobar')
  })
})
