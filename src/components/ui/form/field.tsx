'use client'
import * as Label from '@radix-ui/react-label';
import useField from '@/hooks/field';
import { Dispatch, ReactNode, SetStateAction } from 'react';

type Props<T> = FieldProps & {
  children: (param: {
    value: T | undefined;
    error?: string;
    placeholder?: string;
    setValue: Dispatch<SetStateAction<T>>;
  }) => JSX.Element;
  className?: string;
};

export type FieldProps = { name: string; label?: ReactNode,placeholder:string ,colorScheme: 'transparent' | 'white' };

export default function Field<T = string>({ name, label, children, className,colorScheme }: Props<T>) {
  const { error, value, setValue } = useField<T>(name);

  return (
    <fieldset className={className}>
      {label && (
        <Label.Root htmlFor={name} className={`inline-block cursor-pointer text-sm  font-medium mb-2 ${colorScheme === "transparent" ? "text-white" : "text-gray-800" } `} >
          {label}
        </Label.Root>
      )}
      {children({ error, value, setValue })}
      {error && <p className='text-sm text-red-600 mt-1'>{error}</p>}
    </fieldset>
  );
}
