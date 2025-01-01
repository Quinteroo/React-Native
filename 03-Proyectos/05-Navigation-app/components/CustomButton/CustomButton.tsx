import { Text, Pressable, PressableProps } from 'react-native';
import React from 'react';

interface Props extends PressableProps {
  children?: string;
  color?: "primary" |"secondary"; 
  onPress?: () => void;
  onLongPress?: () => void;
}


const CustomButton =({ children, color="primary", onPress, onLongPress }: Props) => {
  const btnColor={
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  }[color];

  return (
    <Pressable
      className={`p-3 rounded-md m-4 ${btnColor} active:opacity-90`}
      onPress={onPress}
      onLongPress={onLongPress}
      >
      <Text className='text-white text-center'>{children}</Text>
    </Pressable>


  );
}

// const CustomButton = React.forwardRef(
//   ({ children, color="primary", onPress, onLongPress }: Props, 
//     ref: React.Ref<View>) => {
//   const btnColor={
//     primary: "bg-primary",
//     secondary: "bg-secondary",
//     tertiary: "bg-tertiary",
//   }[color];

//   return (
//     <Pressable
//       className={`p-3 rounded-md m-4 ${btnColor} active:opacity-90`}
//       onPress={onPress}
//       onLongPress={onLongPress}
//       ref={ref}
//       >
//       <Text className='text-white text-center'>{children}</Text>
//     </Pressable>


//   );
// })

export default CustomButton;


