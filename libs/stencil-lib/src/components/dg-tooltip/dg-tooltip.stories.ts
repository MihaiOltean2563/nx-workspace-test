import {text} from '@storybook/addon-knobs';
// import { DgTooltip } from './dg-tooltip';

export default {
  title: 'Demo',
  // component: DgTooltip
};

export const tooltip = () => {
  const firstName = text('First name', 'StencilJS');
  const middleName = text('Middle name', 'Storybook');
  const lastName = text('Last name', 'Test');
  return `<dg-tooltip first="${firstName}" middle="${middleName}" last="${lastName}"></dg-tooltip>`;
};
