'use client'
import Button, { ButtonProps } from '@/components/ui/button2';
import { useFormState } from 'react-hook-form';

type Props = Pick<ButtonProps, 'label' | 'icon'>;

export default function Submit(props: Props) {
  const { isSubmitting,isValidating } = useFormState();
  console.log()
  return (
  <Button {...props} type="submit" state={isValidating ? 'disable' : isSubmitting ? 'loading' : null}  />
  );
   
}
