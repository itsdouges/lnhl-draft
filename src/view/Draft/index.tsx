import React from 'react';
import Baba, { Target, ConcealMove } from 'yubaba';
import { Form as FormProcessor, FormFragment } from 'react-forms-processor';
import { renderer as materialUiRenderer } from 'react-forms-processor-material-ui';
import Button from '@material-ui/core/Button';
import form from './form';
import { Page, ListItemHeader, Logo, ListItemHeaderPadding } from '../common/Elements';
import { Form } from '../common/Form';

const Draft = () => (
  <Baba name="reveal-draft">
    <ConcealMove>
      {baba => (
        <Page {...baba}>
          <Target>
            {target => (
              <ListItemHeader as="header" {...target}>
                <Logo />

                <h1>LNHL Draft</h1>
              </ListItemHeader>
            )}
          </Target>
          <ListItemHeaderPadding />

          <FormProcessor renderer={materialUiRenderer}>
            <Form onSubmit={console.log}>
              <FormFragment defaultFields={form} />
              <Button fullWidth variant="raised" type="submit">
                submit
              </Button>
            </Form>
          </FormProcessor>
        </Page>
      )}
    </ConcealMove>
  </Baba>
);

export default Draft;
