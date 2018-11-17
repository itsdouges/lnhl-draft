declare module 'react-forms-processor' {
  import React from 'react';

  export class FormFragment extends React.Component<{
    defaultFields: {}[];
  }> {}

  export class Form extends React.Component<{
    renderer?: Function;
    defaultFields?: {}[];
  }> {}

  export const FormContext: any;
}
