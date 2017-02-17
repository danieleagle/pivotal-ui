import '../spec_helper'
import ReactTestUtils from 'react-addons-test-utils'
import {CopyToClipboard, CopyToClipboardButton} from '../../../src/pivotal-ui-react/copy-to-clipboard/copy-to-clipboard')

describe('CopyToClipboard', () => {
  const renderComponent = (props) => {
    return ReactTestUtils.renderIntoDocument(<CopyToClipboard {...props}/>)
  }
  const text = 'some copy text'
  let onClick, CopyToClipboard, CopyToClipboardButton

  beforeEach(() => {
    onClick = jasmine.createSpy('onClick')
    spyOn(document, 'execCommand')
  })

  describe('CopyToClipboard (basic)', () => {
    it('renders the text', () => {
      const result = renderComponent({text, onClick, className: 'test-class', id: 'test-id', style: {opacity: '0.5'}})
      const component = ReactTestUtils.findRenderedDOMComponentWithClass(result, 'sr-only')
      expect(component.textContent).toContain(text)
    })


    it('propagates attributes', () => {
      const result = renderComponent({text, onClick, className: 'test-class', id: 'test-id', style: {opacity: '0.5'}})
      const component = ReactTestUtils.findRenderedDOMComponentWithClass(result, 'copy-to-clipboard')

      expect(component.className).toContain('test-class')
      expect(component.id).toEqual('test-id')
      expect(component.className).toContain('test-class')
    })
    itPropagatesAttributes('.copy-to-clipboard', {className: 'test-class', id: 'test-id', style: {opacity: '0.5'}})

    describe('when clicking on copy to clipboard', () => {
      beforeEach(() => {
        $('.copy-to-clipboard').simulate('click')
      })

      it('copies the text to the clipboard', () => {
        expect(document.execCommand).toHaveBeenCalledWith('copy')
      })

      it('calls the provided callback', () => {
        expect(onClick).toHaveBeenCalled()
      })
    })
  })

  describe('CopyToClipboardButton', () => {
    let Tooltip

    beforeEach(() => {
      ReactDOM.render(<CopyToClipboardButton {...{text, onClick, className: 'test-class', id: 'test-id', style: {opacity: '0.5'}}}/>, root)
    })

    itPropagatesAttributes('.copy-to-clipboard-button', {className: 'test-class', id: 'test-id', style: {opacity: '0.5'}})


    describe('clicking on the button', () => {
      beforeEach(() => {
        Tooltip = require('pui-react-tooltip').Tooltip
        spyOn(Tooltip.prototype, 'render').and.callThrough()
        $('svg.icon-copy').simulate('click')
      })

      it('renders a tooltip that says "Copied"', () => {
        expect('.tooltip').toContainText('Copied')
      })

      it('hides tooltip after 5 seconds', () => {
        expect('.tooltip-container-visible').toExist()
        jasmine.clock().tick(6000)
        expect('.tooltip-container-visible').not.toExist()
      })

      it('copies the text to the clipboard', () => {
        expect(document.execCommand).toHaveBeenCalledWith('copy')
      })

      it('calls the provided callback', () => {
        expect(onClick).toHaveBeenCalled()
      })
    })
  })
})