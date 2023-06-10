"use client";
import Image from "next/image";
// const NextJsImage = (
//   image: SlideImage,
//   offset: number,
//   rect: ContainerRect
// ) => {
//   const imgHeight: number = image.height || 300;
//   const imgWidth: number = image.width || 300;
//   const width = Math.round(
//     Math.min(rect.width, (rect.height / imgHeight) * imgWidth)
//   );
//   const height = Math.round(
//     Math.min(rect.height, (rect.width / imgWidth) * imgHeight)
//   );

//   return (
//     // <Box pos="relative" w={width} h={height}>
//       <Image
//         fill
//         alt="lightbox-pic"
//         src={image.src}
//         loading="eager"
//         //placeholder="blur"
//         //blurDataURL={rgbDataURL(200, 227, 226)}
//         draggable={false}
//         sizes={
//           typeof window !== "undefined"
//             ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
//             : `${width}px`
//         }
//       />
//     // </Box>
//   );
// };

{/* <ProductImage product={product} /> */}
// import Image from "next/image";
// import { useState } from "react";

// type Props = {
//   product: Product;
//   fill?: boolean;
// };

// function ProductImage({ product, fill }: Props) {
//   const [loading, setLoading] = useState(true);

//   return (
//     <>
//       {fill ? (
//         <Image
//           src={product.image}
//           alt={product.title}
//           fill
//           className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
//             loading
//               ? "scale-110 blur-2xl grayscale"
//               : "scale-100 blur-0 grayscale-0"
//           }}`}
//           onLoadingComplete={() => setLoading(false)}
//         />
//       ) : (
//         <Image
//           src={product.image}
//           alt={product.title}
//           width={400}
//           height={1000}
//           className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
//             loading
//               ? "scale-110 blur-2xl grayscale"
//               : "scale-100 blur-0 grayscale-0"
//           }}`}
//           onLoadingComplete={() => setLoading(false)}
//         />
//       )}
//     </>
//   );
// }

// export default ProductImage;


//import { useState } from 'react';
// import { VariantProps, cva } from 'class-variance-authority';
// import Img, { ImageProps } from 'next/image';
// import { screens } from '@/utils/index/const';

// type Props = Omit<ImageProps, 'alt' | 'sizes'> & {
//   alt?: string;
//   size?: number | [number, number];
//   sizes?: { sm?: string; md?: string; lg?: string; xl?: string; '2xl'?: string };
// };

// const classes = cva('bg-gray-200 object-cover object-center ease-linear', {
//   variants: {
//     state: {
//       error: 'cursor-not-allowed',
//       loading: 'scale-95 blur-md animate-pulse',
//       success: 'scale-100 blur-none duration-200',
//     },
//   },
// });

// export default function Image({ alt = ' ', size, sizes, className, ...rest }: Props) {
//   const [state, setState] = useState<VariantProps<typeof classes>['state']>('loading');

//   const $sizes = sizes
//     ? Object.entries(sizes).reduce((str, [screen, width]) => {
//         const $media = screens[screen as keyof typeof screens];
//         return `(min-width: ${$media}px) ${width}, ${str}`;
//       }, '100vw')
//     : undefined;

//   const [width, height] = Array.isArray(size) ? size : [size, size];

//   return (
//     <Img
//       {...rest}
//       alt={alt}
//       sizes={$sizes}
//       width={width}
//       height={height}
//       className={classes({ state, className })}
//       onError={() => setState('error')}
//       onLoadingComplete={() => setState('success')}
//     />
//   );
// }

// export type { Props as ImageProps };
