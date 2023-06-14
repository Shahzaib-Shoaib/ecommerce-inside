import { VariantProps, cva } from 'class-variance-authority';
import { ProgressBar } from '@/icons/loading';
import Link, { LinkProps } from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type Props = VariantProps<typeof classes> &
  (LinkProps | ButtonProps) & {
    icon?: ReactNode;
    label: ReactNode;
    inline?: boolean;
    className?: string;
  };

const classes = cva(
  'font-medium   rounded-md cursor-pointer transition border ',
  {
    variants: {
      size: {
        sm: 'text-xs px-2 h-8 [&>p]:space-x-0.5',
        md: 'text-base px-4 h-10 [&>p]:space-x-1.5',
        lg: 'text-lg px-8 h-12 [&>p]:space-x-2',
      },
      width: { fill: 'flex w-full', inline: 'inline-flex px-0 h-auto' },
      state: { loading: 'pointer-events-none', disable: 'pointer-events-none bg-opacity-50',valid: '' },
      intent: {
        link: 'text-brand-800  focus:ring-0 focus:ring-offset-0',
        solid: 'text-gray-800  bg-brand-500 hover:bg-darkblue bg-caribbeangreen text-darkblue hover:text-white',
        danger: 'text-gray-800  bg-error-500 hover:bg-error-400 ',
        outline: 'text-gray-800 border-grey-500 hover:text-brand-800 hover:border-brand-500',
      },
    },
  },
);

export default function Button2({ icon, size = 'md', state, label, inline, intent = 'solid', className, ...rest }: Props) {
  const props = {
    ...rest,
    children:
      state === 'loading' ? (
        <ProgressBar className=" duration-150 rounded-md" />
      ) : (
        <>
          {icon && <i className='[&>svg]:w-[1em]'>{icon}</i>}
          <span className={`select-none leading-none m-auto ${intent !== 'link' && 'font-medium'}`}>{label}</span>
        </>
      ),
    className: classes({ size, state, width: inline ? 'inline' : 'fill', intent, className }),
  };

  return props.href ? <Link {...props} /> : <button type='button' {...(props as ButtonProps)} />;
}

export type { Props as ButtonProps };
