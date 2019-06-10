import { INPUT_FOCUS, INPUT_BLUR } from './actionTypes'

export const inputFocusAction = () => {
  return {
    type: INPUT_FOCUS
  }
};

export const inputBlurAction = () => {
  return {
    type: INPUT_BLUR
  }
};