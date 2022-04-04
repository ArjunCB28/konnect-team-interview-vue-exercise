import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import InputBox from '@/components/InputBox.vue'

describe('InputBox.vue', () => {
  const wrapper = shallowMount(InputBox)

  it('renders an input element', () => {
    expect(wrapper.find('input')).to.exist
  })

  it('emits change event on input', async () => {
    const inputValue = 'SearchText'

    wrapper.find('input').setValue(inputValue)
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().change).to.deep.equal([[inputValue]])
  })
})
