'use client'
import { HTMLAttributes, ReactNode } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";

import { 
    DefaultValues
  , FieldValues
  , FormProvider
  , SubmitHandler
  , SubmitErrorHandler
  , UseFormReturn
  //, UseFormSetValue
  , useForm
  , UseFormProps
} from 'react-hook-form';
//import request, { RespondError } from 'utils/request';


//type AsyncDefaultValues<TValues> = (payload?: unknown) => Promise<TValues>;

type Props<TValues extends FieldValues, TContext = any> = Omit<HTMLAttributes<HTMLFormElement>, 'onError' | 'onSubmit' | 'onSuccess'> & {
  url?: string;
  //initial?: TValues | AsyncDefaultValues<TValues>;
  initial?: DefaultValues<TValues>;
  schema: z.ZodType<TValues>;
  reshape?: (values: TValues) => unknown;
  children: ReactNode | ((arg: UseFormReturn<TValues>) => ReactNode);

  onError?: SubmitErrorHandler<TValues>;
  // onError?: (
  //   options: RespondError & {
  //     values: TValues;
  //     setValue: UseFormSetValue<TValues>;
  //     setError: (name: never, msg: string) => void;
  //   },
  // ) => void;
  onSubmit: SubmitHandler<TValues>;
  onSuccess?: <TData>(arg: { data: TData; values: TValues }) => void;
  //serverError?: 
  //resetValues?:
  //options?: UseFormProps<TFormValues>;
};

export default function Form<TValues extends FieldValues>({
  url,
  schema,
  initial,
  reshape,
  children,
  onError,
  onSubmit,
  onSuccess,
  ...rest
}: Props<TValues>) {

  
  const form = useForm<TValues>({ 
    //resolver: zodResolver(schema),
    resolver: schema ? zodResolver(schema) : undefined,
    //defaultValues: initial ,
    defaultValues: initial as UseFormProps<TValues>['defaultValues'],
    ...rest,
    });

  //const handleSubmit: SubmitHandler<TValues> = (values) => {
    // if (url) {
    //   return request(url, { type: 'multipart', payload: reshape ? reshape(values) : values })
    //     .then((data) => onSuccess?.({ data, values }))
    //     .catch((error) => {
    //       onError?.({
    //         ...error,
    //         values,
    //         setValue: form.setValue,
    //         setError: (name, message) => form.setError(name, { type: 'validate', message }),
    //       });
    //     });
    // }
 // };

  return (
     <FormProvider {...form}>
        <form {...rest} onSubmit={form.handleSubmit(onSubmit, onError)}>
       {/* <form {...rest} onSubmit={form.handleSubmit(onSubmit || handleSubmit)}> */}
         {typeof children === 'function' ? children(form) : children}
       </form>
     </FormProvider>
   );
}
