import React from 'react';
import { Form as FormProcessor, FormFragment } from 'react-forms-processor';
import { renderer as materialUiRenderer } from 'react-forms-processor-material-ui';
import Button from '@material-ui/core/Button';
import form from './form';
import { Page, Logo } from '../common/Elements';
import { Form } from '../common/Form';

const Draft = () => (
  <Page
    name="draft"
    header={
      <React.Fragment>
        <Logo />
        <h1>LNHL Draft</h1>
      </React.Fragment>
    }
  >
    <FormProcessor renderer={materialUiRenderer}>
      <Form onSubmit={console.log}>
        <FormFragment defaultFields={form} />
        <Button fullWidth variant="contained" type="submit">
          Submit
        </Button>
      </Form>
    </FormProcessor>
  </Page>
);

export default Draft;
