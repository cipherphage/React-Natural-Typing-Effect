export const allowedLanguages: { 'ko': 'ko' };

export const defaultLetter: Letter = {
  parentKey: -1,
  letter: ''
};

export const defaultIsRepeated: IsRepeated = {
  isRepeated: false,
  count: 0,
  isInfinite: false
}

export const defaultModes = {
  t: 'typewriter',
  nt: 'negativeTypewriter',
  bgt: 'blackGreenTerminal'
};

export const defaultStyleClassesPrefix =
  'react-natural-typing-effect-';

export const defaultStyleClasses = {
  t: `${defaultStyleClassesPrefix}${defaultModes.t}`,
  nt: `${defaultStyleClassesPrefix}${defaultModes.nt}`,
  bgt: `${defaultStyleClassesPrefix}${defaultModes.bgt}`,
  bgtCursor: `${defaultStyleClassesPrefix}${defaultModes.bgt}-cursor`,
  bgtBlinkingCursor: `${defaultStyleClassesPrefix}${defaultModes.bgt}-blinking-cursor`,
  cursor: `${defaultStyleClassesPrefix}cursor`,
  blinkingCursor: `${defaultStyleClassesPrefix}blinking-cursor`
};

export const defaultStylesRegex = new RegExp(`(?:${defaultStyleClasses.t})+|(?:${defaultStyleClasses.nt})+|(?:${defaultStyleClasses.bgt})+`, 'g');