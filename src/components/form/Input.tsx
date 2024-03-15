import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  type FormLabelProps,
  type InputProps,
  Input,
  Textarea,
  TextareaProps
} from "@chakra-ui/react";

interface FormInputProps {
  error?: any;
  inputProps?: Record<string, any> & InputProps;
  textareaProps?: Record<string, any> & TextareaProps;
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  labelProps?: FormLabelProps;
  label?: string;
  inputType?: "input" | "textarea",
  hideLabel?: boolean;
}

export function FormInputComponent({ label = "Name", inputType = "input", hideLabel = false, ...props }: FormInputProps) {
  return <FormControl isInvalid={props.error} isRequired={props.required}>
    {!hideLabel && <FormLabel
      htmlFor={label.toLowerCase().replaceAll(' ', '-')}
      {...props.labelProps || {}}
    >
      {label}
    </FormLabel>}
    {inputType === "input" && <Input
      id={label.toLowerCase().replaceAll(' ', '-')}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      {...(props.inputProps || {})}
    />}
    {inputType === "textarea" && <Textarea
      id={label.toLowerCase().replaceAll(' ', '-')}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      {...(props.textareaProps || {})}
    />}
    <FormErrorMessage>
      {props.error && props.error.message}
    </FormErrorMessage>
  </FormControl>
}