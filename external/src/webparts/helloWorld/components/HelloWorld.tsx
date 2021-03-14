import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps } from 'office-ui-fabric-react/lib/Stack';
import * as strings from 'HelloWorldWebPartStrings';
//const logo: any = require('./../../../assets/google.gif');
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextBoxControl } from './controls/TextBoxControl';

interface  IFormInputs {
  firstName: string
}

const schema = yup.object().shape({
  firstName: yup.string().required()
})

export default function HelloWorld (props: IHelloWorldProps) {
  const {handleSubmit, errors, control } = useForm<IFormInputs>(
    {
      resolver: yupResolver(schema)
    }
  );
  const onSubmit = (data: IFormInputs) => alert(JSON.stringify(data));

    const columnProps: Partial<IStackProps> = {
      tokens: { childrenGap: 15 },
      styles: { root: { width: 300 } }
    };
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextBoxControl control={control} errors={errors} name="firstName" label="Enter name"/>
          <PrimaryButton type="submit" text="accept"/>
        </form>
        <div>
          <span className={styles.title}>Welcome to SharePoint!</span>
          <br />
          <DefaultButton text={strings.AnotherProp} />
        </div>
        <div>
          <Stack horizontal tokens={{ childrenGap: 50 }} styles={{ root: { width: 650 } }}>
            <Stack {...columnProps}>
              <TextField label='Standard' />
              <TextField label='Disabled' disabled defaultValue='I am disabled' />
              <TextField label='Read-only' readOnly defaultValue='I am read-only' />
              <TextField label='Required ' required />
              <TextField required />
              <TextField label='With error message' errorMessage='Error message' />
            </Stack>
          </Stack>
        </div>
      </div>
    );
  
}
