import React from 'react';
import styled from 'styled-components';
import { FormContext } from 'react-forms-processor';
import * as grid from '../../styles/grid';

const FormRoot = styled.form`
  padding: ${grid.multiple(2).px};
`;

export const Form = (props: { children: React.ReactNode; onSubmit: (values: {}) => void }) => (
  <FormContext.Consumer>
    {(form: any) => (
      <FormRoot
        {...props}
        onSubmit={e => {
          e.preventDefault();
          if (form.isValid) {
            props.onSubmit(form.value);
          }
        }}
      />
    )}
  </FormContext.Consumer>
);
